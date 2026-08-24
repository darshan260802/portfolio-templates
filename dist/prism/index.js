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
//#region src/templates/prism/sections/Hero.tsx
var o = {
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
function s(i) {
	let o = e(25), { profile: s, socials: l } = i, u, d, f;
	o[0] === Symbol.for("react.memo_cache_sentinel") ? (u = {
		opacity: 0,
		y: 24
	}, d = {
		opacity: 1,
		y: 0
	}, f = {
		duration: .5,
		ease: "easeOut"
	}, o[0] = u, o[1] = d, o[2] = f) : (u = o[0], d = o[1], f = o[2]);
	let p;
	o[3] !== s.avatarUrl || o[4] !== s.fullName ? (p = s.avatarUrl && /* @__PURE__ */ n("img", {
		className: "prism-hero__avatar",
		src: s.avatarUrl,
		alt: s.fullName
	}), o[3] = s.avatarUrl, o[4] = s.fullName, o[5] = p) : p = o[5];
	let m = s.fullName || "Your Name", h;
	o[6] === m ? h = o[7] : (h = /* @__PURE__ */ n("h1", {
		className: "prism-hero__name",
		children: m
	}), o[6] = m, o[7] = h);
	let g;
	o[8] === s.headline ? g = o[9] : (g = s.headline && /* @__PURE__ */ n("p", {
		className: "prism-hero__headline",
		children: s.headline
	}), o[8] = s.headline, o[9] = g);
	let _;
	o[10] === s.bio ? _ = o[11] : (_ = /* @__PURE__ */ n(a, {
		html: s.bio,
		className: "prism-hero__bio"
	}), o[10] = s.bio, o[11] = _);
	let v;
	o[12] === l ? v = o[13] : (v = l && l.length > 0 && /* @__PURE__ */ n("nav", {
		className: "prism-hero__socials",
		"aria-label": "Social links",
		children: l.map(c)
	}), o[12] = l, o[13] = v);
	let y;
	o[14] !== p || o[15] !== h || o[16] !== g || o[17] !== _ || o[18] !== v ? (y = /* @__PURE__ */ r(t.div, {
		className: "prism-card prism-hero__main",
		initial: u,
		animate: d,
		transition: f,
		children: [
			p,
			h,
			g,
			_,
			v
		]
	}), o[14] = p, o[15] = h, o[16] = g, o[17] = _, o[18] = v, o[19] = y) : y = o[19];
	let b;
	o[20] === s.location ? b = o[21] : (b = s.location && /* @__PURE__ */ r(t.div, {
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
	}), o[20] = s.location, o[21] = b);
	let x;
	return o[22] !== y || o[23] !== b ? (x = /* @__PURE__ */ r("header", {
		className: "prism-hero",
		children: [y, b]
	}), o[22] = y, o[23] = b, o[24] = x) : x = o[24], x;
}
function c(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "prism-chip prism-chip--link",
		children: e.label ?? o[e.platform]
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/prism/sections/Experience.tsx
function l(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function u(t) {
	let i = e(5), { experience: a } = t, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ n("h2", {
		className: "prism-section__title",
		children: "Experience"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(d), i[1] = a, i[2] = s);
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
function d(e, i) {
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
				children: l(e.range)
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
				children: e.highlights.map(f)
			})
		]
	}, e.id);
}
function f(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
//#endregion
//#region src/templates/prism/sections/cn.ts
function p(...e) {
	return e.filter(Boolean).join(" ");
}
//#endregion
//#region src/templates/prism/sections/Projects.tsx
function m(t) {
	let i = e(5), { projects: a } = t, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ n("h2", {
		className: "prism-section__title",
		children: "Projects"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(h), i[1] = a, i[2] = s);
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
function h(e, i) {
	return /* @__PURE__ */ r(t.article, {
		className: p("prism-card", "prism-project-card", e.featured && "prism-project-card--featured"),
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
					children: e.tags.map(g)
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
function g(e, t) {
	return /* @__PURE__ */ n("span", {
		className: "prism-chip",
		"data-tone": t % 3,
		children: e
	}, e);
}
//#endregion
//#region src/templates/prism/sections/Skills.tsx
function _(t) {
	let i = e(5), { skills: a } = t, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ n("h2", {
		className: "prism-section__title",
		children: "Skills"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(v), i[1] = a, i[2] = s);
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
function v(e, r) {
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
function y(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function b(t) {
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
		href: y(a.phone),
		children: a.phone
	}), i[3] = a.phone, i[4] = u);
	let d;
	i[5] === o ? d = i[6] : (d = o && o.length > 0 && /* @__PURE__ */ n("nav", {
		className: "prism-footer__socials",
		"aria-label": "Social links",
		children: o.map(x)
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
function x(e) {
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
function S(t) {
	let a = e(25), { data: o } = t, c = o.theme?.mode === "dark" ? "dark" : "light", l = o.theme?.accentColor ?? "#7c5cff", d;
	a[0] === l ? d = a[1] : (d = { "--prism-accent": l }, a[0] = l, a[1] = d);
	let f = d, p;
	a[2] === Symbol.for("react.memo_cache_sentinel") ? (p = /* @__PURE__ */ n(i, {}), a[2] = p) : p = a[2];
	let h;
	a[3] !== o.profile || a[4] !== o.socials ? (h = /* @__PURE__ */ n(s, {
		profile: o.profile,
		socials: o.socials
	}), a[3] = o.profile, a[4] = o.socials, a[5] = h) : h = a[5];
	let g;
	a[6] === o.experience ? g = a[7] : (g = o.experience && o.experience.length > 0 && /* @__PURE__ */ n(u, { experience: o.experience }), a[6] = o.experience, a[7] = g);
	let v;
	a[8] === o.projects ? v = a[9] : (v = o.projects && o.projects.length > 0 && /* @__PURE__ */ n(m, { projects: o.projects }), a[8] = o.projects, a[9] = v);
	let y;
	a[10] === o.skills ? y = a[11] : (y = o.skills && o.skills.length > 0 && /* @__PURE__ */ n(_, { skills: o.skills }), a[10] = o.skills, a[11] = y);
	let x;
	a[12] !== o.profile || a[13] !== o.socials ? (x = /* @__PURE__ */ n(b, {
		profile: o.profile,
		socials: o.socials
	}), a[12] = o.profile, a[13] = o.socials, a[14] = x) : x = a[14];
	let S;
	a[15] !== h || a[16] !== g || a[17] !== v || a[18] !== y || a[19] !== x ? (S = /* @__PURE__ */ r("div", {
		className: "prism-content",
		children: [
			h,
			g,
			v,
			y,
			x
		]
	}), a[15] = h, a[16] = g, a[17] = v, a[18] = y, a[19] = x, a[20] = S) : S = a[20];
	let C;
	return a[21] !== c || a[22] !== f || a[23] !== S ? (C = /* @__PURE__ */ r("div", {
		className: "prism",
		"data-theme": c,
		style: f,
		children: [p, S]
	}), a[21] = c, a[22] = f, a[23] = S, a[24] = C) : C = a[24], C;
}
//#endregion
export { S as default };
