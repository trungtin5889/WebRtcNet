(function () {
    function n() { return function () { } }
    window.JSON && window.JSON.stringify || function () {
        function a(a) { b.lastIndex = 0; return b.test(a) ? '"' + a.replace(b, function (a) { var b = j[a]; return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + a + '"' } function c(b, j) {
            var i, l, h, g, m = e, k, d = j[b]; d && ("object" === typeof d && "function" === typeof d.toJSON) && (d = d.toJSON(b)); "function" === typeof q && (d = q.call(j, b, d)); switch (typeof d) {
                case "string": return a(d); case "number": return isFinite(d) ? String(d) : "null"; case "boolean": case "null": return String(d);
                case "object": if (!d) return "null"; e += f; k = []; if ("[object Array]" === Object.prototype.toString.apply(d)) { g = d.length; for (i = 0; i < g; i += 1)k[i] = c(i, d) || "null"; h = 0 === k.length ? "[]" : e ? "[\n" + e + k.join(",\n" + e) + "\n" + m + "]" : "[" + k.join(",") + "]"; e = m; return h } if (q && "object" === typeof q) { g = q.length; for (i = 0; i < g; i += 1)l = q[i], "string" === typeof l && (h = c(l, d)) && k.push(a(l) + (e ? ": " : ":") + h) } else for (l in d) Object.hasOwnProperty.call(d, l) && (h = c(l, d)) && k.push(a(l) + (e ? ": " : ":") + h); h = 0 === k.length ? "{}" : e ? "{\n" + e + k.join(",\n" + e) + "\n" +
                    m + "}" : "{" + k.join(",") + "}"; e = m; return h
            }
        } window.JSON || (window.JSON = {}); "function" !== typeof String.prototype.toJSON && (String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () { return this.valueOf() }); var b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, f, j = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, q; "function" !== typeof JSON.stringify && (JSON.stringify = function (a,
            b, i) { var j; f = e = ""; if ("number" === typeof i) for (j = 0; j < i; j += 1)f += " "; else "string" === typeof i && (f = i); if ((q = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("JSON.stringify"); return c("", { "": a }) }); "function" !== typeof JSON.parse && (JSON.parse = function (a) { return eval("(" + a + ")") })
    }();
    if (!window.PUBNUB) {
        var p = function () { return "x" + ++aa + "" + +new Date }, r = function () { return +new Date }, ba = function (a, c) { function b() { f + c > r() ? (clearTimeout(e), e = setTimeout(b, c)) : (f = r(), a()) } var e, f = 0; return b }, s = function (a) { return document.getElementById(a) }, t = function (a) { console.error(a) }, w = function (a, c) { var b = []; v(a.split(/\s+/), function (a) { v((c || document).getElementsByTagName(a), function (a) { b.push(a) }) }); return b }, v = function (a, c) {
            if (a && c) if ("undefined" != typeof a[0]) for (var b = 0, e = a.length; b < e;)c.call(a[b],
                a[b], b++); else for (b in a) a.hasOwnProperty && a.hasOwnProperty(b) && c.call(a[b], b, a[b])
        }, y = function (a, c) { var b = []; v(a || [], function (a, f) { b.push(c(a, f)) }); return b }, da = function (a, c) { var b = []; v(a || [], function (a) { c(a) && b.push(a) }); return b }, fa = function (a, c) { return a.replace(ea, function (a, e) { return c[e] || a }) }, z = function (a, c, b) {
            v(a.split(","), function (a) {
                function f(a) { a || (a = window.event); b(a) || (a.cancelBubble = !0, a.returnValue = !1, a.preventDefault && a.preventDefault(), a.stopPropagation && a.stopPropagation()) }
                c.addEventListener ? c.addEventListener(a, f, !1) : c.attachEvent ? c.attachEvent("on" + a, f) : c["on" + a] = f
            })
        }, A = function () { return w("head")[0] }, C = function (a, c, b) { if (b) a.setAttribute(c, b); else return a && a.getAttribute && a.getAttribute(c) }, D = function (a, c) { for (var b in c) if (c.hasOwnProperty(b)) try { a.style[b] = c[b] + (0 < "|width|height|top|left|".indexOf(b) && "number" == typeof c[b] ? "px" : "") } catch (e) { } }, E = function (a) { return document.createElement(a) }, H = function () { return F || G() ? 0 : p() }, I = function (a) {
            return y(encodeURIComponent(a).split(""),
                function (a) { return 0 > "-_.!~*'()".indexOf(a) ? a : "%" + a.charCodeAt(0).toString(16).toUpperCase() }).join("")
        }, N = function (a) {
            function c(a, b) { V || (V = 1, a || la(b), d.onerror = null, clearTimeout(ma), setTimeout(function () { a && na(); var b = s(u), c = b && b.parentNode; c && c.removeChild(b) }, J)) } if (F || G()) {
                a: {
                    var b, e, f = function () { if (!q) { q = 1; clearTimeout(B); try { e = JSON.parse(b.responseText) } catch (a) { return h(1) } l(e) } }, j = 0, q = 0, x = a.timeout || K, B = setTimeout(function () { h(1) }, x), i = a.b || n(), l = a.c || n(), h = function (a) {
                        j || (j = 1, clearTimeout(B),
                            b && (b.onerror = b.onload = null, b.abort && b.abort(), b = null), a && i())
                    }; try { b = G() || window.XDomainRequest && new XDomainRequest || new XMLHttpRequest; b.onerror = b.onabort = function () { h(1) }; b.onload = b.onloadend = f; b.timeout = x; var g = a.url.join(L); if (a.data) { var f = [], m, g = g + "?"; for (m in a.data) f.push(m + "=" + a.data[m]); g += f.join(M) } b.open("GET", g, typeof ("undefined" === a.g)); b.send() } catch (k) { h(0); F = 0; a = N(a); break a } a = h
                } return a
            } var d = E("script"), g = a.a, u = p(), V = 0, ma = setTimeout(function () { c(1) }, a.timeout || K), na = a.b || n(), la =
                a.c || n(); window[g] = function (a) { c(0, a) }; a.g || (d[O] = O); d.onerror = function () { c(1) }; d.src = a.url.join(L); if (a.data) { g = []; d.src += "?"; for (key in a.data) g.push(key + "=" + a.data[key]); d.src += g.join(M) } C(d, "id", u); A().appendChild(d); return c
        }, P = function (a) { var c = []; v(a, function (a, e) { e.f && c.push(a) }); return c.sort() }, S = function () { PUBNUB.time(r); PUBNUB.time(function () { setTimeout(function () { R || (R = 1, v(ga, function (a) { a() })) }, J) }) }, G = function () {
            if (!ha.get) return 0; var a = {
                id: G.id++, send: n(), abort: function () { a.id = {} },
                open: function (c, b) { G[a.id] = a; ha.get(a.id, b) }
            }; return a
        }, aa = 1, ea = /{([\w\-]+)}/g, O = "async", L = "/", M = "&", ia = 31E4, K = 1E4, J = 1E3, T = "-pnpres", F = -1 == navigator.userAgent.indexOf("MSIE 6"); window.console || (window.console = window.console || {}); console.error || (console.error = (window.opera || {}).postError || n()); var U, W = window.localStorage; U = {
            get: function (a) { try { return W ? W.getItem(a) : -1 == document.cookie.indexOf(a) ? null : ((document.cookie || "").match(RegExp(a + "=([^;]+)")) || [])[1] || null } catch (c) { } }, set: function (a, c) {
                try {
                    if (W) return W.setItem(a,
                        c) && 0; document.cookie = a + "=" + c + "; expires=Thu, 1 Aug 2030 20:00:00 UTC; path=/"
                } catch (b) { }
            }
        }; var X, Y = Math.floor(20 * Math.random()); X = function (a) { return 0 < a.indexOf("pubsub") && a.replace("pubsub", "ps" + (20 > ++Y ? Y : Y = 1)) || a }; var Z = { list: {}, unbind: function (a) { Z.list[a] = [] }, bind: function (a, c) { (Z.list[a] = Z.list[a] || []).push(c) }, fire: function (a, c) { v(Z.list[a] || [], function (a) { a(c) }) } }, $ = s("pubnub") || {}, R = 0, ga = [], qa = function (a) {
            function c() { } function b() { } function e(a) { v(P(f), function (b) { a(f[b] || {}) }) } var f = {},
                j = 0, q = 0, x = 0, B = 0, i = 0, l = 0, h = a.publish_key || "", g = a.subscribe_key || "", m = a.ssl ? "s" : "", k = a.uuid || U.get(g + "uuid") || "", d = "http" + m + "://" + (a.origin || "pubsub.pubnub.com"), u = {
                    history: function (a, b) {
                        var b = a.callback || b, c = a.count || a.limit || 100, e = a.reverse || "false", f = a.error || n(), i = a.channel, k = a.start, h = a.end, j = {}, l = H(); if (!i) return t("Missing Channel"); if (!b) return t("Missing Callback"); if (!g) return t("Missing Subscribe Key"); j.count = c; j.reverse = e; k && (j.start = k); h && (j.end = h); N({
                            a: l, data: j, c: function (a) { b(a) }, b: f,
                            url: [d, "v2", "history", "sub-key", g, "channel", I(i)]
                        })
                    }, time: function (a) { var b = H(), c = X(d); N({ a: b, url: [c, "time", b], c: function (b) { a(b[0]) }, b: function () { a(0) } }) }, uuid: function (a) { var b = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) { var b = 16 * Math.random() | 0; return ("x" == a ? b : b & 3 | 8).toString(16) }); a && a(b); return b }, publish: function (a, b) {
                        var b = b || a.callback || n(), c = a.message, e = a.channel, f = H(); if (!c) return t("Missing Message"); if (!e) return t("Missing Channel"); if (!h) return t("Missing Publish Key");
                        if (!g) return t("Missing Subscribe Key"); c = JSON.stringify(c); c = [d, "publish", h, g, 0, I(e), f, I(c)]; N({ a: f, c: function (a) { b(a) }, b: function () { b([0, "Disconnected"]) }, url: c, data: { uuid: k } })
                    }, unsubscribe: function (a) { a = a.channel; a = y((a.join ? a.join(",") : "" + a).split(","), function (a) { return a + "," + a + T }).join(","); v(a.split(","), function (a) { R && b(a, 0); f[a] = {} }); R && c() }, subscribe: function (a, b) {
                        function h() {
                            var a = H(), b = P(f).join(","); b && (x = N({
                                timeout: ia, a: a, data: { uuid: k }, url: [ca, "subscribe", g, I(b), a, l], b: function () {
                                    e(function (a) {
                                        a.d ||
                                        (a.d = 1, a.i(a.name))
                                    }); ca = X(d); setTimeout(h, J); u.time(function (a) { e(function (b) { a && b.d ? (b.d = 0, b.j(b.name)) : b.error() }) })
                                }, c: function (a) { if (!a) return setTimeout(h, 10); e(function (a) { a.e || (a.e = 1, a.h(a.name)) }); l = !l && B ? U.get(g) || a[1] : a[1]; U.set(g, a[1]); var b, c = (2 < a.length ? a[2] : "").split(","); b = function () { var a = c.shift() || ""; return [(f[a] || {}).a || j, (a || q).split(T)[0]] }; v(a[0], function (c) { var d = b(); if (f[d[1]].f) d[0](c, a, d[1]) }); setTimeout(h, 10) }
                            }))
                        } var m = a.channel, b = (b = b || a.callback) || a.message, ja = a.error ||
                            n(), ka = a.connect || n(), oa = a.reconnect || n(), pa = a.disconnect || n(), Q = a.presence || 0, ra = a.restore, ca = X(d); ra && (B = 1); if (!m) return t("Missing Channel"); if (!b) return t("Missing Callback"); if (!g) return t("Missing Subscribe Key"); v((m.join ? m.join(",") : "" + m).split(","), function (a) {
                                var c = f[a] || {}; f[q = a] = { name: a, e: c.e, d: c.d, f: 1, a: j = b, h: ka, error: ja, i: pa, j: oa }; Q && (u.subscribe({ channel: a + T, callback: Q }), c.f || u.here_now({
                                    channel: a, callback: function (b) {
                                        v("uuids" in b ? b.uuids : [], function (c) {
                                            Q({
                                                action: "join", uuid: c, timestamp: r(),
                                                occupancy: b.occupancy || 1
                                            }, b, a)
                                        })
                                    }
                                }))
                            }); c = function () { x && x(); clearTimeout(i); i = setTimeout(h, 100) }; if (!R) return ga.push(c); c()
                    }, here_now: function (a, b) { var b = a.callback || b, c = a.error || n(), e = a.channel, f = H(), h = {}; if (!e) return t("Missing Channel"); if (!b) return t("Missing Callback"); if (!g) return t("Missing Subscribe Key"); "0" != f && (h.callback = f); N({ a: f, data: h, c: function (a) { b(a) }, b: c, url: [d, "v2", "presence", "sub_key", g, "channel", I(e)] }) }, xdr: N, ready: S, db: U, each: v, map: y, grep: da, css: D, $: s, create: E, bind: z, supplant: fa,
                    head: A, search: w, attr: C, now: r, unique: p, events: Z, updater: ba, init: qa
                }; k || (k = u.uuid()); U.set(g + "uuid", k); b = function (a, b) { var c = { uuid: k }, e = X(d), f = H(); 0 < a.indexOf(T) || ("0" != f && (c.callback = f), N({ g: b || m, timeout: 2E3, a: f, data: c, url: [e, "v2", "presence", "sub_key", g, "channel", I(a), "leave"] })) }; z("beforeunload", window, function () { e(function (a) { b(a.name, 1) }); return !0 }); return u
        }; PUBNUB = qa({
            publish_key: C($, "pub-key"), subscribe_key: C($, "sub-key"), ssl: !document.location.href.indexOf("https") || "on" == C($, "ssl"), origin: C($,
                "origin"), uuid: C($, "uuid")
        }); D($, { position: "absolute", top: -J }); if ("opera" in window || C($, "flash")) $.innerHTML = "<object id=pubnubs data=https://dh15atwfs066y.cloudfront.net/pubnub.swf><param name=movie value=https://dh15atwfs066y.cloudfront.net/pubnub.swf><param name=allowscriptaccess value=always></object>"; var ha = s("pubnubs") || {}; z("load", window, function () { setTimeout(S, 0) }); PUBNUB.rdx = function (a, c) { if (!c) return G[a].onerror(); G[a].responseText = unescape(c); G[a].onload() }; G.id = J; window.jQuery && (window.jQuery.PUBNUB =
            PUBNUB); "undefined" !== typeof module && (module.exports = PUBNUB) && S()
    };
})();
(function () {
    "use strict"; var sjcl = window['sjcl'] = { cipher: {}, hash: {}, keyexchange: {}, mode: {}, misc: {}, codec: {}, exception: { corrupt: function (a) { this.toString = function () { return "CORRUPT: " + this.message }; this.message = a }, invalid: function (a) { this.toString = function () { return "INVALID: " + this.message }; this.message = a }, bug: function (a) { this.toString = function () { return "BUG: " + this.message }; this.message = a }, notReady: function (a) { this.toString = function () { return "NOT READY: " + this.message }; this.message = a } } };
    sjcl.cipher.aes = function (a) {
        this.h[0][0][0] || this.w(); var b, c, d, e, f = this.h[0][4], g = this.h[1]; b = a.length; var h = 1; if (b !== 4 && b !== 6 && b !== 8) throw new sjcl.exception.invalid("invalid aes key size"); this.a = [d = a.slice(0), e = []]; for (a = b; a < 4 * b + 28; a++) { c = d[a - 1]; if (a % b === 0 || b === 8 && a % b === 4) { c = f[c >>> 24] << 24 ^ f[c >> 16 & 255] << 16 ^ f[c >> 8 & 255] << 8 ^ f[c & 255]; if (a % b === 0) { c = c << 8 ^ c >>> 24 ^ h << 24; h = h << 1 ^ (h >> 7) * 283 } } d[a] = d[a - b] ^ c } for (b = 0; a; b++, a--) {
            c = d[b & 3 ? a : a - 4]; e[b] = a <= 4 || b < 4 ? c : g[0][f[c >>> 24]] ^ g[1][f[c >> 16 & 255]] ^ g[2][f[c >> 8 & 255]] ^
                g[3][f[c & 255]]
        }
    };
    sjcl.cipher.aes.prototype = {
        encrypt: function (a) { return this.H(a, 0) }, decrypt: function (a) { return this.H(a, 1) }, h: [[[], [], [], [], []], [[], [], [], [], []]], w: function () {
            var a = this.h[0], b = this.h[1], c = a[4], d = b[4], e, f, g, h = [], i = [], k, j, l, m; for (e = 0; e < 0x100; e++)i[(h[e] = e << 1 ^ (e >> 7) * 283) ^ e] = e; for (f = g = 0; !c[f]; f ^= k || 1, g = i[g] || 1) { l = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4; l = l >> 8 ^ l & 255 ^ 99; c[f] = l; d[l] = f; j = h[e = h[k = h[f]]]; m = j * 0x1010101 ^ e * 0x10001 ^ k * 0x101 ^ f * 0x1010100; j = h[l] * 0x101 ^ l * 0x1010100; for (e = 0; e < 4; e++) { a[e][f] = j = j << 24 ^ j >>> 8; b[e][l] = m = m << 24 ^ m >>> 8 } } for (e =
                0; e < 5; e++) { a[e] = a[e].slice(0); b[e] = b[e].slice(0) }
        }, H: function (a, b) {
            if (a.length !== 4) throw new sjcl.exception.invalid("invalid aes block size"); var c = this.a[b], d = a[0] ^ c[0], e = a[b ? 3 : 1] ^ c[1], f = a[2] ^ c[2]; a = a[b ? 1 : 3] ^ c[3]; var g, h, i, k = c.length / 4 - 2, j, l = 4, m = [0, 0, 0, 0]; g = this.h[b]; var n = g[0], o = g[1], p = g[2], q = g[3], r = g[4]; for (j = 0; j < k; j++) {
                g = n[d >>> 24] ^ o[e >> 16 & 255] ^ p[f >> 8 & 255] ^ q[a & 255] ^ c[l]; h = n[e >>> 24] ^ o[f >> 16 & 255] ^ p[a >> 8 & 255] ^ q[d & 255] ^ c[l + 1]; i = n[f >>> 24] ^ o[a >> 16 & 255] ^ p[d >> 8 & 255] ^ q[e & 255] ^ c[l + 2]; a = n[a >>> 24] ^ o[d >> 16 &
                    255] ^ p[e >> 8 & 255] ^ q[f & 255] ^ c[l + 3]; l += 4; d = g; e = h; f = i
            } for (j = 0; j < 4; j++) { m[b ? 3 & -j : j] = r[d >>> 24] << 24 ^ r[e >> 16 & 255] << 16 ^ r[f >> 8 & 255] << 8 ^ r[a & 255] ^ c[l++]; g = d; d = e; e = f; f = a; a = g } return m
        }
    };
    sjcl.bitArray = {
        bitSlice: function (a, b, c) { a = sjcl.bitArray.P(a.slice(b / 32), 32 - (b & 31)).slice(1); return c === undefined ? a : sjcl.bitArray.clamp(a, c - b) }, extract: function (a, b, c) { var d = Math.floor(-b - c & 31); return ((b + c - 1 ^ b) & -32 ? a[b / 32 | 0] << 32 - d ^ a[b / 32 + 1 | 0] >>> d : a[b / 32 | 0] >>> d) & (1 << c) - 1 }, concat: function (a, b) { if (a.length === 0 || b.length === 0) return a.concat(b); var c = a[a.length - 1], d = sjcl.bitArray.getPartial(c); return d === 32 ? a.concat(b) : sjcl.bitArray.P(b, d, c | 0, a.slice(0, a.length - 1)) }, bitLength: function (a) {
            var b = a.length;
            if (b === 0) return 0; return (b - 1) * 32 + sjcl.bitArray.getPartial(a[b - 1])
        }, clamp: function (a, b) { if (a.length * 32 < b) return a; a = a.slice(0, Math.ceil(b / 32)); var c = a.length; b &= 31; if (c > 0 && b) a[c - 1] = sjcl.bitArray.partial(b, a[c - 1] & 2147483648 >> b - 1, 1); return a }, partial: function (a, b, c) { if (a === 32) return b; return (c ? b | 0 : b << 32 - a) + a * 0x10000000000 }, getPartial: function (a) { return Math.round(a / 0x10000000000) || 32 }, equal: function (a, b) {
            if (sjcl.bitArray.bitLength(a) !== sjcl.bitArray.bitLength(b)) return false; var c = 0, d; for (d = 0; d < a.length; d++)c |=
                a[d] ^ b[d]; return c === 0
        }, P: function (a, b, c, d) { var e; e = 0; if (d === undefined) d = []; for (; b >= 32; b -= 32) { d.push(c); c = 0 } if (b === 0) return d.concat(a); for (e = 0; e < a.length; e++) { d.push(c | a[e] >>> b); c = a[e] << 32 - b } e = a.length ? a[a.length - 1] : 0; a = sjcl.bitArray.getPartial(e); d.push(sjcl.bitArray.partial(b + a & 31, b + a > 32 ? c : d.pop(), 1)); return d }, k: function (a, b) { return [a[0] ^ b[0], a[1] ^ b[1], a[2] ^ b[2], a[3] ^ b[3]] }
    };
    sjcl.codec.utf8String = { fromBits: function (a) { var b = "", c = sjcl.bitArray.bitLength(a), d, e; for (d = 0; d < c / 8; d++) { if ((d & 3) === 0) e = a[d / 4]; b += String.fromCharCode(e >>> 24); e <<= 8 } return decodeURIComponent(escape(b)) }, toBits: function (a) { a = unescape(encodeURIComponent(a)); var b = [], c, d = 0; for (c = 0; c < a.length; c++) { d = d << 8 | a.charCodeAt(c); if ((c & 3) === 3) { b.push(d); d = 0 } } c & 3 && b.push(sjcl.bitArray.partial(8 * (c & 3), d)); return b } };
    sjcl.codec.hex = { fromBits: function (a) { var b = "", c; for (c = 0; c < a.length; c++)b += ((a[c] | 0) + 0xf00000000000).toString(16).substr(4); return b.substr(0, sjcl.bitArray.bitLength(a) / 4) }, toBits: function (a) { var b, c = [], d; a = a.replace(/\s|0x/g, ""); d = a.length; a += "00000000"; for (b = 0; b < a.length; b += 8)c.push(parseInt(a.substr(b, 8), 16) ^ 0); return sjcl.bitArray.clamp(c, d * 4) } };
    sjcl.codec.base64 = {
        D: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fromBits: function (a, b, c) { var d = "", e = 0, f = sjcl.codec.base64.D, g = 0, h = sjcl.bitArray.bitLength(a); if (c) f = f.substr(0, 62) + "-_"; for (c = 0; d.length * 6 < h;) { d += f.charAt((g ^ a[c] >>> e) >>> 26); if (e < 6) { g = a[c] << 6 - e; e += 26; c++ } else { g <<= 6; e -= 6 } } for (; d.length & 3 && !b;)d += "="; return d }, toBits: function (a, b) {
            a = a.replace(/\s|=/g, ""); var c = [], d = 0, e = sjcl.codec.base64.D, f = 0, g; if (b) e = e.substr(0, 62) + "-_"; for (b = 0; b < a.length; b++) {
                g = e.indexOf(a.charAt(b));
                if (g < 0) throw new sjcl.exception.invalid("this isn't base64!"); if (d > 26) { d -= 26; c.push(f ^ g >>> d); f = g << 32 - d } else { d += 6; f ^= g << 32 - d }
            } d & 56 && c.push(sjcl.bitArray.partial(d & 56, f, 1)); return c
        }
    }; sjcl.codec.base64url = { fromBits: function (a) { return sjcl.codec.base64.fromBits(a, 1, 1) }, toBits: function (a) { return sjcl.codec.base64.toBits(a, 1) } }; sjcl.hash.sha256 = function (a) { this.a[0] || this.w(); if (a) { this.n = a.n.slice(0); this.i = a.i.slice(0); this.e = a.e } else this.reset() }; sjcl.hash.sha256.hash = function (a) { return (new sjcl.hash.sha256).update(a).finalize() };
    sjcl.hash.sha256.prototype = {
        blockSize: 512, reset: function () { this.n = this.N.slice(0); this.i = []; this.e = 0; return this }, update: function (a) { if (typeof a === "string") a = sjcl.codec.utf8String.toBits(a); var b, c = this.i = sjcl.bitArray.concat(this.i, a); b = this.e; a = this.e = b + sjcl.bitArray.bitLength(a); for (b = 512 + b & -512; b <= a; b += 512)this.C(c.splice(0, 16)); return this }, finalize: function () {
            var a, b = this.i, c = this.n; b = sjcl.bitArray.concat(b, [sjcl.bitArray.partial(1, 1)]); for (a = b.length + 2; a & 15; a++)b.push(0); b.push(Math.floor(this.e /
                4294967296)); for (b.push(this.e | 0); b.length;)this.C(b.splice(0, 16)); this.reset(); return c
        }, N: [], a: [], w: function () { function a(e) { return (e - Math.floor(e)) * 0x100000000 | 0 } var b = 0, c = 2, d; a: for (; b < 64; c++) { for (d = 2; d * d <= c; d++)if (c % d === 0) continue a; if (b < 8) this.N[b] = a(Math.pow(c, 0.5)); this.a[b] = a(Math.pow(c, 1 / 3)); b++ } }, C: function (a) {
            var b, c, d = a.slice(0), e = this.n, f = this.a, g = e[0], h = e[1], i = e[2], k = e[3], j = e[4], l = e[5], m = e[6], n = e[7]; for (a = 0; a < 64; a++) {
                if (a < 16) b = d[a]; else {
                    b = d[a + 1 & 15]; c = d[a + 14 & 15]; b = d[a & 15] = (b >>> 7 ^ b >>> 18 ^
                        b >>> 3 ^ b << 25 ^ b << 14) + (c >>> 17 ^ c >>> 19 ^ c >>> 10 ^ c << 15 ^ c << 13) + d[a & 15] + d[a + 9 & 15] | 0
                } b = b + n + (j >>> 6 ^ j >>> 11 ^ j >>> 25 ^ j << 26 ^ j << 21 ^ j << 7) + (m ^ j & (l ^ m)) + f[a]; n = m; m = l; l = j; j = k + b | 0; k = i; i = h; h = g; g = b + (h & i ^ k & (h ^ i)) + (h >>> 2 ^ h >>> 13 ^ h >>> 22 ^ h << 30 ^ h << 19 ^ h << 10) | 0
            } e[0] = e[0] + g | 0; e[1] = e[1] + h | 0; e[2] = e[2] + i | 0; e[3] = e[3] + k | 0; e[4] = e[4] + j | 0; e[5] = e[5] + l | 0; e[6] = e[6] + m | 0; e[7] = e[7] + n | 0
        }
    };
    sjcl.mode.ccm = {
        name: "ccm", encrypt: function (a, b, c, d, e) { var f, g = b.slice(0), h = sjcl.bitArray, i = h.bitLength(c) / 8, k = h.bitLength(g) / 8; e = e || 64; d = d || []; if (i < 7) throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"); for (f = 2; f < 4 && k >>> 8 * f; f++); if (f < 15 - i) f = 15 - i; c = h.clamp(c, 8 * (15 - f)); b = sjcl.mode.ccm.G(a, b, c, d, e, f); g = sjcl.mode.ccm.I(a, g, c, b, e, f); return h.concat(g.data, g.tag) }, decrypt: function (a, b, c, d, e) {
            e = e || 64; d = d || []; var f = sjcl.bitArray, g = f.bitLength(c) / 8, h = f.bitLength(b), i = f.clamp(b, h - e), k = f.bitSlice(b,
                h - e); h = (h - e) / 8; if (g < 7) throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"); for (b = 2; b < 4 && h >>> 8 * b; b++); if (b < 15 - g) b = 15 - g; c = f.clamp(c, 8 * (15 - b)); i = sjcl.mode.ccm.I(a, i, c, k, e, b); a = sjcl.mode.ccm.G(a, i.data, c, d, e, b); if (!f.equal(i.tag, a)) throw new sjcl.exception.corrupt("ccm: tag doesn't match"); return i.data
        }, G: function (a, b, c, d, e, f) {
            var g = [], h = sjcl.bitArray, i = h.k; e /= 8; if (e % 2 || e < 4 || e > 16) throw new sjcl.exception.invalid("ccm: invalid tag length"); if (d.length > 0xffffffff || b.length > 0xffffffff) throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");
            f = [h.partial(8, (d.length ? 64 : 0) | e - 2 << 2 | f - 1)]; f = h.concat(f, c); f[3] |= h.bitLength(b) / 8; f = a.encrypt(f); if (d.length) { c = h.bitLength(d) / 8; if (c <= 65279) g = [h.partial(16, c)]; else if (c <= 0xffffffff) g = h.concat([h.partial(16, 65534)], [c]); g = h.concat(g, d); for (d = 0; d < g.length; d += 4)f = a.encrypt(i(f, g.slice(d, d + 4).concat([0, 0, 0]))) } for (d = 0; d < b.length; d += 4)f = a.encrypt(i(f, b.slice(d, d + 4).concat([0, 0, 0]))); return h.clamp(f, e * 8)
        }, I: function (a, b, c, d, e, f) {
            var g, h = sjcl.bitArray; g = h.k; var i = b.length, k = h.bitLength(b); c = h.concat([h.partial(8,
                f - 1)], c).concat([0, 0, 0]).slice(0, 4); d = h.bitSlice(g(d, a.encrypt(c)), 0, e); if (!i) return { tag: d, data: [] }; for (g = 0; g < i; g += 4) { c[3]++; e = a.encrypt(c); b[g] ^= e[0]; b[g + 1] ^= e[1]; b[g + 2] ^= e[2]; b[g + 3] ^= e[3] } return { tag: d, data: h.clamp(b, k) }
        }
    };
    sjcl.mode.ocb2 = {
        name: "ocb2", encrypt: function (a, b, c, d, e, f) {
            if (sjcl.bitArray.bitLength(c) !== 128) throw new sjcl.exception.invalid("ocb iv must be 128 bits"); var g, h = sjcl.mode.ocb2.A, i = sjcl.bitArray, k = i.k, j = [0, 0, 0, 0]; c = h(a.encrypt(c)); var l, m = []; d = d || []; e = e || 64; for (g = 0; g + 4 < b.length; g += 4) { l = b.slice(g, g + 4); j = k(j, l); m = m.concat(k(c, a.encrypt(k(c, l)))); c = h(c) } l = b.slice(g); b = i.bitLength(l); g = a.encrypt(k(c, [0, 0, 0, b])); l = i.clamp(k(l.concat([0, 0, 0]), g), b); j = k(j, k(l.concat([0, 0, 0]), g)); j = a.encrypt(k(j, k(c, h(c))));
            if (d.length) j = k(j, f ? d : sjcl.mode.ocb2.pmac(a, d)); return m.concat(i.concat(l, i.clamp(j, e)))
        }, decrypt: function (a, b, c, d, e, f) {
            if (sjcl.bitArray.bitLength(c) !== 128) throw new sjcl.exception.invalid("ocb iv must be 128 bits"); e = e || 64; var g = sjcl.mode.ocb2.A, h = sjcl.bitArray, i = h.k, k = [0, 0, 0, 0], j = g(a.encrypt(c)), l, m, n = sjcl.bitArray.bitLength(b) - e, o = []; d = d || []; for (c = 0; c + 4 < n / 32; c += 4) { l = i(j, a.decrypt(i(j, b.slice(c, c + 4)))); k = i(k, l); o = o.concat(l); j = g(j) } m = n - c * 32; l = a.encrypt(i(j, [0, 0, 0, m])); l = i(l, h.clamp(b.slice(c),
                m).concat([0, 0, 0])); k = i(k, l); k = a.encrypt(i(k, i(j, g(j)))); if (d.length) k = i(k, f ? d : sjcl.mode.ocb2.pmac(a, d)); if (!h.equal(h.clamp(k, e), h.bitSlice(b, n))) throw new sjcl.exception.corrupt("ocb: tag doesn't match"); return o.concat(h.clamp(l, m))
        }, pmac: function (a, b) {
            var c, d = sjcl.mode.ocb2.A, e = sjcl.bitArray, f = e.k, g = [0, 0, 0, 0], h = a.encrypt([0, 0, 0, 0]); h = f(h, d(d(h))); for (c = 0; c + 4 < b.length; c += 4) { h = d(h); g = f(g, a.encrypt(f(h, b.slice(c, c + 4)))) } b = b.slice(c); if (e.bitLength(b) < 128) {
                h = f(h, d(h)); b = e.concat(b, [2147483648 | 0, 0,
                    0, 0])
            } g = f(g, b); return a.encrypt(f(d(f(h, d(h))), g))
        }, A: function (a) { return [a[0] << 1 ^ a[1] >>> 31, a[1] << 1 ^ a[2] >>> 31, a[2] << 1 ^ a[3] >>> 31, a[3] << 1 ^ (a[0] >>> 31) * 135] }
    }; sjcl.misc.hmac = function (a, b) { this.M = b = b || sjcl.hash.sha256; var c = [[], []], d = b.prototype.blockSize / 32; this.l = [new b, new b]; if (a.length > d) a = b.hash(a); for (b = 0; b < d; b++) { c[0][b] = a[b] ^ 909522486; c[1][b] = a[b] ^ 1549556828 } this.l[0].update(c[0]); this.l[1].update(c[1]) };
    sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function (a, b) { a = (new this.M(this.l[0])).update(a, b).finalize(); return (new this.M(this.l[1])).update(a).finalize() };
    sjcl.misc.pbkdf2 = function (a, b, c, d, e) { c = c || 1E3; if (d < 0 || c < 0) throw sjcl.exception.invalid("invalid params to pbkdf2"); if (typeof a === "string") a = sjcl.codec.utf8String.toBits(a); e = e || sjcl.misc.hmac; a = new e(a); var f, g, h, i, k = [], j = sjcl.bitArray; for (i = 1; 32 * k.length < (d || 1); i++) { e = f = a.encrypt(j.concat(b, [i])); for (g = 1; g < c; g++) { f = a.encrypt(f); for (h = 0; h < f.length; h++)e[h] ^= f[h] } k = k.concat(e) } if (d) k = j.clamp(k, d); return k };
    sjcl.random = {
        randomWords: function (a, b) { var c = []; b = this.isReady(b); var d; if (b === 0) throw new sjcl.exception.notReady("generator isn't seeded"); else b & 2 && this.U(!(b & 1)); for (b = 0; b < a; b += 4) { (b + 1) % 0x10000 === 0 && this.L(); d = this.u(); c.push(d[0], d[1], d[2], d[3]) } this.L(); return c.slice(0, a) }, setDefaultParanoia: function (a) { this.t = a }, addEntropy: function (a, b, c) {
            c = c || "user"; var d, e, f = (new Date).valueOf(), g = this.q[c], h = this.isReady(); d = this.F[c]; if (d === undefined) d = this.F[c] = this.R++; if (g === undefined) g = this.q[c] = 0; this.q[c] =
                (this.q[c] + 1) % this.b.length; switch (typeof a) { case "number": break; case "object": if (b === undefined) for (c = b = 0; c < a.length; c++)for (e = a[c]; e > 0;) { b++; e >>>= 1 } this.b[g].update([d, this.J++, 2, b, f, a.length].concat(a)); break; case "string": if (b === undefined) b = a.length; this.b[g].update([d, this.J++, 3, b, f, a.length]); this.b[g].update(a); break; default: throw new sjcl.exception.bug("random: addEntropy only supports number, array or string"); }this.j[g] += b; this.f += b; if (h === 0) {
                    this.isReady() !== 0 && this.K("seeded", Math.max(this.g,
                        this.f)); this.K("progress", this.getProgress())
                }
        }, isReady: function (a) { a = this.B[a !== undefined ? a : this.t]; return this.g && this.g >= a ? this.j[0] > 80 && (new Date).valueOf() > this.O ? 3 : 1 : this.f >= a ? 2 : 0 }, getProgress: function (a) { a = this.B[a ? a : this.t]; return this.g >= a ? 1["0"] : this.f > a ? 1["0"] : this.f / a }, startCollectors: function () {
            if (!this.m) {
                if (window.addEventListener) { window.addEventListener("load", this.o, false); window.addEventListener("mousemove", this.p, false) } else if (document.attachEvent) {
                    document.attachEvent("onload",
                        this.o); document.attachEvent("onmousemove", this.p)
                } else throw new sjcl.exception.bug("can't attach event"); this.m = true
            }
        }, stopCollectors: function () { if (this.m) { if (window.removeEventListener) { window.removeEventListener("load", this.o, false); window.removeEventListener("mousemove", this.p, false) } else if (window.detachEvent) { window.detachEvent("onload", this.o); window.detachEvent("onmousemove", this.p) } this.m = false } }, addEventListener: function (a, b) { this.r[a][this.Q++] = b }, removeEventListener: function (a, b) {
            var c;
            a = this.r[a]; var d = []; for (c in a) a.hasOwnProperty(c) && a[c] === b && d.push(c); for (b = 0; b < d.length; b++) { c = d[b]; delete a[c] }
        }, b: [new sjcl.hash.sha256], j: [0], z: 0, q: {}, J: 0, F: {}, R: 0, g: 0, f: 0, O: 0, a: [0, 0, 0, 0, 0, 0, 0, 0], d: [0, 0, 0, 0], s: undefined, t: 6, m: false, r: { progress: {}, seeded: {} }, Q: 0, B: [0, 48, 64, 96, 128, 192, 0x100, 384, 512, 768, 1024], u: function () { for (var a = 0; a < 4; a++) { this.d[a] = this.d[a] + 1 | 0; if (this.d[a]) break } return this.s.encrypt(this.d) }, L: function () { this.a = this.u().concat(this.u()); this.s = new sjcl.cipher.aes(this.a) },
        T: function (a) { this.a = sjcl.hash.sha256.hash(this.a.concat(a)); this.s = new sjcl.cipher.aes(this.a); for (a = 0; a < 4; a++) { this.d[a] = this.d[a] + 1 | 0; if (this.d[a]) break } }, U: function (a) {
            var b = [], c = 0, d; this.O = b[0] = (new Date).valueOf() + 3E4; for (d = 0; d < 16; d++)b.push(Math.random() * 0x100000000 | 0); for (d = 0; d < this.b.length; d++) { b = b.concat(this.b[d].finalize()); c += this.j[d]; this.j[d] = 0; if (!a && this.z & 1 << d) break } if (this.z >= 1 << this.b.length) { this.b.push(new sjcl.hash.sha256); this.j.push(0) } this.f -= c; if (c > this.g) this.g = c; this.z++;
            this.T(b)
        }, p: function (a) { sjcl.random.addEntropy([a.x || a.clientX || a.offsetX, a.y || a.clientY || a.offsetY], 2, "mouse") }, o: function () { sjcl.random.addEntropy(new Date, 2, "loadtime") }, K: function (a, b) { var c; a = sjcl.random.r[a]; var d = []; for (c in a) a.hasOwnProperty(c) && d.push(a[c]); for (c = 0; c < d.length; c++)d[c](b) }
    }; try { var s = new Uint32Array(32); crypto.getRandomValues(s); sjcl.random.addEntropy(s, 1024, "crypto['getRandomValues']") } catch (t) { }
    sjcl.json = {
        defaults: { v: 1, iter: 1E3, ks: 128, ts: 64, mode: "ccm", adata: "", cipher: "aes" }, encrypt: function (a, b, c, d) {
            c = c || {}; d = d || {}; var e = sjcl.json, f = e.c({ iv: sjcl.random.randomWords(4, 0) }, e.defaults); e.c(f, c); if (typeof f.salt === "string") f.salt = sjcl.codec.base64.toBits(f.salt); if (typeof f.iv === "string") f.iv = sjcl.codec.base64.toBits(f.iv); if (!sjcl.mode[f.mode] || !sjcl.cipher[f.cipher] || typeof a === "string" && f.iter <= 100 || f.ts !== 64 && f.ts !== 96 && f.ts !== 128 || f.ks !== 128 && f.ks !== 192 && f.ks !== 0x100 || f.iv.length < 2 || f.iv.length >
                4) throw new sjcl.exception.invalid("json encrypt: invalid parameters"); if (typeof a === "string") { c = sjcl.misc.cachedPbkdf2(a, f); a = c.key.slice(0, f.ks / 32); f.salt = c.salt } if (typeof b === "string") b = sjcl.codec.utf8String.toBits(b); c = new sjcl.cipher[f.cipher](a); e.c(d, f); d.key = a; f.ct = sjcl.mode[f.mode].encrypt(c, b, f.iv, f.adata, f.ts); return e.encode(e.V(f, e.defaults))
        }, decrypt: function (a, b, c, d) {
            c = c || {}; d = d || {}; var e = sjcl.json; b = e.c(e.c(e.c({}, e.defaults), e.decode(b)), c, true); if (typeof b.salt === "string") b.salt =
                sjcl.codec.base64.toBits(b.salt); if (typeof b.iv === "string") b.iv = sjcl.codec.base64.toBits(b.iv); if (!sjcl.mode[b.mode] || !sjcl.cipher[b.cipher] || typeof a === "string" && b.iter <= 100 || b.ts !== 64 && b.ts !== 96 && b.ts !== 128 || b.ks !== 128 && b.ks !== 192 && b.ks !== 0x100 || !b.iv || b.iv.length < 2 || b.iv.length > 4) throw new sjcl.exception.invalid("json decrypt: invalid parameters"); if (typeof a === "string") { c = sjcl.misc.cachedPbkdf2(a, b); a = c.key.slice(0, b.ks / 32); b.salt = c.salt } c = new sjcl.cipher[b.cipher](a); c = sjcl.mode[b.mode].decrypt(c,
                    b.ct, b.iv, b.adata, b.ts); e.c(d, b); d.key = a; return sjcl.codec.utf8String.fromBits(c)
        }, encode: function (a) {
            var b, c = "{", d = ""; for (b in a) if (a.hasOwnProperty(b)) {
                if (!b.match(/^[a-z0-9]+$/i)) throw new sjcl.exception.invalid("json encode: invalid property name"); c += d + b + ":"; d = ","; switch (typeof a[b]) {
                    case "number": case "boolean": c += a[b]; break; case "string": c += '"' + escape(a[b]) + '"'; break; case "object": c += '"' + sjcl.codec.base64.fromBits(a[b], 1) + '"'; break; default: throw new sjcl.exception.bug("json encode: unsupported type");
                }
            } return c + "}"
        }, decode: function (a) { a = a.replace(/\s/g, ""); if (!a.match(/^\{.*\}$/)) throw new sjcl.exception.invalid("json decode: this isn't json!"); a = a.replace(/^\{|\}$/g, "").split(/,/); var b = {}, c, d; for (c = 0; c < a.length; c++) { if (!(d = a[c].match(/^([a-z][a-z0-9]*):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i))) throw new sjcl.exception.invalid("json decode: this isn't json!"); b[d[1]] = d[2] ? parseInt(d[2], 10) : d[1].match(/^(ct|salt|iv)$/) ? sjcl.codec.base64.toBits(d[3]) : unescape(d[3]) } return b }, c: function (a, b, c) {
            if (a ===
                undefined) a = {}; if (b === undefined) return a; var d; for (d in b) if (b.hasOwnProperty(d)) { if (c && a[d] !== undefined && a[d] !== b[d]) throw new sjcl.exception.invalid("required parameter overridden"); a[d] = b[d] } return a
        }, V: function (a, b) { var c = {}, d; for (d in a) if (a.hasOwnProperty(d) && a[d] !== b[d]) c[d] = a[d]; return c }, W: function (a, b) { var c = {}, d; for (d = 0; d < b.length; d++)if (a[b[d]] !== undefined) c[b[d]] = a[b[d]]; return c }
    }; sjcl.encrypt = sjcl.json.encrypt; sjcl.decrypt = sjcl.json.decrypt; sjcl.misc.S = {};
    sjcl.misc.cachedPbkdf2 = function (a, b) { var c = sjcl.misc.S, d; b = b || {}; d = b.iter || 1E3; c = c[a] = c[a] || {}; d = c[d] = c[d] || { firstSalt: b.salt && b.salt.length ? b.salt.slice(0) : sjcl.random.randomWords(2, 0) }; c = b.salt === undefined ? d.firstSalt : b.salt; d[c] = d[c] || sjcl.misc.pbkdf2(a, c, b.iter); return { key: d[c].slice(0), salt: c.slice(0) } };
})();
(function () {
    function p(b) { c.each(d, function (a) { if (a in h && b in h[a]) { var e = h[a][b]; e.connected && (e.connected = !1, e.socket.user_count--, c.events.fire(a + "leave", e)) } }) } function n(b, a) { var e = i(b); return "password" in e && e.password && sjcl.encrypt(e.password, JSON.stringify(a) + "") || a } function l(b, a, e, g, d) {
        var k = i(a); c.publish({
            channel: k.channel, message: { name: b, ns: a, data: n(a, e || {}), uuid: m, geo: k.location || [0, 0] }, callback: function (c) {
                if (c[0]) return (d || function () { })(c); var j = 2 * (g || 500); setTimeout(function () {
                    l(b,
                        a, e, j, d)
                }, 5500 < j ? 5500 : j)
            }
        })
    } function q(b) { b = b || function () { }; navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition(function (a) { socket.location = [a.coords.latitude, a.coords.longitude]; b(socket.location) }) || b([0, 0]) } function i(b) {
        var a = d[b] || (d[b] = {
            namespace: b, connected: !1, users: h[b] = {}, user_count: 1, get_user_list: function () { return d[b].users }, get_user_count: function () { return d[b].user_count }, emit: function (a, c, d) { l(a, b, c, 0, d) }, send: function (a, c) { l("message", b, a, 0, c) }, on: function (a,
                d) { "string" === typeof a ? c.events.bind(b + a, d) : "object" === typeof a && c.each(a, function (a) { c.events.bind(b + a, d) }) }, disconnect: function () { c.unsubscribe({ channel: a.channel }) }, history: function (a, d) { var h = i(b); a.channel = h.channel; c.history(a, function (a) { var c = []; PUBNUB.each(a[0] || [], function (a) { "message" == a.name && a.ns == b && c.push(a) }); a[0] = c; d(a) }) }, here_now: function (a) { var d = i(b); c.here_now({ channel: d.channel }, a) }
        }); return a
    } var c = PUBNUB, r = 0, m = PUBNUB.db.get("uuid") || c.uuid(function (c) {
        PUBNUB.db.set("uuid",
            m = c)
    }), d = {}, h = {}, s = window.io = {
        connected: {}, connect: function (b, a) {
            function e() { var a = c.map(d, function (a) { return a }); l("ping", j, { nss: a, cuser: n }) } var g = (b + "////").split("/"), a = a || {}, n = a.user || {}, k = "presence" in a ? a.presence : !0, t = g[2], j = (g[3] || "standard") + "-" + a.channel, g = a.channel, f = i(j); f.channel = g; f.password = "sjcl" in window && a.password; if (g in s.connected) return f; a.geo && setInterval(q, 15E3) && q(); a.uuid = m; a.origin = t; c = s.connected[g] = r ? c : PUBNUB.init(a); r = 1; f.disconnected = 0; c.subscribe({
                channel: f.channel,
                disconnect: function () { f.disconnected || (f.disconnected = 1, c.each(d, function (a) { c.events.fire(a + "disconnect", {}) })) }, reconnect: function () { c.disconnected = 0 }, connect: function () { f.disconnected = 0; c.each(d, function (a) { var b = i(a); b.connected || (b.connected = !0, c.events.fire(a + "connect", {})) }); e() }, presence: k && function (a) { "leave" === a.action && p(a.uuid); "timeout" === a.action && p(a.uuid); "join" === a.action && e() }, callback: function (a) {
                    f.disconnected && c.each(d, function (a) { c.events.fire(a + "reconnect", {}) }); f.disconnected =
                        0; var b; var e = a.data, g = i(a.ns); if (g.password) try { b = JSON.parse(sjcl.decrypt(g.password, e)) } catch (j) { b = null } else b = e; a.ns in d && b && c.events.fire(a.ns + a.name, b); a.uuid && a.uuid !== m && "ping" === a.name && c.each(b.nss, function (d) { h[d] = h[d] || {}; var e = h[d][a.uuid] = h[d][a.uuid] || { geo: a.geo || [0, 0], uuid: a.uuid, last: +new Date, socket: f, namespace: d, connected: !1, slot: f.user_count++ }; e.last = +new Date; e.data = b.cuser; e.connected || (c.events.fire(d + "join", e), e.connected = !0) })
                }
            }); k && (setInterval(e, 3E4), e()); return f
        }
    }
})();
