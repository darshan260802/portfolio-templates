import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Project } from "../../../schema.js";

gsap.registerPlugin(ScrollTrigger);

/**
 * The signature moment: pins the section and translates the filmstrip
 * horizontally as the user scrolls vertically, like flipping through prints
 * on a lightbox table. Falls back to a plain horizontally-scrollable strip
 * (touch/trackpad scroll, no pin) when there's nothing to gain from
 * pinning — too few projects to overflow, or reduced motion.
 */
export function ProjectsGallery({ projects }: { projects: Project[] }) {
	const sectionRef = useRef<HTMLElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const section = sectionRef.current;
			const track = trackRef.current;
			if (!section || !track) return;
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

			const overflow = track.scrollWidth - section.clientWidth;
			if (overflow <= 0) return; // nothing to pin — the strip already fits

			const tween = gsap.to(track, {
				x: () => -(track.scrollWidth - section.clientWidth),
				ease: "none",
				scrollTrigger: {
					trigger: section,
					start: "top top",
					end: () => `+=${track.scrollWidth - section.clientWidth}`,
					scrub: 1,
					pin: true,
					invalidateOnRefresh: true,
				},
			});

			return () => {
				tween.scrollTrigger?.kill();
				tween.kill();
			};
		},
		{ scope: sectionRef, dependencies: [projects.length] },
	);

	return (
		<section ref={sectionRef} className="nocturne-gallery" id="projects">
			<div className="nocturne-gallery__heading">
				<span className="nocturne-eyebrow">Selected work</span>
			</div>
			<div ref={trackRef} className="nocturne-gallery__track">
				{projects.map((project) => (
					<article key={project.id} className="nocturne-gallery__card">
						{project.imageUrl ? (
							<div className="nocturne-gallery__media">
								<img src={project.imageUrl} alt={project.title} loading="lazy" />
							</div>
						) : (
							<div className="nocturne-gallery__media nocturne-gallery__media--empty" aria-hidden="true" />
						)}
						<h3 className="nocturne-gallery__title">{project.title}</h3>
						{project.description && <p className="nocturne-gallery__description">{project.description}</p>}
						{project.tags && project.tags.length > 0 && (
							<div className="nocturne-gallery__tags">
								{project.tags.map((tag) => (
									<span key={tag} className="nocturne-chip">
										{tag}
									</span>
								))}
							</div>
						)}
						<div className="nocturne-gallery__links">
							{project.liveUrl && (
								<a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
									View live ↗
								</a>
							)}
							{project.repoUrl && (
								<a href={project.repoUrl} target="_blank" rel="noreferrer noopener">
									Source ↗
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
