import { motion } from "motion/react";

export function SectionHeading({ index, title }: { index: number; title: string }) {
	return (
		<div className="monolith-heading">
			<motion.div
				className="monolith-heading__rule"
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, ease: "easeInOut" }}
			/>
			<span className="monolith-heading__number">{String(index).padStart(2, "0")}</span>
			<h2 className="monolith-heading__title">{title}</h2>
		</div>
	);
}
