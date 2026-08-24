import type { Profile, Social } from "../../../schema.js";

/** See aurora's Footer for why every template derives this rather than storing it. */
function telHref(phone: string): string {
	return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function Footer({
	profile,
	socials,
	index,
}: {
	profile: Profile;
	socials?: Social[];
	index: number;
}) {
	const year = new Date().getFullYear();

	return (
		<footer className="atlas-footer">
			<span className="atlas-hero__eyebrow" style={{ opacity: 1 }}>
				Contact — {String(index).padStart(2, "0")}
			</span>
			{profile.email && (
				<a className="atlas-footer__cta" href={`mailto:${profile.email}`}>
					{profile.email}
				</a>
			)}
			{profile.phone && (
				<a className="atlas-footer__phone" href={telHref(profile.phone)}>
					{profile.phone}
				</a>
			)}
			<div className="atlas-footer__row">
				{socials && socials.length > 0 && (
					<nav className="atlas-footer__socials" aria-label="Social links">
						{socials.map((s) => (
							<a key={s.platform + s.url} href={s.url} target="_blank" rel="noreferrer noopener">
								{s.label ?? s.platform}
							</a>
						))}
					</nav>
				)}
				<p className="atlas-footer__copy">
					© {year} {profile.fullName || "Your Name"}
				</p>
			</div>
		</footer>
	);
}
