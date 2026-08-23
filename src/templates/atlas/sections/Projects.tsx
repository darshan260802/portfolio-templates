import { motion } from "motion/react";
import type { Project } from "../../../schema.js";
import { KineticHeading } from "./KineticHeading.js";

export function ProjectsSection({ projects, index }: { projects: Project[]; index: number }) {
	return (
		<section className="atlas-section" id="projects">
			<KineticHeading number={String(index).padStart(2, "0")} title="Projects" />
			<div className="atlas-projects">
				{projects.map((project, i) => (
					<article key={project.id} className="atlas-project">
						{project.imageUrl && (
							<div className="atlas-project__media">
								<motion.img
									src={project.imageUrl}
									alt={project.title}
									loading="lazy"
									initial={{ clipPath: "inset(0 0 100% 0)" }}
									whileInView={{ clipPath: "inset(0 0 0% 0)" }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
								/>
							</div>
						)}
						<div className="atlas-project__body">
							{/* Inline, in normal flow — not overlaid on the image — so it
							    never collides with the title when a project has no
							    imageUrl (there's then nothing for an absolutely
							    positioned badge to sit over). */}
							<span className="atlas-project__index">{String(i + 1).padStart(2, "0")}</span>
							<h3 className="atlas-project__title">{project.title}</h3>
							{project.description && <p className="atlas-project__description">{project.description}</p>}
							{project.tags && project.tags.length > 0 && (
								<div className="atlas-project__tags">
									{project.tags.map((tag) => (
										<span key={tag} className="atlas-chip">
											{tag}
										</span>
									))}
								</div>
							)}
							<div className="atlas-project__links">
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
					</article>
				))}
			</div>
		</section>
	);
}
