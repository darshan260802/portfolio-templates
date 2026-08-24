import type { MouseEvent } from "react";
import type { Project } from "../../../schema.js";
import { RichText } from "../../../rich-text.js";
import { SectionHead } from "./SectionHead.js";

/**
 * Project cards, each lit by a spotlight that follows the pointer.
 *
 * The spotlight is two CSS custom properties written straight onto the
 * card element — no state, so a pointer sweeping across the grid doesn't
 * re-render React on every mousemove; the browser just re-rasterises one
 * radial-gradient.
 */
function ProjectCard({ project, index }: { project: Project; index: number }) {
	function handleMove(event: MouseEvent<HTMLElement>) {
		const card = event.currentTarget;
		const rect = card.getBoundingClientRect();
		card.style.setProperty("--ins-x", `${event.clientX - rect.left}px`);
		card.style.setProperty("--ins-y", `${event.clientY - rect.top}px`);
	}

	return (
		<article
			className="ins-card"
			onMouseMove={handleMove}
			onMouseEnter={(e) => e.currentTarget.setAttribute("data-lit", "true")}
			onMouseLeave={(e) => e.currentTarget.setAttribute("data-lit", "false")}
		>
			<div className="ins-card__spot" aria-hidden />

			{project.imageUrl && (
				<div className="ins-card__media">
					<img src={project.imageUrl} alt={project.title} loading="lazy" />
				</div>
			)}

			<div>
				<span className="ins-card__index">
					{String(index + 1).padStart(2, "0")}
					{project.featured ? " · Featured" : ""}
				</span>
				<h3 className="ins-card__title">{project.title}</h3>
			</div>

			<RichText html={project.description} className="ins-card__body" />

			{project.tags && project.tags.length > 0 && (
				<div className="ins-card__tags">
					{project.tags.map((tag) => (
						<span key={tag} className="ins-tag">
							{tag}
						</span>
					))}
				</div>
			)}

			{(project.liveUrl || project.repoUrl) && (
				<div className="ins-card__links">
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
			)}
		</article>
	);
}

export function Systems({ projects }: { projects: Project[] }) {
	return (
		<section className="ins-shell">
			<SectionHead
				id="systems"
				label="Systems"
				readout={`${String(projects.length).padStart(2, "0")} Shipped`}
			/>

			<div className="ins-systems">
				{projects.map((project, i) => (
					<ProjectCard key={project.id} project={project} index={i} />
				))}
			</div>
		</section>
	);
}
