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
//#region src/uploads.ts
function x(e) {
	return A(e, "word/document.xml") !== -1;
}
var S = {
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
		verify: x
	}]
};
function C(e, t) {
	let n = t.toLowerCase();
	return e.formats.find((e) => e.extensions.includes(n));
}
function w(e) {
	if (!e) return;
	let t = e.split(/[?#]/, 1)[0] ?? "";
	return /\.([a-z0-9]+)$/i.exec(t)?.[1]?.toLowerCase();
}
function T(e) {
	let t = w(e.resumeFilename) ?? w(e.resumeUrl);
	if (t) return C(S, t)?.label;
}
var E = {
	"–": "-",
	"—": "-",
	"‘": "'",
	"’": "'",
	"“": "\"",
	"”": "\"",
	"…": "...",
	"\xA0": " "
};
function D(e) {
	return e.replace(/[\u2013\u2014\u2018\u2019\u201c\u201d\u2026\u00a0]/g, (e) => E[e] ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7e]/g, "").replace(/\s+/g, " ").replace(/\s+(?=\.[^.]*$)/, "").trim();
}
function O(e) {
	if (!e.resumeUrl) return;
	if (e.resumeFilename) {
		let t = D(e.resumeFilename);
		if (/[^.]/.test(t.replace(/\.[^.]*$/, ""))) return t;
	}
	let t = w(e.resumeUrl);
	if (!t || !C(S, t)) return;
	let n = e.fullName.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
	return n ? `${n}-resume.${t}` : `resume.${t}`;
}
function k(e) {
	return e.resumeUrl ? {
		href: e.resumeUrl,
		download: O(e),
		format: T(e)
	} : null;
}
function A(e, t) {
	let n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	outer: for (let t = 0; t <= e.length - n.length; t++) {
		for (let r = 0; r < n.length; r++) if (e[t + r] !== n[r]) continue outer;
		return t;
	}
	return -1;
}
//#endregion
//#region src/templates/aurora/sections/Hero.tsx
var j = {
	github: "GitHub",
	linkedin: "LinkedIn",
	twitter: "X / Twitter",
	bluesky: "Bluesky",
	dribbble: "Dribbble",
	behance: "Behance",
	youtube: "YouTube",
	website: "Website",
	other: "Link"
};
function M(r) {
	let i = e(29), { profile: s, socials: c } = r, l;
	i[0] === s ? l = i[1] : (l = k(s), i[0] = s, i[1] = l);
	let u = l, d;
	i[2] === Symbol.for("react.memo_cache_sentinel") ? (d = /* @__PURE__ */ t("div", {
		className: "aurora-hero__glow",
		"aria-hidden": "true"
	}), i[2] = d) : d = i[2];
	let f, p, m;
	i[3] === Symbol.for("react.memo_cache_sentinel") ? (f = {
		opacity: 0,
		y: 24
	}, p = {
		opacity: 1,
		y: 0
	}, m = {
		duration: .6,
		ease: "easeOut"
	}, i[3] = f, i[4] = p, i[5] = m) : (f = i[3], p = i[4], m = i[5]);
	let h;
	i[6] !== s.avatarUrl || i[7] !== s.fullName ? (h = s.avatarUrl && /* @__PURE__ */ t("img", {
		className: "aurora-hero__avatar",
		src: s.avatarUrl,
		alt: s.fullName
	}), i[6] = s.avatarUrl, i[7] = s.fullName, i[8] = h) : h = i[8];
	let g = s.fullName || "Your Name", _;
	i[9] === g ? _ = i[10] : (_ = /* @__PURE__ */ t("h1", {
		className: "aurora-hero__name",
		children: g
	}), i[9] = g, i[10] = _);
	let v;
	i[11] === s.headline ? v = i[12] : (v = s.headline && /* @__PURE__ */ t("p", {
		className: "aurora-hero__headline",
		children: s.headline
	}), i[11] = s.headline, i[12] = v);
	let y;
	i[13] === s.bio ? y = i[14] : (y = /* @__PURE__ */ t(o, {
		html: s.bio,
		className: "aurora-hero__bio"
	}), i[13] = s.bio, i[14] = y);
	let b;
	i[15] === s.location ? b = i[16] : (b = s.location && /* @__PURE__ */ t("p", {
		className: "aurora-hero__location",
		children: s.location
	}), i[15] = s.location, i[16] = b);
	let x;
	i[17] === c ? x = i[18] : (x = c && c.length > 0 && /* @__PURE__ */ t("nav", {
		className: "aurora-hero__socials",
		"aria-label": "Social links",
		children: c.map(N)
	}), i[17] = c, i[18] = x);
	let S;
	i[19] === u ? S = i[20] : (S = u && /* @__PURE__ */ n("a", {
		className: "aurora-hero__resume",
		href: u.href,
		download: u.download,
		target: "_blank",
		rel: "noreferrer noopener",
		children: ["Download résumé", u.format && /* @__PURE__ */ t("span", {
			className: "aurora-hero__resume-format",
			children: u.format
		})]
	}), i[19] = u, i[20] = S);
	let C;
	return i[21] !== y || i[22] !== b || i[23] !== x || i[24] !== S || i[25] !== h || i[26] !== _ || i[27] !== v ? (C = /* @__PURE__ */ n("header", {
		className: "aurora-hero",
		children: [d, /* @__PURE__ */ n(a.div, {
			className: "aurora-hero__content",
			initial: f,
			animate: p,
			transition: m,
			children: [
				h,
				_,
				v,
				y,
				b,
				x,
				S
			]
		})]
	}), i[21] = y, i[22] = b, i[23] = x, i[24] = S, i[25] = h, i[26] = _, i[27] = v, i[28] = C) : C = i[28], C;
}
function N(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "aurora-hero__social",
		children: e.label ?? j[e.platform]
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/aurora/sections/Experience.tsx
function P(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function F(r) {
	let i = e(5), { experience: o } = r, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = /* @__PURE__ */ t(a.h2, {
		className: "aurora-section__title",
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: !0,
			amount: .4
		},
		transition: { duration: .5 },
		children: "Experience"
	}), i[0] = s) : s = i[0];
	let c;
	i[1] === o ? c = i[2] : (c = o.map(I), i[1] = o, i[2] = c);
	let l;
	return i[3] === c ? l = i[4] : (l = /* @__PURE__ */ n("section", {
		className: "aurora-section",
		id: "experience",
		children: [s, /* @__PURE__ */ t("ol", {
			className: "aurora-timeline",
			children: c
		})]
	}), i[3] = c, i[4] = l), l;
}
function I(e, r) {
	return /* @__PURE__ */ n(a.li, {
		className: "aurora-timeline__item",
		initial: {
			opacity: 0,
			x: -16
		},
		whileInView: {
			opacity: 1,
			x: 0
		},
		viewport: {
			once: !0,
			amount: .4
		},
		transition: {
			duration: .4,
			delay: r * .06
		},
		children: [/* @__PURE__ */ t("div", {
			className: "aurora-timeline__marker",
			"aria-hidden": "true"
		}), /* @__PURE__ */ n("div", {
			className: "aurora-timeline__body",
			children: [
				/* @__PURE__ */ n("div", {
					className: "aurora-timeline__heading",
					children: [/* @__PURE__ */ t("h3", { children: e.role }), /* @__PURE__ */ t("span", {
						className: "aurora-timeline__range",
						children: P(e.range)
					})]
				}),
				/* @__PURE__ */ n("p", {
					className: "aurora-timeline__company",
					children: [e.companyUrl ? /* @__PURE__ */ t("a", {
						href: e.companyUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: e.company
					}) : e.company, e.location ? ` · ${e.location}` : ""]
				}),
				/* @__PURE__ */ t(o, {
					html: e.summary,
					className: "aurora-timeline__summary"
				}),
				e.highlights && e.highlights.length > 0 && /* @__PURE__ */ t("ul", {
					className: "aurora-timeline__highlights",
					children: e.highlights.map(L)
				})
			]
		})]
	}, e.id);
}
function L(e) {
	return /* @__PURE__ */ t("li", { children: e }, e);
}
//#endregion
//#region src/templates/aurora/sections/Projects.tsx
function R(r) {
	let i = e(5), { projects: o } = r, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = /* @__PURE__ */ t(a.h2, {
		className: "aurora-section__title",
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: !0,
			amount: .4
		},
		transition: { duration: .5 },
		children: "Projects"
	}), i[0] = s) : s = i[0];
	let c;
	i[1] === o ? c = i[2] : (c = o.map(z), i[1] = o, i[2] = c);
	let l;
	return i[3] === c ? l = i[4] : (l = /* @__PURE__ */ n("section", {
		className: "aurora-section",
		id: "projects",
		children: [s, /* @__PURE__ */ t("div", {
			className: "aurora-grid",
			children: c
		})]
	}), i[3] = c, i[4] = l), l;
}
function z(e, r) {
	return /* @__PURE__ */ n(a.article, {
		className: "aurora-card",
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: !0,
			amount: .3
		},
		transition: {
			duration: .4,
			delay: r * .05
		},
		whileHover: { y: -4 },
		children: [e.imageUrl && /* @__PURE__ */ t("div", {
			className: "aurora-card__media",
			children: /* @__PURE__ */ t("img", {
				src: e.imageUrl,
				alt: e.title,
				loading: "lazy"
			})
		}), /* @__PURE__ */ n("div", {
			className: "aurora-card__body",
			children: [
				/* @__PURE__ */ t("h3", {
					className: "aurora-card__title",
					children: e.title
				}),
				/* @__PURE__ */ t(o, {
					html: e.description,
					className: "aurora-card__description"
				}),
				e.tags && e.tags.length > 0 && /* @__PURE__ */ t("ul", {
					className: "aurora-card__tags",
					children: e.tags.map(B)
				}),
				/* @__PURE__ */ n("div", {
					className: "aurora-card__links",
					children: [
						/* @__PURE__ */ t(s, { links: e.links }),
						e.liveUrl && /* @__PURE__ */ t("a", {
							href: e.liveUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Live"
						}),
						e.repoUrl && /* @__PURE__ */ t("a", {
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
function B(e) {
	return /* @__PURE__ */ t("li", { children: e }, e);
}
//#endregion
//#region src/templates/aurora/sections/Skills.tsx
function V(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.category ?? "Skills", r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return t;
}
function H(r) {
	let i = e(15), { skills: o } = r, s, c, l, u, d;
	if (i[0] !== o) {
		let e = V(o);
		l = "aurora-section", u = "skills", i[6] === Symbol.for("react.memo_cache_sentinel") ? (d = /* @__PURE__ */ t(a.h2, {
			className: "aurora-section__title",
			initial: {
				opacity: 0,
				y: 16
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: !0,
				amount: .4
			},
			transition: { duration: .5 },
			children: "Skills"
		}), i[6] = d) : d = i[6], s = "aurora-skills", c = Array.from(e.entries()).map(U), i[0] = o, i[1] = s, i[2] = c, i[3] = l, i[4] = u, i[5] = d;
	} else s = i[1], c = i[2], l = i[3], u = i[4], d = i[5];
	let f;
	i[7] !== s || i[8] !== c ? (f = /* @__PURE__ */ t("div", {
		className: s,
		children: c
	}), i[7] = s, i[8] = c, i[9] = f) : f = i[9];
	let p;
	return i[10] !== l || i[11] !== u || i[12] !== d || i[13] !== f ? (p = /* @__PURE__ */ n("section", {
		className: l,
		id: u,
		children: [d, f]
	}), i[10] = l, i[11] = u, i[12] = d, i[13] = f, i[14] = p) : p = i[14], p;
}
function U(e) {
	let [r, i] = e;
	return /* @__PURE__ */ n("div", {
		className: "aurora-skills__group",
		children: [/* @__PURE__ */ t("h3", {
			className: "aurora-skills__category",
			children: r
		}), /* @__PURE__ */ t("ul", {
			className: "aurora-skills__list",
			children: i.map(W)
		})]
	}, r);
}
function W(e) {
	return /* @__PURE__ */ t(a.li, {
		className: "aurora-skills__pill",
		"data-level": e.level,
		initial: {
			opacity: 0,
			scale: .9
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: !0,
			amount: .6
		},
		transition: { duration: .25 },
		children: e.name
	}, e.id);
}
//#endregion
//#region src/templates/aurora/sections/Footer.tsx
function G(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function K(r) {
	let i = e(14), { profile: a, socials: o } = r, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ t("a", {
		className: "aurora-footer__email",
		href: `mailto:${a.email}`,
		children: a.email
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === a.phone ? u = i[4] : (u = a.phone && /* @__PURE__ */ t("a", {
		className: "aurora-footer__phone",
		href: G(a.phone),
		children: a.phone
	}), i[3] = a.phone, i[4] = u);
	let d;
	i[5] === o ? d = i[6] : (d = o && o.length > 0 && /* @__PURE__ */ t("nav", {
		className: "aurora-footer__socials",
		"aria-label": "Social links",
		children: o.map(q)
	}), i[5] = o, i[6] = d);
	let f = a.fullName || "Your Name", p;
	i[7] === f ? p = i[8] : (p = /* @__PURE__ */ n("p", {
		className: "aurora-footer__copy",
		children: [
			"© ",
			c,
			" ",
			f
		]
	}), i[7] = f, i[8] = p);
	let m;
	return i[9] !== l || i[10] !== u || i[11] !== d || i[12] !== p ? (m = /* @__PURE__ */ n("footer", {
		className: "aurora-footer",
		children: [
			l,
			u,
			d,
			p
		]
	}), i[9] = l, i[10] = u, i[11] = d, i[12] = p, i[13] = m) : m = i[13], m;
}
function q(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/aurora/Template.tsx
function J(r) {
	let i = e(29), { data: a } = r, { mode: o, toggle: s } = y(a.theme, "dark"), c = a.theme?.accentColor ?? "#7c3aed", l;
	i[0] === c ? l = i[1] : (l = { "--aurora-accent": c }, i[0] = c, i[1] = l);
	let d = l, f;
	i[2] !== a.profile || i[3] !== a.socials ? (f = /* @__PURE__ */ t(M, {
		profile: a.profile,
		socials: a.socials
	}), i[2] = a.profile, i[3] = a.socials, i[4] = f) : f = i[4];
	let p;
	i[5] === a.experience ? p = i[6] : (p = a.experience && a.experience.length > 0 && /* @__PURE__ */ t(F, { experience: a.experience }), i[5] = a.experience, i[6] = p);
	let m;
	i[7] === a.projects ? m = i[8] : (m = a.projects && a.projects.length > 0 && /* @__PURE__ */ t(R, { projects: a.projects }), i[7] = a.projects, i[8] = m);
	let h;
	i[9] === a.skills ? h = i[10] : (h = a.skills && a.skills.length > 0 && /* @__PURE__ */ t(H, { skills: a.skills }), i[9] = a.skills, i[10] = h);
	let g;
	i[11] === a ? g = i[12] : (g = /* @__PURE__ */ t(u, { data: a }), i[11] = a, i[12] = g);
	let _;
	i[13] !== o || i[14] !== s ? (_ = /* @__PURE__ */ t(b, {
		mode: o,
		toggle: s
	}), i[13] = o, i[14] = s, i[15] = _) : _ = i[15];
	let v;
	i[16] !== a.profile || i[17] !== a.socials ? (v = /* @__PURE__ */ t(K, {
		profile: a.profile,
		socials: a.socials
	}), i[16] = a.profile, i[17] = a.socials, i[18] = v) : v = i[18];
	let x;
	return i[19] !== o || i[20] !== d || i[21] !== f || i[22] !== p || i[23] !== m || i[24] !== h || i[25] !== g || i[26] !== _ || i[27] !== v ? (x = /* @__PURE__ */ n("div", {
		className: "aurora",
		"data-theme": o,
		style: d,
		children: [
			f,
			p,
			m,
			h,
			g,
			_,
			v
		]
	}), i[19] = o, i[20] = d, i[21] = f, i[22] = p, i[23] = m, i[24] = h, i[25] = g, i[26] = _, i[27] = v, i[28] = x) : x = i[28], x;
}
//#endregion
export { J as default };
