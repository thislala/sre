/*! UIkit 3.13.1 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */
(function(le, he) {
    typeof exports == "object" && typeof module < "u" ? module.exports = he() : typeof define == "function" && define.amd ? define("uikit", he) : (le = typeof globalThis < "u" ? globalThis : le || self, le.UIkit = he())
})(this, function() {
    "use strict";
    const {
        hasOwnProperty: le,
        toString: he
    } = Object.prototype;

    function Et(t, e) {
        return le.call(t, e)
    }
    const Qn = /\B([A-Z])/g,
        _t = rt(t => t.replace(Qn, "-$1").toLowerCase()),
        Un = /-(\w)/g,
        jt = rt(t => t.replace(Un, ds)),
        ce = rt(t => t.length ? ds(null, t.charAt(0)) + t.slice(1) : "");

    function ds(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function it(t, e) {
        return t == null || t.startsWith == null ? void 0 : t.startsWith(e)
    }

    function kt(t, e) {
        return t == null || t.endsWith == null ? void 0 : t.endsWith(e)
    }

    function p(t, e) {
        return t == null || t.includes == null ? void 0 : t.includes(e)
    }

    function mt(t, e) {
        return t == null || t.findIndex == null ? void 0 : t.findIndex(e)
    }
    const {
        isArray: st,
        from: fs
    } = Array, {
        assign: vt
    } = Object;

    function ut(t) {
        return typeof t == "function"
    }

    function St(t) {
        return t !== null && typeof t == "object"
    }

    function Tt(t) {
        return he.call(t) === "[object Object]"
    }

    function ue(t) {
        return St(t) && t === t.window
    }

    function de(t) {
        return $i(t) === 9
    }

    function yi(t) {
        return $i(t) >= 1
    }

    function qt(t) {
        return $i(t) === 1
    }

    function $i(t) {
        return !ue(t) && St(t) && t.nodeType
    }

    function je(t) {
        return typeof t == "boolean"
    }

    function z(t) {
        return typeof t == "string"
    }

    function Vt(t) {
        return typeof t == "number"
    }

    function zt(t) {
        return Vt(t) || z(t) && !isNaN(t - parseFloat(t))
    }

    function fe(t) {
        return !(st(t) ? t.length : St(t) ? Object.keys(t).length : !1)
    }

    function V(t) {
        return t === void 0
    }

    function ki(t) {
        return je(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t
    }

    function Ct(t) {
        const e = Number(t);
        return isNaN(e) ? !1 : e
    }

    function m(t) {
        return parseFloat(t) || 0
    }

    function q(t) {
        return y(t)[0]
    }

    function y(t) {
        return t && (yi(t) ? [t] : Array.from(t).filter(yi)) || []
    }

    function Mt(t) {
        var e;
        if (ue(t)) return t;
        t = q(t);
        const i = de(t) ? t : (e = t) == null ? void 0 : e.ownerDocument;
        return (i == null ? void 0 : i.defaultView) || window
    }

    function Si(t) {
        return t ? kt(t, "ms") ? m(t) : m(t) * 1e3 : 0
    }

    function qe(t, e) {
        return t === e || St(t) && St(e) && Object.keys(t).length === Object.keys(e).length && tt(t, (i, s) => i === e[s])
    }

    function Ti(t, e, i) {
        return t.replace(new RegExp(e + "|" + i, "g"), s => s === e ? i : e)
    }

    function ge(t) {
        return t[t.length - 1]
    }

    function tt(t, e) {
        for (const i in t)
            if (e(t[i], i) === !1) return !1;
        return !0
    }

    function Ve(t, e) {
        return t.slice().sort((i, s) => {
            let {
                [e]: n = 0
            } = i, {
                [e]: r = 0
            } = s;
            return n > r ? 1 : r > n ? -1 : 0
        })
    }

    function gs(t, e) {
        const i = new Set;
        return t.filter(s => {
            let {
                [e]: n
            } = s;
            return i.has(n) ? !1 : i.add(n)
        })
    }

    function nt(t, e, i) {
        return e === void 0 && (e = 0), i === void 0 && (i = 1), Math.min(Math.max(Ct(t) || 0, e), i)
    }

    function A() {}

    function Ci() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return [
            ["bottom", "top"],
            ["right", "left"]
        ].every(s => {
            let [n, r] = s;
            return Math.min(...e.map(o => {
                let {
                    [n]: a
                } = o;
                return a
            })) - Math.max(...e.map(o => {
                let {
                    [r]: a
                } = o;
                return a
            })) > 0
        })
    }

    function Ye(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
    }
    const pe = {
        ratio(t, e, i) {
            const s = e === "width" ? "height" : "width";
            return {
                [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
                [e]: i
            }
        },
        contain(t, e) {
            return t = { ...t
            }, tt(t, (i, s) => t = t[s] > e[s] ? this.ratio(t, s, e[s]) : t), t
        },
        cover(t, e) {
            return t = this.contain(t, e), tt(t, (i, s) => t = t[s] < e[s] ? this.ratio(t, s, e[s]) : t), t
        }
    };

    function Yt(t, e, i, s) {
        i === void 0 && (i = 0), s === void 0 && (s = !1), e = y(e);
        const {
            length: n
        } = e;
        return n ? (t = zt(t) ? Ct(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : e.indexOf(q(t)), s ? nt(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1
    }

    function rt(t) {
        const e = Object.create(null);
        return i => e[i] || (e[i] = t(i))
    }
    class Ge {
        constructor() {
            this.promise = new Promise((e, i) => {
                this.reject = i, this.resolve = e
            })
        }
    }

    function k(t, e, i) {
        if (St(e)) {
            for (const n in e) k(t, n, e[n]);
            return
        }
        if (V(i)) {
            var s;
            return (s = q(t)) == null ? void 0 : s.getAttribute(e)
        } else
            for (const n of y(t)) ut(i) && (i = i.call(n, k(n, e))), i === null ? me(n, e) : n.setAttribute(e, i)
    }

    function Nt(t, e) {
        return y(t).some(i => i.hasAttribute(e))
    }

    function me(t, e) {
        const i = y(t);
        for (const s of e.split(" "))
            for (const n of i) n.removeAttribute(s)
    }

    function Z(t, e) {
        for (const i of [e, "data-" + e])
            if (Nt(t, i)) return k(t, i)
    }
    const tr = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        menuitem: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function Ii(t) {
        return y(t).some(e => tr[e.tagName.toLowerCase()])
    }

    function j(t) {
        return y(t).some(e => e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    const ve = "input,select,textarea,button";

    function Pi(t) {
        return y(t).some(e => O(e, ve))
    }
    const Xe = ve + ",a[href],[tabindex]";

    function Je(t) {
        return O(t, Xe)
    }

    function I(t) {
        var e;
        return (e = q(t)) == null ? void 0 : e.parentElement
    }

    function we(t, e) {
        return y(t).filter(i => O(i, e))
    }

    function O(t, e) {
        return y(t).some(i => i.matches(e))
    }

    function ot(t, e) {
        return it(e, ">") && (e = e.slice(1)), qt(t) ? t.closest(e) : y(t).map(i => ot(i, e)).filter(Boolean)
    }

    function H(t, e) {
        return z(e) ? O(t, e) || !!ot(t, e) : t === e || q(e).contains(q(t))
    }

    function be(t, e) {
        const i = [];
        for (; t = I(t);)(!e || O(t, e)) && i.push(t);
        return i
    }

    function N(t, e) {
        t = q(t);
        const i = t ? y(t.children) : [];
        return e ? we(i, e) : i
    }

    function Gt(t, e) {
        return e ? y(t).indexOf(q(e)) : N(I(t)).indexOf(t)
    }

    function wt(t, e) {
        return Ai(t, ms(t, e))
    }

    function xe(t, e) {
        return ye(t, ms(t, e))
    }

    function Ai(t, e) {
        return q(vs(t, e, "querySelector"))
    }

    function ye(t, e) {
        return y(vs(t, e, "querySelectorAll"))
    }
    const er = /(^|[^\\],)\s*[!>+~-]/,
        ps = rt(t => t.match(er));

    function ms(t, e) {
        return e === void 0 && (e = document), z(t) && ps(t) || de(e) ? e : e.ownerDocument
    }
    const ir = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
        sr = rt(t => t.replace(ir, "$1 *"));

    function vs(t, e, i) {
        if (e === void 0 && (e = document), !t || !z(t)) return t;
        if (t = sr(t), ps(t)) {
            const s = rr(t);
            t = "";
            for (let n of s) {
                let r = e;
                if (n[0] === "!") {
                    const o = n.substr(1).trim().split(" ");
                    if (r = ot(I(e), o[0]), n = o.slice(1).join(" ").trim(), !n.length && s.length === 1) return r
                }
                if (n[0] === "-") {
                    const o = n.substr(1).trim().split(" "),
                        a = (r || e).previousElementSibling;
                    r = O(a, n.substr(1)) ? a : null, n = o.slice(1).join(" ")
                }
                r && (t += (t ? "," : "") + or(r) + " " + n)
            }
            e = document
        }
        try {
            return e[i](t)
        } catch {
            return null
        }
    }
    const nr = /.*?[^\\](?:,|$)/g,
        rr = rt(t => t.match(nr).map(e => e.replace(/,$/, "").trim()));

    function or(t) {
        const e = [];
        for (; t.parentNode;) {
            const i = k(t, "id");
            if (i) {
                e.unshift("#" + Ei(i));
                break
            } else {
                let {
                    tagName: s
                } = t;
                s !== "HTML" && (s += ":nth-child(" + (Gt(t) + 1) + ")"), e.unshift(s), t = t.parentNode
            }
        }
        return e.join(" > ")
    }

    function Ei(t) {
        return z(t) ? CSS.escape(t) : ""
    }

    function S() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        let [s, n, r, o, a = !1] = _i(e);
        o.length > 1 && (o = lr(o)), a != null && a.self && (o = hr(o)), r && (o = ar(r, o));
        for (const l of n)
            for (const h of s) h.addEventListener(l, o, a);
        return () => Xt(s, n, o, a)
    }

    function Xt() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        let [s, n, , r, o = !1] = _i(e);
        for (const a of n)
            for (const l of s) l.removeEventListener(a, r, o)
    }

    function W() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        const [s, n, r, o, a = !1, l] = _i(e), h = S(s, n, r, u => {
            const d = !l || l(u);
            d && (h(), o(u, d))
        }, a);
        return h
    }

    function g(t, e, i) {
        return zi(t).every(s => s.dispatchEvent(Dt(e, !0, !0, i)))
    }

    function Dt(t, e, i, s) {
        return e === void 0 && (e = !0), i === void 0 && (i = !1), z(t) && (t = new CustomEvent(t, {
            bubbles: e,
            cancelable: i,
            detail: s
        })), t
    }

    function _i(t) {
        return t[0] = zi(t[0]), z(t[1]) && (t[1] = t[1].split(" ")), ut(t[2]) && t.splice(2, 0, !1), t
    }

    function ar(t, e) {
        return i => {
            const s = t[0] === ">" ? ye(t, i.currentTarget).reverse().filter(n => H(i.target, n))[0] : ot(i.target, t);
            s && (i.current = s, e.call(this, i))
        }
    }

    function lr(t) {
        return e => st(e.detail) ? t(e, ...e.detail) : t(e)
    }

    function hr(t) {
        return function(e) {
            if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e)
        }
    }

    function ws(t) {
        return t && "addEventListener" in t
    }

    function cr(t) {
        return ws(t) ? t : q(t)
    }

    function zi(t) {
        return st(t) ? t.map(cr).filter(Boolean) : z(t) ? ye(t) : ws(t) ? [t] : y(t)
    }

    function bt(t) {
        return t.pointerType === "touch" || !!t.touches
    }

    function Jt(t) {
        var e, i;
        const {
            clientX: s,
            clientY: n
        } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
        return {
            x: s,
            y: n
        }
    }

    function bs(t, e) {
        const i = {
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest,
            beforeSend: A,
            responseType: "",
            ...e
        };
        return Promise.resolve().then(() => i.beforeSend(i)).then(() => ur(t, i))
    }

    function ur(t, e) {
        return new Promise((i, s) => {
            const {
                xhr: n
            } = e;
            for (const r in e)
                if (r in n) try {
                    n[r] = e[r]
                } catch {}
            n.open(e.method.toUpperCase(), t);
            for (const r in e.headers) n.setRequestHeader(r, e.headers[r]);
            S(n, "load", () => {
                n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(vt(Error(n.statusText), {
                    xhr: n,
                    status: n.status
                }))
            }), S(n, "error", () => s(vt(Error("Network Error"), {
                xhr: n
            }))), S(n, "timeout", () => s(vt(Error("Network Timeout"), {
                xhr: n
            }))), n.send(e.data)
        })
    }

    function xs(t, e, i) {
        return new Promise((s, n) => {
            const r = new Image;
            r.onerror = o => {
                n(o)
            }, r.onload = () => {
                s(r)
            }, i && (r.sizes = i), e && (r.srcset = e), r.src = t
        })
    }
    const dr = {
        "animation-iteration-count": !0,
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        widows: !0,
        "z-index": !0,
        zoom: !0
    };

    function c(t, e, i, s) {
        s === void 0 && (s = "");
        const n = y(t);
        for (const r of n)
            if (z(e)) {
                if (e = Ke(e), V(i)) return fr(r, e);
                !i && !Vt(i) ? r.style.removeProperty(e) : r.style.setProperty(e, zt(i) && !dr[e] ? i + "px" : i, s)
            } else if (st(e)) {
            const o = Mi(r),
                a = {};
            for (const l of e) a[l] = o[Ke(l)];
            return a
        } else St(e) && (s = i, tt(e, (o, a) => c(r, a, o, s)));
        return n[0]
    }

    function Mi(t, e) {
        return Mt(t).getComputedStyle(t, e)
    }

    function fr(t, e, i) {
        return Mi(t, i)[e]
    }
    const gr = /^\s*(["'])?(.*?)\1\s*$/;

    function Ni(t) {
        return Mi(document.documentElement).getPropertyValue("--uk-" + t).replace(gr, "$2")
    }
    const Ke = rt(t => pr(t)),
        ys = ["webkit", "moz"];

    function pr(t) {
        t = _t(t);
        const {
            style: e
        } = document.documentElement;
        if (t in e) return t;
        let i = ys.length,
            s;
        for (; i--;)
            if (s = "-" + ys[i] + "-" + t, s in e) return s
    }

    function w(t) {
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
        $s(t, i, "add")
    }

    function _(t) {
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
        $s(t, i, "remove")
    }

    function Ze(t, e) {
        k(t, "class", i => (i || "").replace(new RegExp("\\b" + e + "\\b", "g"), ""))
    }

    function Di(t) {
        (arguments.length <= 1 ? void 0 : arguments[1]) && _(t, arguments.length <= 1 ? void 0 : arguments[1]), (arguments.length <= 2 ? void 0 : arguments[2]) && w(t, arguments.length <= 2 ? void 0 : arguments[2])
    }

    function T(t, e) {
        return [e] = Bi(e), !!e && y(t).some(i => i.classList.contains(e))
    }

    function F(t, e, i) {
        const s = Bi(e);
        V(i) || (i = !!i);
        for (const n of y(t))
            for (const r of s) n.classList.toggle(r, i)
    }

    function $s(t, e, i) {
        e = e.reduce((s, n) => s.concat(Bi(n)), []);
        for (const s of y(t)) s.classList[i](...e)
    }

    function Bi(t) {
        return String(t).split(/\s|,/).filter(Boolean)
    }

    function ks(t, e, i, s) {
        return i === void 0 && (i = 400), s === void 0 && (s = "linear"), Promise.all(y(t).map(n => new Promise((r, o) => {
            for (const l in e) {
                const h = c(n, l);
                h === "" && c(n, l, h)
            }
            const a = setTimeout(() => g(n, "transitionend"), i);
            W(n, "transitionend transitioncanceled", l => {
                let {
                    type: h
                } = l;
                clearTimeout(a), _(n, "uk-transition"), c(n, {
                    transitionProperty: "",
                    transitionDuration: "",
                    transitionTimingFunction: ""
                }), h === "transitioncanceled" ? o() : r(n)
            }, {
                self: !0
            }), w(n, "uk-transition"), c(n, {
                transitionProperty: Object.keys(e).map(Ke).join(","),
                transitionDuration: i + "ms",
                transitionTimingFunction: s,
                ...e
            })
        })))
    }
    const C = {
            start: ks,
            stop(t) {
                return g(t, "transitionend"), Promise.resolve()
            },
            cancel(t) {
                g(t, "transitioncanceled")
            },
            inProgress(t) {
                return T(t, "uk-transition")
            }
        },
        $e = "uk-animation-";

    function Oi(t, e, i, s, n) {
        return i === void 0 && (i = 200), Promise.all(y(t).map(r => new Promise((o, a) => {
            g(r, "animationcanceled");
            const l = setTimeout(() => g(r, "animationend"), i);
            W(r, "animationend animationcanceled", h => {
                let {
                    type: u
                } = h;
                clearTimeout(l), u === "animationcanceled" ? a() : o(r), c(r, "animationDuration", ""), Ze(r, $e + "\\S*")
            }, {
                self: !0
            }), c(r, "animationDuration", i + "ms"), w(r, e, $e + (n ? "leave" : "enter")), it(e, $e) && (s && w(r, "uk-transform-origin-" + s), n && w(r, $e + "reverse"))
        })))
    }
    const mr = new RegExp($e + "(enter|leave)"),
        dt = { in: Oi,
            out(t, e, i, s) {
                return Oi(t, e, i, s, !0)
            },
            inProgress(t) {
                return mr.test(k(t, "class"))
            },
            cancel(t) {
                g(t, "animationcanceled")
            }
        },
        It = {
            width: ["left", "right"],
            height: ["top", "bottom"]
        };

    function $(t) {
        const e = qt(t) ? q(t).getBoundingClientRect() : {
            height: L(t),
            width: Se(t),
            top: 0,
            left: 0
        };
        return {
            height: e.height,
            width: e.width,
            top: e.top,
            left: e.left,
            bottom: e.top + e.height,
            right: e.left + e.width
        }
    }

    function E(t, e) {
        const i = $(t);
        if (t) {
            const {
                scrollY: n,
                scrollX: r
            } = Mt(t), o = {
                height: n,
                width: r
            };
            for (const a in It)
                for (const l in It[a]) i[It[a][l]] += o[a]
        }
        if (!e) return i;
        const s = c(t, "position");
        tt(c(t, ["left", "top"]), (n, r) => c(t, r, e[r] - i[r] + m(s === "absolute" && n === "auto" ? Qe(t)[r] : n)))
    }

    function Qe(t) {
        let {
            top: e,
            left: i
        } = E(t);
        const {
            ownerDocument: {
                body: s,
                documentElement: n
            },
            offsetParent: r
        } = q(t);
        let o = r || n;
        for (; o && (o === s || o === n) && c(o, "position") === "static";) o = o.parentNode;
        if (qt(o)) {
            const a = E(o);
            e -= a.top + m(c(o, "borderTopWidth")), i -= a.left + m(c(o, "borderLeftWidth"))
        }
        return {
            top: e - m(c(t, "marginTop")),
            left: i - m(c(t, "marginLeft"))
        }
    }

    function ke(t) {
        const e = [0, 0];
        t = q(t);
        do
            if (e[0] += t.offsetTop, e[1] += t.offsetLeft, c(t, "position") === "fixed") {
                const i = Mt(t);
                return e[0] += i.scrollY, e[1] += i.scrollX, e
            }
        while (t = t.offsetParent);
        return e
    }
    const L = Ss("height"),
        Se = Ss("width");

    function Ss(t) {
        const e = ce(t);
        return (i, s) => {
            if (V(s)) {
                if (ue(i)) return i["inner" + e];
                if (de(i)) {
                    const n = i.documentElement;
                    return Math.max(n["offset" + e], n["scroll" + e])
                }
                return i = q(i), s = c(i, t), s = s === "auto" ? i["offset" + e] : m(s) || 0, s - Kt(i, t)
            } else return c(i, t, !s && s !== 0 ? "" : +s + Kt(i, t) + "px")
        }
    }

    function Kt(t, e, i) {
        return i === void 0 && (i = "border-box"), c(t, "boxSizing") === i ? It[e].map(ce).reduce((s, n) => s + m(c(t, "padding" + n)) + m(c(t, "border" + n + "Width")), 0) : 0
    }

    function Te(t) {
        for (const e in It)
            for (const i in It[e])
                if (It[e][i] === t) return It[e][1 - i];
        return t
    }

    function at(t, e, i, s) {
        return e === void 0 && (e = "width"), i === void 0 && (i = window), s === void 0 && (s = !1), z(t) ? wr(t).reduce((n, r) => {
            const o = xr(r);
            return o && (r = yr(o === "vh" ? L(Mt(i)) : o === "vw" ? Se(Mt(i)) : s ? i["offset" + ce(e)] : $(i)[e], r)), n + m(r)
        }, 0) : m(t)
    }
    const vr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
        wr = rt(t => t.toString().replace(/\s/g, "").match(vr) || []),
        br = /(?:v[hw]|%)$/,
        xr = rt(t => (t.match(br) || [])[0]);

    function yr(t, e) {
        return t * m(e) / 100
    }

    function Hi(t) {
        if (document.readyState !== "loading") {
            t();
            return
        }
        W(document, "DOMContentLoaded", t)
    }

    function ft(t, e) {
        var i;
        return (t == null || (i = t.tagName) == null ? void 0 : i.toLowerCase()) === e.toLowerCase()
    }

    function $r(t) {
        return Fi(t, "")
    }

    function Pt(t, e) {
        return V(e) ? v(t).innerHTML : Fi(t, e)
    }
    const Fi = Ce("replaceChildren"),
        kr = Ce("prepend"),
        Y = Ce("append"),
        Li = Ce("before"),
        Ue = Ce("after");

    function Ce(t) {
        return function(e, i) {
            var s;
            const n = y(z(i) ? Bt(i) : i);
            return (s = v(e)) == null || s[t](...n), Cs(n)
        }
    }

    function ht(t) {
        y(t).forEach(e => e.remove())
    }

    function ti(t, e) {
        for (e = q(Li(t, e)); e.firstChild;) e = e.firstChild;
        return Y(e, t), e
    }

    function Ts(t, e) {
        return y(y(t).map(i => i.hasChildNodes() ? ti(y(i.childNodes), e) : Y(i, e)))
    }

    function ei(t) {
        y(t).map(I).filter((e, i, s) => s.indexOf(e) === i).forEach(e => e.replaceWith(...e.childNodes))
    }
    const Sr = /^\s*<(\w+|!)[^>]*>/,
        Tr = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function Bt(t) {
        const e = Tr.exec(t);
        if (e) return document.createElement(e[1]);
        const i = document.createElement("div");
        return Sr.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, Cs(i.childNodes)
    }

    function Cs(t) {
        return t.length > 1 ? t : t[0]
    }

    function xt(t, e) {
        if (!!qt(t))
            for (e(t), t = t.firstElementChild; t;) {
                const i = t.nextElementSibling;
                xt(t, e), t = i
            }
    }

    function v(t, e) {
        return Is(t) ? q(Bt(t)) : Ai(t, e)
    }

    function B(t, e) {
        return Is(t) ? y(Bt(t)) : ye(t, e)
    }

    function Is(t) {
        return z(t) && it(t.trim(), "<")
    }
    const Zt = typeof window < "u",
        J = Zt && k(document.documentElement, "dir") === "rtl",
        Ot = Zt && "ontouchstart" in window,
        Qt = Zt && window.PointerEvent,
        ct = Qt ? "pointerdown" : Ot ? "touchstart" : "mousedown",
        Ut = Qt ? "pointermove" : Ot ? "touchmove" : "mousemove",
        gt = Qt ? "pointerup" : Ot ? "touchend" : "mouseup",
        Ht = Qt ? "pointerenter" : Ot ? "" : "mouseenter",
        te = Qt ? "pointerleave" : Ot ? "" : "mouseleave",
        ee = Qt ? "pointercancel" : "touchcancel",
        M = {
            reads: [],
            writes: [],
            read(t) {
                return this.reads.push(t), Wi(), t
            },
            write(t) {
                return this.writes.push(t), Wi(), t
            },
            clear(t) {
                As(this.reads, t), As(this.writes, t)
            },
            flush: Ri
        };

    function Ri(t) {
        Ps(M.reads), Ps(M.writes.splice(0)), M.scheduled = !1, (M.reads.length || M.writes.length) && Wi(t + 1)
    }
    const Cr = 4;

    function Wi(t) {
        M.scheduled || (M.scheduled = !0, t && t < Cr ? Promise.resolve().then(() => Ri(t)) : requestAnimationFrame(() => Ri(1)))
    }

    function Ps(t) {
        let e;
        for (; e = t.shift();) try {
            e()
        } catch (i) {
            console.error(i)
        }
    }

    function As(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1)
    }

    function ji() {}
    ji.prototype = {
        positions: [],
        init() {
            this.positions = [];
            let t;
            this.unbind = S(document, "mousemove", e => t = Jt(e)), this.interval = setInterval(() => {
                !t || (this.positions.push(t), this.positions.length > 5 && this.positions.shift())
            }, 50)
        },
        cancel() {
            var t;
            (t = this.unbind) == null || t.call(this), this.interval && clearInterval(this.interval)
        },
        movesTo(t) {
            if (this.positions.length < 2) return !1;
            const e = t.getBoundingClientRect(),
                {
                    left: i,
                    right: s,
                    top: n,
                    bottom: r
                } = e,
                [o] = this.positions,
                a = ge(this.positions),
                l = [o, a];
            return Ye(a, e) ? !1 : [
                [{
                    x: i,
                    y: n
                }, {
                    x: s,
                    y: r
                }],
                [{
                    x: i,
                    y: r
                }, {
                    x: s,
                    y: n
                }]
            ].some(u => {
                const d = Ir(l, u);
                return d && Ye(d, e)
            })
        }
    };

    function Ir(t, e) {
        let [{
            x: i,
            y: s
        }, {
            x: n,
            y: r
        }] = t, [{
            x: o,
            y: a
        }, {
            x: l,
            y: h
        }] = e;
        const u = (h - a) * (n - i) - (l - o) * (r - s);
        if (u === 0) return !1;
        const d = ((l - o) * (s - a) - (h - a) * (i - o)) / u;
        return d < 0 ? !1 : {
            x: i + d * (n - i),
            y: s + d * (r - s)
        }
    }

    function Ie(t, e, i, s) {
        return s === void 0 && (s = !0), qi(IntersectionObserver, t, s ? (n, r) => {
            n.some(o => o.isIntersecting) && e(n, r)
        } : e, i)
    }
    const Pr = window.ResizeObserver;

    function Es(t, e, i) {
        return i === void 0 && (i = {
            box: "border-box"
        }), Pr ? qi(ResizeObserver, t, e, i) : (Ar(), Pe.add(e), {
            disconnect() {
                Pe.delete(e)
            }
        })
    }
    let Pe;

    function Ar() {
        if (Pe) return;
        Pe = new Set;
        let t;
        const e = () => {
            if (!t) {
                t = !0, M.read(() => t = !1);
                for (const i of Pe) i()
            }
        };
        S(window, "load resize", e), S(document, "loadedmetadata load", e, !0)
    }

    function _s(t, e, i) {
        return qi(MutationObserver, t, e, i)
    }

    function qi(t, e, i, s) {
        const n = new t(i);
        for (const r of y(e)) n.observe(r, s);
        return n
    }
    const K = {};
    K.events = K.created = K.beforeConnect = K.connected = K.beforeDisconnect = K.disconnected = K.destroy = Vi, K.args = function(t, e) {
        return e !== !1 && Vi(e || t)
    }, K.update = function(t, e) {
        return Ve(Vi(t, ut(e) ? {
            read: e
        } : e), "order")
    }, K.props = function(t, e) {
        if (st(e)) {
            const i = {};
            for (const s of e) i[s] = String;
            e = i
        }
        return K.methods(t, e)
    }, K.computed = K.methods = function(t, e) {
        return e ? t ? { ...t,
            ...e
        } : e : t
    }, K.data = function(t, e, i) {
        return i ? zs(t, e, i) : e ? t ? function(s) {
            return zs(t, e, s)
        } : e : t
    };

    function zs(t, e, i) {
        return K.computed(ut(t) ? t.call(i, i) : t, ut(e) ? e.call(i, i) : e)
    }

    function Vi(t, e) {
        return t = t && !st(t) ? [t] : t, e ? t ? t.concat(e) : st(e) ? e : [e] : t
    }

    function Er(t, e) {
        return V(e) ? t : e
    }

    function ie(t, e, i) {
        const s = {};
        if (ut(e) && (e = e.options), e.extends && (t = ie(t, e.extends, i)), e.mixins)
            for (const r of e.mixins) t = ie(t, r, i);
        for (const r in t) n(r);
        for (const r in e) Et(t, r) || n(r);

        function n(r) {
            s[r] = (K[r] || Er)(t[r], e[r], i)
        }
        return s
    }

    function Ae(t, e) {
        e === void 0 && (e = []);
        try {
            return t ? it(t, "{") ? JSON.parse(t) : e.length && !p(t, ":") ? {
                [e[0]]: t
            } : t.split(";").reduce((i, s) => {
                const [n, r] = s.split(/:(.*)/);
                return n && !V(r) && (i[n.trim()] = r.trim()), i
            }, {}) : {}
        } catch {
            return {}
        }
    }

    function Ms(t) {
        if (si(t) && Yi(t, {
                func: "playVideo",
                method: "play"
            }), ii(t)) try {
            t.play().catch(A)
        } catch {}
    }

    function Ns(t) {
        si(t) && Yi(t, {
            func: "pauseVideo",
            method: "pause"
        }), ii(t) && t.pause()
    }

    function Ds(t) {
        si(t) && Yi(t, {
            func: "mute",
            method: "setVolume",
            value: 0
        }), ii(t) && (t.muted = !0)
    }

    function Bs(t) {
        return ii(t) || si(t)
    }

    function ii(t) {
        return ft(t, "video")
    }

    function si(t) {
        return ft(t, "iframe") && (Os(t) || Hs(t))
    }

    function Os(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
    }

    function Hs(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/)
    }
    async function Yi(t, e) {
        await zr(t), Fs(t, e)
    }

    function Fs(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify({
                event: "command",
                ...e
            }), "*")
        } catch {}
    }
    const Gi = "_ukPlayer";
    let _r = 0;

    function zr(t) {
        if (t[Gi]) return t[Gi];
        const e = Os(t),
            i = Hs(t),
            s = ++_r;
        let n;
        return t[Gi] = new Promise(r => {
            e && W(t, "load", () => {
                const o = () => Fs(t, {
                    event: "listening",
                    id: s
                });
                n = setInterval(o, 100), o()
            }), W(window, "message", r, !1, o => {
                let {
                    data: a
                } = o;
                try {
                    return a = JSON.parse(a), a && (e && a.id === s && a.event === "onReady" || i && Number(a.player_id) === s)
                } catch {}
            }), t.src = "" + t.src + (p(t.src, "?") ? "&" : "?") + (e ? "enablejsapi=1" : "api=1&player_id=" + s)
        }).then(() => clearInterval(n))
    }

    function Ee(t, e, i) {
        return e === void 0 && (e = 0), i === void 0 && (i = 0), j(t) ? Ci(...Lt(t).map(s => {
            const {
                top: n,
                left: r,
                bottom: o,
                right: a
            } = E(se(s));
            return {
                top: n - e,
                left: r - i,
                bottom: o + e,
                right: a + i
            }
        }).concat(E(t))) : !1
    }

    function Ft(t, e) {
        if (ue(t) || de(t) ? t = ne(t) : t = q(t), V(e)) return t.scrollTop;
        t.scrollTop = e
    }

    function Xi(t, e) {
        let {
            offset: i = 0
        } = e === void 0 ? {} : e;
        const s = j(t) ? Lt(t) : [];
        return s.reduce((a, l, h) => {
            const {
                scrollTop: u,
                scrollHeight: d,
                offsetHeight: f
            } = l, b = d - _e(l), {
                height: x,
                top: P
            } = E(s[h - 1] || t);
            let D = Math.ceil(P - E(se(l)).top - i + u);
            return i > 0 && f < x + i ? D += i : i = 0, D > b ? (i -= D - b, D = b) : D < 0 && (i -= D, D = 0), () => n(l, D - u).then(a)
        }, () => Promise.resolve())();

        function n(a, l) {
            return new Promise(h => {
                const u = a.scrollTop,
                    d = r(Math.abs(l)),
                    f = Date.now();
                (function b() {
                    const x = o(nt((Date.now() - f) / d));
                    Ft(a, u + l * x), x === 1 ? h() : requestAnimationFrame(b)
                })()
            })
        }

        function r(a) {
            return 40 * Math.pow(a, .375)
        }

        function o(a) {
            return .5 * (1 - Math.cos(Math.PI * a))
        }
    }

    function Ji(t, e, i) {
        if (e === void 0 && (e = 0), i === void 0 && (i = 0), !j(t)) return 0;
        const [s] = Lt(t, /auto|scroll/, !0), {
            scrollHeight: n,
            scrollTop: r
        } = s, o = _e(s), a = n - o, l = ke(t)[0] - ke(s)[0], h = Math.max(0, l - o + e), u = Math.min(a, l + t.offsetHeight - i);
        return nt((r - h) / (u - h))
    }

    function Lt(t, e, i) {
        e === void 0 && (e = /auto|scroll|hidden/), i === void 0 && (i = !1);
        const s = ne(t);
        let n = be(t).reverse();
        n = n.slice(n.indexOf(s) + 1);
        const r = mt(n, o => c(o, "position") === "fixed");
        return ~r && (n = n.slice(r)), [s].concat(n.filter(o => e.test(c(o, "overflow")) && (!i || o.scrollHeight > _e(o)))).reverse()
    }

    function se(t) {
        return t === ne(t) ? window : t
    }

    function _e(t) {
        return (t === ne(t) ? document.documentElement : t).clientHeight
    }

    function ne(t) {
        const {
            document: e
        } = Mt(t);
        return e.scrollingElement || e.documentElement
    }
    const ze = {
        width: ["x", "left", "right"],
        height: ["y", "top", "bottom"]
    };

    function Ls(t, e, i, s, n, r, o, a) {
        i = Ws(i), s = Ws(s);
        const l = {
            element: i,
            target: s
        };
        if (!t || !e) return l;
        const h = E(t),
            u = E(e),
            d = u;
        if (Rs(d, i, h, -1), Rs(d, s, u, 1), n = js(n, h.width, h.height), r = js(r, u.width, u.height), n.x += r.x, n.y += r.y, d.left += n.x, d.top += n.y, o) {
            let f = Lt(t).map(se);
            a && !p(f, a) && f.unshift(a), f = f.map(b => E(b)), tt(ze, (b, x) => {
                let [P, D, X] = b;
                !(o === !0 || p(o, P)) || f.some(lt => {
                    const hs = i[P] === D ? -h[x] : i[P] === X ? h[x] : 0,
                        cl = s[P] === D ? u[x] : s[P] === X ? -u[x] : 0;
                    if (d[D] < lt[D] || d[D] + h[x] > lt[X]) {
                        const We = h[x] / 2,
                            xi = s[P] === "center" ? -u[x] / 2 : 0;
                        return i[P] === "center" && (cs(We, xi) || cs(-We, -xi)) || cs(hs, cl)
                    }

                    function cs(We, xi) {
                        const us = m((d[D] + We + xi - n[P] * 2).toFixed(4));
                        if (us >= lt[D] && us + h[x] <= lt[X]) {
                            d[D] = us;
                            for (const Zn of ["element", "target"]) We && (l[Zn][P] = l[Zn][P] === ze[x][1] ? ze[x][2] : ze[x][1]);
                            return !0
                        }
                    }
                })
            })
        }
        return E(t, d), l
    }

    function Rs(t, e, i, s) {
        tt(ze, (n, r) => {
            let [o, a, l] = n;
            e[o] === l ? t[a] += i[r] * s : e[o] === "center" && (t[a] += i[r] * s / 2)
        })
    }

    function Ws(t) {
        const e = /left|center|right/,
            i = /top|center|bottom/;
        return t = (t || "").split(" "), t.length === 1 && (t = e.test(t[0]) ? t.concat("center") : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
            x: e.test(t[0]) ? t[0] : "center",
            y: i.test(t[1]) ? t[1] : "center"
        }
    }

    function js(t, e, i) {
        const [s, n] = (t || "").split(" ");
        return {
            x: s ? m(s) * (kt(s, "%") ? e / 100 : 1) : 0,
            y: n ? m(n) * (kt(n, "%") ? i / 100 : 1) : 0
        }
    }
    var Mr = Object.freeze({
        __proto__: null,
        ajax: bs,
        getImage: xs,
        transition: ks,
        Transition: C,
        animate: Oi,
        Animation: dt,
        attr: k,
        hasAttr: Nt,
        removeAttr: me,
        data: Z,
        addClass: w,
        removeClass: _,
        removeClasses: Ze,
        replaceClass: Di,
        hasClass: T,
        toggleClass: F,
        dimensions: $,
        offset: E,
        position: Qe,
        offsetPosition: ke,
        height: L,
        width: Se,
        boxModelAdjust: Kt,
        flipPosition: Te,
        toPx: at,
        ready: Hi,
        isTag: ft,
        empty: $r,
        html: Pt,
        replaceChildren: Fi,
        prepend: kr,
        append: Y,
        before: Li,
        after: Ue,
        remove: ht,
        wrapAll: ti,
        wrapInner: Ts,
        unwrap: ei,
        fragment: Bt,
        apply: xt,
        $: v,
        $$: B,
        inBrowser: Zt,
        isRtl: J,
        hasTouch: Ot,
        pointerDown: ct,
        pointerMove: Ut,
        pointerUp: gt,
        pointerEnter: Ht,
        pointerLeave: te,
        pointerCancel: ee,
        on: S,
        off: Xt,
        once: W,
        trigger: g,
        createEvent: Dt,
        toEventTargets: zi,
        isTouch: bt,
        getEventPos: Jt,
        fastdom: M,
        isVoidElement: Ii,
        isVisible: j,
        selInput: ve,
        isInput: Pi,
        selFocusable: Xe,
        isFocusable: Je,
        parent: I,
        filter: we,
        matches: O,
        closest: ot,
        within: H,
        parents: be,
        children: N,
        index: Gt,
        hasOwn: Et,
        hyphenate: _t,
        camelize: jt,
        ucfirst: ce,
        startsWith: it,
        endsWith: kt,
        includes: p,
        findIndex: mt,
        isArray: st,
        toArray: fs,
        assign: vt,
        isFunction: ut,
        isObject: St,
        isPlainObject: Tt,
        isWindow: ue,
        isDocument: de,
        isNode: yi,
        isElement: qt,
        isBoolean: je,
        isString: z,
        isNumber: Vt,
        isNumeric: zt,
        isEmpty: fe,
        isUndefined: V,
        toBoolean: ki,
        toNumber: Ct,
        toFloat: m,
        toNode: q,
        toNodes: y,
        toWindow: Mt,
        toMs: Si,
        isEqual: qe,
        swap: Ti,
        last: ge,
        each: tt,
        sortBy: Ve,
        uniqueBy: gs,
        clamp: nt,
        noop: A,
        intersectRect: Ci,
        pointInRect: Ye,
        Dimensions: pe,
        getIndex: Yt,
        memoize: rt,
        Deferred: Ge,
        MouseTracker: ji,
        observeIntersection: Ie,
        observeResize: Es,
        observeMutation: _s,
        mergeOptions: ie,
        parseOptions: Ae,
        play: Ms,
        pause: Ns,
        mute: Ds,
        isVideo: Bs,
        positionAt: Ls,
        query: wt,
        queryAll: xe,
        find: Ai,
        findAll: ye,
        escape: Ei,
        css: c,
        getCssVar: Ni,
        propName: Ke,
        isInView: Ee,
        scrollTop: Ft,
        scrollIntoView: Xi,
        scrolledOver: Ji,
        scrollParents: Lt,
        getViewport: se,
        getViewportClientHeight: _e,
        getScrollingElement: ne
    });

    function Nr(t) {
        const e = t.data;
        t.use = function(n) {
            if (!n.installed) return n.call(null, this), n.installed = !0, this
        }, t.mixin = function(n, r) {
            r = (z(r) ? t.component(r) : r) || this, r.options = ie(r.options, n)
        }, t.extend = function(n) {
            n = n || {};
            const r = this,
                o = function(l) {
                    this._init(l)
                };
            return o.prototype = Object.create(r.prototype), o.prototype.constructor = o, o.options = ie(r.options, n), o.super = r, o.extend = r.extend, o
        }, t.update = function(n, r) {
            n = n ? q(n) : document.body;
            for (const o of be(n).reverse()) s(o[e], r);
            xt(n, o => s(o[e], r))
        };
        let i;
        Object.defineProperty(t, "container", {
            get() {
                return i || document.body
            },
            set(n) {
                i = v(n)
            }
        });

        function s(n, r) {
            if (!!n)
                for (const o in n) n[o]._connected && n[o]._callUpdate(r)
        }
    }

    function Dr(t) {
        t.prototype._callHook = function(s) {
            var n;
            (n = this.$options[s]) == null || n.forEach(r => r.call(this))
        }, t.prototype._callConnected = function() {
            this._connected || (this._data = {}, this._computed = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObservers(), this._callHook("connected"), this._callUpdate())
        }, t.prototype._callDisconnected = function() {
            !this._connected || (this._callHook("beforeDisconnect"), this._disconnectObservers(), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1, delete this._watch)
        }, t.prototype._callUpdate = function(s) {
            s === void 0 && (s = "update"), !!this._connected && ((s === "update" || s === "resize") && this._callWatches(), !!this.$options.update && (this._updates || (this._updates = new Set, M.read(() => {
                this._connected && e.call(this, this._updates), delete this._updates
            })), this._updates.add(s.type || s)))
        }, t.prototype._callWatches = function() {
            if (this._watch) return;
            const s = !Et(this, "_watch");
            this._watch = M.read(() => {
                this._connected && i.call(this, s), this._watch = null
            })
        };

        function e(s) {
            for (const {
                    read: n,
                    write: r,
                    events: o = []
                } of this.$options.update) {
                if (!s.has("update") && !o.some(l => s.has(l))) continue;
                let a;
                n && (a = n.call(this, this._data, s), a && Tt(a) && vt(this._data, a)), r && a !== !1 && M.write(() => r.call(this, this._data, s))
            }
        }

        function i(s) {
            const {
                $options: {
                    computed: n
                }
            } = this, r = { ...this._computed
            };
            this._computed = {};
            for (const o in n) {
                const {
                    watch: a,
                    immediate: l
                } = n[o];
                a && (s && l || Et(r, o) && !qe(r[o], this[o])) && a.call(this, this[o], r[o])
            }
        }
    }

    function Br(t) {
        let e = 0;
        t.prototype._init = function(i) {
            i = i || {}, i.data = Lr(i, this.constructor.options), this.$options = ie(this.constructor.options, i, this), this.$el = null, this.$props = {}, this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), i.el && this.$mount(i.el)
        }, t.prototype._initData = function() {
            const {
                data: i = {}
            } = this.$options;
            for (const s in i) this.$props[s] = this[s] = i[s]
        }, t.prototype._initMethods = function() {
            const {
                methods: i
            } = this.$options;
            if (i)
                for (const s in i) this[s] = i[s].bind(this)
        }, t.prototype._initComputeds = function() {
            const {
                computed: i
            } = this.$options;
            if (this._computed = {}, i)
                for (const s in i) Or(this, s, i[s])
        }, t.prototype._initProps = function(i) {
            let s;
            i = i || qs(this.$options, this.$name);
            for (s in i) V(i[s]) || (this.$props[s] = i[s]);
            const n = [this.$options.computed, this.$options.methods];
            for (s in this.$props) s in i && Hr(n, s) && (this[s] = this.$props[s])
        }, t.prototype._initEvents = function() {
            this._events = [];
            for (const i of this.$options.events || [])
                if (Et(i, "handler")) ni(this, i);
                else
                    for (const s in i) ni(this, i[s], s)
        }, t.prototype._unbindEvents = function() {
            this._events.forEach(i => i()), delete this._events
        }, t.prototype._initObservers = function() {
            this._observers = [Wr(this)], this.$options.computed && this.registerObserver(Rr(this))
        }, t.prototype.registerObserver = function(i) {
            this._observers.push(i)
        }, t.prototype._disconnectObservers = function() {
            this._observers.forEach(i => i == null ? void 0 : i.disconnect())
        }
    }

    function qs(t, e) {
        const i = {},
            {
                args: s = [],
                props: n = {},
                el: r
            } = t;
        if (!n) return i;
        for (const a in n) {
            const l = _t(a);
            let h = Z(r, l);
            V(h) || (h = n[a] === Boolean && h === "" ? !0 : Ki(n[a], h), !(l === "target" && (!h || it(h, "_"))) && (i[a] = h))
        }
        const o = Ae(Z(r, e), s);
        for (const a in o) {
            const l = jt(a);
            n[l] !== void 0 && (i[l] = Ki(n[l], o[a]))
        }
        return i
    }

    function Or(t, e, i) {
        Object.defineProperty(t, e, {
            enumerable: !0,
            get() {
                const {
                    _computed: s,
                    $props: n,
                    $el: r
                } = t;
                return Et(s, e) || (s[e] = (i.get || i).call(t, n, r)), s[e]
            },
            set(s) {
                const {
                    _computed: n
                } = t;
                n[e] = i.set ? i.set.call(t, s) : s, V(n[e]) && delete n[e]
            }
        })
    }

    function ni(t, e, i) {
        Tt(e) || (e = {
            name: i,
            handler: e
        });
        let {
            name: s,
            el: n,
            handler: r,
            capture: o,
            passive: a,
            delegate: l,
            filter: h,
            self: u
        } = e;
        if (n = ut(n) ? n.call(t) : n || t.$el, st(n)) {
            n.forEach(d => ni(t, { ...e,
                el: d
            }, i));
            return
        }!n || h && !h.call(t) || t._events.push(S(n, s, l ? z(l) ? l : l.call(t) : null, z(r) ? t[r] : r.bind(t), {
            passive: a,
            capture: o,
            self: u
        }))
    }

    function Hr(t, e) {
        return t.every(i => !i || !Et(i, e))
    }

    function Ki(t, e) {
        return t === Boolean ? ki(e) : t === Number ? Ct(e) : t === "list" ? Fr(e) : t ? t(e) : e
    }

    function Fr(t) {
        return st(t) ? t : z(t) ? t.split(/,(?![^(]*\))/).map(e => zt(e) ? Ct(e) : ki(e.trim())) : [t]
    }

    function Lr(t, e) {
        let {
            data: i = {}
        } = t, {
            args: s = [],
            props: n = {}
        } = e;
        st(i) && (i = i.slice(0, s.length).reduce((r, o, a) => (Tt(o) ? vt(r, o) : r[s[a]] = o, r), {}));
        for (const r in i) V(i[r]) ? delete i[r] : n[r] && (i[r] = Ki(n[r], i[r]));
        return i
    }

    function Rr(t) {
        const {
            el: e
        } = t.$options, i = new MutationObserver(() => t.$emit());
        return i.observe(e, {
            childList: !0,
            subtree: !0
        }), i
    }

    function Wr(t) {
        const {
            $name: e,
            $options: i,
            $props: s
        } = t, {
            attrs: n,
            props: r,
            el: o
        } = i;
        if (!r || n === !1) return;
        const a = st(n) ? n : Object.keys(r),
            l = a.map(u => _t(u)).concat(e),
            h = new MutationObserver(u => {
                const d = qs(i, e);
                u.some(f => {
                    let {
                        attributeName: b
                    } = f;
                    const x = b.replace("data-", "");
                    return (x === e ? a : [jt(x), jt(b)]).some(P => !V(d[P]) && d[P] !== s[P])
                }) && t.$reset()
            });
        return h.observe(o, {
            attributes: !0,
            attributeFilter: l.concat(l.map(u => "data-" + u))
        }), h
    }

    function jr(t) {
        const e = t.data;
        t.prototype.$create = function(s, n, r) {
            return t[s](n, r)
        }, t.prototype.$mount = function(s) {
            const {
                name: n
            } = this.$options;
            s[e] || (s[e] = {}), !s[e][n] && (s[e][n] = this, this.$el = this.$options.el = this.$options.el || s, H(s, document) && this._callConnected())
        }, t.prototype.$reset = function() {
            this._callDisconnected(), this._callConnected()
        }, t.prototype.$destroy = function(s) {
            s === void 0 && (s = !1);
            const {
                el: n,
                name: r
            } = this.$options;
            n && this._callDisconnected(), this._callHook("destroy"), !!(n != null && n[e]) && (delete n[e][r], fe(n[e]) || delete n[e], s && ht(this.$el))
        }, t.prototype.$emit = function(s) {
            this._callUpdate(s)
        }, t.prototype.$update = function(s, n) {
            s === void 0 && (s = this.$el), t.update(s, n)
        }, t.prototype.$getComponent = t.getComponent;
        const i = rt(s => t.prefix + _t(s));
        Object.defineProperties(t.prototype, {
            $container: Object.getOwnPropertyDescriptor(t, "container"),
            $name: {
                get() {
                    return i(this.$options.name)
                }
            }
        })
    }

    function qr(t) {
        const e = t.data,
            i = {};
        t.component = function(s, n) {
            const r = _t(s);
            if (s = jt(r), !n) return Tt(i[s]) && (i[s] = t.extend(i[s])), i[s];
            t[s] = function(a, l) {
                const h = t.component(s);
                return h.options.functional ? new h({
                    data: Tt(a) ? a : [...arguments]
                }) : a ? B(a).map(u)[0] : u();

                function u(d) {
                    const f = t.getComponent(d, s);
                    if (f)
                        if (l) f.$destroy();
                        else return f;
                    return new h({
                        el: d,
                        data: l
                    })
                }
            };
            const o = Tt(n) ? { ...n
            } : n.options;
            return o.name = s, o.install == null || o.install(t, o, s), t._initialized && !o.functional && M.read(() => t[s]("[uk-" + r + "],[data-uk-" + r + "]")), i[s] = Tt(n) ? o : n
        }, t.getComponents = s => (s == null ? void 0 : s[e]) || {}, t.getComponent = (s, n) => t.getComponents(s)[n], t.connect = s => {
            if (s[e])
                for (const n in s[e]) s[e][n]._callConnected();
            for (const n of s.attributes) {
                const r = Vs(n.name);
                r && r in i && t[r](s)
            }
        }, t.disconnect = s => {
            for (const n in s[e]) s[e][n]._callDisconnected()
        }
    }
    const Vs = rt(t => it(t, "uk-") || it(t, "data-uk-") ? jt(t.replace("data-uk-", "").replace("uk-", "")) : !1),
        Q = function(t) {
            this._init(t)
        };
    Q.util = Mr, Q.data = "__uikit__", Q.prefix = "uk-", Q.options = {}, Q.version = "3.13.1", Nr(Q), Dr(Q), Br(Q), qr(Q), jr(Q);

    function Vr() {
        if (!Zt) return;
        let t = 0;
        S(document, "animationstart", e => {
            let {
                target: i
            } = e;
            (c(i, "animationName") || "").match(/^uk-.*(left|right)/) && (t++, c(document.documentElement, "overflowX", "hidden"), setTimeout(() => {
                --t || c(document.documentElement, "overflowX", "")
            }, Si(c(i, "animationDuration")) + 100))
        }, !0)
    }

    function Yr(t) {
        const {
            connect: e,
            disconnect: i
        } = t;
        if (!Zt || !window.MutationObserver) return;
        M.read(function() {
            document.body && xt(document.body, e), new MutationObserver(r => r.forEach(s)).observe(document, {
                childList: !0,
                subtree: !0
            }), new MutationObserver(r => r.forEach(n)).observe(document, {
                attributes: !0,
                subtree: !0
            }), t._initialized = !0
        });

        function s(r) {
            let {
                addedNodes: o,
                removedNodes: a
            } = r;
            for (const l of o) xt(l, e);
            for (const l of a) xt(l, i)
        }

        function n(r) {
            var o;
            let {
                target: a,
                attributeName: l
            } = r;
            const h = Vs(l);
            if (!(!h || !(h in t))) {
                if (Nt(a, l)) {
                    t[h](a);
                    return
                }(o = t.getComponent(a, h)) == null || o.$destroy()
            }
        }
    }
    var U = {
            connected() {
                !T(this.$el, this.$name) && w(this.$el, this.$name)
            }
        },
        Me = {
            methods: {
                lazyload(t, e) {
                    t === void 0 && (t = this.$el), e === void 0 && (e = this.$el), this.registerObserver(Ie(t, (i, s) => {
                        for (const n of y(ut(e) ? e() : e)) B('[loading="lazy"]', n).forEach(r => me(r, "loading"));
                        for (const n of i.filter(r => {
                                let {
                                    isIntersecting: o
                                } = r;
                                return o
                            }).map(r => {
                                let {
                                    target: o
                                } = r;
                                return o
                            })) s.unobserve(n)
                    }))
                }
            }
        },
        yt = {
            props: {
                cls: Boolean,
                animation: "list",
                duration: Number,
                origin: String,
                transition: String
            },
            data: {
                cls: !1,
                animation: [!1],
                duration: 200,
                origin: !1,
                transition: "linear",
                clsEnter: "uk-togglabe-enter",
                clsLeave: "uk-togglabe-leave",
                initProps: {
                    overflow: "",
                    height: "",
                    paddingTop: "",
                    paddingBottom: "",
                    marginTop: "",
                    marginBottom: ""
                },
                hideProps: {
                    overflow: "hidden",
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                }
            },
            computed: {
                hasAnimation(t) {
                    let {
                        animation: e
                    } = t;
                    return !!e[0]
                },
                hasTransition(t) {
                    let {
                        animation: e
                    } = t;
                    return this.hasAnimation && e[0] === !0
                }
            },
            methods: {
                toggleElement(t, e, i) {
                    return new Promise(s => Promise.all(y(t).map(n => {
                        const r = je(e) ? e : !this.isToggled(n);
                        if (!g(n, "before" + (r ? "show" : "hide"), [this])) return Promise.reject();
                        const o = (ut(i) ? i : i === !1 || !this.hasAnimation ? this._toggle : this.hasTransition ? Ys(this) : Gr(this))(n, r),
                            a = r ? this.clsEnter : this.clsLeave;
                        w(n, a), g(n, r ? "show" : "hide", [this]);
                        const l = () => {
                            _(n, a), g(n, r ? "shown" : "hidden", [this]), this.$update(n)
                        };
                        return o ? o.then(l, () => (_(n, a), Promise.reject())) : l()
                    })).then(s, A))
                },
                isToggled(t) {
                    return t === void 0 && (t = this.$el), [t] = y(t), T(t, this.clsEnter) ? !0 : T(t, this.clsLeave) ? !1 : this.cls ? T(t, this.cls.split(" ")[0]) : j(t)
                },
                _toggle(t, e) {
                    if (!t) return;
                    e = Boolean(e);
                    let i;
                    this.cls ? (i = p(this.cls, " ") || e !== T(t, this.cls), i && F(t, this.cls, p(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), B("[autofocus]", t).some(s => j(s) ? s.focus() || !0 : s.blur()), i && (g(t, "toggled", [e, this]), this.$update(t))
                }
            }
        };

    function Ys(t) {
        let {
            isToggled: e,
            duration: i,
            initProps: s,
            hideProps: n,
            transition: r,
            _toggle: o
        } = t;
        return (a, l) => {
            const h = C.inProgress(a),
                u = a.hasChildNodes() ? m(c(a.firstElementChild, "marginTop")) + m(c(a.lastElementChild, "marginBottom")) : 0,
                d = j(a) ? L(a) + (h ? 0 : u) : 0;
            C.cancel(a), e(a) || o(a, !0), L(a, ""), M.flush();
            const f = L(a) + (h ? 0 : u);
            return L(a, d), (l ? C.start(a, { ...s,
                overflow: "hidden",
                height: f
            }, Math.round(i * (1 - d / f)), r) : C.start(a, n, Math.round(i * (d / f)), r).then(() => o(a, !1))).then(() => c(a, s))
        }
    }

    function Gr(t) {
        return (e, i) => {
            dt.cancel(e);
            const {
                animation: s,
                duration: n,
                _toggle: r
            } = t;
            return i ? (r(e, !0), dt.in(e, s[0], n, t.origin)) : dt.out(e, s[1] || s[0], n, t.origin).then(() => r(e, !1))
        }
    }
    var Gs = {
        mixins: [U, Me, yt],
        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: [!0],
            collapsible: !0,
            multiple: !1,
            clsOpen: "uk-open",
            toggle: "> .uk-accordion-title",
            content: "> .uk-accordion-content",
            transition: "ease",
            offset: 0
        },
        computed: {
            items: {
                get(t, e) {
                    let {
                        targets: i
                    } = t;
                    return B(i, e)
                },
                watch(t, e) {
                    if (t.forEach(s => ri(v(this.content, s), !T(s, this.clsOpen))), e || T(t, this.clsOpen)) return;
                    const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                    i && this.toggle(i, !1)
                },
                immediate: !0
            },
            toggles(t) {
                let {
                    toggle: e
                } = t;
                return this.items.map(i => v(e, i))
            }
        },
        connected() {
            this.lazyload()
        },
        events: [{
            name: "click",
            delegate() {
                return this.targets + " " + this.$props.toggle
            },
            handler(t) {
                t.preventDefault(), this.toggle(Gt(this.toggles, t.current))
            }
        }],
        methods: {
            toggle(t, e) {
                let i = [this.items[Yt(t, this.items)]];
                const s = we(this.items, "." + this.clsOpen);
                if (!this.multiple && !p(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && !we(i, ":not(." + this.clsOpen + ")").length))
                    for (const n of i) this.toggleElement(n, !T(n, this.clsOpen), async (r, o) => {
                        F(r, this.clsOpen, o), k(v(this.$props.toggle, r), "aria-expanded", o);
                        const a = v((r._wrapper ? "> * " : "") + this.content, r);
                        if (e === !1 || !this.hasTransition) {
                            ri(a, !o);
                            return
                        }
                        if (r._wrapper || (r._wrapper = ti(a, "<div" + (o ? " hidden" : "") + ">")), ri(a, !1), await Ys(this)(r._wrapper, o), ri(a, !o), delete r._wrapper, ei(a), o) {
                            const l = v(this.$props.toggle, r);
                            M.read(() => {
                                Ee(l) || Xi(l, {
                                    offset: this.offset
                                })
                            })
                        }
                    })
            }
        }
    };

    function ri(t, e) {
        t && (t.hidden = e)
    }
    var Xr = {
            mixins: [U, yt],
            args: "animation",
            props: {
                close: String
            },
            data: {
                animation: [!0],
                selClose: ".uk-alert-close",
                duration: 150,
                hideProps: {
                    opacity: 0,
                    ...yt.data.hideProps
                }
            },
            events: [{
                name: "click",
                delegate() {
                    return this.selClose
                },
                handler(t) {
                    t.preventDefault(), this.close()
                }
            }],
            methods: {
                async close() {
                    await this.toggleElement(this.$el), this.$destroy(!0)
                }
            }
        },
        Xs = {
            args: "autoplay",
            props: {
                automute: Boolean,
                autoplay: Boolean
            },
            data: {
                automute: !1,
                autoplay: !0
            },
            connected() {
                this.inView = this.autoplay === "inview", this.inView && !Nt(this.$el, "preload") && (this.$el.preload = "none"), this.automute && Ds(this.$el), this.registerObserver(Ie(this.$el, () => this.$emit("scroll"), {}, !1))
            },
            update: {
                read() {
                    return Bs(this.$el) ? {
                        visible: j(this.$el) && c(this.$el, "visibility") !== "hidden",
                        inView: this.inView && Ee(this.$el)
                    } : !1
                },
                write(t) {
                    let {
                        visible: e,
                        inView: i
                    } = t;
                    !e || this.inView && !i ? Ns(this.$el) : (this.autoplay === !0 || this.inView && i) && Ms(this.$el)
                }
            }
        },
        $t = {
            connected() {
                var t;
                this.registerObserver(Es(((t = this.$options.resizeTargets) == null ? void 0 : t.call(this)) || this.$el, () => this.$emit("resize")))
            }
        },
        Jr = {
            mixins: [$t, Xs],
            props: {
                width: Number,
                height: Number
            },
            data: {
                automute: !0
            },
            events: {
                load() {
                    this.$emit("resize")
                }
            },
            resizeTargets() {
                return [this.$el, I(this.$el)]
            },
            update: {
                read() {
                    const t = this.$el,
                        {
                            offsetHeight: e,
                            offsetWidth: i
                        } = Kr(t) || I(t),
                        s = pe.cover({
                            width: this.width || t.naturalWidth || t.videoWidth || t.clientWidth,
                            height: this.height || t.naturalHeight || t.videoHeight || t.clientHeight
                        }, {
                            width: i + (i % 2 ? 1 : 0),
                            height: e + (e % 2 ? 1 : 0)
                        });
                    return !s.width || !s.height ? !1 : s
                },
                write(t) {
                    let {
                        height: e,
                        width: i
                    } = t;
                    c(this.$el, {
                        height: e,
                        width: i
                    })
                },
                events: ["resize"]
            }
        };

    function Kr(t) {
        for (; t = I(t);)
            if (c(t, "position") !== "static") return t
    }
    var re = {
            props: {
                container: Boolean
            },
            data: {
                container: !0
            },
            computed: {
                container(t) {
                    let {
                        container: e
                    } = t;
                    return e === !0 && this.$container || e && v(e)
                }
            }
        },
        Js = {
            props: {
                pos: String,
                offset: null,
                flip: Boolean,
                clsPos: String
            },
            data: {
                pos: "bottom-" + (J ? "right" : "left"),
                flip: !0,
                offset: !1,
                clsPos: ""
            },
            connected() {
                this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), this.dir = this.pos[0], this.align = this.pos[1]
            },
            methods: {
                positionAt(t, e, i) {
                    Ze(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
                    let {
                        offset: s
                    } = this;
                    const n = this.getAxis(),
                        r = this.pos[0],
                        o = this.pos[1];
                    if (!zt(s)) {
                        const h = v(s);
                        s = h ? E(h)[n === "x" ? "left" : "top"] - E(e)[n === "x" ? "right" : "bottom"] : 0
                    }
                    const {
                        x: a,
                        y: l
                    } = Ls(t, e, n === "x" ? Te(r) + " " + o : o + " " + Te(r), n === "x" ? r + " " + o : o + " " + r, n === "x" ? "" + (r === "left" ? -s : s) : " " + (r === "top" ? -s : s), null, this.flip, i).target;
                    this.dir = n === "x" ? a : l, this.align = n === "x" ? l : a, F(t, this.clsPos + "-" + this.dir + "-" + this.align, this.offset === !1)
                },
                getAxis() {
                    return this.dir === "top" || this.dir === "bottom" ? "y" : "x"
                }
            }
        };
    let G;
    var Ks = {
        mixins: [re, Me, Js, yt],
        args: "pos",
        props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryAlign: Boolean,
            delayShow: Number,
            delayHide: Number,
            clsDrop: String
        },
        data: {
            mode: ["click", "hover"],
            toggle: "- *",
            boundary: !0,
            boundaryAlign: !1,
            delayShow: 0,
            delayHide: 800,
            clsDrop: !1,
            animation: ["uk-animation-fade"],
            cls: "uk-open",
            container: !1
        },
        created() {
            this.tracker = new ji
        },
        connected() {
            this.clsPos = this.clsDrop = this.$props.clsDrop || "uk-" + this.$options.name, w(this.$el, this.clsDrop), this.toggle && !this.target && (this.target = this.$create("toggle", wt(this.toggle, this.$el), {
                target: this.$el,
                mode: this.mode
            }).$el, k(this.target, "aria-haspopup", !0), this.lazyload(this.target))
        },
        disconnected() {
            this.isActive() && (G = null)
        },
        events: [{
            name: "click",
            delegate() {
                return "." + this.clsDrop + "-close"
            },
            handler(t) {
                t.preventDefault(), this.hide(!1)
            }
        }, {
            name: "click",
            delegate() {
                return 'a[href^="#"]'
            },
            handler(t) {
                let {
                    defaultPrevented: e,
                    current: {
                        hash: i
                    }
                } = t;
                !e && i && !H(i, this.$el) && this.hide(!1)
            }
        }, {
            name: "beforescroll",
            handler() {
                this.hide(!1)
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t, e) {
                t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e.$el, !1)
            }
        }, {
            name: "toggleshow",
            self: !0,
            handler(t, e) {
                t.preventDefault(), this.show(e.$el)
            }
        }, {
            name: "togglehide",
            self: !0,
            handler(t) {
                t.preventDefault(), O(this.$el, ":focus,:hover") || this.hide()
            }
        }, {
            name: Ht + " focusin",
            filter() {
                return p(this.mode, "hover")
            },
            handler(t) {
                bt(t) || this.clearTimers()
            }
        }, {
            name: te + " focusout",
            filter() {
                return p(this.mode, "hover")
            },
            handler(t) {
                !bt(t) && t.relatedTarget && this.hide()
            }
        }, {
            name: "toggled",
            self: !0,
            handler(t, e) {
                !e || (this.clearTimers(), this.position())
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                G = this, this.tracker.init();
                for (const t of [S(document, ct, e => {
                        let {
                            target: i
                        } = e;
                        return !H(i, this.$el) && W(document, gt + " " + ee + " scroll", s => {
                            let {
                                defaultPrevented: n,
                                type: r,
                                target: o
                            } = s;
                            !n && r === gt && i === o && !(this.target && H(i, this.target)) && this.hide(!1)
                        }, !0)
                    }), S(document, "keydown", e => {
                        e.keyCode === 27 && this.hide(!1)
                    }), S(window, "resize", () => this.$emit("resize"))]) W(this.$el, "hide", t, {
                    self: !0
                })
            }
        }, {
            name: "beforehide",
            self: !0,
            handler() {
                this.clearTimers()
            }
        }, {
            name: "hide",
            handler(t) {
                let {
                    target: e
                } = t;
                if (this.$el !== e) {
                    G = G === null && H(e, this.$el) && this.isToggled() ? this : G;
                    return
                }
                G = this.isActive() ? null : G, this.tracker.cancel()
            }
        }],
        update: {
            write() {
                this.isToggled() && !T(this.$el, this.clsEnter) && this.position()
            },
            events: ["resize"]
        },
        methods: {
            show(t, e) {
                if (t === void 0 && (t = this.target), e === void 0 && (e = !0), this.isToggled() && t && this.target && t !== this.target && this.hide(!1), this.target = t, this.clearTimers(), !this.isActive()) {
                    if (G) {
                        if (e && G.isDelaying) {
                            this.showTimer = setTimeout(() => O(t, ":hover") && this.show(), 10);
                            return
                        }
                        let i;
                        for (; G && i !== G && !H(this.$el, G.$el);) i = G, G.hide(!1)
                    }
                    this.container && I(this.$el) !== this.container && Y(this.container, this.$el), this.showTimer = setTimeout(() => this.toggleElement(this.$el, !0), e && this.delayShow || 0)
                }
            },
            hide(t) {
                t === void 0 && (t = !0);
                const e = () => this.toggleElement(this.$el, !1, !1);
                this.clearTimers(), this.isDelaying = Zr(this.$el).some(i => this.tracker.movesTo(i)), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(e, this.delayHide) : e()
            },
            clearTimers() {
                clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
            },
            isActive() {
                return G === this
            },
            position() {
                const t = this.boundary === !0 ? window : wt(this.boundary, this.$el);
                _(this.$el, this.clsDrop + "-stack"), F(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                const e = E(t),
                    i = this.boundaryAlign ? e : E(this.target);
                if (this.align === "justify") {
                    const s = this.getAxis() === "y" ? "width" : "height";
                    c(this.$el, s, i[s])
                } else t && this.$el.offsetWidth > Math.max(e.right - i.left, i.right - e.left) && w(this.$el, this.clsDrop + "-stack");
                this.positionAt(this.$el, this.boundaryAlign ? t : this.target, t)
            }
        }
    };

    function Zr(t) {
        const e = [];
        return xt(t, i => c(i, "position") !== "static" && e.push(i)), e
    }
    var Qr = {
            mixins: [U],
            args: "target",
            props: {
                target: Boolean
            },
            data: {
                target: !1
            },
            computed: {
                input(t, e) {
                    return v(ve, e)
                },
                state() {
                    return this.input.nextElementSibling
                },
                target(t, e) {
                    let {
                        target: i
                    } = t;
                    return i && (i === !0 && I(this.input) === e && this.input.nextElementSibling || v(i, e))
                }
            },
            update() {
                var t;
                const {
                    target: e,
                    input: i
                } = this;
                if (!e) return;
                let s;
                const n = Pi(e) ? "value" : "textContent",
                    r = e[n],
                    o = (t = i.files) != null && t[0] ? i.files[0].name : O(i, "select") && (s = B("option", i).filter(a => a.selected)[0]) ? s.textContent : i.value;
                r !== o && (e[n] = o)
            },
            events: [{
                name: "change",
                handler() {
                    this.$emit()
                }
            }, {
                name: "reset",
                el() {
                    return ot(this.$el, "form")
                },
                handler() {
                    this.$emit()
                }
            }]
        },
        Zs = {
            mixins: [$t],
            props: {
                margin: String,
                firstColumn: Boolean
            },
            data: {
                margin: "uk-margin-small-top",
                firstColumn: "uk-first-column"
            },
            resizeTargets() {
                return this.$el.children
            },
            connected() {
                this.registerObserver(_s(this.$el, () => this.$reset(), {
                    childList: !0
                }))
            },
            update: {
                read() {
                    const t = Zi(this.$el.children);
                    return {
                        rows: t,
                        columns: Ur(t)
                    }
                },
                write(t) {
                    let {
                        columns: e,
                        rows: i
                    } = t;
                    for (const s of i)
                        for (const n of s) F(n, this.margin, i[0] !== s), F(n, this.firstColumn, !!~e[0].indexOf(n))
                },
                events: ["resize"]
            }
        };

    function Zi(t) {
        return Qs(t, "top", "bottom")
    }

    function Ur(t) {
        const e = [];
        for (const i of t) {
            const s = Qs(i, "left", "right");
            for (let n = 0; n < s.length; n++) e[n] = e[n] ? e[n].concat(s[n]) : s[n]
        }
        return J ? e.reverse() : e
    }

    function Qs(t, e, i) {
        const s = [
            []
        ];
        for (const n of t) {
            if (!j(n)) continue;
            let r = oi(n);
            for (let o = s.length - 1; o >= 0; o--) {
                const a = s[o];
                if (!a[0]) {
                    a.push(n);
                    break
                }
                let l;
                if (a[0].offsetParent === n.offsetParent ? l = oi(a[0]) : (r = oi(n, !0), l = oi(a[0], !0)), r[e] >= l[i] - 1 && r[e] !== l[e]) {
                    s.push([n]);
                    break
                }
                if (r[i] - 1 > l[e] || r[e] === l[e]) {
                    a.push(n);
                    break
                }
                if (o === 0) {
                    s.unshift([n]);
                    break
                }
            }
        }
        return s
    }

    function oi(t, e) {
        e === void 0 && (e = !1);
        let {
            offsetTop: i,
            offsetLeft: s,
            offsetHeight: n,
            offsetWidth: r
        } = t;
        return e && ([i, s] = ke(t)), {
            top: i,
            left: s,
            bottom: i + n,
            right: s + r
        }
    }
    var Ne = {
        connected() {
            to(this._uid, () => this.$emit("scroll"))
        },
        disconnected() {
            eo(this._uid)
        }
    };
    const ai = new Map;
    let De;

    function to(t, e) {
        De = De || S(window, "scroll", () => ai.forEach(i => i()), {
            passive: !0,
            capture: !0
        }), ai.set(t, e)
    }

    function eo(t) {
        ai.delete(t), De && !ai.size && (De(), De = null)
    }
    var io = {
        extends: Zs,
        mixins: [U, Ne],
        name: "grid",
        props: {
            masonry: Boolean,
            parallax: Number
        },
        data: {
            margin: "uk-grid-margin",
            clsStack: "uk-grid-stack",
            masonry: !1,
            parallax: 0
        },
        connected() {
            this.masonry && w(this.$el, "uk-flex-top uk-flex-wrap-top")
        },
        update: [{
            write(t) {
                let {
                    columns: e
                } = t;
                F(this.$el, this.clsStack, e.length < 2)
            },
            events: ["resize"]
        }, {
            read(t) {
                let {
                    columns: e,
                    rows: i
                } = t;
                if (!e.length || !this.masonry && !this.parallax || Us(this.$el)) return t.translates = !1, !1;
                let s = !1;
                const n = N(this.$el),
                    r = ro(e),
                    o = no(n, this.margin) * (i.length - 1),
                    a = Math.max(...r) + o;
                this.masonry && (e = e.map(h => Ve(h, "offsetTop")), s = so(i, e));
                let l = Math.abs(this.parallax);
                return l && (l = r.reduce((h, u, d) => Math.max(h, u + o + (d % 2 ? l : l / 8) - a), 0)), {
                    padding: l,
                    columns: e,
                    translates: s,
                    height: s ? a : ""
                }
            },
            write(t) {
                let {
                    height: e,
                    padding: i
                } = t;
                c(this.$el, "paddingBottom", i || ""), e !== !1 && c(this.$el, "height", e)
            },
            events: ["resize"]
        }, {
            read() {
                return this.parallax && Us(this.$el) ? !1 : {
                    scrolled: this.parallax ? Ji(this.$el) * Math.abs(this.parallax) : !1
                }
            },
            write(t) {
                let {
                    columns: e,
                    scrolled: i,
                    translates: s
                } = t;
                i === !1 && !s || e.forEach((n, r) => n.forEach((o, a) => c(o, "transform", !i && !s ? "" : "translateY(" + ((s && -s[r][a]) + (i ? r % 2 ? i : i / 8 : 0)) + "px)")))
            },
            events: ["scroll", "resize"]
        }]
    };

    function Us(t) {
        return N(t).some(e => c(e, "position") === "absolute")
    }

    function so(t, e) {
        const i = t.map(s => Math.max(...s.map(n => n.offsetHeight)));
        return e.map(s => {
            let n = 0;
            return s.map((r, o) => n += o ? i[o - 1] - s[o - 1].offsetHeight : 0)
        })
    }

    function no(t, e) {
        const [i] = t.filter(s => T(s, e));
        return m(i ? c(i, "marginTop") : c(t[0], "paddingLeft"))
    }

    function ro(t) {
        return t.map(e => e.reduce((i, s) => i + s.offsetHeight, 0))
    }
    var oo = {
        args: "target",
        props: {
            target: String,
            row: Boolean
        },
        data: {
            target: "> *",
            row: !0,
            forceHeight: !0
        },
        computed: {
            elements: {
                get(t, e) {
                    let {
                        target: i
                    } = t;
                    return B(i, e)
                },
                watch() {
                    this.$reset()
                }
            }
        },
        resizeTargets() {
            return this.elements
        },
        update: {
            read() {
                return {
                    rows: (this.row ? Zi(this.elements) : [this.elements]).map(ao)
                }
            },
            write(t) {
                let {
                    rows: e
                } = t;
                for (const {
                        heights: i,
                        elements: s
                    } of e) s.forEach((n, r) => c(n, "minHeight", i[r]))
            },
            events: ["resize"]
        }
    };

    function ao(t) {
        if (t.length < 2) return {
            heights: [""],
            elements: t
        };
        let e = t.map(tn),
            i = Math.max(...e);
        const s = t.some(r => r.style.minHeight),
            n = t.some((r, o) => !r.style.minHeight && e[o] < i);
        return s && n && (c(t, "minHeight", ""), e = t.map(tn), i = Math.max(...e)), e = t.map((r, o) => e[o] === i && m(r.style.minHeight).toFixed(2) !== i.toFixed(2) ? "" : i), {
            heights: e,
            elements: t
        }
    }

    function tn(t) {
        let e = !1;
        j(t) || (e = t.style.display, c(t, "display", "block", "important"));
        const i = $(t).height - Kt(t, "height", "content-box");
        return e !== !1 && c(t, "display", e), i
    }
    var lo = {
            mixins: [U, $t],
            props: {
                expand: Boolean,
                offsetTop: Boolean,
                offsetBottom: Boolean,
                minHeight: Number
            },
            data: {
                expand: !1,
                offsetTop: !1,
                offsetBottom: !1,
                minHeight: 0
            },
            resizeTargets() {
                return [this.$el, document.documentElement]
            },
            update: {
                read(t) {
                    let {
                        minHeight: e
                    } = t;
                    if (!j(this.$el)) return !1;
                    let i = "";
                    const s = Kt(this.$el, "height", "content-box");
                    if (this.expand) i = L(window) - ($(document.documentElement).height - $(this.$el).height) - s || "";
                    else {
                        if (i = "calc(100vh", this.offsetTop) {
                            const {
                                top: n
                            } = E(this.$el);
                            i += n > 0 && n < L(window) / 2 ? " - " + n + "px" : ""
                        }
                        this.offsetBottom === !0 ? i += " - " + $(this.$el.nextElementSibling).height + "px" : zt(this.offsetBottom) ? i += " - " + this.offsetBottom + "vh" : this.offsetBottom && kt(this.offsetBottom, "px") ? i += " - " + m(this.offsetBottom) + "px" : z(this.offsetBottom) && (i += " - " + $(wt(this.offsetBottom, this.$el)).height + "px"), i += (s ? " - " + s + "px" : "") + ")"
                    }
                    return {
                        minHeight: i,
                        prev: e
                    }
                },
                write(t) {
                    let {
                        minHeight: e
                    } = t;
                    c(this.$el, {
                        minHeight: e
                    }), this.minHeight && m(c(this.$el, "minHeight")) < this.minHeight && c(this.$el, "minHeight", this.minHeight)
                },
                events: ["resize"]
            }
        },
        en = {
            args: "src",
            props: {
                id: Boolean,
                icon: String,
                src: String,
                style: String,
                width: Number,
                height: Number,
                ratio: Number,
                class: String,
                strokeAnimation: Boolean,
                focusable: Boolean,
                attributes: "list"
            },
            data: {
                ratio: 1,
                include: ["style", "class", "focusable"],
                class: "",
                strokeAnimation: !1
            },
            beforeConnect() {
                this.class += " uk-svg"
            },
            connected() {
                !this.icon && p(this.src, "#") && ([this.src, this.icon] = this.src.split("#")), this.svg = this.getSvg().then(t => {
                    if (this._connected) {
                        const e = fo(t, this.$el);
                        return this.svgEl && e !== this.svgEl && ht(this.svgEl), this.applyAttributes(e, t), this.svgEl = e
                    }
                }, A), this.strokeAnimation && this.svg.then(t => {
                    this._connected && (nn(t), this.registerObserver(Ie(t, (e, i) => {
                        nn(t), i.disconnect()
                    })))
                })
            },
            disconnected() {
                this.svg.then(t => {
                    this._connected || (Ii(this.$el) && (this.$el.hidden = !1), ht(t), this.svgEl = null)
                }), this.svg = null
            },
            methods: {
                async getSvg() {
                    return ft(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise(t => W(this.$el, "load", () => t(this.getSvg()))) : co(await ho(this.src), this.icon) || Promise.reject("SVG not found.")
                },
                applyAttributes(t, e) {
                    for (const r in this.$options.props) p(this.include, r) && r in this && k(t, r, this[r]);
                    for (const r in this.attributes) {
                        const [o, a] = this.attributes[r].split(":", 2);
                        k(t, o, a)
                    }
                    this.id || me(t, "id");
                    const i = ["width", "height"];
                    let s = i.map(r => this[r]);
                    s.some(r => r) || (s = i.map(r => k(e, r)));
                    const n = k(e, "viewBox");
                    n && !s.some(r => r) && (s = n.split(" ").slice(2)), s.forEach((r, o) => k(t, i[o], m(r) * this.ratio || null))
                }
            }
        };
    const ho = rt(async t => t ? it(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());

    function co(t, e) {
        var i;
        return e && p(t, "<symbol") && (t = uo(t, e) || t), t = v(t.substr(t.indexOf("<svg"))), ((i = t) == null ? void 0 : i.hasChildNodes()) && t
    }
    const sn = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
        li = {};

    function uo(t, e) {
        if (!li[t]) {
            li[t] = {}, sn.lastIndex = 0;
            let i;
            for (; i = sn.exec(t);) li[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>"
        }
        return li[t][e]
    }

    function nn(t) {
        const e = rn(t);
        e && t.style.setProperty("--uk-animation-stroke", e)
    }

    function rn(t) {
        return Math.ceil(Math.max(0, ...B("[stroke]", t).map(e => {
            try {
                return e.getTotalLength()
            } catch {
                return 0
            }
        })))
    }

    function fo(t, e) {
        if (Ii(e) || ft(e, "canvas")) {
            e.hidden = !0;
            const s = e.nextElementSibling;
            return on(t, s) ? s : Ue(e, t)
        }
        const i = e.lastElementChild;
        return on(t, i) ? i : Y(e, t)
    }

    function on(t, e) {
        return ft(t, "svg") && ft(e, "svg") && an(t) === an(e)
    }

    function an(t) {
        return (t.innerHTML || new XMLSerializer().serializeToString(t).replace(/<svg.*?>(.*?)<\/svg>/g, "$1")).replace(/\s/g, "")
    }
    var go = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
        po = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
        mo = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
        vo = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
        wo = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
        bo = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
        xo = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
        yo = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
        $o = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
        ko = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
        So = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
        To = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
        Co = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
        Io = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
        Po = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
        Ao = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
    const hi = {
            spinner: Po,
            totop: Ao,
            marker: mo,
            "close-icon": go,
            "close-large": po,
            "navbar-toggle-icon": vo,
            "overlay-icon": wo,
            "pagination-next": bo,
            "pagination-previous": xo,
            "search-icon": yo,
            "search-large": $o,
            "search-navbar": ko,
            "slidenav-next": So,
            "slidenav-next-large": To,
            "slidenav-previous": Co,
            "slidenav-previous-large": Io
        },
        Qi = {
            install: Mo,
            extends: en,
            args: "icon",
            props: ["icon"],
            data: {
                include: ["focusable"]
            },
            isIcon: !0,
            beforeConnect() {
                w(this.$el, "uk-icon")
            },
            methods: {
                async getSvg() {
                    const t = No(this.icon);
                    if (!t) throw "Icon not found.";
                    return t
                }
            }
        },
        pt = {
            args: !1,
            extends: Qi,
            data: t => ({
                icon: _t(t.constructor.options.name)
            }),
            beforeConnect() {
                w(this.$el, this.$name)
            }
        },
        ln = {
            extends: pt,
            beforeConnect() {
                w(this.$el, "uk-slidenav");
                const t = this.$props.icon;
                this.icon = T(this.$el, "uk-slidenav-large") ? t + "-large" : t
            }
        },
        Eo = {
            extends: pt,
            beforeConnect() {
                this.icon = T(this.$el, "uk-search-icon") && be(this.$el, ".uk-search-large").length ? "search-large" : be(this.$el, ".uk-search-navbar").length ? "search-navbar" : this.$props.icon
            }
        },
        _o = {
            extends: pt,
            beforeConnect() {
                this.icon = "close-" + (T(this.$el, "uk-close-large") ? "large" : "icon")
            }
        },
        zo = {
            extends: pt,
            methods: {
                async getSvg() {
                    const t = await Qi.methods.getSvg.call(this);
                    return this.ratio !== 1 && c(v("circle", t), "strokeWidth", 1 / this.ratio), t
                }
            }
        },
        ci = {};

    function Mo(t) {
        t.icon.add = (e, i) => {
            const s = z(e) ? {
                [e]: i
            } : e;
            tt(s, (n, r) => {
                hi[r] = n, delete ci[r]
            }), t._initialized && xt(document.body, n => tt(t.getComponents(n), r => {
                r.$options.isIcon && r.icon in s && r.$reset()
            }))
        }
    }

    function No(t) {
        return hi[t] ? (ci[t] || (ci[t] = v((hi[Do(t)] || hi[t]).trim())), ci[t].cloneNode(!0)) : null
    }

    function Do(t) {
        return J ? Ti(Ti(t, "left", "right"), "previous", "next") : t
    }
    const Bo = "loading" in HTMLImageElement.prototype;
    var Oo = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            sources: String,
            offsetTop: String,
            offsetLeft: String,
            target: String,
            loading: String
        },
        data: {
            dataSrc: "",
            sources: !1,
            offsetTop: "50vh",
            offsetLeft: "50vw",
            target: !1,
            loading: "lazy"
        },
        connected() {
            if (this.loading !== "lazy") {
                this.load();
                return
            }
            const t = [this.$el, ...xe(this.$props.target, this.$el)];
            Bo && Be(this.$el) && (this.$el.loading = "lazy", Ui(this.$el), t.length === 1) || (Xo(this.$el), this.registerObserver(Ie(t, (e, i) => {
                this.load(), i.disconnect()
            }, {
                rootMargin: at(this.offsetTop, "height") + "px " + at(this.offsetLeft, "width") + "px"
            })))
        },
        disconnected() {
            this._data.image && (this._data.image.onload = "")
        },
        update: {
            write(t) {
                if (!this.observer || Be(this.$el)) return !1;
                const e = Z(this.$el, "data-srcset");
                if (e && window.devicePixelRatio !== 1) {
                    const i = c(this.$el, "backgroundSize");
                    (i.match(/^(auto\s?)+$/) || m(i) === t.bgSize) && (t.bgSize = Go(e, Z(this.$el, "sizes")), c(this.$el, "backgroundSize", t.bgSize + "px"))
                }
            },
            events: ["resize"]
        },
        methods: {
            load() {
                if (this._data.image) return this._data.image;
                const t = Be(this.$el) ? this.$el : Fo(this.$el, this.dataSrc, this.sources);
                return me(t, "loading"), Ui(this.$el, t.currentSrc), this._data.image = t
            }
        }
    };

    function Ui(t, e) {
        if (Be(t)) {
            const i = I(t);
            (Jo(i) ? N(i) : [t]).forEach(n => hn(n, n))
        } else e && !p(t.style.backgroundImage, e) && (c(t, "backgroundImage", "url(" + Ei(e) + ")"), g(t, Dt("load", !1)))
    }
    const Ho = ["data-src", "data-srcset", "sizes"];

    function hn(t, e) {
        Ho.forEach(i => {
            const s = Z(t, i);
            s && k(e, i.replace(/^(data-)+/, ""), s)
        })
    }

    function Fo(t, e, i) {
        const s = new Image;
        return Lo(s, i), hn(t, s), s.onload = () => {
            Ui(t, s.currentSrc)
        }, k(s, "src", e), s
    }

    function Lo(t, e) {
        if (e = Ro(e), e.length) {
            const i = Bt("<picture>");
            for (const s of e) {
                const n = Bt("<source>");
                k(n, s), Y(i, n)
            }
            Y(i, t)
        }
    }

    function Ro(t) {
        if (!t) return [];
        if (it(t, "[")) try {
            t = JSON.parse(t)
        } catch {
            t = []
        } else t = Ae(t);
        return st(t) || (t = [t]), t.filter(e => !fe(e))
    }
    const cn = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

    function Wo(t) {
        let e;
        for (cn.lastIndex = 0; e = cn.exec(t);)
            if (!e[1] || window.matchMedia(e[1]).matches) {
                e = Vo(e[2]);
                break
            }
        return e || "100vw"
    }
    const jo = /\d+(?:\w+|%)/g,
        qo = /[+-]?(\d+)/g;

    function Vo(t) {
        return it(t, "calc") ? t.slice(5, -1).replace(jo, e => at(e)).replace(/ /g, "").match(qo).reduce((e, i) => e + +i, 0) : t
    }
    const Yo = /\s+\d+w\s*(?:,|$)/g;

    function Go(t, e) {
        const i = at(Wo(e)),
            s = (t.match(Yo) || []).map(m).sort((n, r) => n - r);
        return s.filter(n => n >= i)[0] || s.pop() || ""
    }

    function Xo(t) {
        Be(t) && !Nt(t, "src") && k(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>')
    }

    function Jo(t) {
        return ft(t, "picture")
    }

    function Be(t) {
        return ft(t, "img")
    }
    var ui = {
        props: {
            media: Boolean
        },
        data: {
            media: !1
        },
        connected() {
            const t = Ko(this.media);
            this.mediaObj = window.matchMedia(t);
            const e = () => {
                this.matchMedia = this.mediaObj.matches, g(this.$el, Dt("mediachange", !1, !0, [this.mediaObj]))
            };
            this.offMediaObj = S(this.mediaObj, "change", () => {
                e(), this.$emit("resize")
            }), e()
        },
        disconnected() {
            var t;
            (t = this.offMediaObj) == null || t.call(this)
        }
    };

    function Ko(t) {
        if (z(t)) {
            if (it(t, "@")) {
                const e = "breakpoint-" + t.substr(1);
                t = m(Ni(e))
            } else if (isNaN(t)) return t
        }
        return t && zt(t) ? "(min-width: " + t + "px)" : ""
    }
    var Zo = {
        mixins: [U, ui, $t],
        props: {
            fill: String
        },
        data: {
            fill: "",
            clsWrapper: "uk-leader-fill",
            clsHide: "uk-leader-hide",
            attrFill: "data-fill"
        },
        computed: {
            fill(t) {
                let {
                    fill: e
                } = t;
                return e || Ni("leader-fill-content")
            }
        },
        connected() {
            [this.wrapper] = Ts(this.$el, '<span class="' + this.clsWrapper + '">')
        },
        disconnected() {
            ei(this.wrapper.childNodes)
        },
        update: {
            read() {
                return {
                    width: Math.trunc(this.$el.offsetWidth / 2),
                    fill: this.fill,
                    hide: !this.matchMedia
                }
            },
            write(t) {
                let {
                    width: e,
                    fill: i,
                    hide: s
                } = t;
                F(this.wrapper, this.clsHide, s), k(this.wrapper, this.attrFill, new Array(e).join(i))
            },
            events: ["resize"]
        }
    };
    const et = [];
    var ts = {
        mixins: [U, re, yt],
        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean
        },
        data: {
            cls: "uk-open",
            escClose: !0,
            bgClose: !0,
            overlay: !0,
            stack: !1
        },
        computed: {
            panel(t, e) {
                let {
                    selPanel: i
                } = t;
                return v(i, e)
            },
            transitionElement() {
                return this.panel
            },
            bgClose(t) {
                let {
                    bgClose: e
                } = t;
                return e && this.panel
            }
        },
        beforeDisconnect() {
            p(et, this) && this.toggleElement(this.$el, !1, !1)
        },
        events: [{
            name: "click",
            delegate() {
                return this.selClose
            },
            handler(t) {
                t.preventDefault(), this.hide()
            }
        }, {
            name: "toggle",
            self: !0,
            handler(t) {
                t.defaultPrevented || (t.preventDefault(), this.isToggled() === p(et, this) && this.toggle())
            }
        }, {
            name: "beforeshow",
            self: !0,
            handler(t) {
                if (p(et, this)) return !1;
                !this.stack && et.length ? (Promise.all(et.map(e => e.hide())).then(this.show), t.preventDefault()) : et.push(this)
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                const t = document.documentElement;
                Se(window) > t.clientWidth && this.overlay && c(document.body, "overflowY", "scroll"), this.stack && c(this.$el, "zIndex", m(c(this.$el, "zIndex")) + et.length), w(t, this.clsPage), this.bgClose && W(this.$el, "hide", S(document, ct, e => {
                    let {
                        target: i
                    } = e;
                    ge(et) !== this || this.overlay && !H(i, this.$el) || H(i, this.panel) || W(document, gt + " " + ee + " scroll", s => {
                        let {
                            defaultPrevented: n,
                            type: r,
                            target: o
                        } = s;
                        !n && r === gt && i === o && this.hide()
                    }, !0)
                }), {
                    self: !0
                }), this.escClose && W(this.$el, "hide", S(document, "keydown", e => {
                    e.keyCode === 27 && ge(et) === this && this.hide()
                }), {
                    self: !0
                })
            }
        }, {
            name: "shown",
            self: !0,
            handler() {
                Je(this.$el) || k(this.$el, "tabindex", "-1"), v(":focus", this.$el) || this.$el.focus()
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                p(et, this) && et.splice(et.indexOf(this), 1), et.length || c(document.body, "overflowY", ""), c(this.$el, "zIndex", ""), et.some(t => t.clsPage === this.clsPage) || _(document.documentElement, this.clsPage)
            }
        }],
        methods: {
            toggle() {
                return this.isToggled() ? this.hide() : this.show()
            },
            show() {
                return this.container && I(this.$el) !== this.container ? (Y(this.container, this.$el), new Promise(t => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, !0, un(this))
            },
            hide() {
                return this.toggleElement(this.$el, !1, un(this))
            }
        }
    };

    function un(t) {
        let {
            transitionElement: e,
            _toggle: i
        } = t;
        return (s, n) => new Promise((r, o) => W(s, "show hide", () => {
            s._reject && s._reject(), s._reject = o, i(s, n);
            const a = W(e, "transitionstart", () => {
                    W(e, "transitionend transitioncancel", r, {
                        self: !0
                    }), clearTimeout(l)
                }, {
                    self: !0
                }),
                l = setTimeout(() => {
                    a(), r()
                }, Si(c(e, "transitionDuration")))
        })).then(() => delete s._reject)
    }
    var Qo = {
        install: Uo,
        mixins: [ts],
        data: {
            clsPage: "uk-modal-page",
            selPanel: ".uk-modal-dialog",
            selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
        },
        events: [{
            name: "show",
            self: !0,
            handler() {
                T(this.panel, "uk-margin-auto-vertical") ? w(this.$el, "uk-flex") : c(this.$el, "display", "block"), L(this.$el)
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                c(this.$el, "display", ""), _(this.$el, "uk-flex")
            }
        }]
    };

    function Uo(t) {
        let {
            modal: e
        } = t;
        e.dialog = function(s, n) {
            const r = e('<div class="uk-modal"> <div class="uk-modal-dialog">' + s + "</div> </div>", n);
            return r.show(), S(r.$el, "hidden", async () => {
                await Promise.resolve(), r.$destroy(!0)
            }, {
                self: !0
            }), r
        }, e.alert = function(s, n) {
            return i(r => {
                let {
                    labels: o
                } = r;
                return '<div class="uk-modal-body">' + (z(s) ? s : Pt(s)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + o.ok + "</button> </div>"
            }, n, r => r.resolve())
        }, e.confirm = function(s, n) {
            return i(r => {
                let {
                    labels: o
                } = r;
                return '<form> <div class="uk-modal-body">' + (z(s) ? s : Pt(s)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + o.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + o.ok + "</button> </div> </form>"
            }, n, r => r.reject())
        }, e.prompt = function(s, n, r) {
            return i(o => {
                let {
                    labels: a
                } = o;
                return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (z(s) ? s : Pt(s)) + '</label> <input class="uk-input" value="' + (n || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + a.cancel + '</button> <button class="uk-button uk-button-primary">' + a.ok + "</button> </div> </form>"
            }, r, o => o.resolve(null), o => v("input", o.$el).value)
        }, e.labels = {
            ok: "Ok",
            cancel: "Cancel"
        };

        function i(s, n, r, o) {
            n = {
                bgClose: !1,
                escClose: !0,
                labels: e.labels,
                ...n
            };
            const a = e.dialog(s(n), n),
                l = new Ge;
            let h = !1;
            return S(a.$el, "submit", "form", u => {
                u.preventDefault(), l.resolve(o == null ? void 0 : o(a)), h = !0, a.hide()
            }), S(a.$el, "hide", () => !h && r(l)), l.promise.dialog = a, l.promise
        }
    }
    var ta = {
        extends: Gs,
        data: {
            targets: "> .uk-parent",
            toggle: "> a",
            content: "> ul"
        }
    };
    const dn = ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle";
    var ea = {
        mixins: [U, re],
        props: {
            dropdown: String,
            mode: "list",
            align: String,
            offset: Number,
            boundary: Boolean,
            boundaryAlign: Boolean,
            clsDrop: String,
            delayShow: Number,
            delayHide: Number,
            dropbar: Boolean,
            dropbarMode: String,
            dropbarAnchor: Boolean,
            duration: Number
        },
        data: {
            dropdown: dn,
            align: J ? "right" : "left",
            clsDrop: "uk-navbar-dropdown",
            mode: void 0,
            offset: void 0,
            delayShow: void 0,
            delayHide: void 0,
            boundaryAlign: void 0,
            flip: "x",
            boundary: !0,
            dropbar: !1,
            dropbarMode: "slide",
            dropbarAnchor: !1,
            duration: 200,
            forceHeight: !0,
            selMinHeight: dn,
            container: !1
        },
        computed: {
            boundary(t, e) {
                let {
                    boundary: i,
                    boundaryAlign: s
                } = t;
                return i === !0 || s ? e : i
            },
            dropbarAnchor(t, e) {
                let {
                    dropbarAnchor: i
                } = t;
                return wt(i, e)
            },
            pos(t) {
                let {
                    align: e
                } = t;
                return "bottom-" + e
            },
            dropbar: {
                get(t) {
                    let {
                        dropbar: e
                    } = t;
                    return e ? (e = this._dropbar || wt(e, this.$el) || v("+ .uk-navbar-dropbar", this.$el), e || (this._dropbar = v("<div></div>"))) : null
                },
                watch(t) {
                    w(t, "uk-navbar-dropbar")
                },
                immediate: !0
            },
            dropContainer(t, e) {
                return this.container || e
            },
            dropdowns: {
                get(t, e) {
                    let {
                        clsDrop: i
                    } = t;
                    const s = B("." + i, e);
                    if (this.dropContainer !== e)
                        for (const r of B("." + i, this.dropContainer)) {
                            var n;
                            const o = (n = this.getDropdown(r)) == null ? void 0 : n.target;
                            !p(s, r) && o && H(o, this.$el) && s.push(r)
                        }
                    return s
                },
                watch(t) {
                    this.$create("drop", t.filter(e => !this.getDropdown(e)), { ...this.$props,
                        boundary: this.boundary,
                        pos: this.pos,
                        offset: this.dropbar || this.offset
                    })
                },
                immediate: !0
            },
            toggles(t, e) {
                let {
                    dropdown: i
                } = t;
                return B(i, e)
            }
        },
        disconnected() {
            this.dropbar && ht(this.dropbar), delete this._dropbar
        },
        events: [{
            name: "mouseover focusin",
            delegate() {
                return this.dropdown
            },
            handler(t) {
                let {
                    current: e
                } = t;
                const i = this.getActive();
                i && p(i.mode, "hover") && i.target && !H(i.target, e) && !i.isDelaying && i.hide(!1)
            }
        }, {
            name: "keydown",
            delegate() {
                return this.dropdown
            },
            handler(t) {
                const {
                    current: e,
                    keyCode: i
                } = t, s = this.getActive();
                i === Rt.DOWN && Nt(e, "aria-expanded") && (t.preventDefault(), !s || s.target !== e ? (e.click(), W(this.dropContainer, "show", n => {
                    let {
                        target: r
                    } = n;
                    return gn(r)
                })) : gn(s.$el)), fn(t, this.toggles, s)
            }
        }, {
            name: "keydown",
            el() {
                return this.dropContainer
            },
            delegate() {
                return "." + this.clsDrop
            },
            handler(t) {
                const {
                    current: e,
                    keyCode: i
                } = t;
                if (!p(this.dropdowns, e)) return;
                const s = this.getActive(),
                    n = B(Xe, e),
                    r = mt(n, a => O(a, ":focus"));
                if (i === Rt.UP && (t.preventDefault(), r > 0 && n[r - 1].focus()), i === Rt.DOWN && (t.preventDefault(), r < n.length - 1 && n[r + 1].focus()), i === Rt.ESC) {
                    var o;
                    s == null || (o = s.target) == null || o.focus()
                }
                fn(t, this.toggles, s)
            }
        }, {
            name: "mouseleave",
            el() {
                return this.dropbar
            },
            filter() {
                return this.dropbar
            },
            handler() {
                const t = this.getActive();
                t && p(t.mode, "hover") && !this.dropdowns.some(e => O(e, ":hover")) && t.hide()
            }
        }, {
            name: "beforeshow",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler() {
                I(this.dropbar) || Ue(this.dropbarAnchor || this.$el, this.dropbar)
            }
        }, {
            name: "show",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler(t, e) {
                let {
                    $el: i,
                    dir: s
                } = e;
                !T(i, this.clsDrop) || (this.dropbarMode === "slide" && w(this.dropbar, "uk-navbar-dropbar-slide"), this.clsDrop && w(i, this.clsDrop + "-dropbar"), s === "bottom" && this.transitionTo(i.offsetHeight + m(c(i, "marginTop")) + m(c(i, "marginBottom")), i))
            }
        }, {
            name: "beforehide",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler(t, e) {
                let {
                    $el: i
                } = e;
                const s = this.getActive();
                O(this.dropbar, ":hover") && (s == null ? void 0 : s.$el) === i && !this.toggles.some(n => s.target !== n && O(n, ":focus")) && t.preventDefault()
            }
        }, {
            name: "hide",
            el() {
                return this.dropContainer
            },
            filter() {
                return this.dropbar
            },
            handler(t, e) {
                let {
                    $el: i
                } = e;
                if (!T(i, this.clsDrop)) return;
                const s = this.getActive();
                (!s || (s == null ? void 0 : s.$el) === i) && this.transitionTo(0)
            }
        }],
        methods: {
            getActive() {
                return G && H(G.target, this.$el) && G
            },
            transitionTo(t, e) {
                const {
                    dropbar: i
                } = this, s = j(i) ? L(i) : 0;
                return e = s < t && e, c(e, "clip", "rect(0," + e.offsetWidth + "px," + s + "px,0)"), L(i, s), C.cancel([e, i]), Promise.all([C.start(i, {
                    height: t
                }, this.duration), C.start(e, {
                    clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
                }, this.duration)]).catch(A).then(() => {
                    c(e, {
                        clip: ""
                    }), this.$update(i)
                })
            },
            getDropdown(t) {
                return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
            }
        }
    };

    function fn(t, e, i) {
        const {
            current: s,
            keyCode: n
        } = t, r = (i == null ? void 0 : i.target) || s, o = e.indexOf(r);
        n === Rt.LEFT && o > 0 && (i == null || i.hide(!1), e[o - 1].focus()), n === Rt.RIGHT && o < e.length - 1 && (i == null || i.hide(!1), e[o + 1].focus()), n === Rt.TAB && (r.focus(), i == null || i.hide(!1))
    }

    function gn(t) {
        if (!v(":focus", t)) {
            var e;
            (e = v(Xe, t)) == null || e.focus()
        }
    }
    const Rt = {
        TAB: 9,
        ESC: 27,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    var pn = {
        props: {
            swiping: Boolean
        },
        data: {
            swiping: !0
        },
        computed: {
            swipeTarget(t, e) {
                return e
            }
        },
        connected() {
            !this.swiping || ni(this, {
                el: this.swipeTarget,
                name: ct,
                passive: !0,
                handler(t) {
                    if (!bt(t)) return;
                    const e = Jt(t),
                        i = "tagName" in t.target ? t.target : I(t.target);
                    W(document, gt + " " + ee + " scroll", s => {
                        const {
                            x: n,
                            y: r
                        } = Jt(s);
                        (s.type !== "scroll" && i && n && Math.abs(e.x - n) > 100 || r && Math.abs(e.y - r) > 100) && setTimeout(() => {
                            g(i, "swipe"), g(i, "swipe" + ia(e.x, e.y, n, r))
                        })
                    })
                }
            })
        }
    };

    function ia(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down"
    }
    var sa = {
        mixins: [ts, pn],
        args: "mode",
        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },
        data: {
            mode: "slide",
            flip: !1,
            overlay: !1,
            clsPage: "uk-offcanvas-page",
            clsContainer: "uk-offcanvas-container",
            selPanel: ".uk-offcanvas-bar",
            clsFlip: "uk-offcanvas-flip",
            clsContainerAnimation: "uk-offcanvas-container-animation",
            clsSidebarAnimation: "uk-offcanvas-bar-animation",
            clsMode: "uk-offcanvas",
            clsOverlay: "uk-offcanvas-overlay",
            selClose: ".uk-offcanvas-close",
            container: !1
        },
        computed: {
            clsFlip(t) {
                let {
                    flip: e,
                    clsFlip: i
                } = t;
                return e ? i : ""
            },
            clsOverlay(t) {
                let {
                    overlay: e,
                    clsOverlay: i
                } = t;
                return e ? i : ""
            },
            clsMode(t) {
                let {
                    mode: e,
                    clsMode: i
                } = t;
                return i + "-" + e
            },
            clsSidebarAnimation(t) {
                let {
                    mode: e,
                    clsSidebarAnimation: i
                } = t;
                return e === "none" || e === "reveal" ? "" : i
            },
            clsContainerAnimation(t) {
                let {
                    mode: e,
                    clsContainerAnimation: i
                } = t;
                return e !== "push" && e !== "reveal" ? "" : i
            },
            transitionElement(t) {
                let {
                    mode: e
                } = t;
                return e === "reveal" ? I(this.panel) : this.panel
            }
        },
        update: {
            read() {
                this.isToggled() && !j(this.$el) && this.hide()
            },
            events: ["resize"]
        },
        events: [{
            name: "click",
            delegate() {
                return 'a[href^="#"]'
            },
            handler(t) {
                let {
                    current: {
                        hash: e
                    },
                    defaultPrevented: i
                } = t;
                !i && e && v(e, document.body) && this.hide()
            }
        }, {
            name: "touchstart",
            passive: !0,
            el() {
                return this.panel
            },
            handler(t) {
                let {
                    targetTouches: e
                } = t;
                e.length === 1 && (this.clientY = e[0].clientY)
            }
        }, {
            name: "touchmove",
            self: !0,
            passive: !1,
            filter() {
                return this.overlay
            },
            handler(t) {
                t.cancelable && t.preventDefault()
            }
        }, {
            name: "touchmove",
            passive: !1,
            el() {
                return this.panel
            },
            handler(t) {
                if (t.targetTouches.length !== 1) return;
                const e = t.targetTouches[0].clientY - this.clientY,
                    {
                        scrollTop: i,
                        scrollHeight: s,
                        clientHeight: n
                    } = this.panel;
                (n >= s || i === 0 && e > 0 || s - i <= n && e < 0) && t.cancelable && t.preventDefault()
            }
        }, {
            name: "show",
            self: !0,
            handler() {
                this.mode === "reveal" && !T(I(this.panel), this.clsMode) && (ti(this.panel, "<div>"), w(I(this.panel), this.clsMode)), c(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), w(document.body, this.clsContainer, this.clsFlip), c(document.body, "touch-action", "pan-y pinch-zoom"), c(this.$el, "display", "block"), w(this.$el, this.clsOverlay), w(this.panel, this.clsSidebarAnimation, this.mode !== "reveal" ? this.clsMode : ""), L(document.body), w(document.body, this.clsContainerAnimation), this.clsContainerAnimation && na()
            }
        }, {
            name: "hide",
            self: !0,
            handler() {
                _(document.body, this.clsContainerAnimation), c(document.body, "touch-action", "")
            }
        }, {
            name: "hidden",
            self: !0,
            handler() {
                this.clsContainerAnimation && ra(), this.mode === "reveal" && ei(this.panel), _(this.panel, this.clsSidebarAnimation, this.clsMode), _(this.$el, this.clsOverlay), c(this.$el, "display", ""), _(document.body, this.clsContainer, this.clsFlip), c(document.documentElement, "overflowY", "")
            }
        }, {
            name: "swipeLeft swipeRight",
            handler(t) {
                this.isToggled() && kt(t.type, "Left") ^ this.flip && this.hide()
            }
        }]
    };

    function na() {
        mn().content += ",user-scalable=0"
    }

    function ra() {
        const t = mn();
        t.content = t.content.replace(/,user-scalable=0$/, "")
    }

    function mn() {
        return v('meta[name="viewport"]', document.head) || Y(document.head, '<meta name="viewport">')
    }
    var oa = {
            mixins: [U, $t],
            props: {
                selContainer: String,
                selContent: String,
                minHeight: Number
            },
            data: {
                selContainer: ".uk-modal",
                selContent: ".uk-modal-dialog",
                minHeight: 150
            },
            computed: {
                container(t, e) {
                    let {
                        selContainer: i
                    } = t;
                    return ot(e, i)
                },
                content(t, e) {
                    let {
                        selContent: i
                    } = t;
                    return ot(e, i)
                }
            },
            resizeTargets() {
                return [this.container, this.content]
            },
            update: {
                read() {
                    return !this.content || !this.container || !j(this.$el) ? !1 : {
                        max: Math.max(this.minHeight, L(this.container) - ($(this.content).height - L(this.$el)))
                    }
                },
                write(t) {
                    let {
                        max: e
                    } = t;
                    c(this.$el, {
                        minHeight: this.minHeight,
                        maxHeight: e
                    })
                },
                events: ["resize"]
            }
        },
        aa = {
            mixin: [$t],
            props: ["width", "height"],
            resizeTargets() {
                return [this.$el, I(this.$el)]
            },
            connected() {
                w(this.$el, "uk-responsive-width")
            },
            update: {
                read() {
                    return j(this.$el) && this.width && this.height ? {
                        width: Se(I(this.$el)),
                        height: this.height
                    } : !1
                },
                write(t) {
                    L(this.$el, pe.contain({
                        height: this.height,
                        width: this.width
                    }, t).height)
                },
                events: ["resize"]
            }
        },
        la = {
            props: {
                offset: Number
            },
            data: {
                offset: 0
            },
            methods: {
                async scrollTo(t) {
                    t = t && v(t) || document.body, g(this.$el, "beforescroll", [this, t]) && (await Xi(t, {
                        offset: this.offset
                    }), g(this.$el, "scrolled", [this, t]))
                }
            },
            events: {
                click(t) {
                    t.defaultPrevented || (t.preventDefault(), this.scrollTo(vn(this.$el)))
                }
            }
        };

    function vn(t) {
        return document.getElementById(decodeURIComponent(t.hash).substring(1))
    }
    const At = "_ukScrollspy";
    var ha = {
            mixins: [Ne],
            args: "cls",
            props: {
                cls: String,
                target: String,
                hidden: Boolean,
                offsetTop: Number,
                offsetLeft: Number,
                repeat: Boolean,
                delay: Number
            },
            data: () => ({
                cls: "",
                target: !1,
                hidden: !0,
                offsetTop: 0,
                offsetLeft: 0,
                repeat: !1,
                delay: 0,
                inViewClass: "uk-scrollspy-inview"
            }),
            computed: {
                elements: {
                    get(t, e) {
                        let {
                            target: i
                        } = t;
                        return i ? B(i, e) : [e]
                    },
                    watch(t) {
                        this.hidden && c(we(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden")
                    },
                    immediate: !0
                }
            },
            disconnected() {
                for (const e of this.elements) {
                    var t;
                    _(e, this.inViewClass, ((t = e[At]) == null ? void 0 : t.cls) || ""), delete e[At]
                }
            },
            update: [{
                read() {
                    for (const t of this.elements) t[At] || (t[At] = {
                        cls: Z(t, "uk-scrollspy-class") || this.cls
                    }), !(!this.repeat && t[At].show) && (t[At].show = Ee(t, this.offsetTop, this.offsetLeft))
                },
                write(t) {
                    for (const e of this.elements) {
                        const i = e[At];
                        i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(() => new Promise(s => setTimeout(s, this.delay))).then(() => {
                            this.toggle(e, !0), setTimeout(() => {
                                i.queued = !1, this.$emit()
                            }, 300)
                        })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1)
                    }
                },
                events: ["scroll", "resize"]
            }],
            methods: {
                toggle(t, e) {
                    const i = t[At];
                    if (i.off == null || i.off(), c(t, "visibility", !e && this.hidden ? "hidden" : ""), F(t, this.inViewClass, e), F(t, i.cls), /\buk-animation-/.test(i.cls)) {
                        const s = () => Ze(t, "uk-animation-[\\w-]+");
                        e ? i.off = W(t, "animationcancel animationend", s) : s()
                    }
                    g(t, e ? "inview" : "outview"), i.inview = e, this.$update(t)
                }
            }
        },
        ca = {
            mixins: [Ne],
            props: {
                cls: String,
                closest: String,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number
            },
            data: {
                cls: "uk-active",
                closest: !1,
                scroll: !1,
                overflow: !0,
                offset: 0
            },
            computed: {
                links: {
                    get(t, e) {
                        return B('a[href^="#"]', e).filter(i => i.hash)
                    },
                    watch(t) {
                        this.scroll && this.$create("scroll", t, {
                            offset: this.offset || 0
                        })
                    },
                    immediate: !0
                },
                elements(t) {
                    let {
                        closest: e
                    } = t;
                    return ot(this.links, e || "*")
                }
            },
            update: [{
                read() {
                    const t = this.links.map(vn).filter(Boolean),
                        {
                            length: e
                        } = t;
                    if (!e || !j(this.$el)) return !1;
                    const [i] = Lt(t, /auto|scroll/, !0), {
                        scrollTop: s,
                        scrollHeight: n
                    } = i, r = n - _e(i);
                    let o = !1;
                    if (s === r) o = e - 1;
                    else {
                        for (const a in t) {
                            if (E(t[a]).top - E(se(i)).top - this.offset > 0) break;
                            o = +a
                        }
                        o === !1 && this.overflow && (o = 0)
                    }
                    return {
                        active: o
                    }
                },
                write(t) {
                    let {
                        active: e
                    } = t;
                    const i = e !== !1 && !T(this.elements[e], this.cls);
                    this.links.forEach(s => s.blur());
                    for (const s in this.elements) F(this.elements[s], this.cls, +s === e);
                    i && g(this.$el, "active", [e, this.elements[e]])
                },
                events: ["scroll", "resize"]
            }]
        },
        ua = {
            mixins: [U, ui, $t, Ne],
            props: {
                position: String,
                top: null,
                bottom: Boolean,
                offset: String,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                clsBelow: String,
                selTarget: String,
                showOnUp: Boolean,
                targetOffset: Number
            },
            data: {
                position: "top",
                top: 0,
                bottom: !1,
                offset: 0,
                animation: "",
                clsActive: "uk-active",
                clsInactive: "",
                clsFixed: "uk-sticky-fixed",
                clsBelow: "uk-sticky-below",
                selTarget: "",
                showOnUp: !1,
                targetOffset: !1
            },
            computed: {
                selTarget(t, e) {
                    let {
                        selTarget: i
                    } = t;
                    return i && v(i, e) || e
                }
            },
            resizeTargets() {
                return document.documentElement
            },
            connected() {
                this.placeholder = v("+ .uk-sticky-placeholder", this.$el) || v('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1)
            },
            disconnected() {
                this.isFixed && (this.hide(), _(this.selTarget, this.clsInactive)), ht(this.placeholder), this.placeholder = null
            },
            events: [{
                name: "load hashchange popstate",
                el() {
                    return window
                },
                filter() {
                    return this.targetOffset !== !1
                },
                handler() {
                    !location.hash || Ft(window) === 0 || M.read(() => {
                        const t = E(v(location.hash)),
                            e = E(this.$el);
                        this.isFixed && Ci(t, e) && Ft(window, t.top - e.height - at(this.targetOffset, "height") - at(this.offset, "height"))
                    })
                }
            }],
            update: [{
                read(t, e) {
                    let {
                        height: i,
                        margin: s
                    } = t;
                    if (this.inactive = !this.matchMedia || !j(this.$el), this.inactive) return !1;
                    const n = this.isActive && e.has("resize");
                    n && (c(this.selTarget, "transition", "0s"), this.hide()), this.isActive || (i = E(this.$el).height, s = c(this.$el, "margin")), n && (this.show(), M.write(() => c(this.selTarget, "transition", "")));
                    const r = this.isFixed ? this.placeholder : this.$el,
                        o = L(window);
                    let a = this.position;
                    a === "auto" && i > o && (a = "bottom");
                    let l = at(this.offset, "height", r);
                    a === "bottom" && (l += o - i);
                    const h = Math.max(0, i + l - o),
                        u = E(r).top,
                        d = wn(this.top, this.$el, u),
                        f = wn(this.bottom, this.$el, u + i, !0),
                        b = Math.max(d, u) - l,
                        x = f ? f - E(this.$el).height + h - l : ne(this.$el).scrollHeight - o;
                    return {
                        start: b,
                        end: x,
                        offset: l,
                        overflow: h,
                        topOffset: u,
                        height: i,
                        margin: s,
                        width: $(r).width,
                        top: ke(r)[0]
                    }
                },
                write(t) {
                    let {
                        height: e,
                        margin: i
                    } = t;
                    const {
                        placeholder: s
                    } = this;
                    c(s, {
                        height: e,
                        margin: i
                    }), H(s, document) || (Ue(this.$el, s), s.hidden = !0)
                },
                events: ["resize"]
            }, {
                read(t) {
                    let {
                        scroll: e = 0,
                        dir: i = "down",
                        overflow: s,
                        overflowScroll: n = 0,
                        start: r,
                        end: o
                    } = t;
                    const a = Ft(window);
                    return {
                        dir: e <= a ? "down" : "up",
                        prevDir: i,
                        scroll: a,
                        prevScroll: e,
                        offsetParentTop: E(this.$el.offsetParent).top,
                        overflowScroll: nt(n + nt(a, r, o) - nt(e, r, o), 0, s)
                    }
                },
                write(t, e) {
                    const i = e.has("scroll"),
                        {
                            initTimestamp: s = 0,
                            dir: n,
                            prevDir: r,
                            scroll: o,
                            prevScroll: a = 0,
                            top: l,
                            start: h,
                            topOffset: u,
                            height: d
                        } = t;
                    if (o < 0 || o === a && i || this.showOnUp && !i && !this.isFixed) return;
                    const f = Date.now();
                    if ((f - s > 300 || n !== r) && (t.initScroll = o, t.initTimestamp = f), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - o) <= 30 && Math.abs(a - o) <= 10))
                        if (this.inactive || o < h || this.showOnUp && (o <= h || n === "down" && i || n === "up" && !this.isFixed && o <= u + d)) {
                            if (!this.isFixed) {
                                dt.inProgress(this.$el) && l > o && (dt.cancel(this.$el), this.hide());
                                return
                            }
                            this.isFixed = !1, this.animation && o > u ? (dt.cancel(this.$el), dt.out(this.$el, this.animation).then(() => this.hide(), A)) : this.hide()
                        } else this.isFixed ? this.update() : this.animation && o > u ? (dt.cancel(this.$el), this.show(), dt.in(this.$el, this.animation).catch(A)) : this.show()
                },
                events: ["resize", "scroll"]
            }],
            methods: {
                show() {
                    this.isFixed = !0, this.update(), this.placeholder.hidden = !1
                },
                hide() {
                    this.setActive(!1), _(this.$el, this.clsFixed, this.clsBelow), c(this.$el, {
                        position: "",
                        top: "",
                        width: ""
                    }), this.placeholder.hidden = !0
                },
                update() {
                    let {
                        width: t,
                        scroll: e = 0,
                        overflow: i,
                        overflowScroll: s = 0,
                        start: n,
                        end: r,
                        offset: o,
                        topOffset: a,
                        height: l,
                        offsetParentTop: h
                    } = this._data;
                    const u = n !== 0 || e > n;
                    let d = "fixed";
                    e > r && (o += r - h, d = "absolute"), i && (o -= s), c(this.$el, {
                        position: d,
                        top: o + "px",
                        width: t
                    }), this.setActive(u), F(this.$el, this.clsBelow, e > a + l), w(this.$el, this.clsFixed)
                },
                setActive(t) {
                    const e = this.active;
                    this.active = t, t ? (Di(this.selTarget, this.clsInactive, this.clsActive), e !== t && g(this.$el, "active")) : (Di(this.selTarget, this.clsActive, this.clsInactive), e !== t && g(this.$el, "inactive"))
                }
            }
        };

    function wn(t, e, i, s) {
        if (!t) return 0;
        if (z(t) && t.match(/^-?\d/)) return i + at(t); {
            const n = t === !0 ? I(e) : wt(t, e);
            return E(n).bottom - (s && n && H(e, n) ? m(c(n, "paddingBottom")) : 0)
        }
    }
    var bn = {
            mixins: [Me, pn, yt],
            args: "connect",
            props: {
                connect: String,
                toggle: String,
                itemNav: String,
                active: Number
            },
            data: {
                connect: "~.uk-switcher",
                toggle: "> * > :first-child",
                itemNav: !1,
                active: 0,
                cls: "uk-active",
                attrItem: "uk-switcher-item"
            },
            computed: {
                connects: {
                    get(t, e) {
                        let {
                            connect: i
                        } = t;
                        return xe(i, e)
                    },
                    watch(t) {
                        this.swiping && c(t, "touch-action", "pan-y pinch-zoom");
                        const e = this.index();
                        this.connects.forEach(i => N(i).forEach((s, n) => F(s, this.cls, n === e)))
                    },
                    immediate: !0
                },
                toggles: {
                    get(t, e) {
                        let {
                            toggle: i
                        } = t;
                        return B(i, e).filter(s => !O(s, ".uk-disabled *, .uk-disabled, [disabled]"))
                    },
                    watch(t) {
                        const e = this.index();
                        this.show(~e ? e : t[this.active] || t[0])
                    },
                    immediate: !0
                },
                children() {
                    return N(this.$el).filter(t => this.toggles.some(e => H(e, t)))
                },
                swipeTarget() {
                    return this.connects
                }
            },
            connected() {
                this.lazyload(this.$el, this.connects), Hi(() => this.$emit())
            },
            events: [{
                name: "click",
                delegate() {
                    return this.toggle
                },
                handler(t) {
                    t.preventDefault(), this.show(t.current)
                }
            }, {
                name: "click",
                el() {
                    return this.connects.concat(this.itemNav ? xe(this.itemNav, this.$el) : [])
                },
                delegate() {
                    return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                },
                handler(t) {
                    t.preventDefault(), this.show(Z(t.current, this.attrItem))
                }
            }, {
                name: "swipeRight swipeLeft",
                filter() {
                    return this.swiping
                },
                el() {
                    return this.connects
                },
                handler(t) {
                    let {
                        type: e
                    } = t;
                    this.show(kt(e, "Left") ? "next" : "previous")
                }
            }],
            methods: {
                index() {
                    return mt(this.children, t => T(t, this.cls))
                },
                show(t) {
                    const e = this.index(),
                        i = Yt(this.children[Yt(t, this.toggles, e)], N(this.$el));
                    e !== i && (N(this.$el).forEach((s, n) => {
                        F(s, this.cls, i === n), k(this.toggles[n], "aria-expanded", i === n)
                    }), this.connects.forEach(async s => {
                        let {
                            children: n
                        } = s;
                        await this.toggleElement(y(n).filter(r => T(r, this.cls)), !1, e >= 0), await this.toggleElement(n[i], !0, e >= 0)
                    }))
                }
            }
        },
        da = {
            mixins: [U],
            extends: bn,
            props: {
                media: Boolean
            },
            data: {
                media: 960,
                attrItem: "uk-tab-item"
            },
            connected() {
                const t = T(this.$el, "uk-tab-left") ? "uk-tab-left" : T(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
                t && this.$create("toggle", this.$el, {
                    cls: t,
                    mode: "media",
                    media: this.media
                })
            }
        };
    const fa = 32;
    var ga = {
            mixins: [Me, ui, yt],
            args: "target",
            props: {
                href: String,
                target: null,
                mode: "list",
                queued: Boolean
            },
            data: {
                href: !1,
                target: !1,
                mode: "click",
                queued: !0
            },
            computed: {
                target: {
                    get(t, e) {
                        let {
                            href: i,
                            target: s
                        } = t;
                        return s = xe(s || i, e), s.length && s || [e]
                    },
                    watch() {
                        this.updateAria()
                    },
                    immediate: !0
                }
            },
            connected() {
                !p(this.mode, "media") && !Je(this.$el) && k(this.$el, "tabindex", "0"), this.lazyload(this.$el, this.target), Hi(() => this.$emit())
            },
            events: [{
                name: ct,
                filter() {
                    return p(this.mode, "hover")
                },
                handler(t) {
                    !bt(t) || this._showState || (g(this.$el, "focus"), W(document, ct, () => g(this.$el, "blur"), !0, e => !H(e.target, this.$el)), p(this.mode, "click") && (this._preventClick = !0))
                }
            }, {
                name: Ht + " " + te + " focus blur",
                filter() {
                    return p(this.mode, "hover")
                },
                handler(t) {
                    if (bt(t)) return;
                    const e = p([Ht, "focus"], t.type),
                        i = k(this.$el, "aria-expanded");
                    if (!(!e && (t.type === te && O(this.$el, ":focus") || t.type === "blur" && O(this.$el, ":hover")))) {
                        if (this._showState && e === (i !== this._showState)) {
                            e || (this._showState = null);
                            return
                        }
                        this._showState = e ? i : null, this.toggle("toggle" + (e ? "show" : "hide"))
                    }
                }
            }, {
                name: "keydown",
                filter() {
                    return p(this.mode, "click") && !ft(this.$el, "input")
                },
                handler(t) {
                    t.keyCode === fa && (t.preventDefault(), this.$el.click())
                }
            }, {
                name: "click",
                filter() {
                    return p(this.mode, "click")
                },
                handler(t) {
                    if (this._preventClick) return this._preventClick = null;
                    let e;
                    (ot(t.target, 'a[href="#"], a[href=""]') || (e = ot(t.target, "a[href]")) && (k(this.$el, "aria-expanded") !== "true" || e.hash && O(this.target, e.hash))) && t.preventDefault(), this.toggle()
                }
            }, {
                name: "toggled",
                self: !0,
                el() {
                    return this.target
                },
                handler(t, e) {
                    t.target === this.target[0] && this.updateAria(e)
                }
            }, {
                name: "mediachange",
                filter() {
                    return p(this.mode, "media")
                },
                el() {
                    return this.target
                },
                handler(t, e) {
                    e.matches ^ this.isToggled(this.target) && this.toggle()
                }
            }],
            methods: {
                async toggle(t) {
                    if (!g(this.target, t || "toggle", [this])) return;
                    if (!this.queued) return this.toggleElement(this.target);
                    const e = this.target.filter(s => T(s, this.clsLeave));
                    if (e.length) {
                        for (const s of this.target) {
                            const n = p(e, s);
                            this.toggleElement(s, n, n)
                        }
                        return
                    }
                    const i = this.target.filter(this.isToggled);
                    await this.toggleElement(i, !1), await this.toggleElement(this.target.filter(s => !p(i, s)), !0)
                },
                updateAria(t) {
                    p(this.mode, "media") || k(this.$el, "aria-expanded", je(t) ? t : this.isToggled(this.target))
                }
            }
        },
        pa = Object.freeze({
            __proto__: null,
            Accordion: Gs,
            Alert: Xr,
            Cover: Jr,
            Drop: Ks,
            Dropdown: Ks,
            FormCustom: Qr,
            Grid: io,
            HeightMatch: oo,
            HeightViewport: lo,
            Icon: Qi,
            Img: Oo,
            Leader: Zo,
            Margin: Zs,
            Modal: Qo,
            Nav: ta,
            Navbar: ea,
            Offcanvas: sa,
            OverflowAuto: oa,
            Responsive: aa,
            Scroll: la,
            Scrollspy: ha,
            ScrollspyNav: ca,
            Sticky: ua,
            Svg: en,
            Switcher: bn,
            Tab: da,
            Toggle: ga,
            Video: Xs,
            Close: _o,
            Spinner: zo,
            SlidenavNext: ln,
            SlidenavPrevious: ln,
            SearchIcon: Eo,
            Marker: pt,
            NavbarToggleIcon: pt,
            OverlayIcon: pt,
            PaginationNext: pt,
            PaginationPrevious: pt,
            Totop: pt
        });
    tt(pa, (t, e) => Q.component(e, t)), Q.use(Vr), Yr(Q);
    const ma = ["days", "hours", "minutes", "seconds"];
    var va = {
        mixins: [U],
        props: {
            date: String,
            clsWrapper: String
        },
        data: {
            date: "",
            clsWrapper: ".uk-countdown-%unit%"
        },
        connected() {
            this.date = Date.parse(this.$props.date), this.start()
        },
        disconnected() {
            this.stop()
        },
        events: [{
            name: "visibilitychange",
            el() {
                return document
            },
            handler() {
                document.hidden ? this.stop() : this.start()
            }
        }],
        methods: {
            start() {
                this.stop(), this.update(), this.timer = setInterval(this.update, 1e3)
            },
            stop() {
                clearInterval(this.timer)
            },
            update() {
                const t = wa(this.date);
                (!this.date || t.total <= 0) && (this.stop(), t.days = t.hours = t.minutes = t.seconds = 0);
                for (const e of ma) {
                    const i = v(this.clsWrapper.replace("%unit%", e), this.$el);
                    if (!i) continue;
                    let s = String(Math.trunc(t[e]));
                    s = s.length < 2 ? "0" + s : s, i.textContent !== s && (s = s.split(""), s.length !== i.children.length && Pt(i, s.map(() => "<span></span>").join("")), s.forEach((n, r) => i.children[r].textContent = n))
                }
            }
        }
    };

    function wa(t) {
        const e = t - Date.now();
        return {
            total: e,
            seconds: e / 1e3 % 60,
            minutes: e / 1e3 / 60 % 60,
            hours: e / 1e3 / 60 / 60 % 24,
            days: e / 1e3 / 60 / 60 / 24
        }
    }
    const es = "uk-transition-leave",
        is = "uk-transition-enter";

    function xn(t, e, i, s) {
        s === void 0 && (s = 0);
        const n = di(e, !0),
            r = {
                opacity: 1
            },
            o = {
                opacity: 0
            },
            a = u => () => n === di(e) ? u() : Promise.reject(),
            l = a(() => (w(e, es), Promise.all($n(e).map((u, d) => new Promise(f => setTimeout(() => C.start(u, o, i / 2, "ease").then(f), d * s)))).then(() => _(e, es)))),
            h = a(() => {
                const u = L(e);
                return w(e, is), t(), c(N(e), {
                    opacity: 0
                }), new Promise(d => requestAnimationFrame(() => {
                    const f = N(e),
                        b = L(e);
                    c(e, "alignContent", "flex-start"), L(e, u);
                    const x = $n(e);
                    c(f, o);
                    const P = x.map((D, X) => new Promise(lt => setTimeout(() => C.start(D, r, i / 2, "ease").then(lt), X * s)));
                    u !== b && P.push(C.start(e, {
                        height: b
                    }, i / 2 + x.length * s, "ease")), Promise.all(P).then(() => {
                        _(e, is), n === di(e) && (c(e, {
                            height: "",
                            alignContent: ""
                        }), c(f, {
                            opacity: ""
                        }), delete e.dataset.transition), d()
                    })
                }))
            });
        return T(e, es) ? yn(e).then(h) : T(e, is) ? yn(e).then(l).then(h) : l().then(h)
    }

    function di(t, e) {
        return e && (t.dataset.transition = 1 + di(t)), Ct(t.dataset.transition) || 0
    }

    function yn(t) {
        return Promise.all(N(t).filter(C.inProgress).map(e => new Promise(i => W(e, "transitionend transitioncanceled", i))))
    }

    function $n(t) {
        return Zi(N(t)).reduce((e, i) => e.concat(Ve(i.filter(s => Ee(s)), "offsetLeft")), [])
    }

    function ba(t, e, i) {
        return new Promise(s => requestAnimationFrame(() => {
            let n = N(e);
            const r = n.map(a => kn(a, !0)),
                o = c(e, ["height", "padding"]);
            C.cancel(e), n.forEach(C.cancel), Sn(e), t(), n = n.concat(N(e).filter(a => !p(n, a))), Promise.resolve().then(() => {
                M.flush();
                const a = c(e, ["height", "padding"]),
                    [l, h] = xa(e, n, r);
                n.forEach((u, d) => h[d] && c(u, h[d])), c(e, {
                    display: "block",
                    ...o
                }), requestAnimationFrame(() => {
                    const u = n.map((d, f) => I(d) === e && C.start(d, l[f], i, "ease")).concat(C.start(e, a, i, "ease"));
                    Promise.all(u).then(() => {
                        n.forEach((d, f) => I(d) === e && c(d, "display", l[f].opacity === 0 ? "none" : "")), Sn(e)
                    }, A).then(s)
                })
            })
        }))
    }

    function kn(t, e) {
        const i = c(t, "zIndex");
        return j(t) ? {
            display: "",
            opacity: e ? c(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: i === "auto" ? Gt(t) : i,
            ...Tn(t)
        } : !1
    }

    function xa(t, e, i) {
        const s = e.map((r, o) => I(r) && o in i ? i[o] ? j(r) ? Tn(r) : {
                opacity: 0
            } : {
                opacity: j(r) ? 1 : 0
            } : !1),
            n = s.map((r, o) => {
                const a = I(e[o]) === t && (i[o] || kn(e[o]));
                if (!a) return !1;
                if (!r) delete a.opacity;
                else if (!("opacity" in r)) {
                    const {
                        opacity: l
                    } = a;
                    l % 1 ? r.opacity = 1 : delete a.opacity
                }
                return a
            });
        return [s, n]
    }

    function Sn(t) {
        c(t.children, {
            height: "",
            left: "",
            opacity: "",
            pointerEvents: "",
            position: "",
            top: "",
            marginTop: "",
            marginLeft: "",
            transform: "",
            width: "",
            zIndex: ""
        }), c(t, {
            height: "",
            display: "",
            padding: ""
        })
    }

    function Tn(t) {
        const {
            height: e,
            width: i
        } = E(t), {
            top: s,
            left: n
        } = Qe(t), {
            marginLeft: r,
            marginTop: o
        } = c(t, ["marginTop", "marginLeft"]);
        return {
            top: s,
            left: n,
            height: e,
            width: i,
            marginLeft: r,
            marginTop: o,
            transform: ""
        }
    }
    var Cn = {
            props: {
                duration: Number,
                animation: Boolean
            },
            data: {
                duration: 150,
                animation: "slide"
            },
            methods: {
                animate(t, e) {
                    e === void 0 && (e = this.$el);
                    const i = this.animation;
                    return (i === "fade" ? xn : i === "delayed-fade" ? function() {
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return xn(...r, 40)
                    } : i ? ba : () => (t(), Promise.resolve()))(t, e, this.duration).then(() => this.$update(e, "resize"), A)
                }
            }
        },
        ya = {
            mixins: [Cn],
            args: "target",
            props: {
                target: Boolean,
                selActive: Boolean
            },
            data: {
                target: null,
                selActive: !1,
                attrItem: "uk-filter-control",
                cls: "uk-active",
                duration: 250
            },
            computed: {
                toggles: {
                    get(t, e) {
                        let {
                            attrItem: i
                        } = t;
                        return B("[" + i + "],[data-" + i + "]", e)
                    },
                    watch() {
                        if (this.updateState(), this.selActive !== !1) {
                            const t = B(this.selActive, this.$el);
                            this.toggles.forEach(e => F(e, this.cls, p(t, e)))
                        }
                    },
                    immediate: !0
                },
                children: {
                    get(t, e) {
                        let {
                            target: i
                        } = t;
                        return B(i + " > *", e)
                    },
                    watch(t, e) {
                        e && !Ta(t, e) && this.updateState()
                    },
                    immediate: !0
                }
            },
            events: [{
                name: "click",
                delegate() {
                    return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                },
                handler(t) {
                    t.preventDefault(), this.apply(t.current)
                }
            }],
            methods: {
                apply(t) {
                    const e = this.getState(),
                        i = Pn(t, this.attrItem, this.getState());
                    $a(e, i) || this.setState(i)
                },
                getState() {
                    return this.toggles.filter(t => T(t, this.cls)).reduce((t, e) => Pn(e, this.attrItem, t), {
                        filter: {
                            "": ""
                        },
                        sort: []
                    })
                },
                setState(t, e) {
                    e === void 0 && (e = !0), t = {
                        filter: {
                            "": ""
                        },
                        sort: [],
                        ...t
                    }, g(this.$el, "beforeFilter", [this, t]), this.toggles.forEach(i => F(i, this.cls, !!Sa(i, this.attrItem, t))), Promise.all(B(this.target, this.$el).map(i => {
                        const s = () => {
                            ka(t, i, N(i)), this.$update(this.$el)
                        };
                        return e ? this.animate(s, i) : s()
                    })).then(() => g(this.$el, "afterFilter", [this]))
                },
                updateState() {
                    M.write(() => this.setState(this.getState(), !1))
                }
            }
        };

    function In(t, e) {
        return Ae(Z(t, e), ["filter"])
    }

    function $a(t, e) {
        return ["filter", "sort"].every(i => qe(t[i], e[i]))
    }

    function ka(t, e, i) {
        const s = Ca(t);
        i.forEach(o => c(o, "display", s && !O(o, s) ? "none" : ""));
        const [n, r] = t.sort;
        if (n) {
            const o = Ia(i, n, r);
            qe(o, i) || Y(e, o)
        }
    }

    function Pn(t, e, i) {
        const s = In(t, e),
            {
                filter: n,
                group: r,
                sort: o,
                order: a = "asc"
            } = s;
        return (n || V(o)) && (r ? n ? (delete i.filter[""], i.filter[r] = n) : (delete i.filter[r], (fe(i.filter) || "" in i.filter) && (i.filter = {
            "": n || ""
        })) : i.filter = {
            "": n || ""
        }), V(o) || (i.sort = [o, a]), i
    }

    function Sa(t, e, i) {
        let {
            filter: s = {
                "": ""
            },
            sort: [n, r]
        } = i;
        const {
            filter: o = "",
            group: a = "",
            sort: l,
            order: h = "asc"
        } = In(t, e);
        return V(l) ? a in s && o === s[a] || !o && a && !(a in s) && !s[""] : n === l && r === h
    }

    function Ta(t, e) {
        return t.length === e.length && t.every(i => ~e.indexOf(i))
    }

    function Ca(t) {
        let {
            filter: e
        } = t, i = "";
        return tt(e, s => i += s || ""), i
    }

    function Ia(t, e, i) {
        return [...t].sort((s, n) => Z(s, e).localeCompare(Z(n, e), void 0, {
            numeric: !0
        }) * (i === "asc" || -1))
    }
    var ss = {
        slide: {
            show(t) {
                return [{
                    transform: R(t * -100)
                }, {
                    transform: R()
                }]
            },
            percent(t) {
                return Oe(t)
            },
            translate(t, e) {
                return [{
                    transform: R(e * -100 * t)
                }, {
                    transform: R(e * 100 * (1 - t))
                }]
            }
        }
    };

    function Oe(t) {
        return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth) || 0
    }

    function R(t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = "%"), t += t ? e : "", "translate3d(" + t + ", 0, 0)"
    }

    function oe(t) {
        return "scale3d(" + t + ", " + t + ", 1)"
    }
    var An = { ...ss,
        fade: {
            show() {
                return [{
                    opacity: 0
                }, {
                    opacity: 1
                }]
            },
            percent(t) {
                return 1 - c(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t
                }, {
                    opacity: t
                }]
            }
        },
        scale: {
            show() {
                return [{
                    opacity: 0,
                    transform: oe(1 - .2)
                }, {
                    opacity: 1,
                    transform: oe(1)
                }]
            },
            percent(t) {
                return 1 - c(t, "opacity")
            },
            translate(t) {
                return [{
                    opacity: 1 - t,
                    transform: oe(1 - .2 * t)
                }, {
                    opacity: t,
                    transform: oe(1 - .2 + .2 * t)
                }]
            }
        }
    };

    function Pa(t, e, i, s) {
        let {
            animation: n,
            easing: r
        } = s;
        const {
            percent: o,
            translate: a,
            show: l = A
        } = n, h = l(i), u = new Ge;
        return {
            dir: i,
            show(d, f, b) {
                f === void 0 && (f = 0);
                const x = b ? "linear" : r;
                return d -= Math.round(d * nt(f, -1, 1)), this.translate(f), fi(e, "itemin", {
                    percent: f,
                    duration: d,
                    timing: x,
                    dir: i
                }), fi(t, "itemout", {
                    percent: 1 - f,
                    duration: d,
                    timing: x,
                    dir: i
                }), Promise.all([C.start(e, h[1], d, x), C.start(t, h[0], d, x)]).then(() => {
                    this.reset(), u.resolve()
                }, A), u.promise
            },
            cancel() {
                C.cancel([e, t])
            },
            reset() {
                for (const d in h[0]) c([e, t], d, "")
            },
            forward(d, f) {
                return f === void 0 && (f = this.percent()), C.cancel([e, t]), this.show(d, f, !0)
            },
            translate(d) {
                this.reset();
                const f = a(d, i);
                c(e, f[1]), c(t, f[0]), fi(e, "itemtranslatein", {
                    percent: d,
                    dir: i
                }), fi(t, "itemtranslateout", {
                    percent: 1 - d,
                    dir: i
                })
            },
            percent() {
                return o(t || e, e, i)
            },
            getDistance() {
                return t == null ? void 0 : t.offsetWidth
            }
        }
    }

    function fi(t, e, i) {
        g(t, Dt(e, !1, !1, i))
    }
    var Aa = {
            props: {
                autoplay: Boolean,
                autoplayInterval: Number,
                pauseOnHover: Boolean
            },
            data: {
                autoplay: !1,
                autoplayInterval: 7e3,
                pauseOnHover: !0
            },
            connected() {
                this.autoplay && this.startAutoplay()
            },
            disconnected() {
                this.stopAutoplay()
            },
            update() {
                k(this.slides, "tabindex", "-1")
            },
            events: [{
                name: "visibilitychange",
                el() {
                    return document
                },
                filter() {
                    return this.autoplay
                },
                handler() {
                    document.hidden ? this.stopAutoplay() : this.startAutoplay()
                }
            }],
            methods: {
                startAutoplay() {
                    this.stopAutoplay(), this.interval = setInterval(() => (!this.draggable || !v(":focus", this.$el)) && (!this.pauseOnHover || !O(this.$el, ":hover")) && !this.stack.length && this.show("next"), this.autoplayInterval)
                },
                stopAutoplay() {
                    this.interval && clearInterval(this.interval)
                }
            }
        },
        Ea = {
            props: {
                draggable: Boolean
            },
            data: {
                draggable: !0,
                threshold: 10
            },
            created() {
                for (const t of ["start", "move", "end"]) {
                    const e = this[t];
                    this[t] = i => {
                        const s = Jt(i).x * (J ? -1 : 1);
                        this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i)
                    }
                }
            },
            events: [{
                name: ct,
                delegate() {
                    return this.selSlides
                },
                handler(t) {
                    !this.draggable || !bt(t) && _a(t.target) || ot(t.target, ve) || t.button > 0 || this.length < 2 || this.start(t)
                }
            }, {
                name: "dragstart",
                handler(t) {
                    t.preventDefault()
                }
            }],
            methods: {
                start() {
                    this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, S(document, Ut, this.move, {
                        passive: !1
                    }), S(document, gt + " " + ee + " input", this.end, !0), c(this.list, "userSelect", "none")
                },
                move(t) {
                    const e = this.pos - this.drag;
                    if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold) return;
                    c(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
                    const {
                        slides: i
                    } = this;
                    let {
                        prevIndex: s
                    } = this, n = Math.abs(e), r = this.getIndex(s + this.dir, s), o = this._getDistance(s, r) || i[s].offsetWidth;
                    for (; r !== s && n > o;) this.drag -= o * this.dir, s = r, n -= o, r = this.getIndex(s + this.dir, s), o = this._getDistance(s, r) || i[s].offsetWidth;
                    this.percent = n / o;
                    const a = i[s],
                        l = i[r],
                        h = this.index !== r,
                        u = s === r;
                    let d;
                    [this.index, this.prevIndex].filter(f => !p([r, s], f)).forEach(f => {
                        g(i[f], "itemhidden", [this]), u && (d = !0, this.prevIndex = s)
                    }), (this.index === s && this.prevIndex !== s || d) && g(i[this.index], "itemshown", [this]), h && (this.prevIndex = s, this.index = r, !u && g(a, "beforeitemhide", [this]), g(l, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), a, !u && l), h && (!u && g(a, "itemhide", [this]), g(l, "itemshow", [this]))
                },
                end() {
                    if (Xt(document, Ut, this.move, {
                            passive: !1
                        }), Xt(document, gt + " " + ee + " input", this.end, !0), this.dragging)
                        if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                        else {
                            const t = (J ? this.dir * (J ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                            this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0)
                        }
                    c(this.list, {
                        userSelect: "",
                        pointerEvents: ""
                    }), this.drag = this.percent = null
                }
            }
        };

    function _a(t) {
        return !t.children.length && t.childNodes.length
    }
    var za = {
            data: {
                selNav: !1
            },
            computed: {
                nav(t, e) {
                    let {
                        selNav: i
                    } = t;
                    return v(i, e)
                },
                selNavItem(t) {
                    let {
                        attrItem: e
                    } = t;
                    return "[" + e + "],[data-" + e + "]"
                },
                navItems(t, e) {
                    return B(this.selNavItem, e)
                }
            },
            update: {
                write() {
                    this.nav && this.length !== this.nav.children.length && Pt(this.nav, this.slides.map((t, e) => "<li " + this.attrItem + '="' + e + '"><a href></a></li>').join("")), this.navItems.concat(this.nav).forEach(t => t && (t.hidden = !this.maxIndex)), this.updateNav()
                },
                events: ["resize"]
            },
            events: [{
                name: "click",
                delegate() {
                    return this.selNavItem
                },
                handler(t) {
                    t.preventDefault(), this.show(Z(t.current, this.attrItem))
                }
            }, {
                name: "itemshow",
                handler: "updateNav"
            }],
            methods: {
                updateNav() {
                    const t = this.getValidIndex();
                    for (const e of this.navItems) {
                        const i = Z(e, this.attrItem);
                        F(e, this.clsActive, Ct(i) === t), F(e, "uk-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex))
                    }
                }
            }
        },
        En = {
            mixins: [Aa, Ea, za, $t],
            props: {
                clsActivated: Boolean,
                easing: String,
                index: Number,
                finite: Boolean,
                velocity: Number,
                selSlides: String
            },
            data: () => ({
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "uk-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {}
            }),
            connected() {
                this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = []
            },
            disconnected() {
                _(this.slides, this.clsActive)
            },
            computed: {
                duration(t, e) {
                    let {
                        velocity: i
                    } = t;
                    return _n(e.offsetWidth / i)
                },
                list(t, e) {
                    let {
                        selList: i
                    } = t;
                    return v(i, e)
                },
                maxIndex() {
                    return this.length - 1
                },
                selSlides(t) {
                    let {
                        selList: e,
                        selSlides: i
                    } = t;
                    return e + " " + (i || "> *")
                },
                slides: {
                    get() {
                        return B(this.selSlides, this.$el)
                    },
                    watch() {
                        this.$reset()
                    }
                },
                length() {
                    return this.slides.length
                }
            },
            methods: {
                show(t, e) {
                    if (e === void 0 && (e = !1), this.dragging || !this.length) return;
                    const {
                        stack: i
                    } = this, s = e ? 0 : i.length, n = () => {
                        i.splice(s, 1), i.length && this.show(i.shift(), !0)
                    };
                    if (i[e ? "unshift" : "push"](t), !e && i.length > 1) {
                        i.length === 2 && this._transitioner.forward(Math.min(this.duration, 200));
                        return
                    }
                    const r = this.getIndex(this.index),
                        o = T(this.slides, this.clsActive) && this.slides[r],
                        a = this.getIndex(t, this.index),
                        l = this.slides[a];
                    if (o === l) {
                        n();
                        return
                    }
                    if (this.dir = Ma(t, r), this.prevIndex = r, this.index = a, o && !g(o, "beforeitemhide", [this]) || !g(l, "beforeitemshow", [this, o])) {
                        this.index = this.prevIndex, n();
                        return
                    }
                    const h = this._show(o, l, e).then(() => (o && g(o, "itemhidden", [this]), g(l, "itemshown", [this]), new Promise(u => {
                        M.write(() => {
                            i.shift(), i.length ? this.show(i.shift(), !0) : this._transitioner = null, u()
                        })
                    })));
                    return o && g(o, "itemhide", [this]), g(l, "itemshow", [this]), h
                },
                getIndex(t, e) {
                    return t === void 0 && (t = this.index), e === void 0 && (e = this.index), nt(Yt(t, this.slides, e, this.finite), 0, this.maxIndex)
                },
                getValidIndex(t, e) {
                    return t === void 0 && (t = this.index), e === void 0 && (e = this.prevIndex), this.getIndex(t, e)
                },
                _show(t, e, i) {
                    if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                            easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                            ...this.transitionOptions
                        }), !i && !t) return this._translate(1), Promise.resolve();
                    const {
                        length: s
                    } = this.stack;
                    return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent)
                },
                _getDistance(t, e) {
                    return this._getTransitioner(t, t !== e && e).getDistance()
                },
                _translate(t, e, i) {
                    e === void 0 && (e = this.prevIndex), i === void 0 && (i = this.index);
                    const s = this._getTransitioner(e !== i ? e : !1, i);
                    return s.translate(t), s
                },
                _getTransitioner(t, e, i, s) {
                    return t === void 0 && (t = this.prevIndex), e === void 0 && (e = this.index), i === void 0 && (i = this.dir || 1), s === void 0 && (s = this.transitionOptions), new this.Transitioner(Vt(t) ? this.slides[t] : t, Vt(e) ? this.slides[e] : e, i * (J ? -1 : 1), s)
                }
            }
        };

    function Ma(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1
    }

    function _n(t) {
        return .5 * t + 300
    }
    var zn = {
            mixins: [En],
            props: {
                animation: String
            },
            data: {
                animation: "slide",
                clsActivated: "uk-transition-active",
                Animations: ss,
                Transitioner: Pa
            },
            computed: {
                animation(t) {
                    let {
                        animation: e,
                        Animations: i
                    } = t;
                    return { ...i[e] || i.slide,
                        name: e
                    }
                },
                transitionOptions() {
                    return {
                        animation: this.animation
                    }
                }
            },
            events: {
                beforeitemshow(t) {
                    let {
                        target: e
                    } = t;
                    w(e, this.clsActive)
                },
                itemshown(t) {
                    let {
                        target: e
                    } = t;
                    w(e, this.clsActivated)
                },
                itemhidden(t) {
                    let {
                        target: e
                    } = t;
                    _(e, this.clsActive, this.clsActivated)
                }
            }
        },
        Mn = {
            mixins: [re, ts, yt, zn],
            functional: !0,
            props: {
                delayControls: Number,
                preload: Number,
                videoAutoplay: Boolean,
                template: String
            },
            data: () => ({
                preload: 1,
                videoAutoplay: !1,
                delayControls: 3e3,
                items: [],
                cls: "uk-open",
                clsPage: "uk-lightbox-page",
                selList: ".uk-lightbox-items",
                attrItem: "uk-lightbox-item",
                selClose: ".uk-close-large",
                selCaption: ".uk-lightbox-caption",
                pauseOnHover: !1,
                velocity: 2,
                Animations: An,
                template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
            }),
            created() {
                const t = v(this.template),
                    e = v(this.selList, t);
                this.items.forEach(() => Y(e, "<li>")), this.$mount(Y(this.container, t))
            },
            computed: {
                caption(t, e) {
                    let {
                        selCaption: i
                    } = t;
                    return v(i, e)
                }
            },
            events: [{
                name: Ut + " " + ct + " keydown",
                handler: "showControls"
            }, {
                name: "click",
                self: !0,
                delegate() {
                    return this.selSlides
                },
                handler(t) {
                    t.defaultPrevented || this.hide()
                }
            }, {
                name: "shown",
                self: !0,
                handler() {
                    this.showControls()
                }
            }, {
                name: "hide",
                self: !0,
                handler() {
                    this.hideControls(), _(this.slides, this.clsActive), C.stop(this.slides)
                }
            }, {
                name: "hidden",
                self: !0,
                handler() {
                    this.$destroy(!0)
                }
            }, {
                name: "keyup",
                el() {
                    return document
                },
                handler(t) {
                    if (!(!this.isToggled(this.$el) || !this.draggable)) switch (t.keyCode) {
                        case 37:
                            this.show("previous");
                            break;
                        case 39:
                            this.show("next");
                            break
                    }
                }
            }, {
                name: "beforeitemshow",
                handler(t) {
                    this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = An.scale, _(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
                }
            }, {
                name: "itemshow",
                handler() {
                    Pt(this.caption, this.getItem().caption || "");
                    for (let t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t)
                }
            }, {
                name: "itemshown",
                handler() {
                    this.draggable = this.$props.draggable
                }
            }, {
                name: "itemload",
                async handler(t, e) {
                    const {
                        source: i,
                        type: s,
                        alt: n = "",
                        poster: r,
                        attrs: o = {}
                    } = e;
                    if (this.setItem(e, "<span uk-spinner></span>"), !i) return;
                    let a;
                    const l = {
                        frameborder: "0",
                        allow: "autoplay",
                        allowfullscreen: "",
                        style: "max-width: 100%; box-sizing: border-box;",
                        "uk-responsive": "",
                        "uk-video": "" + this.videoAutoplay
                    };
                    if (s === "image" || i.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i)) try {
                        const {
                            width: h,
                            height: u
                        } = await xs(i, o.srcset, o.size);
                        this.setItem(e, He("img", {
                            src: i,
                            width: h,
                            height: u,
                            alt: n,
                            ...o
                        }))
                    } catch {
                        this.setError(e)
                    } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                        const h = He("video", {
                            src: i,
                            poster: r,
                            controls: "",
                            playsinline: "",
                            "uk-video": "" + this.videoAutoplay,
                            ...o
                        });
                        S(h, "loadedmetadata", () => {
                            k(h, {
                                width: h.videoWidth,
                                height: h.videoHeight
                            }), this.setItem(e, h)
                        }), S(h, "error", () => this.setError(e))
                    } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i)) this.setItem(e, He("iframe", {
                        src: i,
                        frameborder: "0",
                        allowfullscreen: "",
                        class: "uk-lightbox-iframe",
                        ...o
                    }));
                    else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) this.setItem(e, He("iframe", {
                        src: "https://www.youtube" + (a[1] || "") + ".com/embed/" + a[2] + (a[3] ? "?" + a[3] : ""),
                        width: 1920,
                        height: 1080,
                        ...l,
                        ...o
                    }));
                    else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) try {
                        const {
                            height: h,
                            width: u
                        } = await (await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(i), {
                            credentials: "omit"
                        })).json();
                        this.setItem(e, He("iframe", {
                            src: "https://player.vimeo.com/video/" + a[1] + (a[2] ? "?" + a[2] : ""),
                            width: u,
                            height: h,
                            ...l,
                            ...o
                        }))
                    } catch {
                        this.setError(e)
                    }
                }
            }],
            methods: {
                loadItem(t) {
                    t === void 0 && (t = this.index);
                    const e = this.getItem(t);
                    this.getSlide(e).childElementCount || g(this.$el, "itemload", [e])
                },
                getItem(t) {
                    return t === void 0 && (t = this.index), this.items[Yt(t, this.slides)]
                },
                setItem(t, e) {
                    g(this.$el, "itemloaded", [this, Pt(this.getSlide(t), e)])
                },
                getSlide(t) {
                    return this.slides[this.items.indexOf(t)]
                },
                setError(t) {
                    this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
                },
                showControls() {
                    clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), w(this.$el, "uk-active", "uk-transition-active")
                },
                hideControls() {
                    _(this.$el, "uk-active", "uk-transition-active")
                }
            }
        };

    function He(t, e) {
        const i = Bt("<" + t + ">");
        return k(i, e), i
    }
    var Na = {
        install: Da,
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles: {
                get(t, e) {
                    let {
                        toggle: i
                    } = t;
                    return B(i, e)
                },
                watch() {
                    this.hide()
                }
            }
        },
        disconnected() {
            this.hide()
        },
        events: [{
            name: "click",
            delegate() {
                return this.toggle + ":not(.uk-disabled)"
            },
            handler(t) {
                t.preventDefault(), this.show(t.current)
            }
        }],
        methods: {
            show(t) {
                const e = gs(this.toggles.map(Nn), "source");
                if (qt(t)) {
                    const {
                        source: i
                    } = Nn(t);
                    t = mt(e, s => {
                        let {
                            source: n
                        } = s;
                        return i === n
                    })
                }
                return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props,
                    items: e
                }), S(this.panel.$el, "hidden", () => this.panel = !1), this.panel.show(t)
            },
            hide() {
                var t;
                return (t = this.panel) == null ? void 0 : t.hide()
            }
        }
    };

    function Da(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", Mn), vt(e.props, t.component("lightboxPanel").options.props)
    }

    function Nn(t) {
        const e = {};
        for (const i of ["href", "caption", "type", "poster", "alt", "attrs"]) e[i === "href" ? "source" : i] = Z(t, i);
        return e.attrs = Ae(e.attrs), e
    }
    var Ba = {
        mixins: [re],
        functional: !0,
        args: ["message", "status"],
        data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: null,
            pos: "top-center",
            clsContainer: "uk-notification",
            clsClose: "uk-notification-close",
            clsMsg: "uk-notification-message"
        },
        install: Oa,
        computed: {
            marginProp(t) {
                let {
                    pos: e
                } = t;
                return "margin" + (it(e, "top") ? "Top" : "Bottom")
            },
            startProps() {
                return {
                    opacity: 0,
                    [this.marginProp]: -this.$el.offsetHeight
                }
            }
        },
        created() {
            const t = v("." + this.clsContainer + "-" + this.pos, this.container) || Y(this.container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
            this.$mount(Y(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"))
        },
        async connected() {
            const t = m(c(this.$el, this.marginProp));
            await C.start(c(this.$el, this.startProps), {
                opacity: 1,
                [this.marginProp]: t
            }), this.timeout && (this.timer = setTimeout(this.close, this.timeout))
        },
        events: {
            click(t) {
                ot(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close()
            },
            [Ht]() {
                this.timer && clearTimeout(this.timer)
            },
            [te]() {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout))
            }
        },
        methods: {
            async close(t) {
                const e = i => {
                    const s = I(i);
                    g(i, "close", [this]), ht(i), s != null && s.hasChildNodes() || ht(s)
                };
                this.timer && clearTimeout(this.timer), t || await C.start(this.$el, this.startProps), e(this.$el)
            }
        }
    };

    function Oa(t) {
        t.notification.closeAll = function(e, i) {
            xt(document.body, s => {
                const n = t.getComponent(s, "notification");
                n && (!e || e === n.group) && n.close(i)
            })
        }
    }
    const gi = {
            x: pi,
            y: pi,
            rotate: pi,
            scale: pi,
            color: rs,
            backgroundColor: rs,
            borderColor: rs,
            blur: Wt,
            hue: Wt,
            fopacity: Wt,
            grayscale: Wt,
            invert: Wt,
            saturate: Wt,
            sepia: Wt,
            opacity: Fa,
            stroke: La,
            bgx: Bn,
            bgy: Bn
        },
        {
            keys: ns
        } = Object;
    var Dn = {
        mixins: [ui],
        props: Fn(ns(gi), "list"),
        data: Fn(ns(gi), void 0),
        computed: {
            props(t, e) {
                return ns(gi).reduce((i, s) => (V(t[s]) || (i[s] = gi[s](s, e, t[s].slice())), i), {})
            }
        },
        events: {
            load() {
                this.$emit()
            }
        },
        methods: {
            reset() {
                tt(this.getCss(0), (t, e) => c(this.$el, e, ""))
            },
            getCss(t) {
                const e = {
                    transform: "",
                    filter: ""
                };
                for (const i in this.props) this.props[i](e, t);
                return e
            }
        }
    };

    function pi(t, e, i) {
        const s = as(i) || {
            x: "px",
            y: "px",
            rotate: "deg"
        }[t] || "";
        let n;
        return (t === "x" || t === "y") && (t = "translate" + ce(t), n = r => m(m(r).toFixed(s === "px" ? 0 : 6))), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = ae(i, n), (r, o) => {
            r.transform += " " + t + "(" + Fe(i, o) + s + ")"
        }
    }

    function rs(t, e, i) {
        return i.length === 1 && i.unshift(Le(e, t, "")), i = ae(i, s => Ha(e, s)), (s, n) => {
            const [r, o, a] = Hn(i, n), l = r.map((h, u) => (h += a * (o[u] - h), u === 3 ? m(h) : parseInt(h, 10))).join(",");
            s[t] = "rgba(" + l + ")"
        }
    }

    function Ha(t, e) {
        return Le(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(m)
    }

    function Wt(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = as(i) || {
            blur: "px",
            hue: "deg"
        }[t] || "%";
        return t = {
            fopacity: "opacity",
            hue: "hue-rotate"
        }[t] || t, i = ae(i), (n, r) => {
            const o = Fe(i, r);
            n.filter += " " + t + "(" + (o + s) + ")"
        }
    }

    function Fa(t, e, i) {
        return i.length === 1 && i.unshift(Le(e, t, "")), i = ae(i), (s, n) => {
            s[t] = Fe(i, n)
        }
    }

    function La(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = as(i),
            n = rn(e);
        return i = ae(i.reverse(), r => (r = m(r), s === "%" ? r * n / 100 : r)), i.some(r => {
            let [o] = r;
            return o
        }) ? (c(e, "strokeDasharray", n), (r, o) => {
            r.strokeDashoffset = Fe(i, o)
        }) : A
    }

    function Bn(t, e, i) {
        i.length === 1 && i.unshift(0), t = t.substr(-1);
        const s = t === "y" ? "height" : "width";
        i = ae(i, r => at(r, s, e));
        const n = Le(e, "background-position-" + t, "");
        return Le(e, "backgroundSize", "") === "cover" ? Ra(t, e, i, n, s) : On(t, i, n)
    }

    function Ra(t, e, i, s, n) {
        const r = Wa(e);
        if (!r.width) return A;
        const o = i.map(X => {
                let [lt] = X;
                return lt
            }),
            a = Math.min(...o),
            l = Math.max(...o),
            h = o.indexOf(a) < o.indexOf(l),
            u = l - a;
        let d = (h ? -u : 0) - (h ? a : l);
        const f = {
                width: e.offsetWidth,
                height: e.offsetHeight
            },
            b = pe.cover(r, f),
            x = b[n] - f[n];
        if (x < u) f[n] = b[n] + u - x;
        else if (x > u) {
            const X = f[n] / at(s, n, e, !0);
            X && (d -= (x - u) / X)
        }
        const P = pe.cover(r, f),
            D = On(t, i, d + "px");
        return (X, lt) => {
            D(X, lt), X.backgroundSize = P.width + "px " + P.height + "px", X.backgroundRepeat = "no-repeat"
        }
    }

    function On(t, e, i) {
        return function(s, n) {
            s["background-position-" + t] = "calc(" + i + " + " + Fe(e, n) + "px)"
        }
    }
    const mi = {};

    function Wa(t) {
        const e = c(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (mi[e]) return mi[e];
        const i = new Image;
        return e && (i.src = e, !i.naturalWidth) ? (i.onload = () => {
            mi[e] = os(i), g(t, Dt("load", !1))
        }, os(i)) : mi[e] = os(i)
    }

    function os(t) {
        return {
            width: t.naturalWidth,
            height: t.naturalHeight
        }
    }

    function ae(t, e) {
        e === void 0 && (e = m);
        const i = [],
            {
                length: s
            } = t;
        let n = 0;
        for (let r = 0; r < s; r++) {
            let [o, a] = z(t[r]) ? t[r].trim().split(" ") : [t[r]];
            if (o = e(o), a = a ? m(a) / 100 : null, r === 0 ? a === null ? a = 0 : a && i.push([o, 0]) : r === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([o, a]), a = 1)), i.push([o, a]), a === null) n++;
            else if (n) {
                const l = i[r - n - 1][1],
                    h = (a - l) / (n + 1);
                for (let u = n; u > 0; u--) i[r - u][1] = l + h * (n - u + 1);
                n = 0
            }
        }
        return i
    }

    function Hn(t, e) {
        const i = mt(t.slice(1), s => {
            let [, n] = s;
            return e <= n
        }) + 1;
        return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])]
    }

    function Fe(t, e) {
        const [i, s, n] = Hn(t, e);
        return Vt(i) ? i + Math.abs(i - s) * n * (i < s ? 1 : -1) : +s
    }
    const ja = /^-?\d+([^\s]*)/;

    function as(t, e) {
        for (const i of t) {
            const s = i.match == null ? void 0 : i.match(ja);
            if (s) return s[1]
        }
        return e
    }

    function Le(t, e, i) {
        const s = t.style[e],
            n = c(c(t, e, i), e);
        return t.style[e] = s, n
    }

    function Fn(t, e) {
        return t.reduce((i, s) => (i[s] = e, i), {})
    }
    var qa = {
        mixins: [Dn, $t, Ne],
        props: {
            target: String,
            viewport: Number,
            easing: Number,
            start: String,
            end: String
        },
        data: {
            target: !1,
            viewport: 1,
            easing: 1,
            start: 0,
            end: 0
        },
        computed: {
            target(t, e) {
                let {
                    target: i
                } = t;
                return Ln(i && wt(i, e) || e)
            },
            start(t) {
                let {
                    start: e
                } = t;
                return at(e, "height", this.target, !0)
            },
            end(t) {
                let {
                    end: e,
                    viewport: i
                } = t;
                return at(e || (i = (1 - i) * 100) && i + "vh+" + i + "%", "height", this.target, !0)
            }
        },
        update: {
            read(t, e) {
                let {
                    percent: i
                } = t;
                if (e.has("scroll") || (i = !1), !this.matchMedia) return;
                const s = i;
                return i = Va(Ji(this.target, this.start, this.end), this.easing), {
                    percent: i,
                    style: s === i ? !1 : this.getCss(i)
                }
            },
            write(t) {
                let {
                    style: e
                } = t;
                if (!this.matchMedia) {
                    this.reset();
                    return
                }
                e && c(this.$el, e)
            },
            events: ["scroll", "resize"]
        }
    };

    function Va(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, -e + 1)
    }

    function Ln(t) {
        return t ? "offsetTop" in t ? t : Ln(I(t)) : document.documentElement
    }
    var Rn = {
            update: {
                write() {
                    if (this.stack.length || this.dragging) return;
                    const t = this.getValidIndex(this.index);
                    (!~this.prevIndex || this.index !== t) && this.show(t)
                },
                events: ["resize"]
            }
        },
        Wn = {
            mixins: [Me],
            connected() {
                this.lazyload(this.slides, this.getAdjacentSlides)
            }
        };

    function Ya(t, e, i, s) {
        let {
            center: n,
            easing: r,
            list: o
        } = s;
        const a = new Ge,
            l = t ? Re(t, o, n) : Re(e, o, n) + $(e).width * i,
            h = e ? Re(e, o, n) : l + $(t).width * i * (J ? -1 : 1);
        return {
            dir: i,
            show(u, d, f) {
                d === void 0 && (d = 0);
                const b = f ? "linear" : r;
                return u -= Math.round(u * nt(d, -1, 1)), this.translate(d), d = t ? d : nt(d, 0, 1), ls(this.getItemIn(), "itemin", {
                    percent: d,
                    duration: u,
                    timing: b,
                    dir: i
                }), t && ls(this.getItemIn(!0), "itemout", {
                    percent: 1 - d,
                    duration: u,
                    timing: b,
                    dir: i
                }), C.start(o, {
                    transform: R(-h * (J ? -1 : 1), "px")
                }, u, b).then(a.resolve, A), a.promise
            },
            cancel() {
                C.cancel(o)
            },
            reset() {
                c(o, "transform", "")
            },
            forward(u, d) {
                return d === void 0 && (d = this.percent()), C.cancel(o), this.show(u, d, !0)
            },
            translate(u) {
                const d = this.getDistance() * i * (J ? -1 : 1);
                c(o, "transform", R(nt(-h + (d - d * u), -vi(o), $(o).width) * (J ? -1 : 1), "px"));
                const f = this.getActives(),
                    b = this.getItemIn(),
                    x = this.getItemIn(!0);
                u = t ? nt(u, -1, 1) : 0;
                for (const P of N(o)) {
                    const D = p(f, P),
                        X = P === b,
                        lt = P === x,
                        hs = X || !lt && (D || i * (J ? -1 : 1) === -1 ^ wi(P, o) > wi(t || e));
                    ls(P, "itemtranslate" + (hs ? "in" : "out"), {
                        dir: i,
                        percent: lt ? 1 - u : X ? u : D ? 1 : 0
                    })
                }
            },
            percent() {
                return Math.abs((c(o, "transform").split(",")[4] * (J ? -1 : 1) + l) / (h - l))
            },
            getDistance() {
                return Math.abs(h - l)
            },
            getItemIn(u) {
                u === void 0 && (u = !1);
                let d = this.getActives(),
                    f = qn(o, Re(e || t, o, n));
                if (u) {
                    const b = d;
                    d = f, f = b
                }
                return f[mt(f, b => !p(d, b))]
            },
            getActives() {
                return qn(o, Re(t || e, o, n))
            }
        }
    }

    function Re(t, e, i) {
        const s = wi(t, e);
        return i ? s - Ga(t, e) : Math.min(s, jn(e))
    }

    function jn(t) {
        return Math.max(0, vi(t) - $(t).width)
    }

    function vi(t) {
        return N(t).reduce((e, i) => $(i).width + e, 0)
    }

    function Ga(t, e) {
        return $(e).width / 2 - $(t).width / 2
    }

    function wi(t, e) {
        return t && (Qe(t).left + (J ? $(t).width - $(e).width : 0)) * (J ? -1 : 1) || 0
    }

    function qn(t, e) {
        e -= 1;
        const i = $(t).width,
            s = e + i + 2;
        return N(t).filter(n => {
            const r = wi(n, t),
                o = r + Math.min($(n).width, i);
            return r >= e && o <= s
        })
    }

    function ls(t, e, i) {
        g(t, Dt(e, !1, !1, i))
    }
    var Xa = {
        mixins: [U, En, Rn, Wn],
        props: {
            center: Boolean,
            sets: Boolean
        },
        data: {
            center: !1,
            sets: !1,
            attrItem: "uk-slider-item",
            selList: ".uk-slider-items",
            selNav: ".uk-slider-nav",
            clsContainer: "uk-slider-container",
            Transitioner: Ya
        },
        computed: {
            avgWidth() {
                return vi(this.list) / this.length
            },
            finite(t) {
                let {
                    finite: e
                } = t;
                return e || Math.ceil(vi(this.list)) < Math.trunc($(this.list).width + Ja(this.list) + this.center)
            },
            maxIndex() {
                if (!this.finite || this.center && !this.sets) return this.length - 1;
                if (this.center) return ge(this.sets);
                let t = 0;
                const e = jn(this.list),
                    i = mt(this.slides, s => {
                        if (t >= e) return !0;
                        t += $(s).width
                    });
                return ~i ? i : this.length - 1
            },
            sets(t) {
                let {
                    sets: e
                } = t;
                if (!e) return;
                let i = 0;
                const s = [],
                    n = $(this.list).width;
                for (let r in this.slides) {
                    const o = $(this.slides[r]).width;
                    i + o > n && (i = 0), this.center ? i < n / 2 && i + o + $(this.slides[+r + 1]).width / 2 > n / 2 && (s.push(+r), i = n / 2 - o / 2) : i === 0 && s.push(Math.min(+r, this.maxIndex)), i += o
                }
                if (s.length) return s
            },
            transitionOptions() {
                return {
                    center: this.center,
                    list: this.list
                }
            }
        },
        connected() {
            F(this.$el, this.clsContainer, !v("." + this.clsContainer, this.$el))
        },
        update: {
            write() {
                for (const t of this.navItems) {
                    const e = Ct(Z(t, this.attrItem));
                    e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !p(this.sets, e))
                }
                this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)), this.updateActiveClasses()
            },
            events: ["resize"]
        },
        events: {
            beforeitemshow(t) {
                !this.dragging && this.sets && this.stack.length < 2 && !p(this.sets, this.index) && (this.index = this.getValidIndex());
                const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && e > 1) {
                    for (let s = 0; s < e; s++) this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                    t.preventDefault();
                    return
                }
                const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                this.duration = _n(this.avgWidth / this.velocity) * ($(this.slides[i]).width / this.avgWidth), this.reorder()
            },
            itemshow() {
                ~this.prevIndex && w(this._getTransitioner().getItemIn(), this.clsActive)
            },
            itemshown() {
                this.updateActiveClasses()
            }
        },
        methods: {
            reorder() {
                if (this.finite) {
                    c(this.slides, "order", "");
                    return
                }
                const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                if (this.slides.forEach((n, r) => c(n, "order", this.dir > 0 && r < t ? 1 : this.dir < 0 && r >= this.index ? -1 : "")), !this.center) return;
                const e = this.slides[t];
                let i = $(this.list).width / 2 - $(e).width / 2,
                    s = 0;
                for (; i > 0;) {
                    const n = this.getIndex(--s + t, t),
                        r = this.slides[n];
                    c(r, "order", n > t ? -2 : -1), i -= $(r).width
                }
            },
            updateActiveClasses() {
                const t = this._getTransitioner(this.index).getActives(),
                    e = [this.clsActive, (!this.sets || p(this.sets, m(this.index))) && this.clsActivated || ""];
                for (const i of this.slides) F(i, e, p(t, i))
            },
            getValidIndex(t, e) {
                if (t === void 0 && (t = this.index), e === void 0 && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                let i;
                do {
                    if (p(this.sets, t)) return t;
                    i = t, t = this.getIndex(t + this.dir, e)
                } while (t !== i);
                return t
            },
            getAdjacentSlides() {
                const {
                    width: t
                } = $(this.list), e = -t, i = t * 2, s = $(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, r = new Set;
                for (const o of [-1, 1]) {
                    let a = n + (o > 0 ? s : 0),
                        l = 0;
                    do {
                        const h = this.slides[this.getIndex(this.index + o + l++ * o)];
                        a += $(h).width * o, r.add(h)
                    } while (this.slides.length > l && a > e && a < i)
                }
                return Array.from(r)
            }
        }
    };

    function Ja(t) {
        return Math.max(0, ...N(t).map(e => $(e).width))
    }
    var Vn = {
        mixins: [Dn],
        data: {
            selItem: "!li"
        },
        connected() {
            this.item = wt(this.selItem, this.$el)
        },
        disconnected() {
            this.item = null
        },
        events: [{
            name: "itemin itemout",
            self: !0,
            el() {
                return this.item
            },
            handler(t) {
                let {
                    type: e,
                    detail: {
                        percent: i,
                        duration: s,
                        timing: n,
                        dir: r
                    }
                } = t;
                M.read(() => {
                    const o = this.getCss(Gn(e, r, i)),
                        a = this.getCss(Yn(e) ? .5 : r > 0 ? 1 : 0);
                    M.write(() => {
                        c(this.$el, o), C.start(this.$el, a, s, n).catch(A)
                    })
                })
            }
        }, {
            name: "transitioncanceled transitionend",
            self: !0,
            el() {
                return this.item
            },
            handler() {
                C.cancel(this.$el)
            }
        }, {
            name: "itemtranslatein itemtranslateout",
            self: !0,
            el() {
                return this.item
            },
            handler(t) {
                let {
                    type: e,
                    detail: {
                        percent: i,
                        dir: s
                    }
                } = t;
                M.read(() => {
                    const n = this.getCss(Gn(e, s, i));
                    M.write(() => c(this.$el, n))
                })
            }
        }]
    };

    function Yn(t) {
        return kt(t, "in")
    }

    function Gn(t, e, i) {
        return i /= 2, Yn(t) ^ e < 0 ? i : 1 - i
    }
    var Ka = { ...ss,
            fade: {
                show() {
                    return [{
                        opacity: 0,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent(t) {
                    return 1 - c(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            scale: {
                show() {
                    return [{
                        opacity: 0,
                        transform: oe(1 + .5),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent(t) {
                    return 1 - c(t, "opacity")
                },
                translate(t) {
                    return [{
                        opacity: 1 - t,
                        transform: oe(1 + .5 * t),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            pull: {
                show(t) {
                    return t < 0 ? [{
                        transform: R(30),
                        zIndex: -1
                    }, {
                        transform: R(),
                        zIndex: 0
                    }] : [{
                        transform: R(-100),
                        zIndex: 0
                    }, {
                        transform: R(),
                        zIndex: -1
                    }]
                },
                percent(t, e, i) {
                    return i < 0 ? 1 - Oe(e) : Oe(t)
                },
                translate(t, e) {
                    return e < 0 ? [{
                        transform: R(30 * t),
                        zIndex: -1
                    }, {
                        transform: R(-100 * (1 - t)),
                        zIndex: 0
                    }] : [{
                        transform: R(-t * 100),
                        zIndex: 0
                    }, {
                        transform: R(30 * (1 - t)),
                        zIndex: -1
                    }]
                }
            },
            push: {
                show(t) {
                    return t < 0 ? [{
                        transform: R(100),
                        zIndex: 0
                    }, {
                        transform: R(),
                        zIndex: -1
                    }] : [{
                        transform: R(-30),
                        zIndex: -1
                    }, {
                        transform: R(),
                        zIndex: 0
                    }]
                },
                percent(t, e, i) {
                    return i > 0 ? 1 - Oe(e) : Oe(t)
                },
                translate(t, e) {
                    return e < 0 ? [{
                        transform: R(t * 100),
                        zIndex: 0
                    }, {
                        transform: R(-30 * (1 - t)),
                        zIndex: -1
                    }] : [{
                        transform: R(-30 * t),
                        zIndex: -1
                    }, {
                        transform: R(100 * (1 - t)),
                        zIndex: 0
                    }]
                }
            }
        },
        Za = {
            mixins: [U, zn, Rn, Wn],
            props: {
                ratio: String,
                minHeight: Number,
                maxHeight: Number
            },
            data: {
                ratio: "16:9",
                minHeight: !1,
                maxHeight: !1,
                selList: ".uk-slideshow-items",
                attrItem: "uk-slideshow-item",
                selNav: ".uk-slideshow-nav",
                Animations: Ka
            },
            update: {
                read() {
                    if (!this.list) return !1;
                    let [t, e] = this.ratio.split(":").map(Number);
                    return e = e * this.list.offsetWidth / t || 0, this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), {
                        height: e - Kt(this.list, "height", "content-box")
                    }
                },
                write(t) {
                    let {
                        height: e
                    } = t;
                    e > 0 && c(this.list, "minHeight", e)
                },
                events: ["resize"]
            },
            methods: {
                getAdjacentSlides() {
                    return [1, -1].map(t => this.slides[this.getIndex(this.index + t)])
                }
            }
        },
        Qa = {
            mixins: [U, Cn],
            props: {
                group: String,
                threshold: Number,
                clsItem: String,
                clsPlaceholder: String,
                clsDrag: String,
                clsDragState: String,
                clsBase: String,
                clsNoDrag: String,
                clsEmpty: String,
                clsCustom: String,
                handle: String
            },
            data: {
                group: !1,
                threshold: 5,
                clsItem: "uk-sortable-item",
                clsPlaceholder: "uk-sortable-placeholder",
                clsDrag: "uk-sortable-drag",
                clsDragState: "uk-drag",
                clsBase: "uk-sortable",
                clsNoDrag: "uk-sortable-nodrag",
                clsEmpty: "uk-sortable-empty",
                clsCustom: "",
                handle: !1,
                pos: {}
            },
            created() {
                for (const t of ["init", "start", "move", "end"]) {
                    const e = this[t];
                    this[t] = i => {
                        vt(this.pos, Jt(i)), e(i)
                    }
                }
            },
            events: {
                name: ct,
                passive: !1,
                handler: "init"
            },
            computed: {
                target() {
                    return (this.$el.tBodies || [this.$el])[0]
                },
                items() {
                    return N(this.target)
                },
                isEmpty: {
                    get() {
                        return fe(this.items)
                    },
                    watch(t) {
                        F(this.target, this.clsEmpty, t)
                    },
                    immediate: !0
                },
                handles: {
                    get(t, e) {
                        let {
                            handle: i
                        } = t;
                        return i ? B(i, e) : this.items
                    },
                    watch(t, e) {
                        c(e, {
                            touchAction: "",
                            userSelect: ""
                        }), c(t, {
                            touchAction: Ot ? "none" : "",
                            userSelect: "none"
                        })
                    },
                    immediate: !0
                }
            },
            update: {
                write(t) {
                    if (!this.drag || !I(this.placeholder)) return;
                    const {
                        pos: {
                            x: e,
                            y: i
                        },
                        origin: {
                            offsetTop: s,
                            offsetLeft: n
                        },
                        placeholder: r
                    } = this;
                    c(this.drag, {
                        top: i - s,
                        left: e - n
                    });
                    const o = this.getSortable(document.elementFromPoint(e, i));
                    if (!o) return;
                    const {
                        items: a
                    } = o;
                    if (a.some(C.inProgress)) return;
                    const l = il(a, {
                        x: e,
                        y: i
                    });
                    if (a.length && (!l || l === r)) return;
                    const h = this.getSortable(r),
                        u = sl(o.target, l, r, e, i, o === h && t.moved !== l);
                    u !== !1 && (u && r === u || (o !== h ? (h.remove(r), t.moved = l) : delete t.moved, o.insert(r, u), this.touched.add(o)))
                },
                events: ["move"]
            },
            methods: {
                init(t) {
                    const {
                        target: e,
                        button: i,
                        defaultPrevented: s
                    } = t, [n] = this.items.filter(r => H(e, r));
                    !n || s || i > 0 || Pi(e) || H(e, "." + this.clsNoDrag) || this.handle && !H(e, this.handle) || (t.preventDefault(), this.touched = new Set([this]), this.placeholder = n, this.origin = {
                        target: e,
                        index: Gt(n),
                        ...this.pos
                    }, S(document, Ut, this.move), S(document, gt, this.end), this.threshold || this.start(t))
                },
                start(t) {
                    this.drag = el(this.$container, this.placeholder);
                    const {
                        left: e,
                        top: i
                    } = this.placeholder.getBoundingClientRect();
                    vt(this.origin, {
                        offsetLeft: this.pos.x - e,
                        offsetTop: this.pos.y - i
                    }), w(this.drag, this.clsDrag, this.clsCustom), w(this.placeholder, this.clsPlaceholder), w(this.items, this.clsItem), w(document.documentElement, this.clsDragState), g(this.$el, "start", [this, this.placeholder]), Ua(this.pos), this.move(t)
                },
                move(t) {
                    this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                },
                end() {
                    if (Xt(document, Ut, this.move), Xt(document, gt, this.end), !this.drag) return;
                    tl();
                    const t = this.getSortable(this.placeholder);
                    this === t ? this.origin.index !== Gt(this.placeholder) && g(this.$el, "moved", [this, this.placeholder]) : (g(t.$el, "added", [t, this.placeholder]), g(this.$el, "removed", [this, this.placeholder])), g(this.$el, "stop", [this, this.placeholder]), ht(this.drag), this.drag = null;
                    for (const {
                            clsPlaceholder: e,
                            clsItem: i
                        } of this.touched)
                        for (const s of this.touched) _(s.items, e, i);
                    this.touched = null, _(document.documentElement, this.clsDragState)
                },
                insert(t, e) {
                    w(this.items, this.clsItem);
                    const i = () => e ? Li(e, t) : Y(this.target, t);
                    this.animate(i)
                },
                remove(t) {
                    !H(t, this.target) || this.animate(() => ht(t))
                },
                getSortable(t) {
                    do {
                        const e = this.$getComponent(t, "sortable");
                        if (e && (e === this || this.group !== !1 && e.group === this.group)) return e
                    } while (t = I(t))
                }
            }
        };
    let Xn;

    function Ua(t) {
        let e = Date.now();
        Xn = setInterval(() => {
            let {
                x: i,
                y: s
            } = t;
            s += Ft(window);
            const n = (Date.now() - e) * .3;
            e = Date.now(), Lt(document.elementFromPoint(i, t.y), /auto|scroll/).reverse().some(r => {
                let {
                    scrollTop: o,
                    scrollHeight: a
                } = r;
                const {
                    top: l,
                    bottom: h,
                    height: u
                } = E(se(r));
                if (l < s && l + 35 > s) o -= n;
                else if (h > s && h - 35 < s) o += n;
                else return;
                if (o > 0 && o < a - u) return Ft(r, o), !0
            })
        }, 15)
    }

    function tl() {
        clearInterval(Xn)
    }

    function el(t, e) {
        const i = Y(t, e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2"));
        return c(i, "margin", "0", "important"), c(i, {
            boxSizing: "border-box",
            width: e.offsetWidth,
            height: e.offsetHeight,
            padding: c(e, "padding")
        }), L(i.firstElementChild, L(e.firstElementChild)), i
    }

    function il(t, e) {
        return t[mt(t, i => Ye(e, i.getBoundingClientRect()))]
    }

    function sl(t, e, i, s, n, r) {
        if (!N(t).length) return;
        const o = e.getBoundingClientRect();
        if (!r) return nl(t, i) || n < o.top + o.height / 2 ? e : e.nextElementSibling;
        const a = i.getBoundingClientRect(),
            l = Jn([o.top, o.bottom], [a.top, a.bottom]),
            h = l ? s : n,
            u = l ? "width" : "height",
            d = l ? "left" : "top",
            f = l ? "right" : "bottom",
            b = a[u] < o[u] ? o[u] - a[u] : 0;
        return a[d] < o[d] ? b && h < o[d] + b ? !1 : e.nextElementSibling : b && h > o[f] - b ? !1 : e
    }

    function nl(t, e) {
        const i = N(t).length === 1;
        i && Y(t, e);
        const s = N(t),
            n = s.some((r, o) => {
                const a = r.getBoundingClientRect();
                return s.slice(o + 1).some(l => {
                    const h = l.getBoundingClientRect();
                    return !Jn([a.left, a.right], [h.left, h.right])
                })
            });
        return i && ht(e), n
    }

    function Jn(t, e) {
        return t[1] > e[0] && e[1] > t[0]
    }
    var rl = {
        mixins: [re, yt, Js],
        args: "title",
        props: {
            delay: Number,
            title: String
        },
        data: {
            pos: "top",
            title: "",
            delay: 0,
            animation: ["uk-animation-scale-up"],
            duration: 100,
            cls: "uk-active",
            clsPos: "uk-tooltip"
        },
        beforeConnect() {
            this._hasTitle = Nt(this.$el, "title"), k(this.$el, "title", ""), this.updateAria(!1), ol(this.$el)
        },
        disconnected() {
            this.hide(), k(this.$el, "title", this._hasTitle ? this.title : null)
        },
        methods: {
            show() {
                this.isToggled(this.tooltip || null) || !this.title || (this._unbind = W(document, "show keydown " + ct, this.hide, !1, t => t.type === ct && !H(t.target, this.$el) || t.type === "keydown" && t.keyCode === 27 || t.type === "show" && t.detail[0] !== this && t.detail[0].$name === this.$name), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay))
            },
            async hide() {
                O(this.$el, "input:focus") || (clearTimeout(this.showTimer), !!this.isToggled(this.tooltip || null) && (await this.toggleElement(this.tooltip, !1, !1), ht(this.tooltip), this.tooltip = null, this._unbind()))
            },
            _show() {
                this.tooltip = Y(this.container, '<div class="' + this.clsPos + '"> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), S(this.tooltip, "toggled", (t, e) => {
                    this.updateAria(e), !!e && (this.positionAt(this.tooltip, this.$el), this.origin = this.getAxis() === "y" ? Te(this.dir) + "-" + this.align : this.align + "-" + Te(this.dir))
                }), this.toggleElement(this.tooltip, !0)
            },
            updateAria(t) {
                k(this.$el, "aria-expanded", t)
            }
        },
        events: {
            focus: "show",
            blur: "hide",
            [Ht + " " + te](t) {
                bt(t) || this[t.type === Ht ? "show" : "hide"]()
            },
            [ct](t) {
                bt(t) && this.show()
            }
        }
    };

    function ol(t) {
        Je(t) || k(t, "tabindex", "0")
    }
    var al = {
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },
        data: {
            allow: !1,
            clsDragover: "uk-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            msgInvalidMime: "Invalid File Type: %s",
            msgInvalidName: "Invalid File Name: %s",
            msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: A,
            beforeAll: A,
            beforeSend: A,
            complete: A,
            completeAll: A,
            error: A,
            fail: A,
            load: A,
            loadEnd: A,
            loadStart: A,
            progress: A
        },
        events: {
            change(t) {
                !O(t.target, 'input[type="file"]') || (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
            },
            drop(t) {
                bi(t);
                const e = t.dataTransfer;
                !(e != null && e.files) || (_(this.$el, this.clsDragover), this.upload(e.files))
            },
            dragenter(t) {
                bi(t)
            },
            dragover(t) {
                bi(t), w(this.$el, this.clsDragover)
            },
            dragleave(t) {
                bi(t), _(this.$el, this.clsDragover)
            }
        },
        methods: {
            async upload(t) {
                if (!t.length) return;
                g(this.$el, "upload", [t]);
                for (const s of t) {
                    if (this.maxSize && this.maxSize * 1e3 < s.size) {
                        this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                        return
                    }
                    if (this.allow && !Kn(this.allow, s.name)) {
                        this.fail(this.msgInvalidName.replace("%s", this.allow));
                        return
                    }
                    if (this.mime && !Kn(this.mime, s.type)) {
                        this.fail(this.msgInvalidMime.replace("%s", this.mime));
                        return
                    }
                }
                this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
                const e = ll(t, this.concurrent),
                    i = async s => {
                        const n = new FormData;
                        s.forEach(r => n.append(this.name, r));
                        for (const r in this.params) n.append(r, this.params[r]);
                        try {
                            const r = await bs(this.url, {
                                data: n,
                                method: this.method,
                                responseType: this.type,
                                beforeSend: o => {
                                    const {
                                        xhr: a
                                    } = o;
                                    a.upload && S(a.upload, "progress", this.progress);
                                    for (const l of ["loadStart", "load", "loadEnd", "abort"]) S(a, l.toLowerCase(), this[l]);
                                    return this.beforeSend(o)
                                }
                            });
                            this.complete(r), e.length ? await i(e.shift()) : this.completeAll(r)
                        } catch (r) {
                            this.error(r)
                        }
                    };
                await i(e.shift())
            }
        }
    };

    function Kn(t, e) {
        return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
    }

    function ll(t, e) {
        t = fs(t);
        const i = [];
        for (let s = 0; s < t.length; s += e) i.push(t.slice(s, s + e));
        return i
    }

    function bi(t) {
        t.preventDefault(), t.stopPropagation()
    }
    var hl = Object.freeze({
        __proto__: null,
        Countdown: va,
        Filter: ya,
        Lightbox: Na,
        LightboxPanel: Mn,
        Notification: Ba,
        Parallax: qa,
        Slider: Xa,
        SliderParallax: Vn,
        Slideshow: Za,
        SlideshowParallax: Vn,
        Sortable: Qa,
        Tooltip: rl,
        Upload: al
    });
    return tt(hl, (t, e) => Q.component(e, t)), Q
});