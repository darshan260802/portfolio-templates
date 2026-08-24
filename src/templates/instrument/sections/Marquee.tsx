import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "motion/react";

/**
 * The stack ticker. It drifts at a constant base speed, but scroll
 * velocity both accelerates it and flips its direction — scrolling down
 * drags the band one way, scrolling up drags it back. That coupling is
 * what makes the page feel like a machine responding to input rather than
 * a loop playing on its own.
 *
 * The track holds `COPIES` copies of the same string and wraps by exactly
 * one copy's width, so the seam is never visible.
 */
const COPIES = 4;

export function Marquee({ terms }: { terms: string[] }) {
	const copyRef = useRef<HTMLSpanElement>(null);
	const baseX = useMotionValue(0);

	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

	const x = useTransform(baseX, (value) => {
		const width = copyRef.current?.offsetWidth ?? 0;
		if (width === 0) return "0px";
		// Wrap into [-width, 0): one whole copy, so the next one has already
		// taken its place by the time this one leaves.
		return `${((((value + width) % width) + width) % width) - width}px`;
	});

	const direction = useRef(1);
	useAnimationFrame((_time, delta) => {
		const factor = velocityFactor.get();
		if (factor < 0) direction.current = -1;
		else if (factor > 0) direction.current = 1;

		let moveBy = direction.current * 40 * (delta / 1000);
		moveBy += direction.current * moveBy * factor;
		baseX.set(baseX.get() + moveBy);
	});

	const row = terms.map((term) => `${term} —`).join(" ");

	return (
		<section className="ins-marquee" aria-label="Stack">
			<motion.div className="ins-marquee__track" style={{ x }}>
				{Array.from({ length: COPIES }, (_, i) => (
					<span key={i} className="ins-marquee__copy" ref={i === 0 ? copyRef : undefined} aria-hidden={i > 0}>
						{row}&nbsp;
					</span>
				))}
			</motion.div>
		</section>
	);
}
