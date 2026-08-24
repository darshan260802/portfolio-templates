import type { Profile, Social } from "../../../schema.js";

/** See aurora's Footer for why every template derives this rather than storing it. */
function telHref(phone: string): string {
	return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function Footer({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const year = new Date().getFullYear();

	return (
		<footer className="prism-section prism-footer">
			<div className="prism-card prism-footer__card">
				{profile.email && (
					<a className="prism-footer__cta" href={`mailto:${profile.email}`}>
						Say hello ↗
					</a>
				)}
				{profile.phone && (
					<a className="prism-footer__phone" href={telHref(profile.phone)}>
						{profile.phone}
					</a>
				)}
				{socials && socials.length > 0 && (
					<nav className="prism-footer__socials" aria-label="Social links">
						{socials.map((s) => (
							<a key={s.platform + s.url} href={s.url} target="_blank" rel="noreferrer noopener" className="prism-chip">
								{s.label ?? s.platform}
							</a>
						))}
					</nav>
				)}
				<p className="prism-footer__copy">
					© {year} {profile.fullName || "Your Name"}
				</p>
			</div>
		</footer>
	);
}
