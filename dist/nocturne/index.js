import { c as e } from "react/compiler-runtime";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { useRef as r } from "react";
import { gsap as i } from "gsap";
import { useGSAP as a } from "@gsap/react";
import { motion as o } from "motion/react";
import { ScrollTrigger as s } from "gsap/ScrollTrigger";
import './index.css';//#region src/templates/nocturne/sections/Grain.tsx
function c() {
	let r = e(1), i;
	return r[0] === Symbol.for("react.memo_cache_sentinel") ? (i = /* @__PURE__ */ n("svg", {
		className: "nocturne-grain",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ n("filter", {
			id: "nocturne-grain-filter",
			children: [/* @__PURE__ */ t("feTurbulence", {
				type: "fractalNoise",
				baseFrequency: "0.85",
				numOctaves: "2",
				stitchTiles: "stitch"
			}), /* @__PURE__ */ t("feColorMatrix", {
				type: "saturate",
				values: "0"
			})]
		}), /* @__PURE__ */ t("rect", {
			width: "100%",
			height: "100%",
			filter: "url(#nocturne-grain-filter)"
		})]
	}), r[0] = i) : i = r[0], i;
}
//#endregion
//#region src/uploads.ts
function l(e) {
	return v(e, "word/document.xml") !== -1;
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
var m = {
	"–": "-",
	"—": "-",
	"‘": "'",
	"’": "'",
	"“": "\"",
	"”": "\"",
	"…": "...",
	"\xA0": " "
};
function h(e) {
	return e.replace(/[\u2013\u2014\u2018\u2019\u201c\u201d\u2026\u00a0]/g, (e) => m[e] ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7e]/g, "").replace(/\s+/g, " ").replace(/\s+(?=\.[^.]*$)/, "").trim();
}
function g(e) {
	if (!e.resumeUrl) return;
	if (e.resumeFilename) {
		let t = h(e.resumeFilename);
		if (/[^.]/.test(t.replace(/\.[^.]*$/, ""))) return t;
	}
	let t = f(e.resumeUrl);
	if (!t || !d(u, t)) return;
	let n = e.fullName.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
	return n ? `${n}-resume.${t}` : `resume.${t}`;
}
function _(e) {
	return e.resumeUrl ? {
		href: e.resumeUrl,
		download: g(e),
		format: p(e)
	} : null;
}
function v(e, t) {
	let n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	outer: for (let t = 0; t <= e.length - n.length; t++) {
		for (let r = 0; r < n.length; r++) if (e[t + r] !== n[r]) continue outer;
		return t;
	}
	return -1;
}
//#endregion
//#region src/templates/nocturne/sections/Hero.tsx
var y = {
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
function b(i) {
	let o = e(30), { profile: s, socials: c } = i, l = r(null), u;
	o[0] === s ? u = o[1] : (u = _(s), o[0] = s, o[1] = u);
	let d = u, f;
	o[2] === Symbol.for("react.memo_cache_sentinel") ? (f = { scope: l }, o[2] = f) : f = o[2], a(S, f);
	let p;
	o[3] !== s.avatarUrl || o[4] !== s.fullName ? (p = s.avatarUrl && /* @__PURE__ */ t("img", {
		className: "nocturne-hero__portrait",
		src: s.avatarUrl,
		alt: s.fullName
	}), o[3] = s.avatarUrl, o[4] = s.fullName, o[5] = p) : p = o[5];
	let m;
	o[6] === Symbol.for("react.memo_cache_sentinel") ? (m = /* @__PURE__ */ t("span", {
		className: "nocturne-hero__eyebrow nocturne-eyebrow",
		children: "Portfolio"
	}), o[6] = m) : m = o[6];
	let h = s.fullName || "Your Name", g;
	o[7] === h ? g = o[8] : (g = /* @__PURE__ */ t("h1", {
		className: "nocturne-hero__name",
		children: /* @__PURE__ */ t("span", {
			className: "nocturne-hero__name-inner",
			children: h
		})
	}), o[7] = h, o[8] = g);
	let v;
	o[9] === Symbol.for("react.memo_cache_sentinel") ? (v = /* @__PURE__ */ t("div", {
		className: "nocturne-hero__rule",
		"aria-hidden": "true"
	}), o[9] = v) : v = o[9];
	let y = s.headline || null, b;
	o[10] === y ? b = o[11] : (b = /* @__PURE__ */ t("p", {
		className: "nocturne-hero__headline nocturne-hero__fade-in",
		children: y
	}), o[10] = y, o[11] = b);
	let C = s.bio ?? "", w;
	o[12] === C ? w = o[13] : (w = /* @__PURE__ */ t("p", {
		className: "nocturne-hero__bio nocturne-hero__fade-in",
		dangerouslySetInnerHTML: { __html: C }
	}), o[12] = C, o[13] = w);
	let T;
	o[14] === s.location ? T = o[15] : (T = s.location && /* @__PURE__ */ t("span", { children: s.location }), o[14] = s.location, o[15] = T);
	let E;
	o[16] === c ? E = o[17] : (E = c && c.length > 0 && /* @__PURE__ */ t("nav", {
		className: "nocturne-hero__socials",
		"aria-label": "Social links",
		children: c.map(x)
	}), o[16] = c, o[17] = E);
	let D;
	o[18] === d ? D = o[19] : (D = d && /* @__PURE__ */ n("a", {
		className: "nocturne-hero__resume",
		href: d.href,
		download: d.download,
		target: "_blank",
		rel: "noreferrer noopener",
		children: [
			"Résumé",
			d.format ? ` — ${d.format}` : "",
			" ↓"
		]
	}), o[18] = d, o[19] = D);
	let O;
	o[20] !== T || o[21] !== E || o[22] !== D ? (O = /* @__PURE__ */ n("div", {
		className: "nocturne-hero__meta nocturne-hero__fade-in",
		children: [
			T,
			E,
			D
		]
	}), o[20] = T, o[21] = E, o[22] = D, o[23] = O) : O = o[23];
	let k;
	return o[24] !== w || o[25] !== O || o[26] !== p || o[27] !== g || o[28] !== b ? (k = /* @__PURE__ */ n("header", {
		ref: l,
		className: "nocturne-hero",
		children: [
			p,
			m,
			g,
			v,
			b,
			w,
			O
		]
	}), o[24] = w, o[25] = O, o[26] = p, o[27] = g, o[28] = b, o[29] = k) : k = o[29], k;
}
function x(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? y[e.platform]
	}, e.platform + e.url);
}
function S() {
	let e = window.matchMedia("(prefers-reduced-motion: reduce)").matches, t = i.timeline({ defaults: { ease: "power4.out" } });
	if (e) {
		t.set([".nocturne-hero__eyebrow", ".nocturne-hero__fade-in"], {
			opacity: 1,
			y: 0
		}).set(".nocturne-hero__name-inner", { clipPath: "inset(0 0 0% 0)" }).set(".nocturne-hero__rule", { scaleX: 1 });
		return;
	}
	t.to(".nocturne-hero__eyebrow", {
		opacity: 1,
		duration: .5
	}, .1).to(".nocturne-hero__name-inner", {
		clipPath: "inset(0 0 0% 0)",
		duration: 1.1
	}, .25).to(".nocturne-hero__fade-in", {
		opacity: 1,
		y: 0,
		duration: .7,
		stagger: .08
	}, .7).to(".nocturne-hero__rule", {
		scaleX: 1,
		duration: .9
	}, .9);
}
//#endregion
//#region src/rich-text.tsx
function C(n) {
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
//#region src/templates/nocturne/sections/Experience.tsx
function w(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function T(r) {
	let i = e(5), { experience: a } = r, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ t("span", {
		className: "nocturne-eyebrow",
		children: "Experience"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(E), i[1] = a, i[2] = s);
	let c;
	return i[3] === s ? c = i[4] : (c = /* @__PURE__ */ n("section", {
		className: "nocturne-section",
		id: "experience",
		children: [o, /* @__PURE__ */ t("ol", {
			className: "nocturne-timeline",
			children: s
		})]
	}), i[3] = s, i[4] = c), c;
}
function E(e, r) {
	return /* @__PURE__ */ n(o.li, {
		className: "nocturne-timeline__item",
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: !0,
			amount: .4
		},
		transition: {
			duration: .6,
			delay: r * .06,
			ease: "easeOut"
		},
		children: [/* @__PURE__ */ t("span", {
			className: "nocturne-timeline__range",
			children: w(e.range)
		}), /* @__PURE__ */ n("div", {
			className: "nocturne-timeline__body",
			children: [
				/* @__PURE__ */ t("h3", {
					className: "nocturne-timeline__role",
					children: e.role
				}),
				/* @__PURE__ */ t("p", {
					className: "nocturne-timeline__company",
					children: e.companyUrl ? /* @__PURE__ */ t("a", {
						href: e.companyUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: e.company
					}) : e.company
				}),
				/* @__PURE__ */ t(C, {
					html: e.summary,
					className: "nocturne-timeline__summary"
				}),
				e.highlights && e.highlights.length > 0 && /* @__PURE__ */ t("ul", {
					className: "nocturne-timeline__highlights",
					children: e.highlights.map(D)
				})
			]
		})]
	}, e.id);
}
function D(e) {
	return /* @__PURE__ */ t("li", { children: e }, e);
}
//#endregion
//#region src/templates/nocturne/sections/ProjectsGallery.tsx
i.registerPlugin(s);
function O(o) {
	let s = e(8), { projects: c } = o, l = r(null), u = r(null), d;
	s[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
		let e = l.current, t = u.current;
		if (!e || !t || window.matchMedia("(prefers-reduced-motion: reduce)").matches || t.scrollWidth - e.clientWidth <= 0) return;
		let n = i.to(t, {
			x: () => -(t.scrollWidth - e.clientWidth),
			ease: "none",
			scrollTrigger: {
				trigger: e,
				start: "top top",
				end: () => `+=${t.scrollWidth - e.clientWidth}`,
				scrub: 1,
				pin: !0,
				invalidateOnRefresh: !0
			}
		});
		return () => {
			n.scrollTrigger?.kill(), n.kill();
		};
	}, s[0] = d) : d = s[0];
	let f;
	s[1] === c.length ? f = s[2] : (f = {
		scope: l,
		dependencies: [c.length]
	}, s[1] = c.length, s[2] = f), a(d, f);
	let p;
	s[3] === Symbol.for("react.memo_cache_sentinel") ? (p = /* @__PURE__ */ t("div", {
		className: "nocturne-gallery__heading",
		children: /* @__PURE__ */ t("span", {
			className: "nocturne-eyebrow",
			children: "Selected work"
		})
	}), s[3] = p) : p = s[3];
	let m;
	s[4] === c ? m = s[5] : (m = c.map(k), s[4] = c, s[5] = m);
	let h;
	return s[6] === m ? h = s[7] : (h = /* @__PURE__ */ n("section", {
		ref: l,
		className: "nocturne-gallery",
		id: "projects",
		children: [p, /* @__PURE__ */ t("div", {
			ref: u,
			className: "nocturne-gallery__track",
			children: m
		})]
	}), s[6] = m, s[7] = h), h;
}
function k(e) {
	return /* @__PURE__ */ n("article", {
		className: "nocturne-gallery__card",
		children: [
			e.imageUrl ? /* @__PURE__ */ t("div", {
				className: "nocturne-gallery__media",
				children: /* @__PURE__ */ t("img", {
					src: e.imageUrl,
					alt: e.title,
					loading: "lazy"
				})
			}) : /* @__PURE__ */ t("div", {
				className: "nocturne-gallery__media nocturne-gallery__media--empty",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("h3", {
				className: "nocturne-gallery__title",
				children: e.title
			}),
			/* @__PURE__ */ t(C, {
				html: e.description,
				className: "nocturne-gallery__description"
			}),
			e.tags && e.tags.length > 0 && /* @__PURE__ */ t("div", {
				className: "nocturne-gallery__tags",
				children: e.tags.map(A)
			}),
			/* @__PURE__ */ n("div", {
				className: "nocturne-gallery__links",
				children: [e.liveUrl && /* @__PURE__ */ t("a", {
					href: e.liveUrl,
					target: "_blank",
					rel: "noreferrer noopener",
					children: "View live ↗"
				}), e.repoUrl && /* @__PURE__ */ t("a", {
					href: e.repoUrl,
					target: "_blank",
					rel: "noreferrer noopener",
					children: "Source ↗"
				})]
			})
		]
	}, e.id);
}
function A(e) {
	return /* @__PURE__ */ t("span", {
		className: "nocturne-chip",
		children: e
	}, e);
}
//#endregion
//#region src/templates/nocturne/sections/SkillsMarquee.tsx
function j(r) {
	let i = e(3), { skills: a } = r, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ t("span", {
		className: "nocturne-eyebrow nocturne-marquee-eyebrow",
		children: "Skills"
	}), i[0] = o) : o = i[0];
	let s;
	return i[1] === a ? s = i[2] : (s = /* @__PURE__ */ n("section", {
		className: "nocturne-section nocturne-section--flush",
		id: "skills",
		children: [o, /* @__PURE__ */ t("div", {
			className: "nocturne-marquee",
			role: "list",
			"aria-label": "Skills",
			children: /* @__PURE__ */ t("div", {
				className: "nocturne-marquee__track",
				children: [...a, ...a].map(M)
			})
		})]
	}), i[1] = a, i[2] = s), s;
}
function M(e, n) {
	return /* @__PURE__ */ t("span", {
		className: "nocturne-marquee__item",
		role: "listitem",
		children: e.name
	}, `${e.id}-${n}`);
}
//#endregion
//#region src/templates/nocturne/sections/Footer.tsx
function N(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
function P(r) {
	let i = e(14), { profile: a, socials: o } = r, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ t("a", {
		className: "nocturne-footer__cta",
		href: `mailto:${a.email}`,
		children: "Get in touch"
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === a.phone ? u = i[4] : (u = a.phone && /* @__PURE__ */ t("a", {
		className: "nocturne-footer__phone",
		href: N(a.phone),
		children: a.phone
	}), i[3] = a.phone, i[4] = u);
	let d;
	i[5] === o ? d = i[6] : (d = o && o.length > 0 && /* @__PURE__ */ t("nav", {
		className: "nocturne-footer__socials",
		"aria-label": "Social links",
		children: o.map(F)
	}), i[5] = o, i[6] = d);
	let f = a.fullName || "Your Name", p;
	i[7] === f ? p = i[8] : (p = /* @__PURE__ */ n("p", {
		className: "nocturne-footer__copy",
		children: [
			"© ",
			c,
			" ",
			f
		]
	}), i[7] = f, i[8] = p);
	let m;
	return i[9] !== l || i[10] !== u || i[11] !== d || i[12] !== p ? (m = /* @__PURE__ */ n("footer", {
		className: "nocturne-footer",
		children: [
			l,
			u,
			d,
			p
		]
	}), i[9] = l, i[10] = u, i[11] = d, i[12] = p, i[13] = m) : m = i[13], m;
}
function F(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? e.platform
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/nocturne/Template.tsx
function I(r) {
	let i = e(23), { data: a } = r, o = a.theme?.mode === "light" ? "light" : "dark", s = a.theme?.accentColor ?? "#c9a24a", l;
	i[0] === s ? l = i[1] : (l = { "--nocturne-accent": s }, i[0] = s, i[1] = l);
	let u = l, d;
	i[2] === Symbol.for("react.memo_cache_sentinel") ? (d = /* @__PURE__ */ t(c, {}), i[2] = d) : d = i[2];
	let f;
	i[3] !== a.profile || i[4] !== a.socials ? (f = /* @__PURE__ */ t(b, {
		profile: a.profile,
		socials: a.socials
	}), i[3] = a.profile, i[4] = a.socials, i[5] = f) : f = i[5];
	let p;
	i[6] === a.experience ? p = i[7] : (p = a.experience && a.experience.length > 0 && /* @__PURE__ */ t(T, { experience: a.experience }), i[6] = a.experience, i[7] = p);
	let m;
	i[8] === a.projects ? m = i[9] : (m = a.projects && a.projects.length > 0 && /* @__PURE__ */ t(O, { projects: a.projects }), i[8] = a.projects, i[9] = m);
	let h;
	i[10] === a.skills ? h = i[11] : (h = a.skills && a.skills.length > 0 && /* @__PURE__ */ t(j, { skills: a.skills }), i[10] = a.skills, i[11] = h);
	let g;
	i[12] !== a.profile || i[13] !== a.socials ? (g = /* @__PURE__ */ t(P, {
		profile: a.profile,
		socials: a.socials
	}), i[12] = a.profile, i[13] = a.socials, i[14] = g) : g = i[14];
	let _;
	return i[15] !== o || i[16] !== u || i[17] !== f || i[18] !== p || i[19] !== m || i[20] !== h || i[21] !== g ? (_ = /* @__PURE__ */ n("div", {
		className: "nocturne",
		"data-theme": o,
		style: u,
		children: [
			d,
			f,
			p,
			m,
			h,
			g
		]
	}), i[15] = o, i[16] = u, i[17] = f, i[18] = p, i[19] = m, i[20] = h, i[21] = g, i[22] = _) : _ = i[22], _;
}
//#endregion
export { I as default };
