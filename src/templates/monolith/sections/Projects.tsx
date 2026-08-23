import { motion } from "motion/react";
import type { Project } from "../../../schema.js";
import { RichText } from "../../../rich-text.js";
import { SectionHeading } from "./SectionHeading.js";

const arrowVariants = {
	rest: { opacity: 0, x: -6 },
	hover: { opacity: 1, x: 0 },
};

export function ProjectsSection({ projects, index }: { projects: Project[]; index: number }) {
	return (
		<section className="monolith-section" id="projects">
			<SectionHeading index={index} title="Projects" />
			<ul className="monolith-index">
				{projects.map((project) => (
					<motion.li
						key={project.id}
						className="monolith-index__row"
						initial="rest"
						whileHover="hover"
						animate="rest"
					>
						{project.imageUrl && (
							<img
								className="monolith-index__thumb"
								src={project.imageUrl}
								alt=""
								loading="lazy"
							/>
						)}
						<div className="monolith-index__body">
							<div className="monolith-index__heading">
								<h3 className="monolith-index__title">{project.title}</h3>
								<motion.span className="monolith-index__arrow" variants={arrowVariants} aria-hidden="true">
									→
								</motion.span>
							</div>
							<RichText html={project.description} className="monolith-index__description" />
							<div className="monolith-index__meta">
								{project.tags && project.tags.length > 0 && (
									<span className="monolith-index__tags">{project.tags.join(" · ")}</span>
								)}
								{project.liveUrl && (
									<a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
										Live
									</a>
								)}
								{project.repoUrl && (
									<a href={project.repoUrl} target="_blank" rel="noreferrer noopener">
										Source
									</a>
								)}
							</div>
						</div>
					</motion.li>
				))}
			</ul>
		</section>
	);
}
