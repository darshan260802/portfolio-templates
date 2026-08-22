import { motion } from "motion/react";
import type { Project } from "../../../schema.js";

export function ProjectsSection({ projects }: { projects: Project[] }) {
	return (
		<section className="aurora-section" id="projects">
			<motion.h2
				className="aurora-section__title"
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.5 }}
			>
				Projects
			</motion.h2>
			<div className="aurora-grid">
				{projects.map((project, i) => (
					<motion.article
						key={project.id}
						className="aurora-card"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.4, delay: i * 0.05 }}
						whileHover={{ y: -4 }}
					>
						{project.imageUrl && (
							<div className="aurora-card__media">
								<img src={project.imageUrl} alt={project.title} loading="lazy" />
							</div>
						)}
						<div className="aurora-card__body">
							<h3 className="aurora-card__title">{project.title}</h3>
							{project.description && (
								<p className="aurora-card__description">{project.description}</p>
							)}
							{project.tags && project.tags.length > 0 && (
								<ul className="aurora-card__tags">
									{project.tags.map((tag) => (
										<li key={tag}>{tag}</li>
									))}
								</ul>
							)}
							<div className="aurora-card__links">
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
					</motion.article>
				))}
			</div>
		</section>
	);
}
