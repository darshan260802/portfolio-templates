import "./index.css";
import { c as e } from "react/compiler-runtime";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { useEffect as r, useRef as i, useState as a } from "react";
import { gsap as o } from "gsap";
import { ScrollTrigger as s } from "gsap/ScrollTrigger";
import { useGSAP as c } from "@gsap/react";
import { motion as l } from "motion/react";
//#region src/rich-text.tsx
function u(n) {
	let r = e(5), { html: i, className: a } = n;
	if (!i) return null;
	let o;
	r[0] === i ? o = r[1] : (o = { __html: i }, r[0] = i, r[1] = o);
	let s;
	return r[2] !== a || r[3] !== o ? (s = /* @__PURE__ */ t("div", {
		className: a,
		dangerouslySetInnerHTML: o
	}), r[2] = a, r[3] = o, r[4] = s) : s = r[4], s;
}
//#endregion
//#region src/portfolio-extras.tsx
function d(n) {
	let r = e(4), { links: i } = n;
	if (!i?.length) return null;
	let a;
	r[0] === i ? a = r[1] : (a = i.map(f), r[0] = i, r[1] = a);
	let o;
	return r[2] === a ? o = r[3] : (o = /* @__PURE__ */ t("div", {
		className: "pb-extra-links",
		children: a
	}), r[2] = a, r[3] = o), o;
}
function f(e) {
	return /^https?:\/\//i.test(e.url) && /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noopener noreferrer",
		children: [e.label || "Visit link", " ↗"]
	}, e.id);
}
function p(e) {
	return `custom-${Array.from(e).map((e) => e.codePointAt(0).toString(16)).join("-")}`;
}
function m(e) {
	return [
		...e.education?.length ? [{
			id: "education",
			label: "Education"
		}] : [],
		...e.achievements?.length ? [{
			id: "achievements",
			label: "Achievements"
		}] : [],
		...(e.customSections ?? []).filter((e) => e.visible !== !1 && e.title.trim()).map((e) => ({
			id: p(e.id),
			label: e.title
		}))
	];
}
function h(r) {
	let i = e(10), { data: a } = r, o;
	i[0] === a.education ? o = i[1] : (o = !!a.education?.length && /* @__PURE__ */ n("section", {
		id: "education",
		className: "pb-extra-section",
		"aria-labelledby": "education-heading",
		children: [/* @__PURE__ */ t("h2", {
			id: "education-heading",
			children: "Education"
		}), /* @__PURE__ */ t("div", {
			className: "pb-extra-grid",
			children: a.education.map(y)
		})]
	}), i[0] = a.education, i[1] = o);
	let s;
	i[2] === a.achievements ? s = i[3] : (s = !!a.achievements?.length && /* @__PURE__ */ n("section", {
		id: "achievements",
		className: "pb-extra-section",
		"aria-labelledby": "achievements-heading",
		children: [/* @__PURE__ */ t("h2", {
			id: "achievements-heading",
			children: "Achievements"
		}), /* @__PURE__ */ t("div", {
			className: "pb-extra-grid",
			children: a.achievements.map(v)
		})]
	}), i[2] = a.achievements, i[3] = s);
	let c;
	i[4] === a.customSections ? c = i[5] : (c = (a.customSections ?? []).filter(_).map(g), i[4] = a.customSections, i[5] = c);
	let l;
	return i[6] !== o || i[7] !== s || i[8] !== c ? (l = /* @__PURE__ */ n("div", {
		className: "pb-extras",
		children: [
			o,
			s,
			c
		]
	}), i[6] = o, i[7] = s, i[8] = c, i[9] = l) : l = i[9], l;
}
function g(e) {
	return /* @__PURE__ */ n("section", {
		id: p(e.id),
		className: "pb-extra-section",
		"aria-label": e.title,
		children: [/* @__PURE__ */ t("h2", { children: e.title }), /* @__PURE__ */ n("div", {
			className: "pb-extra-card",
			children: [/* @__PURE__ */ t(u, { html: e.content }), /* @__PURE__ */ t(d, { links: e.links })]
		})]
	}, e.id);
}
function _(e) {
	return e.visible !== !1 && e.title.trim();
}
function v(e) {
	return /* @__PURE__ */ n("article", {
		className: "pb-extra-card",
		children: [
			/* @__PURE__ */ t("h3", { children: e.title }),
			/* @__PURE__ */ t("p", {
				className: "pb-extra-meta",
				children: [e.issuer, e.date].filter(Boolean).join(" · ")
			}),
			/* @__PURE__ */ t(u, { html: e.description }),
			/* @__PURE__ */ t(d, { links: e.links })
		]
	}, e.id);
}
function y(e) {
	return /* @__PURE__ */ n("article", {
		className: "pb-extra-card",
		children: [
			/* @__PURE__ */ t("h3", { children: e.institution }),
			(e.degree || e.fieldOfStudy) && /* @__PURE__ */ t("p", { children: [e.degree, e.fieldOfStudy].filter(Boolean).join(" · ") }),
			e.range && /* @__PURE__ */ n("p", {
				className: "pb-extra-meta",
				children: [e.range.start, (e.range.current || e.range.end) && ` — ${e.range.current ? "Present" : e.range.end}`]
			}),
			/* @__PURE__ */ t(u, { html: e.summary })
		]
	}, e.id);
}
//#endregion
//#region src/portfolio-theme.tsx
var b = "pb-visitor-theme-v1";
function x() {
	return typeof window < "u" && window.self !== window.top;
}
function S() {
	if (typeof window > "u" || x()) return null;
	try {
		let e = localStorage.getItem(b);
		return e === "light" || e === "dark" ? e : null;
	} catch {
		return null;
	}
}
function C() {
	return typeof window < "u" && window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function w(t, n) {
	let i = e(10), [o, s] = a(S), [c, l] = a(C), u = t?.mode, d, f;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => l(e.matches ? "dark" : "light");
		return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, f = [], i[0] = d, i[1] = f) : (d = i[0], f = i[1]), r(d, f);
	let p;
	i[2] === Symbol.for("react.memo_cache_sentinel") ? (p = () => {
		x() && s(null);
	}, i[2] = p) : p = i[2];
	let m;
	i[3] === u ? m = i[4] : (m = [u], i[3] = u, i[4] = m), r(p, m);
	let h = o ?? (u === "system" ? c : u ?? n), g;
	i[5] === h ? g = i[6] : (g = () => {
		let e = h === "dark" ? "light" : "dark";
		if (s(e), !x()) try {
			localStorage.setItem(b, e);
		} catch {}
	}, i[5] = h, i[6] = g);
	let _ = g, v;
	return i[7] !== h || i[8] !== _ ? (v = {
		mode: h,
		toggle: _
	}, i[7] = h, i[8] = _, i[9] = v) : v = i[9], v;
}
function T(n) {
	let r = e(5), { mode: i, toggle: a } = n, o = `Switch to ${i === "dark" ? "light" : "dark"} mode`, s = i === "dark", c = i === "dark" ? "☀ Light" : "☾ Dark", l;
	return r[0] !== o || r[1] !== s || r[2] !== c || r[3] !== a ? (l = /* @__PURE__ */ t("button", {
		type: "button",
		className: "pb-theme-toggle",
		onClick: a,
		"aria-label": o,
		"aria-pressed": s,
		children: c
	}), r[0] = o, r[1] = s, r[2] = c, r[3] = a, r[4] = l) : l = r[4], l;
}
//#endregion
//#region src/uploads.ts
function E(e) {
	return F(e, "word/document.xml") !== -1;
}
var D = {
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
		verify: E
	}]
};
function O(e, t) {
	let n = t.toLowerCase();
	return e.formats.find((e) => e.extensions.includes(n));
}
function k(e) {
	if (!e) return;
	let t = e.split(/[?#]/, 1)[0] ?? "";
	return /\.([a-z0-9]+)$/i.exec(t)?.[1]?.toLowerCase();
}
function A(e) {
	let t = k(e.resumeFilename) ?? k(e.resumeUrl);
	if (t) return O(D, t)?.label;
}
var j = {
	"–": "-",
	"—": "-",
	"‘": "'",
	"’": "'",
	"“": "\"",
	"”": "\"",
	"…": "...",
	"\xA0": " "
};
function M(e) {
	return e.replace(/[\u2013\u2014\u2018\u2019\u201c\u201d\u2026\u00a0]/g, (e) => j[e] ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7e]/g, "").replace(/\s+/g, " ").replace(/\s+(?=\.[^.]*$)/, "").trim();
}
function N(e) {
	if (!e.resumeUrl) return;
	if (e.resumeFilename) {
		let t = M(e.resumeFilename);
		if (/[^.]/.test(t.replace(/\.[^.]*$/, ""))) return t;
	}
	let t = k(e.resumeUrl);
	if (!t || !O(D, t)) return;
	let n = e.fullName.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
	return n ? `${n}-resume.${t}` : `resume.${t}`;
}
function P(e) {
	return e.resumeUrl ? {
		href: e.resumeUrl,
		download: N(e),
		format: A(e)
	} : null;
}
function F(e, t) {
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
var I = {
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
function L(r) {
	let a = e(31), { profile: o, socials: s } = r, l = i(null), u;
	a[0] === o ? u = a[1] : (u = P(o), a[0] = o, a[1] = u);
	let d = u, f;
	a[2] === Symbol.for("react.memo_cache_sentinel") ? (f = { scope: l }, a[2] = f) : f = a[2], c(z, f);
	let p;
	a[3] === Symbol.for("react.memo_cache_sentinel") ? (p = /* @__PURE__ */ t("span", {
		className: "atlas-hero__eyebrow",
		children: "Portfolio — 01"
	}), a[3] = p) : p = a[3];
	let m = o.fullName || "Your Name", h;
	a[4] === m ? h = a[5] : (h = /* @__PURE__ */ t("h1", {
		className: "atlas-hero__name",
		children: /* @__PURE__ */ t("span", {
			className: "atlas-hero__name-inner",
			children: m
		})
	}), a[4] = m, a[5] = h);
	let g = o.headline || null, _;
	a[6] === g ? _ = a[7] : (_ = /* @__PURE__ */ t("span", {
		className: "atlas-hero__role atlas-hero__reveal",
		children: g
	}), a[6] = g, a[7] = _);
	let v = o.bio ?? "", y;
	a[8] === v ? y = a[9] : (y = /* @__PURE__ */ t("p", {
		className: "atlas-hero__bio atlas-hero__reveal",
		dangerouslySetInnerHTML: { __html: v }
	}), a[8] = v, a[9] = y);
	let b;
	a[10] !== o.avatarUrl || a[11] !== o.fullName ? (b = o.avatarUrl && /* @__PURE__ */ t("img", {
		className: "atlas-hero__portrait",
		src: o.avatarUrl,
		alt: o.fullName
	}), a[10] = o.avatarUrl, a[11] = o.fullName, a[12] = b) : b = a[12];
	let x;
	a[13] === o.location ? x = a[14] : (x = o.location && /* @__PURE__ */ t("span", { children: o.location }), a[13] = o.location, a[14] = x);
	let S;
	a[15] === s ? S = a[16] : (S = s && s.length > 0 && /* @__PURE__ */ t("nav", {
		className: "atlas-hero__socials",
		"aria-label": "Social links",
		children: s.map(R)
	}), a[15] = s, a[16] = S);
	let C;
	a[17] === d ? C = a[18] : (C = d && /* @__PURE__ */ n("a", {
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
	}), a[17] = d, a[18] = C);
	let w;
	a[19] !== b || a[20] !== x || a[21] !== S || a[22] !== C ? (w = /* @__PURE__ */ n("div", {
		className: "atlas-hero__meta atlas-hero__reveal",
		children: [
			b,
			x,
			S,
			C
		]
	}), a[19] = b, a[20] = x, a[21] = S, a[22] = C, a[23] = w) : w = a[23];
	let T;
	a[24] !== w || a[25] !== y ? (T = /* @__PURE__ */ n("div", {
		className: "atlas-hero__grid",
		children: [y, w]
	}), a[24] = w, a[25] = y, a[26] = T) : T = a[26];
	let E;
	return a[27] !== T || a[28] !== h || a[29] !== _ ? (E = /* @__PURE__ */ n("header", {
		ref: l,
		className: "atlas-hero",
		children: [
			p,
			h,
			_,
			T
		]
	}), a[27] = T, a[28] = h, a[29] = _, a[30] = E) : E = a[30], E;
}
function R(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? I[e.platform]
	}, e.platform + e.url);
}
function z() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		o.set([
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
	o.timeline({ defaults: { ease: "power4.out" } }).to(".atlas-hero__eyebrow", {
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
function B(r) {
	let a = e(9), { number: s, title: l } = r, u = i(null), d, f;
	a[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
		window.matchMedia("(prefers-reduced-motion: reduce)").matches || o.to(u.current.querySelector(".atlas-heading__title-inner"), {
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
	}, f = { scope: u }, a[0] = d, a[1] = f) : (d = a[0], f = a[1]), c(d, f);
	let p;
	a[2] === s ? p = a[3] : (p = /* @__PURE__ */ t("span", {
		className: "atlas-heading__number",
		children: s
	}), a[2] = s, a[3] = p);
	let m;
	a[4] === l ? m = a[5] : (m = /* @__PURE__ */ t("h2", {
		className: "atlas-heading__title",
		children: /* @__PURE__ */ t("span", {
			className: "atlas-heading__title-inner",
			children: l
		})
	}), a[4] = l, a[5] = m);
	let h;
	return a[6] !== p || a[7] !== m ? (h = /* @__PURE__ */ n("div", {
		ref: u,
		className: "atlas-heading",
		children: [p, m]
	}), a[6] = p, a[7] = m, a[8] = h) : h = a[8], h;
}
//#endregion
//#region src/templates/atlas/sections/Experience.tsx
function V(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function H(r) {
	let s = e(19), { experience: l, index: d } = r, f = i(null), [p, m] = a(-1), h;
	s[0] === l.length ? h = s[1] : (h = () => {
		let e = f.current;
		if (!e) return;
		let t = e.querySelector(".atlas-experience__rule-fill");
		if (!t) return;
		let n = o.fromTo(t, { scaleY: 0 }, {
			scaleY: 1,
			ease: "none",
			scrollTrigger: {
				trigger: e,
				start: "top 60%",
				end: "bottom 60%",
				scrub: .5,
				onUpdate: (e) => {
					m(Math.min(l.length - 1, Math.floor(e.progress * l.length)));
				}
			}
		});
		return () => {
			n.scrollTrigger?.kill(), n.kill();
		};
	}, s[0] = l.length, s[1] = h);
	let g;
	s[2] === l.length ? g = s[3] : (g = {
		scope: f,
		dependencies: [l.length]
	}, s[2] = l.length, s[3] = g), c(h, g);
	let _ = String(d), v;
	s[4] === _ ? v = s[5] : (v = _.padStart(2, "0"), s[4] = _, s[5] = v);
	let y;
	s[6] === v ? y = s[7] : (y = /* @__PURE__ */ t(B, {
		number: v,
		title: "Experience"
	}), s[6] = v, s[7] = y);
	let b;
	s[8] === Symbol.for("react.memo_cache_sentinel") ? (b = /* @__PURE__ */ t("div", {
		className: "atlas-experience__rule",
		children: /* @__PURE__ */ t("div", { className: "atlas-experience__rule-fill" })
	}), s[8] = b) : b = s[8];
	let x;
	if (s[9] !== p || s[10] !== l) {
		let e;
		s[12] === p ? e = s[13] : (e = (e, r) => /* @__PURE__ */ n("li", {
			className: "atlas-experience__item",
			"data-active": r <= p,
			children: [/* @__PURE__ */ t("span", {
				className: "atlas-experience__index",
				children: String(r + 1).padStart(2, "0")
			}), /* @__PURE__ */ n("div", { children: [
				/* @__PURE__ */ n("div", {
					className: "atlas-experience__row",
					children: [/* @__PURE__ */ t("h3", {
						className: "atlas-experience__role",
						children: e.role
					}), /* @__PURE__ */ t("span", {
						className: "atlas-experience__range",
						children: V(e.range)
					})]
				}),
				/* @__PURE__ */ t("p", {
					className: "atlas-experience__company",
					children: e.companyUrl ? /* @__PURE__ */ t("a", {
						href: e.companyUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: e.company
					}) : e.company
				}),
				/* @__PURE__ */ t(u, {
					html: e.summary,
					className: "atlas-experience__summary"
				})
			] })]
		}, e.id), s[12] = p, s[13] = e), x = l.map(e), s[9] = p, s[10] = l, s[11] = x;
	} else x = s[11];
	let S;
	s[14] === x ? S = s[15] : (S = /* @__PURE__ */ n("div", {
		className: "atlas-experience",
		children: [b, /* @__PURE__ */ t("ol", {
			className: "atlas-experience__list",
			children: x
		})]
	}), s[14] = x, s[15] = S);
	let C;
	return s[16] !== y || s[17] !== S ? (C = /* @__PURE__ */ n("section", {
		ref: f,
		className: "atlas-section",
		id: "experience",
		children: [y, S]
	}), s[16] = y, s[17] = S, s[18] = C) : C = s[18], C;
}
//#endregion
//#region src/templates/atlas/sections/Projects.tsx
function U(r) {
	let i = e(11), { projects: a, index: o } = r, s = String(o), c;
	i[0] === s ? c = i[1] : (c = s.padStart(2, "0"), i[0] = s, i[1] = c);
	let l;
	i[2] === c ? l = i[3] : (l = /* @__PURE__ */ t(B, {
		number: c,
		title: "Projects"
	}), i[2] = c, i[3] = l);
	let u;
	i[4] === a ? u = i[5] : (u = a.map(W), i[4] = a, i[5] = u);
	let d;
	i[6] === u ? d = i[7] : (d = /* @__PURE__ */ t("div", {
		className: "atlas-projects",
		children: u
	}), i[6] = u, i[7] = d);
	let f;
	return i[8] !== l || i[9] !== d ? (f = /* @__PURE__ */ n("section", {
		className: "atlas-section",
		id: "projects",
		children: [l, d]
	}), i[8] = l, i[9] = d, i[10] = f) : f = i[10], f;
}
function W(e, r) {
	return /* @__PURE__ */ n("article", {
		className: "atlas-project",
		children: [e.imageUrl && /* @__PURE__ */ t("div", {
			className: "atlas-project__media",
			children: /* @__PURE__ */ t(l.img, {
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
		}), /* @__PURE__ */ n("div", {
			className: "atlas-project__body",
			children: [
				/* @__PURE__ */ t("span", {
					className: "atlas-project__index",
					children: String(r + 1).padStart(2, "0")
				}),
				/* @__PURE__ */ t("h3", {
					className: "atlas-project__title",
					children: e.title
				}),
				/* @__PURE__ */ t(u, {
					html: e.description,
					className: "atlas-project__description"
				}),
				e.tags && e.tags.length > 0 && /* @__PURE__ */ t("div", {
					className: "atlas-project__tags",
					children: e.tags.map(G)
				}),
				/* @__PURE__ */ n("div", {
					className: "atlas-project__links",
					children: [
						/* @__PURE__ */ t(d, { links: e.links }),
						e.liveUrl && /* @__PURE__ */ t("a", {
							href: e.liveUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Live ↗"
						}),
						e.repoUrl && /* @__PURE__ */ t("a", {
							href: e.repoUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Source ↗"
						})
					]
				})
			]
		})]
	}, e.id);
}
function G(e) {
	return /* @__PURE__ */ t("span", {
		className: "atlas-chip",
		children: e
	}, e);
}
//#endregion
//#region src/templates/atlas/sections/Skills.tsx
function K(r) {
	let i = e(11), { skills: a, index: o } = r, s = String(o), c;
	i[0] === s ? c = i[1] : (c = s.padStart(2, "0"), i[0] = s, i[1] = c);
	let l;
	i[2] === c ? l = i[3] : (l = /* @__PURE__ */ t(B, {
		number: c,
		title: "Skills"
	}), i[2] = c, i[3] = l);
	let u;
	i[4] === a ? u = i[5] : (u = a.map(q), i[4] = a, i[5] = u);
	let d;
	i[6] === u ? d = i[7] : (d = /* @__PURE__ */ t("ul", {
		className: "atlas-skills",
		children: u
	}), i[6] = u, i[7] = d);
	let f;
	return i[8] !== l || i[9] !== d ? (f = /* @__PURE__ */ n("section", {
		className: "atlas-section",
		id: "skills",
		children: [l, d]
	}), i[8] = l, i[9] = d, i[10] = f) : f = i[10], f;
}
function q(e, r) {
	return /* @__PURE__ */ n(l.li, {
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
			delay: r % 8 * .03
		},
		children: [/* @__PURE__ */ t("span", {
			className: "atlas-skills__index",
			children: String(r + 1).padStart(2, "0")
		}), e.name]
	}, e.id);
}
//#endregion
//#region src/templates/atlas/sections/Footer.tsx
function J(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function Y(r) {
	let i = e(22), { profile: a, socials: o, index: s } = r, c;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (c = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = c) : c = i[0];
	let l = c, u;
	i[1] === Symbol.for("react.memo_cache_sentinel") ? (u = { opacity: 1 }, i[1] = u) : u = i[1];
	let d = String(s), f;
	i[2] === d ? f = i[3] : (f = d.padStart(2, "0"), i[2] = d, i[3] = f);
	let p;
	i[4] === f ? p = i[5] : (p = /* @__PURE__ */ n("span", {
		className: "atlas-hero__eyebrow",
		style: u,
		children: ["Contact — ", f]
	}), i[4] = f, i[5] = p);
	let m;
	i[6] === a.email ? m = i[7] : (m = a.email && /* @__PURE__ */ t("a", {
		className: "atlas-footer__cta",
		href: `mailto:${a.email}`,
		children: a.email
	}), i[6] = a.email, i[7] = m);
	let h;
	i[8] === a.phone ? h = i[9] : (h = a.phone && /* @__PURE__ */ t("a", {
		className: "atlas-footer__phone",
		href: J(a.phone),
		children: a.phone
	}), i[8] = a.phone, i[9] = h);
	let g;
	i[10] === o ? g = i[11] : (g = o && o.length > 0 && /* @__PURE__ */ t("nav", {
		className: "atlas-footer__socials",
		"aria-label": "Social links",
		children: o.map(X)
	}), i[10] = o, i[11] = g);
	let _ = a.fullName || "Your Name", v;
	i[12] === _ ? v = i[13] : (v = /* @__PURE__ */ n("p", {
		className: "atlas-footer__copy",
		children: [
			"© ",
			l,
			" ",
			_
		]
	}), i[12] = _, i[13] = v);
	let y;
	i[14] !== v || i[15] !== g ? (y = /* @__PURE__ */ n("div", {
		className: "atlas-footer__row",
		children: [g, v]
	}), i[14] = v, i[15] = g, i[16] = y) : y = i[16];
	let b;
	return i[17] !== y || i[18] !== p || i[19] !== m || i[20] !== h ? (b = /* @__PURE__ */ n("footer", {
		className: "atlas-footer",
		children: [
			p,
			m,
			h,
			y
		]
	}), i[17] = y, i[18] = p, i[19] = m, i[20] = h, i[21] = b) : b = i[21], b;
}
function X(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/atlas/sections/SectionIndexNav.tsx
function Z(r) {
	let o = e(13), { entries: l } = r, [u, d] = a(null), f = i(null), p;
	o[0] === l ? p = o[1] : (p = () => {
		let e = l.map((e) => s.create({
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
	}, o[0] = l, o[1] = p);
	let m;
	o[2] === l ? m = o[3] : (m = l.map(Q).join(","), o[2] = l, o[3] = m);
	let h;
	if (o[4] === m ? h = o[5] : (h = {
		scope: f,
		dependencies: [m]
	}, o[4] = m, o[5] = h), c(p, h), l.length === 0) return null;
	let g;
	if (o[6] !== u || o[7] !== l) {
		let e;
		o[9] === u ? e = o[10] : (e = (e, r) => /* @__PURE__ */ t("li", {
			"data-active": e.id === u,
			children: /* @__PURE__ */ n("a", {
				href: `#${e.id}`,
				children: [/* @__PURE__ */ t("span", {
					className: "atlas-index__number",
					children: String(r + 1).padStart(2, "0")
				}), /* @__PURE__ */ t("span", {
					className: "atlas-index__label",
					children: e.label
				})]
			})
		}, e.id), o[9] = u, o[10] = e), g = l.map(e), o[6] = u, o[7] = l, o[8] = g;
	} else g = o[8];
	let _;
	return o[11] === g ? _ = o[12] : (_ = /* @__PURE__ */ t("nav", {
		ref: f,
		className: "atlas-index",
		"aria-label": "Section index",
		children: /* @__PURE__ */ t("ol", { children: g })
	}), o[11] = g, o[12] = _), _;
}
function Q(e) {
	return e.id;
}
//#endregion
//#region src/templates/atlas/Template.tsx
o.registerPlugin(s);
function $(r) {
	let i = e(52), { data: a } = r, { mode: o, toggle: s } = w(a.theme, "light"), c = a.theme?.accentColor ?? "#e0342a", l = (a.experience?.length ?? 0) > 0, u = (a.projects?.length ?? 0) > 0, d = (a.skills?.length ?? 0) > 0, f;
	i[0] === l ? f = i[1] : (f = l && {
		id: "experience",
		label: "Experience"
	}, i[0] = l, i[1] = f);
	let p;
	i[2] === u ? p = i[3] : (p = u && {
		id: "projects",
		label: "Projects"
	}, i[2] = u, i[3] = p);
	let g;
	i[4] === d ? g = i[5] : (g = d && {
		id: "skills",
		label: "Skills"
	}, i[4] = d, i[5] = g);
	let _;
	i[6] !== a || i[7] !== f || i[8] !== p || i[9] !== g ? (_ = [
		f,
		p,
		g,
		...m(a)
	].filter(ee), i[6] = a, i[7] = f, i[8] = p, i[9] = g, i[10] = _) : _ = i[10];
	let v = _, y;
	i[11] === v ? y = i[12] : (y = (e) => v.findIndex((t) => t.id === e) + 2, i[11] = v, i[12] = y);
	let b = y, x;
	i[13] === c ? x = i[14] : (x = { "--atlas-accent": c }, i[13] = c, i[14] = x);
	let S = x, C;
	i[15] === v ? C = i[16] : (C = /* @__PURE__ */ t(Z, { entries: v }), i[15] = v, i[16] = C);
	let E;
	i[17] !== a.profile || i[18] !== a.socials ? (E = /* @__PURE__ */ t(L, {
		profile: a.profile,
		socials: a.socials
	}), i[17] = a.profile, i[18] = a.socials, i[19] = E) : E = i[19];
	let D;
	i[20] !== a.experience || i[21] !== l || i[22] !== b ? (D = l && a.experience && /* @__PURE__ */ t(H, {
		experience: a.experience,
		index: b("experience")
	}), i[20] = a.experience, i[21] = l, i[22] = b, i[23] = D) : D = i[23];
	let O;
	i[24] !== a.projects || i[25] !== u || i[26] !== b ? (O = u && a.projects && /* @__PURE__ */ t(U, {
		projects: a.projects,
		index: b("projects")
	}), i[24] = a.projects, i[25] = u, i[26] = b, i[27] = O) : O = i[27];
	let k;
	i[28] !== a.skills || i[29] !== d || i[30] !== b ? (k = d && a.skills && /* @__PURE__ */ t(K, {
		skills: a.skills,
		index: b("skills")
	}), i[28] = a.skills, i[29] = d, i[30] = b, i[31] = k) : k = i[31];
	let A;
	i[32] === a ? A = i[33] : (A = /* @__PURE__ */ t(h, { data: a }), i[32] = a, i[33] = A);
	let j;
	i[34] !== o || i[35] !== s ? (j = /* @__PURE__ */ t(T, {
		mode: o,
		toggle: s
	}), i[34] = o, i[35] = s, i[36] = j) : j = i[36];
	let M = v.length + 2, N;
	i[37] !== a.profile || i[38] !== a.socials || i[39] !== M ? (N = /* @__PURE__ */ t(Y, {
		profile: a.profile,
		socials: a.socials,
		index: M
	}), i[37] = a.profile, i[38] = a.socials, i[39] = M, i[40] = N) : N = i[40];
	let P;
	return i[41] !== o || i[42] !== D || i[43] !== O || i[44] !== k || i[45] !== A || i[46] !== j || i[47] !== N || i[48] !== S || i[49] !== C || i[50] !== E ? (P = /* @__PURE__ */ n("div", {
		className: "atlas",
		"data-theme": o,
		style: S,
		children: [
			C,
			E,
			D,
			O,
			k,
			A,
			j,
			N
		]
	}), i[41] = o, i[42] = D, i[43] = O, i[44] = k, i[45] = A, i[46] = j, i[47] = N, i[48] = S, i[49] = C, i[50] = E, i[51] = P) : P = i[51], P;
}
function ee(e) {
	return e !== !1;
}
//#endregion
export { $ as default };
