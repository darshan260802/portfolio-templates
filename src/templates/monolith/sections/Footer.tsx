import type { Profile, Social } from "../../../schema.js";

/** See aurora's Footer for why every template derives this rather than storing it. */
function telHref(phone: string): string {
	return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function Footer({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const year = new Date().getFullYear();

	return (
		<footer className="monolith-footer">
			<div className="monolith-footer__row">
				{profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}
				{profile.phone && <a href={telHref(profile.phone)}>{profile.phone}</a>}
				{socials?.map((s) => (
					<a key={s.platform + s.url} href={s.url} target="_blank" rel="noreferrer noopener">
						{s.label ?? s.platform}
					</a>
				))}
				<span>
					© {year} {profile.fullName || "Your Name"}
				</span>
			</div>
		</footer>
	);
}
