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
//#region src/templates/monolith/sections/Hero.tsx
function a(a) {
	let o = e(32), { profile: s, socials: c } = a, l, u;
	o[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
		opacity: 0,
		y: 20
	}, u = {
		opacity: 1,
		y: 0
	}, o[0] = l, o[1] = u) : (l = o[0], u = o[1]);
	let d, f;
	o[2] === Symbol.for("react.memo_cache_sentinel") ? (d = {
		duration: .7,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}, f = /* @__PURE__ */ n("div", {
		className: "monolith-hero__byline",
		children: "Portfolio"
	}), o[2] = d, o[3] = f) : (d = o[2], f = o[3]);
	let p;
	o[4] !== s.avatarUrl || o[5] !== s.fullName ? (p = s.avatarUrl && /* @__PURE__ */ n("img", {
		className: "monolith-hero__avatar",
		src: s.avatarUrl,
		alt: s.fullName
	}), o[4] = s.avatarUrl, o[5] = s.fullName, o[6] = p) : p = o[6];
	let m = s.fullName || "Your Name", h;
	o[7] === m ? h = o[8] : (h = /* @__PURE__ */ n("h1", {
		className: "monolith-hero__name",
		children: m
	}), o[7] = m, o[8] = h);
	let g;
	o[9] !== p || o[10] !== h ? (g = /* @__PURE__ */ r("div", {
		className: "monolith-hero__namerow",
		children: [p, h]
	}), o[9] = p, o[10] = h, o[11] = g) : g = o[11];
	let _;
	o[12] === s.headline ? _ = o[13] : (_ = s.headline && /* @__PURE__ */ n("p", {
		className: "monolith-hero__headline",
		children: s.headline
	}), o[12] = s.headline, o[13] = _);
	let v;
	o[14] === s.bio ? v = o[15] : (v = /* @__PURE__ */ n(i, {
		html: s.bio,
		className: "monolith-hero__bio"
	}), o[14] = s.bio, o[15] = v);
	let y;
	o[16] === s.location ? y = o[17] : (y = s.location && /* @__PURE__ */ n("span", { children: s.location }), o[16] = s.location, o[17] = y);
	let b;
	o[18] !== s.location || o[19] !== c ? (b = s.location && c && c.length > 0 && /* @__PURE__ */ n("span", {
		"aria-hidden": "true",
		children: "/"
	}), o[18] = s.location, o[19] = c, o[20] = b) : b = o[20];
	let x;
	o[21] === c ? x = o[22] : (x = c && c.length > 0 && /* @__PURE__ */ n("nav", {
		className: "monolith-hero__socials",
		"aria-label": "Social links",
		children: c.map((e, t) => /* @__PURE__ */ r("span", { children: [/* @__PURE__ */ n("a", {
			href: e.url,
			target: "_blank",
			rel: "noreferrer noopener",
			children: e.label ?? e.platform
		}), t < c.length - 1 && /* @__PURE__ */ n("span", {
			"aria-hidden": "true",
			children: " / "
		})] }, e.platform + e.url))
	}), o[21] = c, o[22] = x);
	let S;
	o[23] !== y || o[24] !== b || o[25] !== x ? (S = /* @__PURE__ */ r("div", {
		className: "monolith-hero__meta",
		children: [
			y,
			b,
			x
		]
	}), o[23] = y, o[24] = b, o[25] = x, o[26] = S) : S = o[26];
	let C;
	return o[27] !== v || o[28] !== S || o[29] !== g || o[30] !== _ ? (C = /* @__PURE__ */ n("header", {
		className: "monolith-hero",
		children: /* @__PURE__ */ r(t.div, {
			className: "monolith-hero__inner",
			initial: l,
			animate: u,
			transition: d,
			children: [
				f,
				g,
				_,
				v,
				S
			]
		})
	}), o[27] = v, o[28] = S, o[29] = g, o[30] = _, o[31] = C) : C = o[31], C;
}
//#endregion
//#region src/templates/monolith/sections/SectionHeading.tsx
function o(i) {
	let a = e(10), { index: o, title: s } = i, c;
	a[0] === Symbol.for("react.memo_cache_sentinel") ? (c = /* @__PURE__ */ n(t.div, {
		className: "monolith-heading__rule",
		initial: { scaleX: 0 },
		whileInView: { scaleX: 1 },
		viewport: { once: !0 },
		transition: {
			duration: .6,
			ease: "easeInOut"
		}
	}), a[0] = c) : c = a[0];
	let l = String(o), u;
	a[1] === l ? u = a[2] : (u = l.padStart(2, "0"), a[1] = l, a[2] = u);
	let d;
	a[3] === u ? d = a[4] : (d = /* @__PURE__ */ n("span", {
		className: "monolith-heading__number",
		children: u
	}), a[3] = u, a[4] = d);
	let f;
	a[5] === s ? f = a[6] : (f = /* @__PURE__ */ n("h2", {
		className: "monolith-heading__title",
		children: s
	}), a[5] = s, a[6] = f);
	let p;
	return a[7] !== d || a[8] !== f ? (p = /* @__PURE__ */ r("div", {
		className: "monolith-heading",
		children: [
			c,
			d,
			f
		]
	}), a[7] = d, a[8] = f, a[9] = p) : p = a[9], p;
}
//#endregion
//#region src/templates/monolith/sections/Experience.tsx
function s(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function c(t) {
	let i = e(9), { experience: a, index: s } = t, c;
	i[0] === s ? c = i[1] : (c = /* @__PURE__ */ n(o, {
		index: s,
		title: "Experience"
	}), i[0] = s, i[1] = c);
	let u;
	i[2] === a ? u = i[3] : (u = a.map(l), i[2] = a, i[3] = u);
	let d;
	i[4] === u ? d = i[5] : (d = /* @__PURE__ */ n("ol", {
		className: "monolith-ledger",
		children: u
	}), i[4] = u, i[5] = d);
	let f;
	return i[6] !== c || i[7] !== d ? (f = /* @__PURE__ */ r("section", {
		className: "monolith-section",
		id: "experience",
		children: [c, d]
	}), i[6] = c, i[7] = d, i[8] = f) : f = i[8], f;
}
function l(e, a) {
	return /* @__PURE__ */ r(t.li, {
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
			delay: a * .08
		},
		children: [/* @__PURE__ */ r("div", {
			className: "monolith-ledger__marker",
			children: [/* @__PURE__ */ n("span", {
				className: "monolith-ledger__number",
				children: String(a + 1).padStart(2, "0")
			}), /* @__PURE__ */ n("span", {
				className: "monolith-ledger__range",
				children: s(e.range)
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
				/* @__PURE__ */ n(i, {
					html: e.summary,
					className: "monolith-ledger__summary"
				}),
				e.highlights && e.highlights.length > 0 && /* @__PURE__ */ n("ul", {
					className: "monolith-ledger__highlights",
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
//#region src/templates/monolith/sections/Projects.tsx
var d = {
	rest: {
		opacity: 0,
		x: -6
	},
	hover: {
		opacity: 1,
		x: 0
	}
};
function f(t) {
	let i = e(9), { projects: a, index: s } = t, c;
	i[0] === s ? c = i[1] : (c = /* @__PURE__ */ n(o, {
		index: s,
		title: "Projects"
	}), i[0] = s, i[1] = c);
	let l;
	i[2] === a ? l = i[3] : (l = a.map(p), i[2] = a, i[3] = l);
	let u;
	i[4] === l ? u = i[5] : (u = /* @__PURE__ */ n("ul", {
		className: "monolith-index",
		children: l
	}), i[4] = l, i[5] = u);
	let d;
	return i[6] !== c || i[7] !== u ? (d = /* @__PURE__ */ r("section", {
		className: "monolith-section",
		id: "projects",
		children: [c, u]
	}), i[6] = c, i[7] = u, i[8] = d) : d = i[8], d;
}
function p(e) {
	return /* @__PURE__ */ r(t.li, {
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
					}), /* @__PURE__ */ n(t.span, {
						className: "monolith-index__arrow",
						variants: d,
						"aria-hidden": "true",
						children: "→"
					})]
				}),
				/* @__PURE__ */ n(i, {
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
function m(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.category ?? "General", r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return t;
}
function h(t) {
	let i = e(17), { skills: a, index: s } = t, c, l, u, d, f;
	if (i[0] !== s || i[1] !== a) {
		let e = m(a);
		u = "monolith-section", d = "skills", i[7] === s ? f = i[8] : (f = /* @__PURE__ */ n(o, {
			index: s,
			title: "Skills"
		}), i[7] = s, i[8] = f), c = "monolith-skills", l = Array.from(e.entries()).map(g), i[0] = s, i[1] = a, i[2] = c, i[3] = l, i[4] = u, i[5] = d, i[6] = f;
	} else c = i[2], l = i[3], u = i[4], d = i[5], f = i[6];
	let p;
	i[9] !== c || i[10] !== l ? (p = /* @__PURE__ */ n("div", {
		className: c,
		children: l
	}), i[9] = c, i[10] = l, i[11] = p) : p = i[11];
	let h;
	return i[12] !== u || i[13] !== d || i[14] !== f || i[15] !== p ? (h = /* @__PURE__ */ r("section", {
		className: u,
		id: d,
		children: [f, p]
	}), i[12] = u, i[13] = d, i[14] = f, i[15] = p, i[16] = h) : h = i[16], h;
}
function g(e) {
	let [t, i] = e;
	return /* @__PURE__ */ r("div", {
		className: "monolith-skills__group",
		children: [/* @__PURE__ */ n("span", {
			className: "monolith-skills__category",
			children: t
		}), /* @__PURE__ */ n("p", {
			className: "monolith-skills__list",
			children: i.map(_).join(" · ")
		})]
	}, t);
}
function _(e) {
	return e.name;
}
//#endregion
//#region src/templates/monolith/sections/Footer.tsx
function v(t) {
	let i = e(11), { profile: a, socials: o } = t, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ n("a", {
		href: `mailto:${a.email}`,
		children: a.email
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === o ? u = i[4] : (u = o?.map(y), i[3] = o, i[4] = u);
	let d = a.fullName || "Your Name", f;
	i[5] === d ? f = i[6] : (f = /* @__PURE__ */ r("span", { children: [
		"© ",
		c,
		" ",
		d
	] }), i[5] = d, i[6] = f);
	let p;
	return i[7] !== l || i[8] !== u || i[9] !== f ? (p = /* @__PURE__ */ n("footer", {
		className: "monolith-footer",
		children: /* @__PURE__ */ r("div", {
			className: "monolith-footer__row",
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
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/monolith/Template.tsx
function b(t) {
	let i = e(32), { data: o } = t, s = o.theme?.mode === "dark" ? "dark" : "light", l = o.theme?.accentColor ?? "#b5482a", u = (o.experience?.length ?? 0) > 0, d = (o.projects?.length ?? 0) > 0, p = (o.skills?.length ?? 0) > 0, m = u && "experience", g = d && "projects", _ = p && "skills", y;
	i[0] !== m || i[1] !== g || i[2] !== _ ? (y = [
		m,
		g,
		_
	].filter(x), i[0] = m, i[1] = g, i[2] = _, i[3] = y) : y = i[3];
	let b = y, S;
	i[4] === l ? S = i[5] : (S = { "--monolith-accent": l }, i[4] = l, i[5] = S);
	let C = S, w;
	i[6] !== o.profile || i[7] !== o.socials ? (w = /* @__PURE__ */ n(a, {
		profile: o.profile,
		socials: o.socials
	}), i[6] = o.profile, i[7] = o.socials, i[8] = w) : w = i[8];
	let T;
	i[9] !== o.experience || i[10] !== u || i[11] !== b ? (T = u && o.experience && /* @__PURE__ */ n(c, {
		experience: o.experience,
		index: b.indexOf("experience") + 1
	}), i[9] = o.experience, i[10] = u, i[11] = b, i[12] = T) : T = i[12];
	let E;
	i[13] !== o.projects || i[14] !== d || i[15] !== b ? (E = d && o.projects && /* @__PURE__ */ n(f, {
		projects: o.projects,
		index: b.indexOf("projects") + 1
	}), i[13] = o.projects, i[14] = d, i[15] = b, i[16] = E) : E = i[16];
	let D;
	i[17] !== o.skills || i[18] !== p || i[19] !== b ? (D = p && o.skills && /* @__PURE__ */ n(h, {
		skills: o.skills,
		index: b.indexOf("skills") + 1
	}), i[17] = o.skills, i[18] = p, i[19] = b, i[20] = D) : D = i[20];
	let O;
	i[21] !== o.profile || i[22] !== o.socials ? (O = /* @__PURE__ */ n(v, {
		profile: o.profile,
		socials: o.socials
	}), i[21] = o.profile, i[22] = o.socials, i[23] = O) : O = i[23];
	let k;
	return i[24] !== s || i[25] !== D || i[26] !== O || i[27] !== C || i[28] !== w || i[29] !== T || i[30] !== E ? (k = /* @__PURE__ */ r("div", {
		className: "monolith",
		"data-theme": s,
		style: C,
		children: [
			w,
			T,
			E,
			D,
			O
		]
	}), i[24] = s, i[25] = D, i[26] = O, i[27] = C, i[28] = w, i[29] = T, i[30] = E, i[31] = k) : k = i[31], k;
}
function x(e) {
	return e !== !1;
}
//#endregion
export { b as default };
