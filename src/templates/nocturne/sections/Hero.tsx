import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Profile, Social } from "../../../schema.js";
import { resumeDownload } from "../../../uploads.js";

const SOCIAL_LABEL: Record<Social["platform"], string> = {
	github: "GitHub",
	linkedin: "LinkedIn",
	twitter: "X",
	bluesky: "Bluesky",
	dribbble: "Dribbble",
	behance: "Behance",
	youtube: "YouTube",
	website: "Site",
	other: "Link",
};

/**
 * The entrance sequence's "from" states (clipped name, faded meta) live in
 * styles.css as plain defaults — applied on first paint, before any JS runs
 * — so there's never a flash of fully-visible content that then jumps back
 * to hidden. This effect only ever animates FORWARD to the visible state
 * (or jumps there instantly for reduced-motion).
 *
 * headline/bio/meta ALWAYS render (never conditionally mounted) — this is
 * load-bearing, not stylistic. useGSAP's `.to(".nocturne-hero__fade-in", …)`
 * resolves that selector once, at mount, against whatever DOM exists right
 * then. The live wizard preview mounts this component with empty data
 * (before the parent's first postMessage arrives) and fills it in shortly
 * after via a prop update, without remounting Hero. A conditionally-
 * rendered `{profile.headline && <p .../>}` wouldn't exist yet at that
 * first mount, so GSAP would never bind it — the element would render once
 * real data arrived, but permanently stuck at the CSS default opacity: 0,
 * since nothing ever tweened it forward. Rendering unconditionally and
 * hiding empty ones via CSS `:empty` keeps the element in the DOM (and
 * therefore in GSAP's target list) from the very first mount.
 *
 * bio is rich text (an HTML string, sanitized server-side) — rendered via
 * dangerouslySetInnerHTML rather than the shared RichText component,
 * specifically because RichText returns null when empty, which would
 * reintroduce the exact bug above (no element to bind at mount). An empty
 * dangerouslySetInnerHTML still renders a genuinely empty <p></p>, so
 * `:empty` in styles.css still hides it correctly.
 */
export function Hero({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const ref = useRef<HTMLElement>(null);
	const resume = resumeDownload(profile);

	useGSAP(
		() => {
			const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

			if (reduced) {
				tl.set([".nocturne-hero__eyebrow", ".nocturne-hero__fade-in"], { opacity: 1, y: 0 })
					.set(".nocturne-hero__name-inner", { clipPath: "inset(0 0 0% 0)" })
					.set(".nocturne-hero__rule", { scaleX: 1 });
				return;
			}

			tl.to(".nocturne-hero__eyebrow", { opacity: 1, duration: 0.5 }, 0.1)
				.to(".nocturne-hero__name-inner", { clipPath: "inset(0 0 0% 0)", duration: 1.1 }, 0.25)
				.to(".nocturne-hero__fade-in", { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.7)
				.to(".nocturne-hero__rule", { scaleX: 1, duration: 0.9 }, 0.9);
		},
		{ scope: ref },
	);

	return (
		<header ref={ref} className="nocturne-hero">
			{/* Not a __fade-in target: those are bound once by selector at mount,
			    and this is conditionally mounted (see the note above). It gets a
			    plain CSS entrance instead, which replays on insertion. */}
			{profile.avatarUrl && (
				<img className="nocturne-hero__portrait" src={profile.avatarUrl} alt={profile.fullName} />
			)}
			<span className="nocturne-hero__eyebrow nocturne-eyebrow">Portfolio</span>
			<h1 className="nocturne-hero__name">
				<span className="nocturne-hero__name-inner">{profile.fullName || "Your Name"}</span>
			</h1>
			<div className="nocturne-hero__rule" aria-hidden="true" />
			<p className="nocturne-hero__headline nocturne-hero__fade-in">{profile.headline || null}</p>
			<p
				className="nocturne-hero__bio nocturne-hero__fade-in"
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: profile.bio ?? "" }}
			/>
			<div className="nocturne-hero__meta nocturne-hero__fade-in">
				{profile.location && <span>{profile.location}</span>}
				{socials && socials.length > 0 && (
					<nav className="nocturne-hero__socials" aria-label="Social links">
						{socials.map((s) => (
							<a key={s.platform + s.url} href={s.url} target="_blank" rel="noreferrer noopener">
								{s.label ?? SOCIAL_LABEL[s.platform]}
							</a>
						))}
					</nav>
				)}
				{resume && (
					<a
						className="nocturne-hero__resume"
						href={resume.href}
						download={resume.download}
						target="_blank"
						rel="noreferrer noopener"
					>
						Résumé{resume.format ? ` — ${resume.format}` : ""} ↓
					</a>
				)}
			</div>
		</header>
	);
}
