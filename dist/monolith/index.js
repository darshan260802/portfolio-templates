import { c as e } from "react/compiler-runtime";
import { motion as t } from "motion/react";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
import './index.css';//#region src/rich-text.tsx
function a(t) {
	let n = e(5), { html: i, className: a } = t;
	if (!i) return null;
	let o;
	n[0] === i ? o = n[1] : (o = { __html: i }, n[0] = i, n[1] = o);
	let s;
	return n[2] !== a || n[3] !== o ? (s = /* @__PURE__ */ r("div", {
		className: a,
		dangerouslySetInnerHTML: o
	}), n[2] = a, n[3] = o, n[4] = s) : s = n[4], s;
}
//#endregion
//#region src/uploads.ts
function o(e) {
	return h(e, "word/document.xml") !== -1;
}
var s = {
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
		verify: o
	}]
};
function c(e, t) {
	let n = t.toLowerCase();
	return e.formats.find((e) => e.extensions.includes(n));
}
function l(e) {
	if (!e) return;
	let t = e.split(/[?#]/, 1)[0] ?? "";
	return /\.([a-z0-9]+)$/i.exec(t)?.[1]?.toLowerCase();
}
function u(e) {
	let t = l(e.resumeFilename) ?? l(e.resumeUrl);
	if (t) return c(s, t)?.label;
}
var d = {
	"–": "-",
	"—": "-",
	"‘": "'",
	"’": "'",
	"“": "\"",
	"”": "\"",
	"…": "...",
	"\xA0": " "
};
function f(e) {
	return e.replace(/[\u2013\u2014\u2018\u2019\u201c\u201d\u2026\u00a0]/g, (e) => d[e] ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7e]/g, "").replace(/\s+/g, " ").replace(/\s+(?=\.[^.]*$)/, "").trim();
}
function p(e) {
	if (!e.resumeUrl) return;
	if (e.resumeFilename) {
		let t = f(e.resumeFilename);
		if (/[^.]/.test(t.replace(/\.[^.]*$/, ""))) return t;
	}
	let t = l(e.resumeUrl);
	if (!t || !c(s, t)) return;
	let n = e.fullName.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
	return n ? `${n}-resume.${t}` : `resume.${t}`;
}
function m(e) {
	return e.resumeUrl ? {
		href: e.resumeUrl,
		download: p(e),
		format: u(e)
	} : null;
}
function h(e, t) {
	let n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	outer: for (let t = 0; t <= e.length - n.length; t++) {
		for (let r = 0; r < n.length; r++) if (e[t + r] !== n[r]) continue outer;
		return t;
	}
	return -1;
}
//#endregion
//#region src/templates/monolith/sections/Hero.tsx
function g(o) {
	let s = e(39), { profile: c, socials: l } = o, u;
	s[0] === c ? u = s[1] : (u = m(c), s[0] = c, s[1] = u);
	let d = u, f = !!(l && l.length > 0), p, h;
	s[2] === Symbol.for("react.memo_cache_sentinel") ? (p = {
		opacity: 0,
		y: 20
	}, h = {
		opacity: 1,
		y: 0
	}, s[2] = p, s[3] = h) : (p = s[2], h = s[3]);
	let g, _;
	s[4] === Symbol.for("react.memo_cache_sentinel") ? (g = {
		duration: .7,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}, _ = /* @__PURE__ */ r("div", {
		className: "monolith-hero__byline",
		children: "Portfolio"
	}), s[4] = g, s[5] = _) : (g = s[4], _ = s[5]);
	let v;
	s[6] !== c.avatarUrl || s[7] !== c.fullName ? (v = c.avatarUrl && /* @__PURE__ */ r("img", {
		className: "monolith-hero__avatar",
		src: c.avatarUrl,
		alt: c.fullName
	}), s[6] = c.avatarUrl, s[7] = c.fullName, s[8] = v) : v = s[8];
	let y = c.fullName || "Your Name", b;
	s[9] === y ? b = s[10] : (b = /* @__PURE__ */ r("h1", {
		className: "monolith-hero__name",
		children: y
	}), s[9] = y, s[10] = b);
	let x;
	s[11] !== v || s[12] !== b ? (x = /* @__PURE__ */ i("div", {
		className: "monolith-hero__namerow",
		children: [v, b]
	}), s[11] = v, s[12] = b, s[13] = x) : x = s[13];
	let S;
	s[14] === c.headline ? S = s[15] : (S = c.headline && /* @__PURE__ */ r("p", {
		className: "monolith-hero__headline",
		children: c.headline
	}), s[14] = c.headline, s[15] = S);
	let C;
	s[16] === c.bio ? C = s[17] : (C = /* @__PURE__ */ r(a, {
		html: c.bio,
		className: "monolith-hero__bio"
	}), s[16] = c.bio, s[17] = C);
	let w;
	s[18] === c.location ? w = s[19] : (w = c.location && /* @__PURE__ */ r("span", { children: c.location }), s[18] = c.location, s[19] = w);
	let T;
	s[20] !== f || s[21] !== c.location ? (T = c.location && f && /* @__PURE__ */ r("span", {
		"aria-hidden": "true",
		children: "/"
	}), s[20] = f, s[21] = c.location, s[22] = T) : T = s[22];
	let E;
	s[23] === l ? E = s[24] : (E = l && l.length > 0 && /* @__PURE__ */ r("nav", {
		className: "monolith-hero__socials",
		"aria-label": "Social links",
		children: l.map((e, t) => /* @__PURE__ */ i("span", { children: [/* @__PURE__ */ r("a", {
			href: e.url,
			target: "_blank",
			rel: "noreferrer noopener",
			children: e.label ?? e.platform
		}), t < l.length - 1 && /* @__PURE__ */ r("span", {
			"aria-hidden": "true",
			children: " / "
		})] }, e.platform + e.url))
	}), s[23] = l, s[24] = E);
	let D;
	s[25] !== f || s[26] !== c.location || s[27] !== d ? (D = d && /* @__PURE__ */ i(n, { children: [(c.location || f) && /* @__PURE__ */ r("span", {
		"aria-hidden": "true",
		children: "/"
	}), /* @__PURE__ */ i("a", {
		className: "monolith-hero__resume",
		href: d.href,
		download: d.download,
		target: "_blank",
		rel: "noreferrer noopener",
		children: [
			"Résumé",
			d.format ? ` (${d.format})` : "",
			" ↓"
		]
	})] }), s[25] = f, s[26] = c.location, s[27] = d, s[28] = D) : D = s[28];
	let O;
	s[29] !== w || s[30] !== T || s[31] !== E || s[32] !== D ? (O = /* @__PURE__ */ i("div", {
		className: "monolith-hero__meta",
		children: [
			w,
			T,
			E,
			D
		]
	}), s[29] = w, s[30] = T, s[31] = E, s[32] = D, s[33] = O) : O = s[33];
	let k;
	return s[34] !== S || s[35] !== C || s[36] !== O || s[37] !== x ? (k = /* @__PURE__ */ r("header", {
		className: "monolith-hero",
		children: /* @__PURE__ */ i(t.div, {
			className: "monolith-hero__inner",
			initial: p,
			animate: h,
			transition: g,
			children: [
				_,
				x,
				S,
				C,
				O
			]
		})
	}), s[34] = S, s[35] = C, s[36] = O, s[37] = x, s[38] = k) : k = s[38], k;
}
//#endregion
//#region src/templates/monolith/sections/SectionHeading.tsx
function _(n) {
	let a = e(10), { index: o, title: s } = n, c;
	a[0] === Symbol.for("react.memo_cache_sentinel") ? (c = /* @__PURE__ */ r(t.div, {
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
	a[3] === u ? d = a[4] : (d = /* @__PURE__ */ r("span", {
		className: "monolith-heading__number",
		children: u
	}), a[3] = u, a[4] = d);
	let f;
	a[5] === s ? f = a[6] : (f = /* @__PURE__ */ r("h2", {
		className: "monolith-heading__title",
		children: s
	}), a[5] = s, a[6] = f);
	let p;
	return a[7] !== d || a[8] !== f ? (p = /* @__PURE__ */ i("div", {
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
function v(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function y(t) {
	let n = e(9), { experience: a, index: o } = t, s;
	n[0] === o ? s = n[1] : (s = /* @__PURE__ */ r(_, {
		index: o,
		title: "Experience"
	}), n[0] = o, n[1] = s);
	let c;
	n[2] === a ? c = n[3] : (c = a.map(b), n[2] = a, n[3] = c);
	let l;
	n[4] === c ? l = n[5] : (l = /* @__PURE__ */ r("ol", {
		className: "monolith-ledger",
		children: c
	}), n[4] = c, n[5] = l);
	let u;
	return n[6] !== s || n[7] !== l ? (u = /* @__PURE__ */ i("section", {
		className: "monolith-section",
		id: "experience",
		children: [s, l]
	}), n[6] = s, n[7] = l, n[8] = u) : u = n[8], u;
}
function b(e, n) {
	return /* @__PURE__ */ i(t.li, {
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
			delay: n * .08
		},
		children: [/* @__PURE__ */ i("div", {
			className: "monolith-ledger__marker",
			children: [/* @__PURE__ */ r("span", {
				className: "monolith-ledger__number",
				children: String(n + 1).padStart(2, "0")
			}), /* @__PURE__ */ r("span", {
				className: "monolith-ledger__range",
				children: v(e.range)
			})]
		}), /* @__PURE__ */ i("div", {
			className: "monolith-ledger__body",
			children: [
				/* @__PURE__ */ r("h3", {
					className: "monolith-ledger__role",
					children: e.role
				}),
				/* @__PURE__ */ i("p", {
					className: "monolith-ledger__company",
					children: [e.companyUrl ? /* @__PURE__ */ r("a", {
						href: e.companyUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: e.company
					}) : e.company, e.location ? ` — ${e.location}` : ""]
				}),
				/* @__PURE__ */ r(a, {
					html: e.summary,
					className: "monolith-ledger__summary"
				}),
				e.highlights && e.highlights.length > 0 && /* @__PURE__ */ r("ul", {
					className: "monolith-ledger__highlights",
					children: e.highlights.map(x)
				})
			]
		})]
	}, e.id);
}
function x(e) {
	return /* @__PURE__ */ r("li", { children: e }, e);
}
//#endregion
//#region src/templates/monolith/sections/Projects.tsx
var S = {
	rest: {
		opacity: 0,
		x: -6
	},
	hover: {
		opacity: 1,
		x: 0
	}
};
function C(t) {
	let n = e(9), { projects: a, index: o } = t, s;
	n[0] === o ? s = n[1] : (s = /* @__PURE__ */ r(_, {
		index: o,
		title: "Projects"
	}), n[0] = o, n[1] = s);
	let c;
	n[2] === a ? c = n[3] : (c = a.map(w), n[2] = a, n[3] = c);
	let l;
	n[4] === c ? l = n[5] : (l = /* @__PURE__ */ r("ul", {
		className: "monolith-index",
		children: c
	}), n[4] = c, n[5] = l);
	let u;
	return n[6] !== s || n[7] !== l ? (u = /* @__PURE__ */ i("section", {
		className: "monolith-section",
		id: "projects",
		children: [s, l]
	}), n[6] = s, n[7] = l, n[8] = u) : u = n[8], u;
}
function w(e) {
	return /* @__PURE__ */ i(t.li, {
		className: "monolith-index__row",
		initial: "rest",
		whileHover: "hover",
		animate: "rest",
		children: [e.imageUrl && /* @__PURE__ */ r("img", {
			className: "monolith-index__thumb",
			src: e.imageUrl,
			alt: "",
			loading: "lazy"
		}), /* @__PURE__ */ i("div", {
			className: "monolith-index__body",
			children: [
				/* @__PURE__ */ i("div", {
					className: "monolith-index__heading",
					children: [/* @__PURE__ */ r("h3", {
						className: "monolith-index__title",
						children: e.title
					}), /* @__PURE__ */ r(t.span, {
						className: "monolith-index__arrow",
						variants: S,
						"aria-hidden": "true",
						children: "→"
					})]
				}),
				/* @__PURE__ */ r(a, {
					html: e.description,
					className: "monolith-index__description"
				}),
				/* @__PURE__ */ i("div", {
					className: "monolith-index__meta",
					children: [
						e.tags && e.tags.length > 0 && /* @__PURE__ */ r("span", {
							className: "monolith-index__tags",
							children: e.tags.join(" · ")
						}),
						e.liveUrl && /* @__PURE__ */ r("a", {
							href: e.liveUrl,
							target: "_blank",
							rel: "noreferrer noopener",
							children: "Live"
						}),
						e.repoUrl && /* @__PURE__ */ r("a", {
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
function T(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.category ?? "General", r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return t;
}
function E(t) {
	let n = e(17), { skills: a, index: o } = t, s, c, l, u, d;
	if (n[0] !== o || n[1] !== a) {
		let e = T(a);
		l = "monolith-section", u = "skills", n[7] === o ? d = n[8] : (d = /* @__PURE__ */ r(_, {
			index: o,
			title: "Skills"
		}), n[7] = o, n[8] = d), s = "monolith-skills", c = Array.from(e.entries()).map(D), n[0] = o, n[1] = a, n[2] = s, n[3] = c, n[4] = l, n[5] = u, n[6] = d;
	} else s = n[2], c = n[3], l = n[4], u = n[5], d = n[6];
	let f;
	n[9] !== s || n[10] !== c ? (f = /* @__PURE__ */ r("div", {
		className: s,
		children: c
	}), n[9] = s, n[10] = c, n[11] = f) : f = n[11];
	let p;
	return n[12] !== l || n[13] !== u || n[14] !== d || n[15] !== f ? (p = /* @__PURE__ */ i("section", {
		className: l,
		id: u,
		children: [d, f]
	}), n[12] = l, n[13] = u, n[14] = d, n[15] = f, n[16] = p) : p = n[16], p;
}
function D(e) {
	let [t, n] = e;
	return /* @__PURE__ */ i("div", {
		className: "monolith-skills__group",
		children: [/* @__PURE__ */ r("span", {
			className: "monolith-skills__category",
			children: t
		}), /* @__PURE__ */ r("p", {
			className: "monolith-skills__list",
			children: n.map(O).join(" · ")
		})]
	}, t);
}
function O(e) {
	return e.name;
}
//#endregion
//#region src/templates/monolith/sections/Footer.tsx
function k(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function A(t) {
	let n = e(14), { profile: a, socials: o } = t, s;
	n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), n[0] = s) : s = n[0];
	let c = s, l;
	n[1] === a.email ? l = n[2] : (l = a.email && /* @__PURE__ */ r("a", {
		href: `mailto:${a.email}`,
		children: a.email
	}), n[1] = a.email, n[2] = l);
	let u;
	n[3] === a.phone ? u = n[4] : (u = a.phone && /* @__PURE__ */ r("a", {
		href: k(a.phone),
		children: a.phone
	}), n[3] = a.phone, n[4] = u);
	let d;
	n[5] === o ? d = n[6] : (d = o?.map(j), n[5] = o, n[6] = d);
	let f = a.fullName || "Your Name", p;
	n[7] === f ? p = n[8] : (p = /* @__PURE__ */ i("span", { children: [
		"© ",
		c,
		" ",
		f
	] }), n[7] = f, n[8] = p);
	let m;
	return n[9] !== l || n[10] !== u || n[11] !== d || n[12] !== p ? (m = /* @__PURE__ */ r("footer", {
		className: "monolith-footer",
		children: /* @__PURE__ */ i("div", {
			className: "monolith-footer__row",
			children: [
				l,
				u,
				d,
				p
			]
		})
	}), n[9] = l, n[10] = u, n[11] = d, n[12] = p, n[13] = m) : m = n[13], m;
}
function j(e) {
	return /* @__PURE__ */ r("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/monolith/Template.tsx
function M(t) {
	let n = e(32), { data: a } = t, o = a.theme?.mode === "dark" ? "dark" : "light", s = a.theme?.accentColor ?? "#b5482a", c = (a.experience?.length ?? 0) > 0, l = (a.projects?.length ?? 0) > 0, u = (a.skills?.length ?? 0) > 0, d = c && "experience", f = l && "projects", p = u && "skills", m;
	n[0] !== d || n[1] !== f || n[2] !== p ? (m = [
		d,
		f,
		p
	].filter(N), n[0] = d, n[1] = f, n[2] = p, n[3] = m) : m = n[3];
	let h = m, _;
	n[4] === s ? _ = n[5] : (_ = { "--monolith-accent": s }, n[4] = s, n[5] = _);
	let v = _, b;
	n[6] !== a.profile || n[7] !== a.socials ? (b = /* @__PURE__ */ r(g, {
		profile: a.profile,
		socials: a.socials
	}), n[6] = a.profile, n[7] = a.socials, n[8] = b) : b = n[8];
	let x;
	n[9] !== a.experience || n[10] !== c || n[11] !== h ? (x = c && a.experience && /* @__PURE__ */ r(y, {
		experience: a.experience,
		index: h.indexOf("experience") + 1
	}), n[9] = a.experience, n[10] = c, n[11] = h, n[12] = x) : x = n[12];
	let S;
	n[13] !== a.projects || n[14] !== l || n[15] !== h ? (S = l && a.projects && /* @__PURE__ */ r(C, {
		projects: a.projects,
		index: h.indexOf("projects") + 1
	}), n[13] = a.projects, n[14] = l, n[15] = h, n[16] = S) : S = n[16];
	let w;
	n[17] !== a.skills || n[18] !== u || n[19] !== h ? (w = u && a.skills && /* @__PURE__ */ r(E, {
		skills: a.skills,
		index: h.indexOf("skills") + 1
	}), n[17] = a.skills, n[18] = u, n[19] = h, n[20] = w) : w = n[20];
	let T;
	n[21] !== a.profile || n[22] !== a.socials ? (T = /* @__PURE__ */ r(A, {
		profile: a.profile,
		socials: a.socials
	}), n[21] = a.profile, n[22] = a.socials, n[23] = T) : T = n[23];
	let D;
	return n[24] !== o || n[25] !== w || n[26] !== T || n[27] !== v || n[28] !== b || n[29] !== x || n[30] !== S ? (D = /* @__PURE__ */ i("div", {
		className: "monolith",
		"data-theme": o,
		style: v,
		children: [
			b,
			x,
			S,
			w,
			T
		]
	}), n[24] = o, n[25] = w, n[26] = T, n[27] = v, n[28] = b, n[29] = x, n[30] = S, n[31] = D) : D = n[31], D;
}
function N(e) {
	return e !== !1;
}
//#endregion
export { M as default };
