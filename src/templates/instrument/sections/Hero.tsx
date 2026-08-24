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

interface ReadoutItem {
	label: string;
	value: string;
}

/**
 * The wall-sized name plate. Each word is its own line and each character
 * its own inline-block, so the intro can lift them in on a stagger — the
 * `wdth` axis of Archivo is doing the real work here, which is why the
 * font-variation-settings live in CSS rather than being faked with a
 * transform.
 *
 * Characters are split in the markup rather than by a GSAP plugin: the
 * text-splitting plugin is a paid GSAP add-on, and this template ships
 * only what the scaffold's dependencies already provide.
 *
 * The intro is keyed to the name and the readout's length, and reverts on
 * update. That is load-bearing, not tidiness: the wizard's live preview
 * mounts this component with EMPTY data and then fills it in via a prop
 * update, without remounting. Every character is a fresh element when the
 * name changes, and the readout doesn't exist at all until there's
 * something to put in it — so a one-time selector bind at mount would
 * animate the placeholder's characters and leave the real ones sitting at
 * their CSS `opacity: 0` forever.
 */
export function Hero({ profile, socials }: { profile: Profile; socials?: Social[] }) {
	const ref = useRef<HTMLElement>(null);
	const words = (profile.fullName || "Your Name").toUpperCase().split(/\s+/).filter(Boolean);

	const readout: ReadoutItem[] = [];
	if (profile.location) readout.push({ label: "Based", value: profile.location });
	if (profile.email) readout.push({ label: "Mail", value: profile.email });
	if (profile.phone) readout.push({ label: "Tel", value: profile.phone });
	for (const social of socials ?? []) {
		readout.push({ label: social.label ?? SOCIAL_LABEL[social.platform], value: hostOf(social.url) });
	}

	useGSAP(
		() => {
			const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			if (reduced) {
				gsap.set([".ins-hero__char", ".ins-hero__reveal"], { opacity: 1, y: 0 });
				return;
			}
			gsap
				.timeline({ defaults: { ease: "power3.out" } })
				.to(".ins-hero__char", { opacity: 1, y: 0, duration: 0.9, stagger: 0.03 }, 0)
				.to(".ins-hero__reveal", { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, 0.5);
		},
		{ scope: ref, dependencies: [profile.fullName, readout.length], revertOnUpdate: true },
	);

	return (
		<section ref={ref} id="top" className="ins-hero">
			<div className="ins-hero__field" aria-hidden />
			<div className="ins-hero__sweep" aria-hidden />
			<div className="ins-hero__fade" aria-hidden />

			<div className="ins-hero__body">
				<h1 className="ins-hero__name">
					{words.map((word, w) => (
						<span key={`${word}-${w}`} className="ins-hero__word">
							{[...word].map((char, c) => (
								<span key={`${char}-${c}`} className="ins-hero__char">
									{char}
								</span>
							))}
						</span>
					))}
				</h1>

				{/* Always rendered, never conditionally mounted: useGSAP resolves
				    ".ins-hero__reveal" once at mount, and the wizard's live preview
				    mounts this with empty data before the first postMessage lands.
				    An element that doesn't exist at that moment would never be bound
				    and would stay at the CSS default opacity: 0 forever. `:empty`
				    hides the ones with nothing in them instead. */}
				<p className="ins-hero__role ins-hero__reveal">
					{profile.headline ? (
						<>
							{profile.headline}
							{profile.location && (
								<>
									{" "}
									<span className="ins-hero__sep">·</span> {profile.location}
								</>
							)}
						</>
					) : null}
				</p>

				<dl className="ins-hero__readout ins-hero__reveal">
					{readout.map((item) => (
						<div key={item.label + item.value}>
							<dt>{item.label}</dt>
							<dd>{item.value}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}

/** Socials read as instrument values here, so show the host, not the full URL. */
function hostOf(url: string): string {
	try {
		return new URL(url).host.replace(/^www\./, "");
	} catch {
		return url;
	}
}
