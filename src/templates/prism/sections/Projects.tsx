import { motion } from "motion/react";
import type { Project } from "../../../schema.js";
import { RichText } from "../../../rich-text.js";
import { cn } from "./cn.js";

export function ProjectsSection({ projects }: { projects: Project[] }) {
	return (
		<section className="prism-section" id="projects">
			<h2 className="prism-section__title">Projects</h2>
			<div className="prism-bento">
				{projects.map((project, i) => (
					<motion.article
						key={project.id}
						className={cn("prism-card", "prism-project-card", project.featured && "prism-project-card--featured")}
						initial={{ opacity: 0, scale: 0.92 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: "easeOut" }}
						whileHover={{ rotateX: -2, rotateY: 3, scale: 1.015 }}
						style={{ transformPerspective: 800 }}
					>
						{project.imageUrl && (
							<div className="prism-project-card__media">
								<img src={project.imageUrl} alt={project.title} loading="lazy" />
							</div>
						)}
						<div className="prism-project-card__body">
							<h3 className="prism-project-card__title">{project.title}</h3>
							<RichText html={project.description} className="prism-project-card__description" />
							{project.tags && project.tags.length > 0 && (
								<div className="prism-project-card__tags">
									{project.tags.map((tag, ti) => (
										<span key={tag} className="prism-chip" data-tone={ti % 3}>
											{tag}
										</span>
									))}
								</div>
							)}
							<div className="prism-project-card__links">
								{project.liveUrl && (
									<a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
										Live ↗
									</a>
								)}
								{project.repoUrl && (
									<a href={project.repoUrl} target="_blank" rel="noreferrer noopener">
										Source ↗
									</a>
								)}
							</div>
						</div>
					</motion.article>
				))}
			</div>
		</section>
	);
}
