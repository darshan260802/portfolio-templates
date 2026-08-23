import type { Profile, Social } from "../../../schema.js";

export function Footer({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const year = new Date().getFullYear();

	return (
		<footer className="nocturne-footer">
			{profile.email && (
				<a className="nocturne-footer__cta" href={`mailto:${profile.email}`}>
					Get in touch
				</a>
			)}
			{socials && socials.length > 0 && (
				<nav className="nocturne-footer__socials" aria-label="Social links">
					{socials.map((s) => (
						<a key={s.platform + s.url} href={s.url} target="_blank" rel="noreferrer noopener">
							{s.label ?? s.platform}
						</a>
					))}
				</nav>
			)}
			<p className="nocturne-footer__copy">
				© {year} {profile.fullName || "Your Name"}
			</p>
		</footer>
	);
}
