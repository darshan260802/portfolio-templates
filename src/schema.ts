import { z } from "zod";
import { RESUME_RULES, uploadExtensions, uploadFormatList } from "./uploads.js";

/**
 * PortfolioData is the single source of truth for what a portfolio can contain.
 * It is consumed by:
 *  - the web app's wizard (form validation)
 *  - the API (request validation before persisting/building)
 *  - every template component (as its `data` prop)
 *
 * Every section except `profile.fullName` is optional — a template renders
 * whatever sections it supports and simply skips what's missing. Adding a
 * field here is additive and safe; removing or renaming one is a breaking
 * change for every template and must be reviewed as such.
 */

/**
 * Wraps a string schema with a format constraint (url/email/regex) so an
 * empty string is treated as "not provided" — transformed to undefined —
 * rather than failing that schema's own format check. Plain `.optional()`
 * only exempts `undefined`; a controlled <input> that the user has cleared
 * sends "", which is a defined value, so without this every optional
 * format-validated field would reject "cleared the field back to empty"
 * identically to "typed something invalid", permanently blocking the
 * wizard from advancing.
 */
function orEmpty<Schema extends z.ZodTypeAny>(schema: Schema) {
	return z
		.union([z.literal(""), schema])
		.transform((v) => (v === "" ? undefined : v))
		.optional();
}

const urlOrEmpty = orEmpty(z.string().url("Enter a valid URL, like https://example.com"));
const emailOrEmpty = orEmpty(z.string().email("Enter a valid email address, like name@example.com"));
const dateOrEmpty = orEmpty(z.string().regex(/^\d{4}-\d{2}$/, "Use the format YYYY-MM, like 2024-06"));
const hexColorOrEmpty = orEmpty(z.string().regex(/^#[0-9a-fA-F]{6}$/, "Expected a hex color like #aa3bff"));

/**
 * Deliberately permissive: phone numbers are display strings here, not
 * dialable identifiers we parse. The lookahead enforces 6–15 actual digits
 * (E.164's ceiling) while the character class allows the separators people
 * really type — spaces, dots, dashes, parentheses — and an optional leading
 * "+" for a country code. Templates render this verbatim and derive the
 * `tel:` href by stripping everything but digits and that "+".
 */
const phoneOrEmpty = orEmpty(
	z
		.string()
		.regex(
			/^(?=(?:\D*\d){6,15}\D*$)\+?[\d\s().-]{5,23}$/,
			"Enter a valid phone number, like +1 555 123 4567",
		),
);

/**
 * A résumé's original filename, kept for the download name only — never used
 * to locate the file, which is why a bare name (no path separators) with one
 * of the allowed extensions is all this has to accept. The extension is what
 * tells a template which format to advertise, so it is required here even
 * though the browser would happily download an extensionless file.
 */
const resumeFilenameOrEmpty = orEmpty(
	z
		.string()
		.max(120)
		.regex(
			new RegExp(`^[^/\\\\]+\\.(?:${uploadExtensions(RESUME_RULES).join("|")})$`, "i"),
			`A résumé must be a ${uploadFormatList(RESUME_RULES)} file`,
		),
);

const socialSchema = z.object({
	platform: z.enum([
		"github",
		"linkedin",
		"twitter",
		"bluesky",
		"dribbble",
		"behance",
		"youtube",
		"website",
		"other",
	]),
	url: z.string().url(),
	label: z.string().max(40).optional(),
});

const profileSchema = z.object({
	fullName: z.string().min(1, "Full name is required").max(120),
	headline: z.string().max(160).optional(),
	// Rich text (HTML string from the wizard's editor — bold/italic/links/
	// lists only, sanitized server-side before storage). The cap allows for
	// markup overhead on top of the ~2000 chars of actual copy this is
	// meant for.
	bio: z.string().max(4000).optional(),
	location: z.string().max(120).optional(),
	email: emailOrEmpty,
	phone: phoneOrEmpty,
	avatarUrl: urlOrEmpty,
	// The résumé a visitor downloads. `resumeUrl` is where the file lives
	// (Supabase Storage while editing; rewritten to a local /assets/ path by
	// the API's localizeAssets for an exported or hosted build).
	// `resumeFilename` is the name the file arrived with, carried separately
	// because the stored object is named by a UUID — without it every visitor
	// would save "a3f1…-9c2.pdf". Templates pass it to the anchor's `download`
	// attribute; see resume.ts for why that only bites same-origin.
	resumeUrl: urlOrEmpty,
	resumeFilename: resumeFilenameOrEmpty,
});

const dateRangeSchema = z.object({
	// ISO "YYYY-MM" — kept as a plain string so partial dates ("2023-06") are valid.
	start: z.string().regex(/^\d{4}-\d{2}$/, "Use the format YYYY-MM, like 2024-06"),
	end: dateOrEmpty,
	current: z.boolean().optional(),
});

const experienceSchema = z.object({
	id: z.string(),
	role: z.string().min(1).max(160),
	company: z.string().min(1).max(160),
	companyUrl: urlOrEmpty,
	location: z.string().max(120).optional(),
	range: dateRangeSchema,
	// Rich text — see profileSchema.bio's comment.
	summary: z.string().max(4000).optional(),
	highlights: z.array(z.string().max(400)).max(20).optional(),
});

const projectSchema = z.object({
	id: z.string(),
	title: z.string().min(1).max(160),
	// Rich text — see profileSchema.bio's comment.
	description: z.string().max(4000).optional(),
	imageUrl: urlOrEmpty,
	liveUrl: urlOrEmpty,
	repoUrl: urlOrEmpty,
	tags: z.array(z.string().max(40)).max(15).optional(),
	featured: z.boolean().optional(),
});

const skillSchema = z.object({
	id: z.string(),
	name: z.string().min(1).max(60),
	category: z.string().max(60).optional(),
	level: z.enum(["beginner", "intermediate", "advanced", "expert"]).optional(),
});

const educationSchema = z.object({
	id: z.string(),
	institution: z.string().min(1).max(160),
	degree: z.string().max(160).optional(),
	fieldOfStudy: z.string().max(160).optional(),
	range: dateRangeSchema.optional(),
	summary: z.string().max(1000).optional(),
});

const themeSchema = z.object({
	accentColor: hexColorOrEmpty,
	mode: z.enum(["light", "dark", "system"]).optional(),
});

const seoSchema = z.object({
	title: z.string().max(70).optional(),
	description: z.string().max(200).optional(),
	ogImageUrl: urlOrEmpty,
});

export const portfolioDataSchema = z.object({
	profile: profileSchema,
	socials: z.array(socialSchema).max(10).optional(),
	experience: z.array(experienceSchema).max(30).optional(),
	projects: z.array(projectSchema).max(30).optional(),
	skills: z.array(skillSchema).max(60).optional(),
	education: z.array(educationSchema).max(10).optional(),
	theme: themeSchema.optional(),
	seo: seoSchema.optional(),
});

export type PortfolioData = z.infer<typeof portfolioDataSchema>;
export type Profile = z.infer<typeof profileSchema>;
export type Social = z.infer<typeof socialSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Theme = z.infer<typeof themeSchema>;
export type Seo = z.infer<typeof seoSchema>;

/** A minimal, valid PortfolioData used for empty states and template previews. */
export const emptyPortfolioData: PortfolioData = {
	profile: { fullName: "" },
};

/** Section keys a template can declare support for via its manifest. */
export const PORTFOLIO_SECTIONS = [
	"profile",
	"socials",
	"experience",
	"projects",
	"skills",
	"education",
] as const;

export type PortfolioSection = (typeof PORTFOLIO_SECTIONS)[number];
