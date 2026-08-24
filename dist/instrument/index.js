import { c as e } from "react/compiler-runtime";
import { gsap as t } from "gsap";
import { ScrollTrigger as n } from "gsap/ScrollTrigger";
import { Fragment as r, useEffect as i, useLayoutEffect as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { useGSAP as d } from "@gsap/react";
import { motion as f, useAnimationFrame as p, useMotionValue as m, useScroll as h, useSpring as g, useTransform as _, useVelocity as v } from "motion/react";
import './index.css';//#region src/templates/instrument/sections/TopBar.tsx
function y(t) {
	let n = e(25), { name: r, entries: a } = t, d = o(null), [f, p] = s(!1), m, h;
	n[0] === Symbol.for("react.memo_cache_sentinel") ? (m = () => {
		let e = function() {
			let e = document.documentElement, t = e.scrollHeight - e.clientHeight, n = t > 0 ? Math.min(1, Math.max(0, e.scrollTop / t)) : 0;
			d.current && (d.current.style.width = `${n * 100}%`);
		};
		return e(), window.addEventListener("scroll", e, { passive: !0 }), window.addEventListener("resize", e), () => {
			window.removeEventListener("scroll", e), window.removeEventListener("resize", e);
		};
	}, h = [], n[0] = m, n[1] = h) : (m = n[0], h = n[1]), i(m, h);
	let g, _;
	n[2] === f ? (g = n[3], _ = n[4]) : (g = () => {
		if (!f) return;
		let e = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = e;
		};
	}, _ = [f], n[2] = f, n[3] = g, n[4] = _), i(g, _);
	let v = r || "Portfolio", y;
	n[5] === v ? y = n[6] : (y = /* @__PURE__ */ l("a", {
		href: "#top",
		className: "ins-bar__mark",
		children: v
	}), n[5] = v, n[6] = y);
	let S;
	n[7] === a ? S = n[8] : (S = a.map(x), n[7] = a, n[8] = S);
	let C;
	n[9] === S ? C = n[10] : (C = /* @__PURE__ */ l("nav", {
		className: "ins-bar__nav",
		"aria-label": "Sections",
		children: S
	}), n[9] = S, n[10] = C);
	let w;
	n[11] !== a.length || n[12] !== f ? (w = a.length > 0 && /* @__PURE__ */ u("button", {
		type: "button",
		className: "ins-bar__toggle",
		"aria-expanded": f,
		"aria-label": f ? "Close menu" : "Open menu",
		onClick: () => p(b),
		children: [
			/* @__PURE__ */ l("span", {}),
			/* @__PURE__ */ l("span", {}),
			/* @__PURE__ */ l("span", {})
		]
	}), n[11] = a.length, n[12] = f, n[13] = w) : w = n[13];
	let T;
	n[14] === Symbol.for("react.memo_cache_sentinel") ? (T = /* @__PURE__ */ l("div", {
		className: "ins-bar__progress",
		children: /* @__PURE__ */ l("span", { ref: d })
	}), n[14] = T) : T = n[14];
	let E;
	n[15] !== y || n[16] !== C || n[17] !== w ? (E = /* @__PURE__ */ u("header", {
		className: "ins-bar",
		children: [
			y,
			C,
			w,
			T
		]
	}), n[15] = y, n[16] = C, n[17] = w, n[18] = E) : E = n[18];
	let D;
	n[19] !== a || n[20] !== f ? (D = f && /* @__PURE__ */ l("nav", {
		className: "ins-menu",
		"aria-label": "Sections",
		children: a.map((e, t) => /* @__PURE__ */ u("a", {
			href: `#${e.id}`,
			className: "ins-menu__item",
			style: { animation: `ins-menu-in 0.4s ${t * .05}s ease-out both` },
			onClick: () => p(!1),
			children: [/* @__PURE__ */ l("span", {
				className: "ins-menu__index",
				children: String(t + 1).padStart(2, "0")
			}), e.label]
		}, e.id))
	}), n[19] = a, n[20] = f, n[21] = D) : D = n[21];
	let O;
	return n[22] !== E || n[23] !== D ? (O = /* @__PURE__ */ u(c, { children: [E, D] }), n[22] = E, n[23] = D, n[24] = O) : O = n[24], O;
}
function b(e) {
	return !e;
}
function x(e) {
	return /* @__PURE__ */ l("a", {
		href: `#${e.id}`,
		children: e.label
	}, e.id);
}
//#endregion
//#region src/templates/instrument/sections/Hero.tsx
var S = {
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
function C(t) {
	let n = e(39), { profile: r, socials: i } = t, a = o(null), s = (r.fullName || "Your Name").toUpperCase().split(/\s+/).filter(Boolean), f;
	if (n[0] !== r.email || n[1] !== r.location || n[2] !== r.phone || n[3] !== i) {
		if (f = [], r.location) {
			let e;
			n[5] === r.location ? e = n[6] : (e = {
				label: "Based",
				value: r.location
			}, n[5] = r.location, n[6] = e), f.push(e);
		}
		if (r.email) {
			let e;
			n[7] === r.email ? e = n[8] : (e = {
				label: "Mail",
				value: r.email
			}, n[7] = r.email, n[8] = e), f.push(e);
		}
		if (r.phone) {
			let e;
			n[9] === r.phone ? e = n[10] : (e = {
				label: "Tel",
				value: r.phone
			}, n[9] = r.phone, n[10] = e), f.push(e);
		}
		for (let e of i ?? []) f.push({
			label: e.label ?? S[e.platform],
			value: O(e.url)
		});
		n[0] = r.email, n[1] = r.location, n[2] = r.phone, n[3] = i, n[4] = f;
	} else f = n[4];
	let p;
	n[11] !== r.fullName || n[12] !== f.length ? (p = {
		scope: a,
		dependencies: [r.fullName, f.length],
		revertOnUpdate: !0
	}, n[11] = r.fullName, n[12] = f.length, n[13] = p) : p = n[13], d(D, p);
	let m, h, g;
	n[14] === Symbol.for("react.memo_cache_sentinel") ? (m = /* @__PURE__ */ l("div", {
		className: "ins-hero__field",
		"aria-hidden": !0
	}), h = /* @__PURE__ */ l("div", {
		className: "ins-hero__sweep",
		"aria-hidden": !0
	}), g = /* @__PURE__ */ l("div", {
		className: "ins-hero__fade",
		"aria-hidden": !0
	}), n[14] = m, n[15] = h, n[16] = g) : (m = n[14], h = n[15], g = n[16]);
	let _;
	n[17] !== r.avatarUrl || n[18] !== r.fullName ? (_ = r.avatarUrl && /* @__PURE__ */ l("img", {
		className: "ins-hero__portrait",
		src: r.avatarUrl,
		alt: r.fullName
	}), n[17] = r.avatarUrl, n[18] = r.fullName, n[19] = _) : _ = n[19];
	let v = s.map(T), y;
	n[20] === v ? y = n[21] : (y = /* @__PURE__ */ l("h1", {
		className: "ins-hero__name",
		children: v
	}), n[20] = v, n[21] = y);
	let b;
	n[22] !== r.headline || n[23] !== r.location ? (b = r.headline ? /* @__PURE__ */ u(c, { children: [r.headline, r.location && /* @__PURE__ */ u(c, { children: [
		" ",
		/* @__PURE__ */ l("span", {
			className: "ins-hero__sep",
			children: "·"
		}),
		" ",
		r.location
	] })] }) : null, n[22] = r.headline, n[23] = r.location, n[24] = b) : b = n[24];
	let x;
	n[25] === b ? x = n[26] : (x = /* @__PURE__ */ l("p", {
		className: "ins-hero__role ins-hero__reveal",
		children: b
	}), n[25] = b, n[26] = x);
	let C;
	n[27] === f ? C = n[28] : (C = /* @__PURE__ */ l("dl", {
		className: "ins-hero__readout ins-hero__reveal",
		children: f.map(w)
	}), n[27] = f, n[28] = C);
	let E;
	n[29] !== y || n[30] !== x || n[31] !== C || n[32] !== _ ? (E = /* @__PURE__ */ u("div", {
		className: "ins-hero__body",
		children: [
			_,
			y,
			x,
			C
		]
	}), n[29] = y, n[30] = x, n[31] = C, n[32] = _, n[33] = E) : E = n[33];
	let k;
	return n[34] !== E || n[35] !== m || n[36] !== h || n[37] !== g ? (k = /* @__PURE__ */ u("section", {
		ref: a,
		id: "top",
		className: "ins-hero",
		children: [
			m,
			h,
			g,
			E
		]
	}), n[34] = E, n[35] = m, n[36] = h, n[37] = g, n[38] = k) : k = n[38], k;
}
function w(e) {
	return /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("dt", { children: e.label }), /* @__PURE__ */ l("dd", { children: e.value })] }, e.label + e.value);
}
function T(e, t) {
	return /* @__PURE__ */ l("span", {
		className: "ins-hero__word",
		children: [...e].map(E)
	}, `${e}-${t}`);
}
function E(e, t) {
	return /* @__PURE__ */ l("span", {
		className: "ins-hero__char",
		children: e
	}, `${e}-${t}`);
}
function D() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		t.set([".ins-hero__char", ".ins-hero__reveal"], {
			opacity: 1,
			y: 0
		});
		return;
	}
	t.timeline({ defaults: { ease: "power3.out" } }).to(".ins-hero__char", {
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
function O(e) {
	try {
		return new URL(e).host.replace(/^www\./, "");
	} catch {
		return e;
	}
}
//#endregion
//#region src/templates/instrument/sections/Marquee.tsx
var k = 4;
function A(t) {
	let n = e(17), { terms: r } = t, i = o(null), a = m(0), { scrollY: s } = h(), c = v(s), d;
	n[0] === Symbol.for("react.memo_cache_sentinel") ? (d = {
		damping: 50,
		stiffness: 400
	}, n[0] = d) : d = n[0];
	let y = g(c, d), b, x, S;
	n[1] === Symbol.for("react.memo_cache_sentinel") ? (b = [0, 1e3], x = [0, 5], S = { clamp: !1 }, n[1] = b, n[2] = x, n[3] = S) : (b = n[1], x = n[2], S = n[3]);
	let C = _(y, b, x, S), w;
	n[4] === Symbol.for("react.memo_cache_sentinel") ? (w = (e) => {
		let t = i.current?.offsetWidth ?? 0;
		return t === 0 ? "0px" : `${((e + t) % t + t) % t - t}px`;
	}, n[4] = w) : w = n[4];
	let T = _(a, w), E = o(1), D;
	n[5] !== a || n[6] !== C ? (D = (e, t) => {
		let n = C.get();
		n < 0 ? E.current = -1 : n > 0 && (E.current = 1);
		let r = E.current * 40 * (t / 1e3);
		r += E.current * r * n, a.set(a.get() + r);
	}, n[5] = a, n[6] = C, n[7] = D) : D = n[7], p(D);
	let O;
	n[8] === r ? O = n[9] : (O = r.map(j).join(" "), n[8] = r, n[9] = O);
	let A = O, M;
	n[10] === T ? M = n[11] : (M = { x: T }, n[10] = T, n[11] = M);
	let N;
	n[12] === A ? N = n[13] : (N = Array.from({ length: k }, (e, t) => /* @__PURE__ */ u("span", {
		className: "ins-marquee__copy",
		ref: t === 0 ? i : void 0,
		"aria-hidden": t > 0,
		children: [A, "\xA0"]
	}, t)), n[12] = A, n[13] = N);
	let P;
	return n[14] !== M || n[15] !== N ? (P = /* @__PURE__ */ l("section", {
		className: "ins-marquee",
		"aria-label": "Stack",
		children: /* @__PURE__ */ l(f.div, {
			className: "ins-marquee__track",
			style: M,
			children: N
		})
	}), n[14] = M, n[15] = N, n[16] = P) : P = n[16], P;
}
function j(e) {
	return `${e} —`;
}
//#endregion
//#region src/templates/instrument/sections/SectionHead.tsx
function M(t) {
	let n = e(8), { id: r, label: i, readout: a } = t, o;
	n[0] === i ? o = n[1] : (o = /* @__PURE__ */ l("span", {
		className: "ins-head__label",
		children: i
	}), n[0] = i, n[1] = o);
	let s;
	n[2] === a ? s = n[3] : (s = /* @__PURE__ */ l("span", {
		className: "ins-head__readout",
		children: a
	}), n[2] = a, n[3] = s);
	let c;
	return n[4] !== r || n[5] !== o || n[6] !== s ? (c = /* @__PURE__ */ u("div", {
		id: r,
		className: "ins-head",
		children: [o, s]
	}), n[4] = r, n[5] = o, n[6] = s, n[7] = c) : c = n[7], c;
}
//#endregion
//#region src/templates/instrument/sections/Summary.tsx
function N(e) {
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
function P(n) {
	let r = e(17), { profile: i, education: s } = n, c = o(null), f = o(null), p;
	r[0] === Symbol.for("react.memo_cache_sentinel") ? (p = [], r[0] = p) : p = r[0];
	let m = o(p), h, g;
	r[1] === i.bio ? (h = r[2], g = r[3]) : (h = () => {
		let e = f.current;
		e && (e.innerHTML = i.bio ?? "", m.current = N(e));
	}, g = [i.bio], r[1] = i.bio, r[2] = h, r[3] = g), a(h, g);
	let _;
	r[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = () => {
		let e = m.current;
		if (e.length === 0) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			t.set(e, {
				opacity: 1,
				filter: "blur(0px)"
			});
			return;
		}
		let n = t.fromTo(e, {
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
			n.scrollTrigger?.kill(), n.kill();
		};
	}, r[4] = _) : _ = r[4];
	let v;
	r[5] === i.bio ? v = r[6] : (v = {
		scope: c,
		dependencies: [i.bio]
	}, r[5] = i.bio, r[6] = v), d(_, v);
	let y = s?.[0], b = i.headline ? i.headline : "Profile", x;
	r[7] === b ? x = r[8] : (x = /* @__PURE__ */ l(M, {
		id: "summary",
		label: "Summary",
		readout: b
	}), r[7] = b, r[8] = x);
	let S;
	r[9] === Symbol.for("react.memo_cache_sentinel") ? (S = /* @__PURE__ */ l("div", {
		ref: f,
		className: "ins-summary__prose"
	}), r[9] = S) : S = r[9];
	let C;
	r[10] === y ? C = r[11] : (C = y && /* @__PURE__ */ u("dl", {
		className: "ins-summary__facts",
		children: [
			(y.degree || y.fieldOfStudy) && /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("dt", { children: "Education" }), /* @__PURE__ */ l("dd", { children: [y.degree, y.fieldOfStudy].filter(Boolean).join(", ") })] }),
			/* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("dt", { children: "School" }), /* @__PURE__ */ l("dd", { children: y.institution })] }),
			y.range && /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("dt", { children: "Graduated" }), /* @__PURE__ */ l("dd", { children: y.range.current ? "Present" : y.range.end ?? y.range.start })] }),
			y.summary && /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("dt", { children: "Note" }), /* @__PURE__ */ l("dd", { children: y.summary })] })
		]
	}), r[10] = y, r[11] = C);
	let w;
	r[12] === C ? w = r[13] : (w = /* @__PURE__ */ u("div", {
		className: "ins-summary",
		children: [S, C]
	}), r[12] = C, r[13] = w);
	let T;
	return r[14] !== w || r[15] !== x ? (T = /* @__PURE__ */ u("section", {
		ref: c,
		className: "ins-shell",
		children: [x, w]
	}), r[14] = w, r[15] = x, r[16] = T) : T = r[16], T;
}
//#endregion
//#region src/rich-text.tsx
function F(t) {
	let n = e(5), { html: r, className: i } = t;
	if (!r) return null;
	let a;
	n[0] === r ? a = n[1] : (a = { __html: r }, n[0] = r, n[1] = a);
	let o;
	return n[2] !== i || n[3] !== a ? (o = /* @__PURE__ */ l("div", {
		className: i,
		dangerouslySetInnerHTML: a
	}), n[2] = i, n[3] = a, n[4] = o) : o = n[4], o;
}
//#endregion
//#region src/templates/instrument/sections/TrackRecord.tsx
function I(e) {
	let t = e.current ? "Present" : e.end ?? "";
	return t ? `${e.start} — ${t}` : e.start;
}
function ee(e) {
	let t = e.map((e) => e.range.start).sort(), n = e.some((e) => e.range.current), r = e.map((e) => e.range.end ?? e.range.start).sort(), i = t[0]?.slice(0, 4) ?? "", a = n ? "PRESENT" : r[r.length - 1]?.slice(0, 4) ?? "";
	return i && a ? `${i} — ${a}` : "";
}
function te(t) {
	let n = e(13), { experience: r } = t, i = o(null), a;
	n[0] === r.length ? a = n[1] : (a = {
		scope: i,
		dependencies: [r.length]
	}, n[0] = r.length, n[1] = a), d(L, a);
	let s;
	n[2] === r ? s = n[3] : (s = ee(r), n[2] = r, n[3] = s);
	let c;
	n[4] === s ? c = n[5] : (c = /* @__PURE__ */ l(M, {
		id: "track-record",
		label: "Track Record",
		readout: s
	}), n[4] = s, n[5] = c);
	let f;
	n[6] === r ? f = n[7] : (f = r.map(ne), n[6] = r, n[7] = f);
	let p;
	n[8] === f ? p = n[9] : (p = /* @__PURE__ */ l("div", { children: f }), n[8] = f, n[9] = p);
	let m;
	return n[10] !== c || n[11] !== p ? (m = /* @__PURE__ */ u("section", {
		ref: i,
		className: "ins-shell",
		children: [c, p]
	}), n[10] = c, n[11] = p, n[12] = m) : m = n[12], m;
}
function ne(e) {
	return /* @__PURE__ */ u("article", {
		className: "ins-entry ins-entry__reveal",
		children: [/* @__PURE__ */ u("div", {
			className: "ins-entry__meta",
			children: [
				/* @__PURE__ */ l("span", {
					className: "ins-entry__period",
					children: I(e.range)
				}),
				/* @__PURE__ */ l("h3", {
					className: "ins-entry__company",
					children: e.companyUrl ? /* @__PURE__ */ l("a", {
						href: e.companyUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						children: e.company
					}) : e.company
				}),
				/* @__PURE__ */ u("span", {
					className: "ins-entry__role",
					children: [e.role, e.location ? ` · ${e.location}` : ""]
				})
			]
		}), /* @__PURE__ */ u("div", {
			className: "ins-entry__body",
			children: [/* @__PURE__ */ l(F, { html: e.summary }), e.highlights && e.highlights.length > 0 && /* @__PURE__ */ l("ul", { children: e.highlights.map(re) })]
		})]
	}, e.id);
}
function re(e) {
	return /* @__PURE__ */ l("li", { children: e }, e);
}
function L() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		t.set(".ins-entry", {
			opacity: 1,
			y: 0
		});
		return;
	}
	let e = t.utils.toArray(".ins-entry").map(R);
	return () => {
		for (let t of e) t.scrollTrigger?.kill(), t.kill();
	};
}
function R(e) {
	return t.to(e, {
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
function z(t) {
	let n = e(28), { project: r, index: i } = t, a;
	n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function(e) {
		let t = e.currentTarget, n = t.getBoundingClientRect();
		t.style.setProperty("--ins-x", `${e.clientX - n.left}px`), t.style.setProperty("--ins-y", `${e.clientY - n.top}px`);
	}, n[0] = a) : a = n[0];
	let o = a, s;
	n[1] === Symbol.for("react.memo_cache_sentinel") ? (s = /* @__PURE__ */ l("div", {
		className: "ins-card__spot",
		"aria-hidden": !0
	}), n[1] = s) : s = n[1];
	let c;
	n[2] !== r.imageUrl || n[3] !== r.title ? (c = r.imageUrl && /* @__PURE__ */ l("div", {
		className: "ins-card__media",
		children: /* @__PURE__ */ l("img", {
			src: r.imageUrl,
			alt: r.title,
			loading: "lazy"
		})
	}), n[2] = r.imageUrl, n[3] = r.title, n[4] = c) : c = n[4];
	let d = String(i + 1), f;
	n[5] === d ? f = n[6] : (f = d.padStart(2, "0"), n[5] = d, n[6] = f);
	let p = r.featured ? " · Featured" : "", m;
	n[7] !== f || n[8] !== p ? (m = /* @__PURE__ */ u("span", {
		className: "ins-card__index",
		children: [f, p]
	}), n[7] = f, n[8] = p, n[9] = m) : m = n[9];
	let h;
	n[10] === r.title ? h = n[11] : (h = /* @__PURE__ */ l("h3", {
		className: "ins-card__title",
		children: r.title
	}), n[10] = r.title, n[11] = h);
	let g;
	n[12] !== m || n[13] !== h ? (g = /* @__PURE__ */ u("div", { children: [m, h] }), n[12] = m, n[13] = h, n[14] = g) : g = n[14];
	let _;
	n[15] === r.description ? _ = n[16] : (_ = /* @__PURE__ */ l(F, {
		html: r.description,
		className: "ins-card__body"
	}), n[15] = r.description, n[16] = _);
	let v;
	n[17] === r.tags ? v = n[18] : (v = r.tags && r.tags.length > 0 && /* @__PURE__ */ l("div", {
		className: "ins-card__tags",
		children: r.tags.map(B)
	}), n[17] = r.tags, n[18] = v);
	let y;
	n[19] !== r.liveUrl || n[20] !== r.repoUrl ? (y = (r.liveUrl || r.repoUrl) && /* @__PURE__ */ u("div", {
		className: "ins-card__links",
		children: [r.liveUrl && /* @__PURE__ */ l("a", {
			href: r.liveUrl,
			target: "_blank",
			rel: "noreferrer noopener",
			children: "Live ↗"
		}), r.repoUrl && /* @__PURE__ */ l("a", {
			href: r.repoUrl,
			target: "_blank",
			rel: "noreferrer noopener",
			children: "Source ↗"
		})]
	}), n[19] = r.liveUrl, n[20] = r.repoUrl, n[21] = y) : y = n[21];
	let b;
	return n[22] !== _ || n[23] !== v || n[24] !== y || n[25] !== c || n[26] !== g ? (b = /* @__PURE__ */ u("article", {
		className: "ins-card",
		onMouseMove: o,
		onMouseEnter: H,
		onMouseLeave: V,
		children: [
			s,
			c,
			g,
			_,
			v,
			y
		]
	}), n[22] = _, n[23] = v, n[24] = y, n[25] = c, n[26] = g, n[27] = b) : b = n[27], b;
}
function B(e) {
	return /* @__PURE__ */ l("span", {
		className: "ins-tag",
		children: e
	}, e);
}
function V(e) {
	return e.currentTarget.setAttribute("data-lit", "false");
}
function H(e) {
	return e.currentTarget.setAttribute("data-lit", "true");
}
function U(t) {
	let n = e(11), { projects: r } = t, i = String(r.length), a;
	n[0] === i ? a = n[1] : (a = i.padStart(2, "0"), n[0] = i, n[1] = a);
	let o = `${a} Shipped`, s;
	n[2] === o ? s = n[3] : (s = /* @__PURE__ */ l(M, {
		id: "systems",
		label: "Systems",
		readout: o
	}), n[2] = o, n[3] = s);
	let c;
	n[4] === r ? c = n[5] : (c = r.map(W), n[4] = r, n[5] = c);
	let d;
	n[6] === c ? d = n[7] : (d = /* @__PURE__ */ l("div", {
		className: "ins-systems",
		children: c
	}), n[6] = c, n[7] = d);
	let f;
	return n[8] !== s || n[9] !== d ? (f = /* @__PURE__ */ u("section", {
		className: "ins-shell",
		children: [s, d]
	}), n[8] = s, n[9] = d, n[10] = f) : f = n[10], f;
}
function W(e, t) {
	return /* @__PURE__ */ l(z, {
		project: e,
		index: t
	}, e.id);
}
//#endregion
//#region src/templates/instrument/sections/Stack.tsx
var G = "General";
function K(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.category?.trim() || G, r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return [...t].map(([e, t]) => ({
		label: e,
		items: t
	}));
}
function q(t) {
	let n = e(20), { skills: r } = t, a = o(null), s, c;
	n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = () => {
		let e = a.current;
		if (!e || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
		let t = function(t) {
			for (let n of e.querySelectorAll(".ins-stack__item")) {
				let e = n.getBoundingClientRect(), r = e.left + e.width / 2, i = e.top + e.height / 2;
				Math.abs(r - t.clientX) < e.width / 2 + 40 && Math.abs(i - t.clientY) < e.height / 2 + 40 ? (n.style.transition = "transform 0.3s ease-out, border-color 0.2s ease, color 0.2s ease", n.style.transform = `translate3d(${(t.clientX - r) / 6}px, ${(t.clientY - i) / 6}px, 0)`) : n.style.transform !== "" && n.style.transform !== "none" && (n.style.transition = "transform 0.5s ease-in-out, border-color 0.2s ease, color 0.2s ease", n.style.transform = "none");
			}
		};
		return window.addEventListener("mousemove", t, { passive: !0 }), () => window.removeEventListener("mousemove", t);
	}, c = [], n[0] = s, n[1] = c) : (s = n[0], c = n[1]), i(s, c);
	let d, f, p, m, h;
	if (n[2] !== r) {
		let e = K(r);
		p = a, m = "ins-shell";
		let t = String(r.length), i;
		n[8] === t ? i = n[9] : (i = t.padStart(2, "0"), n[8] = t, n[9] = i);
		let o = `${i} Tools`;
		n[10] === o ? h = n[11] : (h = /* @__PURE__ */ l(M, {
			id: "stack",
			label: "Stack",
			readout: o
		}), n[10] = o, n[11] = h), d = "ins-stack", f = e.map(J), n[2] = r, n[3] = d, n[4] = f, n[5] = p, n[6] = m, n[7] = h;
	} else d = n[3], f = n[4], p = n[5], m = n[6], h = n[7];
	let g;
	n[12] !== d || n[13] !== f ? (g = /* @__PURE__ */ l("div", {
		className: d,
		children: f
	}), n[12] = d, n[13] = f, n[14] = g) : g = n[14];
	let _;
	return n[15] !== p || n[16] !== m || n[17] !== h || n[18] !== g ? (_ = /* @__PURE__ */ u("section", {
		ref: p,
		className: m,
		children: [h, g]
	}), n[15] = p, n[16] = m, n[17] = h, n[18] = g, n[19] = _) : _ = n[19], _;
}
function J(e) {
	return /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("h3", {
		className: "ins-stack__label",
		children: e.label
	}), /* @__PURE__ */ l("ul", {
		className: "ins-stack__items",
		children: e.items.map(Y)
	})] }, e.label);
}
function Y(e) {
	return /* @__PURE__ */ l("li", { children: /* @__PURE__ */ l("span", {
		className: "ins-stack__item",
		children: e.name
	}) }, e.id);
}
//#endregion
//#region src/uploads.ts
function ie(e) {
	return ue(e, "word/document.xml") !== -1;
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
		verify: ie
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
function ae(e) {
	let t = Q(e.resumeFilename) ?? Q(e.resumeUrl);
	if (t) return Z(X, t)?.label;
}
var oe = {
	"–": "-",
	"—": "-",
	"‘": "'",
	"’": "'",
	"“": "\"",
	"”": "\"",
	"…": "...",
	"\xA0": " "
};
function se(e) {
	return e.replace(/[\u2013\u2014\u2018\u2019\u201c\u201d\u2026\u00a0]/g, (e) => oe[e] ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7e]/g, "").replace(/\s+/g, " ").replace(/\s+(?=\.[^.]*$)/, "").trim();
}
function ce(e) {
	if (!e.resumeUrl) return;
	if (e.resumeFilename) {
		let t = se(e.resumeFilename);
		if (/[^.]/.test(t.replace(/\.[^.]*$/, ""))) return t;
	}
	let t = Q(e.resumeUrl);
	if (!t || !Z(X, t)) return;
	let n = e.fullName.normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
	return n ? `${n}-resume.${t}` : `resume.${t}`;
}
function le(e) {
	return e.resumeUrl ? {
		href: e.resumeUrl,
		download: ce(e),
		format: ae(e)
	} : null;
}
function ue(e, t) {
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
function de(e) {
	return `tel:${e.replace(/[^\d+]/g, "")}`;
}
var fe = {
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
function pe(e) {
	return e.split(/(?<=[@.])/).map((e, t) => /* @__PURE__ */ u(r, { children: [e, /* @__PURE__ */ l("wbr", {})] }, `${e}-${t}`));
}
function $(t) {
	let n = e(26), { profile: r, socials: i } = t, a;
	n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (/* @__PURE__ */ new Date()).getFullYear(), n[0] = a) : a = n[0];
	let o = a, s;
	n[1] === r ? s = n[2] : (s = le(r), n[1] = r, n[2] = s);
	let c = s, d = r.location ?? "Open to work", f;
	n[3] === d ? f = n[4] : (f = /* @__PURE__ */ l(M, {
		id: "contact",
		label: "Contact",
		readout: d
	}), n[3] = d, n[4] = f);
	let p;
	n[5] === r.email ? p = n[6] : (p = r.email && /* @__PURE__ */ l("a", {
		className: "ins-contact__cta",
		href: `mailto:${r.email}`,
		children: /* @__PURE__ */ l("span", {
			className: "ins-contact__shine",
			children: pe(r.email)
		})
	}), n[5] = r.email, n[6] = p);
	let m;
	n[7] === r.phone ? m = n[8] : (m = r.phone && /* @__PURE__ */ l("a", {
		className: "ins-contact__phone",
		href: de(r.phone),
		children: r.phone
	}), n[7] = r.phone, n[8] = m);
	let h;
	n[9] === i ? h = n[10] : (h = i && i.length > 0 && /* @__PURE__ */ l("nav", {
		className: "ins-contact__links",
		"aria-label": "Elsewhere",
		children: i.map(me)
	}), n[9] = i, n[10] = h);
	let g;
	n[11] === c ? g = n[12] : (g = c && /* @__PURE__ */ u("a", {
		className: "ins-contact__resume",
		href: c.href,
		download: c.download,
		target: "_blank",
		rel: "noreferrer noopener",
		children: [/* @__PURE__ */ l("span", { children: "Download résumé" }), /* @__PURE__ */ u("span", {
			className: "ins-contact__resume-format",
			children: [c.format ?? "FILE", " ↓"]
		})]
	}), n[11] = c, n[12] = g);
	let _ = r.fullName || "Your Name", v = r.headline ? ` — ${r.headline}` : "", y;
	n[13] !== v || n[14] !== _ ? (y = /* @__PURE__ */ u("span", { children: [_, v] }), n[13] = v, n[14] = _, n[15] = y) : y = n[15];
	let b;
	n[16] === Symbol.for("react.memo_cache_sentinel") ? (b = /* @__PURE__ */ u("span", { children: ["© ", o] }), n[16] = b) : b = n[16];
	let x;
	n[17] === y ? x = n[18] : (x = /* @__PURE__ */ u("div", {
		className: "ins-contact__meta",
		children: [y, b]
	}), n[17] = y, n[18] = x);
	let S;
	return n[19] !== x || n[20] !== f || n[21] !== p || n[22] !== m || n[23] !== h || n[24] !== g ? (S = /* @__PURE__ */ l("footer", {
		className: "ins-contact",
		children: /* @__PURE__ */ u("div", {
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
	}), n[19] = x, n[20] = f, n[21] = p, n[22] = m, n[23] = h, n[24] = g, n[25] = S) : S = n[25], S;
}
function me(e) {
	return /* @__PURE__ */ u("a", {
		href: e.url,
		target: "_blank",
		rel: "noreferrer noopener",
		children: [e.label ?? fe[e.platform], " ↗"]
	}, e.platform + e.url);
}
//#endregion
//#region src/templates/instrument/Template.tsx
t.registerPlugin(n);
function he(t) {
	let n = e(57), { data: r } = t, i = r.theme?.mode === "light" ? "light" : "dark", a = r.theme?.accentColor, o;
	n[0] === r.profile.bio ? o = n[1] : (o = r.profile.bio && r.profile.bio.trim() !== "", n[0] = r.profile.bio, n[1] = o);
	let s = !!o, c = (r.experience?.length ?? 0) > 0, d = (r.projects?.length ?? 0) > 0, f = (r.skills?.length ?? 0) > 0, p;
	n[2] === s ? p = n[3] : (p = s && {
		id: "summary",
		label: "Summary"
	}, n[2] = s, n[3] = p);
	let m;
	n[4] === c ? m = n[5] : (m = c && {
		id: "track-record",
		label: "Track Record"
	}, n[4] = c, n[5] = m);
	let h;
	n[6] === d ? h = n[7] : (h = d && {
		id: "systems",
		label: "Systems"
	}, n[6] = d, n[7] = h);
	let g;
	n[8] === f ? g = n[9] : (g = f && {
		id: "stack",
		label: "Stack"
	}, n[8] = f, n[9] = g);
	let _;
	n[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
		id: "contact",
		label: "Contact"
	}, n[10] = _) : _ = n[10];
	let v;
	n[11] !== p || n[12] !== m || n[13] !== h || n[14] !== g ? (v = [
		p,
		m,
		h,
		g,
		_
	].filter(_e), n[11] = p, n[12] = m, n[13] = h, n[14] = g, n[15] = v) : v = n[15];
	let b = v, x;
	n[16] === r.skills ? x = n[17] : (x = r.skills ?? [], n[16] = r.skills, n[17] = x);
	let S;
	n[18] === x ? S = n[19] : (S = x.map(ge), n[18] = x, n[19] = S);
	let w = S, T;
	n[20] === a ? T = n[21] : (T = a ? { "--ins-signal": a } : void 0, n[20] = a, n[21] = T);
	let E;
	n[22] !== r.profile.fullName || n[23] !== b ? (E = /* @__PURE__ */ l(y, {
		name: r.profile.fullName,
		entries: b
	}), n[22] = r.profile.fullName, n[23] = b, n[24] = E) : E = n[24];
	let D;
	n[25] !== r.profile || n[26] !== r.socials ? (D = /* @__PURE__ */ l(C, {
		profile: r.profile,
		socials: r.socials
	}), n[25] = r.profile, n[26] = r.socials, n[27] = D) : D = n[27];
	let O;
	n[28] === w ? O = n[29] : (O = w.length > 0 && /* @__PURE__ */ l(A, { terms: w }), n[28] = w, n[29] = O);
	let k;
	n[30] !== r.education || n[31] !== r.profile || n[32] !== s ? (k = s && /* @__PURE__ */ l(P, {
		profile: r.profile,
		education: r.education
	}), n[30] = r.education, n[31] = r.profile, n[32] = s, n[33] = k) : k = n[33];
	let j;
	n[34] !== r.experience || n[35] !== c ? (j = c && r.experience && /* @__PURE__ */ l(te, { experience: r.experience }), n[34] = r.experience, n[35] = c, n[36] = j) : j = n[36];
	let M;
	n[37] !== r.projects || n[38] !== d ? (M = d && r.projects && /* @__PURE__ */ l(U, { projects: r.projects }), n[37] = r.projects, n[38] = d, n[39] = M) : M = n[39];
	let N;
	n[40] !== r.skills || n[41] !== f ? (N = f && r.skills && /* @__PURE__ */ l(q, { skills: r.skills }), n[40] = r.skills, n[41] = f, n[42] = N) : N = n[42];
	let F;
	n[43] !== r.profile || n[44] !== r.socials ? (F = /* @__PURE__ */ l($, {
		profile: r.profile,
		socials: r.socials
	}), n[43] = r.profile, n[44] = r.socials, n[45] = F) : F = n[45];
	let I;
	return n[46] !== i || n[47] !== T || n[48] !== E || n[49] !== D || n[50] !== O || n[51] !== k || n[52] !== j || n[53] !== M || n[54] !== N || n[55] !== F ? (I = /* @__PURE__ */ u("div", {
		className: "instrument",
		"data-theme": i,
		style: T,
		children: [
			E,
			D,
			O,
			k,
			j,
			M,
			N,
			F
		]
	}), n[46] = i, n[47] = T, n[48] = E, n[49] = D, n[50] = O, n[51] = k, n[52] = j, n[53] = M, n[54] = N, n[55] = F, n[56] = I) : I = n[56], I;
}
function ge(e) {
	return e.name;
}
function _e(e) {
	return e !== !1;
}
//#endregion
export { he as default };
