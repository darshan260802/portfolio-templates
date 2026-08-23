import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Profile, Social } from "../../../schema.js";

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
 * role/bio ALWAYS render (never conditionally mounted) — load-bearing, not
 * stylistic. useGSAP's `.to(".atlas-hero__reveal", …)` resolves that
 * selector once, at mount, against whatever DOM exists right then. The
 * live wizard preview mounts this component with empty data before the
 * parent's first postMessage arrives, then fills it in via a prop update
 * without remounting Hero — a conditionally-rendered element wouldn't
 * exist at that first mount, so GSAP would never bind it, leaving it stuck
 * at the CSS default opacity: 0 forever once real data does arrive.
 * Rendering unconditionally and hiding empty ones via CSS `:empty` keeps
 * the element in GSAP's target list from the very first mount.
 */
export function Hero({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const ref = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			if (reduced) {
				gsap.set([".atlas-hero__eyebrow", ".atlas-hero__name-inner", ".atlas-hero__reveal"], {
					clipPath: "inset(0 0 0 0)",
					x: 0,
					y: 0,
					opacity: 1,
				});
				return;
			}
			const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
			tl.to(".atlas-hero__eyebrow", { opacity: 1, y: 0, duration: 0.4 }, 0)
				.to(".atlas-hero__name-inner", { clipPath: "inset(0 0% 0 0)", duration: 0.9 }, 0.15)
				.to(".atlas-hero__reveal", { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, 0.6);
		},
		{ scope: ref },
	);

	return (
		<header ref={ref} className="atlas-hero">
			<span className="atlas-hero__eyebrow">Portfolio — 01</span>
			<h1 className="atlas-hero__name">
				<span className="atlas-hero__name-inner">{profile.fullName || "Your Name"}</span>
			</h1>
			<span className="atlas-hero__role atlas-hero__reveal">{profile.headline || null}</span>
			<div className="atlas-hero__grid">
				<p className="atlas-hero__bio atlas-hero__reveal">{profile.bio || null}</p>
				<div className="atlas-hero__meta atlas-hero__reveal">
					{profile.location && <span>{profile.location}</span>}
					{socials && socials.length > 0 && (
						<nav className="atlas-hero__socials" aria-label="Social links">
							{socials.map((s) => (
								<a key={s.platform + s.url} href={s.url} target="_blank" rel="noreferrer noopener">
									{s.label ?? SOCIAL_LABEL[s.platform]}
								</a>
							))}
						</nav>
					)}
				</div>
			</div>
		</header>
	);
}
