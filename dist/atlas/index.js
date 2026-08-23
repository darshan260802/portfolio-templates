import { c as e } from "react/compiler-runtime";
import { gsap as t } from "gsap";
import { ScrollTrigger as n } from "gsap/ScrollTrigger";
import { useRef as r, useState as i } from "react";
import { useGSAP as a } from "@gsap/react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { motion as c } from "motion/react";
import './index.css';//#region src/templates/atlas/sections/Hero.tsx
var l = {
	github: "GitHub",
	linkedin: "LinkedIn",
	twitter: "X",
	bluesky: "Bluesky",
	dribbble: "Dribbble",
	behance: "Behance",
	youtube: "YouTube",
	website: "Site",
	other: "Link"
};
function u(t) {
	let n = e(22), { profile: i, socials: c } = t, l = r(null), u;
	n[0] === Symbol.for("react.memo_cache_sentinel") ? (u = { scope: l }, n[0] = u) : u = n[0], a(f, u);
	let p;
	n[1] === Symbol.for("react.memo_cache_sentinel") ? (p = /* @__PURE__ */ o("span", {
		className: "atlas-hero__eyebrow",
		children: "Portfolio — 01"
	}), n[1] = p) : p = n[1];
	let m = i.fullName || "Your Name", h;
	n[2] === m ? h = n[3] : (h = /* @__PURE__ */ o("h1", {
		className: "atlas-hero__name",
		children: /* @__PURE__ */ o("span", {
			className: "atlas-hero__name-inner",
			children: m
		})
	}), n[2] = m, n[3] = h);
	let g = i.headline || null, _;
	n[4] === g ? _ = n[5] : (_ = /* @__PURE__ */ o("span", {
		className: "atlas-hero__role atlas-hero__reveal",
		children: g
	}), n[4] = g, n[5] = _);
	let v = i.bio || null, y;
	n[6] === v ? y = n[7] : (y = /* @__PURE__ */ o("p", {
		className: "atlas-hero__bio atlas-hero__reveal",
		children: v
	}), n[6] = v, n[7] = y);
	let b;
	n[8] === i.location ? b = n[9] : (b = i.location && /* @__PURE__ */ o("span", { children: i.location }), n[8] = i.location, n[9] = b);
	let x;
	n[10] === c ? x = n[11] : (x = c && c.length > 0 && /* @__PURE__ */ o("nav", {
		className: "atlas-hero__socials",
		"aria-label": "Social links",
		children: c.map(d)
	}), n[10] = c, n[11] = x);
	let S;
	n[12] !== x || n[13] !== b ? (S = /* @__PURE__ */ s("div", {
		className: "atlas-hero__meta atlas-hero__reveal",
		children: [b, x]
	}), n[12] = x, n[13] = b, n[14] = S) : S = n[14];
	let C;
	n[15] !== S || n[16] !== y ? (C = /* @__PURE__ */ s("div", {
		className: "atlas-hero__grid",
		children: [y, S]
	}), n[15] = S, n[16] = y, n[17] = C) : C = n[17];
	let w;
	return n[18] !== C || n[19] !== h || n[20] !== _ ? (w = /* @__PURE__ */ s("header", {
		ref: l,
		className: "atlas-hero",
		children: [
			p,
			h,
			_,
			C
		]
	}), n[18] = C, n[19] = h, n[20] = _, n[21] = w) : w = n[21], w;
}
function d(e) {
	return /* @__PURE__ */ o("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? l[e.platform]
	}, e.platform + e.url);
}
function f() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		t.set([
			".atlas-hero__eyebrow",
			".atlas-hero__name-inner",
			".atlas-hero__reveal"
		], {
			clipPath: "inset(0 0 0 0)",
			x: 0,
			y: 0,
			opacity: 1
		});
		return;
	}
	t.timeline({ defaults: { ease: "power4.out" } }).to(".atlas-hero__eyebrow", {
		opacity: 1,
		y: 0,
		duration: .4
	}, 0).to(".atlas-hero__name-inner", {
		clipPath: "inset(0 0% 0 0)",
		duration: .9
	}, .15).to(".atlas-hero__reveal", {
		opacity: 1,
		y: 0,
		duration: .6,
		stagger: .08
	}, .6);
}
//#endregion
//#region src/templates/atlas/sections/KineticHeading.tsx
function p(n) {
	let i = e(9), { number: c, title: l } = n, u = r(null), d, f;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
		window.matchMedia("(prefers-reduced-motion: reduce)").matches || t.to(u.current.querySelector(".atlas-heading__title-inner"), {
			clipPath: "inset(0 0% 0 0)",
			x: 0,
			duration: .9,
			ease: "power4.out",
			scrollTrigger: {
				trigger: u.current,
				start: "top 85%",
				once: !0
			}
		});
	}, f = { scope: u }, i[0] = d, i[1] = f) : (d = i[0], f = i[1]), a(d, f);
	let p;
	i[2] === c ? p = i[3] : (p = /* @__PURE__ */ o("span", {
		className: "atlas-heading__number",
		children: c
	}), i[2] = c, i[3] = p);
	let m;
	i[4] === l ? m = i[5] : (m = /* @__PURE__ */ o("h2", {
		className: "atlas-heading__title",
		children: /* @__PURE__ */ o("span", {
			className: "atlas-heading__title-inner",
			children: l
		})
	}), i[4] = l, i[5] = m);
	let h;
	return i[6] !== p || i[7] !== m ? (h = /* @__PURE__ */ s("div", {
		ref: u,
		className: "atlas-heading",
		children: [p, m]
	}), i[6] = p, i[7] = m, i[8] = h) : h = i[8], h;
}
//#endregion
//#region src/templates/atlas/sections/Experience.tsx
function m(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function h(n) {
	let c = e(19), { experience: l, index: u } = n, d = r(null), [f, h] = i(-1), g;
	c[0] === l.length ? g = c[1] : (g = () => {
		let e = d.current;
		if (!e) return;
		let n = e.querySelector(".atlas-experience__rule-fill");
		if (!n) return;
		let r = t.fromTo(n, { scaleY: 0 }, {
			scaleY: 1,
			ease: "none",
			scrollTrigger: {
				trigger: e,
				start: "top 60%",
				end: "bottom 60%",
				scrub: .5,
				onUpdate: (e) => {
					h(Math.min(l.length - 1, Math.floor(e.progress * l.length)));
				}
			}
		});
		return () => {
			r.scrollTrigger?.kill(), r.kill();
		};
	}, c[0] = l.length, c[1] = g);
	let _;
	c[2] === l.length ? _ = c[3] : (_ = {
		scope: d,
		dependencies: [l.length]
	}, c[2] = l.length, c[3] = _), a(g, _);
	let v = String(u), y;
	c[4] === v ? y = c[5] : (y = v.padStart(2, "0"), c[4] = v, c[5] = y);
	let b;
	c[6] === y ? b = c[7] : (b = /* @__PURE__ */ o(p, {
		number: y,
		title: "Experience"
	}), c[6] = y, c[7] = b);
	let x;
	c[8] === Symbol.for("react.memo_cache_sentinel") ? (x = /* @__PURE__ */ o("div", {
		className: "atlas-experience__rule",
		children: /* @__PURE__ */ o("div", { className: "atlas-experience__rule-fill" })
	}), c[8] = x) : x = c[8];
	let S;
	if (c[9] !== f || c[10] !== l) {
		let e;
		c[12] === f ? e = c[13] : (e = (e, t) => /* @__PURE__ */ s("li", {
			className: "atlas-experience__item",
			"data-active": t <= f,
			children: [/* @__PURE__ */ o("span", {
				className: "atlas-experience__index",
				children: String(t + 1).padStart(2, "0")
			}), /* @__PURE__ */ s("div", { children: [
				/* @__PURE__ */ s("div", {
					className: "atlas-experience__row",
					children: [/* @__PURE__ */ o("h3", {
						className: "atlas-experience__role",
						children: e.role
					}), /* @__PURE__ */ o("span", {
						className: "atlas-experience__range",
						children: m(e.range)
					})]
				}),
				/* @__PURE__ */ o("p", {
					className: "atlas-experience__company",
					children: e.companyUrl ? /* @__PURE__ */ o("a", {
						href: e.companyUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: e.company
					}) : e.company
				}),
				e.summary && /* @__PURE__ */ o("p", {
					className: "atlas-experience__summary",
					children: e.summary
				})
			] })]
		}, e.id), c[12] = f, c[13] = e), S = l.map(e), c[9] = f, c[10] = l, c[11] = S;
	} else S = c[11];
	let C;
	c[14] === S ? C = c[15] : (C = /* @__PURE__ */ s("div", {
		className: "atlas-experience",
		children: [x, /* @__PURE__ */ o("ol", {
			className: "atlas-experience__list",
			children: S
		})]
	}), c[14] = S, c[15] = C);
	let w;
	return c[16] !== b || c[17] !== C ? (w = /* @__PURE__ */ s("section", {
		ref: d,
		className: "atlas-section",
		id: "experience",
		children: [b, C]
	}), c[16] = b, c[17] = C, c[18] = w) : w = c[18], w;
}
//#endregion
//#region src/templates/atlas/sections/Projects.tsx
function g(t) {
	let n = e(11), { projects: r, index: i } = t, a = String(i), c;
	n[0] === a ? c = n[1] : (c = a.padStart(2, "0"), n[0] = a, n[1] = c);
	let l;
	n[2] === c ? l = n[3] : (l = /* @__PURE__ */ o(p, {
		number: c,
		title: "Projects"
	}), n[2] = c, n[3] = l);
	let u;
	n[4] === r ? u = n[5] : (u = r.map(_), n[4] = r, n[5] = u);
	let d;
	n[6] === u ? d = n[7] : (d = /* @__PURE__ */ o("div", {
		className: "atlas-projects",
		children: u
	}), n[6] = u, n[7] = d);
	let f;
	return n[8] !== l || n[9] !== d ? (f = /* @__PURE__ */ s("section", {
		className: "atlas-section",
		id: "projects",
		children: [l, d]
	}), n[8] = l, n[9] = d, n[10] = f) : f = n[10], f;
}
function _(e, t) {
	return /* @__PURE__ */ s("article", {
		className: "atlas-project",
		children: [
			/* @__PURE__ */ o("span", {
				className: "atlas-project__index",
				children: String(t + 1).padStart(2, "0")
			}),
			e.imageUrl && /* @__PURE__ */ o("div", {
				className: "atlas-project__media",
				children: /* @__PURE__ */ o(c.img, {
					src: e.imageUrl,
					alt: e.title,
					loading: "lazy",
					initial: { clipPath: "inset(0 0 100% 0)" },
					whileInView: { clipPath: "inset(0 0 0% 0)" },
					viewport: {
						once: !0,
						amount: .3
					},
					transition: {
						duration: .8,
						ease: [
							.65,
							0,
							.35,
							1
						]
					}
				})
			}),
			/* @__PURE__ */ s("div", {
				className: "atlas-project__body",
				children: [
					/* @__PURE__ */ o("h3", {
						className: "atlas-project__title",
						children: e.title
					}),
					e.description && /* @__PURE__ */ o("p", {
						className: "atlas-project__description",
						children: e.description
					}),
					e.tags && e.tags.length > 0 && /* @__PURE__ */ o("div", {
						className: "atlas-project__tags",
						children: e.tags.map(v)
					}),
					/* @__PURE__ */ s("div", {
						className: "atlas-project__links",
						children: [e.liveUrl && /* @__PURE__ */ o("a", {
							href: e.liveUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Live ↗"
						}), e.repoUrl && /* @__PURE__ */ o("a", {
							href: e.repoUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Source ↗"
						})]
					})
				]
			})
		]
	}, e.id);
}
function v(e) {
	return /* @__PURE__ */ o("span", {
		className: "atlas-chip",
		children: e
	}, e);
}
//#endregion
//#region src/templates/atlas/sections/Skills.tsx
function y(t) {
	let n = e(11), { skills: r, index: i } = t, a = String(i), c;
	n[0] === a ? c = n[1] : (c = a.padStart(2, "0"), n[0] = a, n[1] = c);
	let l;
	n[2] === c ? l = n[3] : (l = /* @__PURE__ */ o(p, {
		number: c,
		title: "Skills"
	}), n[2] = c, n[3] = l);
	let u;
	n[4] === r ? u = n[5] : (u = r.map(b), n[4] = r, n[5] = u);
	let d;
	n[6] === u ? d = n[7] : (d = /* @__PURE__ */ o("ul", {
		className: "atlas-skills",
		children: u
	}), n[6] = u, n[7] = d);
	let f;
	return n[8] !== l || n[9] !== d ? (f = /* @__PURE__ */ s("section", {
		className: "atlas-section",
		id: "skills",
		children: [l, d]
	}), n[8] = l, n[9] = d, n[10] = f) : f = n[10], f;
}
function b(e, t) {
	return /* @__PURE__ */ s(c.li, {
		className: "atlas-skills__item",
		initial: {
			opacity: 0,
			y: 12
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: !0,
			amount: .6
		},
		transition: {
			duration: .4,
			delay: t % 8 * .03
		},
		children: [/* @__PURE__ */ o("span", {
			className: "atlas-skills__index",
			children: String(t + 1).padStart(2, "0")
		}), e.name]
	}, e.id);
}
//#endregion
//#region src/templates/atlas/sections/Footer.tsx
function x(t) {
	let n = e(19), { profile: r, socials: i, index: a } = t, c;
	n[0] === Symbol.for("react.memo_cache_sentinel") ? (c = (/* @__PURE__ */ new Date()).getFullYear(), n[0] = c) : c = n[0];
	let l = c, u;
	n[1] === Symbol.for("react.memo_cache_sentinel") ? (u = { opacity: 1 }, n[1] = u) : u = n[1];
	let d = String(a), f;
	n[2] === d ? f = n[3] : (f = d.padStart(2, "0"), n[2] = d, n[3] = f);
	let p;
	n[4] === f ? p = n[5] : (p = /* @__PURE__ */ s("span", {
		className: "atlas-hero__eyebrow",
		style: u,
		children: ["Contact — ", f]
	}), n[4] = f, n[5] = p);
	let m;
	n[6] === r.email ? m = n[7] : (m = r.email && /* @__PURE__ */ o("a", {
		className: "atlas-footer__cta",
		href: `mailto:${r.email}`,
		children: r.email
	}), n[6] = r.email, n[7] = m);
	let h;
	n[8] === i ? h = n[9] : (h = i && i.length > 0 && /* @__PURE__ */ o("nav", {
		className: "atlas-footer__socials",
		"aria-label": "Social links",
		children: i.map(S)
	}), n[8] = i, n[9] = h);
	let g = r.fullName || "Your Name", _;
	n[10] === g ? _ = n[11] : (_ = /* @__PURE__ */ s("p", {
		className: "atlas-footer__copy",
		children: [
			"© ",
			l,
			" ",
			g
		]
	}), n[10] = g, n[11] = _);
	let v;
	n[12] !== h || n[13] !== _ ? (v = /* @__PURE__ */ s("div", {
		className: "atlas-footer__row",
		children: [h, _]
	}), n[12] = h, n[13] = _, n[14] = v) : v = n[14];
	let y;
	return n[15] !== v || n[16] !== p || n[17] !== m ? (y = /* @__PURE__ */ s("footer", {
		className: "atlas-footer",
		children: [
			p,
			m,
			v
		]
	}), n[15] = v, n[16] = p, n[17] = m, n[18] = y) : y = n[18], y;
}
function S(e) {
	return /* @__PURE__ */ o("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/atlas/sections/SectionIndexNav.tsx
function C(t) {
	let c = e(13), { entries: l } = t, [u, d] = i(null), f = r(null), p;
	c[0] === l ? p = c[1] : (p = () => {
		let e = l.map((e) => n.create({
			trigger: `#${e.id}`,
			start: "top 55%",
			end: "bottom 55%",
			onToggle: (t) => {
				t.isActive && d(e.id);
			}
		}));
		return () => {
			for (let t of e) t.kill();
		};
	}, c[0] = l, c[1] = p);
	let m;
	c[2] === l ? m = c[3] : (m = l.map(w).join(","), c[2] = l, c[3] = m);
	let h;
	if (c[4] === m ? h = c[5] : (h = {
		scope: f,
		dependencies: [m]
	}, c[4] = m, c[5] = h), a(p, h), l.length === 0) return null;
	let g;
	if (c[6] !== u || c[7] !== l) {
		let e;
		c[9] === u ? e = c[10] : (e = (e, t) => /* @__PURE__ */ o("li", {
			"data-active": e.id === u,
			children: /* @__PURE__ */ s("a", {
				href: `#${e.id}`,
				children: [/* @__PURE__ */ o("span", {
					className: "atlas-index__number",
					children: String(t + 1).padStart(2, "0")
				}), /* @__PURE__ */ o("span", {
					className: "atlas-index__label",
					children: e.label
				})]
			})
		}, e.id), c[9] = u, c[10] = e), g = l.map(e), c[6] = u, c[7] = l, c[8] = g;
	} else g = c[8];
	let _;
	return c[11] === g ? _ = c[12] : (_ = /* @__PURE__ */ o("nav", {
		ref: f,
		className: "atlas-index",
		"aria-label": "Section index",
		children: /* @__PURE__ */ o("ol", { children: g })
	}), c[11] = g, c[12] = _), _;
}
function w(e) {
	return e.id;
}
//#endregion
//#region src/templates/atlas/Template.tsx
t.registerPlugin(n);
function T(t) {
	let n = e(44), { data: r } = t, i = r.theme?.mode === "dark" ? "dark" : "light", a = r.theme?.accentColor ?? "#e0342a", c = (r.experience?.length ?? 0) > 0, l = (r.projects?.length ?? 0) > 0, d = (r.skills?.length ?? 0) > 0, f;
	n[0] === c ? f = n[1] : (f = c && {
		id: "experience",
		label: "Experience"
	}, n[0] = c, n[1] = f);
	let p;
	n[2] === l ? p = n[3] : (p = l && {
		id: "projects",
		label: "Projects"
	}, n[2] = l, n[3] = p);
	let m;
	n[4] === d ? m = n[5] : (m = d && {
		id: "skills",
		label: "Skills"
	}, n[4] = d, n[5] = m);
	let _;
	n[6] !== f || n[7] !== p || n[8] !== m ? (_ = [
		f,
		p,
		m
	].filter(E), n[6] = f, n[7] = p, n[8] = m, n[9] = _) : _ = n[9];
	let v = _, b;
	n[10] === v ? b = n[11] : (b = (e) => v.findIndex((t) => t.id === e) + 2, n[10] = v, n[11] = b);
	let S = b, w;
	n[12] === a ? w = n[13] : (w = { "--atlas-accent": a }, n[12] = a, n[13] = w);
	let T = w, D;
	n[14] === v ? D = n[15] : (D = /* @__PURE__ */ o(C, { entries: v }), n[14] = v, n[15] = D);
	let O;
	n[16] !== r.profile || n[17] !== r.socials ? (O = /* @__PURE__ */ o(u, {
		profile: r.profile,
		socials: r.socials
	}), n[16] = r.profile, n[17] = r.socials, n[18] = O) : O = n[18];
	let k;
	n[19] !== r.experience || n[20] !== c || n[21] !== S ? (k = c && r.experience && /* @__PURE__ */ o(h, {
		experience: r.experience,
		index: S("experience")
	}), n[19] = r.experience, n[20] = c, n[21] = S, n[22] = k) : k = n[22];
	let A;
	n[23] !== r.projects || n[24] !== l || n[25] !== S ? (A = l && r.projects && /* @__PURE__ */ o(g, {
		projects: r.projects,
		index: S("projects")
	}), n[23] = r.projects, n[24] = l, n[25] = S, n[26] = A) : A = n[26];
	let j;
	n[27] !== r.skills || n[28] !== d || n[29] !== S ? (j = d && r.skills && /* @__PURE__ */ o(y, {
		skills: r.skills,
		index: S("skills")
	}), n[27] = r.skills, n[28] = d, n[29] = S, n[30] = j) : j = n[30];
	let M = v.length + 2, N;
	n[31] !== r.profile || n[32] !== r.socials || n[33] !== M ? (N = /* @__PURE__ */ o(x, {
		profile: r.profile,
		socials: r.socials,
		index: M
	}), n[31] = r.profile, n[32] = r.socials, n[33] = M, n[34] = N) : N = n[34];
	let P;
	return n[35] !== i || n[36] !== k || n[37] !== A || n[38] !== j || n[39] !== N || n[40] !== T || n[41] !== D || n[42] !== O ? (P = /* @__PURE__ */ s("div", {
		className: "atlas",
		"data-theme": i,
		style: T,
		children: [
			D,
			O,
			k,
			A,
			j,
			N
		]
	}), n[35] = i, n[36] = k, n[37] = A, n[38] = j, n[39] = N, n[40] = T, n[41] = D, n[42] = O, n[43] = P) : P = n[43], P;
}
function E(e) {
	return e !== !1;
}
//#endregion
export { T as default };
