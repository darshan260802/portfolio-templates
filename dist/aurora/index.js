import { c as e } from "react/compiler-runtime";
import { motion as t } from "motion/react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import './index.css';//#region src/templates/aurora/sections/Hero.tsx
var i = {
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
function a(i) {
	let a = e(24), { profile: s, socials: c } = i, l;
	a[0] === Symbol.for("react.memo_cache_sentinel") ? (l = /* @__PURE__ */ n("div", {
		className: "aurora-hero__glow",
		"aria-hidden": "true"
	}), a[0] = l) : l = a[0];
	let u, d, f;
	a[1] === Symbol.for("react.memo_cache_sentinel") ? (u = {
		opacity: 0,
		y: 24
	}, d = {
		opacity: 1,
		y: 0
	}, f = {
		duration: .6,
		ease: "easeOut"
	}, a[1] = u, a[2] = d, a[3] = f) : (u = a[1], d = a[2], f = a[3]);
	let p;
	a[4] !== s.avatarUrl || a[5] !== s.fullName ? (p = s.avatarUrl && /* @__PURE__ */ n("img", {
		className: "aurora-hero__avatar",
		src: s.avatarUrl,
		alt: s.fullName
	}), a[4] = s.avatarUrl, a[5] = s.fullName, a[6] = p) : p = a[6];
	let m = s.fullName || "Your Name", h;
	a[7] === m ? h = a[8] : (h = /* @__PURE__ */ n("h1", {
		className: "aurora-hero__name",
		children: m
	}), a[7] = m, a[8] = h);
	let g;
	a[9] === s.headline ? g = a[10] : (g = s.headline && /* @__PURE__ */ n("p", {
		className: "aurora-hero__headline",
		children: s.headline
	}), a[9] = s.headline, a[10] = g);
	let _;
	a[11] === s.bio ? _ = a[12] : (_ = s.bio && /* @__PURE__ */ n("p", {
		className: "aurora-hero__bio",
		children: s.bio
	}), a[11] = s.bio, a[12] = _);
	let v;
	a[13] === s.location ? v = a[14] : (v = s.location && /* @__PURE__ */ n("p", {
		className: "aurora-hero__location",
		children: s.location
	}), a[13] = s.location, a[14] = v);
	let y;
	a[15] === c ? y = a[16] : (y = c && c.length > 0 && /* @__PURE__ */ n("nav", {
		className: "aurora-hero__socials",
		"aria-label": "Social links",
		children: c.map(o)
	}), a[15] = c, a[16] = y);
	let b;
	return a[17] !== v || a[18] !== y || a[19] !== p || a[20] !== h || a[21] !== g || a[22] !== _ ? (b = /* @__PURE__ */ r("header", {
		className: "aurora-hero",
		children: [l, /* @__PURE__ */ r(t.div, {
			className: "aurora-hero__content",
			initial: u,
			animate: d,
			transition: f,
			children: [
				p,
				h,
				g,
				_,
				v,
				y
			]
		})]
	}), a[17] = v, a[18] = y, a[19] = p, a[20] = h, a[21] = g, a[22] = _, a[23] = b) : b = a[23], b;
}
function o(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "aurora-hero__social",
		children: e.label ?? i[e.platform]
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/aurora/sections/Experience.tsx
function s(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function c(i) {
	let a = e(5), { experience: o } = i, s;
	a[0] === Symbol.for("react.memo_cache_sentinel") ? (s = /* @__PURE__ */ n(t.h2, {
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
	}), a[0] = s) : s = a[0];
	let c;
	a[1] === o ? c = a[2] : (c = o.map(l), a[1] = o, a[2] = c);
	let u;
	return a[3] === c ? u = a[4] : (u = /* @__PURE__ */ r("section", {
		className: "aurora-section",
		id: "experience",
		children: [s, /* @__PURE__ */ n("ol", {
			className: "aurora-timeline",
			children: c
		})]
	}), a[3] = c, a[4] = u), u;
}
function l(e, i) {
	return /* @__PURE__ */ r(t.li, {
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
			delay: i * .06
		},
		children: [/* @__PURE__ */ n("div", {
			className: "aurora-timeline__marker",
			"aria-hidden": "true"
		}), /* @__PURE__ */ r("div", {
			className: "aurora-timeline__body",
			children: [
				/* @__PURE__ */ r("div", {
					className: "aurora-timeline__heading",
					children: [/* @__PURE__ */ n("h3", { children: e.role }), /* @__PURE__ */ n("span", {
						className: "aurora-timeline__range",
						children: s(e.range)
					})]
				}),
				/* @__PURE__ */ r("p", {
					className: "aurora-timeline__company",
					children: [e.companyUrl ? /* @__PURE__ */ n("a", {
						href: e.companyUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: e.company
					}) : e.company, e.location ? ` · ${e.location}` : ""]
				}),
				e.summary && /* @__PURE__ */ n("p", {
					className: "aurora-timeline__summary",
					children: e.summary
				}),
				e.highlights && e.highlights.length > 0 && /* @__PURE__ */ n("ul", {
					className: "aurora-timeline__highlights",
					children: e.highlights.map(u)
				})
			]
		})]
	}, e.id);
}
function u(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
//#endregion
//#region src/templates/aurora/sections/Projects.tsx
function d(i) {
	let a = e(5), { projects: o } = i, s;
	a[0] === Symbol.for("react.memo_cache_sentinel") ? (s = /* @__PURE__ */ n(t.h2, {
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
	}), a[0] = s) : s = a[0];
	let c;
	a[1] === o ? c = a[2] : (c = o.map(f), a[1] = o, a[2] = c);
	let l;
	return a[3] === c ? l = a[4] : (l = /* @__PURE__ */ r("section", {
		className: "aurora-section",
		id: "projects",
		children: [s, /* @__PURE__ */ n("div", {
			className: "aurora-grid",
			children: c
		})]
	}), a[3] = c, a[4] = l), l;
}
function f(e, i) {
	return /* @__PURE__ */ r(t.article, {
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
			delay: i * .05
		},
		whileHover: { y: -4 },
		children: [e.imageUrl && /* @__PURE__ */ n("div", {
			className: "aurora-card__media",
			children: /* @__PURE__ */ n("img", {
				src: e.imageUrl,
				alt: e.title,
				loading: "lazy"
			})
		}), /* @__PURE__ */ r("div", {
			className: "aurora-card__body",
			children: [
				/* @__PURE__ */ n("h3", {
					className: "aurora-card__title",
					children: e.title
				}),
				e.description && /* @__PURE__ */ n("p", {
					className: "aurora-card__description",
					children: e.description
				}),
				e.tags && e.tags.length > 0 && /* @__PURE__ */ n("ul", {
					className: "aurora-card__tags",
					children: e.tags.map(p)
				}),
				/* @__PURE__ */ r("div", {
					className: "aurora-card__links",
					children: [e.liveUrl && /* @__PURE__ */ n("a", {
						href: e.liveUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: "Live"
					}), e.repoUrl && /* @__PURE__ */ n("a", {
						href: e.repoUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: "Source"
					})]
				})
			]
		})]
	}, e.id);
}
function p(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
//#endregion
//#region src/templates/aurora/sections/Skills.tsx
function m(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.category ?? "Skills", r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return t;
}
function h(i) {
	let a = e(15), { skills: o } = i, s, c, l, u, d;
	if (a[0] !== o) {
		let e = m(o);
		l = "aurora-section", u = "skills", a[6] === Symbol.for("react.memo_cache_sentinel") ? (d = /* @__PURE__ */ n(t.h2, {
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
		}), a[6] = d) : d = a[6], s = "aurora-skills", c = Array.from(e.entries()).map(g), a[0] = o, a[1] = s, a[2] = c, a[3] = l, a[4] = u, a[5] = d;
	} else s = a[1], c = a[2], l = a[3], u = a[4], d = a[5];
	let f;
	a[7] !== s || a[8] !== c ? (f = /* @__PURE__ */ n("div", {
		className: s,
		children: c
	}), a[7] = s, a[8] = c, a[9] = f) : f = a[9];
	let p;
	return a[10] !== l || a[11] !== u || a[12] !== d || a[13] !== f ? (p = /* @__PURE__ */ r("section", {
		className: l,
		id: u,
		children: [d, f]
	}), a[10] = l, a[11] = u, a[12] = d, a[13] = f, a[14] = p) : p = a[14], p;
}
function g(e) {
	let [t, i] = e;
	return /* @__PURE__ */ r("div", {
		className: "aurora-skills__group",
		children: [/* @__PURE__ */ n("h3", {
			className: "aurora-skills__category",
			children: t
		}), /* @__PURE__ */ n("ul", {
			className: "aurora-skills__list",
			children: i.map(_)
		})]
	}, t);
}
function _(e) {
	return /* @__PURE__ */ n(t.li, {
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
function v(t) {
	let i = e(11), { profile: a, socials: o } = t, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ n("a", {
		className: "aurora-footer__email",
		href: `mailto:${a.email}`,
		children: a.email
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === o ? u = i[4] : (u = o && o.length > 0 && /* @__PURE__ */ n("nav", {
		className: "aurora-footer__socials",
		"aria-label": "Social links",
		children: o.map(y)
	}), i[3] = o, i[4] = u);
	let d = a.fullName || "Your Name", f;
	i[5] === d ? f = i[6] : (f = /* @__PURE__ */ r("p", {
		className: "aurora-footer__copy",
		children: [
			"© ",
			c,
			" ",
			d
		]
	}), i[5] = d, i[6] = f);
	let p;
	return i[7] !== l || i[8] !== u || i[9] !== f ? (p = /* @__PURE__ */ r("footer", {
		className: "aurora-footer",
		children: [
			l,
			u,
			f
		]
	}), i[7] = l, i[8] = u, i[9] = f, i[10] = p) : p = i[10], p;
}
function y(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/aurora/Template.tsx
function b(t) {
	let i = e(22), { data: o } = t, s = o.theme?.mode === "light" ? "light" : "dark", l = o.theme?.accentColor ?? "#7c3aed", u;
	i[0] === l ? u = i[1] : (u = { "--aurora-accent": l }, i[0] = l, i[1] = u);
	let f = u, p;
	i[2] !== o.profile || i[3] !== o.socials ? (p = /* @__PURE__ */ n(a, {
		profile: o.profile,
		socials: o.socials
	}), i[2] = o.profile, i[3] = o.socials, i[4] = p) : p = i[4];
	let m;
	i[5] === o.experience ? m = i[6] : (m = o.experience && o.experience.length > 0 && /* @__PURE__ */ n(c, { experience: o.experience }), i[5] = o.experience, i[6] = m);
	let g;
	i[7] === o.projects ? g = i[8] : (g = o.projects && o.projects.length > 0 && /* @__PURE__ */ n(d, { projects: o.projects }), i[7] = o.projects, i[8] = g);
	let _;
	i[9] === o.skills ? _ = i[10] : (_ = o.skills && o.skills.length > 0 && /* @__PURE__ */ n(h, { skills: o.skills }), i[9] = o.skills, i[10] = _);
	let y;
	i[11] !== o.profile || i[12] !== o.socials ? (y = /* @__PURE__ */ n(v, {
		profile: o.profile,
		socials: o.socials
	}), i[11] = o.profile, i[12] = o.socials, i[13] = y) : y = i[13];
	let b;
	return i[14] !== s || i[15] !== f || i[16] !== p || i[17] !== m || i[18] !== g || i[19] !== _ || i[20] !== y ? (b = /* @__PURE__ */ r("div", {
		className: "aurora",
		"data-theme": s,
		style: f,
		children: [
			p,
			m,
			g,
			_,
			y
		]
	}), i[14] = s, i[15] = f, i[16] = p, i[17] = m, i[18] = g, i[19] = _, i[20] = y, i[21] = b) : b = i[21], b;
}
//#endregion
export { b as default };
