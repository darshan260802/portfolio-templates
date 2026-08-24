import type { Profile, Social } from "../../../schema.js";

/**
 * A `tel:` href wants only digits and an optional leading "+" — the schema
 * deliberately keeps whatever separators the user typed (spaces, dots,
 * parens) because that's what gets *displayed*, so every template strips
 * them here rather than storing a second, normalized copy.
 */
function telHref(phone: string): string {
	return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function Footer({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const year = new Date().getFullYear();

	return (
		<footer className="aurora-footer">
			{profile.email && (
				<a className="aurora-footer__email" href={`mailto:${profile.email}`}>
					{profile.email}
				</a>
			)}
			{profile.phone && (
				<a className="aurora-footer__phone" href={telHref(profile.phone)}>
					{profile.phone}
				</a>
			)}
			{socials && socials.length > 0 && (
				<nav className="aurora-footer__socials" aria-label="Social links">
					{socials.map((s) => (
						<a key={s.platform + s.url} href={s.url} target="_blank" rel="noreferrer noopener">
							{s.label ?? s.platform}
						</a>
					))}
				</nav>
			)}
			<p className="aurora-footer__copy">
				© {year} {profile.fullName || "Your Name"}
			</p>
		</footer>
	);
}
