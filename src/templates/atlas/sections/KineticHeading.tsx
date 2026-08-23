import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * The kinetic type moment used for every section title: the heading wipes
 * into view as its section is approached, rather than just fading. The
 * "from" state (clipped, shifted right) lives in CSS so there's no flash
 * of fully-revealed text before the effect attaches.
 */
export function KineticHeading({ number, title }: { number: string; title: string }) {
	const ref = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
			gsap.to(ref.current!.querySelector(".atlas-heading__title-inner"), {
				clipPath: "inset(0 0% 0 0)",
				x: 0,
				duration: 0.9,
				ease: "power4.out",
				scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
			});
		},
		{ scope: ref },
	);

	return (
		<div ref={ref} className="atlas-heading">
			<span className="atlas-heading__number">{number}</span>
			<h2 className="atlas-heading__title">
				<span className="atlas-heading__title-inner">{title}</span>
			</h2>
		</div>
	);
}
