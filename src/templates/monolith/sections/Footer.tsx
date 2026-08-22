import type { Profile, Social } from "../../../schema.js";

export function Footer({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const year = new Date().getFullYear();

	return (
		<footer className="monolith-footer">
			<div className="monolith-footer__row">
				{profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}
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
