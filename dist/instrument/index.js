import "./index.css";
import { c as e } from "react/compiler-runtime";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
import { Fragment as i, useEffect as a, useLayoutEffect as o, useRef as s, useState as c } from "react";
import { gsap as l } from "gsap";
import { ScrollTrigger as u } from "gsap/ScrollTrigger";
import { useGSAP as d } from "@gsap/react";
import { motion as f, useAnimationFrame as p, useMotionValue as m, useScroll as h, useSpring as g, useTransform as _, useVelocity as v } from "motion/react";
//#region src/rich-text.tsx
function y(t) {
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
//#region src/portfolio-extras.tsx
function b(t) {
	let r = e(4), { links: i } = t;
	if (!i?.length) return null;
	let a;
	r[0] === i ? a = r[1] : (a = i.map(x), r[0] = i, r[1] = a);
	let o;
	return r[2] === a ? o = r[3] : (o = /* @__PURE__ */ n("div", {
		className: "pb-extra-links",
		children: a
	}), r[2] = a, r[3] = o), o;
}
function x(e) {
	return /^https?:\/\//i.test(e.url) && /* @__PURE__ */ r("a", {
		href: e.url,
		target: "_blank",
		rel: "noopener noreferrer",
		children: [e.label || "Visit link", " ↗"]
	}, e.id);
}
function S(e) {
	return `custom-${Array.from(e).map((e) => e.codePointAt(0).toString(16)).join("-")}`;
}
function C(e) {
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
			id: S(e.id),
			label: e.title
		}))
	];
}
function w(t) {
	let i = e(10), { data: a } = t, o;
	i[0] === a.education ? o = i[1] : (o = !!a.education?.length && /* @__PURE__ */ r("section", {
		id: "education",
		className: "pb-extra-section",
		"aria-labelledby": "education-heading",
		children: [/* @__PURE__ */ n("h2", {
			id: "education-heading",
			children: "Education"
		}), /* @__PURE__ */ n("div", {
			className: "pb-extra-grid",
			children: a.education.map(O)
		})]
	}), i[0] = a.education, i[1] = o);
	let s;
	i[2] === a.achievements ? s = i[3] : (s = !!a.achievements?.length && /* @__PURE__ */ r("section", {
		id: "achievements",
		className: "pb-extra-section",
		"aria-labelledby": "achievements-heading",
		children: [/* @__PURE__ */ n("h2", {
			id: "achievements-heading",
			children: "Achievements"
		}), /* @__PURE__ */ n("div", {
			className: "pb-extra-grid",
			children: a.achievements.map(D)
		})]
	}), i[2] = a.achievements, i[3] = s);
	let c;
	i[4] === a.customSections ? c = i[5] : (c = (a.customSections ?? []).filter(E).map(T), i[4] = a.customSections, i[5] = c);
	let l;
	return i[6] !== o || i[7] !== s || i[8] !== c ? (l = /* @__PURE__ */ r("div", {
		className: "pb-extras",
		children: [
			o,
			s,
			c
		]
	}), i[6] = o, i[7] = s, i[8] = c, i[9] = l) : l = i[9], l;
}
function T(e) {
	return /* @__PURE__ */ r("section", {
		id: S(e.id),
		className: "pb-extra-section",
		"aria-label": e.title,
		children: [/* @__PURE__ */ n("h2", { children: e.title }), /* @__PURE__ */ r("div", {
			className: "pb-extra-card",
			children: [/* @__PURE__ */ n(y, { html: e.content }), /* @__PURE__ */ n(b, { links: e.links })]
		})]
	}, e.id);
}
function E(e) {
	return e.visible !== !1 && e.title.trim();
}
function D(e) {
	return /* @__PURE__ */ r("article", {
		className: "pb-extra-card",
		children: [
			/* @__PURE__ */ n("h3", { children: e.title }),
			/* @__PURE__ */ n("p", {
				className: "pb-extra-meta",
				children: [e.issuer, e.date].filter(Boolean).join(" · ")
			}),
			/* @__PURE__ */ n(y, { html: e.description }),
			/* @__PURE__ */ n(b, { links: e.links })
		]
	}, e.id);
}
function O(e) {
	return /* @__PURE__ */ r("article", {
		className: "pb-extra-card",
		children: [
			/* @__PURE__ */ n("h3", { children: e.institution }),
			(e.degree || e.fieldOfStudy) && /* @__PURE__ */ n("p", { children: [e.degree, e.fieldOfStudy].filter(Boolean).join(" · ") }),
			e.range && /* @__PURE__ */ r("p", {
				className: "pb-extra-meta",
				children: [e.range.start, (e.range.current || e.range.end) && ` — ${e.range.current ? "Present" : e.range.end}`]
			}),
			/* @__PURE__ */ n(y, { html: e.summary })
		]
	}, e.id);
}
//#endregion
//#region src/portfolio-theme.tsx
var k = "pb-visitor-theme-v1";
function A() {
	return typeof window < "u" && window.self !== window.top;
}
function j() {
	if (typeof window > "u" || A()) return null;
	try {
		let e = localStorage.getItem(k);
		return e === "light" || e === "dark" ? e : null;
	} catch {
		return null;
	}
}
function M() {
	return typeof window < "u" && window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ee(t, n) {
	let r = e(10), [i, o] = c(j), [s, l] = c(M), u = t?.mode, d, f;
	r[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => l(e.matches ? "dark" : "light");
		return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, f = [], r[0] = d, r[1] = f) : (d = r[0], f = r[1]), a(d, f);
	let p;
	r[2] === Symbol.for("react.memo_cache_sentinel") ? (p = () => {
		A() && o(null);
	}, r[2] = p) : p = r[2];
	let m;
	r[3] === u ? m = r[4] : (m = [u], r[3] = u, r[4] = m), a(p, m);
	let h = i ?? (u === "system" ? s : u ?? n), g;
	r[5] === h ? g = r[6] : (g = () => {
		let e = h === "dark" ? "light" : "dark";
		if (o(e), !A()) try {
			localStorage.setItem(k, e);
		} catch {}
	}, r[5] = h, r[6] = g);
	let _ = g, v;
	return r[7] !== h || r[8] !== _ ? (v = {
		mode: h,
		toggle: _
	}, r[7] = h, r[8] = _, r[9] = v) : v = r[9], v;
}
function N(t) {
	let r = e(5), { mode: i, toggle: a } = t, o = `Switch to ${i === "dark" ? "light" : "dark"} mode`, s = i === "dark", c = i === "dark" ? "☀ Light" : "☾ Dark", l;
	return r[0] !== o || r[1] !== s || r[2] !== c || r[3] !== a ? (l = /* @__PURE__ */ n("button", {
		type: "button",
		className: "pb-theme-toggle",
		onClick: a,
		"aria-label": o,
		"aria-pressed": s,
		children: c
	}), r[0] = o, r[1] = s, r[2] = c, r[3] = a, r[4] = l) : l = r[4], l;
}
//#endregion
//#region src/templates/instrument/sections/TopBar.tsx
function te(i) {
	let o = e(25), { name: l, entries: u } = i, d = s(null), [f, p] = c(!1), m, h;
	o[0] === Symbol.for("react.memo_cache_sentinel") ? (m = () => {
		let e = function() {
			let e = document.documentElement, t = e.scrollHeight - e.clientHeight, n = t > 0 ? Math.min(1, Math.max(0, e.scrollTop / t)) : 0;
			d.current && (d.current.style.width = `${n * 100}%`);
		};
		return e(), window.addEventListener("scroll", e, { passive: !0 }), window.addEventListener("resize", e), () => {
			window.removeEventListener("scroll", e), window.removeEventListener("resize", e);
		};
	}, h = [], o[0] = m, o[1] = h) : (m = o[0], h = o[1]), a(m, h);
	let g, _;
	o[2] === f ? (g = o[3], _ = o[4]) : (g = () => {
		if (!f) return;
		let e = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = e;
		};
	}, _ = [f], o[2] = f, o[3] = g, o[4] = _), a(g, _);
	let v = l || "Portfolio", y;
	o[5] === v ? y = o[6] : (y = /* @__PURE__ */ n("a", {
		href: "#top",
		className: "ins-bar__mark",
		children: v
	}), o[5] = v, o[6] = y);
	let b;
	o[7] === u ? b = o[8] : (b = u.map(F), o[7] = u, o[8] = b);
	let x;
	o[9] === b ? x = o[10] : (x = /* @__PURE__ */ n("nav", {
		className: "ins-bar__nav",
		"aria-label": "Sections",
		children: b
	}), o[9] = b, o[10] = x);
	let S;
	o[11] !== u.length || o[12] !== f ? (S = u.length > 0 && /* @__PURE__ */ r("button", {
		type: "button",
		className: "ins-bar__toggle",
		"aria-expanded": f,
		"aria-label": f ? "Close menu" : "Open menu",
		onClick: () => p(P),
		children: [
			/* @__PURE__ */ n("span", {}),
			/* @__PURE__ */ n("span", {}),
			/* @__PURE__ */ n("span", {})
		]
	}), o[11] = u.length, o[12] = f, o[13] = S) : S = o[13];
	let C;
	o[14] === Symbol.for("react.memo_cache_sentinel") ? (C = /* @__PURE__ */ n("div", {
		className: "ins-bar__progress",
		children: /* @__PURE__ */ n("span", { ref: d })
	}), o[14] = C) : C = o[14];
	let w;
	o[15] !== y || o[16] !== x || o[17] !== S ? (w = /* @__PURE__ */ r("header", {
		className: "ins-bar",
		children: [
			y,
			x,
			S,
			C
		]
	}), o[15] = y, o[16] = x, o[17] = S, o[18] = w) : w = o[18];
	let T;
	o[19] !== u || o[20] !== f ? (T = f && /* @__PURE__ */ n("nav", {
		className: "ins-menu",
		"aria-label": "Sections",
		children: u.map((e, t) => /* @__PURE__ */ r("a", {
			href: `#${e.id}`,
			className: "ins-menu__item",
			style: { animation: `ins-menu-in 0.4s ${t * .05}s ease-out both` },
			onClick: () => p(!1),
			children: [/* @__PURE__ */ n("span", {
				className: "ins-menu__index",
				children: String(t + 1).padStart(2, "0")
			}), e.label]
		}, e.id))
	}), o[19] = u, o[20] = f, o[21] = T) : T = o[21];
	let E;
	return o[22] !== w || o[23] !== T ? (E = /* @__PURE__ */ r(t, { children: [w, T] }), o[22] = w, o[23] = T, o[24] = E) : E = o[24], E;
}
function P(e) {
	return !e;
}
function F(e) {
	return /* @__PURE__ */ n("a", {
		href: `#${e.id}`,
		children: e.label
	}, e.id);
}
//#endregion
//#region src/templates/instrument/sections/Hero.tsx
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
function ne(i) {
	let a = e(39), { profile: o, socials: c } = i, l = s(null), u = (o.fullName || "Your Name").toUpperCase().split(/\s+/).filter(Boolean), f;
	if (a[0] !== o.email || a[1] !== o.location || a[2] !== o.phone || a[3] !== c) {
		if (f = [], o.location) {
			let e;
			a[5] === o.location ? e = a[6] : (e = {
				label: "Based",
				value: o.location
			}, a[5] = o.location, a[6] = e), f.push(e);
		}
		if (o.email) {
			let e;
			a[7] === o.email ? e = a[8] : (e = {
				label: "Mail",
				value: o.email
			}, a[7] = o.email, a[8] = e), f.push(e);
		}
		if (o.phone) {
			let e;
			a[9] === o.phone ? e = a[10] : (e = {
				label: "Tel",
				value: o.phone
			}, a[9] = o.phone, a[10] = e), f.push(e);
		}
		for (let e of c ?? []) f.push({
			label: e.label ?? I[e.platform],
			value: z(e.url)
		});
		a[0] = o.email, a[1] = o.location, a[2] = o.phone, a[3] = c, a[4] = f;
	} else f = a[4];
	let p;
	a[11] !== o.fullName || a[12] !== f.length ? (p = {
		scope: l,
		dependencies: [o.fullName, f.length],
		revertOnUpdate: !0
	}, a[11] = o.fullName, a[12] = f.length, a[13] = p) : p = a[13], d(R, p);
	let m, h, g;
	a[14] === Symbol.for("react.memo_cache_sentinel") ? (m = /* @__PURE__ */ n("div", {
		className: "ins-hero__field",
		"aria-hidden": !0
	}), h = /* @__PURE__ */ n("div", {
		className: "ins-hero__sweep",
		"aria-hidden": !0
	}), g = /* @__PURE__ */ n("div", {
		className: "ins-hero__fade",
		"aria-hidden": !0
	}), a[14] = m, a[15] = h, a[16] = g) : (m = a[14], h = a[15], g = a[16]);
	let _;
	a[17] !== o.avatarUrl || a[18] !== o.fullName ? (_ = o.avatarUrl && /* @__PURE__ */ n("img", {
		className: "ins-hero__portrait",
		src: o.avatarUrl,
		alt: o.fullName
	}), a[17] = o.avatarUrl, a[18] = o.fullName, a[19] = _) : _ = a[19];
	let v = u.map(re), y;
	a[20] === v ? y = a[21] : (y = /* @__PURE__ */ n("h1", {
		className: "ins-hero__name",
		children: v
	}), a[20] = v, a[21] = y);
	let b;
	a[22] !== o.headline || a[23] !== o.location ? (b = o.headline ? /* @__PURE__ */ r(t, { children: [o.headline, o.location && /* @__PURE__ */ r(t, { children: [
		" ",
		/* @__PURE__ */ n("span", {
			className: "ins-hero__sep",
			children: "·"
		}),
		" ",
		o.location
	] })] }) : null, a[22] = o.headline, a[23] = o.location, a[24] = b) : b = a[24];
	let x;
	a[25] === b ? x = a[26] : (x = /* @__PURE__ */ n("p", {
		className: "ins-hero__role ins-hero__reveal",
		children: b
	}), a[25] = b, a[26] = x);
	let S;
	a[27] === f ? S = a[28] : (S = /* @__PURE__ */ n("dl", {
		className: "ins-hero__readout ins-hero__reveal",
		children: f.map(L)
	}), a[27] = f, a[28] = S);
	let C;
	a[29] !== y || a[30] !== x || a[31] !== S || a[32] !== _ ? (C = /* @__PURE__ */ r("div", {
		className: "ins-hero__body",
		children: [
			_,
			y,
			x,
			S
		]
	}), a[29] = y, a[30] = x, a[31] = S, a[32] = _, a[33] = C) : C = a[33];
	let w;
	return a[34] !== C || a[35] !== m || a[36] !== h || a[37] !== g ? (w = /* @__PURE__ */ r("section", {
		ref: l,
		id: "top",
		className: "ins-hero",
		children: [
			m,
			h,
			g,
			C
		]
	}), a[34] = C, a[35] = m, a[36] = h, a[37] = g, a[38] = w) : w = a[38], w;
}
function L(e) {
	return /* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("dt", { children: e.label }), /* @__PURE__ */ n("dd", { children: e.value })] }, e.label + e.value);
}
function re(e, t) {
	return /* @__PURE__ */ n("span", {
		className: "ins-hero__word",
		children: [...e].map(ie)
	}, `${e}-${t}`);
}
function ie(e, t) {
	return /* @__PURE__ */ n("span", {
		className: "ins-hero__char",
		children: e
	}, `${e}-${t}`);
}
function R() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		l.set([".ins-hero__char", ".ins-hero__reveal"], {
			opacity: 1,
			y: 0
		});
		return;
	}
	l.timeline({ defaults: { ease: "power3.out" } }).to(".ins-hero__char", {
		opacity: 1,
		y: 0,
		duration: .9,
		stagger: .03
	}, 0).to(".ins-hero__reveal", {
		opacity: 1,
		y: 0,
		duration: .6,
		stagger: .1
	}, .5);
}
function z(e) {
	try {
		return new URL(e).host.replace(/^www\./, "");
	} catch {
		return e;
	}
}
//#endregion
//#region src/templates/instrument/sections/Marquee.tsx
var B = 4;
function V(t) {
	let i = e(17), { terms: a } = t, o = s(null), c = m(0), { scrollY: l } = h(), u = v(l), d;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (d = {
		damping: 50,
		stiffness: 400
	}, i[0] = d) : d = i[0];
	let y = g(u, d), b, x, S;
	i[1] === Symbol.for("react.memo_cache_sentinel") ? (b = [0, 1e3], x = [0, 5], S = { clamp: !1 }, i[1] = b, i[2] = x, i[3] = S) : (b = i[1], x = i[2], S = i[3]);
	let C = _(y, b, x, S), w;
	i[4] === Symbol.for("react.memo_cache_sentinel") ? (w = (e) => {
		let t = o.current?.offsetWidth ?? 0;
		return t === 0 ? "0px" : `${((e + t) % t + t) % t - t}px`;
	}, i[4] = w) : w = i[4];
	let T = _(c, w), E = s(1), D;
	i[5] !== c || i[6] !== C ? (D = (e, t) => {
		let n = C.get();
		n < 0 ? E.current = -1 : n > 0 && (E.current = 1);
		let r = E.current * 40 * (t / 1e3);
		r += E.current * r * n, c.set(c.get() + r);
	}, i[5] = c, i[6] = C, i[7] = D) : D = i[7], p(D);
	let O;
	i[8] === a ? O = i[9] : (O = a.map(H).join(" "), i[8] = a, i[9] = O);
	let k = O, A;
	i[10] === T ? A = i[11] : (A = { x: T }, i[10] = T, i[11] = A);
	let j;
	i[12] === k ? j = i[13] : (j = Array.from({ length: B }, (e, t) => /* @__PURE__ */ r("span", {
		className: "ins-marquee__copy",
		ref: t === 0 ? o : void 0,
		"aria-hidden": t > 0,
		children: [k, "\xA0"]
	}, t)), i[12] = k, i[13] = j);
	let M;
	return i[14] !== A || i[15] !== j ? (M = /* @__PURE__ */ n("section", {
		className: "ins-marquee",
		"aria-label": "Stack",
		children: /* @__PURE__ */ n(f.div, {
			className: "ins-marquee__track",
			style: A,
			children: j
		})
	}), i[14] = A, i[15] = j, i[16] = M) : M = i[16], M;
}
function H(e) {
	return `${e} —`;
}
//#endregion
//#region src/templates/instrument/sections/SectionHead.tsx
function U(t) {
	let i = e(8), { id: a, label: o, readout: s } = t, c;
	i[0] === o ? c = i[1] : (c = /* @__PURE__ */ n("span", {
		className: "ins-head__label",
		children: o
	}), i[0] = o, i[1] = c);
	let l;
	i[2] === s ? l = i[3] : (l = /* @__PURE__ */ n("span", {
		className: "ins-head__readout",
		children: s
	}), i[2] = s, i[3] = l);
	let u;
	return i[4] !== a || i[5] !== c || i[6] !== l ? (u = /* @__PURE__ */ r("div", {
		id: a,
		className: "ins-head",
		children: [c, l]
	}), i[4] = a, i[5] = c, i[6] = l, i[7] = u) : u = i[7], u;
}
//#endregion
//#region src/templates/instrument/sections/Summary.tsx
function W(e) {
	let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT), n = [], r = t.nextNode();
	for (; r;) r.textContent && r.textContent.trim() !== "" && n.push(r), r = t.nextNode();
	let i = [];
	for (let e of n) {
		let t = document.createDocumentFragment();
		for (let n of e.textContent.split(/(\s+)/)) {
			if (n === "") continue;
			if (/^\s+$/.test(n)) {
				t.appendChild(document.createTextNode(n));
				continue;
			}
			let e = document.createElement("span");
			e.className = "ins-word", e.textContent = n, t.appendChild(e), i.push(e);
		}
		e.replaceWith(t);
	}
	return i;
}
function G(t) {
	let i = e(17), { profile: a, education: c } = t, u = s(null), f = s(null), p;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (p = [], i[0] = p) : p = i[0];
	let m = s(p), h, g;
	i[1] === a.bio ? (h = i[2], g = i[3]) : (h = () => {
		let e = f.current;
		e && (e.innerHTML = a.bio ?? "", m.current = W(e));
	}, g = [a.bio], i[1] = a.bio, i[2] = h, i[3] = g), o(h, g);
	let _;
	i[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = () => {
		let e = m.current;
		if (e.length === 0) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			l.set(e, {
				opacity: 1,
				filter: "blur(0px)"
			});
			return;
		}
		let t = l.fromTo(e, {
			opacity: .08,
			filter: "blur(3px)"
		}, {
			opacity: 1,
			filter: "blur(0px)",
			ease: "none",
			stagger: .4,
			scrollTrigger: {
				trigger: f.current,
				start: "top 85%",
				end: "bottom 55%",
				scrub: .6
			}
		});
		return () => {
			t.scrollTrigger?.kill(), t.kill();
		};
	}, i[4] = _) : _ = i[4];
	let v;
	i[5] === a.bio ? v = i[6] : (v = {
		scope: u,
		dependencies: [a.bio]
	}, i[5] = a.bio, i[6] = v), d(_, v);
	let y = c?.[0], b = a.headline ? a.headline : "Profile", x;
	i[7] === b ? x = i[8] : (x = /* @__PURE__ */ n(U, {
		id: "summary",
		label: "Summary",
		readout: b
	}), i[7] = b, i[8] = x);
	let S;
	i[9] === Symbol.for("react.memo_cache_sentinel") ? (S = /* @__PURE__ */ n("div", {
		ref: f,
		className: "ins-summary__prose"
	}), i[9] = S) : S = i[9];
	let C;
	i[10] === y ? C = i[11] : (C = y && /* @__PURE__ */ r("dl", {
		className: "ins-summary__facts",
		children: [
			(y.degree || y.fieldOfStudy) && /* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("dt", { children: "Education" }), /* @__PURE__ */ n("dd", { children: [y.degree, y.fieldOfStudy].filter(Boolean).join(", ") })] }),
			/* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("dt", { children: "School" }), /* @__PURE__ */ n("dd", { children: y.institution })] }),
			y.range && /* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("dt", { children: "Graduated" }), /* @__PURE__ */ n("dd", { children: y.range.current ? "Present" : y.range.end ?? y.range.start })] }),
			y.summary && /* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("dt", { children: "Note" }), /* @__PURE__ */ n("dd", { children: y.summary })] })
		]
	}), i[10] = y, i[11] = C);
	let w;
	i[12] === C ? w = i[13] : (w = /* @__PURE__ */ r("div", {
		className: "ins-summary",
		children: [S, C]
	}), i[12] = C, i[13] = w);
	let T;
	return i[14] !== w || i[15] !== x ? (T = /* @__PURE__ */ r("section", {
		ref: u,
		className: "ins-shell",
		children: [x, w]
	}), i[14] = w, i[15] = x, i[16] = T) : T = i[16], T;
}
//#endregion
//#region src/templates/instrument/sections/TrackRecord.tsx
function K(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function q(e) {
	let t = e.map((e) => e.range.start).sort(), n = e.some((e) => e.range.current), r = e.map((e) => e.range.end ?? e.range.start).sort(), i = t[0]?.slice(0, 4) ?? "", a = n ? "PRESENT" : r[r.length - 1]?.slice(0, 4) ?? "";
	return i && a ? `${i} — ${a}` : "";
}
function J(t) {
	let i = e(13), { experience: a } = t, o = s(null), c;
	i[0] === a.length ? c = i[1] : (c = {
		scope: o,
		dependencies: [a.length]
	}, i[0] = a.length, i[1] = c), d(oe, c);
	let l;
	i[2] === a ? l = i[3] : (l = q(a), i[2] = a, i[3] = l);
	let u;
	i[4] === l ? u = i[5] : (u = /* @__PURE__ */ n(U, {
		id: "track-record",
		label: "Track Record",
		readout: l
	}), i[4] = l, i[5] = u);
	let f;
	i[6] === a ? f = i[7] : (f = a.map(Y), i[6] = a, i[7] = f);
	let p;
	i[8] === f ? p = i[9] : (p = /* @__PURE__ */ n("div", { children: f }), i[8] = f, i[9] = p);
	let m;
	return i[10] !== u || i[11] !== p ? (m = /* @__PURE__ */ r("section", {
		ref: o,
		className: "ins-shell",
		children: [u, p]
	}), i[10] = u, i[11] = p, i[12] = m) : m = i[12], m;
}
function Y(e) {
	return /* @__PURE__ */ r("article", {
		className: "ins-entry ins-entry__reveal",
		children: [/* @__PURE__ */ r("div", {
			className: "ins-entry__meta",
			children: [
				/* @__PURE__ */ n("span", {
					className: "ins-entry__period",
					children: K(e.range)
				}),
				/* @__PURE__ */ n("h3", {
					className: "ins-entry__company",
					children: e.companyUrl ? /* @__PURE__ */ n("a", {
						href: e.companyUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: e.company
					}) : e.company
				}),
				/* @__PURE__ */ r("span", {
					className: "ins-entry__role",
					children: [e.role, e.location ? ` · ${e.location}` : ""]
				})
			]
		}), /* @__PURE__ */ r("div", {
			className: "ins-entry__body",
			children: [/* @__PURE__ */ n(y, { html: e.summary }), e.highlights && e.highlights.length > 0 && /* @__PURE__ */ n("ul", { children: e.highlights.map(ae) })]
		})]
	}, e.id);
}
function ae(e) {
	return /* @__PURE__ */ n("li", { children: e }, e);
}
function oe() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		l.set(".ins-entry", {
			opacity: 1,
			y: 0
		});
		return;
	}
	let e = l.utils.toArray(".ins-entry").map(se);
	return () => {
		for (let t of e) t.scrollTrigger?.kill(), t.kill();
	};
}
function se(e) {
	return l.to(e, {
		opacity: 1,
		y: 0,
		duration: .7,
		ease: "power3.out",
		scrollTrigger: {
			trigger: e,
			start: "top 88%",
			once: !0
		}
	});
}
//#endregion
//#region src/templates/instrument/sections/Systems.tsx
function ce(t) {
	let i = e(29), { project: a, index: o } = t, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = function(e) {
		let t = e.currentTarget, n = t.getBoundingClientRect();
		t.style.setProperty("--ins-x", `${e.clientX - n.left}px`), t.style.setProperty("--ins-y", `${e.clientY - n.top}px`);
	}, i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === Symbol.for("react.memo_cache_sentinel") ? (l = /* @__PURE__ */ n("div", {
		className: "ins-card__spot",
		"aria-hidden": !0
	}), i[1] = l) : l = i[1];
	let u;
	i[2] !== a.imageUrl || i[3] !== a.title ? (u = a.imageUrl && /* @__PURE__ */ n("div", {
		className: "ins-card__media",
		children: /* @__PURE__ */ n("img", {
			src: a.imageUrl,
			alt: a.title,
			loading: "lazy"
		})
	}), i[2] = a.imageUrl, i[3] = a.title, i[4] = u) : u = i[4];
	let d = String(o + 1), f;
	i[5] === d ? f = i[6] : (f = d.padStart(2, "0"), i[5] = d, i[6] = f);
	let p = a.featured ? " · Featured" : "", m;
	i[7] !== f || i[8] !== p ? (m = /* @__PURE__ */ r("span", {
		className: "ins-card__index",
		children: [f, p]
	}), i[7] = f, i[8] = p, i[9] = m) : m = i[9];
	let h;
	i[10] === a.title ? h = i[11] : (h = /* @__PURE__ */ n("h3", {
		className: "ins-card__title",
		children: a.title
	}), i[10] = a.title, i[11] = h);
	let g;
	i[12] !== m || i[13] !== h ? (g = /* @__PURE__ */ r("div", { children: [m, h] }), i[12] = m, i[13] = h, i[14] = g) : g = i[14];
	let _;
	i[15] === a.description ? _ = i[16] : (_ = /* @__PURE__ */ n(y, {
		html: a.description,
		className: "ins-card__body"
	}), i[15] = a.description, i[16] = _);
	let v;
	i[17] === a.tags ? v = i[18] : (v = a.tags && a.tags.length > 0 && /* @__PURE__ */ n("div", {
		className: "ins-card__tags",
		children: a.tags.map(le)
	}), i[17] = a.tags, i[18] = v);
	let x;
	i[19] !== a.links || i[20] !== a.liveUrl || i[21] !== a.repoUrl ? (x = (a.liveUrl || a.repoUrl || a.links?.length) && /* @__PURE__ */ r("div", {
		className: "ins-card__links",
		children: [
			/* @__PURE__ */ n(b, { links: a.links }),
			a.liveUrl && /* @__PURE__ */ n("a", {
				href: a.liveUrl,
				target: "_blank",
				rel: "noreferrer noopener",
				children: "Live ↗"
			}),
			a.repoUrl && /* @__PURE__ */ n("a", {
				href: a.repoUrl,
				target: "_blank",
				rel: "noreferrer noopener",
				children: "Source ↗"
			})
		]
	}), i[19] = a.links, i[20] = a.liveUrl, i[21] = a.repoUrl, i[22] = x) : x = i[22];
	let S;
	return i[23] !== _ || i[24] !== v || i[25] !== x || i[26] !== u || i[27] !== g ? (S = /* @__PURE__ */ r("article", {
		className: "ins-card",
		onMouseMove: c,
		onMouseEnter: de,
		onMouseLeave: ue,
		children: [
			l,
			u,
			g,
			_,
			v,
			x
		]
	}), i[23] = _, i[24] = v, i[25] = x, i[26] = u, i[27] = g, i[28] = S) : S = i[28], S;
}
function le(e) {
	return /* @__PURE__ */ n("span", {
		className: "ins-tag",
		children: e
	}, e);
}
function ue(e) {
	return e.currentTarget.setAttribute("data-lit", "false");
}
function de(e) {
	return e.currentTarget.setAttribute("data-lit", "true");
}
function fe(t) {
	let i = e(11), { projects: a } = t, o = String(a.length), s;
	i[0] === o ? s = i[1] : (s = o.padStart(2, "0"), i[0] = o, i[1] = s);
	let c = `${s} Shipped`, l;
	i[2] === c ? l = i[3] : (l = /* @__PURE__ */ n(U, {
		id: "systems",
		label: "Systems",
		readout: c
	}), i[2] = c, i[3] = l);
	let u;
	i[4] === a ? u = i[5] : (u = a.map(pe), i[4] = a, i[5] = u);
	let d;
	i[6] === u ? d = i[7] : (d = /* @__PURE__ */ n("div", {
		className: "ins-systems",
		children: u
	}), i[6] = u, i[7] = d);
	let f;
	return i[8] !== l || i[9] !== d ? (f = /* @__PURE__ */ r("section", {
		className: "ins-shell",
		children: [l, d]
	}), i[8] = l, i[9] = d, i[10] = f) : f = i[10], f;
}
function pe(e, t) {
	return /* @__PURE__ */ n(ce, {
		project: e,
		index: t
	}, e.id);
}
//#endregion
//#region src/templates/instrument/sections/Stack.tsx
var me = "General";
function he(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.category?.trim() || me, r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return [...t].map(([e, t]) => ({
		label: e,
		items: t
	}));
}
function ge(t) {
	let i = e(20), { skills: o } = t, c = s(null), l, u;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (l = () => {
		let e = c.current;
		if (!e || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
		let t = function(t) {
			for (let n of e.querySelectorAll(".ins-stack__item")) {
				let e = n.getBoundingClientRect(), r = e.left + e.width / 2, i = e.top + e.height / 2;
				Math.abs(r - t.clientX) < e.width / 2 + 40 && Math.abs(i - t.clientY) < e.height / 2 + 40 ? (n.style.transition = "transform 0.3s ease-out, border-color 0.2s ease, color 0.2s ease", n.style.transform = `translate3d(${(t.clientX - r) / 6}px, ${(t.clientY - i) / 6}px, 0)`) : n.style.transform !== "" && n.style.transform !== "none" && (n.style.transition = "transform 0.5s ease-in-out, border-color 0.2s ease, color 0.2s ease", n.style.transform = "none");
			}
		};
		return window.addEventListener("mousemove", t, { passive: !0 }), () => window.removeEventListener("mousemove", t);
	}, u = [], i[0] = l, i[1] = u) : (l = i[0], u = i[1]), a(l, u);
	let d, f, p, m, h;
	if (i[2] !== o) {
		let e = he(o);
		p = c, m = "ins-shell";
		let t = String(o.length), r;
		i[8] === t ? r = i[9] : (r = t.padStart(2, "0"), i[8] = t, i[9] = r);
		let a = `${r} Tools`;
		i[10] === a ? h = i[11] : (h = /* @__PURE__ */ n(U, {
			id: "stack",
			label: "Stack",
			readout: a
		}), i[10] = a, i[11] = h), d = "ins-stack", f = e.map(_e), i[2] = o, i[3] = d, i[4] = f, i[5] = p, i[6] = m, i[7] = h;
	} else d = i[3], f = i[4], p = i[5], m = i[6], h = i[7];
	let g;
	i[12] !== d || i[13] !== f ? (g = /* @__PURE__ */ n("div", {
		className: d,
		children: f
	}), i[12] = d, i[13] = f, i[14] = g) : g = i[14];
	let _;
	return i[15] !== p || i[16] !== m || i[17] !== h || i[18] !== g ? (_ = /* @__PURE__ */ r("section", {
		ref: p,
		className: m,
		children: [h, g]
	}), i[15] = p, i[16] = m, i[17] = h, i[18] = g, i[19] = _) : _ = i[19], _;
}
function _e(e) {
	return /* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n("h3", {
		className: "ins-stack__label",
		children: e.label
	}), /* @__PURE__ */ n("ul", {
		className: "ins-stack__items",
		children: e.items.map(ve)
	})] }, e.label);
}
function ve(e) {
	return /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n("span", {
		className: "ins-stack__item",
		children: e.name
	}) }, e.id);
}
//#endregion
//#region src/uploads.ts
function ye(e) {
	return we(e, "word/document.xml") !== -1;
}
var X = {
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
		verify: ye
	}]
};
function Z(e, t) {
	let n = t.toLowerCase();
	return e.formats.find((e) => e.extensions.includes(n));
}
function Q(e) {
	if (!e) return;
	let t = e.split(/[?#]/, 1)[0] ?? "";
	return /\.([a-z0-9]+)$/i.exec(t)?.[1]?.toLowerCase();
}
function be(e) {
	let t = Q(e.resumeFilename) ?? Q(e.resumeUrl);
	if (t) return Z(X, t)?.label;
}
var xe = {
	"–": "-",
	"—": "-",
	"‘": "'",
	"’": "'",
	"“": "\"",
	"”": "\"",
	"…": "...",
	"\xA0": " "
};
function Se(e) {
	return e.replace(/[\u2013\u2014\u2018\u2019\u201c\u201d\u2026\u00a0]/g, (e) => xe[e] ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7e]/g, "").replace(/\s+/g, " ").replace(/\s+(?=\.[^.]*$)/, "").trim();
}
function Ce(e) {
	if (!e.resumeUrl) return;
	if (e.resumeFilename) {
		let t = Se(e.resumeFilename);
		if (/[^.]/.test(t.replace(/\.[^.]*$/, ""))) return t;
	}
	let t = Q(e.resumeUrl);
	if (!t || !Z(X, t)) return;
	let n = e.fullName.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
	return n ? `${n}-resume.${t}` : `resume.${t}`;
}
function $(e) {
	return e.resumeUrl ? {
		href: e.resumeUrl,
		download: Ce(e),
		format: be(e)
	} : null;
}
function we(e, t) {
	let n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	outer: for (let t = 0; t <= e.length - n.length; t++) {
		for (let r = 0; r < n.length; r++) if (e[t + r] !== n[r]) continue outer;
		return t;
	}
	return -1;
}
//#endregion
//#region src/templates/instrument/sections/Contact.tsx
function Te(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
var Ee = {
	github: "GitHub",
	linkedin: "LinkedIn",
	twitter: "X",
	bluesky: "Bluesky",
	dribbble: "Dribbble",
	behance: "Behance",
	youtube: "YouTube",
	website: "Website",
	other: "Link"
};
function De(e) {
	return e.split(/(?<=[@.])/).map((e, t) => /* @__PURE__ */ r(i, { children: [e, /* @__PURE__ */ n("wbr", {})] }, `${e}-${t}`));
}
function Oe(t) {
	let i = e(26), { profile: a, socials: o } = t, s;
	i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = (/* @__PURE__ */ new Date()).getFullYear(), i[0] = s) : s = i[0];
	let c = s, l;
	i[1] === a ? l = i[2] : (l = $(a), i[1] = a, i[2] = l);
	let u = l, d = a.location ?? "Open to work", f;
	i[3] === d ? f = i[4] : (f = /* @__PURE__ */ n(U, {
		id: "contact",
		label: "Contact",
		readout: d
	}), i[3] = d, i[4] = f);
	let p;
	i[5] === a.email ? p = i[6] : (p = a.email && /* @__PURE__ */ n("a", {
		className: "ins-contact__cta",
		href: `mailto:${a.email}`,
		children: /* @__PURE__ */ n("span", {
			className: "ins-contact__shine",
			children: De(a.email)
		})
	}), i[5] = a.email, i[6] = p);
	let m;
	i[7] === a.phone ? m = i[8] : (m = a.phone && /* @__PURE__ */ n("a", {
		className: "ins-contact__phone",
		href: Te(a.phone),
		children: a.phone
	}), i[7] = a.phone, i[8] = m);
	let h;
	i[9] === o ? h = i[10] : (h = o && o.length > 0 && /* @__PURE__ */ n("nav", {
		className: "ins-contact__links",
		"aria-label": "Elsewhere",
		children: o.map(ke)
	}), i[9] = o, i[10] = h);
	let g;
	i[11] === u ? g = i[12] : (g = u && /* @__PURE__ */ r("a", {
		className: "ins-contact__resume",
		href: u.href,
		download: u.download,
		target: "_blank",
		rel: "noreferrer noopener",
		children: [/* @__PURE__ */ n("span", { children: "Download résumé" }), /* @__PURE__ */ r("span", {
			className: "ins-contact__resume-format",
			children: [u.format ?? "FILE", " ↓"]
		})]
	}), i[11] = u, i[12] = g);
	let _ = a.fullName || "Your Name", v = a.headline ? ` — ${a.headline}` : "", y;
	i[13] !== v || i[14] !== _ ? (y = /* @__PURE__ */ r("span", { children: [_, v] }), i[13] = v, i[14] = _, i[15] = y) : y = i[15];
	let b;
	i[16] === Symbol.for("react.memo_cache_sentinel") ? (b = /* @__PURE__ */ r("span", { children: ["© ", c] }), i[16] = b) : b = i[16];
	let x;
	i[17] === y ? x = i[18] : (x = /* @__PURE__ */ r("div", {
		className: "ins-contact__meta",
		children: [y, b]
	}), i[17] = y, i[18] = x);
	let S;
	return i[19] !== x || i[20] !== f || i[21] !== p || i[22] !== m || i[23] !== h || i[24] !== g ? (S = /* @__PURE__ */ n("footer", {
		className: "ins-contact",
		children: /* @__PURE__ */ r("div", {
			className: "ins-shell",
			children: [
				f,
				p,
				m,
				h,
				g,
				x
			]
		})
	}), i[19] = x, i[20] = f, i[21] = p, i[22] = m, i[23] = h, i[24] = g, i[25] = S) : S = i[25], S;
}
function ke(e) {
	return /* @__PURE__ */ r("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: [e.label ?? Ee[e.platform], " ↗"]
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/instrument/Template.tsx
l.registerPlugin(u);
function Ae(t) {
	let i = e(65), { data: a } = t, { mode: o, toggle: s } = ee(a.theme, "dark"), c = a.theme?.accentColor, l;
	i[0] === a.profile.bio ? l = i[1] : (l = a.profile.bio && a.profile.bio.trim() !== "", i[0] = a.profile.bio, i[1] = l);
	let u = !!l, d = (a.experience?.length ?? 0) > 0, f = (a.projects?.length ?? 0) > 0, p = (a.skills?.length ?? 0) > 0, m;
	i[2] === u ? m = i[3] : (m = u && {
		id: "summary",
		label: "Summary"
	}, i[2] = u, i[3] = m);
	let h;
	i[4] === d ? h = i[5] : (h = d && {
		id: "track-record",
		label: "Track Record"
	}, i[4] = d, i[5] = h);
	let g;
	i[6] === f ? g = i[7] : (g = f && {
		id: "systems",
		label: "Systems"
	}, i[6] = f, i[7] = g);
	let _;
	i[8] === p ? _ = i[9] : (_ = p && {
		id: "stack",
		label: "Stack"
	}, i[8] = p, i[9] = _);
	let v;
	if (i[10] !== a || i[11] !== m || i[12] !== h || i[13] !== g || i[14] !== _) {
		let e;
		i[16] === Symbol.for("react.memo_cache_sentinel") ? (e = {
			id: "contact",
			label: "Contact"
		}, i[16] = e) : e = i[16], v = [
			m,
			h,
			g,
			_,
			...C(a),
			e
		].filter(Me), i[10] = a, i[11] = m, i[12] = h, i[13] = g, i[14] = _, i[15] = v;
	} else v = i[15];
	let y = v, b;
	i[17] === a.skills ? b = i[18] : (b = a.skills ?? [], i[17] = a.skills, i[18] = b);
	let x;
	i[19] === b ? x = i[20] : (x = b.map(je), i[19] = b, i[20] = x);
	let S = x, T;
	i[21] === c ? T = i[22] : (T = c ? { "--ins-signal": c } : void 0, i[21] = c, i[22] = T);
	let E;
	i[23] !== a.profile.fullName || i[24] !== y ? (E = /* @__PURE__ */ n(te, {
		name: a.profile.fullName,
		entries: y
	}), i[23] = a.profile.fullName, i[24] = y, i[25] = E) : E = i[25];
	let D;
	i[26] !== a.profile || i[27] !== a.socials ? (D = /* @__PURE__ */ n(ne, {
		profile: a.profile,
		socials: a.socials
	}), i[26] = a.profile, i[27] = a.socials, i[28] = D) : D = i[28];
	let O;
	i[29] === S ? O = i[30] : (O = S.length > 0 && /* @__PURE__ */ n(V, { terms: S }), i[29] = S, i[30] = O);
	let k;
	i[31] !== a.education || i[32] !== a.profile || i[33] !== u ? (k = u && /* @__PURE__ */ n(G, {
		profile: a.profile,
		education: a.education
	}), i[31] = a.education, i[32] = a.profile, i[33] = u, i[34] = k) : k = i[34];
	let A;
	i[35] !== a.experience || i[36] !== d ? (A = d && a.experience && /* @__PURE__ */ n(J, { experience: a.experience }), i[35] = a.experience, i[36] = d, i[37] = A) : A = i[37];
	let j;
	i[38] !== a.projects || i[39] !== f ? (j = f && a.projects && /* @__PURE__ */ n(fe, { projects: a.projects }), i[38] = a.projects, i[39] = f, i[40] = j) : j = i[40];
	let M;
	i[41] !== a.skills || i[42] !== p ? (M = p && a.skills && /* @__PURE__ */ n(ge, { skills: a.skills }), i[41] = a.skills, i[42] = p, i[43] = M) : M = i[43];
	let P;
	i[44] === a ? P = i[45] : (P = /* @__PURE__ */ n(w, { data: a }), i[44] = a, i[45] = P);
	let F;
	i[46] !== o || i[47] !== s ? (F = /* @__PURE__ */ n(N, {
		mode: o,
		toggle: s
	}), i[46] = o, i[47] = s, i[48] = F) : F = i[48];
	let I;
	i[49] !== a.profile || i[50] !== a.socials ? (I = /* @__PURE__ */ n(Oe, {
		profile: a.profile,
		socials: a.socials
	}), i[49] = a.profile, i[50] = a.socials, i[51] = I) : I = i[51];
	let L;
	return i[52] !== o || i[53] !== E || i[54] !== D || i[55] !== O || i[56] !== k || i[57] !== A || i[58] !== j || i[59] !== M || i[60] !== P || i[61] !== F || i[62] !== I || i[63] !== T ? (L = /* @__PURE__ */ r("div", {
		className: "instrument",
		"data-theme": o,
		style: T,
		children: [
			E,
			D,
			O,
			k,
			A,
			j,
			M,
			P,
			F,
			I
		]
	}), i[52] = o, i[53] = E, i[54] = D, i[55] = O, i[56] = k, i[57] = A, i[58] = j, i[59] = M, i[60] = P, i[61] = F, i[62] = I, i[63] = T, i[64] = L) : L = i[64], L;
}
function je(e) {
	return e.name;
}
function Me(e) {
	return e !== !1;
}
//#endregion
export { Ae as default };
