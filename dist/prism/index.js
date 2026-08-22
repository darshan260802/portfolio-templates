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
//#region src/templates/prism/sections/Hero.tsx
var a = {
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
function o(i) {
	let a = e(25), { profile: o, socials: c } = i, l, u, d;
	a[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
		opacity: 0,
		y: 24
	}, u = {
		opacity: 1,
		y: 0
	}, d = {
		duration: .5,
		ease: "easeOut"
	}, a[0] = l, a[1] = u, a[2] = d) : (l = a[0], u = a[1], d = a[2]);
	let f;
	a[3] !== o.avatarUrl || a[4] !== o.fullName ? (f = o.avatarUrl && /* @__PURE__ */ n("img", {
		className: "prism-hero__avatar",
		src: o.avatarUrl,
		alt: o.fullName
	}), a[3] = o.avatarUrl, a[4] = o.fullName, a[5] = f) : f = a[5];
	let p = o.fullName || "Your Name", m;
	a[6] === p ? m = a[7] : (m = /* @__PURE__ */ n("h1", {
		className: "prism-hero__name",
		children: p
	}), a[6] = p, a[7] = m);
	let h;
	a[8] === o.headline ? h = a[9] : (h = o.headline && /* @__PURE__ */ n("p", {
		className: "prism-hero__headline",
		children: o.headline
	}), a[8] = o.headline, a[9] = h);
	let g;
	a[10] === o.bio ? g = a[11] : (g = o.bio && /* @__PURE__ */ n("p", {
		className: "prism-hero__bio",
		children: o.bio
	}), a[10] = o.bio, a[11] = g);
	let _;
	a[12] === c ? _ = a[13] : (_ = c && c.length > 0 && /* @__PURE__ */ n("nav", {
		className: "prism-hero__socials",
		"aria-label": "Social links",
		children: c.map(s)
	}), a[12] = c, a[13] = _);
	let v;
	a[14] !== f || a[15] !== m || a[16] !== h || a[17] !== g || a[18] !== _ ? (v = /* @__PURE__ */ r(t.div, {
		className: "prism-card prism-hero__main",
		initial: l,
		animate: u,
		transition: d,
		children: [
			f,
			m,
			h,
			g,
			_
		]
	}), a[14] = f, a[15] = m, a[16] = h, a[17] = g, a[18] = _, a[19] = v) : v = a[19];
	let y;
	a[20] === o.location ? y = a[21] : (y = o.location && /* @__PURE__ */ r(t.div, {
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
			children: o.location
		})]
	}), a[20] = o.location, a[21] = y);
	let b;
	return a[22] !== v || a[23] !== y ? (b = /* @__PURE__ */ r("header", {
		className: "prism-hero",
		children: [v, y]
	}), a[22] = v, a[23] = y, a[24] = b) : b = a[24], b;
}
function s(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "prism-chip prism-chip--link",
		children: e.label ?? a[e.platform]
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/prism/sections/Experience.tsx
function c(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function l(t) {
	let i = e(5), { experience: a } = t, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ n("h2", {
		className: "prism-section__title",
		children: "Experience"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(u), i[1] = a, i[2] = s);
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
function u(e, i) {
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
				children: c(e.range)
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
			e.summary && /* @__PURE__ */ n("p", {
				className: "prism-experience-card__summary",
				children: e.summary
			}),
			e.highlights && e.highlights.length > 0 && /* @__PURE__ */ n("ul", {
				className: "prism-experience-card__highlights",
				children: e.highlights.map(d)
			})
		]
	}, e.id);
}
function d(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
//#endregion
//#region src/templates/prism/sections/cn.ts
function f(...e) {
	return e.filter(Boolean).join(" ");
}
//#endregion
//#region src/templates/prism/sections/Projects.tsx
function p(t) {
	let i = e(5), { projects: a } = t, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ n("h2", {
		className: "prism-section__title",
		children: "Projects"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(m), i[1] = a, i[2] = s);
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
function m(e, i) {
	return /* @__PURE__ */ r(t.article, {
		className: f("prism-card", "prism-project-card", e.featured && "prism-project-card--featured"),
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
				e.description && /* @__PURE__ */ n("p", {
					className: "prism-project-card__description",
					children: e.description
				}),
				e.tags && e.tags.length > 0 && /* @__PURE__ */ n("div", {
					className: "prism-project-card__tags",
					children: e.tags.map(h)
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
function h(e, t) {
	return /* @__PURE__ */ n("span", {
		className: "prism-chip",
		"data-tone": t % 3,
		children: e
	}, e);
}
//#endregion
//#region src/templates/prism/sections/Skills.tsx
function g(t) {
	let i = e(5), { skills: a } = t, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ n("h2", {
		className: "prism-section__title",
		children: "Skills"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(_), i[1] = a, i[2] = s);
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
function _(e, r) {
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
function v(t) {
	let i = e(11), { profile: a, socials: o } = t, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ n("a", {
		className: "prism-footer__cta",
		href: `mailto:${a.email}`,
		children: "Say hello ↗"
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === o ? u = i[4] : (u = o && o.length > 0 && /* @__PURE__ */ n("nav", {
		className: "prism-footer__socials",
		"aria-label": "Social links",
		children: o.map(y)
	}), i[3] = o, i[4] = u);
	let d = a.fullName || "Your Name", f;
	i[5] === d ? f = i[6] : (f = /* @__PURE__ */ r("p", {
		className: "prism-footer__copy",
		children: [
			"© ",
			c,
			" ",
			d
		]
	}), i[5] = d, i[6] = f);
	let p;
	return i[7] !== l || i[8] !== u || i[9] !== f ? (p = /* @__PURE__ */ n("footer", {
		className: "prism-section prism-footer",
		children: /* @__PURE__ */ r("div", {
			className: "prism-card prism-footer__card",
			children: [
				l,
				u,
				f
			]
		})
	}), i[7] = l, i[8] = u, i[9] = f, i[10] = p) : p = i[10], p;
}
function y(e) {
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
function b(t) {
	let a = e(25), { data: s } = t, c = s.theme?.mode === "dark" ? "dark" : "light", u = s.theme?.accentColor ?? "#7c5cff", d;
	a[0] === u ? d = a[1] : (d = { "--prism-accent": u }, a[0] = u, a[1] = d);
	let f = d, m;
	a[2] === Symbol.for("react.memo_cache_sentinel") ? (m = /* @__PURE__ */ n(i, {}), a[2] = m) : m = a[2];
	let h;
	a[3] !== s.profile || a[4] !== s.socials ? (h = /* @__PURE__ */ n(o, {
		profile: s.profile,
		socials: s.socials
	}), a[3] = s.profile, a[4] = s.socials, a[5] = h) : h = a[5];
	let _;
	a[6] === s.experience ? _ = a[7] : (_ = s.experience && s.experience.length > 0 && /* @__PURE__ */ n(l, { experience: s.experience }), a[6] = s.experience, a[7] = _);
	let y;
	a[8] === s.projects ? y = a[9] : (y = s.projects && s.projects.length > 0 && /* @__PURE__ */ n(p, { projects: s.projects }), a[8] = s.projects, a[9] = y);
	let b;
	a[10] === s.skills ? b = a[11] : (b = s.skills && s.skills.length > 0 && /* @__PURE__ */ n(g, { skills: s.skills }), a[10] = s.skills, a[11] = b);
	let x;
	a[12] !== s.profile || a[13] !== s.socials ? (x = /* @__PURE__ */ n(v, {
		profile: s.profile,
		socials: s.socials
	}), a[12] = s.profile, a[13] = s.socials, a[14] = x) : x = a[14];
	let S;
	a[15] !== h || a[16] !== _ || a[17] !== y || a[18] !== b || a[19] !== x ? (S = /* @__PURE__ */ r("div", {
		className: "prism-content",
		children: [
			h,
			_,
			y,
			b,
			x
		]
	}), a[15] = h, a[16] = _, a[17] = y, a[18] = b, a[19] = x, a[20] = S) : S = a[20];
	let C;
	return a[21] !== c || a[22] !== f || a[23] !== S ? (C = /* @__PURE__ */ r("div", {
		className: "prism",
		"data-theme": c,
		style: f,
		children: [m, S]
	}), a[21] = c, a[22] = f, a[23] = S, a[24] = C) : C = a[24], C;
}
//#endregion
export { b as default };
