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
//#region src/uploads.ts
function a(e) {
	return f(e, "word/document.xml") !== -1;
}
var o = {
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
		verify: a
	}]
};
function s(e, t) {
	let n = t.toLowerCase();
	return e.formats.find((e) => e.extensions.includes(n));
}
function c(e) {
	if (!e) return;
	let t = e.split(/[?#]/, 1)[0] ?? "";
	return /\.([a-z0-9]+)$/i.exec(t)?.[1]?.toLowerCase();
}
function l(e) {
	let t = c(e.resumeFilename) ?? c(e.resumeUrl);
	if (t) return s(o, t)?.label;
}
function u(e) {
	if (!e.resumeUrl) return;
	if (e.resumeFilename) return e.resumeFilename;
	let t = c(e.resumeUrl);
	if (!t || !s(o, t)) return;
	let n = e.fullName.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
	return n ? `${n}-resume.${t}` : `resume.${t}`;
}
function d(e) {
	return e.resumeUrl ? {
		href: e.resumeUrl,
		download: u(e),
		format: l(e)
	} : null;
}
function f(e, t) {
	let n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	outer: for (let t = 0; t <= e.length - n.length; t++) {
		for (let r = 0; r < n.length; r++) if (e[t + r] !== n[r]) continue outer;
		return t;
	}
	return -1;
}
//#endregion
//#region src/templates/aurora/sections/Hero.tsx
var p = {
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
function m(a) {
	let o = e(29), { profile: s, socials: c } = a, l;
	o[0] === s ? l = o[1] : (l = d(s), o[0] = s, o[1] = l);
	let u = l, f;
	o[2] === Symbol.for("react.memo_cache_sentinel") ? (f = /* @__PURE__ */ n("div", {
		className: "aurora-hero__glow",
		"aria-hidden": "true"
	}), o[2] = f) : f = o[2];
	let p, m, g;
	o[3] === Symbol.for("react.memo_cache_sentinel") ? (p = {
		opacity: 0,
		y: 24
	}, m = {
		opacity: 1,
		y: 0
	}, g = {
		duration: .6,
		ease: "easeOut"
	}, o[3] = p, o[4] = m, o[5] = g) : (p = o[3], m = o[4], g = o[5]);
	let _;
	o[6] !== s.avatarUrl || o[7] !== s.fullName ? (_ = s.avatarUrl && /* @__PURE__ */ n("img", {
		className: "aurora-hero__avatar",
		src: s.avatarUrl,
		alt: s.fullName
	}), o[6] = s.avatarUrl, o[7] = s.fullName, o[8] = _) : _ = o[8];
	let v = s.fullName || "Your Name", y;
	o[9] === v ? y = o[10] : (y = /* @__PURE__ */ n("h1", {
		className: "aurora-hero__name",
		children: v
	}), o[9] = v, o[10] = y);
	let b;
	o[11] === s.headline ? b = o[12] : (b = s.headline && /* @__PURE__ */ n("p", {
		className: "aurora-hero__headline",
		children: s.headline
	}), o[11] = s.headline, o[12] = b);
	let x;
	o[13] === s.bio ? x = o[14] : (x = /* @__PURE__ */ n(i, {
		html: s.bio,
		className: "aurora-hero__bio"
	}), o[13] = s.bio, o[14] = x);
	let S;
	o[15] === s.location ? S = o[16] : (S = s.location && /* @__PURE__ */ n("p", {
		className: "aurora-hero__location",
		children: s.location
	}), o[15] = s.location, o[16] = S);
	let C;
	o[17] === c ? C = o[18] : (C = c && c.length > 0 && /* @__PURE__ */ n("nav", {
		className: "aurora-hero__socials",
		"aria-label": "Social links",
		children: c.map(h)
	}), o[17] = c, o[18] = C);
	let w;
	o[19] === u ? w = o[20] : (w = u && /* @__PURE__ */ r("a", {
		className: "aurora-hero__resume",
		href: u.href,
		download: u.download,
		target: "_blank",
		rel: "noreferrer noopener",
		children: ["Download résumé", u.format && /* @__PURE__ */ n("span", {
			className: "aurora-hero__resume-format",
			children: u.format
		})]
	}), o[19] = u, o[20] = w);
	let T;
	return o[21] !== x || o[22] !== S || o[23] !== C || o[24] !== w || o[25] !== _ || o[26] !== y || o[27] !== b ? (T = /* @__PURE__ */ r("header", {
		className: "aurora-hero",
		children: [f, /* @__PURE__ */ r(t.div, {
			className: "aurora-hero__content",
			initial: p,
			animate: m,
			transition: g,
			children: [
				_,
				y,
				b,
				x,
				S,
				C,
				w
			]
		})]
	}), o[21] = x, o[22] = S, o[23] = C, o[24] = w, o[25] = _, o[26] = y, o[27] = b, o[28] = T) : T = o[28], T;
}
function h(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "aurora-hero__social",
		children: e.label ?? p[e.platform]
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/aurora/sections/Experience.tsx
function g(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function _(i) {
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
	a[1] === o ? c = a[2] : (c = o.map(v), a[1] = o, a[2] = c);
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
function v(e, a) {
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
						children: g(e.range)
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
					children: e.highlights.map(y)
				})
			]
		})]
	}, e.id);
}
function y(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
//#endregion
//#region src/templates/aurora/sections/Projects.tsx
function b(i) {
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
	a[1] === o ? c = a[2] : (c = o.map(x), a[1] = o, a[2] = c);
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
function x(e, a) {
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
					children: e.tags.map(S)
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
function S(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
//#endregion
//#region src/templates/aurora/sections/Skills.tsx
function C(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.category ?? "Skills", r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	return t;
}
function w(i) {
	let a = e(15), { skills: o } = i, s, c, l, u, d;
	if (a[0] !== o) {
		let e = C(o);
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
		}), a[6] = d) : d = a[6], s = "aurora-skills", c = Array.from(e.entries()).map(T), a[0] = o, a[1] = s, a[2] = c, a[3] = l, a[4] = u, a[5] = d;
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
function T(e) {
	let [t, i] = e;
	return /* @__PURE__ */ r("div", {
		className: "aurora-skills__group",
		children: [/* @__PURE__ */ n("h3", {
			className: "aurora-skills__category",
			children: t
		}), /* @__PURE__ */ n("ul", {
			className: "aurora-skills__list",
			children: i.map(E)
		})]
	}, t);
}
function E(e) {
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
function D(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function O(t) {
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
		href: D(a.phone),
		children: a.phone
	}), i[3] = a.phone, i[4] = u);
	let d;
	i[5] === o ? d = i[6] : (d = o && o.length > 0 && /* @__PURE__ */ n("nav", {
		className: "aurora-footer__socials",
		"aria-label": "Social links",
		children: o.map(k)
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
function k(e) {
	return /* @__PURE__ */ n("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/aurora/Template.tsx
function A(t) {
	let i = e(22), { data: a } = t, o = a.theme?.mode === "light" ? "light" : "dark", s = a.theme?.accentColor ?? "#7c3aed", c;
	i[0] === s ? c = i[1] : (c = { "--aurora-accent": s }, i[0] = s, i[1] = c);
	let l = c, u;
	i[2] !== a.profile || i[3] !== a.socials ? (u = /* @__PURE__ */ n(m, {
		profile: a.profile,
		socials: a.socials
	}), i[2] = a.profile, i[3] = a.socials, i[4] = u) : u = i[4];
	let d;
	i[5] === a.experience ? d = i[6] : (d = a.experience && a.experience.length > 0 && /* @__PURE__ */ n(_, { experience: a.experience }), i[5] = a.experience, i[6] = d);
	let f;
	i[7] === a.projects ? f = i[8] : (f = a.projects && a.projects.length > 0 && /* @__PURE__ */ n(b, { projects: a.projects }), i[7] = a.projects, i[8] = f);
	let p;
	i[9] === a.skills ? p = i[10] : (p = a.skills && a.skills.length > 0 && /* @__PURE__ */ n(w, { skills: a.skills }), i[9] = a.skills, i[10] = p);
	let h;
	i[11] !== a.profile || i[12] !== a.socials ? (h = /* @__PURE__ */ n(O, {
		profile: a.profile,
		socials: a.socials
	}), i[11] = a.profile, i[12] = a.socials, i[13] = h) : h = i[13];
	let g;
	return i[14] !== o || i[15] !== l || i[16] !== u || i[17] !== d || i[18] !== f || i[19] !== p || i[20] !== h ? (g = /* @__PURE__ */ r("div", {
		className: "aurora",
		"data-theme": o,
		style: l,
		children: [
			u,
			d,
			f,
			p,
			h
		]
	}), i[14] = o, i[15] = l, i[16] = u, i[17] = d, i[18] = f, i[19] = p, i[20] = h, i[21] = g) : g = i[21], g;
}
//#endregion
export { A as default };
