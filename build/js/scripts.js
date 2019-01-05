"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (e, t) {
  "use strict";

  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = {
    type: !0,
    src: !0,
    noModule: !0
  };

  function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");
    if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }
    t.head.appendChild(o).parentNode.removeChild(o);
  }

  function x(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? l[c.call(e)] || "object" : _typeof(e);
  }

  var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  w.fn = w.prototype = {
    jquery: "3.3.1",
    constructor: w,
    length: 0,
    toArray: function toArray() {
      return o.call(this);
    },
    get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return w.each(this, e);
    },
    map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, w.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e) {
      m(e);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];
      if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }
      return a.apply([], s);
    },
    guid: 1,
    support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });

  function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);
    return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = {
      ID: new RegExp("^#(" + R + ")"),
      CLASS: new RegExp("^\\.(" + R + ")"),
      TAG: new RegExp("^(" + R + "|[*])"),
      ATTR: new RegExp("^" + I),
      PSEUDO: new RegExp("^" + W),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + P + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

      if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;
            if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
          if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }

        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;

            while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }

            v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }
          if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }

      return u(e.replace(B, "$1"), t, r, i);
    }

    function ae() {
      var e = [];

      function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }

      return t;
    }

    function se(e) {
      return e[b] = !0, e;
    }

    function ue(e) {
      var t = d.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function le(e, t) {
      var n = e.split("|"),
          i = n.length;

      while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }

    function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }

    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }

    function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;

          while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;
      return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = d.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
        if (i === o) return ce(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}
      return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;

      if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }

        while (i--) {
          e.splice(r[i], 1);
        }
      }

      return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }

      return n;
    }, (r = oe.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: V,
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
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = E[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;

            if (y) {
              if (o) {
                while (g) {
                  p = t;

                  while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];

                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];
                    break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }

              return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;

            while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));
          return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }),
        contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }),
        lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;

            do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === h;
        },
        focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: de(!1),
        disabled: de(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !r.pseudos.empty(e);
        },
        header: function header(e) {
          return Y.test(e.nodeName);
        },
        input: function input(e) {
          return G.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: he(function () {
          return [0];
        }),
        last: he(function (e, t) {
          return [t - 1];
        }),
        eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = r.pseudos.eq;

    for (t in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      r.pseudos[t] = fe(t);
    }

    for (t in {
      submit: !0,
      reset: !0
    }) {
      r.pseudos[t] = pe(t);
    }

    function ye() {}

    ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, u = [], l = r.preFilter;

      while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(B, " ")
        }), s = s.slice(n.length));

        for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
            value: n,
            type: a,
            matches: i
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };

    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;
      return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }

        return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];

        if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
            if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }

        return !1;
      };
    }

    function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }

      return n;
    }

    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;

        if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;

          while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;

              while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }

              i(null, v = [], l, u);
            }

            c = v.length;

            while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }

    function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
        return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }

            return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }

          p.push(n);
        }
      }

      return xe(p);
    }

    function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;

        for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);

            while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);
                break;
              }
            }

            c && (T = E);
          }

          n && ((f = !y && f) && v--, _o && x.push(f));
        }

        if (v += m, n && m !== v) {
          h = 0;

          while (y = t[h++]) {
            y(x, b, a, s);
          }

          if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }
            b = we(b);
          }

          L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }

        return c && (T = E, l = w), x;
      };

      return n ? se(o) : o;
    }

    return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];

      if (!o) {
        t || (t = a(e)), n = t.length;

        while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }

        (o = S(e, Ee(i, r))).selector = e;
      }

      return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);

      if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
          p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }

        o = V.needsContext.test(e) ? 0 : u.length;

        while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;

          if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
            break;
          }
        }
      }

      return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);

  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;

  var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      D = w.expr.match.needsContext;

  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }

  w.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }

      return r > 1 ? w.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }
        return this;
      }

      return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  w.fn.extend({
    has: function has(e) {
      var t = w(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);
      if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  w.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return k(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    }
  }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });
  var M = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    var t = {};
    return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);

    var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();

        while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }

      e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = {
      add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      },
      remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;

          while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      },
      empty: function empty() {
        return o && (o = []), this;
      },
      disable: function disable() {
        return i = a = [], o = n = "", this;
      },
      disabled: function disabled() {
        return !o;
      },
      lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      },
      locked: function locked() {
        return !!i;
      },
      fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      },
      fire: function fire() {
        return l.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!r;
      }
    };

    return l;
  };

  function I(e) {
    return e;
  }

  function W(e) {
    throw e;
  }

  function $(e, t, n, r) {
    var i;

    try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  w.extend({
    Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = {
        state: function state() {
          return r;
        },
        always: function always() {
          return o.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return i.then(null, e);
        },
        pipe: function pipe() {
          var e = arguments;
          return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];
              o[r[1]](function () {
                var e = i && i.apply(this, arguments);
                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        then: function then(t, r, i) {
          var o = 0;

          function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;

                if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  l = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };

              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }

          return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        }
      },
          o = {};
      return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];
        i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };

      if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();

      while (n--) {
        $(i[n], s(n), a.reject);
      }

      return a.promise();
    }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var F = w.Deferred();
  w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    }
  }), w.ready.then = F.then;

  function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }

  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));

  var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;

    if ("object" === x(n)) {
      i = !0;

      for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }

    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;

  function V(e, t) {
    return t.toUpperCase();
  }

  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }

  var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Q() {
    this.expando = w.expando + Q.uid++;
  }

  Q.uid = 1, Q.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !w.isEmptyObject(t);
    }
  };
  var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;

  function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }

  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}

      K.set(e, t, n);
    } else n = void 0;
    return n;
  }

  w.extend({
    hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function data(e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      K.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      J.remove(e, t);
    }
  }), w.fn.extend({
    data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;

          while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }

          J.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(e) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;

        if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;
          if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    }
  }), w.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return J.get(e, n) || J.access(e, n, {
        empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        })
      });
    }
  }), w.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);
        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    i = n.apply(e, r || []);

    for (o in t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, w.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var le = {};

  function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }

  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }

    for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }

    return e;
  }

  w.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

  function ye(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }

  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }

  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  !function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();
  var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
    return !0;
  }

  function ke() {
    return !1;
  }

  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }

  function De(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      "string" != typeof n && (r = r || n, n = void 0);

      for (s in t) {
        De(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }

  w.event = {
    global: {},
    add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);

      if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && w.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);

      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }

        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};

      for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }

      if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;

        while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;

          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        },
        set: function set(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        },
        _default: function _default(e) {
          return N(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = {
    constructor: w.Event,
    isDefaultPrevented: ke,
    isPropagationStopped: ke,
    isImmediatePropagationStopped: ke,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, w.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, w.event.addProp), w.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    w.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), w.fn.extend({
    on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }

  function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};

        for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }

      K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }

  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);
    if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);
      v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });

    if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }

      if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }

    return e;
  }

  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  w.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }
      if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);
      return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }
            n[J.expando] = void 0;
          }

          n[K.expando] && (n[K.expando] = void 0);
        }
      }
    }
  }), w.fn.extend({
    detach: function detach(e) {
      return Ie(this, e, !0);
    },
    remove: function remove(e) {
      return Ie(this, e);
    },
    text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    },
    html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = [];
      return Re(this, arguments, function (t) {
        var n = this.parentNode;
        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), w.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }

      return this.pushStack(r);
    };
  });

  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");

  !function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }

    function n(e) {
      return Math.round(parseFloat(e));
    }

    var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
      boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      },
      pixelPosition: function pixelPosition() {
        return t(), i;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      },
      scrollboxSize: function scrollboxSize() {
        return t(), a;
      }
    }));
  }();

  function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function _e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ve = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;

  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;

    while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }

  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }

  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }

    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }

  function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;

    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }

    return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }

  w.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
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
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);
      return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = {
      get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      },
      set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
        return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      }
    };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    w.cssHooks[e + t] = {
      expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({
    css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    }
  });

  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }

  w.Tween = tt, tt.prototype = {
    constructor: tt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = tt.propHooks[this.prop];
      return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    }
  }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, w.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, w.fx = tt.prototype.init, w.fx.step = {};
  var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;

  function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }

  function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }

  function ut(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");
    n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));

    for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }

        d[r] = y && y[r] || w.style(e, r);
      }
    }

    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;

      for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
          display: l
        }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");

          for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }

  function ft(e, t) {
    var n, r, i, o, a;

    for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;

      for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }

      return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({
      elem: e,
      props: w.extend({}, t),
      opts: w.extend(!0, {
        specialEasing: {},
        easing: w.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: nt || st(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;
        if (i) return this;

        for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }

        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      }
    }),
        c = l.props;

    for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }

    return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  w.Animation = w.extend(pt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return ue(n.elem, e, ie.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    },
    prefilters: [ct],
    prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    }
  }), w.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? w.extend({}, e) : {
      complete: n || !n && t || g(e) && e,
      duration: e,
      easing: n && t || t && !g(t) && t
    };
    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);
        (i || J.get(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);
        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }

        for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }

        !t && n || w.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];

    w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({
    slideDown: ut("show"),
    slideUp: ut("hide"),
    slideToggle: ut("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;

    for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);

      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();
  var dt,
      ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }), w.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), dt = {
    set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;

    ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();
      return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });
  var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }), w.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = w.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), h.optSelected || (w.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });

  function vt(e) {
    return (e.match(M) || []).join(" ");
  }

  function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }

  w.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e),
          r = "string" === n || Array.isArray(e);

      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;

        if (r) {
          i = 0, o = w(this), a = xt(e);

          while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }

      return !1;
    }
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function val(e) {
      var t,
          n,
          r,
          i = this[0];
      {
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });
        if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    }
  }), w.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = w.find.attr(e, "value");
          return null != t ? t : vt(w.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      }
    }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;

  var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };

  w.extend(w.event, {
    trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];

      if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == _typeof(t) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }

          u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }

        a = 0;

        while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }

        return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, {
        type: e,
        isSimulated: !0
      });
      w.event.trigger(r, null, t);
    }
  }), w.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return w.event.trigger(e, t, n, !0);
    }
  }), h.focusin || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };

    w.event.special[t] = {
      setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);
        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      },
      teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;
        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      }
    };
  });
  var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;

  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };

  var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;

  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }

  w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }
    return r.join("&");
  }, w.fn.extend({
    serialize: function serialize() {
      return w.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");
        return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();
        return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Dt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Dt, "\r\n")
        };
      }).get();
    }
  });
  var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");
  Bt.href = Ct.href;

  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];
      if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;

    function a(s) {
      var u;
      return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }

    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && w.extend(!0, e, r), e;
  }

  function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;

    while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }

    if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);
        break;
      }
    }
    if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }

        a || (a = i);
      }

      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }

  function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }
    o = c.shift();

    while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
            break;
          }
        }
        if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return {
            state: "parsererror",
            error: a ? e : "No conversion from " + u + " to " + o
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function ajax(t, n) {
      "object" == _typeof(t) && (n = t, t = void 0), n = n || {};
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (c) {
            if (!s) {
              s = {};

              while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }

            t = s[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || C;
          return i && i.abort(t), k(0, t), this;
        }
      };

      if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");

        try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }

      if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
      (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);

      for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }

      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();

      if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
        h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));

        try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");

      function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;
        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }

      return E;
    },
    getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    }
  }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, w.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = g(e);
      return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    }
  }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };
  var Vt = {
    0: 200,
    1223: 204
  },
      Gt = w.ajaxSettings.xhr();
  h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n, r;

    if (h.cors || Gt && !t.crossDomain) return {
      send: function send(i, o) {
        var a,
            s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

        for (a in i) {
          s.setRequestHeader(a, i[a]);
        }

        _n = function n(e) {
          return function () {
            _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n && r();
          });
        }, _n = _n("abort");

        try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      },
      abort: function abort() {
        _n && _n();
      }
    };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return w.globalEval(e), e;
      }
    }
  }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;

      return {
        send: function send(i, o) {
          t = w("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n2 && _n2();
        }
      };
    }
  });
  var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return this[e] = !0, e;
    }
  }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, o, a;
    return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), a.length > 0 && w.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
      "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    }
  }, w.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });
      var t,
          n,
          r = this[0];
      if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      };
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - w.css(r, "marginTop", !0),
          left: t.left - i.left - w.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || be;
      });
    }
  }), w.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;
        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    w.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
        return z(this, function (t, n, i) {
          var o;
          return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), w.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), w.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });
  var Jt = e.jQuery,
      Kt = e.$;
  return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});
"use strict";

//---------------------Coordinates of the center of the map-----------
var centerOfTheMap = {
  lat: 50.3574885,
  lng: 33.2762039
}; //---------------------Coordinates markers START--------------------

var coordinatesParkingMarkers = [{
  lat: 50.35741736,
  lng: 33.26821771,
  name: 'veloparking',
  nameRus: 'Велопарковка',
  picture: 'http://velogor.ru/images/blog/umnaya-veloparkovka/umnaya-veloparkovka-3.jpg'
}];
var coordinatesCafeMarkers = [{
  lat: 50.36136372,
  lng: 33.27227418,
  name: 'cafe1',
  nameRus: 'У Наталки',
  picture: 'https://images.spasibovsem.ru/catalog/original/otzyvy-kafe-natalka-ukraina-mariupol-pr-t-lenina-631-1406278690.jpg'
}, {
  lat: 50.35961153,
  lng: 33.27658718,
  name: 'cafe2',
  nameRus: 'У Петра',
  picture: 'https://media-cdn.tripadvisor.com/media/photo-s/09/0f/2d/44/caption.jpg'
}];
var coordinatesSightMarkers = [{
  lat: 50.35958415,
  lng: 33.2721669,
  name: 'sightName1',
  nameRus: 'Собор',
  picture: 'https://i.ptmap.ru/original/20768.jpg'
}, {
  lat: 50.35731167,
  lng: 33.2637984,
  name: 'sightName2',
  nameRus: 'Церква',
  picture: 'http://7chudes.in.ua/wp-content/uploads/2015/01/cerkva.jpg'
}, {
  lat: 50.35999483,
  lng: 33.26744621,
  name: 'sightName3',
  nameRus: 'Могила',
  picture: 'http://photos.wikimapia.org/p/00/00/45/85/07_big.jpg'
}, {
  lat: 50.35095911,
  lng: 33.26538627,
  name: 'sightName4',
  nameRus: 'Курган',
  picture: 'https://vetliva.ru/upload/resize_cache/iblock/bc1/1170_640_2ad00f77cb8d50abfaeeae09efd4a5122/bc1a92274d8b25e87472eefe59b4371b.jpg'
}, {
  lat: 50.38446476,
  lng: 33.28152244,
  name: 'sightName5',
  nameRus: 'Парк',
  picture: 'https://dpchas.com.ua/sites/default/files/u49087/01-1-1024x666.jpg'
}, {
  lat: 50.32647189,
  lng: 33.22792118,
  name: 'sightName6',
  nameRus: 'Озеро',
  picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/%D0%9E%D0%B7%D0%B5%D1%80%D0%BE.%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B6%D1%8C%D0%B5_%D0%B2_%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D0%B5.jpg/1200px-%D0%9E%D0%B7%D0%B5%D1%80%D0%BE.%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B6%D1%8C%D0%B5_%D0%B2_%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D0%B5.jpg'
}, {
  lat: 50.28744158,
  lng: 33.22174137,
  name: 'sightName7',
  nameRus: 'Садиба',
  picture: 'https://i.arts.in.ua/i/2221/f_51349.jpg'
}, {
  lat: 50.25068435,
  lng: 33.14037387,
  name: 'sightName8',
  nameRus: "\u041F\u0430\u043C'\u044F\u0442\u043D\u0438\u043A",
  picture: 'https://upload.wikimedia.org/wikipedia/uk/5/5b/%D0%9F%D0%B0%D0%BC%27%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D1%83_%D0%B2_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%94%D0%B2%D1%96.gif'
}, {
  lat: 50.36218504,
  lng: 33.27109401,
  name: 'sightName9',
  nameRus: 'Статуя',
  picture: 'http://lifeglobe.net/x/entry/414/112.jpg'
}, {
  lat: 50.35810869,
  lng: 33.28208473,
  name: 'sightName10',
  nameRus: 'Колона',
  picture: 'http://1.bp.blogspot.com/-FL1QqD61P14/VpdqzlK_czI/AAAAAAAABEY/2LHN41JAZo8/s640/trajan-column.jpg'
}, {
  lat: 50.36211447,
  lng: 33.2846553,
  name: 'sightName11',
  nameRus: 'Музей',
  picture: 'https://dp.informator.ua/wp-content/uploads/2017/12/42.jpg'
}, {
  lat: 50.3529033,
  lng: 33.25626676,
  name: 'sightName12',
  nameRus: 'Пасiка дiда Панаса',
  picture: 'http://твгород.рф/media/k2/items/cache/ba1b4bb5341d75b54cf251eaa0b07cbc_XL.jpg'
}]; //---------------------Coordinates markers END--------------------
//---------------------Coordinates routes START--------------------

var routesData = {
  //---------------------Coordinates recreational routes START--------------------
  recreational: {
    color: "#00bc66",
    //#22cc00 #336600
    routes: [{
      name: "pinePark",
      nameRus: 'Сосновый парк',
      coords: [{
        lat: 50.3753984,
        lng: 33.3846617
      }, {
        lat: 50.3750152,
        lng: 33.3844042
      }, {
        lat: 50.374632,
        lng: 33.3838034
      }, {
        lat: 50.3742351,
        lng: 33.3832026
      }, {
        lat: 50.3733319,
        lng: 33.3813787
      }, {
        lat: 50.3714159,
        lng: 33.3807349
      }, {
        lat: 50.3693083,
        lng: 33.3804131
      }, {
        lat: 50.3683913,
        lng: 33.3800268
      }, {
        lat: 50.368227,
        lng: 33.3797693
      }, {
        lat: 50.3681449,
        lng: 33.3793402
      }, {
        lat: 50.3681586,
        lng: 33.3787179
      }, {
        lat: 50.3691988,
        lng: 33.3755636
      }, {
        lat: 50.3709096,
        lng: 33.3718085
      }, {
        lat: 50.3712517,
        lng: 33.3693624
      }, {
        lat: 50.3710601,
        lng: 33.3648562
      }, {
        lat: 50.371238,
        lng: 33.3603072
      }, {
        lat: 50.3712928,
        lng: 33.3539557
      }, {
        lat: 50.3712517,
        lng: 33.3477974
      }, {
        lat: 50.3710327,
        lng: 33.3351159
      }, {
        lat: 50.372155,
        lng: 33.3197308
      }, {
        lat: 50.3726476,
        lng: 33.3085299
      }, {
        lat: 50.3707316,
        lng: 33.3044958
      }, {
        lat: 50.3702116,
        lng: 33.3027792
      }, {
        lat: 50.3704579,
        lng: 33.3007193
      }, {
        lat: 50.3710054,
        lng: 33.2987452
      }, {
        lat: 50.3700747,
        lng: 33.2970285
      }, {
        lat: 50.3687608,
        lng: 33.2959127
      }, {
        lat: 50.3675837,
        lng: 33.2950544
      }, {
        lat: 50.3669268,
        lng: 33.2940245
      }, {
        lat: 50.365712,
        lng: 33.2901353
      }]
    }, {
      name: "waterfallBeaver",
      nameRus: 'Водоспад "Бобер"',
      coords: [{
        lat: 50.3308884,
        lng: 33.2395649
      }, {
        lat: 50.3369972,
        lng: 33.2340288
      }, {
        lat: 50.3395445,
        lng: 33.2314968
      }, {
        lat: 50.3422561,
        lng: 33.234973
      }, {
        lat: 50.3437076,
        lng: 33.2369471
      }, {
        lat: 50.3451044,
        lng: 33.2393503
      }, {
        lat: 50.3466654,
        lng: 33.2421827
      }, {
        lat: 50.3481168,
        lng: 33.245573
      }, {
        lat: 50.3491849,
        lng: 33.248148
      }, {
        lat: 50.3503076,
        lng: 33.2508945
      }]
    }, {
      name: "oldCastle",
      nameRus: 'Старовинний замок',
      coords: [{
        lat: 50.3740675,
        lng: 33.2699972
      }, {
        lat: 50.37741,
        lng: 33.267417
      }, {
        lat: 50.3789152,
        lng: 33.2665157
      }, {
        lat: 50.3789973,
        lng: 33.2684469
      }, {
        lat: 50.3803657,
        lng: 33.2757425
      }, {
        lat: 50.379572,
        lng: 33.2764506
      }, {
        lat: 50.3793668,
        lng: 33.27703
      }, {
        lat: 50.3791889,
        lng: 33.278532
      }, {
        lat: 50.3797499,
        lng: 33.2800341
      }, {
        lat: 50.380133,
        lng: 33.2808924
      }, {
        lat: 50.3809404,
        lng: 33.2813644
      }, {
        lat: 50.3816656,
        lng: 33.2821798
      }, {
        lat: 50.3826507,
        lng: 33.2834029
      }, {
        lat: 50.3831707,
        lng: 33.2838535
      }, {
        lat: 50.3838274,
        lng: 33.2836819
      }, {
        lat: 50.3834033,
        lng: 33.2826304
      }, {
        lat: 50.3837179,
        lng: 33.2810211
      }, {
        lat: 50.3844294,
        lng: 33.2808065
      }, {
        lat: 50.3850588,
        lng: 33.2814503
      }, {
        lat: 50.3858387,
        lng: 33.282094
      }, {
        lat: 50.3863722,
        lng: 33.2815361
      }, {
        lat: 50.3863586,
        lng: 33.281064
      }, {
        lat: 50.3851683,
        lng: 33.2800126
      }, {
        lat: 50.3842789,
        lng: 33.2782531
      }, {
        lat: 50.3835127,
        lng: 33.2779312
      }, {
        lat: 50.3828423,
        lng: 33.2771158
      }, {
        lat: 50.3827602,
        lng: 33.2758498
      }, {
        lat: 50.3828012,
        lng: 33.2737255
      }, {
        lat: 50.3827602,
        lng: 33.2725239
      }, {
        lat: 50.3822402,
        lng: 33.2726741
      }, {
        lat: 50.3815287,
        lng: 33.2722878
      }, {
        lat: 50.3819118,
        lng: 33.2707214
      }, {
        lat: 50.3819118,
        lng: 33.2691979
      }, {
        lat: 50.3807762,
        lng: 33.2683611
      }, {
        lat: 50.3801467,
        lng: 33.2677174
      }, {
        lat: 50.3797773,
        lng: 33.2680392
      }, {
        lat: 50.379572,
        lng: 33.2672453
      }, {
        lat: 50.3792983,
        lng: 33.2672024
      }, {
        lat: 50.3789152,
        lng: 33.2665157
      }]
    }]
  },
  //---------------------Coordinates recreational routes END--------------------
  //---------------------Coordinates highway routes START--------------------
  magistral: {
    color: "#0099dd",
    //#0000cc
    routes: [{
      name: "birchAlley",
      nameRus: 'Березова алея',
      coords: [{
        lat: 50.3658831,
        lng: 33.2717568
      }, {
        lat: 50.3667146,
        lng: 33.2699972
      }, {
        lat: 50.367091,
        lng: 33.2690263
      }, {
        lat: 50.3672997,
        lng: 33.2682002
      }, {
        lat: 50.3674879,
        lng: 33.2669771
      }, {
        lat: 50.3675119,
        lng: 33.2659632
      }, {
        lat: 50.3674298,
        lng: 33.2649493
      }, {
        lat: 50.3669473,
        lng: 33.2641929
      }, {
        lat: 50.3667351,
        lng: 33.2637048
      }, {
        lat: 50.3657086,
        lng: 33.2641554
      }, {
        lat: 50.3653185,
        lng: 33.26231
      }, {
        lat: 50.3652569,
        lng: 33.2609367
      }, {
        lat: 50.3642029,
        lng: 33.2611299
      }, {
        lat: 50.3637512,
        lng: 33.2610869
      }, {
        lat: 50.3635459,
        lng: 33.2607651
      }, {
        lat: 50.3633953,
        lng: 33.2603788
      }, {
        lat: 50.3633269,
        lng: 33.2589412
      }, {
        lat: 50.3632858,
        lng: 33.2583189
      }, {
        lat: 50.3629436,
        lng: 33.2579541
      }, {
        lat: 50.3624645,
        lng: 33.2578468
      }, {
        lat: 50.3612599,
        lng: 33.2582331
      }, {
        lat: 50.35985,
        lng: 33.2585549
      }, {
        lat: 50.3594803,
        lng: 33.2589412
      }, {
        lat: 50.358878,
        lng: 33.2598209
      }, {
        lat: 50.3584399,
        lng: 33.2605934
      }, {
        lat: 50.3585084,
        lng: 33.26231
      }, {
        lat: 50.3587411,
        lng: 33.2640696
      }, {
        lat: 50.3587685,
        lng: 33.2660007
      }, {
        lat: 50.3587137,
        lng: 33.2681036
      }, {
        lat: 50.3593708,
        lng: 33.2683396
      }, {
        lat: 50.3598773,
        lng: 33.2683182
      }, {
        lat: 50.3605207,
        lng: 33.2678461
      }, {
        lat: 50.3615474,
        lng: 33.2670307
      }, {
        lat: 50.3627657,
        lng: 33.2667732
      }, {
        lat: 50.3636691,
        lng: 33.2663012
      }, {
        lat: 50.3645588,
        lng: 33.265636
      }, {
        lat: 50.3657086,
        lng: 33.2641768
      }]
    }, {
      name: "lindenAlley",
      nameRus: 'Липова алея',
      coords: [{
        lat: 50.3498421,
        lng: 33.2664943
      }, {
        lat: 50.350513,
        lng: 33.2661939
      }, {
        lat: 50.3509922,
        lng: 33.2655931
      }, {
        lat: 50.3523203,
        lng: 33.2649922
      }, {
        lat: 50.3532376,
        lng: 33.2645202
      }, {
        lat: 50.3537442,
        lng: 33.2639408
      }, {
        lat: 50.3536483,
        lng: 33.2629752
      }, {
        lat: 50.3530049,
        lng: 33.2623529
      }, {
        lat: 50.3523887,
        lng: 33.262825
      }, {
        lat: 50.351444,
        lng: 33.2637691
      }, {
        lat: 50.3509785,
        lng: 33.2649279
      }, {
        lat: 50.3507458,
        lng: 33.2659149
      }]
    }, {
      name: "roseAlley",
      nameRus: 'Алея роз',
      coords: [{
        lat: 50.3733319,
        lng: 33.3813787
      }, {
        lat: 50.3740572,
        lng: 33.3815289
      }, {
        lat: 50.3745499,
        lng: 33.3815718
      }, {
        lat: 50.3748373,
        lng: 33.3815932
      }, {
        lat: 50.3751931,
        lng: 33.3815718
      }, {
        lat: 50.3755215,
        lng: 33.3814216
      }, {
        lat: 50.3757542,
        lng: 33.381722
      }, {
        lat: 50.3760552,
        lng: 33.3826661
      }, {
        lat: 50.3763837,
        lng: 33.3830094
      }, {
        lat: 50.3767668,
        lng: 33.3829665
      }, {
        lat: 50.3773826,
        lng: 33.3826447
      }, {
        lat: 50.3781079,
        lng: 33.3823872
      }, {
        lat: 50.3787647,
        lng: 33.3821297
      }, {
        lat: 50.3791068,
        lng: 33.3816147
      }, {
        lat: 50.379531,
        lng: 33.3812284
      }, {
        lat: 50.3798594,
        lng: 33.3806705
      }, {
        lat: 50.3799825,
        lng: 33.3822799
      }, {
        lat: 50.3800783,
        lng: 33.3837819
      }, {
        lat: 50.380133,
        lng: 33.3853054
      }, {
        lat: 50.3802015,
        lng: 33.3868289
      }, {
        lat: 50.3804204,
        lng: 33.3878374
      }, {
        lat: 50.3823223,
        lng: 33.388052
      }, {
        lat: 50.3837179,
        lng: 33.3886528
      }, {
        lat: 50.3844157,
        lng: 33.3894253
      }, {
        lat: 50.3850588,
        lng: 33.3897686
      }, {
        lat: 50.3857976,
        lng: 33.3899617
      }, {
        lat: 50.3859892,
        lng: 33.3905625
      }, {
        lat: 50.3863449,
        lng: 33.3910131
      }, {
        lat: 50.3867964,
        lng: 33.3907127
      }, {
        lat: 50.3874804,
        lng: 33.3898759
      }, {
        lat: 50.3898746,
        lng: 33.3903694
      }, {
        lat: 50.394088,
        lng: 33.3911204
      }, {
        lat: 50.3953191,
        lng: 33.3914638
      }, {
        lat: 50.3961672,
        lng: 33.3912277
      }, {
        lat: 50.3950592,
        lng: 33.388803
      }, {
        lat: 50.3929389,
        lng: 33.3838248
      }, {
        lat: 50.3920498,
        lng: 33.3816791
      }, {
        lat: 50.3913931,
        lng: 33.3784175
      }, {
        lat: 50.3910101,
        lng: 33.3768511
      }, {
        lat: 50.3903261,
        lng: 33.37713
      }, {
        lat: 50.3899704,
        lng: 33.3773017
      }, {
        lat: 50.3896694,
        lng: 33.3771729
      }, {
        lat: 50.3893821,
        lng: 33.3768725
      }, {
        lat: 50.3881508,
        lng: 33.376894
      }, {
        lat: 50.387713,
        lng: 33.3768725
      }, {
        lat: 50.387371,
        lng: 33.3762717
      }, {
        lat: 50.3871247,
        lng: 33.3749843
      }, {
        lat: 50.3869606,
        lng: 33.3747697
      }, {
        lat: 50.3866185,
        lng: 33.3745551
      }, {
        lat: 50.3858523,
        lng: 33.3738041
      }, {
        lat: 50.3854966,
        lng: 33.3729029
      }, {
        lat: 50.3852093,
        lng: 33.3723664
      }, {
        lat: 50.3850451,
        lng: 33.3723021
      }, {
        lat: 50.3849357,
        lng: 33.372066
      }, {
        lat: 50.3847304,
        lng: 33.3718729
      }, {
        lat: 50.3842516,
        lng: 33.3712935
      }, {
        lat: 50.3841695,
        lng: 33.3704352
      }, {
        lat: 50.3844705,
        lng: 33.3699203
      }, {
        lat: 50.3848536,
        lng: 33.3678389
      }, {
        lat: 50.3848809,
        lng: 33.3667016
      }, {
        lat: 50.3856061,
        lng: 33.3660793
      }, {
        lat: 50.3863586,
        lng: 33.3655214
      }, {
        lat: 50.3871795,
        lng: 33.3652854
      }, {
        lat: 50.3873026,
        lng: 33.3646417
      }, {
        lat: 50.3860713,
        lng: 33.3618951
      }, {
        lat: 50.3863722,
        lng: 33.3613372
      }, {
        lat: 50.3866048,
        lng: 33.3600712
      }, {
        lat: 50.3868648,
        lng: 33.3583546
      }, {
        lat: 50.387029,
        lng: 33.3571959
      }, {
        lat: 50.387412,
        lng: 33.3564019
      }, {
        lat: 50.3872615,
        lng: 33.3547282
      }, {
        lat: 50.3871247,
        lng: 33.3527541
      }, {
        lat: 50.3870563,
        lng: 33.3520889
      }, {
        lat: 50.3876036,
        lng: 33.3521748
      }, {
        lat: 50.3876036,
        lng: 33.3509946
      }, {
        lat: 50.3868648,
        lng: 33.3508229
      }, {
        lat: 50.3863175,
        lng: 33.3502221
      }, {
        lat: 50.385223,
        lng: 33.3473253
      }, {
        lat: 50.3842652,
        lng: 33.3445358
      }, {
        lat: 50.3804341,
        lng: 33.3346224
      }, {
        lat: 50.3791752,
        lng: 33.3321977
      }, {
        lat: 50.379011,
        lng: 33.3311677
      }, {
        lat: 50.3789699,
        lng: 33.3274126
      }, {
        lat: 50.3786278,
        lng: 33.3242798
      }, {
        lat: 50.3790794,
        lng: 33.3212757
      }, {
        lat: 50.3795994,
        lng: 33.3190656
      }, {
        lat: 50.3800236,
        lng: 33.3175206
      }, {
        lat: 50.3802836,
        lng: 33.3175206
      }, {
        lat: 50.3805709,
        lng: 33.3182073
      }, {
        lat: 50.3809267,
        lng: 33.318336
      }, {
        lat: 50.3813235,
        lng: 33.3178639
      }, {
        lat: 50.381734,
        lng: 33.3169842
      }, {
        lat: 50.3818708,
        lng: 33.3149028
      }, {
        lat: 50.3813372,
        lng: 33.3126926
      }, {
        lat: 50.3810772,
        lng: 33.3113408
      }, {
        lat: 50.3811593,
        lng: 33.3106112
      }, {
        lat: 50.3809814,
        lng: 33.3094311
      }, {
        lat: 50.3809404,
        lng: 33.3084011
      }, {
        lat: 50.3812003,
        lng: 33.3063412
      }, {
        lat: 50.3813645,
        lng: 33.3045387
      }, {
        lat: 50.3815835,
        lng: 33.3041096
      }, {
        lat: 50.3809404,
        lng: 33.303144
      }, {
        lat: 50.3806941,
        lng: 33.3027363
      }, {
        lat: 50.3801604,
        lng: 33.3025646
      }, {
        lat: 50.3792436,
        lng: 33.3026719
      }, {
        lat: 50.3778752,
        lng: 33.3029938
      }, {
        lat: 50.3769584,
        lng: 33.3029938
      }, {
        lat: 50.3744678,
        lng: 33.3013201
      }, {
        lat: 50.3727161,
        lng: 33.3002687
      }, {
        lat: 50.3718128,
        lng: 33.2997322
      }, {
        lat: 50.3710054,
        lng: 33.2987452
      }]
    }, {
      name: "chrysanthemumsAlley",
      nameRus: 'Алея Хризантем',
      coords: [{
        lat: 50.2547512,
        lng: 33.1373835
      }, {
        lat: 50.2535988,
        lng: 33.1381989
      }, {
        lat: 50.2519524,
        lng: 33.1391859
      }, {
        lat: 50.2492631,
        lng: 33.1415892
      }, {
        lat: 50.2473147,
        lng: 33.1436062
      }, {
        lat: 50.2463816,
        lng: 33.1461811
      }, {
        lat: 50.2447898,
        lng: 33.147769
      }, {
        lat: 50.2501412,
        lng: 33.1701279
      }, {
        lat: 50.2535439,
        lng: 33.1853199
      }, {
        lat: 50.2559311,
        lng: 33.1926155
      }, {
        lat: 50.2566445,
        lng: 33.1940746
      }, {
        lat: 50.2584279,
        lng: 33.1957483
      }, {
        lat: 50.2647654,
        lng: 33.21064
      }, {
        lat: 50.2864876,
        lng: 33.2154465
      }, {
        lat: 50.3018407,
        lng: 33.2185364
      }, {
        lat: 50.3176273,
        lng: 33.2216263
      }, {
        lat: 50.3359289,
        lng: 33.2286644
      }, {
        lat: 50.3387776,
        lng: 33.2295227
      }, {
        lat: 50.3395445,
        lng: 33.2314968
      }]
    }]
  },
  //---------------------Coordinates highway routes END--------------------
  //---------------------Coordinates tourist routes START--------------------
  touristic: {
    color: "#eb8853",
    //#cc00cc
    routes: [{
      name: "blackStone",
      nameRus: 'Чорний камінь',
      coords: [{
        lat: 50.3503076,
        lng: 33.2508945
      }, {
        lat: 50.3513756,
        lng: 33.2528901
      }, {
        lat: 50.3518822,
        lng: 33.2539845
      }, {
        lat: 50.35269,
        lng: 33.255229
      }, {
        lat: 50.3537579,
        lng: 33.2574177
      }, {
        lat: 50.3545382,
        lng: 33.2588124
      }, {
        lat: 50.3559073,
        lng: 33.2600355
      }, {
        lat: 50.3562632,
        lng: 33.2606792
      }, {
        lat: 50.3564275,
        lng: 33.2612157
      }, {
        lat: 50.3568382,
        lng: 33.2639623
      }, {
        lat: 50.3572079,
        lng: 33.2664299
      }, {
        lat: 50.3576733,
        lng: 33.2692838
      }, {
        lat: 50.3586179,
        lng: 33.2703137
      }, {
        lat: 50.359672,
        lng: 33.2715154
      }, {
        lat: 50.3598773,
        lng: 33.2720304
      }]
    }, {
      name: "greenStone",
      nameRus: 'Зелений камінь',
      coords: [{
        lat: 50.365712,
        lng: 33.2901353
      }, {
        lat: 50.3653835,
        lng: 33.2893521
      }, {
        lat: 50.3648907,
        lng: 33.2886118
      }, {
        lat: 50.362841,
        lng: 33.2859671
      }, {
        lat: 50.3602949,
        lng: 33.2822227
      }, {
        lat: 50.3590697,
        lng: 33.2804096
      }, {
        lat: 50.358967,
        lng: 33.2802165
      }, {
        lat: 50.3589259,
        lng: 33.2798302
      }, {
        lat: 50.3590012,
        lng: 33.2772231
      }, {
        lat: 50.359056,
        lng: 33.2755709
      }, {
        lat: 50.359097,
        lng: 33.2750452
      }, {
        lat: 50.359802,
        lng: 33.2724488
      }, {
        lat: 50.3598773,
        lng: 33.2720304
      }]
    }, {
      name: "blueStone",
      nameRus: 'Синій камінь',
      coords: [{
        lat: 50.3696778,
        lng: 33.2623959
      }, {
        lat: 50.3694246,
        lng: 33.2629216
      }, {
        lat: 50.3689319,
        lng: 33.2643485
      }, {
        lat: 50.3684186,
        lng: 33.266623
      }, {
        lat: 50.3676659,
        lng: 33.2701206
      }, {
        lat: 50.3672826,
        lng: 33.2717407
      }, {
        lat: 50.3640592,
        lng: 33.271848
      }, {
        lat: 50.3621908,
        lng: 33.2719445
      }, {
        lat: 50.3604865,
        lng: 33.2719982
      }, {
        lat: 50.3601511,
        lng: 33.271966
      }, {
        lat: 50.3598773,
        lng: 33.2720304
      }]
    }, {
      name: "orangeStone",
      nameRus: 'Помаранчевий камінь',
      coords: [{
        lat: 50.3747825,
        lng: 33.2546604
      }, {
        lat: 50.3731951,
        lng: 33.2579434
      }, {
        lat: 50.3721755,
        lng: 33.2600892
      }, {
        lat: 50.3716828,
        lng: 33.2608187
      }, {
        lat: 50.3713749,
        lng: 33.2612908
      }, {
        lat: 50.3707111,
        lng: 33.2619667
      }, {
        lat: 50.3696778,
        lng: 33.2623959
      }]
    }, {
      name: "pinkStone",
      nameRus: 'Рожевий камінь',
      coords: [{
        lat: 50.3740675,
        lng: 33.2699972
      }, {
        lat: 50.3733045,
        lng: 33.270523
      }, {
        lat: 50.3724834,
        lng: 33.2710916
      }, {
        lat: 50.3719428,
        lng: 33.2714349
      }, {
        lat: 50.3716452,
        lng: 33.2715315
      }, {
        lat: 50.3713475,
        lng: 33.2715261
      }, {
        lat: 50.3693664,
        lng: 33.2716173
      }, {
        lat: 50.3679122,
        lng: 33.271687
      }, {
        lat: 50.3672826,
        lng: 33.2717407
      }]
    }, {
      name: "redStone",
      nameRus: 'Червоний камінь',
      coords: [{
        lat: 50.3577982,
        lng: 33.2883033
      }, {
        lat: 50.357788,
        lng: 33.2881531
      }, {
        lat: 50.358007,
        lng: 33.2872465
      }, {
        lat: 50.3581679,
        lng: 33.2866189
      }, {
        lat: 50.3584331,
        lng: 33.2855487
      }, {
        lat: 50.3585905,
        lng: 33.284744
      }, {
        lat: 50.3587137,
        lng: 33.2839286
      }, {
        lat: 50.3587822,
        lng: 33.2833064
      }, {
        lat: 50.3588506,
        lng: 33.2824695
      }, {
        lat: 50.3588985,
        lng: 33.2811821
      }, {
        lat: 50.3589259,
        lng: 33.2806778
      }, {
        lat: 50.3590491,
        lng: 33.2803237
      }]
    }, {
      name: "yellowStone",
      nameRus: 'Жовтий камінь',
      coords: [{
        lat: 50.3491746,
        lng: 33.2856613
      }, {
        lat: 50.3499208,
        lng: 33.285082
      }, {
        lat: 50.3505541,
        lng: 33.2845294
      }, {
        lat: 50.3526694,
        lng: 33.2826519
      }, {
        lat: 50.3542439,
        lng: 33.2812464
      }, {
        lat: 50.3552844,
        lng: 33.2803237
      }, {
        lat: 50.3563933,
        lng: 33.279165
      }, {
        lat: 50.357557,
        lng: 33.2779527
      }, {
        lat: 50.3580635,
        lng: 33.2773519
      }, {
        lat: 50.3587,
        lng: 33.2767296
      }, {
        lat: 50.3588849,
        lng: 33.2765365
      }, {
        lat: 50.3590286,
        lng: 33.2765365
      }]
    }, {
      name: "whiteStone",
      nameRus: 'Білий камінь',
      coords: [{
        lat: 50.3639702,
        lng: 33.271848
      }, {
        lat: 50.3638984,
        lng: 33.2736397
      }, {
        lat: 50.3638539,
        lng: 33.2757854
      }, {
        lat: 50.3638231,
        lng: 33.2780921
      }, {
        lat: 50.3638368,
        lng: 33.2798034
      }, {
        lat: 50.3638231,
        lng: 33.2816595
      }, {
        lat: 50.363806,
        lng: 33.2822174
      }, {
        lat: 50.363782,
        lng: 33.28255
      }, {
        lat: 50.3636691,
        lng: 33.2829469
      }, {
        lat: 50.3630942,
        lng: 33.2841271
      }, {
        lat: 50.3627246,
        lng: 33.2848191
      }, {
        lat: 50.3624337,
        lng: 33.2853287
      }]
    }, {
      name: "greyStone",
      nameRus: 'Сірий камінь',
      coords: [{
        lat: 50.3590714,
        lng: 33.2708207
      }, {
        lat: 50.3592682,
        lng: 33.2703781
      }, {
        lat: 50.3594701,
        lng: 33.2699221
      }, {
        lat: 50.3596104,
        lng: 33.2690129
      }, {
        lat: 50.35966,
        lng: 33.2685649
      }, {
        lat: 50.3597268,
        lng: 33.2681036
      }, {
        lat: 50.3598038,
        lng: 33.2675484
      }, {
        lat: 50.3598773,
        lng: 33.26702
      }, {
        lat: 50.35998,
        lng: 33.2662797
      }, {
        lat: 50.3600775,
        lng: 33.2656011
      }, {
        lat: 50.3601237,
        lng: 33.2653248
      }, {
        lat: 50.3599663,
        lng: 33.2594454
      }, {
        lat: 50.3594735,
        lng: 33.2586837
      }, {
        lat: 50.3594187,
        lng: 33.2584155
      }, {
        lat: 50.3590012,
        lng: 33.2581902
      }, {
        lat: 50.3590012,
        lng: 33.2574499
      }, {
        lat: 50.3589533,
        lng: 33.2569242
      }]
    }, {
      name: "purpleStone",
      nameRus: 'Фіолетовий камінь',
      coords: [{
        lat: 50.3601289,
        lng: 33.2653061
      }, {
        lat: 50.3608475,
        lng: 33.2650056
      }, {
        lat: 50.3615885,
        lng: 33.2644773
      }, {
        lat: 50.3622181,
        lng: 33.2642627
      }, {
        lat: 50.3631353,
        lng: 33.2642412
      }, {
        lat: 50.3632448,
        lng: 33.2640266
      }, {
        lat: 50.3631969,
        lng: 33.2633185
      }, {
        lat: 50.3638607,
        lng: 33.2629323
      }, {
        lat: 50.3640968,
        lng: 33.262428
      }, {
        lat: 50.3643809,
        lng: 33.2622349
      }, {
        lat: 50.3645041,
        lng: 33.2621062
      }, {
        lat: 50.3653185,
        lng: 33.26231
      }, {
        lat: 50.3655306,
        lng: 33.2623315
      }, {
        lat: 50.365801,
        lng: 33.2622457
      }, {
        lat: 50.3662253,
        lng: 33.2620525
      }, {
        lat: 50.3665298,
        lng: 33.2618809
      }, {
        lat: 50.3670328,
        lng: 33.2613605
      }, {
        lat: 50.3678985,
        lng: 33.2605076
      }, {
        lat: 50.3684597,
        lng: 33.2599175
      }, {
        lat: 50.3689045,
        lng: 33.2605076
      }, {
        lat: 50.369363,
        lng: 33.2608616
      }, {
        lat: 50.3696744,
        lng: 33.2609797
      }]
    }, {
      name: "goldStone",
      nameRus: 'Золотий камінь',
      coords: [{
        lat: 50.3696778,
        lng: 33.2623959
      }, {
        lat: 50.369712,
        lng: 33.2618433
      }, {
        lat: 50.3696778,
        lng: 33.2610977
      }, {
        lat: 50.3696299,
        lng: 33.2605398
      }, {
        lat: 50.3696675,
        lng: 33.2600141
      }, {
        lat: 50.3699378,
        lng: 33.2584852
      }, {
        lat: 50.3703895,
        lng: 33.2561731
      }, {
        lat: 50.3705845,
        lng: 33.2550091
      }, {
        lat: 50.3706016,
        lng: 33.2547516
      }, {
        lat: 50.3705742,
        lng: 33.2538986
      }, {
        lat: 50.3705571,
        lng: 33.2529813
      }, {
        lat: 50.3705161,
        lng: 33.2521766
      }]
    }, {
      name: "brownStone",
      nameRus: 'Коричневий камінь',
      coords: [{
        lat: 50.3491232,
        lng: 33.275308
      }, {
        lat: 50.3492978,
        lng: 33.2753563
      }, {
        lat: 50.3499448,
        lng: 33.2757962
      }, {
        lat: 50.3504514,
        lng: 33.2761931
      }, {
        lat: 50.3513482,
        lng: 33.276912
      }, {
        lat: 50.3518171,
        lng: 33.2772446
      }, {
        lat: 50.3523374,
        lng: 33.2775772
      }, {
        lat: 50.3525667,
        lng: 33.2776791
      }, {
        lat: 50.3529467,
        lng: 33.2777864
      }, {
        lat: 50.3533163,
        lng: 33.2778507
      }, {
        lat: 50.3534464,
        lng: 33.2778186
      }, {
        lat: 50.354042,
        lng: 33.2775182
      }, {
        lat: 50.3543192,
        lng: 33.2774001
      }, {
        lat: 50.3546888,
        lng: 33.2772392
      }, {
        lat: 50.355079,
        lng: 33.27703
      }, {
        lat: 50.3555308,
        lng: 33.2766974
      }, {
        lat: 50.3558217,
        lng: 33.2765472
      }, {
        lat: 50.3560613,
        lng: 33.2764667
      }, {
        lat: 50.3565918,
        lng: 33.2764077
      }, {
        lat: 50.3572832,
        lng: 33.2762897
      }, {
        lat: 50.3574885,
        lng: 33.2762039
      }, {
        lat: 50.3577897,
        lng: 33.2759517
      }, {
        lat: 50.3582859,
        lng: 33.2754958
      }, {
        lat: 50.35857,
        lng: 33.2753241
      }, {
        lat: 50.3589088,
        lng: 33.275249
      }, {
        lat: 50.3590868,
        lng: 33.2752168
      }]
    }, {
      name: "limeStone",
      nameRus: 'Лайм камінь',
      coords: [{
        lat: 50.3552912,
        lng: 33.2416034
      }, {
        lat: 50.3544493,
        lng: 33.2431912
      }, {
        lat: 50.3521697,
        lng: 33.2474291
      }, {
        lat: 50.3508895,
        lng: 33.2498109
      }, {
        lat: 50.3503076,
        lng: 33.2508945
      }]
    }, {
      name: "khakiStone",
      nameRus: 'Хакі камінь',
      coords: [{
        lat: 50.3703912,
        lng: 33.2561584
      }, {
        lat: 50.3701038,
        lng: 33.2559666
      }, {
        lat: 50.3697257,
        lng: 33.255524
      }, {
        lat: 50.3696265,
        lng: 33.2554328
      }, {
        lat: 50.3695307,
        lng: 33.255406
      }, {
        lat: 50.3690824,
        lng: 33.2554382
      }, {
        lat: 50.3680217,
        lng: 33.2557064
      }, {
        lat: 50.3675564,
        lng: 33.2557762
      }, {
        lat: 50.3673134,
        lng: 33.255744
      }, {
        lat: 50.3670534,
        lng: 33.2555348
      }, {
        lat: 50.3667728,
        lng: 33.2550949
      }, {
        lat: 50.3666017,
        lng: 33.2546818
      }, {
        lat: 50.3663895,
        lng: 33.2542419
      }, {
        lat: 50.3662698,
        lng: 33.2541561
      }, {
        lat: 50.365931,
        lng: 33.2540488
      }, {
        lat: 50.3655443,
        lng: 33.2539308
      }, {
        lat: 50.3653664,
        lng: 33.2538128
      }, {
        lat: 50.3652569,
        lng: 33.253566
      }, {
        lat: 50.3651166,
        lng: 33.2537323
      }, {
        lat: 50.3648531,
        lng: 33.2539576
      }, {
        lat: 50.364593,
        lng: 33.2541722
      }, {
        lat: 50.3642748,
        lng: 33.2543117
      }, {
        lat: 50.3639771,
        lng: 33.2544512
      }, {
        lat: 50.3636417,
        lng: 33.2546067
      }, {
        lat: 50.363409,
        lng: 33.2547516
      }, {
        lat: 50.3631832,
        lng: 33.2549393
      }, {
        lat: 50.3628478,
        lng: 33.2550627
      }, {
        lat: 50.3625911,
        lng: 33.2550359
      }, {
        lat: 50.3623824,
        lng: 33.2549876
      }, {
        lat: 50.3621018,
        lng: 33.25495
      }, {
        lat: 50.3618759,
        lng: 33.2549661
      }, {
        lat: 50.3615713,
        lng: 33.2550305
      }, {
        lat: 50.3612189,
        lng: 33.2552075
      }, {
        lat: 50.3609656,
        lng: 33.2554436
      }, {
        lat: 50.3607226,
        lng: 33.2557064
      }, {
        lat: 50.3603154,
        lng: 33.2561624
      }, {
        lat: 50.3599766,
        lng: 33.2565004
      }, {
        lat: 50.3596754,
        lng: 33.2567203
      }, {
        lat: 50.3593674,
        lng: 33.2568222
      }, {
        lat: 50.3590765,
        lng: 33.2569027
      }, {
        lat: 50.3585015,
        lng: 33.2571173
      }, {
        lat: 50.3577281,
        lng: 33.2574391
      }, {
        lat: 50.3573893,
        lng: 33.2575893
      }, {
        lat: 50.3572181,
        lng: 33.257702
      }, {
        lat: 50.3570196,
        lng: 33.2578951
      }, {
        lat: 50.3566979,
        lng: 33.2583725
      }, {
        lat: 50.3563659,
        lng: 33.2589251
      }, {
        lat: 50.3557635,
        lng: 33.2598907
      }]
    }, {
      name: "aquaStone",
      nameRus: 'Морський камінь',
      coords: [{
        lat: 50.3595351,
        lng: 33.2424295
      }, {
        lat: 50.3590902,
        lng: 33.2443178
      }, {
        lat: 50.3589054,
        lng: 33.2452512
      }, {
        lat: 50.3588438,
        lng: 33.2457662
      }, {
        lat: 50.3585632,
        lng: 33.2473218
      }, {
        lat: 50.3583304,
        lng: 33.2488346
      }, {
        lat: 50.3588849,
        lng: 33.2500362
      }, {
        lat: 50.3583852,
        lng: 33.2508624
      }, {
        lat: 50.3582688,
        lng: 33.2511199
      }, {
        lat: 50.3580909,
        lng: 33.2516241
      }, {
        lat: 50.3578924,
        lng: 33.2522142
      }, {
        lat: 50.3576733,
        lng: 33.2527077
      }, {
        lat: 50.3573927,
        lng: 33.2532656
      }, {
        lat: 50.3569614,
        lng: 33.2538664
      }, {
        lat: 50.3564275,
        lng: 33.2542849
      }, {
        lat: 50.3559552,
        lng: 33.2548213
      }, {
        lat: 50.3554418,
        lng: 33.2555401
      }, {
        lat: 50.3551269,
        lng: 33.2560873
      }, {
        lat: 50.3549969,
        lng: 33.2566345
      }, {
        lat: 50.3549558,
        lng: 33.2571709
      }, {
        lat: 50.3549969,
        lng: 33.2574177
      }, {
        lat: 50.355168,
        lng: 33.2580078
      }, {
        lat: 50.3554555,
        lng: 33.2590485
      }, {
        lat: 50.3555856,
        lng: 33.2593703
      }, {
        lat: 50.3556061,
        lng: 33.2597458
      }]
    }] //---------------------coordinates tourist routes END--------------------

  }
}; //---------------------Coordinates routes END--------------------
"use strict";

//-------------------Take DOM nodes---------------------
var mainMapSection = document.getElementById("main-map");
mainMapSection.zoomin = mainMapSection.querySelector('div[data-id="zoomin"]');
mainMapSection.zoomout = mainMapSection.querySelector('div[data-id="zoomout"]');
mainMapSection.geotag = mainMapSection.querySelector('div[data-id="geotag"]');
mainMapSection.parking = mainMapSection.querySelector('div[data-id="parking"]');
mainMapSection.cafe = mainMapSection.querySelector('div[data-id="cafe"]');
mainMapSection.sight = mainMapSection.querySelector('div[data-id="sight"]'); //---------------------Create empty arrays--------------------

var arrayParkingMarkers = [];
var arrayCafeMarkers = [];
var arraySightMarkers = [];
var arrayGeotagMarkers = [];
var polylines = []; //-------------------Create global variables-----------------

var map;
var isGeotagMarkerShown = false;
var areParkingMarkersShown = false;
var areSightMarkersShown = false;
var areCafeMarkersShown = false;
var areAllPolylinesShown = false;
var zoomMap = 12.9;
var mapStyles = [{
  featureType: "all",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#675a4b"
  }]
}, {
  featureType: "all",
  elementType: "labels.text.stroke",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "administrative",
  elementType: "geometry",
  stylers: [{
    color: "#ffebc5"
  }, {
    lightness: "-10"
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#675a4b"
  }]
}, {
  featureType: "administrative.country",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#b70046"
  }]
}, {
  featureType: "administrative.province",
  elementType: "geometry.fill",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "administrative.province",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#675a4b"
  }, {
    weight: "0.50"
  }]
}, {
  featureType: "administrative.province",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#675a4b"
  }]
}, {
  featureType: "administrative.locality",
  elementType: "all",
  stylers: [{
    visibility: "simplified"
  }]
}, {
  featureType: "administrative.locality",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#ff850a"
  }]
}, {
  featureType: "administrative.neighborhood",
  elementType: "geometry",
  stylers: [{
    visibility: "on"
  }]
}, {
  featureType: "administrative.neighborhood",
  elementType: "labels",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "landscape",
  elementType: "all",
  stylers: [{
    color: "#f2f2f2"
  }]
}, {
  featureType: "landscape",
  elementType: "geometry.fill",
  stylers: [{
    saturation: "-71"
  }, {
    lightness: "-2"
  }, {
    color: "#ffebc5"
  }]
}, {
  featureType: "poi",
  elementType: "all",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "poi.park",
  elementType: "geometry.fill",
  stylers: [{
    color: "#70bfaf"
  }]
}, {
  featureType: "road",
  elementType: "all",
  stylers: [{
    saturation: -100
  }, {
    lightness: 45
  }, {
    visibility: "simplified"
  }]
}, {
  featureType: "road",
  elementType: "labels.text.stroke",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road.highway",
  elementType: "all",
  stylers: [{
    visibility: "simplified"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#675a4c"
  }]
}, {
  featureType: "road.highway",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#675a4b"
  }]
}, {
  featureType: "road.arterial",
  elementType: "all",
  stylers: [{
    visibility: "simplified"
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "road.arterial",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#675a4b"
  }]
}, {
  featureType: "road.arterial",
  elementType: "labels.icon",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road.local",
  elementType: "all",
  stylers: [{
    visibility: "simplified"
  }]
}, {
  featureType: "transit",
  elementType: "all",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "water",
  elementType: "all",
  stylers: [{
    color: "#7ccff0"
  }, {
    visibility: "on"
  }]
}, {
  featureType: "water",
  elementType: "geometry.fill",
  stylers: [{
    color: "#cfeae4"
  }]
}, {
  featureType: "water",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#109579"
  }]
}, {
  featureType: "water",
  elementType: "labels.text.stroke",
  stylers: [{
    visibility: "off"
  }]
}]; //****************************INIT MAP******************************

function initMap() {
  //---------------Init a new map----------------
  map = new google.maps.Map(document.getElementById("map"), {
    center: centerOfTheMap,
    // center of map
    zoom: zoomMap,
    disableDefaultUI: true,
    styles: mapStyles // [
    //   {
    //     featureType: "poi",
    //     stylers: [{ visibility: "off" }]
    //   }
    // ]

  }); //---------------Create routes and show on the map----------------

  var _loop = function _loop(key) {
    routesData[key].routes.forEach(function (item) {
      var polyline = new google.maps.Polyline({
        path: item.coords,
        strokeColor: routesData[key].color,
        strokeOpacity: 0.7,
        strokeWeight: 7,
        map: map,
        name: item.name,
        type: key,
        nameRus: item.nameRus,
        route: routesData[key].routes.filter(function (elem) {
          return elem.name === item.name;
        })[0].coords
      });
      var polylineObj = {
        type: key,
        name: item.name,
        polyline: polyline
      };
      polylines.push(polylineObj);
    });
  };

  for (var key in routesData) {
    _loop(key);
  }

  areAllPolylinesShown = true; //---------------------Add click listeners to buttons--------------------

  google.maps.event.addDomListener(mainMapSection.zoomin, "click", handleZoomInMap);
  google.maps.event.addDomListener(mainMapSection.zoomout, "click", handleZoomOutMap);
  google.maps.event.addDomListener(mainMapSection.geotag, "click", handleShowingGeotagMarker);
  google.maps.event.addDomListener(mainMapSection.parking, "click", handleShowingParkingMarkers);
  google.maps.event.addDomListener(mainMapSection.cafe, "click", handleShowingCafeMarkers);
  google.maps.event.addDomListener(mainMapSection.sight, "click", handleShowingSightMarkers); //---------------------Add listeners to polyline START--------------------
  // when "click" polyline open routeinfo title

  polylines.map(function (item) {
    return google.maps.event.addListener(item.polyline, "click", function () {
      var handlePolyline = item.polyline;
      handlePolylineRoutesItemClick(handlePolyline);
    });
  }); // when "mouseover" polyline open InfoWindow

  var arrayPolylineInfoWindowMarkers = [];
  var j = 0;
  var arrayDistance = [];
  var distance = 0;
  polylines.map(function (item) {
    return google.maps.event.addListener(item.polyline, "mouseover", function () {
      j = 0;
      arrayDistance = [];
      var handlePolyline = item.polyline;
      var lat = item.polyline.route[1].lat;
      var lng = item.polyline.route[1].lng; // calculation of distance route

      for (var i = 0; i < item.polyline.route.length; i += 1) {
        j = j + 1;

        if (j < item.polyline.route.length) {
          var fromLat = item.polyline.route[i].lat;
          var fromLng = item.polyline.route[i].lng;
          var toLat = item.polyline.route[j].lat;
          var toLng = item.polyline.route[j].lng;
          var routeDistance = (calcDistance(fromLat, fromLng, toLat, toLng) / 1000).toFixed(4);
          arrayDistance.push(+routeDistance);
          distance = arrayDistance.reduce(function (acc, value) {
            return acc + value;
          }, 0);
          distance = distance.toFixed(2);
        }
      }

      deleteMarkersFromTheMap(arrayPolylineInfoWindowMarkers);
      var contentString = "\n      <div style=\"width: 193px;\"><span style=\"font-weight: 700;\">".concat(handlePolyline.nameRus, "</span>.<div>\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430: ").concat(distance, "\u043A\u043C.</div><div style=\"display: flex; juctify-content: center;\"><div>\u041A\u043Bi\u043A\u0430\u0439 \u043D\u0430 \u043Bi\u043Di\u044E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430</div><img style=\"display: block; margin-left: 5px; width: 20px; height: 20px;\"src=\"./img/clicker.svg\" alt=\"\u041A\u043B\u0438\u043A\u0430\u0439 \u043D\u0430 \u043B\u0438\u043D\u0438\u044E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430\"></div></div>");
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var marker = new google.maps.Marker({
        position: {
          lat: lat,
          lng: lng
        },
        map: map,
        title: handlePolyline.nameRus,
        icon: {
          scaledSize: new google.maps.Size(1, 1),
          // scaled size icon 1px( it is delete icon)
          url: "./img/point.svg"
        }
      });
      arrayPolylineInfoWindowMarkers.push(marker);
      infowindow.open(map, marker);
    });
  }); // when "mouseout" polyline delete InfoWindow

  polylines.map(function (item) {
    return google.maps.event.addListener(item.polyline, "mouseout", function () {
      deleteMarkersFromTheMap(arrayPolylineInfoWindowMarkers);
    });
  }); //---------------------Add listeners to polyline END--------------------
} //**************************AUX FUNCTIONS****************************/


function calcDistance(fromLat, fromLng, toLat, toLng) {
  return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(fromLat, fromLng), new google.maps.LatLng(toLat, toLng));
}

function handleZoomInMap() {
  var currentZoomLevel = map.getZoom();

  if (currentZoomLevel != 0) {
    map.setZoom(currentZoomLevel - 1);
  }
}

function handleZoomOutMap() {
  var currentZoomLevel = map.getZoom();

  if (currentZoomLevel != 21) {
    map.setZoom(currentZoomLevel + 1);
  }
}

function handleShowingGeotagMarker() {
  if (!isGeotagMarkerShown) {
    var icon = {
      scaledSize: new google.maps.Size(30, 30),
      // scaled size icon
      url: "./img/yourlocation_on_map.svg"
    };
    addMarkerToTheMap({
      lat: 50.3574885,
      lng: 33.2762039
    }, arrayGeotagMarkers, icon);
    isGeotagMarkerShown = true;
    map.panTo({
      lat: 50.3574885,
      lng: 33.2762039
    });
  } else {
    deleteMarkersFromTheMap(arrayGeotagMarkers);
    isGeotagMarkerShown = false;
  }
}

function handleShowingParkingMarkers() {
  if (!areParkingMarkersShown) {
    var icon = {
      scaledSize: new google.maps.Size(33, 33),
      // scaled size icon
      url: "./img/bikeparking_on_map.svg"
    };
    coordinatesParkingMarkers.map(function (coordinate) {
      return addMarkerToTheMap(coordinate, arrayParkingMarkers, icon);
    });
    areParkingMarkersShown = true;
  } else {
    deleteMarkersFromTheMap(arrayParkingMarkers);
    areParkingMarkersShown = false;
  }
}

function handleShowingCafeMarkers() {
  if (!areCafeMarkersShown) {
    var icon = {
      scaledSize: new google.maps.Size(33, 33),
      // scaled size icon
      url: "./img/cafe_on_map.svg"
    };
    coordinatesCafeMarkers.map(function (coordinate) {
      return addMarkerToTheMap(coordinate, arrayCafeMarkers, icon);
    });
    areCafeMarkersShown = true;
  } else {
    deleteMarkersFromTheMap(arrayCafeMarkers);
    areCafeMarkersShown = false;
  }
}

function handleShowingSightMarkers() {
  if (!areSightMarkersShown) {
    var icon = {
      scaledSize: new google.maps.Size(33, 33),
      // scaled size icon
      url: "./img/tourist_points_on_map.svg"
    };
    coordinatesSightMarkers.map(function (coordinate) {
      return addMarkerToTheMap(coordinate, arraySightMarkers, icon);
    });
    areSightMarkersShown = true;
  } else {
    deleteMarkersFromTheMap(arraySightMarkers);
    areSightMarkersShown = false;
  }
} //---------------------Function add markers on the map--------------------


function addMarkerToTheMap(coordinate, arrayMarkers, icon) {
  var marker = new google.maps.Marker({
    position: coordinate,
    map: map,
    icon: icon
  });
  arrayMarkers.push(marker);
  createListenerAndInfoWindowOfMarker(coordinate, marker);
} //---------------------Function delete markers from the map--------------------


function deleteMarkersFromTheMap(arrayMarkers) {
  arrayMarkers.map(function (item) {
    return item.setMap(null);
  });
} //---------------------Function create Listener and InfoWindow of markers --------------------


function createListenerAndInfoWindowOfMarker(coordinate, marker) {
  marker.addListener("click", function () {
    if (!coordinate.nameRus) {
      return;
    }

    var name = coordinate.nameRus;
    var pictureUrl = coordinate.picture;
    var contentInfoWindow = "<div1 class=\"Heading\">".concat(name, "</div><img style=\"max-width: 100px;\"src=\"").concat(pictureUrl, "\" alt=\"").concat(name, "\">");
    var infowindow = new google.maps.InfoWindow({
      content: contentInfoWindow
    });
    infowindow.open(map, marker);
  });
}
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//-------------------Take DOM nodes---------------------
var menuSection = document.querySelector("#menu");
menuSection.showButton = menuSection.querySelector('div[data-id="show-button"]');
menuSection.hamburger = menuSection.querySelector('svg[data-id="hamburger"]');
menuSection.list = menuSection.querySelector('ul[data-id="list"]');
menuSection.menuItems = _toConsumableArray(menuSection.querySelectorAll(".menu__item"));
menuSection.menuSubitems = _toConsumableArray(menuSection.querySelectorAll(".menu__subitem"));
menuSection.routesItems = _toConsumableArray(menuSection.querySelectorAll(".routes__item")); //-------------------Create global variables-----------------

var isMenuShown = false; //---------------------Add listeners to the DOM elements--------------------

menuSection.showButton.addEventListener("click", handleShowButtonClick);
menuSection.menuItems.forEach(function (item) {
  item.addEventListener("click", handleMenuItemClick);
});
menuSection.routesItems.forEach(function (item) {
  item.addEventListener("click", handleRoutesItemClick);
});
document.body.addEventListener("click", handleBodyClick);

function handleShowButtonClick() {
  if (!isMenuShown) {
    menuSection.showButton.classList.remove("menu__show-button--closed");
    menuSection.list.classList.remove("menu__list--hidden");
    menuSection.hamburger.classList.add("active");
    isMenuShown = true; // reset color menuItems on click menu button

    menuSection.menuItems.forEach(function (item) {
      item.style.background = "#ffffff";
    });
  } else {
    hideMenu();
  }
}

function handleBodyClick(_ref) {
  var target = _ref.target;

  if (!target.matches("#menu *")) {
    hideMenu();
  }
}

function handleMenuItemClick(event) {
  var target = event.target; //for those items which have submenu

  var chosenSubitem = menuSection.menuSubitems.find(function (subitem) {
    return subitem.getAttribute("data-id") === target.getAttribute("data-id");
  });

  if (chosenSubitem) {
    // If any subitem is opened it is necessary to hide it first
    hideMenuSubitems();
    chosenSubitem.classList.remove("menu__subitem--hidden");
    leaveOnlyOneTypeOfRoutes(target.getAttribute("data-id"));
    changeColorBackgroundOnClickMenuItems(event);
    closeRouteInfo();
    return;
  } // for other items


  if (target.matches('li[data-id="all"]')) {
    hideMenuSubitems();
    showAllPolylines();
    closeRouteInfo();
    changeColorBackgroundOnClickMenuItems(event);
    return;
  }

  if (target.matches('li[data-id="traffic-rules"]')) {
    document.getElementById("control-section").classList.remove("traffic--hidden"); //!!!!!!!!!!!!!!!!!!!!!!!!!!!

    hideMenu();
    showAllPolylines();
    closeRouteInfo();
    return;
  }

  if (target.matches('li[data-id="traffic-accidents"]')) {
    document.getElementById("accident-section").classList.remove("traffic--hidden"); //!!!!!!!!!!!!!!!!!!!!!!!!!!!

    hideMenu();
    showAllPolylines();
    closeRouteInfo();
    return;
  }
}

function handleRoutesItemClick(event) {
  var target = event.target;
  removeAllButOneRoute(target.getAttribute("data-id")); // change color background routesItems

  menuSection.routesItems.forEach(function (item) {
    item.style.background = "#ffffff";
  });
  target.style.background = "#c6dd9a"; // write routeInfoPreviewTitle

  var routeInfoPreviewTitle = document.querySelector(".route-info__preview-title");
  routeInfoPreviewTitle.textContent = "\u0429\u043E \u0446\u0456\u043A\u0430\u0432\u043E\u0433\u043E \u043D\u0430 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0456 ".concat(target.innerHTML, "?");
} //**************************AUX FUNCTIONS****************************/


function hideMenuSubitems() {
  menuSection.menuSubitems.forEach(function (subitem) {
    subitem.classList.add("menu__subitem--hidden");
  });
}

function hideMenu() {
  menuSection.showButton.classList.add("menu__show-button--closed");
  menuSection.list.classList.add("menu__list--hidden");
  menuSection.hamburger.classList.remove("active");
  hideMenuSubitems();
  isMenuShown = false;
}

function changeColorBackgroundOnClickMenuItems(event) {
  menuSection.menuItems.forEach(function (item) {
    item.style.background = "#ffffff";
  });
  event.target.style.background = "#c6dd9a";
  menuSection.routesItems.forEach(function (item) {
    item.style.background = "#ffffff";
  });
}
"use strict";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Сделать по образу и подобию mainMap, menu и пр.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.querySelector("#accident-close").addEventListener("click", function () {
  document.getElementById("accident-section").classList.add("traffic--hidden");
}); //---------------------Click open traffic TITLE listeners--------------------

var titleBtns = document.querySelectorAll(".traffic__expanded-button--js");
titleBtns.forEach(function (btn) {
  return btn.addEventListener("click", showText);
});

function showText(event) {
  titleBtns.forEach(function (btn) {
    if (btn == event.target) {
      btn.parentNode.nextSibling.classList.toggle("text--hidden");
      btn.classList.toggle("traffic__expanded-button--active");
    } else if (btn !== event.target) {
      btn.parentNode.nextSibling.classList.add("text--hidden");
      btn.classList.remove("traffic__expanded-button--active");
    }
  });
} //---------------------Click open traffic--inner listeners-----open section inner text---------------


var innerBtns = document.querySelectorAll(".traffic__expanded-button--inner");
innerBtns.forEach(function (btn) {
  return btn.addEventListener("click", showInnerText);
});

function showInnerText(event) {
  innerBtns.forEach(function (btn) {
    if (btn == event.target) {
      btn.nextSibling.classList.toggle("text--hidden");
      btn.classList.toggle("traffic__expanded-button--active");
    } else if (btn !== event.target) {
      btn.nextSibling.classList.add("text--hidden");
      btn.classList.remove("traffic__expanded-button--active");
    }
  });
} //================Click open traffic--inner listeners-----open section LOWS inner text=================================


var lowBtns = document.querySelectorAll(".traffic__expanded-button--low-js");
lowBtns.forEach(function (btn) {
  return btn.addEventListener("click", showLowText);
});

function showLowText(event) {
  lowBtns.forEach(function (btn) {
    if (btn == event.target) {
      btn.parentNode.nextSibling.classList.toggle("text--hidden");
      btn.classList.toggle("traffic__expanded-button--active");
    } else if (btn !== event.target) {
      btn.parentNode.nextSibling.classList.add("text--hidden");
      btn.classList.remove("traffic__expanded-button--active");
    }
  });
} //================Smooth scroll to anchor link START=================================


$(document).ready(function () {
  $("a.scrollto").click(function () {
    $(".traffic").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
}); //================Smooth scroll to anchor link END=================================
"use strict";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Сделать по образу и подобию mainMap, menu и пр.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.getElementById("control-close").addEventListener("click", function () {
  document.getElementById("control-section").classList.add("traffic--hidden");
});
"use strict";

//-------------------Take DOM nodes---------------------
var routeInfoSection = document.getElementById("route-info");
routeInfoSection.header = routeInfoSection.querySelector('div[data-id="header"]'); //-------------------Create global variables-----------------

var routeInfoSectionStates = {
  closed: 0,
  headerShown: 1,
  fullyShown: 2
};
var routeInfoSectionState = routeInfoSectionStates.closed; //---------------------Add click listeners to buttons--------------------

routeInfoSection.header.addEventListener("click", handleHeaderClick);

function handleHeaderClick() {
  if (routeInfoSectionState === routeInfoSectionStates.headerShown) {
    openRouteInfo();
    return;
  }

  if (routeInfoSectionState === routeInfoSectionStates.fullyShown) {
    closeRouteInfo();
    return;
  }
}

function showHeaderRouteInfo() {
  routeInfoSection.classList.add("route-info--header-shown");
  routeInfoSection.classList.remove("route-info--fully-hidden");
  routeInfoSectionState = routeInfoSectionStates.headerShown;
}

function openRouteInfo() {
  routeInfoSection.classList.remove("route-info--header-shown");
  routeInfoSectionState = routeInfoSectionStates.fullyShown;
}

function closeRouteInfo() {
  routeInfoSection.classList.remove("route-info--header-shown");
  routeInfoSection.classList.add("route-info--fully-hidden");
  routeInfoSectionState = routeInfoSectionStates.closed;
}
"use strict";

//---------------------Show/hide routes----------------------------------
function removeAllButOneRoute(name) {
  polylines.forEach(function (item) {
    if (item.name !== name) {
      item.polyline.setMap(null);
    } else {
      item.polyline.setMap(map);
      var polylineNumberPoints = item.polyline.route.length - 1; // set center of polyline and init map on this center START

      setTimeout(function () {
        // set first and last point of polylines and they lat and lng
        var startLatLng = "lat: ".concat(item.polyline.route[0].lat, ", lng: ").concat(item.polyline.route[0].lng);
        var endLatLng = "lat: ".concat(item.polyline.route[polylineNumberPoints].lat, ", lng: ").concat(item.polyline.route[polylineNumberPoints].lng); // set center of polylines

        var lat = (item.polyline.route[0].lat + item.polyline.route[polylineNumberPoints].lat) / 2;
        var lng = (item.polyline.route[0].lng + item.polyline.route[polylineNumberPoints].lng) / 2;
        zoomMap = 14;
        map = new google.maps.Map(document.getElementById("map"), {
          center: {
            lat: lat,
            lng: lng
          },
          // center of map
          zoom: zoomMap,
          disableDefaultUI: true,
          styles: mapStyles
        });
        item.polyline.setMap(map);
      }, 0); // set center of polyline and init map on this center END
    }

    areAllPolylinesShown = false;
  });
  showHeaderRouteInfo();
}

function leaveOnlyOneTypeOfRoutes(type) {
  if (zoomMap === 14) {
    zoomMapAndRebuild();
  }

  polylines.forEach(function (item) {
    if (item.type !== type) {
      item.polyline.setMap(null);
    } else {
      item.polyline.setMap(map);
    }

    areAllPolylinesShown = false;
  });
}

function showAllPolylines() {
  if (zoomMap === 14) {
    zoomMapAndRebuild();
  }

  if (areAllPolylinesShown) {
    return;
  }

  polylines.forEach(function (item) {
    item.polyline.setMap(map);
  });
  areAllPolylinesShown = true;
}

function zoomMapAndRebuild() {
  zoomMap = 12.9;
  map = new google.maps.Map(document.getElementById("map"), {
    center: centerOfTheMap,
    // center of map
    zoom: zoomMap,
    disableDefaultUI: true,
    styles: mapStyles
  });
}

function handlePolylineRoutesItemClick(handlePolyline) {
  removeAllButOneRoute(handlePolyline.name); // write routeInfoPreviewTitle

  var routeInfoPreviewTitle = document.querySelector(".route-info__preview-title");
  routeInfoPreviewTitle.textContent = "\u0429\u043E \u0446\u0456\u043A\u0430\u0432\u043E\u0433\u043E \u043D\u0430 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0456 ".concat(handlePolyline.nameRus, "?");
}