import "./index.css";
import { c as e } from "react/compiler-runtime";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { useEffect as r, useRef as i, useState as a } from "react";
import { gsap as o } from "gsap";
import { useGSAP as s } from "@gsap/react";
import { motion as c } from "motion/react";
import { ScrollTrigger as l } from "gsap/ScrollTrigger";
//#region src/rich-text.tsx
function u(n) {
	let r = e(5), { html: i, className: a } = n;
	if (!i) return null;
	let o;
	r[0] === i ? o = r[1] : (o = { __html: i }, r[0] = i, r[1] = o);
	let s;
	return r[2] !== a || r[3] !== o ? (s = /* @__PURE__ */ t("div", {
		className: a,
		dangerouslySetInnerHTML: o
	}), r[2] = a, r[3] = o, r[4] = s) : s = r[4], s;
}
//#endregion
//#region src/portfolio-extras.tsx
function d(n) {
	let r = e(4), { links: i } = n;
	if (!i?.length) return null;
	let a;
	r[0] === i ? a = r[1] : (a = i.map(f), r[0] = i, r[1] = a);
	let o;
	return r[2] === a ? o = r[3] : (o = /* @__PURE__ */ t("div", {
		className: "pb-extra-links",
		children: a
	}), r[2] = a, r[3] = o), o;
}
function f(e) {
	return /^https?:\/\//i.test(e.url) && /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noopener noreferrer",
		children: [e.label || "Visit link", " ↗"]
	}, e.id);
}
function p(e) {
	return `custom-${Array.from(e).map((e) => e.codePointAt(0).toString(16)).join("-")}`;
}
function m(r) {
	let i = e(10), { data: a } = r, o;
	i[0] === a.education ? o = i[1] : (o = !!a.education?.length && /* @__PURE__ */ n("section", {
		id: "education",
		className: "pb-extra-section",
		"aria-labelledby": "education-heading",
		children: [/* @__PURE__ */ t("h2", {
			id: "education-heading",
			children: "Education"
		}), /* @__PURE__ */ t("div", {
			className: "pb-extra-grid",
			children: a.education.map(v)
		})]
	}), i[0] = a.education, i[1] = o);
	let s;
	i[2] === a.achievements ? s = i[3] : (s = !!a.achievements?.length && /* @__PURE__ */ n("section", {
		id: "achievements",
		className: "pb-extra-section",
		"aria-labelledby": "achievements-heading",
		children: [/* @__PURE__ */ t("h2", {
			id: "achievements-heading",
			children: "Achievements"
		}), /* @__PURE__ */ t("div", {
			className: "pb-extra-grid",
			children: a.achievements.map(_)
		})]
	}), i[2] = a.achievements, i[3] = s);
	let c;
	i[4] === a.customSections ? c = i[5] : (c = (a.customSections ?? []).filter(g).map(h), i[4] = a.customSections, i[5] = c);
	let l;
	return i[6] !== o || i[7] !== s || i[8] !== c ? (l = /* @__PURE__ */ n("div", {
		className: "pb-extras",
		children: [
			o,
			s,
			c
		]
	}), i[6] = o, i[7] = s, i[8] = c, i[9] = l) : l = i[9], l;
}
function h(e) {
	return /* @__PURE__ */ n("section", {
		id: p(e.id),
		className: "pb-extra-section",
		"aria-label": e.title,
		children: [/* @__PURE__ */ t("h2", { children: e.title }), /* @__PURE__ */ n("div", {
			className: "pb-extra-card",
			children: [/* @__PURE__ */ t(u, { html: e.content }), /* @__PURE__ */ t(d, { links: e.links })]
		})]
	}, e.id);
}
function g(e) {
	return e.visible !== !1 && e.title.trim();
}
function _(e) {
	return /* @__PURE__ */ n("article", {
		className: "pb-extra-card",
		children: [
			/* @__PURE__ */ t("h3", { children: e.title }),
			/* @__PURE__ */ t("p", {
				className: "pb-extra-meta",
				children: [e.issuer, e.date].filter(Boolean).join(" · ")
			}),
			/* @__PURE__ */ t(u, { html: e.description }),
			/* @__PURE__ */ t(d, { links: e.links })
		]
	}, e.id);
}
function v(e) {
	return /* @__PURE__ */ n("article", {
		className: "pb-extra-card",
		children: [
			/* @__PURE__ */ t("h3", { children: e.institution }),
			(e.degree || e.fieldOfStudy) && /* @__PURE__ */ t("p", { children: [e.degree, e.fieldOfStudy].filter(Boolean).join(" · ") }),
			e.range && /* @__PURE__ */ n("p", {
				className: "pb-extra-meta",
				children: [e.range.start, (e.range.current || e.range.end) && ` — ${e.range.current ? "Present" : e.range.end}`]
			}),
			/* @__PURE__ */ t(u, { html: e.summary })
		]
	}, e.id);
}
//#endregion
//#region src/portfolio-theme.tsx
var y = "pb-visitor-theme-v1";
function b() {
	return typeof window < "u" && window.self !== window.top;
}
function x() {
	if (typeof window > "u" || b()) return null;
	try {
		let e = localStorage.getItem(y);
		return e === "light" || e === "dark" ? e : null;
	} catch {
		return null;
	}
}
function S() {
	return typeof window < "u" && window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function C(t, n) {
	let i = e(10), [o, s] = a(x), [c, l] = a(S), u = t?.mode, d, f;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => l(e.matches ? "dark" : "light");
		return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, f = [], i[0] = d, i[1] = f) : (d = i[0], f = i[1]), r(d, f);
	let p;
	i[2] === Symbol.for("react.memo_cache_sentinel") ? (p = () => {
		b() && s(null);
	}, i[2] = p) : p = i[2];
	let m;
	i[3] === u ? m = i[4] : (m = [u], i[3] = u, i[4] = m), r(p, m);
	let h = o ?? (u === "system" ? c : u ?? n), g;
	i[5] === h ? g = i[6] : (g = () => {
		let e = h === "dark" ? "light" : "dark";
		if (s(e), !b()) try {
			localStorage.setItem(y, e);
		} catch {}
	}, i[5] = h, i[6] = g);
	let _ = g, v;
	return i[7] !== h || i[8] !== _ ? (v = {
		mode: h,
		toggle: _
	}, i[7] = h, i[8] = _, i[9] = v) : v = i[9], v;
}
function w(n) {
	let r = e(5), { mode: i, toggle: a } = n, o = `Switch to ${i === "dark" ? "light" : "dark"} mode`, s = i === "dark", c = i === "dark" ? "☀ Light" : "☾ Dark", l;
	return r[0] !== o || r[1] !== s || r[2] !== c || r[3] !== a ? (l = /* @__PURE__ */ t("button", {
		type: "button",
		className: "pb-theme-toggle",
		onClick: a,
		"aria-label": o,
		"aria-pressed": s,
		children: c
	}), r[0] = o, r[1] = s, r[2] = c, r[3] = a, r[4] = l) : l = r[4], l;
}
//#endregion
//#region src/templates/nocturne/sections/Grain.tsx
function T() {
	let r = e(1), i;
	return r[0] === Symbol.for("react.memo_cache_sentinel") ? (i = /* @__PURE__ */ n("svg", {
		className: "nocturne-grain",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ n("filter", {
			id: "nocturne-grain-filter",
			children: [/* @__PURE__ */ t("feTurbulence", {
				type: "fractalNoise",
				baseFrequency: "0.85",
				numOctaves: "2",
				stitchTiles: "stitch"
			}), /* @__PURE__ */ t("feColorMatrix", {
				type: "saturate",
				values: "0"
			})]
		}), /* @__PURE__ */ t("rect", {
			width: "100%",
			height: "100%",
			filter: "url(#nocturne-grain-filter)"
		})]
	}), r[0] = i) : i = r[0], i;
}
//#endregion
//#region src/uploads.ts
function E(e) {
	return F(e, "word/document.xml") !== -1;
}
var D = {
	kind: "resume",
	noun: "résumé",
	maxBytes: 5242880,
	formats: [{
		label: "PDF",
		mimeType: "application/pdf",
		extensions: ["pdf"],
		signatures: [{
			offset: 0,
			bytes: [
				37,
				80,
				68,
				70,
				45
			]
		}]
	}, {
		label: "DOCX",
		mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		extensions: ["docx"],
		signatures: [{
			offset: 0,
			bytes: [
				80,
				75,
				3,
				4
			]
		}],
		verify: E
	}]
};
function O(e, t) {
	let n = t.toLowerCase();
	return e.formats.find((e) => e.extensions.includes(n));
}
function k(e) {
	if (!e) return;
	let t = e.split(/[?#]/, 1)[0] ?? "";
	return /\.([a-z0-9]+)$/i.exec(t)?.[1]?.toLowerCase();
}
function A(e) {
	let t = k(e.resumeFilename) ?? k(e.resumeUrl);
	if (t) return O(D, t)?.label;
}
var j = {
	"–": "-",
	"—": "-",
	"‘": "'",
	"’": "'",
	"“": "\"",
	"”": "\"",
	"…": "...",
	"\xA0": " "
};
function M(e) {
	return e.replace(/[\u2013\u2014\u2018\u2019\u201c\u201d\u2026\u00a0]/g, (e) => j[e] ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7e]/g, "").replace(/\s+/g, " ").replace(/\s+(?=\.[^.]*$)/, "").trim();
}
function N(e) {
	if (!e.resumeUrl) return;
	if (e.resumeFilename) {
		let t = M(e.resumeFilename);
		if (/[^.]/.test(t.replace(/\.[^.]*$/, ""))) return t;
	}
	let t = k(e.resumeUrl);
	if (!t || !O(D, t)) return;
	let n = e.fullName.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
	return n ? `${n}-resume.${t}` : `resume.${t}`;
}
function P(e) {
	return e.resumeUrl ? {
		href: e.resumeUrl,
		download: N(e),
		format: A(e)
	} : null;
}
function F(e, t) {
	let n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	outer: for (let t = 0; t <= e.length - n.length; t++) {
		for (let r = 0; r < n.length; r++) if (e[t + r] !== n[r]) continue outer;
		return t;
	}
	return -1;
}
//#endregion
//#region src/templates/nocturne/sections/Hero.tsx
var I = {
	github: "GitHub",
	linkedin: "LinkedIn",
	twitter: "X",
	bluesky: "Bluesky",
	dribbble: "Dribbble",
	behance: "Behance",
	youtube: "YouTube",
	website: "Site",
	other: "Link"
};
function L(r) {
	let a = e(30), { profile: o, socials: c } = r, l = i(null), u;
	a[0] === o ? u = a[1] : (u = P(o), a[0] = o, a[1] = u);
	let d = u, f;
	a[2] === Symbol.for("react.memo_cache_sentinel") ? (f = { scope: l }, a[2] = f) : f = a[2], s(z, f);
	let p;
	a[3] !== o.avatarUrl || a[4] !== o.fullName ? (p = o.avatarUrl && /* @__PURE__ */ t("img", {
		className: "nocturne-hero__portrait",
		src: o.avatarUrl,
		alt: o.fullName
	}), a[3] = o.avatarUrl, a[4] = o.fullName, a[5] = p) : p = a[5];
	let m;
	a[6] === Symbol.for("react.memo_cache_sentinel") ? (m = /* @__PURE__ */ t("span", {
		className: "nocturne-hero__eyebrow nocturne-eyebrow",
		children: "Portfolio"
	}), a[6] = m) : m = a[6];
	let h = o.fullName || "Your Name", g;
	a[7] === h ? g = a[8] : (g = /* @__PURE__ */ t("h1", {
		className: "nocturne-hero__name",
		children: /* @__PURE__ */ t("span", {
			className: "nocturne-hero__name-inner",
			children: h
		})
	}), a[7] = h, a[8] = g);
	let _;
	a[9] === Symbol.for("react.memo_cache_sentinel") ? (_ = /* @__PURE__ */ t("div", {
		className: "nocturne-hero__rule",
		"aria-hidden": "true"
	}), a[9] = _) : _ = a[9];
	let v = o.headline || null, y;
	a[10] === v ? y = a[11] : (y = /* @__PURE__ */ t("p", {
		className: "nocturne-hero__headline nocturne-hero__fade-in",
		children: v
	}), a[10] = v, a[11] = y);
	let b = o.bio ?? "", x;
	a[12] === b ? x = a[13] : (x = /* @__PURE__ */ t("p", {
		className: "nocturne-hero__bio nocturne-hero__fade-in",
		dangerouslySetInnerHTML: { __html: b }
	}), a[12] = b, a[13] = x);
	let S;
	a[14] === o.location ? S = a[15] : (S = o.location && /* @__PURE__ */ t("span", { children: o.location }), a[14] = o.location, a[15] = S);
	let C;
	a[16] === c ? C = a[17] : (C = c && c.length > 0 && /* @__PURE__ */ t("nav", {
		className: "nocturne-hero__socials",
		"aria-label": "Social links",
		children: c.map(R)
	}), a[16] = c, a[17] = C);
	let w;
	a[18] === d ? w = a[19] : (w = d && /* @__PURE__ */ n("a", {
		className: "nocturne-hero__resume",
		href: d.href,
		download: d.download,
		target: "_blank",
		rel: "noreferrer noopener",
		children: [
			"Résumé",
			d.format ? ` — ${d.format}` : "",
			" ↓"
		]
	}), a[18] = d, a[19] = w);
	let T;
	a[20] !== S || a[21] !== C || a[22] !== w ? (T = /* @__PURE__ */ n("div", {
		className: "nocturne-hero__meta nocturne-hero__fade-in",
		children: [
			S,
			C,
			w
		]
	}), a[20] = S, a[21] = C, a[22] = w, a[23] = T) : T = a[23];
	let E;
	return a[24] !== x || a[25] !== T || a[26] !== p || a[27] !== g || a[28] !== y ? (E = /* @__PURE__ */ n("header", {
		ref: l,
		className: "nocturne-hero",
		children: [
			p,
			m,
			g,
			_,
			y,
			x,
			T
		]
	}), a[24] = x, a[25] = T, a[26] = p, a[27] = g, a[28] = y, a[29] = E) : E = a[29], E;
}
function R(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? I[e.platform]
	}, e.platform + e.url);
}
function z() {
	let e = window.matchMedia("(prefers-reduced-motion: reduce)").matches, t = o.timeline({ defaults: { ease: "power4.out" } });
	if (e) {
		t.set([".nocturne-hero__eyebrow", ".nocturne-hero__fade-in"], {
			opacity: 1,
			y: 0
		}).set(".nocturne-hero__name-inner", { clipPath: "inset(0 0 0% 0)" }).set(".nocturne-hero__rule", { scaleX: 1 });
		return;
	}
	t.to(".nocturne-hero__eyebrow", {
		opacity: 1,
		duration: .5
	}, .1).to(".nocturne-hero__name-inner", {
		clipPath: "inset(0 0 0% 0)",
		duration: 1.1
	}, .25).to(".nocturne-hero__fade-in", {
		opacity: 1,
		y: 0,
		duration: .7,
		stagger: .08
	}, .7).to(".nocturne-hero__rule", {
		scaleX: 1,
		duration: .9
	}, .9);
}
//#endregion
//#region src/templates/nocturne/sections/Experience.tsx
function B(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function V(r) {
	let i = e(5), { experience: a } = r, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ t("span", {
		className: "nocturne-eyebrow",
		children: "Experience"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(H), i[1] = a, i[2] = s);
	let c;
	return i[3] === s ? c = i[4] : (c = /* @__PURE__ */ n("section", {
		className: "nocturne-section",
		id: "experience",
		children: [o, /* @__PURE__ */ t("ol", {
			className: "nocturne-timeline",
			children: s
		})]
	}), i[3] = s, i[4] = c), c;
}
function H(e, r) {
	return /* @__PURE__ */ n(c.li, {
		className: "nocturne-timeline__item",
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: !0,
			amount: .4
		},
		transition: {
			duration: .6,
			delay: r * .06,
			ease: "easeOut"
		},
		children: [/* @__PURE__ */ t("span", {
			className: "nocturne-timeline__range",
			children: B(e.range)
		}), /* @__PURE__ */ n("div", {
			className: "nocturne-timeline__body",
			children: [
				/* @__PURE__ */ t("h3", {
					className: "nocturne-timeline__role",
					children: e.role
				}),
				/* @__PURE__ */ t("p", {
					className: "nocturne-timeline__company",
					children: e.companyUrl ? /* @__PURE__ */ t("a", {
						href: e.companyUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: e.company
					}) : e.company
				}),
				/* @__PURE__ */ t(u, {
					html: e.summary,
					className: "nocturne-timeline__summary"
				}),
				e.highlights && e.highlights.length > 0 && /* @__PURE__ */ t("ul", {
					className: "nocturne-timeline__highlights",
					children: e.highlights.map(U)
				})
			]
		})]
	}, e.id);
}
function U(e) {
	return /* @__PURE__ */ t("li", { children: e }, e);
}
//#endregion
//#region src/templates/nocturne/sections/ProjectsGallery.tsx
o.registerPlugin(l);
function W(r) {
	let a = e(8), { projects: c } = r, l = i(null), u = i(null), d;
	a[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
		let e = l.current, t = u.current;
		if (!e || !t || window.matchMedia("(prefers-reduced-motion: reduce)").matches || t.scrollWidth - e.clientWidth <= 0) return;
		let n = o.to(t, {
			x: () => -(t.scrollWidth - e.clientWidth),
			ease: "none",
			scrollTrigger: {
				trigger: e,
				start: "top top",
				end: () => `+=${t.scrollWidth - e.clientWidth}`,
				scrub: 1,
				pin: !0,
				invalidateOnRefresh: !0
			}
		});
		return () => {
			n.scrollTrigger?.kill(), n.kill();
		};
	}, a[0] = d) : d = a[0];
	let f;
	a[1] === c.length ? f = a[2] : (f = {
		scope: l,
		dependencies: [c.length]
	}, a[1] = c.length, a[2] = f), s(d, f);
	let p;
	a[3] === Symbol.for("react.memo_cache_sentinel") ? (p = /* @__PURE__ */ t("div", {
		className: "nocturne-gallery__heading",
		children: /* @__PURE__ */ t("span", {
			className: "nocturne-eyebrow",
			children: "Selected work"
		})
	}), a[3] = p) : p = a[3];
	let m;
	a[4] === c ? m = a[5] : (m = c.map(G), a[4] = c, a[5] = m);
	let h;
	return a[6] === m ? h = a[7] : (h = /* @__PURE__ */ n("section", {
		ref: l,
		className: "nocturne-gallery",
		id: "projects",
		children: [p, /* @__PURE__ */ t("div", {
			ref: u,
			className: "nocturne-gallery__track",
			children: m
		})]
	}), a[6] = m, a[7] = h), h;
}
function G(e) {
	return /* @__PURE__ */ n("article", {
		className: "nocturne-gallery__card",
		children: [
			e.imageUrl ? /* @__PURE__ */ t("div", {
				className: "nocturne-gallery__media",
				children: /* @__PURE__ */ t("img", {
					src: e.imageUrl,
					alt: e.title,
					loading: "lazy"
				})
			}) : /* @__PURE__ */ t("div", {
				className: "nocturne-gallery__media nocturne-gallery__media--empty",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("h3", {
				className: "nocturne-gallery__title",
				children: e.title
			}),
			/* @__PURE__ */ t(u, {
				html: e.description,
				className: "nocturne-gallery__description"
			}),
			e.tags && e.tags.length > 0 && /* @__PURE__ */ t("div", {
				className: "nocturne-gallery__tags",
				children: e.tags.map(K)
			}),
			/* @__PURE__ */ n("div", {
				className: "nocturne-gallery__links",
				children: [
					/* @__PURE__ */ t(d, { links: e.links }),
					e.liveUrl && /* @__PURE__ */ t("a", {
						href: e.liveUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: "View live ↗"
					}),
					e.repoUrl && /* @__PURE__ */ t("a", {
						href: e.repoUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: "Source ↗"
					})
				]
			})
		]
	}, e.id);
}
function K(e) {
	return /* @__PURE__ */ t("span", {
		className: "nocturne-chip",
		children: e
	}, e);
}
//#endregion
//#region src/templates/nocturne/sections/SkillsMarquee.tsx
function q(r) {
	let i = e(3), { skills: a } = r, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ t("span", {
		className: "nocturne-eyebrow nocturne-marquee-eyebrow",
		children: "Skills"
	}), i[0] = o) : o = i[0];
	let s;
	return i[1] === a ? s = i[2] : (s = /* @__PURE__ */ n("section", {
		className: "nocturne-section nocturne-section--flush",
		id: "skills",
		children: [o, /* @__PURE__ */ t("div", {
			className: "nocturne-marquee",
			role: "list",
			"aria-label": "Skills",
			children: /* @__PURE__ */ t("div", {
				className: "nocturne-marquee__track",
				children: [...a, ...a].map(J)
			})
		})]
	}), i[1] = a, i[2] = s), s;
}
function J(e, n) {
	return /* @__PURE__ */ t("span", {
		className: "nocturne-marquee__item",
		role: "listitem",
		children: e.name
	}, `${e.id}-${n}`);
}
//#endregion
//#region src/templates/nocturne/sections/Footer.tsx
function Y(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function X(r) {
	let i = e(14), { profile: a, socials: o } = r, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ t("a", {
		className: "nocturne-footer__cta",
		href: `mailto:${a.email}`,
		children: "Get in touch"
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === a.phone ? u = i[4] : (u = a.phone && /* @__PURE__ */ t("a", {
		className: "nocturne-footer__phone",
		href: Y(a.phone),
		children: a.phone
	}), i[3] = a.phone, i[4] = u);
	let d;
	i[5] === o ? d = i[6] : (d = o && o.length > 0 && /* @__PURE__ */ t("nav", {
		className: "nocturne-footer__socials",
		"aria-label": "Social links",
		children: o.map(Z)
	}), i[5] = o, i[6] = d);
	let f = a.fullName || "Your Name", p;
	i[7] === f ? p = i[8] : (p = /* @__PURE__ */ n("p", {
		className: "nocturne-footer__copy",
		children: [
			"© ",
			c,
			" ",
			f
		]
	}), i[7] = f, i[8] = p);
	let m;
	return i[9] !== l || i[10] !== u || i[11] !== d || i[12] !== p ? (m = /* @__PURE__ */ n("footer", {
		className: "nocturne-footer",
		children: [
			l,
			u,
			d,
			p
		]
	}), i[9] = l, i[10] = u, i[11] = d, i[12] = p, i[13] = m) : m = i[13], m;
}
function Z(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/nocturne/Template.tsx
function Q(r) {
	let i = e(30), { data: a } = r, { mode: o, toggle: s } = C(a.theme, "dark"), c = a.theme?.accentColor ?? "#c9a24a", l;
	i[0] === c ? l = i[1] : (l = { "--nocturne-accent": c }, i[0] = c, i[1] = l);
	let u = l, d;
	i[2] === Symbol.for("react.memo_cache_sentinel") ? (d = /* @__PURE__ */ t(T, {}), i[2] = d) : d = i[2];
	let f;
	i[3] !== a.profile || i[4] !== a.socials ? (f = /* @__PURE__ */ t(L, {
		profile: a.profile,
		socials: a.socials
	}), i[3] = a.profile, i[4] = a.socials, i[5] = f) : f = i[5];
	let p;
	i[6] === a.experience ? p = i[7] : (p = a.experience && a.experience.length > 0 && /* @__PURE__ */ t(V, { experience: a.experience }), i[6] = a.experience, i[7] = p);
	let h;
	i[8] === a.projects ? h = i[9] : (h = a.projects && a.projects.length > 0 && /* @__PURE__ */ t(W, { projects: a.projects }), i[8] = a.projects, i[9] = h);
	let g;
	i[10] === a.skills ? g = i[11] : (g = a.skills && a.skills.length > 0 && /* @__PURE__ */ t(q, { skills: a.skills }), i[10] = a.skills, i[11] = g);
	let _;
	i[12] === a ? _ = i[13] : (_ = /* @__PURE__ */ t(m, { data: a }), i[12] = a, i[13] = _);
	let v;
	i[14] !== o || i[15] !== s ? (v = /* @__PURE__ */ t(w, {
		mode: o,
		toggle: s
	}), i[14] = o, i[15] = s, i[16] = v) : v = i[16];
	let y;
	i[17] !== a.profile || i[18] !== a.socials ? (y = /* @__PURE__ */ t(X, {
		profile: a.profile,
		socials: a.socials
	}), i[17] = a.profile, i[18] = a.socials, i[19] = y) : y = i[19];
	let b;
	return i[20] !== o || i[21] !== y || i[22] !== u || i[23] !== f || i[24] !== p || i[25] !== h || i[26] !== g || i[27] !== _ || i[28] !== v ? (b = /* @__PURE__ */ n("div", {
		className: "nocturne",
		"data-theme": o,
		style: u,
		children: [
			d,
			f,
			p,
			h,
			g,
			_,
			v,
			y
		]
	}), i[20] = o, i[21] = y, i[22] = u, i[23] = f, i[24] = p, i[25] = h, i[26] = g, i[27] = _, i[28] = v, i[29] = b) : b = i[29], b;
}
//#endregion
export { Q as default };
