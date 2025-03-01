(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[5480, 6689], {
		4319: function (e, t) {
			! function (e) {
				"use strict";
				/*!
				 * EasePack 3.12.5
				 * https://gsap.com
				 *
				 * @license Copyright 2008-2024, GreenSock. All rights reserved.
				 * Subject to the terms at https://gsap.com/standard-license or for
				 * Club GSAP members, the agreement issued with that membership.
				 * @author: Jack Doyle, jack@greensock.com
				 */
				var t, r, n = function () {
						return t || "undefined" != typeof window && (t = window.gsap) && t.registerPlugin && t
					},
					s = function (e, t) {
						return !!(void 0 === e ? t : e && !~(e + "").indexOf("false"))
					},
					i = function (e) {
						if (t = e || n()) {
							r = t.registerEase;
							var s, i = t.parseEase(),
								o = function (e) {
									return function (t) {
										var r = .5 + t / 2;
										e.config = function (t) {
											return e(2 * (1 - t) * t * r + t * t)
										}
									}
								};
							for (s in i) i[s].config || o(i[s]);
							for (s in r("slow", u), r("expoScale", d), r("rough", h), p) "version" !== s && t.core.globals(s, p[s])
						}
					},
					o = function (e, t, r) {
						var n = (e = Math.min(1, e || .7)) < 1 ? t || 0 === t ? t : .7 : 0,
							i = (1 - e) / 2,
							o = i + e,
							a = s(r);
						return function (e) {
							var t = e + (.5 - e) * n;
							return e < i ? a ? 1 - (e = 1 - e / i) * e : t - (e = 1 - e / i) * e * e * e * t : e > o ? a ? 1 === e ? 0 : 1 - (e = (e - o) / i) * e : t + (e - t) * (e = (e - o) / i) * e * e * e : a ? 1 : t
						}
					},
					a = function (e, r, n) {
						var s = Math.log(r / e),
							i = r - e;
						return n && (n = t.parseEase(n)),
							function (t) {
								return (e * Math.exp(s * (n ? n(t) : t)) - e) / i
							}
					},
					l = function (e, t, r) {
						this.t = e, this.v = t, r && (this.next = r, r.prev = this, this.c = r.v - t, this.gap = r.t - e)
					},
					c = function (e) {
						"object" != typeof e && (e = {
							points: +e || 20
						});
						for (var r, n, i, o, a, c, u, d = e.taper || "none", h = [], p = 0, f = 0 | (+e.points || 20), m = f, v = s(e.randomize, !0), g = s(e.clamp), _ = t ? t.parseEase(e.template) : 0, x = .4 * (+e.strength || 1); --m > -1;) r = v ? Math.random() : 1 / f * m, n = _ ? _(r) : r, i = "none" === d ? x : "out" === d ? (o = 1 - r) * o * x : "in" === d ? r * r * x : r < .5 ? (o = 2 * r) * o * .5 * x : (o = (1 - r) * 2) * o * .5 * x, v ? n += Math.random() * i - .5 * i : m % 2 ? n += .5 * i : n -= .5 * i, g && (n > 1 ? n = 1 : n < 0 && (n = 0)), h[p++] = {
							x: r,
							y: n
						};
						for (h.sort(function (e, t) {
								return e.x - t.x
							}), c = new l(1, 1, null), m = f; m--;) c = new l((a = h[m]).x, a.y, c);
						return u = new l(0, 0, c.t ? c : c.next),
							function (e) {
								var t = u;
								if (e > t.t) {
									for (; t.next && e >= t.t;) t = t.next;
									t = t.prev
								} else
									for (; t.prev && e <= t.t;) t = t.prev;
								return u = t, t.v + (e - t.t) / t.gap * t.c
							}
					},
					u = o(.7);
				u.ease = u, u.config = o;
				var d = a(1, 2);
				d.config = a;
				var h = c();
				h.ease = h, h.config = c;
				var p = {
					SlowMo: u,
					RoughEase: h,
					ExpoScaleEase: d
				};
				for (var f in p) p[f].register = i, p[f].version = "3.12.5";
				n() && t.registerPlugin(u), e.EasePack = p, e.ExpoScaleEase = d, e.RoughEase = h, e.SlowMo = u, e.default = p, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t)
		},
		200: function (e, t, r) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/post/[uid]", function () {
				return r(9261)
			}])
		},
		5033: function (e, t, r) {
			"use strict";
			var n = r(3454);
			r(1479);
			var s = r(7294),
				i = s && "object" == typeof s && "default" in s ? s : {
					default: s
				};

			function o(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}
			var a = void 0 !== n && n.env && !0,
				l = function (e) {
					return "[object String]" === Object.prototype.toString.call(e)
				},
				c = function () {
					function e(e) {
						var t = void 0 === e ? {} : e,
							r = t.name,
							n = void 0 === r ? "stylesheet" : r,
							s = t.optimizeForSpeed,
							i = void 0 === s ? a : s;
						u(l(n), "`name` must be a string"), this._name = n, this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}", u("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = i, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
						var o = document.querySelector('meta[property="csp-nonce"]');
						this._nonce = o ? o.getAttribute("content") : null
					}
					var t, r = e.prototype;
					return r.setOptimizeForSpeed = function (e) {
						u("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), u(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
					}, r.isOptimizeForSpeed = function () {
						return this._optimizeForSpeed
					}, r.inject = function () {
						var e = this;
						if (u(!this._injected, "sheet already injected"), this._injected = !0, this._optimizeForSpeed) {
							this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (a || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
							return
						}
						this._serverSheet = {
							cssRules: [],
							insertRule: function (t, r) {
								return "number" == typeof r ? e._serverSheet.cssRules[r] = {
									cssText: t
								} : e._serverSheet.cssRules.push({
									cssText: t
								}), r
							},
							deleteRule: function (t) {
								e._serverSheet.cssRules[t] = null
							}
						}
					}, r.getSheetForTag = function (e) {
						if (e.sheet) return e.sheet;
						for (var t = 0; t < document.styleSheets.length; t++)
							if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
					}, r.getSheet = function () {
						return this.getSheetForTag(this._tags[this._tags.length - 1])
					}, r.insertRule = function (e, t) {
						if (u(l(e), "`insertRule` accepts only strings"), this._optimizeForSpeed) {
							var r = this.getSheet();
							"number" != typeof t && (t = r.cssRules.length);
							try {
								r.insertRule(e, t)
							} catch (t) {
								return a || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
							}
						} else {
							var n = this._tags[t];
							this._tags.push(this.makeStyleTag(this._name, e, n))
						}
						return this._rulesCount++
					}, r.replaceRule = function (e, t) {
						if (this._optimizeForSpeed) {
							var r = this.getSheet();
							if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e]) return e;
							r.deleteRule(e);
							try {
								r.insertRule(t, e)
							} catch (n) {
								a || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r.insertRule(this._deletedRulePlaceholder, e)
							}
						} else {
							var n = this._tags[e];
							u(n, "old rule at index `" + e + "` not found"), n.textContent = t
						}
						return e
					}, r.deleteRule = function (e) {
						if (this._optimizeForSpeed) this.replaceRule(e, "");
						else {
							var t = this._tags[e];
							u(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
						}
					}, r.flush = function () {
						this._injected = !1, this._rulesCount = 0, this._tags.forEach(function (e) {
							return e && e.parentNode.removeChild(e)
						}), this._tags = []
					}, r.cssRules = function () {
						var e = this;
						return this._tags.reduce(function (t, r) {
							return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function (t) {
								return t.cssText === e._deletedRulePlaceholder ? null : t
							})) : t.push(null), t
						}, [])
					}, r.makeStyleTag = function (e, t, r) {
						t && u(l(t), "makeStyleTag accepts only strings as second parameter");
						var n = document.createElement("style");
						this._nonce && n.setAttribute("nonce", this._nonce), n.type = "text/css", n.setAttribute("data-" + e, ""), t && n.appendChild(document.createTextNode(t));
						var s = document.head || document.getElementsByTagName("head")[0];
						return r ? s.insertBefore(n, r) : s.appendChild(n), n
					}, o(e.prototype, [{
						key: "length",
						get: function () {
							return this._rulesCount
						}
					}]), t && o(e, t), e
				}();

			function u(e, t) {
				if (!e) throw Error("StyleSheet: " + t + ".")
			}
			var d = function (e) {
					for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
					return t >>> 0
				},
				h = {};

			function p(e, t) {
				if (!t) return "jsx-" + e;
				var r = String(t),
					n = e + r;
				return h[n] || (h[n] = "jsx-" + d(e + "-" + r)), h[n]
			}

			function f(e, t) {
				var r = e + t;
				return h[r] || (h[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), h[r]
			}
			var m = function () {
					function e(e) {
						var t = void 0 === e ? {} : e,
							r = t.styleSheet,
							n = void 0 === r ? null : r,
							s = t.optimizeForSpeed,
							i = void 0 !== s && s;
						this._sheet = n || new c({
							name: "styled-jsx",
							optimizeForSpeed: i
						}), this._sheet.inject(), n && "boolean" == typeof i && (this._sheet.setOptimizeForSpeed(i), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
					}
					var t = e.prototype;
					return t.add = function (e) {
						var t = this;
						void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function (e, t) {
							return e[t] = 0, e
						}, {}));
						var r = this.getIdAndRules(e),
							n = r.styleId,
							s = r.rules;
						if (n in this._instancesCounts) {
							this._instancesCounts[n] += 1;
							return
						}
						var i = s.map(function (e) {
							return t._sheet.insertRule(e)
						}).filter(function (e) {
							return -1 !== e
						});
						this._indices[n] = i, this._instancesCounts[n] = 1
					}, t.remove = function (e) {
						var t = this,
							r = this.getIdAndRules(e).styleId;
						if (function (e, t) {
								if (!e) throw Error("StyleSheetRegistry: " + t + ".")
							}(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
							var n = this._fromServer && this._fromServer[r];
							n ? (n.parentNode.removeChild(n), delete this._fromServer[r]) : (this._indices[r].forEach(function (e) {
								return t._sheet.deleteRule(e)
							}), delete this._indices[r]), delete this._instancesCounts[r]
						}
					}, t.update = function (e, t) {
						this.add(t), this.remove(e)
					}, t.flush = function () {
						this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
					}, t.cssRules = function () {
						var e = this,
							t = this._fromServer ? Object.keys(this._fromServer).map(function (t) {
								return [t, e._fromServer[t]]
							}) : [],
							r = this._sheet.cssRules();
						return t.concat(Object.keys(this._indices).map(function (t) {
							return [t, e._indices[t].map(function (e) {
								return r[e].cssText
							}).join(e._optimizeForSpeed ? "" : "\n")]
						}).filter(function (e) {
							return !!e[1]
						}))
					}, t.styles = function (e) {
						var t, r;
						return t = this.cssRules(), void 0 === (r = e) && (r = {}), t.map(function (e) {
							var t = e[0],
								n = e[1];
							return i.default.createElement("style", {
								id: "__" + t,
								key: "__" + t,
								nonce: r.nonce ? r.nonce : void 0,
								dangerouslySetInnerHTML: {
									__html: n
								}
							})
						})
					}, t.getIdAndRules = function (e) {
						var t = e.children,
							r = e.dynamic,
							n = e.id;
						if (r) {
							var s = p(n, r);
							return {
								styleId: s,
								rules: Array.isArray(t) ? t.map(function (e) {
									return f(s, e)
								}) : [f(s, t)]
							}
						}
						return {
							styleId: p(n),
							rules: Array.isArray(t) ? t : [t]
						}
					}, t.selectFromServer = function () {
						return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function (e, t) {
							return e[t.id.slice(2)] = t, e
						}, {})
					}, e
				}(),
				v = s.createContext(null);
			v.displayName = "StyleSheetContext";
			var g = i.default.useInsertionEffect || i.default.useLayoutEffect,
				_ = new m;

			function x(e) {
				var t = _ || s.useContext(v);
				return t && g(function () {
					return t.add(e),
						function () {
							t.remove(e)
						}
				}, [e.id, String(e.dynamic)]), null
			}
			x.dynamic = function (e) {
				return e.map(function (e) {
					return p(e[0], e[1])
				}).join(" ")
			}, t.style = x
		},
		9554: function (e, t, r) {
			"use strict";
			e.exports = r(5033).style
		},
		6085: function (e, t, r) {
			"use strict";
			var n = r(5893),
				s = r(7294),
				i = r(6546),
				o = r(2435),
				a = r(7703);
			t.Z = e => {
				let {
					children: t,
					sticky: r = !1,
					zIndex: l = 0
				} = e, c = (0, s.useRef)(null), u = (0, s.useRef)(null), d = (0, o.o)(e => e.headerLoaded), h = (0, o.o)(e => e.setHeaderDark);
				return (0, s.useEffect)(() => {
					if (!d) return;
					let e = document.querySelector(".header");
					return r ? u.current = i.ScrollTrigger.create({
						trigger: c.current,
						start: () => "top+=".concat(window.innerHeight, " top+=").concat(e.getBoundingClientRect().bottom),
						end: () => "bottom-=".concat((0, a.z6)(10), " top+=").concat(e.getBoundingClientRect().bottom),
						onEnter: () => {
							h(!0)
						},
						onLeave: () => {
							h(!1)
						},
						onEnterBack: () => {
							h(!0)
						},
						onLeaveBack: () => {
							h(!1)
						}
					}) : u.current = i.ScrollTrigger.create({
						trigger: c.current,
						start: () => "top top+=".concat(e.getBoundingClientRect().bottom),
						end: () => "bottom top+=".concat(e.getBoundingClientRect().bottom),
						onEnter: () => {
							h(!0)
						},
						onLeave: () => {
							h(!1)
						},
						onEnterBack: () => {
							h(!0)
						},
						onLeaveBack: () => {
							h(!1)
						}
					}), () => {
						u.current && (u.current.kill(), u.current = null), h(!1)
					}
				}, [d]), (0, n.jsx)("div", {
					ref: c,
					style: {
						zIndex: l
					},
					className: "relative w-full",
					children: t
				})
			}
		},
		775: function (e, t, r) {
			"use strict";
			var n = r(5893),
				s = r(9008),
				i = r.n(s),
				o = r(8264);
			t.Z = e => {
				var t;
				let {
					data: r
				} = e, s = r.metaTitle ? r.metaTitle : r.title ? "Pebble | ".concat(r.title) : "Pebble Mobility", a = (null === (t = r.metaImage) || void 0 === t ? void 0 : t.data) ? {
					url: o.$N(r.metaImage.data.attributes.url),
					width: r.metaImage.data.attributes.width,
					height: r.metaImage.data.attributes.height,
					type: r.metaImage.data.attributes.mime
				} : void 0;
				return (0, n.jsxs)(i(), {
					children: [(0, n.jsx)("title", {
						children: s
					}), (0, n.jsx)("meta", {
						property: "og:title",
						content: s
					}, "title"), (0, n.jsx)("meta", {
						property: "og:site_name",
						content: "Pebble"
					}), r.metaDescription && (0, n.jsx)("meta", {
						name: "description",
						content: r.metaDescription
					}), a && (0, n.jsxs)(n.Fragment, {
						children: [(0, n.jsx)("meta", {
							property: "og:image",
							content: a.url
						}), (0, n.jsx)("meta", {
							property: "og:image:type",
							content: a.type
						}), a.width ? (0, n.jsx)("meta", {
							property: "og:image:width",
							content: a.width
						}) : null, a.height ? (0, n.jsx)("meta", {
							property: "og:image:height",
							content: a.height
						}) : null]
					}), (0, n.jsx)("meta", {
						name: "twitter:card",
						content: "summary_large_image"
					}), (0, n.jsx)("meta", {
						name: "theme-color",
						content: "#d7d1c6"
					}), (0, n.jsx)("meta", {
						name: "viewport",
						content: "width=device-width, initial-scale=1, maximum-scale=1"
					})]
				})
			}
		},
		8877: function (e, t, r) {
			"use strict";
			r.d(t, {
				Z: function () {
					return f
				}
			});
			var n = r(5893),
				s = r(2435),
				i = r(7294),
				o = r(6038),
				a = r(4347),
				l = r.n(a),
				c = r(2441),
				u = () => (0, n.jsxs)("svg", {
					width: "286",
					height: "286",
					viewBox: "0 0 286 286",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [(0, n.jsxs)("g", {
						clipPath: "url(#clip0_4489_62323)",
						children: [(0, n.jsxs)("mask", {
							id: "mask0_4489_62323",
							style: {
								maskType: "alpha"
							},
							maskUnits: "userSpaceOnUse",
							x: "18",
							y: "-49",
							width: "271",
							height: "203",
							children: [(0, n.jsx)("rect", {
								x: "224",
								y: "14.5488",
								width: "194.476",
								height: "73.7032",
								transform: "rotate(149.564 224 14.5488)",
								fill: "url(#paint0_linear_4489_62323)"
							}), (0, n.jsx)("rect", {
								x: "167",
								y: "-19",
								width: "122",
								height: "173",
								fill: "#D9D9D9"
							})]
						}), (0, n.jsx)("g", {
							mask: "url(#mask0_4489_62323)",
							children: (0, n.jsx)("path", {
								opacity: "0.15",
								d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
								stroke: "#575349"
							})
						})]
					}), (0, n.jsxs)("defs", {
						children: [(0, n.jsxs)("linearGradient", {
							id: "paint0_linear_4489_62323",
							x1: "418.476",
							y1: "88.252",
							x2: "224",
							y2: "88.252",
							gradientUnits: "userSpaceOnUse",
							children: [(0, n.jsx)("stop", {
								stopColor: "#F2EFE9",
								stopOpacity: "0"
							}), (0, n.jsx)("stop", {
								offset: "1",
								stopColor: "#F2EFE9"
							})]
						}), (0, n.jsx)("clipPath", {
							id: "clip0_4489_62323",
							children: (0, n.jsx)("rect", {
								width: "286",
								height: "286",
								fill: "white"
							})
						})]
					})]
				}),
				d = r(4319),
				h = r(6546),
				p = r(5285),
				f = e => {
					let {
						index: t,
						slicesLength: r = 1,
						simple: a = !1,
						children: f,
						translated: m = !0
					} = e, v = (0, i.useRef)(), g = (0, i.useRef)(), _ = (0, i.useRef)(), x = (0, i.useRef)(), y = (0, i.useRef)(), S = (0, i.useRef)(), w = (0, i.useRef)(), j = (0, i.useRef)(), C = (0, i.useRef)(), b = (0, i.useRef)(), R = (0, i.useRef)(0), E = (0, p.LZ)(), F = (0, s.o)(e => e.startTransition), N = (0, s.o)(e => e.setIsAppear), k = (0, s.o)(e => e.isLoaded), T = (0, s.o)(e => e.isFirstLoaded), z = (0, s.o)(e => e.setCursorHidden), A = () => {
						j.current && o.p8.set(j.current, {
							x: window.innerWidth / 2 - 42 - 5,
							y: window.innerHeight / 2 - 40.5,
							transformOrigin: "center",
							rotate: -90,
							scale: 0
						})
					}, P = function () {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							t = document.querySelector(".fade");
						t.classList.remove("opacity-0"), o.p8.timeline({
							delay: e ? .5 : 1.1,
							onStart: () => {
								if (e) {
									let e = document.querySelector(".loader");
									e && o.p8.set(e, {
										autoAlpha: 0
									})
								}
							},
							onComplete: () => {
								window.dispatchEvent(new CustomEvent("is-appeared")), E && E.start(), h.ScrollTrigger.refresh()
							}
						}).fromTo(t, {
							autoAlpha: 1
						}, {
							autoAlpha: 0,
							duration: .6,
							ease: "power2.out"
						}, 0).call(() => {
							N(!0)
						}, [], 0)
					}, L = function () {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						A();
						let t = document.querySelector(".fade"),
							r = document.querySelector(".loader");
						w.current && w.current.classList.remove("hidden");
						let n = window.innerWidth / 83,
							s = window.innerHeight / 80,
							i = _.current.querySelectorAll("path"),
							a = o.p8.timeline({
								delay: .1,
								onStart: () => {
									o.p8.set([t, r], {
										autoAlpha: 0
									}), z(!0)
								},
								onComplete: () => {
									window.dispatchEvent(new CustomEvent("is-appeared")), E && E.start(), h.ScrollTrigger.refresh(), e && window.dispatchEvent(new CustomEvent("introduction-complete")), g.current && (g.current.style.clipPath = null), w.current && w.current.classList.add("hidden"), C.current && C.current.classList.add("hidden")
								}
							});
						a.addLabel("start", 0), e && a.fromTo(R, {
							current: 0
						}, {
							current: 100,
							ease: "linear",
							duration: 2.5,
							onUpdate: () => {
								b.current && (b.current.innerHTML = R.current < 100 ? "0" + Math.round(R.current) : Math.round(R.current))
							}
						}, 0), a.fromTo(_.current, {
							rotate: 120,
							autoAlpha: 0,
							scale: .2
						}, {
							rotate: 0,
							scale: 1,
							autoAlpha: 1,
							ease: "expo.out",
							duration: 1.9
						}, "start").fromTo(i, {
							scale: .1
						}, {
							scale: 1,
							ease: "expo.out",
							duration: .95
						}, "start+=0.12").fromTo(x.current, {
							scale: .45,
							autoAlpha: 0
						}, {
							scale: 1,
							autoAlpha: 1,
							ease: "power2.out",
							duration: 2
						}, "start").fromTo(x.current, {
							autoAlpha: 0
						}, {
							autoAlpha: 1,
							ease: "power2.out",
							duration: 1.2
						}, "start"), a.fromTo(j.current, {
							rotate: -90,
							scale: 0
						}, {
							scale: (n > s ? n : s) + 8,
							rotate: "+=70",
							duration: 2,
							ease: "beaucoup.intro"
						}, e ? "start+=2.7" : "start+=1.5").to([x.current, _.current], {
							autoAlpha: 0,
							ease: "power2.out",
							duration: .4
						}, "<30%").call(() => {
							N(!0)
						}, [], e ? "start+=3.1" : "start+=1.9");
						let l = o.p8.timeline({
							delay: .1
						});
						e ? l.to(y.current, {
							rotate: "+=360",
							repeat: 2,
							ease: "slow(0.2, 0.67)",
							repeatRefresh: !0,
							duration: 2.2
						}, 0).fromTo(S.current, {
							rotate: -80
						}, {
							rotate: "+=360",
							repeatRefresh: !0,
							ease: "slow(0.05, 0.6)",
							repeat: 2,
							duration: 2.4
						}, .12) : l.to(y.current, {
							rotate: "+=360",
							repeat: 2,
							ease: "slow(0.2, 0.67)",
							repeatRefresh: !0,
							duration: 1.9
						}, 0).fromTo(S.current, {
							rotate: -80
						}, {
							rotate: "+=360",
							repeatRefresh: !0,
							ease: "slow(0.05, 0.6)",
							repeat: 2,
							duration: 2.1
						}, .12)
					};
					return (0, i.useEffect)(() => {
						o.p8.registerPlugin(d.SlowMo), o.p8.registerPlugin(l()), l().create("beaucoup.intro", "0.89, 0.12, 0.21, 1.00"), T && C.current && C.current.classList.add("hidden")
					}, []), (0, i.useEffect)(() => {
						k && !T ? (E && E.stop(), v.current ? P(!0) : L(!0)) : k || A()
					}, [k, T]), (0, i.useEffect)(() => {
						if (v.current) {
							P();
							return
						}
						F && L()
					}, [F]), 0 !== t || a ? (0, n.jsx)("div", {
						ref: v,
						className: "simple-transition-path",
						children: f
					}) : (0, n.jsxs)(n.Fragment, {
						children: [(0, n.jsx)("div", {
							className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
							children: (0, n.jsx)("div", {
								ref: _,
								className: "svg-wrapper w-[4.267rem]",
								children: (0, n.jsxs)("svg", {
									width: "56",
									height: "50",
									viewBox: "0 0 56 50",
									fill: "none",
									xmlns: "http://www.w3.org/2000/svg",
									children: [(0, n.jsx)("path", {
										d: "M40.565 15.0573C36.9268 17.6142 32.6423 19.102 28.1985 19.3514H27.9062C23.4275 19.0849 19.1111 17.5827 15.4385 15.0125C12.5943 13.1513 8.90682 10.3484 9.23285 6.43554C9.45769 3.74473 12.3919 2.42176 14.5842 1.74906C15.506 1.46877 16.4391 1.23332 17.3722 1.04272C24.0175 -0.257846 30.8455 -0.333841 37.5183 0.818491H37.6082C38.6313 1.00909 39.6543 1.23332 40.6886 1.5024L41.543 1.74906C43.7353 2.42176 46.6695 3.74473 46.8943 6.43554C47.2316 10.3484 43.3305 13.1626 40.4862 15.0573H40.565Z",
										fill: "#D7D1C6"
									}), (0, n.jsx)("path", {
										d: "M12.5493 17.6362C16.7717 19.4085 20.4376 22.2821 23.162 25.9552L23.2407 26.0674L23.3306 26.2019C25.6353 29.8457 26.2311 34.4761 26.2536 38.8263C26.2536 42.2458 25.6353 47.1453 22.5661 48.7822C20.194 50.0267 17.5071 48.3113 15.7533 46.8202C15.0226 46.2035 14.3143 45.5421 13.6398 44.8581C8.91013 39.9371 5.10259 34.2109 2.39755 27.9509V27.8724C1.99283 26.9082 1.61059 25.9216 1.27333 24.9013C1.18339 24.621 1.09347 24.3296 1.01478 24.0381C0.362728 21.7957 -0.109461 18.6228 1.94787 16.9523C5.00576 14.5193 9.50266 16.2571 12.6055 17.6362H12.5493Z",
										fill: "#D7D1C6"
									}), (0, n.jsx)("path", {
										d: "M43.6228 17.6362C39.3954 19.4053 35.725 22.2794 32.9988 25.9552L32.9202 26.0674L32.8302 26.2019C30.5256 29.8457 29.9297 34.4761 29.9072 38.8263C29.9072 42.2458 30.5255 47.1453 33.5947 48.7822C35.9668 50.0267 38.6537 48.3113 40.4075 46.8202C41.1382 46.2035 41.8465 45.5421 42.521 44.8581C47.2549 39.9404 51.0629 34.2135 53.7633 27.9509V27.8724C54.168 26.9082 54.5502 25.9216 54.8875 24.9013L55.1573 24.0381C55.8094 21.7957 56.2815 18.6228 54.213 16.9523C51.1551 14.5193 46.6582 16.2571 43.5666 17.6362H43.6228Z",
										fill: "#D7D1C6"
									})]
								})
							})
						}), (0, n.jsxs)("div", {
							ref: x,
							className: "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
							style: {
								overflow: "hidden"
							},
							children: [(0, n.jsxs)("div", {
								className: "absolute w-full h-full",
								ref: y,
								children: [(0, n.jsx)("div", {
									className: "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
									children: (0, n.jsx)(c.Z, {
										color: "#A39B8B"
									})
								}), (0, n.jsx)("div", {
									className: "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
									children: (0, n.jsx)(u, {})
								})]
							}), (0, n.jsxs)("div", {
								className: "absolute w-full h-full rounded-full",
								ref: S,
								children: [(0, n.jsx)("div", {
									className: "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
									children: (0, n.jsx)(c.Z, {
										color: "#A39B8B"
									})
								}), (0, n.jsx)("div", {
									className: "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
									children: (0, n.jsx)(u, {})
								})]
							})]
						}), (0, n.jsxs)("div", {
							ref: C,
							className: "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono text-dark_grey",
							children: [(0, n.jsx)("span", {
								ref: b,
								children: "000"
							}), (0, n.jsx)("span", {
								children: "/"
							}), (0, n.jsx)("span", {
								children: "100"
							})]
						}), (0, n.jsxs)("div", {
							style: {
								clipPath: "url(#svgPath)",
								backfaceVisibility: "hidden",
								transform: m ? "translate3d(0, 0, 0)" : "",
								zIndex: m ? r - t : "10"
							},
							ref: g,
							className: "transition-path relative",
							children: [(0, n.jsx)("div", {
								className: "absolute top-0 left-0 w-full h-screen pointer-events-none",
								children: (0, n.jsx)("div", {
									ref: w,
									className: "absolute top-0 left-0 w-full h-full hidden z-1",
									children: (0, n.jsx)("svg", {
										width: "84",
										height: "81",
										className: "w-full h-full",
										children: (0, n.jsx)("defs", {
											children: (0, n.jsx)("clipPath", {
												id: "svgPath",
												children: (0, n.jsx)("path", {
													ref: j,
													d: "M79.4794 63.3751C60.1831 81.0548 4.91108 83.8741 0.832418 57.5147C-4.41761 23.5849 23.6769 -1.01793 45.0967 5.07786C76.8979 14.1281 91.9353 51.9624 79.4794 63.3751Z"
												})
											})
										})
									})
								})
							}), f]
						})]
					})
				}
		},
		9261: function (e, t, r) {
			"use strict";
			r.r(t), r.d(t, {
				__N_SSP: function () {
					return u
				},
				default: function () {
					return d
				}
			});
			var n = r(5893),
				s = r(3781),
				i = r(9928),
				o = r(775),
				a = r(8877),
				l = r(6085),
				c = r(6276),
				u = !0;

			function d(e) {
				let {
					post: t,
					footer: r
				} = e;
				return (0, n.jsx)(l.Z, {
					children: (0, n.jsxs)("article", {
						className: "bg-white post-wrapper",
						children: [t && (0, n.jsx)(o.Z, {
							data: t.seo
						}), t && (0, n.jsx)(a.Z, {
							index: 0,
							slicesLength: t.content.length,
							simple: !0,
							children: (0, n.jsx)("div", {
								className: "w-full grid grid-cols-12 px-[0.6rem] md:px-container pt-[0.6rem] md:pt-[10rem]",
								children: (0, n.jsx)("div", {
									className: "col-span-full md:col-start-2 md:col-end-12",
									children: (0, n.jsx)(s.Z, {
										post: t
									})
								})
							})
						}), (0, n.jsx)("div", {
							className: "grid grid-cols-12 px-[0.6rem] md:px-container",
							children: (0, n.jsx)("div", {
								className: "col-span-full md:col-start-2 md:col-end-12",
								children: t.content && (0, n.jsx)(c.W, {
									items: t.content,
									context: {
										isPost: !0
									}
								})
							})
						}), r && (0, n.jsx)(i.Z, {
							data: r
						})]
					})
				})
			}
		},
		1479: function () {},
		9008: function (e, t, r) {
			e.exports = r(6665)
		}
	},
	function (e) {
		e.O(0, [6098, 6366, 9928, 2888, 9774, 179], function () {
			return e(e.s = 200)
		}), _N_E = e.O()
	}
]);