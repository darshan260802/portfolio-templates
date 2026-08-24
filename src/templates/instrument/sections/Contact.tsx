import { Fragment } from "react";
import type { Profile, Social } from "../../../schema.js";
import { SectionHead } from "./SectionHead.js";

/** See aurora's Footer for why every template derives this rather than storing it. */
function telHref(phone: string): string {
	return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

const SOCIAL_LABEL: Record<Social["platform"], string> = {
	github: "GitHub",
	linkedin: "LinkedIn",
	twitter: "X",
	bluesky: "Bluesky",
	dribbble: "Dribbble",
	behance: "Behance",
	youtube: "YouTube",
	website: "Website",
	other: "Link",
};

/**
 * At this size an email is wider than the column, and letting it break
 * anywhere lands mid-word ("…@gm / ail.com"). Offering explicit break
 * opportunities at the address's own separators means it wraps where a
 * reader expects — after the @, after a dot — and nowhere else.
 */
function breakable(email: string) {
	return email.split(/(?<=[@.])/).map((part, i) => (
		<Fragment key={`${part}-${i}`}>
			{part}
			<wbr />
		</Fragment>
	));
}

export function Contact({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const year = new Date().getFullYear();

	return (
		<footer className="ins-contact">
			<div className="ins-shell">
				<SectionHead id="contact" label="Contact" readout={profile.location ?? "Open to work"} />

				{profile.email && (
					<a className="ins-contact__cta" href={`mailto:${profile.email}`}>
						{/* The shine is painted through the glyphs via background-clip,
						    so the span carries no color of its own. Anything that
						    doesn't support it falls back to the signal color set on
						    the anchor. */}
						<span className="ins-contact__shine">{breakable(profile.email)}</span>
					</a>
				)}

				{profile.phone && (
					<a className="ins-contact__phone" href={telHref(profile.phone)}>
						{profile.phone}
					</a>
				)}

				{((socials && socials.length > 0) || profile.resumeUrl) && (
					<nav className="ins-contact__links" aria-label="Elsewhere">
						{socials?.map((social) => (
							<a key={social.platform + social.url} href={social.url} target="_blank" rel="noreferrer noopener">
								{social.label ?? SOCIAL_LABEL[social.platform]} ↗
							</a>
						))}
						{profile.resumeUrl && (
							<a href={profile.resumeUrl} target="_blank" rel="noreferrer noopener">
								Résumé ↗
							</a>
						)}
					</nav>
				)}

				<div className="ins-contact__meta">
					<span>
						{profile.fullName || "Your Name"}
						{profile.headline ? ` — ${profile.headline}` : ""}
					</span>
					<span>© {year}</span>
				</div>
			</div>
		</footer>
	);
}
