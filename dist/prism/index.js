import "./index.css";
import { c as e } from "react/compiler-runtime";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { useEffect as r, useState as i } from "react";
import { motion as a } from "motion/react";
//#region src/rich-text.tsx
function o(n) {
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
function s(n) {
	let r = e(4), { links: i } = n;
	if (!i?.length) return null;
	let a;
	r[0] === i ? a = r[1] : (a = i.map(c), r[0] = i, r[1] = a);
	let o;
	return r[2] === a ? o = r[3] : (o = /* @__PURE__ */ t("div", {
		className: "pb-extra-links",
		children: a
	}), r[2] = a, r[3] = o), o;
}
function c(e) {
	return /^https?:\/\//i.test(e.url) && /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noopener noreferrer",
		children: [e.label || "Visit link", " ↗"]
	}, e.id);
}
function l(e) {
	return `custom-${Array.from(e).map((e) => e.codePointAt(0).toString(16)).join("-")}`;
}
function u(r) {
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
			children: a.education.map(m)
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
			children: a.achievements.map(p)
		})]
	}), i[2] = a.achievements, i[3] = s);
	let c;
	i[4] === a.customSections ? c = i[5] : (c = (a.customSections ?? []).filter(f).map(d), i[4] = a.customSections, i[5] = c);
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
function d(e) {
	return /* @__PURE__ */ n("section", {
		id: l(e.id),
		className: "pb-extra-section",
		"aria-label": e.title,
		children: [/* @__PURE__ */ t("h2", { children: e.title }), /* @__PURE__ */ n("div", {
			className: "pb-extra-card",
			children: [/* @__PURE__ */ t(o, { html: e.content }), /* @__PURE__ */ t(s, { links: e.links })]
		})]
	}, e.id);
}
function f(e) {
	return e.visible !== !1 && e.title.trim();
}
function p(e) {
	return /* @__PURE__ */ n("article", {
		className: "pb-extra-card",
		children: [
			/* @__PURE__ */ t("h3", { children: e.title }),
			/* @__PURE__ */ t("p", {
				className: "pb-extra-meta",
				children: [e.issuer, e.date].filter(Boolean).join(" · ")
			}),
			/* @__PURE__ */ t(o, { html: e.description }),
			/* @__PURE__ */ t(s, { links: e.links })
		]
	}, e.id);
}
function m(e) {
	return /* @__PURE__ */ n("article", {
		className: "pb-extra-card",
		children: [
			/* @__PURE__ */ t("h3", { children: e.institution }),
			(e.degree || e.fieldOfStudy) && /* @__PURE__ */ t("p", { children: [e.degree, e.fieldOfStudy].filter(Boolean).join(" · ") }),
			e.range && /* @__PURE__ */ n("p", {
				className: "pb-extra-meta",
				children: [e.range.start, (e.range.current || e.range.end) && ` — ${e.range.current ? "Present" : e.range.end}`]
			}),
			/* @__PURE__ */ t(o, { html: e.summary })
		]
	}, e.id);
}
//#endregion
//#region src/portfolio-theme.tsx
var h = "pb-visitor-theme-v1";
function g() {
	return typeof window < "u" && window.self !== window.top;
}
function _() {
	if (typeof window > "u" || g()) return null;
	try {
		let e = localStorage.getItem(h);
		return e === "light" || e === "dark" ? e : null;
	} catch {
		return null;
	}
}
function v() {
	return typeof window < "u" && window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function y(t, n) {
	let a = e(10), [o, s] = i(_), [c, l] = i(v), u = t?.mode, d, f;
	a[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => l(e.matches ? "dark" : "light");
		return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, f = [], a[0] = d, a[1] = f) : (d = a[0], f = a[1]), r(d, f);
	let p;
	a[2] === Symbol.for("react.memo_cache_sentinel") ? (p = () => {
		g() && s(null);
	}, a[2] = p) : p = a[2];
	let m;
	a[3] === u ? m = a[4] : (m = [u], a[3] = u, a[4] = m), r(p, m);
	let y = o ?? (u === "system" ? c : u ?? n), b;
	a[5] === y ? b = a[6] : (b = () => {
		let e = y === "dark" ? "light" : "dark";
		if (s(e), !g()) try {
			localStorage.setItem(h, e);
		} catch {}
	}, a[5] = y, a[6] = b);
	let x = b, S;
	return a[7] !== y || a[8] !== x ? (S = {
		mode: y,
		toggle: x
	}, a[7] = y, a[8] = x, a[9] = S) : S = a[9], S;
}
function b(n) {
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
//#region src/templates/prism/sections/Background.tsx
function x() {
	let r = e(3), i;
	r[0] === Symbol.for("react.memo_cache_sentinel") ? (i = /* @__PURE__ */ t(a.div, {
		className: "prism-bg__blob prism-bg__blob--1",
		animate: {
			x: [
				0,
				30,
				-20,
				0
			],
			y: [
				0,
				-20,
				30,
				0
			]
		},
		transition: {
			duration: 22,
			repeat: Infinity,
			ease: "easeInOut"
		}
	}), r[0] = i) : i = r[0];
	let o;
	r[1] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ t(a.div, {
		className: "prism-bg__blob prism-bg__blob--2",
		animate: {
			x: [
				0,
				-25,
				15,
				0
			],
			y: [
				0,
				20,
				-25,
				0
			]
		},
		transition: {
			duration: 26,
			repeat: Infinity,
			ease: "easeInOut"
		}
	}), r[1] = o) : o = r[1];
	let s;
	return r[2] === Symbol.for("react.memo_cache_sentinel") ? (s = /* @__PURE__ */ n("div", {
		className: "prism-bg",
		"aria-hidden": "true",
		children: [
			i,
			o,
			/* @__PURE__ */ t(a.div, {
				className: "prism-bg__blob prism-bg__blob--3",
				animate: {
					x: [
						0,
						20,
						-30,
						0
					],
					y: [
						0,
						-15,
						10,
						0
					]
				},
				transition: {
					duration: 30,
					repeat: Infinity,
					ease: "easeInOut"
				}
			})
		]
	}), r[2] = s) : s = r[2], s;
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
//#region src/templates/prism/sections/Hero.tsx
var M = {
	github: "GitHub",
	linkedin: "LinkedIn",
	twitter: "X",
	bluesky: "Bluesky",
	dribbble: "Dribbble",
	behance: "Behance",
	youtube: "YouTube",
	website: "Web",
	other: "Link"
};
function N(r) {
	let i = e(30), { profile: s, socials: c } = r, l;
	i[0] === s ? l = i[1] : (l = A(s), i[0] = s, i[1] = l);
	let u = l, d, f, p;
	i[2] === Symbol.for("react.memo_cache_sentinel") ? (d = {
		opacity: 0,
		y: 24
	}, f = {
		opacity: 1,
		y: 0
	}, p = {
		duration: .5,
		ease: "easeOut"
	}, i[2] = d, i[3] = f, i[4] = p) : (d = i[2], f = i[3], p = i[4]);
	let m;
	i[5] !== s.avatarUrl || i[6] !== s.fullName ? (m = s.avatarUrl && /* @__PURE__ */ t("img", {
		className: "prism-hero__avatar",
		src: s.avatarUrl,
		alt: s.fullName
	}), i[5] = s.avatarUrl, i[6] = s.fullName, i[7] = m) : m = i[7];
	let h = s.fullName || "Your Name", g;
	i[8] === h ? g = i[9] : (g = /* @__PURE__ */ t("h1", {
		className: "prism-hero__name",
		children: h
	}), i[8] = h, i[9] = g);
	let _;
	i[10] === s.headline ? _ = i[11] : (_ = s.headline && /* @__PURE__ */ t("p", {
		className: "prism-hero__headline",
		children: s.headline
	}), i[10] = s.headline, i[11] = _);
	let v;
	i[12] === s.bio ? v = i[13] : (v = /* @__PURE__ */ t(o, {
		html: s.bio,
		className: "prism-hero__bio"
	}), i[12] = s.bio, i[13] = v);
	let y;
	i[14] === c ? y = i[15] : (y = c && c.length > 0 && /* @__PURE__ */ t("nav", {
		className: "prism-hero__socials",
		"aria-label": "Social links",
		children: c.map(P)
	}), i[14] = c, i[15] = y);
	let b;
	i[16] === u ? b = i[17] : (b = u && /* @__PURE__ */ n("a", {
		className: "prism-hero__resume",
		href: u.href,
		download: u.download,
		target: "_blank",
		rel: "noreferrer noopener",
		children: ["Download résumé", u.format && /* @__PURE__ */ t("span", {
			className: "prism-hero__resume-format",
			children: u.format
		})]
	}), i[16] = u, i[17] = b);
	let x;
	i[18] !== y || i[19] !== b || i[20] !== m || i[21] !== g || i[22] !== _ || i[23] !== v ? (x = /* @__PURE__ */ n(a.div, {
		className: "prism-card prism-hero__main",
		initial: d,
		animate: f,
		transition: p,
		children: [
			m,
			g,
			_,
			v,
			y,
			b
		]
	}), i[18] = y, i[19] = b, i[20] = m, i[21] = g, i[22] = _, i[23] = v, i[24] = x) : x = i[24];
	let S;
	i[25] === s.location ? S = i[26] : (S = s.location && /* @__PURE__ */ n(a.div, {
		className: "prism-card prism-hero__side",
		initial: {
			opacity: 0,
			y: 24
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .5,
			ease: "easeOut",
			delay: .1
		},
		children: [/* @__PURE__ */ t("span", {
			className: "prism-hero__side-label",
			children: "Based in"
		}), /* @__PURE__ */ t("span", {
			className: "prism-hero__side-value",
			children: s.location
		})]
	}), i[25] = s.location, i[26] = S);
	let C;
	return i[27] !== x || i[28] !== S ? (C = /* @__PURE__ */ n("header", {
		className: "prism-hero",
		children: [x, S]
	}), i[27] = x, i[28] = S, i[29] = C) : C = i[29], C;
}
function P(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "prism-chip prism-chip--link",
		children: e.label ?? M[e.platform]
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/prism/sections/Experience.tsx
function F(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function I(r) {
	let i = e(5), { experience: a } = r, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ t("h2", {
		className: "prism-section__title",
		children: "Experience"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(L), i[1] = a, i[2] = s);
	let c;
	return i[3] === s ? c = i[4] : (c = /* @__PURE__ */ n("section", {
		className: "prism-section",
		id: "experience",
		children: [o, /* @__PURE__ */ t("div", {
			className: "prism-grid",
			children: s
		})]
	}), i[3] = s, i[4] = c), c;
}
function L(e, r) {
	return /* @__PURE__ */ n(a.div, {
		className: "prism-card prism-experience-card",
		initial: {
			opacity: 0,
			scale: .92
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: !0,
			amount: .3
		},
		transition: {
			duration: .45,
			delay: r % 3 * .08,
			ease: "easeOut"
		},
		whileHover: {
			rotateX: -2,
			rotateY: 3,
			scale: 1.02
		},
		style: { transformPerspective: 800 },
		children: [
			/* @__PURE__ */ t("span", {
				className: "prism-badge",
				children: F(e.range)
			}),
			/* @__PURE__ */ t("h3", {
				className: "prism-experience-card__role",
				children: e.role
			}),
			/* @__PURE__ */ t("p", {
				className: "prism-experience-card__company",
				children: e.companyUrl ? /* @__PURE__ */ t("a", {
					href: e.companyUrl,
					target: "_blank",
					rel: "noreferrer noopener",
					children: e.company
				}) : e.company
			}),
			/* @__PURE__ */ t(o, {
				html: e.summary,
				className: "prism-experience-card__summary"
			}),
			e.highlights && e.highlights.length > 0 && /* @__PURE__ */ t("ul", {
				className: "prism-experience-card__highlights",
				children: e.highlights.map(R)
			})
		]
	}, e.id);
}
function R(e) {
	return /* @__PURE__ */ t("li", { children: e }, e);
}
//#endregion
//#region src/templates/prism/sections/cn.ts
function z(...e) {
	return e.filter(Boolean).join(" ");
}
//#endregion
//#region src/templates/prism/sections/Projects.tsx
function B(r) {
	let i = e(5), { projects: a } = r, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ t("h2", {
		className: "prism-section__title",
		children: "Projects"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(V), i[1] = a, i[2] = s);
	let c;
	return i[3] === s ? c = i[4] : (c = /* @__PURE__ */ n("section", {
		className: "prism-section",
		id: "projects",
		children: [o, /* @__PURE__ */ t("div", {
			className: "prism-bento",
			children: s
		})]
	}), i[3] = s, i[4] = c), c;
}
function V(e, r) {
	return /* @__PURE__ */ n(a.article, {
		className: z("prism-card", "prism-project-card", e.featured && "prism-project-card--featured"),
		initial: {
			opacity: 0,
			scale: .92
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: !0,
			amount: .25
		},
		transition: {
			duration: .45,
			delay: r % 3 * .08,
			ease: "easeOut"
		},
		whileHover: {
			rotateX: -2,
			rotateY: 3,
			scale: 1.015
		},
		style: { transformPerspective: 800 },
		children: [e.imageUrl && /* @__PURE__ */ t("div", {
			className: "prism-project-card__media",
			children: /* @__PURE__ */ t("img", {
				src: e.imageUrl,
				alt: e.title,
				loading: "lazy"
			})
		}), /* @__PURE__ */ n("div", {
			className: "prism-project-card__body",
			children: [
				/* @__PURE__ */ t("h3", {
					className: "prism-project-card__title",
					children: e.title
				}),
				/* @__PURE__ */ t(o, {
					html: e.description,
					className: "prism-project-card__description"
				}),
				e.tags && e.tags.length > 0 && /* @__PURE__ */ t("div", {
					className: "prism-project-card__tags",
					children: e.tags.map(H)
				}),
				/* @__PURE__ */ n("div", {
					className: "prism-project-card__links",
					children: [
						/* @__PURE__ */ t(s, { links: e.links }),
						e.liveUrl && /* @__PURE__ */ t("a", {
							href: e.liveUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Live ↗"
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
		})]
	}, e.id);
}
function H(e, n) {
	return /* @__PURE__ */ t("span", {
		className: "prism-chip",
		"data-tone": n % 3,
		children: e
	}, e);
}
//#endregion
//#region src/templates/prism/sections/Skills.tsx
function U(r) {
	let i = e(5), { skills: a } = r, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ t("h2", {
		className: "prism-section__title",
		children: "Skills"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(W), i[1] = a, i[2] = s);
	let c;
	return i[3] === s ? c = i[4] : (c = /* @__PURE__ */ n("section", {
		className: "prism-section",
		id: "skills",
		children: [o, /* @__PURE__ */ t("div", {
			className: "prism-card prism-skills",
			children: s
		})]
	}), i[3] = s, i[4] = c), c;
}
function W(e, n) {
	return /* @__PURE__ */ t(a.span, {
		className: "prism-chip prism-chip--skill",
		"data-tone": n % 3,
		initial: {
			opacity: 0,
			scale: .5
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: !0,
			amount: .6
		},
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 15,
			delay: n * .03
		},
		children: e.name
	}, e.id);
}
//#endregion
//#region src/templates/prism/sections/Footer.tsx
function G(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function K(r) {
	let i = e(14), { profile: a, socials: o } = r, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ t("a", {
		className: "prism-footer__cta",
		href: `mailto:${a.email}`,
		children: "Say hello ↗"
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === a.phone ? u = i[4] : (u = a.phone && /* @__PURE__ */ t("a", {
		className: "prism-footer__phone",
		href: G(a.phone),
		children: a.phone
	}), i[3] = a.phone, i[4] = u);
	let d;
	i[5] === o ? d = i[6] : (d = o && o.length > 0 && /* @__PURE__ */ t("nav", {
		className: "prism-footer__socials",
		"aria-label": "Social links",
		children: o.map(q)
	}), i[5] = o, i[6] = d);
	let f = a.fullName || "Your Name", p;
	i[7] === f ? p = i[8] : (p = /* @__PURE__ */ n("p", {
		className: "prism-footer__copy",
		children: [
			"© ",
			c,
			" ",
			f
		]
	}), i[7] = f, i[8] = p);
	let m;
	return i[9] !== l || i[10] !== u || i[11] !== d || i[12] !== p ? (m = /* @__PURE__ */ t("footer", {
		className: "prism-section prism-footer",
		children: /* @__PURE__ */ n("div", {
			className: "prism-card prism-footer__card",
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
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "prism-chip",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/prism/Template.tsx
function J(r) {
	let i = e(32), { data: a } = r, { mode: o, toggle: s } = y(a.theme, "light"), c = a.theme?.accentColor ?? "#7c5cff", l;
	i[0] === c ? l = i[1] : (l = { "--prism-accent": c }, i[0] = c, i[1] = l);
	let d = l, f;
	i[2] === Symbol.for("react.memo_cache_sentinel") ? (f = /* @__PURE__ */ t(x, {}), i[2] = f) : f = i[2];
	let p;
	i[3] !== a.profile || i[4] !== a.socials ? (p = /* @__PURE__ */ t(N, {
		profile: a.profile,
		socials: a.socials
	}), i[3] = a.profile, i[4] = a.socials, i[5] = p) : p = i[5];
	let m;
	i[6] === a.experience ? m = i[7] : (m = a.experience && a.experience.length > 0 && /* @__PURE__ */ t(I, { experience: a.experience }), i[6] = a.experience, i[7] = m);
	let h;
	i[8] === a.projects ? h = i[9] : (h = a.projects && a.projects.length > 0 && /* @__PURE__ */ t(B, { projects: a.projects }), i[8] = a.projects, i[9] = h);
	let g;
	i[10] === a.skills ? g = i[11] : (g = a.skills && a.skills.length > 0 && /* @__PURE__ */ t(U, { skills: a.skills }), i[10] = a.skills, i[11] = g);
	let _;
	i[12] === a ? _ = i[13] : (_ = /* @__PURE__ */ t(u, { data: a }), i[12] = a, i[13] = _);
	let v;
	i[14] !== o || i[15] !== s ? (v = /* @__PURE__ */ t(b, {
		mode: o,
		toggle: s
	}), i[14] = o, i[15] = s, i[16] = v) : v = i[16];
	let S;
	i[17] !== a.profile || i[18] !== a.socials ? (S = /* @__PURE__ */ t(K, {
		profile: a.profile,
		socials: a.socials
	}), i[17] = a.profile, i[18] = a.socials, i[19] = S) : S = i[19];
	let C;
	i[20] !== S || i[21] !== p || i[22] !== m || i[23] !== h || i[24] !== g || i[25] !== _ || i[26] !== v ? (C = /* @__PURE__ */ n("div", {
		className: "prism-content",
		children: [
			p,
			m,
			h,
			g,
			_,
			v,
			S
		]
	}), i[20] = S, i[21] = p, i[22] = m, i[23] = h, i[24] = g, i[25] = _, i[26] = v, i[27] = C) : C = i[27];
	let w;
	return i[28] !== o || i[29] !== C || i[30] !== d ? (w = /* @__PURE__ */ n("div", {
		className: "prism",
		"data-theme": o,
		style: d,
		children: [f, C]
	}), i[28] = o, i[29] = C, i[30] = d, i[31] = w) : w = i[31], w;
}
//#endregion
export { J as default };
