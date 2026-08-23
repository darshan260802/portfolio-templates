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
//#region src/templates/nocturne/sections/Hero.tsx
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
function u(i) {
	let o = e(21), { profile: s, socials: c } = i, l = r(null), u;
	o[0] === Symbol.for("react.memo_cache_sentinel") ? (u = { scope: l }, o[0] = u) : u = o[0], a(f, u);
	let p;
	o[1] === Symbol.for("react.memo_cache_sentinel") ? (p = /* @__PURE__ */ t("span", {
		className: "nocturne-hero__eyebrow nocturne-eyebrow",
		children: "Portfolio"
	}), o[1] = p) : p = o[1];
	let m = s.fullName || "Your Name", h;
	o[2] === m ? h = o[3] : (h = /* @__PURE__ */ t("h1", {
		className: "nocturne-hero__name",
		children: /* @__PURE__ */ t("span", {
			className: "nocturne-hero__name-inner",
			children: m
		})
	}), o[2] = m, o[3] = h);
	let g;
	o[4] === Symbol.for("react.memo_cache_sentinel") ? (g = /* @__PURE__ */ t("div", {
		className: "nocturne-hero__rule",
		"aria-hidden": "true"
	}), o[4] = g) : g = o[4];
	let _ = s.headline || null, v;
	o[5] === _ ? v = o[6] : (v = /* @__PURE__ */ t("p", {
		className: "nocturne-hero__headline nocturne-hero__fade-in",
		children: _
	}), o[5] = _, o[6] = v);
	let y = s.bio || null, b;
	o[7] === y ? b = o[8] : (b = /* @__PURE__ */ t("p", {
		className: "nocturne-hero__bio nocturne-hero__fade-in",
		children: y
	}), o[7] = y, o[8] = b);
	let x;
	o[9] === s.location ? x = o[10] : (x = s.location && /* @__PURE__ */ t("span", { children: s.location }), o[9] = s.location, o[10] = x);
	let S;
	o[11] === c ? S = o[12] : (S = c && c.length > 0 && /* @__PURE__ */ t("nav", {
		className: "nocturne-hero__socials",
		"aria-label": "Social links",
		children: c.map(d)
	}), o[11] = c, o[12] = S);
	let C;
	o[13] !== x || o[14] !== S ? (C = /* @__PURE__ */ n("div", {
		className: "nocturne-hero__meta nocturne-hero__fade-in",
		children: [x, S]
	}), o[13] = x, o[14] = S, o[15] = C) : C = o[15];
	let w;
	return o[16] !== C || o[17] !== h || o[18] !== v || o[19] !== b ? (w = /* @__PURE__ */ n("header", {
		ref: l,
		className: "nocturne-hero",
		children: [
			p,
			h,
			g,
			v,
			b,
			C
		]
	}), o[16] = C, o[17] = h, o[18] = v, o[19] = b, o[20] = w) : w = o[20], w;
}
function d(e) {
	return /* @__PURE__ */ t("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: e.label ?? l[e.platform]
	}, e.platform + e.url);
}
function f() {
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
//#region src/templates/nocturne/sections/Experience.tsx
function p(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function m(r) {
	let i = e(5), { experience: a } = r, o;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ t("span", {
		className: "nocturne-eyebrow",
		children: "Experience"
	}), i[0] = o) : o = i[0];
	let s;
	i[1] === a ? s = i[2] : (s = a.map(h), i[1] = a, i[2] = s);
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
function h(e, r) {
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
			children: p(e.range)
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
				e.summary && /* @__PURE__ */ t("p", {
					className: "nocturne-timeline__summary",
					children: e.summary
				}),
				e.highlights && e.highlights.length > 0 && /* @__PURE__ */ t("ul", {
					className: "nocturne-timeline__highlights",
					children: e.highlights.map(g)
				})
			]
		})]
	}, e.id);
}
function g(e) {
	return /* @__PURE__ */ t("li", { children: e }, e);
}
//#endregion
//#region src/templates/nocturne/sections/ProjectsGallery.tsx
i.registerPlugin(s);
function _(o) {
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
	s[4] === c ? m = s[5] : (m = c.map(v), s[4] = c, s[5] = m);
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
function v(e) {
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
			e.description && /* @__PURE__ */ t("p", {
				className: "nocturne-gallery__description",
				children: e.description
			}),
			e.tags && e.tags.length > 0 && /* @__PURE__ */ t("div", {
				className: "nocturne-gallery__tags",
				children: e.tags.map(y)
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
function y(e) {
	return /* @__PURE__ */ t("span", {
		className: "nocturne-chip",
		children: e
	}, e);
}
//#endregion
//#region src/templates/nocturne/sections/SkillsMarquee.tsx
function b(r) {
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
				children: [...a, ...a].map(x)
			})
		})]
	}), i[1] = a, i[2] = s), s;
}
function x(e, n) {
	return /* @__PURE__ */ t("span", {
		className: "nocturne-marquee__item",
		role: "listitem",
		children: e.name
	}, `${e.id}-${n}`);
}
//#endregion
//#region src/templates/nocturne/sections/Footer.tsx
function S(r) {
	let i = e(11), { profile: a, socials: o } = r, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a.email ? l = i[2] : (l = a.email && /* @__PURE__ */ t("a", {
		className: "nocturne-footer__cta",
		href: `mailto:${a.email}`,
		children: "Get in touch"
	}), i[1] = a.email, i[2] = l);
	let u;
	i[3] === o ? u = i[4] : (u = o && o.length > 0 && /* @__PURE__ */ t("nav", {
		className: "nocturne-footer__socials",
		"aria-label": "Social links",
		children: o.map(C)
	}), i[3] = o, i[4] = u);
	let d = a.fullName || "Your Name", f;
	i[5] === d ? f = i[6] : (f = /* @__PURE__ */ n("p", {
		className: "nocturne-footer__copy",
		children: [
			"© ",
			c,
			" ",
			d
		]
	}), i[5] = d, i[6] = f);
	let p;
	return i[7] !== l || i[8] !== u || i[9] !== f ? (p = /* @__PURE__ */ n("footer", {
		className: "nocturne-footer",
		children: [
			l,
			u,
			f
		]
	}), i[7] = l, i[8] = u, i[9] = f, i[10] = p) : p = i[10], p;
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
//#region src/templates/nocturne/Template.tsx
function w(r) {
	let i = e(23), { data: a } = r, o = a.theme?.mode === "light" ? "light" : "dark", s = a.theme?.accentColor ?? "#c9a24a", l;
	i[0] === s ? l = i[1] : (l = { "--nocturne-accent": s }, i[0] = s, i[1] = l);
	let d = l, f;
	i[2] === Symbol.for("react.memo_cache_sentinel") ? (f = /* @__PURE__ */ t(c, {}), i[2] = f) : f = i[2];
	let p;
	i[3] !== a.profile || i[4] !== a.socials ? (p = /* @__PURE__ */ t(u, {
		profile: a.profile,
		socials: a.socials
	}), i[3] = a.profile, i[4] = a.socials, i[5] = p) : p = i[5];
	let h;
	i[6] === a.experience ? h = i[7] : (h = a.experience && a.experience.length > 0 && /* @__PURE__ */ t(m, { experience: a.experience }), i[6] = a.experience, i[7] = h);
	let g;
	i[8] === a.projects ? g = i[9] : (g = a.projects && a.projects.length > 0 && /* @__PURE__ */ t(_, { projects: a.projects }), i[8] = a.projects, i[9] = g);
	let v;
	i[10] === a.skills ? v = i[11] : (v = a.skills && a.skills.length > 0 && /* @__PURE__ */ t(b, { skills: a.skills }), i[10] = a.skills, i[11] = v);
	let y;
	i[12] !== a.profile || i[13] !== a.socials ? (y = /* @__PURE__ */ t(S, {
		profile: a.profile,
		socials: a.socials
	}), i[12] = a.profile, i[13] = a.socials, i[14] = y) : y = i[14];
	let x;
	return i[15] !== o || i[16] !== d || i[17] !== p || i[18] !== h || i[19] !== g || i[20] !== v || i[21] !== y ? (x = /* @__PURE__ */ n("div", {
		className: "nocturne",
		"data-theme": o,
		style: d,
		children: [
			f,
			p,
			h,
			g,
			v,
			y
		]
	}), i[15] = o, i[16] = d, i[17] = p, i[18] = h, i[19] = g, i[20] = v, i[21] = y, i[22] = x) : x = i[22], x;
}
//#endregion
export { w as default };
