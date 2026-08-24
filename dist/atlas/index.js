import { c as e } from "react/compiler-runtime";
import { gsap as t } from "gsap";
import { ScrollTrigger as n } from "gsap/ScrollTrigger";
import { useRef as r, useState as i } from "react";
import { useGSAP as a } from "@gsap/react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { motion as c } from "motion/react";
import './index.css';//#region src/uploads.ts
function l(e) {
	return g(e, "word/document.xml") !== -1;
}
var u = {
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
		verify: l
	}]
};
function d(e, t) {
	let n = t.toLowerCase();
	return e.formats.find((e) => e.extensions.includes(n));
}
function f(e) {
	if (!e) return;
	let t = e.split(/[?#]/, 1)[0] ?? "";
	return /\.([a-z0-9]+)$/i.exec(t)?.[1]?.toLowerCase();
}
function p(e) {
	let t = f(e.resumeFilename) ?? f(e.resumeUrl);
	if (t) return d(u, t)?.label;
}
function m(e) {
	if (!e.resumeUrl) return;
	if (e.resumeFilename) return e.resumeFilename;
	let t = f(e.resumeUrl);
	if (!t || !d(u, t)) return;
	let n = e.fullName.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
	return n ? `${n}-resume.${t}` : `resume.${t}`;
}
function h(e) {
	return e.resumeUrl ? {
		href: e.resumeUrl,
		download: m(e),
		format: p(e)
	} : null;
}
function g(e, t) {
	let n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	outer: for (let t = 0; t <= e.length - n.length; t++) {
		for (let r = 0; r < n.length; r++) if (e[t + r] !== n[r]) continue outer;
		return t;
	}
	return -1;
}
//#endregion
//#region src/templates/atlas/sections/Hero.tsx
var _ = {
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
function v(t) {
	let n = e(31), { profile: i, socials: c } = t, l = r(null), u;
	n[0] === i ? u = n[1] : (u = h(i), n[0] = i, n[1] = u);
	let d = u, f;
	n[2] === Symbol.for("react.memo_cache_sentinel") ? (f = { scope: l }, n[2] = f) : f = n[2], a(b, f);
	let p;
	n[3] === Symbol.for("react.memo_cache_sentinel") ? (p = /* @__PURE__ */ o("span", {
		className: "atlas-hero__eyebrow",
		children: "Portfolio — 01"
	}), n[3] = p) : p = n[3];
	let m = i.fullName || "Your Name", g;
	n[4] === m ? g = n[5] : (g = /* @__PURE__ */ o("h1", {
		className: "atlas-hero__name",
		children: /* @__PURE__ */ o("span", {
			className: "atlas-hero__name-inner",
			children: m
		})
	}), n[4] = m, n[5] = g);
	let _ = i.headline || null, v;
	n[6] === _ ? v = n[7] : (v = /* @__PURE__ */ o("span", {
		className: "atlas-hero__role atlas-hero__reveal",
		children: _
	}), n[6] = _, n[7] = v);
	let x = i.bio ?? "", S;
	n[8] === x ? S = n[9] : (S = /* @__PURE__ */ o("p", {
		className: "atlas-hero__bio atlas-hero__reveal",
		dangerouslySetInnerHTML: { __html: x }
	}), n[8] = x, n[9] = S);
	let C;
	n[10] !== i.avatarUrl || n[11] !== i.fullName ? (C = i.avatarUrl && /* @__PURE__ */ o("img", {
		className: "atlas-hero__portrait",
		src: i.avatarUrl,
		alt: i.fullName
	}), n[10] = i.avatarUrl, n[11] = i.fullName, n[12] = C) : C = n[12];
	let w;
	n[13] === i.location ? w = n[14] : (w = i.location && /* @__PURE__ */ o("span", { children: i.location }), n[13] = i.location, n[14] = w);
	let T;
	n[15] === c ? T = n[16] : (T = c && c.length > 0 && /* @__PURE__ */ o("nav", {
		className: "atlas-hero__socials",
		"aria-label": "Social links",
		children: c.map(y)
	}), n[15] = c, n[16] = T);
	let E;
	n[17] === d ? E = n[18] : (E = d && /* @__PURE__ */ s("a", {
		className: "atlas-hero__resume",
		href: d.href,
		download: d.download,
		target: "_blank",
		rel: "noreferrer noopener",
		children: [
			"Résumé",
			d.format ? ` — ${d.format}` : "",
			" ↓"
		]
	}), n[17] = d, n[18] = E);
	let D;
	n[19] !== C || n[20] !== w || n[21] !== T || n[22] !== E ? (D = /* @__PURE__ */ s("div", {
		className: "atlas-hero__meta atlas-hero__reveal",
		children: [
			C,
			w,
			T,
			E
		]
	}), n[19] = C, n[20] = w, n[21] = T, n[22] = E, n[23] = D) : D = n[23];
	let O;
	n[24] !== D || n[25] !== S ? (O = /* @__PURE__ */ s("div", {
		className: "atlas-hero__grid",
		children: [S, D]
	}), n[24] = D, n[25] = S, n[26] = O) : O = n[26];
	let k;
	return n[27] !== O || n[28] !== g || n[29] !== v ? (k = /* @__PURE__ */ s("header", {
		ref: l,
		className: "atlas-hero",
		children: [
			p,
			g,
			v,
			O
		]
	}), n[27] = O, n[28] = g, n[29] = v, n[30] = k) : k = n[30], k;
}
function y(e) {
	return /* @__PURE__ */ o("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? _[e.platform]
	}, e.platform + e.url);
}
function b() {
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
//#region src/rich-text.tsx
function x(t) {
	let n = e(5), { html: r, className: i } = t;
	if (!r) return null;
	let a;
	n[0] === r ? a = n[1] : (a = { __html: r }, n[0] = r, n[1] = a);
	let s;
	return n[2] !== i || n[3] !== a ? (s = /* @__PURE__ */ o("div", {
		className: i,
		dangerouslySetInnerHTML: a
	}), n[2] = i, n[3] = a, n[4] = s) : s = n[4], s;
}
//#endregion
//#region src/templates/atlas/sections/KineticHeading.tsx
function S(n) {
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
function C(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function w(n) {
	let c = e(19), { experience: l, index: u } = n, d = r(null), [f, p] = i(-1), m;
	c[0] === l.length ? m = c[1] : (m = () => {
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
					p(Math.min(l.length - 1, Math.floor(e.progress * l.length)));
				}
			}
		});
		return () => {
			r.scrollTrigger?.kill(), r.kill();
		};
	}, c[0] = l.length, c[1] = m);
	let h;
	c[2] === l.length ? h = c[3] : (h = {
		scope: d,
		dependencies: [l.length]
	}, c[2] = l.length, c[3] = h), a(m, h);
	let g = String(u), _;
	c[4] === g ? _ = c[5] : (_ = g.padStart(2, "0"), c[4] = g, c[5] = _);
	let v;
	c[6] === _ ? v = c[7] : (v = /* @__PURE__ */ o(S, {
		number: _,
		title: "Experience"
	}), c[6] = _, c[7] = v);
	let y;
	c[8] === Symbol.for("react.memo_cache_sentinel") ? (y = /* @__PURE__ */ o("div", {
		className: "atlas-experience__rule",
		children: /* @__PURE__ */ o("div", { className: "atlas-experience__rule-fill" })
	}), c[8] = y) : y = c[8];
	let b;
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
						children: C(e.range)
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
				/* @__PURE__ */ o(x, {
					html: e.summary,
					className: "atlas-experience__summary"
				})
			] })]
		}, e.id), c[12] = f, c[13] = e), b = l.map(e), c[9] = f, c[10] = l, c[11] = b;
	} else b = c[11];
	let w;
	c[14] === b ? w = c[15] : (w = /* @__PURE__ */ s("div", {
		className: "atlas-experience",
		children: [y, /* @__PURE__ */ o("ol", {
			className: "atlas-experience__list",
			children: b
		})]
	}), c[14] = b, c[15] = w);
	let T;
	return c[16] !== v || c[17] !== w ? (T = /* @__PURE__ */ s("section", {
		ref: d,
		className: "atlas-section",
		id: "experience",
		children: [v, w]
	}), c[16] = v, c[17] = w, c[18] = T) : T = c[18], T;
}
//#endregion
//#region src/templates/atlas/sections/Projects.tsx
function T(t) {
	let n = e(11), { projects: r, index: i } = t, a = String(i), c;
	n[0] === a ? c = n[1] : (c = a.padStart(2, "0"), n[0] = a, n[1] = c);
	let l;
	n[2] === c ? l = n[3] : (l = /* @__PURE__ */ o(S, {
		number: c,
		title: "Projects"
	}), n[2] = c, n[3] = l);
	let u;
	n[4] === r ? u = n[5] : (u = r.map(E), n[4] = r, n[5] = u);
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
function E(e, t) {
	return /* @__PURE__ */ s("article", {
		className: "atlas-project",
		children: [e.imageUrl && /* @__PURE__ */ o("div", {
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
		}), /* @__PURE__ */ s("div", {
			className: "atlas-project__body",
			children: [
				/* @__PURE__ */ o("span", {
					className: "atlas-project__index",
					children: String(t + 1).padStart(2, "0")
				}),
				/* @__PURE__ */ o("h3", {
					className: "atlas-project__title",
					children: e.title
				}),
				/* @__PURE__ */ o(x, {
					html: e.description,
					className: "atlas-project__description"
				}),
				e.tags && e.tags.length > 0 && /* @__PURE__ */ o("div", {
					className: "atlas-project__tags",
					children: e.tags.map(D)
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
		})]
	}, e.id);
}
function D(e) {
	return /* @__PURE__ */ o("span", {
		className: "atlas-chip",
		children: e
	}, e);
}
//#endregion
//#region src/templates/atlas/sections/Skills.tsx
function O(t) {
	let n = e(11), { skills: r, index: i } = t, a = String(i), c;
	n[0] === a ? c = n[1] : (c = a.padStart(2, "0"), n[0] = a, n[1] = c);
	let l;
	n[2] === c ? l = n[3] : (l = /* @__PURE__ */ o(S, {
		number: c,
		title: "Skills"
	}), n[2] = c, n[3] = l);
	let u;
	n[4] === r ? u = n[5] : (u = r.map(k), n[4] = r, n[5] = u);
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
function k(e, t) {
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
function A(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function j(t) {
	let n = e(22), { profile: r, socials: i, index: a } = t, c;
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
	n[8] === r.phone ? h = n[9] : (h = r.phone && /* @__PURE__ */ o("a", {
		className: "atlas-footer__phone",
		href: A(r.phone),
		children: r.phone
	}), n[8] = r.phone, n[9] = h);
	let g;
	n[10] === i ? g = n[11] : (g = i && i.length > 0 && /* @__PURE__ */ o("nav", {
		className: "atlas-footer__socials",
		"aria-label": "Social links",
		children: i.map(M)
	}), n[10] = i, n[11] = g);
	let _ = r.fullName || "Your Name", v;
	n[12] === _ ? v = n[13] : (v = /* @__PURE__ */ s("p", {
		className: "atlas-footer__copy",
		children: [
			"© ",
			l,
			" ",
			_
		]
	}), n[12] = _, n[13] = v);
	let y;
	n[14] !== v || n[15] !== g ? (y = /* @__PURE__ */ s("div", {
		className: "atlas-footer__row",
		children: [g, v]
	}), n[14] = v, n[15] = g, n[16] = y) : y = n[16];
	let b;
	return n[17] !== y || n[18] !== p || n[19] !== m || n[20] !== h ? (b = /* @__PURE__ */ s("footer", {
		className: "atlas-footer",
		children: [
			p,
			m,
			h,
			y
		]
	}), n[17] = y, n[18] = p, n[19] = m, n[20] = h, n[21] = b) : b = n[21], b;
}
function M(e) {
	return /* @__PURE__ */ o("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/atlas/sections/SectionIndexNav.tsx
function N(t) {
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
	c[2] === l ? m = c[3] : (m = l.map(P).join(","), c[2] = l, c[3] = m);
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
function P(e) {
	return e.id;
}
//#endregion
//#region src/templates/atlas/Template.tsx
t.registerPlugin(n);
function F(t) {
	let n = e(44), { data: r } = t, i = r.theme?.mode === "dark" ? "dark" : "light", a = r.theme?.accentColor ?? "#e0342a", c = (r.experience?.length ?? 0) > 0, l = (r.projects?.length ?? 0) > 0, u = (r.skills?.length ?? 0) > 0, d;
	n[0] === c ? d = n[1] : (d = c && {
		id: "experience",
		label: "Experience"
	}, n[0] = c, n[1] = d);
	let f;
	n[2] === l ? f = n[3] : (f = l && {
		id: "projects",
		label: "Projects"
	}, n[2] = l, n[3] = f);
	let p;
	n[4] === u ? p = n[5] : (p = u && {
		id: "skills",
		label: "Skills"
	}, n[4] = u, n[5] = p);
	let m;
	n[6] !== d || n[7] !== f || n[8] !== p ? (m = [
		d,
		f,
		p
	].filter(I), n[6] = d, n[7] = f, n[8] = p, n[9] = m) : m = n[9];
	let h = m, g;
	n[10] === h ? g = n[11] : (g = (e) => h.findIndex((t) => t.id === e) + 2, n[10] = h, n[11] = g);
	let _ = g, y;
	n[12] === a ? y = n[13] : (y = { "--atlas-accent": a }, n[12] = a, n[13] = y);
	let b = y, x;
	n[14] === h ? x = n[15] : (x = /* @__PURE__ */ o(N, { entries: h }), n[14] = h, n[15] = x);
	let S;
	n[16] !== r.profile || n[17] !== r.socials ? (S = /* @__PURE__ */ o(v, {
		profile: r.profile,
		socials: r.socials
	}), n[16] = r.profile, n[17] = r.socials, n[18] = S) : S = n[18];
	let C;
	n[19] !== r.experience || n[20] !== c || n[21] !== _ ? (C = c && r.experience && /* @__PURE__ */ o(w, {
		experience: r.experience,
		index: _("experience")
	}), n[19] = r.experience, n[20] = c, n[21] = _, n[22] = C) : C = n[22];
	let E;
	n[23] !== r.projects || n[24] !== l || n[25] !== _ ? (E = l && r.projects && /* @__PURE__ */ o(T, {
		projects: r.projects,
		index: _("projects")
	}), n[23] = r.projects, n[24] = l, n[25] = _, n[26] = E) : E = n[26];
	let D;
	n[27] !== r.skills || n[28] !== u || n[29] !== _ ? (D = u && r.skills && /* @__PURE__ */ o(O, {
		skills: r.skills,
		index: _("skills")
	}), n[27] = r.skills, n[28] = u, n[29] = _, n[30] = D) : D = n[30];
	let k = h.length + 2, A;
	n[31] !== r.profile || n[32] !== r.socials || n[33] !== k ? (A = /* @__PURE__ */ o(j, {
		profile: r.profile,
		socials: r.socials,
		index: k
	}), n[31] = r.profile, n[32] = r.socials, n[33] = k, n[34] = A) : A = n[34];
	let M;
	return n[35] !== i || n[36] !== C || n[37] !== E || n[38] !== D || n[39] !== A || n[40] !== b || n[41] !== x || n[42] !== S ? (M = /* @__PURE__ */ s("div", {
		className: "atlas",
		"data-theme": i,
		style: b,
		children: [
			x,
			S,
			C,
			E,
			D,
			A
		]
	}), n[35] = i, n[36] = C, n[37] = E, n[38] = D, n[39] = A, n[40] = b, n[41] = x, n[42] = S, n[43] = M) : M = n[43], M;
}
function I(e) {
	return e !== !1;
}
//#endregion
export { F as default };
