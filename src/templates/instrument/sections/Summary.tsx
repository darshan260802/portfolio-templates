import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Education, Profile } from "../../../schema.js";
import { SectionHead } from "./SectionHead.js";

/**
 * The bio, read one word at a time as the section scrolls past: every word
 * starts nearly transparent and blurred and resolves in sequence, scrubbed
 * to scroll rather than played on a timer.
 *
 * The words have to be wrapped in the DOM after render, not in the data.
 * `profile.bio` is sanitized rich text (p/strong/em/a/ul/ol/li), so
 * splitting the HTML string on spaces would shred its tags — instead this
 * walks the rendered subtree's TEXT nodes only and replaces each with a
 * run of per-word spans, which leaves the markup structure (and any links
 * or emphasis inside it) completely intact.
 */
function wrapWords(root: HTMLElement): HTMLElement[] {
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
	const textNodes: Text[] = [];
	let node = walker.nextNode();
	while (node) {
		if (node.textContent && node.textContent.trim() !== "") textNodes.push(node as Text);
		node = walker.nextNode();
	}

	const words: HTMLElement[] = [];
	for (const textNode of textNodes) {
		const fragment = document.createDocumentFragment();
		// Split on whitespace but KEEP it: the separators are what hold the
		// line breaks and word gaps once every word becomes an inline-block.
		for (const part of textNode.textContent!.split(/(\s+)/)) {
			if (part === "") continue;
			if (/^\s+$/.test(part)) {
				fragment.appendChild(document.createTextNode(part));
				continue;
			}
			const span = document.createElement("span");
			span.className = "ins-word";
			span.textContent = part;
			fragment.appendChild(span);
			words.push(span);
		}
		textNode.replaceWith(fragment);
	}
	return words;
}

export function Summary({ profile, education }: { profile: Profile; education?: Education[] }) {
	const sectionRef = useRef<HTMLElement>(null);
	const proseRef = useRef<HTMLDivElement>(null);
	const wordsRef = useRef<HTMLElement[]>([]);

	// Before paint, so no one sees the un-split (fully opaque) copy first.
	// Re-runs whenever the bio changes, which is every keystroke in the
	// wizard's live preview — dangerouslySetInnerHTML replaces the whole
	// subtree on each of those, discarding the previous spans with it.
	useLayoutEffect(() => {
		const el = proseRef.current;
		if (!el) return;
		el.innerHTML = profile.bio ?? "";
		wordsRef.current = wrapWords(el);
	}, [profile.bio]);

	useGSAP(
		() => {
			const words = wordsRef.current;
			if (words.length === 0) return;
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				gsap.set(words, { opacity: 1, filter: "blur(0px)" });
				return;
			}

			const tween = gsap.fromTo(
				words,
				{ opacity: 0.08, filter: "blur(3px)" },
				{
					opacity: 1,
					filter: "blur(0px)",
					ease: "none",
					stagger: 0.4,
					scrollTrigger: {
						trigger: proseRef.current,
						start: "top 85%",
						end: "bottom 55%",
						scrub: 0.6,
					},
				},
			);

			return () => {
				tween.scrollTrigger?.kill();
				tween.kill();
			};
		},
		{ scope: sectionRef, dependencies: [profile.bio] },
	);

	// Only the most recent qualification — this panel is a spec plate, not a
	// second timeline; Track Record already carries the long form.
	const latest = education?.[0];

	return (
		<section ref={sectionRef} className="ins-shell">
			<SectionHead id="summary" label="Summary" readout={profile.headline ? profile.headline : "Profile"} />

			<div className="ins-summary">
				<div ref={proseRef} className="ins-summary__prose" />

				{latest && (
					<dl className="ins-summary__facts">
						{(latest.degree || latest.fieldOfStudy) && (
							<div>
								<dt>Education</dt>
								<dd>{[latest.degree, latest.fieldOfStudy].filter(Boolean).join(", ")}</dd>
							</div>
						)}
						<div>
							<dt>School</dt>
							<dd>{latest.institution}</dd>
						</div>
						{latest.range && (
							<div>
								<dt>Graduated</dt>
								<dd>{latest.range.current ? "Present" : (latest.range.end ?? latest.range.start)}</dd>
							</div>
						)}
						{latest.summary && (
							<div>
								<dt>Note</dt>
								<dd>{latest.summary}</dd>
							</div>
						)}
					</dl>
				)}
			</div>
		</section>
	);
}
