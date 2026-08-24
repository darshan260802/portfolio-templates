import { c as e } from "react/compiler-runtime";
import { motion as t } from "motion/react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import './index.css';//#region src/rich-text.tsx
function i(t) {
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
//#region src/templates/aurora/sections/Hero.tsx
var a = {
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
function o(a) {
	let o = e(24), { profile: c, socials: l } = a, u;
	o[0] === Symbol.for("react.memo_cache_sentinel") ? (u = /* @__PURE__ */ n("div", {
		className: "aurora-hero__glow",
		"aria-hidden": "true"
	}), o[0] = u) : u = o[0];
	let d, f, p;
	o[1] === Symbol.for("react.memo_cache_sentinel") ? (d = {
		opacity: 0,
		y: 24
	}, f = {
		opacity: 1,
		y: 0
	}, p = {
		duration: .6,
		ease: "easeOut"
	}, o[1] = d, o[2] = f, o[3] = p) : (d = o[1], f = o[2], p = o[3]);
	let m;
	o[4] !== c.avatarUrl || o[5] !== c.fullName ? (m = c.avatarUrl && /* @__PURE__ */ n("img", {
		className: "aurora-hero__avatar",
		src: c.avatarUrl,
		alt: c.fullName
	}), o[4] = c.avatarUrl, o[5] = c.fullName, o[6] = m) : m = o[6];
	let h = c.fullName || "Your Name", g;
	o[7] === h ? g = o[8] : (g = /* @__PURE__ */ n("h1", {
		className: "aurora-hero__name",
		children: h
	}), o[7] = h, o[8] = g);
	let _;
	o[9] === c.headline ? _ = o[10] : (_ = c.headline && /* @__PURE__ */ n("p", {
		className: "aurora-hero__headline",
		children: c.headline
	}), o[9] = c.headline, o[10] = _);
	let v;
	o[11] === c.bio ? v = o[12] : (v = /* @__PURE__ */ n(i, {
		html: c.bio,
		className: "aurora-hero__bio"
	}), o[11] = c.bio, o[12] = v);
	let y;
	o[13] === c.location ? y = o[14] : (y = c.location && /* @__PURE__ */ n("p", {
		className: "aurora-hero__location",
		children: c.location
	}), o[13] = c.location, o[14] = y);
	let b;
	o[15] === l ? b = o[16] : (b = l && l.length > 0 && /* @__PURE__ */ n("nav", {
		className: "aurora-hero__socials",
		"aria-label": "Social links",
		children: l.map(s)
	}), o[15] = l, o[16] = b);
	let x;
	return o[17] !== y || o[18] !== b || o[19] !== m || o[20] !== g || o[21] !== _ || o[22] !== v ? (x = /* @__PURE__ */ r("header", {
		className: "aurora-hero",
		children: [u, /* @__PURE__ */ r(t.div, {
			className: "aurora-hero__content",
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
		})]
	}), o[17] = y, o[18] = b, o[19] = m, o[20] = g, o[21] = _, o[22] = v, o[23] = x) : x = o[23], x;
}
function s(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "aurora-hero__social",
		children: e.label ?? a[e.platform]
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/aurora/sections/Experience.tsx
function c(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function l(i) {
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
	a[1] === o ? c = a[2] : (c = o.map(u), a[1] = o, a[2] = c);
	let l;
	return a[3] === c ? l = a[4] : (l = /* @__PURE__ */ r("section", {
		className: "aurora-section",
		id: "experience",
		children: [s, /* @__PURE__ */ n("ol", {
			className: "aurora-timeline",
			children: c
		})]
	}), a[3] = c, a[4] = l), l;
}
function u(e, a) {
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
			delay: a * .06
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
						children: c(e.range)
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
				/* @__PURE__ */ n(i, {
					html: e.summary,
					className: "aurora-timeline__summary"
				}),
				e.highlights && e.highlights.length > 0 && /* @__PURE__ */ n("ul", {
					className: "aurora-timeline__highlights",
					children: e.highlights.map(d)
				})
			]
		})]
	}, e.id);
}
function d(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
//#endregion
//#region src/templates/aurora/sections/Projects.tsx
function f(i) {
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
	a[1] === o ? c = a[2] : (c = o.map(p), a[1] = o, a[2] = c);
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
function p(e, a) {
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
			delay: a * .05
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
				/* @__PURE__ */ n(i, {
					html: e.description,
					className: "aurora-card__description"
				}),
				e.tags && e.tags.length > 0 && /* @__PURE__ */ n("ul", {
					className: "aurora-card__tags",
					children: e.tags.map(m)
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
function m(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
//#endregion
//#region src/templates/aurora/sections/Skills.tsx
function h(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.category ?? "Skills", r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return t;
}
function g(i) {
	let a = e(15), { skills: o } = i, s, c, l, u, d;
	if (a[0] !== o) {
		let e = h(o);
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
		}), a[6] = d) : d = a[6], s = "aurora-skills", c = Array.from(e.entries()).map(_), a[0] = o, a[1] = s, a[2] = c, a[3] = l, a[4] = u, a[5] = d;
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
function _(e) {
	let [t, i] = e;
	return /* @__PURE__ */ r("div", {
		className: "aurora-skills__group",
		children: [/* @__PURE__ */ n("h3", {
			className: "aurora-skills__category",
			children: t
		}), /* @__PURE__ */ n("ul", {
			className: "aurora-skills__list",
			children: i.map(v)
		})]
	}, t);
}
function v(e) {
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
function y(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function b(t) {
	let i = e(14), { profile: a, socials: o } = t, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ n("a", {
		className: "aurora-footer__email",
		href: `mailto:${a.email}`,
		children: a.email
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === a.phone ? u = i[4] : (u = a.phone && /* @__PURE__ */ n("a", {
		className: "aurora-footer__phone",
		href: y(a.phone),
		children: a.phone
	}), i[3] = a.phone, i[4] = u);
	let d;
	i[5] === o ? d = i[6] : (d = o && o.length > 0 && /* @__PURE__ */ n("nav", {
		className: "aurora-footer__socials",
		"aria-label": "Social links",
		children: o.map(x)
	}), i[5] = o, i[6] = d);
	let f = a.fullName || "Your Name", p;
	i[7] === f ? p = i[8] : (p = /* @__PURE__ */ r("p", {
		className: "aurora-footer__copy",
		children: [
			"© ",
			c,
			" ",
			f
		]
	}), i[7] = f, i[8] = p);
	let m;
	return i[9] !== l || i[10] !== u || i[11] !== d || i[12] !== p ? (m = /* @__PURE__ */ r("footer", {
		className: "aurora-footer",
		children: [
			l,
			u,
			d,
			p
		]
	}), i[9] = l, i[10] = u, i[11] = d, i[12] = p, i[13] = m) : m = i[13], m;
}
function x(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/aurora/Template.tsx
function S(t) {
	let i = e(22), { data: a } = t, s = a.theme?.mode === "light" ? "light" : "dark", c = a.theme?.accentColor ?? "#7c3aed", u;
	i[0] === c ? u = i[1] : (u = { "--aurora-accent": c }, i[0] = c, i[1] = u);
	let d = u, p;
	i[2] !== a.profile || i[3] !== a.socials ? (p = /* @__PURE__ */ n(o, {
		profile: a.profile,
		socials: a.socials
	}), i[2] = a.profile, i[3] = a.socials, i[4] = p) : p = i[4];
	let m;
	i[5] === a.experience ? m = i[6] : (m = a.experience && a.experience.length > 0 && /* @__PURE__ */ n(l, { experience: a.experience }), i[5] = a.experience, i[6] = m);
	let h;
	i[7] === a.projects ? h = i[8] : (h = a.projects && a.projects.length > 0 && /* @__PURE__ */ n(f, { projects: a.projects }), i[7] = a.projects, i[8] = h);
	let _;
	i[9] === a.skills ? _ = i[10] : (_ = a.skills && a.skills.length > 0 && /* @__PURE__ */ n(g, { skills: a.skills }), i[9] = a.skills, i[10] = _);
	let v;
	i[11] !== a.profile || i[12] !== a.socials ? (v = /* @__PURE__ */ n(b, {
		profile: a.profile,
		socials: a.socials
	}), i[11] = a.profile, i[12] = a.socials, i[13] = v) : v = i[13];
	let y;
	return i[14] !== s || i[15] !== d || i[16] !== p || i[17] !== m || i[18] !== h || i[19] !== _ || i[20] !== v ? (y = /* @__PURE__ */ r("div", {
		className: "aurora",
		"data-theme": s,
		style: d,
		children: [
			p,
			m,
			h,
			_,
			v
		]
	}), i[14] = s, i[15] = d, i[16] = p, i[17] = m, i[18] = h, i[19] = _, i[20] = v, i[21] = y) : y = i[21], y;
}
//#endregion
export { S as default };
