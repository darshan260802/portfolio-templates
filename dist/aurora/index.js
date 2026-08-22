import { motion as e } from "motion/react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import './index.css';//#region \0rolldown/runtime.js
var r = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), i = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), a = /* @__PURE__ */ r(((e) => {
	var t = i("react").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	e.c = function(e) {
		return t.H.useMemoCache(e);
	};
})), o = /* @__PURE__ */ r(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = i("react").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		e.c = function(e) {
			var n = t.H;
			return n === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), n.useMemoCache(e);
		};
	})();
})), s = (/* @__PURE__ */ r(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? a() : o();
})))(), c = {
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
function l(r) {
	let i = (0, s.c)(24), { profile: a, socials: o } = r, c;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (c = /* @__PURE__ */ t("div", {
		className: "aurora-hero__glow",
		"aria-hidden": "true"
	}), i[0] = c) : c = i[0];
	let l, d, f;
	i[1] === Symbol.for("react.memo_cache_sentinel") ? (l = {
		opacity: 0,
		y: 24
	}, d = {
		opacity: 1,
		y: 0
	}, f = {
		duration: .6,
		ease: "easeOut"
	}, i[1] = l, i[2] = d, i[3] = f) : (l = i[1], d = i[2], f = i[3]);
	let p;
	i[4] !== a.avatarUrl || i[5] !== a.fullName ? (p = a.avatarUrl && /* @__PURE__ */ t("img", {
		className: "aurora-hero__avatar",
		src: a.avatarUrl,
		alt: a.fullName
	}), i[4] = a.avatarUrl, i[5] = a.fullName, i[6] = p) : p = i[6];
	let m = a.fullName || "Your Name", h;
	i[7] === m ? h = i[8] : (h = /* @__PURE__ */ t("h1", {
		className: "aurora-hero__name",
		children: m
	}), i[7] = m, i[8] = h);
	let g;
	i[9] === a.headline ? g = i[10] : (g = a.headline && /* @__PURE__ */ t("p", {
		className: "aurora-hero__headline",
		children: a.headline
	}), i[9] = a.headline, i[10] = g);
	let _;
	i[11] === a.bio ? _ = i[12] : (_ = a.bio && /* @__PURE__ */ t("p", {
		className: "aurora-hero__bio",
		children: a.bio
	}), i[11] = a.bio, i[12] = _);
	let v;
	i[13] === a.location ? v = i[14] : (v = a.location && /* @__PURE__ */ t("p", {
		className: "aurora-hero__location",
		children: a.location
	}), i[13] = a.location, i[14] = v);
	let y;
	i[15] === o ? y = i[16] : (y = o && o.length > 0 && /* @__PURE__ */ t("nav", {
		className: "aurora-hero__socials",
		"aria-label": "Social links",
		children: o.map(u)
	}), i[15] = o, i[16] = y);
	let b;
	return i[17] !== v || i[18] !== y || i[19] !== p || i[20] !== h || i[21] !== g || i[22] !== _ ? (b = /* @__PURE__ */ n("header", {
		className: "aurora-hero",
		children: [c, /* @__PURE__ */ n(e.div, {
			className: "aurora-hero__content",
			initial: l,
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
	}), i[17] = v, i[18] = y, i[19] = p, i[20] = h, i[21] = g, i[22] = _, i[23] = b) : b = i[23], b;
}
function u(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "aurora-hero__social",
		children: e.label ?? c[e.platform]
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/aurora/sections/Experience.tsx
function d(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function f(r) {
	let i = (0, s.c)(5), { experience: a } = r, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ t(e.h2, {
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
	}), i[0] = o) : o = i[0];
	let c;
	i[1] === a ? c = i[2] : (c = a.map(p), i[1] = a, i[2] = c);
	let l;
	return i[3] === c ? l = i[4] : (l = /* @__PURE__ */ n("section", {
		className: "aurora-section",
		id: "experience",
		children: [o, /* @__PURE__ */ t("ol", {
			className: "aurora-timeline",
			children: c
		})]
	}), i[3] = c, i[4] = l), l;
}
function p(r, i) {
	return /* @__PURE__ */ n(e.li, {
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
		children: [/* @__PURE__ */ t("div", {
			className: "aurora-timeline__marker",
			"aria-hidden": "true"
		}), /* @__PURE__ */ n("div", {
			className: "aurora-timeline__body",
			children: [
				/* @__PURE__ */ n("div", {
					className: "aurora-timeline__heading",
					children: [/* @__PURE__ */ t("h3", { children: r.role }), /* @__PURE__ */ t("span", {
						className: "aurora-timeline__range",
						children: d(r.range)
					})]
				}),
				/* @__PURE__ */ n("p", {
					className: "aurora-timeline__company",
					children: [r.companyUrl ? /* @__PURE__ */ t("a", {
						href: r.companyUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: r.company
					}) : r.company, r.location ? ` · ${r.location}` : ""]
				}),
				r.summary && /* @__PURE__ */ t("p", {
					className: "aurora-timeline__summary",
					children: r.summary
				}),
				r.highlights && r.highlights.length > 0 && /* @__PURE__ */ t("ul", {
					className: "aurora-timeline__highlights",
					children: r.highlights.map(m)
				})
			]
		})]
	}, r.id);
}
function m(e) {
	return /* @__PURE__ */ t("li", { children: e }, e);
}
//#endregion
//#region src/templates/aurora/sections/Projects.tsx
function h(r) {
	let i = (0, s.c)(5), { projects: a } = r, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ t(e.h2, {
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
	}), i[0] = o) : o = i[0];
	let c;
	i[1] === a ? c = i[2] : (c = a.map(g), i[1] = a, i[2] = c);
	let l;
	return i[3] === c ? l = i[4] : (l = /* @__PURE__ */ n("section", {
		className: "aurora-section",
		id: "projects",
		children: [o, /* @__PURE__ */ t("div", {
			className: "aurora-grid",
			children: c
		})]
	}), i[3] = c, i[4] = l), l;
}
function g(r, i) {
	return /* @__PURE__ */ n(e.article, {
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
		children: [r.imageUrl && /* @__PURE__ */ t("div", {
			className: "aurora-card__media",
			children: /* @__PURE__ */ t("img", {
				src: r.imageUrl,
				alt: r.title,
				loading: "lazy"
			})
		}), /* @__PURE__ */ n("div", {
			className: "aurora-card__body",
			children: [
				/* @__PURE__ */ t("h3", {
					className: "aurora-card__title",
					children: r.title
				}),
				r.description && /* @__PURE__ */ t("p", {
					className: "aurora-card__description",
					children: r.description
				}),
				r.tags && r.tags.length > 0 && /* @__PURE__ */ t("ul", {
					className: "aurora-card__tags",
					children: r.tags.map(_)
				}),
				/* @__PURE__ */ n("div", {
					className: "aurora-card__links",
					children: [r.liveUrl && /* @__PURE__ */ t("a", {
						href: r.liveUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: "Live"
					}), r.repoUrl && /* @__PURE__ */ t("a", {
						href: r.repoUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: "Source"
					})]
				})
			]
		})]
	}, r.id);
}
function _(e) {
	return /* @__PURE__ */ t("li", { children: e }, e);
}
//#endregion
//#region src/templates/aurora/sections/Skills.tsx
function v(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.category ?? "Skills", r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return t;
}
function y(r) {
	let i = (0, s.c)(15), { skills: a } = r, o, c, l, u, d;
	if (i[0] !== a) {
		let n = v(a);
		l = "aurora-section", u = "skills", i[6] === Symbol.for("react.memo_cache_sentinel") ? (d = /* @__PURE__ */ t(e.h2, {
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
		}), i[6] = d) : d = i[6], o = "aurora-skills", c = Array.from(n.entries()).map(b), i[0] = a, i[1] = o, i[2] = c, i[3] = l, i[4] = u, i[5] = d;
	} else o = i[1], c = i[2], l = i[3], u = i[4], d = i[5];
	let f;
	i[7] !== o || i[8] !== c ? (f = /* @__PURE__ */ t("div", {
		className: o,
		children: c
	}), i[7] = o, i[8] = c, i[9] = f) : f = i[9];
	let p;
	return i[10] !== l || i[11] !== u || i[12] !== d || i[13] !== f ? (p = /* @__PURE__ */ n("section", {
		className: l,
		id: u,
		children: [d, f]
	}), i[10] = l, i[11] = u, i[12] = d, i[13] = f, i[14] = p) : p = i[14], p;
}
function b(e) {
	let [r, i] = e;
	return /* @__PURE__ */ n("div", {
		className: "aurora-skills__group",
		children: [/* @__PURE__ */ t("h3", {
			className: "aurora-skills__category",
			children: r
		}), /* @__PURE__ */ t("ul", {
			className: "aurora-skills__list",
			children: i.map(x)
		})]
	}, r);
}
function x(n) {
	return /* @__PURE__ */ t(e.li, {
		className: "aurora-skills__pill",
		"data-level": n.level,
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
		children: n.name
	}, n.id);
}
//#endregion
//#region src/templates/aurora/sections/Footer.tsx
function S(e) {
	let r = (0, s.c)(11), { profile: i, socials: a } = e, o;
	r[0] === Symbol.for("react.memo_cache_sentinel") ? (o = (/* @__PURE__ */ new Date()).getFullYear(), r[0] = o) : o = r[0];
	let c = o, l;
	r[1] === i.email ? l = r[2] : (l = i.email && /* @__PURE__ */ t("a", {
		className: "aurora-footer__email",
		href: `mailto:${i.email}`,
		children: i.email
	}), r[1] = i.email, r[2] = l);
	let u;
	r[3] === a ? u = r[4] : (u = a && a.length > 0 && /* @__PURE__ */ t("nav", {
		className: "aurora-footer__socials",
		"aria-label": "Social links",
		children: a.map(C)
	}), r[3] = a, r[4] = u);
	let d = i.fullName || "Your Name", f;
	r[5] === d ? f = r[6] : (f = /* @__PURE__ */ n("p", {
		className: "aurora-footer__copy",
		children: [
			"© ",
			c,
			" ",
			d
		]
	}), r[5] = d, r[6] = f);
	let p;
	return r[7] !== l || r[8] !== u || r[9] !== f ? (p = /* @__PURE__ */ n("footer", {
		className: "aurora-footer",
		children: [
			l,
			u,
			f
		]
	}), r[7] = l, r[8] = u, r[9] = f, r[10] = p) : p = r[10], p;
}
function C(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/aurora/Template.tsx
function w(e) {
	let r = (0, s.c)(22), { data: i } = e, a = i.theme?.mode === "light" ? "light" : "dark", o = i.theme?.accentColor ?? "#7c3aed", c;
	r[0] === o ? c = r[1] : (c = { "--aurora-accent": o }, r[0] = o, r[1] = c);
	let u = c, d;
	r[2] !== i.profile || r[3] !== i.socials ? (d = /* @__PURE__ */ t(l, {
		profile: i.profile,
		socials: i.socials
	}), r[2] = i.profile, r[3] = i.socials, r[4] = d) : d = r[4];
	let p;
	r[5] === i.experience ? p = r[6] : (p = i.experience && i.experience.length > 0 && /* @__PURE__ */ t(f, { experience: i.experience }), r[5] = i.experience, r[6] = p);
	let m;
	r[7] === i.projects ? m = r[8] : (m = i.projects && i.projects.length > 0 && /* @__PURE__ */ t(h, { projects: i.projects }), r[7] = i.projects, r[8] = m);
	let g;
	r[9] === i.skills ? g = r[10] : (g = i.skills && i.skills.length > 0 && /* @__PURE__ */ t(y, { skills: i.skills }), r[9] = i.skills, r[10] = g);
	let _;
	r[11] !== i.profile || r[12] !== i.socials ? (_ = /* @__PURE__ */ t(S, {
		profile: i.profile,
		socials: i.socials
	}), r[11] = i.profile, r[12] = i.socials, r[13] = _) : _ = r[13];
	let v;
	return r[14] !== a || r[15] !== u || r[16] !== d || r[17] !== p || r[18] !== m || r[19] !== g || r[20] !== _ ? (v = /* @__PURE__ */ n("div", {
		className: "aurora",
		"data-theme": a,
		style: u,
		children: [
			d,
			p,
			m,
			g,
			_
		]
	}), r[14] = a, r[15] = u, r[16] = d, r[17] = p, r[18] = m, r[19] = g, r[20] = _, r[21] = v) : v = r[21], v;
}
//#endregion
export { w as default };
