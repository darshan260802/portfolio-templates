import { c as e } from "react/compiler-runtime";
import { motion as t } from "motion/react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import './index.css';//#region src/templates/prism/sections/Background.tsx
function i() {
	let i = e(3), a;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (a = /* @__PURE__ */ n(t.div, {
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
	}), i[0] = a) : a = i[0];
	let o;
	i[1] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ n(t.div, {
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
	}), i[1] = o) : o = i[1];
	let s;
	return i[2] === Symbol.for("react.memo_cache_sentinel") ? (s = /* @__PURE__ */ r("div", {
		className: "prism-bg",
		"aria-hidden": "true",
		children: [
			a,
			o,
			/* @__PURE__ */ n(t.div, {
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
	}), i[2] = s) : s = i[2], s;
}
//#endregion
//#region src/rich-text.tsx
function a(t) {
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
//#region src/uploads.ts
function o(e) {
	return p(e, "word/document.xml") !== -1;
}
var s = {
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
		verify: o
	}]
};
function c(e, t) {
	let n = t.toLowerCase();
	return e.formats.find((e) => e.extensions.includes(n));
}
function l(e) {
	if (!e) return;
	let t = e.split(/[?#]/, 1)[0] ?? "";
	return /\.([a-z0-9]+)$/i.exec(t)?.[1]?.toLowerCase();
}
function u(e) {
	let t = l(e.resumeFilename) ?? l(e.resumeUrl);
	if (t) return c(s, t)?.label;
}
function d(e) {
	if (!e.resumeUrl) return;
	if (e.resumeFilename) return e.resumeFilename;
	let t = l(e.resumeUrl);
	if (!t || !c(s, t)) return;
	let n = e.fullName.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
	return n ? `${n}-resume.${t}` : `resume.${t}`;
}
function f(e) {
	return e.resumeUrl ? {
		href: e.resumeUrl,
		download: d(e),
		format: u(e)
	} : null;
}
function p(e, t) {
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
var m = {
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
function h(i) {
	let o = e(30), { profile: s, socials: c } = i, l;
	o[0] === s ? l = o[1] : (l = f(s), o[0] = s, o[1] = l);
	let u = l, d, p, m;
	o[2] === Symbol.for("react.memo_cache_sentinel") ? (d = {
		opacity: 0,
		y: 24
	}, p = {
		opacity: 1,
		y: 0
	}, m = {
		duration: .5,
		ease: "easeOut"
	}, o[2] = d, o[3] = p, o[4] = m) : (d = o[2], p = o[3], m = o[4]);
	let h;
	o[5] !== s.avatarUrl || o[6] !== s.fullName ? (h = s.avatarUrl && /* @__PURE__ */ n("img", {
		className: "prism-hero__avatar",
		src: s.avatarUrl,
		alt: s.fullName
	}), o[5] = s.avatarUrl, o[6] = s.fullName, o[7] = h) : h = o[7];
	let _ = s.fullName || "Your Name", v;
	o[8] === _ ? v = o[9] : (v = /* @__PURE__ */ n("h1", {
		className: "prism-hero__name",
		children: _
	}), o[8] = _, o[9] = v);
	let y;
	o[10] === s.headline ? y = o[11] : (y = s.headline && /* @__PURE__ */ n("p", {
		className: "prism-hero__headline",
		children: s.headline
	}), o[10] = s.headline, o[11] = y);
	let b;
	o[12] === s.bio ? b = o[13] : (b = /* @__PURE__ */ n(a, {
		html: s.bio,
		className: "prism-hero__bio"
	}), o[12] = s.bio, o[13] = b);
	let x;
	o[14] === c ? x = o[15] : (x = c && c.length > 0 && /* @__PURE__ */ n("nav", {
		className: "prism-hero__socials",
		"aria-label": "Social links",
		children: c.map(g)
	}), o[14] = c, o[15] = x);
	let S;
	o[16] === u ? S = o[17] : (S = u && /* @__PURE__ */ r("a", {
		className: "prism-hero__resume",
		href: u.href,
		download: u.download,
		target: "_blank",
		rel: "noreferrer noopener",
		children: ["Download résumé", u.format && /* @__PURE__ */ n("span", {
			className: "prism-hero__resume-format",
			children: u.format
		})]
	}), o[16] = u, o[17] = S);
	let C;
	o[18] !== x || o[19] !== S || o[20] !== h || o[21] !== v || o[22] !== y || o[23] !== b ? (C = /* @__PURE__ */ r(t.div, {
		className: "prism-card prism-hero__main",
		initial: d,
		animate: p,
		transition: m,
		children: [
			h,
			v,
			y,
			b,
			x,
			S
		]
	}), o[18] = x, o[19] = S, o[20] = h, o[21] = v, o[22] = y, o[23] = b, o[24] = C) : C = o[24];
	let w;
	o[25] === s.location ? w = o[26] : (w = s.location && /* @__PURE__ */ r(t.div, {
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
		children: [/* @__PURE__ */ n("span", {
			className: "prism-hero__side-label",
			children: "Based in"
		}), /* @__PURE__ */ n("span", {
			className: "prism-hero__side-value",
			children: s.location
		})]
	}), o[25] = s.location, o[26] = w);
	let T;
	return o[27] !== C || o[28] !== w ? (T = /* @__PURE__ */ r("header", {
		className: "prism-hero",
		children: [C, w]
	}), o[27] = C, o[28] = w, o[29] = T) : T = o[29], T;
}
function g(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "prism-chip prism-chip--link",
		children: e.label ?? m[e.platform]
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/prism/sections/Experience.tsx
function _(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function v(t) {
	let i = e(5), { experience: a } = t, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ n("h2", {
		className: "prism-section__title",
		children: "Experience"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(y), i[1] = a, i[2] = s);
	let c;
	return i[3] === s ? c = i[4] : (c = /* @__PURE__ */ r("section", {
		className: "prism-section",
		id: "experience",
		children: [o, /* @__PURE__ */ n("div", {
			className: "prism-grid",
			children: s
		})]
	}), i[3] = s, i[4] = c), c;
}
function y(e, i) {
	return /* @__PURE__ */ r(t.div, {
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
			delay: i % 3 * .08,
			ease: "easeOut"
		},
		whileHover: {
			rotateX: -2,
			rotateY: 3,
			scale: 1.02
		},
		style: { transformPerspective: 800 },
		children: [
			/* @__PURE__ */ n("span", {
				className: "prism-badge",
				children: _(e.range)
			}),
			/* @__PURE__ */ n("h3", {
				className: "prism-experience-card__role",
				children: e.role
			}),
			/* @__PURE__ */ n("p", {
				className: "prism-experience-card__company",
				children: e.companyUrl ? /* @__PURE__ */ n("a", {
					href: e.companyUrl,
					target: "_blank",
					rel: "noreferrer noopener",
					children: e.company
				}) : e.company
			}),
			/* @__PURE__ */ n(a, {
				html: e.summary,
				className: "prism-experience-card__summary"
			}),
			e.highlights && e.highlights.length > 0 && /* @__PURE__ */ n("ul", {
				className: "prism-experience-card__highlights",
				children: e.highlights.map(b)
			})
		]
	}, e.id);
}
function b(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
//#endregion
//#region src/templates/prism/sections/cn.ts
function x(...e) {
	return e.filter(Boolean).join(" ");
}
//#endregion
//#region src/templates/prism/sections/Projects.tsx
function S(t) {
	let i = e(5), { projects: a } = t, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ n("h2", {
		className: "prism-section__title",
		children: "Projects"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(C), i[1] = a, i[2] = s);
	let c;
	return i[3] === s ? c = i[4] : (c = /* @__PURE__ */ r("section", {
		className: "prism-section",
		id: "projects",
		children: [o, /* @__PURE__ */ n("div", {
			className: "prism-bento",
			children: s
		})]
	}), i[3] = s, i[4] = c), c;
}
function C(e, i) {
	return /* @__PURE__ */ r(t.article, {
		className: x("prism-card", "prism-project-card", e.featured && "prism-project-card--featured"),
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
			delay: i % 3 * .08,
			ease: "easeOut"
		},
		whileHover: {
			rotateX: -2,
			rotateY: 3,
			scale: 1.015
		},
		style: { transformPerspective: 800 },
		children: [e.imageUrl && /* @__PURE__ */ n("div", {
			className: "prism-project-card__media",
			children: /* @__PURE__ */ n("img", {
				src: e.imageUrl,
				alt: e.title,
				loading: "lazy"
			})
		}), /* @__PURE__ */ r("div", {
			className: "prism-project-card__body",
			children: [
				/* @__PURE__ */ n("h3", {
					className: "prism-project-card__title",
					children: e.title
				}),
				/* @__PURE__ */ n(a, {
					html: e.description,
					className: "prism-project-card__description"
				}),
				e.tags && e.tags.length > 0 && /* @__PURE__ */ n("div", {
					className: "prism-project-card__tags",
					children: e.tags.map(w)
				}),
				/* @__PURE__ */ r("div", {
					className: "prism-project-card__links",
					children: [e.liveUrl && /* @__PURE__ */ n("a", {
						href: e.liveUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: "Live ↗"
					}), e.repoUrl && /* @__PURE__ */ n("a", {
						href: e.repoUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: "Source ↗"
					})]
				})
			]
		})]
	}, e.id);
}
function w(e, t) {
	return /* @__PURE__ */ n("span", {
		className: "prism-chip",
		"data-tone": t % 3,
		children: e
	}, e);
}
//#endregion
//#region src/templates/prism/sections/Skills.tsx
function T(t) {
	let i = e(5), { skills: a } = t, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ n("h2", {
		className: "prism-section__title",
		children: "Skills"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(E), i[1] = a, i[2] = s);
	let c;
	return i[3] === s ? c = i[4] : (c = /* @__PURE__ */ r("section", {
		className: "prism-section",
		id: "skills",
		children: [o, /* @__PURE__ */ n("div", {
			className: "prism-card prism-skills",
			children: s
		})]
	}), i[3] = s, i[4] = c), c;
}
function E(e, r) {
	return /* @__PURE__ */ n(t.span, {
		className: "prism-chip prism-chip--skill",
		"data-tone": r % 3,
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
			delay: r * .03
		},
		children: e.name
	}, e.id);
}
//#endregion
//#region src/templates/prism/sections/Footer.tsx
function D(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function O(t) {
	let i = e(14), { profile: a, socials: o } = t, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ n("a", {
		className: "prism-footer__cta",
		href: `mailto:${a.email}`,
		children: "Say hello ↗"
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === a.phone ? u = i[4] : (u = a.phone && /* @__PURE__ */ n("a", {
		className: "prism-footer__phone",
		href: D(a.phone),
		children: a.phone
	}), i[3] = a.phone, i[4] = u);
	let d;
	i[5] === o ? d = i[6] : (d = o && o.length > 0 && /* @__PURE__ */ n("nav", {
		className: "prism-footer__socials",
		"aria-label": "Social links",
		children: o.map(k)
	}), i[5] = o, i[6] = d);
	let f = a.fullName || "Your Name", p;
	i[7] === f ? p = i[8] : (p = /* @__PURE__ */ r("p", {
		className: "prism-footer__copy",
		children: [
			"© ",
			c,
			" ",
			f
		]
	}), i[7] = f, i[8] = p);
	let m;
	return i[9] !== l || i[10] !== u || i[11] !== d || i[12] !== p ? (m = /* @__PURE__ */ n("footer", {
		className: "prism-section prism-footer",
		children: /* @__PURE__ */ r("div", {
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
function k(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "prism-chip",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/prism/Template.tsx
function A(t) {
	let a = e(25), { data: o } = t, s = o.theme?.mode === "dark" ? "dark" : "light", c = o.theme?.accentColor ?? "#7c5cff", l;
	a[0] === c ? l = a[1] : (l = { "--prism-accent": c }, a[0] = c, a[1] = l);
	let u = l, d;
	a[2] === Symbol.for("react.memo_cache_sentinel") ? (d = /* @__PURE__ */ n(i, {}), a[2] = d) : d = a[2];
	let f;
	a[3] !== o.profile || a[4] !== o.socials ? (f = /* @__PURE__ */ n(h, {
		profile: o.profile,
		socials: o.socials
	}), a[3] = o.profile, a[4] = o.socials, a[5] = f) : f = a[5];
	let p;
	a[6] === o.experience ? p = a[7] : (p = o.experience && o.experience.length > 0 && /* @__PURE__ */ n(v, { experience: o.experience }), a[6] = o.experience, a[7] = p);
	let m;
	a[8] === o.projects ? m = a[9] : (m = o.projects && o.projects.length > 0 && /* @__PURE__ */ n(S, { projects: o.projects }), a[8] = o.projects, a[9] = m);
	let g;
	a[10] === o.skills ? g = a[11] : (g = o.skills && o.skills.length > 0 && /* @__PURE__ */ n(T, { skills: o.skills }), a[10] = o.skills, a[11] = g);
	let _;
	a[12] !== o.profile || a[13] !== o.socials ? (_ = /* @__PURE__ */ n(O, {
		profile: o.profile,
		socials: o.socials
	}), a[12] = o.profile, a[13] = o.socials, a[14] = _) : _ = a[14];
	let y;
	a[15] !== f || a[16] !== p || a[17] !== m || a[18] !== g || a[19] !== _ ? (y = /* @__PURE__ */ r("div", {
		className: "prism-content",
		children: [
			f,
			p,
			m,
			g,
			_
		]
	}), a[15] = f, a[16] = p, a[17] = m, a[18] = g, a[19] = _, a[20] = y) : y = a[20];
	let b;
	return a[21] !== s || a[22] !== u || a[23] !== y ? (b = /* @__PURE__ */ r("div", {
		className: "prism",
		"data-theme": s,
		style: u,
		children: [d, y]
	}), a[21] = s, a[22] = u, a[23] = y, a[24] = b) : b = a[24], b;
}
//#endregion
export { A as default };
