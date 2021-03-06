/* 24593167-1d52-4133-93c5-246402ec006e */
(function(Y, m) {
    "function" === typeof define && define.amd ? define(["angular"], m) : "object" === typeof exports ? module.exports = m(require("angular")) : Y.mobiscroll = m(Y.angular)
})(this, function(Y) {
    var m = m || {};
    (function(h, e, b) {
        function g(a) {
            return "function" === typeof a
        }

        function a(a) {
            return "object" === typeof a
        }

        function d(a) {
            return a.replace(/-+(.)?/g, function(a, n) {
                return n ? n.toUpperCase() : ""
            })
        }

        function c(a, g, n) {
            for (var E in g)
                if (n && (C.isPlainObject(g[E]) || C.isArray(g[E]))) {
                    if (C.isPlainObject(g[E]) && !C.isPlainObject(a[E]) ||
                        C.isArray(g[E]) && !C.isArray(a[E])) a[E] = {};
                    c(a[E], g[E], n)
                } else g[E] !== b && (a[E] = g[E])
        }

        function o(a) {
            return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }
        var r = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            },
            s = {
                readonly: "readOnly"
            },
            k = [],
            j = Array.prototype.slice,
            i = function() {
                var c = function(n) {
                        for (var a = 0, a = 0; a < n.length; a++) this[a] = n[a];
                        this.length = n.length;
                        return i(this)
                    },
                    i = function(n,
                        a) {
                        var b = [],
                            d = 0;
                        if (n && !a && n instanceof c) return n;
                        if (g(n)) return i(e).ready(n);
                        if (n)
                            if ("string" === typeof n) {
                                var p, n = d = n.trim();
                                if (0 <= d.indexOf("<") && 0 <= d.indexOf(">")) {
                                    p = "div";
                                    0 === d.indexOf("<li") && (p = "ul");
                                    0 === d.indexOf("<tr") && (p = "tbody");
                                    if (0 === d.indexOf("<td") || 0 === d.indexOf("<th")) p = "tr";
                                    0 === d.indexOf("<tbody") && (p = "table");
                                    0 === d.indexOf("<option") && (p = "select");
                                    p = e.createElement(p);
                                    p.innerHTML = d;
                                    for (d = 0; d < p.childNodes.length; d++) b.push(p.childNodes[d])
                                } else {
                                    !a && "#" === n[0] && !n.match(/[ .<>:~]/) ?
                                        p = [e.getElementById(n.split("#")[1])] : (a instanceof c && (a = a[0]), p = (a || e).querySelectorAll(n));
                                    for (d = 0; d < p.length; d++) p[d] && b.push(p[d])
                                }
                            } else if (n.nodeType || n === h || n === e) b.push(n);
                        else if (0 < n.length && n[0].nodeType)
                            for (d = 0; d < n.length; d++) b.push(n[d]);
                        else i.isArray(n) && (b = n);
                        return new c(b)
                    };
                c.prototype = {
                    ready: function(n) {
                        /complete|loaded|interactive/.test(e.readyState) && e.body ? n(i) : e.addEventListener("DOMContentLoaded", function() {
                            n(i)
                        }, !1);
                        return this
                    },
                    concat: k.concat,
                    empty: function() {
                        return this.each(function() {
                            this.innerHTML =
                                ""
                        })
                    },
                    map: function(n) {
                        return i(i.map(this, function(a, b) {
                            return n.call(a, b, a)
                        }))
                    },
                    slice: function() {
                        return i(j.apply(this, arguments))
                    },
                    addClass: function(n) {
                        if ("undefined" === typeof n) return this;
                        for (var n = n.split(" "), a = 0; a < n.length; a++)
                            for (var b = 0; b < this.length; b++) "undefined" !== typeof this[b].classList && "" !== n[a] && this[b].classList.add(n[a]);
                        return this
                    },
                    removeClass: function(n) {
                        for (var n = n.split(" "), a = 0; a < n.length; a++)
                            for (var b = 0; b < this.length; b++) "undefined" !== typeof this[b].classList && "" !== n[a] &&
                                this[b].classList.remove(n[a]);
                        return this
                    },
                    hasClass: function(a) {
                        return this[0] ? this[0].classList.contains(a) : !1
                    },
                    toggleClass: function(a) {
                        for (var a = a.split(" "), b = 0; b < a.length; b++)
                            for (var f = 0; f < this.length; f++) "undefined" !== typeof this[f].classList && this[f].classList.toggle(a[b]);
                        return this
                    },
                    closest: function(n, b) {
                        var f = this[0],
                            c = !1;
                        for (a(n) && (c = i(n)); f && !(c ? 0 <= c.indexOf(f) : i.matches(f, n));) f = f !== b && f.nodeType !== f.DOCUMENT_NODE && f.parentNode;
                        return i(f)
                    },
                    attr: function(a, c) {
                        var f;
                        if (1 === arguments.length &&
                            "string" === typeof a && this.length) return f = this[0].getAttribute(a), this[0] && (f || "" === f) ? f : b;
                        for (f = 0; f < this.length; f++)
                            if (2 === arguments.length) this[f].setAttribute(a, c);
                            else
                                for (var i in a) this[f][i] = a[i], this[f].setAttribute(i, a[i]);
                        return this
                    },
                    removeAttr: function(a) {
                        for (var b = 0; b < this.length; b++) this[b].removeAttribute(a);
                        return this
                    },
                    prop: function(a, c) {
                        a = s[a] || a;
                        if (1 === arguments.length && "string" === typeof a) return this[0] ? this[0][a] : b;
                        for (var f = 0; f < this.length; f++) this[f][a] = c;
                        return this
                    },
                    val: function(a) {
                        if ("undefined" ===
                            typeof a) return this.length && this[0].multiple ? i.map(this.find("option:checked"), function(a) {
                            return a.value
                        }) : this[0] ? this[0].value : b;
                        if (this.length && this[0].multiple) i.each(this[0].options, function() {
                            this.selected = -1 != a.indexOf(this.value)
                        });
                        else
                            for (var c = 0; c < this.length; c++) this[c].value = a;
                        return this
                    },
                    on: function(a, b, f, c) {
                        function d(a) {
                            var n, l;
                            n = a.target;
                            if (i(n).is(b)) f.call(n, a);
                            else {
                                l = i(n).parents();
                                for (n = 0; n < l.length; n++) i(l[n]).is(b) && f.call(l[n], a)
                            }
                        }

                        function e(a, n, b, f) {
                            n = n.split(".");
                            a.DomNameSpaces ||
                                (a.DomNameSpaces = []);
                            a.DomNameSpaces.push({
                                namespace: n[1],
                                event: n[0],
                                listener: b,
                                capture: f
                            });
                            a.addEventListener(n[0], b, f)
                        }
                        var a = a.split(" "),
                            o, j;
                        for (o = 0; o < this.length; o++)
                            if (g(b) || !1 === b) {
                                g(b) && (c = (f = b) || !1);
                                for (j = 0; j < a.length; j++) - 1 != a[j].indexOf(".") ? e(this[o], a[j], f, c) : this[o].addEventListener(a[j], f, c)
                            } else
                                for (j = 0; j < a.length; j++) this[o].DomLiveListeners || (this[o].DomLiveListeners = []), this[o].DomLiveListeners.push({
                                    listener: f,
                                    liveListener: d
                                }), -1 != a[j].indexOf(".") ? e(this[o], a[j], d, c) : this[o].addEventListener(a[j],
                                    d, c);
                        return this
                    },
                    off: function(a, b, f, c) {
                        function i(a) {
                            var b, n, f;
                            b = a.split(".");
                            var a = b[0],
                                c = b[1];
                            for (b = 0; b < j.length; ++b)
                                if (j[b].DomNameSpaces) {
                                    for (n = 0; n < j[b].DomNameSpaces.length; ++n)
                                        if (f = j[b].DomNameSpaces[n], f.namespace == c && (f.event == a || !a)) j[b].removeEventListener(f.event, f.listener, f.capture), f.removed = !0;
                                    for (n = j[b].DomNameSpaces.length - 1; 0 <= n; --n) j[b].DomNameSpaces[n].removed && j[b].DomNameSpaces.splice(n, 1)
                                }
                        }
                        var d, e, o, j = this,
                            a = a.split(" ");
                        for (d = 0; d < a.length; d++)
                            for (e = 0; e < this.length; e++)
                                if (g(b) ||
                                    !1 === b) g(b) && (c = (f = b) || !1), 0 === a[d].indexOf(".") ? i(a[d].substr(1), f, c) : this[e].removeEventListener(a[d], f, c);
                                else {
                                    if (this[e].DomLiveListeners)
                                        for (o = 0; o < this[e].DomLiveListeners.length; o++) this[e].DomLiveListeners[o].listener === f && this[e].removeEventListener(a[d], this[e].DomLiveListeners[o].liveListener, c);
                                    this[e].DomNameSpaces && this[e].DomNameSpaces.length && a[d] && i(a[d])
                                }
                        return this
                    },
                    trigger: function(a, b) {
                        for (var f = a.split(" "), c = 0; c < f.length; c++)
                            for (var i = 0; i < this.length; i++) {
                                var d;
                                try {
                                    d = new CustomEvent(f[c], {
                                        detail: b,
                                        bubbles: !0,
                                        cancelable: !0
                                    })
                                } catch (g) {
                                    d = e.createEvent("Event"), d.initEvent(f[c], !0, !0), d.detail = b
                                }
                                this[i].dispatchEvent(d)
                            }
                        return this
                    },
                    width: function(a) {
                        return a !== b ? this.css("width", a) : this[0] === h ? h.innerWidth : this[0] === e ? e.documentElement.scrollWidth : 0 < this.length ? parseFloat(this.css("width")) : null
                    },
                    height: function(a) {
                        if (a !== b) return this.css("height", a);
                        if (this[0] === h) return h.innerHeight;
                        if (this[0] === e) {
                            var a = e.body,
                                c = e.documentElement;
                            return Math.max(a.scrollHeight, a.offsetHeight, c.clientHeight,
                                c.scrollHeight, c.offsetHeight)
                        }
                        return 0 < this.length ? parseFloat(this.css("height")) : null
                    },
                    innerWidth: function() {
                        var a = this;
                        if (0 < this.length) {
                            if (this[0].innerWidth) return this[0].innerWidth;
                            var b = this[0].offsetWidth;
                            ["left", "right"].forEach(function(f) {
                                b -= parseInt(a.css(d("border-" + f + "-width")) || 0, 10)
                            });
                            return b
                        }
                    },
                    innerHeight: function() {
                        var a = this;
                        if (0 < this.length) {
                            if (this[0].innerHeight) return this[0].innerHeight;
                            var b = this[0].offsetHeight;
                            ["top", "bottom"].forEach(function(f) {
                                b -= parseInt(a.css(d("border-" +
                                    f + "-width")) || 0, 10)
                            });
                            return b
                        }
                    },
                    offset: function() {
                        if (0 < this.length) {
                            var a = this[0],
                                b = a.getBoundingClientRect(),
                                f = e.body;
                            return {
                                top: b.top + (h.pageYOffset || a.scrollTop) - (a.clientTop || f.clientTop || 0),
                                left: b.left + (h.pageXOffset || a.scrollLeft) - (a.clientLeft || f.clientLeft || 0)
                            }
                        }
                    },
                    hide: function() {
                        for (var a = 0; a < this.length; a++) this[a].style.display = "none";
                        return this
                    },
                    show: function() {
                        for (var a = 0; a < this.length; a++) "none" == this[a].style.display && (this[a].style.display = "block"), "none" == this[a].style.getPropertyValue("display") &&
                            (this[a].style.display = "block");
                        return this
                    },
                    clone: function() {
                        return this.map(function() {
                            return this.cloneNode(!0)
                        })
                    },
                    styles: function() {
                        return this[0] ? h.getComputedStyle(this[0], null) : b
                    },
                    css: function(a, b) {
                        var f, c, d, g, e = this[0],
                            j = "";
                        if (2 > arguments.length) {
                            if (!e) return;
                            f = getComputedStyle(e, "");
                            if ("string" === typeof a) return e.style[a] || f.getPropertyValue(a);
                            if (i.isArray(a)) return g = {}, i.each(a, function(a, b) {
                                g[b] = e.style[b] || f.getPropertyValue(b)
                            }), g
                        }
                        if ("string" === typeof a) !b && 0 !== b ? this.each(function() {
                                this.style.removeProperty(o(a))
                            }) :
                            j = o(a) + ":" + ("number" == typeof b && !r[o(a)] ? b + "px" : b);
                        else
                            for (d in a)
                                if (!a[d] && 0 !== a[d])
                                    for (c = 0; c < this.length; c++) this[c].style.removeProperty(o(d));
                                else j += o(d) + ":" + ("number" == typeof a[d] && !r[o(d)] ? a[d] + "px" : a[d]) + ";"; return this.each(function() {
                            this.style.cssText += ";" + j
                        })
                    },
                    each: function(a) {
                        for (var b = 0; b < this.length && !1 !== a.apply(this[b], [b, this[b]]); b++);
                        return this
                    },
                    filter: function(a) {
                        for (var b = [], f = 0; f < this.length; f++) g(a) ? a.call(this[f], f, this[f]) && b.push(this[f]) : i.matches(this[f], a) && b.push(this[f]);
                        return new c(b)
                    },
                    html: function(a) {
                        if ("undefined" === typeof a) return this[0] ? this[0].innerHTML : b;
                        this.empty();
                        for (var c = 0; c < this.length; c++) this[c].innerHTML = a;
                        return this
                    },
                    text: function(a) {
                        if ("undefined" === typeof a) return this[0] ? this[0].textContent.trim() : null;
                        for (var b = 0; b < this.length; b++) this[b].textContent = a;
                        return this
                    },
                    is: function(a) {
                        return 0 < this.length && i.matches(this[0], a)
                    },
                    not: function(n) {
                        var c = [];
                        if (g(n) && n.call !== b) this.each(function(a) {
                            n.call(this, a) || c.push(this)
                        });
                        else {
                            var f = "string" ==
                                typeof n ? this.filter(n) : "number" == typeof n.length && g(n.item) ? j.call(n) : i(n);
                            a(f) && (f = i.map(f, function(a) {
                                return a
                            }));
                            this.each(function(a, b) {
                                0 > f.indexOf(b) && c.push(b)
                            })
                        }
                        return i(c)
                    },
                    indexOf: function(a) {
                        for (var b = 0; b < this.length; b++)
                            if (this[b] === a) return b
                    },
                    index: function(a) {
                        return a ? this.indexOf(i(a)[0]) : this.parent().children().indexOf(this[0])
                    },
                    get: function(a) {
                        return a === b ? j.call(this) : this[0 <= a ? a : a + this.length]
                    },
                    eq: function(a) {
                        if ("undefined" === typeof a) return this;
                        var b = this.length;
                        return a > b -
                            1 ? new c([]) : 0 > a ? (a = b + a, 0 > a ? new c([]) : new c([this[a]])) : new c([this[a]])
                    },
                    append: function(a) {
                        var b, f;
                        for (b = 0; b < this.length; b++)
                            if ("string" === typeof a) {
                                f = e.createElement("div");
                                for (f.innerHTML = a; f.firstChild;) this[b].appendChild(f.firstChild)
                            } else if (a instanceof c)
                            for (f = 0; f < a.length; f++) this[b].appendChild(a[f]);
                        else this[b].appendChild(a);
                        return this
                    },
                    appendTo: function(a) {
                        i(a).append(this);
                        return this
                    },
                    prepend: function(a) {
                        var b, f;
                        for (b = 0; b < this.length; b++)
                            if ("string" === typeof a) {
                                var d = e.createElement("div");
                                d.innerHTML = a;
                                for (f = d.childNodes.length - 1; 0 <= f; f--) this[b].insertBefore(d.childNodes[f], this[b].childNodes[0])
                            } else if (a instanceof c)
                            for (f = 0; f < a.length; f++) this[b].insertBefore(a[f], this[b].childNodes[0]);
                        else this[b].insertBefore(a, this[b].childNodes[0]);
                        return this
                    },
                    prependTo: function(a) {
                        i(a).prepend(this);
                        return this
                    },
                    insertBefore: function(a) {
                        for (var a = i(a), b = 0; b < this.length; b++)
                            if (1 === a.length) a[0].parentNode.insertBefore(this[b], a[0]);
                            else if (1 < a.length)
                            for (var f = 0; f < a.length; f++) a[f].parentNode.insertBefore(this[b].cloneNode(!0),
                                a[f]);
                        return this
                    },
                    insertAfter: function(a) {
                        for (var a = i(a), b = 0; b < this.length; b++)
                            if (1 === a.length) a[0].parentNode.insertBefore(this[b], a[0].nextSibling);
                            else if (1 < a.length)
                            for (var f = 0; f < a.length; f++) a[f].parentNode.insertBefore(this[b].cloneNode(!0), a[f].nextSibling);
                        return this
                    },
                    next: function(a) {
                        return 0 < this.length ? a ? this[0].nextElementSibling && i(this[0].nextElementSibling).is(a) ? new c([this[0].nextElementSibling]) : new c([]) : this[0].nextElementSibling ? new c([this[0].nextElementSibling]) : new c([]) :
                            new c([])
                    },
                    nextAll: function(a) {
                        var b = [],
                            f = this[0];
                        if (!f) return new c([]);
                        for (; f.nextElementSibling;) f = f.nextElementSibling, a ? i(f).is(a) && b.push(f) : b.push(f);
                        return new c(b)
                    },
                    prev: function(a) {
                        return 0 < this.length ? a ? this[0].previousElementSibling && i(this[0].previousElementSibling).is(a) ? new c([this[0].previousElementSibling]) : new c([]) : this[0].previousElementSibling ? new c([this[0].previousElementSibling]) : new c([]) : new c([])
                    },
                    prevAll: function(a) {
                        var b = [],
                            f = this[0];
                        if (!f) return new c([]);
                        for (; f.previousElementSibling;) f =
                            f.previousElementSibling, a ? i(f).is(a) && b.push(f) : b.push(f);
                        return new c(b)
                    },
                    parent: function(a) {
                        for (var b = [], f = 0; f < this.length; f++) null !== this[f].parentNode && (a ? i(this[f].parentNode).is(a) && b.push(this[f].parentNode) : b.push(this[f].parentNode));
                        return i(i.unique(b))
                    },
                    parents: function(a) {
                        for (var b = [], f = 0; f < this.length; f++)
                            for (var c = this[f].parentNode; c;) a ? i(c).is(a) && b.push(c) : b.push(c), c = c.parentNode;
                        return i(i.unique(b))
                    },
                    find: function(a) {
                        for (var b = [], f = 0; f < this.length; f++)
                            for (var d = this[f].querySelectorAll(a),
                                    i = 0; i < d.length; i++) b.push(d[i]);
                        return new c(b)
                    },
                    children: function(a) {
                        for (var b = [], f = 0; f < this.length; f++)
                            for (var d = this[f].childNodes, g = 0; g < d.length; g++) a ? 1 === d[g].nodeType && i(d[g]).is(a) && b.push(d[g]) : 1 === d[g].nodeType && b.push(d[g]);
                        return new c(i.unique(b))
                    },
                    remove: function() {
                        for (var a = 0; a < this.length; a++) this[a].parentNode && this[a].parentNode.removeChild(this[a]);
                        return this
                    },
                    add: function() {
                        var a, b;
                        for (a = 0; a < arguments.length; a++) {
                            var f = i(arguments[a]);
                            for (b = 0; b < f.length; b++) this[this.length] = f[b],
                                this.length++
                        }
                        return this
                    },
                    before: function(a) {
                        i(a).insertBefore(this);
                        return this
                    },
                    after: function(a) {
                        i(a).insertAfter(this);
                        return this
                    },
                    scrollTop: function(a) {
                        if (this.length) {
                            var c = "scrollTop" in this[0];
                            return a === b ? c ? this[0].scrollTop : this[0].pageYOffset : this.each(c ? function() {
                                this.scrollTop = a
                            } : function() {
                                this.scrollTo(this.scrollX, a)
                            })
                        }
                    },
                    scrollLeft: function(a) {
                        if (this.length) {
                            var c = "scrollLeft" in this[0];
                            return a === b ? c ? this[0].scrollLeft : this[0].pageXOffset : this.each(c ? function() {
                                this.scrollLeft =
                                    a
                            } : function() {
                                this.scrollTo(a, this.scrollY)
                            })
                        }
                    },
                    contents: function() {
                        return this.map(function(a, b) {
                            return j.call(b.childNodes)
                        })
                    },
                    nextUntil: function(a) {
                        for (var b = this, f = []; b.length && !b.filter(a).length;) f.push(b[0]), b = b.next();
                        return i(f)
                    },
                    prevUntil: function(a) {
                        for (var b = this, f = []; b.length && !i(b).filter(a).length;) f.push(b[0]), b = b.prev();
                        return i(f)
                    },
                    detach: function() {
                        return this.remove()
                    }
                };
                i.fn = c.prototype;
                return i
            }(),
            C = i;
        m.$ = i;
        C.inArray = function(a, b, c) {
            return k.indexOf.call(b, a, c)
        };
        C.extend = function(a) {
            var b,
                d = j.call(arguments, 1);
            "boolean" == typeof a && (b = a, a = d.shift());
            a = a || {};
            d.forEach(function(d) {
                c(a, d, b)
            });
            return a
        };
        C.isFunction = g;
        C.isArray = function(a) {
            return "[object Array]" === Object.prototype.toString.apply(a)
        };
        C.isPlainObject = function(b) {
            return a(b) && null !== b && b !== b.window && Object.getPrototypeOf(b) == Object.prototype
        };
        C.each = function(b, c) {
            var d;
            if (a(b) && c) {
                if (C.isArray(b) || b instanceof i)
                    for (d = 0; d < b.length && !1 !== c.call(b[d], d, b[d]); d++);
                else
                    for (d in b)
                        if (b.hasOwnProperty(d) && "length" !== d && !1 === c.call(b[d],
                                d, b[d])) break; return this
            }
        };
        C.unique = function(a) {
            for (var b = [], c = 0; c < a.length; c++) - 1 === b.indexOf(a[c]) && b.push(a[c]);
            return b
        };
        C.map = function(a, b) {
            var c, d = [],
                f;
            if ("number" == typeof a.length)
                for (f = 0; f < a.length; f++) c = b(a[f], f), null !== c && d.push(c);
            else
                for (f in a) c = b(a[f], f), null !== c && d.push(c);
            return 0 < d.length ? C.fn.concat.apply([], d) : d
        };
        C.matches = function(a, b) {
            return !b || !a || 1 !== a.nodeType ? !1 : (a.matchesSelector || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector).call(a, b)
        }
    })(window, document);
    m = m || {};
    (function(h, e, b) {
        function g(a) {
            for (var c in a)
                if (j[a[c]] !== b) return !0;
            return !1
        }

        function a(a, c, d) {
            var f = a;
            if ("object" === typeof c) return a.each(function() {
                s[this.id] && s[this.id].destroy();
                new m.classes[c.component || "Scroller"](this, c)
            });
            "string" === typeof c && a.each(function() {
                var a;
                if ((a = s[this.id]) && a[c])
                    if (a = a[c].apply(this, Array.prototype.slice.call(d, 1)), a !== b) return f = a, !1
            });
            return f
        }

        function d(a) {
            if (c.tapped && !a.tap && !("TEXTAREA" == a.target.nodeName && "mousedown" == a.type)) return a.stopPropagation(),
                a.preventDefault(), !1
        }
        var c, o = "undefined" == typeof jQuery ? m.$ : jQuery,
            r = +new Date,
            s = {},
            k = o.extend,
            j = e.createElement("modernizr").style,
            h = g(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]),
            i = g(["flex", "msFlex", "WebkitBoxDirection"]),
            C = function() {
                var a = ["Webkit", "Moz", "O", "ms"],
                    b;
                for (b in a)
                    if (g([a[b] + "Transform"])) return "-" + a[b].toLowerCase() + "-";
                return ""
            }(),
            H = C.replace(/^\-/, "").replace(/\-$/, "").replace("moz", "Moz");
        c = m = {
            $: o,
            version: "3.0.0-beta4beta4",
            util: {
                prefix: C,
                jsPrefix: H,
                has3d: h,
                hasFlex: i,
                isOldAndroid: /android [1-3]/i.test(navigator.userAgent),
                preventClick: function() {
                    c.tapped++;
                    setTimeout(function() {
                        c.tapped--
                    }, 500)
                },
                testTouch: function(a, b) {
                    if ("touchstart" == a.type) o(b).attr("data-touch", "1");
                    else if (o(b).attr("data-touch")) return o(b).removeAttr("data-touch"), !1;
                    return !0
                },
                objectToArray: function(a) {
                    var b = [],
                        c;
                    for (c in a) b.push(a[c]);
                    return b
                },
                arrayToObject: function(a) {
                    var b = {},
                        c;
                    if (a)
                        for (c = 0; c < a.length; c++) b[a[c]] = a[c];
                    return b
                },
                isNumeric: function(a) {
                    return 0 <=
                        a - parseFloat(a)
                },
                isString: function(a) {
                    return "string" === typeof a
                },
                getCoord: function(a, b, c) {
                    var f = a.originalEvent || a,
                        b = (c ? "page" : "client") + b;
                    return f.targetTouches && f.targetTouches[0] ? f.targetTouches[0][b] : f.changedTouches && f.changedTouches[0] ? f.changedTouches[0][b] : a[b]
                },
                getPosition: function(a, c) {
                    var d = getComputedStyle(a[0]),
                        f;
                    o.each(["t", "webkitT", "MozT", "OT", "msT"], function(a, c) {
                        if (d[c + "ransform"] !== b) return f = d[c + "ransform"], !1
                    });
                    f = f.split(")")[0].split(", ");
                    return c ? f[13] || f[5] : f[12] || f[4]
                },
                constrain: function(a,
                    b, c) {
                    return Math.max(b, Math.min(a, c))
                },
                vibrate: function(a) {
                    "vibrate" in navigator && navigator.vibrate(a || 50)
                }
            },
            tapped: 0,
            autoTheme: "mobiscroll",
            presets: {
                scroller: {},
                numpad: {},
                listview: {},
                menustrip: {}
            },
            themes: {
                form: {},
                frame: {},
                listview: {},
                menustrip: {},
                progress: {}
            },
            i18n: {},
            instances: s,
            classes: {},
            components: {},
            settings: {},
            setDefaults: function(a) {
                k(this.settings, a)
            },
            presetShort: function(d, i, g) {
                c[d] = function(a, e) {
                    var j, u, k = {},
                        h = e || {};
                    o.extend(h, {
                        preset: !1 === g ? b : d
                    });
                    o(a).each(function() {
                        s[this.id] && s[this.id].destroy();
                        j = new c.classes[i || "Scroller"](this, h);
                        k[this.id] = j
                    });
                    u = Object.keys(k);
                    return 1 == u.length ? k[u[0]] : k
                };
                this.components[d] = function(c) {
                    return a(this, k(c, {
                        component: i,
                        preset: !1 === g ? b : d
                    }), arguments)
                }
            }
        };
        o.mobiscroll = m;
        o.fn.mobiscroll = function(b) {
            k(this, m.components);
            return a(this, b, arguments)
        };
        m.classes.Base = function(a, b) {
            var c, f, d, i, g, e, j = m,
                h = j.util,
                t = h.getCoord,
                l = this;
            l.settings = {};
            l._presetLoad = function() {};
            l._init = function(o) {
                for (var t in l.settings) delete l.settings[t];
                d = l.settings;
                k(b, o);
                l._hasDef &&
                    (e = j.settings);
                k(d, l._defaults, e, b);
                if (l._hasTheme) {
                    g = d.theme;
                    if ("auto" == g || !g) g = j.autoTheme;
                    "default" == g && (g = "mobiscroll");
                    b.theme = g;
                    i = j.themes[l._class] ? j.themes[l._class][g] : {}
                }
                l._hasLang && (c = j.i18n[d.lang]);
                l._hasTheme && l.trigger("onThemeLoad", {
                    lang: c,
                    settings: b
                });
                k(d, i, c, e, b);
                if (l._hasPreset && (l._presetLoad(d), f = j.presets[l._class][d.preset])) f = f.call(a, l), k(d, f, b)
            };
            l._destroy = function() {
                l && (l.trigger("onDestroy", []), delete s[a.id], l = null)
            };
            l.tap = function(a, b, c) {
                function f(a) {
                    p || (c && a.preventDefault(),
                        p = this, o = t(a, "X"), j = t(a, "Y"), k = !1)
                }

                function i(a) {
                    if (p && !k && 9 < Math.abs(t(a, "X") - o) || 9 < Math.abs(t(a, "Y") - j)) k = !0
                }

                function g(a) {
                    p && (k || (a.preventDefault(), b.call(p, a, l)), p = !1, h.preventClick())
                }

                function e() {
                    p = !1
                }
                var o, j, p, k;
                if (d.tap) {
                    a.on("touchstart.mbsc", f).on("touchcancel.mbsc", e).on("touchmove.mbsc", i).on("touchend.mbsc", g).on("click.mbsc", function (a) {
                        a.preventDefault();
                        b.call(this, a, l)
                    });
                    if (a.parent().hasClass('calendar-div')) {
                        a.parent().children('span.spanbtn').on("touchstart.mbsc", f).on("touchcancel.mbsc", e).on("touchmove.mbsc", i).on("touchend.mbsc", g).on("click.mbsc", function (a) {
                            a.preventDefault();
                            b.call(this, a, l)
                        });
                    }
                }
            };
            l.trigger = function(c, d) {
                var g;
                o.each([e, i, f, b], function(b, f) {
                    f && f[c] && (g = f[c].call(a, d || {}, l))
                });
                return g
            };
            l.option = function(a, b) {
                var c = {};
                "object" === typeof a ? c = a : c[a] = b;
                l.init(c)
            };
            l.getInst = function() {
                return l
            };
            b = b || {};
            o(a).addClass("mbsc-comp");
            a.id || (a.id = "mobiscroll" + ++r);
            s[a.id] = l
        };
        e.addEventListener && o.each(["mouseover", "mousedown", "mouseup", "click"], function(a, b) {
            e.addEventListener(b, d, !0)
        })
    })(window, document);
    m.i18n.hu = {
        setText: "OK",
        cancelText: "M\u00e9gse",
        clearText: "T\u00f6rl\u00e9s",
        selectedText: "{count} kiv\u00e1lasztva",
        dateFormat: "yy.mm.dd.",
        dayNames: "Vas\u00e1rnap,H\u00e9tf\u0151,Kedd,Szerda,Cs\u00fct\u00f6rt\u00f6k,P\u00e9ntek,Szombat".split(","),
        dayNamesShort: "Va,H\u00e9,Ke,Sze,Cs\u00fc,P\u00e9,Szo".split(","),
        dayNamesMin: "V,H,K,Sz,Cs,P,Sz".split(","),
        dayText: "Nap",
        delimiter: ".",
        hourText: "\u00d3ra",
        minuteText: "Perc",
        monthNames: "Janu\u00e1r,Febru\u00e1r,M\u00e1rcius,\u00c1prilis,M\u00e1jus,J\u00fanius,J\u00falius,Augusztus,Szeptember,Okt\u00f3ber,November,December".split(","),
        monthNamesShort: "Jan,Feb,M\u00e1r,\u00c1pr,M\u00e1j,J\u00fan,J\u00fal,Aug,Szep,Okt,Nov,Dec".split(","),
        monthText: "H\u00f3nap",
        secText: "M\u00e1sodperc",
        timeFormat: "H:ii",
        yearText: "\u00c9v",
        nowText: "Most",
        pmText: "de",
        amText: "du",
        firstDay: 1,
        dateText: "D\u00e1tum",
        timeText: "Id\u0151",
        calendarText: "Napt\u00e1r",
        todayText: "Ma",
        prevMonthText: "El\u0151z\u0151 h\u00f3nap",
        nextMonthText: "K\u00f6vetkez\u0151 h\u00f3nap",
        prevYearText: "El\u0151z\u0151 \u00e9v",
        nextYearText: "K\u00f6vetkez\u0151 \u00e9v",
        closeText: "Bez\u00e1r",
        eventText: "esem\u00e9ny",
        eventsText: "esem\u00e9ny",
        fromText: "Eleje",
        toText: "V\u00e9ge",
        wholeText: "Eg\u00e9sz",
        fractionText: "T\u00f6rt",
        unitText: "Egys\u00e9g",
        labels: "\u00c9v,H\u00f3nap,Nap,\u00d3ra,Perc,M\u00e1sodperc,".split(","),
        labelsShort: "\u00c9v,H\u00f3.,Nap,\u00d3ra,Perc,Mp.,".split(","),
        startText: "Ind\u00edt",
        stopText: "Meg\u00e1ll\u00edt",
        resetText: "Vissza\u00e1ll\u00edt",
        lapText: "Lap",
        hideText: "Elrejt",
        backText: "Vissza",
        undoText: "Visszavon",
        offText: "Ki",
        onText: "Be",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.de = {
        setText: "OK",
        cancelText: "Abbrechen",
        clearText: "L\u00f6schen",
        selectedText: "{count} ausgew\u00e4hlt",
        dateFormat: "dd.mm.yy",
        dayNames: "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","),
        dayNamesShort: "So,Mo,Di,Mi,Do,Fr,Sa".split(","),
        dayNamesMin: "S,M,D,M,D,F,S".split(","),
        dayText: "Tag",
        delimiter: ".",
        hourText: "Stunde",
        minuteText: "Minuten",
        monthNames: "Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","),
        monthNamesShort: "Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","),
        monthText: "Monat",
        secText: "Sekunden",
        timeFormat: "HH:ii",
        yearText: "Jahr",
        nowText: "Jetzt",
        pmText: "nachm.",
        amText: "vorm.",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Zeit",
        calendarText: "Kalender",
        closeText: "Schlie\u00dfen",
        fromText: "Von",
        toText: "Um",
        wholeText: "Ganze Zahl",
        fractionText: "Bruchzahl",
        unitText: "Ma\u00dfeinheit",
        labels: "Jahre,Monate,Tage,Stunden,Minuten,Sekunden,".split(","),
        labelsShort: "Jahr.,Mon.,Tag.,Std.,Min.,Sek.,".split(","),
        startText: "Starten",
        stopText: "Stoppen",
        resetText: "Zur\u00fccksetzen",
        lapText: "Lap",
        hideText: "Ausblenden",
        backText: "Zur\u00fcck",
        undoText: "R\u00fcckg\u00e4ngig machen",
        offText: "Aus",
        onText: "Ein",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.es = {
        setText: "Aceptar",
        cancelText: "Cancelar",
        clearText: "Borrar",
        selectedText: "{count} seleccionado",
        selectedPluralText: "{count} seleccionados",
        dateFormat: "dd/mm/yy",
        dayNames: "Domingo,Lunes,Martes,Mi&#xE9;rcoles,Jueves,Viernes,S&#xE1;bado".split(","),
        dayNamesShort: "Do,Lu,Ma,Mi,Ju,Vi,S&#xE1;".split(","),
        dayNamesMin: "D,L,M,M,J,V,S".split(","),
        dayText: "D&#237;a",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre".split(","),
        monthNamesShort: "Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic".split(","),
        monthText: "Mes",
        secText: "Segundos",
        timeFormat: "HH:ii",
        yearText: "A&ntilde;o",
        nowText: "Ahora",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Fecha",
        timeText: "Tiempo",
        calendarText: "Calendario",
        closeText: "Cerrar",
        fromText: "Iniciar",
        toText: "Final",
        wholeText: "Entero",
        fractionText: "Fracci\u00f3n",
        unitText: "Unidad",
        labels: "A\u00f1os,Meses,D\u00edas,Horas,Minutos,Segundos,".split(","),
        labelsShort: "A\u00f1o,Mes,D\u00eda,Hora,Min,Seg,".split(","),
        startText: "Iniciar",
        stopText: "Det\u00e9ngase",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "Volver",
        undoText: "Deshacer",
        offText: "No",
        onText: "S\u00ed",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.fr = {
        setText: "Terminer",
        cancelText: "Annuler",
        clearText: "Effacer",
        selectedText: "{count} s\u00e9lectionn\u00e9",
        selectedPluralText: "{count} s\u00e9lectionn\u00e9s",
        dateFormat: "dd/mm/yy",
        dayNames: "&#68;imanche,Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi".split(","),
        dayNamesShort: "&#68;im.,Lun.,Mar.,Mer.,Jeu.,Ven.,Sam.".split(","),
        dayNamesMin: "&#68;,L,M,M,J,V,S".split(","),
        dayText: "Jour",
        monthText: "Mois",
        monthNames: "Janvier,F\u00e9vrier,Mars,Avril,Mai,Juin,Juillet,Ao\u00fbt,Septembre,Octobre,Novembre,D\u00e9cembre".split(","),
        monthNamesShort: "Janv.,F\u00e9vr.,Mars,Avril,Mai,Juin,Juil.,Ao\u00fbt,Sept.,Oct.,Nov.,D\u00e9c.".split(","),
        hourText: "Heures",
        minuteText: "Minutes",
        secText: "Secondes",
        timeFormat: "HH:ii",
        yearText: "Ann\u00e9e",
        nowText: "Maintenant",
        pmText: "apr\u00e8s-midi",
        amText: "avant-midi",
        firstDay: 1,
        dateText: "Date",
        timeText: "Heure",
        calendarText: "Calendrier",
        closeText: "Fermer",
        fromText: "D\u00e9marrer",
        toText: "Fin",
        wholeText: "Entier",
        fractionText: "Fraction",
        unitText: "Unit\u00e9",
        labels: "Ans,Mois,Jours,Heures,Minutes,Secondes,".split(","),
        labelsShort: "Ans,Mois,Jours,Hrs,Min,Sec,".split(","),
        startText: "D\u00e9marrer",
        stopText: "Arr\u00eater",
        resetText: "R\u00e9initialiser",
        lapText: "Lap",
        hideText: "Cachez",
        backText: "Arri\u00e8re",
        undoText: "D\u00e9faire",
        offText: "Non",
        onText: "Oui",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.it = {
        setText: "OK",
        cancelText: "Annulla",
        clearText: "Chiarire",
        selectedText: "{count} selezionato",
        selectedPluralText: "{count} selezionati",
        dateFormat: "dd/mm/yy",
        dayNames: "Domenica,Luned\u00ec,Merted\u00ec,Mercoled\u00ec,Gioved\u00ec,Venerd\u00ec,Sabato".split(","),
        dayNamesShort: "Do,Lu,Ma,Me,Gi,Ve,Sa".split(","),
        dayNamesMin: "D,L,M,M,G,V,S".split(","),
        dayText: "Giorno",
        hourText: "Ore",
        minuteText: "Minuti",
        monthNames: "Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre".split(","),
        monthNamesShort: "Gen,Feb,Mar,Apr,Mag,Giu,Lug,Ago,Set,Ott,Nov,Dic".split(","),
        monthText: "Mese",
        secText: "Secondi",
        timeFormat: "HH:ii",
        yearText: "Anno",
        nowText: "Ora",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Data",
        timeText: "Volta",
        calendarText: "Calendario",
        closeText: "Chiudere",
        fromText: "Inizio",
        toText: "Fine",
        wholeText: "Intero",
        fractionText: "Frazione",
        unitText: "Unit\u00e0",
        labels: "Anni,Mesi,Giorni,Ore,Minuti,Secondi,".split(","),
        labelsShort: "Anni,Mesi,Gio,Ore,Min,Sec,".split(","),
        startText: "Inizio",
        stopText: "Arresto",
        resetText: "Ripristina",
        lapText: "Lap",
        hideText: "Nascondi",
        backText: "Indietro",
        undoText: "Annulla",
        offText: "Via",
        onText: "Su",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.no = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "T\u00f8mme",
        selectedText: "{count} valgt",
        dateFormat: "dd.mm.yy",
        dayNames: "S\u00f8ndag,Mandag,Tirsdag,Onsdag,Torsdag,Fredag,L\u00f8rdag".split(","),
        dayNamesShort: "S\u00f8,Ma,Ti,On,To,Fr,L\u00f8".split(","),
        dayNamesMin: "S,M,T,O,T,F,L".split(","),
        dayText: "Dag",
        delimiter: ".",
        hourText: "Time",
        minuteText: "Minutt",
        monthNames: "Januar,Februar,Mars,April,Mai,Juni,Juli,August,September,Oktober,November,Desember".split(","),
        monthNamesShort: "Jan,Feb,Mar,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Des".split(","),
        monthText: "M\u00e5ned",
        secText: "Sekund",
        timeFormat: "HH:ii",
        yearText: "\u00c5r",
        nowText: "N\u00e5",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        calendarText: "Kalender",
        closeText: "Lukk",
        fromText: "Start",
        toText: "End",
        wholeText: "Hele",
        fractionText: "Fraksjon",
        unitText: "Enhet",
        labels: "\u00c5r,M\u00e5neder,Dager,Timer,Minutter,Sekunder,".split(","),
        labelsShort: "\u00c5r,M\u00e5n,Dag,Time,Min,Sek,".split(","),
        startText: "Start",
        stopText: "Stopp",
        resetText: "Tilbakestille",
        lapText: "Runde",
        hideText: "Skjul",
        backText: "Tilbake",
        undoText: "Angre",
        offText: "Av",
        onText: "P\u00e5",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n["pt-BR"] = {
        setText: "Selecionar",
        cancelText: "Cancelar",
        clearText: "Claro",
        selectedText: "{count} selecionado",
        selectedPluralText: "{count} selecionados",
        dateFormat: "dd/mm/yy",
        dayNames: "Domingo,Segunda-feira,Ter\u00e7a-feira,Quarta-feira,Quinta-feira,Sexta-feira,S\u00e1bado".split(","),
        dayNamesShort: "Dom,Seg,Ter,Qua,Qui,Sex,S\u00e1b".split(","),
        dayNamesMin: "D,S,T,Q,Q,S,S".split(","),
        dayText: "Dia",
        hourText: "Hora",
        minuteText: "Minutos",
        monthNames: "Janeiro,Fevereiro,Mar\u00e7o,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro".split(","),
        monthNamesShort: "Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez".split(","),
        monthText: "M\u00eas",
        secText: "Segundo",
        timeFormat: "HH:ii",
        yearText: "Ano",
        nowText: "Agora",
        pmText: "da tarde",
        amText: "da manh\u00e3",
        dateText: "Data",
        timeText: "Tempo",
        calendarText: "Calend\u00e1rio",
        closeText: "Fechar",
        fromText: "In&iacute;cio",
        toText: "Fim",
        wholeText: "Inteiro",
        fractionText: "Fra\u00e7\u00e3o",
        unitText: "Unidade",
        labels: "Anos,Meses,Dias,Horas,Minutos,Segundos,".split(","),
        labelsShort: "Ano,M&ecirc;s,Dia,Hora,Min,Seg,".split(","),
        startText: "Come\u00e7ar",
        stopText: "Pare",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "De volta",
        undoText: "Desfazer",
        offText: "Desl",
        onText: "Lig",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.zh = {
        setText: "\u786e\u5b9a",
        cancelText: "\u53d6\u6d88",
        clearText: "\u660e\u786e",
        selectedText: "{count} \u9009",
        dateFormat: "yy/mm/dd",
        dayNames: "\u5468\u65e5,\u5468\u4e00,\u5468\u4e8c,\u5468\u4e09,\u5468\u56db,\u5468\u4e94,\u5468\u516d".split(","),
        dayNamesShort: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
        dayNamesMin: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
        dayText: "\u65e5",
        hourText: "\u65f6",
        minuteText: "\u5206",
        monthNames: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthNamesShort: "\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d,\u4e03,\u516b,\u4e5d,\u5341,\u5341\u4e00,\u5341\u4e8c".split(","),
        monthText: "\u6708",
        secText: "\u79d2",
        timeFormat: "HH:ii",
        yearText: "\u5e74",
        nowText: "\u5f53\u524d",
        pmText: "\u4e0b\u5348",
        amText: "\u4e0a\u5348",
        dateText: "\u65e5",
        timeText: "\u65f6\u95f4",
        calendarText: "\u65e5\u5386",
        closeText: "\u5173\u95ed",
        fromText: "\u5f00\u59cb\u65f6\u95f4",
        toText: "\u7ed3\u675f\u65f6\u95f4",
        wholeText: "\u5408\u8ba1",
        fractionText: "\u5206\u6570",
        unitText: "\u5355\u4f4d",
        labels: "\u5e74,\u6708,\u65e5,\u5c0f\u65f6,\u5206\u949f,\u79d2,".split(","),
        labelsShort: "\u5e74,\u6708,\u65e5,\u70b9,\u5206,\u79d2,".split(","),
        startText: "\u5f00\u59cb",
        stopText: "\u505c\u6b62",
        resetText: "\u91cd\u7f6e",
        lapText: "\u5708",
        hideText: "\u9690\u85cf",
        backText: "\u80cc\u90e8",
        undoText: "\u590d\u539f",
        offText: "\u5173\u95ed",
        onText: "\u5f00\u542f",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.nl = {
        setText: "Instellen",
        cancelText: "Annuleren",
        clearText: "Duidelijk",
        selectedText: "{count} gekozen",
        dateFormat: "dd-mm-yy",
        dayNames: "zondag,maandag,Dinsdag,Woensdag,Donderdag,Vrijdag,Zaterdag".split(","),
        dayNamesShort: "zo,ma,di,wo,do,vr,za".split(","),
        dayNamesMin: "z,m,d,w,d,v,z".split(","),
        dayText: "Dag",
        hourText: "Uur",
        minuteText: "Minuten",
        monthNames: "januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december".split(","),
        monthNamesShort: "jan,feb,mrt,apr,mei,jun,jul,aug,sep,okt,nov,dec".split(","),
        monthText: "Maand",
        secText: "Seconden",
        timeFormat: "HH:ii",
        yearText: "Jaar",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tijd",
        calendarText: "Kalender",
        closeText: "Sluiten",
        fromText: "Start",
        toText: "Einde",
        wholeText: "geheel",
        fractionText: "fractie",
        unitText: "eenheid",
        labels: "Jaren,Maanden,Dagen,Uren,Minuten,Seconden,".split(","),
        labelsShort: "j,m,d,u,min,sec,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Ronde",
        hideText: "Verbergen",
        backText: "Terug",
        undoText: "Onged. maken",
        offText: "Uit",
        onText: "Aan",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.tr = {
        setText: "Se\u00e7",
        cancelText: "\u0130ptal",
        clearText: "Temizleyin",
        selectedText: "{count} se\u00e7ilmi\u015f",
        dateFormat: "dd.mm.yy",
        dayNames: "Pazar,Pazartesi,Sal\u0131,\u00c7ar\u015famba,Per\u015fembe,Cuma,Cumartesi".split(","),
        dayNamesShort: "Paz,Pzt,Sal,\u00c7ar,Per,Cum,Cmt".split(","),
        dayNamesMin: "P,P,S,\u00c7,P,C,C".split(","),
        dayText: "G\u00fcn",
        delimiter: ".",
        hourText: "Saat",
        minuteText: "Dakika",
        monthNames: "Ocak,\u015eubat,Mart,Nisan,May\u0131s,Haziran,Temmuz,A\u011fustos,Eyl\u00fcl,Ekim,Kas\u0131m,Aral\u0131k".split(","),
        monthNamesShort: "Oca,\u015eub,Mar,Nis,May,Haz,Tem,A\u011fu,Eyl,Eki,Kas,Ara".split(","),
        monthText: "Ay",
        secText: "Saniye",
        timeFormat: "HH:ii",
        yearText: "Y\u0131l",
        nowText: "\u015eimdi",
        pmText: "ak\u015fam",
        amText: "sabah",
        firstDay: 1,
        dateText: "Tarih",
        timeText: "Zaman",
        calendarText: "Takvim",
        closeText: "Kapatmak",
        fromText: "Ba\u015fla",
        toText: "Son",
        wholeText: "Tam",
        fractionText: "Kesir",
        unitText: "Birim",
        labels: "Y\u0131l,Ay,G\u00fcn,Saat,Dakika,Saniye,".split(","),
        labelsShort: "Y\u0131l,Ay,G\u00fcn,Sa,Dak,Sn,".split(","),
        startText: "Ba\u015fla",
        stopText: "Durdur",
        resetText: "S\u0131f\u0131rla",
        lapText: "Tur",
        hideText: "Gizle",
        backText: "Geri",
        undoText: "Geri Al",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: "."
    };
    m.i18n.ja = {
        setText: "\u30bb\u30c3\u30c8",
        cancelText: "\u30ad\u30e3\u30f3\u30bb\u30eb",
        clearText: "\u30af\u30ea\u30a2",
        selectedText: "{count} \u9078\u629e",
        dateFormat: "yy\u5e74mm\u6708dd\u65e5",
        dayNames: "\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","),
        dayNamesShort: "\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","),
        dayNamesMin: "\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","),
        dayText: "\u65e5",
        hourText: "\u6642",
        minuteText: "\u5206",
        monthNames: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthNamesShort: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthText: "\u6708",
        secText: "\u79d2",
        timeFormat: "HH:ii",
        yearText: "\u5e74",
        nowText: "\u4eca",
        pmText: "\u5348\u5f8c",
        amText: "\u5348\u524d",
        yearSuffix: "\u5e74",
        monthSuffix: "\u6708",
        daySuffix: "\u65e5",
        dateText: "\u65e5\u4ed8",
        timeText: "\u6642\u9593",
        calendarText: "\u30ab\u30ec\u30f3\u30c0\u30fc",
        closeText: "\u30af\u30ed\u30fc\u30ba",
        fromText: "\u958b\u59cb",
        toText: "\u7d42\u308f\u308a",
        wholeText: "\u5168\u6570",
        fractionText: "\u5206\u6570",
        unitText: "\u5358\u4f4d",
        labels: "\u5e74\u9593,\u6708\u9593,\u65e5\u9593,\u6642\u9593,\u5206,\u79d2,".split(","),
        labelsShort: "\u5e74\u9593,\u6708\u9593,\u65e5\u9593,\u6642\u9593,\u5206,\u79d2,".split(","),
        startText: "\u958b\u59cb",
        stopText: "\u505c\u6b62",
        resetText: "\u30ea\u30bb\u30c3\u30c8",
        lapText: "\u30e9\u30c3\u30d7",
        hideText: "\u96a0\u3059",
        backText: "\u30d0\u30c3\u30af",
        undoText: "\u30a2\u30f3\u30c9\u30a5"
    };
    m.i18n["pt-PT"] = {
        setText: "Seleccionar",
        cancelText: "Cancelar",
        clearText: "Claro",
        selectedText: "{count} selecionado",
        selectedPluralText: "{count} selecionados",
        dateFormat: "dd-mm-yy",
        dayNames: "Domingo,Segunda-feira,Ter\u00e7a-feira,Quarta-feira,Quinta-feira,Sexta-feira,S&aacute;bado".split(","),
        dayNamesShort: "Dom,Seg,Ter,Qua,Qui,Sex,S&aacute;b".split(","),
        dayNamesMin: "D,S,T,Q,Q,S,S".split(","),
        dayText: "Dia",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: "Janeiro,Fevereiro,Mar&ccedil;o,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro".split(","),
        monthNamesShort: "Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez".split(","),
        monthText: "M&ecirc;s",
        secText: "Segundo",
        timeFormat: "HH:ii",
        yearText: "Ano",
        nowText: "Actualizar",
        pmText: "da tarde",
        amText: "da manh\u00e3",
        firstDay: 1,
        dateText: "Data",
        timeText: "Tempo",
        calendarText: "Calend&aacute;rio",
        closeText: "Fechar",
        fromText: "In&iacute;cio",
        toText: "Fim",
        wholeText: "Inteiro",
        fractionText: "Frac&ccedil;&atilde;o",
        unitText: "Unidade",
        labels: "Anos,Meses,Dias,Horas,Minutos,Segundos,".split(","),
        labelsShort: "Ano,M&ecirc;s,Dia,Hora,Min,Seg,".split(","),
        startText: "Come&ccedil;ar",
        stopText: "Parar",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "De volta",
        undoText: "Anular",
        offText: "Desl",
        onText: "Lig",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.sv = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "Klara",
        selectedText: "{count} vald",
        dateFormat: "yy-mm-dd",
        dayNames: "S\u00f6ndag,M\u00e5ndag,Tisdag,Onsdag,Torsdag,Fredag,L\u00f6rdag".split(","),
        dayNamesShort: "S\u00f6,M\u00e5,Ti,On,To,Fr,L\u00f6".split(","),
        dayNamesMin: "S,M,T,O,T,F,L".split(","),
        dayText: "Dag",
        hourText: "Timme",
        minuteText: "Minut",
        monthNames: "Januari,Februari,Mars,April,Maj,Juni,Juli,Augusti,September,Oktober,November,December".split(","),
        monthNamesShort: "Jan,Feb,Mar,Apr,Maj,Jun,Jul,Aug,Sep,Okt,Nov,Dec".split(","),
        monthText: "M\u00e5nad",
        secText: "Sekund",
        timeFormat: "HH:ii",
        yearText: "\u00c5r",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tid",
        calendarText: "Kalender",
        closeText: "St\u00e4ng",
        fromText: "Start",
        toText: "Slut",
        wholeText: "Hela",
        fractionText: "Br\u00e5k",
        unitText: "Enhet",
        labels: "\u00c5r,M\u00e5nader,Dagar,Timmar,Minuter,Sekunder,".split(","),
        labelsShort: "\u00c5r,M\u00e5n,Dag,Tim,Min,Sek,".split(","),
        startText: "Start",
        stopText: "Stopp",
        resetText: "\u00c5terst\u00e4ll",
        lapText: "Varv",
        hideText: "D\u00f6lj",
        backText: "Tillbaka",
        undoText: "\u00c5ngra",
        offText: "Av",
        onText: "P\u00e5"
    };
    m.i18n["en-GB"] = m.i18n["en-UK"] = {
        dateFormat: "dd/mm/yy",
        timeFormat: "HH:ii"
    };
    m.i18n.cs = {
        setText: "Zadej",
        cancelText: "Storno",
        clearText: "Vymazat",
        selectedText: "Ozna\u010den\u00fd: {count}",
        dateFormat: "dd.mm.yy",
        dayNames: "Ned\u011ble,Pond\u011bl\u00ed,\u00dater\u00fd,St\u0159eda,\u010ctvrtek,P\u00e1tek,Sobota".split(","),
        dayNamesShort: "Ne,Po,\u00dat,St,\u010ct,P\u00e1,So".split(","),
        dayNamesMin: "N,P,\u00da,S,\u010c,P,S".split(","),
        dayText: "Den",
        hourText: "Hodiny",
        minuteText: "Minuty",
        monthNames: "Leden,\u00danor,B\u0159ezen,Duben,Kv\u011bten,\u010cerven,\u010cervenec,Srpen,Z\u00e1\u0159\u00ed,\u0158\u00edjen,Listopad,Prosinec".split(","),
        monthNamesShort: "Led,\u00dano,B\u0159e,Dub,Kv\u011b,\u010cer,\u010cvc,Spr,Z\u00e1\u0159,\u0158\u00edj,Lis,Pro".split(","),
        monthText: "M\u011bs\u00edc",
        secText: "Sekundy",
        timeFormat: "HH:ii",
        yearText: "Rok",
        nowText: "Te\u010f",
        amText: "am",
        pmText: "pm",
        firstDay: 1,
        dateText: "Datum",
        timeText: "\u010cas",
        calendarText: "Kalend\u00e1\u0159",
        closeText: "Zav\u0159\u00edt",
        fromText: "Za\u010d\u00e1tek",
        toText: "Konec",
        wholeText: "Cel\u00fd",
        fractionText: "\u010c\u00e1st",
        unitText: "Jednotka",
        labels: "Roky,M\u011bs\u00edce,Dny,Hodiny,Minuty,Sekundy,".split(","),
        labelsShort: "Rok,M\u011bs,Dny,Hod,Min,Sec,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetovat",
        lapText: "Etapa",
        hideText: "Schovat",
        backText: "Zp\u011bt",
        undoText: "Rozlepit",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.sk = {
        setText: "Zadaj",
        cancelText: "Zru\u0161i\u0165",
        clearText: "Vymaza\u0165",
        selectedText: "Ozna\u010den\u00fd: {count}",
        dateFormat: "d.m.yy",
        dayNames: "Nede\u013ea,Pondelok,Utorok,Streda,\u0160tvrtok,Piatok,Sobota".split(","),
        dayNamesShort: "Ne,Po,Ut,St,\u0160t,Pi,So".split(","),
        dayNamesMin: "N,P,U,S,\u0160,P,S".split(","),
        dayText: "\u010ee\u0148",
        hourText: "Hodiny",
        minuteText: "Min\u00faty",
        monthNames: "Janu\u00e1r,Febru\u00e1r,Marec,Apr\u00edl,M\u00e1j,J\u00fan,J\u00fal,August,September,Okt\u00f3ber,November,December".split(","),
        monthNamesShort: "Jan,Feb,Mar,Apr,M\u00e1j,J\u00fan,J\u00fal,Aug,Sep,Okt,Nov,Dec".split(","),
        monthText: "Mesiac",
        secText: "Sekundy",
        timeFormat: "H:ii",
        yearText: "Rok",
        nowText: "Teraz",
        amText: "am",
        pmText: "pm",
        firstDay: 1,
        dateText: "Datum",
        timeText: "\u010cas",
        calendarText: "Kalend\u00e1r",
        closeText: "Zavrie\u0165",
        fromText: "Za\u010diatok",
        toText: "Koniec",
        wholeText: "Cel\u00fd",
        fractionText: "\u010cas\u0165",
        unitText: "Jednotka",
        labels: "Roky,Mesiace,Dni,Hodiny,Min\u00faty,Sekundy,".split(","),
        labelsShort: "Rok,Mes,Dni,Hod,Min,Sec,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetova\u0165",
        lapText: "Etapa",
        hideText: "Schova\u0165",
        backText: "Sp\u00e4\u0165",
        undoText: "Sp\u00e4\u0165",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.ro = {
        setText: "Setare",
        cancelText: "Anulare",
        clearText: "\u015etergere",
        selectedText: "{count} selectat",
        selectedPluralText: "{count} selectate",
        dateFormat: "dd.mm.yy",
        dayNames: "Duminic\u0103,Luni,Mar\u021bi,Miercuri,Joi,Vineri,S\u00e2mb\u0103t\u0103".split(","),
        dayNamesShort: "Du,Lu,Ma,Mi,Jo,Vi,S\u00e2".split(","),
        dayNamesMin: "D,L,M,M,J,V,S".split(","),
        dayText: " Ziua",
        delimiter: ".",
        hourText: " Ore ",
        minuteText: "Minute",
        monthNames: "Ianuarie,Februarie,Martie,Aprilie,Mai,Iunie,Iulie,August,Septembrie,Octombrie,Noiembrie,Decembrie".split(","),
        monthNamesShort: "Ian.,Feb.,Mar.,Apr.,Mai,Iun.,Iul.,Aug.,Sept.,Oct.,Nov.,Dec.".split(","),
        monthText: "Luna",
        secText: "Secunde",
        timeFormat: "HH:ii",
        yearText: "Anul",
        nowText: "Acum",
        amText: "am",
        pmText: "pm",
        firstDay: 1,
        dateText: "Data",
        timeText: "Ora",
        calendarText: "Calendar",
        closeText: "\u00cenchidere",
        fromText: "Start",
        toText: "Final",
        wholeText: "Complet",
        fractionText: "Par\u0163ial",
        unitText: "Unitate",
        labels: "Ani,Luni,Zile,Ore,Minute,Secunde,".split(","),
        labelsShort: "Ani,Luni,Zile,Ore,Min.,Sec.,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetare",
        lapText: "Tur\u0103",
        hideText: "Ascundere",
        backText: "\u00cenapoi",
        undoText: "Anula\u0163i",
        offText: "Nu",
        onText: "Da",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.pl = {
        setText: "Zestaw",
        cancelText: "Anuluj",
        clearText: "Oczy\u015bci\u0107",
        selectedText: "Wyb\u00f3r: {count}",
        dateFormat: "yy-mm-dd",
        dayNames: "Niedziela,Poniedzia\u0142ek,Wtorek,\u015aroda,Czwartek,Pi\u0105tek,Sobota".split(","),
        dayNamesShort: "Niedz.,Pon.,Wt.,\u015ar.,Czw.,Pt.,Sob.".split(","),
        dayNamesMin: "N,P,W,\u015a,C,P,S".split(","),
        dayText: "Dzie\u0144",
        hourText: "Godziny",
        minuteText: "Minuty",
        monthNames: "Stycze\u0144,Luty,Marzec,Kwiecie\u0144,Maj,Czerwiec,Lipiec,Sierpie\u0144,Wrzesie\u0144,Pa\u017adziernik,Listopad,Grudzie\u0144".split(","),
        monthNamesShort: "Sty,Lut,Mar,Kwi,Maj,Cze,Lip,Sie,Wrz,Pa\u017a,Lis,Gru".split(","),
        monthText: "Miesi\u0105c",
        secText: "Sekundy",
        timeFormat: "HH:ii",
        yearText: "Rok",
        nowText: "Teraz",
        amText: "rano",
        pmText: "po po\u0142udniu",
        firstDay: 1,
        dateText: "Data",
        timeText: "Czas",
        calendarText: "Kalendarz",
        closeText: "Zako\u0144czenie",
        fromText: "Rozpocz\u0119cie",
        toText: "Koniec",
        wholeText: "Ca\u0142y",
        fractionText: "U\u0142amek",
        unitText: "Jednostka",
        labels: "Lata,Miesi\u0105c,Dni,Godziny,Minuty,Sekundy,".split(","),
        labelsShort: "R,M,Dz,Godz,Min,Sek,".split(","),
        startText: "Rozpocz\u0119cie",
        stopText: "Zatrzyma\u0107",
        resetText: "Zresetowa\u0107",
        lapText: "Zak\u0142adka",
        hideText: "Ukry\u0107",
        backText: "Z powrotem",
        undoText: "Cofnij",
        offText: "Wy\u0142",
        onText: "W\u0142",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n["ru-UA"] = {
        setText: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
        cancelText: "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",
        clearText: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044cr",
        selectedText: "{count} \u0412\u0456\u0431\u0440\u0430\u0442\u044c",
        dateFormat: "dd.mm.yy",
        dayNames: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0432\u0442\u043e\u0440\u043d\u0438\u043a,\u0441\u0440\u0435\u0434\u0430,\u0447\u0435\u0442\u0432\u0435\u0440\u0433,\u043f\u044f\u0442\u043d\u0438\u0446\u0430,\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
        dayNamesShort: "\u0432\u0441,\u043f\u043d,\u0432\u0442,\u0441\u0440,\u0447\u0442,\u043f\u0442,\u0441\u0431".split(","),
        dayNamesMin: "\u0432,\u043f,\u0432,\u0441,\u0447,\u043f,\u0441".split(","),
        dayText: "\u0414\u0435\u043d\u044c",
        delimiter: ".",
        hourText: "\u0427\u0430\u0441\u044b",
        minuteText: "\u041c\u0438\u043d\u0443\u0442\u044b",
        monthNames: "\u042f\u043d\u0432\u0430\u0440\u044c,\u0424\u0435\u0432\u0440\u0430\u043b\u044c,\u041c\u0430\u0440\u0442,\u0410\u043f\u0440\u0435\u043b\u044c,\u041c\u0430\u0439,\u0418\u044e\u043d\u044c,\u0418\u044e\u043b\u044c,\u0410\u0432\u0433\u0443\u0441\u0442,\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c,\u041e\u043a\u0442\u044f\u0431\u0440\u044c,\u041d\u043e\u044f\u0431\u0440\u044c,\u0414\u0435\u043a\u0430\u0431\u0440\u044c".split(","),
        monthNamesShort: "\u042f\u043d\u0432.,\u0424\u0435\u0432\u0440.,\u041c\u0430\u0440\u0442,\u0410\u043f\u0440.,\u041c\u0430\u0439,\u0418\u044e\u043d\u044c,\u0418\u044e\u043b\u044c,\u0410\u0432\u0433.,\u0421\u0435\u043d\u0442.,\u041e\u043a\u0442.,\u041d\u043e\u044f\u0431.,\u0414\u0435\u043a.".split(","),
        monthText: "\u041c\u0435\u0441\u044f\u0446\u044b",
        secText: "\u0421\u0438\u043a\u0443\u043d\u0434\u044b",
        timeFormat: "HH:ii",
        yearText: "\u0413\u043e\u0434",
        nowText: "\u0421\u0435\u0439\u0447\u0430\u0441",
        amText: "\u0414\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
        pmText: "\u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
        firstDay: 1,
        dateText: "\u0414\u0430\u0442\u0430",
        timeText: "\u0412\u0440\u0435\u043c\u044f",
        calendarText: "\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c",
        closeText: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
        fromText: "\u041d\u0430\u0447\u0430\u043b\u043e",
        toText: "\u041a\u043e\u043d\u0435\u0446",
        wholeText: "\u0412\u0435\u0441\u044c",
        fractionText: "\u0427\u0430\u0441\u0442\u044c",
        unitText: "\u0415\u0434\u0438\u043d\u0438\u0446\u0430",
        labels: "\u0413\u043e\u0434\u044b, \u041c\u0435\u0441\u044f\u0446\u044b , \u0414\u043d\u0438 , \u0427\u0430\u0441\u044b , \u041c\u0438\u043d\u0443\u0442\u044b , \u0421\u0435\u043a\u0443\u043d\u0434\u044b,".split(","),
        labelsShort: "\u0413\u043e\u0434,\u041c\u0435\u0441.,\u0414\u043d.,\u0427.,\u041c\u0438\u043d.,\u0421\u0435\u043a.,".split(","),
        startText: "\u0421\u0442\u0430\u0440\u0442",
        stopText: "\u0421\u0442\u043e\u043f",
        resetText: " \u0421\u0431\u0440\u043e\u0441 ",
        lapText: " \u042d\u0442\u0430\u043f ",
        hideText: " \u0421\u043a\u0440\u044b\u0442\u044c ",
        backText: "\u043d\u0430\u0437\u0430\u0434",
        undoText: "\u0430\u043d\u043d\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    (function() {
        var h = {
            gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29],
            jalaliToGregorian: function(e, b, g) {
                for (var e = parseInt(e), b = parseInt(b), g = parseInt(g), e = e - 979, b = b - 1, a = g - 1, e = 365 * e + 8 * parseInt(e / 33) + parseInt((e %
                        33 + 3) / 4), g = 0; g < b; ++g) e += h.jDaysInMonth[g];
                b = e + a + 79;
                e = 1600 + 400 * parseInt(b / 146097);
                b %= 146097;
                a = !0;
                36525 <= b && (b--, e += 100 * parseInt(b / 36524), b %= 36524, 365 <= b ? b++ : a = !1);
                e += 4 * parseInt(b / 1461);
                b %= 1461;
                366 <= b && (a = !1, b--, e += parseInt(b / 365), b %= 365);
                for (g = 0; b >= h.gDaysInMonth[g] + (1 == g && a); g++) b -= h.gDaysInMonth[g] + (1 == g && a);
                return [e, g + 1, b + 1]
            },
            checkDate: function(e, b, g) {
                return !(0 > e || 32767 < e || 1 > b || 12 < b || 1 > g || g > h.jDaysInMonth[b - 1] + (12 == b && 0 === (e - 979) % 33 % 4))
            },
            gregorianToJalali: function(e, b, g) {
                for (var e = parseInt(e), b =
                        parseInt(b), g = parseInt(g), e = e - 1600, b = b - 1, a = g - 1, d = 365 * e + parseInt((e + 3) / 4) - parseInt((e + 99) / 100) + parseInt((e + 399) / 400), g = 0; g < b; ++g) d += h.gDaysInMonth[g];
                1 < b && (0 === e % 4 && 0 !== e % 100 || 0 === e % 400) && ++d;
                e = d + a - 79;
                g = parseInt(e / 12053);
                e %= 12053;
                b = 979 + 33 * g + 4 * parseInt(e / 1461);
                e %= 1461;
                366 <= e && (b += parseInt((e - 1) / 365), e = (e - 1) % 365);
                for (g = 0; 11 > g && e >= h.jDaysInMonth[g]; ++g) e -= h.jDaysInMonth[g];
                return [b, g + 1, e + 1]
            }
        };
        m.i18n.fa = {
            setText: "\u062a\u0627\u064a\u064a\u062f",
            cancelText: "\u0627\u0646\u0635\u0631\u0627\u0641",
            clearText: "\u0648\u0627\u0636\u062d ",
            selectedText: "{count} \u0645\u0646\u062a\u062e\u0628",
            dateFormat: "yy/mm/dd",
            dayNames: "\u064a\u06a9\u0634\u0646\u0628\u0647,\u062f\u0648\u0634\u0646\u0628\u0647,\u0633\u0647\u200c\u0634\u0646\u0628\u0647,\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647,\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647,\u062c\u0645\u0639\u0647,\u0634\u0646\u0628\u0647".split(","),
            dayNamesShort: "\u06cc,\u062f,\u0633,\u0686,\u067e,\u062c,\u0634".split(","),
            dayNamesMin: "\u06cc,\u062f,\u0633,\u0686,\u067e,\u062c,\u0634".split(","),
            dayText: "\u0631\u0648\u0632",
            hourText: "\u0633\u0627\u0639\u062a",
            minuteText: "\u062f\u0642\u064a\u0642\u0647",
            monthNames: "\u0641\u0631\u0648\u0631\u062f\u064a\u0646,\u0627\u0631\u062f\u064a\u0628\u0647\u0634\u062a,\u062e\u0631\u062f\u0627\u062f,\u062a\u064a\u0631,\u0645\u0631\u062f\u0627\u062f,\u0634\u0647\u0631\u064a\u0648\u0631,\u0645\u0647\u0631,\u0622\u0628\u0627\u0646,\u0622\u0630\u0631,\u062f\u06cc,\u0628\u0647\u0645\u0646,\u0627\u0633\u0641\u0646\u062f".split(","),
            monthNamesShort: "\u0641\u0631\u0648\u0631\u062f\u064a\u0646,\u0627\u0631\u062f\u064a\u0628\u0647\u0634\u062a,\u062e\u0631\u062f\u0627\u062f,\u062a\u064a\u0631,\u0645\u0631\u062f\u0627\u062f,\u0634\u0647\u0631\u064a\u0648\u0631,\u0645\u0647\u0631,\u0622\u0628\u0627\u0646,\u0622\u0630\u0631,\u062f\u06cc,\u0628\u0647\u0645\u0646,\u0627\u0633\u0641\u0646\u062f".split(","),
            monthText: "\u0645\u0627\u0647",
            secText: "\u062b\u0627\u0646\u064a\u0647",
            timeFormat: "HH:ii",
            yearText: "\u0633\u0627\u0644",
            nowText: "\u0627\u06a9\u0646\u0648\u0646",
            amText: "\u0628",
            pmText: "\u0635",
            getYear: function(e) {
                return h.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[0]
            },
            getMonth: function(e) {
                return --h.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[1]
            },
            getDay: function(e) {
                return h.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[2]
            },
            getDate: function(e, b,
                g, a, d, c, o) {
                0 > b && (e += Math.floor(b / 12), b = 12 + b % 12);
                11 < b && (e += Math.floor(b / 12), b %= 12);
                e = h.jalaliToGregorian(e, +b + 1, g);
                return new Date(e[0], e[1] - 1, e[2], a || 0, d || 0, c || 0, o || 0)
            },
            getMaxDayOfMonth: function(e, b) {
                for (var g = 31; !1 === h.checkDate(e, b + 1, g);) g--;
                return g
            },
            firstDay: 6,
            rtl: !0,
            dateText: "\u062a\u0627\u0631\u06cc\u062e ",
            timeText: "\u0632\u0645\u0627\u0646 ",
            calendarText: "\u062a\u0642\u0648\u06cc\u0645",
            closeText: "\u0646\u0632\u062f\u06cc\u06a9",
            fromText: "\u0634\u0631\u0648\u0639 ",
            toText: "\u067e\u0627\u06cc\u0627\u0646",
            wholeText: "\u062a\u0645\u0627\u0645",
            fractionText: "\u06a9\u0633\u0631",
            unitText: "\u0648\u0627\u062d\u062f",
            labels: "\u0633\u0627\u0644,\u0645\u0627\u0647,\u0631\u0648\u0632,\u0633\u0627\u0639\u062a,\u062f\u0642\u06cc\u0642\u0647,\u062b\u0627\u0646\u06cc\u0647,".split(","),
            labelsShort: "\u0633\u0627\u0644,\u0645\u0627\u0647,\u0631\u0648\u0632,\u0633\u0627\u0639\u062a,\u062f\u0642\u06cc\u0642\u0647,\u062b\u0627\u0646\u06cc\u0647,".split(","),
            startText: "\u0634\u0631\u0648\u0639",
            stopText: "\u067e\u0627\u064a\u0627\u0646",
            resetText: "\u062a\u0646\u0638\u06cc\u0645 \u0645\u062c\u062f\u062f",
            lapText: "Lap",
            hideText: "\u067e\u0646\u0647\u0627\u0646 \u06a9\u0631\u062f\u0646",
            backText: "\u067e\u0634\u062a",
            undoText: "\u0648\u0627\u0686\u06cc\u062f\u0646"
        }
    })();
    m.i18n["ru-RU"] = m.i18n.ru = {
        setText: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
        cancelText: "\u041e\u0442\u043c\u0435\u043d\u0430",
        clearText: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",
        selectedText: "{count} \u0412\u044b\u0431\u0440\u0430\u0442\u044c",
        dateFormat: "dd.mm.yy",
        dayNames: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0432\u0442\u043e\u0440\u043d\u0438\u043a,\u0441\u0440\u0435\u0434\u0430,\u0447\u0435\u0442\u0432\u0435\u0440\u0433,\u043f\u044f\u0442\u043d\u0438\u0446\u0430,\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
        dayNamesShort: "\u0432\u0441,\u043f\u043d,\u0432\u0442,\u0441\u0440,\u0447\u0442,\u043f\u0442,\u0441\u0431".split(","),
        dayNamesMin: "\u0432,\u043f,\u0432,\u0441,\u0447,\u043f,\u0441".split(","),
        dayText: "\u0414\u0435\u043d\u044c",
        delimiter: ".",
        hourText: "\u0427\u0430\u0441",
        minuteText: "\u041c\u0438\u043d\u0443\u0442",
        monthNames: "\u042f\u043d\u0432\u0430\u0440\u044c,\u0424\u0435\u0432\u0440\u0430\u043b\u044c,\u041c\u0430\u0440\u0442,\u0410\u043f\u0440\u0435\u043b\u044c,\u041c\u0430\u0439,\u0418\u044e\u043d\u044c,\u0418\u044e\u043b\u044c,\u0410\u0432\u0433\u0443\u0441\u0442,\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c,\u041e\u043a\u0442\u044f\u0431\u0440\u044c,\u041d\u043e\u044f\u0431\u0440\u044c,\u0414\u0435\u043a\u0430\u0431\u0440\u044c".split(","),
        monthNamesShort: "\u042f\u043d\u0432,\u0424\u0435\u0432,\u041c\u0430\u0440,\u0410\u043f\u0440,\u041c\u0430\u0439,\u0418\u044e\u043d,\u0418\u044e\u043b,\u0410\u0432\u0433,\u0421\u0435\u043d,\u041e\u043a\u0442,\u041d\u043e\u044f,\u0414\u0435\u043a".split(","),
        monthText: "\u041c\u0435\u0441\u044f\u0446",
        secText: "\u0421\u0435\u043a\u0443\u043d\u0434",
        timeFormat: "HH:ii",
        yearText: "\u0413\u043e\u0434",
        nowText: "\u0421\u0435\u0439\u0447\u0430\u0441",
        amText: "\u0414\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
        pmText: "\u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
        firstDay: 1,
        dateText: "\u0414\u0430\u0442\u0430",
        timeText: "\u0412\u0440\u0435\u043c\u044f",
        calendarText: "\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c",
        closeText: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
        fromText: "\u041d\u0430\u0447\u0430\u043b\u043e",
        toText: "\u041a\u043e\u043d\u0435\u0446",
        wholeText: "\u0426\u0435\u043b\u043e\u0435",
        fractionText: "\u0414\u0440\u043e\u0431\u043d\u043e\u0435",
        unitText: "\u0415\u0434\u0438\u043d\u0438\u0446\u0430",
        labels: "\u041b\u0435\u0442,\u041c\u0435\u0441\u044f\u0446\u0435\u0432,\u0414\u043d\u0435\u0439,\u0427\u0430\u0441\u043e\u0432,\u041c\u0438\u043d\u0443\u0442,\u0421\u0435\u043a\u0443\u043d\u0434,".split(","),
        labelsShort: "\u041b\u0435\u0442,\u041c\u0435\u0441,\u0414\u043d,\u0427\u0430\u0441,\u041c\u0438\u043d,\u0421\u0435\u043a,".split(","),
        startText: "\u0421\u0442\u0430\u0440\u0442",
        stopText: "\u0421\u0442\u043e\u043f",
        resetText: "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c",
        lapText: "\u041a\u0440\u0443\u0433",
        hideText: "\u0421\u043a\u0440\u044b\u0442\u044c",
        backText: "\u043d\u0430\u0437\u0430\u0434",
        undoText: "\u0430\u043d\u043d\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.lt = {
        setText: "OK",
        cancelText: "At\u0161aukti",
        clearText: "I\u0161valyti",
        selectedText: "Pasirinktas {count}",
        selectedPluralText: "Pasirinkti {count}",
        dateFormat: "yy-mm-dd",
        dayNames: "Sekmadienis,Pirmadienis,Antradienis,Tre\u010diadienis,Ketvirtadienis,Penktadienis,\u0160e\u0161tadienis".split(","),
        dayNamesShort: "S,Pr,A,T,K,Pn,\u0160".split(","),
        dayNamesMin: "S,Pr,A,T,K,Pn,\u0160".split(","),
        dayText: "Diena",
        hourText: "Valanda",
        minuteText: "Minutes",
        monthNames: "Sausis,Vasaris,Kovas,Balandis,Gegu\u017e\u0117,Bir\u017eelis,Liepa,Rugpj\u016btis,Rugs\u0117jis,Spalis,Lapkritis,Gruodis".split(","),
        monthNamesShort: "Sau,Vas,Kov,Bal,Geg,Bir,Lie,Rugp,Rugs,Spa,Lap,Gruo".split(","),
        monthText: "M\u0117nuo",
        secText: "Sekundes",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH:ii",
        yearText: "Metai",
        nowText: "Dabar",
        firstDay: 1,
        dateText: "Data",
        timeText: "Laikas",
        calendarText: "Kalendorius",
        closeText: "U\u017edaryti",
        fromText: "Nuo",
        toText: "Iki",
        wholeText: "Visas",
        fractionText: "Frakcija",
        unitText: "Vienetas",
        labels: "Metai,M\u0117nesiai,Dienos,Valandos,Minutes,Sekundes,".split(","),
        labelsShort: "m,m\u0117n.,d,h,min,s,".split(","),
        startText: "Prad\u0117ti",
        stopText: "Sustabdyti",
        resetText: "I\u0161naujo",
        lapText: "Ratas",
        hideText: "Sl\u0117pti",
        backText: "Atgal",
        undoText: "At\u0161aukti veiksm\u0105",
        offText: "I\u0161j.",
        onText: "\u012ej.",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    m.i18n.ca = {
        setText: "Acceptar",
        cancelText: "Cancel\u00b7lar",
        clearText: "Esborrar",
        selectedText: "{count} seleccionat",
        selectedPluralText: "{count} seleccionats",
        dateFormat: "dd/mm/yy",
        dayNames: "Diumenge,Dilluns,Dimarts,Dimecres,Dijous,Divendres,Dissabte".split(","),
        dayNamesShort: "Dg,Dl,Dt,Dc,Dj,Dv,Ds".split(","),
        dayNamesMin: "Dg,Dl,Dt,Dc,Dj,Dv,Ds".split(","),
        dayText: "Dia",
        hourText: "Hores",
        minuteText: "Minuts",
        monthNames: "Gener,Febrer,Mar&ccedil;,Abril,Maig,Juny,Juliol,Agost,Setembre,Octubre,Novembre,Desembre".split(","),
        monthNamesShort: "Gen,Feb,Mar,Abr,Mai,Jun,Jul,Ago,Set,Oct,Nov,Des".split(","),
        monthText: "Mes",
        secText: "Segons",
        timeFormat: "HH:ii",
        yearText: "Any",
        nowText: "Ara",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Data",
        timeText: "Temps",
        calendarText: "Calendari",
        closeText: "Tancar",
        fromText: "Iniciar",
        toText: "Final",
        wholeText: "Sencer",
        fractionText: "Fracci\u00f3",
        unitText: "Unitat",
        labels: "Anys,Mesos,Dies,Hores,Minuts,Segons,".split(","),
        labelsShort: "Anys,Mesos,Dies,Hrs,Mins,Secs,".split(","),
        startText: "Iniciar",
        stopText: "Aturar",
        resetText: "Reiniciar",
        lapText: "Volta",
        hideText: "Amagar",
        backText: "Tornar",
        undoText: "Desfer",
        offText: "No",
        onText: "Si"
    };
    m.i18n.da = {
        setText: "S\u00e6t",
        cancelText: "Annuller",
        clearText: "Ryd",
        selectedText: "{count} valgt",
        selectedPluralText: "{count} valgt",
        dateFormat: "dd/mm/yy",
        dayNames: "S\u00f8ndag,Mandag,Tirsdag,Onsdag,Torsdag,Fredag,L\u00f8rdag".split(","),
        dayNamesShort: "S\u00f8n,Man,Tir,Ons,Tor,Fre,L\u00f8r".split(","),
        dayNamesMin: "S,M,T,O,T,F,L".split(","),
        dayText: "Dag",
        hourText: "Timer",
        minuteText: "Minutter",
        monthNames: "Januar,Februar,Marts,April,Maj,Juni,Juli,August,September,Oktober,November,December".split(","),
        monthNamesShort: "Jan,Feb,Mar,Apr,Maj,Jun,Jul,Aug,Sep,Okt,Nov,Dec".split(","),
        monthText: "M\u00e5ned",
        secText: "Sekunder",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH.ii",
        yearText: "\u00c5r",
        nowText: "Nu",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        calendarText: "Kalender",
        closeText: "Luk",
        fromText: "Start",
        toText: "Slut",
        wholeText: "Hele",
        fractionText: "Dele",
        unitText: "Enhed",
        labels: "\u00c5r,M\u00e5neder,Dage,Timer,Minutter,Sekunder,".split(","),
        labelsShort: "\u00c5r,Mdr,Dg,Timer,Min,Sek,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Nulstil",
        lapText: "Omgang",
        hideText: "Skjul",
        offText: "Fra",
        onText: "Til",
        backText: "Tilbage",
        undoText: "Fortryd"
    };
    m.i18n.he = {
        rtl: !0,
        setText: "\u05e9\u05de\u05d9\u05e8\u05d4",
        cancelText: "\u05d1\u05d9\u05d8\u05d5\u05dc",
        clearText: "\u05e0\u05e7\u05d4",
        selectedText: "{count} \u05e0\u05d1\u05d7\u05e8",
        selectedPluralText: "{count} \u05e0\u05d1\u05d7\u05e8\u05d5",
        dateFormat: "dd/mm/yy",
        dayNames: "\u05e8\u05d0\u05e9\u05d5\u05df,\u05e9\u05e0\u05d9,\u05e9\u05dc\u05d9\u05e9\u05d9,\u05e8\u05d1\u05d9\u05e2\u05d9,\u05d7\u05de\u05d9\u05e9\u05d9,\u05e9\u05d9\u05e9\u05d9,\u05e9\u05d1\u05ea".split(","),
        dayNamesShort: "\u05d0',\u05d1',\u05d2',\u05d3',\u05d4',\u05d5',\u05e9'".split(","),
        dayNamesMin: "\u05d0,\u05d1,\u05d2,\u05d3,\u05d4,\u05d5,\u05e9".split(","),
        dayText: "\u05d9\u05d5\u05dd",
        hourText: "\u05e9\u05e2\u05d5\u05ea",
        minuteText: "\u05d3\u05e7\u05d5\u05ea",
        monthNames: "\u05d9\u05e0\u05d5\u05d0\u05e8,\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8,\u05de\u05e8\u05e5,\u05d0\u05e4\u05e8\u05d9\u05dc,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0\u05d9,\u05d9\u05d5\u05dc\u05d9,\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8,\u05e1\u05e4\u05d8\u05de\u05d1\u05e8,\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8,\u05e0\u05d5\u05d1\u05de\u05d1\u05e8,\u05d3\u05e6\u05de\u05d1\u05e8".split(","),
        monthNamesShort: "\u05d9\u05e0\u05d5,\u05e4\u05d1\u05e8,\u05de\u05e8\u05e5,\u05d0\u05e4\u05e8,\u05de\u05d0\u05d9,\u05d9\u05d5\u05e0,\u05d9\u05d5\u05dc,\u05d0\u05d5\u05d2,\u05e1\u05e4\u05d8,\u05d0\u05d5\u05e7,\u05e0\u05d5\u05d1,\u05d3\u05e6\u05de".split(","),
        monthText: "\u05d7\u05d5\u05d3\u05e9",
        secText: "\u05e9\u05e0\u05d9\u05d5\u05ea",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH:ii",
        yearText: "\u05e9\u05e0\u05d4",
        nowText: "\u05e2\u05db\u05e9\u05d9\u05d5",
        firstDay: 0,
        dateText: "\u05ea\u05d0\u05e8\u05d9\u05da",
        timeText: "\u05d6\u05de\u05df",
        calendarText: "\u05ea\u05d0\u05e8\u05d9\u05db\u05d5\u05df",
        closeText: "\u05e1\u05d2\u05d9\u05e8\u05d4",
        todayText: "\u05d4\u05d9\u05d5\u05dd",
        eventText: "\u05de\u05b4\u05e7\u05e8\u05b6\u05d4",
        eventsText: "\u05de\u05b4\u05e7\u05e8\u05b6\u05d4",
        fromText: "\u05d4\u05ea\u05d7\u05dc\u05d4",
        toText: "\u05e1\u05d9\u05d5\u05dd",
        wholeText: "\u05db\u05bc\u05b9\u05dc",
        fractionText: "\u05e9\u05d1\u05e8\u05d9\u05e8",
        unitText: "\u05d9\u05d7\u05d9\u05d3\u05d4",
        labels: "\u05e9\u05e0\u05d9\u05dd,\u05d7\u05d5\u05d3\u05e9\u05d9\u05dd,\u05d9\u05de\u05d9\u05dd,\u05e9\u05e2\u05d5\u05ea,\u05d3\u05e7\u05d5\u05ea,\u05e9\u05e0\u05d9\u05d9\u05dd,".split(","),
        labelsShort: "\u05e9\u05e0\u05d9\u05dd,\u05d7\u05d5\u05d3\u05e9\u05d9\u05dd,\u05d9\u05de\u05d9\u05dd,\u05e9\u05e2\u05d5\u05ea,\u05d3\u05e7\u05d5\u05ea,\u05e9\u05e0\u05d9\u05d9\u05dd,".split(","),
        startText: "\u05d4\u05ea\u05d7\u05dc",
        stopText: "\u05e2\u05e6\u05d5\u05e8",
        resetText: "\u05d0\u05ea\u05d7\u05d5\u05dc",
        lapText: "\u05d4\u05e7\u05e4\u05d4",
        hideText: "\u05d4\u05e1\u05ea\u05e8",
        offText: "\u05db\u05d9\u05d1\u05d5\u05d9",
        onText: "\u05d4\u05e4\u05e2\u05dc\u05d4",
        backText: "\u05d7\u05d6\u05d5\u05e8",
        undoText: "\u05d1\u05d9\u05d8\u05d5\u05dc \u05e4\u05e2\u05d5\u05dc\u05d4"
    };
    (function(h) {
        var e = function() {},
            b = m,
            g = b.$;
        b.util.addIcon = function(a, b) {
            var c = {},
                e = a.parent(),
                h = e.find(".mbsc-err-msg"),
                s = a.attr("data-icon-align") || "left",
                k = a.attr("data-icon");
            g('<span class="mbsc-input-wrap"></span>').insertAfter(a).append(a);
            h && e.find(".mbsc-input-wrap").append(h);
            k && (-1 !== k.indexOf("{") ? c = JSON.parse(k) : c[s] = k);
            if (k || b) g.extend(c, b), e.addClass((c.right ? "mbsc-ic-right " : "") + (c.left ? " mbsc-ic-left" : "")).find(".mbsc-input-wrap").append(c.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' +
                c.left + '"></span>' : "").append(c.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + c.right + '"></span>' : "")
        };
        b.classes.Progress = function(a, d, c) {
            function o() {
                var a = r("value", E);
                a !== u && s(a)
            }

            function r(a, b) {
                var c = j.attr(a);
                return c === h || "" === c ? b : +c
            }

            function s(a, b, c, d) {
                a = m.running && Math.min(f, Math.max(a, E));
                C.css("width", 100 * (a - E) / (f - E) + "%");
                c === h && (c = !0);
                d === h && (d = c);
                (a !== u || b) && F._display(a);
                a !== u && (u = a, c && j.attr("value", u), d && j.trigger("change"))
            }
            var k, j, i, C, H, y, n, E, f, B, p, u, J, F = this;
            b.classes.Base.call(this, a, d, !0);
            F._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1ace1710cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            F._onInit = e;
            F._onDestroy = e;
            F._display = function(a) {
                J = p && B.returnAffix ? p.replace(/\{value\}/, a).replace(/\{max\}/, f) : a;
                H && H.html(J);
                k && k.html(J)
            };
            F._attachChange = function() {
                j.on("change", o)
            };
            F.init = function(c) {
                var d, e;
                F._processItem(g, 0);
                F._init(c);
                B = F.settings;
                j = g(a);
                j.parent().hasClass("mbsc-input-wrap") && F.destroy();
                i = F._$parent = j.parent();
                E = F._min = c.min === h ? r("min", B.min) : c.min;
                f = F._max = c.max === h ? r("max", B.max) : c.max;
                u = r("value", E);
                d = j.attr("data-val") || B.val;
                e = (e = j.attr("data-step-labels")) ? JSON.parse(e) : B.stepLabels;
                p = j.attr("data-template") || (100 == f && !B.template ? "{value}%" : B.template);
                n = F._css + " mbsc-progress-w mbsc-" + B.theme + (B.baseTheme ? " mbsc-" + B.baseTheme : "");
                i.addClass(n);
                F._wrap && b.util.addIcon(j);
                j.attr("min", E).attr("max", f);
                i.find(".mbsc-input-wrap").append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>');
                C = F._$progress = i.find(".mbsc-progress-bar");
                y = F._$track = i.find(".mbsc-progress-track");
                H = g(j.attr("data-target") || B.target);
                d && (k = g('<span class="mbsc-progress-value"></span>'), i.addClass("mbsc-progress-value-" + ("right" == d ? "right" : "left")).find(".mbsc-input-wrap").append(k));
                if (e)
                    for (d = 0; d < e.length; ++d) y.append('<span class="mbsc-progress-step-label" style="left: ' + 100 * (e[d] - E) / (f - E) + '%" >' + e[d] + "</span>");
                F._onInit(c);
                F._attachChange();
                F.refresh();
                F.trigger("onInit")
            };
            F.refresh = function() {
                s(r("value",
                    E), !0, !1)
            };
            F.destroy = function() {
                F._onDestroy();
                i.find(".mbsc-progress-cont").remove();
                i.removeClass(n).find(".mbsc-input-wrap").before(j).remove();
                j.removeClass("mbsc-control").off("change", o);
                F._destroy()
            };
            F.getVal = function() {
                return u
            };
            F.setVal = function(a, b, c) {
                s(a, !0, b, c)
            };
            c || F.init(d)
        };
        b.classes.Progress.prototype = {
            _class: "progress",
            _css: "mbsc-progress",
            _hasTheme: !0,
            _wrap: !0,
            _defaults: {
                min: 0,
                max: 100,
                returnAffix: !0
            }
        };
        b.presetShort("progress", "Progress")
    })();
    (function(h) {
        var e = function() {},
            b = m,
            g =
            b.$,
            a = b.util,
            d = a.getCoord,
            c = a.testTouch;
        b.classes.Slider = function(o, r, s) {
            function k(a) {
                c(a, this) && !G && !o.disabled && m.running && (aa.stopProp && a.stopPropagation(), G = !0, M = ca = !1, da = d(a, "X"), wa = d(a, "Y"), P = da, O.removeClass("mbsc-progress-anim"), t = la ? g(".mbsc-slider-handle", this) : w, l = t.parent().addClass("mbsc-active"), Q = +t.attr("data-index"), ua = O[0].offsetWidth, K = O.offset().left, "mousedown" === a.type && (a.preventDefault(), g(document).on("mousemove", j).on("mouseup", i)))
            }

            function j(a) {
                if (G) {
                    P = d(a, "X");
                    V = d(a,
                        "Y");
                    R = P - da;
                    S = V - wa;
                    if (5 < Math.abs(R) || ca) ca = !0, 50 < Math.abs(ma - new Date) && (ma = new Date, p(P, aa.round, W));
                    ca ? a.preventDefault() : 7 < Math.abs(S) && B(a)
                }
            }

            function i(b) {
                G && (b.preventDefault(), la || O.addClass("mbsc-progress-anim"), p(P, !0, !0), !ca && !M && (a.preventClick(), ja._onTap(ha[Q])), B())
            }

            function C() {
                G && B()
            }

            function H() {
                var a = ja._readValue(g(this)),
                    b = +g(this).attr("data-index");
                a !== ha[b] && (ha[b] = a, F(a, b))
            }

            function y(a) {
                a.stopPropagation()
            }

            function n(a) {
                a.preventDefault()
            }

            function E(a) {
                var b;
                if (!o.disabled) {
                    switch (a.keyCode) {
                        case 38:
                        case 39:
                            b =
                                1;
                            break;
                        case 40:
                        case 37:
                            b = -1
                    }
                    b && (a.preventDefault(), Ga || (Q = +g(this).attr("data-index"), F(ha[Q] + $ * b, Q, !0), Ga = setInterval(function() {
                        F(ha[Q] + $ * b, Q, !0)
                    }, 200)))
                }
            }

            function f(a) {
                a.preventDefault();
                clearInterval(Ga);
                Ga = null
            }

            function B() {
                G = !1;
                l.removeClass("mbsc-active");
                g(document).off("mousemove", j).off("mouseup", i)
            }

            function p(a, b, c) {
                a = b ? Math.min(100 * Math.round(Math.max(100 * (a - K) / ua, 0) / q / $) * $ / (N - D), 100) : Math.max(0, Math.min(100 * (a - K) / ua, 100));
                F(Math.round((D + a / q) * ya) / ya, Q, c, a)
            }

            function u(a) {
                return 100 * (a -
                    D) / (N - D)
            }

            function J(a, b) {
                var c = z.attr(a);
                return c === h || "" === c ? b : "true" === c
            }

            function F(a, b, c, d, f, g) {
                var i = w.eq(b),
                    e = i.parent(),
                    a = Math.min(N, Math.max(a, D));
                g === h && (g = c);
                ba ? 0 === b ? (a = Math.min(a, ha[1]), v.css({
                    width: u(ha[1]) - u(a) + "%",
                    left: u(a) + "%"
                })) : (a = Math.max(a, ha[0]), v.css({
                    width: u(a) - u(ha[0]) + "%"
                })) : la || !L ? e.css({
                    left: (d || u(a)) + "%",
                    right: "auto"
                }) : v.css("width", (d || u(a)) + "%");
                ea && I.eq(b).html(a);
                a > D ? e.removeClass("mbsc-slider-start") : (ha[b] > D || f) && e.addClass("mbsc-slider-start");
                !la && (ha[b] != a || f) &&
                    ja._display(a);
                c && ha[b] != a && (M = !0, ha[b] = a, ja._fillValue(a, b, g));
                i.attr("aria-valuenow", a)
            }
            var z, t, l, w, x, T, v, I, O, G, M, R, S, K, P, V, Q, L, ea, ba, W, N, D, ca, la, $, aa, q, da, wa, ya, Ga, ua, ha, ja = this,
                ma = new Date;
            b.classes.Progress.call(this, o, r, !0);
            ja._onTap = e;
            ja.__onInit = e;
            ja._readValue = function(a) {
                return +a.val()
            };
            ja._fillValue = function(a, b, c) {
                z.eq(b).val(a);
                c && z.eq(b).trigger("change")
            };
            ja._attachChange = function() {
                z.on(aa.changeEvent, H)
            };
            ja._onInit = function(a) {
                var b;
                ja.__onInit();
                T = ja._$parent;
                O = ja._$track;
                v = ja._$progress;
                z = T.find("input");
                aa = ja.settings;
                D = ja._min;
                N = ja._max;
                $ = a.step === h ? +z.attr("step") || aa.step : a.step;
                W = J("data-live", aa.live);
                ea = J("data-tooltip", aa.tooltip);
                L = J("data-highlight", aa.highlight) && 3 > z.length;
                ya = 0 !== $ % 1 ? 100 / (100 * +($ % 1).toFixed(2)) : 1;
                q = 100 / (N - D) || 100;
                la = 1 < z.length;
                ba = L && 2 == z.length;
                ha = [];
                ea && T.addClass("mbsc-slider-has-tooltip");
                if (1 != $) {
                    b = (N - D) / $;
                    for (a = 0; a <= b; ++a) O.append('<span class="mbsc-slider-step" style="left:' + 100 / b * a + '%"></span>')
                }
                z.each(function(a) {
                    ha[a] = ja._readValue(g(this));
                    g(this).attr("data-index", a).attr("min", D).attr("max", N).attr("step", $);
                    aa.handle && (L ? v : O).append('<span class="mbsc-slider-handle-cont' + (ba && !a ? " mbsc-slider-handle-left" : "") + '"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + D + '" aria-valuemax="' + N + '" data-index="' + a + '"></span>' + (ea ? '<span class="mbsc-slider-tooltip"></span>' : "") + "</span>")
                });
                w = T.find(".mbsc-slider-handle");
                I = T.find(".mbsc-slider-tooltip");
                x = T.find(la ? ".mbsc-slider-handle-cont" : ".mbsc-progress-cont");
                w.on("keydown",
                    E).on("keyup", f).on("blur", f);
                x.on("touchstart mousedown", k).on("touchmove", j).on("touchend touchcancel", i).on("pointercancel", C);
                z.on("click", y);
                T.on("click", n)
            };
            ja._onDestroy = function() {
                T.off("click", n);
                z.off(aa.changeEvent, H).off("click", y);
                w.off("keydown", E).off("keyup", f).off("blur", f);
                x.off("touchstart mousedown", k).off("touchmove", j).off("touchend", i).off("touchcancel pointercancel", C)
            };
            ja.refresh = function() {
                z.each(function(a) {
                    F(ja._readValue(g(this)), a, !0, !1, !0, !1)
                })
            };
            ja.getVal = function() {
                return la ?
                    ha.slice(0) : ha[0]
            };
            ja.setVal = ja._setVal = function(a, b, c) {
                g.isArray(a) || (a = [a]);
                g.each(a, function(a, b) {
                    F(b, a, !0, !1, !0, c)
                })
            };
            s || ja.init(r)
        };
        b.classes.Slider.prototype = {
            _class: "progress",
            _css: "mbsc-progress mbsc-slider",
            _hasTheme: !0,
            _wrap: !0,
            _defaults: {
                changeEvent: "change",
                stopProp: !0,
                min: 0,
                max: 100,
                step: 1,
                live: !0,
                highlight: !0,
                handle: !0,
                round: !0,
                returnAffix: !0
            }
        };
        b.presetShort("slider", "Slider")
    })();
    (function(h, e, b) {
        var g, a, d = m,
            c = d.$,
            o = d.util,
            r = o.constrain,
            s = o.isString,
            k = o.isOldAndroid,
            o = /(iphone|ipod|ipad).* os 8_/i.test(navigator.userAgent),
            j = function() {},
            i = function(a) {
                a.preventDefault()
            };
        d.classes.Frame = function(o, H, y) {
            function n(a) {
                K && K.removeClass("mbsc-fr-btn-a");
                K = c(this);
                !K.hasClass("mbsc-fr-btn-d") && !K.hasClass("mbsc-fr-btn-nhl") && K.addClass("mbsc-fr-btn-a");
                if ("mousedown" === a.type) c(e).on("mouseup", m);
                else if ("pointerdown" === a.type) c(e).on("pointerup", m)
            }

            function m(a) {
                K && (K.removeClass("mbsc-fr-btn-a"), K = null);
                "mouseup" === a.type ? c(e).off("mouseup", m) : "pointerup" === a.type && c(e).off("pointerup", m)
            }

            function f(a) {
                13 == a.keyCode ? q.select() :
                    27 == a.keyCode && q.cancel()
            }

            function B(d) {
                var f, i, e, l = g,
                    j = D.focusOnClose;
                q._markupRemove();
                v.remove();
                l.parent().removeClass('calendar-active');
                d || (l || (l = da), setTimeout(function() {
                    if (!q._isVisible)
                        if (j === b || !0 === j) {
                            a = !0;
                            f = l[0];
                            e = f.type;
                            i = f.value;
                            try {
                                f.type = "button"
                            } catch (d) {}
                            l[0].focus();
                            f.type = e;
                            f.value = i
                        } else j && c(j)[0].focus()
                }, 200));
                g = null;
                L = q._isVisible = !1;
                V("onHide")
            }

            function p(a) {
                clearTimeout(ya[a.type]);
                ya[a.type] = setTimeout(function() {
                    var b = "scroll" == a.type;
                    (!b || ca) && q.position(!b)
                }, 200)
            }

            function u(a) {
                a.target.nodeType && !G[0].contains(a.target) &&
                    G[0].focus()
            }

            function J() {
                c(this).off("blur", J);
                setTimeout(function() {
                    q.position()
                }, 100)
            }

            function F(b, c) {
                b && b();
                !1 !== q.show() && (g = c, setTimeout(function() {
                    a = !1
                }, 300))
            }

            function z() {
                q._fillValue();
                V("onSet", {
                    valueText: q._value
                })
            }

            function t() {
                V("onCancel", {
                    valueText: q._value
                })
            }

            function l() {
                q.setVal(null, !0)
            }
            var w, x, T, v, I, O, G, M, R, S, K, P, V, Q, L, ea, ba, W, N, D, ca, la, $, aa, q = this,
                da = c(o),
                wa = [],
                ya = {};
            d.classes.Base.call(this, o, H, !0);
            q.position = function(a) {
                var d, f, g, i, l, j, o, p, k, u, n, h = 0,
                    s = 0;
                u = {};
                var C = Math.min(M[0].innerWidth ||
                        M.innerWidth(), O ? O.width() : 0),
                    t = M[0].innerHeight || M.innerHeight();
                l = c(e.activeElement);
                if (Q && l.is("input,textarea") && !/(button|submit|checkbox|radio)/.test(l.attr("type"))) l.on("blur", J);
                else if (!($ === C && aa === t && a || N || !L))
                    if ((q._isFullScreen || /top|bottom/.test(D.display)) && G.width(C), !1 !== V("onPosition", {
                            target: v[0],
                            windowWidth: C,
                            windowHeight: t
                        }) && Q) {
                        f = M.scrollLeft();
                        a = M.scrollTop();
                        i = D.anchor === b ? da : c(D.anchor);
                        q._isLiquid && "liquid" !== D.layout && (400 > C ? v.addClass("mbsc-fr-liq") : v.removeClass("mbsc-fr-liq"));
                        !q._isFullScreen && /center|bubble|left/.test(D.display) && (R.width(""), c(".mbsc-w-p", v).each(function() {
                            d = this.offsetWidth;
                            h += d;
                            s = d > s ? d : s
                        }), d = h > C ? s : h, R.width(d + 1).css("white-space", h > C ? "" : "nowrap"));
                        ea = G[0].offsetWidth;
                        ba = G[0].offsetHeight;
                        ca = ba <= t && ea <= C;
                        (q.scrollLock = ca) ? x.addClass("mbsc-fr-lock"): x.removeClass("mbsc-fr-lock");
                        "center" == D.display ? (f = Math.max(0, f + (C - ea) / 2), g = a + (t - ba) / 2) : "bubble" == D.display ? (n = $ !== C, g = c(".mbsc-fr-arr-i", v), l = i.offset(), j = Math.abs(x.offset().top - l.top), o = Math.abs(x.offset().left -
                            l.left), l = i[0].offsetWidth, i = i[0].offsetHeight, p = g[0].offsetWidth, k = g[0].offsetHeight, f = r(o - (ea - l) / 2, f + 3, f + C - ea - 3), g = j - ba - k / 2, g < a || j > a + t ? (G.removeClass("mbsc-fr-bubble-top").addClass("mbsc-fr-bubble-bottom"), g = j + i + k / 2) : G.removeClass("mbsc-fr-bubble-bottom").addClass("mbsc-fr-bubble-top"), l = r(o + l / 2 - (f + (ea - p) / 2), 0, p), c(".mbsc-fr-arr", v).css({
                                left: l
                            })) : "left" == D.display ? (n = $ !== C, g = c(".mbsc-fr-arr-i", v), l = i.offset(), f = l.left, j = Math.abs(x.offset().top - l.top), i = i[0].offsetHeight, k = g[0].offsetHeight, g = j - ba - k / 2, g < a || j > a + t ? (G.removeClass("mbsc-fr-bubble-top notop").addClass("mbsc-fr-bubble-bottom notop"), g = j + i + k / 2) : G.removeClass("mbsc-fr-bubble-bottom notop").addClass("mbsc-fr-bubble-top notop"), c(".mbsc-fr-arr", v).css({
                                display: "none"
                            })) : "top" == D.display ? g = a : "bottom" == D.display && (g = a + t - ba);
                        g = 0 > g ? 0 : g;
                        u.top = g;
                        u.left = f;
                        G.css(u);
                        O.height(0);
                        u = Math.max(g + ba, "body" == D.context ? c(e).height() :
                            x[0].scrollHeight);
                        O.css({
                            height: u
                        });
                        if (n && (g + ba > a + t || j > a + t)) N = !0, setTimeout(function() {
                            N = false
                        }, 300), M.scrollTop(Math.min(j, g + ba - t, u - t));
                        $ = C;
                        aa = t;
                        c(".mbsc-comp", v).each(function() {
                            var a = c(this).mobiscroll("getInst");
                            a !== q && a.position && a.position()
                        })
                    }
            };
            q.attachShow = function(b, d) {
                var f = c(b);
                wa.push({
                    readOnly: f.prop("readonly"),
                    el: f
                });
                if ("inline" !== D.display) {
                    if (la && f.is("input")) f.prop("readonly", !0).on("mouseup.mbsc", function(a) {
                        if (a.button === 0) a.preventDefault(), c(a.target).parent().addClass("calendar-active")
                    });f.parent().children('span.spanbtn').on("mouseup.mbsc", function(a) {
                        if (a.button === 0) a.preventDefault(), c(a.currentTarget).parent().addClass("calendar-active")
                    });
                    if (D.showOnFocus) f.on("focus.mbsc", function() {
                        a ||
                            F(d, f)
                    });
                    D.showOnTap && (f.on("keydown.mbsc", function(a) {
                        if (32 == a.keyCode || 13 == a.keyCode) a.preventDefault(), a.stopPropagation(), F(d, f)
                    }), q.tap(f, function() {
                        F(d, f)
                    }))
                }
            };
            q.select = function() {
                Q ? q.hide(!1, "set", !1, z) : z()
            };
            q.cancel = function() {
                Q ? q.hide(!1, "cancel", !1, t) : t()
            };
            q.clear = function() {
                q._clearValue();
                V("onClear");
                Q && q._isVisible && !q.live ? q.hide(!1, "clear", !1, l) : l()
            };
            q.enable = function() {
                D.disabled = !1;
                q._isInput && da.prop("disabled", !1)
            };
            q.disable = function() {
                D.disabled = !0;
                q._isInput && da.prop("disabled", !0)
            };
            q.show = function(a, g) {
                var l, j;
                if (!D.disabled && !q._isVisible) {
                    q._readValue();
                    if (!1 === V("onBeforeShow")) return !1;
                    c(e.activeElement).is("input,textarea") && e.activeElement.blur();
                    P = k ? !1 : D.animate;
                    if (!1 !== P)
                        if ("top" == D.display) P = "slidedown";
                        else if ("bottom" == D.display) P = "slideup";
                        else if ("center" == D.display || "bubble" == D.display || "left" == D.display) P = D.animate || "pop";
                    l = 0 < S.length;
                    j = '<div lang="' + D.lang + '" class="mbsc-' + D.theme + (D.baseTheme ? " mbsc-" + D.baseTheme : "") + " mbsc-fr-" + D.display + " " + (D.cssClass || "") + " " + (D.compClass ||
                        "") + (q._isLiquid ? " mbsc-fr-liq" : "") + (k ? " mbsc-old" : "") + (l ? "" : " mbsc-fr-nobtn") + '"><div class="mbsc-fr-persp">' + (Q ? '<div class="mbsc-fr-overlay"></div>' : "") + "<div" + (Q ? ' role="dialog" tabindex="-1"' : "") + ' class="mbsc-fr-popup' + (D.rtl ? " mbsc-rtl" : " mbsc-ltr") + '">' + ("bubble" === D.display || "left" === D.display ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : "") + '<div class="mbsc-fr-w"><div aria-live="assertive" class="mbsc-fr-aria mbsc-fr-hdn"></div>' + (D.headerText ? '<div class="mbsc-fr-hdr">' +
                        (s(D.headerText) ? D.headerText : "") + "</div>" : "") + '<div class="mbsc-fr-c">';
                    j += q._generateContent();
                    j += "</div>";
                    l && (j += '<div class="mbsc-fr-btn-cont">', c.each(S, function(a, c) {
                        c = s(c) ? q.buttons[c] : c;
                        "set" === c.handler && (c.parentClass = "mbsc-fr-btn-s");
                        "cancel" === c.handler && (c.parentClass = "mbsc-fr-btn-c");
                        j += "<div" + (D.btnWidth ? ' style="width:' + 100 / S.length + '%"' : "") + ' class="mbsc-fr-btn-w ' + (c.parentClass || "") + '"><div tabindex="0" role="button" class="mbsc-fr-btn' + a + " mbsc-fr-btn-e " + (c.cssClass === b ? D.btnClass :
                            c.cssClass) + (c.icon ? " mbsc-ic mbsc-ic-" + c.icon : "") + '">' + (c.text || "") + "</div></div>"
                    }), j += "</div>");
                    j += "</div></div></div></div>";
                    v = c(j);
                    O = c(".mbsc-fr-persp", v);
                    I = c(".mbsc-fr-overlay", v);
                    R = c(".mbsc-fr-w", v);
                    T = c(".mbsc-fr-hdr", v);
                    G = c(".mbsc-fr-popup", v);
                    w = c(".mbsc-fr-aria", v);
                    q._markup = v;
                    q._header = T;
                    q._isVisible = !0;
                    W = "orientationchange resize";
                    q._markupReady(v);
                    V("onMarkupReady", {
                        target: v[0]
                    });
                    if (Q) {
                        c(h).on("keydown", f);
                        if (D.scrollLock) v.on("touchmove mousewheel wheel", function(a) {
                            ca && a.preventDefault()
                        });
                        k && c("input,select,button", x).each(function() {
                            this.disabled || c(this).addClass("mbsc-fr-td").prop("disabled", true)
                        });
                        d.activeInstance && d.activeInstance.hide();
                        W += " scroll";
                        d.activeInstance = q;
                        v.appendTo(x);
                        if (D.focusTrap) M.on("focusin", u);
                        P && !a && v.addClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + P).on("webkitAnimationEnd.mbsc animationend.mbsc", function() {
                            v.off("webkitAnimationEnd.mbsc animationend.mbsc").removeClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + P).find(".mbsc-fr-popup").removeClass("mbsc-anim-" +
                                P);
                            g || G[0].focus();
                            q.ariaMessage(D.ariaMessage)
                        }).find(".mbsc-fr-popup").addClass("mbsc-anim-" + P)
                    } else da.is("div") && !q._hasContent ? da.empty().append(v) : v.insertAfter(da);
                    L = !0;
                    q._markupInserted(v);
                    V("onMarkupInserted", {
                        target: v[0]
                    });
                    q.position();
                    M.on(W, p);
                    v.on("selectstart mousedown", i).on("click", ".mbsc-fr-btn-e", i).on("keydown", ".mbsc-fr-btn-e", function(a) {
                        if (a.keyCode == 32) {
                            a.preventDefault();
                            a.stopPropagation();
                            c(this).click()
                        }
                    }).on("keydown", function(a) {
                        if (a.keyCode == 32) a.preventDefault();
                        else if (a.keyCode ==
                            9 && Q && D.focusTrap) {
                            var b = v.find('[tabindex="0"]').filter(function() {
                                    return this.offsetWidth > 0 || this.offsetHeight > 0
                                }),
                                d = b.index(c(":focus", v)),
                                f = b.length - 1,
                                g = 0;
                            if (a.shiftKey) {
                                f = 0;
                                g = -1
                            }
                            if (d === f) {
                                b.eq(g)[0].focus();
                                a.preventDefault()
                            }
                        }
                    });
                    c("input,select,textarea", v).on("selectstart mousedown", function(a) {
                        a.stopPropagation()
                    }).on("keydown", function(a) {
                        a.keyCode == 32 && a.stopPropagation()
                    });
                    c.each(S, function(a, b) {
                        q.tap(c(".mbsc-fr-btn" + a, v), function(a) {
                            b = s(b) ? q.buttons[b] : b;
                            (s(b.handler) ? q.handlers[b.handler] :
                                b.handler).call(this, a, q)
                        }, true)
                    });
                    D.closeOnOverlayTap && q.tap(I, function() {
                        q.cancel()
                    });
                    Q && !P && (g || G[0].focus(), q.ariaMessage(D.ariaMessage));
                    v.on("touchstart mousedown pointerdown", ".mbsc-fr-btn-e", n).on("touchend", ".mbsc-fr-btn-e", m);
                    q._attachEvents(v);
                    V("onShow", {
                        target: v[0],
                        valueText: q._tempValue
                    })
                }
            };
            q.hide = function(a, b, g, i) {
                if (!q._isVisible || !g && !q._isValid && "set" == b || !g && !1 === V("onBeforeClose", {
                        valueText: q._tempValue,
                        button: b
                    })) return !1;
                v && (k && c(".mbsc-fr-td", x).each(function() {
                    c(this).prop("disabled", !1).removeClass("mbsc-fr-td")
                }), Q && P && !a && !v.hasClass("mbsc-anim-trans") ? v.addClass("mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-" + P).on("webkitAnimationEnd.mbsc animationend.mbsc", function() {
                    v.off("webkitAnimationEnd.mbsc animationend.mbsc");
                    B(a)
                }).find(".mbsc-fr-popup").addClass("mbsc-anim-" + P) : B(a), q._detachEvents(v), M.off(W, p).off("focusin", u));
                Q && (x.removeClass("mbsc-fr-lock"), c(h).off("keydown", f), delete d.activeInstance);
                i && i();
                V("onClose", {
                    valueText: q._value
                })
            };
            q.ariaMessage = function(a) {
                w.html("");
                setTimeout(function() {
                    w.html(a)
                }, 100)
            };
            q.isVisible = function() {
                return q._isVisible
            };
            q.setVal = j;
            q.getVal = j;
            q._generateContent = j;
            q._attachEvents = j;
            q._detachEvents = j;
            q._readValue = j;
            q._clearValue = j;
            q._fillValue = j;
            q._markupReady = j;
            q._markupInserted = j;
            q._markupRemove = j;
            q._processSettings = j;
            q._presetLoad = function(a) {
                a.buttons = a.buttons || ("inline" !== a.display ? ["set", "cancel"] : []);
                a.headerText = a.headerText === b ? "inline" !== a.display ? "{value}" : !1 : a.headerText
            };
            q.destroy = function() {
                q.hide(!0, !1, !0);
                c.each(wa, function(a,
                    b) {
                    b.el.off(".mbsc").prop("readonly", b.readOnly)
                });
                q._destroy()
            };
            q.init = function(a) {
                q._init(a);
                q._isLiquid = "liquid" === (D.layout || (/top|bottom/.test(D.display) ? "liquid" : ""));
                q._processSettings();
                da.off(".mbsc");
                S = D.buttons || [];
                Q = "inline" !== D.display;
                la = D.showOnFocus || D.showOnTap;
                q._window = M = c("body" == D.context ? h : D.context);
                q._context = x = c(D.context);
                q.live = !0;
                c.each(S, function(a, b) {
                    if ("ok" == b || "set" == b || "set" == b.handler) return q.live = !1
                });
                q.buttons.set = {
                    text: D.setText,
                    handler: "set"
                };
                q.buttons.cancel = {
                    text: q.live ? D.closeText : D.cancelText,
                    handler: "cancel"
                };
                q.buttons.clear = {
                    text: D.clearText,
                    handler: "clear"
                };
                q._isInput = da.is("input");
                q._isVisible && q.hide(!0, !1, !0);
                V("onInit");
                Q ? (q._readValue(), q._hasContent || q.attachShow(da)) : q.show();
                da.on("change.mbsc", function() {
                    q._preventChange || q.setVal(da.val(), true, false);
                    q._preventChange = false
                })
            };
            q.buttons = {};
            q.handlers = {
                set: q.select,
                cancel: q.cancel,
                clear: q.clear
            };
            q._value = null;
            q._isValid = !0;
            q._isVisible = !1;
            D = q.settings;
            V = q.trigger;
            y || q.init(H)
        };
        d.classes.Frame.prototype._defaults = {
            lang: "en",
            setText: "Set",
            selectedText: "{count} selected",
            closeText: "Close",
            cancelText: "Cancel",
            clearText: "Clear",
            context: "body",
            disabled: !1,
            closeOnOverlayTap: !0,
            showOnFocus: !1,
            showOnTap: !0,
            display: "center",
            scrollLock: !0,
            tap: !0,
            btnClass: "mbsc-fr-btn",
            btnWidth: !0,
            focusTrap: !0,
            focusOnClose: !o
        };
        d.themes.frame.mobiscroll = {
            rows: 5,
            showLabel: !1,
            headerText: !1,
            btnWidth: !1,
            selectedLineHeight: !0,
            selectedLineBorder: 1,
            weekDays: "min",
            checkIcon: "ion-ios7-checkmark-empty",
            btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
            btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
        };
        c(h).on("focus", function() {
            g && (a = !0)
        })
    })(window, document);
    m.themes.frame["android-holo"] = {
        dateDisplay: "Mddyy",
        rows: 5,
        minWidth: 76,
        height: 36,
        showLabel: !1,
        selectedLineHeight: !0,
        selectedLineBorder: 2,
        useShortLabels: !0,
        icon: {
            filled: "star3",
            empty: "star"
        },
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down6",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up6"
    };
    (function() {
        var h = m,
            e = h.$;
        h.themes.frame.wp = {
            minWidth: 76,
            height: 76,
            dateDisplay: "mmMMddDDyy",
            headerText: !1,
            showLabel: !1,
            deleteIcon: "backspace4",
            icon: {
                filled: "star3",
                empty: "star"
            },
            btnWidth: !1,
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left2",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right2",
            btnPlusClass: "mbsc-ic mbsc-ic-plus",
            btnMinusClass: "mbsc-ic mbsc-ic-minus",
            onMarkupInserted: function(b, g) {
                var a, d, c, o = e(b.target),
                    h = g.settings;
                e(".mbsc-sc-whl", o).on("touchstart mousedown wheel mousewheel", function(b) {
                    var g;
                    if (!(g = "mousedown" === b.type && d)) g = e(this).attr("data-index"),
                        g = e.isArray(h.readonly) ? h.readonly[g] : h.readonly;
                    g || (d = "touchstart" === b.type, a = !0, c = e(this).hasClass("mbsc-sc-whl-wpa"), e(".mbsc-sc-whl", o).removeClass("mbsc-sc-whl-wpa"), e(this).addClass("mbsc-sc-whl-wpa"))
                }).on("touchmove mousemove", function() {
                    a = !1
                }).on("touchend mouseup", function(b) {
                    a && c && e(b.target).closest(".mbsc-sc-itm").hasClass("mbsc-sc-itm-sel") && e(this).removeClass("mbsc-sc-whl-wpa");
                    "mouseup" === b.type && (d = !1);
                    a = !1
                })
            },
            onInit: function(b, g) {
                var a = g.buttons;
                a.set.icon = "checkmark";
                a.cancel.icon =
                    "close";
                a.clear.icon = "close";
                a.ok && (a.ok.icon = "checkmark");
                a.close && (a.close.icon = "close");
                a.now && (a.now.icon = "loop2");
                a.toggle && (a.toggle.icon = "play3");
                a.start && (a.start.icon = "play3");
                a.stop && (a.stop.icon = "pause2");
                a.reset && (a.reset.icon = "stop2");
                a.lap && (a.lap.icon = "loop2");
                a.hide && (a.hide.icon = "close")
            }
        }
    })();
    (function() {
        var h = m,
            e = h.$;
        h.themes.frame.material = {
            showLabel: !1,
            headerText: !1,
            btnWidth: !1,
            selectedLineHeight: !0,
            selectedLineBorder: 2,
            weekDays: "min",
            deleteIcon: "material-backspace",
            icon: {
                filled: "material-star",
                empty: "material-star-outline"
            },
            checkIcon: "material-check",
            btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down",
            btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up",
            btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left",
            btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right",
            onMarkupReady: function(b) {
                h.themes.material.initRipple(e(b.target), ".mbsc-fr-btn-e", "mbsc-fr-btn-d", "mbsc-fr-btn-nhl")
            },
            onEventBubbleShow: function(b) {
                var g = e(b.eventList),
                    b = 2 > e(b.target).closest(".mbsc-cal-row").index(),
                    a = e(".mbsc-cal-event-color", g).eq(b ? 0 : -1).css("background-color");
                e(".mbsc-cal-events-arr", g).css("border-color", b ? "transparent transparent " + a + " transparent" : a + "transparent transparent transparent")
            }
        }
    })();
    m.themes.frame.ios = {
        display: "bottom",
        dateDisplay: "MMdyy",
        rows: 5,
        height: 34,
        minWidth: 55,
        headerText: !1,
        showLabel: !1,
        btnWidth: !1,
        selectedLineHeight: !0,
        selectedLineBorder: 1,
        useShortLabels: !0,
        deleteIcon: "backspace3",
        checkIcon: "ion-ios7-checkmark-empty",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5"
    };
    (function() {
        var h = m,
            e = h.$;
        h.themes.frame.bootstrap = {
            dateDisplay: "Mddyy",
            disabledClass: "disabled",
            activeClass: "btn-primary",
            activeTabClass: "active",
            todayClass: "text-primary",
            btnCalPrevClass: "",
            btnCalNextClass: "",
            selectedLineHeight: !0,
            onMarkupInserted: function(b) {
                b = e(b.target);
                e(".mbsc-fr-popup", b).addClass("popover");
                e(".mbsc-fr-w", b).addClass("popover-content");
                e(".mbsc-fr-hdr", b).addClass("popover-title");
                e(".mbsc-fr-arr-i",
                    b).addClass("popover");
                e(".mbsc-fr-arr", b).addClass("arrow");
                e(".mbsc-fr-btn", b).addClass("btn btn-default");
                e(".mbsc-fr-btn-s .mbsc-fr-btn", b).removeClass("btn-default").addClass("btn btn-primary");
                e(".mbsc-sc-btn-plus", b).addClass("glyphicon glyphicon-chevron-down");
                e(".mbsc-sc-btn-minus", b).addClass("glyphicon glyphicon-chevron-up");
                e(".mbsc-cal-next .mbsc-cal-btn-txt", b).prepend('<i class="glyphicon glyphicon-chevron-right"></i>');
                e(".mbsc-cal-prev .mbsc-cal-btn-txt", b).prepend('<i class="glyphicon glyphicon-chevron-left"></i>');
                e(".mbsc-cal-tabs ul", b).addClass("nav nav-tabs");
                e(".mbsc-cal-sc-c", b).addClass("popover");
                e(".mbsc-cal-week-nrs-c", b).addClass("popover");
                e(".mbsc-cal-events", b).addClass("popover");
                e(".mbsc-cal-events-arr", b).addClass("arrow");
                e(".mbsc-range-btn", b).addClass("btn btn-sm btn-small btn-default");
                e(".mbsc-np-btn", b).addClass("btn btn-default")
            },
            onPosition: function(b) {
                setTimeout(function() {
                    e(".mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i", b.target).removeClass("bottom").addClass("top");
                    e(".mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i",
                        b.target).removeClass("top").addClass("bottom")
                }, 10)
            },
            onEventBubbleShow: function(b) {
                var g = e(b.eventList);
                e(".mbsc-cal-event-list", g).addClass("list-group");
                e(".mbsc-cal-event", g).addClass("list-group-item");
                setTimeout(function() {
                    g.hasClass("mbsc-cal-events-b") ? g.removeClass("top").addClass("bottom") : g.removeClass("bottom").addClass("top")
                }, 10)
            }
        }
    })();
    (function(h, e, b) {
        var g, a = m,
            d = a.$,
            c = d.extend,
            o = a.classes,
            r = a.util,
            s = r.prefix,
            k = r.jsPrefix,
            j = r.getCoord,
            i = r.testTouch,
            C = r.vibrate,
            H = 1,
            y = function() {},
            n =
            h.requestAnimationFrame || function(a) {
                a()
            },
            E = h.cancelAnimationFrame || y,
            f = "webkitAnimationEnd animationend",
            B = "transparent";
        o.ListView = function(a, u) {
            function J() {
                nb = Sb = !1;
                ic = ka = 0;
                jc = new Date;
                lb = va.width();
                zb = la(va);
                sa = zb.index(U);
                Ha = U[0].offsetHeight;
                Ua = U[0].offsetTop;
                Ba = Ab[U.attr("data-type") || "defaults"];
                Mb = Ba.stages
            }

            function F(a) {
                var b;
                "touchstart" === a.type && (ob = !0, clearTimeout(hb));
                if (i(a, this) && !ma && !pb && !g && !Tb && m.running && (Ja = ma = !0, Ub = j(a, "X"), Vb = j(a, "Y"), ib = Oa = 0, b = U = d(this), J(), bc = Z.onItemTap ||
                        Ba.tap || U.hasClass("mbsc-lv-parent") || U.hasClass("mbsc-lv-back"), Sa.offset(), jb = U.offset().top, bc && (qa = setTimeout(function() {
                            b.addClass("mbsc-lv-item-active");
                            ta("onItemActivate", {
                                target: b[0],
                                domEvent: a
                            })
                        }, 120)), X.sortable && !U.hasClass("mbsc-lv-back") && ((X.sortable.group || (qb = U.nextUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item"), tb = U.prevUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item")), Pa = (!X.sortable.group ? tb.length ? tb.eq(-1) : U : va.children("li").eq(0))[0].offsetTop - Ua, ub = (!X.sortable.group ?
                            qb.length ? qb.eq(-1) : U : va.children("li").eq(-1))[0].offsetTop - Ua, X.sortable.handle) ? d(a.target).hasClass("mbsc-lv-handle") && (clearTimeout(qa), "Moz" === k ? (a.preventDefault(), T()) : Wb = setTimeout(function() {
                            T()
                        }, 100)) : Wb = setTimeout(function() {
                            oa.appendTo(U);
                            oa[0].style[k + "Animation"] = "mbsc-lv-fill " + (Z.sortDelay - 100) + "ms linear";
                            clearTimeout(Bb);
                            clearTimeout(qa);
                            Ja = false;
                            Wb = setTimeout(function() {
                                oa[0].style[k + "Animation"] = "";
                                T()
                            }, Z.sortDelay - 80)
                        }, 80)), "mousedown" == a.type)) d(e).on("mousemove", z).on("mouseup",
                    t)
            }

            function z(a) {
                var b = !1,
                    c = !0;
                if (ma)
                    if (db = j(a, "X"), Cb = j(a, "Y"), Oa = db - Ub, ib = Cb - Vb, clearTimeout(Bb), !$a && !rb && !Db && !U.hasClass("mbsc-lv-back") && (10 < Math.abs(ib) ? (Db = !0, a.type = "mousemove" == a.type ? "mouseup" : "touchend", t(a), clearTimeout(qa)) : 7 < Math.abs(Oa) ? l() : "touchmove" === a.type && (Bb = setTimeout(function() {
                            a.type = "touchend";
                            t(a)
                        }, 300))), rb) a.preventDefault(), ka = 100 * (Oa / lb), w();
                    else if ($a) {
                    a.preventDefault();
                    var d, f = Qa.scrollTop(),
                        g = Math.max(Pa, Math.min(ib + Eb, ub)),
                        i = Na ? jb - cc + f - Eb : jb;
                    Fb + f < i + g + Ha ? (Qa.scrollTop(i +
                        g - Fb + Ha), d = !0) : i + g < f && (Qa.scrollTop(i + g), d = !0);
                    d && (Eb += Qa.scrollTop() - f);
                    if (Va && (X.sortable.multiLevel && ia.hasClass("mbsc-lv-parent") ? Ua + Ha / 4 + g > Va ? b = !0 : Ua + Ha - Ha / 4 + g > Va && (Ia = ia.addClass("mbsc-lv-item-hl"), c = !1) : Ua + Ha / 2 + g > Va && (ia.hasClass("mbsc-lv-back") ? X.sortable.multiLevel && (Ca = ia.addClass("mbsc-lv-item-hl"), c = !1) : b = !0), b)) Wa.insertAfter(ia), Ka = ia, ia = aa(ia, "next"), La = Va, Va = ia.length && ia[0].offsetTop, Ra++;
                    if (!b && La && (X.sortable.multiLevel && Ka.hasClass("mbsc-lv-parent") ? Ua + Ha - Ha / 4 + g < La ? b = !0 : Ua + Ha /
                            4 + g < La && (Ia = Ka.addClass("mbsc-lv-item-hl"), c = !1) : Ua + Ha / 2 + g < La && (Ka.hasClass("mbsc-lv-back") ? X.sortable.multiLevel && (Ca = Ka.addClass("mbsc-lv-item-hl"), c = !1) : b = !0), b)) Wa.insertBefore(Ka), ia = Ka, Ka = aa(Ka, "prev"), Va = La, La = Ka.length && Ka[0].offsetTop + Ka[0].offsetHeight, Ra--;
                    if (c && (Ia && (Ia.removeClass("mbsc-lv-item-hl"), Ia = !1), Ca)) Ca.removeClass("mbsc-lv-item-hl"), Ca = !1;
                    b && ta("onSortChange", [U, Ra]);
                    V(U, g);
                    ta("onSort", [U, Ra])
                } else(5 < Math.abs(Oa) || 5 < Math.abs(ib)) && Q()
            }

            function t(a) {
                var b, c, f = U;
                if (ma) {
                    ma = !1;
                    Q();
                    "mouseup" == a.type && d(e).off("mousemove", z).off("mouseup", t);
                    Db || (hb = setTimeout(function() {
                        ob = !1
                    }, 300));
                    if (rb || Db || $a) nb = !0;
                    rb ? x() : $a ? (b = va, Ia ? (W(U.detach()), a = fb[Ia.attr("data-ref")], Ra = la(a.child).length, Ia.removeClass("mbsc-lv-item-hl"), Z.navigateOnDrop ? Ga(Ia, function() {
                        X.add(null, U, null, null, Ia, !0);
                        wa(U);
                        v(U, sa, b, !0)
                    }) : (X.add(null, U, null, null, Ia, !0), v(U, sa, b, !0))) : Ca ? (W(U.detach()), a = fb[Ca.attr("data-back")], Ra = la(a.parent).index(a.item) + 1, Ca.removeClass("mbsc-lv-item-hl"), Z.navigateOnDrop ?
                        Ga(Ca, function() {
                            X.add(null, U, Ra, null, va, !0);
                            wa(U);
                            v(U, sa, b, !0)
                        }) : (X.add(null, U, Ra, null, a.parent, !0), v(U, sa, b, !0))) : (a = Wa[0].offsetTop - Ua, V(U, a, 6 * Math.abs(a - Math.max(Pa, Math.min(ib + Eb, ub))), function() {
                        W(U);
                        U.insertBefore(Wa);
                        v(U, sa, b, Ra !== sa)
                    })), $a = !1) : !Db && 5 > Math.abs(Oa) && 5 > Math.abs(ib) && (Ba.tap && (c = Ba.tap.call(Xa, {
                        target: U,
                        index: sa,
                        domEvent: a
                    }, X)), bc && ("touchend" === a.type && r.preventClick(), U.addClass("mbsc-lv-item-active"), ta("onItemActivate", {
                        target: U[0],
                        domEvent: a
                    })), c = ta("onItemTap", {
                        target: U[0],
                        index: sa,
                        domEvent: a
                    }), !1 !== c && Ga(U));
                    clearTimeout(qa);
                    setTimeout(function() {
                        f.removeClass("mbsc-lv-item-active");
                        ta("onItemDeactivate", {
                            target: f[0]
                        })
                    }, 100);
                    Db = !1;
                    Da = null
                }
            }

            function l() {
                if (rb = N(Ba.swipe, {
                        target: U[0],
                        index: sa,
                        direction: 0 < Oa ? "right" : "left"
                    })) Q(), clearTimeout(qa), Ba.actions ? (fa = da(Ba), ab.html(Ba.icons).show().children().css("width", fa + "%"), Ya.hide(), d(".mbsc-lv-ic-m", za).removeClass("mbsc-lv-ic-disabled"), d(Ba.leftMenu).each(G), d(Ba.rightMenu).each(G)) : (Ya.show(), ab.hide(), pa = Ba.start +
                    (0 < Oa ? 0 : 1), Fa = Mb[pa - 1], gb = Mb[pa]), U.addClass("mbsc-lv-item-swiping").removeClass("mbsc-lv-item-active"), Xb.css("line-height", Ha + "px"), za.css({
                    top: Ua,
                    height: Ha,
                    backgroundColor: (0 < Oa ? Ba.right : Ba.left).color || B
                }).addClass("mbsc-lv-stage-c-v").appendTo(va.parent()), Z.iconSlide && U.append(Ya), ta("onSlideStart", {
                    target: U[0],
                    index: sa
                })
            }

            function w() {
                var a = !1;
                if (!Yb) {
                    if (Ba.actions) za.attr("class", "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" + (0 > ka ? "right" : "left"));
                    else if (Fa && ka <= Fa.percent ? (pa--, gb = Fa, Fa = Mb[pa],
                            a = !0) : gb && ka >= gb.percent && (pa++, Fa = gb, gb = Mb[pa], a = !0), a)
                        if (Da = 0 < ka ? Fa : gb) L(Da, Z.iconSlide), ta("onStageChange", {
                            target: U[0],
                            index: sa,
                            stage: Da
                        });
                    Gb || (Yb = !0, kc = n(S))
                }
            }

            function x(a) {
                var b, c, f = !1;
                E(kc);
                Yb = !1;
                Gb || S();
                if (Ba.actions) 10 < Math.abs(ka) && fa && (P(U, 0 > ka ? -fa : fa, 200), g = f = !0, eb = U, ga = sa, d(e).on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(b) {
                    b.preventDefault();
                    K(U, !0, a)
                }));
                else if (Z.quickSwipe && !Gb && (c = new Date - jc, b = 300 > c && -50 > Oa, c = 300 > c && 50 < Oa, b ? (Sb = !0, Da = Ba.left, L(Da, Z.iconSlide)) : c &&
                        (Sb = !0, Da = Ba.right, L(Da, Z.iconSlide))), Da && Da.action) Hb = N(Da.disabled, {
                    target: U[0],
                    index: sa
                }), Hb || (f = !0, (g = Gb || N(Da.confirm, {
                    target: U[0],
                    index: sa
                })) ? (P(U, 100 * (0 > ka ? -1 : 1) * Ya[0].offsetWidth / lb, 200, !0), R(Da, U, sa, !1, a)) : M(Da, U, sa, a));
                f || K(U, !0, a);
                rb = !1
            }

            function T() {
                $a = !0;
                Ca = Ia = !1;
                Eb = 0;
                Ra = sa;
                Z.vibrate && C();
                ia = aa(U, "next");
                Va = ia.length && ia[0].offsetTop;
                Ka = aa(U, "prev");
                La = Ka.length && Ka[0].offsetTop + Ka[0].offsetHeight;
                Wa.height(Ha).insertAfter(U);
                U.css({
                    top: Ua
                }).addClass("mbsc-lv-item-dragging").removeClass("mbsc-lv-item-active").appendTo(Nb);
                ta("onSortStart", {
                    target: U[0],
                    index: Ra
                })
            }

            function v(a, b, c, d) {
                a.removeClass("mbsc-lv-item-dragging");
                Wa.remove();
                ta("onSortEnd", {
                    target: a[0],
                    index: Ra
                });
                Z.vibrate && C();
                d && (X.addUndoAction(function(d) {
                    X.move(a, b, null, d, c, !0)
                }, !0), ta("onSortUpdate", {
                    target: a[0],
                    index: Ra
                }))
            }

            function I() {
                ob || (clearTimeout(Ob), g && d(e).trigger("touchstart"), Aa && (X.close(bb, sb), Aa = !1, bb = null))
            }

            function O() {
                clearTimeout(ra);
                ra = setTimeout(function() {
                    Fb = Qa[0].innerHeight || Qa.innerHeight();
                    cc = Na ? Qa.offset().top : 0;
                    ma && (Ua = U[0].offsetTop,
                        Ha = U[0].offsetHeight, za.css({
                            top: Ua,
                            height: Ha
                        }))
                }, 200)
            }

            function G(a, b) {
                N(b.disabled, {
                    target: U[0],
                    index: sa
                }) && d(".mbsc-ic-" + b.icon, za).addClass("mbsc-lv-ic-disabled")
            }

            function M(a, b, c, f) {
                var g, i = {
                    icon: "undo2",
                    text: Z.undoText,
                    color: "#b1b1b1",
                    action: function() {
                        X.undo()
                    }
                };
                a.undo && (X.startActionTrack(), d.isFunction(a.undo) && X.addUndoAction(function() {
                    a.undo.call(Xa, b, X, c)
                }), Zb = b.attr("data-ref"));
                g = a.action.call(Xa, {
                    target: b[0],
                    index: c
                }, X);
                a.undo ? (X.endActionTrack(), !1 !== g && P(b, 0 > +b.attr("data-pos") ? -100 :
                    100, 200), Wa.height(Ha).insertAfter(b), b.css("top", Ua).addClass("mbsc-lv-item-undo"), ab.hide(), Ya.show(), za.append(Ya), L(i), R(i, b, c, !0, f)) : K(b, g, f)
            }

            function R(a, b, c, f, i) {
                var l, o;
                g = !0;
                d(e).off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(a) {
                    a.preventDefault();
                    f && ba(b);
                    K(b, !0, i)
                });
                if (!mb) Ya.off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(a) {
                    a.stopPropagation();
                    l = j(a, "X");
                    o = j(a, "Y")
                }).on("touchend.mbsc-lv-conf mouseup.mbsc-lv-conf", function(d) {
                    d.preventDefault();
                    "touchend" === d.type && r.preventClick();
                    10 > Math.abs(j(d, "X") - l) && 10 > Math.abs(j(d, "Y") - o) && (M(a, b, c, i), f && ($b = null, ba(b)))
                })
            }

            function S() {
                P(U, ic + 100 * Oa / lb);
                Yb = !1
            }

            function K(a, b, c) {
                d(e).off(".mbsc-lv-conf");
                Ya.off(".mbsc-lv-conf");
                !1 !== b ? P(a, 0, "0" !== a.attr("data-pos") ? 200 : 0, !1, function() {
                    ea(a, c);
                    W(a)
                }) : ea(a, c);
                g = !1
            }

            function P(a, b, c, d, f) {
                b = Math.max("right" == rb ? 0 : -100, Math.min(b, "left" == rb ? 0 : 100));
                kb = a[0].style;
                a.attr("data-pos", b);
                kb[k + "Transform"] = "translate3d(" + (d ? lb * b / 100 + "px" : b + "%") + ",0,0)";
                kb[k + "Transition"] =
                    s + "transform " + (c || 0) + "ms";
                f && (pb++, setTimeout(function() {
                    f();
                    pb--
                }, c));
                ka = b
            }

            function V(a, b, c, d) {
                b = Math.max(Pa, Math.min(b, ub));
                kb = a[0].style;
                kb[k + "Transform"] = "translate3d(0," + b + "px,0)";
                kb[k + "Transition"] = s + "transform " + (c || 0) + "ms ease-out";
                d && (pb++, setTimeout(function() {
                    d();
                    pb--
                }, c))
            }

            function Q() {
                clearTimeout(Wb);
                !Ja && X.sortable && (Ja = !0, oa.remove())
            }

            function L(a, b) {
                var c = N(a.text, {
                    target: U[0],
                    index: sa
                }) || "";
                N(a.disabled, {
                    target: U[0],
                    index: sa
                }) ? za.addClass("mbsc-lv-ic-disabled") : za.removeClass("mbsc-lv-ic-disabled");
                za.css("background-color", a.color || (0 === a.percent ? (0 < ka ? Ba.right : Ba.left).color || B : B));
                Ya.attr("class", "mbsc-lv-ic-c mbsc-lv-ic-" + (b ? "move-" : "") + (0 > ka ? "right" : "left"));
                A.attr("class", " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" + (a.icon || "none"));
                Xb.attr("class", "mbsc-lv-ic-text" + (a.icon ? "" : " mbsc-lv-ic-text-only") + (c ? "" : " mbsc-lv-ic-only")).html(c || "&nbsp;");
                Z.animateIcons && (Sb ? A.addClass("mbsc-lv-ic-v") : setTimeout(function() {
                    A.addClass("mbsc-lv-ic-a")
                }, 10))
            }

            function ea(a, b) {
                ma || (A.attr("class", "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"),
                    za.attr("style", "").removeClass("mbsc-lv-stage-c-v"), Xb.html(""));
                za.removeClass("mbsc-lv-left mbsc-lv-right");
                a && (ta("onSlideEnd", {
                    target: a[0],
                    index: sa
                }), b && b())
            }

            function ba(a) {
                a.css("top", "").removeClass("mbsc-lv-item-undo");
                $b ? X.animate(Wa, "collapse", function() {
                    Wa.remove()
                }) : Wa.remove();
                ea();
                $b = Zb = null
            }

            function W(a) {
                kb = a[0].style;
                kb[k + "Transform"] = "";
                kb[k + "Transition"] = "";
                kb.top = "";
                a.removeClass("mbsc-lv-item-swiping")
            }

            function N(a, b) {
                return d.isFunction(a) ? a.call(this, b, X) : a
            }

            function D(a) {
                var b;
                a.attr("data-ref") || (b = H++, a.attr("data-ref", b), fb[b] = {
                    item: a,
                    child: a.children("ul,ol"),
                    parent: a.parent(),
                    ref: a.parent()[0] === Xa ? null : a.parent().parent().attr("data-ref")
                });
                a.addClass("mbsc-lv-item");
                X.sortable.handle && "list-divider" != a.attr("data-role") && !a.children(".mbsc-lv-handle-c").length && a.append(vb);
                if (Z.enhance && !a.hasClass("mbsc-lv-item-enhanced")) {
                    b = a.attr("data-icon");
                    var c = a.find("img").eq(0).addClass("mbsc-lv-img");
                    c.is(":first-child") ? a.addClass("mbsc-lv-img-" + (Z.rtl ? "right" : "left")) :
                        c.length && a.addClass("mbsc-lv-img-" + (Z.rtl ? "left" : "right"));
                    a.addClass("mbsc-lv-item-enhanced").children().each(function(a, b) {
                        b = d(b);
                        b.is("p, h1, h2, h3, h4, h5, h6") && b.addClass("mbsc-lv-txt")
                    });
                    b && a.addClass("mbsc-lv-item-ic-" + (a.attr("data-icon-align") || (Z.rtl ? "right" : "left"))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + b + '"></div')
                }
                a.append(X._processItem(d, 0.2))
            }

            function ca(a) {
                d("li", a).not(".mbsc-lv-item").each(function() {
                    D(d(this))
                });
                d('li[data-role="list-divider"]', a).removeClass("mbsc-lv-item").addClass("mbsc-lv-gr-title");
                d("ul,ol", a).not(".mbsc-lv").addClass("mbsc-lv").prepend(wb).parent().addClass("mbsc-lv-parent").prepend(Pb);
                d(".mbsc-lv-back", a).each(function() {
                    d(this).attr("data-back", d(this).parent().parent().attr("data-ref"))
                })
            }

            function la(a) {
                return a.children("li").not(".mbsc-lv-back").not(".mbsc-lv-removed").not(".mbsc-lv-ph")
            }

            function $(a) {
                "object" !== typeof a && (a = d('li[data-id="' + a + '"]', na));
                return d(a)
            }

            function aa(a, b) {
                for (a = a[b](); a.length && (!a.hasClass("mbsc-lv-item") || a.hasClass("mbsc-lv-ph") || a.hasClass("mbsc-lv-item-dragging"));) {
                    if (!X.sortable.group &&
                        a.hasClass("mbsc-lv-gr-title")) return !1;
                    a = a[b]()
                }
                return a
            }

            function q(a) {
                return r.isNumeric(a) ? a + "" : 0
            }

            function da(a) {
                return +(0 > Oa ? q((a.actionsWidth || 0).right) || q(a.actionsWidth) || q(Z.actionsWidth.right) || q(Z.actionsWidth) : q((a.actionsWidth || 0).left) || q(a.actionsWidth) || q(Z.actionsWidth.left) || q(Z.actionsWidth))
            }

            function wa(a, b) {
                if (a) {
                    var c = Qa.scrollTop(),
                        d = a.is(".mbsc-lv-item") ? a[0].offsetHeight : 0,
                        f = a.offset().top + (Na ? c - cc : 0);
                    b ? (f < c || f > c + Fb) && Qa.scrollTop(f) : f < c ? Qa.scrollTop(f) : f + d > c + Fb && Qa.scrollTop(f +
                        d - Fb / 2)
                }
            }

            function ya(a, b, c, d, f) {
                var g = b.parent(),
                    i = b.prev(),
                    d = d || y;
                i[0] === Ya[0] && (i = Ya.prev());
                va[0] !== b[0] ? (ta("onNavStart", {
                    level: Ib,
                    direction: a,
                    list: b[0]
                }), dc.prepend(b.addClass("mbsc-lv-v mbsc-lv-sl-new")), wa(na), ua(dc, "mbsc-lv-sl-" + a, function() {
                    va.removeClass("mbsc-lv-sl-curr");
                    b.removeClass("mbsc-lv-sl-new").addClass("mbsc-lv-sl-curr");
                    Ma && Ma.length ? va.removeClass("mbsc-lv-v").insertAfter(Ma) : Y.append(va.removeClass("mbsc-lv-v"));
                    Ma = i;
                    Y = g;
                    va = b;
                    wa(c, f);
                    d.call(Xa, c);
                    ta("onNavEnd", {
                        level: Ib,
                        direction: a,
                        list: b[0]
                    })
                })) : (wa(c, f), d.call(Xa, c))
            }

            function Ga(a, b) {
                pb || (a.hasClass("mbsc-lv-parent") ? (Ib++, ya("r", fb[a.attr("data-ref")].child, null, b)) : a.hasClass("mbsc-lv-back") && (Ib--, ya("l", fb[a.attr("data-back")].parent, fb[a.attr("data-back")].item, b)))
            }

            function ua(a, b, c) {
                function d() {
                    clearTimeout(g);
                    pb--;
                    a.off(f, d).removeClass(b);
                    c.call(Xa, a)
                }
                var g, c = c || y;
                Z.animation && "mbsc-lv-item-none" !== b ? (pb++, a.on(f, d).addClass(b), g = setTimeout(d, 500)) : c.call(Xa, a)
            }

            function ha(a, b) {
                var c, d = a.attr("data-ref");
                c = ec[d] =
                    ec[d] || [];
                b && c.push(b);
                a.attr("data-action") || (b = c.shift(), a.attr("data-action", 1), b(function() {
                    a.removeAttr("data-action");
                    c.length ? ha(a) : delete ec[d]
                }))
            }

            function ja(a, f, g) {
                var i, e;
                a && a.length && (i = 100 / (a.length + 2), d.each(a, function(d, l) {
                    l.key === b && (l.key = fc++);
                    l.percent === b && (l.percent = f * i * (d + 1), g && (e = c({}, l), e.key = fc++, e.percent = -i * (d + 1), a.push(e), ac[e.key] = e));
                    ac[l.key] = l
                }))
            }
            var ma, fa, qa, ka, Ja, eb, ga, na, Ra, Kb, va, Ma, Y, zb, Da, pa, ra, mb, Hb, Oa, ib, Ia, Ca, $a, Nb, Bb, db, Cb, ta, oa, Ta, cb, xa, xb, yb, Za, Na, vb, Qb,
                bb, Aa, sb, Ea, Ob, wb, Pb, A, Ya, za, lb, U, Ha, sa, jb, ub, Pa, ab, ia, Va, gb, qb, nb, ob, hb, tb, Wa, Ka, La, Fa, Sb, kc, Yb, Z, Db, Gb, dc, fc, Mb, ic, jc, Ub, Vb, kb, rb, gc, lc, bc, Xb, Wb, Ba, Ab, Zb, $b, Qa, Fb, Eb, cc, X = this,
                Xa = a,
                Sa = d(Xa),
                pb = 0,
                Ib = 0,
                Ua = 0,
                ac = {},
                ec = {},
                fb = {};
            o.Base.call(this, a, u, !0);
            X._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1ace1710cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            X.animate = function(a, b, c) {
                ua(a, "mbsc-lv-item-" + b, c)
            };
            X.add = function(a, c, f, g, i, e) {
                var l, j, o, p, k, u, h = "",
                    n = i === b ? Sa : $(i),
                    C = n,
                    s = "object" !== typeof c ? d('<li data-ref="' + H++ + '" data-id="' + a + '">' + c + "</li>") : c,
                    t = 0 > s.attr("data-pos") ? "left" : "right",
                    r = s.attr("data-ref"),
                    g = g || y;
                r || (r = H++, s.addClass("mbsc-lv-item").attr("data-ref", r));
                D(s);
                e || X.addUndoAction(function(a) {
                    p ?
                        X.navigate(n, function() {
                            C.remove();
                            n.removeClass("mbsc-lv-parent").children(".mbsc-lv-arr").remove();
                            k.child = n.children("ul,ol");
                            X.remove(s, null, a, true)
                        }) : X.remove(s, null, a, true)
                }, !0);
                ha(s, function(a) {
                    W(s.css("top", "").removeClass("mbsc-lv-item-undo"));
                    if (n.is("li")) {
                        u = n.attr("data-ref");
                        if (!n.children("ul,ol").length) {
                            p = true;
                            n.append("<ul></ul>")
                        }
                    } else u = n.children(".mbsc-lv-back").attr("data-back");
                    if (k = fb[u])
                        if (k.child.length) C = k.child;
                        else {
                            n.addClass("mbsc-lv-parent").prepend(Pb);
                            C = n.children("ul,ol").prepend(wb).addClass("mbsc-lv");
                            k.child = C;
                            d(".mbsc-lv-back", n).attr("data-back", u)
                        }
                    fb[r] = {
                        item: s,
                        child: s.children("ul,ol"),
                        parent: C,
                        ref: u
                    };
                    o = la(C);
                    j = o.length;
                    if (f === b || f === null) f = j;
                    e && (h = "mbsc-lv-item-new-" + (e ? t : ""));
                    ca(s.addClass(h));
                    if (f !== false)
                        if (j) f < j ? s.insertBefore(o.eq(f)) : s.insertAfter(o.eq(j - 1));
                        else {
                            l = d(".mbsc-lv-back", C);
                            l.length ? s.insertAfter(l) : C.append(s)
                        }
                    if (C.hasClass("mbsc-lv-v")) X.animate(s.height(s[0].offsetHeight), e && Zb === r ? "none" : "expand", function(b) {
                        X.animate(b.height(""), e ? "add-" + t : "pop-in", function(b) {
                            g.call(Xa,
                                b.removeClass(h));
                            a()
                        })
                    });
                    else {
                        g.call(Xa, s.removeClass(h));
                        a()
                    }
                    na.trigger("mbsc-enhance", [{
                        theme: Z.theme,
                        lang: Z.lang
                    }]);
                    ta("onItemAdd", {
                        target: s[0]
                    })
                })
            };
            X.swipe = function(a, c, d, f, g) {
                U = a = $(a);
                mb = f;
                ma = Gb = !0;
                d = d === b ? 300 : d;
                Oa = 0 < c ? 1 : -1;
                J();
                l();
                P(a, c, d);
                clearTimeout(lc);
                clearInterval(gc);
                gc = setInterval(function() {
                    ka = 100 * (r.getPosition(a) / lb);
                    w()
                }, 10);
                lc = setTimeout(function() {
                    clearInterval(gc);
                    ka = c;
                    w();
                    x(g);
                    ma = Gb = mb = !1
                }, d)
            };
            X.openStage = function(a, b, c, d) {
                ac[b] && X.swipe(a, ac[b].percent, c, d)
            };
            X.openActions =
                function(a, b, c, d) {
                    var f = da(Ab[a.attr("data-type") || "defaults"]);
                    X.swipe(a, "left" == b ? -f : f, c, d)
                };
            X.close = function(a, b) {
                X.swipe(a, 0, b)
            };
            X.remove = function(a, b, c, d) {
                var f, g, c = c || y,
                    a = $(a);
                a.length && (g = a.parent(), f = la(g).index(a), d || (a.attr("data-ref") === Zb && ($b = !0), X.addUndoAction(function(b) {
                    X.add(null, a, f, b, g, !0)
                }, !0)), ha(a, function(f) {
                    b = b || a.attr("data-pos") < 0 ? "left" : "right";
                    if (g.hasClass("mbsc-lv-v")) X.animate(a.addClass("mbsc-lv-removed"), d ? "pop-out" : "remove-" + b, function(a) {
                        X.animate(a.height(a[0].offsetHeight),
                            "collapse",
                            function(a) {
                                W(a.height("").removeClass("mbsc-lv-removed"));
                                c.call(Xa, a) !== false && a.remove();
                                f()
                            })
                    });
                    else {
                        c.call(Xa, a) !== false && a.remove();
                        f()
                    }
                    ta("onItemRemove", {
                        target: a[0]
                    })
                }))
            };
            X.move = function(a, b, c, d, f, g) {
                a = $(a);
                g || X.startActionTrack();
                za.append(Ya);
                X.remove(a, c, null, g);
                X.add(null, a, b, d, f, g);
                g || X.endActionTrack()
            };
            X.navigate = function(a, b) {
                var c, d, a = $(a);
                c = fb[a.attr("data-ref")];
                d = 0;
                for (var f = fb[a.attr("data-ref")]; f.ref;) d++, f = fb[f.ref];
                c && (ya(d >= Ib ? "r" : "l", c.parent, a, b, !0), Ib = d)
            };
            X.init =
                function(a) {
                    var c = Sa.find("ul,ol").length ? "left" : "right",
                        f = 0,
                        i = "",
                        e = "",
                        l = "";
                    X._init(a);
                    a = Z.sort || Z.sortable;
                    "group" === a && (a = {
                        group: !1,
                        multiLevel: !0
                    });
                    !0 === a && (a = {
                        group: !0,
                        multiLevel: !0,
                        handle: Z.sortHandle
                    });
                    a && a.handle === b && (a.handle = Z.sortHandle);
                    X.sortable = a || !1;
                    i += '<div class="mbsc-lv-multi-c"></div><div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>';
                    Sa.addClass("mbsc-lv mbsc-lv-v mbsc-lv-root").show();
                    za = d('<div class="mbsc-lv-stage-c">' +
                        i + "</div>");
                    Ya = d(".mbsc-lv-ic-c", za);
                    ab = d(".mbsc-lv-multi-c", za);
                    A = d(".mbsc-lv-ic-s", za);
                    Xb = d(".mbsc-lv-ic-text", za);
                    Wa = d('<li class="mbsc-lv-item mbsc-lv-ph"></li>');
                    oa = d('<div class="mbsc-lv-fill-item"></div>');
                    na = d('<div class="mbsc-lv-cont mbsc-lv-' + Z.theme + (Z.baseTheme ? " mbsc-lv-" + Z.baseTheme : "") + (Z.animateIcons ? " mbsc-lv-ic-anim" : "") + (Z.striped ? " mbsc-lv-alt-row " : "") + '"><ul class="mbsc-lv mbsc-lv-dummy"></ul><div class="mbsc-lv-sl-c"></div></div>');
                    Na = "body" !== Z.context;
                    Qa = d(Na ? Z.context : h);
                    Nb = d(".mbsc-lv-dummy", na);
                    na.insertAfter(Sa);
                    X.sortable.handle && (Za = !0 === X.sortable.handle ? c : X.sortable.handle, vb = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + Za + ' mbsc-lv-handle"><div class="' + Z.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + Z.handleMarkup + "</div></div>", na.addClass("mbsc-lv-handle-" + Za));
                    Qa.on("orientationchange resize", O);
                    O();
                    na.on("touchstart mousedown", ".mbsc-lv-item", F).on("touchmove", ".mbsc-lv-item", z).on("touchend touchcancel", ".mbsc-lv-item", t);
                    Xa.addEventListener &&
                        Xa.addEventListener("click", function(a) {
                            if (nb) {
                                a.stopPropagation();
                                a.preventDefault();
                                nb = false
                            }
                        }, !0);
                    na.on("touchstart mousedown", ".mbsc-lv-ic-m", function(a) {
                        if (!mb) {
                            a.stopPropagation();
                            a.preventDefault()
                        }
                        Ub = j(a, "X");
                        Vb = j(a, "Y")
                    }).on("touchend mouseup", ".mbsc-lv-ic-m", function(a) {
                        if (!mb) {
                            a.type === "touchend" && r.preventClick();
                            g && !d(this).hasClass("mbsc-lv-ic-disabled") && Math.abs(j(a, "X") - Ub) < 10 && Math.abs(j(a, "Y") - Vb) < 10 && M((ka < 0 ? Ba.rightMenu : Ba.leftMenu)[d(this).index()], eb, ga)
                        }
                    });
                    dc = d(".mbsc-lv-sl-c",
                        na).append(Sa.addClass("mbsc-lv-sl-curr")).attr("data-ref", H++);
                    va = Sa;
                    Y = na;
                    wb = '<li class="mbsc-lv-item mbsc-lv-back">' + Z.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + Z.leftArrowClass + '"></div></li>';
                    Pb = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + Z.rightArrowClass + '"></div>';
                    ca(Sa);
                    fc = 0;
                    Ab = Z.itemGroups || {};
                    Ab.defaults = {
                        swipeleft: Z.swipeleft,
                        swiperight: Z.swiperight,
                        stages: Z.stages,
                        actions: Z.actions,
                        actionsWidth: Z.actionsWidth
                    };
                    d.each(Ab, function(a, c) {
                        c.swipe = c.swipe !== b ? c.swipe : Z.swipe;
                        c.stages = c.stages || [];
                        ja(c.stages, 1, true);
                        ja(c.stages.left, 1);
                        ja(c.stages.right, -1);
                        if (c.stages.left || c.stages.right) c.stages = [].concat(c.stages.left || [], c.stages.right || []);
                        Ta = false;
                        if (!c.stages.length) {
                            c.swipeleft && c.stages.push({
                                percent: -30,
                                action: c.swipeleft
                            });
                            c.swiperight && c.stages.push({
                                percent: 30,
                                action: c.swiperight
                            })
                        }
                        d.each(c.stages, function(a, b) {
                            if (b.percent === 0) {
                                Ta = true;
                                return false
                            }
                        });
                        Ta || c.stages.push({
                            percent: 0
                        });
                        c.stages.sort(function(a, b) {
                            return a.percent - b.percent
                        });
                        d.each(c.stages,
                            function(a, b) {
                                if (b.percent === 0) {
                                    c.start = a;
                                    return false
                                }
                            });
                        if (Ta) c.left = c.right = c.stages[c.start];
                        else {
                            c.left = c.stages[c.start - 1] || {};
                            c.right = c.stages[c.start + 1] || {}
                        }
                        if (c.actions) {
                            c.leftMenu = c.actions.left || c.actions;
                            c.rightMenu = c.actions.right || c.leftMenu;
                            l = e = "";
                            for (f = 0; f < c.leftMenu.length; f++) e = e + ("<div " + (c.leftMenu[f].color ? 'style="background-color: ' + c.leftMenu[f].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + c.leftMenu[f].icon + '">' + (c.leftMenu[f].text || "") + "</div>");
                            for (f =
                                0; f < c.rightMenu.length; ++f) l = l + ("<div " + (c.rightMenu[f].color ? 'style="background-color: ' + c.rightMenu[f].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + c.rightMenu[f].icon + '">' + (c.rightMenu[f].text || "") + "</div>");
                            if (c.actions.left) c.swipe = c.actions.right ? c.swipe : "right";
                            if (c.actions.right) c.swipe = c.actions.left ? c.swipe : "left";
                            c.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + e + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + l + "</div>"
                        }
                    });
                    Z.fixedHeader && (cb = d('<div class="mbsc-lv-fixed-header"></div>'),
                        xa = d(".mbsc-lv-gr-title", Sa), Na ? (Qa.before(cb), cb.addClass("mbsc-lv-fixed-header-ctx mbsc-lv-" + Z.theme + (Z.baseTheme ? " mbsc-lv-" + Z.baseTheme : ""))) : na.prepend(cb), Qa.on("scroll.mbsc-lv touchmove.mbsc-lv", function() {
                            if ($a || !ma) {
                                var a = d(this).scrollTop(),
                                    b = Sa.offset().top;
                                xa.each(function(c, f) {
                                    if (d(f).offset().top - (Na ? b : 0) < a) xb = c
                                });
                                Kb = xa[xb];
                                b < (Na ? Qa.offset().top : a) && a < (Na ? Sa[0].scrollHeight : b + Sa.height()) ? cb.empty().append(d(Kb).clone()).show() : cb.hide()
                            }
                        }));
                    Z.rtl && na.addClass("mbsc-lv-rtl");
                    Z.hover &&
                        (sb = Z.hover.time || 200, Ea = Z.hover.timeout || 200, Qb = Z.hover.direction || Z.hover || "right", na.on("mouseenter.mbsc-lv", ".mbsc-lv-item", function() {
                            if (!bb || bb[0] != this) {
                                I();
                                bb = d(this);
                                if (Ab[bb.attr("data-type") || "defaults"].actions) Ob = setTimeout(function() {
                                    if (ob) bb = null;
                                    else {
                                        Aa = true;
                                        X.openActions(bb, Qb, sb, false)
                                    }
                                }, Ea)
                            }
                        }).on("mouseleave.mbsc-lv", I));
                    Sa.is("[mbsc-enhance]") && (yb = !0, Sa.removeAttr("mbsc-enhance"), na.attr("mbsc-enhance", ""));
                    na.trigger("mbsc-enhance", [{
                        theme: Z.theme,
                        lang: Z.lang
                    }]);
                    ta("onInit")
                };
            X.destroy = function() {
                Y.append(va);
                Na && cb && cb.remove();
                yb && Sa.attr("mbsc-enhance", "");
                na.find(".mbsc-lv-txt,.mbsc-lv-img").removeClass("mbsc-lv-txt mbsc-lv-img");
                na.find("ul,ol").removeClass("mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr").find("li").removeClass("mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right").removeAttr("data-ref");
                d(".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic", na).remove();
                Sa.insertAfter(na);
                na.remove();
                za.remove();
                Qa.off(".mbsc-lv").off("orientationchange resize", O);
                X._destroy()
            };
            var Tb, mc = [],
                Jb = [],
                hc = [],
                Rb = 0;
            X.startActionTrack = function() {
                Rb || (hc = []);
                Rb++
            };
            X.endActionTrack = function() {
                Rb--;
                Rb || Jb.push(hc)
            };
            X.addUndoAction = function(a, b) {
                var c = {
                    action: a,
                    async: b
                };
                Rb ? hc.push(c) : (Jb.push([c]), Jb.length > Z.undoLimit && Jb.shift())
            };
            X.undo = function() {
                function a() {
                    0 > d ? (Tb = !1, b()) : (c = f[d], d--, c.async ? c.action(a) : (c.action(), a()))
                }

                function b() {
                    if (f = mc.shift()) Tb = !0, d = f.length - 1,
                        a()
                }
                var c, d, f;
                Jb.length && mc.push(Jb.pop());
                Tb || b()
            };
            Z = X.settings;
            ta = X.trigger;
            X.init(u)
        };
        o.ListView.prototype = {
            _class: "listview",
            _hasDef: !0,
            _hasTheme: !0,
            _hasLang: !0,
            _defaults: {
                context: "body",
                actionsWidth: 90,
                sortDelay: 250,
                undoLimit: 10,
                swipe: !0,
                quickSwipe: !0,
                animateIcons: !0,
                animation: !0,
                revert: !0,
                vibrate: !0,
                handleClass: "",
                handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
                leftArrowClass: "mbsc-ic-arrow-left4",
                rightArrowClass: "mbsc-ic-arrow-right4",
                backText: "Back",
                undoText: "Undo",
                stages: []
            }
        };
        a.themes.listview.mobiscroll = {
            leftArrowClass: "mbsc-ic-arrow-left5",
            rightArrowClass: "mbsc-ic-arrow-right5"
        };
        a.presetShort("listview", "ListView")
    })(window, document);
    (function() {
        var h = m,
            e = h.$;
        h.themes.listview.material = {
            leftArrowClass: "mbsc-ic-material-keyboard-arrow-left",
            rightArrowClass: "mbsc-ic-material-keyboard-arrow-right",
            onItemActivate: function(b) {
                h.themes.material.addRipple(e(b.target), b.domEvent)
            },
            onItemDeactivate: function() {
                h.themes.material.removeRipple()
            },
            onSlideStart: function(b) {
                e(".mbsc-ripple", b.target).remove()
            },
            onSortStart: function(b) {
                e(".mbsc-ripple", b.target).remove()
            }
        }
    })();
    (function(h) {
        var e, b = function() {},
            g = m,
            a = g.$,
            d = g.util,
            c = d.getCoord,
            o = d.testTouch;
        g.classes.Form = function(h, s) {
            function k(b) {
                var c = {},
                    f = b[0],
                    g = b.parent(),
                    i = b.attr("data-password-toggle"),
                    e = b.attr("data-icon-show") || "eye",
                    j = b.attr("data-icon-hide") || "eye-blocked";
                i && (c.right = "password" == f.type ? e : j);
                d.addIcon(b, c);
                i && p.tap(g.find(".mbsc-right-ic"), function() {
                    if (f.type == "text") {
                        f.type =
                            "password";
                        a(this).addClass("mbsc-ic-" + e).removeClass("mbsc-ic-" + j)
                    } else {
                        f.type = "text";
                        a(this).removeClass("mbsc-ic-" + e).addClass("mbsc-ic-" + j)
                    }
                })
            }

            function j() {
                if (!a(this).hasClass("mbsc-textarea-scroll")) {
                    var b = this.offsetHeight + (this.scrollHeight - this.offsetHeight);
                    this.scrollTop = 0;
                    this.style.height = b + "px"
                }
            }

            function i(b) {
                var c, d;
                if (b.offsetHeight && (b.style.height = "", c = b.scrollHeight - b.offsetHeight, c = b.offsetHeight + (0 < c ? c : 0), d = Math.round(c / 24), 10 < d ? (b.scrollTop = c, c = 240 + (c - 24 * d), a(b).addClass("mbsc-textarea-scroll")) :
                        a(b).removeClass("mbsc-textarea-scroll"), c)) b.style.height = c + "px"
            }

            function C() {
                clearTimeout(E);
                E = setTimeout(function() {
                    a("textarea.mbsc-control", B).each(function() {
                        i(this)
                    })
                }, 100)
            }

            function H(a) {
                return !(!a.id || !g.instances[a.id])
            }
            var y, n, E, f, B = a(h),
                p = this;
            g.classes.Base.call(this, h, s, !0);
            p._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1ace1710cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            p.refresh = function() {
                a("input,select,textarea,progress,button", B).each(function() {
                    function b() {
                        a("input", x).val(-1 != l.selectedIndex ? l.options[l.selectedIndex].text : "")
                    }
                    var h, s, C, t, l = this,
                        r = a(l),
                        x = r.parent();
                    h = r.attr("data-role");
                    var y = r.attr("type") || l.nodeName.toLowerCase();
                    r.hasClass("mbsc-control") || ("button" != y && "submit" != y ? x : r).prepend(p._processItem(a,
                        0.2));
                    if ("false" != r.attr("data-enhance") && m.running) {
                        if (!r.hasClass("mbsc-control")) switch (/(switch|range|segmented|stepper)/.test(h) && (y = h), "button" != y && "submit" != y && "segmented" != y && (x.find("label").addClass("mbsc-label"), x.contents().filter(function() {
                            return 3 == this.nodeType && this.nodeValue && /\S/.test(this.nodeValue)
                        }).each(function() {
                            a('<span class="mbsc-label"></span>').insertAfter(this).append(this)
                        })), r.addClass("mbsc-control"), y) {
                            case "button":
                            case "submit":
                                h = r.attr("data-icon");
                                r.addClass("mbsc-btn");
                                h && (r.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + h + '"></span>'), "" === r.text() && r.addClass("mbsc-btn-icon-only"));
                                break;
                            case "switch":
                                H(l) || new g.classes.Switch(l, {
                                    theme: n.theme,
                                    onText: n.onText,
                                    offText: n.offText,
                                    stopProp: n.stopProp
                                });
                                break;
                            case "checkbox":
                                x.prepend(r).addClass("mbsc-checkbox");
                                r.after('<span class="mbsc-checkbox-box"></span>');
                                break;
                            case "range":
                                !x.hasClass("mbsc-slider") && !H(l) && new g.classes.Slider(l, {
                                    theme: n.theme,
                                    stopProp: n.stopProp
                                });
                                break;
                            case "progress":
                                H(l) || new g.classes.Progress(l, {
                                    theme: n.theme
                                });
                                break;
                            case "radio":
                                x.addClass("mbsc-radio");
                                r.after('<span class="mbsc-radio-box"><span></span></span>');
                                break;
                            case "select":
                            case "select-one":
                            case "select-multiple":
                                h = r.prev().is("input.mbsc-control") ? r.prev() : a('<input tabindex="-1" type="text" class="mbsc-control mbsc-control-ev" readonly>');
                                k(r);
                                x.addClass("mbsc-input mbsc-select");
                                r.after(h);
                                h.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');
                                break;
                            case "textarea":
                                k(r);
                                x.addClass("mbsc-input mbsc-textarea");
                                break;
                            case "segmented":
                                var v, I;
                                r.parent().hasClass("mbsc-segmented-item") || (I = a('<div class="mbsc-segmented"></div>'), x.after(I), a('input[name="' + r.attr("name") + '"]', B).each(function(b, c) {
                                    v = a(c).parent();
                                    v.addClass("mbsc-segmented-item").append('<span class="mbsc-segmented-content">' + (a(c).attr("data-icon") ? ' <span class="mbsc-ic mbsc-ic-' + a(c).attr("data-icon") + '"></span> ' : "") + (v.text() || "") + "</span>");
                                    v.contents().filter(function() {
                                        return this.nodeType === 3
                                    }).remove();
                                    I.append(v)
                                }));
                                break;
                            case "stepper":
                                H(l) ||
                                    new g.classes.Stepper(l, {
                                        form: p
                                    });
                                break;
                            case "hidden":
                                break;
                            default:
                                k(r), x.addClass("mbsc-input")
                        }
                        if (!r.hasClass("mbsc-control-ev")) {
                            /select/.test(y) && !r.hasClass("mbsc-comp") && (r.on("change.mbsc-form", b), b());
                            if ("textarea" == y) r.on("keydown.mbsc-form input.mbsc-form", function() {
                                clearTimeout(E);
                                E = setTimeout(function() {
                                    i(l)
                                }, 100)
                            }).on("scroll.mbsc-form", j);
                            r.addClass("mbsc-control-ev").on("touchstart.mbsc-form mousedown.mbsc-form", function(b) {
                                if (o(b, this)) {
                                    C = c(b, "X");
                                    t = c(b, "Y");
                                    e && e.removeClass("mbsc-active");
                                    if (!l.disabled) {
                                        s = true;
                                        e = a(this);
                                        a(this).addClass("mbsc-active");
                                        f("onControlActivate", {
                                            target: this,
                                            domEvent: b
                                        })
                                    }
                                }
                            }).on("touchmove.mbsc-form mousemove.mbsc-form", function(a) {
                                if (s && Math.abs(c(a, "X") - C) > 9 || Math.abs(c(a, "Y") - t) > 9) {
                                    r.removeClass("mbsc-active");
                                    f("onControlDeactivate", {
                                        target: r[0],
                                        domEvent: a
                                    });
                                    s = false
                                }
                            }).on("touchend.mbsc-form touchcancel.mbsc-form mouseleave.mbsc-form mouseup.mbsc-form", function(a) {
                                if (s && a.type == "touchend" && !l.readOnly) {
                                    l.focus();
                                    /(button|submit|checkbox|switch|radio)/.test(y) &&
                                        a.preventDefault();
                                    if (!/select/.test(y)) {
                                        var b = (a.originalEvent || a).changedTouches[0],
                                            c = document.createEvent("MouseEvents");
                                        c.initMouseEvent("click", true, true, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, false, false, false, false, 0, null);
                                        c.tap = true;
                                        l.dispatchEvent(c);
                                        d.preventClick()
                                    }
                                }
                                s && setTimeout(function() {
                                    r.removeClass("mbsc-active");
                                    f("onControlDeactivate", {
                                        target: r[0],
                                        domEvent: a
                                    })
                                }, 100);
                                s = false;
                                e = null
                            })
                        }
                    }
                });
                C()
            };
            p.init = function(c) {
                p._init(c);
                g.themes.form[n.theme] || (n.theme = "mobiscroll");
                y = "mbsc-form mbsc-" + n.theme + (n.baseTheme ? " mbsc-" + n.baseTheme : "") + (n.rtl ? " mbsc-rtl" : " mbsc-ltr");
                B.hasClass("mbsc-form") || B.addClass(y).on("touchstart", b).show();
                a(window).on("resize orientationchange", C);
                p.refresh();
                p.trigger("onInit")
            };
            p.destroy = function() {
                B.removeClass(y).off("touchstart", b);
                a(window).off("resize orientationchange", C);
                a(".mbsc-control", B).off(".mbsc-form").removeClass("mbsc-control-ev");
                p._destroy();
                a(".mbsc-progress progress", B).mobiscroll("destroy");
                a(".mbsc-slider input", B).mobiscroll("destroy");
                a(".mbsc-stepper input", B).mobiscroll("destroy");
                a(".mbsc-switch input", B).mobiscroll("destroy")
            };
            n = p.settings;
            f = p.trigger;
            p.init(s)
        };
        g.classes.Form.prototype = {
            _hasDef: !0,
            _hasTheme: !0,
            _hasLang: !0,
            _class: "form",
            _defaults: {
                tap: !0,
                stopProp: !0,
                lang: "en"
            }
        };
        g.themes.form.mobiscroll = {};
        g.presetShort("form", "Form");
        g.classes.Stepper = function(b, d) {
            function e(c) {
                32 == c.keyCode && (c.preventDefault(), !z && !b.disabled && (p = a(this).addClass("mbsc-active"), E(c)))
            }

            function j(a) {
                z && (a.preventDefault(), f(!0))
            }

            function i(c) {
                if (o(c,
                        this) && !b.disabled && m.running && (p = a(this).addClass("mbsc-active").trigger("focus"), W && W.trigger("onControlActivate", {
                        target: p[0],
                        domEvent: c
                    }), E(c), "mousedown" === c.type)) a(document).on("mousemove", H).on("mouseup", C)
            }

            function C(b) {
                z && (b.preventDefault(), f(!0, b), "mouseup" === b.type && a(document).off("mousemove", H).off("mouseup", C))
            }

            function H(a) {
                z && (T = c(a, "X"), v = c(a, "Y"), l = T - S, w = v - K, (7 < Math.abs(l) || 7 < Math.abs(w)) && f())
            }

            function y() {
                var c;
                b.disabled || (c = parseFloat(a(this).val()), n(isNaN(c) ? P : c))
            }

            function n(a,
                b, c) {
                ba = P;
                b === h && (b = !0);
                c === h && (c = b);
                P = a !== h ? Math.min(O, Math.max(Math.round(a / M) * M, G)) : Math.min(O, Math.max(P + (p.hasClass("mbsc-stepper-minus") ? -M : M), G));
                t = !0;
                F.removeClass("mbsc-step-disabled");
                b && Q.val(P);
                P == G ? J.addClass("mbsc-step-disabled") : P == O && u.addClass("mbsc-step-disabled");
                P !== ba && c && Q.trigger("change")
            }

            function E(a) {
                z || (z = !0, t = !1, S = c(a, "X"), K = c(a, "Y"), clearInterval(I), clearTimeout(I), I = setTimeout(function() {
                    n();
                    I = setInterval(function() {
                        n()
                    }, 150)
                }, 300))
            }

            function f(a, b) {
                clearInterval(I);
                clearTimeout(I);
                !t && a && n();
                t = z = !1;
                p.removeClass("mbsc-active");
                W && setTimeout(function() {
                    W.trigger("onControlDeactivate", {
                        target: p[0],
                        domEvent: b
                    })
                }, 100)
            }

            function B(a, b) {
                var c = Q.attr(a);
                return c === h || "" === c ? b : +c
            }
            var p, u, J, F, z, t, l, w, x, T, v, I, O, G, M, R, S, K, P, V = this,
                Q = a(b),
                L = Q.hasClass("mbsc-stepper-ready"),
                ea = L ? Q.closest(".mbsc-stepper-cont") : Q.parent(),
                ba = P,
                W = d.form;
            g.classes.Base.call(this, b, d, !0);
            V._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b =
                    void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1ace1710cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            V.getVal = function() {
                var a = parseFloat(Q.val()),
                    a = isNaN(a) ? P : a;
                return Math.min(O, Math.max(Math.round(a / M) * M, G))
            };
            V.setVal = function(a, b, c) {
                a = parseFloat(a);
                n(isNaN(a) ? P : a, b, c)
            };
            V.init = function(c) {
                V._init(c);
                R = V.settings;
                G = c.min === h ? B("min", R.min) : c.min;
                O = c.max === h ? B("max", R.max) : c.max;
                M = c.step === h ? B("step", R.step) : c.step;
                x = Q.attr("data-val") ||
                    R.val;
                P = Math.min(O, Math.max(Math.round(+b.value / M) * M || 0, G));
                L || ea.addClass("mbsc-stepper-cont").append('<span class="mbsc-segmented mbsc-stepper"></span>').find(".mbsc-stepper").append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (P == G ? "mbsc-step-disabled" : "") + '"  tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (P == O ? "mbsc-step-disabled" :
                    "") + '"  tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span> </span></span>').prepend(Q);
                J = a(".mbsc-stepper-minus", ea);
                u = a(".mbsc-stepper-plus", ea);
                L || ("left" == x ? (ea.addClass("mbsc-stepper-val-left"), Q.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : "right" == x ? (ea.addClass("mbsc-stepper-val-right"), u.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : J.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>'));
                Q.val(P).attr("data-role", "stepper").attr("min", G).attr("max", O).attr("step", M).on("change", y);
                F = a(".mbsc-stepper-control", ea).on("keydown", e).on("keyup", j).on("mousedown touchstart", i).on("touchmove", H).on("touchend touchcancel", C);
                Q.addClass("mbsc-stepper-ready mbsc-control");
                Q.hasClass("mbsc-control") || ("button" != type && "submit" != type ? ea : Q).prepend(V._processItem(a, 0.2))
            };
            V.destroy = function() {
                Q.removeClass("mbsc-control").off("change", y);
                F.off("keydown", e).off("keyup", j).off("mousedown touchstart",
                    i).off("touchmove", H).off("touchend touchcancel", C);
                V._destroy()
            };
            V.init(d)
        };
        g.classes.Stepper.prototype = {
            _class: "stepper",
            _defaults: {
                min: 0,
                max: 100,
                step: 1
            }
        };
        g.presetShort("stepper", "Stepper");
        g.classes.Switch = function(b, c) {
            var d, e, i, o = this,
                c = c || {};
            a.extend(c, {
                changeEvent: "click",
                min: 0,
                max: 1,
                step: 1,
                live: !1,
                round: !1,
                handle: !1,
                highlight: !1
            });
            g.classes.Slider.call(this, b, c, !0);
            o._readValue = function() {
                return b.checked ? 1 : 0
            };
            o._fillValue = function(a, b, c) {
                d.prop("checked", !!a);
                c && d.trigger("change")
            };
            o._onTap =
                function(a) {
                    o._setVal(a ? 0 : 1)
                };
            o.__onInit = function() {
                i = o.settings;
                d = a(b);
                e = d.parent();
                e.prepend(d);
                d.attr("data-role", "switch").after('<span class="mbsc-progress-cont mbsc-switch-track"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-slider-handle-cont"><span class="mbsc-slider-handle mbsc-switch-handle" data-index="0"><span class="mbsc-switch-txt-off">' + i.offText + '</span><span class="mbsc-switch-txt-on">' + i.onText + "</span></span></span></span></span>");
                o._$track = e.find(".mbsc-progress-track")
            };
            o.getVal = function() {
                return b.checked
            };
            o.setVal = function(a, b, c) {
                o._setVal(a ? 1 : 0, b, c)
            };
            o.init(c)
        };
        g.classes.Switch.prototype = {
            _class: "switch",
            _css: "mbsc-switch",
            _hasTheme: !0,
            _hasLang: !0,
            _defaults: {
                stopProp: !0,
                offText: "Off",
                onText: "On"
            }
        };
        g.presetShort("switch", "Switch");
        a(function() {
            a("[mbsc-enhance]").each(function() {
                a(this).mobiscroll().form()
            });
            a(document).on("mbsc-enhance", function(b, c) {
                a(b.target).is("[mbsc-enhance]") ? a(b.target).mobiscroll().form(c) : a("[mbsc-enhance]", b.target).each(function() {
                    a(this).mobiscroll().form(c)
                })
            });
            a(document).on("mbsc-refresh", function(b) {
                a(b.target).is("[mbsc-enhance]") ? a(b.target).mobiscroll("refresh") : a("[mbsc-enhance]", b.target).each(function() {
                    a(this).mobiscroll("refresh")
                })
            })
        })
    })();
    m.themes.form["android-holo"] = {};
    m.themes.form.wp = {};
    (function() {
        var h = m.$;
        m.themes.form.material = {
            onControlActivate: function(e) {
                var b, g = h(e.target);
                if ("button" == g[0].type || "submit" == g[0].type) b = g;
                "segmented" == g.attr("data-role") && (b = g.next());
                g.hasClass("mbsc-stepper-control") && !g.hasClass("mbsc-step-disabled") &&
                    (b = g.find(".mbsc-segmented-content"));
                b && m.themes.material.addRipple(b, e.domEvent)
            },
            onControlDeactivate: function() {
                m.themes.material.removeRipple()
            }
        }
    })();
    m.themes.form.ios = {};
    (function(h) {
        var e = m,
            b = e.$,
            g = e.util.isNumeric,
            a = function() {},
            d = e.classes;
        d.Numpad = function(a, e, r) {
            function s(d) {
                var g, i = (g = f.validate.call(a, {
                    values: p.slice(0),
                    variables: T
                }, l) || []) && g.disabled || [];
                l._isValid = g.invalid ? !1 : !0;
                l._tempValue = f.formatValue.call(a, p.slice(0), T, l);
                E = p.length;
                u = g.length || F;
                if (l._isVisible && m.running) {
                    b(".mbsc-np-ph",
                        H).each(function(a) {
                        b(this).html("ltr" == f.fill ? a >= E ? n : B || p[a] : a >= F - u ? a + E < F ? n : B || p[a + E - F] : "")
                    });
                    b(".mbsc-np-cph", H).each(function() {
                        b(this).html(T[b(this).attr("data-var")] || b(this).attr("data-ph"))
                    });
                    if (E === F)
                        for (g = 0; 9 >= g; g++) i.push(g);
                    b(".mbsc-np-btn", H).removeClass(y);
                    for (g = 0; g < i.length; g++) b('.mbsc-np-btn[data-val="' + i[g] + '"]', H).addClass(y);
                    l._isValid ? b(".mbsc-fr-btn-s .mbsc-fr-btn", H).removeClass(y) : b(".mbsc-fr-btn-s .mbsc-fr-btn", H).addClass(y);
                    l.live && (l._hasValue = d || l._hasValue, k(d, !1, d),
                        d && J("onSet", {
                            valueText: l._value
                        }))
                }
            }

            function k(a, c, d, f) {
                c && s();
                f || (z = p.slice(0), v = b.extend({}, T), w = x.slice(0), l._value = l._hasValue ? l._tempValue : null);
                a && (l._isInput && t.val(l._hasValue && l._isValid ? l._value : ""), J("onFill", {
                    valueText: l._hasValue ? l._tempValue : "",
                    change: d
                }), d && (l._preventChange = !0, t.trigger("change")))
            }

            function j(a) {
                var b, c = a || [],
                    d = [];
                x = [];
                T = {};
                for (a = 0; a < c.length; a++) /:/.test(c[a]) ? (b = c[a].split(":"), T[b[0]] = b[1], x.push(b[0])) : (d.push(c[a]), x.push("digit"));
                return d
            }

            function i(a, b) {
                if (!(!E &&
                        !b && !f.allowLeadingZero || a.hasClass("mbsc-fr-btn-d") || a.hasClass("mbsc-np-btn-empty")) && E < F && m.running) x.push("digit"), p.push(b), s(!0)
            }

            function C() {
                var a, b, c = x.pop();
                if (E || "digit" !== c) {
                    if ("digit" !== c && T[c]) {
                        delete T[c];
                        b = x.slice(0);
                        x = [];
                        for (a = 0; a < b.length; a++) b[a] !== c && x.push(b[a])
                    } else p.pop();
                    s(!0)
                }
            }
            var H, y, n, E, f, B, p, u, J, F, z, t = b(a),
                l = this,
                w = [],
                x = [],
                T = {},
                v = {},
                I = {
                    48: 0,
                    49: 1,
                    50: 2,
                    51: 3,
                    52: 4,
                    53: 5,
                    54: 6,
                    55: 7,
                    56: 8,
                    57: 9,
                    96: 0,
                    97: 1,
                    98: 2,
                    99: 3,
                    100: 4,
                    101: 5,
                    102: 6,
                    103: 7,
                    104: 8,
                    105: 9
                };
            d.Frame.call(this, a, e, !0);
            l.setVal =
                l._setVal = function(d, g, i, e) {
                    l._hasValue = null !== d && d !== h;
                    p = j(b.isArray(d) ? d.slice(0) : f.parseValue.call(a, d, l));
                    k(g, !0, i === h ? g : i, e)
                };
            l.getVal = l._getVal = function(a) {
                return l._hasValue || a ? l[a ? "_tempValue" : "_value"] : null
            };
            l.setArrayVal = l.setVal;
            l.getArrayVal = function(a) {
                return a ? p.slice(0) : l._hasValue ? z.slice(0) : null
            };
            l._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a *
                    "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1ace1710cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            l._readValue = function() {
                var b = t.val() || "";
                "" !== b && (l._hasValue = !0);
                B ? (T = {}, x = [], p = []) : (T = l._hasValue ? v : {}, x = l._hasValue ? w : [], p = l._hasValue && z ? z.slice(0) : j(f.parseValue.call(a, b, l)), k(!1, !0))
            };
            l._fillValue = function() {
                l._hasValue = !0;
                k(!0, !1, !0)
            };
            l._generateContent = function() {
                var a, c, d, g = 1;
                a = "";
                var i;
                i = "" + ('<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' +
                    f.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + f.deleteIcon + '"></div><div class="mbsc-np-dsp">');
                a = f.template.replace(/d/g, '<span class="mbsc-np-ph">' + n + "</span>").replace(/&#100;/g, "d");
                a = a.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>');
                i = i + a + '</div></div><div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">';
                for (a = 0; 4 > a; a++) {
                    i += '<div class="mbsc-np-row">';
                    for (c = 0; 3 > c; c++) d = g, 10 == g || 12 == g ? d = "" : 11 == g &&
                        (d = 0), i = "" === d ? 10 == g && f.leftKey ? i + ('<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (f.leftKey.variable ? 'data-var="' + f.leftKey.variable + '"' : "") + ' data-val="' + f.leftKey.value + '" >' + f.leftKey.text + "</div>") : 12 == g && f.rightKey ? i + ('<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (f.rightKey.variable ? 'data-var="' + f.rightKey.variable + '"' : "") + ' data-val="' + f.rightKey.value + '" >' + f.rightKey.text + "</div>") : i + '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>' :
                        i + ('<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + d + '">' + d + l._processItem(b, 0.2) + "</div>"), g++;
                    i += "</div>"
                }
                return i + "</div></div>"
            };
            l._markupReady = function() {
                H = l._markup;
                s()
            };
            l._attachEvents = function(a) {
                a.on("keydown", function(a) {
                    I[a.keyCode] !== h ? i(b('.mbsc-np-btn[data-val="' + I[a.keyCode] + '"]'), I[a.keyCode]) : 8 == a.keyCode && (a.preventDefault(), C())
                });
                l.tap(b(".mbsc-np-btn", a), function() {
                    var a = b(this);
                    if (a.hasClass("mbsc-np-btn-custom")) {
                        var c = a.attr("data-val"),
                            d = a.attr("data-var");
                        if (!a.hasClass("mbsc-fr-btn-d")) {
                            d && (a = d.split(":"), x.push(a[0]), T[a[0]] = a[1]);
                            if (c.length + E <= u)
                                for (a = 0; a < c.length; ++a) x.push("digit"), p.push(g(c[a]) ? +c[a] : c[a]);
                            s(!0)
                        }
                    } else i(a, +a.attr("data-val"))
                });
                l.tap(b(".mbsc-np-del", a), C)
            };
            l._processSettings = function() {
                f = l.settings;
                f.headerText = (f.headerText || "").replace("{value}", "");
                f.cssClass = (f.cssClass || "") + " mbsc-np";
                f.template = f.template.replace(/\\d/, "&#100;");
                n = f.placeholder;
                F = (f.template.match(/d/g) || []).length;
                y = "mbsc-fr-btn-d " + (f.disabledClass ||
                    "");
                B = f.mask;
                J = l.trigger;
                B && t.is("input") && t.attr("type", "password")
            };
            l._indexOf = function(a, b) {
                var c;
                for (c = 0; c < a.length; ++c)
                    if (a[c].toString() === b.toString()) return c;
                return -1
            };
            r || l.init(e)
        };
        d.Numpad.prototype = {
            _hasDef: !0,
            _hasTheme: !0,
            _hasLang: !0,
            _hasPreset: !0,
            _class: "numpad",
            _defaults: b.extend({}, d.Frame.prototype._defaults, {
                template: "dd.dd",
                placeholder: "0",
                deleteIcon: "backspace",
                allowLeadingZero: !1,
                fill: "rtl",
                deleteText: "Delete",
                decimalSeparator: ".",
                thousandsSeparator: ",",
                validate: a,
                parseValue: a,
                formatValue: function(a, d, g) {
                    var e, h = 1;
                    e = g.settings;
                    var g = e.placeholder,
                        j = e.template,
                        i = a.length,
                        C = j.length,
                        H = "";
                    for (e = 0; e < C; e++) "d" == j[C - e - 1] ? (H = h <= i ? a[i - h] + H : g + H, h++) : H = j[C - e - 1] + H;
                    b.each(d, function(a, b) {
                        H = H.replace("{" + a + "}", b)
                    });
                    return b("<div>" + H + "</div>").text()
                }
            })
        };
        e.themes.numpad = e.themes.frame;
        e.presetShort("numpad", "Numpad", !1)
    })();
    (function() {
        var h = m,
            e = h.$,
            b = {
                min: 0,
                max: 99.99,
                scale: 2,
                prefix: "",
                suffix: "",
                returnAffix: !1
            };
        h.presets.numpad.decimal = function(g) {
            function a(a) {
                var b;
                b = a.slice(0);
                for (a =
                    0; b.length;) a = 10 * a + b.shift();
                for (b = 0; b < o.scale; b++) a /= 10;
                return a
            }

            function d(b) {
                return a(b).toFixed(o.scale).replace(".", o.decimalSeparator).replace(/\B(?=(\d{3})+(?!\d))/g, o.thousandsSeparator)
            }
            var c = e.extend({}, g.settings),
                o = e.extend(g.settings, b, c);
            g.getVal = function(a) {
                a = g._getVal(a);
                return h.util.isNumeric(a) ? +a : a
            };
            return {
                template: o.prefix.replace(/d/g, "\\d") + Array((Math.floor(o.max) + "").length + 1).join("d") + (o.scale ? "." + Array(o.scale + 1).join("d") : "") + o.suffix.replace(/d/g, "\\d"),
                parseValue: function(a) {
                    var b,
                        c;
                    b = a || o.defaultValue;
                    a = [];
                    if (b && (c = (b + "").match(/\d+\.?\d*/g))) {
                        c = (+c[0]).toFixed(o.scale);
                        for (b = 0; b < c.length; b++) "." != c[b] && (+c[b] ? a.push(+c[b]) : a.length && a.push(0))
                    }
                    return a
                },
                formatValue: function(a) {
                    a = d(a);
                    return o.returnAffix ? o.prefix + a + o.suffix : a
                },
                validate: function(b) {
                    var b = b.values,
                        c = d(b),
                        h = a(b),
                        j = [];
                    !b.length && !o.allowLeadingZero && j.push(0);
                    g.isVisible() && e(".mbsc-np-dsp", g._markup).html(o.prefix + c + o.suffix);
                    return {
                        disabled: j,
                        invalid: h > o.max || h < o.min || (o.invalid ? -1 != g._indexOf(o.invalid, h) :
                            !1)
                    }
                }
            }
        }
    })();
    (function() {
        function h(a) {
            for (var b = 0, g = 1, e = 0; a.length;) 3 < b ? g = 3600 : 1 < b && (g = 60), e += a.pop() * g * (b % 2 ? 10 : 1), b++;
            return e
        }
        var e = m,
            b = e.$,
            g = ["h", "m", "s"],
            a = {
                min: 0,
                max: 362439,
                defaultValue: 0,
                hourTextShort: "h",
                minuteTextShort: "m",
                secTextShort: "s"
            };
        e.presets.numpad.timespan = function(d) {
            function c(a) {
                var c, d = "",
                    e = 3600;
                b(g).each(function(b, g) {
                    c = Math.floor(a / e);
                    a -= c * e;
                    e /= 60;
                    if (0 < c || "s" == g && !d) d = d + (d ? " " : "") + c + s[g]
                });
                return d
            }
            var o = b.extend({}, d.settings),
                r = b.extend(d.settings, a, o),
                s = {
                    h: r.hourTextShort.replace(/d/g,
                        "\\d"),
                    m: r.minuteTextShort.replace(/d/g, "\\d"),
                    s: r.secTextShort.replace(/d/g, "\\d")
                },
                o = 'd<span class="mbsc-np-sup mbsc-np-time">' + s.s + "</span>";
            9 < r.max && (o = "d" + o);
            99 < r.max && (o = '<span class="mbsc-np-ts-m">' + (639 < r.max ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + s.m + "</span>" + o);
            6039 < r.max && (o = '<span class="mbsc-np-ts-h">' + (38439 < r.max ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + s.h + "</span>" + o);
            d.setVal = function(a, b, g, o) {
                e.util.isNumeric(a) && (a = c(a));
                return d._setVal(a,
                    b, g, o)
            };
            d.getVal = function(a) {
                return d._hasValue || a ? h(d.getArrayVal(a)) : null
            };
            return {
                template: o,
                parseValue: function(a) {
                    var d, i = a || c(r.defaultValue),
                        e = [];
                    i && b(g).each(function(a, b) {
                        (d = RegExp("(\\d+)" + s[b], "gi").exec(i)) ? (d = +d[1], 9 < d ? (e.push(Math.floor(d / 10)), e.push(d % 10)) : (e.length && e.push(0), (d || e.length) && e.push(d))) : e.length && (e.push(0), e.push(0))
                    });
                    return e
                },
                formatValue: function(a) {
                    return c(h(a))
                },
                validate: function(a) {
                    var a = a.values,
                        b = h(a.slice(0)),
                        c = [];
                    a.length || c.push(0);
                    return {
                        disabled: c,
                        invalid: b >
                            r.max || b < r.min || (r.invalid ? -1 != d._indexOf(r.invalid, +b) : !1)
                    }
                }
            }
        }
    })();
    (function() {
        var h = m,
            e = h.$,
            b = {
                timeFormat: "hh:ii A",
                amText: "am",
                pmText: "pm"
            };
        h.presets.numpad.time = function(g) {
            function a(a, b) {
                var c, d = "";
                for (c = 0; c < a.length; ++c) d += a[c] + (c % 2 == (1 == a.length % 2 ? 0 : 1) && c != a.length - 1 ? ":" : "");
                e.each(b, function(a, b) {
                    d += " " + b
                });
                return d
            }
            var d = e.extend({}, g.settings),
                c = e.extend(g.settings, b, d),
                o = c.timeFormat.split(":"),
                h = c.timeFormat.match(/a/i),
                s = h ? "a" == h[0] ? c.amText : c.amText.toUpperCase() : "",
                k = h ? "a" == h[0] ? c.pmText :
                c.pmText.toUpperCase() : "",
                j = 0,
                i = c.min ? "" + c.min.getHours() : "",
                C = c.max ? "" + c.max.getHours() : "",
                H = c.min ? "" + (10 > c.min.getMinutes() ? "0" + c.min.getMinutes() : c.min.getMinutes()) : "",
                y = c.max ? "" + (10 > c.max.getMinutes() ? "0" + c.max.getMinutes() : c.max.getMinutes()) : "",
                n = c.min ? "" + (10 > c.min.getSeconds() ? "0" + c.min.getSeconds() : c.min.getSeconds()) : "",
                m = c.max ? "" + (10 > c.max.getSeconds() ? "0" + c.max.getSeconds() : c.max.getSeconds()) : "";
            c.min && c.min.setFullYear(2014, 7, 20);
            c.max && c.max.setFullYear(2014, 7, 20);
            return {
                placeholder: "-",
                allowLeadingZero: !0,
                template: (3 == o.length ? "dd:dd:dd" : 2 == o.length ? "dd:dd" : "dd") + (h ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ""),
                leftKey: h ? {
                    text: s,
                    variable: "ampm:" + s,
                    value: "00"
                } : {
                    text: ":00",
                    value: "00"
                },
                rightKey: h ? {
                    text: k,
                    variable: "ampm:" + k,
                    value: "00"
                } : {
                    text: ":30",
                    value: "30"
                },
                parseValue: function(a) {
                    var b, d = a || c.defaultValue,
                        g = [];
                    if (d) {
                        d += "";
                        if (b = d.match(/\d/g))
                            for (a = 0; a < b.length; a++) g.push(+b[a]);
                        h && g.push("ampm:" + (d.match(RegExp(c.pmText, "gi")) ? k : s))
                    }
                    return g
                },
                formatValue: function(b, c) {
                    return a(b,
                        c)
                },
                validate: function(b) {
                    var d = b.values,
                        b = a(d, b.variables),
                        e = 3 <= d.length ? new Date(2014, 7, 20, "" + d[0] + (0 === d.length % 2 ? d[1] : ""), "" + d[0 === d.length % 2 ? 2 : 1] + d[0 === d.length % 2 ? 3 : 2]) : "",
                        k, s, F, z, t, l, w = [];
                    j = k = 2 * o.length;
                    d.length || (h && (w.push(0), w.push(c.leftKey.value)), w.push(c.rightKey.value));
                    if (!h && (2 > k - d.length || 1 != d[0] && (2 < d[0] || 3 < d[1]) && 2 >= k - d.length)) w.push("30"), w.push("00");
                    if ((h ? 1 < d[0] || 2 < d[1] : 1 != d[0] && (2 < d[0] || 3 < d[1])) && d[0]) d.unshift(0), j = k - 1;
                    if (d.length == k)
                        for (k = 0; 9 >= k; ++k) w.push(k);
                    else if (1 == d.length &&
                        h && 1 == d[0] || d.length && 0 === d.length % 2 || !h && 2 == d[0] && 3 < d[1] && 1 == d.length % 2)
                        for (k = 6; 9 >= k; ++k) w.push(k);
                    F = void 0 !== d[1] ? "" + d[0] + d[1] : "";
                    z = +y == +(void 0 !== d[3] ? "" + d[2] + d[3] : 0);
                    if (c.invalid)
                        for (k = 0; k < c.invalid.length; ++k)
                            if (s = c.invalid[k].getHours(), t = c.invalid[k].getMinutes(), l = c.invalid[k].getSeconds(), s == +F)
                                if (2 == o.length && (10 > t ? 0 : +("" + t)[0]) == +d[2]) {
                                    w.push(10 > t ? t : +("" + t)[1]);
                                    break
                                } else if ((10 > l ? 0 : +("" + l)[0]) == +d[4]) {
                        w.push(10 > l ? l : +("" + l)[1]);
                        break
                    }
                    if (c.min || c.max) {
                        s = +i == +F;
                        t = (F = +C == +F) && z;
                        z = s && z;
                        if (0 ===
                            d.length) {
                            for (k = h ? 2 : 19 < i ? i[0] : 3; k <= (1 == i[0] ? 9 : i[0] - 1); ++k) w.push(k);
                            if (10 <= i && (w.push(0), 2 == i[0]))
                                for (k = 3; 9 >= k; ++k) w.push(k);
                            if (C && 10 > C || i && 10 <= i)
                                for (k = C && 10 > C ? +C[0] + 1 : 0; k < (i && 10 <= i ? i[0] : 10); ++k) w.push(k)
                        }
                        if (1 == d.length) {
                            if (0 === d[0])
                                for (k = 0; k < i[0]; ++k) w.push(k);
                            if (i && 0 !== d[0] && (h ? 1 == d[0] : 2 == d[0]))
                                for (k = h ? 3 : 4; 9 >= k; ++k) w.push(k);
                            if (d[0] == i[0])
                                for (k = 0; k < i[1]; ++k) w.push(k);
                            if (d[0] == C[0] && !h)
                                for (k = +C[1] + 1; 9 >= k; ++k) w.push(k)
                        }
                        if (2 == d.length && (s || F))
                            for (k = F ? +y[0] + 1 : 0; k < (s ? +H[0] : 10); ++k) w.push(k);
                        if (3 == d.length &&
                            (F && d[2] == y[0] || s && d[2] == H[0]))
                            for (k = F && d[2] == y[0] ? +y[1] + 1 : 0; k < (s && d[2] == H[0] ? +H[1] : 10); ++k) w.push(k);
                        if (4 == d.length && (z || t))
                            for (k = t ? +m[0] + 1 : 0; k < (z ? +n[0] : 10); ++k) w.push(k);
                        if (5 == d.length && (z && d[4] == n[0] || t && d[4] == m[0]))
                            for (k = t && d[4] == m[0] ? +m[1] + 1 : 0; k < (z && d[4] == n[0] ? +n[1] : 10); ++k) w.push(k)
                    }
                    return {
                        disabled: w,
                        length: j,
                        invalid: (h ? !RegExp("^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9]) (?:" + c.amText + "|" + c.pmText + ")$", "i").test(b) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(b)) || (c.invalid ? -1 !=
                            g._indexOf(c.invalid, e) : !1) || !((c.min ? c.min <= e : 1) && (c.max ? e <= c.max : 1))
                    }
                }
            }
        }
    })();
    (function() {
        var h = m,
            e = h.$,
            b = {
                dateOrder: "mdy",
                dateFormat: "mm/dd/yy",
                delimiter: "/"
            };
        h.presets.numpad.date = function(g) {
            function a(a) {
                return new Date(+("" + a[d] + a[d + 1] + a[d + 2] + a[d + 3]), +("" + a[c] + a[c + 1]) - 1, +("" + a[o] + a[o + 1]))
            }
            var d, c, o, r, s = [];
            r = e.extend({}, g.settings);
            var k = e.extend(g.settings, h.util.datetime.defaults, b, r),
                j = k.dateOrder,
                i = k.min ? "" + (k.getMonth(k.min) + 1) : 0,
                C = k.max ? "" + (k.getMonth(k.max) + 1) : 0,
                H = k.min ? "" + k.getDay(k.min) :
                0,
                y = k.max ? "" + k.getDay(k.max) : 0,
                n = k.min ? "" + k.getYear(k.min) : 0,
                m = k.max ? "" + k.getYear(k.max) : 0,
                j = j.replace(/y+/gi, "yyyy"),
                j = j.replace(/m+/gi, "mm"),
                j = j.replace(/d+/gi, "dd");
            d = j.toUpperCase().indexOf("Y");
            c = j.toUpperCase().indexOf("M");
            o = j.toUpperCase().indexOf("D");
            j = "";
            s.push({
                val: d,
                n: "yyyy"
            }, {
                val: c,
                n: "mm"
            }, {
                val: o,
                n: "dd"
            });
            s.sort(function(a, b) {
                return a.val - b.val
            });
            e.each(s, function(a, b) {
                j += b.n
            });
            d = j.indexOf("y");
            c = j.indexOf("m");
            o = j.indexOf("d");
            j = "";
            for (r = 0; 8 > r; ++r)
                if (j += "d", r + 1 == d || r + 1 == c || r + 1 == o) j +=
                    k.delimiter;
            g.getVal = function(b) {
                return g._hasValue || b ? a(g.getArrayVal(b)) : null
            };
            return {
                placeholder: "-",
                fill: "ltr",
                allowLeadingZero: !0,
                template: j,
                parseValue: function(a) {
                    var b, c = [];
                    b = a || k.defaultValue;
                    a = h.util.datetime.parseDate(k.dateFormat, b, k);
                    if (b)
                        for (b = 0; b < s.length; ++b) c = /m/i.test(s[b].n) ? c.concat(((9 > k.getMonth(a) ? "0" : "") + (k.getMonth(a) + 1)).split("")) : /d/i.test(s[b].n) ? c.concat(((10 > k.getDay(a) ? "0" : "") + k.getDay(a)).split("")) : c.concat((k.getYear(a) + "").split(""));
                    return c
                },
                formatValue: function(b) {
                    return h.util.datetime.formatDate(k.dateFormat,
                        a(b), k)
                },
                validate: function(b) {
                    var b = b.values,
                        e = a(b),
                        j, h, s, r, z = [],
                        t = void 0 !== b[d + 3] ? "" + b[d] + b[d + 1] + b[d + 2] + b[d + 3] : "",
                        l = void 0 !== b[c + 1] ? "" + b[c] + b[c + 1] : "",
                        w = void 0 !== b[o + 1] ? "" + b[o] + b[o + 1] : "",
                        x = "" + k.getMaxDayOfMonth(t || 2012, l - 1 || 0),
                        T = n === t && +i === +l,
                        v = m === t && +C === +l;
                    if (k.invalid)
                        for (j = 0; j < k.invalid.length; ++j) {
                            h = k.getYear(k.invalid[j]);
                            s = k.getMonth(k.invalid[j]);
                            r = k.getDay(k.invalid[j]);
                            if (h == +t && s + 1 == +l && (10 > r ? 0 : +("" + r)[0]) == +b[o]) {
                                z.push(10 > r ? r : +("" + r)[1]);
                                break
                            }
                            if (s + 1 == +l && r == +w && ("" + h).substring(0,
                                    3) == "" + b[d] + b[d + 1] + b[d + 2]) {
                                z.push(("" + h)[3]);
                                break
                            }
                            if (h == +t && r == +w && (10 > s ? 0 : +("" + (s + 1))[0]) == +b[c]) {
                                z.push(10 > s ? s : +("" + (s + 1))[1]);
                                break
                            }
                        }
                    if ("31" == w && (b.length == c || b.length == c + 1)) 1 != b[c] ? z.push(2, 4, 6, 9, 11) : z.push(1);
                    "30" == w && 0 === b[c] && b.length <= c + 1 && z.push(2);
                    if (b.length == c) {
                        for (j = m === t && 10 > +C ? 1 : 2; 9 >= j; ++j) z.push(j);
                        n === t && 10 <= +i && z.push(0)
                    }
                    if (b.length == c + 1) {
                        if (1 == b[c]) {
                            for (j = m === t ? +C[1] + 1 : 3; 9 >= j; ++j) z.push(j);
                            if (n == t)
                                for (j = 0; j < +i[1]; ++j) z.push(j)
                        }
                        if (0 === b[c] && (z.push(0), m === t || n === t))
                            for (j = m === t ?
                                +w > +y ? +C : +C + 1 : 0; j <= (n === t ? +i - 1 : 9); ++j) z.push(j)
                    }
                    if (b.length == o) {
                        for (j = v ? (10 < +y ? +y[0] : 0) + 1 : +x[0] + 1; 9 >= j; ++j) z.push(j);
                        if (T)
                            for (j = 0; j < (10 > +H ? 0 : H[0]); ++j) z.push(j)
                    }
                    if (b.length == o + 1) {
                        if (3 <= b[o] || "02" == l)
                            for (j = +x[1] + 1; 9 >= j; ++j) z.push(j);
                        if (v && +y[0] == b[o])
                            for (j = +y[1] + 1; 9 >= j; ++j) z.push(j);
                        if (T && H[0] == b[o])
                            for (j = 0; j < +H[1]; ++j) z.push(j);
                        if (0 === b[o] && (z.push(0), v || T))
                            for (j = v ? +y + 1 : 1; j <= (T ? +H - 1 : 9); ++j) z.push(j)
                    }
                    if (void 0 !== b[d + 2] && "02" == l && "29" == w)
                        for (h = +("" + b[d] + b[d + 1] + b[d + 2] + 0); h <= +("" + b[d] + b[d + 1] + b[d + 2] + 9); ++h) z.push(!(0 ===
                            h % 4 && 0 !== h % 100 || 0 === h % 400) ? h % 10 : "");
                    if (b.length == d) {
                        if (k.min)
                            for (j = 0; j < +n[0]; ++j) z.push(j);
                        if (k.max)
                            for (j = +m[0] + 1; 9 >= j; ++j) z.push(j);
                        z.push(0)
                    }
                    if (k.min || k.max)
                        for (h = 1; 4 > h; ++h)
                            if (b.length == d + h) {
                                if (b[d + h - 1] == +n[h - 1] && (3 == h ? b[d + h - 2] == +n[h - 2] : 1))
                                    for (j = 0; j < +n[h] + (3 == h && b[c + 1] && +i > +l ? 1 : 0); ++j) z.push(j);
                                if (b[d + h - 1] == +m[h - 1] && (3 == h ? b[d + h - 2] == +m[h - 2] : 1))
                                    for (j = +m[h] + (3 == h && +C < +l ? 0 : 1); 9 >= j; ++j) z.push(j)
                            }
                    return {
                        disabled: z,
                        invalid: !("Invalid Date" != e && (k.min ? k.min <= e : 1) && (k.max ? e <= k.max : 1)) || (k.invalid ? -1 != g._indexOf(k.invalid,
                            e) : !1)
                    }
                }
            }
        }
    })();
    (function(h, e, b) {
        function g(a, b) {
            return (a._array ? a._map[b] : a.getIndex(b)) || 0
        }

        function a(a, b, c) {
            var d = a.data;
            return b < a.min || b > a.max ? c : a._array ? a.circular ? o(d).get(b % a._length) : d[b] : o.isFunction(d) ? d(b) : ""
        }

        function d(a) {
            return o.isPlainObject(a) ? a.value !== b ? a.value : a.display : a
        }
        var c = m,
            o = c.$,
            r = o.extend,
            s = c.classes,
            k = c.util,
            j = k.getCoord,
            i = k.testTouch;
        c.presetShort("scroller", "Scroller", !1);
        s.Scroller = function(h, H, y) {
            function n(a) {
                var b = o(this).attr("data-index");
                a.stopPropagation();
                "mousedown" ===
                a.type && a.preventDefault();
                if (i(a, this) && !(o.isArray(D.readonly) ? D.readonly[b] : D.readonly))
                    if (M = o(this).addClass("mbsc-sc-btn-a"), L = j(a, "X"), ea = j(a, "Y"), V = !0, Q = !1, setTimeout(function() {
                            J(b, "inc" == M.attr("data-dir") ? 1 : -1)
                        }, 100), "mousedown" === a.type) o(e).on("mousemove", E).on("mouseup", f)
            }

            function E(a) {
                (7 < Math.abs(L - j(a, "X")) || 7 < Math.abs(ea - j(a, "Y"))) && F(!0)
            }

            function f(a) {
                F();
                a.preventDefault();
                "mouseup" === a.type && o(e).off("mousemove", E).off("mouseup", f)
            }

            function B(a) {
                var b = o(this).attr("data-index"),
                    c, d;
                38 == a.keyCode ? (c = !0, d = -1) : 40 == a.keyCode ? (c = !0, d = 1) : 32 == a.keyCode && (c = !0, u(b));
                c && (a.stopPropagation(), a.preventDefault(), d && !V && (V = !0, Q = !1, J(b, d)))
            }

            function p() {
                F()
            }

            function u(c, g) {
                var f = $[c],
                    i = g || f._$markup.find('.mbsc-sc-itm[data-val="' + ba[c] + '"]'),
                    e = +i.attr("data-index"),
                    e = d(a(f, e, void 0)),
                    j = q._tempSelected[c],
                    l = k.isNumeric(f.multiple) ? f.multiple : Infinity;
                if (f.multiple && !f._disabled[e]) return j[e] !== b ? (i.removeClass(S).removeAttr("aria-selected"), delete j[e]) : k.objectToArray(j).length < l && (i.addClass(S).attr("aria-selected",
                    "true"), j[e] = e), !0
            }

            function J(a, b) {
                Q || z(a, b);
                V && m.running && (clearInterval(P), P = setInterval(function() {
                    z(a, b)
                }, D.delay))
            }

            function F(a) {
                clearInterval(P);
                Q = a;
                V = !1;
                M && M.removeClass("mbsc-sc-btn-a")
            }

            function z(a, b) {
                var c = $[a];
                I(c, a, c._current + b, 200, 1 == b ? 1 : 2)
            }

            function t(a, c, f) {
                var i = a._index - a._batch;
                a.data = a.data || [];
                a.key = a.key !== b ? a.key : c;
                a.label = a.label !== b ? a.label : c;
                a._map = {};
                a._array = o.isArray(a.data);
                a._array && (a._length = a.data.length, o.each(a.data, function(b, c) {
                    a._map[d(c)] = b
                }));
                a.circular = D.circular ===
                    b ? a.circular === b ? a._array && a._length > D.rows : a.circular : o.isArray(D.circular) ? D.circular[c] : D.circular;
                a.min = a._array ? a.circular ? -Infinity : 0 : a.min === b ? -Infinity : a.min;
                a.max = a._array ? a.circular ? Infinity : a._length - 1 : a.max === b ? Infinity : a.max;
                a._nr = c;
                a._index = g(a, ba[c]);
                a._disabled = {};
                a._batch = 0;
                a._current = a._index;
                a._first = a._index - R;
                a._last = a._index + R;
                a._offset = a._first;
                f ? (a._offset -= a._margin / W + (a._index - i), a._margin += (a._index - i) * W) : a._margin = 0;
                a._refresh = function(b) {
                    r(a._scroller.settings, {
                        minScroll: -((a.multiple ?
                            Math.max(0, a.max - D.rows + 1) : a.max) - a._offset) * W,
                        maxScroll: -(a.min - a._offset) * W
                    });
                    a._scroller.refresh(b)
                };
                return aa[a.key] = a
            }

            function l(c, d, g, f) {
                for (var i, e, j, l, h, k = "", n = q._tempSelected[d], s = c._disabled || {}; g <= f; g++) e = a(c, g), l = o.isPlainObject(e) ? e.display : e, j = e && e.value !== b ? e.value : l, i = e && e.cssClass !== b ? e.cssClass : "", e = e && e.label !== b ? e.label : "", h = j !== b && j == ba[d] && !c.multiple, k += '<div role="option" aria-selected="' + (n[j] ? !0 : !1) + '" class="mbsc-sc-itm ' + i + " " + (h ? "mbsc-sc-itm-sel " : "") + (n[j] ? S : "") + (j ===
                    b ? " mbsc-sc-itm-ph" : " mbsc-btn-e") + (s[j] ? " mbsc-sc-itm-inv mbsc-btn-d" : "") + '" data-index="' + g + '" data-val="' + j + '"' + (e ? ' aria-label="' + e + '"' : "") + (h ? ' aria-selected="true"' : "") + ' style="height:' + W + "px;line-height:" + W + 'px;">' + (1 < la ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(W / la) + "px;font-size:" + Math.round(0.8 * (W / la)) + 'px;">' : "") + (l === b ? "" : l) + q._processItem(o, 0.2) + (1 < la ? "</div>" : "") + "</div>";
                return k
            }

            function w(a) {
                var b = D.headerText;
                return b ? "function" === typeof b ? b.call(h, a) : b.replace(/\{value\}/i,
                    a) : ""
            }

            function x(a, b, c) {
                var c = Math.round(-c / W) + a._offset,
                    d = c - a._current,
                    g = a._first,
                    f = a._last;
                d && (a._first += d, a._last += d, a._current = c, setTimeout(function() {
                    0 < d ? (a._$markup.append(l(a, b, Math.max(f + 1, g + d), f + d)), o(".mbsc-sc-itm", a._$markup).slice(0, Math.min(d, f - g + 1)).remove()) : 0 > d && (a._$markup.prepend(l(a, b, g + d, Math.min(g - 1, f + d))), o(".mbsc-sc-itm", a._$markup).slice(Math.max(d, g - f - 1)).remove());
                    a._margin += d * W;
                    a._$markup.css("margin-top", a._margin + "px")
                }, 10))
            }

            function T(c, f, e, i) {
                var c = $[c],
                    i = i || c._disabled,
                    j = g(c, f),
                    l = f,
                    h = f,
                    o = 0,
                    k = 0;
                f === b && (f = d(a(c, j, void 0)));
                if (i[f]) {
                    for (f = 0; j - o >= c.min && i[l] && 100 > f;) f++, o++, l = d(a(c, j - o, void 0));
                    for (f = 0; j + k < c.max && i[h] && 100 > f;) f++, k++, h = d(a(c, j + k, void 0));
                    f = (k < o && k && 2 !== e || !o || 0 > j - o || 1 == e) && !i[h] ? h : l
                }
                return f
            }

            function v(a, c, d, f) {
                var e, i, j, l, k = q._isVisible;
                N = !0;
                l = D.validate.call(h, {
                    values: ba.slice(0),
                    index: c,
                    direction: d
                }, q) || {};
                N = !1;
                l.valid && (q._tempWheelArray = ba = l.valid.slice(0));
                ca("onValidated");
                o.each($, function(f, h) {
                    k && h._$markup.find(".mbsc-sc-itm").removeClass("mbsc-sc-itm-inv mbsc-btn-d");
                    h._disabled = {};
                    l.disabled && l.disabled[f] && o.each(l.disabled[f], function(a, b) {
                        h._disabled[b] = true;
                        k && h._$markup.find('.mbsc-sc-itm[data-val="' + b + '"]').addClass("mbsc-sc-itm-inv mbsc-btn-d")
                    });
                    ba[f] = h.multiple ? ba[f] : T(f, ba[f], d);
                    if (k) {
                        (!h.multiple || c === b) && h._$markup.find(".mbsc-sc-itm-sel").removeClass(S).removeAttr("aria-selected");
                        if (h.multiple) {
                            if (c === b)
                                for (var n in q._tempSelected[f]) h._$markup.find('.mbsc-sc-itm[data-val="' + n + '"]').addClass(S).attr("aria-selected", "true")
                        } else h._$markup.find('.mbsc-sc-itm[data-val="' +
                            ba[f] + '"]').addClass("mbsc-sc-itm-sel").attr("aria-selected", "true");
                        i = g(h, ba[f]);
                        e = i - h._index + h._batch;
                        if (Math.abs(e) > 2 * R + 1) {
                            j = e + (2 * R + 1) * (e > 0 ? -1 : 1);
                            h._offset = h._offset + j;
                            h._margin = h._margin - j * W;
                            h._refresh()
                        }
                        h._index = i + h._batch;
                        h._scroller.scroll(-(i - h._offset + h._batch) * W, c === f || c === b ? a : 200)
                    }
                });
                q._tempValue = D.formatValue(ba, q);
                k && q._header.html(w(q._tempValue));
                q.live && (q._hasValue = f || q._hasValue, O(f, f, 0, !0), f && ca("onSet", {
                    valueText: q._value
                }));
                f && ca("onChange", {
                    valueText: q._tempValue
                })
            }

            function I(c,
                g, f, e, i) {
                var j = d(a(c, f, void 0));
                j !== b && (ba[g] = j, c._batch = c._array ? Math.floor(f / c._length) * c._length : 0, setTimeout(function() {
                    v(e, g, i, !0)
                }, 10))
            }

            function O(a, b, c, d, g) {
                d || v(c);
                g || (q._wheelArray = ba.slice(0), q._value = q._hasValue ? q._tempValue : null, q._selected = r(!0, {}, q._tempSelected));
                a && (q._isInput && da.val(q._hasValue ? q._tempValue : ""), ca("onFill", {
                    valueText: q._hasValue ? q._tempValue : "",
                    change: b
                }), b && (q._preventChange = !0, da.trigger("change")))
            }
            var G, M, R = 20,
                S, K, P, V, Q, L, ea, ba, W, N, D, ca, la, $, aa, q = this,
                da = o(h);
            s.Frame.call(this, h, H, !0);
            q.setVal = q._setVal = function(a, c, d, g, f) {
                q._hasValue = null !== a && a !== b;
                q._tempWheelArray = ba = o.isArray(a) ? a.slice(0) : D.parseValue.call(h, a, q) || [];
                O(c, d === b ? c : d, f, !1, g)
            };
            q.getVal = q._getVal = function(a) {
                a = q._hasValue || a ? q[a ? "_tempValue" : "_value"] : null;
                return k.isNumeric(a) ? +a : a
            };
            q.setArrayVal = q.setVal;
            q.getArrayVal = function(a) {
                return a ? q._tempWheelArray : q._wheelArray
            };
            q.changeWheel = function(a, c, d) {
                var g, f;
                o.each(a, function(a, b) {
                    f = aa[a];
                    g = f._nr;
                    f && (r(f, b), t(f, g, !0), q._isVisible &&
                        (f._$markup.html(l(f, g, f._first, f._last)).css("margin-top", f._margin + "px"), f._refresh(N)))
                });
                q._isVisible && q.position();
                N || v(c, b, b, d)
            };
            q.getValidValue = T;
            q._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1ace1710cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            q._generateContent = function() {
                var a, c = "",
                    d = 0;
                o.each(D.wheels, function(g, f) {
                    c += '<div class="mbsc-w-p mbsc-sc-whl-gr-c"><div class="mbsc-sc-whl-gr' + (K ? " mbsc-sc-cp" : "") + (D.showLabel ? " mbsc-sc-lbl-v" : "") + '">';
                    o.each(f, function(g, f) {
                        q._tempSelected[d] = r({}, q._selected[d]);
                        $[d] = t(f, d);
                        a = f.label !== b ? f.label : g;
                        c += '<div class="mbsc-sc-whl-w ' + (f.cssClass ||
                                "") + (f.multiple ? " mbsc-sc-whl-multi" : "") + '" style="' + (D.width ? "width:" + (D.width[d] || D.width) + "px;" : (D.minWidth ? "min-width:" + (D.minWidth[d] || D.minWidth) + "px;" : "") + (D.maxWidth ? "max-width:" + (D.maxWidth[d] || D.maxWidth) + "px;" : "")) + '"><div class="mbsc-sc-whl-o"></div><div class="mbsc-sc-whl-l" style="height:' + W + "px;margin-top:-" + (W / 2 + (D.selectedLineBorder || 0)) + 'px;"></div><div tabindex="0" aria-live="off" aria-label="' + a + '" role="listbox" data-index="' + d + '" class="mbsc-sc-whl" style="height:' + D.rows * W +
                            'px;">' + (K ? '<div data-index="' + d + '" data-dir="inc" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (D.btnPlusClass || "") + '" style="height:' + W + "px;line-height:" + W + 'px;"></div><div data-index="' + d + '" data-dir="dec" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (D.btnMinusClass || "") + '" style="height:' + W + "px;line-height:" + W + 'px;"></div>' : "") + '<div class="mbsc-sc-lbl">' + a + '</div><div class="mbsc-sc-whl-c"' + (f.multiple ? ' aria-multiselectable="true"' : ' style="height:' + W + "px;margin-top:-" + (W / 2 + 1) + 'px;"') + '><div class="mbsc-sc-whl-sc">';
                        c += l(f, d, f._first, f._last) + "</div></div></div>";
                        c += "</div>";
                        d++
                    });
                    c += "</div></div>"
                });
                return c
            };
            q._attachEvents = function(a) {
                o(".mbsc-sc-btn", a).on("touchstart mousedown", n).on("touchmove", E).on("touchend touchcancel", f);
                o(".mbsc-sc-whl", a).on("keydown", B).on("keyup", p)
            };
            q._detachEvents = function(a) {
                o(".mbsc-sc-whl", a).mobiscroll("destroy")
            };
            q._markupReady = function(a) {
                G = a;
                o(".mbsc-sc-whl", G).each(function(a) {
                    var b, d = o(this),
                        f = $[a];
                    f._$markup = o(".mbsc-sc-whl-sc", this);
                    f._scroller = new c.classes.ScrollView(this, {
                        mousewheel: D.mousewheel,
                        moveElement: f._$markup,
                        initialPos: -(f._index - f._offset) * W,
                        contSize: 0,
                        snap: W,
                        minScroll: -((f.multiple ? Math.max(0, f.max - D.rows + 1) : f.max) - f._offset) * W,
                        maxScroll: -(f.min - f._offset) * W,
                        maxSnapScroll: R,
                        prevDef: !0,
                        stopProp: !0,
                        onStart: function(b, c) {
                            c.settings.readonly = o.isArray(D.readonly) ? D.readonly[a] : D.readonly
                        },
                        onGestureStart: function() {
                            d.addClass("mbsc-sc-whl-a mbsc-sc-whl-anim");
                            ca("onWheelGestureStart", {
                                index: a
                            })
                        },
                        onGestureEnd: function(c) {
                            var d = 90 == c.direction ? 1 : 2,
                                g = c.duration;
                            b = Math.round(-c.destinationY / W) + f._offset;
                            I(f, a, b, g, d)
                        },
                        onAnimationStart: function() {
                            d.addClass("mbsc-sc-whl-anim")
                        },
                        onAnimationEnd: function() {
                            d.removeClass("mbsc-sc-whl-a mbsc-sc-whl-anim");
                            ca("onWheelAnimationEnd", {
                                index: a
                            })
                        },
                        onMove: function(b) {
                            x(f, a, b.posY)
                        },
                        onBtnTap: function(b) {
                            var b = o(b.target),
                                c = +b.attr("data-index");
                            u(a, b) && (c = f._current);
                            !1 !== ca("onItemTap", {
                                target: b[0],
                                selected: b.hasClass("mbsc-itm-sel")
                            }) && (I(f, a, c, 200), q.live && !f.multiple && (!0 === D.setOnTap || D.setOnTap[a]) && setTimeout(function() {
                                    q.select()
                                },
                                200))
                        }
                    })
                });
                v()
            };
            q._fillValue = function() {
                q._hasValue = !0;
                O(!0, !0, 0, !0)
            };
            q._clearValue = function() {
                o(".mbsc-sc-whl-multi .mbsc-sc-itm-sel", G).removeClass(S).removeAttr("aria-selected")
            };
            q._readValue = function() {
                var a = da.val() || "",
                    b = 0;
                "" !== a && (q._hasValue = !0);
                q._tempWheelArray = ba = q._hasValue && q._wheelArray ? q._wheelArray.slice(0) : D.parseValue.call(h, a, q) || [];
                q._tempSelected = r(!0, {}, q._selected);
                o.each(D.wheels, function(a, c) {
                    o.each(c, function(a, c) {
                        $[b] = t(c, b);
                        b++
                    })
                });
                O();
                ca("onRead")
            };
            q._processSettings =
                function() {
                    D = q.settings;
                    ca = q.trigger;
                    W = D.height;
                    la = D.multiline;
                    K = D.showScrollArrows;
                    S = "mbsc-sc-itm-sel mbsc-ic mbsc-ic-" + D.checkIcon;
                    $ = [];
                    aa = {};
                    q._isLiquid = "liquid" === (D.layout || (/top|bottom/.test(D.display) && 1 == D.wheels.length ? "liquid" : ""));
                    1 < la && (D.cssClass = (D.cssClass || "") + " dw-ml");
                    K && (D.rows = Math.max(3, D.rows))
                };
            q._tempSelected = {};
            q._selected = {};
            y || q.init(H)
        };
        s.Scroller.prototype = {
            _hasDef: !0,
            _hasTheme: !0,
            _hasLang: !0,
            _hasPreset: !0,
            _class: "scroller",
            _defaults: r({}, s.Frame.prototype._defaults, {
                minWidth: 80,
                height: 40,
                rows: 3,
                multiline: 1,
                delay: 300,
                readonly: !1,
                showLabel: !0,
                setOnTap: !1,
                wheels: [],
                preset: "",
                speedUnit: 0.0012,
                timeUnit: 0.08,
                validate: function() {},
                formatValue: function(a) {
                    return a.join(" ")
                },
                parseValue: function(a, c) {
                    var g = [],
                        e = [],
                        i = 0,
                        f, j;
                    null !== a && a !== b && (g = (a + "").split(" "));
                    o.each(c.settings.wheels, function(a, b) {
                        o.each(b, function(a, b) {
                            j = b.data;
                            f = d(j[0]);
                            o.each(j, function(a, b) {
                                if (g[i] == d(b)) return f = d(b), !1
                            });
                            e.push(f);
                            i++
                        })
                    });
                    return e
                }
            })
        };
        c.themes.scroller = c.themes.frame
    })(window, document);
    (function() {
        function h(b,
            a, d, c, e, h, s) {
            b = new Date(b, a, d, c || 0, e || 0, h || 0, s || 0);
            23 == b.getHours() && 0 === (c || 0) && b.setHours(b.getHours() + 2);
            return b
        }
        var e = m,
            b = e.$;
        e.util.datetime = {
            defaults: {
                shortYearCutoff: "+10",
                monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                dayNamesMin: "S,M,T,W,T,F,S".split(","),
                amText: "am",
                pmText: "pm",
                getYear: function(b) {
                    return b.getFullYear()
                },
                getMonth: function(b) {
                    return b.getMonth()
                },
                getDay: function(b) {
                    return b.getDate()
                },
                getDate: h,
                getMaxDayOfMonth: function(b, a) {
                    return 32 - (new Date(b, a, 32, 12)).getDate()
                },
                getWeekNumber: function(b) {
                    b = new Date(b);
                    b.setHours(0, 0, 0);
                    b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                    var a = new Date(b.getFullYear(), 0, 1);
                    return Math.ceil(((b - a) / 864E5 + 1) / 7)
                }
            },
            adjustedDate: h,
            formatDate: function(g, a, d) {
                if (!a) return null;
                var d = b.extend({}, e.util.datetime.defaults, d),
                    c = function(a) {
                        for (var b = 0; s + 1 < g.length && g.charAt(s + 1) == a;) b++, s++;
                        return b
                    },
                    h = function(a, b, d) {
                        b = "" + b;
                        if (c(a))
                            for (; b.length < d;) b = "0" + b;
                        return b
                    },
                    r = function(a, b, d, g) {
                        return c(a) ? g[b] : d[b]
                    },
                    s, k, j = "",
                    i = !1;
                for (s = 0; s < g.length; s++)
                    if (i) "'" == g.charAt(s) && !c("'") ? i = !1 : j += g.charAt(s);
                    else switch (g.charAt(s)) {
                        case "d":
                            j += h("d", d.getDay(a), 2);
                            break;
                        case "D":
                            j += r("D", a.getDay(), d.dayNamesShort, d.dayNames);
                            break;
                        case "o":
                            j += h("o", (a.getTime() - (new Date(a.getFullYear(),
                                0, 0)).getTime()) / 864E5, 3);
                            break;
                        case "m":
                            j += h("m", d.getMonth(a) + 1, 2);
                            break;
                        case "M":
                            j += r("M", d.getMonth(a), d.monthNamesShort, d.monthNames);
                            break;
                        case "y":
                            k = d.getYear(a);
                            j += c("y") ? k : (10 > k % 100 ? "0" : "") + k % 100;
                            break;
                        case "h":
                            k = a.getHours();
                            j += h("h", 12 < k ? k - 12 : 0 === k ? 12 : k, 2);
                            break;
                        case "H":
                            j += h("H", a.getHours(), 2);
                            break;
                        case "i":
                            j += h("i", a.getMinutes(), 2);
                            break;
                        case "s":
                            j += h("s", a.getSeconds(), 2);
                            break;
                        case "a":
                            j += 11 < a.getHours() ? d.pmText : d.amText;
                            break;
                        case "A":
                            j += 11 < a.getHours() ? d.pmText.toUpperCase() :
                                d.amText.toUpperCase();
                            break;
                        case "'":
                            c("'") ? j += "'" : i = !0;
                            break;
                        default:
                            j += g.charAt(s)
                    }
                    return j
            },
            parseDate: function(g, a, d) {
                var d = b.extend({}, e.util.datetime.defaults, d),
                    c = d.defaultValue || new Date;
                if (!g || !a) return c;
                if (a.getTime) return a;
                var a = "object" == typeof a ? a.toString() : a + "",
                    h = d.shortYearCutoff,
                    r = d.getYear(c),
                    s = d.getMonth(c) + 1,
                    k = d.getDay(c),
                    j = -1,
                    i = c.getHours(),
                    C = c.getMinutes(),
                    m = 0,
                    y = -1,
                    n = !1,
                    E = function(a) {
                        (a = u + 1 < g.length && g.charAt(u + 1) == a) && u++;
                        return a
                    },
                    f = function(b) {
                        E(b);
                        b = a.substr(p).match(RegExp("^\\d{1," +
                            ("@" == b ? 14 : "!" == b ? 20 : "y" == b ? 4 : "o" == b ? 3 : 2) + "}"));
                        if (!b) return 0;
                        p += b[0].length;
                        return parseInt(b[0], 10)
                    },
                    B = function(b, c, d) {
                        b = E(b) ? d : c;
                        for (c = 0; c < b.length; c++)
                            if (a.substr(p, b[c].length).toLowerCase() == b[c].toLowerCase()) return p += b[c].length, c + 1;
                        return 0
                    },
                    p = 0,
                    u;
                for (u = 0; u < g.length; u++)
                    if (n) "'" == g.charAt(u) && !E("'") ? n = !1 : p++;
                    else switch (g.charAt(u)) {
                        case "d":
                            k = f("d");
                            break;
                        case "D":
                            B("D", d.dayNamesShort, d.dayNames);
                            break;
                        case "o":
                            j = f("o");
                            break;
                        case "m":
                            s = f("m");
                            break;
                        case "M":
                            s = B("M", d.monthNamesShort,
                                d.monthNames);
                            break;
                        case "y":
                            r = f("y");
                            break;
                        case "H":
                            i = f("H");
                            break;
                        case "h":
                            i = f("h");
                            break;
                        case "i":
                            C = f("i");
                            break;
                        case "s":
                            m = f("s");
                            break;
                        case "a":
                            y = B("a", [d.amText, d.pmText], [d.amText, d.pmText]) - 1;
                            break;
                        case "A":
                            y = B("A", [d.amText, d.pmText], [d.amText, d.pmText]) - 1;
                            break;
                        case "'":
                            E("'") ? p++ : n = !0;
                            break;
                        default:
                            p++
                    }
                    100 > r && (r += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (r <= ("string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10)) ? 0 : -100));
                if (-1 < j) {
                    s = 1;
                    k = j;
                    do {
                        h = 32 - (new Date(r, s - 1,
                            32, 12)).getDate();
                        if (k <= h) break;
                        s++;
                        k -= h
                    } while (1)
                }
                i = d.getDate(r, s - 1, k, -1 == y ? i : y && 12 > i ? i + 12 : !y && 12 == i ? 0 : i, C, m);
                return d.getYear(i) != r || d.getMonth(i) + 1 != s || d.getDay(i) != k ? c : i
            }
        }
    })();
    (function(h, e, b) {
        var g = m,
            a = g.$,
            d = g.presets.scroller,
            c = g.util,
            o = c.datetime.adjustedDate,
            r = c.jsPrefix,
            s = c.testTouch,
            k = c.getCoord,
            j = {
                controls: ["calendar"],
                firstDay: 0,
                weekDays: "short",
                maxMonthWidth: 170,
                months: 1,
                preMonths: 1,
                highlight: !0,
                outerMonthChange: !0,
                quickNav: !0,
                yearChange: !0,
                todayClass: "mbsc-cal-today",
                btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
                btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6",
                dateText: "Date",
                timeText: "Time",
                calendarText: "Calendar",
                todayText: "Today",
                prevMonthText: "Previous Month",
                nextMonthText: "Next Month",
                prevYearText: "Previous Year",
                nextYearText: "Next Year"
            };
        d.calbase = function(i) {
            function h(b) {
                var c;
                db = a(this);
                Cb = !1;
                "keydown" != b.type ? (Nb = k(b, "X"), Bb = k(b, "Y"), c = s(b, this)) : c = 32 === b.keyCode;
                if (!ta && c && !db.hasClass("mbsc-fr-btn-d") && (ta = !0, setTimeout(n, 100), "mousedown" == b.type)) a(e).on("mousemove", H).on("mouseup", y)
            }

            function H(a) {
                if (7 <
                    Math.abs(Nb - k(a, "X")) || 7 < Math.abs(Bb - k(a, "Y"))) ta = !1, db.removeClass("mbsc-fr-btn-a")
            }

            function y(b) {
                "touchend" == b.type && b.preventDefault();
                Cb || n();
                ta = !1;
                "mouseup" == b.type && a(e).off("mousemove", H).off("mouseup", y)
            }

            function n() {
                Cb = !0;
                db.hasClass("mbsc-cal-prev-m") ? G() : db.hasClass("mbsc-cal-next-m") ? O() : db.hasClass("mbsc-cal-prev-y") ? R(db) : db.hasClass("mbsc-cal-next-y") && M(db)
            }

            function E(b, c, d) {
                var f, g, e, i, j = {},
                    h = ia + cb;
                b && a.each(b, function(a, b) {
                    f = b.d || b.start || b;
                    g = f + "";
                    if (b.start && b.end)
                        for (i = new Date(b.start); i <=
                            b.end;) e = o(i.getFullYear(), i.getMonth(), i.getDate()), j[e] = j[e] || [], j[e].push(b), i.setDate(i.getDate() + 1);
                    else if (f.getTime) e = o(f.getFullYear(), f.getMonth(), f.getDate()), j[e] = j[e] || [], j[e].push(b);
                    else if (g.match(/w/i)) {
                        var l = +g.replace("w", ""),
                            k = 0,
                            n = A.getDate(c, d - ia - xa, 1).getDay();
                        1 < A.firstDay - n + 1 && (k = 7);
                        for (ea = 0; ea < 5 * Ta; ea++) e = A.getDate(c, d - ia - xa, 7 * ea - k - n + 1 + l), j[e] = j[e] || [], j[e].push(b)
                    } else if (g = g.split("/"), g[1]) 11 <= d + h && (e = A.getDate(c + 1, g[0] - 1, g[1]), j[e] = j[e] || [], j[e].push(b)), 1 >= d - h && (e = A.getDate(c -
                        1, g[0] - 1, g[1]), j[e] = j[e] || [], j[e].push(b)), e = A.getDate(c, g[0] - 1, g[1]), j[e] = j[e] || [], j[e].push(b);
                    else
                        for (ea = 0; ea < Ta; ea++) e = A.getDate(c, d - ia - xa + ea, g[0]), A.getDay(e) == g[0] && (j[e] = j[e] || [], j[e].push(b))
                });
                return j
            }

            function f(a, b) {
                ib = E(A.invalid, a, b);
                Oa = E(A.valid, a, b);
                i.onGenMonth(a, b)
            }

            function B(a, b, c, d, f, g, e) {
                var i = '<div class="mbsc-cal-h mbsc-cal-sc-c mbsc-cal-' + a + "-c " + (A.calendarClass || "") + '"><div class="mbsc-cal-sc"><div class="mbsc-cal-sc-p"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">';
                for (L = 1; L <= b; L++) i = 12 >= L || L > c ? i + '<div class="mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-sc-empty"><div class="mbsc-cal-sc-cell-i">&nbsp;</div></div>' : i + ('<div tabindex="0" role="button"' + (g ? ' aria-label="' + g[L - 13] + '"' : "") + ' class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-' + a + '-s" data-val=' + (d + L - 13) + '><div class="mbsc-cal-sc-cell-i mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-cell">' + (e ? e[L - 13] : d + L - 13 + f) + "</div></div></div>"), L < b && (0 === L % 12 ? i += '</div></div></div><div class="mbsc-cal-sc-p" style="' +
                    (Pa ? "top" : sa ? "right" : "left") + ":" + 100 * Math.round(L / 12) + '%"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">' : 0 === L % 3 && (i += '</div><div class="mbsc-cal-sc-row">'));
                return i + "</div></div></div></div></div>"
            }

            function p(c, d) {
                var f, g, e, j, h, l, k, n, s, t, x, K, p, v, r = 1,
                    q = 0;
                f = A.getDate(c, d, 1);
                var C = A.getYear(f),
                    w = A.getMonth(f),
                    m = null === A.defaultValue && !i._hasValue ? null : i.getDate(!0),
                    Q = A.getDate(C, w, 1).getDay(),
                    I = '<div class="mbsc-cal-table">',
                    L = '<div class="mbsc-cal-week-nr-c">';
                1 < A.firstDay - Q + 1 && (q = 7);
                for (v = 0; 42 > v; v++) p = v + A.firstDay - q, f = A.getDate(C, w, p - Q + 1), g = f.getFullYear(), e = f.getMonth(), j = f.getDate(), h = A.getMonth(f), l = A.getDay(f), K = A.getMaxDayOfMonth(g, e), k = g + "-" + e + "-" + j, e = a.extend({
                    valid: f < o(Lb.getFullYear(), Lb.getMonth(), Lb.getDate()) || f > zb ? !1 : ib[f] === b || Oa[f] !== b,
                    selected: m && m.getFullYear() === g && m.getMonth() === e && m.getDate() === j
                }, i.getDayProps(f, m)), n = e.valid, s = e.selected, g = e.cssClass, t = (new Date(f)).setHours(12, 0, 0, 0) === (new Date).setHours(12, 0, 0, 0), x = h !== w, Ob[k] = e, 0 === v % 7 && (I += (v ? "</div>" :
                    "") + '<div class="mbsc-cal-row' + (A.highlight && m && 0 <= m - f && 6048E5 > m - f ? " mbsc-cal-week-hl" : "") + '">'), za && 1 == f.getDay() && ("month" == za && x && 1 < r ? r = 1 == j ? 1 : 2 : "year" == za && (r = A.getWeekNumber(f)), L += '<div class="mbsc-cal-week-nr"><div class="mbsc-cal-week-nr-i">' + r + "</div></div>", r++), I += '<div role="button" tabindex="-1" aria-label="' + (t ? A.todayText + ", " : "") + A.dayNames[f.getDay()] + ", " + A.monthNames[h] + " " + l + " " + (e.ariaLabel ? ", " + e.ariaLabel : "") + '"' + (x && !yb ? ' aria-hidden="true"' : "") + (s ? ' aria-selected="true"' :
                    "") + (n ? "" : ' aria-disabled="true"') + ' data-day="' + p % 7 + '" data-full="' + k + '"class="mbsc-cal-day ' + (A.dayClass || "") + (s ? " mbsc-cal-day-sel" : "") + (t ? " " + A.todayClass : "") + (g ? " " + g : "") + (1 == l ? " mbsc-cal-day-first" : "") + (l == K ? " mbsc-cal-day-last" : "") + (x ? " mbsc-cal-day-diff" : "") + (n ? " mbsc-cal-day-v mbsc-fr-btn-e mbsc-fr-btn-nhl" : " mbsc-cal-day-inv") + '"><div class="mbsc-cal-day-i ' + (s ? hb : "") + " " + (A.innerDayClass || "") + '"><div class="mbsc-cal-day-fg">' + l + i._processItem(a, 0.06) + "</div>" + (e.markup || "") + '<div class="mbsc-cal-day-frame"></div></div></div>';
                return I + ("</div></div>" + L + "</div>")
            }

            function u(b, c, d) {
                var f = A.getDate(b, c, 1),
                    g = A.getYear(f),
                    f = A.getMonth(f),
                    e = g + ob;
                if (ab) {
                    Na && Na.removeClass("mbsc-cal-sc-sel").removeAttr("aria-selected").find(".mbsc-cal-sc-cell-i").removeClass(hb);
                    vb && vb.removeClass("mbsc-cal-sc-sel").removeAttr("aria-selected").find(".mbsc-cal-sc-cell-i").removeClass(hb);
                    Na = a('.mbsc-cal-year-s[data-val="' + g + '"]', N).addClass("mbsc-cal-sc-sel").attr("aria-selected", "true");
                    vb = a('.mbsc-cal-month-s[data-val="' + f + '"]', N).addClass("mbsc-cal-sc-sel").attr("aria-selected",
                        "true");
                    Na.find(".mbsc-cal-sc-cell-i").addClass(hb);
                    vb.find(".mbsc-cal-sc-cell-i").addClass(hb);
                    Za && Za.scroll(Na, d);
                    a(".mbsc-cal-month-s", N).removeClass("mbsc-fr-btn-d");
                    if (g === ga)
                        for (L = 0; L < Ra; L++) a('.mbsc-cal-month-s[data-val="' + L + '"]', N).addClass("mbsc-fr-btn-d");
                    if (g === na)
                        for (L = Kb + 1; 12 >= L; L++) a('.mbsc-cal-month-s[data-val="' + L + '"]', N).addClass("mbsc-fr-btn-d")
                }
                1 == Ja.length && Ja.attr("aria-label", g).html(e);
                for (L = 0; L < oa; ++L) f = A.getDate(b, c - xa + L, 1), g = A.getYear(f), f = A.getMonth(f), e = g + ob, a(qa[L]).attr("aria-label",
                    A.monthNames[f] + (Va ? "" : " " + g)).html((!Va && eb < ka ? e + " " : "") + ja[f] + (!Va && eb > ka ? " " + e : "")), 1 < Ja.length && a(Ja[L]).html(e);
                A.getDate(b, c - xa - 1, 1) < va ? F(a(".mbsc-cal-prev-m", N)) : J(a(".mbsc-cal-prev-m", N));
                A.getDate(b, c + oa - xa, 1) > Ma ? F(a(".mbsc-cal-next-m", N)) : J(a(".mbsc-cal-next-m", N));
                A.getDate(b, c, 1).getFullYear() <= va.getFullYear() ? F(a(".mbsc-cal-prev-y", N)) : J(a(".mbsc-cal-prev-y", N));
                A.getDate(b, c, 1).getFullYear() >= Ma.getFullYear() ? F(a(".mbsc-cal-next-y", N)) : J(a(".mbsc-cal-next-y", N))
            }

            function J(a) {
                a.removeClass(Ka).find(".mbsc-cal-btn-txt").removeAttr("aria-disabled")
            }

            function F(a) {
                a.addClass(Ka).find(".mbsc-cal-btn-txt").attr("aria-disabled", "true")
            }

            function z(b, c) {
                if (da && ("calendar" === Ca || c)) {
                    var d, f, g = A.getDate(pa, ra, 1),
                        e = Math.abs(12 * (A.getYear(b) - A.getYear(g)) + A.getMonth(b) - A.getMonth(g));
                    i.needsSlide && e && (pa = A.getYear(b), ra = A.getMonth(b), b > g ? (f = e > ia - xa + oa - 1, ra -= f ? 0 : e - ia, d = "next") : b < g && (f = e > ia + xa, ra += f ? 0 : e - ia, d = "prev"), x(pa, ra, d, Math.min(e, ia), f, !0));
                    c || (Da = b, i.trigger("onDayHighlight", {
                        date: b
                    }), A.highlight && (a(".mbsc-cal-day-sel .mbsc-cal-day-i", ca).removeClass(hb),
                        a(".mbsc-cal-day-sel", ca).removeClass("mbsc-cal-day-sel").removeAttr("aria-selected"), a(".mbsc-cal-week-hl", ca).removeClass("mbsc-cal-week-hl"), (null !== A.defaultValue || i._hasValue) && a('.mbsc-cal-day[data-full="' + b.getFullYear() + "-" + b.getMonth() + "-" + b.getDate() + '"]', ca).addClass("mbsc-cal-day-sel").attr("aria-selected", "true").find(".mbsc-cal-day-i").addClass(hb).closest(".mbsc-cal-row").addClass("mbsc-cal-week-hl")));
                    i.needsSlide = !0
                }
            }

            function t(a, c, d) {
                d || i.trigger("onMonthLoading", {
                    year: a,
                    month: c
                });
                f(a, c);
                for (L = 0; L < Ta; L++) Aa[L].html(p(a, c - xa - ia + L));
                w();
                xb = b;
                i.trigger("onMonthLoaded", {
                    year: a,
                    month: c
                })
            }

            function l(b, c, d) {
                var f = ia,
                    g = ia;
                if (d) {
                    for (; g && A.getDate(b, c + f + oa - xa - 1, 1) > Ma;) g--;
                    for (; f && A.getDate(b, c - g - xa, 1) < va;) f--
                }
                a.extend(ma.settings, {
                    contSize: oa * $,
                    snap: $,
                    minScroll: aa - (sa ? f : g) * $,
                    maxScroll: aa + (sa ? g : f) * $
                });
                ma.refresh()
            }

            function w() {
                za && Ga.html(a(".mbsc-cal-week-nr-c", Aa[ia]).html());
                a(".mbsc-cal-slide-a .mbsc-cal-day", la).attr("tabindex", 0)
            }

            function x(c, d, g, e, j, h, o) {
                c && sb.push({
                    y: c,
                    m: d,
                    dir: g,
                    slideNr: e,
                    load: j,
                    active: h,
                    callback: o
                });
                if (!$a) {
                    var k = sb.shift(),
                        c = k.y,
                        d = k.m,
                        g = "next" === k.dir,
                        e = k.slideNr,
                        j = k.load,
                        h = k.active,
                        o = k.callback || wb,
                        k = A.getDate(c, d, 1),
                        c = A.getYear(k),
                        d = A.getMonth(k);
                    $a = !0;
                    i.changing = !0;
                    i.trigger("onMonthChange", {
                        year: c,
                        month: d
                    });
                    i.trigger("onMonthLoading", {
                        year: c,
                        month: d
                    });
                    f(c, d);
                    if (j)
                        for (L = 0; L < oa; L++) Aa[g ? Ta - oa + L : L].html(p(c, d - xa + L));
                    h && bb.addClass("mbsc-cal-slide-a");
                    setTimeout(function() {
                        i.ariaMessage(A.monthNames[d] + " " + c);
                        u(c, d, 200);
                        aa = g ? aa - $ * e * jb : aa + $ * e * jb;
                        ma.scroll(aa,
                            h ? 200 : 0,
                            function() {
                                var f;
                                if (Aa.length) {
                                    bb.removeClass("mbsc-cal-slide-a").attr("aria-hidden", "true");
                                    if (g) {
                                        f = Aa.splice(0, e);
                                        for (L = 0; L < e; L++) Aa.push(f[L]), v(Aa[Aa.length - 1], +Aa[Aa.length - 2].attr("data-curr") + 100 * jb)
                                    } else {
                                        f = Aa.splice(Ta - e, e);
                                        for (L = e - 1; 0 <= L; L--) Aa.unshift(f[L]), v(Aa[0], +Aa[1].attr("data-curr") - 100 * jb)
                                    }
                                    for (L = 0; L < e; L++) Aa[g ? Ta - e + L : L].html(p(c, d - xa - ia + L + (g ? Ta - e : 0))), j && Aa[g ? L : Ta - e + L].html(p(c, d - xa - ia + L + (g ? 0 : Ta - e)));
                                    for (L = 0; L < oa; L++) Aa[ia + L].addClass("mbsc-cal-slide-a").removeAttr("aria-hidden");
                                    l(c, d, !0);
                                    $a = !1
                                }
                                sb.length ? setTimeout(function() {
                                    x()
                                }, 10) : (pa = c, ra = d, i.changing = !1, a(".mbsc-cal-day", la).attr("tabindex", -1), w(), xb !== b ? t(c, d, xb) : i.trigger("onMonthLoaded", {
                                    year: c,
                                    month: d
                                }), o())
                            })
                    }, 10)
                }
            }

            function T() {
                var b = a(this),
                    c = i.live,
                    d = i.getDate(!0),
                    f = b.attr("data-full"),
                    g = f.split("-"),
                    g = o(g[0], g[1], g[2]),
                    d = o(g.getFullYear(), g.getMonth(), g.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()),
                    e = b.hasClass("mbsc-cal-day-sel");
                if ((yb || !b.hasClass("mbsc-cal-day-diff")) && !1 !== i.trigger("onDayChange",
                        a.extend(Ob[f], {
                            date: d,
                            target: this,
                            selected: e
                        }))) i.needsSlide = !1, q = !0, i.setDate(d, c, 0.2, !c, !0), A.outerMonthChange && (ta = !0, g < A.getDate(pa, ra - xa, 1) ? G() : g > A.getDate(pa, ra - xa + oa, 0) && O(), ta = !1)
            }

            function v(a, b) {
                a.attr("data-curr", b);
                a[0].style[r + "Transform"] = "translate3d(" + (Pa ? "0," + b + "%," : b + "%,0,") + "0)"
            }

            function I(a) {
                i.isVisible() && da && (i.changing ? xb = a : t(pa, ra, a))
            }

            function O() {
                ta && A.getDate(pa, ra + oa - xa, 1) <= Ma && m.running && x(pa, ++ra, "next", 1, !1, !0, O)
            }

            function G() {
                ta && A.getDate(pa, ra - xa - 1, 1) >= va && m.running &&
                    x(pa, --ra, "prev", 1, !1, !0, G)
            }

            function M(a) {
                ta && A.getDate(pa, ra, 1) <= A.getDate(A.getYear(Ma) - 1, A.getMonth(Ma) - cb, 1) && m.running ? x(++pa, ra, "next", ia, !0, !0, function() {
                    M(a)
                }) : ta && !a.hasClass("mbsc-fr-btn-d") && m.running && x(A.getYear(Ma), A.getMonth(Ma) - cb, "next", ia, !0, !0)
            }

            function R(a) {
                ta && A.getDate(pa, ra, 1) >= A.getDate(A.getYear(va) + 1, A.getMonth(va) + xa, 1) && m.running ? x(--pa, ra, "prev", ia, !0, !0, function() {
                    R(a)
                }) : ta && !a.hasClass("mbsc-fr-btn-d") && m.running && x(A.getYear(va), A.getMonth(va) + xa, "prev", ia, !0, !0)
            }

            function S(a,
                b) {
                a.hasClass("mbsc-cal-v") || (a.addClass("mbsc-cal-v" + (b ? "" : " mbsc-cal-p-in")).removeClass("mbsc-cal-p-out mbsc-cal-h"), i.trigger("onSelectShow"))
            }

            function K(a, b) {
                a.hasClass("mbsc-cal-v") && a.removeClass("mbsc-cal-v mbsc-cal-p-in").addClass("mbsc-cal-h" + (b ? "" : " mbsc-cal-p-out"))
            }

            function P(a, b) {
                (b || a).hasClass("mbsc-cal-v") ? K(a) : S(a)
            }

            function V() {
                a(this).removeClass("mbsc-cal-p-out mbsc-cal-p-in")
            }
            var Q, L, ea, ba, W, N, D, ca, la, $, aa, q, da, wa, Y, Ga, ua, ha, ja, ma, fa, qa, ka, Ja, eb, ga, na, Ra, Kb, va, Ma, Lb, zb, Da, pa,
                ra, mb, Hb, Oa, ib, Ia, Ca, $a, Nb, Bb, db, Cb, ta, oa, Ta, cb, xa, xb, yb, Za, Na, vb, Qb = this,
                bb = [],
                Aa = [],
                sb = [],
                Ea = {},
                Ob = {},
                wb = function() {},
                Pb = a.extend({}, i.settings),
                A = a.extend(i.settings, j, Pb),
                Ya = "full" == A.weekDays ? "" : "min" == A.weekDays ? "Min" : "Short",
                za = A.weekCounter,
                lb = A.layout || (/top|bottom/.test(A.display) ? "liquid" : ""),
                U = "liquid" == lb && "bubble" !== A.display,
                Ha = "center" == A.display,
                sa = A.rtl,
                jb = sa ? -1 : 1,
                ub = U ? null : A.calendarWidth,
                Pa = "vertical" == A.calendarScroll,
                ab = A.quickNav,
                ia = A.preMonths,
                Va = A.yearChange,
                gb = A.controls.join(","),
                qb = (!0 === A.tabs || !1 !== A.tabs && U) && 1 < A.controls.length,
                nb = !qb && A.tabs === b && !U && 1 < A.controls.length,
                ob = A.yearSuffix || "",
                hb = A.activeClass || "",
                tb = "mbsc-cal-tab-sel " + (A.activeTabClass || ""),
                Wa = A.activeTabInnerClass || "",
                Ka = "mbsc-fr-btn-d " + (A.disabledClass || ""),
                La = "",
                Fa = "";
            gb.match(/calendar/) ? da = !0 : ab = !1;
            gb.match(/date/) && (Ea.date = 1);
            gb.match(/time/) && (Ea.time = 1);
            da && Ea.date && (qb = !0, nb = !1);
            A.layout = lb;
            A.preset = (Ea.date || da ? "date" : "") + (Ea.time ? "time" : "");
            if ("inline" == A.display) a(this).closest('[data-role="page"]').on("pageshow",
                function() {
                    i.position()
                });
            i.changing = !1;
            i.needsSlide = !0;
            i.getDayProps = wb;
            i.onGenMonth = wb;
            i.prepareObj = E;
            i.refresh = function() {
                I(false)
            };
            i.redraw = function() {
                I(true)
            };
            i.navigate = function(a, b) {
                var c, d, f = i.isVisible();
                if (b && f) z(a, true);
                else {
                    c = A.getYear(a);
                    d = A.getMonth(a);
                    if (f && (c != pa || d != ra)) {
                        i.trigger("onMonthChange", {
                            year: c,
                            month: d
                        });
                        u(c, d);
                        t(c, d);
                        l(a.getFullYear(), a.getMonth(), true)
                    }
                    pa = c;
                    ra = d
                }
            };
            i.showMonthView = function() {
                if (ab && !ha) {
                    K(Fa, true);
                    K(La, true);
                    S(ua, true);
                    ha = true
                }
            };
            i.changeTab = function(b) {
                if (i._isVisible &&
                    Ea[b] && Ca != b) {
                    Ca = b;
                    a(".mbsc-cal-pnl", N).removeClass("mbsc-cal-p-in").addClass("mbsc-cal-pnl-h");
                    a(".mbsc-cal-tab", N).removeClass(tb).removeAttr("aria-selected").find(".mbsc-cal-tab-i").removeClass(Wa);
                    a('.mbsc-cal-tab[data-control="' + b + '"]', N).addClass(tb).attr("aria-selected", "true").find(".mbsc-cal-tab-i").addClass(Wa);
                    Ea[Ca].removeClass("mbsc-cal-pnl-h").addClass("mbsc-cal-p-in");
                    if (Ca == "calendar") {
                        Q = i.getDate(true);
                        (Q.getFullYear() !== Da.getFullYear() || Q.getMonth() !== Da.getMonth() || Q.getDate() !==
                            Da.getDate()) && z(Q)
                    }
                    i.showMonthView();
                    i.trigger("onTabChange", {
                        tab: Ca
                    })
                }
            };
            ba = d.datetime.call(this, i);
            ka = A.dateFormat.search(/m/i);
            eb = A.dateFormat.search(/y/i);
            a.extend(ba, {
                ariaMessage: A.calendarText,
                onMarkupReady: function(d) {
                    var f, e = "";
                    N = a(d.target);
                    D = A.display == "inline" ? a(this).is("div") ? a(this) : a(this).parent() : i._window;
                    Da = i.getDate(true);
                    if (!pa) {
                        pa = A.getYear(Da);
                        ra = A.getMonth(Da)
                    }
                    aa = 0;
                    Y = true;
                    $a = false;
                    ja = A.monthNames;
                    Ca = "calendar";
                    if (A.min) {
                        va = o(A.min.getFullYear(), A.min.getMonth(), 1);
                        Lb = A.min
                    } else Lb =
                        va = o(A.startYear, 0, 1);
                    if (A.max) {
                        Ma = o(A.max.getFullYear(), A.max.getMonth(), 1);
                        zb = A.max
                    } else zb = Ma = o(A.endYear, 11, 31, 23, 59, 59);
                    N.addClass("mbsc-calendar");
                    W = a(".mbsc-fr-popup", N);
                    Ia = a(".mbsc-fr-c", N);
                    Ea.date ? Ea.date = a(".mbsc-sc-whl-gr-c", N).eq(0) : da && a(".mbsc-sc-whl-gr-c", N).eq(0).addClass("mbsc-cal-hdn");
                    if (Ea.time) Ea.time = a(".mbsc-sc-whl-gr-c", N).eq(1);
                    if (da) {
                        oa = A.months == "auto" ? Math.max(1, Math.min(3, Math.floor((ub || D[0].innerWidth || D.innerWidth()) / 280))) : A.months;
                        Ta = oa + 2 * ia;
                        cb = Math.floor(oa / 2);
                        xa =
                            Math.round(oa / 2) - 1;
                        yb = A.showOuterDays === b ? oa < 2 : A.showOuterDays;
                        Pa = Pa && oa < 2;
                        d = '<div class="mbsc-cal-btnw"><div class="' + (sa ? "mbsc-cal-next-m" : "mbsc-cal-prev-m") + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (A.btnCalPrevClass || "") + '" aria-label="' + A.prevMonthText + '"></div></div>';
                        for (L = 0; L < oa; ++L) d = d + ('<div class="mbsc-cal-btnw-m" style="width: ' + 100 / oa + '%"><span role="button" class="mbsc-cal-month"></span></div>');
                        d = d + ('<div class="' +
                            (sa ? "mbsc-cal-prev-m" : "mbsc-cal-next-m") + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (A.btnCalNextClass || "") + '" aria-label="' + A.nextMonthText + '"></div></div></div>');
                        Va && (e = '<div class="mbsc-cal-btnw"><div class="' + (sa ? "mbsc-cal-next-y" : "mbsc-cal-prev-y") + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (A.btnCalPrevClass || "") + '" aria-label="' + A.prevYearText + '"></div></div><span role="button" class="mbsc-cal-year"></span><div class="' +
                            (sa ? "mbsc-cal-prev-y" : "mbsc-cal-next-y") + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (A.btnCalNextClass || "") + '" aria-label="' + A.nextYearText + '"></div></div></div>');
                        if (ab) {
                            ga = A.getYear(va);
                            na = A.getYear(Ma);
                            Ra = A.getMonth(va);
                            Kb = A.getMonth(Ma);
                            Hb = Math.ceil((na - ga + 1) / 12) + 2;
                            La = B("month", 36, 24, 0, "", A.monthNames, A.monthNamesShort);
                            Fa = B("year", Hb * 12, na - ga + 13, ga, ob)
                        }
                        wa = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal mbsc-cal-hl-now' +
                            (oa > 1 ? " mbsc-cal-multi " : "") + (za ? " mbsc-cal-weeks " : "") + (Pa ? " mbsc-cal-vertical" : "") + (yb ? "" : " mbsc-cal-hide-diff ") + (A.calendarClass || "") + '"><div class="mbsc-cal-header"><div class="mbsc-cal-btnc ' + (Va ? "mbsc-cal-btnc-ym" : "mbsc-cal-btnc-m") + '">' + (eb < ka || oa > 1 ? e + d : d + e) + '</div></div><div class="mbsc-cal-body"><div class="mbsc-cal-m-c mbsc-cal-v"><div class="mbsc-cal-days-c">';
                        for (ea = 0; ea < oa; ++ea) {
                            wa = wa + ('<div aria-hidden="true" class="mbsc-cal-days" style="width: ' + 100 / oa + '%"><table cellpadding="0" cellspacing="0"><tr>');
                            for (L = 0; L < 7; L++) wa = wa + ("<th>" + A["dayNames" + Ya][(L + A.firstDay) % 7] + "</th>");
                            wa = wa + "</tr></table></div>"
                        }
                        wa = wa + ('</div><div class="mbsc-cal-anim-c ' + (A.calendarClass || "") + '"><div class="mbsc-cal-week-nrs-c ' + (A.weekNrClass || "") + '"><div class="mbsc-cal-week-nrs"></div></div><div class="mbsc-cal-anim">');
                        for (L = 0; L < oa + 2 * ia; L++) wa = wa + '<div class="mbsc-cal-slide" aria-hidden="true"></div>';
                        wa = wa + ("</div></div></div>" + La + Fa + "</div></div></div>");
                        Ea.calendar = a(wa)
                    }
                    a.each(A.controls, function(b, c) {
                        Ea[c] = a('<div class="mbsc-cal-pnl" id="' +
                            (Qb.id + "_dw_pnl_" + b) + '"></div>').append(a('<div class="mbsc-cal-pnl-i"></div>').append(Ea[c])).appendTo(Ia)
                    });
                    f = '<div class="mbsc-cal-tabs"><ul role="tablist">';
                    a.each(A.controls, function(a, b) {
                        Ea[b] && (f = f + ('<li role="tab" aria-controls="' + (Qb.id + "_dw_pnl_" + a) + '" class="mbsc-cal-tab ' + (a ? "" : tb) + '" data-control="' + b + '"><a href="#" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-tab-i ' + (!a ? Wa : "") + '">' + A[b + "Text"] + "</a></li>"))
                    });
                    f = f + "</ul></div>";
                    Ia.before(f);
                    ca = a(".mbsc-cal-anim-c", N);
                    la = a(".mbsc-cal-anim",
                        ca);
                    Ga = a(".mbsc-cal-week-nrs", ca);
                    if (da) {
                        ha = true;
                        bb = a(".mbsc-cal-slide", la).each(function(b, c) {
                            Aa.push(a(c))
                        });
                        bb.slice(ia, ia + oa).addClass("mbsc-cal-slide-a").removeAttr("aria-hidden");
                        for (L = 0; L < Ta; L++) v(Aa[L], 100 * (L - ia) * jb);
                        t(pa, ra);
                        ma = new g.classes.ScrollView(ca[0], {
                            axis: Pa ? "Y" : "X",
                            easing: "",
                            contSize: 0,
                            snap: 1,
                            maxSnapScroll: ia,
                            moveElement: la,
                            mousewheel: A.mousewheel,
                            time: 200,
                            lock: true,
                            stopProp: false,
                            onGestureStart: function(a, b) {
                                b.settings.scrollLock = i.scrollLock
                            },
                            onAnimationEnd: function(a) {
                                (a = Math.round(((Pa ?
                                    a.posY : a.posX) - aa) / $) * jb) && x(pa, ra - a, a > 0 ? "prev" : "next", a > 0 ? a : -a)
                            }
                        })
                    }
                    qa = a(".mbsc-cal-month", N);
                    Ja = a(".mbsc-cal-year", N);
                    ua = a(".mbsc-cal-m-c", N);
                    if (ab) {
                        ua.on("webkitAnimationEnd animationend", V);
                        La = a(".mbsc-cal-month-c", N).on("webkitAnimationEnd animationend", V);
                        Fa = a(".mbsc-cal-year-c", N).on("webkitAnimationEnd animationend", V);
                        a(".mbsc-cal-sc-p", N);
                        mb = {
                            axis: Pa ? "Y" : "X",
                            contSize: 0,
                            snap: 1,
                            maxSnapScroll: 1,
                            rtl: A.rtl,
                            mousewheel: A.mousewheel,
                            time: 200
                        };
                        Za = new g.classes.ScrollView(Fa[0], mb);
                        fa = new g.classes.ScrollView(La[0],
                            mb)
                    }
                    U ? N.addClass("mbsc-cal-liq") : a(".mbsc-cal", N).width(ub || 280 * oa);
                    A.calendarHeight && a(".mbsc-cal-anim-c", N).height(A.calendarHeight);
                    i.tap(ca, function(b) {
                        b = a(b.target);
                        if (!$a && !ma.scrolled && A.readonly !== true) {
                            b = b.closest(".mbsc-cal-day", this);
                            b.hasClass("mbsc-cal-day-v") && T.call(b[0])
                        }
                    });
                    a(".mbsc-cal-btn", N).on("touchstart mousedown keydown", h).on("touchmove", H).on("touchend touchcancel keyup", y);
                    a(".mbsc-cal-tab", N).on("touchstart click", function(b) {
                        s(b, this) && m.running && i.changeTab(a(this).attr("data-control"))
                    });
                    if (ab) {
                        i.tap(a(".mbsc-cal-month", N), function() {
                            if (!Fa.hasClass("mbsc-cal-v")) {
                                P(ua);
                                ha = ua.hasClass("mbsc-cal-v")
                            }
                            P(La);
                            K(Fa)
                        });
                        i.tap(a(".mbsc-cal-year", N), function() {
                            Fa.hasClass("mbsc-cal-v") || Za.scroll(Na);
                            if (!La.hasClass("mbsc-cal-v")) {
                                P(ua);
                                ha = ua.hasClass("mbsc-cal-v")
                            }
                            P(Fa);
                            K(La)
                        });
                        i.tap(a(".mbsc-cal-month-s", N), function() {
                            !fa.scrolled && !a(this).hasClass("mbsc-fr-btn-d") && i.navigate(A.getDate(pa, a(this).attr("data-val"), 1))
                        });
                        i.tap(a(".mbsc-cal-year-s", N), function() {
                            if (!Za.scrolled) {
                                Q = A.getDate(a(this).attr("data-val"),
                                    ra, 1);
                                i.navigate(new Date(c.constrain(Q, va, Ma)))
                            }
                        });
                        i.tap(Fa, function() {
                            if (!Za.scrolled) {
                                K(Fa);
                                S(ua);
                                ha = true
                            }
                        });
                        i.tap(La, function() {
                            if (!fa.scrolled) {
                                K(La);
                                S(ua);
                                ha = true
                            }
                        })
                    }
                },
                onShow: function() {
                    da && u(pa, ra)
                },
                onPosition: function(b) {
                    var c, d, f, g = 0,
                        e = 0,
                        j = 0,
                        h = b.windowHeight;
                    if (U) {
                        Ha && ca.height("");
                        Ia.height("");
                        la.width("")
                    }
                    $ && (f = $);
                    da && ($ = Math.round(Math.round(ca[0][Pa ? "offsetHeight" : "offsetWidth"]) / oa));
                    if ($) {
                        N.removeClass("mbsc-cal-m mbsc-cal-l");
                        $ > 1024 ? N.addClass("mbsc-cal-l") : $ > 640 && N.addClass("mbsc-cal-m")
                    }
                    if (qb &&
                        (Y || U) || nb) {
                        a(".mbsc-cal-pnl", N).removeClass("mbsc-cal-pnl-h");
                        a.each(Ea, function(a, b) {
                            c = b[0].offsetWidth;
                            g = Math.max(g, c);
                            e = Math.max(e, b[0].offsetHeight);
                            j = j + c
                        });
                        if (qb || nb && j > (D[0].innerWidth || D.innerWidth())) {
                            d = true;
                            Ca = a(".mbsc-cal-tabs .mbsc-cal-tab-sel", N).attr("data-control");
                            W.addClass("mbsc-cal-tabbed")
                        } else {
                            Ca = "calendar";
                            e = g = "";
                            W.removeClass("mbsc-cal-tabbed");
                            Ia.css({
                                width: "",
                                height: ""
                            })
                        }
                    }
                    if (U && Ha && da) {
                        i._isFullScreen = true;
                        d && Ia.height(Ea.calendar[0].offsetHeight);
                        b = W[0].offsetHeight;
                        h >= b &&
                            ca.height(h - b + ca[0].offsetHeight);
                        e = Math.max(e, Ea.calendar[0].offsetHeight)
                    }
                    if (d) {
                        Ia.css({
                            width: U ? "" : g,
                            height: e
                        });
                        da && ($ = Math.round(Math.round(ca[0][Pa ? "offsetHeight" : "offsetWidth"]) / oa))
                    }
                    if ($) {
                        la[Pa ? "height" : "width"]($);
                        if ($ !== f) {
                            if (Va) {
                                ja = A.maxMonthWidth > a(".mbsc-cal-btnw-m", N).width() ? A.monthNamesShort : A.monthNames;
                                for (L = 0; L < oa; ++L) a(qa[L]).text(ja[A.getMonth(A.getDate(pa, ra - xa + L, 1))])
                            }
                            if (ab) {
                                b = Fa[0][Pa ? "offsetHeight" : "offsetWidth"];
                                a.extend(Za.settings, {
                                    contSize: b,
                                    snap: b,
                                    minScroll: (2 - Hb) * b,
                                    maxScroll: -b
                                });
                                a.extend(fa.settings, {
                                    contSize: b,
                                    snap: b,
                                    minScroll: -b,
                                    maxScroll: -b
                                });
                                Za.refresh();
                                fa.refresh();
                                Fa.hasClass("mbsc-cal-v") && Za.scroll(Na)
                            }
                            if (U && !Y && f) {
                                b = aa / f;
                                aa = b * $
                            }
                            l(pa, ra, !f)
                        }
                    } else $ = f;
                    if (d) {
                        a(".mbsc-cal-pnl", N).addClass("mbsc-cal-pnl-h");
                        Ea[Ca].removeClass("mbsc-cal-pnl-h")
                    }
                    i.trigger("onCalResize");
                    Y = false
                },
                onHide: function() {
                    sb = [];
                    Aa = [];
                    ra = pa = Ca = null;
                    $a = true;
                    $ = 0;
                    ma && ma.destroy();
                    if (ab && Za && fa) {
                        Za.destroy();
                        fa.destroy()
                    }
                },
                onValidated: function(a) {
                    var b, c, d;
                    c = i.getDate(true);
                    if (q) b = "calendar";
                    else
                        for (d in i.order) d &&
                            i.order[d] === a && (b = /[mdy]/.test(d) ? "date" : "time");
                    i.trigger("onSetDate", {
                        date: c,
                        control: b
                    });
                    z(c);
                    q = false
                }
            });
            return ba
        }
    })(window, document);
    (function(h) {
        var e = m,
            b = e.$,
            g = e.classes,
            a = e.util,
            d = a.constrain,
            c = a.jsPrefix,
            o = a.prefix,
            r = a.getCoord,
            s = a.getPosition,
            k = a.testTouch,
            j = a.isNumeric,
            i = a.isString,
            C = /(iphone|ipod|ipad)/i.test(navigator.userAgent),
            H = window.requestAnimationFrame || function(a) {
                a()
            },
            y = window.cancelAnimationFrame || function() {};
        g.ScrollView = function(a, e, f) {
            function B(a) {
                ma("onStart");
                ga.stopProp &&
                    a.stopPropagation();
                (ga.prevDef || "mousedown" == a.type) && a.preventDefault();
                if (!(ga.readonly || ga.lock && ba) && k(a, this) && !ea && m.running)
                    if (l && l.removeClass("mbsc-btn-a"), P = !1, ba || (l = b(a.target).closest(".mbsc-btn-e", this), l.length && !l.hasClass("mbsc-btn-d") && (P = !0, w = setTimeout(function() {
                            l.addClass("mbsc-btn-a")
                        }, 100))), ea = !0, W = ca = !1, qa.scrolled = ba, ya = r(a, "X"), Ga = r(a, "Y"), R = ya, I = v = T = 0, Y = new Date, da = +s(ha, fa) || 0, t(da, C ? 0 : 1), "mousedown" === a.type) b(document).on("mousemove", p).on("mouseup", J)
            }

            function p(a) {
                if (ea) {
                    ga.stopProp &&
                        a.stopPropagation();
                    R = r(a, "X");
                    S = r(a, "Y");
                    T = R - ya;
                    v = S - Ga;
                    I = fa ? v : T;
                    if (P && (5 < Math.abs(v) || 5 < Math.abs(T))) clearTimeout(w), l.removeClass("mbsc-btn-a"), P = !1;
                    if (qa.scrolled || !W && 5 < Math.abs(I)) ca || ma("onGestureStart", K), qa.scrolled = ca = !0, D || (D = !0, N = H(u));
                    fa || ga.scrollLock ? a.preventDefault() : qa.scrolled ? a.preventDefault() : 7 < Math.abs(v) && (W = !0, qa.scrolled = !0, na.trigger("touchend"))
                }
            }

            function u() {
                Q && (I = d(I, -aa * Q, aa * Q));
                t(d(da + I, L - M, V + M));
                D = !1
            }

            function J(a) {
                if (ea) {
                    var c;
                    c = new Date - Y;
                    ga.stopProp && a.stopPropagation();
                    y(N);
                    D = !1;
                    !W && qa.scrolled && (ga.momentum && 300 > c && (c = I / c, I = Math.max(Math.abs(I), c * c / ga.speedUnit) * (0 > I ? -1 : 1)), z(I));
                    P && (clearTimeout(w), l.addClass("mbsc-btn-a"), setTimeout(function() {
                        l.removeClass("mbsc-btn-a")
                    }, 100), !W && !qa.scrolled && ma("onBtnTap", {
                        target: l[0]
                    }));
                    "mouseup" == a.type && b(document).off("mousemove", p).off("mouseup", J);
                    ea = !1
                }
            }

            function F(a) {
                a = a.originalEvent || a;
                I = fa ? a.deltaY || a.wheelDelta || a.detail : a.deltaX;
                ma("onStart");
                ga.stopProp && a.stopPropagation();
                if (I && m.running && (a.preventDefault(), !ga.readonly)) I = 0 > I ? 20 : -20, da = ka, ca || (K = {
                    posX: fa ? 0 : ka,
                    posY: fa ? ka : 0,
                    originX: fa ? 0 : da,
                    originY: fa ? da : 0,
                    direction: 0 < I ? fa ? 270 : 360 : fa ? 90 : 180
                }, ma("onGestureStart", K)), D || (D = !0, N = H(u)), ca = !0, clearTimeout(la), la = setTimeout(function() {
                    y(N);
                    ca = D = false;
                    z(I)
                }, 200)
            }

            function z(a) {
                var b;
                Q && (a = d(a, -aa * Q, aa * Q));
                Ja = Math.round((da + a) / aa);
                b = d(Ja * aa, L, V);
                if (q) {
                    if (0 > a)
                        for (a = q.length - 1; 0 <= a; a--) {
                            if (Math.abs(b) + x >= q[a].breakpoint) {
                                Ja = a;
                                eb = 2;
                                b = q[a].snap2;
                                break
                            }
                        } else if (0 <= a)
                            for (a = 0; a < q.length; a++)
                                if (Math.abs(b) <= q[a].breakpoint) {
                                    Ja =
                                        a;
                                    eb = 1;
                                    b = q[a].snap1;
                                    break
                                }
                    b = d(b, L, V)
                }
                a = ga.time || (ka < L || ka > V ? 200 : Math.max(200, Math.abs(b - ka) * ga.timeUnit));
                K.destinationX = fa ? 0 : b;
                K.destinationY = fa ? b : 0;
                K.duration = a;
                K.transitionTiming = G;
                ma("onGestureEnd", K);
                t(b, a)
            }

            function t(a, b, d) {
                var f = a != ka,
                    g = 1 < b,
                    e = function() {
                        clearInterval($);
                        ba = !1;
                        ka = a;
                        K.posX = fa ? 0 : a;
                        K.posY = fa ? a : 0;
                        f && ma("onMove", K);
                        g && ma("onAnimationEnd", K);
                        d && d()
                    };
                K = {
                    posX: fa ? 0 : ka,
                    posY: fa ? ka : 0,
                    originX: fa ? 0 : da,
                    originY: fa ? da : 0,
                    direction: 0 < a - ka ? fa ? 270 : 360 : fa ? 90 : 180
                };
                ka = a;
                g && (K.destinationX = fa ? 0 : a, K.destinationY =
                    fa ? a : 0, K.duration = b, K.transitionTiming = G, ma("onAnimationStart", K));
                ua[c + "Transition"] = b ? o + "transform " + Math.round(b) + "ms " + G : "";
                ua[c + "Transform"] = "translate3d(" + (fa ? "0," + a + "px," : a + "px,0,") + "0)";
                !f && !ba || !b || 1 >= b ? e() : b && (ba = !0, clearInterval($), $ = setInterval(function() {
                    var a = +s(ha, fa) || 0;
                    K.posX = fa ? 0 : a;
                    K.posY = fa ? a : 0;
                    ma("onMove", K)
                }, 100), clearTimeout(ja), ja = setTimeout(function() {
                    e();
                    ua[c + "Transition"] = ""
                }, b))
            }
            var l, w, x, T, v, I, O, G, M, R, S, K, P, V, Q, L, ea, ba, W, N, D, ca, la, $, aa, q, da, Y, ya, Ga, ua, ha, ja, ma, fa, qa = this,
                ka, Ja = 0,
                eb = 1,
                ga = e,
                na = b(a);
            g.Base.call(this, a, e, !0);
            qa.scrolled = !1;
            qa.scroll = function(c, f, g) {
                c = j(c) ? Math.round(c / aa) * aa : Math.ceil((b(c, a).length ? Math.round(ha.offset()[O] - b(c, a).offset()[O]) : ka) / aa) * aa;
                Ja = Math.round(c / aa);
                da = ka;
                t(d(c, L, V), f, g)
            };
            qa.refresh = function(a) {
                var b;
                x = ga.contSize === h ? fa ? na.height() : na.width() : ga.contSize;
                L = ga.minScroll === h ? fa ? x - ha.height() : x - ha.width() : ga.minScroll;
                V = ga.maxScroll === h ? 0 : ga.maxScroll;
                !fa && ga.rtl && (b = V, V = -L, L = -b);
                i(ga.snap) && (q = [], ha.find(ga.snap).each(function() {
                    var a =
                        fa ? this.offsetTop : this.offsetLeft,
                        b = fa ? this.offsetHeight : this.offsetWidth;
                    q.push({
                        breakpoint: a + b / 2,
                        snap1: -a,
                        snap2: x - a - b
                    })
                }));
                aa = j(ga.snap) ? ga.snap : 1;
                Q = ga.snap ? ga.maxSnapScroll : 0;
                G = ga.easing;
                M = ga.elastic ? j(ga.snap) ? aa : j(ga.elastic) ? ga.elastic : 0 : 0;
                ka === h && (ka = ga.initialPos, Ja = Math.round(ka / aa));
                a || qa.scroll(ga.snap ? q ? q[Ja]["snap" + eb] : Ja * aa : ka)
            };
            qa.init = function(b) {
                qa._init(b);
                O = (fa = "Y" == ga.axis) ? "top" : "left";
                ha = ga.moveElement || na.children().eq(0);
                ua = ha[0].style;
                qa.refresh();
                na.on("touchstart mousedown",
                    B).on("touchmove", p).on("touchend touchcancel", J);
                if (ga.mousewheel) na.on("wheel mousewheel", F);
                a.addEventListener && a.addEventListener("click", function(a) {
                    qa.scrolled && (qa.scrolled = !1, a.stopPropagation(), a.preventDefault())
                }, !0)
            };
            qa.destroy = function() {
                clearInterval($);
                na.off("touchstart mousedown", B).off("touchmove", p).off("touchend touchcancel", J).off("wheel mousewheel", F);
                qa._destroy()
            };
            ga = qa.settings;
            ma = qa.trigger;
            f || qa.init(e)
        };
        g.ScrollView.prototype = {
            _class: "scrollview",
            _defaults: {
                speedUnit: 0.0022,
                timeUnit: 0.8,
                initialPos: 0,
                axis: "Y",
                easing: "ease-out",
                stopProp: !0,
                momentum: !0,
                mousewheel: !0,
                elastic: !0
            }
        };
        e.presetShort("scrollview", "ScrollView", !1)
    })();
    (function(h) {
        var e = m,
            b = e.$,
            g = {
                invalid: [],
                showInput: !0,
                inputClass: ""
            };
        e.presets.scroller.list = function(a) {
            function d(a, b, d) {
                var f = 0,
                    g, i, j = [
                        []
                    ],
                    l = z;
                if (b)
                    for (g = 0; g < b; g++) m ? j[0][g] = {} : j[g] = [{}];
                for (; f < a.length;) {
                    m ? j[0][f] = e(l, t[f]) : j[f] = [e(l, t[f])];
                    g = 0;
                    for (b = h; g < l.length && b === h;) {
                        if (l[g].key == a[f] && (d !== h && f <= d || d === h)) b = g;
                        g++
                    }
                    if (b !== h && l[b].children) f++,
                        l = l[b].children;
                    else if ((i = c(l)) && i.children) f++, l = i.children;
                    else break
                }
                return j
            }

            function c(a, b) {
                if (!a) return !1;
                for (var c = 0, d; c < a.length;)
                    if (!(d = a[c++]).invalid) return b ? c - 1 : d;
                return !1
            }

            function e(a, b) {
                for (var c = {
                        data: [],
                        label: b
                    }, d = 0; d < a.length;) c.data.push({
                    value: a[d].key,
                    display: a[d].value
                }), d++;
                return c
            }

            function r(c) {
                a._isVisible && b(".mbsc-sc-whl-w", a._markup).css("display", "").slice(c).hide()
            }

            function s(a, b) {
                var d = [],
                    f = z,
                    g = 0,
                    e = !1,
                    i, j;
                if (a[g] !== h && g <= b) {
                    e = 0;
                    i = a[g];
                    for (j = h; e < f.length && j === h;) f[e].key ==
                        a[g] && !f[e].invalid && (j = e), e++
                } else j = c(f, !0), i = f[j].key;
                e = j !== h ? f[j].children : !1;
                for (d[g] = i; e;) {
                    f = f[j].children;
                    g++;
                    if (a[g] !== h && g <= b) {
                        e = 0;
                        i = a[g];
                        for (j = h; e < f.length && j === h;) f[e].key == a[g] && !f[e].invalid && (j = e), e++
                    } else j = c(f, !0), j = !1 === j ? h : j, i = f[j].key;
                    e = j !== h && c(f[j].children) ? f[j].children : !1;
                    d[g] = i
                }
                return {
                    lvl: g + 1,
                    nVector: d
                }
            }

            function k(c) {
                var d = [];
                p = p > u++ ? p : u;
                c.children("li").each(function(c) {
                    var f = b(this),
                        g = f.clone();
                    g.children("ul,ol").remove();
                    var g = a._processMarkup ? a._processMarkup(g) : g.html().replace(/^\s\s*/,
                            "").replace(/\s\s*$/, ""),
                        e = f.attr("data-invalid") ? !0 : !1,
                        c = {
                            key: f.attr("data-val") === h || null === f.attr("data-val") ? c : f.attr("data-val"),
                            value: g,
                            invalid: e,
                            children: null
                        },
                        f = f.children("ul,ol");
                    f.length && (c.children = k(f));
                    d.push(c)
                });
                u--;
                return d
            }

            function j(b, c, g) {
                for (var e = (c || 0) + 1, j = [], i = {}, h = {}, i = d(b, null, c), c = 0; c < b.length; c++) a._tempWheelArray[c] = b[c] = g.nVector[c] || 0;
                for (; e < g.lvl;) h[e] = m ? i[0][e] : i[e][0], j.push(e++);
                r(g.lvl);
                F = b.slice(0);
                j.length && (f = !0, a.changeWheel(h))
            }
            var i = b.extend({}, a.settings),
                C = b.extend(a.settings, g, i),
                i = C.layout || (/top|bottom/.test(C.display) ? "liquid" : ""),
                m = "liquid" == i,
                y = C.readonly,
                n = b(this),
                E, f, B = this.id + "_dummy",
                p = 0,
                u = 0,
                J, F = [],
                z = C.wheelArray || k(n),
                t = function(a) {
                    var b = [],
                        c;
                    for (c = 0; c < a; c++) b[c] = C.labels && C.labels[c] ? C.labels[c] : c;
                    return b
                }(p),
                l = function(a) {
                    var b = [],
                        d;
                    d = !0;
                    for (var f = 0; d;) d = c(a), b[f++] = d.key, (d = d.children) && (a = d);
                    return b
                }(z),
                w = d(l, p);
            b("#" + B).remove();
            C.showInput && (E = b('<input type="text" id="' + B + '" value="" class="' + C.inputClass + '" placeholder="' + (C.placeholder ||
                "") + '" readonly />').insertBefore(n), C.anchor = E, a.attachShow(E));
            C.wheelArray || n.hide();
            return {
                wheels: w,
                layout: i,
                headerText: !1,
                setOnTap: 1 == p,
                formatValue: function(a) {
                    if (J === h) J = s(a, a.length).lvl;
                    return a.slice(0, J).join(" ")
                },
                parseValue: function(a) {
                    return a ? (a + "").split(" ") : (C.defaultValue || l).slice(0)
                },
                onBeforeShow: function() {
                    var b = a.getArrayVal(true);
                    F = b.slice(0);
                    C.wheels = d(b, p, p);
                    f = true
                },
                onWheelGestureStart: function(a) {
                    for (var b = p, a = a.index, c = []; b;) c[--b] = true;
                    c[a] = false;
                    C.readonly = c
                },
                onWheelAnimationEnd: function(b) {
                    var b =
                        b.index,
                        c = a.getArrayVal(true),
                        d = s(c, b);
                    J = d.lvl;
                    C.readonly = y;
                    c[b] != F[b] && j(c, b, d)
                },
                onFill: function(a) {
                    J = h;
                    E && E.val(a.valueText)
                },
                validate: function(a) {
                    var b = a.values,
                        a = a.index,
                        c = s(b, b.length);
                    J = c.lvl;
                    if (a === h) {
                        r(c.lvl);
                        f || j(b, a, c)
                    }
                    f = false;
                    for (var a = J, c = z, d = 0, g = []; d < a;) {
                        for (var e = g, i = d, l = 0, o = void 0, k = c, n = []; l < d;) {
                            var t = b[l];
                            for (o in k)
                                if (k[o].key == t) {
                                    k = k[o].children;
                                    break
                                }
                            l++
                        }
                        for (l = 0; l < k.length;) {
                            k[l].invalid && n.push(k[l].key);
                            l++
                        }
                        e[i] = n;
                        d++
                    }
                    return {
                        disabled: g
                    }
                },
                onDestroy: function() {
                    E && E.remove();
                    n.show()
                }
            }
        }
    })();
    (function(h) {
        var e = m,
            b = e.$,
            g = {
                batch: 50,
                min: 0,
                max: 100,
                defaultUnit: "",
                units: null,
                unitNames: null,
                invalid: [],
                sign: !1,
                step: 0.05,
                scale: 2,
                convert: function(a) {
                    return a
                },
                signText: "&nbsp;",
                wholeText: "Whole",
                fractionText: "Fraction",
                unitText: "Unit"
            };
        e.presets.scroller.measurement = function(a) {
            function d(a) {
                return Math.max(P, Math.min(V, t ? 0 > a ? Math.ceil(a) : Math.floor(a) : s(Math.round(a - ea), T) + ea))
            }

            function c(a) {
                return t ? s((Math.abs(a) - Math.abs(d(a))) * x - ba, T) + ba : 0
            }

            function e(a) {
                var b = d(a),
                    f = c(a);
                f >= x && (0 > a ? b-- : b++,
                    f = 0);
                return [0 > a ? "-" : "+", b, f]
            }

            function r(a) {
                var b = +a[M];
                return (u && "-" == a[0] ? -1 : 1) * (b + (t ? a[G] / x * (0 > b ? -1 : 1) : 0))
            }

            function s(a, b) {
                return Math.round(a / b) * b
            }

            function k(a, b) {
                for (a += ""; a.length < b;) a = "0" + a;
                return a
            }

            function j(a, b, c) {
                return b === c || !n.convert ? a : n.convert.call(this, a, b, c)
            }

            function i(a, b, c) {
                a = a > c ? c : a;
                return a < b ? b : a
            }

            function m(a) {
                var b;
                S = j(n.min, F, a);
                K = j(n.max, F, a);
                t ? (P = 0 > S ? Math.ceil(S) : Math.floor(S), V = 0 > K ? Math.ceil(K) : Math.floor(K), Q = c(S), L = c(K)) : (P = Math.round(S), V = Math.round(K), V = P + Math.floor((V -
                    P) / T) * T, ea = P % T);
                a = P;
                b = V;
                u && (b = Math.abs(a) > Math.abs(b) ? Math.abs(a) : Math.abs(b), a = 0 > a ? 0 : a);
                B.min = 0 > a ? Math.ceil(a / l) : Math.floor(a / l);
                B.max = 0 > b ? Math.ceil(b / l) : Math.floor(b / l)
            }

            function H(a) {
                return r(a).toFixed(t ? w : 0) + (J ? " " + z[a[R]] : "")
            }
            var y = b.extend({}, a.settings),
                n = b.extend(a.settings, g, y),
                E = {},
                y = [
                    []
                ],
                f = {},
                B = {},
                E = {},
                p = [],
                u = n.sign,
                J = n.units && n.units.length,
                F = J ? n.defaultUnit || n.units[0] : "",
                z = [],
                t = 1 > n.step,
                l = 1 < n.step ? n.step : 1,
                w = t ? Math.max(n.scale, (n.step + "").split(".")[1].length) : 1,
                x = Math.pow(10, w),
                T = Math.round(t ?
                    n.step * x : n.step),
                v, I, O, G, M, R, S, K, P, V, Q, L, ea = 0,
                ba = 0,
                W, N, D = 0;
            a.setVal = function(c, d, f, g, e) {
                a._setVal(b.isArray(c) ? H(c) : c, d, f, g, e)
            };
            if (n.units)
                for (N = 0; N < n.units.length; ++N) W = n.units[N], z.push(n.unitNames ? n.unitNames[W] || W : W);
            if (u)
                if (u = !1, J)
                    for (N = 0; N < n.units.length; N++) 0 > j(n.min, F, n.units[N]) && (u = !0);
                else u = 0 > n.min;
            u && (y[0].push({
                data: ["-", "+"],
                label: n.signText
            }), D++);
            B = {
                label: n.wholeText,
                data: function(a) {
                    return P % l + a * l
                },
                getIndex: function(a) {
                    return Math.round((a - P % l) / l)
                }
            };
            y[0].push(B);
            M = D++;
            m(F);
            if (t) {
                y[0].push(E);
                E.data = [];
                E.label = n.fractionText;
                for (N = ba; N < x; N += T) p.push(N), E.data.push({
                    value: N,
                    display: "." + k(N, w)
                });
                G = D++;
                v = Math.ceil(100 / T);
                n.invalid && n.invalid.length && (b.each(n.invalid, function(a, b) {
                    var c = b > 0 ? Math.floor(b) : Math.ceil(b);
                    c === 0 && (c = b <= 0 ? -0.001 : 0.001);
                    f[c] = (f[c] || 0) + 1;
                    if (b === 0) {
                        c = 0.001;
                        f[c] = (f[c] || 0) + 1
                    }
                }), b.each(f, function(a, b) {
                    b < v ? delete f[a] : f[a] = a
                }))
            }
            if (J) {
                E = {
                    data: [],
                    label: n.unitText,
                    circular: !1
                };
                for (N = 0; N < n.units.length; N++) E.data.push({
                    value: N,
                    display: z[N]
                });
                y[0].push(E)
            }
            R = D;
            return {
                wheels: y,
                minWidth: u && t ? 70 : 80,
                showLabel: !1,
                formatValue: H,
                parseValue: function(a) {
                    var c = (((typeof a === "number" ? a + "" : a) || n.defaultValue) + "").split(" "),
                        a = +c[0],
                        d = [],
                        f = "";
                    if (J) {
                        f = b.inArray(c[1], z);
                        f = f == -1 ? b.inArray(F, n.units) : f;
                        f = f == -1 ? 0 : f
                    }
                    O = J ? n.units[f] : "";
                    m(O);
                    a = isNaN(a) ? 0 : a;
                    a = i(a, S, K);
                    c = e(a);
                    c[1] = i(c[1], P, V);
                    I = a;
                    if (u) {
                        d[0] = c[0];
                        c[1] = Math.abs(c[1])
                    }
                    d[M] = c[1];
                    t && (d[G] = c[2]);
                    J && (d[R] = f);
                    return d
                },
                onCancel: function() {
                    I = h
                },
                validate: function(c) {
                    var d, g, k, q, w = c.values;
                    k = c.index;
                    var c = c.direction,
                        y = {},
                        x = [],
                        v = {},
                        H = J ?
                        n.units[w[R]] : "";
                    u && k === 0 && (I = Math.abs(I) * (w[0] == "-" ? -1 : 1));
                    if (k === M || k === G && t || I === h || k === h) {
                        I = r(w);
                        O = H
                    }
                    if (J && k === R && O !== H || k === h) {
                        m(H);
                        I = j(I, O, H);
                        O = H;
                        g = e(I);
                        if (k !== h) {
                            v[M] = B;
                            a.changeWheel(v)
                        }
                        u && (w[0] = g[0])
                    }
                    x[M] = [];
                    if (u) {
                        x[0] = [];
                        if (S > 0) {
                            x[0].push("-");
                            w[0] = "+"
                        }
                        if (K < 0) {
                            x[0].push("+");
                            w[0] = "-"
                        }
                        k = Math.abs(w[0] == "-" ? P : V);
                        for (D = k + l; D < k + 20 * l; D = D + l) {
                            x[M].push(D);
                            y[D] = true
                        }
                    }
                    I = i(I, S, K);
                    g = e(I);
                    k = u ? Math.abs(g[1]) : g[1];
                    d = u ? w[0] == "-" : I < 0;
                    w[M] = k;
                    d && (g[0] = "-");
                    t && (w[G] = g[2]);
                    b.each(t ? f : n.invalid, function(a, b) {
                        if (u &&
                            d)
                            if (b <= 0) b = Math.abs(b);
                            else return;
                        b = s(j(b, F, H), t ? 1 : T);
                        y[b] = true;
                        x[M].push(b)
                    });
                    w[M] = a.getValidValue(M, k, c, y);
                    g[1] = w[M] * (u && d ? -1 : 1);
                    if (t) {
                        x[G] = [];
                        c = u ? w[0] + w[1] : (I < 0 ? "-" : "+") + Math.abs(g[1]);
                        k = (S < 0 ? "-" : "+") + Math.abs(P);
                        v = (K < 0 ? "-" : "+") + Math.abs(V);
                        c === k && b(p).each(function(a, b) {
                            (d ? b > Q : b < Q) && x[G].push(b)
                        });
                        c === v && b(p).each(function(a, b) {
                            (d ? b < L : b > L) && x[G].push(b)
                        });
                        b.each(n.invalid, function(a, b) {
                            q = e(j(b, F, H));
                            (g[0] === q[0] || g[1] === 0 && q[1] === 0 && q[2] === 0) && g[1] === q[1] && x[G].push(q[2])
                        })
                    }
                    return {
                        disabled: x,
                        valid: w
                    }
                }
            }
        };
        e.presetShort("measurement")
    })();
    (function(h) {
        var e = m,
            b = e.$,
            g = e.util.datetime,
            a = g.adjustedDate,
            d = new Date,
            c = {
                startYear: d.getFullYear() - 100,
                endYear: d.getFullYear() + 1,
                separator: " ",
                dateFormat: "mm/dd/yy",
                dateDisplay: "MMddyy",
                timeFormat: "hh:ii A",
                dayText: "Day",
                monthText: "Month",
                yearText: "Year",
                hourText: "Hours",
                minuteText: "Minutes",
                ampmText: "&nbsp;",
                secText: "Seconds",
                nowText: "Now"
            },
            o = function(d) {
                function o(a, b, c) {
                    return K[b] !== h && (a = +a[K[b]], !isNaN(a)) ? a : P[b] !== h ? P[b] : c !== h ? c : V[b]($)
                }

                function k(a) {
                    return {
                        value: a,
                        display: (ba.match(/yy/i) ? a : (a + "").substr(2, 2)) + (G.yearSuffix || "")
                    }
                }

                function j(a) {
                    return a
                }

                function i(a, b, c, d, f, g, e) {
                    b.push({
                        data: d,
                        label: c,
                        min: g,
                        max: e,
                        getIndex: f,
                        cssClass: a
                    })
                }

                function m(a, b, c, d) {
                    return Math.min(d, Math.floor(a / b) * b + c)
                }

                function H(a) {
                    if (null === a) return a;
                    var b = o(a, "y"),
                        c = o(a, "m"),
                        d = Math.min(o(a, "d"), G.getMaxDayOfMonth(b, c)),
                        f = o(a, "h", 0);
                    if (f === 9999) {
                        var t = new Date();
                        return G.getDate(b, c, d, t.getHours(), t.getMinutes(), t.getSeconds(), o(a, "u", 0))
                    }
                    return G.getDate(b, c, d, o(a, "a", 0) ? f + 12 : f, o(a, "i", 0), o(a, "s", 0), o(a, "u", 0))
                }

                function y(a, b) {
                    var c, d, f = !1,
                        g = !1,
                        e = 0,
                        j = 0;
                    Y = H(p(Y));
                    ya = H(p(ya));
                    if (n(a)) return a;
                    a < Y && (a = Y);
                    a > ya && (a = ya);
                    d = c = a;
                    if (2 !== b)
                        for (f = n(c); !f && c < ya;) c = new Date(c.getTime() + 864E5), f = n(c), e++;
                    if (1 !== b)
                        for (g = n(d); !g && d > Y;) d = new Date(d.getTime() - 864E5), g = n(d), j++;
                    return 1 === b && f ? c : 2 === b && g ? d : j <= e && g ? d : c
                }

                function n(a) {
                    return a < Y || a > ya ? !1 : E(a, L) ? !0 : E(a, Q) ? !1 : !0
                }

                function E(a, b) {
                    var c, d, f;
                    if (b)
                        for (d = 0; d < b.length; d++)
                            if (c = b[d], f = c + "", !c.start)
                                if (c.getTime) {
                                    if (a.getFullYear() == c.getFullYear() && a.getMonth() == c.getMonth() && a.getDate() == c.getDate()) return !0
                                } else if (f.match(/w/i)) {
                        if (f = +f.replace("w",
                                ""), f == a.getDay()) return !0
                    } else if (f = f.split("/"), f[1]) {
                        if (f[0] - 1 == a.getMonth() && f[1] == a.getDate()) return !0
                    } else if (f[0] == a.getDate()) return !0;
                    return !1
                }

                function f(a, b, c, d, f, g, e) {
                    var j, i, h;
                    if (a)
                        for (j = 0; j < a.length; j++)
                            if (i = a[j], h = i + "", !i.start)
                                if (i.getTime) G.getYear(i) == b && G.getMonth(i) == c && (g[G.getDay(i)] = e);
                                else if (h.match(/w/i)) {
                        h = +h.replace("w", "");
                        for (w = h - d; w < f; w += 7) 0 <= w && (g[w + 1] = e)
                    } else h = h.split("/"), h[1] ? h[0] - 1 == c && (g[h[1]] = e) : g[h[0]] = e
                }

                function B(a, c, d, f, g, e, j, i, l) {
                    var k, o, n, t, s, K, p, w, Q, r,
                        x, L, y, H, S, u, D, P, E = {},
                        z = {
                            h: aa,
                            i: q,
                            s: da,
                            a: 1
                        },
                        F = G.getDate(g, e, j),
                        B = ["a", "h", "i", "s"];
                    a && (b.each(a, function(a, b) {
                        if (b.start && (b.apply = !1, k = b.d, o = k + "", n = o.split("/"), k && (k.getTime && g == G.getYear(k) && e == G.getMonth(k) && j == G.getDay(k) || !o.match(/w/i) && (n[1] && j == n[1] && e == n[0] - 1 || !n[1] && j == n[0]) || o.match(/w/i) && F.getDay() == +o.replace("w", "")))) b.apply = !0, E[F] = !0
                    }), b.each(a, function(a, b) {
                        H = y = 0;
                        x = v[d];
                        L = I[d];
                        p = K = !0;
                        S = !1;
                        if (b.start && (b.apply || !b.d && !E[F])) {
                            t = b.start.split(":");
                            s = b.end.split(":");
                            for (r = 0; 3 > r; r++) t[r] ===
                                h && (t[r] = 0), s[r] === h && (s[r] = 59), t[r] = +t[r], s[r] = +s[r];
                            t.unshift(11 < t[0] ? 1 : 0);
                            s.unshift(11 < s[0] ? 1 : 0);
                            ca && (12 <= t[1] && (t[1] -= 12), 12 <= s[1] && (s[1] -= 12));
                            for (r = 0; r < c; r++)
                                if (R[r] !== h) {
                                    w = m(t[r], z[B[r]], v[B[r]], I[B[r]]);
                                    Q = m(s[r], z[B[r]], v[B[r]], I[B[r]]);
                                    P = D = u = 0;
                                    ca && 1 == r && (u = t[0] ? 12 : 0, D = s[0] ? 12 : 0, P = R[0] ? 12 : 0);
                                    K || (w = 0);
                                    p || (Q = I[B[r]]);
                                    if ((K || p) && w + u < R[r] + P && R[r] + P < Q + D) S = !0;
                                    R[r] != w && (K = !1);
                                    R[r] != Q && (p = !1)
                                }
                            if (!l)
                                for (r = c + 1; 4 > r; r++) 0 < t[r] && (y = z[d]), s[r] < I[B[r]] && (H = z[d]);
                            S || (w = m(t[c], z[d], v[d], I[d]) + y, Q = m(s[c], z[d],
                                v[d], I[d]) - H, K && (x = w), p && (L = Q + 1));
                            if (K || p || S)
                                for (r = x; r < L; r++) i[r] = !l
                        }
                    }))
                }

                function p(a, c) {
                    var d = [];
                    if (null === a || a === h) return a;
                    b.each("y,m,d,a,h,i,s,u".split(","), function(b, f) {
                        K[f] !== h && (d[K[f]] = V[f](a));
                        c && (P[f] = V[f](a))
                    });
                    return d
                }

                function u(b) {
                    var c, d, f, g = [];
                    if (b) {
                        for (c = 0; c < b.length; c++)
                            if (d = b[c], d.start && d.start.getTime)
                                for (f = new Date(d.start); f <= d.end;) g.push(a(f.getFullYear(), f.getMonth(), f.getDate())), f.setDate(f.getDate() + 1);
                            else g.push(d);
                        return g
                    }
                    return b
                }
                var J = b(this),
                    F = {},
                    z;
                if (J.is("input")) {
                    switch (J.attr("type")) {
                        case "date":
                            z =
                                "yy-mm-dd";
                            break;
                        case "datetime":
                            z = "yy-mm-ddTHH:ii:ssZ";
                            break;
                        case "datetime-local":
                            z = "yy-mm-ddTHH:ii:ss";
                            break;
                        case "month":
                            z = "yy-mm";
                            F.dateOrder = "mmyy";
                            break;
                        case "time":
                            z = "HH:ii:ss"
                    }
                    var t = J.attr("min"),
                        J = J.attr("max");
                    t && (F.minDate = g.parseDate(z, t));
                    J && (F.maxDate = g.parseDate(z, J))
                }
                var l, w, x, T, v, I, O, t = b.extend({}, d.settings),
                    G = b.extend(d.settings, e.util.datetime.defaults, c, F, t),
                    M = 0,
                    R = [],
                    F = [],
                    S = [],
                    K = {},
                    P = {},
                    V = {
                        y: function(a) {
                            return G.getYear(a)
                        },
                        m: function(a) {
                            return G.getMonth(a)
                        },
                        d: function(a) {
                            return G.getDay(a)
                        },
                        h: function(a) {
                            a = a.getHours();
                            a = ca && 12 <= a ? a - 12 : a;
                            return m(a, aa, Ga, ja)
                        },
                        i: function(a) {
                            return m(a.getMinutes(), q, ua, ma)
                        },
                        s: function(a) {
                            return m(a.getSeconds(), da, ha, fa)
                        },
                        u: function(a) {
                            return a.getMilliseconds()
                        },
                        a: function(a) {
                            return D && 11 < a.getHours() ? 1 : 0
                        }
                    },
                    Q = G.invalid,
                    L = G.valid,
                    t = G.preset,
                    ea = G.dateWheels || G.dateFormat,
                    ba = G.dateWheels || G.dateDisplay,
                    W = G.timeWheels || G.timeFormat,
                    N = ba.match(/D/),
                    D = W.match(/a/i),
                    ca = W.match(/h/),
                    la = "datetime" == t ? G.dateFormat + G.separator + G.timeFormat : "time" == t ? G.timeFormat :
                    G.dateFormat,
                    $ = new Date,
                    J = G.steps || {},
                    aa = J.hour || G.stepHour || 1,
                    q = J.minute || G.stepMinute || 1,
                    da = J.second || G.stepSecond || 1,
                    J = J.zeroBased,
                    Y = G.min || a(G.startYear, 0, 1),
                    ya = G.max || a(G.endYear, 11, 31, 23, 59, 59),
                    Ga = J ? 0 : Y.getHours() % aa,
                    ua = J ? 0 : Y.getMinutes() % q,
                    ha = J ? 0 : Y.getSeconds() % da,
                    ja = Math.floor(((ca ? 11 : 23) - Ga) / aa) * aa + Ga,
                    ma = Math.floor((59 - ua) / q) * q + ua,
                    fa = Math.floor((59 - ua) / q) * q + ua;
                z = z || la;
                if (t.match(/date/i)) {
                    b.each(["y", "m", "d"], function(a, b) {
                        l = ea.search(RegExp(b, "i")); - 1 < l && S.push({
                            o: l,
                            v: b
                        })
                    });
                    S.sort(function(a,
                        b) {
                        return a.o > b.o ? 1 : -1
                    });
                    b.each(S, function(a, b) {
                        K[b.v] = a
                    });
                    J = [];
                    for (w = 0; 3 > w; w++)
                        if (w == K.y) M++, i("mbsc-dt-whl-y", J, G.yearText, k, j, G.getYear(Y), G.getYear(ya));
                        else if (w == K.m) {
                        M++;
                        x = [];
                        for (l = 0; 12 > l; l++) O = ba.replace(/[dy]/gi, "").replace(/mm/, (9 > l ? "0" + (l + 1) : l + 1) + (G.monthSuffix || "")).replace(/m/, l + 1 + (G.monthSuffix || "")), x.push({
                            value: l,
                            display: O.match(/MM/) ? O.replace(/MM/, '<span class="mbsc-dt-month">' + G.monthNames[l] + "</span>") : O.replace(/M/, '<span class="mbsc-dt-month">' + G.monthNamesShort[l] + "</span>")
                        });
                        i("mbsc-dt-whl-m", J, G.monthText, x)
                    } else if (w == K.d) {
                        M++;
                        x = [];
                        for (l = 1; 32 > l; l++) x.push({
                            value: l,
                            display: (ba.match(/dd/i) && 10 > l ? "0" + l : l) + (G.daySuffix || "")
                        });
                        i("mbsc-dt-whl-d", J, G.dayText, x)
                    }
                    F.push(J)
                }
                if (t.match(/time/i)) {
                    T = !0;
                    S = [];
                    b.each(["h", "i", "s", "a"], function(a, b) {
                        a = W.search(RegExp(b, "i")); - 1 < a && S.push({
                            o: a,
                            v: b
                        })
                    });
                    S.sort(function(a, b) {
                        return a.o > b.o ? 1 : -1
                    });
                    b.each(S, function(a, b) {
                        K[b.v] = M + a
                    });
                    J = [];
                    for (w = M; w < M + 4; w++)
                        if (w == K.h) {
                            M++;
                            x = [];
                            for (l = Ga; l < (ca ? 12 : 24); l += aa) x.push({
                                value: l,
                                display: ca && 0 === l ?
                                    12 : W.match(/hh/i) && 10 > l ? "0" + l : l
                            });
                            i("mbsc-dt-whl-h", J, G.hourText, x)
                        } else if (w == K.i) {
                        M++;
                        x = [];
                        for (l = ua; 60 > l; l += q) x.push({
                            value: l,
                            display: W.match(/ii/) && 10 > l ? "0" + l : l
                        });
                        i("mbsc-dt-whl-i", J, G.minuteText, x)
                    } else if (w == K.s) {
                        M++;
                        x = [];
                        for (l = ha; 60 > l; l += da) x.push({
                            value: l,
                            display: W.match(/ss/) && 10 > l ? "0" + l : l
                        });
                        i("mbsc-dt-whl-s", J, G.secText, x)
                    } else w == K.a && (M++, t = W.match(/A/), i("mbsc-dt-whl-a", J, G.ampmText, t ? [{
                        value: 0,
                        display: G.amText.toUpperCase()
                    }, {
                        value: 1,
                        display: G.pmText.toUpperCase()
                    }] : [{
                        value: 0,
                        display: G.amText
                    }, {
                        value: 1,
                        display: G.pmText
                    }]));
                    F.push(J)
                }
                d.getVal = function(a) {
                    return d._hasValue || a ? H(d.getArrayVal(a)) : null
                };
                d.setDate = function(a, b, c, f, g) {
                    d.setArrayVal(p(a), b, g, f, c)
                };
                d.getDate = d.getVal;
                d.format = la;
                d.order = K;
                d.handlers.now = function() {
                    d.setDate(new Date, d.live, 200, !0, !0)
                };
                d.buttons.now = {
                    text: G.nowText,
                    handler: "now"
                };
                Q = u(Q);
                L = u(L);
                v = {
                    y: Y.getFullYear(),
                    m: 0,
                    d: 1,
                    h: Ga,
                    i: ua,
                    s: ha,
                    a: 0
                };
                I = {
                    y: ya.getFullYear(),
                    m: 11,
                    d: 31,
                    h: ja,
                    i: ma,
                    s: fa,
                    a: 1
                };
                return {
                    compClass: "mbsc-dt",
                    wheels: F,
                    headerText: G.headerText ? function() {
                        return g.formatDate(la,
                            H(d.getArrayVal(!0)), G)
                    } : !1,
                    formatValue: function(a) {
                        return g.formatDate(z, H(a), G)
                    },
                    parseValue: function(a) {
                        a || (P = {});
                        return p(a ? g.parseDate(z, a, G) : G.defaultValue && G.defaultValue.getTime ? G.defaultValue : new Date, !!a && !!a.getTime)
                    },
                    validate: function(a) {
                        var c, g, e, j;
                        c = a.index;
                        var i = a.direction,
                            l = d.settings.wheels[0][K.d],
                            a = y(H(a.values), i),
                            k = p(a),
                            n = [],
                            a = {},
                            t = o(k, "y"),
                            w = o(k, "m"),
                            m = G.getMaxDayOfMonth(t, w),
                            q = !0,
                            x = !0;
                        b.each("y,m,d,a,h,i,s".split(","), function(a, c) {
                            if (K[c] !== h) {
                                var d = v[c],
                                    e = I[c],
                                    j = o(k, c);
                                n[K[c]] = [];
                                q && Y && (d = V[c](Y));
                                x && ya && (e = V[c](ya));
                                if (c != "y")
                                    for (g = v[c]; g <= I[c]; g++)(g < d || g > e) && n[K[c]].push(g);
                                j < d && (j = d);
                                j > e && (j = e);
                                q && (q = j == d);
                                x && (x = j == e);
                                if (c == "d") {
                                    d = G.getDate(t, w, 1).getDay();
                                    e = {};
                                    f(Q, t, w, d, m, e, 1);
                                    f(L, t, w, d, m, e, 0);
                                    b.each(e, function(a, b) {
                                        b && n[K[c]].push(a)
                                    })
                                }
                            }
                        });
                        T && b.each(["a", "h", "i", "s"], function(a, c) {
                            var f = o(k, c),
                                g = o(k, "d"),
                                e = {};
                            K[c] !== h && (n[K[c]] = [], B(Q, a, c, k, t, w, g, e, 0), B(L, a, c, k, t, w, g, e, 1), b.each(e, function(a, b) {
                                b && n[K[c]].push(a)
                            }), R[a] = d.getValidValue(K[c], f, i, e))
                        });
                        if (l && (l._length !==
                                m || N && (c === h || c === K.y || c === K.m))) {
                            a[K.d] = l;
                            l.data = [];
                            for (c = 1; c <= m; c++) j = G.getDate(t, w, c).getDay(), e = ba.replace(/[my]/gi, "").replace(/dd/, (10 > c ? "0" + c : c) + (G.daySuffix || "")).replace(/d/, c + (G.daySuffix || "")), l.data.push({
                                value: c,
                                display: e.match(/DD/) ? e.replace(/DD/, '<span class="mbsc-dt-day">' + G.dayNames[j] + "</span>") : e.replace(/D/, '<span class="mbsc-dt-day">' + G.dayNamesShort[j] + "</span>")
                            });
                            d._tempWheelArray[K.d] = k[K.d];
                            d.changeWheel(a)
                        }
                        return {
                            disabled: n,
                            valid: k
                        }
                    }
                }
            };
        b.each(["date", "time", "datetime"],
            function(a, b) {
                e.presets.scroller[b] = o
            })
    })();
    (function() {
        function h(a) {
            var b = [Math.round(a.r).toString(16), Math.round(a.g).toString(16), Math.round(a.b).toString(16)];
            o.each(b, function(a, c) {
                1 == c.length && (b[a] = "0" + c)
            });
            return "#" + b.join("")
        }

        function e(a) {
            a = parseInt(-1 < a.indexOf("#") ? a.substring(1) : a, 16);
            return {
                r: a >> 16,
                g: (a & 65280) >> 8,
                b: a & 255
            }
        }

        function b(a) {
            var b, c, d;
            b = a.h;
            var g = 255 * a.s / 100,
                a = 255 * a.v / 100;
            if (0 === g) b = c = d = a;
            else {
                var g = (255 - g) * a / 255,
                    e = (a - g) * (b % 60) / 60;
                360 == b && (b = 0);
                60 > b ? (b = a, d = g, c = g + e) : 120 >
                    b ? (c = a, d = g, b = a - e) : 180 > b ? (c = a, b = g, d = g + e) : 240 > b ? (d = a, b = g, c = a - e) : 300 > b ? (d = a, c = g, b = g + e) : 360 > b ? (b = a, c = g, d = a - e) : b = c = d = 0
            }
            return {
                r: b,
                g: c,
                b: d
            }
        }

        function g(a) {
            var b = 0,
                c;
            c = Math.min(a.r, a.g, a.b);
            var d = Math.max(a.r, a.g, a.b),
                b = d - c,
                b = (c = d ? 255 * b / d : 0) ? a.r == d ? (a.g - a.b) / b : a.g == d ? 2 + (a.b - a.r) / b : 4 + (a.r - a.g) / b : -1,
                b = 60 * b;
            0 > b && (b += 360);
            return {
                h: b,
                s: c * (100 / 255),
                v: d * (100 / 255)
            }
        }

        function a(a) {
            return h(b(a))
        }

        function d(a) {
            return g(e(a))
        }
        var c = m,
            o = c.$,
            r = c.util.prefix,
            s = c.presets.scroller,
            k = {
                preview: !0,
                previewText: !0,
                label: "Color",
                refineLabel: "Refine",
                step: 10,
                nr: 10,
                format: "hex",
                hueText: "Hue",
                saturationText: "Saturation",
                valueText: "Value"
            };
        c.presetShort("color");
        s.color = function(c) {
            function e(a) {
                return isNaN(+a) ? 0 : +a
            }

            function h(c) {
                return "hsv" == B ? c.join(",") : "rgb" == B ? (c = b({
                    h: c[0],
                    s: c[1],
                    v: c[2]
                }), Math.round(c.r) + "," + Math.round(c.g) + "," + Math.round(c.b)) : a({
                    h: c[0],
                    s: c[1],
                    v: c[2]
                })
            }

            function s(a, b, c) {
                a[0].style.backgroundImage = r + ("-webkit-" == r ? "gradient(linear,left top,left bottom,from(" + b + "),to(" + c + "))" : "linear-gradient(" + b + "," + c +
                    ")")
            }

            function m(d, f) {
                var g = c._tempWheelArray;
                1 !== f && 2 !== f && s(o(".mbsc-sc-whl-sc", d).eq(1), a({
                    h: g[0],
                    s: 0,
                    v: 100
                }), a({
                    h: g[0],
                    s: 100,
                    v: 100
                }));
                2 !== f && s(o(".mbsc-sc-whl-sc", d).eq(2), a({
                    h: g[0],
                    s: g[1],
                    v: 0
                }), a({
                    h: g[0],
                    s: g[1],
                    v: 100
                }));
                if (p) {
                    var e = b({
                            h: g[0],
                            s: g[1],
                            v: g[2]
                        }),
                        e = 0.299 * e.r + 0.587 * e.g + 0.114 * e.b;
                    o(".mbsc-color-preview", d).attr("style", "background:" + a({
                        h: g[0],
                        s: g[1],
                        v: g[2]
                    }) + ";color:" + (130 < e ? "#000" : "#fff")).text(u ? h(g) : "")
                }
            }
            var n = o.extend({}, c.settings),
                E = o.extend(c.settings, k, n),
                n = o.isArray(E.colors) ?
                E.colors : [E.colors],
                f = E.defaultValue || n[0],
                B = E.format,
                p = E.preview,
                u = E.previewText,
                J = E.hueText,
                F = E.saturationText,
                z = E.valueText;
            return {
                minWidth: 70,
                height: 15,
                rows: 13,
                speedUnit: 0.006,
                timeUnit: 0.05,
                showLabel: !0,
                wheels: function() {
                    for (var b = 0, c = {
                            data: [],
                            label: J
                        }, d = {
                            circular: !1,
                            data: [],
                            label: F
                        }, f = {
                            circular: !1,
                            data: [],
                            label: z
                        }; 360 > b; b += 3) c.data.push({
                        value: b,
                        label: b,
                        display: '<div class="mbsc-color-itm" style="background:' + a({
                            h: b,
                            s: 100,
                            v: 100
                        }) + '"><div class="mbsc-color-itm-a"></div></div>'
                    });
                    for (b = 0; 101 > b; b +=
                        1) d.data.push({
                        value: b,
                        label: b,
                        display: '<div class="mbsc-color-itm"><div class="mbsc-color-itm-a"></div></div>'
                    }), f.data.push({
                        value: b,
                        label: b,
                        display: '<div class="mbsc-color-itm"><div class="mbsc-color-itm-a"></div></div>'
                    });
                    return [
                        [c, d, f]
                    ]
                }(),
                compClass: "mbsc-color",
                parseValue: function(a) {
                    if (a = a || f) {
                        "hsv" == B ? (a = a.split(","), a = {
                            h: e(a[0]),
                            s: e(a[1]),
                            v: e(a[2])
                        }) : "rgb" == B ? (a = a.split(","), a = g({
                            r: e(a[0]),
                            g: e(a[1]),
                            b: e(a[2])
                        })) : (a = a.replace("#", ""), 3 == a.length && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), a = d(a));
                        var b = Math.round(a.h);
                        return [3 * Math.floor(b / 3), Math.round(a.s), Math.round(a.v)]
                    }
                    return [0, 100, 100]
                },
                formatValue: h,
                onBeforeShow: function() {
                    p && (E.headerText = !1)
                },
                onMarkupReady: function(a) {
                    a = o(a.target);
                    p && a.find(".mbsc-sc-whl-gr-c").before('<div class="mbsc-color-preview"></div>');
                    m(a)
                },
                validate: function(a) {
                    c._isVisible && m(c._markup, a.index)
                }
            }
        };
        c.util.color = {
            hsv2hex: a,
            hsv2rgb: b,
            rgb2hsv: g,
            rgb2hex: h,
            hex2rgb: e,
            hex2hsv: d
        }
    })();
    (function(h) {
        var e = m,
            b = e.$,
            g = {
                autostart: !1,
                step: 1,
                useShortLabels: !1,
                labels: "Years,Months,Days,Hours,Minutes,Seconds,".split(","),
                labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
                startText: "Start",
                stopText: "Stop",
                resetText: "Reset",
                lapText: "Lap",
                hideText: "Hide"
            };
        e.presetShort("timer");
        e.presets.scroller.timer = function(a) {
            function d(a) {
                return new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds())
            }

            function c(a) {
                var c = {};
                if (P && w[R].index > w.days.index) {
                    var f, g, e, j;
                    f = new Date;
                    var i = p ? f : K;
                    f = p ? K : f;
                    f = d(f);
                    i = d(i);
                    c.years = i.getFullYear() - f.getFullYear();
                    c.months = i.getMonth() - f.getMonth();
                    c.days = i.getDate() - f.getDate();
                    c.hours = i.getHours() - f.getHours();
                    c.minutes = i.getMinutes() - f.getMinutes();
                    c.seconds = i.getSeconds() - f.getSeconds();
                    c.fract = (i.getMilliseconds() - f.getMilliseconds()) / 10;
                    for (f = l.length; 0 < f; f--) g = l[f - 1], e = w[g], j = l[b.inArray(g, l) - 1], w[j] && 0 > c[g] && (c[j]--, c[g] += "months" == j ? 32 - (new Date(i.getFullYear(), i.getMonth(), 32)).getDate() : e.until + 1);
                    "months" == R && (c.months += 12 * c.years, delete c.years)
                } else b(l).each(function(b, d) {
                    w[d].index <= w[R].index &&
                        (c[d] = Math.floor(a / w[d].limit), a -= c[d] * w[d].limit)
                });
                return c
            }

            function e(a) {
                var c = 1,
                    d = w[a],
                    f = d.wheel,
                    g = d.prefix,
                    j = d.until,
                    h = w[l[b.inArray(a, l) - 1]];
                if (d.index <= w[R].index && (!h || h.limit > M))
                    if (x[a] || V[0].push(f), x[a] = 1, f.data = [], f.label = d.label || "", f.cssClass = "mbsc-timer-whl-" + a, M >= d.limit && (c = Math.max(Math.round(M / d.limit), 1), H = c * d.limit), a == R) f.min = 0, f.data = function(a) {
                        return {
                            value: a,
                            display: r(a, g, d.label)
                        }
                    }, f.getIndex = function(a) {
                        return a
                    };
                    else
                        for (i = 0; i <= j; i += c) f.data.push({
                            value: i,
                            display: r(i, g,
                                d.label)
                        })
            }

            function r(a, b, c) {
                return (b || "") + (10 > a ? "0" : "") + a + '<span class="mbsc-timer-lbl">' + c + "</span>"
            }

            function s(a) {
                var d = [],
                    f, g = c(a);
                b(l).each(function(a, b) {
                    x[b] && (f = Math.max(Math.round(M / w[b].limit), 1), d.push(Math.round(g[b] / f) * f))
                });
                return d
            }

            function k(a) {
                P ? (f = K - new Date, 0 > f ? (f *= -1, p = !0) : p = !1, B = 0, G = !0) : (K !== h ? (G = !1, f = 1E3 * K, p = "countdown" != z.mode) : (f = 0, G = p = "countdown" != z.mode), a && (B = 0))
            }

            function j() {
                I ? (b(".mbsc-fr-w", u).addClass("mbsc-timer-running mbsc-timer-locked"), b(".mbsc-timer-btn-toggle-c > div",
                        u).text(z.stopText), a.buttons.start.icon && b(".mbsc-timer-btn-toggle-c > div", u).removeClass("mbsc-ic-" + a.buttons.start.icon), a.buttons.stop.icon && b(".mbsc-timer-btn-toggle-c > div", u).addClass("mbsc-ic-" + a.buttons.stop.icon), "stopwatch" == z.mode && (b(".mbsc-timer-btn-resetlap-c > div", u).text(z.lapText), a.buttons.reset.icon && b(".mbsc-timer-btn-resetlap-c > div", u).removeClass("mbsc-ic-" + a.buttons.reset.icon), a.buttons.lap.icon && b(".mbsc-timer-btn-resetlap-c > div", u).addClass("mbsc-ic-" + a.buttons.lap.icon))) :
                    (b(".mbsc-fr-w", u).removeClass("mbsc-timer-running"), b(".mbsc-timer-btn-toggle-c > div", u).text(z.startText), a.buttons.start.icon && b(".mbsc-timer-btn-toggle-c > div", u).addClass("mbsc-ic-" + a.buttons.start.icon), a.buttons.stop.icon && b(".mbsc-timer-btn-toggle-c > div", u).removeClass("mbsc-ic-" + a.buttons.stop.icon), "stopwatch" == z.mode && (b(".mbsc-timer-btn-resetlap-c > div", u).text(z.resetText), a.buttons.reset.icon && b(".mbsc-timer-btn-resetlap-c > div", u).addClass("mbsc-ic-" + a.buttons.reset.icon), a.buttons.lap.icon &&
                        b(".mbsc-timer-btn-resetlap-c > div", u).removeClass("mbsc-ic-" + a.buttons.lap.icon)))
            }
            var i, m, H, y, n, E, f, B, p, u, J, F = b.extend({}, a.settings),
                z = b.extend(a.settings, g, F),
                t = z.useShortLabels ? z.labelsShort : z.labels,
                F = ["toggle", "resetlap"],
                l = "years,months,days,hours,minutes,seconds,fract".split(","),
                w = {
                    years: {
                        index: 6,
                        until: 10,
                        limit: 31536E6,
                        label: t[0],
                        wheel: {}
                    },
                    months: {
                        index: 5,
                        until: 11,
                        limit: 2592E6,
                        label: t[1],
                        wheel: {}
                    },
                    days: {
                        index: 4,
                        until: 31,
                        limit: 864E5,
                        label: t[2],
                        wheel: {}
                    },
                    hours: {
                        index: 3,
                        until: 23,
                        limit: 36E5,
                        label: t[3],
                        wheel: {}
                    },
                    minutes: {
                        index: 2,
                        until: 59,
                        limit: 6E4,
                        label: t[4],
                        wheel: {}
                    },
                    seconds: {
                        index: 1,
                        until: 59,
                        limit: 1E3,
                        label: t[5],
                        wheel: {}
                    },
                    fract: {
                        index: 0,
                        until: 99,
                        limit: 10,
                        label: t[6],
                        prefix: ".",
                        wheel: {}
                    }
                },
                x = {},
                T = [],
                v = 0,
                I = !1,
                O = !0,
                G = !1,
                M = Math.max(10, 1E3 * z.step),
                R = z.maxWheel,
                S = "stopwatch" == z.mode || P,
                K = z.targetTime,
                P = K && K.getTime !== h,
                V = [
                    []
                ];
            a.start = function() {
                O && a.reset();
                if (!I && (k(), G || !(B >= f))) I = !0, O = !1, n = new Date, y = B, z.readonly = !0, a.setVal(s(p ? B : f - B), !0, !0, !1, 100), m = setInterval(function() {
                    B = new Date - n +
                        y;
                    a.setVal(s(p ? B : f - B), !0, !0, !1, Math.min(100, H - 10));
                    !G && B + H >= f && (clearInterval(m), setTimeout(function() {
                        a.stop();
                        B = f;
                        a.setVal(s(p ? B : 0), !0, !0, !1, 100);
                        a.trigger("onFinish", {
                            time: f
                        });
                        O = !0
                    }, f - B))
                }, H), j(), a.trigger("onStart")
            };
            a.stop = function() {
                I && (I = !1, clearInterval(m), B = new Date - n + y, j(), a.trigger("onStop", {
                    ellapsed: B
                }))
            };
            a.toggle = function() {
                I ? a.stop() : a.start()
            };
            a.reset = function() {
                a.stop();
                B = 0;
                T = [];
                v = 0;
                a.setVal(s(p ? 0 : f), !0, !0, !1, 100);
                a.settings.readonly = S;
                O = !0;
                S || b(".mbsc-fr-w", u).removeClass("mbsc-timer-locked");
                a.trigger("onReset")
            };
            a.lap = function() {
                I && (E = new Date - n + y, J = E - v, v = E, T.push(E), a.trigger("onLap", {
                    ellapsed: E,
                    lap: J,
                    laps: T
                }))
            };
            a.resetlap = function() {
                I && "stopwatch" == z.mode ? a.lap() : a.reset()
            };
            a.getTime = function() {
                return f
            };
            a.setTime = function(a) {
                K = a / 1E3;
                f = a
            };
            a.getElapsedTime = a.getEllapsedTime = function() {
                return I ? new Date - n + y : 0
            };
            a.setElapsedTime = a.setEllapsedTime = function(b, c) {
                O || (y = B = b, n = new Date, a.setVal(s(p ? B : f - B), !0, c, !1, 100))
            };
            k(!0);
            !R && !f && (R = "minutes");
            "inline" !== z.display && F.push("hide");
            R || b(l).each(function(a,
                b) {
                if (!R && f >= w[b].limit) return R = b, !1
            });
            b(l).each(function(a, b) {
                e(b)
            });
            H = Math.max(87, H);
            z.autostart && setTimeout(function() {
                a.start()
            }, 0);
            a.handlers.toggle = a.toggle;
            a.handlers.start = a.start;
            a.handlers.stop = a.stop;
            a.handlers.resetlap = a.resetlap;
            a.handlers.reset = a.reset;
            a.handlers.lap = a.lap;
            a.buttons.toggle = {
                parentClass: "mbsc-timer-btn-toggle-c",
                text: z.startText,
                handler: "toggle"
            };
            a.buttons.start = {
                text: z.startText,
                handler: "start"
            };
            a.buttons.stop = {
                text: z.stopText,
                handler: "stop"
            };
            a.buttons.reset = {
                text: z.resetText,
                handler: "reset"
            };
            a.buttons.lap = {
                text: z.lapText,
                handler: "lap"
            };
            a.buttons.resetlap = {
                parentClass: "mbsc-timer-btn-resetlap-c",
                text: z.resetText,
                handler: "resetlap"
            };
            a.buttons.hide = {
                parentClass: "mbsc-timer-btn-hide-c",
                text: z.hideText,
                handler: "cancel"
            };
            return {
                wheels: V,
                headerText: !1,
                readonly: S,
                buttons: F,
                mode: "countdown",
                compClass: "mbsc-timer",
                parseValue: function() {
                    return s(p ? 0 : f)
                },
                formatValue: function(a) {
                    var c = "",
                        d = 0;
                    b(l).each(function(b, f) {
                        "fract" != f && x[f] && (c += a[d] + ("seconds" == f && x.fract ? "." + a[d + 1] : "") +
                            " " + t[b] + " ", d++)
                    });
                    return c
                },
                validate: function(a) {
                    var c = a.values,
                        a = a.index,
                        d = 0;
                    O && a !== h && (K = 0, b(l).each(function(a, b) {
                        x[b] && (K += w[b].limit * c[d], d++)
                    }), K /= 1E3, k(!0))
                },
                onBeforeShow: function() {
                    z.showLabel = !0
                },
                onMarkupReady: function(a) {
                    u = b(a.target);
                    j();
                    S && b(".mbsc-fr-w", u).addClass("mbsc-timer-locked")
                },
                onPosition: function(a) {
                    b(".mbsc-fr-w", a.target).css("min-width", 0).css("min-width", b(".mbsc-fr-btn-cont", a.target)[0].offsetWidth)
                },
                onDestroy: function() {
                    clearInterval(m)
                }
            }
        }
    })();
    (function(h) {
        var e = m,
            b = e.$,
            g = e.presets.scroller,
            a = e.util.datetime,
            d = e.util.testTouch,
            c = {
                autoCorrect: !0,
                showSelector: !0,
                minRange: 1,
                rangeTap: !0,
                fromText: "Start",
                toText: "End"
            };
        e.presetShort("range");
        g.range = function(e) {
            function m(a, b) {
                a && (a.setFullYear(b.getFullYear()), a.setMonth(b.getMonth()), a.setDate(b.getDate()))
            }

            function s(c, d) {
                var g = !0;
                c && p && u && (u - p > v.maxRange - 1 && (x ? p = new Date(u - v.maxRange + 1) : u = new Date(+p + v.maxRange - 1)), u - p < v.minRange - 1 && (x ? p = new Date(u - v.minRange + 1) : u = new Date(+p + v.minRange - 1)));
                if (!p || !u) g = !1;
                if (d) {
                    var e,
                        j, h, l, k, o = 0,
                        n = O || !x ? " mbsc-cal-day-hl mbsc-cal-sel-start" : " mbsc-cal-sel-start",
                        s = O || x ? " mbsc-cal-day-hl mbsc-cal-sel-end" : " mbsc-cal-sel-end";
                    f = p ? a.formatDate(H, p, v) : "";
                    B = u ? a.formatDate(H, u, v) : "";
                    if (i && (b(".mbsc-range-btn-v-start", i).html(f || "&nbsp;"), b(".mbsc-range-btn-v-end", i).html(B || "&nbsp;"), e = p ? new Date(p) : null, h = u ? new Date(u) : null, !e && h && (e = new Date(h)), !h && e && (h = new Date(e)), k = x ? h : e, b(".mbsc-cal-table .mbsc-cal-day-sel .mbsc-cal-day-i", i).removeClass(G), b(".mbsc-cal-table .mbsc-cal-day-hl",
                            i).removeClass(R), b(".mbsc-cal-table .mbsc-cal-day-sel", i).removeClass("mbsc-cal-day-sel mbsc-cal-sel-start mbsc-cal-sel-end").removeAttr("aria-selected"), e && h)) {
                        j = e.setHours(0, 0, 0, 0);
                        for (l = h.setHours(0, 0, 0, 0); h >= e && 84 > o;) b('.mbsc-cal-day[data-full="' + k.getFullYear() + "-" + k.getMonth() + "-" + k.getDate() + '"]', i).addClass("mbsc-cal-day-sel" + (k.getTime() === j ? n : "") + (k.getTime() === l ? s : "")).attr("aria-selected", "true").find(".mbsc-cal-day-i ").addClass(G), k.setDate(k.getDate() + (x ? -1 : 1)), o++
                    }
                }
                return g
            }

            function k() {
                t &&
                    i && (b(".mbsc-range-btn-c", i).removeClass("mbsc-range-btn-sel").removeAttr("aria-checked").find(".mbsc-range-btn", i).removeClass(G), b(".mbsc-range-btn-c", i).eq(x).addClass("mbsc-range-btn-sel").attr("aria-checked", "true").find(".mbsc-range-btn").addClass(G))
            }
            var j, i, C, H, y, n, E, f, B, p, u, J, F, z, t, l = e._startDate,
                w = e._endDate,
                x = 0;
            y = new Date;
            var T = b.extend({}, e.settings),
                v = b.extend(e.settings, c, T),
                I = v.anchor,
                O = v.rangeTap,
                G = v.activeClass || "",
                M = "mbsc-fr-btn-d " + (v.disabledClass || ""),
                R = "mbsc-cal-day-hl",
                S = null ===
                v.defaultValue ? [] : v.defaultValue || [new Date(y.setHours(0, 0, 0, 0)), new Date(y.getFullYear(), y.getMonth(), y.getDate() + 6, 23, 59, 59, 999)];
            O && (v.tabs = !0);
            y = g.calbase.call(this, e);
            j = b.extend({}, y);
            H = e.format;
            J = "time" === v.controls.join("");
            t = 1 == v.controls.length && "calendar" == v.controls[0] ? v.showSelector : !0;
            v.startInput && (F = b(v.startInput).prop("readonly"), e.attachShow(b(v.startInput).prop("readonly", !0), function() {
                x = 0;
                v.anchor = I || b(v.startInput)
            }));
            v.endInput && (z = b(v.endInput).prop("readonly"), e.attachShow(b(v.endInput).prop("readonly", !0), function() {
                x = 1;
                v.anchor = I || b(v.endInput)
            }));
            e.setVal = function(b, c, d, g, i) {
                var k = b || [];
                if (k[0] === h || k[0] === null || k[0].getTime) {
                    E = true;
                    f = (p = k[0] || null) ? a.formatDate(H, p, v) : "";
                    x || (b = j.parseValue(f, e))
                }
                if (k[1] === h || k[1] === null || k[1].getTime) {
                    E = true;
                    B = (u = k[1] || null) ? a.formatDate(H, u, v) : "";
                    x && (b = j.parseValue(B, e))
                }
                if (!g) {
                    e._startDate = l = p;
                    e._endDate = w = u
                }
                e._setVal(b, c, d, g, i)
            };
            e.getVal = function(a) {
                return a ? [p, u] : e._hasValue ? [l, w] : null
            };
            e.getDayProps = function(a) {
                var b = p ? new Date(p.getFullYear(), p.getMonth(),
                        p.getDate()) : null,
                    c = u ? new Date(u.getFullYear(), u.getMonth(), u.getDate()) : null;
                return {
                    selected: b && c && a >= b && a <= u,
                    cssClass: ((O || !x) && b && b.getTime() === a.getTime() || (O || x) && c && c.getTime() === a.getTime() ? R : "") + (b && b.getTime() === a.getTime() ? " mbsc-cal-sel-start" : "") + (c && c.getTime() === a.getTime() ? " mbsc-cal-sel-end" : "")
                }
            };
            e.setActiveDate = function(a) {
                x = a == "start" ? 0 : 1;
                a = a == "start" ? p : u;
                if (e.isVisible()) {
                    k();
                    if (!O) {
                        b(".mbsc-cal-table .mbsc-cal-day-hl", i).removeClass(R);
                        a && b('.mbsc-cal-day[data-full="' + a.getFullYear() +
                            "-" + a.getMonth() + "-" + a.getDate() + '"]', i).addClass(R)
                    }
                    if (a) {
                        n = true;
                        e.setDate(a, false, 200, true)
                    }
                }
            };
            e.getValue = e.getVal;
            b.extend(y, {
                highlight: !1,
                outerMonthChange: !1,
                formatValue: function() {
                    return f + (v.endInput ? "" : B ? " ~ " + B : "")
                },
                parseValue: function(c) {
                    c = c ? c.split(" - ") : [];
                    v.defaultValue = S[1];
                    w = v.endInput ? b(v.endInput).val() ? a.parseDate(H, b(v.endInput).val(), v) : S[1] : c[1] ? a.parseDate(H, c[1], v) : S[1];
                    v.defaultValue = S[0];
                    l = v.startInput ? b(v.startInput).val() ? a.parseDate(H, b(v.startInput).val(), v) : S[0] : c[0] ?
                        a.parseDate(H, c[0], v) : S[0];
                    v.defaultValue = S[x];
                    f = l ? a.formatDate(H, l, v) : "";
                    B = w ? a.formatDate(H, w, v) : "";
                    e._startDate = l;
                    e._endDate = w;
                    return j.parseValue(x ? B : f, e)
                },
                onFill: function(a) {
                    a = a.change;
                    e._startDate = l = p;
                    e._endDate = w = u;
                    if (v.startInput) {
                        b(v.startInput).val(f);
                        a && b(v.startInput).trigger("change")
                    }
                    if (v.endInput) {
                        b(v.endInput).val(B);
                        a && b(v.endInput).trigger("change")
                    }
                },
                onBeforeClose: function(a) {
                    if (a.button === "set" && !s(true, true)) {
                        e.setActiveDate(x ? "start" : "end");
                        return false
                    }
                },
                onHide: function() {
                    j.onHide.call(e);
                    x = 0;
                    i = null;
                    v.anchor = I
                },
                onClear: function() {
                    O && (x = 0)
                },
                onBeforeShow: function() {
                    v.headerText = false;
                    p = l;
                    u = w;
                    if (v.counter) v.headerText = function() {
                        var a = p && u ? Math.max(1, Math.round(((new Date(u)).setHours(0, 0, 0, 0) - (new Date(p)).setHours(0, 0, 0, 0)) / 864E5) + 1) : 0;
                        return (a > 1 ? v.selectedPluralText || v.selectedText : v.selectedText).replace(/{count}/, a)
                    };
                    E = true
                },
                onMarkupReady: function(a) {
                    i = b(a.target);
                    if (p) {
                        n = true;
                        e.setDate(p, false, 0, true);
                        p = e.getDate(true)
                    }
                    if (u) {
                        n = true;
                        e.setDate(u, false, 0, true);
                        u = e.getDate(true)
                    }
                    if (x &&
                        u || !x && p) {
                        n = true;
                        e.setDate(x ? u : p, false, 0, true)
                    }
                    j.onMarkupReady.call(this, a);
                    i.addClass("mbsc-range");
                    if (t) {
                        a = '<div class="mbsc-range-btn-t" role="radiogroup"><div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + v.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' + (f || "&nbsp;") + '</div></div></div><div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' +
                            v.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (B || "&nbsp;") + "</div></div></div></div>";
                        b(".mbsc-cal-tabs", i).before(a);
                        k()
                    }
                    b(".mbsc-range-btn-c", i).on("touchstart click", function(a) {
                        if (d(a, this)) {
                            e.showMonthView();
                            e.setActiveDate(b(this).index() ? "end" : "start")
                        }
                    })
                },
                onDayChange: function(a) {
                    a.active = x ? "end" : "start";
                    C = true
                },
                onSetDate: function(a) {
                    var c = a.date,
                        d = e.order;
                    if (!n) {
                        d.h === h && c.setHours(x ? 23 : 0);
                        d.i === h && c.setMinutes(x ? 59 : 0);
                        d.s === h && c.setSeconds(x ? 59 : 0);
                        c.setMilliseconds(x ? 999 :
                            0);
                        if (!E || C) {
                            if (O && C) {
                                x == 1 && c < p && (x = 0);
                                x ? c.setHours(23, 59, 59, 999) : c.setHours(0, 0, 0, 0)
                            }
                            x ? u = new Date(c) : p = new Date(c);
                            if (J) {
                                m(p, c);
                                m(u, c)
                            }
                            O && C && !x && (u = null)
                        }
                    }
                    e._isValid = s(E || C || v.autoCorrect, !n);
                    a.active = x ? "end" : "start";
                    if (!n && O) {
                        C && (x = x ? 0 : 1);
                        k()
                    }
                    e.isVisible() && (e._isValid ? b(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).removeClass(M) : b(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).addClass(M));
                    n = E = C = false
                },
                onTabChange: function(a) {
                    a.tab != "calendar" && e.setDate(x ? u : p, false, 200, true);
                    s(true, true)
                },
                onDestroy: function() {
                    b(v.startInput).prop("readonly",
                        F);
                    b(v.endInput).prop("readonly", z)
                }
            });
            return y
        }
    })();
    (function() {
        var h = m,
            e = h.presets.scroller;
        e.number = e.measurement;
        h.presetShort("number")
    })();
    (function(h, e, b) {
        var g = m,
            a = g.$,
            d = a.extend,
            c = g.util.datetime,
            o = c.adjustedDate,
            r = g.presets.scroller,
            s = {
                labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(","),
                eventText: "event",
                eventsText: "events"
            };
        g.presetShort("eventcalendar");
        r.eventcalendar = function(e) {
            function j(b) {
                if (b) {
                    if (w[b]) return w[b];
                    var c = a('<div style="background-color:' + b + ';"></div>').appendTo("body"),
                        d = (h.getComputedStyle ? getComputedStyle(c[0]) : c[0].style).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","),
                        d = 130 < 0.299 * d[0] + 0.587 * d[1] + 0.114 * d[2] ? "#000" : "#fff";
                    c.remove();
                    return w[b] = d
                }
            }

            function i(a) {
                return a.sort(function(a, b) {
                    var c = a.d || a.start,
                        d = b.d || b.start,
                        c = !c.getTime ? 0 : a.start && a.end && a.start.toDateString() !== a.end.toDateString() ? 1 : c.getTime(),
                        d = !d.getTime ? 0 : b.start && b.end && b.start.toDateString() !== b.end.toDateString() ? 1 : d.getTime();
                    return c - d
                })
            }

            function m(b) {
                var c;
                c = a(".mbsc-cal-c",
                    E)[0].offsetHeight;
                var d = b[0].offsetHeight,
                    e = b[0].offsetWidth,
                    g = b.offset().top - a(".mbsc-cal-c", E).offset().top,
                    i = 2 > b.closest(".mbsc-cal-row").index();
                c = f.addClass("mbsc-cal-events-t").css({
                    top: i ? g + d : "0",
                    bottom: i ? "0" : c - g
                }).addClass("mbsc-cal-events-v").height();
                f.css(i ? "bottom" : "top", "auto").removeClass("mbsc-cal-events-t");
                J.css("max-height", c);
                u.refresh();
                u.scroll(0);
                i ? f.addClass("mbsc-cal-events-b") : f.removeClass("mbsc-cal-events-b");
                a(".mbsc-cal-events-arr", f).css("left", b.offset().left - f.offset().left +
                    e / 2)
            }

            function H(b, d) {
                var g = p[b];
                if (g) {
                    var h, l, o, n, s, r = '<ul class="mbsc-cal-event-list">';
                    B = d;
                    d.addClass(T).find(".mbsc-cal-day-i").addClass(I);
                    d.hasClass(v) && d.attr("data-hl", "true").removeClass(v);
                    i(g);
                    a.each(g, function(a, b) {
                        n = b.d || b.start;
                        s = b.start && b.end && b.start.toDateString() !== b.end.toDateString();
                        o = b.color;
                        j(o);
                        l = h = "";
                        n.getTime && (h = c.formatDate((s ? "MM d yy " : "") + x.timeFormat, n));
                        b.end && (l = c.formatDate((s ? "MM d yy " : "") + x.timeFormat, b.end));
                        var d = r,
                            f = '<li role="button" aria-label="' + b.text +
                            (h ? ", " + x.fromText + " " + h : "") + (l ? ", " + x.toText + " " + l : "") + '" class="mbsc-cal-event"><div class="mbsc-cal-event-color" style="' + (o ? "background:" + o + ";" : "") + '"></div><div class="mbsc-cal-event-text">' + (n.getTime && !s ? '<div class="mbsc-cal-event-time">' + c.formatDate(x.timeFormat, n) + "</div>" : "") + b.text + "</div>",
                            e;
                        if (b.start && b.end) {
                            e = x.labelsShort;
                            var g = Math.abs(b.end - b.start) / 1E3,
                                i = g / 60,
                                k = i / 60,
                                m = k / 24,
                                p = m / 365;
                            e = '<div class="mbsc-cal-event-dur">' + (45 > g && Math.round(g) + " " + e[5].toLowerCase() || 45 > i && Math.round(i) +
                                " " + e[4].toLowerCase() || 24 > k && Math.round(k) + " " + e[3].toLowerCase() || 30 > m && Math.round(m) + " " + e[2].toLowerCase() || 365 > m && Math.round(m / 30) + " " + e[1].toLowerCase() || Math.round(p) + " " + e[0].toLowerCase()) + "</div>"
                        } else e = "";
                        r = d + (f + e + "</li>")
                    });
                    r += "</ul>";
                    F.html(r);
                    e.trigger("onEventBubbleShow", {
                        target: B[0],
                        eventList: f[0]
                    });
                    m(B);
                    e.tap(a(".mbsc-cal-event", F), function(c) {
                        u.scrolled || e.trigger("onEventSelect", {
                            domEvent: c,
                            event: g[a(this).index()],
                            date: b
                        })
                    });
                    z = !0
                }
            }

            function y() {
                f && f.removeClass("mbsc-cal-events-v");
                B && (B.removeClass(T).find(".mbsc-cal-day-i").removeClass(I), B.attr("data-hl") && B.removeAttr("data-hl").addClass(v));
                z = !1
            }
            var n, E, f, B, p, u, J, F, z, t, l, w = {};
            t = d({}, e.settings);
            var x = d(e.settings, s, t),
                T = "mbsc-cal-day-sel mbsc-cal-day-ev",
                v = "mbsc-cal-day-hl",
                I = x.activeClass || "",
                O = x.showEventCount,
                G = 0,
                M = d(!0, [], x.data);
            t = r.calbase.call(this, e);
            n = d({}, t);
            a.each(M, function(a, c) {
                c._id === b && (c._id = G++)
            });
            e.onGenMonth = function(a, b) {
                p = e.prepareObj(M, a, b)
            };
            e.getDayProps = function(b) {
                var c = p[b] ? p[b] : !1,
                    d = c ? p[b].length +
                    " " + (1 < p[b].length ? x.eventsText : x.eventText) : 0,
                    f = c && c[0] && c[0].color,
                    e = O && d ? j(f) : "",
                    g = "",
                    i = "";
                if (c) {
                    for (b = 0; b < c.length; b++) c[b].icon && (g += '<span class="mbsc-ic mbsc-ic-' + c[b].icon + '"' + (c[b].text ? "" : c[b].color ? ' style="color:' + c[b].color + ';"' : "") + "></span>\n");
                    i = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                    for (b = 0; b < c.length; b++) i += '<div class="mbsc-cal-day-m-c"' + (c[b].color ? ' style="background:' + c[b].color + ';"' : "") + "></div>";
                    i += "</div></div>"
                }
                return {
                    marked: c,
                    selected: !1,
                    cssClass: c ?
                        "mbsc-cal-day-marked" : "",
                    ariaLabel: O ? d : "",
                    markup: O && d ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + a("<div>" + d + "</div>").text() + '"' + (f ? ' style="background:' + f + ";color:" + e + ';text-shadow:none;"' : "") + ">" + g + d + "</div></div>" : O && g ? '<div class="mbsc-cal-day-ic-c">' + g + "</div>" : c ? i : ""
                }
            };
            e.addEvent = function(c) {
                var f = [],
                    c = d(!0, [], a.isArray(c) ? c : [c]);
                a.each(c, function(a, c) {
                    c._id === b && (c._id = G++);
                    M.push(c);
                    f.push(c._id)
                });
                y();
                e.redraw();
                return f
            };
            e.removeEvent = function(b) {
                b = a.isArray(b) ?
                    b : [b];
                a.each(b, function(b, c) {
                    a.each(M, function(a, b) {
                        if (b._id === c) return M.splice(a, 1), !1
                    })
                });
                y();
                e.redraw()
            };
            e.getEvents = function(a) {
                var b;
                return a ? (a.setHours(0, 0, 0, 0), b = e.prepareObj(M, a.getFullYear(), a.getMonth()), b[a] ? i(b[a]) : []) : d(!0, [], M)
            };
            e.setEvents = function(c) {
                var f = [];
                M = d(!0, [], c);
                a.each(M, function(a, c) {
                    c._id === b && (c._id = G++);
                    f.push(c._id)
                });
                y();
                e.redraw();
                return f
            };
            d(t, {
                highlight: !1,
                outerMonthChange: !1,
                headerText: !1,
                buttons: "inline" !== x.display ? ["cancel"] : x.buttons,
                onMarkupReady: function(b) {
                    n.onMarkupReady.call(this,
                        b);
                    E = a(b.target);
                    O && a(".mbsc-cal", E).addClass("mbsc-cal-ev");
                    E.addClass("mbsc-cal-em");
                    f = a('<div class="mbsc-cal-events ' + (x.eventBubbleClass || "") + '"><div class="mbsc-cal-events-arr"></div><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div></div></div>').appendTo(a(".mbsc-cal-c", E));
                    J = a(".mbsc-cal-events-i", f);
                    F = a(".mbsc-cal-events-sc", f);
                    u = new g.classes.ScrollView(J[0]);
                    z = !1;
                    e.tap(J, function() {
                        u.scrolled || y()
                    })
                },
                onMonthChange: function() {
                    y()
                },
                onSelectShow: function() {
                    y()
                },
                onMonthLoaded: function() {
                    l &&
                        (H(l.d, a('.mbsc-cal-day-v[data-full="' + l.full + '"]:not(.mbsc-cal-day-diff)', E)), l = !1)
                },
                onDayChange: function(b) {
                    var c = o(b.date.getFullYear(), b.date.getMonth(), b.date.getDate()),
                        d = a(b.target);
                    y();
                    d.hasClass("mbsc-cal-day-ev") || setTimeout(function() {
                        e.changing ? l = {
                            d: c,
                            full: d.attr("data-full")
                        } : H(c, d)
                    }, 10);
                    return !1
                },
                onCalResize: function() {
                    z && m(B)
                }
            });
            return t
        }
    })(window, document);
    (function() {
        var h = m,
            e = h.$,
            b = h.presets.scroller,
            g = {
                min: 0,
                max: 100,
                defaultUnit: "km",
                units: "m,km,in,ft,yd,mi".split(",")
            },
            a = {
                mm: 0.001,
                cm: 0.01,
                dm: 0.1,
                m: 1,
                dam: 10,
                hm: 100,
                km: 1E3,
                "in": 0.0254,
                ft: 0.3048,
                yd: 0.9144,
                ch: 20.1168,
                fur: 201.168,
                mi: 1609.344,
                lea: 4828.032
            };
        h.presetShort("distance");
        b.distance = function(d) {
            var c = e.extend({}, g, d.settings);
            e.extend(d.settings, c, {
                sign: !1,
                convert: function(b, c, d) {
                    return b * a[c] / a[d]
                }
            });
            return b.measurement.call(this, d)
        }
    })();
    (function() {
        var h = m,
            e = h.$,
            b = h.presets.scroller,
            g = {
                min: 0,
                max: 100,
                defaultUnit: "N",
                units: ["N", "kp", "lbf", "pdl"]
            },
            a = {
                N: 1,
                kp: 9.80665,
                lbf: 4.448222,
                pdl: 0.138255
            };
        h.presetShort("force");
        b.force =
            function(d) {
                var c = e.extend({}, g, d.settings);
                e.extend(d.settings, c, {
                    sign: !1,
                    convert: function(b, c, d) {
                        return b * a[c] / a[d]
                    }
                });
                return b.measurement.call(this, d)
            }
    })();
    (function() {
        var h = m,
            e = h.$,
            b = h.presets.scroller,
            g = {
                min: 0,
                max: 1E3,
                defaultUnit: "kg",
                units: ["g", "kg", "oz", "lb"],
                unitNames: {
                    tlong: "t (long)",
                    tshort: "t (short)"
                }
            },
            a = {
                mg: 0.001,
                cg: 0.01,
                dg: 0.1,
                g: 1,
                dag: 10,
                hg: 100,
                kg: 1E3,
                t: 1E6,
                drc: 1.7718452,
                oz: 28.3495,
                lb: 453.59237,
                st: 6350.29318,
                qtr: 12700.58636,
                cwt: 50802.34544,
                tlong: 1016046.9088,
                tshort: 907184.74
            };
        h.presetShort("mass");
        b.mass = function(d) {
            var c = e.extend({}, g, d.settings);
            e.extend(d.settings, c, {
                sign: !1,
                convert: function(b, c, d) {
                    return b * a[c] / a[d]
                }
            });
            return b.measurement.call(this, d)
        }
    })();
    (function() {
        var h = m,
            e = h.$,
            b = h.presets.scroller,
            g = {
                min: 0,
                max: 100,
                defaultUnit: "kph",
                units: ["kph", "mph", "mps", "fps", "knot"],
                unitNames: {
                    kph: "km/h",
                    mph: "mi/h",
                    mps: "m/s",
                    fps: "ft/s",
                    knot: "knot"
                }
            },
            a = {
                kph: 1,
                mph: 1.60934,
                mps: 3.6,
                fps: 1.09728,
                knot: 1.852
            };
        h.presetShort("speed");
        b.speed = function(d) {
            var c = e.extend({}, g, d.settings);
            e.extend(d.settings,
                c, {
                    sign: !1,
                    convert: function(b, c, d) {
                        return b * a[c] / a[d]
                    }
                });
            return b.measurement.call(this, d)
        }
    })();
    (function() {
        var h = m,
            e = h.$,
            b = h.presets.scroller,
            g = {
                min: -20,
                max: 40,
                defaultUnit: "c",
                units: ["c", "k", "f", "r"],
                unitNames: {
                    c: "\u00b0C",
                    k: "K",
                    f: "\u00b0F",
                    r: "\u00b0R"
                }
            },
            a = {
                c2k: function(a) {
                    return a + 273.15
                },
                c2f: function(a) {
                    return 9 * a / 5 + 32
                },
                c2r: function(a) {
                    return 9 * (a + 273.15) / 5
                },
                k2c: function(a) {
                    return a - 273.15
                },
                k2f: function(a) {
                    return 9 * a / 5 - 459.67
                },
                k2r: function(a) {
                    return 9 * a / 5
                },
                f2c: function(a) {
                    return 5 * (a - 32) / 9
                },
                f2k: function(a) {
                    return 5 *
                        (a + 459.67) / 9
                },
                f2r: function(a) {
                    return a + 459.67
                },
                r2c: function(a) {
                    return 5 * (a - 491.67) / 9
                },
                r2k: function(a) {
                    return 5 * a / 9
                },
                r2f: function(a) {
                    return a - 459.67
                }
            };
        h.presetShort("temperature");
        b.temperature = function(d) {
            var c = e.extend({}, g, d.settings);
            e.extend(d.settings, c, {
                sign: !0,
                convert: function(b, c, d) {
                    return a[c + "2" + d](b)
                }
            });
            return b.measurement.call(this, d)
        }
    })();
    (function(h, e, b) {
        var g = m,
            a = g.$,
            d = a.extend,
            c = g.classes;
        c.MenuStrip = function(e, m) {
            function s(a) {
                clearTimeout(l);
                l = setTimeout(function() {
                        y("load" !== a.type)
                    },
                    200)
            }

            function k(c, d) {
                if (c.length) {
                    var f = c.offset().left,
                        e = c[0].offsetLeft,
                        g = c[0].offsetWidth,
                        h = E.offset().left;
                    n = c;
                    d === b && (d = !z);
                    w && d && (z ? c.attr("data-selected") ? i(c) : j(c) : (i(a(".mbsc-ms-item-sel", R)), j(c)));
                    "a" == v ? f < h ? T.scroll(-e, 200) : f + g > h + p && T.scroll(p - e - g, 200) : T.scroll(p / 2 - e - g / 2, 200);
                    d && G("onItemTap", {
                        target: c[0]
                    })
                }
            }

            function j(a) {
                a.addClass(x).attr("data-selected", "true").attr("aria-selected", "true")
            }

            function i(a) {
                a.removeClass(x).removeAttr("data-selected").removeAttr("aria-selected")
            }

            function C(b) {
                "object" !==
                typeof b && (b = R.children('[data-id="' + b + '"]'));
                return a(b)
            }

            function H() {
                G("onMarkupInit");
                R.children().each(function(b) {
                    var c, d = a(this),
                        e = w && "true" == d.attr("data-selected"),
                        g = "true" == d.attr("data-disabled"),
                        i = d.attr("data-icon");
                    0 === b && (f = d);
                    w && !z && e && (n = d);
                    1 !== d.children().length && a("<span></span>").append(d.contents()).appendTo(d);
                    c = d.children().eq(0);
                    i && (u = !0);
                    c.html() && (J = !0);
                    c.hasClass("mbsc-ms-item-i") || (b = a('<span class="mbsc-ms-item-i-t"><span class="mbsc-ms-item-i-c"></span></span>'), b.find(".mbsc-ms-item-i-c").append(c.contents()),
                        c.addClass("mbsc-ms-item-i" + (i ? " mbsc-ms-ic mbsc-ic mbsc-ic-" + i : "")).append(b), d.attr("data-role", "button").attr("aria-selected", e ? "true" : null).attr("aria-disabled", g ? "true" : null).addClass("mbsc-ms-item mbsc-btn-e " + (I.itemClass || "") + (e ? x : "") + (g ? " mbsc-btn-d " + (I.disabledClass || "") : "")), d.find(".mbsc-ms-item-i").append(M._processItem(a, 0.2)))
                });
                u && E.addClass("mbsc-ms-icons");
                J && E.addClass("mbsc-ms-txt")
            }

            function y(a) {
                var b = I.itemWidth,
                    c = I.layout;
                M.contWidth = p = E.width();
                a && t === p || (t = p, g.util.isNumeric(c) &&
                    (F = p ? p / c : b, F < b && (c = "liquid")), b && ("liquid" == c ? F = p ? p / Math.min(Math.floor(p / b), R.children().length) : b : "fixed" == c && (F = b)), F && R.children().css("width", F + "px"), R.contents().filter(function() {
                        return this.nodeType == 3 && !/\S/.test(this.nodeValue)
                    }).remove(), M.totalWidth = O = R.width(), d(T.settings, {
                        contSize: p,
                        maxSnapScroll: I.paging ? 1 : !1,
                        maxScroll: 0,
                        minScroll: O > p ? p - O : 0,
                        snap: I.paging ? p : I.snap ? F || ".mbsc-ms-item" : !1,
                        elastic: O > p ? F || p : !1
                    }), T.refresh())
            }
            var n, E, f, B, p, u, J, F, z, t, l, w, x, T, v, I, O, G, M = this,
                R = a(e);
            c.Base.call(this,
                e, m, !0);
            M._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1ace1710cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            M.navigate = function(a, b) {
                k(C(a), b)
            };
            M.next = function(a) {
                var b = n ? n.next() : f;
                b.length && (n = b, k(n, a))
            };
            M.prev = function(a) {
                var b = n ? n.prev() : f;
                b.length && (n = b, k(n, a))
            };
            M.select = function(b) {
                z || i(a(".mbsc-ms-item-sel", R));
                j(C(b))
            };
            M.deselect = function(a) {
                i(C(a))
            };
            M.enable = function(a) {
                C(a).removeClass("mbsc-btn-d").removeAttr("data-disabled").removeAttr("aria-disabled")
            };
            M.disable = function(a) {
                C(a).addClass("mbsc-btn-d").attr("data-disabled", "true").attr("aria-disabled", "true")
            };
            M.refresh = M.position = function() {
                R.height("");
                H();
                y();
                R.height(R.height())
            };
            M.init = function(c) {
                M._init(c);
                B = a("body" == I.context ? h : I.context);
                "tabs" == I.type ? (I.select = I.select || "single", I.variant = I.variant || "b") : "options" == I.type ? (I.select = I.select || "multiple", I.variant = I.variant || "a") : "menu" == I.type && (I.select = I.select || "off", I.variant = I.variant || "a");
                I.itemWidth && I.snap === b && (I.snap = !0);
                v =
                    I.variant;
                w = "off" != I.select;
                z = "multiple" == I.select;
                x = " mbsc-ms-item-sel " + (I.activeClass || "");
                E = a('<div class="mbsc-ms-c mbsc-ms-' + v + " mbsc-ms-" + I.display + " mbsc-" + I.theme + " " + (I.baseTheme ? " mbsc-" + I.baseTheme : "") + " " + (I.cssClass || "") + " " + (I.wrapperClass || "") + (I.rtl ? " mbsc-ms-rtl" : " mbsc-ms-ltr") + (I.itemWidth ? " mbsc-ms-hasw" : "") + ("body" == I.context ? "" : " mbsc-ms-ctx") + (w ? "" : " mbsc-ms-nosel") + '"><div class="mbsc-ms-sc"></div></div>').insertAfter(R);
                E.find(".mbsc-ms-sc").append(R);
                R.css("display", "").addClass("mbsc-ms " +
                    (I.groupClass || ""));
                H();
                G("onMarkupReady", {
                    target: E[0]
                });
                R.height(R.height());
                T = new g.classes.ScrollView(E[0], {
                    axis: "X",
                    contSize: 0,
                    maxScroll: 0,
                    maxSnapScroll: 1,
                    minScroll: 0,
                    snap: 1,
                    elastic: 1,
                    rtl: I.rtl,
                    mousewheel: I.mousewheel,
                    onBtnTap: function(b) {
                        k(a(b.target), true)
                    },
                    onGestureStart: function(a) {
                        G("onGestureStart", a)
                    },
                    onGestureEnd: function(a) {
                        G("onGestureEnd", a)
                    },
                    onMove: function(a) {
                        G("onMove", a)
                    },
                    onAnimationStart: function(a) {
                        G("onAnimationStart", a)
                    },
                    onAnimationEnd: function(a) {
                        G("onAnimationEnd", a)
                    }
                });
                y();
                E.find("img").on("load", s);
                B.on("orientationchange resize", s);
                G("onInit")
            };
            M.destroy = function() {
                B.off("orientationchange resize", s);
                R.height("").insertAfter(E).find(".mbsc-ms-item").width("");
                E.remove();
                T.destroy();
                M._destroy()
            };
            I = M.settings;
            G = M.trigger;
            M.init(m)
        };
        c.MenuStrip.prototype = {
            _class: "menustrip",
            _hasDef: !0,
            _hasTheme: !0,
            _defaults: {
                context: "body",
                type: "options",
                display: "inline",
                layout: "liquid"
            }
        };
        g.presetShort("menustrip", "MenuStrip")
    })(window, document);
    m.themes.menustrip["android-holo"] = {};
    m.themes.menustrip.wp = {};
    (function() {
        var h = m.$;
        m.themes.menustrip.material = {
            onInit: function() {
                m.themes.material.initRipple(h(this), ".mbsc-ms-item", "mbsc-btn-d", "mbsc-btn-nhl")
            },
            onMarkupInit: function() {
                h(".mbsc-ripple", this).remove()
            }
        }
    })();
    m.themes.menustrip.ios = {};
    m.themes.menustrip.bootstrap = {
        wrapperClass: "popover panel panel-default",
        groupClass: "btn-group",
        activeClass: "btn-primary",
        disabledClass: "disabled",
        itemClass: "btn btn-default"
    };
    (function() {
        var h = m,
            e = h.$,
            b = h.classes;
        b.Widget = function(g, a,
            d) {
            function c(a) {
                e(".dwcc", a).append(j._processItem(e, 0.7));
                !e(".mbsc-fr-c", a).hasClass("mbsc-wdg-c") && m.running && (e(".mbsc-fr-c", a).addClass("mbsc-wdg-c").append(k.show()), e(".mbsc-w-p", a).length || e(".mbsc-fr-c", a).addClass("mbsc-w-p"))
            }
            var h, r, s, k = e(g),
                j = this;
            b.Frame.call(this, g, a, !0);
            j._processItem = new Function("$, p", function() {
                var a = [5, 2],
                    b;
                a: {
                    b = a[0];
                    var c;
                    for (c = 0; 16 > c; ++c)
                        if (1 == b * c % 16) {
                            b = [c, a[1]];
                            break a
                        }
                    b = void 0
                }
                a = b[0];
                b = b[1];
                c = "";
                var d;
                for (d = 0; 1062 > d; ++d) c += "0123456789abcdef" [((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c121710ce1ace1710cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553" [d]) -
                    a * b) % 16 + 16) % 16];
                b = c;
                c = b.length;
                a = [];
                for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);
                b = "";
                c = a.length;
                for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));
                b=b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");
                return b
            }());
            j._generateContent = function() {
                return ""
            };
            j._markupReady = function(a) {
                "inline" != h.display && c(a)
            };
            j._markupInserted = function(a) {
                "inline" == h.display && c(a);
                a.trigger("mbsc-enhance", [{
                    theme: h.theme,
                    lang: h.lang
                }])
            };
            j._markupRemove = function() {
                k.hide();
                r ? r.prepend(k) : s.after(k)
            };
            j._processSettings = function() {
                h = j.settings;
                j.buttons.close = {
                    text: h.closeText,
                    handler: "cancel"
                };
                j.buttons.ok = {
                    text: h.okText,
                    handler: "set"
                };
                h.cssClass = (h.cssClass || "") + " mbsc-wdg";
                h.buttons = h.buttons || ("inline" == h.display ? [] : ["ok"]);
                !r && !s && (s = k.prev(), s.length || (r = k.parent()));
                k.hide()
            };
            d || j.init(a)
        };
        b.Widget.prototype = {
            _hasDef: !0,
            _hasTheme: !0,
            _hasContent: !0,
            _class: "widget",
            _defaults: e.extend({}, b.Frame.prototype._defaults, {
                okText: "OK"
            })
        };
        h.themes.widget = h.themes.frame;
        h.presetShort("widget", "Widget", !1)
    })();
    (function(h) {
        var e = m,
            b = e.$,
            g = {
                inputClass: "",
                values: 5,
                order: "desc",
                style: "icon",
                invalid: [],
                layout: "fixed",
                icon: {
                    filled: "star3",
                    empty: "star3"
                }
            };
        e.presetShort("rating");
        e.presets.scroller.rating = function(a) {
            var d = b.extend({}, a.settings),
                c = b.extend(a.settings, g, d),
                o = b(this),
                d = this.id + "_dummy",
                m = b('label[for="' + this.id + '"]').attr("for", d),
                s = c.label !== h ? c.label : m.length ? m.text() : o.attr("name"),
                k = c.defaultValue,
                m = [
                    []
                ],
                s = {
                    data: [],
                    label: s,
                    circular: !1
                },
                j = {},
                i = [],
                C, H = !1,
                y, n, E, f, B, p, u = "grade" === c.style ? "circle" : "icon";
            o.is("select") && (c.values = {}, b("option", o).each(function() {
                c.values[b(this).val()] =
                    b(this).text()
            }), b("#" + d).remove());
            if (b.isArray(c.values))
                for (y = 0; y < c.values.length; y++) E = +c.values[y], isNaN(E) && (E = y + 1, H = !0), i.push({
                    order: E,
                    key: c.values[y],
                    value: c.values[y]
                });
            else if (b.isPlainObject(c.values))
                for (n in y = 1, H = !0, c.values) E = +n, isNaN(E) && (E = y), i.push({
                    order: E,
                    key: n,
                    value: c.values[n]
                }), y++;
            else
                for (y = 1; y <= c.values; y++) i.push({
                    order: y,
                    key: y,
                    value: y
                });
            c.showText === h && H && (c.showText = !0);
            c.icon.empty === h && (c.icon.empty = c.icon.filled);
            i.sort(function(a, b) {
                return c.order == "desc" ? b.order -
                    a.order : a.order - b.order
            });
            p = "desc" == c.order ? i[0].order : i[i.length - 1].order;
            for (y = 0; y < i.length; y++) {
                B = i[y].order;
                E = i[y].key;
                f = i[y].value;
                H = "";
                for (n = 1; n < B + 1; n++) H += '<span class="mbsc-rating-' + u + ("circle" === u ? "" : " mbsc-ic mbsc-ic-" + c.icon.filled) + ' ">' + ("circle" == u ? n : " ") + "</span>";
                for (n = B + 1; n <= p; n++) H += '<span class="mbsc-rating-' + u + ("circle" === u ? " mbsc-rating-circle-unf" : " mbsc-ic mbsc-ic-" + (c.icon.empty ? c.icon.empty + " mbsc-rating-icon-unf" : "") + (c.icon.empty === c.icon.filled ? " mbsc-rating-icon-same" :
                    "")) + '"></span>';
                k === h && (k = E);
                H += c.showText ? '<span class="mbsc-rating-txt">' + f + "</span>" : "";
                s.data.push({
                    value: E,
                    display: H,
                    label: f
                });
                j[E] = f
            }
            o.is("select") && (C = b('<input type="text" id="' + d + '" value="' + j[o.val()] + '" class="' + c.inputClass + '" placeholder="' + (c.placeholder || "") + '" readonly />').insertBefore(o));
            m[0].push(s);
            C && a.attachShow(C);
            o.is("select") && o.hide().closest(".ui-field-contain").trigger("create");
            a.getVal = function(b) {
                b = a._hasValue ? a[b ? "_tempWheelArray" : "_wheelArray"][0] : null;
                return e.util.isNumeric(b) ?
                    +b : b
            };
            return {
                anchor: C,
                wheels: m,
                headerText: !1,
                compClass: "mbsc-rating",
                setOnTap: !0,
                formatValue: function(a) {
                    return j[a[0]]
                },
                parseValue: function(a) {
                    for (var b in j)
                        if (C && b == a || !C && j[b] == a) return [b];
                    return [k]
                },
                validate: function() {
                    return {
                        disabled: [c.invalid]
                    }
                },
                onFill: function(b) {
                    if (C) {
                        C.val(b.valueText);
                        o.val(a._tempWheelArray[0])
                    }
                },
                onDestroy: function() {
                    C && C.remove();
                    o.show()
                }
            }
        }
    })();
    (function() {
        var h = m,
            e = h.$,
            b = h.presets.scroller;
        h.presetShort("image");
        b.image = function(g) {
            g.settings.enhance && (g._processMarkup =
                function(a) {
                    var b = a.attr("data-icon");
                    a.children().each(function(a, b) {
                        b = e(b);
                        b.is("img") ? e('<div class="mbsc-img-c"></div>').insertAfter(b).append(b.addClass("mbsc-img")) : b.is("p") && b.addClass("mbsc-img-txt")
                    });
                    b && a.prepend('<div class="mbsc-ic mbsc-ic-' + b + '"></div');
                    a.html('<div class="mbsc-img-w">' + a.html() + "</div>");
                    return a.html()
                });
            return b.list.call(this, g)
        }
    })();
    (function(h) {
        var e = m,
            b = e.$,
            g = e.util,
            a = g.isString,
            d = {
                inputClass: "",
                invalid: [],
                rtl: !1,
                showInput: !0,
                groupLabel: "Groups",
                checkIcon: "checkmark",
                dataText: "text",
                dataValue: "value",
                dataGroup: "group",
                dataDisabled: "disabled"
            };
        e.presetShort("select");
        e.presets.scroller.select = function(c) {
            function e() {
                var a, c, d, g, i, j = 0,
                    l = 0,
                    k = {};
                J = {};
                f = {};
                u = [];
                E = [];
                V.length = 0;
                M ? b.each(w.data, function(b, e) {
                    g = e[w.dataText];
                    i = e[w.dataValue];
                    c = e[w.dataGroup];
                    d = {
                        value: i,
                        text: g,
                        index: b
                    };
                    J[i] = d;
                    u.push(d);
                    R && (k[c] === h ? (a = {
                        text: c,
                        value: l,
                        options: [],
                        index: l
                    }, f[l] = a, k[c] = l, E.push(a), l++) : a = f[k[c]], K && (d.index = a.options.length), d.group = k[c], a.options.push(d));
                    e[w.dataDisabled] &&
                        V.push(i)
                }) : R ? b("optgroup", t).each(function(a) {
                    f[a] = {
                        text: this.label,
                        value: a,
                        options: [],
                        index: a
                    };
                    E.push(f[a]);
                    b("option", this).each(function(b) {
                        d = {
                            value: this.value,
                            text: this.text,
                            index: K ? b : j++,
                            group: a
                        };
                        J[this.value] = d;
                        u.push(d);
                        f[a].options.push(d);
                        this.disabled && V.push(this.value)
                    })
                }) : b("option", t).each(function(a) {
                    d = {
                        value: this.value,
                        text: this.text,
                        index: a
                    };
                    J[this.value] = d;
                    u.push(d);
                    this.disabled && V.push(this.value)
                });
                u.length && (y = u[0].value);
                P && (u = [], j = 0, b.each(f, function(a, c) {
                    i = "__group" + a;
                    d = {
                        text: c.text,
                        value: i,
                        group: a,
                        index: j++,
                        cssClass: "mbsc-sel-gr"
                    };
                    J[i] = d;
                    u.push(d);
                    V.push(d.value);
                    b.each(c.options, function(a, b) {
                        b.index = j++;
                        u.push(b)
                    })
                }))
            }

            function m(a, b, c) {
                var d, f = [];
                for (d = 0; d < a.length; d++) f.push({
                    value: a[d].value,
                    display: a[d].text,
                    cssClass: a[d].cssClass
                });
                return {
                    circular: !1,
                    multiple: b,
                    data: f,
                    label: c
                }
            }

            function s() {
                return m(K ? f[n].options : u, v, G)
            }

            function k() {
                var a, b = [
                    []
                ];
                S && (a = m(E, !1, w.groupLabel), T ? b[0][B] = a : b[B] = [a]);
                a = s();
                T ? b[0][F] = a : b[F] = [a];
                return b
            }

            function j(c) {
                v && (c && a(c) &&
                    (c = c.split(",")), b.isArray(c) && (c = c[0]));
                p = c === h || null === c || "" === c || !J[c] ? y : c;
                S && (n = J[p] ? J[p].group : null)
            }

            function i() {
                var a = c.getVal();
                H.val(c._tempValue);
                t.val(a)
            }

            function C() {
                var a = {};
                a[F] = s();
                z = !0;
                c.changeWheel(a)
            }
            var H, y, n, E, f, B, p, u, J, F, z, t = b(this),
                l = b.extend({}, c.settings),
                w = b.extend(c.settings, d, l),
                x = w.readonly,
                l = w.layout || (/top|bottom/.test(w.display) ? "liquid" : ""),
                T = "liquid" == l,
                v = g.isNumeric(w.select) ? w.select : "multiple" == w.select || t.prop("multiple"),
                I = this.id + "_dummy",
                O = b('label[for="' + this.id +
                    '"]').attr("for", I),
                G = w.label !== h ? w.label : O.length ? O.text() : t.attr("name"),
                M = !!w.data,
                R = M ? !!w.group : b("optgroup", t).length,
                O = w.group,
                S = R && O && !1 !== O.groupWheel,
                K = R && O && S && !0 === O.clustered,
                P = R && (!O || !1 !== O.header && !K),
                O = t.val() || [],
                V = [];
            c.setVal = function(b, d, f, e, i) {
                v && (b && a(b) && (b = b.split(",")), c._tempSelected[F] = g.arrayToObject(b), e || (c._selected[F] = g.arrayToObject(b)), b = b ? b[0] : null);
                c._setVal(b, d, f, e, i)
            };
            c.getVal = function(a, b) {
                var d;
                d = v ? g.objectToArray(a ? c._tempSelected[F] : c._selected[F]) : (d = a ? c._tempWheelArray :
                    c._hasValue ? c._wheelArray : null) ? w.group && b ? d : d[F] : null;
                return d
            };
            c.refresh = function() {
                var a = {};
                e();
                w.wheels = k();
                j(p);
                a[F] = s();
                c._tempWheelArray[F] = p;
                S && (a[B] = m(E, !1, w.groupLabel), c._tempWheelArray[B] = n);
                c._isVisible && c.changeWheel(a, 0, !0)
            };
            w.invalid.length || (w.invalid = V);
            S ? (B = 0, F = 1) : (B = -1, F = 0);
            v && (t.prop("multiple", !0), c._selected[F] = {}, O && a(O) && (O = O.split(",")), c._selected[F] = g.arrayToObject(O));
            b("#" + I).remove();
            t.next().is("input.mbsc-control") ? H = t.off(".mbsc-form").next().removeAttr("tabindex") :
                (H = b('<input type="text" id="' + I + '" class="mbsc-control mbsc-control-ev ' + w.inputClass + '" readonly />'), w.showInput && H.insertBefore(t));
            c.attachShow(H.attr("placeholder", w.placeholder || ""));
            t.addClass("mbsc-sel-hdn").attr("tabindex", -1);
            e();
            j(t.val());
            return {
                layout: l,
                headerText: !1,
                anchor: H,
                compClass: "mbsc-sel" + (S ? " mbsc-sel-gr-whl" : ""),
                setOnTap: S ? [!1, !0] : !0,
                formatValue: function(a) {
                    var b, d = [];
                    if (v) {
                        for (b in c._tempSelected[F]) d.push(J[b] ? J[b].text : "");
                        return d.join(", ")
                    }
                    a = a[F];
                    return J[a] ? J[a].text :
                        ""
                },
                parseValue: function(a) {
                    j(a === h ? t.val() : a);
                    return S ? [n, p] : [p]
                },
                validate: function(a) {
                    var a = a.index,
                        b = [];
                    b[F] = w.invalid;
                    K && !z && a === h && C();
                    z = false;
                    return {
                        disabled: b
                    }
                },
                onRead: i,
                onFill: i,
                onBeforeShow: function() {
                    if (v && w.counter) w.headerText = function() {
                        var a = 0;
                        b.each(c._tempSelected[F], function() {
                            a++
                        });
                        return (a > 1 ? w.selectedPluralText || w.selectedText : w.selectedText).replace(/{count}/, a)
                    };
                    j(t.val());
                    c.settings.wheels = k();
                    z = true
                },
                onWheelGestureStart: function(a) {
                    if (a.index == B) w.readonly = [false, true]
                },
                onWheelAnimationEnd: function(a) {
                    var b =
                        c.getArrayVal(true);
                    if (a.index == B) {
                        w.readonly = x;
                        if (b[B] != n) {
                            n = b[B];
                            p = f[n].options[0].value;
                            b[F] = p;
                            K ? C() : c.setArrayVal(b, false, false, true, 200)
                        }
                    } else if (a.index == F && b[F] != p) {
                        p = b[F];
                        if (S && J[p].group != n) {
                            n = J[p].group;
                            b[B] = n;
                            c.setArrayVal(b, false, false, true, 200)
                        }
                    }
                },
                onDestroy: function() {
                    H.hasClass("mbsc-control") || H.remove();
                    t.removeClass("mbsc-sel-hdn").removeAttr("tabindex")
                }
            }
        }
    })();
    (function() {
        m.$.each(["date", "time", "datetime"], function(h, e) {
            m.presetShort(e)
        })
    })();
    (function() {
        var h = m,
            e = h.presets.scroller;
        e.treelist = e.list;
        h.presetShort("list");
        h.presetShort("treelist")
    })();
    (function(h, e, b) {
        var e = m,
            g = e.$,
            a = g.extend,
            d = e.util,
            c = d.datetime,
            o = c.adjustedDate,
            r = e.presets.scroller,
            s = {};
        e.presetShort("calendar");
        r.calendar = function(e) {
            function j(a) {
                return o(a.getFullYear(), a.getMonth(), a.getDate())
            }
            var i, m, H, y, n, E, f, B = {};
            f = a({}, e.settings);
            var p = a(e.settings, s, f),
                u = p.activeClass || "",
                J = "multiple" == p.select || 1 < p.select || "week" == p.selectType,
                F = d.isNumeric(p.select) ? p.select : Infinity,
                z = !!p.events,
                t = {};
            f = r.calbase.call(this,
                e);
            i = a({}, f);
            H = p.firstSelectDay === b ? p.firstDay : p.firstSelectDay;
            if (J && p.defaultValue && p.defaultValue.length)
                for (y = 0; y < p.defaultValue.length; y++) t[j(p.defaultValue[y])] = p.defaultValue[y];
            e.onGenMonth = function(a, b) {
                n = e.prepareObj(p.events || p.marked, a, b)
            };
            e.getDayProps = function(a) {
                var c, d = J ? t[a] !== b : b,
                    e = (a = n[a] ? n[a] : !1) && a[0] && a[0].text,
                    f = a && a[0] && a[0].color;
                if (z && e)
                    if (f)
                        if (B[f]) c = B[f];
                        else {
                            c = g('<div style="background-color:' + f + ';"></div>').appendTo("body");
                            var i = (h.getComputedStyle ? getComputedStyle(c[0]) :
                                    c[0].style).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","),
                                i = 130 < 0.299 * i[0] + 0.587 * i[1] + 0.114 * i[2] ? "#000" : "#fff";
                            c.remove();
                            c = B[f] = i
                        }
                else c = void 0;
                else c = "";
                var i = c,
                    j = "",
                    k = "";
                if (a) {
                    for (c = 0; c < a.length; c++) a[c].icon && (j += '<span class="mbsc-ic mbsc-ic-' + a[c].icon + '"' + (a[c].text ? "" : a[c].color ? ' style="color:' + a[c].color + ';"' : "") + "></span>\n");
                    k = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
                    for (c = 0; c < a.length; c++) k += '<div class="mbsc-cal-day-m-c"' + (a[c].color ? ' style="background:' +
                        a[c].color + ';"' : "") + "></div>";
                    k += "</div></div>"
                }
                return {
                    marked: a,
                    selected: d,
                    cssClass: a ? "mbsc-cal-day-marked" : "",
                    ariaLabel: z ? e : "",
                    markup: z && e ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + g("<div>" + e + "</div>").text() + '"' + (f ? ' style="background:' + f + ";color:" + i + ';text-shadow:none;"' : "") + ">" + j + e + "</div></div>" : z && j ? '<div class="mbsc-cal-day-ic-c">' + j + "</div>" : a ? k : ""
                }
            };
            e.addValue = function(a) {
                t[j(a)] = a;
                e.refresh()
            };
            e.removeValue = function(a) {
                delete t[j(a)];
                e.refresh()
            };
            e.setVal =
                function(a, b, c, d, f) {
                    if (J) {
                        var g = a;
                        t = {};
                        if (g && g.length)
                            for (y = 0; y < g.length; y++) t[j(g[y])] = g[y];
                        a = a ? a[0] : null
                    }
                    e._setVal(a, b, c, d, f);
                    e.refresh()
                };
            e.getVal = function(a) {
                return J ? d.objectToArray(t) : e.getDate(a)
            };
            a(f, {
                highlight: !J,
                outerMonthChange: !J,
                parseValue: function(a) {
                    var b, d;
                    if (J && a && "string" === typeof a) {
                        t = {};
                        a = a.split(",");
                        for (b = 0; b < a.length; b++) d = c.parseDate(e.format, a[b].replace(/^\s+|\s+$/g, ""), p), t[j(d)] = d;
                        a = a[0]
                    }
                    J && p.defaultValue && p.defaultValue.length && (p.defaultValue = p.defaultValue[0]);
                    return i.parseValue.call(this,
                        a)
                },
                formatValue: function(a) {
                    var b, d = [];
                    if (J) {
                        for (b in t) d.push(c.formatDate(e.format, t[b], p));
                        return d.join(", ")
                    }
                    return i.formatValue.call(this, a)
                },
                onClear: function() {
                    J && (t = {}, e.refresh())
                },
                onBeforeShow: function() {
                    if (p.setOnDayTap === b && (!p.buttons || !p.buttons.length)) p.setOnDayTap = !0;
                    p.setOnDayTap && (p.outerMonthChange = !1);
                    p.counter && J && (p.headerText = function() {
                        var a = 0,
                            b = p.selectType == "week" ? 7 : 1;
                        g.each(t, function() {
                            a++
                        });
                        a = Math.round(a / b);
                        return (a > 1 ? p.selectedPluralText || p.selectedText : p.selectedText).replace(/{count}/,
                            a)
                    })
                },
                onMarkupReady: function(b) {
                    i.onMarkupReady.call(this, b);
                    m = g(b.target);
                    J && (g(".mbsc-fr-hdr", m).attr("aria-live", "off"), E = a({}, t));
                    z && g(".mbsc-cal", m).addClass("mbsc-cal-ev")
                },
                onDayChange: function(a) {
                    var b = a.date,
                        c = j(b),
                        f = g(a.target),
                        a = a.selected;
                    if (J)
                        if ("week" == p.selectType) {
                            var i, h = c.getDay() - H,
                                h = 0 > h ? 7 + h : h;
                            "multiple" != p.select && (t = {});
                            for (f = 0; 7 > f; f++) i = o(c.getFullYear(), c.getMonth(), c.getDate() - h + f), a ? delete t[i] : d.objectToArray(t).length / 7 < F && (t[i] = i);
                            e.refresh()
                        } else f = g('.mbsc-cal .mbsc-cal-day[data-full="' +
                            f.attr("data-full") + '"]', m), a ? (f.removeClass("mbsc-cal-day-sel").removeAttr("aria-selected").find(".mbsc-cal-day-i").removeClass(u), delete t[c]) : d.objectToArray(t).length < F && (f.addClass("mbsc-cal-day-sel").attr("aria-selected", "true").find(".mbsc-cal-day-i").addClass(u), t[c] = c);
                    if (p.setOnDayTap && "multiple" != p.select && "inline" != p.display) return e.needsSlide = !1, e.setDate(b), e.select(), !1
                },
                onCancel: function() {
                    !e.live && J && (t = a({}, E))
                }
            });
            return f
        }
    })(window, document);
    (function(h) {
        var e = m,
            b = e.$,
            g = {
                wheelOrder: "hhiiss",
                useShortLabels: !1,
                min: 0,
                max: Infinity,
                labels: "Years,Months,Days,Hours,Minutes,Seconds".split(","),
                labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(",")
            };
        e.presetShort("timespan");
        e.presets.scroller.timespan = function(a) {
            function d(a) {
                var c = {};
                b(E).each(function(b, d) {
                    c[d] = u[d] ? Math.floor(a / f[d].limit) : 0;
                    a -= c[d] * f[d].limit
                });
                return c
            }

            function c(a) {
                var b = !1,
                    c = p[u[a] - 1] || 1,
                    d = f[a],
                    e = d.label,
                    g = d.wheel;
                g.data = [];
                g.label = d.label;
                n.match(RegExp(d.re + d.re, "i")) && (b = !0);
                if (a == J) g.min = i[a], g.max = C[a], g.data = function(a) {
                    return {
                        value: a,
                        display: o(a * c, b, e)
                    }
                }, g.getIndex = function(a) {
                    return Math.round(a / c)
                };
                else
                    for (s = 0; s <= d.until; s += c) g.data.push({
                        value: s,
                        display: o(s, b, e)
                    })
            }

            function o(a, b, c) {
                return (10 > a && b ? "0" : "") + a + '<span class="mbsc-ts-lbl">' + c + "</span>"
            }

            function m(a) {
                var c = 0;
                b.each(B, function(b, d) {
                    isNaN(+a[0]) || (c += f[d.v].limit * a[b])
                });
                return c
            }
            var s, k, j, i, C, H = b.extend({}, a.settings),
                y = b.extend(a.settings, g, H),
                n = y.wheelOrder,
                H = y.useShortLabels ? y.labelsShort : y.labels,
                E = "years,months,days,hours,minutes,seconds".split(","),
                f = {
                    years: {
                        ord: 0,
                        index: 6,
                        until: 10,
                        limit: 31536E6,
                        label: H[0],
                        re: "y",
                        wheel: {}
                    },
                    months: {
                        ord: 1,
                        index: 5,
                        until: 11,
                        limit: 2592E6,
                        label: H[1],
                        re: "m",
                        wheel: {}
                    },
                    days: {
                        ord: 2,
                        index: 4,
                        until: 31,
                        limit: 864E5,
                        label: H[2],
                        re: "d",
                        wheel: {}
                    },
                    hours: {
                        ord: 3,
                        index: 3,
                        until: 23,
                        limit: 36E5,
                        label: H[3],
                        re: "h",
                        wheel: {}
                    },
                    minutes: {
                        ord: 4,
                        index: 2,
                        until: 59,
                        limit: 6E4,
                        label: H[4],
                        re: "i",
                        wheel: {}
                    },
                    seconds: {
                        ord: 5,
                        index: 1,
                        until: 59,
                        limit: 1E3,
                        label: H[5],
                        re: "s",
                        wheel: {}
                    }
                },
                B = [],
                p = y.steps || [],
                u = {},
                J = "seconds",
                F = y.defaultValue || Math.max(y.min, Math.min(0, y.max)),
                z = [
                    []
                ];
            b(E).each(function(a, b) {
                k = n.search(RegExp(f[b].re, "i")); - 1 < k && (B.push({
                    o: k,
                    v: b
                }), f[b].index > f[J].index && (J = b))
            });
            B.sort(function(a, b) {
                return a.o > b.o ? 1 : -1
            });
            b.each(B, function(a, b) {
                u[b.v] = a + 1;
                z[0].push(f[b.v].wheel)
            });
            i = d(y.min);
            C = d(y.max);
            b.each(B, function(a, b) {
                c(b.v)
            });
            a.getVal = function(b, c) {
                return c ? a._getVal(b) : a._hasValue || b ? m(a.getArrayVal(b)) : null
            };
            return {
                showLabel: !0,
                wheels: z,
                compClass: "mbsc-ts",
                parseValue: function(a) {
                    var c = [],
                        g;
                    e.util.isNumeric(a) || !a ? (j = d(a || F), b.each(B, function(a, b) {
                            c.push(j[b.v])
                        })) :
                        b.each(B, function(b, d) {
                            g = RegExp("(\\d+)\\s?(" + y.labels[f[d.v].ord] + "|" + y.labelsShort[f[d.v].ord] + ")", "gi").exec(a);
                            c.push(g ? g[1] : 0)
                        });
                    b(c).each(function(a, b) {
                        c[a] = Math.floor(b / (p[a] || 1)) * (p[a] || 1)
                    });
                    return c
                },
                formatValue: function(a) {
                    var c = "";
                    b.each(B, function(b, d) {
                        c += +a[b] ? a[b] + " " + f[d.v].label + " " : ""
                    });
                    return c.replace(/\s+$/g, "")
                },
                validate: function(c) {
                    var e, g, j, k, n = c.values,
                        o = c.direction,
                        s = [],
                        p = !0,
                        y = !0;
                    b(E).each(function(c, t) {
                        if (u[t] !== h) {
                            j = u[t] - 1;
                            s[j] = [];
                            k = {};
                            if (t != J) {
                                if (p)
                                    for (g = C[t] + 1; g <= f[t].until; g++) k[g] = !0;
                                if (y)
                                    for (g = 0; g < i[t]; g++) k[g] = !0
                            }
                            n[j] = a.getValidValue(j, n[j], o, k);
                            e = d(m(n));
                            p = p && e[t] == C[t];
                            y = y && e[t] == i[t];
                            b.each(k, function(a) {
                                s[j].push(a)
                            })
                        }
                    });
                    return {
                        disabled: s
                    }
                }
            }
        }
    })();
    (function() {
        function h(a, b) {
            var c = r(b, "X", !0),
                i = r(b, "Y", !0),
                h = a.offset(),
                o = c - h.left,
                m = i - h.top,
                o = Math.max(o, a[0].offsetWidth - o),
                m = Math.max(m, a[0].offsetHeight - m),
                m = 2 * Math.sqrt(Math.pow(o, 2) + Math.pow(m, 2));
            e(g);
            g = d('<span class="mbsc-ripple"></span>').css({
                width: m,
                height: m,
                top: i - h.top - m / 2,
                left: c - h.left - m / 2
            }).appendTo(a);
            setTimeout(function() {
                    g.addClass("mbsc-ripple-scaled mbsc-ripple-visible")
                },
                10)
        }

        function e(a) {
            setTimeout(function() {
                a && (a.removeClass("mbsc-ripple-visible"), setTimeout(function() {
                    a.remove()
                }, 2E3))
            }, 100)
        }
        var b, g, a = m,
            d = a.$,
            c = a.util,
            o = c.testTouch,
            r = c.getCoord;
        a.themes.material = {
            addRipple: h,
            removeRipple: function() {
                e(g)
            },
            initRipple: function(a, c, j, i) {
                var m, H;
                a.off(".mbsc-ripple").on("touchstart.mbsc-ripple mousedown.mbsc-ripple", c, function(a) {
                    o(a, this) && (m = r(a, "X"), H = r(a, "Y"), b = d(this), !b.hasClass(j) && !b.hasClass(i) ? h(b, a) : b = null)
                }).on("touchmove.mbsc-ripple mousemove.mbsc-ripple",
                    c,
                    function(a) {
                        if (b && 9 < Math.abs(r(a, "X") - m) || 9 < Math.abs(r(a, "Y") - H)) e(g), b = null
                    }).on("touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple", c, function() {
                    b && (setTimeout(function() {
                        e(g)
                    }, 100), b = null)
                })
            }
        }
    })();
    (function() {
        var h = m.$;
        m.themes.frame["material-dark"] = {
            baseTheme: "material",
            showLabel: !1,
            headerText: !1,
            btnWidth: !1,
            selectedLineHeight: !0,
            selectedLineBorder: 2,
            dateOrder: "MMddyy",
            weekDays: "min",
            deleteIcon: "material-backspace",
            icon: {
                filled: "material-star",
                empty: "material-star-outline"
            },
            checkIcon: "material-check",
            btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down",
            btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up",
            btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left",
            btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right",
            onMarkupReady: function(e) {
                m.themes.material.initRipple(h(e.target), ".mbsc-fr-btn-e", "mbsc-fr-btn-d", "mbsc-fr-btn-nhl")
            },
            onEventBubbleShow: function(e) {
                var b = h(e.eventList),
                    e = 2 > h(e.target).closest(".mbsc-cal-row").index(),
                    g = h(".mbsc-cal-event-color",
                        b).eq(e ? 0 : -1).css("background-color");
                h(".mbsc-cal-events-arr", b).css("border-color", e ? "transparent transparent " + g + " transparent" : g + "transparent transparent transparent")
            }
        };
        m.themes.listview["material-dark"] = {
            baseTheme: "material",
            onItemActivate: function(e) {
                m.themes.material.addRipple(h(e.target), e.domEvent)
            },
            onItemDeactivate: function() {
                m.themes.material.removeRipple()
            },
            onSlideStart: function(e) {
                h(".mbsc-ripple", e).remove()
            },
            onSortStart: function(e) {
                h(".mbsc-ripple", e.target).remove()
            }
        };
        m.themes.menustrip["material-dark"] = {
            baseTheme: "material",
            onInit: function() {
                m.themes.material.initRipple(h(this), ".mbsc-ms-item", "mbsc-btn-d", "mbsc-btn-nhl")
            }
        };
        m.themes.form["material-dark"] = {
            baseTheme: "material",
            onControlActivate: function(e) {
                var b, g = h(e.target);
                if ("button" == g[0].type || "submit" == g[0].type) b = g;
                "segmented" == g.attr("data-role") && (b = g.next());
                g.hasClass("mbsc-stepper-control") && !g.hasClass("mbsc-step-disabled") && (b = g.find(".mbsc-segmented-content"));
                b && m.themes.material.addRipple(b, e.domEvent)
            },
            onControlDeactivate: function() {
                m.themes.material.removeRipple()
            }
        };
        m.themes.progress["material-dark"] = {
            baseTheme: "material"
        }
    })();
    (function() {
        var h = m.$;
        m.themes.frame["wp-light"] = {
            baseTheme: "wp",
            minWidth: 76,
            height: 76,
            dateDisplay: "mmMMddDDyy",
            headerText: !1,
            showLabel: !1,
            deleteIcon: "backspace4",
            icon: {
                filled: "star3",
                empty: "star"
            },
            btnWidth: !1,
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left2",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right2",
            btnPlusClass: "mbsc-ic mbsc-ic-plus",
            btnMinusClass: "mbsc-ic mbsc-ic-minus",
            onMarkupInserted: function(e, b) {
                var g, a, d, c = e.target,
                    o = b.settings;
                h(".mbsc-sc-whl", c).on("touchstart mousedown wheel mousewheel", function(b) {
                    var e;
                    if (!(e = "mousedown" === b.type && a)) e = h(this).attr("data-index"), e = h.isArray(o.readonly) ? o.readonly[e] : o.readonly;
                    e || (a = "touchstart" === b.type, g = !0, d = h(this).hasClass("mbsc-sc-whl-wpa"), h(".mbsc-sc-whl", c).removeClass("mbsc-sc-whl-wpa"), h(this).addClass("mbsc-sc-whl-wpa"))
                }).on("touchmove mousemove", function() {
                    g = !1
                }).on("touchend mouseup", function(b) {
                    g && d && h(b.target).closest(".mbsc-sc-itm").hasClass("mbsc-sc-itm-sel") && h(this).removeClass("mbsc-sc-whl-wpa");
                    "mouseup" === b.type && (a = !1);
                    g = !1
                })
            },
            onInit: function(e, b) {
                var g = b.buttons;
                g.set.icon = "checkmark";
                g.cancel.icon = "close";
                g.clear.icon = "close";
                g.ok && (g.ok.icon = "checkmark");
                g.close && (g.close.icon = "close");
                g.now && (g.now.icon = "loop2");
                g.toggle && (g.toggle.icon = "play3");
                g.start && (g.start.icon = "play3");
                g.stop && (g.stop.icon = "pause2");
                g.reset && (g.reset.icon = "stop2");
                g.lap && (g.lap.icon = "loop2");
                g.hide && (g.hide.icon = "close")
            }
        };
        m.themes.listview["wp-light"] = {
            baseTheme: "wp"
        };
        m.themes.menustrip["wp-light"] = {
            baseTheme: "wp"
        };
        m.themes.form["wp-light"] = {
            baseTheme: "wp"
        };
        m.themes.progress["wp-light"] = {
            baseTheme: "wp"
        }
    })();
    m.themes.frame["android-holo-light"] = {
        baseTheme: "android-holo",
        dateOrder: "Mddyy",
        rows: 5,
        minWidth: 76,
        height: 36,
        showLabel: !1,
        selectedLineHeight: !0,
        selectedLineBorder: 2,
        useShortLabels: !0,
        icon: {
            filled: "star3",
            empty: "star"
        },
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down6",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up6"
    };
    m.themes.listview["android-holo-light"] = {
        baseTheme: "android-holo"
    };
    m.themes.menustrip["android-holo-light"] = {
        baseTheme: "android-holo"
    };
    m.themes.form["android-holo-light"] = {
        baseTheme: "android-holo"
    };
    m.themes.progress["android-holo-light"] = {
        baseTheme: "android-holo"
    };
    m.themes.frame["mobiscroll-dark"] = {
        baseTheme: "mobiscroll",
        rows: 5,
        showLabel: !1,
        headerText: !1,
        btnWidth: !1,
        selectedLineHeight: !0,
        selectedLineBorder: 1,
        dateOrder: "MMddyy",
        weekDays: "min",
        checkIcon: "ion-ios7-checkmark-empty",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    };
    m.themes.listview["mobiscroll-dark"] = {
        baseTheme: "mobiscroll"
    };
    m.themes.menustrip["mobiscroll-dark"] = {
        baseTheme: "mobiscroll"
    };
    m.themes.form["mobiscroll-dark"] = {
        baseTheme: "mobiscroll"
    };
    m.themes.progress["mobiscroll-dark"] = {
        baseTheme: "mobiscroll"
    };
    Y = Y || {
        module: function() {
            return this
        },
        directive: function() {
            return this
        },
        animation: function() {
            return this
        }
    };
    m = m || {};
    m.ng = {};
    (function() {
        var h = m.$,
            e = m.instances;
        m.ng = {
            getDDO: function(b, e, a, d, c, o, r, s) {
                c = c || m.ng.read;
                d = d || m.ng.render;
                o = o || m.ng.parse;
                r = r || m.ng.format;
                return {
                    restrict: "A",
                    require: "?ngModel",
                    priority: Y.version && 1 == Y.version.major && 2 == Y.version.minor ? 1 : void 0,
                    link: function(k, j, i, C) {
                        j = h(j[0]);
                        m.ng.addWatch(b, k, C, j, i, e, d, c, o, r);
                        j.mobiscroll(Y.extend(m.ng.getOpt(k, i, e, C, s, j), a || {}));
                        i.mobiscrollInstance && b(i.mobiscrollInstance).assign(k, j.mobiscroll("getInst"))
                    }
                }
            },
            getOpt: function(b, e, a, d, c, h) {
                var r = b.$eval(e.mobiscrollOptions || "{}"),
                    h = c ? h.closest("[mbsc-form-opt]") : null;
                c && (r = Y.extend({}, m.ng.formOptions[h.attr("id")] || {}, r));
                d && Y.extend(r, b.$eval(e[a] || "{}"));
                return r
            },
            read: function(b, g, a, d, c, h, m) {
                var s = e[a.attr("id")];
                s && (a = m(a, s.getVal()), h ? h.$setViewValue(a) : c[g] && b(c[g]).assign(d, a))
            },
            render: function(b, g) {
                var a = e[b.attr("id")];
                a && !Y.equals(a.getVal(), g) && a.setVal(g, !0, !1)
            },
            parse: function(b) {
                b = h(b[0]).mobiscroll("getVal");
                return h.isArray(b) && !b.length ? null : b
            },
            format: function(b, e) {
                return h.isArray(e) && !e.length ? null : e
            },
            addWatch: function(b, e, a, d, c, h, r, s, k, j) {
                r = r || m.ng.render;
                s = s || m.ng.read;
                k = k || m.ng.parse;
                j =
                    j || m.ng.format;
                a && (a.$render = function() {}, a.$parsers.unshift(function(a) {
                    return k(d, a)
                }), a.$formatters.push(function(a) {
                    return j(d, a)
                }));
                e.$watch(function() {
                    return a ? a.$modelValue : b(c[h])(e)
                }, function(a) {
                    r(d, a)
                }, !0);
                d.on("change", function() {
                    e.$$phase ? s(b, h, d, e, c, a, j) : e.$apply(function() {
                        s(b, h, d, e, c, a, j)
                    })
                })
            },
            formOptions: {}
        };
        Y.module("mobiscroll-scroller", []).directive("mobiscrollScroller", ["$parse", function(b) {
            return m.ng.getDDO(b, "mobiscrollScroller")
        }])
    })();
    (function() {
        var h, e, b, g = m,
            a = g.themes,
            d = g.$;
        e = navigator.userAgent.match(/Android|iPhone|iPad|iPod|Windows|Windows Phone|MSIE/i);
        if (/Android/i.test(e)) {
            if (h = "android-holo", e = navigator.userAgent.match(/Android\s+([\d\.]+)/i)) e = e[0].replace("Android ", ""), h = 5 <= e.split(".")[0] ? "material" : 4 <= e.split(".")[0] ? "android-holo" : "android"
        } else if (/iPhone/i.test(e) || /iPad/i.test(e) || /iPod/i.test(e)) {
            if (h = "ios", e = navigator.userAgent.match(/OS\s+([\d\_]+)/i)) e = e[0].replace(/_/g, ".").replace("OS ", ""), h = "7" <= e ? "ios" : "ios-classic"
        } else if (/Windows/i.test(e) ||
            /MSIE/i.test(e) || /Windows Phone/i.test(e)) h = "wp";
        d.each(a, function(a, e) {
            d.each(e, function(a, c) {
                if (c.baseTheme == h) return g.autoTheme = a, b = !0, !1;
                a == h && (g.autoTheme = a)
            });
            if (b) return !1
        })
    })();
    (function() {
        Y.module("mobiscroll-progress", []).directive("mobiscrollProgress", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollProgress", {
                component: "Progress"
            }, void 0, void 0, void 0, void 0, !0)
        }])
    })();
    (function() {
        Y.module("mobiscroll-slider", []).directive("mobiscrollSlider", ["$parse", function(h) {
            return m.ng.getDDO(h,
                "mobiscrollSlider", {
                    component: "Slider"
                }, void 0, void 0, void 0, void 0, !0)
        }])
    })();
    (function() {
        function h(a, b, c) {
            a = g(g.parseHTML ? g.parseHTML(a) : a);
            1 == a.length && a.is("li") || g(a[0]).is("li") ? (a = a.clone(), g(a[0]).attr("ng-repeat-start", "item in " + b), g(a).filter("li").eq(-1).attr("ng-repeat-end", "").attr("mobiscroll-listview-item", c)) : (a = g("<li></li>").append(a.clone()), a.attr("ng-repeat", "item in " + b).attr("mobiscroll-listview-item", c));
            return a
        }

        function e(a) {
            var b = 0,
                c = 0;
            if (!a) return b;
            for (c; c < a.length; c++) b++,
                a[c].children && a[c].children.length && (b += e(a[c].children));
            return b
        }
        var b, g = m.$,
            a = +new Date,
            d = [],
            c = {},
            o = {};
        try {
            b = Y.module("ngAnimate")
        } catch (r) {}
        b && d.push("ngAnimate");
        Y.module("mobiscroll-listview", d).directive("mobiscrollListviewItem", ["$compile", "$timeout", function(a, b) {
            return {
                link: function(d, e, h) {
                    var o, m, n = g(e[0]),
                        r = n.parent("ul"),
                        e = h.mobiscrollListviewItem,
                        f = c[e],
                        h = n.parents(".mbsc-lv-cont").length;
                    f.nodesLeft--;
                    if (r && (h || 0 === f.nodesLeft)) h ? (o = r.children("li").not(".mbsc-lv-back").index(n), n.addClass("mbsc-lv-item").hide(),
                        r.hasClass("mbsc-lv-root") ? b(function() {
                            r.mobiscroll("add", null, n.show(), o, void 0, r)
                        }) : b(function() {
                            r.prepend(r.children(".mbsc-lv-back"));
                            m = r.parent("li");
                            g(f.rootNode).mobiscroll("add", null, n.show(), o, void 0, m.length ? m : r)
                        })) : d.$emit("mbscLvLastItemAdded", f.rootNode);
                    n.append(a('<div style="display:none;"><ul><li mobiscroll-listview-hitem="' + e + '" ng-repeat="item in item.children"></li></ul></div>')(d)[0])
                }
            }
        }]).directive("mobiscrollListviewHitem", ["$compile", "$timeout", function(a) {
            return {
                link: function(b,
                    c, d) {
                    var e = g(c[0]).parent(),
                        c = e.parent().hasClass("mbsc-lv-ng-init"),
                        d = d.mobiscrollListviewHitem;
                    1 >= e.children("li").not(".mbsc-lv-back").length && !c && e.parent().addClass("mbsc-lv-ng-init").parent().append(a(g("<ul></ul>").append(h(o[d], "item.children", d)))(b.$parent)[0]);
                    b.$on("$destroy", function() {
                        e && !e.children("li").length && (e = e.parent().parent().children("ul"), e.remove())
                    })
                }
            }
        }]).directive("mobiscrollListview", ["$compile", "$parse", "$timeout", function(b, d, j) {
            return {
                restrict: "A",
                require: "?ngModel",
                compile: function(d) {
                    var k, m = a++,
                        r = d.html().replace(/(mbsc-ng-)|(ms-ng-)/g, "ng-").trim();
                    return function(a, d, f, i) {
                        var p, u = g(d[0]);
                        i || f.mobiscrollData ? (p = a.$eval(f.mobiscrollListview || "{}"), d = f.mobiscrollData || f.ngModel) : (p = a.$eval(f.mobiscrollOptions || "{}"), d = f.mobiscrollListview);
                        i = e(a.$eval(d));
                        c[m] = {
                            rootNode: u,
                            allNodes: i,
                            nodesLeft: i
                        };
                        o[m] = r;
                        k = g("<div></div>").append(h(r, d, m));
                        u.empty().append(g(b(k)(a)[0]).contents());
                        a.$on("mbscLvLastItemAdded", function(b, c) {
                            u[0] == c[0] && j(function() {
                                u.mobiscroll().listview(p);
                                f.mobiscrollInstance && (a[f.mobiscrollInstance] = u.mobiscroll("getInst"))
                            })
                        });
                        0 === i && a.$emit("mbscLvLastItemAdded", u)
                    }
                }
            }
        }]);
        b && Y.module("mobiscroll-listview").animation(".mbsc-lv-item", function() {
            return {
                leave: function(a, b) {
                    var c = g(a[0]);
                    c.closest(".mbsc-lv-cont").find(".mbsc-lv-root").mobiscroll("remove", c, "right", b)
                }
            }
        })
    })();
    (function() {
        var h = +new Date,
            e = m.$;
        Y.module("mobiscroll-form", []).directive("mobiscrollForm", ["$parse", function(b) {
            return {
                restrict: "A",
                compile: function() {
                    return {
                        pre: function(b, a,
                            d) {
                            b = m.ng.getOpt(b, d, "mobiscrollForm", !0);
                            d = d.id;
                            d || (d = "mbsc-form-" + h++, a.attr("id", d));
                            a.attr("mbsc-form-opt", "");
                            m.ng.formOptions[d] = {
                                theme: b.theme,
                                lang: b.lang
                            }
                        },
                        post: function(g, a, d) {
                            var c = e(a[0]);
                            c.mobiscroll().form(m.ng.getOpt(g, d, "mobiscrollForm", !0));
                            d.mobiscrollInstance && b(d.mobiscrollInstance).assign(g, c.mobiscroll("getInst"));
                            g.$on("mbscFormRefresh", function() {
                                c.mobiscroll("refresh")
                            })
                        }
                    }
                }
            }
        }]).directive("mobiscrollSwitch", ["$parse", function(b) {
            return m.ng.getDDO(b, "mobiscrollSwitch", {
                    component: "Switch"
                },
                void 0, void 0, void 0, void 0, !0)
        }]).directive("mobiscrollStepper", ["$parse", function(b) {
            return m.ng.getDDO(b, "mobiscrollStepper", {
                component: "Stepper"
            })
        }])
    })();
    (function() {
        Y.module("mobiscroll-numpad", []).directive("mobiscrollNumpad", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollNumpad", {
                component: "Numpad"
            })
        }])
    })();
    (function() {
        Y.module("mobiscroll-color", []).directive("mobiscrollColor", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollColor", {
                preset: "color"
            })
        }])
    })();
    (function() {
        function h(a,
            b, c, e, h, m) {
            c = g(c[0]);
            m ? m.$setViewValue(c.mobiscroll("getEllapsedTime")) : a(h[b]).assign(e, c.mobiscroll("getEllapsedTime"))
        }

        function e(a, b) {
            var c = g(a[0]);
            c.mobiscroll("setEllapsedTime", b, !1).val(c.mobiscroll("getInst")._value)
        }

        function b(a) {
            return g(a[0]).mobiscroll("getEllapsedTime")
        }
        var g = m.$;
        Y.module("mobiscroll-timer", []).directive("mobiscrollTimer", ["$parse", function(a) {
            return m.ng.getDDO(a, "mobiscrollTimer", {
                preset: "timer"
            }, e, h, b)
        }])
    })();
    (function() {
        Y.module("mobiscroll-range", []).directive("mobiscrollRange", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollRange", {
                preset: "range"
            })
        }])
    })();
    (function() {
        Y.module("mobiscroll-number", []).directive("mobiscrollNumber", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollNumber", {
                preset: "number"
            })
        }])
    })();
    (function() {
        var h = m.$;
        Y.module("mobiscroll-eventcalendar", []).directive("mobiscrollEventcalendar", ["$parse", function(e) {
            return {
                restrict: "A",
                link: function(b, g, a) {
                    var d = h(g[0]).mobiscroll(Y.extend({}, b.$eval(a.mobiscrollEventcalendar || "{}"), {
                        preset: "eventcalendar",
                        data: []
                    })).mobiscroll("getInst");
                    a.mobiscrollInstance && e(a.mobiscrollInstance).assign(b, d);
                    b.$watch(function() {
                        return e(a.mobiscrollData)(b)
                    }, function(a) {
                        void 0 !== a && !Y.equals(d.getEvents(), a) && d.setEvents(a)
                    }, !0)
                }
            }
        }])
    })();
    (function() {
        Y.module("mobiscroll-measurement", []).directive("mobiscrollTemperature", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollTemperature", {
                preset: "temperature"
            })
        }]).directive("mobiscrollSpeed", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollSpeed", {
                preset: "speed"
            })
        }]).directive("mobiscrollMass", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollMass", {
                preset: "mass"
            })
        }]).directive("mobiscrollForce", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollForce", {
                preset: "force"
            })
        }]).directive("mobiscrollDistance", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollDistance", {
                preset: "distance"
            })
        }])
    })();
    (function() {
        var h = m.$,
            e = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"];
        Y.module("mobiscroll-menustrip", []).directive("mobiscrollRepeatRender", function() {
            return function(b) {
                b.$emit("mbscRepeatRender")
            }
        }).directive("mobiscrollMenustrip", ["$parse", "$timeout", function(b, g) {
            var a = m.ng.getDDO(b, "mobiscrollMenustrip", {
                component: "MenuStrip"
            }, function() {}, function() {});
            a.compile = function(a) {
                var c, m, a = h(a[0]);
                a.find("li").each(function() {
                    for (m = 0; m < e.length; m++)
                        if (h(this).attr(e[m])) return c = !0, !1
                });
                c && a.children().attr("mobiscroll-repeat-render", "");
                return function(a, d, e) {
                    var j, i = h(d[0]),
                        m = a.$eval(e.mobiscrollMenustrip || "{}");
                    c ? a.$on("mbscRepeatRender", function() {
                        clearTimeout(j);
                        j = setTimeout(function() {
                            i.mobiscroll().menustrip(m);
                            if (e.mobiscrollInstance) {
                                var c =
                                    b(e.mobiscrollInstance).assign;
                                c(a, i.mobiscroll("getInst"))
                            }
                        }, 1)
                    }) : i.children().length && g(function() {
                        i.mobiscroll().menustrip(m);
                        if (e.mobiscrollInstance) {
                            var c = b(e.mobiscrollInstance).assign;
                            c(a, i.mobiscroll("getInst"))
                        }
                    })
                }
            };
            return a
        }])
    })();
    (function() {
        Y.module("mobiscroll-widget", []).directive("mobiscrollWidget", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollWidget", {
                component: "Widget"
            })
        }])
    })();
    (function() {
        Y.module("mobiscroll-rating", []).directive("mobiscrollRating", ["$parse", function(h) {
            return m.ng.getDDO(h,
                "mobiscrollRating", {
                    preset: "rating"
                })
        }])
    })();
    (function() {
        var h = m.$,
            e = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"];
        Y.module("mobiscroll-image", []).directive("mobiscrollRepeatRender", function() {
            return function(b) {
                b.$emit("mbscRepeatRender")
            }
        }).directive("mobiscrollImage", ["$parse", function(b) {
            var g = m.ng.getDDO(b, "mobiscrollImage", {
                preset: "image"
            });
            g.link = void 0;
            g.compile = function(a) {
                var d, a = h(a[0]),
                    c;
                a.find("li").each(function() {
                    for (c = 0; c < e.length; c++)
                        if (h(this).attr(e[c])) return d = !0, !1
                });
                d && a.children().attr("mobiscroll-repeat-render", "");
                return function(a, c, e, g) {
                    var j, i = h(c[0]),
                        C = m.ng.getOpt(a, e, "mobiscrollImage", g);
                    m.ng.addWatch(b, a, g, i, e, "mobiscrollImage");
                    d ? a.$on("mbscRepeatRender", function() {
                        clearTimeout(j);
                        j = setTimeout(function() {
                            i.mobiscroll().image(C);
                            e.mobiscrollInstance && b(e.mobiscrollInstance).assign(a, i.mobiscroll("getInst"))
                        }, 1)
                    }) : i.children().length && (i.mobiscroll().image(C), e.mobiscrollInstance && b(e.mobiscrollInstance).assign(a, i.mobiscroll("getInst")))
                }
            };
            return g
        }])
    })();
    (function() {
        var h = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"],
            e = m.$;
        Y.module("mobiscroll-select", []).directive("mobiscrollSelectOption", function() {
            return {
                link: function(b, g, a) {
                    var d = e(g[0]).closest("select");
                    b.$watch(a.ngValue, function() {
                        b.$emit("mbscSelectRefresh", d)
                    });
                    b.$on("$destroy", function() {
                        b.$emit("mbscSelectRefresh", d)
                    })
                }
            }
        }).directive("mobiscrollSelect", ["$parse", function(b) {
            var g = m.ng.getDDO(b, "mobiscrollSelect", {
                preset: "select"
            });
            g.link = void 0;
            g.compile = function(a) {
                var d,
                    c;
                e(a[0]).find("option").each(function() {
                    for (c = 0; c < h.length; c++)
                        if (e(this).attr(h[c])) return e(this).attr("mobiscroll-select-option", ""), d = !0, !1
                });
                return function(a, c, g, h) {
                    var j = m.ng.getOpt(a, g, "mobiscrollSelect", h),
                        i = e(c[0]),
                        C;
                    g.mobiscrollData && (Y.extend(j, {
                        data: a.$eval(g.mobiscrollData) || []
                    }), a.$watchCollection(g.mobiscrollData, function() {
                        var b = i.mobiscroll("getInst"),
                            c = a.$eval(g.mobiscrollData);
                        Y.equals(b.settings.data, c) || (b.settings.data = c, b.refresh())
                    }));
                    m.ng.addWatch(b, a, h, i, g, "mobiscrollSelect");
                    d ? a.$on("mbscSelectRefresh", function(c, d) {
                        if (i[0] == d[0]) {
                            clearTimeout(C);
                            C = setTimeout(function() {
                                i.mobiscroll().select(j);
                                m.ng.render(i, h ? h.$modelValue : b(g.mobiscrollSelect)(a));
                                g.mobiscrollInstance && b(g.mobiscrollInstance).assign(a, i.mobiscroll("getInst"))
                            }, 10)
                        }
                    }) : (i.mobiscroll().select(j), g.mobiscrollInstance && b(g.mobiscrollInstance).assign(a, i.mobiscroll("getInst")))
                }
            };
            return g
        }])
    })();
    (function() {
        Y.module("mobiscroll-datetime", []).directive("mobiscrollDatetime", ["$parse", function(h) {
            return m.ng.getDDO(h,
                "mobiscrollDatetime", {
                    preset: "datetime"
                })
        }]).directive("mobiscrollDate", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollDate", {
                preset: "date"
            })
        }]).directive("mobiscrollTime", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollTime", {
                preset: "time"
            })
        }])
    })();
    (function() {
        var h = m.$,
            e = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"];
        Y.module("mobiscroll-list", []).directive("mobiscrollRepeatRender", function() {
            return function(b) {
                b.$emit("mbscRepeatRender")
            }
        }).directive("mobiscrollList", ["$parse", function(b) {
            var g = m.ng.getDDO(b, "mobiscrollList", {
                preset: "list"
            });
            g.link = void 0;
            g.compile = function(a) {
                var d, a = h(a[0]),
                    c;
                a.find("li").each(function() {
                    for (c = 0; c < e.length; c++)
                        if (h(this).attr(e[c])) return d = !0, !1
                });
                d && a.children().attr("mobiscroll-repeat-render", "");
                return function(a, c, e, g) {
                    var j, i = h(c[0]),
                        C = m.ng.getOpt(a, e, "mobiscrollList", g);
                    m.ng.addWatch(b, a, g, i, e, "mobiscrollList");
                    d ? a.$on("mbscRepeatRender", function() {
                        clearTimeout(j);
                        j = setTimeout(function() {
                            i.mobiscroll().treelist(C);
                            e.mobiscrollInstance &&
                                b(e.mobiscrollInstance).assign(a, i.mobiscroll("getInst"))
                        }, 1)
                    }) : i.children().length && (i.mobiscroll().treelist(C), e.mobiscrollInstance && b(e.mobiscrollInstance).assign(a, i.mobiscroll("getInst")))
                }
            };
            return g
        }])
    })();
    (function() {
        Y.module("mobiscroll-calendar", []).directive("mobiscrollCalendar", ["$parse", function(h) {
            return m.ng.getDDO(h, "mobiscrollCalendar", {
                preset: "calendar"
            })
        }])
    })();
    (function() {
        Y.module("mobiscroll-timespan", []).directive("mobiscrollTimespan", ["$parse", function(h) {
            return m.ng.getDDO(h,
                "mobiscrollTimespan", {
                    preset: "timespan"
                })
        }])
    })();
    return m
});