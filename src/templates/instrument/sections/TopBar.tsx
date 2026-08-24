import { useEffect, useRef, useState } from "react";

export interface NavEntry {
	id: string;
	label: string;
}

/**
 * The fixed instrument bar: a name plate, the section index, and a
 * hairline scroll-progress gauge along its bottom edge.
 *
 * The gauge is written straight to the DOM node from the scroll listener
 * rather than held in state — it updates on every scroll frame, and
 * re-rendering the whole bar (and its menu) that often is exactly the kind
 * of work a passive listener is supposed to avoid.
 */
export function TopBar({ name, entries }: { name: string; entries: NavEntry[] }) {
	const fillRef = useRef<HTMLSpanElement>(null);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		function onScroll() {
			const el = document.documentElement;
			const max = el.scrollHeight - el.clientHeight;
			const progress = max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0;
			if (fillRef.current) fillRef.current.style.width = `${progress * 100}%`;
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	// An open overlay covers the page; leaving the page scrollable behind it
	// lets a touch drag move content the user can't see.
	useEffect(() => {
		if (!menuOpen) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previous;
		};
	}, [menuOpen]);

	return (
		<>
			<header className="ins-bar">
				<a href="#top" className="ins-bar__mark">
					{name || "Portfolio"}
				</a>

				<nav className="ins-bar__nav" aria-label="Sections">
					{entries.map((entry) => (
						<a key={entry.id} href={`#${entry.id}`}>
							{entry.label}
						</a>
					))}
				</nav>

				{entries.length > 0 && (
					<button
						type="button"
						className="ins-bar__toggle"
						aria-expanded={menuOpen}
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						onClick={() => setMenuOpen((open) => !open)}
					>
						<span />
						<span />
						<span />
					</button>
				)}

				<div className="ins-bar__progress">
					<span ref={fillRef} />
				</div>
			</header>

			{menuOpen && (
				<nav className="ins-menu" aria-label="Sections">
					{entries.map((entry, i) => (
						<a
							key={entry.id}
							href={`#${entry.id}`}
							className="ins-menu__item"
							style={{ animation: `ins-menu-in 0.4s ${i * 0.05}s ease-out both` }}
							onClick={() => setMenuOpen(false)}
						>
							<span className="ins-menu__index">{String(i + 1).padStart(2, "0")}</span>
							{entry.label}
						</a>
					))}
				</nav>
			)}
		</>
	);
}
