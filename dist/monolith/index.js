import "./index.css";
import { c as e } from "react/compiler-runtime";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
import { useEffect as i, useState as a } from "react";
import { motion as o } from "motion/react";
//#region src/rich-text.tsx
function s(t) {
	let r = e(5), { html: i, className: a } = t;
	if (!i) return null;
	let o;
	r[0] === i ? o = r[1] : (o = { __html: i }, r[0] = i, r[1] = o);
	let s;
	return r[2] !== a || r[3] !== o ? (s = /* @__PURE__ */ n("div", {
		className: a,
		dangerouslySetInnerHTML: o
	}), r[2] = a, r[3] = o, r[4] = s) : s = r[4], s;
}
//#endregion
//#region src/portfolio-extras.tsx
function c(t) {
	let r = e(4), { links: i } = t;
	if (!i?.length) return null;
	let a;
	r[0] === i ? a = r[1] : (a = i.map(l), r[0] = i, r[1] = a);
	let o;
	return r[2] === a ? o = r[3] : (o = /* @__PURE__ */ n("div", {
		className: "pb-extra-links",
		children: a
	}), r[2] = a, r[3] = o), o;
}
function l(e) {
	return /^https?:\/\//i.test(e.url) && /* @__PURE__ */ r("a", {
		href: e.url,
		target: "_blank",
		rel: "noopener noreferrer",
		children: [e.label || "Visit link", " ↗"]
	}, e.id);
}
function u(e) {
	return `custom-${Array.from(e).map((e) => e.codePointAt(0).toString(16)).join("-")}`;
}
function d(t) {
	let i = e(10), { data: a } = t, o;
	i[0] === a.education ? o = i[1] : (o = !!a.education?.length && /* @__PURE__ */ r("section", {
		id: "education",
		className: "pb-extra-section",
		"aria-labelledby": "education-heading",
		children: [/* @__PURE__ */ n("h2", {
			id: "education-heading",
			children: "Education"
		}), /* @__PURE__ */ n("div", {
			className: "pb-extra-grid",
			children: a.education.map(h)
		})]
	}), i[0] = a.education, i[1] = o);
	let s;
	i[2] === a.achievements ? s = i[3] : (s = !!a.achievements?.length && /* @__PURE__ */ r("section", {
		id: "achievements",
		className: "pb-extra-section",
		"aria-labelledby": "achievements-heading",
		children: [/* @__PURE__ */ n("h2", {
			id: "achievements-heading",
			children: "Achievements"
		}), /* @__PURE__ */ n("div", {
			className: "pb-extra-grid",
			children: a.achievements.map(m)
		})]
	}), i[2] = a.achievements, i[3] = s);
	let c;
	i[4] === a.customSections ? c = i[5] : (c = (a.customSections ?? []).filter(p).map(f), i[4] = a.customSections, i[5] = c);
	let l;
	return i[6] !== o || i[7] !== s || i[8] !== c ? (l = /* @__PURE__ */ r("div", {
		className: "pb-extras",
		children: [
			o,
			s,
			c
		]
	}), i[6] = o, i[7] = s, i[8] = c, i[9] = l) : l = i[9], l;
}
function f(e) {
	return /* @__PURE__ */ r("section", {
		id: u(e.id),
		className: "pb-extra-section",
		"aria-label": e.title,
		children: [/* @__PURE__ */ n("h2", { children: e.title }), /* @__PURE__ */ r("div", {
			className: "pb-extra-card",
			children: [/* @__PURE__ */ n(s, { html: e.content }), /* @__PURE__ */ n(c, { links: e.links })]
		})]
	}, e.id);
}
function p(e) {
	return e.visible !== !1 && e.title.trim();
}
function m(e) {
	return /* @__PURE__ */ r("article", {
		className: "pb-extra-card",
		children: [
			/* @__PURE__ */ n("h3", { children: e.title }),
			/* @__PURE__ */ n("p", {
				className: "pb-extra-meta",
				children: [e.issuer, e.date].filter(Boolean).join(" · ")
			}),
			/* @__PURE__ */ n(s, { html: e.description }),
			/* @__PURE__ */ n(c, { links: e.links })
		]
	}, e.id);
}
function h(e) {
	return /* @__PURE__ */ r("article", {
		className: "pb-extra-card",
		children: [
			/* @__PURE__ */ n("h3", { children: e.institution }),
			(e.degree || e.fieldOfStudy) && /* @__PURE__ */ n("p", { children: [e.degree, e.fieldOfStudy].filter(Boolean).join(" · ") }),
			e.range && /* @__PURE__ */ r("p", {
				className: "pb-extra-meta",
				children: [e.range.start, (e.range.current || e.range.end) && ` — ${e.range.current ? "Present" : e.range.end}`]
			}),
			/* @__PURE__ */ n(s, { html: e.summary })
		]
	}, e.id);
}
//#endregion
//#region src/portfolio-theme.tsx
var g = "pb-visitor-theme-v1";
function _() {
	return typeof window < "u" && window.self !== window.top;
}
function v() {
	if (typeof window > "u" || _()) return null;
	try {
		let e = localStorage.getItem(g);
		return e === "light" || e === "dark" ? e : null;
	} catch {
		return null;
	}
}
function y() {
	return typeof window < "u" && window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function b(t, n) {
	let r = e(10), [o, s] = a(v), [c, l] = a(y), u = t?.mode, d, f;
	r[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => l(e.matches ? "dark" : "light");
		return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, f = [], r[0] = d, r[1] = f) : (d = r[0], f = r[1]), i(d, f);
	let p;
	r[2] === Symbol.for("react.memo_cache_sentinel") ? (p = () => {
		_() && s(null);
	}, r[2] = p) : p = r[2];
	let m;
	r[3] === u ? m = r[4] : (m = [u], r[3] = u, r[4] = m), i(p, m);
	let h = o ?? (u === "system" ? c : u ?? n), b;
	r[5] === h ? b = r[6] : (b = () => {
		let e = h === "dark" ? "light" : "dark";
		if (s(e), !_()) try {
			localStorage.setItem(g, e);
		} catch {}
	}, r[5] = h, r[6] = b);
	let x = b, S;
	return r[7] !== h || r[8] !== x ? (S = {
		mode: h,
		toggle: x
	}, r[7] = h, r[8] = x, r[9] = S) : S = r[9], S;
}
function x(t) {
	let r = e(5), { mode: i, toggle: a } = t, o = `Switch to ${i === "dark" ? "light" : "dark"} mode`, s = i === "dark", c = i === "dark" ? "☀ Light" : "☾ Dark", l;
	return r[0] !== o || r[1] !== s || r[2] !== c || r[3] !== a ? (l = /* @__PURE__ */ n("button", {
		type: "button",
		className: "pb-theme-toggle",
		onClick: a,
		"aria-label": o,
		"aria-pressed": s,
		children: c
	}), r[0] = o, r[1] = s, r[2] = c, r[3] = a, r[4] = l) : l = r[4], l;
}
//#endregion
//#region src/uploads.ts
function S(e) {
	return j(e, "word/document.xml") !== -1;
}
var C = {
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
		verify: S
	}]
};
function w(e, t) {
	let n = t.toLowerCase();
	return e.formats.find((e) => e.extensions.includes(n));
}
function T(e) {
	if (!e) return;
	let t = e.split(/[?#]/, 1)[0] ?? "";
	return /\.([a-z0-9]+)$/i.exec(t)?.[1]?.toLowerCase();
}
function E(e) {
	let t = T(e.resumeFilename) ?? T(e.resumeUrl);
	if (t) return w(C, t)?.label;
}
var D = {
	"–": "-",
	"—": "-",
	"‘": "'",
	"’": "'",
	"“": "\"",
	"”": "\"",
	"…": "...",
	"\xA0": " "
};
function O(e) {
	return e.replace(/[\u2013\u2014\u2018\u2019\u201c\u201d\u2026\u00a0]/g, (e) => D[e] ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7e]/g, "").replace(/\s+/g, " ").replace(/\s+(?=\.[^.]*$)/, "").trim();
}
function k(e) {
	if (!e.resumeUrl) return;
	if (e.resumeFilename) {
		let t = O(e.resumeFilename);
		if (/[^.]/.test(t.replace(/\.[^.]*$/, ""))) return t;
	}
	let t = T(e.resumeUrl);
	if (!t || !w(C, t)) return;
	let n = e.fullName.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
	return n ? `${n}-resume.${t}` : `resume.${t}`;
}
function A(e) {
	return e.resumeUrl ? {
		href: e.resumeUrl,
		download: k(e),
		format: E(e)
	} : null;
}
function j(e, t) {
	let n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	outer: for (let t = 0; t <= e.length - n.length; t++) {
		for (let r = 0; r < n.length; r++) if (e[t + r] !== n[r]) continue outer;
		return t;
	}
	return -1;
}
//#endregion
//#region src/templates/monolith/sections/Hero.tsx
function M(i) {
	let a = e(39), { profile: c, socials: l } = i, u;
	a[0] === c ? u = a[1] : (u = A(c), a[0] = c, a[1] = u);
	let d = u, f = !!(l && l.length > 0), p, m;
	a[2] === Symbol.for("react.memo_cache_sentinel") ? (p = {
		opacity: 0,
		y: 20
	}, m = {
		opacity: 1,
		y: 0
	}, a[2] = p, a[3] = m) : (p = a[2], m = a[3]);
	let h, g;
	a[4] === Symbol.for("react.memo_cache_sentinel") ? (h = {
		duration: .7,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}, g = /* @__PURE__ */ n("div", {
		className: "monolith-hero__byline",
		children: "Portfolio"
	}), a[4] = h, a[5] = g) : (h = a[4], g = a[5]);
	let _;
	a[6] !== c.avatarUrl || a[7] !== c.fullName ? (_ = c.avatarUrl && /* @__PURE__ */ n("img", {
		className: "monolith-hero__avatar",
		src: c.avatarUrl,
		alt: c.fullName
	}), a[6] = c.avatarUrl, a[7] = c.fullName, a[8] = _) : _ = a[8];
	let v = c.fullName || "Your Name", y;
	a[9] === v ? y = a[10] : (y = /* @__PURE__ */ n("h1", {
		className: "monolith-hero__name",
		children: v
	}), a[9] = v, a[10] = y);
	let b;
	a[11] !== _ || a[12] !== y ? (b = /* @__PURE__ */ r("div", {
		className: "monolith-hero__namerow",
		children: [_, y]
	}), a[11] = _, a[12] = y, a[13] = b) : b = a[13];
	let x;
	a[14] === c.headline ? x = a[15] : (x = c.headline && /* @__PURE__ */ n("p", {
		className: "monolith-hero__headline",
		children: c.headline
	}), a[14] = c.headline, a[15] = x);
	let S;
	a[16] === c.bio ? S = a[17] : (S = /* @__PURE__ */ n(s, {
		html: c.bio,
		className: "monolith-hero__bio"
	}), a[16] = c.bio, a[17] = S);
	let C;
	a[18] === c.location ? C = a[19] : (C = c.location && /* @__PURE__ */ n("span", { children: c.location }), a[18] = c.location, a[19] = C);
	let w;
	a[20] !== f || a[21] !== c.location ? (w = c.location && f && /* @__PURE__ */ n("span", {
		"aria-hidden": "true",
		children: "/"
	}), a[20] = f, a[21] = c.location, a[22] = w) : w = a[22];
	let T;
	a[23] === l ? T = a[24] : (T = l && l.length > 0 && /* @__PURE__ */ n("nav", {
		className: "monolith-hero__socials",
		"aria-label": "Social links",
		children: l.map((e, t) => /* @__PURE__ */ r("span", { children: [/* @__PURE__ */ n("a", {
			href: e.url,
			target: "_blank",
			rel: "noreferrer noopener",
			children: e.label ?? e.platform
		}), t < l.length - 1 && /* @__PURE__ */ n("span", {
			"aria-hidden": "true",
			children: " / "
		})] }, e.platform + e.url))
	}), a[23] = l, a[24] = T);
	let E;
	a[25] !== f || a[26] !== c.location || a[27] !== d ? (E = d && /* @__PURE__ */ r(t, { children: [(c.location || f) && /* @__PURE__ */ n("span", {
		"aria-hidden": "true",
		children: "/"
	}), /* @__PURE__ */ r("a", {
		className: "monolith-hero__resume",
		href: d.href,
		download: d.download,
		target: "_blank",
		rel: "noreferrer noopener",
		children: [
			"Résumé",
			d.format ? ` (${d.format})` : "",
			" ↓"
		]
	})] }), a[25] = f, a[26] = c.location, a[27] = d, a[28] = E) : E = a[28];
	let D;
	a[29] !== C || a[30] !== w || a[31] !== T || a[32] !== E ? (D = /* @__PURE__ */ r("div", {
		className: "monolith-hero__meta",
		children: [
			C,
			w,
			T,
			E
		]
	}), a[29] = C, a[30] = w, a[31] = T, a[32] = E, a[33] = D) : D = a[33];
	let O;
	return a[34] !== x || a[35] !== S || a[36] !== D || a[37] !== b ? (O = /* @__PURE__ */ n("header", {
		className: "monolith-hero",
		children: /* @__PURE__ */ r(o.div, {
			className: "monolith-hero__inner",
			initial: p,
			animate: m,
			transition: h,
			children: [
				g,
				b,
				x,
				S,
				D
			]
		})
	}), a[34] = x, a[35] = S, a[36] = D, a[37] = b, a[38] = O) : O = a[38], O;
}
//#endregion
//#region src/templates/monolith/sections/SectionHeading.tsx
function N(t) {
	let i = e(10), { index: a, title: s } = t, c;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (c = /* @__PURE__ */ n(o.div, {
		className: "monolith-heading__rule",
		initial: { scaleX: 0 },
		whileInView: { scaleX: 1 },
		viewport: { once: !0 },
		transition: {
			duration: .6,
			ease: "easeInOut"
		}
	}), i[0] = c) : c = i[0];
	let l = String(a), u;
	i[1] === l ? u = i[2] : (u = l.padStart(2, "0"), i[1] = l, i[2] = u);
	let d;
	i[3] === u ? d = i[4] : (d = /* @__PURE__ */ n("span", {
		className: "monolith-heading__number",
		children: u
	}), i[3] = u, i[4] = d);
	let f;
	i[5] === s ? f = i[6] : (f = /* @__PURE__ */ n("h2", {
		className: "monolith-heading__title",
		children: s
	}), i[5] = s, i[6] = f);
	let p;
	return i[7] !== d || i[8] !== f ? (p = /* @__PURE__ */ r("div", {
		className: "monolith-heading",
		children: [
			c,
			d,
			f
		]
	}), i[7] = d, i[8] = f, i[9] = p) : p = i[9], p;
}
//#endregion
//#region src/templates/monolith/sections/Experience.tsx
function P(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function F(t) {
	let i = e(9), { experience: a, index: o } = t, s;
	i[0] === o ? s = i[1] : (s = /* @__PURE__ */ n(N, {
		index: o,
		title: "Experience"
	}), i[0] = o, i[1] = s);
	let c;
	i[2] === a ? c = i[3] : (c = a.map(I), i[2] = a, i[3] = c);
	let l;
	i[4] === c ? l = i[5] : (l = /* @__PURE__ */ n("ol", {
		className: "monolith-ledger",
		children: c
	}), i[4] = c, i[5] = l);
	let u;
	return i[6] !== s || i[7] !== l ? (u = /* @__PURE__ */ r("section", {
		className: "monolith-section",
		id: "experience",
		children: [s, l]
	}), i[6] = s, i[7] = l, i[8] = u) : u = i[8], u;
}
function I(e, t) {
	return /* @__PURE__ */ r(o.li, {
		className: "monolith-ledger__row",
		initial: {
			opacity: 0,
			scale: .94
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: !0,
			amount: .5
		},
		transition: {
			duration: .4,
			delay: t * .08
		},
		children: [/* @__PURE__ */ r("div", {
			className: "monolith-ledger__marker",
			children: [/* @__PURE__ */ n("span", {
				className: "monolith-ledger__number",
				children: String(t + 1).padStart(2, "0")
			}), /* @__PURE__ */ n("span", {
				className: "monolith-ledger__range",
				children: P(e.range)
			})]
		}), /* @__PURE__ */ r("div", {
			className: "monolith-ledger__body",
			children: [
				/* @__PURE__ */ n("h3", {
					className: "monolith-ledger__role",
					children: e.role
				}),
				/* @__PURE__ */ r("p", {
					className: "monolith-ledger__company",
					children: [e.companyUrl ? /* @__PURE__ */ n("a", {
						href: e.companyUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: e.company
					}) : e.company, e.location ? ` — ${e.location}` : ""]
				}),
				/* @__PURE__ */ n(s, {
					html: e.summary,
					className: "monolith-ledger__summary"
				}),
				e.highlights && e.highlights.length > 0 && /* @__PURE__ */ n("ul", {
					className: "monolith-ledger__highlights",
					children: e.highlights.map(L)
				})
			]
		})]
	}, e.id);
}
function L(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
//#endregion
//#region src/templates/monolith/sections/Projects.tsx
var R = {
	rest: {
		opacity: 0,
		x: -6
	},
	hover: {
		opacity: 1,
		x: 0
	}
};
function z(t) {
	let i = e(9), { projects: a, index: o } = t, s;
	i[0] === o ? s = i[1] : (s = /* @__PURE__ */ n(N, {
		index: o,
		title: "Projects"
	}), i[0] = o, i[1] = s);
	let c;
	i[2] === a ? c = i[3] : (c = a.map(B), i[2] = a, i[3] = c);
	let l;
	i[4] === c ? l = i[5] : (l = /* @__PURE__ */ n("ul", {
		className: "monolith-index",
		children: c
	}), i[4] = c, i[5] = l);
	let u;
	return i[6] !== s || i[7] !== l ? (u = /* @__PURE__ */ r("section", {
		className: "monolith-section",
		id: "projects",
		children: [s, l]
	}), i[6] = s, i[7] = l, i[8] = u) : u = i[8], u;
}
function B(e) {
	return /* @__PURE__ */ r(o.li, {
		className: "monolith-index__row",
		initial: "rest",
		whileHover: "hover",
		animate: "rest",
		children: [e.imageUrl && /* @__PURE__ */ n("img", {
			className: "monolith-index__thumb",
			src: e.imageUrl,
			alt: "",
			loading: "lazy"
		}), /* @__PURE__ */ r("div", {
			className: "monolith-index__body",
			children: [
				/* @__PURE__ */ r("div", {
					className: "monolith-index__heading",
					children: [/* @__PURE__ */ n("h3", {
						className: "monolith-index__title",
						children: e.title
					}), /* @__PURE__ */ n(o.span, {
						className: "monolith-index__arrow",
						variants: R,
						"aria-hidden": "true",
						children: "→"
					})]
				}),
				/* @__PURE__ */ n(s, {
					html: e.description,
					className: "monolith-index__description"
				}),
				/* @__PURE__ */ r("div", {
					className: "monolith-index__meta",
					children: [
						e.tags && e.tags.length > 0 && /* @__PURE__ */ n("span", {
							className: "monolith-index__tags",
							children: e.tags.join(" · ")
						}),
						/* @__PURE__ */ n(c, { links: e.links }),
						e.liveUrl && /* @__PURE__ */ n("a", {
							href: e.liveUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Live"
						}),
						e.repoUrl && /* @__PURE__ */ n("a", {
							href: e.repoUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Source"
						})
					]
				})
			]
		})]
	}, e.id);
}
//#endregion
//#region src/templates/monolith/sections/Skills.tsx
function V(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.category ?? "General", r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return t;
}
function H(t) {
	let i = e(17), { skills: a, index: o } = t, s, c, l, u, d;
	if (i[0] !== o || i[1] !== a) {
		let e = V(a);
		l = "monolith-section", u = "skills", i[7] === o ? d = i[8] : (d = /* @__PURE__ */ n(N, {
			index: o,
			title: "Skills"
		}), i[7] = o, i[8] = d), s = "monolith-skills", c = Array.from(e.entries()).map(U), i[0] = o, i[1] = a, i[2] = s, i[3] = c, i[4] = l, i[5] = u, i[6] = d;
	} else s = i[2], c = i[3], l = i[4], u = i[5], d = i[6];
	let f;
	i[9] !== s || i[10] !== c ? (f = /* @__PURE__ */ n("div", {
		className: s,
		children: c
	}), i[9] = s, i[10] = c, i[11] = f) : f = i[11];
	let p;
	return i[12] !== l || i[13] !== u || i[14] !== d || i[15] !== f ? (p = /* @__PURE__ */ r("section", {
		className: l,
		id: u,
		children: [d, f]
	}), i[12] = l, i[13] = u, i[14] = d, i[15] = f, i[16] = p) : p = i[16], p;
}
function U(e) {
	let [t, i] = e;
	return /* @__PURE__ */ r("div", {
		className: "monolith-skills__group",
		children: [/* @__PURE__ */ n("span", {
			className: "monolith-skills__category",
			children: t
		}), /* @__PURE__ */ n("p", {
			className: "monolith-skills__list",
			children: i.map(W).join(" · ")
		})]
	}, t);
}
function W(e) {
	return e.name;
}
//#endregion
//#region src/templates/monolith/sections/Footer.tsx
function G(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function K(t) {
	let i = e(14), { profile: a, socials: o } = t, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ n("a", {
		href: `mailto:${a.email}`,
		children: a.email
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === a.phone ? u = i[4] : (u = a.phone && /* @__PURE__ */ n("a", {
		href: G(a.phone),
		children: a.phone
	}), i[3] = a.phone, i[4] = u);
	let d;
	i[5] === o ? d = i[6] : (d = o?.map(q), i[5] = o, i[6] = d);
	let f = a.fullName || "Your Name", p;
	i[7] === f ? p = i[8] : (p = /* @__PURE__ */ r("span", { children: [
		"© ",
		c,
		" ",
		f
	] }), i[7] = f, i[8] = p);
	let m;
	return i[9] !== l || i[10] !== u || i[11] !== d || i[12] !== p ? (m = /* @__PURE__ */ n("footer", {
		className: "monolith-footer",
		children: /* @__PURE__ */ r("div", {
			className: "monolith-footer__row",
			children: [
				l,
				u,
				d,
				p
			]
		})
	}), i[9] = l, i[10] = u, i[11] = d, i[12] = p, i[13] = m) : m = i[13], m;
}
function q(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/monolith/Template.tsx
function J(t) {
	let i = e(39), { data: a } = t, { mode: o, toggle: s } = b(a.theme, "light"), c = a.theme?.accentColor ?? "#b5482a", l = (a.experience?.length ?? 0) > 0, u = (a.projects?.length ?? 0) > 0, f = (a.skills?.length ?? 0) > 0, p = l && "experience", m = u && "projects", h = f && "skills", g;
	i[0] !== p || i[1] !== m || i[2] !== h ? (g = [
		p,
		m,
		h
	].filter(Y), i[0] = p, i[1] = m, i[2] = h, i[3] = g) : g = i[3];
	let _ = g, v;
	i[4] === c ? v = i[5] : (v = { "--monolith-accent": c }, i[4] = c, i[5] = v);
	let y = v, S;
	i[6] !== a.profile || i[7] !== a.socials ? (S = /* @__PURE__ */ n(M, {
		profile: a.profile,
		socials: a.socials
	}), i[6] = a.profile, i[7] = a.socials, i[8] = S) : S = i[8];
	let C;
	i[9] !== a.experience || i[10] !== l || i[11] !== _ ? (C = l && a.experience && /* @__PURE__ */ n(F, {
		experience: a.experience,
		index: _.indexOf("experience") + 1
	}), i[9] = a.experience, i[10] = l, i[11] = _, i[12] = C) : C = i[12];
	let w;
	i[13] !== a.projects || i[14] !== u || i[15] !== _ ? (w = u && a.projects && /* @__PURE__ */ n(z, {
		projects: a.projects,
		index: _.indexOf("projects") + 1
	}), i[13] = a.projects, i[14] = u, i[15] = _, i[16] = w) : w = i[16];
	let T;
	i[17] !== a.skills || i[18] !== f || i[19] !== _ ? (T = f && a.skills && /* @__PURE__ */ n(H, {
		skills: a.skills,
		index: _.indexOf("skills") + 1
	}), i[17] = a.skills, i[18] = f, i[19] = _, i[20] = T) : T = i[20];
	let E;
	i[21] === a ? E = i[22] : (E = /* @__PURE__ */ n(d, { data: a }), i[21] = a, i[22] = E);
	let D;
	i[23] !== o || i[24] !== s ? (D = /* @__PURE__ */ n(x, {
		mode: o,
		toggle: s
	}), i[23] = o, i[24] = s, i[25] = D) : D = i[25];
	let O;
	i[26] !== a.profile || i[27] !== a.socials ? (O = /* @__PURE__ */ n(K, {
		profile: a.profile,
		socials: a.socials
	}), i[26] = a.profile, i[27] = a.socials, i[28] = O) : O = i[28];
	let k;
	return i[29] !== o || i[30] !== T || i[31] !== E || i[32] !== D || i[33] !== O || i[34] !== y || i[35] !== S || i[36] !== C || i[37] !== w ? (k = /* @__PURE__ */ r("div", {
		className: "monolith",
		"data-theme": o,
		style: y,
		children: [
			S,
			C,
			w,
			T,
			E,
			D,
			O
		]
	}), i[29] = o, i[30] = T, i[31] = E, i[32] = D, i[33] = O, i[34] = y, i[35] = S, i[36] = C, i[37] = w, i[38] = k) : k = i[38], k;
}
function Y(e) {
	return e !== !1;
}
//#endregion
export { J as default };
