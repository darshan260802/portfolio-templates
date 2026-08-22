import { motion } from "motion/react";

/** The slow-moving multi-color mesh — Prism's signature, glimpsed through
 * every translucent glass card on the page. Fixed behind everything. */
export function Background() {
	return (
		<div className="prism-bg" aria-hidden="true">
			<motion.div
				className="prism-bg__blob prism-bg__blob--1"
				animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
				transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="prism-bg__blob prism-bg__blob--2"
				animate={{ x: [0, -25, 15, 0], y: [0, 20, -25, 0] }}
				transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="prism-bg__blob prism-bg__blob--3"
				animate={{ x: [0, 20, -30, 0], y: [0, -15, 10, 0] }}
				transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
			/>
		</div>
	);
}
