(function(e, t) {
	typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function(e) {
		if(!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
})(typeof window != "undefined" ? window : this, function(e, t) {
	function g(e) {
		var t = e.length,
			n = h.type(e);
		return n === "function" || h.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
	}

	function S(e, t, n) {
		if(h.isFunction(t)) return h.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if(t.nodeType) return h.grep(e, function(e) {
			return e === t !== n
		});
		if(typeof t == "string") {
			if(E.test(t)) return h.filter(t, e, n);
			t = h.filter(t, e)
		}
		return h.grep(e, function(e) {
			return h.inArray(e, t) >= 0 !== n
		})
	}

	function A(e, t) {
		do e = e[t]; while (e && e.nodeType !== 1);
		return e
	}

	function _(e) {
		var t = M[e] = {};
		return h.each(e.match(O) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function P() {
		T.addEventListener ? (T.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (T.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
	}

	function H() {
		if(T.addEventListener || event.type === "load" || T.readyState === "complete") P(), h.ready()
	}

	function q(e, t, n) {
		if(n === undefined && e.nodeType === 1) {
			var r = "data-" + t.replace(I, "-$1").toLowerCase();
			n = e.getAttribute(r);
			if(typeof n == "string") {
				try {
					n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : F.test(n) ? h.parseJSON(n) : n
				} catch(i) {}
				h.data(e, t, n)
			} else n = undefined
		}
		return n
	}

	function R(e) {
		var t;
		for(t in e) {
			if(t === "data" && h.isEmptyObject(e[t])) continue;
			if(t !== "toJSON") return !1
		}
		return !0
	}

	function U(e, t, r, i) {
		if(!h.acceptData(e)) return;
		var s, o, u = h.expando,
			a = e.nodeType,
			f = a ? h.cache : e,
			l = a ? e[u] : e[u] && u;
		if((!l || !f[l] || !i && !f[l].data) && r === undefined && typeof t == "string") return;
		l || (a ? l = e[u] = n.pop() || h.guid++ : l = u), f[l] || (f[l] = a ? {} : {
			toJSON: h.noop
		});
		if(typeof t == "object" || typeof t == "function") i ? f[l] = h.extend(f[l], t) : f[l].data = h.extend(f[l].data, t);
		return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== undefined && (o[h.camelCase(t)] = r), typeof t == "string" ? (s = o[t], s == null && (s = o[h.camelCase(t)])) : s = o, s
	}

	function z(e, t, n) {
		if(!h.acceptData(e)) return;
		var r, i, s = e.nodeType,
			o = s ? h.cache : e,
			u = s ? e[h.expando] : h.expando;
		if(!o[u]) return;
		if(t) {
			r = n ? o[u] : o[u].data;
			if(r) {
				h.isArray(t) ? t = t.concat(h.map(t, h.camelCase)) : t in r ? t = [t] : (t = h.camelCase(t), t in r ? t = [t] : t = t.split(" ")), i = t.length;
				while(i--) delete r[t[i]];
				if(n ? !R(r) : !h.isEmptyObject(r)) return
			}
		}
		if(!n) {
			delete o[u].data;
			if(!R(o[u])) return
		}
		s ? h.cleanData([e], !0) : l.deleteExpando || o != o.window ? delete o[u] : o[u] = null
	}

	function et() {
		return !0
	}

	function tt() {
		return !1
	}

	function nt() {
		try {
			return T.activeElement
		} catch(e) {}
	}

	function rt(e) {
		var t = it.split("|"),
			n = e.createDocumentFragment();
		if(n.createElement)
			while(t.length) n.createElement(t.pop());
		return n
	}

	function wt(e, t) {
		var n, r, i = 0,
			s = typeof e.getElementsByTagName !== B ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== B ? e.querySelectorAll(t || "*") : undefined;
		if(!s)
			for(s = [], n = e.childNodes || e;
				(r = n[i]) != null; i++) !t || h.nodeName(r, t) ? s.push(r) : h.merge(s, wt(r, t));
		return t === undefined || t && h.nodeName(e, t) ? h.merge([e], s) : s
	}

	function Et(e) {
		J.test(e.type) && (e.defaultChecked = e.checked)
	}

	function St(e, t) {
		return h.nodeName(e, "table") && h.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function xt(e) {
		return e.type = (h.find.attr(e, "type") !== null) + "/" + e.type, e
	}

	function Tt(e) {
		var t = vt.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function Nt(e, t) {
		var n, r = 0;
		for(;
			(n = e[r]) != null; r++) h._data(n, "globalEval", !t || h._data(t[r], "globalEval"))
	}

	function Ct(e, t) {
		if(t.nodeType !== 1 || !h.hasData(e)) return;
		var n, r, i, s = h._data(e),
			o = h._data(t, s),
			u = s.events;
		if(u) {
			delete o.handle, o.events = {};
			for(n in u)
				for(r = 0, i = u[n].length; r < i; r++) h.event.add(t, n, u[n][r])
		}
		o.data && (o.data = h.extend({}, o.data))
	}

	function kt(e, t) {
		var n, r, i;
		if(t.nodeType !== 1) return;
		n = t.nodeName.toLowerCase();
		if(!l.noCloneEvent && t[h.expando]) {
			i = h._data(t);
			for(r in i.events) h.removeEvent(t, r, i.handle);
			t.removeAttribute(h.expando)
		}
		if(n === "script" && t.text !== e.text) xt(t).text = e.text, Tt(t);
		else if(n === "object") t.parentNode && (t.outerHTML = e.outerHTML), l.html5Clone && e.innerHTML && !h.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
		else if(n === "input" && J.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
		else if(n === "option") t.defaultSelected = t.selected = e.defaultSelected;
		else if(n === "input" || n === "textarea") t.defaultValue = e.defaultValue
	}

	function Ot(t, n) {
		var r, i = h(n.createElement(t)).appendTo(n.body),
			s = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : h.css(i[0], "display");
		return i.detach(), s
	}

	function Mt(e) {
		var t = T,
			n = At[e];
		if(!n) {
			n = Ot(e, t);
			if(n === "none" || !n) Lt = (Lt || h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Lt[0].contentWindow || Lt[0].contentDocument).document, t.write(), t.close(), n = Ot(e, t), Lt.detach();
			At[e] = n
		}
		return n
	}

	function jt(e, t) {
		return {
			get: function() {
				var n = e();
				if(n == null) return;
				if(n) {
					delete this.get;
					return
				}
				return(this.get = t).apply(this, arguments)
			}
		}
	}

	function Vt(e, t) {
		if(t in e) return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			r = t,
			i = Xt.length;
		while(i--) {
			t = Xt[i] + n;
			if(t in e) return t
		}
		return r
	}

	function $t(e, t) {
		var n, r, i, s = [],
			o = 0,
			u = e.length;
		for(; o < u; o++) {
			r = e[o];
			if(!r.style) continue;
			s[o] = h._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && V(r) && (s[o] = h._data(r, "olddisplay", Mt(r.nodeName)))) : (i = V(r), (n && n !== "none" || !i) && h._data(r, "olddisplay", i ? n : h.css(r, "display")))
		}
		for(o = 0; o < u; o++) {
			r = e[o];
			if(!r.style) continue;
			if(!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
		}
		return e
	}

	function Jt(e, t, n) {
		var r = Rt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function Kt(e, t, n, r, i) {
		var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
			o = 0;
		for(; s < 4; s += 2) n === "margin" && (o += h.css(e, n + X[s], !0, i)), r ? (n === "content" && (o -= h.css(e, "padding" + X[s], !0, i)), n !== "margin" && (o -= h.css(e, "border" + X[s] + "Width", !0, i))) : (o += h.css(e, "padding" + X[s], !0, i), n !== "padding" && (o += h.css(e, "border" + X[s] + "Width", !0, i)));
		return o
	}

	function Qt(e, t, n) {
		var r = !0,
			i = t === "width" ? e.offsetWidth : e.offsetHeight,
			s = Pt(e),
			o = l.boxSizing && h.css(e, "boxSizing", !1, s) === "border-box";
		if(i <= 0 || i == null) {
			i = Ht(e, t, s);
			if(i < 0 || i == null) i = e.style[t];
			if(Dt.test(i)) return i;
			r = o && (l.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + Kt(e, t, n || (o ? "border" : "content"), r, s) + "px"
	}

	function Gt(e, t, n, r, i) {
		return new Gt.prototype.init(e, t, n, r, i)
	}

	function on() {
		return setTimeout(function() {
			Yt = undefined
		}), Yt = h.now()
	}

	function un(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		t = t ? 1 : 0;
		for(; i < 4; i += 2 - t) n = X[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function an(e, t, n) {
		var r, i = (sn[t] || []).concat(sn["*"]),
			s = 0,
			o = i.length;
		for(; s < o; s++)
			if(r = i[s].call(n, t, e)) return r
	}

	function fn(e, t, n) {
		var r, i, s, o, u, a, f, c, p = this,
			d = {},
			v = e.style,
			m = e.nodeType && V(e),
			g = h._data(e, "fxshow");
		n.queue || (u = h._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
			u.unqueued || a()
		}), u.unqueued++, p.always(function() {
			p.always(function() {
				u.unqueued--, h.queue(e, "fx").length || u.empty.fire()
			})
		})), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], f = h.css(e, "display"), c = f === "none" ? h._data(e, "olddisplay") || Mt(e.nodeName) : f, c === "inline" && h.css(e, "float") === "none" && (!l.inlineBlockNeedsLayout || Mt(e.nodeName) === "inline" ? v.display = "inline-block" : v.zoom = 1)), n.overflow && (v.overflow = "hidden", l.shrinkWrapBlocks() || p.always(function() {
			v.overflow = n.overflow[0], v.overflowX = n.overflow[1], v.overflowY = n.overflow[2]
		}));
		for(r in t) {
			i = t[r];
			if(en.exec(i)) {
				delete t[r], s = s || i === "toggle";
				if(i === (m ? "hide" : "show")) {
					if(i !== "show" || !g || g[r] === undefined) continue;
					m = !0
				}
				d[r] = g && g[r] || h.style(e, r)
			} else f = undefined
		}
		if(!h.isEmptyObject(d)) {
			g ? "hidden" in g && (m = g.hidden) : g = h._data(e, "fxshow", {}), s && (g.hidden = !m), m ? h(e).show() : p.done(function() {
				h(e).hide()
			}), p.done(function() {
				var t;
				h._removeData(e, "fxshow");
				for(t in d) h.style(e, t, d[t])
			});
			for(r in d) o = an(m ? g[r] : 0, r, p), r in g || (g[r] = o.start, m && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
		} else(f === "none" ? Mt(e.nodeName) : f) === "inline" && (v.display = f)
	}

	function ln(e, t) {
		var n, r, i, s, o;
		for(n in e) {
			r = h.camelCase(n), i = t[r], s = e[n], h.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = h.cssHooks[r];
			if(o && "expand" in o) {
				s = o.expand(s), delete e[r];
				for(n in s) n in e || (e[n] = s[n], t[n] = i)
			} else t[r] = i
		}
	}

	function cn(e, t, n) {
		var r, i, s = 0,
			o = rn.length,
			u = h.Deferred().always(function() {
				delete a.elem
			}),
			a = function() {
				if(i) return !1;
				var t = Yt || on(),
					n = Math.max(0, f.startTime + f.duration - t),
					r = n / f.duration || 0,
					s = 1 - r,
					o = 0,
					a = f.tweens.length;
				for(; o < a; o++) f.tweens[o].run(s);
				return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
			},
			f = u.promise({
				elem: e,
				props: h.extend({}, t),
				opts: h.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Yt || on(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = h.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
					return f.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? f.tweens.length : 0;
					if(i) return this;
					i = !0;
					for(; n < r; n++) f.tweens[n].run(1);
					return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
				}
			}),
			l = f.props;
		ln(l, f.opts.specialEasing);
		for(; s < o; s++) {
			r = rn[s].call(f, e, l, f.opts);
			if(r) return r
		}
		return h.map(l, an, f), h.isFunction(f.opts.start) && f.opts.start.call(e, f), h.fx.timer(h.extend(a, {
			elem: e,
			anim: f,
			queue: f.opts.queue
		})), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
	}

	function Fn(e) {
		return function(t, n) {
			typeof t != "string" && (n = t, t = "*");
			var r, i = 0,
				s = t.toLowerCase().match(O) || [];
			if(h.isFunction(n))
				while(r = s[i++]) r.charAt(0) === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function In(e, t, n, r) {
		function o(u) {
			var a;
			return i[u] = !0, h.each(e[u] || [], function(e, u) {
				var f = u(t, n, r);
				if(typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
				if(s) return !(a = f)
			}), a
		}
		var i = {},
			s = e === Hn;
		return o(t.dataTypes[0]) || !i["*"] && o("*")
	}

	function qn(e, t) {
		var n, r, i = h.ajaxSettings.flatOptions || {};
		for(r in t) t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
		return n && h.extend(!0, e, n), e
	}

	function Rn(e, t, n) {
		var r, i, s, o, u = e.contents,
			a = e.dataTypes;
		while(a[0] === "*") a.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
		if(i)
			for(o in u)
				if(u[o] && u[o].test(i)) {
					a.unshift(o);
					break
				}
		if(a[0] in n) s = a[0];
		else {
			for(o in n) {
				if(!a[0] || e.converters[o + " " + a[0]]) {
					s = o;
					break
				}
				r || (r = o)
			}
			s = s || r
		}
		if(s) return s !== a[0] && a.unshift(s), n[s]
	}

	function Un(e, t, n, r) {
		var i, s, o, u, a, f = {},
			l = e.dataTypes.slice();
		if(l[1])
			for(o in e.converters) f[o.toLowerCase()] = e.converters[o];
		s = l.shift();
		while(s) {
			e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
			if(s)
				if(s === "*") s = a;
				else if(a !== "*" && a !== s) {
				o = f[a + " " + s] || f["* " + s];
				if(!o)
					for(i in f) {
						u = i.split(" ");
						if(u[1] === s) {
							o = f[a + " " + u[0]] || f["* " + u[0]];
							if(o) {
								o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
								break
							}
						}
					}
				if(o !== !0)
					if(o && e["throws"]) t = o(t);
					else try {
						t = o(t)
					} catch(c) {
						return {
							state: "parsererror",
							error: o ? c : "No conversion from " + a + " to " + s
						}
					}
			}
		}
		return {
			state: "success",
			data: t
		}
	}

	function Jn(e, t, n, r) {
		var i;
		if(h.isArray(t)) h.each(t, function(t, i) {
			n || Wn.test(e) ? r(e, i) : Jn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
		});
		else if(!n && h.type(t) === "object")
			for(i in t) Jn(e + "[" + i + "]", t[i], n, r);
		else r(e, t)
	}

	function Yn() {
		try {
			return new e.XMLHttpRequest
		} catch(t) {}
	}

	function Zn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch(t) {}
	}

	function ir(e) {
		return h.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
	}
	var n = [],
		r = n.slice,
		i = n.concat,
		s = n.push,
		o = n.indexOf,
		u = {},
		a = u.toString,
		f = u.hasOwnProperty,
		l = {},
		c = "1.11.1",
		h = function(e, t) {
			return new h.fn.init(e, t)
		},
		p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		d = /^-ms-/,
		v = /-([\da-z])/gi,
		m = function(e, t) {
			return t.toUpperCase()
		};
	h.fn = h.prototype = {
		jquery: c,
		constructor: h,
		selector: "",
		length: 0,
		toArray: function() {
			return r.call(this)
		},
		get: function(e) {
			return e != null ? e < 0 ? this[e + this.length] : this[e] : r.call(this)
		},
		pushStack: function(e) {
			var t = h.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return h.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(h.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(r.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: s,
		sort: n.sort,
		splice: n.splice
	}, h.extend = h.fn.extend = function() {
		var e, t, n, r, i, s, o = arguments[0] || {},
			u = 1,
			a = arguments.length,
			f = !1;
		typeof o == "boolean" && (f = o, o = arguments[u] || {}, u++), typeof o != "object" && !h.isFunction(o) && (o = {}), u === a && (o = this, u--);
		for(; u < a; u++)
			if((i = arguments[u]) != null)
				for(r in i) {
					e = o[r], n = i[r];
					if(o === n) continue;
					f && n && (h.isPlainObject(n) || (t = h.isArray(n))) ? (t ? (t = !1, s = e && h.isArray(e) ? e : []) : s = e && h.isPlainObject(e) ? e : {}, o[r] = h.extend(f, s, n)) : n !== undefined && (o[r] = n)
				}
			return o
	}, h.extend({
		expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return h.type(e) === "function"
		},
		isArray: Array.isArray || function(e) {
			return h.type(e) === "array"
		},
		isWindow: function(e) {
			return e != null && e == e.window
		},
		isNumeric: function(e) {
			return !h.isArray(e) && e - parseFloat(e) >= 0
		},
		isEmptyObject: function(e) {
			var t;
			for(t in e) return !1;
			return !0
		},
		isPlainObject: function(e) {
			var t;
			if(!e || h.type(e) !== "object" || e.nodeType || h.isWindow(e)) return !1;
			try {
				if(e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch(n) {
				return !1
			}
			if(l.ownLast)
				for(t in e) return f.call(e, t);
			for(t in e);
			return t === undefined || f.call(e, t)
		},
		type: function(e) {
			return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? u[a.call(e)] || "object" : typeof e
		},
		globalEval: function(t) {
			t && h.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(d, "ms-").replace(v, m)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r, i = 0,
				s = e.length,
				o = g(e);
			if(n)
				if(o)
					for(; i < s; i++) {
						r = t.apply(e[i], n);
						if(r === !1) break
					} else
						for(i in e) {
							r = t.apply(e[i], n);
							if(r === !1) break
						} else if(o)
							for(; i < s; i++) {
								r = t.call(e[i], i, e[i]);
								if(r === !1) break
							} else
								for(i in e) {
									r = t.call(e[i], i, e[i]);
									if(r === !1) break
								}
						return e
		},
		trim: function(e) {
			return e == null ? "" : (e + "").replace(p, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return e != null && (g(Object(e)) ? h.merge(n, typeof e == "string" ? [e] : e) : s.call(n, e)), n
		},
		inArray: function(e, t, n) {
			var r;
			if(t) {
				if(o) return o.call(t, e, n);
				r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
				for(; n < r; n++)
					if(n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, t) {
			var n = +t.length,
				r = 0,
				i = e.length;
			while(r < n) e[i++] = t[r++];
			if(n !== n)
				while(t[r] !== undefined) e[i++] = t[r++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			var r, i = [],
				s = 0,
				o = e.length,
				u = !n;
			for(; s < o; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
			return i
		},
		map: function(e, t, n) {
			var r, s = 0,
				o = e.length,
				u = g(e),
				a = [];
			if(u)
				for(; s < o; s++) r = t(e[s], s, n), r != null && a.push(r);
			else
				for(s in e) r = t(e[s], s, n), r != null && a.push(r);
			return i.apply([], a)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, i, s;
			return typeof t == "string" && (s = e[t], t = e, e = s), h.isFunction(e) ? (n = r.call(arguments, 2), i = function() {
				return e.apply(t || this, n.concat(r.call(arguments)))
			}, i.guid = e.guid = e.guid || h.guid++, i) : undefined
		},
		now: function() {
			return +(new Date)
		},
		support: l
	}), h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		u["[object " + t + "]"] = t.toLowerCase()
	});
	var y = function(e) {
		function st(e, t, r, i) {
			var s, u, f, l, c, d, g, y, S, x;
			(t ? t.ownerDocument || t : E) !== p && h(t), t = t || p, r = r || [];
			if(!e || typeof e != "string") return r;
			if((l = t.nodeType) !== 1 && l !== 9) return [];
			if(v && !i) {
				if(s = Z.exec(e))
					if(f = s[1]) {
						if(l === 9) {
							u = t.getElementById(f);
							if(!u || !u.parentNode) return r;
							if(u.id === f) return r.push(u), r
						} else if(t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && b(t, u) && u.id === f) return r.push(u), r
					} else {
						if(s[2]) return P.apply(r, t.getElementsByTagName(e)), r;
						if((f = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(f)), r
					}
				if(n.qsa && (!m || !m.test(e))) {
					y = g = w, S = t, x = l === 9 && e;
					if(l === 1 && t.nodeName.toLowerCase() !== "object") {
						d = o(e), (g = t.getAttribute("id")) ? y = g.replace(tt, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", c = d.length;
						while(c--) d[c] = y + mt(d[c]);
						S = et.test(e) && dt(t.parentNode) || t, x = d.join(",")
					}
					if(x) try {
						return P.apply(r, S.querySelectorAll(x)), r
					} catch(T) {} finally {
						g || t.removeAttribute("id")
					}
				}
			}
			return a(e.replace(z, "$1"), t, r, i)
		}

		function ot() {
			function t(n, i) {
				return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
			}
			var e = [];
			return t
		}

		function ut(e) {
			return e[w] = !0, e
		}

		function at(e) {
			var t = p.createElement("div");
			try {
				return !!e(t)
			} catch(n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function ft(e, t) {
			var n = e.split("|"),
				i = e.length;
			while(i--) r.attrHandle[n[i]] = t
		}

		function lt(e, t) {
			var n = t && e,
				r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || A) - (~e.sourceIndex || A);
			if(r) return r;
			if(n)
				while(n = n.nextSibling)
					if(n === t) return -1;
			return e ? 1 : -1
		}

		function ct(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return n === "input" && t.type === e
			}
		}

		function ht(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return(n === "input" || n === "button") && t.type === e
			}
		}

		function pt(e) {
			return ut(function(t) {
				return t = +t, ut(function(n, r) {
					var i, s = e([], n.length, t),
						o = s.length;
					while(o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function dt(e) {
			return e && typeof e.getElementsByTagName !== L && e
		}

		function vt() {}

		function mt(e) {
			var t = 0,
				n = e.length,
				r = "";
			for(; t < n; t++) r += e[t].value;
			return r
		}

		function gt(e, t, n) {
			var r = t.dir,
				i = n && r === "parentNode",
				s = x++;
			return t.first ? function(t, n, s) {
				while(t = t[r])
					if(t.nodeType === 1 || i) return e(t, n, s)
			} : function(t, n, o) {
				var u, a, f = [S, s];
				if(o) {
					while(t = t[r])
						if(t.nodeType === 1 || i)
							if(e(t, n, o)) return !0
				} else
					while(t = t[r])
						if(t.nodeType === 1 || i) {
							a = t[w] || (t[w] = {});
							if((u = a[r]) && u[0] === S && u[1] === s) return f[2] = u[2];
							a[r] = f;
							if(f[2] = e(t, n, o)) return !0
						}
			}
		}

		function yt(e) {
			return e.length > 1 ? function(t, n, r) {
				var i = e.length;
				while(i--)
					if(!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function bt(e, t, n) {
			var r = 0,
				i = t.length;
			for(; r < i; r++) st(e, t[r], n);
			return n
		}

		function wt(e, t, n, r, i) {
			var s, o = [],
				u = 0,
				a = e.length,
				f = t != null;
			for(; u < a; u++)
				if(s = e[u])
					if(!n || n(s, r, i)) o.push(s), f && t.push(u);
			return o
		}

		function Et(e, t, n, r, i, s) {
			return r && !r[w] && (r = Et(r)), i && !i[w] && (i = Et(i, s)), ut(function(s, o, u, a) {
				var f, l, c, h = [],
					p = [],
					d = o.length,
					v = s || bt(t || "*", u.nodeType ? [u] : u, []),
					m = e && (s || !t) ? wt(v, h, e, u, a) : v,
					g = n ? i || (s ? e : d || r) ? [] : o : m;
				n && n(m, g, u, a);
				if(r) {
					f = wt(g, p), r(f, [], u, a), l = f.length;
					while(l--)
						if(c = f[l]) g[p[l]] = !(m[p[l]] = c)
				}
				if(s) {
					if(i || e) {
						if(i) {
							f = [], l = g.length;
							while(l--)(c = g[l]) && f.push(m[l] = c);
							i(null, g = [], f, a)
						}
						l = g.length;
						while(l--)(c = g[l]) && (f = i ? B.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
					}
				} else g = wt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : P.apply(o, g)
			})
		}

		function St(e) {
			var t, n, i, s = e.length,
				o = r.relative[e[0].type],
				u = o || r.relative[" "],
				a = o ? 1 : 0,
				l = gt(function(e) {
					return e === t
				}, u, !0),
				c = gt(function(e) {
					return B.call(t, e) > -1
				}, u, !0),
				h = [function(e, n, r) {
					return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
				}];
			for(; a < s; a++)
				if(n = r.relative[e[a].type]) h = [gt(yt(h), n)];
				else {
					n = r.filter[e[a].type].apply(null, e[a].matches);
					if(n[w]) {
						i = ++a;
						for(; i < s; i++)
							if(r.relative[e[i].type]) break;
						return Et(a > 1 && yt(h), a > 1 && mt(e.slice(0, a - 1).concat({
							value: e[a - 2].type === " " ? "*" : ""
						})).replace(z, "$1"), n, a < i && St(e.slice(a, i)), i < s && St(e = e.slice(i)), i < s && mt(e))
					}
					h.push(n)
				}
			return yt(h)
		}

		function xt(e, t) {
			var n = t.length > 0,
				i = e.length > 0,
				s = function(s, o, u, a, l) {
					var c, h, d, v = 0,
						m = "0",
						g = s && [],
						y = [],
						b = f,
						w = s || i && r.find.TAG("*", l),
						E = S += b == null ? 1 : Math.random() || .1,
						x = w.length;
					l && (f = o !== p && o);
					for(; m !== x && (c = w[m]) != null; m++) {
						if(i && c) {
							h = 0;
							while(d = e[h++])
								if(d(c, o, u)) {
									a.push(c);
									break
								}
							l && (S = E)
						}
						n && ((c = !d && c) && v--, s && g.push(c))
					}
					v += m;
					if(n && m !== v) {
						h = 0;
						while(d = t[h++]) d(g, y, o, u);
						if(s) {
							if(v > 0)
								while(m--) !g[m] && !y[m] && (y[m] = _.call(a));
							y = wt(y)
						}
						P.apply(a, y), l && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(a)
					}
					return l && (S = E, f = b), g
				};
			return n ? ut(s) : s
		}
		var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + -(new Date),
			E = e.document,
			S = 0,
			x = 0,
			T = ot(),
			N = ot(),
			C = ot(),
			k = function(e, t) {
				return e === t && (c = !0), 0
			},
			L = typeof undefined,
			A = 1 << 31,
			O = {}.hasOwnProperty,
			M = [],
			_ = M.pop,
			D = M.push,
			P = M.push,
			H = M.slice,
			B = M.indexOf || function(e) {
				var t = 0,
					n = this.length;
				for(; t < n; t++)
					if(this[t] === e) return t;
				return -1
			},
			j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			F = "[\\x20\\t\\r\\n\\f]",
			I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			q = I.replace("w", "w#"),
			R = "\\[" + F + "*(" + I + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + F + "*\\]",
			U = ":(" + I + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|" + ".*" + ")\\)|)",
			z = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
			W = new RegExp("^" + F + "*," + F + "*"),
			X = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
			V = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
			$ = new RegExp(U),
			J = new RegExp("^" + q + "$"),
			K = {
				ID: new RegExp("^#(" + I + ")"),
				CLASS: new RegExp("^\\.(" + I + ")"),
				TAG: new RegExp("^(" + I.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + R),
				PSEUDO: new RegExp("^" + U),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + j + ")$", "i"),
				needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
			},
			Q = /^(?:input|select|textarea|button)$/i,
			G = /^h\d$/i,
			Y = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			et = /[+~]/,
			tt = /'|\\/g,
			nt = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
			rt = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
			};
		try {
			P.apply(M = H.call(E.childNodes), E.childNodes), M[E.childNodes.length].nodeType
		} catch(it) {
			P = {
				apply: M.length ? function(e, t) {
					D.apply(e, H.call(t))
				} : function(e, t) {
					var n = e.length,
						r = 0;
					while(e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}
		n = st.support = {}, s = st.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? t.nodeName !== "HTML" : !1
		}, h = st.setDocument = function(e) {
			var t, i = e ? e.ownerDocument || e : E,
				o = i.defaultView;
			if(i === p || i.nodeType !== 9 || !i.documentElement) return p;
			p = i, d = i.documentElement, v = !s(i), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
				h()
			}, !1) : o.attachEvent && o.attachEvent("onunload", function() {
				h()
			})), n.attributes = at(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), n.getElementsByTagName = at(function(e) {
				return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
			}), n.getElementsByClassName = Y.test(i.getElementsByClassName) && at(function(e) {
				return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
			}), n.getById = at(function(e) {
				return d.appendChild(e).id = w, !i.getElementsByName || !i.getElementsByName(w).length
			}), n.getById ? (r.find.ID = function(e, t) {
				if(typeof t.getElementById !== L && v) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, r.filter.ID = function(e) {
				var t = e.replace(nt, rt);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete r.find.ID, r.filter.ID = function(e) {
				var t = e.replace(nt, rt);
				return function(e) {
					var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
				if(typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e)
			} : function(e, t) {
				var n, r = [],
					i = 0,
					s = t.getElementsByTagName(e);
				if(e === "*") {
					while(n = s[i++]) n.nodeType === 1 && r.push(n);
					return r
				}
				return s
			}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
				if(typeof t.getElementsByClassName !== L && v) return t.getElementsByClassName(e)
			}, g = [], m = [];
			if(n.qsa = Y.test(i.querySelectorAll)) at(function(e) {
				e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + j + ")"), e.querySelectorAll(":checked").length || m.push(":checked")
			}), at(function(e) {
				var t = i.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
			});
			return(n.matchesSelector = Y.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && at(function(e) {
				n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", U)
			}), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Y.test(d.compareDocumentPosition), b = t || Y.test(d.contains) ? function(e, t) {
				var n = e.nodeType === 9 ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
			} : function(e, t) {
				if(t)
					while(t = t.parentNode)
						if(t === e) return !0;
				return !1
			}, k = t ? function(e, t) {
				if(e === t) return c = !0, 0;
				var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === E && b(E, e) ? -1 : t === i || t.ownerDocument === E && b(E, t) ? 1 : l ? B.call(l, e) - B.call(l, t) : 0 : r & 4 ? -1 : 1)
			} : function(e, t) {
				if(e === t) return c = !0, 0;
				var n, r = 0,
					s = e.parentNode,
					o = t.parentNode,
					u = [e],
					a = [t];
				if(!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : l ? B.call(l, e) - B.call(l, t) : 0;
				if(s === o) return lt(e, t);
				n = e;
				while(n = n.parentNode) u.unshift(n);
				n = t;
				while(n = n.parentNode) a.unshift(n);
				while(u[r] === a[r]) r++;
				return r ? lt(u[r], a[r]) : u[r] === E ? -1 : a[r] === E ? 1 : 0
			}, i
		}, st.matches = function(e, t) {
			return st(e, null, null, t)
		}, st.matchesSelector = function(e, t) {
			(e.ownerDocument || e) !== p && h(e), t = t.replace(V, "='$1']");
			if(n.matchesSelector && v && (!g || !g.test(t)) && (!m || !m.test(t))) try {
				var r = y.call(e, t);
				if(r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
			} catch(i) {}
			return st(t, p, null, [e]).length > 0
		}, st.contains = function(e, t) {
			return(e.ownerDocument || e) !== p && h(e), b(e, t)
		}, st.attr = function(e, t) {
			(e.ownerDocument || e) !== p && h(e);
			var i = r.attrHandle[t.toLowerCase()],
				s = i && O.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : undefined;
			return s !== undefined ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
		}, st.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, st.uniqueSort = function(e) {
			var t, r = [],
				i = 0,
				s = 0;
			c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(k);
			if(c) {
				while(t = e[s++]) t === e[s] && (i = r.push(s));
				while(i--) e.splice(r[i], 1)
			}
			return l = null, e
		}, i = st.getText = function(e) {
			var t, n = "",
				r = 0,
				s = e.nodeType;
			if(!s)
				while(t = e[r++]) n += i(t);
			else if(s === 1 || s === 9 || s === 11) {
				if(typeof e.textContent == "string") return e.textContent;
				for(e = e.firstChild; e; e = e.nextSibling) n += i(e)
			} else if(s === 3 || s === 4) return e.nodeValue;
			return n
		}, r = st.selectors = {
			cacheLength: 50,
			createPseudo: ut,
			match: K,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(nt, rt), e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && st.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(nt, rt).toLowerCase();
					return e === "*" ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = T[e + " "];
					return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && T(e, function(e) {
						return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, n) {
					return function(r) {
						var i = st.attr(r, e);
						return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var s = e.slice(0, 3) !== "nth",
						o = e.slice(-4) !== "last",
						u = t === "of-type";
					return r === 1 && i === 0 ? function(e) {
						return !!e.parentNode
					} : function(t, n, a) {
						var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							g = u && t.nodeName.toLowerCase(),
							y = !a && !u;
						if(m) {
							if(s) {
								while(v) {
									c = t;
									while(c = c[v])
										if(u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
									d = v = e === "only" && !d && "nextSibling"
								}
								return !0
							}
							d = [o ? m.firstChild : m.lastChild];
							if(o && y) {
								l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
								while(c = ++p && c && c[v] || (h = p = 0) || d.pop())
									if(c.nodeType === 1 && ++h && c === t) {
										l[e] = [S, p, h];
										break
									}
							} else if(y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === S) h = f[1];
							else
								while(c = ++p && c && c[v] || (h = p = 0) || d.pop())
									if((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
										y && ((c[w] || (c[w] = {}))[e] = [S, h]);
										if(c === t) break
									} return h -= i, h === r || h % r === 0 && h / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
					return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function(e, n) {
						var r, s = i(e, t),
							o = s.length;
						while(o--) r = B.call(e, s[o]), e[r] = !(n[r] = s[o])
					}) : function(e) {
						return i(e, 0, n)
					}) : i
				}
			},
			pseudos: {
				not: ut(function(e) {
					var t = [],
						n = [],
						r = u(e.replace(z, "$1"));
					return r[w] ? ut(function(e, t, n, i) {
						var s, o = r(e, null, i, []),
							u = e.length;
						while(u--)
							if(s = o[u]) e[u] = !(t[u] = s)
					}) : function(e, i, s) {
						return t[0] = e, r(t, null, s, n), !n.pop()
					}
				}),
				has: ut(function(e) {
					return function(t) {
						return st(e, t).length > 0
					}
				}),
				contains: ut(function(e) {
					return function(t) {
						return(t.textContent || t.innerText || i(t)).indexOf(e) > -1
					}
				}),
				lang: ut(function(e) {
					return J.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(),
						function(t) {
							var n;
							do
								if(n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
							while((t = t.parentNode) && t.nodeType === 1);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === d
				},
				focus: function(e) {
					return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return t === "input" && !!e.checked || t === "option" && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for(e = e.firstChild; e; e = e.nextSibling)
						if(e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !r.pseudos.empty(e)
				},
				header: function(e) {
					return G.test(e.nodeName)
				},
				input: function(e) {
					return Q.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return t === "input" && e.type === "button" || t === "button"
				},
				text: function(e) {
					var t;
					return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
				},
				first: pt(function() {
					return [0]
				}),
				last: pt(function(e, t) {
					return [t - 1]
				}),
				eq: pt(function(e, t, n) {
					return [n < 0 ? n + t : n]
				}),
				even: pt(function(e, t) {
					var n = 0;
					for(; n < t; n += 2) e.push(n);
					return e
				}),
				odd: pt(function(e, t) {
					var n = 1;
					for(; n < t; n += 2) e.push(n);
					return e
				}),
				lt: pt(function(e, t, n) {
					var r = n < 0 ? n + t : n;
					for(; --r >= 0;) e.push(r);
					return e
				}),
				gt: pt(function(e, t, n) {
					var r = n < 0 ? n + t : n;
					for(; ++r < t;) e.push(r);
					return e
				})
			}
		}, r.pseudos.nth = r.pseudos.eq;
		for(t in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) r.pseudos[t] = ct(t);
		for(t in {
				submit: !0,
				reset: !0
			}) r.pseudos[t] = ht(t);
		return vt.prototype = r.filters = r.pseudos, r.setFilters = new vt, o = st.tokenize = function(e, t) {
			var n, i, s, o, u, a, f, l = N[e + " "];
			if(l) return t ? 0 : l.slice(0);
			u = e, a = [], f = r.preFilter;
			while(u) {
				if(!n || (i = W.exec(u))) i && (u = u.slice(i[0].length) || u), a.push(s = []);
				n = !1;
				if(i = X.exec(u)) n = i.shift(), s.push({
					value: n,
					type: i[0].replace(z, " ")
				}), u = u.slice(n.length);
				for(o in r.filter)(i = K[o].exec(u)) && (!f[o] || (i = f[o](i))) && (n = i.shift(), s.push({
					value: n,
					type: o,
					matches: i
				}), u = u.slice(n.length));
				if(!n) break
			}
			return t ? u.length : u ? st.error(e) : N(e, a).slice(0)
		}, u = st.compile = function(e, t) {
			var n, r = [],
				i = [],
				s = C[e + " "];
			if(!s) {
				t || (t = o(e)), n = t.length;
				while(n--) s = St(t[n]), s[w] ? r.push(s) : i.push(s);
				s = C(e, xt(i, r)), s.selector = e
			}
			return s
		}, a = st.select = function(e, t, i, s) {
			var a, f, l, c, h, p = typeof e == "function" && e,
				d = !s && o(e = p.selector || e);
			i = i || [];
			if(d.length === 1) {
				f = d[0] = d[0].slice(0);
				if(f.length > 2 && (l = f[0]).type === "ID" && n.getById && t.nodeType === 9 && v && r.relative[f[1].type]) {
					t = (r.find.ID(l.matches[0].replace(nt, rt), t) || [])[0];
					if(!t) return i;
					p && (t = t.parentNode), e = e.slice(f.shift().value.length)
				}
				a = K.needsContext.test(e) ? 0 : f.length;
				while(a--) {
					l = f[a];
					if(r.relative[c = l.type]) break;
					if(h = r.find[c])
						if(s = h(l.matches[0].replace(nt, rt), et.test(f[0].type) && dt(t.parentNode) || t)) {
							f.splice(a, 1), e = s.length && mt(f);
							if(!e) return P.apply(i, s), i;
							break
						}
				}
			}
			return(p || u(e, d))(s, t, !v, i, et.test(e) && dt(t.parentNode) || t), i
		}, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!c, h(), n.sortDetached = at(function(e) {
			return e.compareDocumentPosition(p.createElement("div")) & 1
		}), at(function(e) {
			return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
		}) || ft("type|href|height|width", function(e, t, n) {
			if(!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
		}), (!n.attributes || !at(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
		})) && ft("value", function(e, t, n) {
			if(!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
		}), at(function(e) {
			return e.getAttribute("disabled") == null
		}) || ft(j, function(e, t, n) {
			var r;
			if(!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), st
	}(e);
	h.find = y, h.expr = y.selectors, h.expr[":"] = h.expr.pseudos, h.unique = y.uniqueSort, h.text = y.getText, h.isXMLDoc = y.isXML, h.contains = y.contains;
	var b = h.expr.match.needsContext,
		w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		E = /^.[^:#\[\.,]*$/;
	h.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? h.find.matchesSelector(r, e) ? [r] : [] : h.find.matches(e, h.grep(t, function(e) {
			return e.nodeType === 1
		}))
	}, h.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if(typeof e != "string") return this.pushStack(h(e).filter(function() {
				for(t = 0; t < i; t++)
					if(h.contains(r[t], this)) return !0
			}));
			for(t = 0; t < i; t++) h.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? h.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		filter: function(e) {
			return this.pushStack(S(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(S(this, e || [], !0))
		},
		is: function(e) {
			return !!S(this, typeof e == "string" && b.test(e) ? h(e) : e || [], !1).length
		}
	});
	var x, T = e.document,
		N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		C = h.fn.init = function(e, t) {
			var n, r;
			if(!e) return this;
			if(typeof e == "string") {
				e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? n = [null, e, null] : n = N.exec(e);
				if(n && (n[1] || !t)) {
					if(n[1]) {
						t = t instanceof h ? t[0] : t, h.merge(this, h.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, !0));
						if(w.test(n[1]) && h.isPlainObject(t))
							for(n in t) h.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
						return this
					}
					r = T.getElementById(n[2]);
					if(r && r.parentNode) {
						if(r.id !== n[2]) return x.find(e);
						this.length = 1, this[0] = r
					}
					return this.context = T, this.selector = e, this
				}
				return !t || t.jquery ? (t || x).find(e) : this.constructor(t).find(e)
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : h.isFunction(e) ? typeof x.ready != "undefined" ? x.ready(e) : e(h) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), h.makeArray(e, this))
		};
	C.prototype = h.fn, x = h(T);
	var k = /^(?:parents|prev(?:Until|All))/,
		L = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	h.extend({
		dir: function(e, t, n) {
			var r = [],
				i = e[t];
			while(i && i.nodeType !== 9 && (n === undefined || i.nodeType !== 1 || !h(i).is(n))) i.nodeType === 1 && r.push(i), i = i[t];
			return r
		},
		sibling: function(e, t) {
			var n = [];
			for(; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
			return n
		}
	}), h.fn.extend({
		has: function(e) {
			var t, n = h(e, this),
				r = n.length;
			return this.filter(function() {
				for(t = 0; t < r; t++)
					if(h.contains(this, n[t])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				s = [],
				o = b.test(e) || typeof e != "string" ? h(e, t || this.context) : 0;
			for(; r < i; r++)
				for(n = this[r]; n && n !== t; n = n.parentNode)
					if(n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && h.find.matchesSelector(n, e))) {
						s.push(n);
						break
					}
			return this.pushStack(s.length > 1 ? h.unique(s) : s)
		},
		index: function(e) {
			return e ? typeof e == "string" ? h.inArray(this[0], h(e)) : h.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(h.unique(h.merge(this.get(), h(e, t))))
		},
		addBack: function(e) {
			return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
		}
	}), h.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && t.nodeType !== 11 ? t : null
		},
		parents: function(e) {
			return h.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return h.dir(e, "parentNode", n)
		},
		next: function(e) {
			return A(e, "nextSibling")
		},
		prev: function(e) {
			return A(e, "previousSibling")
		},
		nextAll: function(e) {
			return h.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return h.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return h.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return h.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return h.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return h.sibling(e.firstChild)
		},
		contents: function(e) {
			return h.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : h.merge([], e.childNodes)
		}
	}, function(e, t) {
		h.fn[e] = function(n, r) {
			var i = h.map(this, t, n);
			return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = h.filter(r, i)), this.length > 1 && (L[e] || (i = h.unique(i)), k.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	});
	var O = /\S+/g,
		M = {};
	h.Callbacks = function(e) {
		e = typeof e == "string" ? M[e] || _(e) : h.extend({}, e);
		var t, n, r, i, s, o, u = [],
			a = !e.once && [],
			f = function(c) {
				n = e.memory && c, r = !0, s = o || 0, o = 0, i = u.length, t = !0;
				for(; u && s < i; s++)
					if(u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					}
				t = !1, u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
			},
			l = {
				add: function() {
					if(u) {
						var r = u.length;
						(function s(t) {
							h.each(t, function(t, n) {
								var r = h.type(n);
								r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && s(n)
							})
						})(arguments), t ? i = u.length : n && (o = r, f(n))
					}
					return this
				},
				remove: function() {
					return u && h.each(arguments, function(e, n) {
						var r;
						while((r = h.inArray(n, u, r)) > -1) u.splice(r, 1), t && (r <= i && i--, r <= s && s--)
					}), this
				},
				has: function(e) {
					return e ? h.inArray(e, u) > -1 : !!u && !!u.length
				},
				empty: function() {
					return u = [], i = 0, this
				},
				disable: function() {
					return u = a = n = undefined, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return a = undefined, n || l.disable(), this
				},
				locked: function() {
					return !a
				},
				fireWith: function(e, n) {
					return u && (!r || a) && (n = n || [], n = [e, n.slice ? n.slice() : n], t ? a.push(n) : f(n)), this
				},
				fire: function() {
					return l.fireWith(this, arguments), this
				},
				fired: function() {
					return !!r
				}
			};
		return l
	}, h.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", h.Callbacks("once memory"), "resolved"],
					["reject", "fail", h.Callbacks("once memory"), "rejected"],
					["notify", "progress", h.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return h.Deferred(function(n) {
							h.each(t, function(t, s) {
								var o = h.isFunction(e[t]) && e[t];
								i[s[1]](function() {
									var e = o && o.apply(this, arguments);
									e && h.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return e != null ? h.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, h.each(t, function(e, s) {
				var o = s[2],
					u = s[3];
				r[s[1]] = o.add, u && o.add(function() {
					n = u
				}, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
					return i[s[0] + "With"](this === i ? r : this, arguments), this
				}, i[s[0] + "With"] = o.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t = 0,
				n = r.call(arguments),
				i = n.length,
				s = i !== 1 || e && h.isFunction(e.promise) ? i : 0,
				o = s === 1 ? e : h.Deferred(),
				u = function(e, t, n) {
					return function(i) {
						t[e] = this, n[e] = arguments.length > 1 ? r.call(arguments) : i, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
					}
				},
				a, f, l;
			if(i > 1) {
				a = new Array(i), f = new Array(i), l = new Array(i);
				for(; t < i; t++) n[t] && h.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a)) : --s
			}
			return s || o.resolveWith(l, n), o.promise()
		}
	});
	var D;
	h.fn.ready = function(e) {
		return h.ready.promise().done(e), this
	}, h.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? h.readyWait++ : h.ready(!0)
		},
		ready: function(e) {
			if(e === !0 ? --h.readyWait : h.isReady) return;
			if(!T.body) return setTimeout(h.ready);
			h.isReady = !0;
			if(e !== !0 && --h.readyWait > 0) return;
			D.resolveWith(T, [h]), h.fn.triggerHandler && (h(T).triggerHandler("ready"), h(T).off("ready"))
		}
	}), h.ready.promise = function(t) {
		if(!D) {
			D = h.Deferred();
			if(T.readyState === "complete") setTimeout(h.ready);
			else if(T.addEventListener) T.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
			else {
				T.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
				var n = !1;
				try {
					n = e.frameElement == null && T.documentElement
				} catch(r) {}
				n && n.doScroll && function i() {
					if(!h.isReady) {
						try {
							n.doScroll("left")
						} catch(e) {
							return setTimeout(i, 50)
						}
						P(), h.ready()
					}
				}()
			}
		}
		return D.promise(t)
	};
	var B = typeof undefined,
		j;
	for(j in h(l)) break;
	l.ownLast = j !== "0", l.inlineBlockNeedsLayout = !1, h(function() {
			var e, t, n, r;
			n = T.getElementsByTagName("body")[0];
			if(!n || !n.style) return;
			t = T.createElement("div"), r = T.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== B && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = e = t.offsetWidth === 3, e && (n.style.zoom = 1)), n.removeChild(r)
		}),
		function() {
			var e = T.createElement("div");
			if(l.deleteExpando == null) {
				l.deleteExpando = !0;
				try {
					delete e.test
				} catch(t) {
					l.deleteExpando = !1
				}
			}
			e = null
		}(), h.acceptData = function(e) {
			var t = h.noData[(e.nodeName + " ").toLowerCase()],
				n = +e.nodeType || 1;
			return n !== 1 && n !== 9 ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
		};
	var F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		I = /([A-Z])/g;
	h.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? h.cache[e[h.expando]] : e[h.expando], !!e && !R(e)
		},
		data: function(e, t, n) {
			return U(e, t, n)
		},
		removeData: function(e, t) {
			return z(e, t)
		},
		_data: function(e, t, n) {
			return U(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return z(e, t, !0)
		}
	}), h.fn.extend({
		data: function(e, t) {
			var n, r, i, s = this[0],
				o = s && s.attributes;
			if(e === undefined) {
				if(this.length) {
					i = h.data(s);
					if(s.nodeType === 1 && !h._data(s, "parsedAttrs")) {
						n = o.length;
						while(n--) o[n] && (r = o[n].name, r.indexOf("data-") === 0 && (r = h.camelCase(r.slice(5)), q(s, r, i[r])));
						h._data(s, "parsedAttrs", !0)
					}
				}
				return i
			}
			return typeof e == "object" ? this.each(function() {
				h.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				h.data(this, e, t)
			}) : s ? q(s, e, h.data(s, e)) : undefined
		},
		removeData: function(e) {
			return this.each(function() {
				h.removeData(this, e)
			})
		}
	}), h.extend({
		queue: function(e, t, n) {
			var r;
			if(e) return t = (t || "fx") + "queue", r = h._data(e, t), n && (!r || h.isArray(n) ? r = h._data(e, t, h.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = h.queue(e, t),
				r = n.length,
				i = n.shift(),
				s = h._queueHooks(e, t),
				o = function() {
					h.dequeue(e, t)
				};
			i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return h._data(e, n) || h._data(e, n, {
				empty: h.Callbacks("once memory").add(function() {
					h._removeData(e, t + "queue"), h._removeData(e, n)
				})
			})
		}
	}), h.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? h.queue(this[0], e) : t === undefined ? this : this.each(function() {
				var n = h.queue(this, e, t);
				h._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && h.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				h.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = h.Deferred(),
				s = this,
				o = this.length,
				u = function() {
					--r || i.resolveWith(s, [s])
				};
			typeof e != "string" && (t = e, e = undefined), e = e || "fx";
			while(o--) n = h._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
			return u(), i.promise(t)
		}
	});
	var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		X = ["Top", "Right", "Bottom", "Left"],
		V = function(e, t) {
			return e = t || e, h.css(e, "display") === "none" || !h.contains(e.ownerDocument, e)
		},
		$ = h.access = function(e, t, n, r, i, s, o) {
			var u = 0,
				a = e.length,
				f = n == null;
			if(h.type(n) === "object") {
				i = !0;
				for(u in n) h.access(e, t, u, n[u], !0, s, o)
			} else if(r !== undefined) {
				i = !0, h.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
					return f.call(h(e), n)
				}));
				if(t)
					for(; u < a; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
			}
			return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
		},
		J = /^(?:checkbox|radio)$/i;
	(function() {
		var e = T.createElement("input"),
			t = T.createElement("div"),
			n = T.createDocumentFragment();
		t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = t.firstChild.nodeType === 3, l.tbody = !t.getElementsByTagName("tbody").length, l.htmlSerialize = !!t.getElementsByTagName("link").length, l.html5Clone = T.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", e.type = "checkbox", e.checked = !0, n.appendChild(e), l.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
			l.noCloneEvent = !1
		}), t.cloneNode(!0).click());
		if(l.deleteExpando == null) {
			l.deleteExpando = !0;
			try {
				delete t.test
			} catch(r) {
				l.deleteExpando = !1
			}
		}
	})(),
	function() {
		var t, n, r = T.createElement("div");
		for(t in {
				submit: !0,
				change: !0,
				focusin: !0
			}) n = "on" + t, (l[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), l[t + "Bubbles"] = r.attributes[n].expando === !1);
		r = null
	}();
	var K = /^(?:input|select|textarea)$/i,
		Q = /^key/,
		G = /^(?:mouse|pointer|contextmenu)|click/,
		Y = /^(?:focusinfocus|focusoutblur)$/,
		Z = /^([^.]*)(?:\.(.+)|)$/;
	h.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var s, o, u, a, f, l, c, p, d, v, m, g = h._data(e);
			if(!g) return;
			n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = h.guid++), (o = g.events) || (o = g.events = {}), (l = g.handle) || (l = g.handle = function(e) {
				return typeof h === B || !!e && h.event.triggered === e.type ? undefined : h.event.dispatch.apply(l.elem, arguments)
			}, l.elem = e), t = (t || "").match(O) || [""], u = t.length;
			while(u--) {
				s = Z.exec(t[u]) || [], d = m = s[1], v = (s[2] || "").split(".").sort();
				if(!d) continue;
				f = h.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = h.event.special[d] || {}, c = h.extend({
					type: d,
					origType: m,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && h.expr.match.needsContext.test(i),
					namespace: v.join(".")
				}, a);
				if(!(p = o[d])) {
					p = o[d] = [], p.delegateCount = 0;
					if(!f.setup || f.setup.call(e, r, v, l) === !1) e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l)
				}
				f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), h.event.global[d] = !0
			}
			e = null
		},
		remove: function(e, t, n, r, i) {
			var s, o, u, a, f, l, c, p, d, v, m, g = h.hasData(e) && h._data(e);
			if(!g || !(l = g.events)) return;
			t = (t || "").match(O) || [""], f = t.length;
			while(f--) {
				u = Z.exec(t[f]) || [], d = m = u[1], v = (u[2] || "").split(".").sort();
				if(!d) {
					for(d in l) h.event.remove(e, d + t[f], n, r, !0);
					continue
				}
				c = h.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, p = l[d] || [], u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = p.length;
				while(s--) o = p[s], (i || m === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (p.splice(s, 1), o.selector && p.delegateCount--, c.remove && c.remove.call(e, o));
				a && !p.length && ((!c.teardown || c.teardown.call(e, v, g.handle) === !1) && h.removeEvent(e, d, g.handle), delete l[d])
			}
			h.isEmptyObject(l) && (delete g.handle, h._removeData(e, "events"))
		},
		trigger: function(t, n, r, i) {
			var s, o, u, a, l, c, p, d = [r || T],
				v = f.call(t, "type") ? t.type : t,
				m = f.call(t, "namespace") ? t.namespace.split(".") : [];
			u = c = r = r || T;
			if(r.nodeType === 3 || r.nodeType === 8) return;
			if(Y.test(v + h.event.triggered)) return;
			v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), o = v.indexOf(":") < 0 && "on" + v, t = t[h.expando] ? t : new h.Event(v, typeof t == "object" && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = n == null ? [t] : h.makeArray(n, [t]), l = h.event.special[v] || {};
			if(!i && l.trigger && l.trigger.apply(r, n) === !1) return;
			if(!i && !l.noBubble && !h.isWindow(r)) {
				a = l.delegateType || v, Y.test(a + v) || (u = u.parentNode);
				for(; u; u = u.parentNode) d.push(u), c = u;
				c === (r.ownerDocument || T) && d.push(c.defaultView || c.parentWindow || e)
			}
			p = 0;
			while((u = d[p++]) && !t.isPropagationStopped()) t.type = p > 1 ? a : l.bindType || v, s = (h._data(u, "events") || {})[t.type] && h._data(u, "handle"), s && s.apply(u, n), s = o && u[o], s && s.apply && h.acceptData(u) && (t.result = s.apply(u, n), t.result === !1 && t.preventDefault());
			t.type = v;
			if(!i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && h.acceptData(r) && o && r[v] && !h.isWindow(r)) {
				c = r[o], c && (r[o] = null), h.event.triggered = v;
				try {
					r[v]()
				} catch(g) {}
				h.event.triggered = undefined, c && (r[o] = c)
			}
			return t.result
		},
		dispatch: function(e) {
			e = h.event.fix(e);
			var t, n, i, s, o, u = [],
				a = r.call(arguments),
				f = (h._data(this, "events") || {})[e.type] || [],
				l = h.event.special[e.type] || {};
			a[0] = e, e.delegateTarget = this;
			if(l.preDispatch && l.preDispatch.call(this, e) === !1) return;
			u = h.event.handlers.call(this, e, f), t = 0;
			while((s = u[t++]) && !e.isPropagationStopped()) {
				e.currentTarget = s.elem, o = 0;
				while((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
					if(!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, n = ((h.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), n !== undefined && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation())
			}
			return l.postDispatch && l.postDispatch.call(this, e), e.result
		},
		handlers: function(e, t) {
			var n, r, i, s, o = [],
				u = t.delegateCount,
				a = e.target;
			if(u && a.nodeType && (!e.button || e.type !== "click"))
				for(; a != this; a = a.parentNode || this)
					if(a.nodeType === 1 && (a.disabled !== !0 || e.type !== "click")) {
						i = [];
						for(s = 0; s < u; s++) r = t[s], n = r.selector + " ", i[n] === undefined && (i[n] = r.needsContext ? h(n, this).index(a) >= 0 : h.find(n, this, null, [a]).length), i[n] && i.push(r);
						i.length && o.push({
							elem: a,
							handlers: i
						})
					}
			return u < t.length && o.push({
				elem: this,
				handlers: t.slice(u)
			}), o
		},
		fix: function(e) {
			if(e[h.expando]) return e;
			var t, n, r, i = e.type,
				s = e,
				o = this.fixHooks[i];
			o || (this.fixHooks[i] = o = G.test(i) ? this.mouseHooks : Q.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new h.Event(s), t = r.length;
			while(t--) n = r[t], e[n] = s[n];
			return e.target || (e.target = s.srcElement || T), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, s = t.button,
					o = t.fromElement;
				return e.pageX == null && t.clientX != null && (r = e.target.ownerDocument || T, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), !e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if(this !== nt() && this.focus) try {
						return this.focus(), !1
					} catch(e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if(this === nt() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if(h.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
				},
				_default: function(e) {
					return h.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = h.extend(new h.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? h.event.trigger(i, null, t) : h.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, h.removeEvent = T.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === B && (e[r] = null), e.detachEvent(r, n))
	}, h.Event = function(e, t) {
		if(!(this instanceof h.Event)) return new h.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === !1 ? et : tt) : this.type = e, t && h.extend(this, t), this.timeStamp = e && e.timeStamp || h.now(), this[h.expando] = !0
	}, h.Event.prototype = {
		isDefaultPrevented: tt,
		isPropagationStopped: tt,
		isImmediatePropagationStopped: tt,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = et;
			if(!e) return;
			e.preventDefault ? e.preventDefault() : e.returnValue = !1
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = et;
			if(!e) return;
			e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = et, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, h.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		h.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					s = e.handleObj;
				if(!i || i !== r && !h.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
				return n
			}
		}
	}), l.submitBubbles || (h.event.special.submit = {
		setup: function() {
			if(h.nodeName(this, "form")) return !1;
			h.event.add(this, "click._submit keypress._submit", function(e) {
				var t = e.target,
					n = h.nodeName(t, "input") || h.nodeName(t, "button") ? t.form : undefined;
				n && !h._data(n, "submitBubbles") && (h.event.add(n, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), h._data(n, "submitBubbles", !0))
			})
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && h.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			if(h.nodeName(this, "form")) return !1;
			h.event.remove(this, "._submit")
		}
	}), l.changeBubbles || (h.event.special.change = {
		setup: function() {
			if(K.test(this.nodeName)) {
				if(this.type === "checkbox" || this.type === "radio") h.event.add(this, "propertychange._change", function(e) {
					e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
				}), h.event.add(this, "click._change", function(e) {
					this._just_changed && !e.isTrigger && (this._just_changed = !1), h.event.simulate("change", this, e, !0)
				});
				return !1
			}
			h.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				K.test(t.nodeName) && !h._data(t, "changeBubbles") && (h.event.add(t, "change._change", function(e) {
					this.parentNode && !e.isSimulated && !e.isTrigger && h.event.simulate("change", this.parentNode, e, !0)
				}), h._data(t, "changeBubbles", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			if(this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return h.event.remove(this, "._change"), !K.test(this.nodeName)
		}
	}), l.focusinBubbles || h.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			h.event.simulate(t, e.target, h.event.fix(e), !0)
		};
		h.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = h._data(r, t);
				i || r.addEventListener(e, n, !0), h._data(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = h._data(r, t) - 1;
				i ? h._data(r, t, i) : (r.removeEventListener(e, n, !0), h._removeData(r, t))
			}
		}
	}), h.fn.extend({
		on: function(e, t, n, r, i) {
			var s, o;
			if(typeof e == "object") {
				typeof t != "string" && (n = n || t, t = undefined);
				for(s in e) this.on(s, t, n, e[s], i);
				return this
			}
			n == null && r == null ? (r = t, n = t = undefined) : r == null && (typeof t == "string" ? (r = n, n = undefined) : (r = n, n = t, t = undefined));
			if(r === !1) r = tt;
			else if(!r) return this;
			return i === 1 && (o = r, r = function(e) {
				return h().off(e), o.apply(this, arguments)
			}, r.guid = o.guid || (o.guid = h.guid++)), this.each(function() {
				h.event.add(this, e, r, n, t)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if(e && e.preventDefault && e.handleObj) return r = e.handleObj, h(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if(typeof e == "object") {
				for(i in e) this.off(i, t, e[i]);
				return this
			}
			if(t === !1 || typeof t == "function") n = t, t = undefined;
			return n === !1 && (n = tt), this.each(function() {
				h.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				h.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if(n) return h.event.trigger(e, t, n, !0)
		}
	});
	var it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		st = / jQuery\d+="(?:null|\d+)"/g,
		ot = new RegExp("<(?:" + it + ")[\\s/>]", "i"),
		ut = /^\s+/,
		at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		ft = /<([\w:]+)/,
		lt = /<tbody/i,
		ct = /<|&#?\w+;/,
		ht = /<(?:script|style|link)/i,
		pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		dt = /^$|\/(?:java|ecma)script/i,
		vt = /^true\/(.*)/,
		mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		gt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		yt = rt(T),
		bt = yt.appendChild(T.createElement("div"));
	gt.optgroup = gt.option, gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td, h.extend({
		clone: function(e, t, n) {
			var r, i, s, o, u, a = h.contains(e.ownerDocument, e);
			l.html5Clone || h.isXMLDoc(e) || !ot.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (bt.innerHTML = e.outerHTML, bt.removeChild(s = bt.firstChild));
			if((!l.noCloneEvent || !l.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !h.isXMLDoc(e)) {
				r = wt(s), u = wt(e);
				for(o = 0;
					(i = u[o]) != null; ++o) r[o] && kt(i, r[o])
			}
			if(t)
				if(n) {
					u = u || wt(e), r = r || wt(s);
					for(o = 0;
						(i = u[o]) != null; o++) Ct(i, r[o])
				} else Ct(e, s);
			return r = wt(s, "script"), r.length > 0 && Nt(r, !a && wt(e, "script")), r = u = i = null, s
		},
		buildFragment: function(e, t, n, r) {
			var i, s, o, u, a, f, c, p = e.length,
				d = rt(t),
				v = [],
				m = 0;
			for(; m < p; m++) {
				s = e[m];
				if(s || s === 0)
					if(h.type(s) === "object") h.merge(v, s.nodeType ? [s] : s);
					else if(!ct.test(s)) v.push(t.createTextNode(s));
				else {
					u = u || d.appendChild(t.createElement("div")), a = (ft.exec(s) || ["", ""])[1].toLowerCase(), c = gt[a] || gt._default, u.innerHTML = c[1] + s.replace(at, "<$1></$2>") + c[2], i = c[0];
					while(i--) u = u.lastChild;
					!l.leadingWhitespace && ut.test(s) && v.push(t.createTextNode(ut.exec(s)[0]));
					if(!l.tbody) {
						s = a === "table" && !lt.test(s) ? u.firstChild : c[1] === "<table>" && !lt.test(s) ? u : 0, i = s && s.childNodes.length;
						while(i--) h.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
					}
					h.merge(v, u.childNodes), u.textContent = "";
					while(u.firstChild) u.removeChild(u.firstChild);
					u = d.lastChild
				}
			}
			u && d.removeChild(u), l.appendChecked || h.grep(wt(v, "input"), Et), m = 0;
			while(s = v[m++]) {
				if(r && h.inArray(s, r) !== -1) continue;
				o = h.contains(s.ownerDocument, s), u = wt(d.appendChild(s), "script"), o && Nt(u);
				if(n) {
					i = 0;
					while(s = u[i++]) dt.test(s.type || "") && n.push(s)
				}
			}
			return u = null, d
		},
		cleanData: function(e, t) {
			var r, i, s, o, u = 0,
				a = h.expando,
				f = h.cache,
				c = l.deleteExpando,
				p = h.event.special;
			for(;
				(r = e[u]) != null; u++)
				if(t || h.acceptData(r)) {
					s = r[a], o = s && f[s];
					if(o) {
						if(o.events)
							for(i in o.events) p[i] ? h.event.remove(r, i) : h.removeEvent(r, i, o.handle);
						f[s] && (delete f[s], c ? delete r[a] : typeof r.removeAttribute !== B ? r.removeAttribute(a) : r[a] = null, n.push(s))
					}
				}
		}
	}), h.fn.extend({
		text: function(e) {
			return $(this, function(e) {
				return e === undefined ? h.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var t = St(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var t = St(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			var n, r = e ? h.filter(e, this) : this,
				i = 0;
			for(;
				(n = r[i]) != null; i++) !t && n.nodeType === 1 && h.cleanData(wt(n)), n.parentNode && (t && h.contains(n.ownerDocument, n) && Nt(wt(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			var e, t = 0;
			for(;
				(e = this[t]) != null; t++) {
				e.nodeType === 1 && h.cleanData(wt(e, !1));
				while(e.firstChild) e.removeChild(e.firstChild);
				e.options && h.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
				return h.clone(this, e, t)
			})
		},
		html: function(e) {
			return $(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if(e === undefined) return t.nodeType === 1 ? t.innerHTML.replace(st, "") : undefined;
				if(typeof e == "string" && !ht.test(e) && (l.htmlSerialize || !ot.test(e)) && (l.leadingWhitespace || !ut.test(e)) && !gt[(ft.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(at, "<$1></$2>");
					try {
						for(; n < r; n++) t = this[n] || {}, t.nodeType === 1 && (h.cleanData(wt(t, !1)), t.innerHTML = e);
						t = 0
					} catch(i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, h.cleanData(wt(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = i.apply([], e);
			var n, r, s, o, u, a, f = 0,
				c = this.length,
				p = this,
				d = c - 1,
				v = e[0],
				m = h.isFunction(v);
			if(m || c > 1 && typeof v == "string" && !l.checkClone && pt.test(v)) return this.each(function(n) {
				var r = p.eq(n);
				m && (e[0] = v.call(this, n, r.html())), r.domManip(e, t)
			});
			if(c) {
				a = h.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, a.childNodes.length === 1 && (a = n);
				if(n) {
					o = h.map(wt(a, "script"), xt), s = o.length;
					for(; f < c; f++) r = a, f !== d && (r = h.clone(r, !0, !0), s && h.merge(o, wt(r, "script"))), t.call(this[f], r, f);
					if(s) {
						u = o[o.length - 1].ownerDocument, h.map(o, Tt);
						for(f = 0; f < s; f++) r = o[f], dt.test(r.type || "") && !h._data(r, "globalEval") && h.contains(u, r) && (r.src ? h._evalUrl && h._evalUrl(r.src) : h.globalEval((r.text || r.textContent || r.innerHTML || "").replace(mt, "")))
					}
					a = n = null
				}
			}
			return this
		}
	}), h.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		h.fn[e] = function(e) {
			var n, r = 0,
				i = [],
				o = h(e),
				u = o.length - 1;
			for(; r <= u; r++) n = r === u ? this : this.clone(!0), h(o[r])[t](n), s.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var Lt, At = {};
	(function() {
		var e;
		l.shrinkWrapBlocks = function() {
			if(e != null) return e;
			e = !1;
			var t, n, r;
			n = T.getElementsByTagName("body")[0];
			if(!n || !n.style) return;
			return t = T.createElement("div"), r = T.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== B && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(T.createElement("div")).style.width = "5px", e = t.offsetWidth !== 3), n.removeChild(r), e
		}
	})();
	var _t = /^margin/,
		Dt = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
		Pt, Ht, Bt = /^(top|right|bottom|left)$/;
	e.getComputedStyle ? (Pt = function(e) {
			return e.ownerDocument.defaultView.getComputedStyle(e, null)
		}, Ht = function(e, t, n) {
			var r, i, s, o, u = e.style;
			return n = n || Pt(e), o = n ? n.getPropertyValue(t) || n[t] : undefined, n && (o === "" && !h.contains(e.ownerDocument, e) && (o = h.style(e, t)), Dt.test(o) && _t.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), o === undefined ? o : o + ""
		}) : T.documentElement.currentStyle && (Pt = function(e) {
			return e.currentStyle
		}, Ht = function(e, t, n) {
			var r, i, s, o, u = e.style;
			return n = n || Pt(e), o = n ? n[t] : undefined, o == null && u && u[t] && (o = u[t]), Dt.test(o) && !Bt.test(t) && (r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = t === "fontSize" ? "1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), o === undefined ? o : o + "" || "auto"
		}),
		function() {
			function a() {
				var t, n, r, a;
				n = T.getElementsByTagName("body")[0];
				if(!n || !n.style) return;
				t = T.createElement("div"), r = T.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = s = !1, u = !0, e.getComputedStyle && (i = (e.getComputedStyle(t, null) || {}).top !== "1%", s = (e.getComputedStyle(t, null) || {
					width: "4px"
				}).width === "4px", a = t.appendChild(T.createElement("div")), a.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", a.style.marginRight = a.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = t.getElementsByTagName("td"), a[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = a[0].offsetHeight === 0, o && (a[0].style.display = "", a[1].style.display = "none", o = a[0].offsetHeight === 0), n.removeChild(r)
			}
			var t, n, r, i, s, o, u;
			t = T.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = r && r.style;
			if(!n) return;
			n.cssText = "float:left;opacity:.5", l.opacity = n.opacity === "0.5", l.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = t.style.backgroundClip === "content-box", l.boxSizing = n.boxSizing === "" || n.MozBoxSizing === "" || n.WebkitBoxSizing === "", h.extend(l, {
				reliableHiddenOffsets: function() {
					return o == null && a(), o
				},
				boxSizingReliable: function() {
					return s == null && a(), s
				},
				pixelPosition: function() {
					return i == null && a(), i
				},
				reliableMarginRight: function() {
					return u == null && a(), u
				}
			})
		}(), h.swap = function(e, t, n, r) {
			var i, s, o = {};
			for(s in t) o[s] = e.style[s], e.style[s] = t[s];
			i = n.apply(e, r || []);
			for(s in t) e.style[s] = o[s];
			return i
		};
	var Ft = /alpha\([^)]*\)/i,
		It = /opacity\s*=\s*([^)]*)/,
		qt = /^(none|table(?!-c[ea]).+)/,
		Rt = new RegExp("^(" + W + ")(.*)$", "i"),
		Ut = new RegExp("^([+-])=(" + W + ")", "i"),
		zt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Wt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Xt = ["Webkit", "O", "Moz", "ms"];
	h.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if(t) {
						var n = Ht(e, "opacity");
						return n === "" ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": l.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, t, n, r) {
			if(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
			var i, s, o, u = h.camelCase(t),
				a = e.style;
			t = h.cssProps[u] || (h.cssProps[u] = Vt(a, u)), o = h.cssHooks[t] || h.cssHooks[u];
			if(n === undefined) return o && "get" in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
			s = typeof n, s === "string" && (i = Ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(h.css(e, t)), s = "number");
			if(n == null || n !== n) return;
			s === "number" && !h.cssNumber[u] && (n += "px"), !l.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
			if(!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) try {
				a[t] = n
			} catch(f) {}
		},
		css: function(e, t, n, r) {
			var i, s, o, u = h.camelCase(t);
			return t = h.cssProps[u] || (h.cssProps[u] = Vt(e.style, u)), o = h.cssHooks[t] || h.cssHooks[u], o && "get" in o && (s = o.get(e, !0, n)), s === undefined && (s = Ht(e, t, r)), s === "normal" && t in Wt && (s = Wt[t]), n === "" || n ? (i = parseFloat(s), n === !0 || h.isNumeric(i) ? i || 0 : s) : s
		}
	}), h.each(["height", "width"], function(e, t) {
		h.cssHooks[t] = {
			get: function(e, n, r) {
				if(n) return qt.test(h.css(e, "display")) && e.offsetWidth === 0 ? h.swap(e, zt, function() {
					return Qt(e, t, r)
				}) : Qt(e, t, r)
			},
			set: function(e, n, r) {
				var i = r && Pt(e);
				return Jt(e, n, r ? Kt(e, t, r, l.boxSizing && h.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
			}
		}
	}), l.opacity || (h.cssHooks.opacity = {
		get: function(e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = h.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
				s = r && r.filter || n.filter || "";
			n.zoom = 1;
			if((t >= 1 || t === "") && h.trim(s.replace(Ft, "")) === "" && n.removeAttribute) {
				n.removeAttribute("filter");
				if(t === "" || r && !r.filter) return
			}
			n.filter = Ft.test(s) ? s.replace(Ft, i) : s + " " + i
		}
	}), h.cssHooks.marginRight = jt(l.reliableMarginRight, function(e, t) {
		if(t) return h.swap(e, {
			display: "inline-block"
		}, Ht, [e, "marginRight"])
	}), h.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		h.cssHooks[e + t] = {
			expand: function(n) {
				var r = 0,
					i = {},
					s = typeof n == "string" ? n.split(" ") : [n];
				for(; r < 4; r++) i[e + X[r] + t] = s[r] || s[r - 2] || s[0];
				return i
			}
		}, _t.test(e) || (h.cssHooks[e + t].set = Jt)
	}), h.fn.extend({
		css: function(e, t) {
			return $(this, function(e, t, n) {
				var r, i, s = {},
					o = 0;
				if(h.isArray(t)) {
					r = Pt(e), i = t.length;
					for(; o < i; o++) s[t[o]] = h.css(e, t[o], !1, r);
					return s
				}
				return n !== undefined ? h.style(e, t, n) : h.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return $t(this, !0)
		},
		hide: function() {
			return $t(this)
		},
		toggle: function(e) {
			return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
				V(this) ? h(this).show() : h(this).hide()
			})
		}
	}), h.Tween = Gt, Gt.prototype = {
		constructor: Gt,
		init: function(e, t, n, r, i, s) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (h.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = Gt.propHooks[this.prop];
			return e && e.get ? e.get(this) : Gt.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = Gt.propHooks[this.prop];
			return this.options.duration ? this.pos = t = h.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Gt.propHooks._default.set(this), this
		}
	}, Gt.prototype.init.prototype = Gt.prototype, Gt.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = h.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
			},
			set: function(e) {
				h.fx.step[e.prop] ? h.fx.step[e.prop](e) : e.elem.style && (e.elem.style[h.cssProps[e.prop]] != null || h.cssHooks[e.prop]) ? h.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, h.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, h.fx = Gt.prototype.init, h.fx.step = {};
	var Yt, Zt, en = /^(?:toggle|show|hide)$/,
		tn = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
		nn = /queueHooks$/,
		rn = [fn],
		sn = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = tn.exec(t),
					s = i && i[3] || (h.cssNumber[e] ? "" : "px"),
					o = (h.cssNumber[e] || s !== "px" && +r) && tn.exec(h.css(n.elem, e)),
					u = 1,
					a = 20;
				if(o && o[3] !== s) {
					s = s || o[3], i = i || [], o = +r || 1;
					do u = u || ".5", o /= u, h.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
				}
				return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};
	h.Animation = h.extend(cn, {
			tweener: function(e, t) {
				h.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				var n, r = 0,
					i = e.length;
				for(; r < i; r++) n = e[r], sn[n] = sn[n] || [], sn[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? rn.unshift(e) : rn.push(e)
			}
		}), h.speed = function(e, t, n) {
			var r = e && typeof e == "object" ? h.extend({}, e) : {
				complete: n || !n && t || h.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !h.isFunction(t) && t
			};
			r.duration = h.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in h.fx.speeds ? h.fx.speeds[r.duration] : h.fx.speeds._default;
			if(r.queue == null || r.queue === !0) r.queue = "fx";
			return r.old = r.complete, r.complete = function() {
				h.isFunction(r.old) && r.old.call(this), r.queue && h.dequeue(this, r.queue)
			}, r
		}, h.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(V).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = h.isEmptyObject(e),
					s = h.speed(t, n, r),
					o = function() {
						var t = cn(this, h.extend({}, e), s);
						(i || h._data(this, "finish")) && t.stop(!0)
					};
				return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
			},
			stop: function(e, t, n) {
				var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return typeof e != "string" && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						i = e != null && e + "queueHooks",
						s = h.timers,
						o = h._data(this);
					if(i) o[i] && o[i].stop && r(o[i]);
					else
						for(i in o) o[i] && o[i].stop && nn.test(i) && r(o[i]);
					for(i = s.length; i--;) s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), t = !1, s.splice(i, 1));
					(t || !n) && h.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = h._data(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						s = h.timers,
						o = r ? r.length : 0;
					n.finish = !0, h.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
					for(t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
					for(t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), h.each(["toggle", "show", "hide"], function(e, t) {
			var n = h.fn[t];
			h.fn[t] = function(e, r, i) {
				return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(un(t, !0), e, r, i)
			}
		}), h.each({
			slideDown: un("show"),
			slideUp: un("hide"),
			slideToggle: un("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			h.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), h.timers = [], h.fx.tick = function() {
			var e, t = h.timers,
				n = 0;
			Yt = h.now();
			for(; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
			t.length || h.fx.stop(), Yt = undefined
		}, h.fx.timer = function(e) {
			h.timers.push(e), e() ? h.fx.start() : h.timers.pop()
		}, h.fx.interval = 13, h.fx.start = function() {
			Zt || (Zt = setInterval(h.fx.tick, h.fx.interval))
		}, h.fx.stop = function() {
			clearInterval(Zt), Zt = null
		}, h.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, h.fn.delay = function(e, t) {
			return e = h.fx ? h.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		function() {
			var e, t, n, r, i;
			t = T.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = T.createElement("select"), i = n.appendChild(T.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", l.getSetAttribute = t.className !== "t", l.style = /top/.test(r.getAttribute("style")), l.hrefNormalized = r.getAttribute("href") === "/a", l.checkOn = !!e.value, l.optSelected = i.selected, l.enctype = !!T.createElement("form").enctype, n.disabled = !0, l.optDisabled = !i.disabled, e = T.createElement("input"), e.setAttribute("value", ""), l.input = e.getAttribute("value") === "", e.value = "t", e.setAttribute("type", "radio"), l.radioValue = e.value === "t"
		}();
	var hn = /\r/g;
	h.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0];
			if(!arguments.length) {
				if(i) return t = h.valHooks[i.type] || h.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, typeof n == "string" ? n.replace(hn, "") : n == null ? "" : n);
				return
			}
			return r = h.isFunction(e), this.each(function(n) {
				var i;
				if(this.nodeType !== 1) return;
				r ? i = e.call(this, n, h(this).val()) : i = e, i == null ? i = "" : typeof i == "number" ? i += "" : h.isArray(i) && (i = h.map(i, function(e) {
					return e == null ? "" : e + ""
				})), t = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()];
				if(!t || !("set" in t) || t.set(this, i, "value") === undefined) this.value = i
			})
		}
	}), h.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = h.find.attr(e, "value");
					return t != null ? t : h.trim(h.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r = e.options,
						i = e.selectedIndex,
						s = e.type === "select-one" || i < 0,
						o = s ? null : [],
						u = s ? i + 1 : r.length,
						a = i < 0 ? u : s ? i : 0;
					for(; a < u; a++) {
						n = r[a];
						if((n.selected || a === i) && (l.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !h.nodeName(n.parentNode, "optgroup"))) {
							t = h(n).val();
							if(s) return t;
							o.push(t)
						}
					}
					return o
				},
				set: function(e, t) {
					var n, r, i = e.options,
						s = h.makeArray(t),
						o = i.length;
					while(o--) {
						r = i[o];
						if(h.inArray(h.valHooks.option.get(r), s) >= 0) try {
							r.selected = n = !0
						} catch(u) {
							r.scrollHeight
						} else r.selected = !1
					}
					return n || (e.selectedIndex = -1), i
				}
			}
		}
	}), h.each(["radio", "checkbox"], function() {
		h.valHooks[this] = {
			set: function(e, t) {
				if(h.isArray(t)) return e.checked = h.inArray(h(e).val(), t) >= 0
			}
		}, l.checkOn || (h.valHooks[this].get = function(e) {
			return e.getAttribute("value") === null ? "on" : e.value
		})
	});
	var pn, dn, vn = h.expr.attrHandle,
		mn = /^(?:checked|selected)$/i,
		gn = l.getSetAttribute,
		yn = l.input;
	h.fn.extend({
		attr: function(e, t) {
			return $(this, h.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				h.removeAttr(this, e)
			})
		}
	}), h.extend({
		attr: function(e, t, n) {
			var r, i, s = e.nodeType;
			if(!e || s === 3 || s === 8 || s === 2) return;
			if(typeof e.getAttribute === B) return h.prop(e, t, n);
			if(s !== 1 || !h.isXMLDoc(e)) t = t.toLowerCase(), r = h.attrHooks[t] || (h.expr.match.bool.test(t) ? dn : pn);
			if(n === undefined) return r && "get" in r && (i = r.get(e, t)) !== null ? i : (i = h.find.attr(e, t), i == null ? undefined : i);
			if(n !== null) return r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n);
			h.removeAttr(e, t)
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				s = t && t.match(O);
			if(s && e.nodeType === 1)
				while(n = s[i++]) r = h.propFix[n] || n, h.expr.match.bool.test(n) ? yn && gn || !mn.test(n) ? e[r] = !1 : e[h.camelCase("default-" + n)] = e[r] = !1 : h.attr(e, n, ""), e.removeAttribute(gn ? n : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if(!l.radioValue && t === "radio" && h.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), dn = {
		set: function(e, t, n) {
			return t === !1 ? h.removeAttr(e, n) : yn && gn || !mn.test(n) ? e.setAttribute(!gn && h.propFix[n] || n, n) : e[h.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, h.each(h.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = vn[t] || h.find.attr;
		vn[t] = yn && gn || !mn.test(t) ? function(e, t, r) {
			var i, s;
			return r || (s = vn[t], vn[t] = i, i = n(e, t, r) != null ? t.toLowerCase() : null, vn[t] = s), i
		} : function(e, t, n) {
			if(!n) return e[h.camelCase("default-" + t)] ? t.toLowerCase() : null
		}
	});
	if(!yn || !gn) h.attrHooks.value = {
		set: function(e, t, n) {
			if(!h.nodeName(e, "input")) return pn && pn.set(e, t, n);
			e.defaultValue = t
		}
	};
	gn || (pn = {
		set: function(e, t, n) {
			var r = e.getAttributeNode(n);
			r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "";
			if(n === "value" || t === e.getAttribute(n)) return t
		}
	}, vn.id = vn.name = vn.coords = function(e, t, n) {
		var r;
		if(!n) return(r = e.getAttributeNode(t)) && r.value !== "" ? r.value : null
	}, h.valHooks.button = {
		get: function(e, t) {
			var n = e.getAttributeNode(t);
			if(n && n.specified) return n.value
		},
		set: pn.set
	}, h.attrHooks.contenteditable = {
		set: function(e, t, n) {
			pn.set(e, t === "" ? !1 : t, n)
		}
	}, h.each(["width", "height"], function(e, t) {
		h.attrHooks[t] = {
			set: function(e, n) {
				if(n === "") return e.setAttribute(t, "auto"), n
			}
		}
	})), l.style || (h.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || undefined
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	});
	var bn = /^(?:input|select|textarea|button|object)$/i,
		wn = /^(?:a|area)$/i;
	h.fn.extend({
		prop: function(e, t) {
			return $(this, h.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = h.propFix[e] || e, this.each(function() {
				try {
					this[e] = undefined, delete this[e]
				} catch(t) {}
			})
		}
	}), h.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var r, i, s, o = e.nodeType;
			if(!e || o === 3 || o === 8 || o === 2) return;
			return s = o !== 1 || !h.isXMLDoc(e), s && (t = h.propFix[t] || t, i = h.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = h.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : bn.test(e.nodeName) || wn.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), l.hrefNormalized || h.each(["href", "src"], function(e, t) {
		h.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), l.optSelected || (h.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), h.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		h.propFix[this.toLowerCase()] = this
	}), l.enctype || (h.propFix.enctype = "encoding");
	var En = /[\t\r\n\f]/g;
	h.fn.extend({
		addClass: function(e) {
			var t, n, r, i, s, o, u = 0,
				a = this.length,
				f = typeof e == "string" && e;
			if(h.isFunction(e)) return this.each(function(t) {
				h(this).addClass(e.call(this, t, this.className))
			});
			if(f) {
				t = (e || "").match(O) || [];
				for(; u < a; u++) {
					n = this[u], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(En, " ") : " ");
					if(r) {
						s = 0;
						while(i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						o = h.trim(r), n.className !== o && (n.className = o)
					}
				}
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, s, o, u = 0,
				a = this.length,
				f = arguments.length === 0 || typeof e == "string" && e;
			if(h.isFunction(e)) return this.each(function(t) {
				h(this).removeClass(e.call(this, t, this.className))
			});
			if(f) {
				t = (e || "").match(O) || [];
				for(; u < a; u++) {
					n = this[u], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(En, " ") : "");
					if(r) {
						s = 0;
						while(i = t[s++])
							while(r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
						o = e ? h.trim(r) : "", n.className !== o && (n.className = o)
					}
				}
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : h.isFunction(e) ? this.each(function(n) {
				h(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if(n === "string") {
					var t, r = 0,
						i = h(this),
						s = e.match(O) || [];
					while(t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
				} else if(n === B || n === "boolean") this.className && h._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : h._data(this, "__className__") || ""
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for(; n < r; n++)
				if(this[n].nodeType === 1 && (" " + this[n].className + " ").replace(En, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	}), h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		h.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), h.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var Sn = h.now(),
		xn = /\?/,
		Tn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	h.parseJSON = function(t) {
		if(e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
		var n, r = null,
			i = h.trim(t + "");
		return i && !h.trim(i.replace(Tn, function(e, t, i, s) {
			return n && t && (r = 0), r === 0 ? e : (n = i || t, r += !s - !i, "")
		})) ? Function("return " + i)() : h.error("Invalid JSON: " + t)
	}, h.parseXML = function(t) {
		var n, r;
		if(!t || typeof t != "string") return null;
		try {
			e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
		} catch(i) {
			n = undefined
		}
		return(!n || !n.documentElement || n.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + t), n
	};
	var Nn, Cn, kn = /#.*$/,
		Ln = /([?&])_=[^&]*/,
		An = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Mn = /^(?:GET|HEAD)$/,
		_n = /^\/\//,
		Dn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Pn = {},
		Hn = {},
		Bn = "*/".concat("*");
	try {
		Cn = location.href
	} catch(jn) {
		Cn = T.createElement("a"), Cn.href = "", Cn = Cn.href
	}
	Nn = Dn.exec(Cn.toLowerCase()) || [], h.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Cn,
			type: "GET",
			isLocal: On.test(Nn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Bn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": h.parseJSON,
				"text xml": h.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? qn(qn(e, h.ajaxSettings), t) : qn(h.ajaxSettings, e)
		},
		ajaxPrefilter: Fn(Pn),
		ajaxTransport: Fn(Hn),
		ajax: function(e, t) {
			function x(e, t, n, r) {
				var f, g, y, w, S, x = t;
				if(b === 2) return;
				b = 2, o && clearTimeout(o), a = undefined, s = r || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || e === 304, n && (w = Rn(l, E, n)), w = Un(l, w, E, f);
				if(f) l.ifModified && (S = E.getResponseHeader("Last-Modified"), S && (h.lastModified[i] = S), S = E.getResponseHeader("etag"), S && (h.etag[i] = S)), e === 204 || l.type === "HEAD" ? x = "nocontent" : e === 304 ? x = "notmodified" : (x = w.state, g = w.data, y = w.error, f = !y);
				else {
					y = x;
					if(e || !x) x = "error", e < 0 && (e = 0)
				}
				E.status = e, E.statusText = (t || x) + "", f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]), E.statusCode(m), m = undefined, u && p.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]), v.fireWith(c, [E, x]), u && (p.trigger("ajaxComplete", [E, l]), --h.active || h.event.trigger("ajaxStop"))
			}
			typeof e == "object" && (t = e, e = undefined), t = t || {};
			var n, r, i, s, o, u, a, f, l = h.ajaxSetup({}, t),
				c = l.context || l,
				p = l.context && (c.nodeType || c.jquery) ? h(c) : h.event,
				d = h.Deferred(),
				v = h.Callbacks("once memory"),
				m = l.statusCode || {},
				g = {},
				y = {},
				b = 0,
				w = "canceled",
				E = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if(b === 2) {
							if(!f) {
								f = {};
								while(t = An.exec(s)) f[t[1].toLowerCase()] = t[2]
							}
							t = f[e.toLowerCase()]
						}
						return t == null ? null : t
					},
					getAllResponseHeaders: function() {
						return b === 2 ? s : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = y[n] = y[n] || e, g[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (l.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if(e)
							if(b < 2)
								for(t in e) m[t] = [m[t], e[t]];
							else E.always(e[E.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return a && a.abort(t), x(0, t), this
					}
				};
			d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, l.url = ((e || l.url || Cn) + "").replace(kn, "").replace(_n, Nn[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = h.trim(l.dataType || "*").toLowerCase().match(O) || [""], l.crossDomain == null && (n = Dn.exec(l.url.toLowerCase()), l.crossDomain = !(!n || n[1] === Nn[1] && n[2] === Nn[2] && (n[3] || (n[1] === "http:" ? "80" : "443")) === (Nn[3] || (Nn[1] === "http:" ? "80" : "443")))), l.data && l.processData && typeof l.data != "string" && (l.data = h.param(l.data, l.traditional)), In(Pn, l, t, E);
			if(b === 2) return E;
			u = l.global, u && h.active++ === 0 && h.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Mn.test(l.type), i = l.url, l.hasContent || (l.data && (i = l.url += (xn.test(i) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ln.test(i) ? i.replace(Ln, "$1_=" + Sn++) : i + (xn.test(i) ? "&" : "?") + "_=" + Sn++)), l.ifModified && (h.lastModified[i] && E.setRequestHeader("If-Modified-Since", h.lastModified[i]), h.etag[i] && E.setRequestHeader("If-None-Match", h.etag[i])), (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", l.contentType), E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + Bn + "; q=0.01" : "") : l.accepts["*"]);
			for(r in l.headers) E.setRequestHeader(r, l.headers[r]);
			if(!l.beforeSend || l.beforeSend.call(c, E, l) !== !1 && b !== 2) {
				w = "abort";
				for(r in {
						success: 1,
						error: 1,
						complete: 1
					}) E[r](l[r]);
				a = In(Hn, l, t, E);
				if(!a) x(-1, "No Transport");
				else {
					E.readyState = 1, u && p.trigger("ajaxSend", [E, l]), l.async && l.timeout > 0 && (o = setTimeout(function() {
						E.abort("timeout")
					}, l.timeout));
					try {
						b = 1, a.send(g, x)
					} catch(S) {
						if(!(b < 2)) throw S;
						x(-1, S)
					}
				}
				return E
			}
			return E.abort()
		},
		getJSON: function(e, t, n) {
			return h.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return h.get(e, undefined, t, "script")
		}
	}), h.each(["get", "post"], function(e, t) {
		h[t] = function(e, n, r, i) {
			return h.isFunction(n) && (i = i || r, r = n, n = undefined), h.ajax({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			})
		}
	}), h.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		h.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), h._evalUrl = function(e) {
		return h.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, h.fn.extend({
		wrapAll: function(e) {
			if(h.isFunction(e)) return this.each(function(t) {
				h(this).wrapAll(e.call(this, t))
			});
			if(this[0]) {
				var t = h(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while(e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return h.isFunction(e) ? this.each(function(t) {
				h(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = h(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = h.isFunction(e);
			return this.each(function(n) {
				h(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				h.nodeName(this, "body") || h(this).replaceWith(this.childNodes)
			}).end()
		}
	}), h.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !l.reliableHiddenOffsets() && (e.style && e.style.display || h.css(e, "display")) === "none"
	}, h.expr.filters.visible = function(e) {
		return !h.expr.filters.hidden(e)
	};
	var zn = /%20/g,
		Wn = /\[\]$/,
		Xn = /\r?\n/g,
		Vn = /^(?:submit|button|image|reset|file)$/i,
		$n = /^(?:input|select|textarea|keygen)/i;
	h.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = h.isFunction(t) ? t() : t == null ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		t === undefined && (t = h.ajaxSettings && h.ajaxSettings.traditional);
		if(h.isArray(e) || e.jquery && !h.isPlainObject(e)) h.each(e, function() {
			i(this.name, this.value)
		});
		else
			for(n in e) Jn(n, e[n], t, i);
		return r.join("&").replace(zn, "+")
	}, h.fn.extend({
		serialize: function() {
			return h.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = h.prop(this, "elements");
				return e ? h.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !h(this).is(":disabled") && $n.test(this.nodeName) && !Vn.test(e) && (this.checked || !J.test(e))
			}).map(function(e, t) {
				var n = h(this).val();
				return n == null ? null : h.isArray(n) ? h.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Xn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Xn, "\r\n")
				}
			}).get()
		}
	}), h.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Yn() || Zn()
	} : Yn;
	var Kn = 0,
		Qn = {},
		Gn = h.ajaxSettings.xhr();
	e.ActiveXObject && h(e).on("unload", function() {
		for(var e in Qn) Qn[e](undefined, !0)
	}), l.cors = !!Gn && "withCredentials" in Gn, Gn = l.ajax = !!Gn, Gn && h.ajaxTransport(function(e) {
		if(!e.crossDomain || l.cors) {
			var t;
			return {
				send: function(n, r) {
					var i, s = e.xhr(),
						o = ++Kn;
					s.open(e.type, e.url, e.async, e.username, e.password);
					if(e.xhrFields)
						for(i in e.xhrFields) s[i] = e.xhrFields[i];
					e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), !e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
					for(i in n) n[i] !== undefined && s.setRequestHeader(i, n[i] + "");
					s.send(e.hasContent && e.data || null), t = function(n, i) {
						var u, a, f;
						if(t && (i || s.readyState === 4)) {
							delete Qn[o], t = undefined, s.onreadystatechange = h.noop;
							if(i) s.readyState !== 4 && s.abort();
							else {
								f = {}, u = s.status, typeof s.responseText == "string" && (f.text = s.responseText);
								try {
									a = s.statusText
								} catch(l) {
									a = ""
								}!u && e.isLocal && !e.crossDomain ? u = f.text ? 200 : 404 : u === 1223 && (u = 204)
							}
						}
						f && r(u, a, f, s.getAllResponseHeaders())
					}, e.async ? s.readyState === 4 ? setTimeout(t) : s.onreadystatechange = Qn[o] = t : t()
				},
				abort: function() {
					t && t(undefined, !0)
				}
			}
		}
	}), h.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return h.globalEval(e), e
			}
		}
	}), h.ajaxPrefilter("script", function(e) {
		e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), h.ajaxTransport("script", function(e) {
		if(e.crossDomain) {
			var t, n = T.head || h("head")[0] || T.documentElement;
			return {
				send: function(r, i) {
					t = T.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
						if(n || !t.readyState || /loaded|complete/.test(t.readyState)) t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success")
					}, n.insertBefore(t, n.firstChild)
				},
				abort: function() {
					t && t.onload(undefined, !0)
				}
			}
		}
	});
	var er = [],
		tr = /(=)\?(?=&|$)|\?\?/;
	h.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = er.pop() || h.expando + "_" + Sn++;
			return this[e] = !0, e
		}
	}), h.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, s, o, u = t.jsonp !== !1 && (tr.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tr.test(t.data) && "data");
		if(u || t.dataTypes[0] === "jsonp") return i = t.jsonpCallback = h.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(tr, "$1" + i) : t.jsonp !== !1 && (t.url += (xn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return o || h.error(i + " was not called"), o[0]
		}, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
			o = arguments
		}, r.always(function() {
			e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, er.push(i)), o && h.isFunction(s) && s(o[0]), o = s = undefined
		}), "script"
	}), h.parseHTML = function(e, t, n) {
		if(!e || typeof e != "string") return null;
		typeof t == "boolean" && (n = t, t = !1), t = t || T;
		var r = w.exec(e),
			i = !n && [];
		return r ? [t.createElement(r[1])] : (r = h.buildFragment([e], t, i), i && i.length && h(i).remove(), h.merge([], r.childNodes))
	};
	var nr = h.fn.load;
	h.fn.load = function(e, t, n) {
		if(typeof e != "string" && nr) return nr.apply(this, arguments);
		var r, i, s, o = this,
			u = e.indexOf(" ");
		return u >= 0 && (r = h.trim(e.slice(u, e.length)), e = e.slice(0, u)), h.isFunction(t) ? (n = t, t = undefined) : t && typeof t == "object" && (s = "POST"), o.length > 0 && h.ajax({
			url: e,
			type: s,
			dataType: "html",
			data: t
		}).done(function(e) {
			i = arguments, o.html(r ? h("<div>").append(h.parseHTML(e)).find(r) : e)
		}).complete(n && function(e, t) {
			o.each(n, i || [e.responseText, t, e])
		}), this
	}, h.expr.filters.animated = function(e) {
		return h.grep(h.timers, function(t) {
			return e === t.elem
		}).length
	};
	var rr = e.document.documentElement;
	h.offset = {
		setOffset: function(e, t, n) {
			var r, i, s, o, u, a, f, l = h.css(e, "position"),
				c = h(e),
				p = {};
			l === "static" && (e.style.position = "relative"), u = c.offset(), s = h.css(e, "top"), a = h.css(e, "left"), f = (l === "absolute" || l === "fixed") && h.inArray("auto", [s, a]) > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), h.isFunction(t) && (t = t.call(e, n, u)), t.top != null && (p.top = t.top - u.top + o), t.left != null && (p.left = t.left - u.left + i), "using" in t ? t.using.call(e, p) : c.css(p)
		}
	}, h.fn.extend({
		offset: function(e) {
			if(arguments.length) return e === undefined ? this : this.each(function(t) {
				h.offset.setOffset(this, e, t)
			});
			var t, n, r = {
					top: 0,
					left: 0
				},
				i = this[0],
				s = i && i.ownerDocument;
			if(!s) return;
			return t = s.documentElement, h.contains(t, i) ? (typeof i.getBoundingClientRect !== B && (r = i.getBoundingClientRect()), n = ir(s), {
				top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : r
		},
		position: function() {
			if(!this[0]) return;
			var e, t, n = {
					top: 0,
					left: 0
				},
				r = this[0];
			return h.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), h.nodeName(e[0], "html") || (n = e.offset()), n.top += h.css(e[0], "borderTopWidth", !0), n.left += h.css(e[0], "borderLeftWidth", !0)), {
				top: t.top - n.top - h.css(r, "marginTop", !0),
				left: t.left - n.left - h.css(r, "marginLeft", !0)
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || rr;
				while(e && !h.nodeName(e, "html") && h.css(e, "position") === "static") e = e.offsetParent;
				return e || rr
			})
		}
	}), h.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = /Y/.test(t);
		h.fn[e] = function(r) {
			return $(this, function(e, r, i) {
				var s = ir(e);
				if(i === undefined) return s ? t in s ? s[t] : s.document.documentElement[r] : e[r];
				s ? s.scrollTo(n ? h(s).scrollLeft() : i, n ? i : h(s).scrollTop()) : e[r] = i
			}, e, r, arguments.length, null)
		}
	}), h.each(["top", "left"], function(e, t) {
		h.cssHooks[t] = jt(l.pixelPosition, function(e, n) {
			if(n) return n = Ht(e, t), Dt.test(n) ? h(e).position()[t] + "px" : n
		})
	}), h.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		h.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			h.fn[r] = function(r, i) {
				var s = arguments.length && (n || typeof r != "boolean"),
					o = n || (r === !0 || i === !0 ? "margin" : "border");
				return $(this, function(t, n, r) {
					var i;
					return h.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? h.css(t, n, o) : h.style(t, n, r, o)
				}, t, s ? r : undefined, s, null)
			}
		})
	}), h.fn.size = function() {
		return this.length
	}, h.fn.andSelf = h.fn.addBack, typeof define == "function" && (define.amd || define.cmd) && define("jquery", [], function() {
		return h
	});
	var sr = e.jQuery,
		or = e.$;
	return h.noConflict = function(t) {
		return e.$ === h && (e.$ = or), t && e.jQuery === h && (e.jQuery = sr), h
	}, typeof t === B && (e.jQuery = e.$ = h), h
}),
function(e) {
	typeof define == "function" && define.cmd ? define("lib/jquery/1.11.1/jquery-1.11.1", ["require", "jquery"], function(t) {
		e(t("jquery"))
	}) : e(jQuery)
}(function(e) {
	function n(e) {
		return u.raw ? e : encodeURIComponent(e)
	}

	function r(e) {
		return u.raw ? e : decodeURIComponent(e)
	}

	function i(e) {
		return n(u.json ? JSON.stringify(e) : String(e))
	}

	function s(e) {
		e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			return e = decodeURIComponent(e.replace(t, " ")), u.json ? JSON.parse(e) : e
		} catch(n) {}
	}

	function o(t, n) {
		var r = u.raw ? t : s(t);
		return e.isFunction(n) ? n(r) : r
	}
	var t = /\+/g,
		u = e.cookie = function(t, s, a) {
			if(s !== undefined && !e.isFunction(s)) {
				a = e.extend({}, u.defaults, a);
				if(typeof a.expires == "number") {
					var f = a.expires,
						l = a.expires = new Date;
					l.setTime(+l + f * 864e5)
				}
				return document.cookie = [n(t), "=", i(s), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
			}
			var c = t ? undefined : {},
				h = document.cookie ? document.cookie.split("; ") : [];
			for(var p = 0, d = h.length; p < d; p++) {
				var v = h[p].split("="),
					m = r(v.shift()),
					g = v.join("=");
				if(t && t === m) {
					c = o(g, s);
					break
				}!t && (g = o(g)) !== undefined && (c[m] = g)
			}
			return c
		};
	u.defaults = {}, e.removeCookie = function(t, n) {
		return e.cookie(t) === undefined ? !1 : (e.cookie(t, "", e.extend({}, n, {
			expires: -1
		})), !e.cookie(t))
	}
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		swing: function(e, t, n, r, i) {
			return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
		},
		easeInQuad: function(e, t, n, r, i) {
			return r * (t /= i) * t + n
		},
		easeOutQuad: function(e, t, n, r, i) {
			return -r * (t /= i) * (t - 2) + n
		},
		easeInOutQuad: function(e, t, n, r, i) {
			return(t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
		},
		easeInCubic: function(e, t, n, r, i) {
			return r * (t /= i) * t * t + n
		},
		easeOutCubic: function(e, t, n, r, i) {
			return r * ((t = t / i - 1) * t * t + 1) + n
		},
		easeInOutCubic: function(e, t, n, r, i) {
			return(t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
		},
		easeInQuart: function(e, t, n, r, i) {
			return r * (t /= i) * t * t * t + n
		},
		easeOutQuart: function(e, t, n, r, i) {
			return -r * ((t = t / i - 1) * t * t * t - 1) + n
		},
		easeInOutQuart: function(e, t, n, r, i) {
			return(t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
		},
		easeInQuint: function(e, t, n, r, i) {
			return r * (t /= i) * t * t * t * t + n
		},
		easeOutQuint: function(e, t, n, r, i) {
			return r * ((t = t / i - 1) * t * t * t * t + 1) + n
		},
		easeInOutQuint: function(e, t, n, r, i) {
			return(t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
		},
		easeInSine: function(e, t, n, r, i) {
			return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
		},
		easeOutSine: function(e, t, n, r, i) {
			return r * Math.sin(t / i * (Math.PI / 2)) + n
		},
		easeInOutSine: function(e, t, n, r, i) {
			return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
		},
		easeInExpo: function(e, t, n, r, i) {
			return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
		},
		easeOutExpo: function(e, t, n, r, i) {
			return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
		},
		easeInOutExpo: function(e, t, n, r, i) {
			return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
		},
		easeInCirc: function(e, t, n, r, i) {
			return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
		},
		easeOutCirc: function(e, t, n, r, i) {
			return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
		},
		easeInOutCirc: function(e, t, n, r, i) {
			return(t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
		},
		easeInElastic: function(e, t, n, r, i) {
			var s = 1.70158,
				o = 0,
				u = r;
			if(t == 0) return n;
			if((t /= i) == 1) return n + r;
			o || (o = i * .3);
			if(u < Math.abs(r)) {
				u = r;
				var s = o / 4
			} else var s = o / (2 * Math.PI) * Math.asin(r / u);
			return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
		},
		easeOutElastic: function(e, t, n, r, i) {
			var s = 1.70158,
				o = 0,
				u = r;
			if(t == 0) return n;
			if((t /= i) == 1) return n + r;
			o || (o = i * .3);
			if(u < Math.abs(r)) {
				u = r;
				var s = o / 4
			} else var s = o / (2 * Math.PI) * Math.asin(r / u);
			return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
		},
		easeInOutElastic: function(e, t, n, r, i) {
			var s = 1.70158,
				o = 0,
				u = r;
			if(t == 0) return n;
			if((t /= i / 2) == 2) return n + r;
			o || (o = i * .3 * 1.5);
			if(u < Math.abs(r)) {
				u = r;
				var s = o / 4
			} else var s = o / (2 * Math.PI) * Math.asin(r / u);
			return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
		},
		easeInBack: function(e, t, n, r, i, s) {
			return s == undefined && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n
		},
		easeOutBack: function(e, t, n, r, i, s) {
			return s == undefined && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
		},
		easeInOutBack: function(e, t, n, r, i, s) {
			return s == undefined && (s = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
		},
		easeInBounce: function(e, t, n, r, i) {
			return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
		},
		easeOutBounce: function(e, t, n, r, i) {
			return(t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
		},
		easeInOutBounce: function(e, t, n, r, i) {
			return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
		}
	}), define("lib/jquery/lazyload/lazyload", ["lib/jquery/1.11.1/jquery-1.11.1"], function(e) {
		(function(e, t, n, r) {
			var i = e(t);
			e.fn.lazyload = function(s) {
				function f() {
					var t = 0;
					o.each(function() {
						var n = e(this);
						if(a.skip_invisible && !n.is(":visible")) return;
						if(!e.abovethetop(this, a) && !e.leftofbegin(this, a))
							if(!e.belowthefold(this, a) && !e.rightoffold(this, a)) n.trigger("appear"), t = 0;
							else if(++t > a.failure_limit) return !1
					})
				}
				var o = this,
					u, a = {
						threshold: 0,
						failure_limit: 0,
						event: "scroll",
						effect: "show",
						container: t,
						data_attribute: "original",
						skip_invisible: !0,
						appear: null,
						load: null,
						placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
					};
				return s && (r !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), r !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), e.extend(a, s)), u = a.container === r || a.container === t ? i : e(a.container), 0 === a.event.indexOf("scroll") && u.bind(a.event, function() {
					return f()
				}), this.each(function() {
					var t = this,
						n = e(t);
					t.loaded = !1, (n.attr("src") === r || n.attr("src") === !1) && n.is("img") && n.attr("src", a.placeholder), n.one("appear", function() {
						if(!this.loaded) {
							if(a.appear) {
								var r = o.length;
								a.appear.call(t, r, a)
							}
							e("<img />").bind("load", function() {
								var r = n.attr("data-" + a.data_attribute);
								n.hide(), n.is("img") ? n.attr("src", r) : n.css("background-image", "url('" + r + "')"), n[a.effect](a.effect_speed), t.loaded = !0;
								var i = e.grep(o, function(e) {
									return !e.loaded
								});
								o = e(i);
								if(a.load) {
									var s = o.length;
									a.load.call(t, s, a)
								}
							}).attr("src", n.attr("data-" + a.data_attribute))
						}
					}), 0 !== a.event.indexOf("scroll") && n.bind(a.event, function() {
						t.loaded || n.trigger("appear")
					})
				}), i.bind("resize", function() {
					f()
				}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function(t) {
					t.originalEvent && t.originalEvent.persisted && o.each(function() {
						e(this).trigger("appear")
					})
				}), e(n).ready(function() {
					f()
				}), this
			}, e.belowthefold = function(n, s) {
				var o;
				return s.container === r || s.container === t ? o = (t.innerHeight ? t.innerHeight : i.height()) + i.scrollTop() : o = e(s.container).offset().top + e(s.container).height(), o <= e(n).offset().top - s.threshold
			}, e.rightoffold = function(n, s) {
				var o;
				return s.container === r || s.container === t ? o = (t.innerWidth ? t.innerWidth : i.width()) + i.scrollLeft() : o = e(s.container).offset().left + e(s.container).width(), o <= e(n).offset().left - s.threshold
			}, e.abovethetop = function(n, s) {
				var o;
				return s.container === r || s.container === t ? o = i.scrollTop() : o = e(s.container).offset().top, o >= e(n).offset().top + s.threshold + e(n).height()
			}, e.leftofbegin = function(n, s) {
				var o;
				return s.container === r || s.container === t ? o = i.scrollLeft() : o = e(s.container).offset().left, o >= e(n).offset().left + s.threshold + e(n).width()
			}, e.inviewport = function(t, n) {
				return !e.rightoffold(t, n) && !e.leftofbegin(t, n) && !e.belowthefold(t, n) && !e.abovethetop(t, n)
			}, e.extend(e.expr[":"], {
				"below-the-fold": function(t) {
					return e.belowthefold(t, {
						threshold: 0
					})
				},
				"above-the-top": function(t) {
					return !e.belowthefold(t, {
						threshold: 0
					})
				},
				"right-of-screen": function(t) {
					return e.rightoffold(t, {
						threshold: 0
					})
				},
				"left-of-screen": function(t) {
					return !e.rightoffold(t, {
						threshold: 0
					})
				},
				"in-viewport": function(t) {
					return e.inviewport(t, {
						threshold: 0
					})
				},
				"above-the-fold": function(t) {
					return !e.belowthefold(t, {
						threshold: 0
					})
				},
				"right-of-fold": function(t) {
					return e.rightoffold(t, {
						threshold: 0
					})
				},
				"left-of-fold": function(t) {
					return !e.rightoffold(t, {
						threshold: 0
					})
				}
			})
		})(jQuery, window, document)
	}), define("config/url", [], function() {
		var e = this;
		return function() {
			var e = typeof front_domain != "undefined" ? front_domain : "",
				t = typeof wwwve_domain != "undefined" ? wwwve_domain : "",
				n = typeof www_domain != "undefined" ? www_domain : "",
				r = typeof member_domain != "undefined" ? member_domain : "",
				i = typeof source_domain != "undefined" ? source_domain : "",
				s = typeof www_domain_sub != "undefined" ? www_domain_sub : "",
				o = typeof static_domain != "undefined" ? static_domain : "",
				u = "https://i." + i,
				a = "https://passport." + i,
				f = typeof search_domain != "undefined" ? search_domain : "",
				l = window.location.host.match(/^list/) !== null ? "http://list." + i : n,
				c = "http://campaign." + i,
				h = "http://voucher." + i,
				p = "http://ac." + i,
				d = 20160707123456;
			return {
				sFrontDomain: e,
				sWwwDomain: n,
				sMemberDomain: r,
				sSourceDomain: i,
				sWwwwDomainSub: s,
				sStaticDomain: o,
				sMemeberI: u,
				sMemeberPassport: a,
				sWwwveDomain: t,
				sSearchDomain: f,
				sListDomain: l,
				sCampaignDomain: c,
				sVoucherDomain: h,
				sListStocks: p,
				sTimeStamp: d
			}
		}.call(e)
	}), define("api/common", ["config/url"], function(e) {
		return {
			getSearchAutocomplete: {
				url: "//www." + e.sSourceDomain + "/ajax/autocomplete?term=",
				isOnlyData: 1,
				post: {
					apiVersion: "t-1.0",
					body: "??"
				},
				body: {},
				method: "get"
			},
			getLoginStatus: {
				url: "https://passport." + e.sSourceDomain + "/login/checkin",
				isOnlyData: 1,
				post: {
					apiVersion: "t-1.0",
					body: "??"
				},
				body: {},
				method: "get"
			},
			getDistList: {
				url: "//www." + e.sSourceDomain + "/?c=fnget&a=getProvinces",
				isOnlyData: 1,
				post: {
					apiVersion: "t-1.0",
					body: "??"
				},
				body: {},
				method: "get"
			},
			getLocation: {
				url: "//www." + e.sSourceDomain + "/ajax_common/get_location_jp",
				isOnlyData: 1,
				post: {
					apiVersion: "t-1.0",
					body: "??"
				},
				body: {},
				method: "get"
			},
			checkPageData: {
				url: e.sFrontDomain + "/ajax_common/check_page_data",
				isOnlyData: 1,
				post: {
					apiVersion: "t-1.0",
					body: "??"
				},
				body: {},
				method: "post"
			},
			getSecondThirdMenuItem: {
				url: e.sFrontDomain + "/?c=indexv7&a=get_second_third_tmenuitem_by_pgseq",
				isOnlyData: 1,
				post: {
					apiVersion: "t-1.0",
					body: "??"
				},
				body: {},
				method: "get"
			},
			getDefaultArea: {
				url: "//www." + e.sSourceDomain + "/ajax_common/get_default_area",
				isOnlyData: 1,
				post: {
					apiVersion: "t-1.0",
					body: "??"
				},
				body: {},
				method: "get"
			},
			getUserInfos: {
				url: "//www." + e.sSourceDomain + "/?c=header&a=service",
				isOnlyData: 1,
				post: {
					apiVersion: "t-1.0",
					body: "??"
				},
				body: {},
				method: "get"
			},
			getMessage: {
				url: "//www." + e.sSourceDomain,
				isOnlyData: 0,
				post: {
					apiVersion: "t-1.0",
					body: "??"
				},
				body: {},
				method: "get"
			},
			getSecretOrder: {
				url: "//www." + e.sSourceDomain + "/?c=header&a=service&s=pmadminservice&f=get_link&p=",
				body: {},
				method: "get"
			},
			getClaimGift: {
				url: "//www." + e.sSourceDomain + "/?c=fndata&a=queryPackageInfo",
				isOnlyData: 1,
				post: {
					apiVersion: "t-1.0",
					body: "??"
				},
				body: {},
				method: "get"
			}
		}
	}), define("config/vars", [], function() {
		var e = this;
		return function() {
			var e = current_mode === "edit" ? !0 : !1,
				t = current_mode === "preview" ? !0 : !1,
				n = navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.indexOf("MSIE 7.0") != -1,
				r = typeof default_dist == "undefined" ? "CPG1_CS000016" : default_dist,
				i = typeof default_dist_area == "undefined" ? "CS000016_310100_310113_3101130001" : default_dist_area,
				s = typeof cate == "undefined" ? "" : cate,
				o = typeof current_siseq == "undefined" ? "" : current_siseq,
				u = typeof preview_city == "undefined" ? "" : preview_city,
				a = "C_dist",
				f = "ITEM_HISTORY_LIST_FOUR",
				l = "ITEM_HISTORY_LIST",
				c = "C_dist_area",
				h = typeof page_config == "undefined" ? {} : page_config,
				p = typeof page_main_config == "undefined" ? {} : page_main_config;
			return {
				bIsEdit: e,
				bIsPreview: t,
				bIsIe7: n,
				sDefalutDist: r,
				sDefalutDistArea: i,
				sCate: s,
				sSiseq: o,
				sDefalutCity: u,
				sItemHistoryListFour: f,
				sItemHistoryList: l,
				sCdist: a,
				sCdistArea: c,
				oPageConfig: h,
				oPageMainConfig: p
			}
		}.call(e)
	}), define("config/constant", [], function() {
		return {
			index: {
				guide: {
					0: "新人引导首页",
					1: "前往购物",
					2: "继续了解",
					3: "卡券充值"
				}
			}
		}
	}), define("lib/log", [], function() {
		function e() {
			if(window._debug_ && typeof console == "object" && console.debug)
				for(var e = 0; e < arguments.length; e++) console.debug(arguments[e])
		}

		function t() {
			if(window._debug_ && typeof console == "object" && console.log)
				for(var e = 0; e < arguments.length; e++) console.log(arguments[e])
		}
		return function() {
			if(location.hash == "#debug") {
				try {
					localStorage.setItem("_debug_", "1")
				} catch(n) {}
				window._debug_ = !0
			} else if(location.hash == "#nodebug") {
				try {
					localStorage.removeItem("_debug_")
				} catch(n) {}
				window._debug_ = !1
			}
			try {
				localStorage.getItem("_debug_") == "1" && (console.time(1), window._debug_ = !0, console.timeEnd(1))
			} catch(n) {}
			return {
				debug: e,
				log: t,
				info: t
			}
		}()
	}),
	function() {
		function resolveDefs(e, t, n) {
			return(typeof t == "string" ? t : t.toString()).replace(e.define || skip, function(t, r, i, s) {
				return r.indexOf("def.") === 0 && (r = r.substring(4)), r in n || (i === ":" ? (e.defineParams && s.replace(e.defineParams, function(e, t, i) {
					n[r] = {
						arg: t,
						text: i
					}
				}), r in n || (n[r] = s)) : (new Function("def", "def['" + r + "']=" + s))(n)), ""
			}).replace(e.use || skip, function(t, r) {
				e.useParams && (r = r.replace(e.useParams, function(e, t, r, i) {
					if(n[r] && n[r].arg && i) {
						var s = (r + ":" + i).replace(/'|\\/g, "_");
						return n.__exp = n.__exp || {}, n.__exp[s] = n[r].text.replace(new RegExp("(^|[^\\w$])" + n[r].arg + "([^\\w$])", "g"), "$1" + i + "$2"), t + "def.__exp['" + s + "']"
					}
				}));
				var i = (new Function("def", "return " + r))(n);
				return i ? resolveDefs(e, i, n) : i
			})
		}

		function unescape(e) {
			return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
		}
		var doT = {
				version: "1.0.3",
				templateSettings: {
					evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
					interpolate: /\{\{=([\s\S]+?)\}\}/g,
					encode: /\{\{!([\s\S]+?)\}\}/g,
					use: /\{\{#([\s\S]+?)\}\}/g,
					useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
					define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
					defineParams: /^\s*([\w$]+):([\s\S]+)/,
					conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
					iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
					varname: "it",
					strip: !0,
					append: !0,
					selfcontained: !1,
					doNotSkipEncoded: !1
				},
				template: undefined,
				compile: undefined
			},
			_globals;
		doT.encodeHTMLSource = function(e) {
			var t = {
					"&": "&#38;",
					"<": "&#60;",
					">": "&#62;",
					'"': "&#34;",
					"'": "&#39;",
					"/": "&#47;"
				},
				n = e ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
			return function(e) {
				return e ? e.toString().replace(n, function(e) {
					return t[e] || e
				}) : ""
			}
		}, _globals = function() {
			return this || (0, eval)("this")
		}(), typeof module != "undefined" && module.exports ? module.exports = doT : typeof define == "function" && define.amd ? define("lib/doT", [], function() {
			return doT
		}) : _globals.doT = doT;
		var startend = {
				append: {
					start: "'+(",
					end: ")+'",
					startencode: "'+encodeHTML("
				},
				split: {
					start: "';out+=(",
					end: ");out+='",
					startencode: "';out+=encodeHTML("
				}
			},
			skip = /$^/;
		doT.template = function(e, t, n) {
			t = t || doT.templateSettings;
			var r = t.append ? startend.append : startend.split,
				i, s = 0,
				o, u = t.use || t.define ? resolveDefs(t, e, n || {}) : e;
			u = ("var out='" + (t.strip ? u.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : u).replace(/'|\\/g, "\\$&").replace(t.interpolate || skip, function(e, t) {
				return r.start + unescape(t) + r.end
			}).replace(t.encode || skip, function(e, t) {
				return i = !0, r.startencode + unescape(t) + r.end
			}).replace(t.conditional || skip, function(e, t, n) {
				return t ? n ? "';}else if(" + unescape(n) + "){out+='" : "';}else{out+='" : n ? "';if(" + unescape(n) + "){out+='" : "';}out+='"
			}).replace(t.iterate || skip, function(e, t, n, r) {
				return t ? (s += 1, o = r || "i" + s, t = unescape(t), "';var arr" + s + "=" + t + ";if(arr" + s + "){var " + n + "," + o + "=-1,l" + s + "=arr" + s + ".length-1;while(" + o + "<l" + s + "){" + n + "=arr" + s + "[" + o + "+=1];out+='") : "';} } out+='"
			}).replace(t.evaluate || skip, function(e, t) {
				return "';" + unescape(t) + "out+='"
			}) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), i && (!t.selfcontained && _globals && !_globals._encodeHTML && (_globals._encodeHTML = doT.encodeHTMLSource(t.doNotSkipEncoded)), u = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + doT.encodeHTMLSource.toString() + "(" + (t.doNotSkipEncoded || "") + "));" + u);
			try {
				return new Function(t.varname, u)
			} catch(a) {
				throw typeof console != "undefined" && console.log("Could not create a template function: " + u), a
			}
		}, doT.compile = function(e, t) {
			return doT.template(e, null, t)
		}
	}(),
	function() {
		function e(t, r) {
			function s(e) {
				if(s[e] !== g) return s[e];
				var t;
				if("bug-string-char-index" == e) t = "a" != "a" [0];
				else if("json" == e) t = s("json-stringify") && s("json-parse");
				else {
					var n;
					if("json-stringify" == e) {
						t = r.stringify;
						var i = "function" == typeof t && y;
						if(i) {
							(n = function() {
								return 1
							}).toJSON = n;
							try {
								i = "0" === t(0) && "0" === t(new o) && '""' == t(new u) && t(d) === g && t(g) === g && t() === g && "1" === t(n) && "[1]" == t([n]) && "[null]" == t([g]) && "null" == t(null) && "[null,null,null]" == t([g, d, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == t({
									a: [n, !0, !1, null, "\0\b\n\f\r	"]
								}) && "1" === t(null, n) && "[\n 1,\n 2\n]" == t([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == t(new f(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == t(new f(864e13)) && '"-000001-01-01T00:00:00.000Z"' == t(new f(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == t(new f(-1))
							} catch(a) {
								i = !1
							}
						}
						t = i
					}
					if("json-parse" == e) {
						t = r.parse;
						if("function" == typeof t) try {
							if(0 === t("0") && !t(!1)) {
								n = t('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
								var l = 5 == n.a.length && 1 === n.a[0];
								if(l) {
									try {
										l = !t('"	"')
									} catch(c) {}
									if(l) try {
										l = 1 !== t("01")
									} catch(h) {}
									if(l) try {
										l = 1 !== t("1.")
									} catch(p) {}
								}
							}
						} catch(v) {
							l = !1
						}
						t = l
					}
				}
				return s[e] = !!t
			}
			t || (t = i.Object()), r || (r = i.Object());
			var o = t.Number || i.Number,
				u = t.String || i.String,
				a = t.Object || i.Object,
				f = t.Date || i.Date,
				l = t.SyntaxError || i.SyntaxError,
				c = t.TypeError || i.TypeError,
				h = t.Math || i.Math,
				p = t.JSON || i.JSON;
			"object" == typeof p && p && (r.stringify = p.stringify, r.parse = p.parse);
			var a = a.prototype,
				d = a.toString,
				v, m, g, y = new f(-0xc782b5b800cec);
			try {
				y = -109252 == y.getUTCFullYear() && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
			} catch(b) {}
			if(!s("json")) {
				var w = s("bug-string-char-index");
				if(!y) var E = h.floor,
					S = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
					x = function(e, t) {
						return S[t] + 365 * (e - 1970) + E((e - 1969 + (t = +(1 < t))) / 4) - E((e - 1901 + t) / 100) + E((e - 1601 + t) / 400)
					};
				(v = a.hasOwnProperty) || (v = function(e) {
					var t = {},
						n;
					return(t.__proto__ = null, t.__proto__ = {
						toString: 1
					}, t).toString != d ? v = function(e) {
						var t = this.__proto__;
						return e = e in (this.__proto__ = null, this), this.__proto__ = t, e
					} : (n = t.constructor, v = function(e) {
						var t = (this.constructor || n).prototype;
						return e in this && !(e in t && this[e] === t[e])
					}), t = null, v.call(this, e)
				}), m = function(e, t) {
					var r = 0,
						i, s, o;
					(i = function() {
						this.valueOf = 0
					}).prototype.valueOf = 0, s = new i;
					for(o in s) v.call(s, o) && r++;
					return i = s = null, r ? m = 2 == r ? function(e, t) {
						var n = {},
							r = "[object Function]" == d.call(e),
							i;
						for(i in e) r && "prototype" == i || v.call(n, i) || !(n[i] = 1) || !v.call(e, i) || t(i)
					} : function(e, t) {
						var n = "[object Function]" == d.call(e),
							r, i;
						for(r in e) n && "prototype" == r || !v.call(e, r) || (i = "constructor" === r) || t(r);
						(i || v.call(e, r = "constructor")) && t(r)
					} : (s = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), m = function(e, t) {
						var r = "[object Function]" == d.call(e),
							i, o = !r && "function" != typeof e.constructor && n[typeof e.hasOwnProperty] && e.hasOwnProperty || v;
						for(i in e) r && "prototype" == i || !o.call(e, i) || t(i);
						for(r = s.length; i = s[--r]; o.call(e, i) && t(i));
					}), m(e, t)
				};
				if(!s("json-stringify")) {
					var T = {
							92: "\\\\",
							34: '\\"',
							8: "\\b",
							12: "\\f",
							10: "\\n",
							13: "\\r",
							9: "\\t"
						},
						C = function(e, t) {
							return("000000" + (t || 0)).slice(-e)
						},
						L = function(e) {
							for(var t = '"', n = 0, r = e.length, i = !w || 10 < r, s = i && (w ? e.split("") : e); n < r; n++) {
								var o = e.charCodeAt(n);
								switch(o) {
									case 8:
									case 9:
									case 10:
									case 12:
									case 13:
									case 34:
									case 92:
										t += T[o];
										break;
									default:
										if(32 > o) {
											t += "\\u00" + C(2, o.toString(16));
											break
										}
										t += i ? s[n] : e.charAt(n)
								}
							}
							return t + '"'
						},
						A = function(e, t, n, r, i, s, o) {
							var u, a, f, l, h, p, y, b, w;
							try {
								u = t[e]
							} catch(S) {}
							if("object" == typeof u && u)
								if(a = d.call(u), "[object Date]" != a || v.call(u, "toJSON")) "function" == typeof u.toJSON && ("[object Number]" != a && "[object String]" != a && "[object Array]" != a || v.call(u, "toJSON")) && (u = u.toJSON(e));
								else if(u > -1 / 0 && u < 1 / 0) {
								if(x) {
									l = E(u / 864e5);
									for(a = E(l / 365.2425) + 1970 - 1; x(a + 1, 0) <= l; a++);
									for(f = E((l - x(a, 0)) / 30.42); x(a, f + 1) <= l; f++);
									l = 1 + l - x(a, f), h = (u % 864e5 + 864e5) % 864e5, p = E(h / 36e5) % 24, y = E(h / 6e4) % 60, b = E(h / 1e3) % 60, h %= 1e3
								} else a = u.getUTCFullYear(), f = u.getUTCMonth(), l = u.getUTCDate(), p = u.getUTCHours(), y = u.getUTCMinutes(), b = u.getUTCSeconds(), h = u.getUTCMilliseconds();
								u = (0 >= a || 1e4 <= a ? (0 > a ? "-" : "+") + C(6, 0 > a ? -a : a) : C(4, a)) + "-" + C(2, f + 1) + "-" + C(2, l) + "T" + C(2, p) + ":" + C(2, y) + ":" + C(2, b) + "." + C(3, h) + "Z"
							} else u = null;
							n && (u = n.call(t, e, u));
							if(null === u) return "null";
							a = d.call(u);
							if("[object Boolean]" == a) return "" + u;
							if("[object Number]" == a) return u > -1 / 0 && u < 1 / 0 ? "" + u : "null";
							if("[object String]" == a) return L("" + u);
							if("object" == typeof u) {
								for(e = o.length; e--;)
									if(o[e] === u) throw c();
								o.push(u), w = [], t = s, s += i;
								if("[object Array]" == a) {
									f = 0;
									for(e = u.length; f < e; f++) a = A(f, u, n, r, i, s, o), w.push(a === g ? "null" : a);
									e = w.length ? i ? "[\n" + s + w.join(",\n" + s) + "\n" + t + "]" : "[" + w.join(",") + "]" : "[]"
								} else m(r || u, function(e) {
									var t = A(e, u, n, r, i, s, o);
									t !== g && w.push(L(e) + ":" + (i ? " " : "") + t)
								}), e = w.length ? i ? "{\n" + s + w.join(",\n" + s) + "\n" + t + "}" : "{" + w.join(",") + "}" : "{}";
								return o.pop(), e
							}
						};
					r.stringify = function(e, t, r) {
						var i, s, o, u;
						if(n[typeof t] && t)
							if("[object Function]" == (u = d.call(t))) s = t;
							else if("[object Array]" == u) {
							o = {};
							for(var a = 0, f = t.length, l; a < f; l = t[a++], (u = d.call(l), "[object String]" == u || "[object Number]" == u) && (o[l] = 1));
						}
						if(r)
							if("[object Number]" == (u = d.call(r))) {
								if(0 < (r -= r % 1))
									for(i = "", 10 < r && (r = 10); i.length < r; i += " ");
							} else "[object String]" == u && (i = 10 >= r.length ? r : r.slice(0, 10));
						return A("", (l = {}, l[""] = e, l), s, o, i, "", [])
					}
				}
				if(!s("json-parse")) {
					var O = u.fromCharCode,
						M = {
							92: "\\",
							34: '"',
							47: "/",
							98: "\b",
							116: "	",
							110: "\n",
							102: "\f",
							114: "\r"
						},
						_, D, P = function() {
							throw _ = D = null, l()
						},
						H = function() {
							for(var e = D, t = e.length, n, r, i, s, o; _ < t;) switch(o = e.charCodeAt(_), o) {
								case 9:
								case 10:
								case 13:
								case 32:
									_++;
									break;
								case 123:
								case 125:
								case 91:
								case 93:
								case 58:
								case 44:
									return n = w ? e.charAt(_) : e[_], _++, n;
								case 34:
									n = "@";
									for(_++; _ < t;)
										if(o = e.charCodeAt(_), 32 > o) P();
										else if(92 == o) switch(o = e.charCodeAt(++_), o) {
										case 92:
										case 34:
										case 47:
										case 98:
										case 116:
										case 110:
										case 102:
										case 114:
											n += M[o], _++;
											break;
										case 117:
											r = ++_;
											for(i = _ + 4; _ < i; _++) o = e.charCodeAt(_), 48 <= o && 57 >= o || 97 <= o && 102 >= o || 65 <= o && 70 >= o || P();
											n += O("0x" + e.slice(r, _));
											break;
										default:
											P()
									} else {
										if(34 == o) break;
										o = e.charCodeAt(_);
										for(r = _; 32 <= o && 92 != o && 34 != o;) o = e.charCodeAt(++_);
										n += e.slice(r, _)
									}
									if(34 == e.charCodeAt(_)) return _++, n;
									P();
								default:
									r = _, 45 == o && (s = !0, o = e.charCodeAt(++_));
									if(48 <= o && 57 >= o) {
										for(48 == o && (o = e.charCodeAt(_ + 1), 48 <= o && 57 >= o) && P(); _ < t && (o = e.charCodeAt(_), 48 <= o && 57 >= o); _++);
										if(46 == e.charCodeAt(_)) {
											for(i = ++_; i < t && (o = e.charCodeAt(i), 48 <= o && 57 >= o); i++);
											i == _ && P(), _ = i
										}
										o = e.charCodeAt(_);
										if(101 == o || 69 == o) {
											o = e.charCodeAt(++_), 43 != o && 45 != o || _++;
											for(i = _; i < t && (o = e.charCodeAt(i), 48 <= o && 57 >= o); i++);
											i == _ && P(), _ = i
										}
										return +e.slice(r, _)
									}
									s && P();
									if("true" == e.slice(_, _ + 4)) return _ += 4, !0;
									if("false" == e.slice(_, _ + 5)) return _ += 5, !1;
									if("null" == e.slice(_, _ + 4)) return _ += 4, null;
									P()
							}
							return "$"
						},
						B = function(e) {
							var t, n;
							"$" == e && P();
							if("string" == typeof e) {
								if("@" == (w ? e.charAt(0) : e[0])) return e.slice(1);
								if("[" == e) {
									for(t = [];; n || (n = !0)) {
										e = H();
										if("]" == e) break;
										n && ("," == e ? (e = H(), "]" == e && P()) : P()), "," == e && P(), t.push(B(e))
									}
									return t
								}
								if("{" == e) {
									for(t = {};; n || (n = !0)) {
										e = H();
										if("}" == e) break;
										n && ("," == e ? (e = H(), "}" == e && P()) : P()), "," != e && "string" == typeof e && "@" == (w ? e.charAt(0) : e[0]) && ":" == H() || P(), t[e.slice(1)] = B(H())
									}
									return t
								}
								P()
							}
							return e
						},
						j = function(e, t, n) {
							n = I(e, t, n), n === g ? delete e[t] : e[t] = n
						},
						I = function(e, t, n) {
							var r = e[t],
								i;
							if("object" == typeof r && r)
								if("[object Array]" == d.call(r))
									for(i = r.length; i--;) j(r, i, n);
								else m(r, function(e) {
									j(r, e, n)
								});
							return n.call(e, t, r)
						};
					r.parse = function(e, t) {
						var n, r;
						return _ = 0, D = "" + e, n = B(H()), "$" != H() && P(), _ = D = null, t && "[object Function]" == d.call(t) ? I((r = {}, r[""] = n, r), "", t) : n
					}
				}
			}
			return r.runInContext = e, r
		}
		var t = typeof define == "function" && define.amd,
			n = {
				"function": !0,
				object: !0
			},
			r = n[typeof exports] && exports && !exports.nodeType && exports,
			i = n[typeof window] && window || this,
			s = r && n[typeof module] && module && !module.nodeType && "object" == typeof global && global;
		!s || s.global !== s && s.window !== s && s.self !== s || (i = s);
		if(r && !t) e(i, r);
		else {
			var o = i.JSON,
				u = i.JSON3,
				a = !1,
				f = e(i, i.JSON3 = {
					noConflict: function() {
						return a || (a = !0, i.JSON = o, i.JSON3 = u, o = u = null), f
					}
				});
			i.JSON = {
				parse: f.parse,
				stringify: f.stringify
			}
		}
		t && define("lib/json/json3.min", [], function() {
			return f
		})
	}.call(this), define("widget/slide", ["lib/jquery/1.11.1/jquery-1.11.1"], function(e) {
		(function(e) {
			e.fn.fn_slide = function(t) {
				var n = e.extend({}, e.fn.fn_slide.defaults, t);
				return this.each(function() {
					function d() {
						r.type === "fadeIn" ? (arguments.length ? l-- : l++, l === -1 ? l = a - 1 : l === a && (l = 0), u.children("li").eq(l).addClass("z-select").css("zIndex", 1).siblings().removeClass("z-select").css("zIndex", 0), u.children("li").eq(l).stop(!0).animate({
							opacity: 1
						}, {
							duration: r.duration,
							complete: function() {
								u.children("li").eq(l).siblings().css({
									opacity: 0
								})
							}
						}), t.find("." + o.num_li).eq(l).addClass(i).siblings().removeClass(i)) : r.type === "move" ? arguments.length ? l === 0 ? (l--, u.children("li:last").css({
							position: "relative",
							left: -a * h
						}), u.stop(!0).animate({
							marginLeft: -l * h
						}, {
							duration: r.duration,
							complete: function() {
								u.children("li:last").attr("style", "width:" + h + "px"), u.css("marginLeft", -h * (a - 1))
							}
						}), t.find("." + o.num_li).eq(a - 1).addClass(i).siblings().removeClass(i), l = a - 1) : (l--, u.stop(!0).animate({
							marginLeft: -h * l
						}, r.duration), t.find("." + o.num_li).eq(l).addClass(i).siblings().removeClass(i)) : l === a - 1 ? (l++, u.children("li:first").css({
							position: "relative",
							left: l * h
						}), u.stop(!0).animate({
							marginLeft: -h * l
						}, {
							duration: r.duration,
							complete: function() {
								u.children("li:first").attr("style", "width:" + h + "px"), u.css("marginLeft", 0)
							}
						}), t.find("." + o.num_li).eq(0).addClass(i).siblings().removeClass(i), l = 0) : (l++, u.stop(!0).animate({
							marginLeft: -h * l
						}, r.duration), t.find("." + o.num_li).eq(l).addClass(i).siblings().removeClass(i)) : r.type === "up" && a > 2 && (arguments.length ? l === 0 ? (l--, u.children("li:last").css({
							position: "relative",
							top: -a * c
						}), u.stop(!0).animate({
							marginTop: -l * c
						}, {
							duration: r.duration,
							complete: function() {
								u.children("li:last").attr("style", "width:" + h + "px"), u.css("marginTop", -c * (a - 1))
							}
						}), t.find("." + o.num_li).eq(a - 1).addClass(i).siblings().removeClass(i), l = a - 1) : (l--, u.stop(!0).animate({
							marginTop: -c * l
						}, r.duration), t.find("." + o.num_li).eq(l).addClass(i).siblings().removeClass(i)) : l === a - 2 ? (l++, u.children("li:first").css({
							position: "relative",
							top: a * c
						}), u.children("li").eq(1).css({
							position: "relative",
							top: a * c
						}), u.stop(!0).animate({
							marginTop: -c * l
						}, r.duration), t.find("." + o.num_li).eq(0).addClass(i).siblings().removeClass(i)) : l === a - 1 ? (l++, u.stop(!0).animate({
							marginTop: -c * a
						}, {
							duration: r.duration,
							complete: function() {
								u.children("li:first").attr("style", "width:" + h + "px"), u.children("li").eq(1).attr("style", "width:" + h + "px"), u.css("marginTop", 0)
							}
						}), t.find("." + o.num_li).eq(0).addClass(i).siblings().removeClass(i), l = 0) : (l++, u.stop(!0).animate({
							marginTop: -c * l
						}, r.duration), t.find("." + o.num_li).eq(l).addClass(i).siblings().removeClass(i)))
					}

					function v() {
						var e = null;
						for(var t = 0, n = a; t < n; t++) e = o.num_li + (t === 0 ? " " + i + "" : ""), f += "<li class='" + e + "'>" + (r.has_num ? t + 1 : "") + "</li>";
						return f
					}

					function m() {
						t.append('<div class="s-pg ' + o.page_box + '"><a href="javascript:;" class="s-prev ' + o.prev_btn + '"><</a><a href="javascript:;" class="s-next ' + o.next_btn + '">></a></div>'), r.hide_page_btn && e("." + o.page_box).hide(), t.on("click", "." + o.prev_btn, g(function() {
							clearInterval(s), d("prev")
						}, p.throttle_t)), t.on("click", "." + o.next_btn, g(function() {
							clearInterval(s), d()
						}, p.throttle_t))
					}

					function g(e, t) {
						var n = !1;
						return function() {
							if(n) return;
							n = !0, e.apply(this, arguments), setTimeout(function() {
								n = !1
							}, t)
						}
					}
					var t = e(this),
						r = e.meta ? e.extend({}, n, t.data()) : n,
						i = n.active || "z-select",
						s = null,
						o = {
							main: "slider-main",
							num: "slider-nav",
							num_li: "slider-item",
							next_btn: "slider-next",
							prev_btn: "slider-prev",
							page_box: "J_page_box"
						},
						u = t.children("." + o.main),
						a = u.children("li").length,
						f = "",
						l = 0,
						c = u.children("li").height(),
						h = t.width();
					u.width(h * a);
					var p = {
						is_flip: r.flip,
						is_fade: r.type === "fadeIn",
						is_move: r.type === "move",
						is_up: r.type === "up",
						throttle_t: 200,
						init: function() {
							r.has_ctrl && t.append('<ul class="s-ctr ' + o.num + '">' + v() + "</ul>"), a <= 1 && t.find("." + o.num).hide(), p.is_flip && m(), p.is_fade ? (u.children("li:first").addClass("z-select").css({
								position: "absolute",
								zIndex: 1,
								opacity: 1
							}).siblings().removeClass("z-select").css({
								position: "absolute",
								zIndex: 0,
								opacity: 0
							}), t.on("mouseenter", "." + o.num_li, function() {
								var t = e(this);
								clearTimeout(s), s = setTimeout(function() {
									l = t.index(), u.children("li").eq(l).addClass("z-select").css("zIndex", 1).siblings().removeClass("z-select").css("zIndex", 0), u.children("li").eq(l).stop(!0).animate({
										opacity: 1
									}, {
										duration: r.duration,
										complete: function() {
											u.children("li").eq(l).siblings().css({
												opacity: 0
											})
										}
									}), t.addClass(i).siblings().removeClass(i)
								}, p.throttle_t)
							}).on("mouseleave", "." + o.num_li, function() {
								clearTimeout(s)
							})) : p.is_move ? t.on("mouseenter", "." + o.num_li, function() {
								var t = e(this);
								clearTimeout(s), s = setTimeout(function() {
									l = t.index(), u.stop(!0).animate({
										marginLeft: -(h * l)
									}, r.duration), t.addClass(i).siblings().removeClass(i)
								}, p.throttle_t)
							}).on("mouseleave", "." + o.num_li, function() {
								clearTimeout(s)
							}) : p.is_up && (u.width(h), u.height(c * a)), r.hide_page_btn && t.on({
								mouseenter: function() {
									e(this).find("." + o.page_box).is(":hidden") && e(this).find("." + o.main + " >li").length > 1 && e(this).find("." + o.page_box).show()
								},
								mouseleave: function() {
									e(this).find("." + o.page_box).hide()
								}
							}), p.timeFuc()
						},
						timeFuc: function() {
							r.auto && a > 1 && (s = setInterval(d, r.time), t.on({
								mouseenter: function() {
									clearInterval(s)
								},
								mouseleave: function() {
									clearInterval(s), s = setInterval(d, r.time)
								}
							}))
						}
					};
					p.init()
				})
			}, e.fn.fn_slide.defaults = {
				time: 3e3,
				duration: 300,
				direction: "left",
				has_num: !0,
				type: "fadeIn",
				flip: !0,
				auto: !1,
				has_ctrl: !0,
				hide_page_btn: !1
			}
		})(jQuery)
	}), define("lib/jquery/base64/jquery.base64", ["lib/jquery/1.11.1/jquery-1.11.1"], function(e) {
		jQuery.base64 = {
			is_unicode: !1,
			encode: function(e) {
				this.is_unicode && (e = this._u2a(e));
				var t = "",
					n, r, i = "",
					s, o, u, a = "",
					f = 0;
				do n = e.charCodeAt(f++), r = e.charCodeAt(f++), i = e.charCodeAt(f++), s = n >> 2, o = (n & 3) << 4 | r >> 4, u = (r & 15) << 2 | i >> 6, a = i & 63, isNaN(r) ? u = a = 64 : isNaN(i) && (a = 64), t = t + this._keys.charAt(s) + this._keys.charAt(o) + this._keys.charAt(u) + this._keys.charAt(a), n = r = i = "", s = o = u = a = ""; while (f < e.length);
				return t
			},
			decode: function(e) {
				var t = "",
					n, r, i = "",
					s, o, u, a = "",
					f = 0;
				if(e.length % 4 != 0) return "";
				var l = /[^A-Za-z0-9\+\/\=]/g;
				if(l.exec(e)) return "";
				do s = this._keys.indexOf(e.charAt(f++)), o = this._keys.indexOf(e.charAt(f++)), u = this._keys.indexOf(e.charAt(f++)), a = this._keys.indexOf(e.charAt(f++)), n = s << 2 | o >> 4, r = (o & 15) << 4 | u >> 2, i = (u & 3) << 6 | a, t += String.fromCharCode(n), u != 64 && (t += String.fromCharCode(r)), a != 64 && (t += String.fromCharCode(i)), n = r = i = "", s = o = u = a = ""; while (f < e.length);
				return this.is_unicode && (t = this._a2u(t)), t
			},
			_keys: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
			_unicode: function() {
				return "00A4,00A7,00A8,00B0,00B1,00B7,00D7,00E0,00E1,00E8,00E9,00EA,00EC,00ED,00F2,00F3,00F7,00F9,00FA,00FC,0101,0113,011B,012B,014D,016B,01CE,01D0,01D2,01D4,01D6,01D8,01DA,01DC,02C7,02C9,0391,0392,0393,0394,0395,0396,0397,0398,0399,039A,039B,039C,039D,039E,039F,03A0,03A1,03A3,03A4,03A5,03A6,03A7,03A8,03A9,03B1,03B2,03B3,03B4,03B5,03B6,03B7,03B8,03B9,03BA,03BB,03BC,03BD,03BE,03BF,03C0,03C1,03C3,03C4,03C5,03C6,03C7,03C8,03C9,0401,0410,0411,0412,0413,0414,0415,0416,0417,0418,0419,041A,041B,041C,041D,041E,041F,0420,0421,0422,0423,0424,0425,0426,0427,0428,0429,042A,042B,042C,042D,042E,042F,0430,0431,0432,0433,0434,0435,0436,0437,0438,0439,043A,043B,043C,043D,043E,043F,0440,0441,0442,0443,0444,0445,0446,0447,0448,0449,044A,044B,044C,044D,044E,044F,0451,2014,2016,2018,2019,201C,201D,2026,2030,2032,2033,203B,2103,2116,2160,2161,2162,2163,2164,2165,2166,2167,2168,2169,216A,216B,2190,2191,2192,2193,2208,220F,2211,221A,221D,221E,2220,2225,2227,2228,2229,222A,222B,222E,2234,2235,2236,2237,223D,2248,224C,2260,2261,2264,2265,226E,226F,2299,22A5,2312,2460,2461,2462,2463,2464,2465,2466,2467,2468,2469,2474,2475,2476,2477,2478,2479,247A,247B,247C,247D,247E,247F,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,248A,248B,248C,248D,248E,248F,2490,2491,2492,2493,2494,2495,2496,2497,2498,2499,249A,249B,2500,2501,2502,2503,2504,2505,2506,2507,2508,2509,250A,250B,250C,250D,250E,250F,2510,2511,2512,2513,2514,2515,2516,2517,2518,2519,251A,251B,251C,251D,251E,251F,2520,2521,2522,2523,2524,2525,2526,2527,2528,2529,252A,252B,252C,252D,252E,252F,2530,2531,2532,2533,2534,2535,2536,2537,2538,2539,253A,253B,253C,253D,253E,253F,2540,2541,2542,2543,2544,2545,2546,2547,2548,2549,254A,254B,25A0,25A1,25B2,25B3,25C6,25C7,25CB,25CE,25CF,2605,2606,2640,2642,3000,3001,3002,3003,3005,3008,3009,300A,300B,300C,300D,300E,300F,3010,3011,3013,3014,3015,3016,3017,3041,3042,3043,3044,3045,3046,3047,3048,3049,304A,304B,304C,304D,304E,304F,3050,3051,3052,3053,3054,3055,3056,3057,3058,3059,305A,305B,305C,305D,305E,305F,3060,3061,3062,3063,3064,3065,3066,3067,3068,3069,306A,306B,306C,306D,306E,306F,3070,3071,3072,3073,3074,3075,3076,3077,3078,3079,307A,307B,307C,307D,307E,307F,3080,3081,3082,3083,3084,3085,3086,3087,3088,3089,308A,308B,308C,308D,308E,308F,3090,3091,3092,3093,30A1,30A2,30A3,30A4,30A5,30A6,30A7,30A8,30A9,30AA,30AB,30AC,30AD,30AE,30AF,30B0,30B1,30B2,30B3,30B4,30B5,30B6,30B7,30B8,30B9,30BA,30BB,30BC,30BD,30BE,30BF,30C0,30C1,30C2,30C3,30C4,30C5,30C6,30C7,30C8,30C9,30CA,30CB,30CC,30CD,30CE,30CF,30D0,30D1,30D2,30D3,30D4,30D5,30D6,30D7,30D8,30D9,30DA,30DB,30DC,30DD,30DE,30DF,30E0,30E1,30E2,30E3,30E4,30E5,30E6,30E7,30E8,30E9,30EA,30EB,30EC,30ED,30EE,30EF,30F0,30F1,30F2,30F3,30F4,30F5,30F6,3105,3106,3107,3108,3109,310A,310B,310C,310D,310E,310F,3110,3111,3112,3113,3114,3115,3116,3117,3118,3119,311A,311B,311C,311D,311E,311F,3120,3121,3122,3123,3124,3125,3126,3127,3128,3129,3220,3221,3222,3223,3224,3225,3226,3227,3228,3229,4E00,4E01,4E03,4E07,4E08,4E09,4E0A,4E0B,4E0C,4E0D,4E0E,4E10,4E11,4E13,4E14,4E15,4E16,4E18,4E19,4E1A,4E1B,4E1C,4E1D,4E1E,4E22,4E24,4E25,4E27,4E28,4E2A,4E2B,4E2C,4E2D,4E30,4E32,4E34,4E36,4E38,4E39,4E3A,4E3B,4E3D,4E3E,4E3F,4E43,4E45,4E47,4E48,4E49,4E4B,4E4C,4E4D,4E4E,4E4F,4E50,4E52,4E53,4E54,4E56,4E58,4E59,4E5C,4E5D,4E5E,4E5F,4E60,4E61,4E66,4E69,4E70,4E71,4E73,4E7E,4E86,4E88,4E89,4E8B,4E8C,4E8D,4E8E,4E8F,4E91,4E92,4E93,4E94,4E95,4E98,4E9A,4E9B,4E9F,4EA0,4EA1,4EA2,4EA4,4EA5,4EA6,4EA7,4EA8,4EA9,4EAB,4EAC,4EAD,4EAE,4EB2,4EB3,4EB5,4EBA,4EBB,4EBF,4EC0,4EC1,4EC2,4EC3,4EC4,4EC5,4EC6,4EC7,4EC9,4ECA,4ECB,4ECD,4ECE,4ED1,4ED3,4ED4,4ED5,4ED6,4ED7,4ED8,4ED9,4EDD,4EDE,4EDF,4EE1,4EE3,4EE4,4EE5,4EE8,4EEA,4EEB,4EEC,4EF0,4EF2,4EF3,4EF5,4EF6,4EF7,4EFB,4EFD,4EFF,4F01,4F09,4F0A,4F0D,4F0E,4F0F,4F10,4F11,4F17,4F18,4F19,4F1A,4F1B,4F1E,4F1F,4F20,4F22,4F24,4F25,4F26,4F27,4F2A,4F2B,4F2F,4F30,4F32,4F34,4F36,4F38,4F3A,4F3C,4F3D,4F43,4F46,4F4D,4F4E,4F4F,4F50,4F51,4F53,4F55,4F57,4F58,4F59,4F5A,4F5B,4F5C,4F5D,4F5E,4F5F,4F60,4F63,4F64,4F65,4F67,4F69,4F6C,4F6F,4F70,4F73,4F74,4F76,4F7B,4F7C,4F7E,4F7F,4F83,4F84,4F88,4F89,4F8B,4F8D,4F8F,4F91,4F94,4F97,4F9B,4F9D,4FA0,4FA3,4FA5,4FA6,4FA7,4FA8,4FA9,4FAA,4FAC,4FAE,4FAF,4FB5,4FBF,4FC3,4FC4,4FC5,4FCA,4FCE,4FCF,4FD0,4FD1,4FD7,4FD8,4FDA,4FDC,4FDD,4FDE,4FDF,4FE1,4FE3,4FE6,4FE8,4FE9,4FEA,4FED,4FEE,4FEF,4FF1,4FF3,4FF8,4FFA,4FFE,500C,500D,500F,5012,5014,5018,5019,501A,501C,501F,5021,5025,5026,5028,5029,502A,502C,502D,502E,503A,503C,503E,5043,5047,5048,504C,504E,504F,5055,505A,505C,5065,506C,5076,5077,507B,507E,507F,5080,5085,5088,508D,50A3,50A5,50A7,50A8,50A9,50AC,50B2,50BA,50BB,50CF,50D6,50DA,50E6,50E7,50EC,50ED,50EE,50F3,50F5,50FB,5106,5107,510B,5112,5121,513F,5140,5141,5143,5144,5145,5146,5148,5149,514B,514D,5151,5154,5155,5156,515A,515C,5162,5165,5168,516B,516C,516D,516E,5170,5171,5173,5174,5175,5176,5177,5178,5179,517B,517C,517D,5180,5181,5182,5185,5188,5189,518C,518D,5192,5195,5196,5197,5199,519B,519C,51A0,51A2,51A4,51A5,51AB,51AC,51AF,51B0,51B1,51B2,51B3,51B5,51B6,51B7,51BB,51BC,51BD,51C0,51C4,51C6,51C7,51C9,51CB,51CC,51CF,51D1,51DB,51DD,51E0,51E1,51E4,51EB,51ED,51EF,51F0,51F3,51F5,51F6,51F8,51F9,51FA,51FB,51FC,51FD,51FF,5200,5201,5202,5203,5206,5207,5208,520A,520D,520E,5211,5212,5216,5217,5218,5219,521A,521B,521D,5220,5224,5228,5229,522B,522D,522E,5230,5233,5236,5237,5238,5239,523A,523B,523D,523F,5240,5241,5242,5243,524A,524C,524D,5250,5251,5254,5256,525C,525E,5261,5265,5267,5269,526A,526F,5272,527D,527F,5281,5282,5288,5290,5293,529B,529D,529E,529F,52A0,52A1,52A2,52A3,52A8,52A9,52AA,52AB,52AC,52AD,52B1,52B2,52B3,52BE,52BF,52C3,52C7,52C9,52CB,52D0,52D2,52D6,52D8,52DF,52E4,52F0,52F9,52FA,52FE,52FF,5300,5305,5306,5308,530D,530F,5310,5315,5316,5317,5319,531A,531D,5320,5321,5323,5326,532A,532E,5339,533A,533B,533E,533F,5341,5343,5345,5347,5348,5349,534A,534E,534F,5351,5352,5353,5355,5356,5357,535A,535C,535E,535F,5360,5361,5362,5363,5364,5366,5367,5369,536B,536E,536F,5370,5371,5373,5374,5375,5377,5378,537A,537F,5382,5384,5385,5386,5389,538B,538C,538D,5395,5398,539A,539D,539F,53A2,53A3,53A5,53A6,53A8,53A9,53AE,53B6,53BB,53BF,53C1,53C2,53C8,53C9,53CA,53CB,53CC,53CD,53D1,53D4,53D6,53D7,53D8,53D9,53DB,53DF,53E0,53E3,53E4,53E5,53E6,53E8,53E9,53EA,53EB,53EC,53ED,53EE,53EF,53F0,53F1,53F2,53F3,53F5,53F6,53F7,53F8,53F9,53FB,53FC,53FD,5401,5403,5404,5406,5408,5409,540A,540C,540D,540E,540F,5410,5411,5412,5413,5415,5416,5417,541B,541D,541E,541F,5420,5421,5423,5426,5427,5428,5429,542B,542C,542D,542E,542F,5431,5432,5434,5435,5438,5439,543B,543C,543E,5440,5443,5446,5448,544A,544B,5450,5452,5453,5454,5455,5456,5457,5458,5459,545B,545C,5462,5464,5466,5468,5471,5472,5473,5475,5476,5477,5478,547B,547C,547D,5480,5482,5484,5486,548B,548C,548E,548F,5490,5492,5494,5495,5496,5499,549A,549B,549D,54A3,54A4,54A6,54A7,54A8,54A9,54AA,54AB,54AC,54AD,54AF,54B1,54B3,54B4,54B8,54BB,54BD,54BF,54C0,54C1,54C2,54C4,54C6,54C7,54C8,54C9,54CC,54CD,54CE,54CF,54D0,54D1,54D2,54D3,54D4,54D5,54D7,54D9,54DA,54DC,54DD,54DE,54DF,54E5,54E6,54E7,54E8,54E9,54EA,54ED,54EE,54F2,54F3,54FA,54FC,54FD,54FF,5501,5506,5507,5509,550F,5510,5511,5514,551B,5520,5522,5523,5524,5527,552A,552C,552E,552F,5530,5531,5533,5537,553C,553E,553F,5541,5543,5544,5546,5549,554A,5550,5555,5556,555C,5561,5564,5565,5566,5567,556A,556C,556D,556E,5575,5576,5577,5578,557B,557C,557E,5580,5581,5582,5583,5584,5587,5588,5589,558A,558B,558F,5591,5594,5598,5599,559C,559D,559F,55A7,55B1,55B3,55B5,55B7,55B9,55BB,55BD,55BE,55C4,55C5,55C9,55CC,55CD,55D1,55D2,55D3,55D4,55D6,55DC,55DD,55DF,55E1,55E3,55E4,55E5,55E6,55E8,55EA,55EB,55EC,55EF,55F2,55F3,55F5,55F7,55FD,55FE,5600,5601,5608,5609,560C,560E,560F,5618,561B,561E,561F,5623,5624,5627,562C,562D,5631,5632,5634,5636,5639,563B,563F,564C,564D,564E,5654,5657,5658,5659,565C,5662,5664,5668,5669,566A,566B,566C,5671,5676,567B,567C,5685,5686,568E,568F,5693,56A3,56AF,56B7,56BC,56CA,56D4,56D7,56DA,56DB,56DD,56DE,56DF,56E0,56E1,56E2,56E4,56EB,56ED,56F0,56F1,56F4,56F5,56F9,56FA,56FD,56FE,56FF,5703,5704,5706,5708,5709,570A,571C,571F,5723,5728,5729,572A,572C,572D,572E,572F,5730,5733,5739,573A,573B,573E,5740,5742,5747,574A,574C,574D,574E,574F,5750,5751,5757,575A,575B,575C,575D,575E,575F,5760,5761,5764,5766,5768,5769,576A,576B,576D,576F,5773,5776,5777,577B,577C,5782,5783,5784,5785,5786,578B,578C,5792,5793,579B,57A0,57A1,57A2,57A3,57A4,57A6,57A7,57A9,57AB,57AD,57AE,57B2,57B4,57B8,57C2,57C3,57CB,57CE,57CF,57D2,57D4,57D5,57D8,57D9,57DA,57DD,57DF,57E0,57E4,57ED,57EF,57F4,57F8,57F9,57FA,57FD,5800,5802,5806,5807,580B,580D,5811,5815,5819,581E,5820,5821,5824,582A,5830,5835,5844,584C,584D,5851,5854,5858,585E,5865,586B,586C,587E,5880,5881,5883,5885,5889,5892,5893,5899,589A,589E,589F,58A8,58A9,58BC,58C1,58C5,58D1,58D5,58E4,58EB,58EC,58EE,58F0,58F3,58F6,58F9,5902,5904,5907,590D,590F,5914,5915,5916,5919,591A,591C,591F,5924,5925,5927,5929,592A,592B,592D,592E,592F,5931,5934,5937,5938,5939,593A,593C,5941,5942,5944,5947,5948,5949,594B,594E,594F,5951,5954,5955,5956,5957,5958,595A,5960,5962,5965,5973,5974,5976,5978,5979,597D,5981,5982,5983,5984,5986,5987,5988,598A,598D,5992,5993,5996,5997,5999,599E,59A3,59A4,59A5,59A8,59A9,59AA,59AB,59AE,59AF,59B2,59B9,59BB,59BE,59C6,59CA,59CB,59D0,59D1,59D2,59D3,59D4,59D7,59D8,59DA,59DC,59DD,59E3,59E5,59E8,59EC,59F9,59FB,59FF,5A01,5A03,5A04,5A05,5A06,5A07,5A08,5A09,5A0C,5A11,5A13,5A18,5A1C,5A1F,5A20,5A23,5A25,5A29,5A31,5A32,5A34,5A36,5A3C,5A40,5A46,5A49,5A4A,5A55,5A5A,5A62,5A67,5A6A,5A74,5A75,5A76,5A77,5A7A,5A7F,5A92,5A9A,5A9B,5AAA,5AB2,5AB3,5AB5,5AB8,5ABE,5AC1,5AC2,5AC9,5ACC,5AD2,5AD4,5AD6,5AD8,5ADC,5AE0,5AE1,5AE3,5AE6,5AE9,5AEB,5AF1,5B09,5B16,5B17,5B32,5B34,5B37,5B40,5B50,5B51,5B53,5B54,5B55,5B57,5B58,5B59,5B5A,5B5B,5B5C,5B5D,5B5F,5B62,5B63,5B64,5B65,5B66,5B69,5B6A,5B6C,5B70,5B71,5B73,5B75,5B7A,5B7D,5B80,5B81,5B83,5B84,5B85,5B87,5B88,5B89,5B8B,5B8C,5B8F,5B93,5B95,5B97,5B98,5B99,5B9A,5B9B,5B9C,5B9D,5B9E,5BA0,5BA1,5BA2,5BA3,5BA4,5BA5,5BA6,5BAA,5BAB,5BB0,5BB3,5BB4,5BB5,5BB6,5BB8,5BB9,5BBD,5BBE,5BBF,5BC2,5BC4,5BC5,5BC6,5BC7,5BCC,5BD0,5BD2,5BD3,5BDD,5BDE,5BDF,5BE1,5BE4,5BE5,5BE8,5BEE,5BF0,5BF8,5BF9,5BFA,5BFB,5BFC,5BFF,5C01,5C04,5C06,5C09,5C0A,5C0F,5C11,5C14,5C15,5C16,5C18,5C1A,5C1C,5C1D,5C22,5C24,5C25,5C27,5C2C,5C31,5C34,5C38,5C39,5C3A,5C3B,5C3C,5C3D,5C3E,5C3F,5C40,5C41,5C42,5C45,5C48,5C49,5C4A,5C4B,5C4E,5C4F,5C50,5C51,5C55,5C59,5C5E,5C60,5C61,5C63,5C65,5C66,5C6E,5C6F,5C71,5C79,5C7A,5C7F,5C81,5C82,5C88,5C8C,5C8D,5C90,5C91,5C94,5C96,5C97,5C98,5C99,5C9A,5C9B,5C9C,5CA2,5CA3,5CA9,5CAB,5CAC,5CAD,5CB1,5CB3,5CB5,5CB7,5CB8,5CBD,5CBF,5CC1,5CC4,5CCB,5CD2,5CD9,5CE1,5CE4,5CE5,5CE6,5CE8,5CEA,5CED,5CF0,5CFB,5D02,5D03,5D06,5D07,5D0E,5D14,5D16,5D1B,5D1E,5D24,5D26,5D27,5D29,5D2D,5D2E,5D34,5D3D,5D3E,5D47,5D4A,5D4B,5D4C,5D58,5D5B,5D5D,5D69,5D6B,5D6C,5D6F,5D74,5D82,5D99,5D9D,5DB7,5DC5,5DCD,5DDB,5DDD,5DDE,5DE1,5DE2,5DE5,5DE6,5DE7,5DE8,5DE9,5DEB,5DEE,5DEF,5DF1,5DF2,5DF3,5DF4,5DF7,5DFD,5DFE,5E01,5E02,5E03,5E05,5E06,5E08,5E0C,5E0F,5E10,5E11,5E14,5E15,5E16,5E18,5E19,5E1A,5E1B,5E1C,5E1D,5E26,5E27,5E2D,5E2E,5E31,5E37,5E38,5E3B,5E3C,5E3D,5E42,5E44,5E45,5E4C,5E54,5E55,5E5B,5E5E,5E61,5E62,5E72,5E73,5E74,5E76,5E78,5E7A,5E7B,5E7C,5E7D,5E7F,5E80,5E84,5E86,5E87,5E8A,5E8B,5E8F,5E90,5E91,5E93,5E94,5E95,5E96,5E97,5E99,5E9A,5E9C,5E9E,5E9F,5EA0,5EA5,5EA6,5EA7,5EAD,5EB3,5EB5,5EB6,5EB7,5EB8,5EB9,5EBE,5EC9,5ECA,5ED1,5ED2,5ED3,5ED6,5EDB,5EE8,5EEA,5EF4,5EF6,5EF7,5EFA,5EFE,5EFF,5F00,5F01,5F02,5F03,5F04,5F08,5F0A,5F0B,5F0F,5F11,5F13,5F15,5F17,5F18,5F1B,5F1F,5F20,5F25,5F26,5F27,5F29,5F2A,5F2D,5F2F,5F31,5F39,5F3A,5F3C,5F40,5F50,5F52,5F53,5F55,5F56,5F57,5F58,5F5D,5F61,5F62,5F64,5F66,5F69,5F6A,5F6C,5F6D,5F70,5F71,5F73,5F77,5F79,5F7B,5F7C,5F80,5F81,5F82,5F84,5F85,5F87,5F88,5F89,5F8A,5F8B,5F8C,5F90,5F92,5F95,5F97,5F98,5F99,5F9C,5FA1,5FA8,5FAA,5FAD,5FAE,5FB5,5FB7,5FBC,5FBD,5FC3,5FC4,5FC5,5FC6,5FC9,5FCC,5FCD,5FCF,5FD0,5FD1,5FD2,5FD6,5FD7,5FD8,5FD9,5FDD,5FE0,5FE1,5FE4,5FE7,5FEA,5FEB,5FED,5FEE,5FF1,5FF5,5FF8,5FFB,5FFD,5FFE,5FFF,6000,6001,6002,6003,6004,6005,6006,600A,600D,600E,600F,6012,6014,6015,6016,6019,601B,601C,601D,6020,6021,6025,6026,6027,6028,6029,602A,602B,602F,6035,603B,603C,603F,6041,6042,6043,604B,604D,6050,6052,6055,6059,605A,605D,6062,6063,6064,6067,6068,6069,606A,606B,606C,606D,606F,6070,6073,6076,6078,6079,607A,607B,607C,607D,607F,6083,6084,6089,608C,608D,6092,6094,6096,609A,609B,609D,609F,60A0,60A3,60A6,60A8,60AB,60AC,60AD,60AF,60B1,60B2,60B4,60B8,60BB,60BC,60C5,60C6,60CA,60CB,60D1,60D5,60D8,60DA,60DC,60DD,60DF,60E0,60E6,60E7,60E8,60E9,60EB,60EC,60ED,60EE,60EF,60F0,60F3,60F4,60F6,60F9,60FA,6100,6101,6106,6108,6109,610D,610E,610F,6115,611A,611F,6120,6123,6124,6126,6127,612B,613F,6148,614A,614C,614E,6151,6155,615D,6162,6167,6168,6170,6175,6177,618B,618E,6194,619D,61A7,61A8,61A9,61AC,61B7,61BE,61C2,61C8,61CA,61CB,61D1,61D2,61D4,61E6,61F5,61FF,6206,6208,620A,620B,620C,620D,620E,620F,6210,6211,6212,6215,6216,6217,6218,621A,621B,621F,6221,6222,6224,6225,622A,622C,622E,6233,6234,6237,623D,623E,623F,6240,6241,6243,6247,6248,6249,624B,624C,624D,624E,6251,6252,6253,6254,6258,625B,6263,6266,6267,6269,626A,626B,626C,626D,626E,626F,6270,6273,6276,6279,627C,627E,627F,6280,6284,6289,628A,6291,6292,6293,6295,6296,6297,6298,629A,629B,629F,62A0,62A1,62A2,62A4,62A5,62A8,62AB,62AC,62B1,62B5,62B9,62BB,62BC,62BD,62BF,62C2,62C4,62C5,62C6,62C7,62C8,62C9,62CA,62CC,62CD,62CE,62D0,62D2,62D3,62D4,62D6,62D7,62D8,62D9,62DA,62DB,62DC,62DF,62E2,62E3,62E5,62E6,62E7,62E8,62E9,62EC,62ED,62EE,62EF,62F1,62F3,62F4,62F6,62F7,62FC,62FD,62FE,62FF,6301,6302,6307,6308,6309,630E,6311,6316,631A,631B,631D,631E,631F,6320,6321,6322,6323,6324,6325,6328,632A,632B,632F,6332,6339,633A,633D,6342,6343,6345,6346,6349,634B,634C,634D,634E,634F,6350,6355,635E,635F,6361,6362,6363,6367,6369,636D,636E,6371,6376,6377,637A,637B,6380,6382,6387,6388,6389,638A,638C,638E,638F,6390,6392,6396,6398,63A0,63A2,63A3,63A5,63A7,63A8,63A9,63AA,63AC,63AD,63AE,63B0,63B3,63B4,63B7,63B8,63BA,63BC,63BE,63C4,63C6,63C9,63CD,63CE,63CF,63D0,63D2,63D6,63DE,63E0,63E1,63E3,63E9,63EA,63ED,63F2,63F4,63F6,63F8,63FD,63FF,6400,6401,6402,6405,640B,640C,640F,6410,6413,6414,641B,641C,641E,6420,6421,6426,642A,642C,642D,6434,643A,643D,643F,6441,6444,6445,6446,6447,6448,644A,6452,6454,6458,645E,6467,6469,646D,6478,6479,647A,6482,6484,6485,6487,6491,6492,6495,6496,6499,649E,64A4,64A9,64AC,64AD,64AE,64B0,64B5,64B7,64B8,64BA,64BC,64C0,64C2,64C5,64CD,64CE,64D0,64D2,64D7,64D8,64DE,64E2,64E4,64E6,6500,6509,6512,6518,6525,652B,652E,652F,6534,6535,6536,6538,6539,653B,653E,653F,6545,6548,6549,654C,654F,6551,6555,6556,6559,655B,655D,655E,6562,6563,6566,656B,656C,6570,6572,6574,6577,6587,658B,658C,6590,6591,6593,6597,6599,659B,659C,659F,65A1,65A4,65A5,65A7,65A9,65AB,65AD,65AF,65B0,65B9,65BC,65BD,65C1,65C3,65C4,65C5,65C6,65CB,65CC,65CE,65CF,65D2,65D6,65D7,65E0,65E2,65E5,65E6,65E7,65E8,65E9,65EC,65ED,65EE,65EF,65F0,65F1,65F6,65F7,65FA,6600,6602,6603,6606,660A,660C,660E,660F,6613,6614,6615,6619,661D,661F,6620,6625,6627,6628,662D,662F,6631,6634,6635,6636,663C,663E,6641,6643,664B,664C,664F,6652,6653,6654,6655,6656,6657,665A,665F,6661,6664,6666,6668,666E,666F,6670,6674,6676,6677,667A,667E,6682,6684,6687,668C,6691,6696,6697,669D,66A7,66A8,66AE,66B4,66B9,66BE,66D9,66DB,66DC,66DD,66E6,66E9,66F0,66F2,66F3,66F4,66F7,66F9,66FC,66FE,66FF,6700,6708,6709,670A,670B,670D,6710,6714,6715,6717,671B,671D,671F,6726,6728,672A,672B,672C,672D,672F,6731,6734,6735,673A,673D,6740,6742,6743,6746,6748,6749,674C,674E,674F,6750,6751,6753,6756,675C,675E,675F,6760,6761,6765,6768,6769,676A,676D,676F,6770,6772,6773,6775,6777,677C,677E,677F,6781,6784,6787,6789,678B,6790,6795,6797,6798,679A,679C,679D,679E,67A2,67A3,67A5,67A7,67A8,67AA,67AB,67AD,67AF,67B0,67B3,67B5,67B6,67B7,67B8,67C1,67C3,67C4,67CF,67D0,67D1,67D2,67D3,67D4,67D8,67D9,67DA,67DC,67DD,67DE,67E0,67E2,67E5,67E9,67EC,67EF,67F0,67F1,67F3,67F4,67FD,67FF,6800,6805,6807,6808,6809,680A,680B,680C,680E,680F,6811,6813,6816,6817,681D,6821,6829,682A,6832,6833,6837,6838,6839,683C,683D,683E,6840,6841,6842,6843,6844,6845,6846,6848,6849,684A,684C,684E,6850,6851,6853,6854,6855,6860,6861,6862,6863,6864,6865,6866,6867,6868,6869,686B,6874,6876,6877,6881,6883,6885,6886,688F,6893,6897,68A2,68A6,68A7,68A8,68AD,68AF,68B0,68B3,68B5,68C0,68C2,68C9,68CB,68CD,68D2,68D5,68D8,68DA,68E0,68E3,68EE,68F0,68F1,68F5,68F9,68FA,68FC,6901,6905,690B,690D,690E,6910,6912,691F,6920,6924,692D,6930,6934,6939,693D,693F,6942,6954,6957,695A,695D,695E,6960,6963,6966,696B,696E,6971,6977,6978,6979,697C,6980,6982,6984,6986,6987,6988,6989,698D,6994,6995,6998,699B,699C,69A7,69A8,69AB,69AD,69B1,69B4,69B7,69BB,69C1,69CA,69CC,69CE,69D0,69D4,69DB,69DF,69E0,69ED,69F2,69FD,69FF,6A0A,6A17,6A18,6A1F,6A21,6A28,6A2A,6A2F,6A31,6A35,6A3D,6A3E,6A44,6A47,6A50,6A58,6A59,6A5B,6A61,6A65,6A71,6A79,6A7C,6A80,6A84,6A8E,6A90,6A91,6A97,6AA0,6AA9,6AAB,6AAC,6B20,6B21,6B22,6B23,6B24,6B27,6B32,6B37,6B39,6B3A,6B3E,6B43,6B46,6B47,6B49,6B4C,6B59,6B62,6B63,6B64,6B65,6B66,6B67,6B6A,6B79,6B7B,6B7C,6B81,6B82,6B83,6B84,6B86,6B87,6B89,6B8A,6B8B,6B8D,6B92,6B93,6B96,6B9A,6B9B,6BA1,6BAA,6BB3,6BB4,6BB5,6BB7,6BBF,6BC1,6BC2,6BC5,6BCB,6BCD,6BCF,6BD2,6BD3,6BD4,6BD5,6BD6,6BD7,6BD9,6BDB,6BE1,6BEA,6BEB,6BEF,6BF3,6BF5,6BF9,6BFD,6C05,6C06,6C07,6C0D,6C0F,6C10,6C11,6C13,6C14,6C15,6C16,6C18,6C19,6C1A,6C1B,6C1F,6C21,6C22,6C24,6C26,6C27,6C28,6C29,6C2A,6C2E,6C2F,6C30,6C32,6C34,6C35,6C38,6C3D,6C40,6C41,6C42,6C46,6C47,6C49,6C4A,6C50,6C54,6C55,6C57,6C5B,6C5C,6C5D,6C5E,6C5F,6C60,6C61,6C64,6C68,6C69,6C6A,6C70,6C72,6C74,6C76,6C79,6C7D,6C7E,6C81,6C82,6C83,6C85,6C86,6C88,6C89,6C8C,6C8F,6C90,6C93,6C94,6C99,6C9B,6C9F,6CA1,6CA3,6CA4,6CA5,6CA6,6CA7,6CA9,6CAA,6CAB,6CAD,6CAE,6CB1,6CB2,6CB3,6CB8,6CB9,6CBB,6CBC,6CBD,6CBE,6CBF,6CC4,6CC5,6CC9,6CCA,6CCC,6CD0,6CD3,6CD4,6CD5,6CD6,6CD7,6CDB,6CDE,6CE0,6CE1,6CE2,6CE3,6CE5,6CE8,6CEA,6CEB,6CEE,6CEF,6CF0,6CF1,6CF3,6CF5,6CF6,6CF7,6CF8,6CFA,6CFB,6CFC,6CFD,6CFE,6D01,6D04,6D07,6D0B,6D0C,6D0E,6D12,6D17,6D19,6D1A,6D1B,6D1E,6D25,6D27,6D2A,6D2B,6D2E,6D31,6D32,6D33,6D35,6D39,6D3B,6D3C,6D3D,6D3E,6D41,6D43,6D45,6D46,6D47,6D48,6D4A,6D4B,6D4D,6D4E,6D4F,6D51,6D52,6D53,6D54,6D59,6D5A,6D5C,6D5E,6D60,6D63,6D66,6D69,6D6A,6D6E,6D6F,6D74,6D77,6D78,6D7C,6D82,6D85,6D88,6D89,6D8C,6D8E,6D91,6D93,6D94,6D95,6D9B,6D9D,6D9E,6D9F,6DA0,6DA1,6DA3,6DA4,6DA6,6DA7,6DA8,6DA9,6DAA,6DAB,6DAE,6DAF,6DB2,6DB5,6DB8,6DBF,6DC0,6DC4,6DC5,6DC6,6DC7,6DCB,6DCC,6DD1,6DD6,6DD8,6DD9,6DDD,6DDE,6DE0,6DE1,6DE4,6DE6,6DEB,6DEC,6DEE,6DF1,6DF3,6DF7,6DF9,6DFB,6DFC,6E05,6E0A,6E0C,6E0D,6E0E,6E10,6E11,6E14,6E16,6E17,6E1A,6E1D,6E20,6E21,6E23,6E24,6E25,6E29,6E2B,6E2D,6E2F,6E32,6E34,6E38,6E3A,6E43,6E44,6E4D,6E4E,6E53,6E54,6E56,6E58,6E5B,6E5F,6E6B,6E6E,6E7E,6E7F,6E83,6E85,6E86,6E89,6E8F,6E90,6E98,6E9C,6E9F,6EA2,6EA5,6EA7,6EAA,6EAF,6EB1,6EB2,6EB4,6EB6,6EB7,6EBA,6EBB,6EBD,6EC1,6EC2,6EC7,6ECB,6ECF,6ED1,6ED3,6ED4,6ED5,6ED7,6EDA,6EDE,6EDF,6EE0,6EE1,6EE2,6EE4,6EE5,6EE6,6EE8,6EE9,6EF4,6EF9,6F02,6F06,6F09,6F0F,6F13,6F14,6F15,6F20,6F24,6F29,6F2A,6F2B,6F2D,6F2F,6F31,6F33,6F36,6F3E,6F46,6F47,6F4B,6F4D,6F58,6F5C,6F5E,6F62,6F66,6F6D,6F6E,6F72,6F74,6F78,6F7A,6F7C,6F84,6F88,6F89,6F8C,6F8D,6F8E,6F9C,6FA1,6FA7,6FB3,6FB6,6FB9,6FC0,6FC2,6FC9,6FD1,6FD2,6FDE,6FE0,6FE1,6FEE,6FEF,7011,701A,701B,7023,7035,7039,704C,704F,705E,706B,706C,706D,706F,7070,7075,7076,7078,707C,707E,707F,7080,7085,7089,708A,708E,7092,7094,7095,7096,7099,709C,709D,70AB,70AC,70AD,70AE,70AF,70B1,70B3,70B7,70B8,70B9,70BB,70BC,70BD,70C0,70C1,70C2,70C3,70C8,70CA,70D8,70D9,70DB,70DF,70E4,70E6,70E7,70E8,70E9,70EB,70EC,70ED,70EF,70F7,70F9,70FD,7109,710A,7110,7113,7115,7116,7118,7119,711A,7126,712F,7130,7131,7136,7145,714A,714C,714E,715C,715E,7164,7166,7167,7168,716E,7172,7173,7178,717A,717D,7184,718A,718F,7194,7198,7199,719F,71A0,71A8,71AC,71B3,71B5,71B9,71C3,71CE,71D4,71D5,71E0,71E5,71E7,71EE,71F9,7206,721D,7228,722A,722C,7230,7231,7235,7236,7237,7238,7239,723B,723D,723F,7247,7248,724C,724D,7252,7256,7259,725B,725D,725F,7261,7262,7266,7267,7269,726E,726F,7272,7275,7279,727A,727E,727F,7280,7281,7284,728A,728B,728D,728F,7292,729F,72AC,72AD,72AF,72B0,72B4,72B6,72B7,72B8,72B9,72C1,72C2,72C3,72C4,72C8,72CD,72CE,72D0,72D2,72D7,72D9,72DE,72E0,72E1,72E8,72E9,72EC,72ED,72EE,72EF,72F0,72F1,72F2,72F3,72F4,72F7,72F8,72FA,72FB,72FC,7301,7303,730A,730E,7313,7315,7316,7317,731B,731C,731D,731E,7321,7322,7325,7329,732A,732B,732C,732E,7331,7334,7337,7338,7339,733E,733F,734D,7350,7352,7357,7360,736C,736D,736F,737E,7384,7387,7389,738B,738E,7391,7396,739B,739F,73A2,73A9,73AB,73AE,73AF,73B0,73B2,73B3,73B7,73BA,73BB,73C0,73C2,73C8,73C9,73CA,73CD,73CF,73D0,73D1,73D9,73DE,73E0,73E5,73E7,73E9,73ED,73F2,7403,7405,7406,7409,740A,740F,7410,741A,741B,7422,7425,7426,7428,742A,742C,742E,7430,7433,7434,7435,7436,743C,7441,7455,7457,7459,745A,745B,745C,745E,745F,746D,7470,7476,7477,747E,7480,7481,7483,7487,748B,748E,7490,749C,749E,74A7,74A8,74A9,74BA,74D2,74DC,74DE,74E0,74E2,74E3,74E4,74E6,74EE,74EF,74F4,74F6,74F7,74FF,7504,750D,750F,7511,7513,7518,7519,751A,751C,751F,7525,7528,7529,752B,752C,752D,752F,7530,7531,7532,7533,7535,7537,7538,753A,753B,753E,7540,7545,7548,754B,754C,754E,754F,7554,7559,755A,755B,755C,7565,7566,756A,7572,7574,7578,7579,757F,7583,7586,758B,758F,7591,7592,7594,7596,7597,7599,759A,759D,759F,75A0,75A1,75A3,75A4,75A5,75AB,75AC,75AE,75AF,75B0,75B1,75B2,75B3,75B4,75B5,75B8,75B9,75BC,75BD,75BE,75C2,75C3,75C4,75C5,75C7,75C8,75C9,75CA,75CD,75D2,75D4,75D5,75D6,75D8,75DB,75DE,75E2,75E3,75E4,75E6,75E7,75E8,75EA,75EB,75F0,75F1,75F4,75F9,75FC,75FF,7600,7601,7603,7605,760A,760C,7610,7615,7617,7618,7619,761B,761F,7620,7622,7624,7625,7626,7629,762A,762B,762D,7630,7633,7634,7635,7638,763C,763E,763F,7640,7643,764C,764D,7654,7656,765C,765E,7663,766B,766F,7678,767B,767D,767E,7682,7684,7686,7687,7688,768B,768E,7691,7693,7696,7699,76A4,76AE,76B1,76B2,76B4,76BF,76C2,76C5,76C6,76C8,76CA,76CD,76CE,76CF,76D0,76D1,76D2,76D4,76D6,76D7,76D8,76DB,76DF,76E5,76EE,76EF,76F1,76F2,76F4,76F8,76F9,76FC,76FE,7701,7704,7707,7708,7709,770B,770D,7719,771A,771F,7720,7722,7726,7728,7729,772D,772F,7735,7736,7737,7738,773A,773C,7740,7741,7743,7747,7750,7751,775A,775B,7761,7762,7763,7765,7766,7768,776B,776C,7779,777D,777E,777F,7780,7784,7785,778C,778D,778E,7791,7792,779F,77A0,77A2,77A5,77A7,77A9,77AA,77AC,77B0,77B3,77B5,77BB,77BD,77BF,77CD,77D7,77DB,77DC,77E2,77E3,77E5,77E7,77E9,77EB,77EC,77ED,77EE,77F3,77F6,77F8,77FD,77FE,77FF,7800,7801,7802,7809,780C,780D,7811,7812,7814,7816,7817,7818,781A,781C,781D,781F,7823,7825,7826,7827,7829,782C,782D,7830,7834,7837,7838,7839,783A,783B,783C,783E,7840,7845,7847,784C,784E,7850,7852,7855,7856,7857,785D,786A,786B,786C,786D,786E,7877,787C,7887,7889,788C,788D,788E,7891,7893,7897,7898,789A,789B,789C,789F,78A1,78A3,78A5,78A7,78B0,78B1,78B2,78B3,78B4,78B9,78BE,78C1,78C5,78C9,78CA,78CB,78D0,78D4,78D5,78D9,78E8,78EC,78F2,78F4,78F7,78FA,7901,7905,7913,791E,7924,7934,793A,793B,793C,793E,7940,7941,7946,7948,7949,7953,7956,7957,795A,795B,795C,795D,795E,795F,7960,7962,7965,7967,7968,796D,796F,7977,7978,797A,7980,7981,7984,7985,798A,798F,799A,79A7,79B3,79B9,79BA,79BB,79BD,79BE,79C0,79C1,79C3,79C6,79C9,79CB,79CD,79D1,79D2,79D5,79D8,79DF,79E3,79E4,79E6,79E7,79E9,79EB,79ED,79EF,79F0,79F8,79FB,79FD,7A00,7A02,7A03,7A06,7A0B,7A0D,7A0E,7A14,7A17,7A1A,7A1E,7A20,7A23,7A33,7A37,7A39,7A3B,7A3C,7A3D,7A3F,7A46,7A51,7A57,7A70,7A74,7A76,7A77,7A78,7A79,7A7A,7A7F,7A80,7A81,7A83,7A84,7A86,7A88,7A8D,7A91,7A92,7A95,7A96,7A97,7A98,7A9C,7A9D,7A9F,7AA0,7AA5,7AA6,7AA8,7AAC,7AAD,7AB3,7ABF,7ACB,7AD6,7AD9,7ADE,7ADF,7AE0,7AE3,7AE5,7AE6,7AED,7AEF,7AF9,7AFA,7AFD,7AFF,7B03,7B04,7B06,7B08,7B0A,7B0B,7B0F,7B11,7B14,7B15,7B19,7B1B,7B1E,7B20,7B24,7B25,7B26,7B28,7B2A,7B2B,7B2C,7B2E,7B31,7B33,7B38,7B3A,7B3C,7B3E,7B45,7B47,7B49,7B4B,7B4C,7B4F,7B50,7B51,7B52,7B54,7B56,7B58,7B5A,7B5B,7B5D,7B60,7B62,7B6E,7B71,7B72,7B75,7B77,7B79,7B7B,7B7E,7B80,7B85,7B8D,7B90,7B94,7B95,7B97,7B9C,7B9D,7BA1,7BA2,7BA6,7BA7,7BA8,7BA9,7BAA,7BAB,7BAC,7BAD,7BB1,7BB4,7BB8,7BC1,7BC6,7BC7,7BCC,7BD1,7BD3,7BD9,7BDA,7BDD,7BE1,7BE5,7BE6,7BEA,7BEE,7BF1,7BF7,7BFC,7BFE,7C07,7C0B,7C0C,7C0F,7C16,7C1F,7C26,7C27,7C2A,7C38,7C3F,7C40,7C41,7C4D,7C73,7C74,7C7B,7C7C,7C7D,7C89,7C91,7C92,7C95,7C97,7C98,7C9C,7C9D,7C9E,7C9F,7CA2,7CA4,7CA5,7CAA,7CAE,7CB1,7CB2,7CB3,7CB9,7CBC,7CBD,7CBE,7CC1,7CC5,7CC7,7CC8,7CCA,7CCC,7CCD,7CD5,7CD6,7CD7,7CD9,7CDC,7CDF,7CE0,7CE8,7CEF,7CF8,7CFB,7D0A,7D20,7D22,7D27,7D2B,7D2F,7D6E,7D77,7DA6,7DAE,7E3B,7E41,7E47,7E82,7E9B,7E9F,7EA0,7EA1,7EA2,7EA3,7EA4,7EA5,7EA6,7EA7,7EA8,7EA9,7EAA,7EAB,7EAC,7EAD,7EAF,7EB0,7EB1,7EB2,7EB3,7EB5,7EB6,7EB7,7EB8,7EB9,7EBA,7EBD,7EBE,7EBF,7EC0,7EC1,7EC2,7EC3,7EC4,7EC5,7EC6,7EC7,7EC8,7EC9,7ECA,7ECB,7ECC,7ECD,7ECE,7ECF,7ED0,7ED1,7ED2,7ED3,7ED4,7ED5,7ED7,7ED8,7ED9,7EDA,7EDB,7EDC,7EDD,7EDE,7EDF,7EE0,7EE1,7EE2,7EE3,7EE5,7EE6,7EE7,7EE8,7EE9,7EEA,7EEB,7EED,7EEE,7EEF,7EF0,7EF1,7EF2,7EF3,7EF4,7EF5,7EF6,7EF7,7EF8,7EFA,7EFB,7EFC,7EFD,7EFE,7EFF,7F00,7F01,7F02,7F03,7F04,7F05,7F06,7F07,7F08,7F09,7F0B,7F0C,7F0D,7F0E,7F0F,7F11,7F12,7F13,7F14,7F15,7F16,7F17,7F18,7F19,7F1A,7F1B,7F1C,7F1D,7F1F,7F20,7F21,7F22,7F23,7F24,7F25,7F26,7F27,7F28,7F29,7F2A,7F2B,7F2C,7F2D,7F2E,7F2F,7F30,7F31,7F32,7F33,7F34,7F35,7F36,7F38,7F3A,7F42,7F44,7F45,7F50,7F51,7F54,7F55,7F57,7F58,7F5A,7F5F,7F61,7F62,7F68,7F69,7F6A,7F6E,7F71,7F72,7F74,7F79,7F7E,7F81,7F8A,7F8C,7F8E,7F94,7F9A,7F9D,7F9E,7F9F,7FA1,7FA4,7FA7,7FAF,7FB0,7FB2,7FB8,7FB9,7FBC,7FBD,7FBF,7FC1,7FC5,7FCA,7FCC,7FCE,7FD4,7FD5,7FD8,7FDF,7FE0,7FE1,7FE5,7FE6,7FE9,7FEE,7FF0,7FF1,7FF3,7FFB,7FFC,8000,8001,8003,8004,8005,8006,800B,800C,800D,8010,8012,8014,8015,8016,8017,8018,8019,801C,8020,8022,8025,8026,8027,8028,8029,802A,8031,8033,8035,8036,8037,8038,803B,803D,803F,8042,8043,8046,804A,804B,804C,804D,8052,8054,8058,805A,8069,806A,8071,807F,8080,8083,8084,8086,8087,8089,808B,808C,8093,8096,8098,809A,809B,809C,809D,809F,80A0,80A1,80A2,80A4,80A5,80A9,80AA,80AB,80AD,80AE,80AF,80B1,80B2,80B4,80B7,80BA,80BC,80BD,80BE,80BF,80C0,80C1,80C2,80C3,80C4,80C6,80CC,80CD,80CE,80D6,80D7,80D9,80DA,80DB,80DC,80DD,80DE,80E1,80E4,80E5,80E7,80E8,80E9,80EA,80EB,80EC,80ED,80EF,80F0,80F1,80F2,80F3,80F4,80F6,80F8,80FA,80FC,80FD,8102,8106,8109,810A,810D,810E,810F,8110,8111,8112,8113,8114,8116,8118,811A,811E,812C,812F,8131,8132,8136,8138,813E,8146,8148,814A,814B,814C,8150,8151,8153,8154,8155,8159,815A,8160,8165,8167,8169,816D,816E,8170,8171,8174,8179,817A,817B,817C,817D,817E,817F,8180,8182,8188,818A,818F,8191,8198,819B,819C,819D,81A3,81A6,81A8,81AA,81B3,81BA,81BB,81C0,81C1,81C2,81C3,81C6,81CA,81CC,81E3,81E7,81EA,81EC,81ED,81F3,81F4,81FB,81FC,81FE,8200,8201,8202,8204,8205,8206,820C,820D,8210,8212,8214,821B,821C,821E,821F,8221,8222,8223,8228,822A,822B,822C,822D,822F,8230,8231,8233,8234,8235,8236,8237,8238,8239,823B,823E,8244,8247,8249,824B,824F,8258,825A,825F,8268,826E,826F,8270,8272,8273,8274,8279,827A,827D,827E,827F,8282,8284,8288,828A,828B,828D,828E,828F,8291,8292,8297,8298,8299,829C,829D,829F,82A1,82A4,82A5,82A6,82A8,82A9,82AA,82AB,82AC,82AD,82AE,82AF,82B0,82B1,82B3,82B4,82B7,82B8,82B9,82BD,82BE,82C1,82C4,82C7,82C8,82CA,82CB,82CC,82CD,82CE,82CF,82D1,82D2,82D3,82D4,82D5,82D7,82D8,82DB,82DC,82DE,82DF,82E0,82E1,82E3,82E4,82E5,82E6,82EB,82EF,82F1,82F4,82F7,82F9,82FB,8301,8302,8303,8304,8305,8306,8307,8308,8309,830C,830E,830F,8311,8314,8315,8317,831A,831B,831C,8327,8328,832B,832C,832D,832F,8331,8333,8334,8335,8336,8338,8339,833A,833C,8340,8343,8346,8347,8349,834F,8350,8351,8352,8354,835A,835B,835C,835E,835F,8360,8361,8363,8364,8365,8366,8367,8368,8369,836A,836B,836C,836D,836E,836F,8377,8378,837B,837C,837D,8385,8386,8389,838E,8392,8393,8398,839B,839C,839E,83A0,83A8,83A9,83AA,83AB,83B0,83B1,83B2,83B3,83B4,83B6,83B7,83B8,83B9,83BA,83BC,83BD,83C0,83C1,83C5,83C7,83CA,83CC,83CF,83D4,83D6,83D8,83DC,83DD,83DF,83E0,83E1,83E5,83E9,83EA,83F0,83F1,83F2,83F8,83F9,83FD,8401,8403,8404,8406,840B,840C,840D,840E,840F,8411,8418,841C,841D,8424,8425,8426,8427,8428,8431,8438,843C,843D,8446,8451,8457,8459,845A,845B,845C,8461,8463,8469,846B,846C,846D,8471,8473,8475,8476,8478,847A,8482,8487,8488,8489,848B,848C,848E,8497,8499,849C,84A1,84AF,84B2,84B4,84B8,84B9,84BA,84BD,84BF,84C1,84C4,84C9,84CA,84CD,84D0,84D1,84D3,84D6,84DD,84DF,84E0,84E3,84E5,84E6,84EC,84F0,84FC,84FF,850C,8511,8513,8517,851A,851F,8521,852B,852C,8537,8538,8539,853A,853B,853C,853D,8543,8548,8549,854A,8556,8559,855E,8564,8568,8572,8574,8579,857A,857B,857E,8584,8585,8587,858F,859B,859C,85A4,85A8,85AA,85AE,85AF,85B0,85B7,85B9,85C1,85C9,85CF,85D0,85D3,85D5,85DC,85E4,85E9,85FB,85FF,8605,8611,8616,8627,8629,8638,863C,864D,864E,864F,8650,8651,8654,865A,865E,8662,866B,866C,866E,8671,8679,867A,867B,867C,867D,867E,867F,8680,8681,8682,868A,868B,868C,868D,8693,8695,869C,869D,86A3,86A4,86A7,86A8,86A9,86AA,86AC,86AF,86B0,86B1,86B4,86B5,86B6,86BA,86C0,86C4,86C6,86C7,86C9,86CA,86CB,86CE,86CF,86D0,86D1,86D4,86D8,86D9,86DB,86DE,86DF,86E4,86E9,86ED,86EE,86F0,86F1,86F2,86F3,86F4,86F8,86F9,86FE,8700,8702,8703,8707,8708,8709,870A,870D,8712,8713,8715,8717,8718,871A,871C,871E,8721,8722,8723,8725,8729,872E,8731,8734,8737,873B,873E,873F,8747,8748,8749,874C,874E,8753,8757,8759,8760,8763,8764,8765,876E,8770,8774,8776,877B,877C,877D,877E,8782,8783,8785,8788,878B,878D,8793,8797,879F,87A8,87AB,87AC,87AD,87AF,87B3,87B5,87BA,87BD,87C0,87C6,87CA,87CB,87D1,87D2,87D3,87DB,87E0,87E5,87EA,87EE,87F9,87FE,8803,880A,8813,8815,8816,881B,8821,8822,8832,8839,883C,8840,8844,8845,884C,884D,8854,8857,8859,8861,8862,8863,8864,8865,8868,8869,886B,886C,886E,8870,8872,8877,887D,887E,887F,8881,8882,8884,8885,8888,888B,888D,8892,8896,889C,88A2,88A4,88AB,88AD,88B1,88B7,88BC,88C1,88C2,88C5,88C6,88C9,88CE,88D2,88D4,88D5,88D8,88D9,88DF,88E2,88E3,88E4,88E5,88E8,88F0,88F1,88F3,88F4,88F8,88F9,88FC,88FE,8902,890A,8910,8912,8913,8919,891A,891B,8921,8925,892A,892B,8930,8934,8936,8941,8944,895E,895F,8966,897B,897F,8981,8983,8986,89C1,89C2,89C4,89C5,89C6,89C7,89C8,89C9,89CA,89CB,89CC,89CE,89CF,89D0,89D1,89D2,89D6,89DA,89DC,89DE,89E3,89E5,89E6,89EB,89EF,89F3,8A00,8A07,8A3E,8A48,8A79,8A89,8A8A,8A93,8B07,8B26,8B66,8B6C,8BA0,8BA1,8BA2,8BA3,8BA4,8BA5,8BA6,8BA7,8BA8,8BA9,8BAA,8BAB,8BAD,8BAE,8BAF,8BB0,8BB2,8BB3,8BB4,8BB5,8BB6,8BB7,8BB8,8BB9,8BBA,8BBC,8BBD,8BBE,8BBF,8BC0,8BC1,8BC2,8BC3,8BC4,8BC5,8BC6,8BC8,8BC9,8BCA,8BCB,8BCC,8BCD,8BCE,8BCF,8BD1,8BD2,8BD3,8BD4,8BD5,8BD6,8BD7,8BD8,8BD9,8BDA,8BDB,8BDC,8BDD,8BDE,8BDF,8BE0,8BE1,8BE2,8BE3,8BE4,8BE5,8BE6,8BE7,8BE8,8BE9,8BEB,8BEC,8BED,8BEE,8BEF,8BF0,8BF1,8BF2,8BF3,8BF4,8BF5,8BF6,8BF7,8BF8,8BF9,8BFA,8BFB,8BFC,8BFD,8BFE,8BFF,8C00,8C01,8C02,8C03,8C04,8C05,8C06,8C07,8C08,8C0A,8C0B,8C0C,8C0D,8C0E,8C0F,8C10,8C11,8C12,8C13,8C14,8C15,8C16,8C17,8C18,8C19,8C1A,8C1B,8C1C,8C1D,8C1F,8C20,8C21,8C22,8C23,8C24,8C25,8C26,8C27,8C28,8C29,8C2A,8C2B,8C2C,8C2D,8C2E,8C2F,8C30,8C31,8C32,8C33,8C34,8C35,8C36,8C37,8C41,8C46,8C47,8C49,8C4C,8C55,8C5A,8C61,8C62,8C6A,8C6B,8C73,8C78,8C79,8C7A,8C82,8C85,8C89,8C8A,8C8C,8C94,8C98,8D1D,8D1E,8D1F,8D21,8D22,8D23,8D24,8D25,8D26,8D27,8D28,8D29,8D2A,8D2B,8D2C,8D2D,8D2E,8D2F,8D30,8D31,8D32,8D33,8D34,8D35,8D36,8D37,8D38,8D39,8D3A,8D3B,8D3C,8D3D,8D3E,8D3F,8D40,8D41,8D42,8D43,8D44,8D45,8D46,8D47,8D48,8D49,8D4A,8D4B,8D4C,8D4D,8D4E,8D4F,8D50,8D53,8D54,8D55,8D56,8D58,8D59,8D5A,8D5B,8D5C,8D5D,8D5E,8D60,8D61,8D62,8D63,8D64,8D66,8D67,8D6B,8D6D,8D70,8D73,8D74,8D75,8D76,8D77,8D81,8D84,8D85,8D8A,8D8B,8D91,8D94,8D9F,8DA3,8DB1,8DB3,8DB4,8DB5,8DB8,8DBA,8DBC,8DBE,8DBF,8DC3,8DC4,8DC6,8DCB,8DCC,8DCE,8DCF,8DD1,8DD6,8DD7,8DDA,8DDB,8DDD,8DDE,8DDF,8DE3,8DE4,8DE8,8DEA,8DEB,8DEC,8DEF,8DF3,8DF5,8DF7,8DF8,8DF9,8DFA,8DFB,8DFD,8E05,8E09,8E0A,8E0C,8E0F,8E14,8E1D,8E1E,8E1F,8E22,8E23,8E29,8E2A,8E2C,8E2E,8E2F,8E31,8E35,8E39,8E3A,8E3D,8E40,8E41,8E42,8E44,8E47,8E48,8E49,8E4A,8E4B,8E51,8E52,8E59,8E66,8E69,8E6C,8E6D,8E6F,8E70,8E72,8E74,8E76,8E7C,8E7F,8E81,8E85,8E87,8E8F,8E90,8E94,8E9C,8E9E,8EAB,8EAC,8EAF,8EB2,8EBA,8ECE,8F66,8F67,8F68,8F69,8F6B,8F6C,8F6D,8F6E,8F6F,8F70,8F71,8F72,8F73,8F74,8F75,8F76,8F77,8F78,8F79,8F7A,8F7B,8F7C,8F7D,8F7E,8F7F,8F81,8F82,8F83,8F84,8F85,8F86,8F87,8F88,8F89,8F8A,8F8B,8F8D,8F8E,8F8F,8F90,8F91,8F93,8F94,8F95,8F96,8F97,8F98,8F99,8F9A,8F9B,8F9C,8F9E,8F9F,8FA3,8FA8,8FA9,8FAB,8FB0,8FB1,8FB6,8FB9,8FBD,8FBE,8FC1,8FC2,8FC4,8FC5,8FC7,8FC8,8FCE,8FD0,8FD1,8FD3,8FD4,8FD5,8FD8,8FD9,8FDB,8FDC,8FDD,8FDE,8FDF,8FE2,8FE4,8FE5,8FE6,8FE8,8FE9,8FEA,8FEB,8FED,8FEE,8FF0,8FF3,8FF7,8FF8,8FF9,8FFD,9000,9001,9002,9003,9004,9005,9006,9009,900A,900B,900D,900F,9010,9011,9012,9014,9016,9017,901A,901B,901D,901E,901F,9020,9021,9022,9026,902D,902E,902F,9035,9036,9038,903B,903C,903E,9041,9042,9044,9047,904D,904F,9050,9051,9052,9053,9057,9058,905B,9062,9063,9065,9068,906D,906E,9074,9075,907D,907F,9080,9082,9083,9088,908B,9091,9093,9095,9097,9099,909B,909D,90A1,90A2,90A3,90A6,90AA,90AC,90AE,90AF,90B0,90B1,90B3,90B4,90B5,90B6,90B8,90B9,90BA,90BB,90BE,90C1,90C4,90C5,90C7,90CA,90CE,90CF,90D0,90D1,90D3,90D7,90DB,90DC,90DD,90E1,90E2,90E6,90E7,90E8,90EB,90ED,90EF,90F4,90F8,90FD,90FE,9102,9104,9119,911E,9122,9123,912F,9131,9139,9143,9146,9149,914A,914B,914C,914D,914E,914F,9150,9152,9157,915A,915D,915E,9161,9162,9163,9164,9165,9169,916A,916C,916E,916F,9170,9171,9172,9174,9175,9176,9177,9178,9179,917D,917E,917F,9185,9187,9189,918B,918C,918D,9190,9191,9192,919A,919B,91A2,91A3,91AA,91AD,91AE,91AF,91B4,91B5,91BA,91C7,91C9,91CA,91CC,91CD,91CE,91CF,91D1,91DC,9274,928E,92AE,92C8,933E,936A,938F,93CA,93D6,943E,946B,9485,9486,9487,9488,9489,948A,948B,948C,948D,948E,948F,9490,9492,9493,9494,9495,9497,9499,949A,949B,949C,949D,949E,949F,94A0,94A1,94A2,94A3,94A4,94A5,94A6,94A7,94A8,94A9,94AA,94AB,94AC,94AD,94AE,94AF,94B0,94B1,94B2,94B3,94B4,94B5,94B6,94B7,94B8,94B9,94BA,94BB,94BC,94BD,94BE,94BF,94C0,94C1,94C2,94C3,94C4,94C5,94C6,94C8,94C9,94CA,94CB,94CC,94CD,94CE,94D0,94D1,94D2,94D5,94D6,94D7,94D8,94D9,94DB,94DC,94DD,94DE,94DF,94E0,94E1,94E2,94E3,94E4,94E5,94E7,94E8,94E9,94EA,94EB,94EC,94ED,94EE,94EF,94F0,94F1,94F2,94F3,94F4,94F5,94F6,94F7,94F8,94F9,94FA,94FC,94FD,94FE,94FF,9500,9501,9502,9503,9504,9505,9506,9507,9508,9509,950A,950B,950C,950D,950E,950F,9510,9511,9512,9513,9514,9515,9516,9517,9518,9519,951A,951B,951D,951E,951F,9521,9522,9523,9524,9525,9526,9528,9529,952A,952B,952C,952D,952E,952F,9530,9531,9532,9534,9535,9536,9537,9538,9539,953A,953B,953C,953E,953F,9540,9541,9542,9544,9545,9546,9547,9549,954A,954C,954D,954E,954F,9550,9551,9552,9553,9554,9556,9557,9558,9559,955B,955C,955D,955E,955F,9561,9562,9563,9564,9565,9566,9567,9568,9569,956A,956B,956C,956D,956F,9570,9571,9572,9573,9576,957F,95E8,95E9,95EA,95EB,95ED,95EE,95EF,95F0,95F1,95F2,95F3,95F4,95F5,95F6,95F7,95F8,95F9,95FA,95FB,95FC,95FD,95FE,9600,9601,9602,9603,9604,9605,9606,9608,9609,960A,960B,960C,960D,960E,960F,9610,9611,9612,9614,9615,9616,9617,9619,961A,961C,961D,961F,9621,9622,962A,962E,9631,9632,9633,9634,9635,9636,963B,963C,963D,963F,9640,9642,9644,9645,9646,9647,9648,9649,964B,964C,964D,9650,9654,9655,965B,965F,9661,9662,9664,9667,9668,9669,966A,966C,9672,9674,9675,9676,9677,9685,9686,9688,968B,968D,968F,9690,9694,9697,9698,9699,969C,96A7,96B0,96B3,96B6,96B9,96BC,96BD,96BE,96C0,96C1,96C4,96C5,96C6,96C7,96C9,96CC,96CD,96CE,96CF,96D2,96D5,96E0,96E8,96E9,96EA,96EF,96F3,96F6,96F7,96F9,96FE,9700,9701,9704,9706,9707,9708,9709,970D,970E,970F,9713,9716,971C,971E,972A,972D,9730,9732,9738,9739,973E,9752,9753,9756,9759,975B,975E,9760,9761,9762,9765,9769,9773,9774,9776,977C,9785,978B,978D,9791,9792,9794,9798,97A0,97A3,97AB,97AD,97AF,97B2,97B4,97E6,97E7,97E9,97EA,97EB,97EC,97ED,97F3,97F5,97F6,9875,9876,9877,9878,9879,987A,987B,987C,987D,987E,987F,9880,9881,9882,9883,9884,9885,9886,9887,9888,9889,988A,988C,988D,988F,9890,9891,9893,9894,9896,9897,9898,989A,989B,989C,989D,989E,989F,98A0,98A1,98A2,98A4,98A5,98A6,98A7,98CE,98D1,98D2,98D3,98D5,98D8,98D9,98DA,98DE,98DF,98E7,98E8,990D,9910,992E,9954,9955,9963,9965,9967,9968,9969,996A,996B,996C,996D,996E,996F,9970,9971,9972,9974,9975,9976,9977,997A,997C,997D,997F,9980,9981,9984,9985,9986,9987,9988,998A,998B,998D,998F,9990,9991,9992,9993,9994,9995,9996,9997,9998,9999,99A5,99A8,9A6C,9A6D,9A6E,9A6F,9A70,9A71,9A73,9A74,9A75,9A76,9A77,9A78,9A79,9A7A,9A7B,9A7C,9A7D,9A7E,9A7F,9A80,9A81,9A82,9A84,9A85,9A86,9A87,9A88,9A8A,9A8B,9A8C,9A8F,9A90,9A91,9A92,9A93,9A96,9A97,9A98,9A9A,9A9B,9A9C,9A9D,9A9E,9A9F,9AA0,9AA1,9AA2,9AA3,9AA4,9AA5,9AA7,9AA8,9AB0,9AB1,9AB6,9AB7,9AB8,9ABA,9ABC,9AC0,9AC1,9AC2,9AC5,9ACB,9ACC,9AD1,9AD3,9AD8,9ADF,9AE1,9AE6,9AEB,9AED,9AEF,9AF9,9AFB,9B03,9B08,9B0F,9B13,9B1F,9B23,9B2F,9B32,9B3B,9B3C,9B41,9B42,9B43,9B44,9B45,9B47,9B48,9B49,9B4D,9B4F,9B51,9B54,9C7C,9C7F,9C81,9C82,9C85,9C86,9C87,9C88,9C8B,9C8D,9C8E,9C90,9C91,9C92,9C94,9C95,9C9A,9C9B,9C9C,9C9E,9C9F,9CA0,9CA1,9CA2,9CA3,9CA4,9CA5,9CA6,9CA7,9CA8,9CA9,9CAB,9CAD,9CAE,9CB0,9CB1,9CB2,9CB3,9CB4,9CB5,9CB6,9CB7,9CB8,9CBA,9CBB,9CBC,9CBD,9CC3,9CC4,9CC5,9CC6,9CC7,9CCA,9CCB,9CCC,9CCD,9CCE,9CCF,9CD0,9CD3,9CD4,9CD5,9CD6,9CD7,9CD8,9CD9,9CDC,9CDD,9CDE,9CDF,9CE2,9E1F,9E20,9E21,9E22,9E23,9E25,9E26,9E28,9E29,9E2A,9E2B,9E2C,9E2D,9E2F,9E31,9E32,9E33,9E35,9E36,9E37,9E38,9E39,9E3A,9E3D,9E3E,9E3F,9E41,9E42,9E43,9E44,9E45,9E46,9E47,9E48,9E49,9E4A,9E4B,9E4C,9E4E,9E4F,9E51,9E55,9E57,9E58,9E5A,9E5B,9E5C,9E5E,9E63,9E64,9E66,9E67,9E68,9E69,9E6A,9E6B,9E6C,9E6D,9E70,9E71,9E73,9E7E,9E7F,9E82,9E87,9E88,9E8B,9E92,9E93,9E9D,9E9F,9EA6,9EB4,9EB8,9EBB,9EBD,9EBE,9EC4,9EC9,9ECD,9ECE,9ECF,9ED1,9ED4,9ED8,9EDB,9EDC,9EDD,9EDF,9EE0,9EE2,9EE5,9EE7,9EE9,9EEA,9EEF,9EF9,9EFB,9EFC,9EFE,9F0B,9F0D,9F0E,9F10,9F13,9F17,9F19,9F20,9F22,9F2C,9F2F,9F37,9F39,9F3B,9F3D,9F3E,9F44,9F50,9F51,9F7F,9F80,9F83,9F84,9F85,9F86,9F87,9F88,9F89,9F8A,9F8B,9F8C,9F99,9F9A,9F9B,9F9F,9FA0,FF01,FF02,FF03,FF04,FF05,FF06,FF07,FF08,FF09,FF0A,FF0B,FF0C,FF0D,FF0E,FF0F,FF10,FF11,FF12,FF13,FF14,FF15,FF16,FF17,FF18,FF19,FF1A,FF1B,FF1C,FF1D,FF1E,FF1F,FF20,FF21,FF22,FF23,FF24,FF25,FF26,FF27,FF28,FF29,FF2A,FF2B,FF2C,FF2D,FF2E,FF2F,FF30,FF31,FF32,FF33,FF34,FF35,FF36,FF37,FF38,FF39,FF3A,FF3B,FF3C,FF3D,FF3E,FF3F,FF40,FF41,FF42,FF43,FF44,FF45,FF46,FF47,FF48,FF49,FF4A,FF4B,FF4C,FF4D,FF4E,FF4F,FF50,FF51,FF52,FF53,FF54,FF55,FF56,FF57,FF58,FF59,FF5A,FF5B,FF5C,FF5D,FF5E,FFE0,FFE1,FFE3,FFE5"
			},
			_ansicode: function() {
				return "A1E8,A1EC,A1A7,A1E3,A1C0,A1A4,A1C1,A8A4,A8A2,A8A8,A8A6,A8BA,A8AC,A8AA,A8B0,A8AE,A1C2,A8B4,A8B2,A8B9,A8A1,A8A5,A8A7,A8A9,A8AD,A8B1,A8A3,A8AB,A8AF,A8B3,A8B5,A8B6,A8B7,A8B8,A1A6,A1A5,A6A1,A6A2,A6A3,A6A4,A6A5,A6A6,A6A7,A6A8,A6A9,A6AA,A6AB,A6AC,A6AD,A6AE,A6AF,A6B0,A6B1,A6B2,A6B3,A6B4,A6B5,A6B6,A6B7,A6B8,A6C1,A6C2,A6C3,A6C4,A6C5,A6C6,A6C7,A6C8,A6C9,A6CA,A6CB,A6CC,A6CD,A6CE,A6CF,A6D0,A6D1,A6D2,A6D3,A6D4,A6D5,A6D6,A6D7,A6D8,A7A7,A7A1,A7A2,A7A3,A7A4,A7A5,A7A6,A7A8,A7A9,A7AA,A7AB,A7AC,A7AD,A7AE,A7AF,A7B0,A7B1,A7B2,A7B3,A7B4,A7B5,A7B6,A7B7,A7B8,A7B9,A7BA,A7BB,A7BC,A7BD,A7BE,A7BF,A7C0,A7C1,A7D1,A7D2,A7D3,A7D4,A7D5,A7D6,A7D8,A7D9,A7DA,A7DB,A7DC,A7DD,A7DE,A7DF,A7E0,A7E1,A7E2,A7E3,A7E4,A7E5,A7E6,A7E7,A7E8,A7E9,A7EA,A7EB,A7EC,A7ED,A7EE,A7EF,A7F0,A7F1,A7D7,A1AA,A1AC,A1AE,A1AF,A1B0,A1B1,A1AD,A1EB,A1E4,A1E5,A1F9,A1E6,A1ED,A2F1,A2F2,A2F3,A2F4,A2F5,A2F6,A2F7,A2F8,A2F9,A2FA,A2FB,A2FC,A1FB,A1FC,A1FA,A1FD,A1CA,A1C7,A1C6,A1CC,A1D8,A1DE,A1CF,A1CE,A1C4,A1C5,A1C9,A1C8,A1D2,A1D3,A1E0,A1DF,A1C3,A1CB,A1D7,A1D6,A1D5,A1D9,A1D4,A1DC,A1DD,A1DA,A1DB,A1D1,A1CD,A1D0,A2D9,A2DA,A2DB,A2DC,A2DD,A2DE,A2DF,A2E0,A2E1,A2E2,A2C5,A2C6,A2C7,A2C8,A2C9,A2CA,A2CB,A2CC,A2CD,A2CE,A2CF,A2D0,A2D1,A2D2,A2D3,A2D4,A2D5,A2D6,A2D7,A2D8,A2B1,A2B2,A2B3,A2B4,A2B5,A2B6,A2B7,A2B8,A2B9,A2BA,A2BB,A2BC,A2BD,A2BE,A2BF,A2C0,A2C1,A2C2,A2C3,A2C4,A9A4,A9A5,A9A6,A9A7,A9A8,A9A9,A9AA,A9AB,A9AC,A9AD,A9AE,A9AF,A9B0,A9B1,A9B2,A9B3,A9B4,A9B5,A9B6,A9B7,A9B8,A9B9,A9BA,A9BB,A9BC,A9BD,A9BE,A9BF,A9C0,A9C1,A9C2,A9C3,A9C4,A9C5,A9C6,A9C7,A9C8,A9C9,A9CA,A9CB,A9CC,A9CD,A9CE,A9CF,A9D0,A9D1,A9D2,A9D3,A9D4,A9D5,A9D6,A9D7,A9D8,A9D9,A9DA,A9DB,A9DC,A9DD,A9DE,A9DF,A9E0,A9E1,A9E2,A9E3,A9E4,A9E5,A9E6,A9E7,A9E8,A9E9,A9EA,A9EB,A9EC,A9ED,A9EE,A9EF,A1F6,A1F5,A1F8,A1F7,A1F4,A1F3,A1F0,A1F2,A1F1,A1EF,A1EE,A1E2,A1E1,A1A1,A1A2,A1A3,A1A8,A1A9,A1B4,A1B5,A1B6,A1B7,A1B8,A1B9,A1BA,A1BB,A1BE,A1BF,A1FE,A1B2,A1B3,A1BC,A1BD,A4A1,A4A2,A4A3,A4A4,A4A5,A4A6,A4A7,A4A8,A4A9,A4AA,A4AB,A4AC,A4AD,A4AE,A4AF,A4B0,A4B1,A4B2,A4B3,A4B4,A4B5,A4B6,A4B7,A4B8,A4B9,A4BA,A4BB,A4BC,A4BD,A4BE,A4BF,A4C0,A4C1,A4C2,A4C3,A4C4,A4C5,A4C6,A4C7,A4C8,A4C9,A4CA,A4CB,A4CC,A4CD,A4CE,A4CF,A4D0,A4D1,A4D2,A4D3,A4D4,A4D5,A4D6,A4D7,A4D8,A4D9,A4DA,A4DB,A4DC,A4DD,A4DE,A4DF,A4E0,A4E1,A4E2,A4E3,A4E4,A4E5,A4E6,A4E7,A4E8,A4E9,A4EA,A4EB,A4EC,A4ED,A4EE,A4EF,A4F0,A4F1,A4F2,A4F3,A5A1,A5A2,A5A3,A5A4,A5A5,A5A6,A5A7,A5A8,A5A9,A5AA,A5AB,A5AC,A5AD,A5AE,A5AF,A5B0,A5B1,A5B2,A5B3,A5B4,A5B5,A5B6,A5B7,A5B8,A5B9,A5BA,A5BB,A5BC,A5BD,A5BE,A5BF,A5C0,A5C1,A5C2,A5C3,A5C4,A5C5,A5C6,A5C7,A5C8,A5C9,A5CA,A5CB,A5CC,A5CD,A5CE,A5CF,A5D0,A5D1,A5D2,A5D3,A5D4,A5D5,A5D6,A5D7,A5D8,A5D9,A5DA,A5DB,A5DC,A5DD,A5DE,A5DF,A5E0,A5E1,A5E2,A5E3,A5E4,A5E5,A5E6,A5E7,A5E8,A5E9,A5EA,A5EB,A5EC,A5ED,A5EE,A5EF,A5F0,A5F1,A5F2,A5F3,A5F4,A5F5,A5F6,A8C5,A8C6,A8C7,A8C8,A8C9,A8CA,A8CB,A8CC,A8CD,A8CE,A8CF,A8D0,A8D1,A8D2,A8D3,A8D4,A8D5,A8D6,A8D7,A8D8,A8D9,A8DA,A8DB,A8DC,A8DD,A8DE,A8DF,A8E0,A8E1,A8E2,A8E3,A8E4,A8E5,A8E6,A8E7,A8E8,A8E9,A2E5,A2E6,A2E7,A2E8,A2E9,A2EA,A2EB,A2EC,A2ED,A2EE,D2BB,B6A1,C6DF,CDF2,D5C9,C8FD,C9CF,CFC2,D8A2,B2BB,D3EB,D8A4,B3F3,D7A8,C7D2,D8A7,CAC0,C7F0,B1FB,D2B5,B4D4,B6AB,CBBF,D8A9,B6AA,C1BD,D1CF,C9A5,D8AD,B8F6,D1BE,E3DC,D6D0,B7E1,B4AE,C1D9,D8BC,CDE8,B5A4,CEAA,D6F7,C0F6,BED9,D8AF,C4CB,BEC3,D8B1,C3B4,D2E5,D6AE,CEDA,D5A7,BAF5,B7A6,C0D6,C6B9,C5D2,C7C7,B9D4,B3CB,D2D2,D8BF,BEC5,C6F2,D2B2,CFB0,CFE7,CAE9,D8C0,C2F2,C2D2,C8E9,C7AC,C1CB,D3E8,D5F9,CAC2,B6FE,D8A1,D3DA,BFF7,D4C6,BBA5,D8C1,CEE5,BEAE,D8A8,D1C7,D0A9,D8BD,D9EF,CDF6,BFBA,BDBB,BAA5,D2E0,B2FA,BAE0,C4B6,CFED,BEA9,CDA4,C1C1,C7D7,D9F1,D9F4,C8CB,D8E9,D2DA,CAB2,C8CA,D8EC,D8EA,D8C6,BDF6,C6CD,B3F0,D8EB,BDF1,BDE9,C8D4,B4D3,C2D8,B2D6,D7D0,CACB,CBFB,D5CC,B8B6,CFC9,D9DA,D8F0,C7AA,D8EE,B4FA,C1EE,D2D4,D8ED,D2C7,D8EF,C3C7,D1F6,D6D9,D8F2,D8F5,BCFE,BCDB,C8CE,B7DD,B7C2,C6F3,D8F8,D2C1,CEE9,BCBF,B7FC,B7A5,D0DD,D6DA,D3C5,BBEF,BBE1,D8F1,C9A1,CEB0,B4AB,D8F3,C9CB,D8F6,C2D7,D8F7,CEB1,D8F9,B2AE,B9C0,D9A3,B0E9,C1E6,C9EC,CBC5,CBC6,D9A4,B5E8,B5AB,CEBB,B5CD,D7A1,D7F4,D3D3,CCE5,BACE,D9A2,D9DC,D3E0,D8FD,B7F0,D7F7,D8FE,D8FA,D9A1,C4E3,D3B6,D8F4,D9DD,D8FB,C5E5,C0D0,D1F0,B0DB,BCD1,D9A6,D9A5,D9AC,D9AE,D9AB,CAB9,D9A9,D6B6,B3DE,D9A8,C0FD,CACC,D9AA,D9A7,D9B0,B6B1,B9A9,D2C0,CFC0,C2C2,BDC4,D5EC,B2E0,C7C8,BFEB,D9AD,D9AF,CEEA,BAEE,C7D6,B1E3,B4D9,B6ED,D9B4,BFA1,D9DE,C7CE,C0FE,D9B8,CBD7,B7FD,D9B5,D9B7,B1A3,D3E1,D9B9,D0C5,D9B6,D9B1,D9B2,C1A9,D9B3,BCF3,D0DE,B8A9,BEE3,D9BD,D9BA,B0B3,D9C2,D9C4,B1B6,D9BF,B5B9,BEF3,CCC8,BAF2,D2D0,D9C3,BDE8,B3AB,D9C5,BEEB,D9C6,D9BB,C4DF,D9BE,D9C1,D9C0,D5AE,D6B5,C7E3,D9C8,BCD9,D9CA,D9BC,D9CB,C6AB,D9C9,D7F6,CDA3,BDA1,D9CC,C5BC,CDB5,D9CD,D9C7,B3A5,BFFE,B8B5,C0FC,B0F8,B4F6,D9CE,D9CF,B4A2,D9D0,B4DF,B0C1,D9D1,C9B5,CFF1,D9D2,C1C5,D9D6,C9AE,D9D5,D9D4,D9D7,CBDB,BDA9,C6A7,D9D3,D9D8,D9D9,C8E5,C0DC,B6F9,D8A3,D4CA,D4AA,D0D6,B3E4,D5D7,CFC8,B9E2,BFCB,C3E2,B6D2,CDC3,D9EE,D9F0,B5B3,B6B5,BEA4,C8EB,C8AB,B0CB,B9AB,C1F9,D9E2,C0BC,B9B2,B9D8,D0CB,B1F8,C6E4,BEDF,B5E4,D7C8,D1F8,BCE6,CADE,BCBD,D9E6,D8E7,C4DA,B8D4,C8BD,B2E1,D4D9,C3B0,C3E1,DAA2,C8DF,D0B4,BEFC,C5A9,B9DA,DAA3,D4A9,DAA4,D9FB,B6AC,B7EB,B1F9,D9FC,B3E5,BEF6,BFF6,D2B1,C0E4,B6B3,D9FE,D9FD,BEBB,C6E0,D7BC,DAA1,C1B9,B5F2,C1E8,BCF5,B4D5,C1DD,C4FD,BCB8,B7B2,B7EF,D9EC,C6BE,BFAD,BBCB,B5CA,DBC9,D0D7,CDB9,B0BC,B3F6,BBF7,DBCA,BAAF,D4E4,B5B6,B5F3,D8D6,C8D0,B7D6,C7D0,D8D7,BFAF,DBBB,D8D8,D0CC,BBAE,EBBE,C1D0,C1F5,D4F2,B8D5,B4B4,B3F5,C9BE,C5D0,C5D9,C0FB,B1F0,D8D9,B9CE,B5BD,D8DA,D6C6,CBA2,C8AF,C9B2,B4CC,BFCC,B9F4,D8DB,D8DC,B6E7,BCC1,CCEA,CFF7,D8DD,C7B0,B9D0,BDA3,CCDE,C6CA,D8E0,D8DE,D8DF,B0FE,BEE7,CAA3,BCF4,B8B1,B8EE,D8E2,BDCB,D8E4,D8E3,C5FC,D8E5,D8E6,C1A6,C8B0,B0EC,B9A6,BCD3,CEF1,DBBD,C1D3,B6AF,D6FA,C5AC,BDD9,DBBE,DBBF,C0F8,BEA2,C0CD,DBC0,CAC6,B2AA,D3C2,C3E3,D1AB,DBC2,C0D5,DBC3,BFB1,C4BC,C7DA,DBC4,D9E8,C9D7,B9B4,CEF0,D4C8,B0FC,B4D2,D0D9,D9E9,DECB,D9EB,D8B0,BBAF,B1B1,B3D7,D8CE,D4D1,BDB3,BFEF,CFBB,D8D0,B7CB,D8D1,C6A5,C7F8,D2BD,D8D2,C4E4,CAAE,C7A7,D8A6,C9FD,CEE7,BBDC,B0EB,BBAA,D0AD,B1B0,D7E4,D7BF,B5A5,C2F4,C4CF,B2A9,B2B7,B1E5,DFB2,D5BC,BFA8,C2AC,D8D5,C2B1,D8D4,CED4,DAE0,CEC0,D8B4,C3AE,D3A1,CEA3,BCB4,C8B4,C2D1,BEED,D0B6,DAE1,C7E4,B3A7,B6F2,CCFC,C0FA,C0F7,D1B9,D1E1,D8C7,B2DE,C0E5,BAF1,D8C8,D4AD,CFE1,D8C9,D8CA,CFC3,B3F8,BEC7,D8CB,DBCC,C8A5,CFD8,C8FE,B2CE,D3D6,B2E6,BCB0,D3D1,CBAB,B7B4,B7A2,CAE5,C8A1,CADC,B1E4,D0F0,C5D1,DBC5,B5FE,BFDA,B9C5,BEE4,C1ED,DFB6,DFB5,D6BB,BDD0,D5D9,B0C8,B6A3,BFC9,CCA8,DFB3,CAB7,D3D2,D8CF,D2B6,BAC5,CBBE,CCBE,DFB7,B5F0,DFB4,D3F5,B3D4,B8F7,DFBA,BACF,BCAA,B5F5,CDAC,C3FB,BAF3,C0F4,CDC2,CFF2,DFB8,CFC5,C2C0,DFB9,C2F0,BEFD,C1DF,CDCC,D2F7,B7CD,DFC1,DFC4,B7F1,B0C9,B6D6,B7D4,BAAC,CCFD,BFD4,CBB1,C6F4,D6A8,DFC5,CEE2,B3B3,CEFC,B4B5,CEC7,BAF0,CEE1,D1BD,DFC0,B4F4,B3CA,B8E6,DFBB,C4C5,DFBC,DFBD,DFBE,C5BB,DFBF,DFC2,D4B1,DFC3,C7BA,CED8,C4D8,DFCA,DFCF,D6DC,DFC9,DFDA,CEB6,BAC7,DFCE,DFC8,C5DE,C9EB,BAF4,C3FC,BED7,DFC6,DFCD,C5D8,D5A6,BACD,BECC,D3BD,B8C0,D6E4,DFC7,B9BE,BFA7,C1FC,DFCB,DFCC,DFD0,DFDB,DFE5,DFD7,DFD6,D7C9,DFE3,DFE4,E5EB,D2A7,DFD2,BFA9,D4DB,BFC8,DFD4,CFCC,DFDD,D1CA,DFDE,B0A7,C6B7,DFD3,BAE5,B6DF,CDDB,B9FE,D4D5,DFDF,CFEC,B0A5,DFE7,DFD1,D1C6,DFD5,DFD8,DFD9,DFDC,BBA9,DFE0,DFE1,DFE2,DFE6,DFE8,D3B4,B8E7,C5B6,DFEA,C9DA,C1A8,C4C4,BFDE,CFF8,D5DC,DFEE,B2B8,BADF,DFEC,DBC1,D1E4,CBF4,B4BD,B0A6,DFF1,CCC6,DFF2,DFED,DFE9,DFEB,DFEF,DFF0,BBBD,DFF3,DFF4,BBA3,CADB,CEA8,E0A7,B3AA,E0A6,E0A1,DFFE,CDD9,DFFC,DFFA,BFD0,D7C4,C9CC,DFF8,B0A1,DFFD,DFFB,E0A2,E0A8,B7C8,C6A1,C9B6,C0B2,DFF5,C5BE,D8C4,DFF9,C4F6,E0A3,E0A4,E0A5,D0A5,E0B4,CCE4,E0B1,BFA6,E0AF,CEB9,E0AB,C9C6,C0AE,E0AE,BAED,BAB0,E0A9,DFF6,E0B3,E0B8,B4AD,E0B9,CFB2,BAC8,E0B0,D0FA,E0AC,D4FB,DFF7,C5E7,E0AD,D3F7,E0B6,E0B7,E0C4,D0E1,E0BC,E0C9,E0CA,E0BE,E0AA,C9A4,E0C1,E0B2,CAC8,E0C3,E0B5,CECB,CBC3,E0CD,E0C6,E0C2,E0CB,E0BA,E0BF,E0C0,E0C5,E0C7,E0C8,E0CC,E0BB,CBD4,E0D5,E0D6,E0D2,E0D0,BCCE,E0D1,B8C2,D8C5,D0EA,C2EF,E0CF,E0BD,E0D4,E0D3,E0D7,E0DC,E0D8,D6F6,B3B0,D7EC,CBBB,E0DA,CEFB,BAD9,E0E1,E0DD,D2AD,E0E2,E0DB,E0D9,E0DF,E0E0,E0DE,E0E4,C6F7,D8AC,D4EB,E0E6,CAC9,E0E5,B8C1,E0E7,E0E8,E0E9,E0E3,BABF,CCE7,E0EA,CFF9,E0EB,C8C2,BDC0,C4D2,E0EC,E0ED,C7F4,CBC4,E0EE,BBD8,D8B6,D2F2,E0EF,CDC5,B6DA,E0F1,D4B0,C0A7,B4D1,CEA7,E0F0,E0F2,B9CC,B9FA,CDBC,E0F3,C6D4,E0F4,D4B2,C8A6,E0F6,E0F5,E0F7,CDC1,CAA5,D4DA,DBD7,DBD9,DBD8,B9E7,DBDC,DBDD,B5D8,DBDA,DBDB,B3A1,DBDF,BBF8,D6B7,DBE0,BEF9,B7BB,DBD0,CCAE,BFB2,BBB5,D7F8,BFD3,BFE9,BCE1,CCB3,DBDE,B0D3,CEEB,B7D8,D7B9,C6C2,C0A4,CCB9,DBE7,DBE1,C6BA,DBE3,DBE8,C5F7,DBEA,DBE9,BFC0,DBE6,DBE5,B4B9,C0AC,C2A2,DBE2,DBE4,D0CD,DBED,C0DD,DBF2,B6E2,DBF3,DBD2,B9B8,D4AB,DBEC,BFD1,DBF0,DBD1,B5E6,DBEB,BFE5,DBEE,DBF1,DBF9,B9A1,B0A3,C2F1,B3C7,DBEF,DBF8,C6D2,DBF4,DBF5,DBF7,DBF6,DBFE,D3F2,B2BA,DBFD,DCA4,DBFB,DBFA,DBFC,C5E0,BBF9,DCA3,DCA5,CCC3,B6D1,DDC0,DCA1,DCA2,C7B5,B6E9,DCA7,DCA6,DCA9,B1A4,B5CC,BFB0,D1DF,B6C2,DCA8,CBFA,EBF3,CBDC,CBFE,CCC1,C8FB,DCAA,CCEE,DCAB,DBD3,DCAF,DCAC,BEB3,CAFB,DCAD,C9CA,C4B9,C7BD,DCAE,D4F6,D0E6,C4AB,B6D5,DBD4,B1DA,DBD5,DBD6,BABE,C8C0,CABF,C8C9,D7B3,C9F9,BFC7,BAF8,D2BC,E2BA,B4A6,B1B8,B8B4,CFC4,D9E7,CFA6,CDE2,D9ED,B6E0,D2B9,B9BB,E2B9,E2B7,B4F3,CCEC,CCAB,B7F2,D8B2,D1EB,BABB,CAA7,CDB7,D2C4,BFE4,BCD0,B6E1,DEC5,DEC6,DBBC,D1D9,C6E6,C4CE,B7EE,B7DC,BFFC,D7E0,C6F5,B1BC,DEC8,BDB1,CCD7,DECA,DEC9,B5EC,C9DD,B0C2,C5AE,C5AB,C4CC,BCE9,CBFD,BAC3,E5F9,C8E7,E5FA,CDFD,D7B1,B8BE,C2E8,C8D1,E5FB,B6CA,BCCB,D1FD,E6A1,C3EE,E6A4,E5FE,E6A5,CDD7,B7C1,E5FC,E5FD,E6A3,C4DD,E6A8,E6A7,C3C3,C6DE,E6AA,C4B7,E6A2,CABC,BDE3,B9C3,E6A6,D0D5,CEAF,E6A9,E6B0,D2A6,BDAA,E6AD,E6AF,C0D1,D2CC,BCA7,E6B1,D2F6,D7CB,CDFE,CDDE,C2A6,E6AB,E6AC,BDBF,E6AE,E6B3,E6B2,E6B6,E6B8,C4EF,C4C8,BEEA,C9EF,E6B7,B6F0,C3E4,D3E9,E6B4,E6B5,C8A2,E6BD,E6B9,C6C5,CDF1,E6BB,E6BC,BBE9,E6BE,E6BA,C0B7,D3A4,E6BF,C9F4,E6C3,E6C4,D0F6,C3BD,C3C4,E6C2,E6C1,E6C7,CFB1,EBF4,E6CA,E6C5,BCDE,C9A9,BCB5,CFD3,E6C8,E6C9,E6CE,E6D0,E6D1,E6CB,B5D5,E6CC,E6CF,C4DB,E6C6,E6CD,E6D2,E6D4,E6D3,E6D5,D9F8,E6D6,E6D7,D7D3,E6DD,E6DE,BFD7,D4D0,D7D6,B4E6,CBEF,E6DA,D8C3,D7CE,D0A2,C3CF,E6DF,BCBE,B9C2,E6DB,D1A7,BAA2,C2CF,D8AB,CAEB,E5EE,E6DC,B7F5,C8E6,C4F5,E5B2,C4FE,CBFC,E5B3,D5AC,D3EE,CAD8,B0B2,CBCE,CDEA,BAEA,E5B5,E5B4,D7DA,B9D9,D6E6,B6A8,CDF0,D2CB,B1A6,CAB5,B3E8,C9F3,BFCD,D0FB,CAD2,E5B6,BBC2,CFDC,B9AC,D4D7,BAA6,D1E7,CFFC,BCD2,E5B7,C8DD,BFED,B1F6,CBDE,BCC5,BCC4,D2FA,C3DC,BFDC,B8BB,C3C2,BAAE,D4A2,C7DE,C4AF,B2EC,B9D1,E5BB,C1C8,D5AF,E5BC,E5BE,B4E7,B6D4,CBC2,D1B0,B5BC,CAD9,B7E2,C9E4,BDAB,CEBE,D7F0,D0A1,C9D9,B6FB,E6D8,BCE2,B3BE,C9D0,E6D9,B3A2,DECC,D3C8,DECD,D2A2,DECE,BECD,DECF,CAAC,D2FC,B3DF,E5EA,C4E1,BEA1,CEB2,C4F2,BED6,C6A8,B2E3,BED3,C7FC,CCEB,BDEC,CEDD,CABA,C6C1,E5EC,D0BC,D5B9,E5ED,CAF4,CDC0,C2C5,E5EF,C2C4,E5F0,E5F8,CDCD,C9BD,D2D9,E1A8,D3EC,CBEA,C6F1,E1AC,E1A7,E1A9,E1AA,E1AF,B2ED,E1AB,B8DA,E1AD,E1AE,E1B0,B5BA,E1B1,E1B3,E1B8,D1D2,E1B6,E1B5,C1EB,E1B7,D4C0,E1B2,E1BA,B0B6,E1B4,BFF9,E1B9,E1BB,E1BE,E1BC,D6C5,CFBF,E1BD,E1BF,C2CD,B6EB,D3F8,C7CD,B7E5,BEFE,E1C0,E1C1,E1C7,B3E7,C6E9,B4DE,D1C2,E1C8,E1C6,E1C5,E1C3,E1C2,B1C0,D5B8,E1C4,E1CB,E1CC,E1CA,EFFA,E1D3,E1D2,C7B6,E1C9,E1CE,E1D0,E1D4,E1D1,E1CD,E1CF,E1D5,E1D6,E1D7,E1D8,E1DA,E1DB,CEA1,E7DD,B4A8,D6DD,D1B2,B3B2,B9A4,D7F3,C7C9,BEDE,B9AE,CED7,B2EE,DBCF,BCBA,D2D1,CBC8,B0CD,CFEF,D9E3,BDED,B1D2,CAD0,B2BC,CBA7,B7AB,CAA6,CFA3,E0F8,D5CA,E0FB,E0FA,C5C1,CCFB,C1B1,E0F9,D6E3,B2AF,D6C4,B5DB,B4F8,D6A1,CFAF,B0EF,E0FC,E1A1,B3A3,E0FD,E0FE,C3B1,C3DD,E1A2,B7F9,BBCF,E1A3,C4BB,E1A4,E1A5,E1A6,B4B1,B8C9,C6BD,C4EA,B2A2,D0D2,E7DB,BBC3,D3D7,D3C4,B9E3,E2CF,D7AF,C7EC,B1D3,B4B2,E2D1,D0F2,C2AE,E2D0,BFE2,D3A6,B5D7,E2D2,B5EA,C3ED,B8FD,B8AE,C5D3,B7CF,E2D4,E2D3,B6C8,D7F9,CDA5,E2D8,E2D6,CAFC,BFB5,D3B9,E2D5,E2D7,C1AE,C0C8,E2DB,E2DA,C0AA,C1CE,E2DC,E2DD,E2DE,DBC8,D1D3,CDA2,BDA8,DEC3,D8A5,BFAA,DBCD,D2EC,C6FA,C5AA,DEC4,B1D7,DFAE,CABD,DFB1,B9AD,D2FD,B8A5,BAEB,B3DA,B5DC,D5C5,C3D6,CFD2,BBA1,E5F3,E5F2,E5F4,CDE4,C8F5,B5AF,C7BF,E5F6,ECB0,E5E6,B9E9,B5B1,C2BC,E5E8,E5E7,E5E9,D2CD,E1EA,D0CE,CDAE,D1E5,B2CA,B1EB,B1F2,C5ED,D5C3,D3B0,E1DC,E1DD,D2DB,B3B9,B1CB,CDF9,D5F7,E1DE,BEB6,B4FD,E1DF,BADC,E1E0,BBB2,C2C9,E1E1,D0EC,CDBD,E1E2,B5C3,C5C7,E1E3,E1E4,D3F9,E1E5,D1AD,E1E6,CEA2,E1E7,B5C2,E1E8,BBD5,D0C4,E2E0,B1D8,D2E4,E2E1,BCC9,C8CC,E2E3,ECFE,ECFD,DFAF,E2E2,D6BE,CDFC,C3A6,E3C3,D6D2,E2E7,E2E8,D3C7,E2EC,BFEC,E2ED,E2E5,B3C0,C4EE,E2EE,D0C3,BAF6,E2E9,B7DE,BBB3,CCAC,CBCB,E2E4,E2E6,E2EA,E2EB,E2F7,E2F4,D4F5,E2F3,C5AD,D5FA,C5C2,B2C0,E2EF,E2F2,C1AF,CBBC,B5A1,E2F9,BCB1,E2F1,D0D4,D4B9,E2F5,B9D6,E2F6,C7D3,E2F0,D7DC,EDA1,E2F8,EDA5,E2FE,CAD1,C1B5,BBD0,BFD6,BAE3,CBA1,EDA6,EDA3,EDA2,BBD6,EDA7,D0F4,EDA4,BADE,B6F7,E3A1,B6B2,CCF1,B9A7,CFA2,C7A1,BFD2,B6F1,E2FA,E2FB,E2FD,E2FC,C4D5,E3A2,D3C1,E3A7,C7C4,CFA4,E3A9,BAB7,E3A8,BBDA,E3A3,E3A4,E3AA,E3A6,CEF2,D3C6,BBBC,D4C3,C4FA,EDA8,D0FC,E3A5,C3F5,E3AD,B1AF,E3B2,BCC2,E3AC,B5BF,C7E9,E3B0,BEAA,CDEF,BBF3,CCE8,E3AF,E3B1,CFA7,E3AE,CEA9,BBDD,B5EB,BEE5,B2D2,B3CD,B1B9,E3AB,B2D1,B5AC,B9DF,B6E8,CFEB,E3B7,BBCC,C8C7,D0CA,E3B8,B3EE,EDA9,D3FA,D3E4,EDAA,E3B9,D2E2,E3B5,D3DE,B8D0,E3B3,E3B6,B7DF,E3B4,C0A2,E3BA,D4B8,B4C8,E3BB,BBC5,C9F7,C9E5,C4BD,EDAB,C2FD,BBDB,BFAE,CEBF,E3BC,BFB6,B1EF,D4F7,E3BE,EDAD,E3BF,BAA9,EDAC,E3BD,E3C0,BAB6,B6AE,D0B8,B0C3,EDAE,EDAF,C0C1,E3C1,C5B3,E3C2,DCB2,EDB0,B8EA,CEEC,EAA7,D0E7,CAF9,C8D6,CFB7,B3C9,CED2,BDE4,E3DE,BBF2,EAA8,D5BD,C6DD,EAA9,EAAA,EAAC,EAAB,EAAE,EAAD,BDD8,EAAF,C2BE,B4C1,B4F7,BBA7,ECE6,ECE5,B7BF,CBF9,B1E2,ECE7,C9C8,ECE8,ECE9,CAD6,DED0,B2C5,D4FA,C6CB,B0C7,B4F2,C8D3,CDD0,BFB8,BFDB,C7A4,D6B4,C0A9,DED1,C9A8,D1EF,C5A4,B0E7,B3B6,C8C5,B0E2,B7F6,C5FA,B6F3,D5D2,B3D0,BCBC,B3AD,BEF1,B0D1,D2D6,CAE3,D7A5,CDB6,B6B6,BFB9,D5DB,B8A7,C5D7,DED2,BFD9,C2D5,C7C0,BBA4,B1A8,C5EA,C5FB,CCA7,B1A7,B5D6,C4A8,DED3,D1BA,B3E9,C3F2,B7F7,D6F4,B5A3,B2F0,C4B4,C4E9,C0AD,DED4,B0E8,C5C4,C1E0,B9D5,BEDC,CDD8,B0CE,CDCF,DED6,BED0,D7BE,DED5,D5D0,B0DD,C4E2,C2A3,BCF0,D3B5,C0B9,C5A1,B2A6,D4F1,C0A8,CAC3,DED7,D5FC,B9B0,C8AD,CBA9,DED9,BFBD,C6B4,D7A7,CAB0,C4C3,B3D6,B9D2,D6B8,EAFC,B0B4,BFE6,CCF4,CDDA,D6BF,C2CE,CECE,CCA2,D0AE,C4D3,B5B2,DED8,D5F5,BCB7,BBD3,B0A4,C5B2,B4EC,D5F1,EAFD,DEDA,CDA6,CDEC,CEE6,DEDC,CDB1,C0A6,D7BD,DEDB,B0C6,BAB4,C9D3,C4F3,BEE8,B2B6,C0CC,CBF0,BCF1,BBBB,B5B7,C5F5,DEE6,DEE3,BEDD,DEDF,B4B7,BDDD,DEE0,C4ED,CFC6,B5E0,B6DE,CADA,B5F4,DEE5,D5C6,DEE1,CCCD,C6FE,C5C5,D2B4,BEF2,C2D3,CCBD,B3B8,BDD3,BFD8,CDC6,D1DA,B4EB,DEE4,DEDD,DEE7,EAFE,C2B0,DEE2,D6C0,B5A7,B2F4,DEE8,DEF2,DEED,DEF1,C8E0,D7E1,DEEF,C3E8,CCE1,B2E5,D2BE,DEEE,DEEB,CED5,B4A7,BFAB,BEBE,BDD2,DEE9,D4AE,DEDE,DEEA,C0BF,DEEC,B2F3,B8E9,C2A7,BDC1,DEF5,DEF8,B2AB,B4A4,B4EA,C9A6,DEF6,CBD1,B8E3,DEF7,DEFA,DEF9,CCC2,B0E1,B4EE,E5BA,D0AF,B2EB,EBA1,DEF4,C9E3,DEF3,B0DA,D2A1,B1F7,CCAF,DEF0,CBA4,D5AA,DEFB,B4DD,C4A6,DEFD,C3FE,C4A1,DFA1,C1CC,DEFC,BEEF,C6B2,B3C5,C8F6,CBBA,DEFE,DFA4,D7B2,B3B7,C1C3,C7CB,B2A5,B4E9,D7AB,C4EC,DFA2,DFA3,DFA5,BAB3,DFA6,C0DE,C9C3,B2D9,C7E6,DFA7,C7DC,DFA8,EBA2,CBD3,DFAA,DFA9,B2C1,C5CA,DFAB,D4DC,C8C1,DFAC,BEF0,DFAD,D6A7,EAB7,EBB6,CAD5,D8FC,B8C4,B9A5,B7C5,D5FE,B9CA,D0A7,F4CD,B5D0,C3F4,BEC8,EBB7,B0BD,BDCC,C1B2,B1D6,B3A8,B8D2,C9A2,B6D8,EBB8,BEB4,CAFD,C7C3,D5FB,B7F3,CEC4,D5AB,B1F3,ECB3,B0DF,ECB5,B6B7,C1CF,F5FA,D0B1,D5E5,CED3,BDEF,B3E2,B8AB,D5B6,EDBD,B6CF,CBB9,D0C2,B7BD,ECB6,CAA9,C5D4,ECB9,ECB8,C2C3,ECB7,D0FD,ECBA,ECBB,D7E5,ECBC,ECBD,C6EC,CEDE,BCC8,C8D5,B5A9,BEC9,D6BC,D4E7,D1AE,D0F1,EAB8,EAB9,EABA,BAB5,CAB1,BFF5,CDFA,EAC0,B0BA,EABE,C0A5,EABB,B2FD,C3F7,BBE8,D2D7,CEF4,EABF,EABC,EAC3,D0C7,D3B3,B4BA,C3C1,D7F2,D5D1,CAC7,EAC5,EAC4,EAC7,EAC6,D6E7,CFD4,EACB,BBCE,BDFA,C9CE,EACC,C9B9,CFFE,EACA,D4CE,EACD,EACF,CDED,EAC9,EACE,CEEE,BBDE,B3BF,C6D5,BEB0,CEFA,C7E7,BEA7,EAD0,D6C7,C1C0,D4DD,EAD1,CFBE,EAD2,CAEE,C5AF,B0B5,EAD4,EAD3,F4DF,C4BA,B1A9,E5DF,EAD5,CAEF,EAD6,EAD7,C6D8,EAD8,EAD9,D4BB,C7FA,D2B7,B8FC,EAC2,B2DC,C2FC,D4F8,CCE6,D7EE,D4C2,D3D0,EBC3,C5F3,B7FE,EBD4,CBB7,EBDE,C0CA,CDFB,B3AF,C6DA,EBFC,C4BE,CEB4,C4A9,B1BE,D4FD,CAF5,D6EC,C6D3,B6E4,BBFA,D0E0,C9B1,D4D3,C8A8,B8CB,E8BE,C9BC,E8BB,C0EE,D0D3,B2C4,B4E5,E8BC,D5C8,B6C5,E8BD,CAF8,B8DC,CCF5,C0B4,D1EE,E8BF,E8C2,BABC,B1AD,BDDC,EABD,E8C3,E8C6,E8CB,E8CC,CBC9,B0E5,BCAB,B9B9,E8C1,CDF7,E8CA,CEF6,D5ED,C1D6,E8C4,C3B6,B9FB,D6A6,E8C8,CAE0,D4E6,E8C0,E8C5,E8C7,C7B9,B7E3,E8C9,BFDD,E8D2,E8D7,E8D5,BCDC,BCCF,E8DB,E8DE,E8DA,B1FA,B0D8,C4B3,B8CC,C6E2,C8BE,C8E1,E8CF,E8D4,E8D6,B9F1,E8D8,D7F5,C4FB,E8DC,B2E9,E8D1,BCED,BFC2,E8CD,D6F9,C1F8,B2F1,E8DF,CAC1,E8D9,D5A4,B1EA,D5BB,E8CE,E8D0,B6B0,E8D3,E8DD,C0B8,CAF7,CBA8,C6DC,C0F5,E8E9,D0A3,E8F2,D6EA,E8E0,E8E1,D1F9,BACB,B8F9,B8F1,D4D4,E8EF,E8EE,E8EC,B9F0,CCD2,E8E6,CEA6,BFF2,B0B8,E8F1,E8F0,D7C0,E8E4,CDA9,C9A3,BBB8,BDDB,E8EA,E8E2,E8E3,E8E5,B5B5,E8E7,C7C5,E8EB,E8ED,BDB0,D7AE,E8F8,E8F5,CDB0,E8F6,C1BA,E8E8,C3B7,B0F0,E8F4,E8F7,B9A3,C9D2,C3CE,CEE0,C0E6,CBF3,CCDD,D0B5,CAE1,E8F3,BCEC,E8F9,C3DE,C6E5,B9F7,B0F4,D7D8,BCAC,C5EF,CCC4,E9A6,C9AD,E9A2,C0E2,BFC3,E8FE,B9D7,E8FB,E9A4,D2CE,E9A3,D6B2,D7B5,E9A7,BDB7,E8FC,E8FD,E9A1,CDD6,D2AC,E9B2,E9A9,B4AA,B4BB,E9AB,D0A8,E9A5,B3FE,E9AC,C0E3,E9AA,E9B9,E9B8,E9AE,E8FA,E9A8,BFAC,E9B1,E9BA,C2A5,E9AF,B8C5,E9AD,D3DC,E9B4,E9B5,E9B7,E9C7,C0C6,E9C5,E9B0,E9BB,B0F1,E9BC,D5A5,E9BE,E9BF,E9C1,C1F1,C8B6,E9BD,E9C2,E9C3,E9B3,E9B6,BBB1,E9C0,BCF7,E9C4,E9C6,E9CA,E9CE,B2DB,E9C8,B7AE,E9CB,E9CC,D5C1,C4A3,E9D8,BAE1,E9C9,D3A3,E9D4,E9D7,E9D0,E9CF,C7C1,E9D2,E9D9,B3C8,E9D3,CFF0,E9CD,B3F7,E9D6,E9DA,CCB4,CFAD,E9D5,E9DC,E9DB,E9DE,E9D1,E9DD,E9DF,C3CA,C7B7,B4CE,BBB6,D0C0,ECA3,C5B7,D3FB,ECA4,ECA5,C6DB,BFEE,ECA6,ECA7,D0AA,C7B8,B8E8,ECA8,D6B9,D5FD,B4CB,B2BD,CEE4,C6E7,CDE1,B4F5,CBC0,BCDF,E9E2,E9E3,D1EA,E9E5,B4F9,E9E4,D1B3,CAE2,B2D0,E9E8,E9E6,E9E7,D6B3,E9E9,E9EA,E9EB,E9EC,ECAF,C5B9,B6CE,D2F3,B5EE,BBD9,ECB1,D2E3,CEE3,C4B8,C3BF,B6BE,D8B9,B1C8,B1CF,B1D1,C5FE,B1D0,C3AB,D5B1,EBA4,BAC1,CCBA,EBA5,EBA7,EBA8,EBA6,EBA9,EBAB,EBAA,EBAC,CACF,D8B5,C3F1,C3A5,C6F8,EBAD,C4CA,EBAE,EBAF,EBB0,B7D5,B7FA,EBB1,C7E2,EBB3,BAA4,D1F5,B0B1,EBB2,EBB4,B5AA,C2C8,C7E8,EBB5,CBAE,E3DF,D3C0,D9DB,CDA1,D6AD,C7F3,D9E0,BBE3,BABA,E3E2,CFAB,E3E0,C9C7,BAB9,D1B4,E3E1,C8EA,B9AF,BDAD,B3D8,CEDB,CCC0,E3E8,E3E9,CDF4,CCAD,BCB3,E3EA,E3EB,D0DA,C6FB,B7DA,C7DF,D2CA,CED6,E3E4,E3EC,C9F2,B3C1,E3E7,C6E3,E3E5,EDB3,E3E6,C9B3,C5E6,B9B5,C3BB,E3E3,C5BD,C1A4,C2D9,B2D7,E3ED,BBA6,C4AD,E3F0,BEDA,E3FB,E3F5,BAD3,B7D0,D3CD,D6CE,D5D3,B9C1,D5B4,D1D8,D0B9,C7F6,C8AA,B2B4,C3DA,E3EE,E3FC,E3EF,B7A8,E3F7,E3F4,B7BA,C5A2,E3F6,C5DD,B2A8,C6FC,C4E0,D7A2,C0E1,E3F9,E3FA,E3FD,CCA9,E3F3,D3BE,B1C3,EDB4,E3F1,E3F2,E3F8,D0BA,C6C3,D4F3,E3FE,BDE0,E4A7,E4A6,D1F3,E4A3,E4A9,C8F7,CFB4,E4A8,E4AE,C2E5,B6B4,BDF2,E4A2,BAE9,E4AA,E4AC,B6FD,D6DE,E4B2,E4AD,E4A1,BBEE,CDDD,C7A2,C5C9,C1F7,E4A4,C7B3,BDAC,BDBD,E4A5,D7C7,B2E2,E4AB,BCC3,E4AF,BBEB,E4B0,C5A8,E4B1,D5E3,BFA3,E4BA,E4B7,E4BB,E4BD,C6D6,BAC6,C0CB,B8A1,E4B4,D4A1,BAA3,BDFE,E4BC,CDBF,C4F9,CFFB,C9E6,D3BF,CFD1,E4B3,E4B8,E4B9,CCE9,CCCE,C0D4,E4B5,C1B0,E4B6,CED0,BBC1,B5D3,C8F3,BDA7,D5C7,C9AC,B8A2,E4CA,E4CC,D1C4,D2BA,BAAD,BAD4,E4C3,B5ED,D7CD,E4C0,CFFD,E4BF,C1DC,CCCA,CAE7,C4D7,CCD4,E4C8,E4C7,E4C1,E4C4,B5AD,D3D9,E4C6,D2F9,B4E3,BBB4,C9EE,B4BE,BBEC,D1CD,CCED,EDB5,C7E5,D4A8,E4CB,D7D5,E4C2,BDA5,E4C5,D3E6,E4C9,C9F8,E4BE,D3E5,C7FE,B6C9,D4FC,B2B3,E4D7,CEC2,E4CD,CEBC,B8DB,E4D6,BFCA,D3CE,C3EC,C5C8,E4D8,CDC4,E4CF,E4D4,E4D5,BAFE,CFE6,D5BF,E4D2,E4D0,E4CE,CDE5,CAAA,C0A3,BDA6,E4D3,B8C8,E4E7,D4B4,E4DB,C1EF,E4E9,D2E7,E4DF,E4E0,CFAA,CBDD,E4DA,E4D1,E4E5,C8DC,E4E3,C4E7,E4E2,E4E1,B3FC,E4E8,B5E1,D7CC,E4E6,BBAC,D7D2,CCCF,EBF8,E4E4,B9F6,D6CD,E4D9,E4DC,C2FA,E4DE,C2CB,C0C4,C2D0,B1F5,CCB2,B5CE,E4EF,C6AF,C6E1,E4F5,C2A9,C0EC,D1DD,E4EE,C4AE,E4ED,E4F6,E4F4,C2FE,E4DD,E4F0,CAFE,D5C4,E4F1,D1FA,E4EB,E4EC,E4F2,CEAB,C5CB,C7B1,C2BA,E4EA,C1CA,CCB6,B3B1,E4FB,E4F3,E4FA,E4FD,E4FC,B3CE,B3BA,E4F7,E4F9,E4F8,C5EC,C0BD,D4E8,E5A2,B0C4,E5A4,E5A3,BCA4,E5A5,E5A1,E4FE,B1F4,E5A8,E5A9,E5A6,E5A7,E5AA,C6D9,E5AB,E5AD,E5AC,E5AF,E5AE,B9E0,E5B0,E5B1,BBF0,ECE1,C3F0,B5C6,BBD2,C1E9,D4EE,BEC4,D7C6,D4D6,B2D3,ECBE,EAC1,C2AF,B4B6,D1D7,B3B4,C8B2,BFBB,ECC0,D6CB,ECBF,ECC1,ECC5,BEE6,CCBF,C5DA,BEBC,ECC6,B1FE,ECC4,D5A8,B5E3,ECC2,C1B6,B3E3,ECC3,CBB8,C0C3,CCFE,C1D2,ECC8,BAE6,C0D3,D6F2,D1CC,BFBE,B7B3,C9D5,ECC7,BBE2,CCCC,BDFD,C8C8,CFA9,CDE9,C5EB,B7E9,D1C9,BAB8,ECC9,ECCA,BBC0,ECCB,ECE2,B1BA,B7D9,BDB9,ECCC,D1E6,ECCD,C8BB,ECD1,ECD3,BBCD,BCE5,ECCF,C9B7,C3BA,ECE3,D5D5,ECD0,D6F3,ECD2,ECCE,ECD4,ECD5,C9BF,CFA8,D0DC,D1AC,C8DB,ECD6,CEF5,CAEC,ECDA,ECD9,B0BE,ECD7,ECD8,ECE4,C8BC,C1C7,ECDC,D1E0,ECDB,D4EF,ECDD,DBC6,ECDE,B1AC,ECDF,ECE0,D7A6,C5C0,EBBC,B0AE,BEF4,B8B8,D2AF,B0D6,B5F9,D8B3,CBAC,E3DD,C6AC,B0E6,C5C6,EBB9,EBBA,EBBB,D1C0,C5A3,EAF2,C4B2,C4B5,C0CE,EAF3,C4C1,CEEF,EAF0,EAF4,C9FC,C7A3,CCD8,CEFE,EAF5,EAF6,CFAC,C0E7,EAF7,B6BF,EAF8,EAF9,EAFA,EAFB,EAF1,C8AE,E1EB,B7B8,E1EC,E1ED,D7B4,E1EE,E1EF,D3CC,E1F1,BFF1,E1F0,B5D2,B1B7,E1F3,E1F2,BAFC,E1F4,B9B7,BED1,C4FC,BADD,BDC6,E1F5,E1F7,B6C0,CFC1,CAA8,E1F6,D5F8,D3FC,E1F8,E1FC,E1F9,E1FA,C0EA,E1FE,E2A1,C0C7,E1FB,E1FD,E2A5,C1D4,E2A3,E2A8,B2FE,E2A2,C3CD,B2C2,E2A7,E2A6,E2A4,E2A9,E2AB,D0C9,D6ED,C3A8,E2AC,CFD7,E2AE,BAEF,E9E0,E2AD,E2AA,BBAB,D4B3,E2B0,E2AF,E9E1,E2B1,E2B2,E2B3,CCA1,E2B4,E2B5,D0FE,C2CA,D3F1,CDF5,E7E0,E7E1,BEC1,C2EA,E7E4,E7E3,CDE6,C3B5,E7E2,BBB7,CFD6,C1E1,E7E9,E7E8,E7F4,B2A3,E7EA,E7E6,E7EC,E7EB,C9BA,D5E4,E7E5,B7A9,E7E7,E7EE,E7F3,D6E9,E7ED,E7F2,E7F1,B0E0,E7F5,C7F2,C0C5,C0ED,C1F0,E7F0,E7F6,CBF6,E8A2,E8A1,D7C1,E7FA,E7F9,E7FB,E7F7,E7FE,E7FD,E7FC,C1D5,C7D9,C5FD,C5C3,C7ED,E8A3,E8A6,E8A5,E8A7,BAF7,E7F8,E8A4,C8F0,C9AA,E8A9,B9E5,D1FE,E8A8,E8AA,E8AD,E8AE,C1A7,E8AF,E8B0,E8AC,E8B4,E8AB,E8B1,E8B5,E8B2,E8B3,E8B7,E8B6,B9CF,F0AC,F0AD,C6B0,B0EA,C8BF,CDDF,CECD,EAB1,EAB2,C6BF,B4C9,EAB3,D5E7,DDF9,EAB4,EAB5,EAB6,B8CA,DFB0,C9F5,CCF0,C9FA,C9FB,D3C3,CBA6,B8A6,F0AE,B1C2,E5B8,CCEF,D3C9,BCD7,C9EA,B5E7,C4D0,B5E9,EEAE,BBAD,E7DE,EEAF,B3A9,EEB2,EEB1,BDE7,EEB0,CEB7,C5CF,C1F4,DBCE,EEB3,D0F3,C2D4,C6E8,B7AC,EEB4,B3EB,BBFB,EEB5,E7DC,EEB6,BDAE,F1E2,CAE8,D2C9,F0DA,F0DB,F0DC,C1C6,B8ED,BECE,F0DE,C5B1,F0DD,D1F1,F0E0,B0CC,BDEA,D2DF,F0DF,B4AF,B7E8,F0E6,F0E5,C6A3,F0E1,F0E2,B4C3,F0E3,D5EE,CCDB,BED2,BCB2,F0E8,F0E7,F0E4,B2A1,D6A2,D3B8,BEB7,C8AC,F0EA,D1F7,D6CC,BADB,F0E9,B6BB,CDB4,C6A6,C1A1,F0EB,F0EE,F0ED,F0F0,F0EC,BBBE,F0EF,CCB5,F0F2,B3D5,B1D4,F0F3,F0F4,F0F6,B4E1,F0F1,F0F7,F0FA,F0F8,F0F5,F0FD,F0F9,F0FC,F0FE,F1A1,CEC1,F1A4,F1A3,C1F6,F0FB,CADD,B4F1,B1F1,CCB1,F1A6,F1A7,F1AC,D5CE,F1A9,C8B3,F1A2,F1AB,F1A8,F1A5,F1AA,B0A9,F1AD,F1AF,F1B1,F1B0,F1AE,D1A2,F1B2,F1B3,B9EF,B5C7,B0D7,B0D9,D4ED,B5C4,BDD4,BBCA,F0A7,B8DE,F0A8,B0A8,F0A9,CDEE,F0AA,F0AB,C6A4,D6E5,F1E4,F1E5,C3F3,D3DB,D6D1,C5E8,D3AF,D2E6,EEC1,B0BB,D5B5,D1CE,BCE0,BAD0,BFF8,B8C7,B5C1,C5CC,CAA2,C3CB,EEC2,C4BF,B6A2,EDEC,C3A4,D6B1,CFE0,EDEF,C5CE,B6DC,CAA1,EDED,EDF0,EDF1,C3BC,BFB4,EDEE,EDF4,EDF2,D5E6,C3DF,EDF3,EDF6,D5A3,D1A3,EDF5,C3D0,EDF7,BFF4,BEEC,EDF8,CCF7,D1DB,D7C5,D5F6,EDFC,EDFB,EDF9,EDFA,EDFD,BEA6,CBAF,EEA1,B6BD,EEA2,C4C0,EDFE,BDDE,B2C7,B6C3,EEA5,D8BA,EEA3,EEA6,C3E9,B3F2,EEA7,EEA4,CFB9,EEA8,C2F7,EEA9,EEAA,DEAB,C6B3,C7C6,D6F5,B5C9,CBB2,EEAB,CDAB,EEAC,D5B0,EEAD,F6C4,DBC7,B4A3,C3AC,F1E6,CAB8,D2D3,D6AA,EFF2,BED8,BDC3,EFF3,B6CC,B0AB,CAAF,EDB6,EDB7,CEF9,B7AF,BFF3,EDB8,C2EB,C9B0,EDB9,C6F6,BFB3,EDBC,C5F8,D1D0,D7A9,EDBA,EDBB,D1E2,EDBF,EDC0,EDC4,EDC8,EDC6,EDCE,D5E8,EDC9,EDC7,EDBE,C5E9,C6C6,C9E9,D4D2,EDC1,EDC2,EDC3,EDC5,C0F9,B4A1,B9E8,EDD0,EDD1,EDCA,EDCF,CEF8,CBB6,EDCC,EDCD,CFF5,EDD2,C1F2,D3B2,EDCB,C8B7,BCEF,C5F0,EDD6,B5EF,C2B5,B0AD,CBE9,B1AE,EDD4,CDEB,B5E2,EDD5,EDD3,EDD7,B5FA,EDD8,EDD9,EDDC,B1CC,C5F6,BCEE,EDDA,CCBC,B2EA,EDDB,C4EB,B4C5,B0F5,EDDF,C0DA,B4E8,C5CD,EDDD,BFC4,EDDE,C4A5,EDE0,EDE1,EDE3,C1D7,BBC7,BDB8,EDE2,EDE4,EDE6,EDE5,EDE7,CABE,ECEA,C0F1,C9E7,ECEB,C6EE,ECEC,C6ED,ECED,ECF0,D7E6,ECF3,ECF1,ECEE,ECEF,D7A3,C9F1,CBEE,ECF4,ECF2,CFE9,ECF6,C6B1,BCC0,ECF5,B5BB,BBF6,ECF7,D9F7,BDFB,C2BB,ECF8,ECF9,B8A3,ECFA,ECFB,ECFC,D3ED,D8AE,C0EB,C7DD,BACC,D0E3,CBBD,CDBA,B8D1,B1FC,C7EF,D6D6,BFC6,C3EB,EFF5,C3D8,D7E2,EFF7,B3D3,C7D8,D1ED,D6C8,EFF8,EFF6,BBFD,B3C6,BDD5,D2C6,BBE0,CFA1,EFFC,EFFB,EFF9,B3CC,C9D4,CBB0,EFFE,B0DE,D6C9,EFFD,B3ED,F6D5,CEC8,F0A2,F0A1,B5BE,BCDA,BBFC,B8E5,C4C2,F0A3,CBEB,F0A6,D1A8,BEBF,C7EE,F1B6,F1B7,BFD5,B4A9,F1B8,CDBB,C7D4,D5AD,F1B9,F1BA,C7CF,D2A4,D6CF,F1BB,BDD1,B4B0,BEBD,B4DC,CED1,BFDF,F1BD,BFFA,F1BC,F1BF,F1BE,F1C0,F1C1,C1FE,C1A2,CAFA,D5BE,BEBA,BEB9,D5C2,BFA2,CDAF,F1B5,BDDF,B6CB,D6F1,F3C3,F3C4,B8CD,F3C6,F3C7,B0CA,F3C5,F3C9,CBF1,F3CB,D0A6,B1CA,F3C8,F3CF,B5D1,F3D7,F3D2,F3D4,F3D3,B7FB,B1BF,F3CE,F3CA,B5DA,F3D0,F3D1,F3D5,F3CD,BCE3,C1FD,F3D6,F3DA,F3CC,B5C8,BDEE,F3DC,B7A4,BFF0,D6FE,CDB2,B4F0,B2DF,F3D8,F3D9,C9B8,F3DD,F3DE,F3E1,F3DF,F3E3,F3E2,F3DB,BFEA,B3EF,F3E0,C7A9,BCF2,F3EB,B9BF,F3E4,B2AD,BBFE,CBE3,F3ED,F3E9,B9DC,F3EE,F3E5,F3E6,F3EA,C2E1,F3EC,F3EF,F3E8,BCFD,CFE4,F3F0,F3E7,F3F2,D7AD,C6AA,F3F3,F3F1,C2A8,B8DD,F3F5,F3F4,B4DB,F3F6,F3F7,F3F8,C0BA,C0E9,C5F1,F3FB,F3FA,B4D8,F3FE,F3F9,F3FC,F3FD,F4A1,F4A3,BBC9,F4A2,F4A4,B2BE,F4A6,F4A5,BCAE,C3D7,D9E1,C0E0,F4CC,D7D1,B7DB,F4CE,C1A3,C6C9,B4D6,D5B3,F4D0,F4CF,F4D1,CBDA,F4D2,D4C1,D6E0,B7E0,C1B8,C1BB,F4D3,BEAC,B4E2,F4D4,F4D5,BEAB,F4D6,F4DB,F4D7,F4DA,BAFD,F4D8,F4D9,B8E2,CCC7,F4DC,B2DA,C3D3,D4E3,BFB7,F4DD,C5B4,F4E9,CFB5,CEC9,CBD8,CBF7,BDF4,D7CF,C0DB,D0F5,F4EA,F4EB,F4EC,F7E3,B7B1,F4ED,D7EB,F4EE,E6F9,BEC0,E6FA,BAEC,E6FB,CFCB,E6FC,D4BC,BCB6,E6FD,E6FE,BCCD,C8D2,CEB3,E7A1,B4BF,E7A2,C9B4,B8D9,C4C9,D7DD,C2DA,B7D7,D6BD,CEC6,B7C4,C5A6,E7A3,CFDF,E7A4,E7A5,E7A6,C1B7,D7E9,C9F0,CFB8,D6AF,D6D5,E7A7,B0ED,E7A8,E7A9,C9DC,D2EF,BEAD,E7AA,B0F3,C8DE,BDE1,E7AB,C8C6,E7AC,BBE6,B8F8,D1A4,E7AD,C2E7,BEF8,BDCA,CDB3,E7AE,E7AF,BEEE,D0E5,CBE7,CCD0,BCCC,E7B0,BCA8,D0F7,E7B1,D0F8,E7B2,E7B3,B4C2,E7B4,E7B5,C9FE,CEAC,C3E0,E7B7,B1C1,B3F1,E7B8,E7B9,D7DB,D5C0,E7BA,C2CC,D7BA,E7BB,E7BC,E7BD,BCEA,C3E5,C0C2,E7BE,E7BF,BCA9,E7C0,E7C1,E7B6,B6D0,E7C2,E7C3,E7C4,BBBA,B5DE,C2C6,B1E0,E7C5,D4B5,E7C6,B8BF,E7C8,E7C7,B7EC,E7C9,B2F8,E7CA,E7CB,E7CC,E7CD,E7CE,E7CF,E7D0,D3A7,CBF5,E7D1,E7D2,E7D3,E7D4,C9C9,E7D5,E7D6,E7D7,E7D8,E7D9,BDC9,E7DA,F3BE,B8D7,C8B1,F3BF,F3C0,F3C1,B9DE,CDF8,D8E8,BAB1,C2DE,EEB7,B7A3,EEB9,EEB8,B0D5,EEBB,D5D6,D7EF,D6C3,EEBD,CAF0,EEBC,EEBE,EEC0,EEBF,D1F2,C7BC,C3C0,B8E1,C1E7,F4C6,D0DF,F4C7,CFDB,C8BA,F4C8,F4C9,F4CA,F4CB,D9FA,B8FE,E5F1,D3F0,F4E0,CECC,B3E1,F1B4,D2EE,F4E1,CFE8,F4E2,C7CC,B5D4,B4E4,F4E4,F4E3,F4E5,F4E6,F4E7,BAB2,B0BF,F4E8,B7AD,D2ED,D2AB,C0CF,BFBC,EBA3,D5DF,EAC8,F1F3,B6F8,CBA3,C4CD,F1E7,F1E8,B8FB,F1E9,BAC4,D4C5,B0D2,F1EA,F1EB,F1EC,F1ED,F1EE,F1EF,F1F1,F1F0,C5D5,F1F2,B6FA,F1F4,D2AE,DEC7,CBCA,B3DC,B5A2,B9A2,C4F4,F1F5,F1F6,C1C4,C1FB,D6B0,F1F7,F1F8,C1AA,C6B8,BEDB,F1F9,B4CF,F1FA,EDB2,EDB1,CBE0,D2DE,CBC1,D5D8,C8E2,C0DF,BCA1,EBC1,D0A4,D6E2,B6C7,B8D8,EBC0,B8CE,EBBF,B3A6,B9C9,D6AB,B7F4,B7CA,BCE7,B7BE,EBC6,EBC7,B0B9,BFCF,EBC5,D3FD,EBC8,EBC9,B7CE,EBC2,EBC4,C9F6,D6D7,D5CD,D0B2,EBCF,CEB8,EBD0,B5A8,B1B3,EBD2,CCA5,C5D6,EBD3,EBD1,C5DF,EBCE,CAA4,EBD5,B0FB,BAFA,D8B7,F1E3,EBCA,EBCB,EBCC,EBCD,EBD6,E6C0,EBD9,BFE8,D2C8,EBD7,EBDC,B8EC,EBD8,BDBA,D0D8,B0B7,EBDD,C4DC,D6AC,B4E0,C2F6,BCB9,EBDA,EBDB,D4E0,C6EA,C4D4,EBDF,C5A7,D9F5,B2B1,EBE4,BDC5,EBE2,EBE3,B8AC,CDD1,EBE5,EBE1,C1B3,C6A2,CCF3,EBE6,C0B0,D2B8,EBE7,B8AF,B8AD,EBE8,C7BB,CDF3,EBEA,EBEB,EBED,D0C8,EBF2,EBEE,EBF1,C8F9,D1FC,EBEC,EBE9,B8B9,CFD9,C4E5,EBEF,EBF0,CCDA,CDC8,B0F2,EBF6,EBF5,B2B2,B8E0,EBF7,B1EC,CCC5,C4A4,CFA5,EBF9,ECA2,C5F2,EBFA,C9C5,E2DF,EBFE,CDCE,ECA1,B1DB,D3B7,D2DC,EBFD,EBFB,B3BC,EAB0,D7D4,F4AB,B3F4,D6C1,D6C2,D5E9,BECA,F4A7,D2A8,F4A8,F4A9,F4AA,BECB,D3DF,C9E0,C9E1,F3C2,CAE6,CCF2,E2B6,CBB4,CEE8,D6DB,F4AD,F4AE,F4AF,F4B2,BABD,F4B3,B0E3,F4B0,F4B1,BDA2,B2D5,F4B6,F4B7,B6E6,B2B0,CFCF,F4B4,B4AC,F4B5,F4B8,F4B9,CDA7,F4BA,F4BB,F4BC,CBD2,F4BD,F4BE,F4BF,F4DE,C1BC,BCE8,C9AB,D1DE,E5F5,DCB3,D2D5,DCB4,B0AC,DCB5,BDDA,DCB9,D8C2,DCB7,D3F3,C9D6,DCBA,DCB6,DCBB,C3A2,DCBC,DCC5,DCBD,CEDF,D6A5,DCCF,DCCD,DCD2,BDE6,C2AB,DCB8,DCCB,DCCE,DCBE,B7D2,B0C5,DCC7,D0BE,DCC1,BBA8,B7BC,DCCC,DCC6,DCBF,C7DB,D1BF,DCC0,DCCA,DCD0,CEAD,DCC2,DCC3,DCC8,DCC9,B2D4,DCD1,CBD5,D4B7,DCDB,DCDF,CCA6,DCE6,C3E7,DCDC,BFC1,DCD9,B0FA,B9B6,DCE5,DCD3,DCC4,DCD6,C8F4,BFE0,C9BB,B1BD,D3A2,DCDA,DCD5,C6BB,DCDE,D7C2,C3AF,B7B6,C7D1,C3A9,DCE2,DCD8,DCEB,DCD4,DCDD,BEA5,DCD7,DCE0,DCE3,DCE4,DCF8,DCE1,DDA2,DCE7,BCEB,B4C4,C3A3,B2E7,DCFA,DCF2,DCEF,DCFC,DCEE,D2F0,B2E8,C8D7,C8E3,DCFB,DCED,DCF7,DCF5,BEA3,DCF4,B2DD,DCF3,BCF6,DCE8,BBC4,C0F3,BCD4,DCE9,DCEA,DCF1,DCF6,DCF9,B5B4,C8D9,BBE7,DCFE,DCFD,D3AB,DDA1,DDA3,DDA5,D2F1,DDA4,DDA6,DDA7,D2A9,BAC9,DDA9,DDB6,DDB1,DDB4,DDB0,C6CE,C0F2,C9AF,DCEC,DDAE,DDB7,DCF0,DDAF,DDB8,DDAC,DDB9,DDB3,DDAD,C4AA,DDA8,C0B3,C1AB,DDAA,DDAB,DDB2,BBF1,DDB5,D3A8,DDBA,DDBB,C3A7,DDD2,DDBC,DDD1,B9BD,BED5,BEFA,BACA,DDCA,DDC5,DDBF,B2CB,DDC3,DDCB,B2A4,DDD5,DDBE,C6D0,DDD0,DDD4,C1E2,B7C6,DDCE,DDCF,DDC4,DDBD,DDCD,CCD1,DDC9,DDC2,C3C8,C6BC,CEAE,DDCC,DDC8,DDC1,DDC6,C2DC,D3A9,D3AA,DDD3,CFF4,C8F8,DDE6,DDC7,DDE0,C2E4,DDE1,DDD7,D6F8,DDD9,DDD8,B8F0,DDD6,C6CF,B6AD,DDE2,BAF9,D4E1,DDE7,B4D0,DDDA,BFFB,DDE3,DDDF,DDDD,B5D9,DDDB,DDDC,DDDE,BDAF,DDE4,DDE5,DDF5,C3C9,CBE2,DDF2,D8E1,C6D1,DDF4,D5F4,DDF3,DDF0,DDEC,DDEF,DDE8,D0EE,C8D8,DDEE,DDE9,DDEA,CBF2,DDED,B1CD,C0B6,BCBB,DDF1,DDF7,DDF6,DDEB,C5EE,DDFB,DEA4,DEA3,DDF8,C3EF,C2FB,D5E1,CEB5,DDFD,B2CC,C4E8,CADF,C7BE,DDFA,DDFC,DDFE,DEA2,B0AA,B1CE,DEAC,DEA6,BDB6,C8EF,DEA1,DEA5,DEA9,DEA8,DEA7,DEAD,D4CC,DEB3,DEAA,DEAE,C0D9,B1A1,DEB6,DEB1,DEB2,D1A6,DEB5,DEAF,DEB0,D0BD,DEB4,CAED,DEB9,DEB8,DEB7,DEBB,BDE5,B2D8,C3EA,DEBA,C5BA,DEBC,CCD9,B7AA,D4E5,DEBD,DEBF,C4A2,DEC1,DEBE,DEC0,D5BA,DEC2,F2AE,BBA2,C2B2,C5B0,C2C7,F2AF,D0E9,D3DD,EBBD,B3E6,F2B0,F2B1,CAAD,BAE7,F2B3,F2B5,F2B4,CBE4,CFBA,F2B2,CAB4,D2CF,C2EC,CEC3,F2B8,B0F6,F2B7,F2BE,B2CF,D1C1,F2BA,F2BC,D4E9,F2BB,F2B6,F2BF,F2BD,F2B9,F2C7,F2C4,F2C6,F2CA,F2C2,F2C0,F2C5,D6FB,F2C1,C7F9,C9DF,F2C8,B9C6,B5B0,F2C3,F2C9,F2D0,F2D6,BBD7,F2D5,CDDC,D6EB,F2D2,F2D4,B8F2,F2CB,F2CE,C2F9,D5DD,F2CC,F2CD,F2CF,F2D3,F2D9,D3BC,B6EA,CAF1,B7E4,F2D7,F2D8,F2DA,F2DD,F2DB,F2DC,D1D1,F2D1,CDC9,CECF,D6A9,F2E3,C3DB,F2E0,C0AF,F2EC,F2DE,F2E1,F2E8,F2E2,F2E7,F2E6,F2E9,F2DF,F2E4,F2EA,D3AC,F2E5,B2F5,F2F2,D0AB,F2F5,BBC8,F2F9,F2F0,F2F6,F2F8,F2FA,F2F3,F2F1,BAFB,B5FB,F2EF,F2F7,F2ED,F2EE,F2EB,F3A6,F3A3,F3A2,F2F4,C8DA,F2FB,F3A5,C3F8,F2FD,F3A7,F3A9,F3A4,F2FC,F3AB,F3AA,C2DD,F3AE,F3B0,F3A1,F3B1,F3AC,F3AF,F2FE,F3AD,F3B2,F3B4,F3A8,F3B3,F3B5,D0B7,F3B8,D9F9,F3B9,F3B7,C8E4,F3B6,F3BA,F3BB,B4C0,EEC3,F3BC,F3BD,D1AA,F4AC,D0C6,D0D0,D1DC,CFCE,BDD6,D1C3,BAE2,E1E9,D2C2,F1C2,B2B9,B1ED,F1C3,C9C0,B3C4,D9F2,CBA5,F1C4,D6D4,F1C5,F4C0,F1C6,D4AC,F1C7,B0C0,F4C1,F4C2,B4FC,C5DB,CCBB,D0E4,CDE0,F1C8,D9F3,B1BB,CFAE,B8A4,F1CA,F1CB,B2C3,C1D1,D7B0,F1C9,F1CC,F1CE,D9F6,D2E1,D4A3,F4C3,C8B9,F4C4,F1CD,F1CF,BFE3,F1D0,F1D4,F1D6,F1D1,C9D1,C5E1,C2E3,B9FC,F1D3,F1D5,B9D3,F1DB,BAD6,B0FD,F1D9,F1D8,F1D2,F1DA,F1D7,C8EC,CDCA,F1DD,E5BD,F1DC,F1DE,F1DF,CFE5,F4C5,BDF3,F1E0,F1E1,CEF7,D2AA,F1FB,B8B2,BCFB,B9DB,B9E6,C3D9,CAD3,EAE8,C0C0,BEF5,EAE9,EAEA,EAEB,EAEC,EAED,EAEE,EAEF,BDC7,F5FB,F5FD,F5FE,F5FC,BDE2,F6A1,B4A5,F6A2,F6A3,ECB2,D1D4,D9EA,F6A4,EEBA,D5B2,D3FE,CCDC,CAC4,E5C0,F6A5,BEAF,C6A9,DAA5,BCC6,B6A9,B8BC,C8CF,BCA5,DAA6,DAA7,CCD6,C8C3,DAA8,C6FD,D1B5,D2E9,D1B6,BCC7,BDB2,BBE4,DAA9,DAAA,D1C8,DAAB,D0ED,B6EF,C2DB,CBCF,B7ED,C9E8,B7C3,BEF7,D6A4,DAAC,DAAD,C6C0,D7E7,CAB6,D5A9,CBDF,D5EF,DAAE,D6DF,B4CA,DAB0,DAAF,D2EB,DAB1,DAB2,DAB3,CAD4,DAB4,CAAB,DAB5,DAB6,B3CF,D6EF,DAB7,BBB0,B5AE,DAB8,DAB9,B9EE,D1AF,D2E8,DABA,B8C3,CFEA,B2EF,DABB,DABC,BDEB,CEDC,D3EF,DABD,CEF3,DABE,D3D5,BBE5,DABF,CBB5,CBD0,DAC0,C7EB,D6EE,DAC1,C5B5,B6C1,DAC2,B7CC,BFCE,DAC3,DAC4,CBAD,DAC5,B5F7,DAC6,C1C2,D7BB,DAC7,CCB8,D2EA,C4B1,DAC8,B5FD,BBD1,DAC9,D0B3,DACA,DACB,CEBD,DACC,DACD,DACE,B2F7,DAD1,DACF,D1E8,DAD0,C3D5,DAD2,DAD3,DAD4,DAD5,D0BB,D2A5,B0F9,DAD6,C7AB,DAD7,BDF7,C3A1,DAD8,DAD9,C3FD,CCB7,DADA,DADB,C0BE,C6D7,DADC,DADD,C7B4,DADE,DADF,B9C8,BBED,B6B9,F4F8,F4F9,CDE3,F5B9,EBE0,CFF3,BBBF,BAC0,D4A5,E1D9,F5F4,B1AA,B2F2,F5F5,F5F7,BAD1,F5F6,C3B2,F5F9,F5F8,B1B4,D5EA,B8BA,B9B1,B2C6,D4F0,CFCD,B0DC,D5CB,BBF5,D6CA,B7B7,CCB0,C6B6,B1E1,B9BA,D6FC,B9E1,B7A1,BCFA,EADA,EADB,CCF9,B9F3,EADC,B4FB,C3B3,B7D1,BAD8,EADD,D4F4,EADE,BCD6,BBDF,EADF,C1DE,C2B8,D4DF,D7CA,EAE0,EAE1,EAE4,EAE2,EAE3,C9DE,B8B3,B6C4,EAE5,CAEA,C9CD,B4CD,E2D9,C5E2,EAE6,C0B5,D7B8,EAE7,D7AC,C8FC,D8D3,D8CD,D4DE,D4F9,C9C4,D3AE,B8D3,B3E0,C9E2,F4F6,BAD5,F4F7,D7DF,F4F1,B8B0,D5D4,B8CF,C6F0,B3C3,F4F2,B3AC,D4BD,C7F7,F4F4,F4F3,CCCB,C8A4,F4F5,D7E3,C5BF,F5C0,F5BB,F5C3,F5C2,D6BA,F5C1,D4BE,F5C4,F5CC,B0CF,B5F8,F5C9,F5CA,C5DC,F5C5,F5C6,F5C7,F5CB,BEE0,F5C8,B8FA,F5D0,F5D3,BFE7,B9F2,F5BC,F5CD,C2B7,CCF8,BCF9,F5CE,F5CF,F5D1,B6E5,F5D2,F5D5,F5BD,F5D4,D3BB,B3EC,CCA4,F5D6,F5D7,BEE1,F5D8,CCDF,F5DB,B2C8,D7D9,F5D9,F5DA,F5DC,F5E2,F5E0,F5DF,F5DD,F5E1,F5DE,F5E4,F5E5,CCE3,E5BF,B5B8,F5E3,F5E8,CCA3,F5E6,F5E7,F5BE,B1C4,F5BF,B5C5,B2E4,F5EC,F5E9,B6D7,F5ED,F5EA,F5EB,B4DA,D4EA,F5EE,B3F9,F5EF,F5F1,F5F0,F5F2,F5F3,C9ED,B9AA,C7FB,B6E3,CCC9,EAA6,B3B5,D4FE,B9EC,D0F9,E9ED,D7AA,E9EE,C2D6,C8ED,BAE4,E9EF,E9F0,E9F1,D6E1,E9F2,E9F3,E9F5,E9F4,E9F6,E9F7,C7E1,E9F8,D4D8,E9F9,BDCE,E9FA,E9FB,BDCF,E9FC,B8A8,C1BE,E9FD,B1B2,BBD4,B9F5,E9FE,EAA1,EAA2,EAA3,B7F8,BCAD,CAE4,E0CE,D4AF,CFBD,D5B7,EAA4,D5DE,EAA5,D0C1,B9BC,B4C7,B1D9,C0B1,B1E6,B1E7,B1E8,B3BD,C8E8,E5C1,B1DF,C1C9,B4EF,C7A8,D3D8,C6F9,D1B8,B9FD,C2F5,D3AD,D4CB,BDFC,E5C2,B7B5,E5C3,BBB9,D5E2,BDF8,D4B6,CEA5,C1AC,B3D9,CCF6,E5C6,E5C4,E5C8,E5CA,E5C7,B5CF,C6C8,B5FC,E5C5,CAF6,E5C9,C3D4,B1C5,BCA3,D7B7,CDCB,CBCD,CACA,CCD3,E5CC,E5CB,C4E6,D1A1,D1B7,E5CD,E5D0,CDB8,D6F0,E5CF,B5DD,CDBE,E5D1,B6BA,CDA8,B9E4,CAC5,B3D1,CBD9,D4EC,E5D2,B7EA,E5CE,E5D5,B4FE,E5D6,E5D3,E5D4,D2DD,C2DF,B1C6,D3E2,B6DD,CBEC,E5D7,D3F6,B1E9,B6F4,E5DA,E5D8,E5D9,B5C0,D2C5,E5DC,E5DE,E5DD,C7B2,D2A3,E5DB,D4E2,D5DA,E5E0,D7F1,E5E1,B1DC,D1FB,E5E2,E5E4,E5E3,E5E5,D2D8,B5CB,E7DF,DAF5,DAF8,DAF6,DAF7,DAFA,D0CF,C4C7,B0EE,D0B0,DAF9,D3CA,BAAA,DBA2,C7F1,DAFC,DAFB,C9DB,DAFD,DBA1,D7DE,DAFE,C1DA,DBA5,D3F4,DBA7,DBA4,DBA8,BDBC,C0C9,DBA3,DBA6,D6A3,DBA9,DBAD,DBAE,DBAC,BAC2,BFA4,DBAB,DBAA,D4C7,B2BF,DBAF,B9F9,DBB0,B3BB,B5A6,B6BC,DBB1,B6F5,DBB2,B1C9,DBB4,DBB3,DBB5,DBB7,DBB6,DBB8,DBB9,DBBA,D3CF,F4FA,C7F5,D7C3,C5E4,F4FC,F4FD,F4FB,BEC6,D0EF,B7D3,D4CD,CCAA,F5A2,F5A1,BAA8,F4FE,CBD6,F5A4,C0D2,B3EA,CDAA,F5A5,F5A3,BDB4,F5A8,F5A9,BDCD,C3B8,BFE1,CBE1,F5AA,F5A6,F5A7,C4F0,F5AC,B4BC,D7ED,B4D7,F5AB,F5AE,F5AD,F5AF,D0D1,C3D1,C8A9,F5B0,F5B1,F5B2,F5B3,F5B4,F5B5,F5B7,F5B6,F5B8,B2C9,D3D4,CACD,C0EF,D6D8,D2B0,C1BF,BDF0,B8AA,BCF8,F6C6,F6C7,F6C8,F6C9,F6CA,F6CC,F6CB,F7E9,F6CD,F6CE,EEC4,EEC5,EEC6,D5EB,B6A4,EEC8,EEC7,EEC9,EECA,C7A5,EECB,EECC,B7B0,B5F6,EECD,EECF,EECE,B8C6,EED0,EED1,EED2,B6DB,B3AE,D6D3,C4C6,B1B5,B8D6,EED3,EED4,D4BF,C7D5,BEFB,CED9,B9B3,EED6,EED5,EED8,EED7,C5A5,EED9,EEDA,C7AE,EEDB,C7AF,EEDC,B2A7,EEDD,EEDE,EEDF,EEE0,EEE1,D7EA,EEE2,EEE3,BCD8,EEE4,D3CB,CCFA,B2AC,C1E5,EEE5,C7A6,C3AD,EEE6,EEE7,EEE8,EEE9,EEEA,EEEB,EEEC,EEED,EEEE,EEEF,EEF0,EEF1,EEF2,EEF4,EEF3,EEF5,CDAD,C2C1,EEF6,EEF7,EEF8,D5A1,EEF9,CFB3,EEFA,EEFB,EEFC,EEFD,EFA1,EEFE,EFA2,B8F5,C3FA,EFA3,EFA4,BDC2,D2BF,B2F9,EFA5,EFA6,EFA7,D2F8,EFA8,D6FD,EFA9,C6CC,EFAA,EFAB,C1B4,EFAC,CFFA,CBF8,EFAE,EFAD,B3FA,B9F8,EFAF,EFB0,D0E2,EFB1,EFB2,B7E6,D0BF,EFB3,EFB4,EFB5,C8F1,CCE0,EFB6,EFB7,EFB8,EFB9,EFBA,D5E0,EFBB,B4ED,C3AA,EFBC,EFBD,EFBE,EFBF,CEFD,EFC0,C2E0,B4B8,D7B6,BDF5,CFC7,EFC3,EFC1,EFC2,EFC4,B6A7,BCFC,BEE2,C3CC,EFC5,EFC6,EFC7,EFCF,EFC8,EFC9,EFCA,C7C2,EFF1,B6CD,EFCB,EFCC,EFCD,B6C6,C3BE,EFCE,EFD0,EFD1,EFD2,D5F2,EFD3,C4F7,EFD4,C4F8,EFD5,EFD6,B8E4,B0F7,EFD7,EFD8,EFD9,EFDA,EFDB,EFDC,EFDD,EFDE,BEB5,EFE1,EFDF,EFE0,EFE2,EFE3,C1CD,EFE4,EFE5,EFE6,EFE7,EFE8,EFE9,EFEA,EFEB,EFEC,C0D8,EFED,C1AD,EFEE,EFEF,EFF0,CFE2,B3A4,C3C5,E3C5,C9C1,E3C6,B1D5,CECA,B4B3,C8F2,E3C7,CFD0,E3C8,BCE4,E3C9,E3CA,C3C6,D5A2,C4D6,B9EB,CEC5,E3CB,C3F6,E3CC,B7A7,B8F3,BAD2,E3CD,E3CE,D4C4,E3CF,E3D0,D1CB,E3D1,E3D2,E3D3,E3D4,D1D6,E3D5,B2FB,C0BB,E3D6,C0AB,E3D7,E3D8,E3D9,E3DA,E3DB,B8B7,DAE2,B6D3,DAE4,DAE3,DAE6,C8EE,DAE5,B7C0,D1F4,D2F5,D5F3,BDD7,D7E8,DAE8,DAE7,B0A2,CDD3,DAE9,B8BD,BCCA,C2BD,C2A4,B3C2,DAEA,C2AA,C4B0,BDB5,CFDE,DAEB,C9C2,B1DD,DAEC,B6B8,D4BA,B3FD,DAED,D4C9,CFD5,C5E3,DAEE,DAEF,DAF0,C1EA,CCD5,CFDD,D3E7,C2A1,DAF1,CBE5,DAF2,CBE6,D2FE,B8F4,DAF3,B0AF,CFB6,D5CF,CBED,DAF4,E3C4,C1A5,F6BF,F6C0,F6C1,C4D1,C8B8,D1E3,D0DB,D1C5,BCAF,B9CD,EFF4,B4C6,D3BA,F6C2,B3FB,F6C3,B5F1,F6C5,D3EA,F6A7,D1A9,F6A9,F6A8,C1E3,C0D7,B1A2,CEED,D0E8,F6AB,CFF6,F6AA,D5F0,F6AC,C3B9,BBF4,F6AE,F6AD,C4DE,C1D8,CBAA,CFBC,F6AF,F6B0,F6B1,C2B6,B0D4,C5F9,F6B2,C7E0,F6A6,BEB8,BEB2,B5E5,B7C7,BFBF,C3D2,C3E6,D8CC,B8EF,BDF9,D1A5,B0D0,F7B0,F7B1,D0AC,B0B0,F7B2,F7B3,F7B4,C7CA,BECF,F7B7,F7B6,B1DE,F7B5,F7B8,F7B9,CEA4,C8CD,BAAB,E8B8,E8B9,E8BA,BEC2,D2F4,D4CF,C9D8,D2B3,B6A5,C7EA,F1FC,CFEE,CBB3,D0EB,E7EF,CDE7,B9CB,B6D9,F1FD,B0E4,CBCC,F1FE,D4A4,C2AD,C1EC,C6C4,BEB1,F2A1,BCD5,F2A2,F2A3,F2A4,D2C3,C6B5,CDC7,F2A5,D3B1,BFC5,CCE2,F2A6,F2A7,D1D5,B6EE,F2A8,F2A9,B5DF,F2AA,F2AB,B2FC,F2AC,F2AD,C8A7,B7E7,ECA9,ECAA,ECAB,ECAC,C6AE,ECAD,ECAE,B7C9,CAB3,E2B8,F7CF,F7D0,B2CD,F7D1,F7D3,F7D2,E2BB,BCA2,E2BC,E2BD,E2BE,E2BF,E2C0,E2C1,B7B9,D2FB,BDA4,CACE,B1A5,CBC7,E2C2,B6FC,C8C4,E2C3,BDC8,B1FD,E2C4,B6F6,E2C5,C4D9,E2C6,CFDA,B9DD,E2C7,C0A1,E2C8,B2F6,E2C9,C1F3,E2CA,E2CB,C2F8,E2CC,E2CD,E2CE,CAD7,D8B8,D9E5,CFE3,F0A5,DCB0,C2ED,D4A6,CDD4,D1B1,B3DB,C7FD,B2B5,C2BF,E6E0,CABB,E6E1,E6E2,BED4,E6E3,D7A4,CDD5,E6E5,BCDD,E6E4,E6E6,E6E7,C2EE,BDBE,E6E8,C2E6,BAA7,E6E9,E6EA,B3D2,D1E9,BFA5,E6EB,C6EF,E6EC,E6ED,E6EE,C6AD,E6EF,C9A7,E6F0,E6F1,E6F2,E5B9,E6F3,E6F4,C2E2,E6F5,E6F6,D6E8,E6F7,E6F8,B9C7,F7BB,F7BA,F7BE,F7BC,BAA1,F7BF,F7C0,F7C2,F7C1,F7C4,F7C3,F7C5,F7C6,F7C7,CBE8,B8DF,F7D4,F7D5,F7D6,F7D8,F7DA,F7D7,F7DB,F7D9,D7D7,F7DC,F7DD,F7DE,F7DF,F7E0,DBCB,D8AA,E5F7,B9ED,BFFD,BBEA,F7C9,C6C7,F7C8,F7CA,F7CC,F7CB,F7CD,CEBA,F7CE,C4A7,D3E3,F6CF,C2B3,F6D0,F6D1,F6D2,F6D3,F6D4,F6D6,B1AB,F6D7,F6D8,F6D9,F6DA,F6DB,F6DC,F6DD,F6DE,CFCA,F6DF,F6E0,F6E1,F6E2,F6E3,F6E4,C0F0,F6E5,F6E6,F6E7,F6E8,F6E9,F6EA,F6EB,F6EC,F6ED,F6EE,F6EF,F6F0,F6F1,F6F2,F6F3,F6F4,BEA8,F6F5,F6F6,F6F7,F6F8,C8FA,F6F9,F6FA,F6FB,F6FC,F6FD,F6FE,F7A1,F7A2,F7A3,F7A4,F7A5,F7A6,F7A7,F7A8,B1EE,F7A9,F7AA,F7AB,F7AC,F7AD,C1DB,F7AE,F7AF,C4F1,F0AF,BCA6,F0B0,C3F9,C5B8,D1BB,F0B1,F0B2,F0B3,F0B4,F0B5,D1BC,D1EC,F0B7,F0B6,D4A7,CDD2,F0B8,F0BA,F0B9,F0BB,F0BC,B8EB,F0BD,BAE8,F0BE,F0BF,BEE9,F0C0,B6EC,F0C1,F0C2,F0C3,F0C4,C8B5,F0C5,F0C6,F0C7,C5F4,F0C8,F0C9,F0CA,F7BD,F0CB,F0CC,F0CD,F0CE,F0CF,BAD7,F0D0,F0D1,F0D2,F0D3,F0D4,F0D5,F0D6,F0D8,D3A5,F0D7,F0D9,F5BA,C2B9,F7E4,F7E5,F7E6,F7E7,F7E8,C2B4,F7EA,F7EB,C2F3,F4F0,F4EF,C2E9,F7E1,F7E2,BBC6,D9E4,CAF2,C0E8,F0A4,BADA,C7AD,C4AC,F7EC,F7ED,F7EE,F7F0,F7EF,F7F1,F7F4,F7F3,F7F2,F7F5,F7F6,EDE9,EDEA,EDEB,F6BC,F6BD,F6BE,B6A6,D8BE,B9C4,D8BB,DCB1,CAF3,F7F7,F7F8,F7F9,F7FB,F7FA,B1C7,F7FC,F7FD,F7FE,C6EB,ECB4,B3DD,F6B3,F6B4,C1E4,F6B5,F6B6,F6B7,F6B8,F6B9,F6BA,C8A3,F6BB,C1FA,B9A8,EDE8,B9EA,D9DF,A3A1,A3A2,A3A3,A1E7,A3A5,A3A6,A3A7,A3A8,A3A9,A3AA,A3AB,A3AC,A3AD,A3AE,A3AF,A3B0,A3B1,A3B2,A3B3,A3B4,A3B5,A3B6,A3B7,A3B8,A3B9,A3BA,A3BB,A3BC,A3BD,A3BE,A3BF,A3C0,A3C1,A3C2,A3C3,A3C4,A3C5,A3C6,A3C7,A3C8,A3C9,A3CA,A3CB,A3CC,A3CD,A3CE,A3CF,A3D0,A3D1,A3D2,A3D3,A3D4,A3D5,A3D6,A3D7,A3D8,A3D9,A3DA,A3DB,A3DC,A3DD,A3DE,A3DF,A3E0,A3E1,A3E2,A3E3,A3E4,A3E5,A3E6,A3E7,A3E8,A3E9,A3EA,A3EB,A3EC,A3ED,A3EE,A3EF,A3F0,A3F1,A3F2,A3F3,A3F4,A3F5,A3F6,A3F7,A3F8,A3F9,A3FA,A3FB,A3FC,A3FD,A1AB,A1E9,A1EA,A3FE,A3A4"
			},
			_u2a_char: function(e) {
				var t = e.toString(16);
				t = "000" + t.toUpperCase(), t = t.substr(t.length - 4);
				var n = this._unicode().indexOf(t);
				return n != -1 && (t = this._ansicode().substr(n, 4)), parseInt(t, 16)
			},
			_a2u_char: function(e) {
				var t = e.toString(16);
				t = "000" + t.toUpperCase(), t = t.substr(t.length - 4);
				var n = this._ansicode().indexOf(t);
				return n != -1 && (t = this._unicode().substr(n, 4)), parseInt(t, 16)
			},
			_u2a: function(e) {
				var t = e.length,
					n = "";
				for(var r = 0; r < t; r++) {
					var i = e.charCodeAt(r);
					i < 0 && (i += 65536), i > 127 && (i = this._u2a_char(i));
					if(i > 255) {
						var s = i & 65280;
						s >>= 8;
						var o = i & 255;
						n += String.fromCharCode(s) + String.fromCharCode(o)
					} else n += String.fromCharCode(i)
				}
				return n
			},
			_a2u: function(e) {
				var t = e.length,
					n = "",
					r;
				for(var i = 0; i < t; i++) {
					var s = e.charCodeAt(i);
					s > 127 ? r = this._a2u_char((s << 8) + e.charCodeAt(++i)) : r = s, n += String.fromCharCode(r)
				}
				return n
			}
		}
	}), define("tpl/common", [], function() {
		var e = ['<ul class="fl">', "    {{ for(var key in it.left) { }}", "    <li>", "        <span>{{=key}}</span>", "        {{ for(var i in it.left[key]) { }}", '        <a data-ttCity="{{=it.left[key][i].serName}}" href="javascript:void(0)" title="" alt="" data-cpg="{{=it.left[key][i].pgSeq}}_{{=it.left[key][i].serSeq}}" id="{{? it.no_dist ===1}}popDist{{??}}dist{{?}}_{{=it.left[key][i].pgSeq}}_{{=it.left[key][i].serSeq}}">{{=it.left[key][i].serName}}</a>', "        {{ } }}", "    </li>", "    {{ } }}", "</ul>", '<ul class="lst2 fl">', "    {{ for(var key in it.right) { }}", "    <li>", "        <span>{{=key}}</span>", "        {{ for(var i in it.right[key]) { }}", '        <a data-ttCity="{{=it.right[key][i].serName}}" href="javascript:void(0)" title="" alt="" data-cpg="{{=it.right[key][i].pgSeq}}_{{=it.right[key][i].serSeq}}" id="{{? it.no_dist ===1}}popDist{{??}}dist{{?}}_{{=it.right[key][i].pgSeq}}_{{=it.right[key][i].serSeq}}">{{=it.right[key][i].serName}}</a>', "        {{ } }}", "    </li>", "    {{ } }}", "</ul>"].join(""),
			t = ["{{~it:value:index}}", '    {{? value.category!==""}}', '        <li class="item"><a href="javascript:;">{{=value.label}}</a></li>', "    {{~value.category:value1:index1}}", '        <li class="item cate {{= value.category.length === (index1+1)?"cate_last":"" }}" cpseq="{{=value1.cp_seq}}" label="{{=value.label}}">', '            <a href="javascript:;">在<span>{{=value1.name}}</span>分类中搜索</a>', "        </li>", "    {{~}}", "    {{??}}", '        <li class="item"><a href="javascript:;">{{=value.label}}</a></li>', "    {{?}}", "{{~}}"].join(""),
			n = ["{{~it.data:value:index}}", '<div class="col fl">', "{{? value.length ===0}}", "    <!-- 暂无数据 -->", "{{??}}", "    {{~value:value1:index1}}", '        <dl class="fixed" tp-childarea="{{=(index+1)+"_"+(index1+1)}}">', "            <dt>", "                {{? value1.display !==null}}", "                   {{~value1.display:value3:index3}}", '{{? index3 !==0}}/{{?}}<a {{? value3.isHighlight === "1"}}class="z-h-c"{{?}} href="{{=value3.link}}" target="_blank" alt="">{{=value3.text}}</a>', "                   {{~}}", "                {{??}}", '                   <a href="{{? value1.siType !== "8"}}{{? value1.link.indexOf("category") >0 }}http://list.{{=source_domain}}/{{=value1.siSeq}}{{??}}{{=front_domain}}{{=value1.link}}{{?}}{{??}}{{=value1.link}}{{?}}" target="_blank" alt="">{{=value1.siName}}</a>', "                {{?}}", "            </dt>", "            {{? value1.child !==null}}", "            <dd>", "                {{~value1.child:value2:index2}}", '                <a href="{{? value2.siType !== "8"}}{{? value2.link.indexOf("category") >0 }}http://list.{{=source_domain}}/{{=value2.siSeq}}{{??}}{{=front_domain}}{{=value2.link}}{{?}}{{??}}{{=value2.link}}{{?}}" target="_blank" {{? value2.isHighlight === "1"}}class="z-h-c"{{?}} alt="">{{=value2.siName}}</a>', "                {{~}}", "            </dd>", "            {{?}}", "        </dl>", "    {{~}}", "{{?}}", "</div>", "{{~}}", "{{? it.S || it.L}}", '<div class="col brand fl" tp-childarea="bd">', '    <ul class="fixed">', "        {{? it.S}}", "        {{~it.S:value:index}}", '        <li class="lst">', '            <a href="{{=value.link_url}}" target="_blank" alt="" title="">', '                <img src="{{=get_img_domain()}}{{=value.image_url}}" height="40" width="80" alt="" title="">', "            </a>", "        </li>", "        {{~}}", "        {{?}}", "    </ul>", "    {{? it.L}}", '    <a class="ad mt15" href="{{=it.L.link_url}}" target="_blank" alt="" title="">', '        <img src="{{=get_img_domain()}}{{=it.L.image_url}}" height="150" width="210" alt="" title="">', "    </a>", "    {{?}}", "</div>", "{{?}}"].join("");
		return {
			dist_list: e,
			search_autolist: t,
			category: n
		}
	}), define("lib/common", ["lib/jquery/1.11.1/jquery-1.11.1", "lib/jquery/lazyload/lazyload", "api/common", "config/url", "config/vars", "config/constant", "lib/log", "lib/doT", "lib/json/json3.min", "../widget/slide", "lib/jquery/base64/jquery.base64", "tpl/common"], function(e, t, n, r, i, s, o, u, a, f, l, c) {
		(function(e) {
			function t(t) {
				var n = e(this),
					r = null,
					i = [],
					s = null,
					o = null,
					u = !1,
					a = e.extend({
						rowSelector: "> li",
						submenuSelector: "*",
						submenuDirection: "right",
						subPanel: null,
						tolerance: 75,
						enter: e.noop,
						exit: e.noop,
						activate: e.noop,
						deactivate: e.noop,
						exitMenu: e.noop
					}, t),
					f = 3,
					l = 300,
					c = function(e) {
						i.push({
							x: e.pageX,
							y: e.pageY
						}), i.length > f && i.shift()
					},
					h = function() {
						o && clearTimeout(o), a.exitMenu(this) && (r && a.deactivate(r), r = null)
					},
					p = function() {
						o && clearTimeout(o), a.enter(this), g(this)
					},
					d = function() {
						a.exit(this)
					},
					v = function() {
						m(this)
					},
					m = function(e) {
						if(e == r) return;
						if(u) return;
						r && a.deactivate(r), a.activate(e), r = e
					},
					g = function(e) {
						var t = y();
						t ? o = setTimeout(function() {
							g(e)
						}, t) : m(e)
					},
					y = function() {
						function d(e, t) {
							return(t.y - e.y) / (t.x - e.x)
						}
						if(!r || !e(r).is(a.submenuSelector)) return 0;
						var t = n.offset(),
							o = {
								x: t.left,
								y: t.top - a.tolerance
							},
							u = {
								x: t.left + n.outerWidth(),
								y: o.y
							},
							f = {
								x: t.left,
								y: t.top + n.outerHeight() + a.tolerance
							},
							c = {
								x: t.left + n.outerWidth(),
								y: f.y
							},
							h = i[i.length - 1],
							p = i[0];
						if(!h) return 0;
						p || (p = h);
						if(p.x < t.left || p.x > c.x || p.y < t.top || p.y > c.y) return 0;
						if(s && h.x == s.x && h.y == s.y) return 0;
						var v = u,
							m = c;
						a.submenuDirection == "left" ? (v = f, m = o) : a.submenuDirection == "below" ? (v = c, m = f) : a.submenuDirection == "above" && (v = o, m = u);
						var g = d(h, v),
							y = d(h, m),
							b = d(p, v),
							w = d(p, m);
						return g < b && y > w ? (s = h, l) : (s = null, 0)
					};
				n.mouseleave(h).find(a.rowSelector).mouseenter(p).mouseleave(d).click(v), a.subPanel && e(a.subPanel).each(function() {
					e(this).mouseenter(function() {
						u = !0
					}).mouseleave(function() {
						u = !1
					})
				}), e(document).mousemove(c)
			}
			e.fn.menuAim = function(e) {
				return this.each(function() {
					t.call(this, e)
				}), this
			}
		})(jQuery), Function.prototype.bind || (Function.prototype.bind = function(e) {
			if(typeof this != "function") throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
			var t = Array.prototype.slice.call(arguments, 1),
				n = this,
				r = function() {},
				i = function() {
					return n.apply(this instanceof r && e ? this : e || window, t.concat(Array.prototype.slice.call(arguments)))
				};
			return r.prototype = this.prototype, i.prototype = new r, i
		}), Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
			var n, r;
			if(this == null) throw new TypeError(" this is null or not defined");
			var i = Object(this),
				s = i.length >>> 0;
			if(typeof e != "function") throw new TypeError(e + " is not a function");
			arguments.length > 1 && (n = t), r = 0;
			while(r < s) {
				var o;
				r in i && (o = i[r], e.call(n, o, r, i)), r++
			}
		}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
			var n;
			if(this == null) throw new TypeError('"this" is null or not defined');
			var r = Object(this),
				i = r.length >>> 0;
			if(i === 0) return -1;
			var s = +t || 0;
			Math.abs(s) === Infinity && (s = 0);
			if(s >= i) return -1;
			n = Math.max(s >= 0 ? s : i - Math.abs(s), 0);
			while(n < i) {
				if(n in r && r[n] === e) return n;
				n++
			}
			return -1
		}), $.log = function() {
			if(typeof console == "object" && console.log)
				for(var e = 0; e < arguments.length; e++) console.log(arguments[e])
		}, $.throttle = function(e, t) {
			var n = !1;
			return function() {
				if(n) return;
				n = !0, e.apply(this, arguments), setTimeout(function() {
					n = !1
				}, t)
			}
		}, $.tab = function(e) {
			var t = {
					main: ".J-tab-c",
					menu: ".J-tab-cm",
					content: ".J-tab-cc",
					cont_child: ".J-c-panel",
					eventtype: "click",
					select: "z-select"
				},
				n = $.extend({}, t, e),
				r = n.main,
				i = n.menu,
				s = n.content,
				o = n.cont_child,
				u = n.eventtype,
				a = n.select,
				f = null;
			$(document).on(u, i + " li", function() {
				clearTimeout(f);
				var e = $(this),
					t = e.index();
				f = setTimeout(function() {
					e.addClass(a).siblings().removeClass(a), e.parent().parent().siblings(s).children(o).eq(t).removeClass("hide").siblings(o).addClass("hide")
				}, 300)
			})
		}, $.ajaxDefine = function(e) {
			var t = {
					url: e.url,
					type: e.type,
					data: e.data || {},
					error: function(e, t, n) {
						$.log(e, t, n)
					}
				},
				n = $.extend({}, t, e);
			return $.ajax(n)
		}, $.url = r, $.vars = i, $.constant = s, window.Logger = o, $.tpl = u, $.tplRender = function(e) {
			if(!e || !e.tpl) return;
			var t = $.tpl.template(e.tpl);
			$.vars.bIsEdit && !e.autocomplete ? e.container.append(t(e.json)) : e.container.html(t(e.json)), e.autocomplete && e.container.show()
		};
		var h = {
			fn_mode: $.cookie("fn_mode") === "on" ? !0 : !1,
			init: function() {
				this.autocomplete(), this.bindEvent(), this.showDistList(), this.newGuide(), this.ctrlLoginStatus(), this.addCookieHistoryListFour(), this.jsLoadImage(), this.growRef()
			},
			_getUserInfos: function() {
				if($(".m-head-pop").hasClass("J_loaded")) return;
				$.ajaxDefine({
					url: n.getLoginStatus.url,
					type: n.getLoginStatus.method || "get",
					dataType: "jsonp",
					jsonp: "callback"
				}).done(function(e) {
					if(typeof e.code != "undefined" && e.code === 200) {
						var t = "guid," + e.data.MEM_GUID,
							n = $.cookie($.vars.sCdist).split("_")[1] || "CS000016";
						$(".f-nologin").hide(), $(".u-username").show(), $(".u-vip-name").show(), $(".u-message").show(), h._getUserInfoHeadAjax("score", "get_mem_score_and_growth", t, function(e) {
							e.code == 0 && ($(".u-vip-name a").html(e.data.mem_level_desc), $(".J_integral").html("&nbsp;" + e.data.available_score), (e.data.mem_level == "TP" || e.data.mem_level == "TU") && $(".u-vip-name a").attr("href", i_domain + "/partner/me"))
						}), h._getUserInfoHeadAjax("balance", "get_account", t, function(e) {
							e.code == 0 && e.data.usable_balance != "0" && $(".J_balance").html("&nbsp;￥" + e.data.usable_balance)
						}), h._getUserInfoHeadAjax("balance", "get_bonus2_point", t, function(e) {
							e.code == 0 && e.data.point != "0" && $(".J_shop_card").html("&nbsp;￥" + e.data.point)
						}), h._getUserInfoHeadAjax("coupons", "get_valid_nums", t, function(e) {
							e.code == 0 && e.data.total_num != "0" && $(".J_coupon").html("&nbsp;" + e.data.total_num)
						}), h._getUserInfoHeadAjax("meminfo", "get_head_portrait", t + "|protocol," + window.location.protocol.split(":")[0], function(e) {
							e.code == 0 && ($(".u-username a").html(e.data.nickname), $(".J_head_img").html('<img src="' + e.data.head_portait + '" width="80" height="80" alt="" tltle="">'))
						}), h._getUserInfoHeadAjax("footprint", "query", t + "|area_code," + n + "|protocol," + window.location.protocol.split(":")[0], function(e) {
							if(e.code == 0) {
								if(!e.data || e.data.package_size == 0) return !1;
								$(".u-my-his").show();
								var t = e.data.package_list,
									n = [];
								for(var r = 0, i = t.length; r < i; r++) n.push('<li><a data-ttMyfn="' + t[r].sell_no + '" href="' + t[r].link + '"><img src="' + t[r].it_pic + '" width="50" height="50" alt="' + t[r].name + '" title="' + t[r].name + '" /></a></li>');
								$(".u-my-his .u-prod-list").html(n.join("")), $(".u-my-his .f-loading").hide(), $(".u-my-his .u-prod-list").show()
							}
						}), $(".m-head-pop").addClass("J_loaded")
					} else h._getUserInfoHeadAjax("footprint", "queryhistory", "area_code," + n + "|protocol," + window.location.protocol.split(":")[0], function(e) {
						if(e.code == 0) {
							if(!e.data || !e.data.list.length) return !1;
							$(".u-my-his").show();
							var t = e.data.list,
								n = [];
							for(var r = 0, i = t.length; r < i; r++) n.push('<li><a data-ttMyfn="' + t[r].sell_no + '" href="' + t[r].link + '"><img src="' + t[r].it_pic + '" width="50" height="50" alt="' + t[r].name + '" title="' + t[r].name + '" /></a></li>');
							$(".u-my-his .u-prod-list").html(n.join("")), $(".u-my-his .f-loading").hide(), $(".u-my-his .u-prod-list").show()
						}
					}), $(".m-head-pop").addClass("J_loaded")
				})
			},
			_getUserInfoHeadAjax: function(e, t, r, i) {
				$.ajaxDefine({
					url: n.getUserInfos.url,
					type: n.getUserInfos.method || "get",
					dataType: "jsonp",
					jsonp: "callback",
					data: {
						s: e,
						f: t,
						p: r
					}
				}).done(function(e) {
					i(e)
				})
			},
			_pushArray: function(e, t, n) {
				e.length >= n && e.pop(), e.unshift(t)
			},
			_delRepeat: function(e, t) {
				var n = [];
				for(var r = 0, i = e.length; r < i; r++) e[r] == t && n.push(r);
				for(var s = 0; s < n.length; s++) e.splice(n[s], 1)
			},
			addCookieHistoryList: function() {
				if(!location.href.match(item_url.mall)) return;
				var e = $.cookie($.vars.sItemHistoryList);
				e = e && e.split(",") || [];
				var t = data.base.sm_seq,
					n = data.base.is_orgi_item == "2" ? 1 : 0,
					r = "0_" + t + "_" + n;
				h._delRepeat(e, r), h._pushArray(e, r, 30), $.cookie($.vars.sItemHistoryList, e, {
					expires: 365,
					path: "/",
					domain: "." + $.url.sSourceDomain
				})
			},
			addCookieHistoryListFour: function() {
				var e = $.cookie($.vars.sItemHistoryListFour);
				e && $.removeCookie($.vars.sItemHistoryListFour, {
					expires: -365,
					path: "/",
					domain: "." + $.url.sSourceDomain
				})
			},
			saveHistory: function(e) {
				var t = "guid," + e,
					n = data.base.is_orgi_item == "2" ? 1 : 0,
					r = data.base.sm_seq,
					i = "0",
					s = "";
				this._getUserInfoHeadAjax("footprint", "add", t + "|sm_seq," + r + "|seq_kind," + n + "|type," + i + "|shop_id," + s, function(e) {})
			},
			bindEvent: function() {
				function l() {
					var e = $(".J_cate_list_ul");
					if(e.hasClass("J-f-self")) {
						var t = e.data("color");
						e.find("a,h3").css("color", t)
					}
				}

				function h() {
					var e = $(".J_cate_list_ul");
					if(e.hasClass("J-f-self")) {
						var t = e.data("color");
						e.find("h3").css("color", t).children("a").css("color", t)
					}
					e.find(".i-self").each(function(e, t) {
						var n = $(this),
							r = n.data("original");
						n.css("background-image", "url(" + r + ")")
					})
				}

				function p(e, t) {
					var n = t.siblings(".p-s").height();
					e === "on" ? (t.siblings(".p-b").show().siblings(".p-s").hide(), $.vars.bIsIe7 ? (s.css("height", "300px"), t.hide().siblings(".J_btn_ufad").show()) : s.stop(!0, !0).animate({
						height: "300px"
					}, 500, function() {
						t.hide().siblings(".J_btn_ufad").show()
					})) : $.vars.bIsIe7 ? (s.css("height", n), t.siblings(".p-s").show().siblings(".p-b").hide(), t.hide().siblings(".J_btn_fad").show()) : s.stop(!0, !0).animate({
						height: n
					}, 500, function() {
						t.siblings(".p-s").show().siblings(".p-b").hide(), t.hide().siblings(".J_btn_fad").show()
					})
				}

				function d(t) {
					t.addClass(e.li_cur).siblings().removeClass(e.li_cur), r.show().children(e.cate_item).eq(t.index()).removeClass(e.c_hide).siblings().addClass(e.c_hide);
					if(o.hasClass("J-f-self")) {
						var n = o.data("color"),
							i = o.data("hcolor"),
							s = o.data("hover");
						t.css("background-color", s).children("h3").css({
							color: i
						}).children("a").css("color", i), t.siblings().removeAttr("style").children("h3").css("color", n).children("a").css("color", n)
					}
					o.find(".i-self").each(function(e, n) {
						var r = $(this),
							i = "";
						r.parent().index() === t.index() ? i = r.data("hover") : i = r.data("original"), r.css("background-image", "url(" + i + ")")
					})
				}

				function v(e) {
					var t = document.body.scrollTop || document.documentElement.scrollTop,
						n = $(".J_cate_list_ul").offset().top,
						i = 0;
					n > t ? r.css("top", i) : r.css("top", t - n + i)
				}

				function m(t, r, i, s) {
					var o = "sub-loading";
					$.ajaxDefine({
						url: n.getSecondThirdMenuItem.url,
						type: n.getSecondThirdMenuItem.method || "get",
						dataType: "jsonp",
						jsonp: "callback",
						data: {
							pgSeq: t,
							siSeq: r
						}
					}).done(function(t) {
						t = JSON.parse(t);
						if(!t || t.data === "") return;
						for(var n in $.vars.oPageConfig.category) r === n && $.vars.oPageConfig.category[n].S && (t.S = $.vars.oPageConfig.category[n].S, t.L = $.vars.oPageConfig.category[n].L);
						var u = t.data.length;
						u < 3 && (u == 2 ? t.data[2] = [] : u == 1 ? (t.data[2] = [], t.data[1] = []) : t.data = [
							[],
							[],
							[]
						]), $.tplRender({
							tpl: c.category,
							container: i,
							json: t
						}), i.removeClass(o), s.addClass(e.li_loaded)
					})
				}
				var e = {
						li_cur: "cur",
						c_hide: "hide",
						li_loaded: "loaded",
						cate_item: ".J_cate_item"
					},
					t = null,
					r = $(".J_cate_box"),
					i = $(".J_cate_list_ul"),
					s = $(".J_top_banner"),
					o = $(".J_cate_list_ul"),
					u = this,
					a = 0,
					f = null;
				$.tab(), $(".J_tip_box").on("click", ".J_close_tip", function() {
					$(this).closest(".J_tip_box").hide()
				}), s.on("click", ".J_btn_closeadv", function() {
					$(this).closest(".J_top_banner").hide()
				}), s.on("click", ".J_btn_fad", function() {
					p("on", $(this))
				}), s.on("click", ".J_btn_ufad", function() {
					p("off", $(this))
				}), $(".m-g-topbar").on("mouseenter", ".u-tb-mf", this._getUserInfos), $(".J_dist_list_box,.J_select_dist").on("click", "a", this._selectDist), $(".J_all_cate_box").each(function() {
					var t = $(this),
						n = [];
					$(".J_cate_box > .J_cate_item").each(function() {
						var e = $(this),
							t = parseInt(e.index());
						isNaN(t) || (n[t] = e)
					}), t.menuAim({
						rowSelector: ".J_cate_list_ul > li",
						subPanel: n,
						activate: function(t) {
							var i = f = $(t),
								s = n[i.index()],
								o = i.index(),
								u = i.attr("data-siseq"),
								a = $.cookie($.vars.sCdist),
								l = typeof a != "undefined" ? a.split("_")[0] : $.vars.sDefalutDist.split("_")[0];
							i.hasClass(e.li_loaded) || m(l, u, r.show().children(e.cate_item).eq(o), i), v(i);
							if(!s) return;
							d(i)
						},
						deactivate: function(t) {
							f = null;
							if(!t) return;
							var i = $(t),
								s = n[i.index()];
							h();
							if(!s) return;
							$(t).removeClass(e.li_cur).removeAttr("style"), r.hide()
						},
						exitMenu: function() {
							return f && this.deactivate(f[0]), !0
						}
					})
				}), $(document).on("click", ".J_go_top", function() {
					$("html,body").animate({
						scrollTop: 0
					}, {
						duration: 500
					})
				}), $(document).on({
					mouseenter: function() {
						$(".J_all_cate_box").removeClass("hide")
					},
					mouseleave: function() {
						$(".J_all_cate_box").addClass("hide")
					}
				}, ".J_nav_cg"), l()
			},
			newGuide: function() {
				(function(e) {
					e.extend({
						arr_join: function() {
							var n = [],
								r = e("body");
							n.push('<div class="g-opc"></div> <div class="g-yds"><img src="' + e.url.sStaticDomain + "/product/images/index/yd_o.jpg?v=" + e.url.sTimeStamp + '"> <a href="javascript:void(0);" class="clo-bt js-lk"></a> <a href="javascript:void(0);" title="' + e.constant.index.guide[2] + '" class="gn-bt G-bts"></a> <a href="' + e.url.sFrontDomain + '"  target="_blank" class="gn-sp" title="' + e.constant.index.guide[1] + '"></a> <a target="_blank" href="' + e.url.sMemeberI + '/voucher/voucherBonusList" class="kq-cz J_chgurl" title="' + e.constant.index.guide[3] + '"></a> </div>'), n.push('<div class="g-abt G-ab">'), n.push('<h1 class="h-txs">' + e.constant.index.guide[0] + '<a href="javascript:void(0);" class="js-lk"></a></h1>'), n.push('<ul class="o-im O-ims">'), n.push('<li><img src="' + e.url.sStaticDomain + "/product/images/index/yd_1.jpg?v=" + e.url.sTimeStamp + '"><a href="' + e.url.sMemeberI + '/personalInfo/infoShow" class="b-wit J_chgurl" target="_blank"></a></li>'), n.push('<li><img src="' + e.url.sStaticDomain + "/product/images/index/yd_2.jpg?v=" + e.url.sTimeStamp + '"></li><li><img src="' + e.url.sStaticDomain + "/product/images/index/yd_3.jpg?v=" + e.url.sTimeStamp + '"></li><li><img src="' + e.url.sStaticDomain + "/product/images/index/yd_4.jpg?v=" + e.url.sTimeStamp + '"></li>'), n.push('<li><img src="' + e.url.sStaticDomain + "/product/images/index/yd_5.jpg?v=" + e.url.sTimeStamp + '"><a href="javascript:void(0);" class="b-clo js-lk"> <a href="' + e.url.sFrontDomain + '" class="b-shop"></a> <a href="' + e.url.sMemeberI + '/voucher/voucherBonusList" class="b-card J_chgurl"></a></li>'), n.push("</ul>"), n.push('<ul class="o-in">'), n.push('<li class="lf-btn B-fl"></li>'), n.push('<li class="lc-btn B-lc"><i class="active"></i> <i></i> <i></i> <i></i> <i></i></li>'), n.push('<li class="rg-btn B-rg"></li>'), n.push("</ul> </div>"), r.append(n.join(" ")), t()
						}
					});
					var t = function() {
						var t = e(window).width(),
							n = e(".G-ab"),
							r = e(".js-lk"),
							i = e(".O-ims"),
							s = e(".B-fl"),
							o = e(".B-rg"),
							u = e(".B-lc"),
							a = e(".G-bts"),
							f = n.outerWidth(),
							l = n.outerHeight(),
							c = (t - f) / 2;
						n.css({
							left: c,
							margin: 0
						}), a.click(function(t) {
							e(".g-yds").remove(), n.show()
						}), s.click(function(e) {
							var t = u.find("i.active").index();
							if(t == 0) return !1;
							t--, u.find("i").removeClass("active").eq(t).addClass("active"), i.find("li").hide().eq(t).show()
						}), o.click(function(r) {
							var s = u.find("i.active").index();
							if(s == u.find("i").length - 2) {
								i.css("height", "450"), i.find("li").hide(), e(".o-in,.h-txs").hide(), i.find("li:last").show();
								var o = i.find("li:last").find("img").width(),
									a = i.find("li:last").find("img").height();
								return n.css({
									width: o,
									height: a,
									padding: 0,
									left: (t - o) / 2
								}), !1
							}
							s++, u.find("i").removeClass("active").eq(s).addClass("active"), i.find("li").hide().eq(s).show()
						}), r.click(function(t) {
							window.location.href = e.url.sFrontDomain
						})
					}
				})(jQuery), this.getUrlParam2("guide") === "show" && $.arr_join()
			},
			unClaimGift: function(e) {
				$.ajaxDefine({
					url: n.getClaimGift.url,
					type: n.getClaimGift.method || "get",
					dataType: "jsonp",
					jsonp: "callback",
					data: {
						memGuid: $.base64.encode(e)
					}
				}).done(function(e) {
					var e = JSON.parse(e);
					if(typeof e.errorCode != "undefined" && e.errorCode === 0) {
						var t = e.data.msg,
							n = ['<div class="cg-opc" id="cgopacity"></div>', '      <div class="cg-content" id="cgcontent">', '          <a class="cg-close J-cg-close" href="javascript:;"></a>', '          <div class="cg-bgcont">', "              <p>恭喜您获得<em>" + t + "</em>一份，请点击领取</p>", "          </div>", '          <div class="cg-btn">', '              <a class="J-cg-close" href="http://my.' + $.url.sSourceDomain + '/growth/pkad?cur=pk">点击领取</a>', "          </div>", '          <p class="cg-tip">', "              <span>先逛逛，稍后也可至我的飞牛页面领取哦~</span>", "          </p>", "      </div>"].join(""),
							r = +(new Date),
							i = (new Date((new Date).toLocaleDateString())).getTime() - 1,
							s = r - i,
							o = 864e5 - s,
							u = new Date;
						u.setTime(o + r), $("body").append(n), $.cookie("_curDay", 1, {
							expires: u,
							path: "/",
							domain: "." + $.url.sSourceDomain
						}), $("#cgcontent").on({
							click: function(e) {
								$("#cgcontent").remove(), $("#cgopacity").remove()
							}
						}, ".J-cg-close")
					}
				})
			},
			jsLoadImage: function() {
				var e = $(".J_client").data("app"),
					t = $(".J_wx").data("wx"),
					n = $(".J_logo01").data("logoname");
				if(!t || t == "") t = $.url.sStaticDomain + "/product/images/index/weixin.png";
				$(".J_wx").append('<img class="J_new_lazy" data-original="' + t + '" alt="" title="关注飞牛网官方微信">');
				if(!e || e == "") e = $.url.sStaticDomain + "/product/images/index/APP_116.png";
				$(".J_client").html('<img class="J_new_lazy" data-original="' + e + '" height="116" width="116" alt="" title="飞牛客户端">'), $(".J_banner_box02").html('<img class="J_new_lazy" data-original="' + $(".J_banner_box02").attr("data-src") + '" height="300" width="1190" alt="" title="">'), $(".J_banner_box01").html('<img class="J_new_lazy" src="' + $(".J_banner_box01").attr("data-src") + '" width="1190" alt="" title="" usemap="#Map" ref="imageMaps">');
				if(!n || n == "") n = "飞牛网";
				$(".J_logo01").html('<img class="J_new_lazy" data-original="' + $(".J_logo01").attr("data-src") + '" height="60" width="190" alt="" title="' + n + '" />'), $(".J_logo02").html('<img class="J_new_lazy" data-original="' + $(".J_logo02").attr("data-src") + '" height="60" width="140" alt="" title="" />'), $(".J_minigif").html('<img class="J_new_lazy" data-original="' + $(".J_minigif").attr("data-src") + '" height="60" width="144" alt="" tltle="">'), $(".J_head_img").html('<img class="J_new_lazy J_head_pic" data-original="' + $(".J_head_img").attr("data-src") + '" width="80" height="80" alt="" tltle="">'), $(".J_new_lazy").lazyload({
					placeholder: "",
					threshold: 0,
					effect: "show",
					skip_invisible: !1
				})
			},
			growRef: function() {
				(function(e) {
					var t = {
							setCookie: function(e, t, n, r, i, s) {
								var o = new Date,
									u = typeof n == "undefined" ? "" : ";expires=" + (new Date(o.getTime() + n * 24 * 60 * 60 * 1e3)).toUTCString();
								document.cookie = e + "=" + t + u + (r == null ? "" : " ;path=" + r) + (i == null ? "" : " ;domain=" + i) + (s == 1 ? " ; secure" : "")
							},
							getDomain: function() {
								return www_domain_sub
							},
							getUrl: function() {
								return e.location.href
							},
							getRefer: function() {
								return document.referrer
							},
							getRefHost: function(e) {
								if(!e) return;
								var t = e.indexOf(":"),
									n = e.substring(t + 3),
									r = e.substring(0, t + 3),
									i = n.indexOf("/"),
									s = n.substring(0, i);
								return r + s
							},
							getParam: function() {
								var e = "",
									t = "",
									n = [];
								t = this.getUrl().substring(0);
								if(t && t.indexOf("ref=") != -1)
									if(t.indexOf("&") == -1) e = t.substring(t.indexOf("ref=") + 4);
									else {
										n = t.split("&");
										for(var r = 0; r < n.length; r++)
											if(n[r].indexOf("ref=") != -1) {
												e = n[r].substring(n[r].indexOf("ref=") + 4);
												break
											}
									}
								else this.getRefer() && this.getRefer().indexOf(this.getDomain()) == -1 && (e = "ref_" + this.getRefHost(this.getRefer()));
								return e
							}
						},
						n = t.getParam();
					n && t.setCookie("ref", n, "1", "/", www_domain_sub)
				})(window)
			},
			autocomplete: function() {
				function t(e) {
					this.container = e, this.timer = null, this.s_input = e.children(".J_ipt_search"), this.c_input = e.children(".J_c_input"), this.content = e.closest(".J_form").siblings(".J_tips_list"), this.s_form = e.closest(".J_form"), this.s_val = {
						search: "",
						flag: !1
					}, this.isIE = navigator.userAgent.indexOf("MSIE 7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0, this.init()
				}
				t.prototype = {
					constructor: t,
					init: function() {
						this.bindEvent()
					},
					bindEvent: function() {
						function d() {
							i.val() !== "" ? g() : h.hide()
						}

						function v() {
							r.is(":visible") && r.hide()
						}

						function m() {
							f && clearTimeout(f), f = setTimeout(function() {
								r.is(":visible") && r.hide()
							}, 500)
						}

						function g() {
							u.search = i.val(), $.ajaxDefine({
								url: n.getSearchAutocomplete.url + encodeURI(i.val()),
								type: n.getSearchAutocomplete.method || "GET",
								dataType: "jsonp",
								jsonp: "callback",
								error: function(e, t, n) {
									$.log(e, t, n)
								}
							}).done(function(e) {
								var t;
								if(!e.length || e === "[]") {
									r.hide();
									return
								}
								$.tplRender({
									tpl: c.search_autolist,
									container: r,
									json: typeof e == "string" ? JSON.parse(e) : e,
									autocomplete: !0
								})
							})
						}

						function y(e) {
							function o(t) {
								e ? s = t.index() ? t.index() - 1 : i.length - 1 : s = t.index() === i.length - 1 ? 0 : t.index() + 1
							}
							var t = r.children("li.hover"),
								n = r.children("li.active"),
								i = r.children("li"),
								s = 0;
							s = e ? i.length - 1 : 0, !n.length && t.length ? o(t) : n.length && !t.length ? o(n) : n.length && t.length && o(n), i.eq(s).addClass("active").siblings().removeClass("active"), b(i.eq(s))
						}

						function b(e) {
							if(e[0].tagName === "INPUT") {
								t.val(e.val()), s.attr("disabled", "disabled");
								return
							}
							e.hasClass("cate") ? (t.val(e.attr("label")), s.val(e.attr("cpseq")).removeAttr("disabled")) : (t.val(e.children("a").html()), s.attr("disabled", "disabled"))
						}
						var t = this.s_input,
							r = this.content,
							i = this.s_input,
							s = this.c_input,
							o = this.s_form,
							u = this.s_val,
							a = this,
							f = this.timer,
							l = $(".J_btn_search", this.container),
							h = $(".J_s_label"),
							p = this.container;
						this.isIE && t.on("input", $.throttle(function() {
							g()
						}, 300)), t.on({
							focus: $.throttle(function() {
								d()
							}, 300),
							blur: function() {
								var e = $(this).val();
								e === "" && h.show()
							},
							mouseenter: function() {
								clearTimeout(f)
							},
							keydown: function(e) {
								var n = $(this).val(),
									i = $(this).siblings("button").attr("tp-area-a");
								if($.trim(n) === "") return;
								var s = e || window.event,
									u = s.keyCode;
								u === 13 && (b(r.children(".active").length ? r.children(".active") : $(this)), typeof upUtil != "undefined" && i ? window.location.href = upUtil.resetHref(o.attr("action") + "?q=" + encodeURIComponent($.trim(t.val())), "tp", i + "." + upUtil.timeSP_kzID) : window.location.href = o.attr("action") + "?q=" + encodeURIComponent($.trim(t.val()))), (u === 38 || u === 40) && r.is(":visible") && (s.preventDefault(), y(u === 38 ? !0 : !1))
							},
							keyup: function(e) {
								/[<,>]/g.test(this.value) && (this.value = this.value.replace(/[<,>]/g, ""));
								var t = $(this).val();
								if($.trim(t) === "") return;
								var n = e || window.event,
									r = n.keyCode;
								r !== 38 && r !== 40 && g()
							}
						}), l.off().on("click", function() {
							function s(t) {
								var r = ["province_code,"],
									s = (typeof bc_code == e ? "C" : bc_code) + "_dist";
								r.push($.cookie(s).split("_")[1]), r.push("|key_word,"), r.push(encodeURIComponent(i)), $.ajaxDefine({
									url: n.getSecretOrder.url + r.join(""),
									type: n.getSecretOrder.method,
									dataType: "jsonp",
									jsonp: "callback"
								}).done(function(e) {
									e.code === 0 ? location.href = e.data.link : t()
								}).fail(function() {
									t()
								})
							}
							var r = $(this).attr("tp-area-a"),
								i = t.val();
							if(i === "") return $(this).siblings(".J_s_label").is(":visible") ? (typeof upUtil != "undefined" && r ? window.location.href = upUtil.resetHref(h.attr("data-url"), "tp", r + "." + upUtil.timeSP_kzID) : window.location.href = h.attr("data-url"), !1) : (t.focus(), !1);
							s(function() {
								typeof upUtil != "undefined" && r ? window.location.href = upUtil.resetHref(o.attr("action") + "?q=" + encodeURIComponent($.trim(t.val())), "tp", r + "." + upUtil.timeSP_kzID) : window.location.href = o.attr("action") + "?q=" + encodeURIComponent($.trim(t.val()))
							})
						}), p.on("mouseenter", function() {
							clearTimeout(f)
						}).on("mouseleave", function() {
							m()
						}), r.on("click", "li", function() {
							var e = "",
								t = $(this).children("a").attr("tp-area-a");
							b($(this)), $(this).attr("cpseq") && $(this).attr("label") ? e = "?q=" + $.trim($(this).attr("label")) + "&cpseq=" + $.trim($(this).attr("cpseq")) : e = "?q=" + $.trim($(this).children("a").text()), typeof upUtil != "undefined" && t ? window.location.href = upUtil.resetHref(o.attr("action") + e, "tp", t + "." + upUtil.timeSP_kzID) : window.location.href = o.attr("action") + e
						}).on("mouseenter", "li", function() {
							var e = $(this).index();
							$(this).removeClass("active").addClass("hover").siblings().removeClass("hover active"), clearTimeout(f)
						}).on("mouseleave", "li", function() {
							m(), r.children("li").removeClass("hover")
						}), $(document).on("keydown", function(e) {
							e.keyCode === 38
						}), $(document).on("click", ".J_s_label", function() {
							var e = $(this);
							e.hide(), e.siblings(".J_ipt_search").focus()
						})
					}
				}, window.AutoComplete = t, new t($(".J_search_form")), $.vars.bIsIe7 || new t($(".J_fix_search_form"))
			},
			ctrlLoginStatus: function() {
				var t = $(".J_login_status"),
					r = $(".J_chgurl"),
					i = this;
				$.ajaxDefine({
					url: n.getLoginStatus.url,
					type: n.getLoginStatus.method || "get",
					dataType: "jsonp",
					jsonp: "callback"
				}).done(function(r) {
					typeof funcLoginCallbackOldToNew != "undefined" && $.isFunction(funcLoginCallbackOldToNew) && funcLoginCallbackOldToNew(r);
					if(typeof r.code != "undefined" && r.code === 200) {
						var s = r.data.MEM_GUID,
							o = r.data.MEM_HEADERNAME,
							u = $.url.sMemeberPassport + "/login/loginOut?u=" + $.base64.encode(window.location.toString());
						location.href.match(item_url.mall) && data.base.is_ingeral != 1 && i.saveHistory(s), t.attr("tp-childarea", "login").html('<a href="' + $.url.sMemberDomain + '/member/home" alt="" title=""  target="_self">' + o + "</a>" + '<a href="http://my' + www_domain_sub + '/subscribe/systemList" class="u-tb-msg J_tips">消息（<span class="num">0</span>）' + '<div class="tips">' + "<span></span>" + '<i class="tip-t"></i>' + '<i class="tip-times">&times;</i>' + "</div></a>" + '<a data-guid="' + s + '" href="' + u + '" class="ml5"  title="退出" target="_self">退出</a>'), $.cookie("P_un", o, {
							expires: 14,
							path: "/",
							domain: "." + $.url.sSourceDomain
						}), $.ajax({
							type: n.getMessage.method,
							url: n.getMessage.url,
							data: "c=header&a=get_message&uid=" + $.base64.encode(s),
							dataType: "jsonp",
							jsonp: "callback",
							success: function(e) {
								if(e.code == "3000") {
									var t = $(".J_tips"),
										n = t.find(".tips"),
										r = e.data,
										i = e.data.latestInnerId,
										s = $.cookie("LOGIN_LAST_MSG_ID"),
										o = function() {
											n.hide()
										};
									t.find(".num").html(r.unreadAmount), $(".z-cir-n").html(r.unreadAmount);
									if(!!s && i == s) return;
									if(r.latestInnerTitle != "") {
										var u = setTimeout(o, 6e4);
										n.on({
											mouseover: function(e) {
												clearTimeout(u)
											},
											mouseout: function() {
												u = setTimeout(o, 6e4)
											}
										}), n.find("span").html(r.latestInnerTitle), n.show(), $(".J_tips .tip-times").on("click", function(e) {
											return e.stopPropagation(), $(this).parents(".tips").hide(), $.cookie("LOGIN_LAST_MSG_ID", i, {
												expires: 14,
												path: "/",
												domain: "." + $.url.sSourceDomain
											}), !1
										})
									}
								}
							}
						}), $.cookie("_curDay") === e && ($('meta[name="tp-pagetype"]').attr("content") === "www" || $('meta[name="tp-pagetype"]').attr("content") === "homepage") && i.unClaimGift(s)
					} else {
						i.addCookieHistoryList();
						var a = $.url.sMemeberPassport + "/gateway/login";
						$.each($(".J_chgurl"), function(e, t) {
							$(this).attr("data-follow") === "no" ? $(this).attr("href", a.split("?u=")[0] + "?u=" + $.base64.encode(location.href)) : $(this).attr("href", a.split("?u=")[0] + "?u=" + $.base64.encode($(this).attr("href")))
						}), typeof $.cookie("P_un") != "undefined" && $(".J_do_login").addClass("z-c-red").children("span").html($.cookie("P_un") + "，").end().siblings().removeClass("z-c-red")
					}
				})
			},
			selectPopupDist: function() {
				function s() {
					$.ajaxDefine({
						url: n.getLocation.url,
						type: n.getLocation.method || "get",
						dataType: "jsonp",
						jsonp: "callback",
						data: {
							t: (new Date).getTime()
						}
					}).done(function(e) {
						if(!e || !e.output) return;
						var t = $(".J_dist_list_pop a");
						t.each(function(t, n) {
							$(n).attr("data-cpg") === e.output.pkey && $(n).addClass(i)
						})
					})
				}
				var t = this,
					r = $(".J_select_dist"),
					i = "z-select";
				r.on("click", ".J_close_distpop", function() {
					t._ctrlCookie()
				}), r.on("mouseenter", "a", function() {
					r.find("a").removeClass(i), $(this).addClass(i)
				}).on("mouseleave", "a", function() {
					r.find("a").removeClass(i)
				}).on("click", "a", function() {
					var n = $(this).attr("data-cpg"),
						r = $(this).attr("tp-area-a"),
						i = location.href;
					if(i.match(/item\.(beta1.fn|feiniu.com)/) !== null) return(get_default_area_change || typeof get_default_area_change != "undefined" || get_default_area_change != e) && t._growCookie(n, function() {
						get_default_area_change(n.split("_")[1])
					}), !1;
					t._growCookie(n, function() {
						typeof upUtil != "undefined" && r ? window.location.href = upUtil.resetHref(window.location.href, "tp", r + "." + upUtil.timeSP_kzID) : window.location.reload()
					})
				}), s()
			},
			_ctrlCookie: function() {
				var e = $.vars.sDefalutDist,
					t = $(".J_dist_list_pop"),
					n = $(".J_close_distpop").attr("tp-area-a");
				t.find("a.z-select").length && (e = t.find("a.z-select").attr("data-cpg")), $(".J_select_dist").hide(), this._growCookie(e, function() {
					typeof upUtil != "undefined" && n ? window.location.href = upUtil.resetHref(window.location.href, "tp", n + "." + upUtil.timeSP_kzID) : window.location.reload()
				})
			},
			showDistList: function() {
				function o() {
					if(arguments.length) $.ajaxDefine({
						url: n.getDistList.url,
						type: n.getDistList.method || "get",
						data: {
							pkey: t.getUrlParam(i, "pg_seq") + "_" + t.getUrlParam(i, "ser_seq"),
							preview: "1"
						},
						dataType: "jsonp",
						jsonp: "callback"
					}).done(function(e) {
						if(!e || e === "null") return;
						var e = JSON.parse(e);
						$.tplRender({
							tpl: c.dist_list,
							container: $(".J_dist_list_box"),
							json: e
						}), e.no_dist = 1, $.tplRender({
							tpl: c.dist_list,
							container: $(".J_dist_list_pop"),
							json: e
						}), e.msg && (r.html(e.city), $("#dist_" + $.cookie($.vars.sCdist)).addClass(s), $(".J_dist_list_box").remove())
					});
					else {
						e = $.cookie($.vars.sCdist);
						var o = {
							pkey: e
						};
						t.fn_mode && (o.preview = t.fn_mode), $.ajaxDefine({
							url: n.getDistList.url,
							type: n.getDistList.method || "get",
							data: o,
							dataType: "jsonp",
							jsonp: "callback"
						}).done(function(n) {
							if(!n || n === "null") return;
							var n = JSON.parse(n);
							$.tplRender({
								tpl: c.dist_list,
								container: $(".J_dist_list_box"),
								json: n
							}), n.no_dist = 1, $.tplRender({
								tpl: c.dist_list,
								container: $(".J_dist_list_pop"),
								json: n
							}), n.msg ? (r.html(n.city), $("#dist_" + e).addClass(s)) : ($(".J_select_dist").show(), t.selectPopupDist())
						})
					}
				}
				var e = null,
					t = this,
					r = $(".J_cur_place"),
					i = window.location.href,
					s = "z-select";
				$.vars.bIsPreview ? o("preview") : o()
			},
			_selectDist: function() {
				function o(e, t) {
					var r = t.split("_"),
						i = {};
					e === "market" ? i.si_seq = $.vars.sCate : e === "category" && (i.si_seq = $.vars.sSiseq), i.pg_seq = r[0], i.ser_seq = r[1], i.page = e, $.ajaxDefine({
						async: !0,
						url: n.checkPageData.url,
						type: n.checkPageData.method || "POST",
						dataType: "JSON",
						data: {
							data: JSON.stringify(i)
						},
						timeout: 5e3,
						error: function(e, t, n) {},
						success: function(e) {
							if(e.msg) {
								if(!confirm(e.msg)) return !1;
								h._growCookie(t, function() {
									window.location.href = e.url
								})
							} else h._growCookie(t, function() {
								window.location.href = e.url
							})
						}
					})
				}
				var t = $(this).attr("data-cpg"),
					r = $(this).attr("tp-area-a"),
					i = location.href,
					s = this;
				if(i.match(/\.(fn|com)(\/sh)?\/market/) !== null) o("market", t);
				else {
					if(i.match(/item\.(beta1.fn|feiniu.com)/) !== null) return(get_default_area_change || typeof get_default_area_change != "undefined" || get_default_area_change != e) && h._growCookie(t, function() {
						get_default_area_change(t.split("_")[1])
					}), !1;
					h._growCookie(t, function() {
						typeof upUtil != "undefined" && r ? window.location.href = upUtil.resetHref(window.location.href, "tp", r + "." + upUtil.timeSP_kzID) : window.location.reload()
					})
				}
			},
			_growCookie: function(e, t) {
				$.cookie($.vars.sCdist, e, {
					expires: 365,
					path: "/",
					domain: "." + $.url.sSourceDomain
				}), !~location.host.indexOf(".rt-mart.com.cn") || $.cookie($.vars.sCdist, e, {
					expires: 365,
					path: "/",
					domain: location.host.substring(3)
				}), $.ajaxDefine({
					url: n.getDefaultArea.url,
					type: n.getDefaultArea.method || "GET",
					dataType: "jsonp",
					jsonp: "callback",
					data: {
						province: e.split("_")[1]
					},
					async: !1,
					error: function() {
						t && $.isFunction(t) && t()
					}
				}).done(function(e) {
					if(e.code === 0 && e.data.length) {
						var n = [];
						e.data.forEach(function(e, t) {
							n.push(e.code)
						}), $.cookie($.vars.sCdistArea, n.join("_"), {
							expires: 365,
							path: "/",
							domain: "." + $.url.sSourceDomain
						})
					}
					t && $.isFunction(t) && t()
				})
			},
			getUrlParam: function(e, t) {
				var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
					r = e.split("?")[1].match(n);
				return r != null ? decodeURIComponent(r[2]) : null
			},
			getUrlParam2: function(e) {
				var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
					n = window.location.search.substr(1).match(t);
				return n != null ? decodeURIComponent(n[2]) : null
			}
		};
		return $(function() {
			h.init()
		}), $
	});