import { c as e } from "react/compiler-runtime";
import { motion as t } from "motion/react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import './index.css';//#region src/templates/monolith/sections/Hero.tsx
function i(i) {
	let a = e(32), { profile: o, socials: s } = i, c, l;
	a[0] === Symbol.for("react.memo_cache_sentinel") ? (c = {
		opacity: 0,
		y: 20
	}, l = {
		opacity: 1,
		y: 0
	}, a[0] = c, a[1] = l) : (c = a[0], l = a[1]);
	let u, d;
	a[2] === Symbol.for("react.memo_cache_sentinel") ? (u = {
		duration: .7,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}, d = /* @__PURE__ */ n("div", {
		className: "monolith-hero__byline",
		children: "Portfolio"
	}), a[2] = u, a[3] = d) : (u = a[2], d = a[3]);
	let f;
	a[4] !== o.avatarUrl || a[5] !== o.fullName ? (f = o.avatarUrl && /* @__PURE__ */ n("img", {
		className: "monolith-hero__avatar",
		src: o.avatarUrl,
		alt: o.fullName
	}), a[4] = o.avatarUrl, a[5] = o.fullName, a[6] = f) : f = a[6];
	let p = o.fullName || "Your Name", m;
	a[7] === p ? m = a[8] : (m = /* @__PURE__ */ n("h1", {
		className: "monolith-hero__name",
		children: p
	}), a[7] = p, a[8] = m);
	let h;
	a[9] !== f || a[10] !== m ? (h = /* @__PURE__ */ r("div", {
		className: "monolith-hero__namerow",
		children: [f, m]
	}), a[9] = f, a[10] = m, a[11] = h) : h = a[11];
	let g;
	a[12] === o.headline ? g = a[13] : (g = o.headline && /* @__PURE__ */ n("p", {
		className: "monolith-hero__headline",
		children: o.headline
	}), a[12] = o.headline, a[13] = g);
	let _;
	a[14] === o.bio ? _ = a[15] : (_ = o.bio && /* @__PURE__ */ n("p", {
		className: "monolith-hero__bio",
		children: o.bio
	}), a[14] = o.bio, a[15] = _);
	let v;
	a[16] === o.location ? v = a[17] : (v = o.location && /* @__PURE__ */ n("span", { children: o.location }), a[16] = o.location, a[17] = v);
	let y;
	a[18] !== o.location || a[19] !== s ? (y = o.location && s && s.length > 0 && /* @__PURE__ */ n("span", {
		"aria-hidden": "true",
		children: "/"
	}), a[18] = o.location, a[19] = s, a[20] = y) : y = a[20];
	let b;
	a[21] === s ? b = a[22] : (b = s && s.length > 0 && /* @__PURE__ */ n("nav", {
		className: "monolith-hero__socials",
		"aria-label": "Social links",
		children: s.map((e, t) => /* @__PURE__ */ r("span", { children: [/* @__PURE__ */ n("a", {
			href: e.url,
			target: "_blank",
			rel: "noreferrer noopener",
			children: e.label ?? e.platform
		}), t < s.length - 1 && /* @__PURE__ */ n("span", {
			"aria-hidden": "true",
			children: " / "
		})] }, e.platform + e.url))
	}), a[21] = s, a[22] = b);
	let x;
	a[23] !== v || a[24] !== y || a[25] !== b ? (x = /* @__PURE__ */ r("div", {
		className: "monolith-hero__meta",
		children: [
			v,
			y,
			b
		]
	}), a[23] = v, a[24] = y, a[25] = b, a[26] = x) : x = a[26];
	let S;
	return a[27] !== _ || a[28] !== x || a[29] !== h || a[30] !== g ? (S = /* @__PURE__ */ n("header", {
		className: "monolith-hero",
		children: /* @__PURE__ */ r(t.div, {
			className: "monolith-hero__inner",
			initial: c,
			animate: l,
			transition: u,
			children: [
				d,
				h,
				g,
				_,
				x
			]
		})
	}), a[27] = _, a[28] = x, a[29] = h, a[30] = g, a[31] = S) : S = a[31], S;
}
//#endregion
//#region src/templates/monolith/sections/SectionHeading.tsx
function a(i) {
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
function o(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function s(t) {
	let i = e(9), { experience: o, index: s } = t, l;
	i[0] === s ? l = i[1] : (l = /* @__PURE__ */ n(a, {
		index: s,
		title: "Experience"
	}), i[0] = s, i[1] = l);
	let u;
	i[2] === o ? u = i[3] : (u = o.map(c), i[2] = o, i[3] = u);
	let d;
	i[4] === u ? d = i[5] : (d = /* @__PURE__ */ n("ol", {
		className: "monolith-ledger",
		children: u
	}), i[4] = u, i[5] = d);
	let f;
	return i[6] !== l || i[7] !== d ? (f = /* @__PURE__ */ r("section", {
		className: "monolith-section",
		id: "experience",
		children: [l, d]
	}), i[6] = l, i[7] = d, i[8] = f) : f = i[8], f;
}
function c(e, i) {
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
			delay: i * .08
		},
		children: [/* @__PURE__ */ r("div", {
			className: "monolith-ledger__marker",
			children: [/* @__PURE__ */ n("span", {
				className: "monolith-ledger__number",
				children: String(i + 1).padStart(2, "0")
			}), /* @__PURE__ */ n("span", {
				className: "monolith-ledger__range",
				children: o(e.range)
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
				e.summary && /* @__PURE__ */ n("p", {
					className: "monolith-ledger__summary",
					children: e.summary
				}),
				e.highlights && e.highlights.length > 0 && /* @__PURE__ */ n("ul", {
					className: "monolith-ledger__highlights",
					children: e.highlights.map(l)
				})
			]
		})]
	}, e.id);
}
function l(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
//#endregion
//#region src/templates/monolith/sections/Projects.tsx
var u = {
	rest: {
		opacity: 0,
		x: -6
	},
	hover: {
		opacity: 1,
		x: 0
	}
};
function d(t) {
	let i = e(9), { projects: o, index: s } = t, c;
	i[0] === s ? c = i[1] : (c = /* @__PURE__ */ n(a, {
		index: s,
		title: "Projects"
	}), i[0] = s, i[1] = c);
	let l;
	i[2] === o ? l = i[3] : (l = o.map(f), i[2] = o, i[3] = l);
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
function f(e) {
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
						variants: u,
						"aria-hidden": "true",
						children: "→"
					})]
				}),
				e.description && /* @__PURE__ */ n("p", {
					className: "monolith-index__description",
					children: e.description
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
function p(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.category ?? "General", r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return t;
}
function m(t) {
	let i = e(17), { skills: o, index: s } = t, c, l, u, d, f;
	if (i[0] !== s || i[1] !== o) {
		let e = p(o);
		u = "monolith-section", d = "skills", i[7] === s ? f = i[8] : (f = /* @__PURE__ */ n(a, {
			index: s,
			title: "Skills"
		}), i[7] = s, i[8] = f), c = "monolith-skills", l = Array.from(e.entries()).map(h), i[0] = s, i[1] = o, i[2] = c, i[3] = l, i[4] = u, i[5] = d, i[6] = f;
	} else c = i[2], l = i[3], u = i[4], d = i[5], f = i[6];
	let m;
	i[9] !== c || i[10] !== l ? (m = /* @__PURE__ */ n("div", {
		className: c,
		children: l
	}), i[9] = c, i[10] = l, i[11] = m) : m = i[11];
	let g;
	return i[12] !== u || i[13] !== d || i[14] !== f || i[15] !== m ? (g = /* @__PURE__ */ r("section", {
		className: u,
		id: d,
		children: [f, m]
	}), i[12] = u, i[13] = d, i[14] = f, i[15] = m, i[16] = g) : g = i[16], g;
}
function h(e) {
	let [t, i] = e;
	return /* @__PURE__ */ r("div", {
		className: "monolith-skills__group",
		children: [/* @__PURE__ */ n("span", {
			className: "monolith-skills__category",
			children: t
		}), /* @__PURE__ */ n("p", {
			className: "monolith-skills__list",
			children: i.map(g).join(" · ")
		})]
	}, t);
}
function g(e) {
	return e.name;
}
//#endregion
//#region src/templates/monolith/sections/Footer.tsx
function _(t) {
	let i = e(11), { profile: a, socials: o } = t, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ n("a", {
		href: `mailto:${a.email}`,
		children: a.email
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === o ? u = i[4] : (u = o?.map(v), i[3] = o, i[4] = u);
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
function v(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/monolith/Template.tsx
function y(t) {
	let a = e(32), { data: o } = t, c = o.theme?.mode === "dark" ? "dark" : "light", l = o.theme?.accentColor ?? "#b5482a", u = (o.experience?.length ?? 0) > 0, f = (o.projects?.length ?? 0) > 0, p = (o.skills?.length ?? 0) > 0, h = u && "experience", g = f && "projects", v = p && "skills", y;
	a[0] !== h || a[1] !== g || a[2] !== v ? (y = [
		h,
		g,
		v
	].filter(b), a[0] = h, a[1] = g, a[2] = v, a[3] = y) : y = a[3];
	let x = y, S;
	a[4] === l ? S = a[5] : (S = { "--monolith-accent": l }, a[4] = l, a[5] = S);
	let C = S, w;
	a[6] !== o.profile || a[7] !== o.socials ? (w = /* @__PURE__ */ n(i, {
		profile: o.profile,
		socials: o.socials
	}), a[6] = o.profile, a[7] = o.socials, a[8] = w) : w = a[8];
	let T;
	a[9] !== o.experience || a[10] !== u || a[11] !== x ? (T = u && o.experience && /* @__PURE__ */ n(s, {
		experience: o.experience,
		index: x.indexOf("experience") + 1
	}), a[9] = o.experience, a[10] = u, a[11] = x, a[12] = T) : T = a[12];
	let E;
	a[13] !== o.projects || a[14] !== f || a[15] !== x ? (E = f && o.projects && /* @__PURE__ */ n(d, {
		projects: o.projects,
		index: x.indexOf("projects") + 1
	}), a[13] = o.projects, a[14] = f, a[15] = x, a[16] = E) : E = a[16];
	let D;
	a[17] !== o.skills || a[18] !== p || a[19] !== x ? (D = p && o.skills && /* @__PURE__ */ n(m, {
		skills: o.skills,
		index: x.indexOf("skills") + 1
	}), a[17] = o.skills, a[18] = p, a[19] = x, a[20] = D) : D = a[20];
	let O;
	a[21] !== o.profile || a[22] !== o.socials ? (O = /* @__PURE__ */ n(_, {
		profile: o.profile,
		socials: o.socials
	}), a[21] = o.profile, a[22] = o.socials, a[23] = O) : O = a[23];
	let k;
	return a[24] !== c || a[25] !== D || a[26] !== O || a[27] !== C || a[28] !== w || a[29] !== T || a[30] !== E ? (k = /* @__PURE__ */ r("div", {
		className: "monolith",
		"data-theme": c,
		style: C,
		children: [
			w,
			T,
			E,
			D,
			O
		]
	}), a[24] = c, a[25] = D, a[26] = O, a[27] = C, a[28] = w, a[29] = T, a[30] = E, a[31] = k) : k = a[31], k;
}
function b(e) {
	return e !== !1;
}
//#endregion
export { y as default };
