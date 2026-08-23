import { z } from "zod";
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
function orEmpty(schema) {
    return z
        .union([z.literal(""), schema])
        .transform((v) => (v === "" ? undefined : v))
        .optional();
}
const urlOrEmpty = orEmpty(z.string().url("Enter a valid URL, like https://example.com"));
const emailOrEmpty = orEmpty(z.string().email("Enter a valid email address, like name@example.com"));
const dateOrEmpty = orEmpty(z.string().regex(/^\d{4}-\d{2}$/, "Use the format YYYY-MM, like 2024-06"));
const hexColorOrEmpty = orEmpty(z.string().regex(/^#[0-9a-fA-F]{6}$/, "Expected a hex color like #aa3bff"));
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
    bio: z.string().max(2000).optional(),
    location: z.string().max(120).optional(),
    email: emailOrEmpty,
    avatarUrl: urlOrEmpty,
    resumeUrl: urlOrEmpty,
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
    summary: z.string().max(2000).optional(),
    highlights: z.array(z.string().max(400)).max(20).optional(),
});
const projectSchema = z.object({
    id: z.string(),
    title: z.string().min(1).max(160),
    description: z.string().max(2000).optional(),
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
/** A minimal, valid PortfolioData used for empty states and template previews. */
export const emptyPortfolioData = {
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
];
