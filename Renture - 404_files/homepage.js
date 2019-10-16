var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
            if (void 0 !== a.style[c]) return { end: b[c] };
        }return !1;
    }a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;a(this).one("bsTransitionEnd", function () {
            c = !0;
        });var e = function e() {
            c || a(d).trigger(a.support.transition.end);
        };return setTimeout(e, b), this;
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
            } });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
        });
    }var c = '[data-dismiss="alert"]',
        d = function d(b) {
        a(b).on("click", c, this.close);
    };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove();
        }var e = a(this),
            f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a("#" === f ? [] : f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
    };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this;
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof2(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
        });
    }var c = function c(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
    };c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
        }, this), 0);
    }, c.prototype.toggle = function () {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
            var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
    };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this;
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target).closest(".btn");b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof2(b)) && b),
                g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }var c = function c(b, _c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {case 37:
                    this.prev();break;case 39:
                    this.next();break;default:
                    return;}a.preventDefault();
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;return this.$items.eq(f);
    }, c.prototype.to = function (a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a);
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, c.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
    }, c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
            }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m);
                }, 0);
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
        }
    };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this;
    };var e = function e(c) {
        var d,
            e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
        }
    };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);b.call(c, c.data());
        });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c,
            d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
    }function c(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof2(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
        });
    }var d = function d(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
    };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");return a ? "width" : "height";
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b,
                e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
                    };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
        }, this)).end();
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
    };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this;
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();c.call(f, h);
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
    }function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this),
                e = b(d),
                f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }function d(b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
        });
    }var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function g(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
        var e = a(this);if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
            }return !1;
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);if (i.length) {
                    var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
                }
            }
        }
    };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this;
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
    "use strict";
    function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof2(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
        });
    }var c = function c(b, _c2) {
        this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f);
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
        }));
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
        }, this));
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
    }, c.prototype.hideModal = function () {
        var a = this;this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
        });
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");var g = function g() {
                d.removeBackdrop(), b && b();
            };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
        } else b && b();
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog();
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;if (!a) {
            var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
        }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
    };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus");
            });
        }), b.call(f, g, this);
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof2(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }var c = function c(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS;
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
    }, c.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show());
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState) {
            if (this.inState[a]) return !0;
        }return !1;
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide();
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
                f = this.tip(),
                g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
            }var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
                var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
            };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
                d.css({ top: Math.round(a.top), left: Math.round(a.left) });
            } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
            j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
        }var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
    }, c.prototype.fixTitle = function () {
        var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, c.prototype.hasContent = function () {
        return this.getTitle();
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
            h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            i = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, h, i, g);
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
            var j = b.left - f,
                k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
        }return e;
    }, c.prototype.getTitle = function () {
        var a,
            b = this.$element,
            c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, c.prototype.getUID = function (a) {
        do {
            a += ~~(1e6 * Math.random());
        } while (document.getElementById(a));return a;
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, c.prototype.enable = function () {
        this.enabled = !0;
    }, c.prototype.disable = function () {
        this.enabled = !1;
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
    }, c.prototype.toggle = function (b) {
        var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, c.prototype.destroy = function () {
        var a = this;clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
        });
    };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this;
    };
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof2(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }var c = function c(a, b) {
        this.init("popover", a, b);
    };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS;
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
    }, c.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this;
    };
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
    }function c(c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == (typeof c === "undefined" ? "undefined" : _typeof2(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, b.prototype.refresh = function () {
        var b = this,
            c = "offset",
            d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
        }).sort(function (a, b) {
            return a[0] - b[0];
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1]);
        });
    }, b.prototype.process = function () {
        var a,
            b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
            g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
        }
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this;
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);c.call(b, b.data());
        });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
        });
    }var c = function c(b) {
        this.element = a(b);
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
                });
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
        }var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
    };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this;
    };var e = function e(c) {
        c.preventDefault(), b.call(a(this), "show");
    };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof2(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
        });
    }var c = function c(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
    };c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();if (null != c && "top" == this.affixed) return e < c && "top";if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
            b = this.$element.offset();return this.pinnedOffset = b.top - a;
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());"object" != (typeof d === "undefined" ? "undefined" : _typeof2(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
            }"bottom" == h && this.$element.offset({ top: g - b - f });
        }
    };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this;
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this),
                d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
        });
    });
}(jQuery);
/*
 * jquery.chain-height.js v1.0.6
 *
 * Description: Synchronizes heights of selected elements on window resize
 * Copyright: http://www.agentimage.com
 * License: Proprietary
 */

(function () {

    jQuery.fn.chainHeight = function (settings) {

        ChainHeight(jQuery(this), settings);
        return jQuery(this);
    };

    function ChainHeight(elem, settings) {

        var target = jQuery(elem);
        settings = jQuery.extend({
            'master': false,
            'breakpoints': [{
                'min': 0,
                'max': 'none'
            }],
            'refreshDelay': 1000
        }, settings);

        (function () {

            doResizeEvents();
            jQuery(window).on('resize', function () {
                doResizeEvents;
            });
            jQuery(window).on('load', function () {
                doResizeEvents;
            });
        })();

        function doResizeEvents() {

            setTimeout(function () {
                chainHeights();
            }, settings.refreshDelay);
        }

        function allowedToRun() {

            var winWidth = jQuery(window).width();
            var result = false;

            jQuery.each(settings.breakpoints, function (index, elem) {

                /* If window width is within breakpoints */
                if (winWidth >= elem.min && winWidth <= elem.max) {
                    result = true;
                }

                /* If there is no max width */
                else if (winWidth >= elem.min && elem.max == 'none') {
                        result = true;
                    }

                    /* Else default */
                    else {
                            result = false;
                        }
            });

            return result;
        }

        function chainHeights() {

            var height = 0;
            target.css('height', 'auto');

            if (allowedToRun()) {

                if (jQuery(settings.master).length > 0) {
                    height = jQuery(settings.master).height();
                } else {

                    /* Loop through elements */
                    target.each(function (i, v) {

                        var elemHeight = jQuery(v).outerHeight();

                        /* Check box-sizing */
                        if (jQuery(v).css('box-sizing') == 'border-box') {
                            elemHeight += parseInt(jQuery(v).css('padding-top')) + parseInt(jQuery(v).css('padding-bottom'));
                        }

                        /* Compare heights */
                        if (elemHeight > height) {
                            height = elemHeight;
                        }
                    });
                }
            } else {

                /* Reset height */
                height = 'auto';
            }

            /* Loop through elements */
            target.each(function (i, v) {

                /* Check box-sizing */
                if (jQuery(v).css('box-sizing') != 'border-box') {
                    height -= parseInt(jQuery(v).css('padding-top')) + parseInt(jQuery(v).css('padding-bottom'));
                }

                /* Apply height */
                jQuery(v).css('height', height);
            });
        }
    }
})();
!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) && module.exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function (t) {
    var e = function () {
        function e() {
            var e = this,
                n = function n() {
                var n = ["br-wrapper"];"" !== e.options.theme && n.push("br-theme-" + e.options.theme), e.$elem.wrap(t("<div />", { "class": n.join(" ") }));
            },
                i = function i() {
                e.$elem.unwrap();
            },
                a = function a(n) {
                return t.isNumeric(n) && (n = Math.floor(n)), t('option[value="' + n + '"]', e.$elem);
            },
                r = function r() {
                var n = e.options.initialRating;return n ? a(n) : t("option:selected", e.$elem);
            },
                o = function o() {
                var n = e.$elem.find('option[value="' + e.options.emptyValue + '"]');return !n.length && e.options.allowEmpty ? (n = t("<option />", { value: e.options.emptyValue }), n.prependTo(e.$elem)) : n;
            },
                l = function l(t) {
                var n = e.$elem.data("barrating");return "undefined" != typeof t ? n[t] : n;
            },
                s = function s(t, n) {
                null !== n && "object" == (typeof n === "undefined" ? "undefined" : _typeof2(n)) ? e.$elem.data("barrating", n) : e.$elem.data("barrating")[t] = n;
            },
                u = function u() {
                var t = r(),
                    n = o(),
                    i = t.val(),
                    a = t.data("html") ? t.data("html") : t.text(),
                    l = null !== e.options.allowEmpty ? e.options.allowEmpty : !!n.length,
                    u = n.length ? n.val() : null,
                    d = n.length ? n.text() : null;s(null, { userOptions: e.options, ratingValue: i, ratingText: a, originalRatingValue: i, originalRatingText: a, allowEmpty: l, emptyRatingValue: u, emptyRatingText: d, readOnly: e.options.readonly, ratingMade: !1 });
            },
                d = function d() {
                e.$elem.removeData("barrating");
            },
                c = function c() {
                return l("ratingText");
            },
                f = function f() {
                return l("ratingValue");
            },
                g = function g() {
                var n = t("<div />", { "class": "br-widget" });return e.$elem.find("option").each(function () {
                    var i, a, r, o;i = t(this).val(), i !== l("emptyRatingValue") && (a = t(this).text(), r = t(this).data("html"), r && (a = r), o = t("<a />", { href: "#", "data-rating-value": i, "data-rating-text": a, html: e.options.showValues ? a : "" }), n.append(o));
                }), e.options.showSelectedRating && n.append(t("<div />", { text: "", "class": "br-current-rating" })), e.options.reverse && n.addClass("br-reverse"), e.options.readonly && n.addClass("br-readonly"), n;
            },
                p = function p() {
                return l("userOptions").reverse ? "nextAll" : "prevAll";
            },
                h = function h(t) {
                a(t).prop("selected", !0), e.$elem.change();
            },
                m = function m() {
                t("option", e.$elem).prop("selected", function () {
                    return this.defaultSelected;
                }), e.$elem.change();
            },
                v = function v(t) {
                t = t ? t : c(), t == l("emptyRatingText") && (t = ""), e.options.showSelectedRating && e.$elem.parent().find(".br-current-rating").text(t);
            },
                y = function y(t) {
                return Math.round(Math.floor(10 * t) / 10 % 1 * 100);
            },
                b = function b() {
                e.$widget.find("a").removeClass(function (t, e) {
                    return (e.match(/(^|\s)br-\S+/g) || []).join(" ");
                });
            },
                w = function w() {
                var n,
                    i,
                    a = e.$widget.find('a[data-rating-value="' + f() + '"]'),
                    r = l("userOptions").initialRating,
                    o = t.isNumeric(f()) ? f() : 0,
                    s = y(r);if (b(), a.addClass("br-selected br-current")[p()]().addClass("br-selected"), !l("ratingMade") && t.isNumeric(r)) {
                    if (o >= r || !s) return;n = e.$widget.find("a"), i = a.length ? a[l("userOptions").reverse ? "prev" : "next"]() : n[l("userOptions").reverse ? "last" : "first"](), i.addClass("br-fractional"), i.addClass("br-fractional-" + s);
                }
            },
                $ = function $(t) {
                return l("allowEmpty") && l("userOptions").deselectable ? f() == t.attr("data-rating-value") : !1;
            },
                x = function x(n) {
                n.on("click.barrating", function (n) {
                    var i,
                        a,
                        r = t(this),
                        o = l("userOptions");return n.preventDefault(), i = r.attr("data-rating-value"), a = r.attr("data-rating-text"), $(r) && (i = l("emptyRatingValue"), a = l("emptyRatingText")), s("ratingValue", i), s("ratingText", a), s("ratingMade", !0), h(i), v(a), w(), o.onSelect.call(e, f(), c(), n), !1;
                });
            },
                R = function R(e) {
                e.on("mouseenter.barrating", function () {
                    var e = t(this);b(), e.addClass("br-active")[p()]().addClass("br-active"), v(e.attr("data-rating-text"));
                });
            },
                V = function V(t) {
                e.$widget.on("mouseleave.barrating blur.barrating", function () {
                    v(), w();
                });
            },
                O = function O(e) {
                e.on("touchstart.barrating", function (e) {
                    e.preventDefault(), e.stopPropagation(), t(this).click();
                });
            },
                C = function C(t) {
                t.on("click.barrating", function (t) {
                    t.preventDefault();
                });
            },
                S = function S(t) {
                x(t), e.options.hoverState && (R(t), V(t));
            },
                T = function T(t) {
                t.off(".barrating");
            },
                j = function j(t) {
                var n = e.$widget.find("a");O && O(n), t ? (T(n), C(n)) : S(n);
            };this.show = function () {
                l() || (n(), u(), e.$widget = g(), e.$widget.insertAfter(e.$elem), w(), v(), j(e.options.readonly), e.$elem.hide());
            }, this.readonly = function (t) {
                "boolean" == typeof t && l("readOnly") != t && (j(t), s("readOnly", t), e.$widget.toggleClass("br-readonly"));
            }, this.set = function (t) {
                var n = l("userOptions");0 !== e.$elem.find('option[value="' + t + '"]').length && (s("ratingValue", t), s("ratingText", e.$elem.find('option[value="' + t + '"]').text()), s("ratingMade", !0), h(f()), v(c()), w(), n.silent || n.onSelect.call(this, f(), c()));
            }, this.clear = function () {
                var t = l("userOptions");s("ratingValue", l("originalRatingValue")), s("ratingText", l("originalRatingText")), s("ratingMade", !1), m(), v(c()), w(), t.onClear.call(this, f(), c());
            }, this.destroy = function () {
                var t = f(),
                    n = c(),
                    a = l("userOptions");T(e.$widget.find("a")), e.$widget.remove(), d(), i(), e.$elem.show(), a.onDestroy.call(this, t, n);
            };
        }return e.prototype.init = function (e, n) {
            return this.$elem = t(n), this.options = t.extend({}, t.fn.barrating.defaults, e), this.options;
        }, e;
    }();t.fn.barrating = function (n, i) {
        return this.each(function () {
            var a = new e();if (t(this).is("select") || t.error("Sorry, this plugin only works with select fields."), a.hasOwnProperty(n)) {
                if (a.init(i, this), "show" === n) return a.show(i);if (a.$elem.data("barrating")) return a.$widget = t(this).next(".br-widget"), a[n](i);
            } else {
                if ("object" == (typeof n === "undefined" ? "undefined" : _typeof2(n)) || !n) return i = n, a.init(i, this), a.show();t.error("Method " + n + " does not exist on jQuery.barrating");
            }
        });
    }, t.fn.barrating.defaults = { theme: "", initialRating: null, allowEmpty: null, emptyValue: "", showValues: !1, showSelectedRating: !0, deselectable: !0, reverse: !1, readonly: !1, fastClicks: !0, hoverState: !0, silent: !1, onSelect: function onSelect(t, e, n) {}, onClear: function onClear(t, e) {}, onDestroy: function onDestroy(t, e) {} }, t.fn.barrating.BarRating = e;
});
//# sourceMappingURL=jquery.barrating.min.js.map
var AnalyticsListing = {
    INIT: function INIT(stage) {
        this.EVENTS();
        this.defaultDisplay(stage);
        this.DataTables(stage);
    },

    EVENTS: function EVENTS() {
        $('a.analytics-view').on('click', function () {
            var d = $(this),
                v = d.data('type');
            $('.active').removeClass('active');
            $(this).addClass('active');
        });
        $('h3.listing-analytics').on('click', function () {
            $('.active').removeClass('active');
            $(this).addClass('active');
            var url = $(this).attr('data-url');
            var arrIndex = '';
            if ($('.sales-trend').hasClass('active')) {
                $('div.sales-trend').removeClass('d-none');
                $('div.lease-trend').addClass('d-none');
                arrIndex = 'sold';
            } else if ($('.lease-trend').hasClass('active')) {
                $('div.lease-trend').removeClass('d-none');
                $('div.sales-trend').addClass('d-none');
                arrIndex = 'rent';
            }
            $.ajax({
                type: 'get',
                url: url
            }).done(function (result) {
                $('span.total_sales_rent').html(result[arrIndex]);
            });
        });
        $('select.choose-year').on('change', function (event) {
            var thisTarget = $(event.target);
            var actionURL = thisTarget.attr('action');
            var serializeAllData = "choose_years=" + $(this).val();
            history.pushState({}, {}, window.location.origin + window.location.pathname + '?' + serializeAllData);
            var url = $(this).attr('data-url');
            location.reload();
        });
    },
    DataTables: function DataTables(stage) {
        var targetTbl = [];
        switch (stage) {
            case 'views':
            case 'likes':
            case 'appearances':
                targetTbl['table_elem'] = $('table#listing-count-datatable.table');
                targetTbl['targets'] = 4;
                break;
            case 'leads':
                targetTbl['table_elem'] = $('table#listing-leads-datatable.table');
                targetTbl['targets'] = 5;
                break;
            case 'sold':
                targetTbl['table_elem'] = $('table#listing-sale-datatable.table');
                targetTbl['targets'] = 3;
                break;
            default:
                targetTbl['table_elem'] = $('table#listing-analytics-datatable.table');
                targetTbl['targets'] = 3;
        }
        //Dynamic table for other stage pages.
        targetTbl['table_elem'].DataTable({
            language: {
                search: '<i class="material-icons">search</i>',
                searchPlaceholder: "Search",
                paginate: {
                    previous: '<',
                    next: '>'
                }
            },
            autoWidth: false,
            bAutoWidth: false,
            processing: true,
            destroy: true,
            serverSide: true,
            pagingType: 'simple',
            responsive: true,
            dom: '<"row mt-3"<"col-lg-6"l><"col-lg-3"ip><"col-lg-3"f>>rt',
            ajax: {
                url: targetTbl['table_elem'].attr('data-get-table'),
                data: {
                    stage: stage
                }
            },
            order: [],
            columnDefs: [{ targets: targetTbl['targets'], render: function render(data) {
                    data = data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                    return "<span>&#8369;</span> " + data;
                },
                orderable: true,
                searchable: false
            }]
        });
        //For Lease Trend Listing in sold listings
        $('table#listing-rent-datatable.table').DataTable({
            language: {
                search: '<i class="material-icons">search</i>',
                searchPlaceholder: "Search",
                paginate: {
                    previous: '<',
                    next: '>'
                }
            },
            autoWidth: false,
            bAutoWidth: false,
            processing: true,
            destroy: true,
            serverSide: true,
            pagingType: 'simple',
            responsive: true,
            dom: '<"row mt-3"<"col-lg-6"l><"col-lg-3"ip><"col-lg-3"f>>rt',
            ajax: {
                url: $('table#listing-rent-datatable.table').attr('data-get-table'),
                data: {
                    stage: stage
                }
            },
            order: [],
            columnDefs: [{ targets: targetTbl['targets'], render: function render(data) {
                    data = data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                    return "<span>&#8369;</span> " + data;
                },
                orderable: true,
                searchable: false
            }]
        });
    },
    defaultDisplay: function defaultDisplay(stage) {
        switch (stage) {
            case 'views':
                $('a.analytics-view.property-views').addClass('active');
                break;
            case 'likes':
                $('a.analytics-view.favorites').addClass('active');
                break;
            case 'leads':
                $('a.analytics-view.leads-generated').addClass('active');
                break;
            case 'appearances':
                $('a.analytics-view.search-appearances').addClass('active');
                break;
            default:
                return false;
        }
    }
};
var AutoCompelete = {
    INIT: function INIT(inp) {
        this.EVENTS(inp);
    },

    EVENTS: function EVENTS(inp) {
        var currentFocus;
        inp.addEventListener("input", function (e) {
            var a,
                modelName,
                modelValues,
                i,
                val = this.value;
            var model = ['Developer', 'Development', 'City', 'Country'];
            closeAllLists();
            if (!val) {
                return false;
            }
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + " autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            $.ajax({
                type: 'get',
                url: inp.getAttribute('data-get-url'),
                data: {
                    inputdata: inp.value,
                    model: model
                }
            }).done(function (result) {
                $.each(result, function (key, value) {
                    if (value.length > 0) {
                        modelName = document.createElement("DIV");
                        modelName.innerHTML = "<strong class='sample'>" + key + "</strong>";
                        a.appendChild(modelName);
                        value.map(function (val) {
                            modelValues = document.createElement("DIV");
                            modelValues.innerHTML += "<span>" + val.name.substr(val.length) + "</span>";
                            if (key == 'City') {
                                modelValues.innerHTML += "<small class='code'>" + val.code.substr(val.length) + "</small>";
                            }
                            modelValues.innerHTML += "<input type='hidden' value='" + val.name + " data-city = " + +"'>";
                            modelValues.addEventListener("click", function (e) {
                                if (key == 'City') {
                                    var city = $('#city');
                                    city.val('');
                                    city.val(val.name);
                                }
                                $('#country').val(val.code);
                                $('#mega-search').val('');
                                $('#search-form').submit();
                                closeAllLists();
                            });
                            a.appendChild(modelValues);
                        });
                    }
                });
            });
        });
        inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) {
                x = x.getElementsByTagName("div");
            }
            if (e.keyCode == 40) {
                currentFocus++;
                addActive(x);
            } else if (e.keyCode == 38) {
                currentFocus--;
                addActive(x);
            } else if (e.keyCode == 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    if (x) {
                        x[currentFocus].click();
                    }
                }
            }
        });
        function addActive(x) {
            if (!x) {
                return false;
            }
            removeActive(x);
            if (currentFocus >= x.length) {
                currentFocus = 0;
            }
            if (currentFocus < 0) {
                currentFocus = x.length - 1;
            }
            x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }
        function closeAllLists(elmnt) {
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }
};
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function () {
    function n(n) {
        function t(t, r, e, u, i, o) {
            for (; i >= 0 && o > i; i += n) {
                var a = u ? u[i] : i;e = r(e, t[a], a, t);
            }return e;
        }return function (r, e, u, i) {
            e = b(e, i, 4);var o = !k(r) && m.keys(r),
                a = (o || r).length,
                c = n > 0 ? 0 : a - 1;return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a);
        };
    }function t(n) {
        return function (t, r, e) {
            r = x(r, e);for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n) {
                if (r(t[i], i, t)) return i;
            }return -1;
        };
    }function r(n, t, r) {
        return function (e, u, i) {
            var o = 0,
                a = O(e);if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;else if (r && i && a) return i = r(e, u), e[i] === u ? i : -1;if (u !== u) return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1;for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n) {
                if (e[i] === u) return i;
            }return -1;
        };
    }function e(n, t) {
        var r = I.length,
            e = n.constructor,
            u = m.isFunction(e) && e.prototype || a,
            i = "constructor";for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;) {
            i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i);
        }
    }var u = this,
        i = u._,
        o = Array.prototype,
        a = Object.prototype,
        c = Function.prototype,
        f = o.push,
        l = o.slice,
        s = a.toString,
        p = a.hasOwnProperty,
        h = Array.isArray,
        v = Object.keys,
        g = c.bind,
        y = Object.create,
        d = function d() {},
        m = function m(n) {
        return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n);
    };"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3";var b = function b(n, t, r) {
        if (t === void 0) return n;switch (null == r ? 3 : r) {case 1:
                return function (r) {
                    return n.call(t, r);
                };case 2:
                return function (r, e) {
                    return n.call(t, r, e);
                };case 3:
                return function (r, e, u) {
                    return n.call(t, r, e, u);
                };case 4:
                return function (r, e, u, i) {
                    return n.call(t, r, e, u, i);
                };}return function () {
            return n.apply(t, arguments);
        };
    },
        x = function x(n, t, r) {
        return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n);
    };m.iteratee = function (n, t) {
        return x(n, t, 1 / 0);
    };var _ = function _(n, t) {
        return function (r) {
            var e = arguments.length;if (2 > e || null == r) return r;for (var u = 1; e > u; u++) {
                for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                    var f = o[c];t && r[f] !== void 0 || (r[f] = i[f]);
                }
            }return r;
        };
    },
        j = function j(n) {
        if (!m.isObject(n)) return {};if (y) return y(n);d.prototype = n;var t = new d();return d.prototype = null, t;
    },
        w = function w(n) {
        return function (t) {
            return null == t ? void 0 : t[n];
        };
    },
        A = Math.pow(2, 53) - 1,
        O = w("length"),
        k = function k(n) {
        var t = O(n);return "number" == typeof t && t >= 0 && A >= t;
    };m.each = m.forEach = function (n, t, r) {
        t = b(t, r);var e, u;if (k(n)) for (e = 0, u = n.length; u > e; e++) {
            t(n[e], e, n);
        } else {
            var i = m.keys(n);for (e = 0, u = i.length; u > e; e++) {
                t(n[i[e]], i[e], n);
            }
        }return n;
    }, m.map = m.collect = function (n, t, r) {
        t = x(t, r);for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
            var a = e ? e[o] : o;i[o] = t(n[a], a, n);
        }return i;
    }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function (n, t, r) {
        var e;return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0;
    }, m.filter = m.select = function (n, t, r) {
        var e = [];return t = x(t, r), m.each(n, function (n, r, u) {
            t(n, r, u) && e.push(n);
        }), e;
    }, m.reject = function (n, t, r) {
        return m.filter(n, m.negate(x(t)), r);
    }, m.every = m.all = function (n, t, r) {
        t = x(t, r);for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;if (!t(n[o], o, n)) return !1;
        }return !0;
    }, m.some = m.any = function (n, t, r) {
        t = x(t, r);for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;if (t(n[o], o, n)) return !0;
        }return !1;
    }, m.contains = m.includes = m.include = function (n, t, r, e) {
        return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0;
    }, m.invoke = function (n, t) {
        var r = l.call(arguments, 2),
            e = m.isFunction(t);return m.map(n, function (n) {
            var u = e ? t : n[t];return null == u ? u : u.apply(n, r);
        });
    }, m.pluck = function (n, t) {
        return m.map(n, m.property(t));
    }, m.where = function (n, t) {
        return m.filter(n, m.matcher(t));
    }, m.findWhere = function (n, t) {
        return m.find(n, m.matcher(t));
    }, m.max = function (n, t, r) {
        var e,
            u,
            i = -1 / 0,
            o = -1 / 0;if (null == t && null != n) {
            n = k(n) ? n : m.values(n);for (var a = 0, c = n.length; c > a; a++) {
                e = n[a], e > i && (i = e);
            }
        } else t = x(t, r), m.each(n, function (n, r, e) {
            u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u);
        });return i;
    }, m.min = function (n, t, r) {
        var e,
            u,
            i = 1 / 0,
            o = 1 / 0;if (null == t && null != n) {
            n = k(n) ? n : m.values(n);for (var a = 0, c = n.length; c > a; a++) {
                e = n[a], i > e && (i = e);
            }
        } else t = x(t, r), m.each(n, function (n, r, e) {
            u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u);
        });return i;
    }, m.shuffle = function (n) {
        for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) {
            t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
        }return u;
    }, m.sample = function (n, t, r) {
        return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t));
    }, m.sortBy = function (n, t, r) {
        return t = x(t, r), m.pluck(m.map(n, function (n, r, e) {
            return { value: n, index: r, criteria: t(n, r, e) };
        }).sort(function (n, t) {
            var r = n.criteria,
                e = t.criteria;if (r !== e) {
                if (r > e || r === void 0) return 1;if (e > r || e === void 0) return -1;
            }return n.index - t.index;
        }), "value");
    };var F = function F(n) {
        return function (t, r, e) {
            var u = {};return r = x(r, e), m.each(t, function (e, i) {
                var o = r(e, i, t);n(u, e, o);
            }), u;
        };
    };m.groupBy = F(function (n, t, r) {
        m.has(n, r) ? n[r].push(t) : n[r] = [t];
    }), m.indexBy = F(function (n, t, r) {
        n[r] = t;
    }), m.countBy = F(function (n, t, r) {
        m.has(n, r) ? n[r]++ : n[r] = 1;
    }), m.toArray = function (n) {
        return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : [];
    }, m.size = function (n) {
        return null == n ? 0 : k(n) ? n.length : m.keys(n).length;
    }, m.partition = function (n, t, r) {
        t = x(t, r);var e = [],
            u = [];return m.each(n, function (n, r, i) {
            (t(n, r, i) ? e : u).push(n);
        }), [e, u];
    }, m.first = m.head = m.take = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t);
    }, m.initial = function (n, t, r) {
        return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)));
    }, m.last = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t));
    }, m.rest = m.tail = m.drop = function (n, t, r) {
        return l.call(n, null == t || r ? 1 : t);
    }, m.compact = function (n) {
        return m.filter(n, m.identity);
    };var S = function S(n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
            var c = n[o];if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                t || (c = S(c, t, r));var f = 0,
                    l = c.length;for (u.length += l; l > f;) {
                    u[i++] = c[f++];
                }
            } else r || (u[i++] = c);
        }return u;
    };m.flatten = function (n, t) {
        return S(n, t, !1);
    }, m.without = function (n) {
        return m.difference(n, l.call(arguments, 1));
    }, m.uniq = m.unique = function (n, t, r, e) {
        m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e));for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
            var c = n[o],
                f = r ? r(c, o, n) : c;t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c);
        }return u;
    }, m.union = function () {
        return m.uniq(S(arguments, !0, !0));
    }, m.intersection = function (n) {
        for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
            var i = n[e];if (!m.contains(t, i)) {
                for (var o = 1; r > o && m.contains(arguments[o], i); o++) {}o === r && t.push(i);
            }
        }return t;
    }, m.difference = function (n) {
        var t = S(arguments, !0, !0, 1);return m.filter(n, function (n) {
            return !m.contains(t, n);
        });
    }, m.zip = function () {
        return m.unzip(arguments);
    }, m.unzip = function (n) {
        for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++) {
            r[e] = m.pluck(n, e);
        }return r;
    }, m.object = function (n, t) {
        for (var r = {}, e = 0, u = O(n); u > e; e++) {
            t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        }return r;
    }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function (n, t, r, e) {
        r = x(r, e, 1);for (var u = r(t), i = 0, o = O(n); o > i;) {
            var a = Math.floor((i + o) / 2);r(n[a]) < u ? i = a + 1 : o = a;
        }return i;
    }, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function (n, t, r) {
        null == t && (t = n || 0, n = 0), r = r || 1;for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) {
            u[i] = n;
        }return u;
    };var E = function E(n, t, r, e, u) {
        if (!(e instanceof t)) return n.apply(r, u);var i = j(n.prototype),
            o = n.apply(i, u);return m.isObject(o) ? o : i;
    };m.bind = function (n, t) {
        if (g && n.bind === g) return g.apply(n, l.call(arguments, 1));if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");var r = l.call(arguments, 2),
            e = function e() {
            return E(n, e, t, this, r.concat(l.call(arguments)));
        };return e;
    }, m.partial = function (n) {
        var t = l.call(arguments, 1),
            r = function r() {
            for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++) {
                i[o] = t[o] === m ? arguments[e++] : t[o];
            }for (; e < arguments.length;) {
                i.push(arguments[e++]);
            }return E(n, r, this, this, i);
        };return r;
    }, m.bindAll = function (n) {
        var t,
            r,
            e = arguments.length;if (1 >= e) throw new Error("bindAll must be passed function names");for (t = 1; e > t; t++) {
            r = arguments[t], n[r] = m.bind(n[r], n);
        }return n;
    }, m.memoize = function (n, t) {
        var r = function r(e) {
            var u = r.cache,
                i = "" + (t ? t.apply(this, arguments) : e);return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i];
        };return r.cache = {}, r;
    }, m.delay = function (n, t) {
        var r = l.call(arguments, 2);return setTimeout(function () {
            return n.apply(null, r);
        }, t);
    }, m.defer = m.partial(m.delay, m, 1), m.throttle = function (n, t, r) {
        var e,
            u,
            i,
            o = null,
            a = 0;r || (r = {});var c = function c() {
            a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null);
        };return function () {
            var f = m.now();a || r.leading !== !1 || (a = f);var l = t - (f - a);return e = this, u = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i;
        };
    }, m.debounce = function (n, t, r) {
        var e,
            u,
            i,
            o,
            a,
            c = function c() {
            var f = m.now() - o;t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)));
        };return function () {
            i = this, u = arguments, o = m.now();var f = r && !e;return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a;
        };
    }, m.wrap = function (n, t) {
        return m.partial(t, n);
    }, m.negate = function (n) {
        return function () {
            return !n.apply(this, arguments);
        };
    }, m.compose = function () {
        var n = arguments,
            t = n.length - 1;return function () {
            for (var r = t, e = n[t].apply(this, arguments); r--;) {
                e = n[r].call(this, e);
            }return e;
        };
    }, m.after = function (n, t) {
        return function () {
            return --n < 1 ? t.apply(this, arguments) : void 0;
        };
    }, m.before = function (n, t) {
        var r;return function () {
            return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r;
        };
    }, m.once = m.partial(m.before, 2);var M = !{ toString: null }.propertyIsEnumerable("toString"),
        I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];m.keys = function (n) {
        if (!m.isObject(n)) return [];if (v) return v(n);var t = [];for (var r in n) {
            m.has(n, r) && t.push(r);
        }return M && e(n, t), t;
    }, m.allKeys = function (n) {
        if (!m.isObject(n)) return [];var t = [];for (var r in n) {
            t.push(r);
        }return M && e(n, t), t;
    }, m.values = function (n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) {
            e[u] = n[t[u]];
        }return e;
    }, m.mapObject = function (n, t, r) {
        t = x(t, r);for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++) {
            e = u[a], o[e] = t(n[e], e, n);
        }return o;
    }, m.pairs = function (n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) {
            e[u] = [t[u], n[t[u]]];
        }return e;
    }, m.invert = function (n) {
        for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++) {
            t[n[r[e]]] = r[e];
        }return t;
    }, m.functions = m.methods = function (n) {
        var t = [];for (var r in n) {
            m.isFunction(n[r]) && t.push(r);
        }return t.sort();
    }, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function (n, t, r) {
        t = x(t, r);for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++) {
            if (e = u[i], t(n[e], e, n)) return e;
        }
    }, m.pick = function (n, t, r) {
        var e,
            u,
            i = {},
            o = n;if (null == o) return i;m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function e(n, t, r) {
            return t in r;
        }, o = Object(o));for (var a = 0, c = u.length; c > a; a++) {
            var f = u[a],
                l = o[f];e(l, f, o) && (i[f] = l);
        }return i;
    }, m.omit = function (n, t, r) {
        if (m.isFunction(t)) t = m.negate(t);else {
            var e = m.map(S(arguments, !1, !1, 1), String);t = function t(n, _t) {
                return !m.contains(e, _t);
            };
        }return m.pick(n, t, r);
    }, m.defaults = _(m.allKeys, !0), m.create = function (n, t) {
        var r = j(n);return t && m.extendOwn(r, t), r;
    }, m.clone = function (n) {
        return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n;
    }, m.tap = function (n, t) {
        return t(n), n;
    }, m.isMatch = function (n, t) {
        var r = m.keys(t),
            e = r.length;if (null == n) return !e;for (var u = Object(n), i = 0; e > i; i++) {
            var o = r[i];if (t[o] !== u[o] || !(o in u)) return !1;
        }return !0;
    };var N = function N(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n === 1 / t;if (null == n || null == t) return n === t;n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);var u = s.call(n);if (u !== s.call(t)) return !1;switch (u) {case "[object RegExp]":case "[object String]":
                return "" + n == "" + t;case "[object Number]":
                return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;case "[object Date]":case "[object Boolean]":
                return +n === +t;}var i = "[object Array]" === u;if (!i) {
            if ("object" != (typeof n === "undefined" ? "undefined" : _typeof2(n)) || "object" != (typeof t === "undefined" ? "undefined" : _typeof2(t))) return !1;var o = n.constructor,
                a = t.constructor;if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1;
        }r = r || [], e = e || [];for (var c = r.length; c--;) {
            if (r[c] === n) return e[c] === t;
        }if (r.push(n), e.push(t), i) {
            if (c = n.length, c !== t.length) return !1;for (; c--;) {
                if (!N(n[c], t[c], r, e)) return !1;
            }
        } else {
            var f,
                l = m.keys(n);if (c = l.length, m.keys(t).length !== c) return !1;for (; c--;) {
                if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e)) return !1;
            }
        }return r.pop(), e.pop(), !0;
    };m.isEqual = function (n, t) {
        return N(n, t);
    }, m.isEmpty = function (n) {
        return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length;
    }, m.isElement = function (n) {
        return !(!n || 1 !== n.nodeType);
    }, m.isArray = h || function (n) {
        return "[object Array]" === s.call(n);
    }, m.isObject = function (n) {
        var t = typeof n === "undefined" ? "undefined" : _typeof2(n);return "function" === t || "object" === t && !!n;
    }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (n) {
        m["is" + n] = function (t) {
            return s.call(t) === "[object " + n + "]";
        };
    }), m.isArguments(arguments) || (m.isArguments = function (n) {
        return m.has(n, "callee");
    }), "function" != typeof /./ && "object" != (typeof Int8Array === "undefined" ? "undefined" : _typeof2(Int8Array)) && (m.isFunction = function (n) {
        return "function" == typeof n || !1;
    }), m.isFinite = function (n) {
        return isFinite(n) && !isNaN(parseFloat(n));
    }, m.isNaN = function (n) {
        return m.isNumber(n) && n !== +n;
    }, m.isBoolean = function (n) {
        return n === !0 || n === !1 || "[object Boolean]" === s.call(n);
    }, m.isNull = function (n) {
        return null === n;
    }, m.isUndefined = function (n) {
        return n === void 0;
    }, m.has = function (n, t) {
        return null != n && p.call(n, t);
    }, m.noConflict = function () {
        return u._ = i, this;
    }, m.identity = function (n) {
        return n;
    }, m.constant = function (n) {
        return function () {
            return n;
        };
    }, m.noop = function () {}, m.property = w, m.propertyOf = function (n) {
        return null == n ? function () {} : function (t) {
            return n[t];
        };
    }, m.matcher = m.matches = function (n) {
        return n = m.extendOwn({}, n), function (t) {
            return m.isMatch(t, n);
        };
    }, m.times = function (n, t, r) {
        var e = Array(Math.max(0, n));t = b(t, r, 1);for (var u = 0; n > u; u++) {
            e[u] = t(u);
        }return e;
    }, m.random = function (n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
    }, m.now = Date.now || function () {
        return new Date().getTime();
    };var B = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
        T = m.invert(B),
        R = function R(n) {
        var t = function t(_t2) {
            return n[_t2];
        },
            r = "(?:" + m.keys(n).join("|") + ")",
            e = RegExp(r),
            u = RegExp(r, "g");return function (n) {
            return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n;
        };
    };m.escape = R(B), m.unescape = R(T), m.result = function (n, t, r) {
        var e = null == n ? void 0 : n[t];return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e;
    };var q = 0;m.uniqueId = function (n) {
        var t = ++q + "";return n ? n + t : t;
    }, m.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };var K = /(.)^/,
        z = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
        D = /\\|'|\r|\n|\u2028|\u2029/g,
        L = function L(n) {
        return "\\" + z[n];
    };m.template = function (n, t, r) {
        !t && r && (t = r), t = m.defaults({}, t, m.templateSettings);var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"),
            u = 0,
            i = "__p+='";n.replace(e, function (t, r, e, o, a) {
            return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t;
        }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";try {
            var o = new Function(t.variable || "obj", "_", i);
        } catch (a) {
            throw a.source = i, a;
        }var c = function c(n) {
            return o.call(this, n, m);
        },
            f = t.variable || "obj";return c.source = "function(" + f + "){\n" + i + "}", c;
    }, m.chain = function (n) {
        var t = m(n);return t._chain = !0, t;
    };var P = function P(n, t) {
        return n._chain ? m(t).chain() : t;
    };m.mixin = function (n) {
        m.each(m.functions(n), function (t) {
            var r = m[t] = n[t];m.prototype[t] = function () {
                var n = [this._wrapped];return f.apply(n, arguments), P(this, r.apply(m, n));
            };
        });
    }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) {
        var t = o[n];m.prototype[n] = function () {
            var r = this._wrapped;return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r);
        };
    }), m.each(["concat", "join", "slice"], function (n) {
        var t = o[n];m.prototype[n] = function () {
            return P(this, t.apply(this._wrapped, arguments));
        };
    }), m.prototype.value = function () {
        return this._wrapped;
    }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function () {
        return "" + this._wrapped;
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return m;
    });
}).call(this);
//# sourceMappingURL=underscore-min.map
(function (t) {
    var e = (typeof self === "undefined" ? "undefined" : _typeof2(self)) == "object" && self.self === self && self || (typeof global === "undefined" ? "undefined" : _typeof2(global)) == "object" && global.global === global && global;if (typeof define === "function" && define.amd) {
        define(["underscore", "jquery", "exports"], function (i, r, n) {
            e.Backbone = t(e, n, i, r);
        });
    } else if (typeof exports !== "undefined") {
        var i = require("underscore"),
            r;try {
            r = require("jquery");
        } catch (n) {}t(e, exports, i, r);
    } else {
        e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$);
    }
})(function (t, e, i, r) {
    var n = t.Backbone;var s = Array.prototype.slice;e.VERSION = "1.3.3";e.$ = r;e.noConflict = function () {
        t.Backbone = n;return this;
    };e.emulateHTTP = false;e.emulateJSON = false;var a = function a(t, e, r) {
        switch (t) {case 1:
                return function () {
                    return i[e](this[r]);
                };case 2:
                return function (t) {
                    return i[e](this[r], t);
                };case 3:
                return function (t, n) {
                    return i[e](this[r], o(t, this), n);
                };case 4:
                return function (t, n, s) {
                    return i[e](this[r], o(t, this), n, s);
                };default:
                return function () {
                    var t = s.call(arguments);t.unshift(this[r]);return i[e].apply(i, t);
                };}
    };var h = function h(t, e, r) {
        i.each(e, function (e, n) {
            if (i[n]) t.prototype[n] = a(e, n, r);
        });
    };var o = function o(t, e) {
        if (i.isFunction(t)) return t;if (i.isObject(t) && !e._isModel(t)) return l(t);if (i.isString(t)) return function (e) {
            return e.get(t);
        };return t;
    };var l = function l(t) {
        var e = i.matches(t);return function (t) {
            return e(t.attributes);
        };
    };var u = e.Events = {};var c = /\s+/;var f = function f(t, e, r, n, s) {
        var a = 0,
            h;if (r && (typeof r === "undefined" ? "undefined" : _typeof2(r)) === "object") {
            if (n !== void 0 && "context" in s && s.context === void 0) s.context = n;for (h = i.keys(r); a < h.length; a++) {
                e = f(t, e, h[a], r[h[a]], s);
            }
        } else if (r && c.test(r)) {
            for (h = r.split(c); a < h.length; a++) {
                e = t(e, h[a], n, s);
            }
        } else {
            e = t(e, r, n, s);
        }return e;
    };u.on = function (t, e, i) {
        return d(this, t, e, i);
    };var d = function d(t, e, i, r, n) {
        t._events = f(v, t._events || {}, e, i, { context: r, ctx: t, listening: n });if (n) {
            var s = t._listeners || (t._listeners = {});s[n.id] = n;
        }return t;
    };u.listenTo = function (t, e, r) {
        if (!t) return this;var n = t._listenId || (t._listenId = i.uniqueId("l"));var s = this._listeningTo || (this._listeningTo = {});var a = s[n];if (!a) {
            var h = this._listenId || (this._listenId = i.uniqueId("l"));a = s[n] = { obj: t, objId: n, id: h, listeningTo: s, count: 0 };
        }d(t, e, r, this, a);return this;
    };var v = function v(t, e, i, r) {
        if (i) {
            var n = t[e] || (t[e] = []);var s = r.context,
                a = r.ctx,
                h = r.listening;if (h) h.count++;n.push({ callback: i, context: s, ctx: s || a, listening: h });
        }return t;
    };u.off = function (t, e, i) {
        if (!this._events) return this;this._events = f(g, this._events, t, e, { context: i, listeners: this._listeners });return this;
    };u.stopListening = function (t, e, r) {
        var n = this._listeningTo;if (!n) return this;var s = t ? [t._listenId] : i.keys(n);for (var a = 0; a < s.length; a++) {
            var h = n[s[a]];if (!h) break;h.obj.off(e, r, this);
        }return this;
    };var g = function g(t, e, r, n) {
        if (!t) return;var s = 0,
            a;var h = n.context,
            o = n.listeners;if (!e && !r && !h) {
            var l = i.keys(o);for (; s < l.length; s++) {
                a = o[l[s]];delete o[a.id];delete a.listeningTo[a.objId];
            }return;
        }var u = e ? [e] : i.keys(t);for (; s < u.length; s++) {
            e = u[s];var c = t[e];if (!c) break;var f = [];for (var d = 0; d < c.length; d++) {
                var v = c[d];if (r && r !== v.callback && r !== v.callback._callback || h && h !== v.context) {
                    f.push(v);
                } else {
                    a = v.listening;if (a && --a.count === 0) {
                        delete o[a.id];delete a.listeningTo[a.objId];
                    }
                }
            }if (f.length) {
                t[e] = f;
            } else {
                delete t[e];
            }
        }return t;
    };u.once = function (t, e, r) {
        var n = f(p, {}, t, e, i.bind(this.off, this));if (typeof t === "string" && r == null) e = void 0;return this.on(n, e, r);
    };u.listenToOnce = function (t, e, r) {
        var n = f(p, {}, e, r, i.bind(this.stopListening, this, t));return this.listenTo(t, n);
    };var p = function p(t, e, r, n) {
        if (r) {
            var s = t[e] = i.once(function () {
                n(e, s);r.apply(this, arguments);
            });s._callback = r;
        }return t;
    };u.trigger = function (t) {
        if (!this._events) return this;var e = Math.max(0, arguments.length - 1);var i = Array(e);for (var r = 0; r < e; r++) {
            i[r] = arguments[r + 1];
        }f(m, this._events, t, void 0, i);return this;
    };var m = function m(t, e, i, r) {
        if (t) {
            var n = t[e];var s = t.all;if (n && s) s = s.slice();if (n) _(n, r);if (s) _(s, [e].concat(r));
        }return t;
    };var _ = function _(t, e) {
        var i,
            r = -1,
            n = t.length,
            s = e[0],
            a = e[1],
            h = e[2];switch (e.length) {case 0:
                while (++r < n) {
                    (i = t[r]).callback.call(i.ctx);
                }return;case 1:
                while (++r < n) {
                    (i = t[r]).callback.call(i.ctx, s);
                }return;case 2:
                while (++r < n) {
                    (i = t[r]).callback.call(i.ctx, s, a);
                }return;case 3:
                while (++r < n) {
                    (i = t[r]).callback.call(i.ctx, s, a, h);
                }return;default:
                while (++r < n) {
                    (i = t[r]).callback.apply(i.ctx, e);
                }return;}
    };u.bind = u.on;u.unbind = u.off;i.extend(e, u);var y = e.Model = function (t, e) {
        var r = t || {};e || (e = {});this.cid = i.uniqueId(this.cidPrefix);this.attributes = {};if (e.collection) this.collection = e.collection;if (e.parse) r = this.parse(r, e) || {};var n = i.result(this, "defaults");r = i.defaults(i.extend({}, n, r), n);this.set(r, e);this.changed = {};this.initialize.apply(this, arguments);
    };i.extend(y.prototype, u, { changed: null, validationError: null, idAttribute: "id", cidPrefix: "c", initialize: function initialize() {}, toJSON: function toJSON(t) {
            return i.clone(this.attributes);
        }, sync: function sync() {
            return e.sync.apply(this, arguments);
        }, get: function get(t) {
            return this.attributes[t];
        }, escape: function escape(t) {
            return i.escape(this.get(t));
        }, has: function has(t) {
            return this.get(t) != null;
        }, matches: function matches(t) {
            return !!i.iteratee(t, this)(this.attributes);
        }, set: function set(t, e, r) {
            if (t == null) return this;var n;if ((typeof t === "undefined" ? "undefined" : _typeof2(t)) === "object") {
                n = t;r = e;
            } else {
                (n = {})[t] = e;
            }r || (r = {});if (!this._validate(n, r)) return false;var s = r.unset;var a = r.silent;var h = [];var o = this._changing;this._changing = true;if (!o) {
                this._previousAttributes = i.clone(this.attributes);this.changed = {};
            }var l = this.attributes;var u = this.changed;var c = this._previousAttributes;for (var f in n) {
                e = n[f];if (!i.isEqual(l[f], e)) h.push(f);if (!i.isEqual(c[f], e)) {
                    u[f] = e;
                } else {
                    delete u[f];
                }s ? delete l[f] : l[f] = e;
            }if (this.idAttribute in n) this.id = this.get(this.idAttribute);if (!a) {
                if (h.length) this._pending = r;for (var d = 0; d < h.length; d++) {
                    this.trigger("change:" + h[d], this, l[h[d]], r);
                }
            }if (o) return this;if (!a) {
                while (this._pending) {
                    r = this._pending;this._pending = false;this.trigger("change", this, r);
                }
            }this._pending = false;this._changing = false;return this;
        }, unset: function unset(t, e) {
            return this.set(t, void 0, i.extend({}, e, { unset: true }));
        }, clear: function clear(t) {
            var e = {};for (var r in this.attributes) {
                e[r] = void 0;
            }return this.set(e, i.extend({}, t, { unset: true }));
        }, hasChanged: function hasChanged(t) {
            if (t == null) return !i.isEmpty(this.changed);return i.has(this.changed, t);
        }, changedAttributes: function changedAttributes(t) {
            if (!t) return this.hasChanged() ? i.clone(this.changed) : false;var e = this._changing ? this._previousAttributes : this.attributes;var r = {};for (var n in t) {
                var s = t[n];if (i.isEqual(e[n], s)) continue;r[n] = s;
            }return i.size(r) ? r : false;
        }, previous: function previous(t) {
            if (t == null || !this._previousAttributes) return null;return this._previousAttributes[t];
        }, previousAttributes: function previousAttributes() {
            return i.clone(this._previousAttributes);
        }, fetch: function fetch(t) {
            t = i.extend({ parse: true }, t);var e = this;var r = t.success;t.success = function (i) {
                var n = t.parse ? e.parse(i, t) : i;if (!e.set(n, t)) return false;if (r) r.call(t.context, e, i, t);e.trigger("sync", e, i, t);
            };B(this, t);return this.sync("read", this, t);
        }, save: function save(t, e, r) {
            var n;if (t == null || (typeof t === "undefined" ? "undefined" : _typeof2(t)) === "object") {
                n = t;r = e;
            } else {
                (n = {})[t] = e;
            }r = i.extend({ validate: true, parse: true }, r);var s = r.wait;if (n && !s) {
                if (!this.set(n, r)) return false;
            } else if (!this._validate(n, r)) {
                return false;
            }var a = this;var h = r.success;var o = this.attributes;r.success = function (t) {
                a.attributes = o;var e = r.parse ? a.parse(t, r) : t;if (s) e = i.extend({}, n, e);if (e && !a.set(e, r)) return false;if (h) h.call(r.context, a, t, r);a.trigger("sync", a, t, r);
            };B(this, r);if (n && s) this.attributes = i.extend({}, o, n);var l = this.isNew() ? "create" : r.patch ? "patch" : "update";if (l === "patch" && !r.attrs) r.attrs = n;var u = this.sync(l, this, r);this.attributes = o;return u;
        }, destroy: function destroy(t) {
            t = t ? i.clone(t) : {};var e = this;var r = t.success;var n = t.wait;var s = function s() {
                e.stopListening();e.trigger("destroy", e, e.collection, t);
            };t.success = function (i) {
                if (n) s();if (r) r.call(t.context, e, i, t);if (!e.isNew()) e.trigger("sync", e, i, t);
            };var a = false;if (this.isNew()) {
                i.defer(t.success);
            } else {
                B(this, t);a = this.sync("delete", this, t);
            }if (!n) s();return a;
        }, url: function url() {
            var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || F();if (this.isNew()) return t;var e = this.get(this.idAttribute);return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
        }, parse: function parse(t, e) {
            return t;
        }, clone: function clone() {
            return new this.constructor(this.attributes);
        }, isNew: function isNew() {
            return !this.has(this.idAttribute);
        }, isValid: function isValid(t) {
            return this._validate({}, i.extend({}, t, { validate: true }));
        }, _validate: function _validate(t, e) {
            if (!e.validate || !this.validate) return true;t = i.extend({}, this.attributes, t);var r = this.validationError = this.validate(t, e) || null;if (!r) return true;this.trigger("invalid", this, r, i.extend(e, { validationError: r }));return false;
        } });var b = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 };h(y, b, "attributes");var x = e.Collection = function (t, e) {
        e || (e = {});if (e.model) this.model = e.model;if (e.comparator !== void 0) this.comparator = e.comparator;this._reset();this.initialize.apply(this, arguments);if (t) this.reset(t, i.extend({ silent: true }, e));
    };var w = { add: true, remove: true, merge: true };var E = { add: true, remove: false };var I = function I(t, e, i) {
        i = Math.min(Math.max(i, 0), t.length);var r = Array(t.length - i);var n = e.length;var s;for (s = 0; s < r.length; s++) {
            r[s] = t[s + i];
        }for (s = 0; s < n; s++) {
            t[s + i] = e[s];
        }for (s = 0; s < r.length; s++) {
            t[s + n + i] = r[s];
        }
    };i.extend(x.prototype, u, { model: y, initialize: function initialize() {}, toJSON: function toJSON(t) {
            return this.map(function (e) {
                return e.toJSON(t);
            });
        }, sync: function sync() {
            return e.sync.apply(this, arguments);
        }, add: function add(t, e) {
            return this.set(t, i.extend({ merge: false }, e, E));
        }, remove: function remove(t, e) {
            e = i.extend({}, e);var r = !i.isArray(t);t = r ? [t] : t.slice();var n = this._removeModels(t, e);if (!e.silent && n.length) {
                e.changes = { added: [], merged: [], removed: n };this.trigger("update", this, e);
            }return r ? n[0] : n;
        }, set: function set(t, e) {
            if (t == null) return;e = i.extend({}, w, e);if (e.parse && !this._isModel(t)) {
                t = this.parse(t, e) || [];
            }var r = !i.isArray(t);t = r ? [t] : t.slice();var n = e.at;if (n != null) n = +n;if (n > this.length) n = this.length;if (n < 0) n += this.length + 1;var s = [];var a = [];var h = [];var o = [];var l = {};var u = e.add;var c = e.merge;var f = e.remove;var d = false;var v = this.comparator && n == null && e.sort !== false;var g = i.isString(this.comparator) ? this.comparator : null;var p, m;for (m = 0; m < t.length; m++) {
                p = t[m];var _ = this.get(p);if (_) {
                    if (c && p !== _) {
                        var y = this._isModel(p) ? p.attributes : p;if (e.parse) y = _.parse(y, e);_.set(y, e);h.push(_);if (v && !d) d = _.hasChanged(g);
                    }if (!l[_.cid]) {
                        l[_.cid] = true;s.push(_);
                    }t[m] = _;
                } else if (u) {
                    p = t[m] = this._prepareModel(p, e);if (p) {
                        a.push(p);this._addReference(p, e);l[p.cid] = true;s.push(p);
                    }
                }
            }if (f) {
                for (m = 0; m < this.length; m++) {
                    p = this.models[m];if (!l[p.cid]) o.push(p);
                }if (o.length) this._removeModels(o, e);
            }var b = false;var x = !v && u && f;if (s.length && x) {
                b = this.length !== s.length || i.some(this.models, function (t, e) {
                    return t !== s[e];
                });this.models.length = 0;I(this.models, s, 0);this.length = this.models.length;
            } else if (a.length) {
                if (v) d = true;I(this.models, a, n == null ? this.length : n);this.length = this.models.length;
            }if (d) this.sort({ silent: true });if (!e.silent) {
                for (m = 0; m < a.length; m++) {
                    if (n != null) e.index = n + m;p = a[m];p.trigger("add", p, this, e);
                }if (d || b) this.trigger("sort", this, e);if (a.length || o.length || h.length) {
                    e.changes = { added: a, removed: o, merged: h };this.trigger("update", this, e);
                }
            }return r ? t[0] : t;
        }, reset: function reset(t, e) {
            e = e ? i.clone(e) : {};for (var r = 0; r < this.models.length; r++) {
                this._removeReference(this.models[r], e);
            }e.previousModels = this.models;this._reset();t = this.add(t, i.extend({ silent: true }, e));if (!e.silent) this.trigger("reset", this, e);return t;
        }, push: function push(t, e) {
            return this.add(t, i.extend({ at: this.length }, e));
        }, pop: function pop(t) {
            var e = this.at(this.length - 1);return this.remove(e, t);
        }, unshift: function unshift(t, e) {
            return this.add(t, i.extend({ at: 0 }, e));
        }, shift: function shift(t) {
            var e = this.at(0);return this.remove(e, t);
        }, slice: function slice() {
            return s.apply(this.models, arguments);
        }, get: function get(t) {
            if (t == null) return void 0;return this._byId[t] || this._byId[this.modelId(t.attributes || t)] || t.cid && this._byId[t.cid];
        }, has: function has(t) {
            return this.get(t) != null;
        }, at: function at(t) {
            if (t < 0) t += this.length;return this.models[t];
        }, where: function where(t, e) {
            return this[e ? "find" : "filter"](t);
        }, findWhere: function findWhere(t) {
            return this.where(t, true);
        }, sort: function sort(t) {
            var e = this.comparator;if (!e) throw new Error("Cannot sort a set without a comparator");t || (t = {});var r = e.length;if (i.isFunction(e)) e = i.bind(e, this);if (r === 1 || i.isString(e)) {
                this.models = this.sortBy(e);
            } else {
                this.models.sort(e);
            }if (!t.silent) this.trigger("sort", this, t);return this;
        }, pluck: function pluck(t) {
            return this.map(t + "");
        }, fetch: function fetch(t) {
            t = i.extend({ parse: true }, t);var e = t.success;var r = this;t.success = function (i) {
                var n = t.reset ? "reset" : "set";r[n](i, t);if (e) e.call(t.context, r, i, t);r.trigger("sync", r, i, t);
            };B(this, t);return this.sync("read", this, t);
        }, create: function create(t, e) {
            e = e ? i.clone(e) : {};var r = e.wait;t = this._prepareModel(t, e);if (!t) return false;if (!r) this.add(t, e);var n = this;var s = e.success;e.success = function (t, e, i) {
                if (r) n.add(t, i);if (s) s.call(i.context, t, e, i);
            };t.save(null, e);return t;
        }, parse: function parse(t, e) {
            return t;
        }, clone: function clone() {
            return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
        }, modelId: function modelId(t) {
            return t[this.model.prototype.idAttribute || "id"];
        }, _reset: function _reset() {
            this.length = 0;this.models = [];this._byId = {};
        }, _prepareModel: function _prepareModel(t, e) {
            if (this._isModel(t)) {
                if (!t.collection) t.collection = this;return t;
            }e = e ? i.clone(e) : {};e.collection = this;var r = new this.model(t, e);if (!r.validationError) return r;this.trigger("invalid", this, r.validationError, e);return false;
        }, _removeModels: function _removeModels(t, e) {
            var i = [];for (var r = 0; r < t.length; r++) {
                var n = this.get(t[r]);if (!n) continue;var s = this.indexOf(n);this.models.splice(s, 1);this.length--;delete this._byId[n.cid];var a = this.modelId(n.attributes);if (a != null) delete this._byId[a];if (!e.silent) {
                    e.index = s;n.trigger("remove", n, this, e);
                }i.push(n);this._removeReference(n, e);
            }return i;
        }, _isModel: function _isModel(t) {
            return t instanceof y;
        }, _addReference: function _addReference(t, e) {
            this._byId[t.cid] = t;var i = this.modelId(t.attributes);if (i != null) this._byId[i] = t;t.on("all", this._onModelEvent, this);
        }, _removeReference: function _removeReference(t, e) {
            delete this._byId[t.cid];var i = this.modelId(t.attributes);if (i != null) delete this._byId[i];if (this === t.collection) delete t.collection;t.off("all", this._onModelEvent, this);
        }, _onModelEvent: function _onModelEvent(t, e, i, r) {
            if (e) {
                if ((t === "add" || t === "remove") && i !== this) return;if (t === "destroy") this.remove(e, r);if (t === "change") {
                    var n = this.modelId(e.previousAttributes());var s = this.modelId(e.attributes);if (n !== s) {
                        if (n != null) delete this._byId[n];if (s != null) this._byId[s] = e;
                    }
                }
            }this.trigger.apply(this, arguments);
        } });var S = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 0, foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3, select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3, contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3, head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3, without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3, isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3, sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3 };h(x, S, "models");var k = e.View = function (t) {
        this.cid = i.uniqueId("view");i.extend(this, i.pick(t, P));this._ensureElement();this.initialize.apply(this, arguments);
    };var T = /^(\S+)\s*(.*)$/;var P = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];i.extend(k.prototype, u, { tagName: "div", $: function $(t) {
            return this.$el.find(t);
        }, initialize: function initialize() {}, render: function render() {
            return this;
        }, remove: function remove() {
            this._removeElement();this.stopListening();return this;
        }, _removeElement: function _removeElement() {
            this.$el.remove();
        }, setElement: function setElement(t) {
            this.undelegateEvents();this._setElement(t);this.delegateEvents();return this;
        }, _setElement: function _setElement(t) {
            this.$el = t instanceof e.$ ? t : e.$(t);this.el = this.$el[0];
        }, delegateEvents: function delegateEvents(t) {
            t || (t = i.result(this, "events"));if (!t) return this;this.undelegateEvents();for (var e in t) {
                var r = t[e];if (!i.isFunction(r)) r = this[r];if (!r) continue;var n = e.match(T);this.delegate(n[1], n[2], i.bind(r, this));
            }return this;
        }, delegate: function delegate(t, e, i) {
            this.$el.on(t + ".delegateEvents" + this.cid, e, i);return this;
        }, undelegateEvents: function undelegateEvents() {
            if (this.$el) this.$el.off(".delegateEvents" + this.cid);return this;
        }, undelegate: function undelegate(t, e, i) {
            this.$el.off(t + ".delegateEvents" + this.cid, e, i);return this;
        }, _createElement: function _createElement(t) {
            return document.createElement(t);
        }, _ensureElement: function _ensureElement() {
            if (!this.el) {
                var t = i.extend({}, i.result(this, "attributes"));if (this.id) t.id = i.result(this, "id");if (this.className) t["class"] = i.result(this, "className");this.setElement(this._createElement(i.result(this, "tagName")));this._setAttributes(t);
            } else {
                this.setElement(i.result(this, "el"));
            }
        }, _setAttributes: function _setAttributes(t) {
            this.$el.attr(t);
        } });e.sync = function (t, r, n) {
        var s = H[t];i.defaults(n || (n = {}), { emulateHTTP: e.emulateHTTP, emulateJSON: e.emulateJSON });var a = { type: s, dataType: "json" };if (!n.url) {
            a.url = i.result(r, "url") || F();
        }if (n.data == null && r && (t === "create" || t === "update" || t === "patch")) {
            a.contentType = "application/json";a.data = JSON.stringify(n.attrs || r.toJSON(n));
        }if (n.emulateJSON) {
            a.contentType = "application/x-www-form-urlencoded";a.data = a.data ? { model: a.data } : {};
        }if (n.emulateHTTP && (s === "PUT" || s === "DELETE" || s === "PATCH")) {
            a.type = "POST";if (n.emulateJSON) a.data._method = s;var h = n.beforeSend;n.beforeSend = function (t) {
                t.setRequestHeader("X-HTTP-Method-Override", s);if (h) return h.apply(this, arguments);
            };
        }if (a.type !== "GET" && !n.emulateJSON) {
            a.processData = false;
        }var o = n.error;n.error = function (t, e, i) {
            n.textStatus = e;n.errorThrown = i;if (o) o.call(n.context, t, e, i);
        };var l = n.xhr = e.ajax(i.extend(a, n));r.trigger("request", r, l, n);return l;
    };var H = { create: "POST", update: "PUT", patch: "PATCH", "delete": "DELETE", read: "GET" };e.ajax = function () {
        return e.$.ajax.apply(e.$, arguments);
    };var $ = e.Router = function (t) {
        t || (t = {});if (t.routes) this.routes = t.routes;this._bindRoutes();this.initialize.apply(this, arguments);
    };var A = /\((.*?)\)/g;var C = /(\(\?)?:\w+/g;var R = /\*\w+/g;var j = /[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype, u, { initialize: function initialize() {}, route: function route(t, r, n) {
            if (!i.isRegExp(t)) t = this._routeToRegExp(t);if (i.isFunction(r)) {
                n = r;r = "";
            }if (!n) n = this[r];var s = this;e.history.route(t, function (i) {
                var a = s._extractParameters(t, i);if (s.execute(n, a, r) !== false) {
                    s.trigger.apply(s, ["route:" + r].concat(a));s.trigger("route", r, a);e.history.trigger("route", s, r, a);
                }
            });return this;
        }, execute: function execute(t, e, i) {
            if (t) t.apply(this, e);
        }, navigate: function navigate(t, i) {
            e.history.navigate(t, i);return this;
        }, _bindRoutes: function _bindRoutes() {
            if (!this.routes) return;this.routes = i.result(this, "routes");var t,
                e = i.keys(this.routes);while ((t = e.pop()) != null) {
                this.route(t, this.routes[t]);
            }
        }, _routeToRegExp: function _routeToRegExp(t) {
            t = t.replace(j, "\\$&").replace(A, "(?:$1)?").replace(C, function (t, e) {
                return e ? t : "([^/?]+)";
            }).replace(R, "([^?]*?)");return new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$");
        }, _extractParameters: function _extractParameters(t, e) {
            var r = t.exec(e).slice(1);return i.map(r, function (t, e) {
                if (e === r.length - 1) return t || null;return t ? decodeURIComponent(t) : null;
            });
        } });var N = e.History = function () {
        this.handlers = [];this.checkUrl = i.bind(this.checkUrl, this);if (typeof window !== "undefined") {
            this.location = window.location;this.history = window.history;
        }
    };var M = /^[#\/]|\s+$/g;var O = /^\/+|\/+$/g;var U = /#.*$/;N.started = false;i.extend(N.prototype, u, { interval: 50, atRoot: function atRoot() {
            var t = this.location.pathname.replace(/[^\/]$/, "$&/");return t === this.root && !this.getSearch();
        }, matchRoot: function matchRoot() {
            var t = this.decodeFragment(this.location.pathname);var e = t.slice(0, this.root.length - 1) + "/";return e === this.root;
        }, decodeFragment: function decodeFragment(t) {
            return decodeURI(t.replace(/%25/g, "%2525"));
        }, getSearch: function getSearch() {
            var t = this.location.href.replace(/#.*/, "").match(/\?.+/);return t ? t[0] : "";
        }, getHash: function getHash(t) {
            var e = (t || this).location.href.match(/#(.*)$/);return e ? e[1] : "";
        }, getPath: function getPath() {
            var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);return t.charAt(0) === "/" ? t.slice(1) : t;
        }, getFragment: function getFragment(t) {
            if (t == null) {
                if (this._usePushState || !this._wantsHashChange) {
                    t = this.getPath();
                } else {
                    t = this.getHash();
                }
            }return t.replace(M, "");
        }, start: function start(t) {
            if (N.started) throw new Error("Backbone.history has already been started");N.started = true;this.options = i.extend({ root: "/" }, this.options, t);this.root = this.options.root;this._wantsHashChange = this.options.hashChange !== false;this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7);this._useHashChange = this._wantsHashChange && this._hasHashChange;this._wantsPushState = !!this.options.pushState;this._hasPushState = !!(this.history && this.history.pushState);this._usePushState = this._wantsPushState && this._hasPushState;this.fragment = this.getFragment();this.root = ("/" + this.root + "/").replace(O, "/");if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var e = this.root.slice(0, -1) || "/";this.location.replace(e + "#" + this.getPath());return true;
                } else if (this._hasPushState && this.atRoot()) {
                    this.navigate(this.getHash(), { replace: true });
                }
            }if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe");this.iframe.src = "javascript:0";this.iframe.style.display = "none";this.iframe.tabIndex = -1;var r = document.body;var n = r.insertBefore(this.iframe, r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash = "#" + this.fragment;
            }var s = window.addEventListener || function (t, e) {
                return attachEvent("on" + t, e);
            };if (this._usePushState) {
                s("popstate", this.checkUrl, false);
            } else if (this._useHashChange && !this.iframe) {
                s("hashchange", this.checkUrl, false);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }if (!this.options.silent) return this.loadUrl();
        }, stop: function stop() {
            var t = window.removeEventListener || function (t, e) {
                return detachEvent("on" + t, e);
            };if (this._usePushState) {
                t("popstate", this.checkUrl, false);
            } else if (this._useHashChange && !this.iframe) {
                t("hashchange", this.checkUrl, false);
            }if (this.iframe) {
                document.body.removeChild(this.iframe);this.iframe = null;
            }if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);N.started = false;
        }, route: function route(t, e) {
            this.handlers.unshift({ route: t, callback: e });
        }, checkUrl: function checkUrl(t) {
            var e = this.getFragment();if (e === this.fragment && this.iframe) {
                e = this.getHash(this.iframe.contentWindow);
            }if (e === this.fragment) return false;if (this.iframe) this.navigate(e);this.loadUrl();
        }, loadUrl: function loadUrl(t) {
            if (!this.matchRoot()) return false;t = this.fragment = this.getFragment(t);return i.some(this.handlers, function (e) {
                if (e.route.test(t)) {
                    e.callback(t);return true;
                }
            });
        }, navigate: function navigate(t, e) {
            if (!N.started) return false;if (!e || e === true) e = { trigger: !!e };t = this.getFragment(t || "");var i = this.root;if (t === "" || t.charAt(0) === "?") {
                i = i.slice(0, -1) || "/";
            }var r = i + t;t = this.decodeFragment(t.replace(U, ""));if (this.fragment === t) return;this.fragment = t;if (this._usePushState) {
                this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, r);
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, t, e.replace);if (this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                    var n = this.iframe.contentWindow;if (!e.replace) {
                        n.document.open();n.document.close();
                    }this._updateHash(n.location, t, e.replace);
                }
            } else {
                return this.location.assign(r);
            }if (e.trigger) return this.loadUrl(t);
        }, _updateHash: function _updateHash(t, e, i) {
            if (i) {
                var r = t.href.replace(/(javascript:|#).*$/, "");t.replace(r + "#" + e);
            } else {
                t.hash = "#" + e;
            }
        } });e.history = new N();var q = function q(t, e) {
        var r = this;var n;if (t && i.has(t, "constructor")) {
            n = t.constructor;
        } else {
            n = function n() {
                return r.apply(this, arguments);
            };
        }i.extend(n, r, e);n.prototype = i.create(r.prototype, t);n.prototype.constructor = n;n.__super__ = r.prototype;return n;
    };y.extend = x.extend = $.extend = k.extend = N.extend = q;var F = function F() {
        throw new Error('A "url" property or function must be specified');
    };var B = function B(t, e) {
        var i = e.error;e.error = function (r) {
            if (i) i.call(e.context, t, r, e);t.trigger("error", t, r, e);
        };
    };return e;
});
//# sourceMappingURL=backbone-min.map
/*!
 * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery);
}(this, function (a) {
    !function (a) {
        "use strict";
        function b(b) {
            var c = [{ re: /[\xC0-\xC6]/g, ch: "A" }, { re: /[\xE0-\xE6]/g, ch: "a" }, { re: /[\xC8-\xCB]/g, ch: "E" }, { re: /[\xE8-\xEB]/g, ch: "e" }, { re: /[\xCC-\xCF]/g, ch: "I" }, { re: /[\xEC-\xEF]/g, ch: "i" }, { re: /[\xD2-\xD6]/g, ch: "O" }, { re: /[\xF2-\xF6]/g, ch: "o" }, { re: /[\xD9-\xDC]/g, ch: "U" }, { re: /[\xF9-\xFC]/g, ch: "u" }, { re: /[\xC7-\xE7]/g, ch: "c" }, { re: /[\xD1]/g, ch: "N" }, { re: /[\xF1]/g, ch: "n" }];return a.each(c, function () {
                b = b ? b.replace(this.re, this.ch) : "";
            }), b;
        }function c(b) {
            var c = arguments,
                d = b;[].shift.apply(c);var e,
                f = this.each(function () {
                var b = a(this);if (b.is("select")) {
                    var f = b.data("selectpicker"),
                        g = "object" == (typeof d === "undefined" ? "undefined" : _typeof2(d)) && d;if (f) {
                        if (g) for (var h in g) {
                            g.hasOwnProperty(h) && (f.options[h] = g[h]);
                        }
                    } else {
                        var i = a.extend({}, l.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), g);i.template = a.extend({}, l.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, g.template), b.data("selectpicker", f = new l(this, i));
                    }"string" == typeof d && (e = f[d] instanceof Function ? f[d].apply(f, c) : f.options[d]);
                }
            });return "undefined" != typeof e ? e : f;
        }String.prototype.includes || !function () {
            var a = {}.toString,
                b = function () {
                try {
                    var a = {},
                        b = Object.defineProperty,
                        c = b(a, a, a) && b;
                } catch (a) {}return c;
            }(),
                c = "".indexOf,
                d = function d(b) {
                if (null == this) throw new TypeError();var d = String(this);if (b && "[object RegExp]" == a.call(b)) throw new TypeError();var e = d.length,
                    f = String(b),
                    g = f.length,
                    h = arguments.length > 1 ? arguments[1] : void 0,
                    i = h ? Number(h) : 0;i != i && (i = 0);var j = Math.min(Math.max(i, 0), e);return !(g + j > e) && c.call(d, f, i) != -1;
            };b ? b(String.prototype, "includes", { value: d, configurable: !0, writable: !0 }) : String.prototype.includes = d;
        }(), String.prototype.startsWith || !function () {
            var a = function () {
                try {
                    var a = {},
                        b = Object.defineProperty,
                        c = b(a, a, a) && b;
                } catch (a) {}return c;
            }(),
                b = {}.toString,
                c = function c(a) {
                if (null == this) throw new TypeError();var c = String(this);if (a && "[object RegExp]" == b.call(a)) throw new TypeError();var d = c.length,
                    e = String(a),
                    f = e.length,
                    g = arguments.length > 1 ? arguments[1] : void 0,
                    h = g ? Number(g) : 0;h != h && (h = 0);var i = Math.min(Math.max(h, 0), d);if (f + i > d) return !1;for (var j = -1; ++j < f;) {
                    if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
                }return !0;
            };a ? a(String.prototype, "startsWith", { value: c, configurable: !0, writable: !0 }) : String.prototype.startsWith = c;
        }(), Object.keys || (Object.keys = function (a, b, c) {
            c = [];for (b in a) {
                c.hasOwnProperty.call(a, b) && c.push(b);
            }return c;
        });var d = { useDefault: !1, _set: a.valHooks.select.set };a.valHooks.select.set = function (b, c) {
            return c && !d.useDefault && a(b).data("selected", !0), d._set.apply(this, arguments);
        };var e = null,
            f = function () {
            try {
                return new Event("change"), !0;
            } catch (a) {
                return !1;
            }
        }();a.fn.triggerNative = function (a) {
            var b,
                c = this[0];c.dispatchEvent ? (f ? b = new Event(a, { bubbles: !0 }) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : c.fireEvent ? (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)) : this.trigger(a);
        }, a.expr.pseudos.icontains = function (b, c, d) {
            var e = a(b).find("a"),
                f = (e.data("tokens") || e.text()).toString().toUpperCase();return f.includes(d[3].toUpperCase());
        }, a.expr.pseudos.ibegins = function (b, c, d) {
            var e = a(b).find("a"),
                f = (e.data("tokens") || e.text()).toString().toUpperCase();return f.startsWith(d[3].toUpperCase());
        }, a.expr.pseudos.aicontains = function (b, c, d) {
            var e = a(b).find("a"),
                f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase();return f.includes(d[3].toUpperCase());
        }, a.expr.pseudos.aibegins = function (b, c, d) {
            var e = a(b).find("a"),
                f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase();return f.startsWith(d[3].toUpperCase());
        };var g = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            h = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#x27;": "'", "&#x60;": "`" },
            i = function i(a) {
            var b = function b(_b) {
                return a[_b];
            },
                c = "(?:" + Object.keys(a).join("|") + ")",
                d = RegExp(c),
                e = RegExp(c, "g");return function (a) {
                return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a;
            };
        },
            j = i(g),
            k = i(h),
            l = function l(b, c) {
            d.useDefault || (a.valHooks.select.set = d._set, d.useDefault = !0), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title"));var e = this.options.windowPadding;"number" == typeof e && (this.options.windowPadding = [e, e, e, e]), this.val = l.prototype.val, this.render = l.prototype.render, this.refresh = l.prototype.refresh, this.setStyle = l.prototype.setStyle, this.selectAll = l.prototype.selectAll, this.deselectAll = l.prototype.deselectAll, this.destroy = l.prototype.destroy, this.remove = l.prototype.remove, this.show = l.prototype.show, this.hide = l.prototype.hide, this.init();
        };l.VERSION = "1.12.4", l.DEFAULTS = { noneSelectedText: "Nothing selected", noneResultsText: "No results matched {0}", countSelectedText: function countSelectedText(a, b) {
                return 1 == a ? "{0} item selected" : "{0} items selected";
            }, maxOptionsText: function maxOptionsText(a, b) {
                return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"];
            }, selectAllText: "Select All", deselectAllText: "Deselect All", doneButton: !1, doneButtonText: "Close", multipleSeparator: ", ", styleBase: "btn", style: "btn-default", size: "auto", title: null, selectedTextFormat: "values", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1, liveSearchPlaceholder: null, liveSearchNormalize: !1, liveSearchStyle: "contains", actionsBox: !1, iconBase: "glyphicon", tickIcon: "glyphicon-ok", showTick: !1, template: { caret: '<span class="caret"></span>' }, maxOptions: !1, mobile: !1, selectOnTab: !1, dropdownAlignRight: !1, windowPadding: 0 }, l.prototype = { constructor: l, init: function init() {
                var b = this,
                    c = this.$element.attr("id");this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight === !0 && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function (a) {
                    a.preventDefault(), b.$button.focus();
                })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({ "hide.bs.dropdown": function hideBsDropdown(a) {
                        b.$menuInner.attr("aria-expanded", !1), b.$element.trigger("hide.bs.select", a);
                    }, "hidden.bs.dropdown": function hiddenBsDropdown(a) {
                        b.$element.trigger("hidden.bs.select", a);
                    }, "show.bs.dropdown": function showBsDropdown(a) {
                        b.$menuInner.attr("aria-expanded", !0), b.$element.trigger("show.bs.select", a);
                    }, "shown.bs.dropdown": function shownBsDropdown(a) {
                        b.$element.trigger("shown.bs.select", a);
                    } }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
                    b.$button.addClass("bs-invalid"), b.$element.on({ "focus.bs.select": function focusBsSelect() {
                            b.$button.focus(), b.$element.off("focus.bs.select");
                        }, "shown.bs.select": function shownBsSelect() {
                            b.$element.val(b.$element.val()).off("shown.bs.select");
                        }, "rendered.bs.select": function renderedBsSelect() {
                            this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select");
                        } }), b.$button.on("blur.bs.select", function () {
                        b.$element.focus().blur(), b.$button.off("blur.bs.select");
                    });
                }), setTimeout(function () {
                    b.$element.trigger("loaded.bs.select");
                });
            }, createDropdown: function createDropdown() {
                var b = this.multiple || this.options.showTick ? " show-tick" : "",
                    c = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    d = this.autofocus ? " autofocus" : "",
                    e = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    f = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + j(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
                    g = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                    h = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                    i = '<div class="btn-group bootstrap-select' + b + c + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + d + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + e + f + g + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + h + "</div></div>";return a(i);
            }, createView: function createView() {
                var a = this.createDropdown(),
                    b = this.createLi();return a.find("ul")[0].innerHTML = b, a;
            }, reloadLi: function reloadLi() {
                var a = this.createLi();this.$menuInner[0].innerHTML = a;
            }, createLi: function createLi() {
                var c = this,
                    d = [],
                    e = 0,
                    f = document.createElement("option"),
                    g = -1,
                    h = function h(a, b, c, d) {
                    return "<li" + ("undefined" != typeof c && "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b && null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d && null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>";
                },
                    i = function i(d, e, f, g) {
                    return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + (f ? ' style="' + f + '"' : "") + (c.options.liveSearchNormalize ? ' data-normalized-text="' + b(j(a(d).html())) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ' role="option">' + d + '<span class="' + c.options.iconBase + " " + c.options.tickIcon + ' check-mark"></span></a>';
                };if (this.options.title && !this.multiple && (g--, !this.$element.find(".bs-title-option").length)) {
                    var k = this.$element[0];f.className = "bs-title-option", f.innerHTML = this.options.title, f.value = "", k.insertBefore(f, k.firstChild);var l = a(k.options[k.selectedIndex]);void 0 === l.attr("selected") && void 0 === this.$element.data("selected") && (f.selected = !0);
                }var m = this.$element.find("option");return m.each(function (b) {
                    var f = a(this);if (g++, !f.hasClass("bs-title-option")) {
                        var k,
                            l = this.className || "",
                            n = j(this.style.cssText),
                            o = f.data("content") ? f.data("content") : f.html(),
                            p = f.data("tokens") ? f.data("tokens") : null,
                            q = "undefined" != typeof f.data("subtext") ? '<small class="text-muted">' + f.data("subtext") + "</small>" : "",
                            r = "undefined" != typeof f.data("icon") ? '<span class="' + c.options.iconBase + " " + f.data("icon") + '"></span> ' : "",
                            s = f.parent(),
                            t = "OPTGROUP" === s[0].tagName,
                            u = t && s[0].disabled,
                            v = this.disabled || u;if ("" !== r && v && (r = "<span>" + r + "</span>"), c.options.hideDisabled && (v && !t || u)) return k = f.data("prevHiddenIndex"), f.next().data("prevHiddenIndex", void 0 !== k ? k : b), void g--;if (f.data("content") || (o = r + '<span class="text">' + o + q + "</span>"), t && f.data("divider") !== !0) {
                            if (c.options.hideDisabled && v) {
                                if (void 0 === s.data("allOptionsDisabled")) {
                                    var w = s.children();s.data("allOptionsDisabled", w.filter(":disabled").length === w.length);
                                }if (s.data("allOptionsDisabled")) return void g--;
                            }var x = " " + s[0].className || "";if (0 === f.index()) {
                                e += 1;var y = s[0].label,
                                    z = "undefined" != typeof s.data("subtext") ? '<small class="text-muted">' + s.data("subtext") + "</small>" : "",
                                    A = s.data("icon") ? '<span class="' + c.options.iconBase + " " + s.data("icon") + '"></span> ' : "";y = A + '<span class="text">' + j(y) + z + "</span>", 0 !== b && d.length > 0 && (g++, d.push(h("", null, "divider", e + "div"))), g++, d.push(h(y, null, "dropdown-header" + x, e));
                            }if (c.options.hideDisabled && v) return void g--;d.push(h(i(o, "opt " + l + x, n, p), b, "", e));
                        } else if (f.data("divider") === !0) d.push(h("", b, "divider"));else if (f.data("hidden") === !0) k = f.data("prevHiddenIndex"), f.next().data("prevHiddenIndex", void 0 !== k ? k : b), d.push(h(i(o, l, n, p), b, "hidden is-hidden"));else {
                            var B = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;if (!B && c.options.hideDisabled && (k = f.data("prevHiddenIndex"), void 0 !== k)) {
                                var C = m.eq(k)[0].previousElementSibling;C && "OPTGROUP" === C.tagName && !C.disabled && (B = !0);
                            }B && (g++, d.push(h("", null, "divider", e + "div"))), d.push(h(i(o, l, n, p), b));
                        }c.liObj[b] = g;
                    }
                }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), d.join("");
            }, findLis: function findLis() {
                return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis;
            }, render: function render(b) {
                var c,
                    d = this,
                    e = this.$element.find("option");b !== !1 && e.each(function (a) {
                    var b = d.findLis().eq(d.liObj[a]);d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b);
                }), this.togglePlaceholder(), this.tabIndex();var f = e.map(function () {
                    if (this.selected) {
                        if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;var b,
                            c = a(this),
                            e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content").toString() : e + c.html() + b;
                    }
                }).toArray(),
                    g = this.multiple ? f.join(this.options.multipleSeparator) : f[0];if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var h = this.options.selectedTextFormat.split(">");if (h.length > 1 && f.length > h[1] || 1 == h.length && f.length >= 2) {
                        c = this.options.hideDisabled ? ", [disabled]" : "";var i = e.not('[data-divider="true"], [data-hidden="true"]' + c).length,
                            j = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(f.length, i) : this.options.countSelectedText;g = j.replace("{0}", f.length.toString()).replace("{1}", i.toString());
                    }
                }void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (g = this.options.title), g || (g = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", k(a.trim(g.replace(/<[^>]*>?/g, "")))), this.$button.children(".filter-option").html(g), this.$element.trigger("rendered.bs.select");
            }, setStyle: function setStyle(a, b) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));var c = a ? a : this.options.style;"add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c));
            }, liHeight: function liHeight(b) {
                if (b || this.options.size !== !1 && !this.sizeInfo) {
                    var c = document.createElement("div"),
                        d = document.createElement("div"),
                        e = document.createElement("ul"),
                        f = document.createElement("li"),
                        g = document.createElement("li"),
                        h = document.createElement("a"),
                        i = document.createElement("span"),
                        j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                        k = this.options.liveSearch ? document.createElement("div") : null,
                        l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
                        var n = document.createElement("input");k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k);
                    }l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);var o = h.offsetHeight,
                        p = j ? j.offsetHeight : 0,
                        q = k ? k.offsetHeight : 0,
                        r = l ? l.offsetHeight : 0,
                        s = m ? m.offsetHeight : 0,
                        t = a(f).outerHeight(!0),
                        u = "function" == typeof getComputedStyle && getComputedStyle(d),
                        v = u ? null : a(d),
                        w = { vert: parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")), horiz: parseInt(u ? u.paddingLeft : v.css("paddingLeft")) + parseInt(u ? u.paddingRight : v.css("paddingRight")) + parseInt(u ? u.borderLeftWidth : v.css("borderLeftWidth")) + parseInt(u ? u.borderRightWidth : v.css("borderRightWidth")) },
                        x = { vert: w.vert + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2, horiz: w.horiz + parseInt(u ? u.marginLeft : v.css("marginLeft")) + parseInt(u ? u.marginRight : v.css("marginRight")) + 2 };document.body.removeChild(c), this.sizeInfo = { liHeight: o, headerHeight: p, searchHeight: q, actionsHeight: r, doneButtonHeight: s, dividerHeight: t, menuPadding: w, menuExtras: x };
                }
            }, setSize: function setSize() {
                if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
                    var b,
                        c,
                        d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j = this,
                        k = this.$menu,
                        l = this.$menuInner,
                        m = a(window),
                        n = this.$newElement[0].offsetHeight,
                        o = this.$newElement[0].offsetWidth,
                        p = this.sizeInfo.liHeight,
                        q = this.sizeInfo.headerHeight,
                        r = this.sizeInfo.searchHeight,
                        s = this.sizeInfo.actionsHeight,
                        t = this.sizeInfo.doneButtonHeight,
                        u = this.sizeInfo.dividerHeight,
                        v = this.sizeInfo.menuPadding,
                        w = this.sizeInfo.menuExtras,
                        x = this.options.hideDisabled ? ".disabled" : "",
                        y = function y() {
                        var b,
                            c = j.$newElement.offset(),
                            d = a(j.options.container);j.options.container && !d.is("body") ? (b = d.offset(), b.top += parseInt(d.css("borderTopWidth")), b.left += parseInt(d.css("borderLeftWidth"))) : b = { top: 0, left: 0 };var e = j.options.windowPadding;f = c.top - b.top - m.scrollTop(), g = m.height() - f - n - b.top - e[2], h = c.left - b.left - m.scrollLeft(), i = m.width() - h - o - b.left - e[1], f -= e[0], h -= e[3];
                    };if (y(), "auto" === this.options.size) {
                        var z = function z() {
                            var m,
                                n = function n(b, c) {
                                return function (d) {
                                    return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b));
                                };
                            },
                                u = j.$menuInner[0].getElementsByTagName("li"),
                                x = Array.prototype.filter ? Array.prototype.filter.call(u, n("hidden", !1)) : j.$lis.not(".hidden"),
                                z = Array.prototype.filter ? Array.prototype.filter.call(x, n("dropdown-header", !0)) : x.filter(".dropdown-header");y(), b = g - w.vert, c = i - w.horiz, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height"), k.data("width") || k.data("width", k.width()), e = k.data("width")) : (d = k.height(), e = k.width()), j.options.dropupAuto && j.$newElement.toggleClass("dropup", f > g && b - w.vert < d), j.$newElement.hasClass("dropup") && (b = f - w.vert), "auto" === j.options.dropdownAlignRight && k.toggleClass("dropdown-menu-right", h > i && c - w.horiz < e - o), m = x.length + z.length > 3 ? 3 * p + w.vert - 2 : 0, k.css({ "max-height": b + "px", overflow: "hidden", "min-height": m + q + r + s + t + "px" }), l.css({ "max-height": b - q - r - s - t - v.vert + "px", "overflow-y": "auto", "min-height": Math.max(m - v.vert, 0) + "px" });
                        };z(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", z), m.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", z);
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(x).length > this.options.size) {
                        var A = this.$lis.not(".divider").not(x).children().slice(0, this.options.size).last().parent().index(),
                            B = this.$lis.slice(0, A + 1).filter(".divider").length;b = p * this.options.size + B * u + v.vert, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height")) : d = k.height(), j.options.dropupAuto && this.$newElement.toggleClass("dropup", f > g && b - w.vert < d), k.css({ "max-height": b + q + r + s + t + "px", overflow: "hidden", "min-height": "" }), l.css({ "max-height": b - v.vert + "px", "overflow-y": "auto", "min-height": "" });
                    }
                }
            }, setWidth: function setWidth() {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");var a = this.$menu.parent().clone().appendTo("body"),
                        b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
                        c = a.children(".dropdown-menu").outerWidth(),
                        d = b.css("width", "auto").children("button").outerWidth();a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px");
                } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width");
            }, selectPosition: function selectPosition() {
                this.$bsContainer = a('<div class="bs-container" />');var b,
                    c,
                    d,
                    e = this,
                    f = a(this.options.container),
                    g = function g(a) {
                    e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), f.is("body") ? c = { top: 0, left: 0 } : (c = f.offset(), c.top += parseInt(f.css("borderTopWidth")) - f.scrollTop(), c.left += parseInt(f.css("borderLeftWidth")) - f.scrollLeft()), d = a.hasClass("dropup") ? 0 : a[0].offsetHeight, e.$bsContainer.css({ top: b.top - c.top + d, left: b.left - c.left, width: a[0].offsetWidth });
                };this.$button.on("click", function () {
                    var b = a(this);e.isDisabled() || (g(e.$newElement), e.$bsContainer.appendTo(e.options.container).toggleClass("open", !b.hasClass("open")).append(e.$menu));
                }), a(window).on("resize scroll", function () {
                    g(e.$newElement);
                }), this.$element.on("hide.bs.select", function () {
                    e.$menu.data("height", e.$menu.height()), e.$bsContainer.detach();
                });
            }, setSelected: function setSelected(a, b, c) {
                c || (this.togglePlaceholder(), c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b).find("a").attr("aria-selected", b);
            }, setDisabled: function setDisabled(a, b, c) {
                c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1);
            }, isDisabled: function isDisabled() {
                return this.$element[0].disabled;
            }, checkDisabled: function checkDisabled() {
                var a = this;this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), this.$button.attr("tabindex") != -1 || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
                    return !a.isDisabled();
                });
            }, togglePlaceholder: function togglePlaceholder() {
                var a = this.$element.val();this.$button.toggleClass("bs-placeholder", null === a || "" === a || a.constructor === Array && 0 === a.length);
            }, tabIndex: function tabIndex() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && this.$element.attr("tabindex") !== -98 && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98);
            }, clickListener: function clickListener() {
                var b = this,
                    c = a(document);c.data("spaceSelect", !1), this.$button.on("keyup", function (a) {
                    /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1));
                }), this.$button.on("click", function () {
                    b.setSize();
                }), this.$element.on("shown.bs.select", function () {
                    if (b.options.liveSearch || b.multiple) {
                        if (!b.multiple) {
                            var a = b.liObj[b.$element[0].selectedIndex];if ("number" != typeof a || b.options.size === !1) return;var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c;
                        }
                    } else b.$menuInner.find(".selected a").focus();
                }), this.$menuInner.on("click", "li a", function (c) {
                    var d = a(this),
                        f = d.parent().data("originalIndex"),
                        g = b.$element.val(),
                        h = b.$element.prop("selectedIndex"),
                        i = !0;if (b.multiple && 1 !== b.options.maxOptions && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
                        var j = b.$element.find("option"),
                            k = j.eq(f),
                            l = k.prop("selected"),
                            m = k.parent("optgroup"),
                            n = b.options.maxOptions,
                            o = m.data("maxOptions") || !1;if (b.multiple) {
                            if (k.prop("selected", !l), b.setSelected(f, !l), d.blur(), n !== !1 || o !== !1) {
                                var p = n < j.filter(":selected").length,
                                    q = o < m.find("option:selected").length;if (n && p || o && q) if (n && 1 == n) j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(f, !0);else if (o && 1 == o) {
                                    m.find("option:selected").prop("selected", !1), k.prop("selected", !0);var r = d.parent().data("optgroup");b.$menuInner.find('[data-optgroup="' + r + '"]').removeClass("selected"), b.setSelected(f, !0);
                                } else {
                                    var s = "string" == typeof b.options.maxOptionsText ? [b.options.maxOptionsText, b.options.maxOptionsText] : b.options.maxOptionsText,
                                        t = "function" == typeof s ? s(n, o) : s,
                                        u = t[0].replace("{n}", n),
                                        v = t[1].replace("{n}", o),
                                        w = a('<div class="notify"></div>');t[2] && (u = u.replace("{var}", t[2][n > 1 ? 0 : 1]), v = v.replace("{var}", t[2][o > 1 ? 0 : 1])), k.prop("selected", !1), b.$menu.append(w), n && p && (w.append(a("<div>" + u + "</div>")), i = !1, b.$element.trigger("maxReached.bs.select")), o && q && (w.append(a("<div>" + v + "</div>")), i = !1, b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                                        b.setSelected(f, !1);
                                    }, 10), w.delay(750).fadeOut(300, function () {
                                        a(this).remove();
                                    });
                                }
                            }
                        } else j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), b.setSelected(f, !0);!b.multiple || b.multiple && 1 === b.options.maxOptions ? b.$button.focus() : b.options.liveSearch && b.$searchbox.focus(), i && (g != b.$element.val() && b.multiple || h != b.$element.prop("selectedIndex") && !b.multiple) && (e = [f, k.prop("selected"), l], b.$element.triggerNative("change"));
                    }
                }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (c) {
                    c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus());
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function (a) {
                    a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus();
                }), this.$menu.on("click", ".popover-title .close", function () {
                    b.$button.click();
                }), this.$searchbox.on("click", function (a) {
                    a.stopPropagation();
                }), this.$menu.on("click", ".actions-btn", function (c) {
                    b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll();
                }), this.$element.change(function () {
                    b.render(!1), b.$element.trigger("changed.bs.select", e), e = null;
                });
            }, liveSearchListener: function liveSearchListener() {
                var c = this,
                    d = a('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api", function () {
                    c.$menuInner.find(".active").removeClass("active"), c.$searchbox.val() && (c.$searchbox.val(""), c.$lis.not(".is-hidden").removeClass("hidden"), d.parent().length && d.remove()), c.multiple || c.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
                        c.$searchbox.focus();
                    }, 10);
                }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (a) {
                    a.stopPropagation();
                }), this.$searchbox.on("input propertychange", function () {
                    if (c.$lis.not(".is-hidden").removeClass("hidden"), c.$lis.filter(".active").removeClass("active"), d.remove(), c.$searchbox.val()) {
                        var e,
                            f = c.$lis.not(".is-hidden, .divider, .dropdown-header");if (e = c.options.liveSearchNormalize ? f.not(":a" + c._searchStyle() + '("' + b(c.$searchbox.val()) + '")') : f.not(":" + c._searchStyle() + '("' + c.$searchbox.val() + '")'), e.length === f.length) d.html(c.options.noneResultsText.replace("{0}", '"' + j(c.$searchbox.val()) + '"')), c.$menuInner.append(d), c.$lis.addClass("hidden");else {
                            e.addClass("hidden");var g,
                                h = c.$lis.not(".hidden");h.each(function (b) {
                                var c = a(this);c.hasClass("divider") ? void 0 === g ? c.addClass("hidden") : (g && g.addClass("hidden"), g = c) : c.hasClass("dropdown-header") && h.eq(b + 1).data("optgroup") !== c.data("optgroup") ? c.addClass("hidden") : g = null;
                            }), g && g.addClass("hidden"), f.not(".hidden").first().addClass("active"), c.$menuInner.scrollTop(0);
                        }
                    }
                });
            }, _searchStyle: function _searchStyle() {
                var a = { begins: "ibegins", startsWith: "ibegins" };return a[this.options.liveSearchStyle] || "icontains";
            }, val: function val(a) {
                return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val();
            }, changeAll: function changeAll(b) {
                if (this.multiple) {
                    "undefined" == typeof b && (b = !0), this.findLis();var c = this.$element.find("option"),
                        d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
                        e = d.length,
                        f = [];if (b) {
                        if (d.filter(".selected").length === d.length) return;
                    } else if (0 === d.filter(".selected").length) return;d.toggleClass("selected", b);for (var g = 0; g < e; g++) {
                        var h = d[g].getAttribute("data-original-index");f[f.length] = c.eq(h)[0];
                    }a(f).prop("selected", b), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change");
                }
            }, selectAll: function selectAll() {
                return this.changeAll(!0);
            }, deselectAll: function deselectAll() {
                return this.changeAll(!1);
            }, toggle: function toggle(a) {
                a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click");
            }, keydown: function keydown(b) {
                var c,
                    d,
                    e,
                    f,
                    g = a(this),
                    h = g.is("input") ? g.parent().parent() : g.parent(),
                    i = h.data("this"),
                    j = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                    k = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" };if (f = i.$newElement.hasClass("open"), !f && (b.keyCode >= 48 && b.keyCode <= 57 || b.keyCode >= 96 && b.keyCode <= 105 || b.keyCode >= 65 && b.keyCode <= 90)) return i.options.container ? i.$button.trigger("click") : (i.setSize(), i.$menu.parent().addClass("open"), f = !0), void i.$searchbox.focus();if (i.options.liveSearch && /(^9$|27)/.test(b.keyCode.toString(10)) && f && (b.preventDefault(), b.stopPropagation(), i.$menuInner.click(), i.$button.focus()), /(38|40)/.test(b.keyCode.toString(10))) {
                    if (c = i.$lis.filter(j), !c.length) return;d = i.options.liveSearch ? c.index(c.filter(".active")) : c.index(c.find("a").filter(":focus").parent()), e = i.$menuInner.data("prevIndex"), 38 == b.keyCode ? (!i.options.liveSearch && d != e || d == -1 || d--, d < 0 && (d += c.length)) : 40 == b.keyCode && ((i.options.liveSearch || d == e) && d++, d %= c.length), i.$menuInner.data("prevIndex", d), i.options.liveSearch ? (b.preventDefault(), g.hasClass("dropdown-toggle") || (c.removeClass("active").eq(d).addClass("active").children("a").focus(), g.focus())) : c.eq(d).children("a").focus();
                } else if (!g.is("input")) {
                    var l,
                        m,
                        n = [];c = i.$lis.filter(j), c.each(function (c) {
                        a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == k[b.keyCode] && n.push(c);
                    }), l = a(document).data("keycount"), l++, a(document).data("keycount", l), m = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), m != k[b.keyCode] ? (l = 1, a(document).data("keycount", l)) : l >= n.length && (a(document).data("keycount", 0), l > n.length && (l = 1)), c.eq(n[l - 1]).children("a").focus();
                }if ((/(13|32)/.test(b.keyCode.toString(10)) || /(^9$)/.test(b.keyCode.toString(10)) && i.options.selectOnTab) && f) {
                    if (/(32)/.test(b.keyCode.toString(10)) || b.preventDefault(), i.options.liveSearch) /(32)/.test(b.keyCode.toString(10)) || (i.$menuInner.find(".active a").click(), g.focus());else {
                        var o = a(":focus");o.click(), o.focus(), b.preventDefault(), a(document).data("spaceSelect", !0);
                    }a(document).data("keycount", 0);
                }(/(^9$|27)/.test(b.keyCode.toString(10)) && f && (i.multiple || i.options.liveSearch) || /(27)/.test(b.keyCode.toString(10)) && !f) && (i.$menu.parent().removeClass("open"), i.options.container && i.$newElement.removeClass("open"), i.$button.focus());
            }, mobile: function mobile() {
                this.$element.addClass("mobile-device");
            }, refresh: function refresh() {
                this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select");
            }, hide: function hide() {
                this.$newElement.hide();
            }, show: function show() {
                this.$newElement.show();
            }, remove: function remove() {
                this.$newElement.remove(), this.$element.remove();
            }, destroy: function destroy() {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker");
            } };var m = a.fn.selectpicker;a.fn.selectpicker = c, a.fn.selectpicker.Constructor = l, a.fn.selectpicker.noConflict = function () {
            return a.fn.selectpicker = m, this;
        }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', l.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function (a) {
            a.stopPropagation();
        }), a(window).on("load.bs.select.data-api", function () {
            a(".selectpicker").each(function () {
                var b = a(this);c.call(b, b.data());
            });
        });
    }(a);
});
//# sourceMappingURL=bootstrap-select.js.map
/*!
 * Ajax Bootstrap Select
 *
 * Extends existing [Bootstrap Select] implementations by adding the ability to search via AJAX requests as you type. Originally for CROSCON.
 *
 * @version 1.4.1
 * @author Adam Heim - https://github.com/truckingsim
 * @link https://github.com/truckingsim/Ajax-Bootstrap-Select
 * @copyright 2017 Adam Heim
 * @license Released under the MIT license.
 *
 * Contributors:
 *   Mark Carver - https://github.com/markcarver
 *
 * Last build: 2017-07-21 1:08:54 PM GMT-0400
 */
!function (a, b) {
    var c = function c(_c3, d) {
        var e,
            f,
            g = this;d = d || {}, this.$element = a(_c3), this.options = a.extend(!0, {}, a.fn.ajaxSelectPicker.defaults, d), this.LOG_ERROR = 1, this.LOG_WARNING = 2, this.LOG_INFO = 3, this.LOG_DEBUG = 4, this.lastRequest = !1, this.previousQuery = "", this.query = "", this.request = !1;var h = [{ from: "ajaxResultsPreHook", to: "preprocessData" }, { from: "ajaxSearchUrl", to: { ajax: { url: "{{{value}}}" } } }, { from: "ajaxOptions", to: "ajax" }, { from: "debug", to: function to(b) {
                var c = {};c.log = Boolean(g.options[b.from]) ? g.LOG_DEBUG : 0, g.options = a.extend(!0, {}, g.options, c), delete g.options[b.from], g.log(g.LOG_WARNING, 'Deprecated option "' + b.from + '". Update code to use:', c);
            } }, { from: "mixWithCurrents", to: "preserveSelected" }, { from: "placeHolderOption", to: { locale: { emptyTitle: "{{{value}}}" } } }];h.length && a.map(h, function (b) {
            if (g.options[b.from]) if (a.isPlainObject(b.to)) g.replaceValue(b.to, "{{{value}}}", g.options[b.from]), g.options = a.extend(!0, {}, g.options, b.to), g.log(g.LOG_WARNING, 'Deprecated option "' + b.from + '". Update code to use:', b.to), delete g.options[b.from];else if (a.isFunction(b.to)) b.to.apply(g, [b]);else {
                var c = {};c[b.to] = g.options[b.from], g.options = a.extend(!0, {}, g.options, c), g.log(g.LOG_WARNING, 'Deprecated option "' + b.from + '". Update code to use:', c), delete g.options[b.from];
            }
        });var i = this.$element.data();i.searchUrl && (g.log(g.LOG_WARNING, 'Deprecated attribute name: "data-search-url". Update markup to use: \' data-abs-ajax-url="' + i.searchUrl + "\" '"), this.options.ajax.url = i.searchUrl);var j = function j(a, b) {
            return b.toLowerCase();
        },
            k = function k(a, b, c) {
            var d = [].concat(a),
                e = d.length,
                f = c || {};if (e) {
                var g = d.shift();f[g] = k(d, b, f[g]);
            }return e ? f : b;
        },
            l = Object.keys(i).filter(/./.test.bind(new RegExp("^abs[A-Z]")));if (l.length) {
            var m = {},
                n = ["locale"];for (e = 0, f = l.length; e < f; e++) {
                var o = l[e].replace(/^abs([A-Z])/, j).replace(/([A-Z])/g, "-$1").toLowerCase(),
                    p = o.split("-");if (p[0] && p.length > 1 && n.indexOf(p[0]) !== -1) {
                    for (var q = [p.shift()], r = "", s = 0; s < p.length; s++) {
                        r += 0 === s ? p[s] : p[s].charAt(0).toUpperCase() + p[s].slice(1);
                    }q.push(r), p = q;
                }this.log(this.LOG_DEBUG, 'Processing data attribute "data-abs-' + o + '":', i[l[e]]), k(p, i[l[e]], m);
            }this.options = a.extend(!0, {}, this.options, m), this.log(this.LOG_DEBUG, "Merged in the data attribute options: ", m, this.options);
        }if (this.selectpicker = i.selectpicker, !this.selectpicker) return this.log(this.LOG_ERROR, "Cannot instantiate an AjaxBootstrapSelect instance without selectpicker first being initialized!"), null;if (!this.options.ajax.url) return this.log(this.LOG_ERROR, 'Option "ajax.url" must be set! Options:', this.options), null;if (this.locale = a.extend(!0, {}, a.fn.ajaxSelectPicker.locale), this.options.langCode = this.options.langCode || b.navigator.userLanguage || b.navigator.language || "en", !this.locale[this.options.langCode]) {
            var t = this.options.langCode;this.options.langCode = "en";var u = t.split("-");for (e = 0, f = u.length; e < f; e++) {
                var v = u.join("-");if (v.length && this.locale[v]) {
                    this.options.langCode = v;break;
                }u.pop();
            }this.log(this.LOG_WARNING, 'Unknown langCode option: "' + t + '". Using the following langCode instead: "' + this.options.langCode + '".');
        }this.locale[this.options.langCode] = a.extend(!0, {}, this.locale[this.options.langCode], this.options.locale), this.list = new b.AjaxBootstrapSelectList(this), this.list.refresh(), setTimeout(function () {
            g.init();
        }, 500);
    };c.prototype.init = function () {
        var c,
            d = this;this.options.preserveSelected && this.selectpicker.$menu.off("click", ".actions-btn").on("click", ".actions-btn", function (b) {
            d.selectpicker.options.liveSearch ? d.selectpicker.$searchbox.focus() : d.selectpicker.$button.focus(), b.preventDefault(), b.stopPropagation(), a(this).is(".bs-select-all") ? (null === d.selectpicker.$lis && (d.selectpicker.$lis = d.selectpicker.$menu.find("li")), d.$element.find("option:enabled").prop("selected", !0), a(d.selectpicker.$lis).not(".disabled").addClass("selected"), d.selectpicker.render()) : (null === d.selectpicker.$lis && (d.selectpicker.$lis = d.selectpicker.$menu.find("li")), d.$element.find("option:enabled").prop("selected", !1), a(d.selectpicker.$lis).not(".disabled").removeClass("selected"), d.selectpicker.render()), d.selectpicker.$element.change();
        }), this.selectpicker.$searchbox.attr("placeholder", this.t("searchPlaceholder")).off("input propertychange"), this.selectpicker.$searchbox.on(this.options.bindEvent, function (e) {
            var f = d.selectpicker.$searchbox.val();if (d.log(d.LOG_DEBUG, 'Bind event fired: "' + d.options.bindEvent + '", keyCode:', e.keyCode, e), d.options.cache || (d.options.ignoredKeys[13] = "enter"), d.options.ignoredKeys[e.keyCode]) return void d.log(d.LOG_DEBUG, "Key ignored.");if (f.length < d.options.minLength) return void d.list.setStatus(d.t("statusTooShort"));if (clearTimeout(c), f.length || (d.options.clearOnEmpty && d.list.destroy(), d.options.emptyRequest)) {
                if (d.previousQuery = d.query, d.query = f, d.options.cache && 13 !== e.keyCode) {
                    var g = d.list.cacheGet(d.query);if (g) return d.list.setStatus(g.length ? "" : d.t("statusNoResults")), d.list.replaceOptions(g), void d.log(d.LOG_INFO, "Rebuilt options from cached data.");
                }c = setTimeout(function () {
                    d.lastRequest && d.lastRequest.jqXHR && a.isFunction(d.lastRequest.jqXHR.abort) && d.lastRequest.jqXHR.abort(), d.request = new b.AjaxBootstrapSelectRequest(d), d.request.jqXHR.always(function () {
                        d.lastRequest = d.request, d.request = !1;
                    });
                }, d.options.requestDelay || 300);
            }
        });
    }, c.prototype.log = function (a, c) {
        if (b.console && this.options.log) {
            if ("number" != typeof this.options.log) switch ("string" == typeof this.options.log && (this.options.log = this.options.log.toLowerCase()), this.options.log) {case !0:case "debug":
                    this.options.log = this.LOG_DEBUG;break;case "info":
                    this.options.log = this.LOG_INFO;break;case "warn":case "warning":
                    this.options.log = this.LOG_WARNING;break;default:case !1:case "error":
                    this.options.log = this.LOG_ERROR;}if (a <= this.options.log) {
                var d = [].slice.apply(arguments, [2]);switch (a) {case this.LOG_DEBUG:
                        a = "debug";break;case this.LOG_INFO:
                        a = "info";break;case this.LOG_WARNING:
                        a = "warn";break;default:case this.LOG_ERROR:
                        a = "error";}var e = "[" + a.toUpperCase() + "] AjaxBootstrapSelect:";"string" == typeof c ? d.unshift(e + " " + c) : (d.unshift(c), d.unshift(e)), b.console[a].apply(b.console, d);
            }
        }
    }, c.prototype.replaceValue = function (b, c, d, e) {
        var f = this;e = a.extend({ recursive: !0, depth: !1, limit: !1 }, e), a.each(b, function (g, h) {
            return !(e.limit !== !1 && "number" == typeof e.limit && e.limit <= 0) && void (a.isArray(b[g]) || a.isPlainObject(b[g]) ? (e.recursive && e.depth === !1 || e.recursive && "number" == typeof e.depth && e.depth > 0) && f.replaceValue(b[g], c, d, e) : h === c && (e.limit !== !1 && "number" == typeof e.limit && e.limit--, b[g] = d));
        });
    }, c.prototype.t = function (a, b) {
        return b = b || this.options.langCode, this.locale[b] && this.locale[b].hasOwnProperty(a) ? this.locale[b][a] : (this.log(this.LOG_WARNING, "Unknown translation key:", a), a);
    }, b.AjaxBootstrapSelect = b.AjaxBootstrapSelect || c;var d = function d(b) {
        var c = this;this.$status = a(b.options.templates.status).hide().appendTo(b.selectpicker.$menu);var d = b.t("statusInitialized");d && d.length && this.setStatus(d), this.cache = {}, this.plugin = b, this.selected = [], this.title = null, this.selectedTextFormat = b.selectpicker.options.selectedTextFormat;var e = [];b.$element.find("option").each(function () {
            var c = a(this),
                d = c.attr("value");e.push({ value: d, text: c.text(), class: c.attr("class") || "", data: c.data() || {}, preserved: b.options.preserveSelected, selected: !!c.attr("selected") });
        }), this.cacheSet("", e), b.options.preserveSelected && (c.selected = e, b.$element.on("change.abs.preserveSelected", function (d) {
            var e = b.$element.find(":selected");c.selected = [], b.selectpicker.multiple || (e = e.last()), e.each(function () {
                var b = a(this),
                    d = b.attr("value");c.selected.push({ value: d, text: b.text(), class: b.attr("class") || "", data: b.data() || {}, preserved: !0, selected: !0 });
            }), c.replaceOptions(c.cacheGet(c.plugin.query));
        }));
    };d.prototype.build = function (b) {
        var c,
            d,
            e = b.length,
            f = a("<select/>"),
            g = a("<optgroup/>").attr("label", this.plugin.t("currentlySelected"));for (this.plugin.log(this.plugin.LOG_DEBUG, "Building the select list options from data:", b), d = 0; d < e; d++) {
            var h = b[d],
                i = a("<option/>").appendTo(h.preserved ? g : f);if (h.hasOwnProperty("divider")) i.attr("data-divider", "true");else {
                i.val(h.value).text(h.text).attr("title", h.text), h.class.length && i.attr("class", h.class), h.disabled && i.attr("disabled", !0), h.selected && !this.plugin.selectpicker.multiple && f.find(":selected").prop("selected", !1), h.selected && i.attr("selected", !0);for (c in h.data) {
                    h.data.hasOwnProperty(c) && i.attr("data-" + c, h.data[c]);
                }
            }
        }g.find("option").length && g["before" === this.plugin.options.preserveSelectedPosition ? "prependTo" : "appendTo"](f);var j = f.html();return this.plugin.log(this.plugin.LOG_DEBUG, j), j;
    }, d.prototype.cacheGet = function (a, b) {
        var c = this.cache[a] || b;return this.plugin.log(this.LOG_DEBUG, "Retrieving cache:", a, c), c;
    }, d.prototype.cacheSet = function (a, b) {
        this.cache[a] = b, this.plugin.log(this.LOG_DEBUG, "Saving to cache:", a, b);
    }, d.prototype.destroy = function () {
        this.replaceOptions(), this.plugin.list.setStatus(), this.plugin.log(this.plugin.LOG_DEBUG, "Destroyed select list.");
    }, d.prototype.refresh = function (a) {
        this.plugin.selectpicker.$menu.css("minHeight", 0), this.plugin.selectpicker.$menu.find("> .inner").css("minHeight", 0);var b = this.plugin.t("emptyTitle");!this.plugin.$element.find("option").length && b && b.length ? this.setTitle(b) : (this.title || "static" !== this.selectedTextFormat && this.selectedTextFormat !== this.plugin.selectpicker.options.selectedTextFormat) && this.restoreTitle(), this.plugin.selectpicker.refresh(), this.plugin.selectpicker.findLis(), a && (this.plugin.log(this.plugin.LOG_DEBUG, "Triggering Change"), this.plugin.$element.trigger("change.$")), this.plugin.log(this.plugin.LOG_DEBUG, "Refreshed select list.");
    }, d.prototype.replaceOptions = function (a) {
        var b,
            c,
            d,
            e = "",
            f = [],
            g = [],
            h = [];if (a = a || [], this.selected && this.selected.length) {
            for (this.plugin.log(this.plugin.LOG_INFO, "Processing preserved selections:", this.selected), g = [].concat(this.selected, a), c = g.length, b = 0; b < c; b++) {
                d = g[b], d.hasOwnProperty("value") && h.indexOf(d.value + "") === -1 ? (h.push(d.value + ""), f.push(d)) : this.plugin.log(this.plugin.LOG_DEBUG, "Duplicate item found, ignoring.");
            }a = f;
        }a.length && (e = this.plugin.list.build(a)), this.plugin.$element.html(e), this.refresh(), this.plugin.log(this.plugin.LOG_DEBUG, "Replaced options with data:", a);
    }, d.prototype.restore = function () {
        var a = this.plugin.list.cacheGet(this.plugin.previousQuery);return a && this.plugin.list.replaceOptions(a) && this.plugin.log(this.plugin.LOG_DEBUG, "Restored select list to the previous query: ", this.plugin.previousQuery), this.plugin.log(this.plugin.LOG_DEBUG, "Unable to restore select list to the previous query:", this.plugin.previousQuery), !1;
    }, d.prototype.restoreTitle = function () {
        this.plugin.request || (this.plugin.selectpicker.options.selectedTextFormat = this.selectedTextFormat, this.title ? this.plugin.$element.attr("title", this.title) : this.plugin.$element.removeAttr("title"), this.title = null);
    }, d.prototype.setTitle = function (a) {
        this.plugin.request || (this.title = this.plugin.$element.attr("title"), this.plugin.selectpicker.options.selectedTextFormat = "static", this.plugin.$element.attr("title", a));
    }, d.prototype.setStatus = function (a) {
        a = a || "", a.length ? this.$status.html(a).show() : this.$status.html("").hide();
    }, b.AjaxBootstrapSelectList = b.AjaxBootstrapSelectList || d;var e = function e(b) {
        var c,
            d = this,
            e = function e(a) {
            return function () {
                d.plugin.log(d.plugin.LOG_INFO, "Invoking AjaxBootstrapSelectRequest." + a + " callback:", arguments), d[a].apply(d, arguments), d.callbacks[a] && (d.plugin.log(d.plugin.LOG_INFO, "Invoking ajax." + a + " callback:", arguments), d.callbacks[a].apply(d, arguments));
            };
        },
            f = ["beforeSend", "success", "error", "complete"],
            g = f.length;for (this.plugin = b, this.options = a.extend(!0, {}, b.options.ajax), this.callbacks = {}, c = 0; c < g; c++) {
            var h = f[c];this.options[h] && a.isFunction(this.options[h]) && (this.callbacks[h] = this.options[h]), this.options[h] = e(h);
        }this.options.data && a.isFunction(this.options.data) && (this.options.data = this.options.data.apply(this) || { q: "{{{q}}}" }), this.plugin.replaceValue(this.options.data, "{{{q}}}", this.plugin.query), this.jqXHR = a.ajax(this.options);
    };e.prototype.beforeSend = function (a) {
        this.plugin.list.destroy(), this.plugin.list.setStatus(this.plugin.t("statusSearching"));
    }, e.prototype.complete = function (a, b) {
        if ("abort" !== b) {
            var c = this.plugin.list.cacheGet(this.plugin.query);if (c) {
                if (!c.length) return this.plugin.list.destroy(), this.plugin.list.setStatus(this.plugin.t("statusNoResults")), void this.plugin.log(this.plugin.LOG_INFO, "No results were returned.");this.plugin.list.setStatus();
            }this.plugin.list.refresh(!0);
        }
    }, e.prototype.error = function (a, b, c) {
        "abort" !== b && (this.plugin.list.cacheSet(this.plugin.query), this.plugin.options.clearOnError && this.plugin.list.destroy(), this.plugin.list.setStatus(this.plugin.t("errorText")), this.plugin.options.restoreOnError && (this.plugin.list.restore(), this.plugin.list.setStatus()));
    }, e.prototype.process = function (b) {
        var c,
            d,
            e,
            f,
            g,
            h,
            i = [],
            j = [];if (this.plugin.log(this.plugin.LOG_INFO, "Processing raw data for:", this.plugin.query, b), g = b, a.isFunction(this.plugin.options.preprocessData) && (this.plugin.log(this.plugin.LOG_DEBUG, "Invoking preprocessData callback:", this.plugin.options.processData), e = this.plugin.options.preprocessData.apply(this, [g]), "undefined" != typeof e && null !== e && e !== !1 && (g = e)), !a.isArray(g)) return this.plugin.log(this.plugin.LOG_ERROR, 'The data returned is not an Array. Use the "preprocessData" callback option to parse the results and construct a proper array for this plugin.', g), !1;for (d = g.length, c = 0; c < d; c++) {
            f = g[c], this.plugin.log(this.plugin.LOG_DEBUG, "Processing item:", f), a.isPlainObject(f) && (f.hasOwnProperty("divider") || f.hasOwnProperty("data") && a.isPlainObject(f.data) && f.data.divider ? (this.plugin.log(this.plugin.LOG_DEBUG, "Item is a divider, ignoring provided data."), i.push({ divider: !0 })) : f.hasOwnProperty("value") ? j.indexOf(f.value + "") === -1 ? (j.push(f.value + ""), f = a.extend({ text: f.value, class: "", data: {}, disabled: !1, selected: !1 }, f), i.push(f)) : this.plugin.log(this.plugin.LOG_DEBUG, "Duplicate item found, ignoring.") : this.plugin.log(this.plugin.LOG_DEBUG, 'Data item must have a "value" property, skipping.'));
        }if (h = [].concat(i), a.isFunction(this.plugin.options.processData) && (this.plugin.log(this.plugin.LOG_DEBUG, "Invoking processData callback:", this.plugin.options.processData), e = this.plugin.options.processData.apply(this, [h]), "undefined" != typeof e && null !== e && e !== !1)) {
            if (!a.isArray(e)) return this.plugin.log(this.plugin.LOG_ERROR, "The processData callback did not return an array.", e), !1;h = e;
        }return this.plugin.list.cacheSet(this.plugin.query, h), this.plugin.log(this.plugin.LOG_INFO, "Processed data:", h), h;
    }, e.prototype.success = function (b, c, d) {
        if (!a.isArray(b) && !a.isPlainObject(b)) return this.plugin.log(this.plugin.LOG_ERROR, "Request did not return a JSON Array or Object.", b), void this.plugin.list.destroy();var e = this.process(b);this.plugin.list.replaceOptions(e);
    }, b.AjaxBootstrapSelectRequest = b.AjaxBootstrapSelectRequest || e, a.fn.ajaxSelectPicker = function (c) {
        return this.each(function () {
            a(this).data("AjaxBootstrapSelect") || a(this).data("AjaxBootstrapSelect", new b.AjaxBootstrapSelect(this, c));
        });
    }, a.fn.ajaxSelectPicker.locale = {}, a.fn.ajaxSelectPicker.defaults = { ajax: { url: null, type: "POST", dataType: "json", data: { q: "{{{q}}}" } }, minLength: 0, bindEvent: "keyup", cache: !0, clearOnEmpty: !0, clearOnError: !0, emptyRequest: !1, ignoredKeys: { 9: "tab", 16: "shift", 17: "ctrl", 18: "alt", 27: "esc", 37: "left", 39: "right", 38: "up", 40: "down", 91: "meta" }, langCode: null, locale: null, log: "error", preprocessData: function preprocessData() {}, preserveSelected: !0, preserveSelectedPosition: "after", processData: function processData() {}, requestDelay: 300, restoreOnError: !1, templates: { status: '<div class="status"></div>' } }, /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * English translation for the "en-US" and "en" language codes.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * Mark Carver <mark.carver@me.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
    a.fn.ajaxSelectPicker.locale["en-US"] = { currentlySelected: "Currently Selected", emptyTitle: "Select and begin typing", errorText: "Unable to retrieve results", searchPlaceholder: "Search...", statusInitialized: "Start typing a search query", statusNoResults: "No Results", statusSearching: "Searching...", statusTooShort: "Please enter more characters" }, a.fn.ajaxSelectPicker.locale.en = a.fn.ajaxSelectPicker.locale["en-US"];
}(jQuery, window);
/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
    'use strict';

    // BUTTON PUBLIC CLASS DEFINITION
    // ==============================

    var Button = function Button(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options);
        this.isLoading = false;
    };

    Button.VERSION = '3.3.7';

    Button.DEFAULTS = {
        loadingText: 'loading...'
    };

    Button.prototype.setState = function (state) {
        var d = 'disabled';
        var $el = this.$element;
        var val = $el.is('input') ? 'val' : 'html';
        var data = $el.data();

        state += 'Text';

        if (data.resetText == null) $el.data('resetText', $el[val]());

        // push to event loop to allow forms to submit
        setTimeout($.proxy(function () {
            $el[val](data[state] == null ? this.options[state] : data[state]);

            if (state == 'loadingText') {
                this.isLoading = true;
                $el.addClass(d).attr(d, d).prop(d, true);
            } else if (this.isLoading) {
                this.isLoading = false;
                $el.removeClass(d).removeAttr(d).prop(d, false);
            }
        }, this), 0);
    };

    Button.prototype.toggle = function () {
        var changed = true;
        var $parent = this.$element.closest('[data-toggle="buttons"]');

        if ($parent.length) {
            var $input = this.$element.find('input');
            if ($input.prop('type') == 'radio') {
                if ($input.prop('checked')) changed = false;
                $parent.find('.active').removeClass('active');
                this.$element.addClass('active');
            } else if ($input.prop('type') == 'checkbox') {
                if ($input.prop('checked') !== this.$element.hasClass('active')) changed = false;
                this.$element.toggleClass('active');
            }
            $input.prop('checked', this.$element.hasClass('active'));
            if (changed) $input.trigger('change');
        } else {
            this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
            this.$element.toggleClass('active');
        }
    };

    // BUTTON PLUGIN DEFINITION
    // ========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('bs.button');
            var options = (typeof option === "undefined" ? "undefined" : _typeof2(option)) == 'object' && option;

            if (!data) $this.data('bs.button', data = new Button(this, options));

            if (option == 'toggle') data.toggle();else if (option) data.setState(option);
        });
    }

    var old = $.fn.button;

    $.fn.button = Plugin;
    $.fn.button.Constructor = Button;

    // BUTTON NO CONFLICT
    // ==================

    $.fn.button.noConflict = function () {
        $.fn.button = old;
        return this;
    };

    // BUTTON DATA-API
    // ===============

    $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
        var $btn = $(e.target).closest('.btn');
        Plugin.call($btn, 'toggle');
        if (!$(e.target).is('input[type="radio"], input[type="checkbox"]')) {
            // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
            e.preventDefault();
            // The target component still receive the focus
            if ($btn.is('input,button')) $btn.trigger('focus');else $btn.find('input:visible,button:visible').first().trigger('focus');
        }
    }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
        $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
    });
}(jQuery);

var $ = jQuery;
var factory = {
    methods: {
        ajax: function ajax(url, type, data, callback, beforeSend, with_file) {

            obj = {
                url: url,
                headers: {
                    'X-CSRF-Token': jQuery('meta[name="_token"]').attr('content')
                },
                type: type,
                data: data,
                enctype: 'multipart/form-data',
                beforeSend: beforeSend,
                success: callback
            };

            if (with_file) {
                obj = {
                    url: url,
                    headers: {
                        'X-CSRF-Token': jQuery('meta[name="_token"]').attr('content')
                    },
                    type: type,
                    data: data,
                    enctype: 'multipart/form-data',
                    async: false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    beforeSend: beforeSend,
                    success: callback
                };
            }

            jQuery.ajax(obj);
        },

        loader: function loader(stat) {
            if (stat) {
                $('#body-loader').show();
            } else {
                $('#body-loader').fadeOut('slow');
            }
        }
    }
};

/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? require("jquery") : jQuery);
}(function (a) {
    var b = function () {
        if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;var b;return function () {
            if (!b || !b.requirejs) {
                b ? c = b : b = {};var a, c, d;!function (b) {
                    function e(a, b) {
                        return u.call(a, b);
                    }function f(a, b) {
                        var c,
                            d,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n = b && b.split("/"),
                            o = s.map,
                            p = o && o["*"] || {};if (a && "." === a.charAt(0)) if (b) {
                            for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1) {
                                if (m = a[k], "." === m) a.splice(k, 1), k -= 1;else if (".." === m) {
                                    if (1 === k && (".." === a[2] || ".." === a[0])) break;k > 0 && (a.splice(k - 1, 2), k -= 2);
                                }
                            }a = a.join("/");
                        } else 0 === a.indexOf("./") && (a = a.substring(2));if ((n || p) && o) {
                            for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                if (d = c.slice(0, k).join("/"), n) for (l = n.length; l > 0; l -= 1) {
                                    if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                                        f = e, h = k;break;
                                    }
                                }if (f) break;!i && p && p[d] && (i = p[d], j = k);
                            }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
                        }return a;
                    }function g(a, c) {
                        return function () {
                            var d = v.call(arguments, 0);return "string" != typeof d[0] && 1 === d.length && d.push(null), _n.apply(b, d.concat([a, c]));
                        };
                    }function h(a) {
                        return function (b) {
                            return f(b, a);
                        };
                    }function i(a) {
                        return function (b) {
                            q[a] = b;
                        };
                    }function j(a) {
                        if (e(r, a)) {
                            var c = r[a];delete r[a], t[a] = !0, m.apply(b, c);
                        }if (!e(q, a) && !e(t, a)) throw new Error("No " + a);return q[a];
                    }function k(a) {
                        var b,
                            c = a ? a.indexOf("!") : -1;return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a];
                    }function l(a) {
                        return function () {
                            return s && s.config && s.config[a] || {};
                        };
                    }var m,
                        _n,
                        o,
                        p,
                        q = {},
                        r = {},
                        s = {},
                        t = {},
                        u = Object.prototype.hasOwnProperty,
                        v = [].slice,
                        w = /\.js$/;o = function o(a, b) {
                        var c,
                            d = k(a),
                            e = d[0];return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c };
                    }, p = { require: function require(a) {
                            return g(a);
                        }, exports: function exports(a) {
                            var b = q[a];return "undefined" != typeof b ? b : q[a] = {};
                        }, module: function module(a) {
                            return { id: a, uri: "", exports: q[a], config: l(a) };
                        } }, m = function m(a, c, d, f) {
                        var h,
                            k,
                            l,
                            m,
                            n,
                            s,
                            u = [],
                            v = typeof d === "undefined" ? "undefined" : _typeof2(d);if (f = f || a, "undefined" === v || "function" === v) {
                            for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1) {
                                if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);else if ("exports" === k) u[n] = p.exports(a), s = !0;else if ("module" === k) h = u[n] = p.module(a);else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);else {
                                    if (!m.p) throw new Error(a + " missing " + k);m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k];
                                }
                            }l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l));
                        } else a && (q[a] = d);
                    }, a = c = _n = function n(a, c, d, e, f) {
                        if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);if (!a.splice) {
                            if (s = a, s.deps && _n(s.deps, s.callback), !c) return;c.splice ? (a = c, c = d, d = null) : a = b;
                        }return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () {
                            m(b, a, c, d);
                        }, 4), _n;
                    }, _n.config = function (a) {
                        return _n(a);
                    }, a._defined = q, d = function d(a, b, c) {
                        if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c]);
                    }, d.amd = { jQuery: !0 };
                }(), b.requirejs = a, b.require = c, b.define = d;
            }
        }(), b.define("almond", function () {}), b.define("jquery", [], function () {
            var b = a || $;return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b;
        }), b.define("select2/utils", ["jquery"], function (a) {
            function b(a) {
                var b = a.prototype,
                    c = [];for (var d in b) {
                    var e = b[d];"function" == typeof e && "constructor" !== d && c.push(d);
                }return c;
            }var c = {};c.Extend = function (a, b) {
                function c() {
                    this.constructor = a;
                }var d = {}.hasOwnProperty;for (var e in b) {
                    d.call(b, e) && (a[e] = b[e]);
                }return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
            }, c.Decorate = function (a, c) {
                function d() {
                    var b = Array.prototype.unshift,
                        d = c.prototype.constructor.length,
                        e = a.prototype.constructor;d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments);
                }function e() {
                    this.constructor = d;
                }var f = b(c),
                    g = b(a);c.displayName = a.displayName, d.prototype = new e();for (var h = 0; h < g.length; h++) {
                    var i = g[h];d.prototype[i] = a.prototype[i];
                }for (var j = function j(a) {
                    var b = function b() {};(a in d.prototype) && (b = d.prototype[a]);var e = c.prototype[a];return function () {
                        var a = Array.prototype.unshift;return a.call(arguments, b), e.apply(this, arguments);
                    };
                }, k = 0; k < f.length; k++) {
                    var l = f[k];d.prototype[l] = j(l);
                }return d;
            };var d = function d() {
                this.listeners = {};
            };return d.prototype.on = function (a, b) {
                this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b];
            }, d.prototype.trigger = function (a) {
                var b = Array.prototype.slice,
                    c = b.call(arguments, 1);this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
            }, d.prototype.invoke = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    a[c].apply(this, b);
                }
            }, c.Observable = d, c.generateChars = function (a) {
                for (var b = "", c = 0; a > c; c++) {
                    var d = Math.floor(36 * Math.random());b += d.toString(36);
                }return b;
            }, c.bind = function (a, b) {
                return function () {
                    a.apply(b, arguments);
                };
            }, c._convertData = function (a) {
                for (var b in a) {
                    var c = b.split("-"),
                        d = a;if (1 !== c.length) {
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e];f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f];
                        }delete a[b];
                    }
                }return a;
            }, c.hasScroll = function (b, c) {
                var d = a(c),
                    e = c.style.overflowX,
                    f = c.style.overflowY;return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1;
            }, c.escapeMarkup = function (a) {
                var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
                    return b[a];
                });
            }, c.appendMany = function (b, c) {
                if ("1.7" === a.fn.jquery.substr(0, 3)) {
                    var d = a();a.map(c, function (a) {
                        d = d.add(a);
                    }), c = d;
                }b.append(c);
            }, c;
        }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
            function c(a, b, d) {
                this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
            }return b.Extend(c, b.Observable), c.prototype.render = function () {
                var b = a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b;
            }, c.prototype.clear = function () {
                this.$results.empty();
            }, c.prototype.displayMessage = function (b) {
                var c = this.options.get("escapeMarkup");this.clear(), this.hideLoading();var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                    e = this.options.get("translations").get(b.message);d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d);
            }, c.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove();
            }, c.prototype.append = function (a) {
                this.hideLoading();var b = [];if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }));a.results = this.sort(a.results);for (var c = 0; c < a.results.length; c++) {
                    var d = a.results[c],
                        e = this.option(d);b.push(e);
                }this.$results.append(b);
            }, c.prototype.position = function (a, b) {
                var c = b.find(".select2-results");c.append(a);
            }, c.prototype.sort = function (a) {
                var b = this.options.get("sorter");return b(a);
            }, c.prototype.highlightFirstItem = function () {
                var a = this.$results.find(".select2-results__option[aria-selected]"),
                    b = a.filter("[aria-selected=true]");b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible();
            }, c.prototype.setClasses = function () {
                var b = this;this.data.current(function (c) {
                    var d = a.map(c, function (a) {
                        return a.id.toString();
                    }),
                        e = b.$results.find(".select2-results__option[aria-selected]");e.each(function () {
                        var b = a(this),
                            c = a.data(this, "data"),
                            e = "" + c.id;null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false");
                    });
                });
            }, c.prototype.showLoading = function (a) {
                this.hideLoading();var b = this.options.get("translations").get("searching"),
                    c = { disabled: !0, loading: !0, text: b(a) },
                    d = this.option(c);d.className += " loading-results", this.$results.prepend(d);
            }, c.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove();
            }, c.prototype.option = function (b) {
                var c = document.createElement("li");c.className = "select2-results__option";var d = { role: "treeitem", "aria-selected": "false" };b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);for (var e in d) {
                    var f = d[e];c.setAttribute(e, f);
                }if (b.children) {
                    var g = a(c),
                        h = document.createElement("strong");h.className = "select2-results__group";a(h);this.template(b, h);for (var i = [], j = 0; j < b.children.length; j++) {
                        var k = b.children[j],
                            l = this.option(k);i.push(l);
                    }var m = a("<ul></ul>", { "class": "select2-results__options select2-results__options--nested" });m.append(i), g.append(h), g.append(m);
                } else this.template(b, c);return a.data(c, "data", b), c;
            }, c.prototype.bind = function (b, c) {
                var d = this,
                    e = b.id + "-results";this.$results.attr("id", e), b.on("results:all", function (a) {
                    d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }), b.on("results:append", function (a) {
                    d.append(a.data), b.isOpen() && d.setClasses();
                }), b.on("query", function (a) {
                    d.hideMessages(), d.showLoading(a);
                }), b.on("select", function () {
                    b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }), b.on("unselect", function () {
                    b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }), b.on("open", function () {
                    d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible();
                }), b.on("close", function () {
                    d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant");
                }), b.on("results:toggle", function () {
                    var a = d.getHighlightedResults();0 !== a.length && a.trigger("mouseup");
                }), b.on("results:select", function () {
                    var a = d.getHighlightedResults();if (0 !== a.length) {
                        var b = a.data("data");"true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", { data: b });
                    }
                }), b.on("results:previous", function () {
                    var a = d.getHighlightedResults(),
                        b = d.$results.find("[aria-selected]"),
                        c = b.index(a);if (0 !== c) {
                        var e = c - 1;0 === a.length && (e = 0);var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top,
                            h = f.offset().top,
                            i = d.$results.scrollTop() + (h - g);0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i);
                    }
                }), b.on("results:next", function () {
                    var a = d.getHighlightedResults(),
                        b = d.$results.find("[aria-selected]"),
                        c = b.index(a),
                        e = c + 1;if (!(e >= b.length)) {
                        var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top + d.$results.outerHeight(!1),
                            h = f.offset().top + f.outerHeight(!1),
                            i = d.$results.scrollTop() + h - g;0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i);
                    }
                }), b.on("results:focus", function (a) {
                    a.element.addClass("select2-results__option--highlighted");
                }), b.on("results:message", function (a) {
                    d.displayMessage(a);
                }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
                    var b = d.$results.scrollTop(),
                        c = d.$results.get(0).scrollHeight - b + a.deltaY,
                        e = a.deltaY > 0 && b - a.deltaY <= 0,
                        f = a.deltaY < 0 && c <= d.$results.height();e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation());
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
                    var c = a(this),
                        e = c.data("data");return "true" === c.attr("aria-selected") ? void (d.options.get("multiple") ? d.trigger("unselect", { originalEvent: b, data: e }) : d.trigger("close", {})) : void d.trigger("select", { originalEvent: b, data: e });
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) {
                    var c = a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", { data: c, element: a(this) });
                });
            }, c.prototype.getHighlightedResults = function () {
                var a = this.$results.find(".select2-results__option--highlighted");return a;
            }, c.prototype.destroy = function () {
                this.$results.remove();
            }, c.prototype.ensureHighlightVisible = function () {
                var a = this.getHighlightedResults();if (0 !== a.length) {
                    var b = this.$results.find("[aria-selected]"),
                        c = b.index(a),
                        d = this.$results.offset().top,
                        e = a.offset().top,
                        f = this.$results.scrollTop() + (e - d),
                        g = e - d;f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f);
                }
            }, c.prototype.template = function (b, c) {
                var d = this.options.get("templateResult"),
                    e = this.options.get("escapeMarkup"),
                    f = d(b, c);null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
            }, c;
        }), b.define("select2/keys", [], function () {
            var a = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };return a;
        }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this);
            }return b.Extend(d, b.Observable), d.prototype.render = function () {
                var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b;
            }, d.prototype.bind = function (a, b) {
                var d = this,
                    e = (a.id + "-container", a.id + "-results");this.container = a, this.$selection.on("focus", function (a) {
                    d.trigger("focus", a);
                }), this.$selection.on("blur", function (a) {
                    d._handleBlur(a);
                }), this.$selection.on("keydown", function (a) {
                    d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
                }), a.on("results:focus", function (a) {
                    d.$selection.attr("aria-activedescendant", a.data._resultId);
                }), a.on("selection:update", function (a) {
                    d.update(a.data);
                }), a.on("open", function () {
                    d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a);
                }), a.on("close", function () {
                    d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a);
                }), a.on("enable", function () {
                    d.$selection.attr("tabindex", d._tabindex);
                }), a.on("disable", function () {
                    d.$selection.attr("tabindex", "-1");
                });
            }, d.prototype._handleBlur = function (b) {
                var c = this;window.setTimeout(function () {
                    document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b);
                }, 1);
            }, d.prototype._attachCloseHandler = function (b) {
                a(document.body).on("mousedown.select2." + b.id, function (b) {
                    var c = a(b.target),
                        d = c.closest(".select2"),
                        e = a(".select2.select2-container--open");e.each(function () {
                        var b = a(this);if (this != d[0]) {
                            var c = b.data("element");c.select2("close");
                        }
                    });
                });
            }, d.prototype._detachCloseHandler = function (b) {
                a(document.body).off("mousedown.select2." + b.id);
            }, d.prototype.position = function (a, b) {
                var c = b.find(".selection");c.append(a);
            }, d.prototype.destroy = function () {
                this._detachCloseHandler(this.container);
            }, d.prototype.update = function (a) {
                throw new Error("The `update` method must be defined in child classes.");
            }, d;
        }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
            function e() {
                e.__super__.constructor.apply(this, arguments);
            }return c.Extend(e, b), e.prototype.render = function () {
                var a = e.__super__.render.call(this);return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a;
            }, e.prototype.bind = function (a, b) {
                var c = this;e.__super__.bind.apply(this, arguments);var d = a.id + "-container";this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
                    1 === a.which && c.trigger("toggle", { originalEvent: a });
                }), this.$selection.on("focus", function (a) {}), this.$selection.on("blur", function (a) {}), a.on("focus", function (b) {
                    a.isOpen() || c.$selection.focus();
                }), a.on("selection:update", function (a) {
                    c.update(a.data);
                });
            }, e.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty();
            }, e.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"),
                    d = this.options.get("escapeMarkup");return d(c(a, b));
            }, e.prototype.selectionContainer = function () {
                return a("<span></span>");
            }, e.prototype.update = function (a) {
                if (0 === a.length) return void this.clear();var b = a[0],
                    c = this.$selection.find(".select2-selection__rendered"),
                    d = this.display(b, c);c.empty().append(d), c.prop("title", b.title || b.text);
            }, e;
        }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
            function d(a, b) {
                d.__super__.constructor.apply(this, arguments);
            }return c.Extend(d, b), d.prototype.render = function () {
                var a = d.__super__.render.call(this);return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a;
            }, d.prototype.bind = function (b, c) {
                var e = this;d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
                    e.trigger("toggle", { originalEvent: a });
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
                    if (!e.options.get("disabled")) {
                        var c = a(this),
                            d = c.parent(),
                            f = d.data("data");e.trigger("unselect", { originalEvent: b, data: f });
                    }
                });
            }, d.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty();
            }, d.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"),
                    d = this.options.get("escapeMarkup");return d(c(a, b));
            }, d.prototype.selectionContainer = function () {
                var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b;
            }, d.prototype.update = function (a) {
                if (this.clear(), 0 !== a.length) {
                    for (var b = [], d = 0; d < a.length; d++) {
                        var e = a[d],
                            f = this.selectionContainer(),
                            g = this.display(e, f);f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f);
                    }var h = this.$selection.find(".select2-selection__rendered");c.appendMany(h, b);
                }
            }, d;
        }), b.define("select2/selection/placeholder", ["../utils"], function (a) {
            function b(a, b, c) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
            }return b.prototype.normalizePlaceholder = function (a, b) {
                return "string" == typeof b && (b = { id: "", text: b }), b;
            }, b.prototype.createPlaceholder = function (a, b) {
                var c = this.selectionContainer();return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c;
            }, b.prototype.update = function (a, b) {
                var c = 1 == b.length && b[0].id != this.placeholder.id,
                    d = b.length > 1;if (d || c) return a.call(this, b);this.clear();var e = this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e);
            }, b;
        }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
            function c() {}return c.prototype.bind = function (a, b, c) {
                var d = this;a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
                    d._handleClear(a);
                }), b.on("keypress", function (a) {
                    d._handleKeyboardClear(a, b);
                });
            }, c.prototype._handleClear = function (a, b) {
                if (!this.options.get("disabled")) {
                    var c = this.$selection.find(".select2-selection__clear");if (0 !== c.length) {
                        b.stopPropagation();for (var d = c.data("data"), e = 0; e < d.length; e++) {
                            var f = { data: d[e] };if (this.trigger("unselect", f), f.prevented) return;
                        }this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {});
                    }
                }
            }, c.prototype._handleKeyboardClear = function (a, c, d) {
                d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c);
            }, c.prototype.update = function (b, c) {
                if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                    var d = a('<span class="select2-selection__clear">&times;</span>');d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d);
                }
            }, c;
        }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
            function d(a, b, c) {
                a.call(this, b, c);
            }return d.prototype.render = function (b) {
                var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer = c, this.$search = c.find("input");var d = b.call(this);return this._transferTabIndex(), d;
            }, d.prototype.bind = function (a, b, d) {
                var e = this;a.call(this, b, d), b.on("open", function () {
                    e.$search.trigger("focus");
                }), b.on("close", function () {
                    e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus");
                }), b.on("enable", function () {
                    e.$search.prop("disabled", !1), e._transferTabIndex();
                }), b.on("disable", function () {
                    e.$search.prop("disabled", !0);
                }), b.on("focus", function (a) {
                    e.$search.trigger("focus");
                }), b.on("results:focus", function (a) {
                    e.$search.attr("aria-activedescendant", a.id);
                }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
                    e.trigger("focus", a);
                }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
                    e._handleBlur(a);
                }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
                    a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();var b = a.which;if (b === c.BACKSPACE && "" === e.$search.val()) {
                        var d = e.$searchContainer.prev(".select2-selection__choice");if (d.length > 0) {
                            var f = d.data("data");e.searchRemoveChoice(f), a.preventDefault();
                        }
                    }
                });var f = document.documentMode,
                    g = f && 11 >= f;this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
                    return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search");
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
                    if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");var b = a.which;b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a);
                });
            }, d.prototype._transferTabIndex = function (a) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
            }, d.prototype.createPlaceholder = function (a, b) {
                this.$search.attr("placeholder", b.text);
            }, d.prototype.update = function (a, b) {
                var c = this.$search[0] == document.activeElement;this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus();
            }, d.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var a = this.$search.val();this.trigger("query", { term: a });
                }this._keyUpPrevented = !1;
            }, d.prototype.searchRemoveChoice = function (a, b) {
                this.trigger("unselect", { data: b }), this.$search.val(b.text), this.handleSearch();
            }, d.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");var a = "";if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();else {
                    var b = this.$search.val().length + 1;a = .75 * b + "em";
                }this.$search.css("width", a);
            }, d;
        }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
            function b() {}return b.prototype.bind = function (b, c, d) {
                var e = this,
                    f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                    g = ["opening", "closing", "selecting", "unselecting"];b.call(this, c, d), c.on("*", function (b, c) {
                    if (-1 !== a.inArray(b, f)) {
                        c = c || {};var d = a.Event("select2:" + b, { params: c });e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
                    }
                });
            }, b;
        }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
            function c(a) {
                this.dict = a || {};
            }return c.prototype.all = function () {
                return this.dict;
            }, c.prototype.get = function (a) {
                return this.dict[a];
            }, c.prototype.extend = function (b) {
                this.dict = a.extend({}, b.all(), this.dict);
            }, c._cache = {}, c.loadPath = function (a) {
                if (!(a in c._cache)) {
                    var d = b(a);c._cache[a] = d;
                }return new c(c._cache[a]);
            }, c;
        }), b.define("select2/diacritics", [], function () {
            var a = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" };return a;
        }), b.define("select2/data/base", ["../utils"], function (a) {
            function b(a, c) {
                b.__super__.constructor.call(this);
            }return a.Extend(b, a.Observable), b.prototype.current = function (a) {
                throw new Error("The `current` method must be defined in child classes.");
            }, b.prototype.query = function (a, b) {
                throw new Error("The `query` method must be defined in child classes.");
            }, b.prototype.bind = function (a, b) {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
                var d = b.id + "-result-";return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4);
            }, b;
        }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this);
            }return b.Extend(d, a), d.prototype.current = function (a) {
                var b = [],
                    d = this;this.$element.find(":selected").each(function () {
                    var a = c(this),
                        e = d.item(a);b.push(e);
                }), a(b);
            }, d.prototype.select = function (a) {
                var b = this;if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function (d) {
                    var e = [];a = [a], a.push.apply(a, d);for (var f = 0; f < a.length; f++) {
                        var g = a[f].id;-1 === c.inArray(g, e) && e.push(g);
                    }b.$element.val(e), b.$element.trigger("change");
                });else {
                    var d = a.id;this.$element.val(d), this.$element.trigger("change");
                }
            }, d.prototype.unselect = function (a) {
                var b = this;if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) {
                    for (var e = [], f = 0; f < d.length; f++) {
                        var g = d[f].id;g !== a.id && -1 === c.inArray(g, e) && e.push(g);
                    }b.$element.val(e), b.$element.trigger("change");
                });
            }, d.prototype.bind = function (a, b) {
                var c = this;this.container = a, a.on("select", function (a) {
                    c.select(a.data);
                }), a.on("unselect", function (a) {
                    c.unselect(a.data);
                });
            }, d.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    c.removeData(this, "data");
                });
            }, d.prototype.query = function (a, b) {
                var d = [],
                    e = this,
                    f = this.$element.children();f.each(function () {
                    var b = c(this);if (b.is("option") || b.is("optgroup")) {
                        var f = e.item(b),
                            g = e.matches(a, f);null !== g && d.push(g);
                    }
                }), b({ results: d });
            }, d.prototype.addOptions = function (a) {
                b.appendMany(this.$element, a);
            }, d.prototype.option = function (a) {
                var b;a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);var d = c(b),
                    e = this._normalizeItem(a);return e.element = b, c.data(b, "data", e), d;
            }, d.prototype.item = function (a) {
                var b = {};if (b = c.data(a[0], "data"), null != b) return b;if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") };else if (a.is("optgroup")) {
                    b = { text: a.prop("label"), children: [], title: a.prop("title") };for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                        var g = c(d[f]),
                            h = this.item(g);e.push(h);
                    }b.children = e;
                }return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b;
            }, d.prototype._normalizeItem = function (a) {
                c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a);var b = { selected: !1, disabled: !1 };return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a);
            }, d.prototype.matches = function (a, b) {
                var c = this.options.get("matcher");return c(a, b);
            }, d;
        }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                var c = b.get("data") || [];d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
            }return b.Extend(d, a), d.prototype.select = function (a) {
                var b = this.$element.find("option").filter(function (b, c) {
                    return c.value == a.id.toString();
                });0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
            }, d.prototype.convertToOptions = function (a) {
                function d(a) {
                    return function () {
                        return c(this).val() == a.id;
                    };
                }for (var e = this, f = this.$element.find("option"), g = f.map(function () {
                    return e.item(c(this)).id;
                }).get(), h = [], i = 0; i < a.length; i++) {
                    var j = this._normalizeItem(a[i]);if (c.inArray(j.id, g) >= 0) {
                        var k = f.filter(d(j)),
                            l = this.item(k),
                            m = c.extend(!0, {}, j, l),
                            n = this.option(m);k.replaceWith(n);
                    } else {
                        var o = this.option(j);if (j.children) {
                            var p = this.convertToOptions(j.children);b.appendMany(o, p);
                        }h.push(o);
                    }
                }return h;
            }, d;
        }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b);
            }return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
                var b = { data: function data(a) {
                        return c.extend({}, a, { q: a.term });
                    }, transport: function transport(a, b, d) {
                        var e = c.ajax(a);return e.then(b), e.fail(d), e;
                    } };return c.extend({}, b, a, !0);
            }, d.prototype.processResults = function (a) {
                return a;
            }, d.prototype.query = function (a, b) {
                function d() {
                    var d = f.transport(f, function (d) {
                        var f = e.processResults(d, a);e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f);
                    }, function () {
                        d.status && "0" === d.status || e.trigger("results:message", { message: "errorLoading" });
                    });e._request = d;
                }var e = this;null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);var f = c.extend({ type: "GET" }, this.ajaxOptions);"function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
            }, d;
        }), b.define("select2/data/tags", ["jquery"], function (a) {
            function b(b, c, d) {
                var e = d.get("tags"),
                    f = d.get("createTag");void 0 !== f && (this.createTag = f);var g = d.get("insertTag");if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) {
                    var i = e[h],
                        j = this._normalizeItem(i),
                        k = this.option(j);this.$element.append(k);
                }
            }return b.prototype.query = function (a, b, c) {
                function d(a, f) {
                    for (var g = a.results, h = 0; h < g.length; h++) {
                        var i = g[h],
                            j = null != i.children && !d({ results: i.children }, !0),
                            k = i.text === b.term;if (k || j) return f ? !1 : (a.data = g, void c(a));
                    }if (f) return !0;var l = e.createTag(b);if (null != l) {
                        var m = e.option(l);m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l);
                    }a.results = g, c(a);
                }var e = this;return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d);
            }, b.prototype.createTag = function (b, c) {
                var d = a.trim(c.term);return "" === d ? null : { id: d, text: d };
            }, b.prototype.insertTag = function (a, b, c) {
                b.unshift(c);
            }, b.prototype._removeOldTags = function (b) {
                var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));c.each(function () {
                    this.selected || a(this).remove();
                });
            }, b;
        }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
            function b(a, b, c) {
                var d = c.get("tokenizer");void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
            }return b.prototype.bind = function (a, b, c) {
                a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
            }, b.prototype.query = function (b, c, d) {
                function e(b) {
                    var c = g._normalizeItem(b),
                        d = g.$element.find("option").filter(function () {
                        return a(this).val() === c.id;
                    });if (!d.length) {
                        var e = g.option(c);e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e]);
                    }f(c);
                }function f(a) {
                    g.trigger("select", { data: a });
                }var g = this;c.term = c.term || "";var h = this.tokenizer(c, this.options, e);h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d);
            }, b.prototype.tokenizer = function (b, c, d, e) {
                for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
                    return { id: a.term, text: a.term };
                }; h < g.length;) {
                    var j = g[h];if (-1 !== a.inArray(j, f)) {
                        var k = g.substr(0, h),
                            l = a.extend({}, c, { term: k }),
                            m = i(l);null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
                    } else h++;
                }return { term: g };
            }, b;
        }), b.define("select2/data/minimumInputLength", [], function () {
            function a(a, b, c) {
                this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
            }return a.prototype.query = function (a, b, c) {
                return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } }) : void a.call(this, b, c);
            }, a;
        }), b.define("select2/data/maximumInputLength", [], function () {
            function a(a, b, c) {
                this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
            }return a.prototype.query = function (a, b, c) {
                return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } }) : void a.call(this, b, c);
            }, a;
        }), b.define("select2/data/maximumSelectionLength", [], function () {
            function a(a, b, c) {
                this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
            }return a.prototype.query = function (a, b, c) {
                var d = this;this.current(function (e) {
                    var f = null != e ? e.length : 0;return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } }) : void a.call(d, b, c);
                });
            }, a;
        }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
            function c(a, b) {
                this.$element = a, this.options = b, c.__super__.constructor.call(this);
            }return b.Extend(c, b.Observable), c.prototype.render = function () {
                var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
            }, c.prototype.bind = function () {}, c.prototype.position = function (a, b) {}, c.prototype.destroy = function () {
                this.$dropdown.remove();
            }, c;
        }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
            function c() {}return c.prototype.render = function (b) {
                var c = b.call(this),
                    d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c;
            }, c.prototype.bind = function (b, c, d) {
                var e = this;b.call(this, c, d), this.$search.on("keydown", function (a) {
                    e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                }), this.$search.on("input", function (b) {
                    a(this).off("keyup");
                }), this.$search.on("keyup input", function (a) {
                    e.handleSearch(a);
                }), c.on("open", function () {
                    e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
                        e.$search.focus();
                    }, 0);
                }), c.on("close", function () {
                    e.$search.attr("tabindex", -1), e.$search.val("");
                }), c.on("focus", function () {
                    c.isOpen() && e.$search.focus();
                }), c.on("results:all", function (a) {
                    if (null == a.query.term || "" === a.query.term) {
                        var b = e.showSearch(a);b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
                    }
                });
            }, c.prototype.handleSearch = function (a) {
                if (!this._keyUpPrevented) {
                    var b = this.$search.val();this.trigger("query", { term: b });
                }this._keyUpPrevented = !1;
            }, c.prototype.showSearch = function (a, b) {
                return !0;
            }, c;
        }), b.define("select2/dropdown/hidePlaceholder", [], function () {
            function a(a, b, c, d) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
            }return a.prototype.append = function (a, b) {
                b.results = this.removePlaceholder(b.results), a.call(this, b);
            }, a.prototype.normalizePlaceholder = function (a, b) {
                return "string" == typeof b && (b = { id: "", text: b }), b;
            }, a.prototype.removePlaceholder = function (a, b) {
                for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                    var e = b[d];this.placeholder.id === e.id && c.splice(d, 1);
                }return c;
            }, a;
        }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
            function b(a, b, c, d) {
                this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
            }return b.prototype.append = function (a, b) {
                this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
            }, b.prototype.bind = function (b, c, d) {
                var e = this;b.call(this, c, d), c.on("query", function (a) {
                    e.lastParams = a, e.loading = !0;
                }), c.on("query:append", function (a) {
                    e.lastParams = a, e.loading = !0;
                }), this.$results.on("scroll", function () {
                    var b = a.contains(document.documentElement, e.$loadingMore[0]);if (!e.loading && b) {
                        var c = e.$results.offset().top + e.$results.outerHeight(!1),
                            d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);c + 50 >= d && e.loadMore();
                    }
                });
            }, b.prototype.loadMore = function () {
                this.loading = !0;var b = a.extend({}, { page: 1 }, this.lastParams);b.page++, this.trigger("query:append", b);
            }, b.prototype.showLoadingMore = function (a, b) {
                return b.pagination && b.pagination.more;
            }, b.prototype.createLoadingMore = function () {
                var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                    c = this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)), b;
            }, b;
        }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
            function c(b, c, d) {
                this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d);
            }return c.prototype.bind = function (a, b, c) {
                var d = this,
                    e = !1;a.call(this, b, c), b.on("open", function () {
                    d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
                        d._positionDropdown(), d._resizeDropdown();
                    }), b.on("results:append", function () {
                        d._positionDropdown(), d._resizeDropdown();
                    }));
                }), b.on("close", function () {
                    d._hideDropdown(), d._detachPositioningHandler(b);
                }), this.$dropdownContainer.on("mousedown", function (a) {
                    a.stopPropagation();
                });
            }, c.prototype.destroy = function (a) {
                a.call(this), this.$dropdownContainer.remove();
            }, c.prototype.position = function (a, b, c) {
                b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c;
            }, c.prototype.render = function (b) {
                var c = a("<span></span>"),
                    d = b.call(this);return c.append(d), this.$dropdownContainer = c, c;
            }, c.prototype._hideDropdown = function (a) {
                this.$dropdownContainer.detach();
            }, c.prototype._attachPositioningHandler = function (c, d) {
                var e = this,
                    f = "scroll.select2." + d.id,
                    g = "resize.select2." + d.id,
                    h = "orientationchange.select2." + d.id,
                    i = this.$container.parents().filter(b.hasScroll);i.each(function () {
                    a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() });
                }), i.on(f, function (b) {
                    var c = a(this).data("select2-scroll-position");a(this).scrollTop(c.y);
                }), a(window).on(f + " " + g + " " + h, function (a) {
                    e._positionDropdown(), e._resizeDropdown();
                });
            }, c.prototype._detachPositioningHandler = function (c, d) {
                var e = "scroll.select2." + d.id,
                    f = "resize.select2." + d.id,
                    g = "orientationchange.select2." + d.id,
                    h = this.$container.parents().filter(b.hasScroll);h.off(e), a(window).off(e + " " + f + " " + g);
            }, c.prototype._positionDropdown = function () {
                var b = a(window),
                    c = this.$dropdown.hasClass("select2-dropdown--above"),
                    d = this.$dropdown.hasClass("select2-dropdown--below"),
                    e = null,
                    f = this.$container.offset();f.bottom = f.top + this.$container.outerHeight(!1);var g = { height: this.$container.outerHeight(!1) };g.top = f.top, g.bottom = f.top + g.height;var h = { height: this.$dropdown.outerHeight(!1) },
                    i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() },
                    j = i.top < f.top - h.height,
                    k = i.bottom > f.bottom + h.height,
                    l = { left: f.left, top: g.bottom },
                    m = this.$dropdownParent;"static" === m.css("position") && (m = m.offsetParent());var n = m.offset();l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l);
            }, c.prototype._resizeDropdown = function () {
                var a = { width: this.$container.outerWidth(!1) + "px" };this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a);
            }, c.prototype._showDropdown = function (a) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
            }, c;
        }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function a(b) {
                for (var c = 0, d = 0; d < b.length; d++) {
                    var e = b[d];e.children ? c += a(e.children) : c++;
                }return c;
            }function b(a, b, c, d) {
                this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d);
            }return b.prototype.showSearch = function (b, c) {
                return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c);
            }, b;
        }), b.define("select2/dropdown/selectOnClose", [], function () {
            function a() {}return a.prototype.bind = function (a, b, c) {
                var d = this;a.call(this, b, c), b.on("close", function (a) {
                    d._handleSelectOnClose(a);
                });
            }, a.prototype._handleSelectOnClose = function (a, b) {
                if (b && null != b.originalSelect2Event) {
                    var c = b.originalSelect2Event;if ("select" === c._type || "unselect" === c._type) return;
                }var d = this.getHighlightedResults();if (!(d.length < 1)) {
                    var e = d.data("data");null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", { data: e });
                }
            }, a;
        }), b.define("select2/dropdown/closeOnSelect", [], function () {
            function a() {}return a.prototype.bind = function (a, b, c) {
                var d = this;a.call(this, b, c), b.on("select", function (a) {
                    d._selectTriggered(a);
                }), b.on("unselect", function (a) {
                    d._selectTriggered(a);
                });
            }, a.prototype._selectTriggered = function (a, b) {
                var c = b.originalEvent;c && c.ctrlKey || this.trigger("close", { originalEvent: c, originalSelect2Event: b });
            }, a;
        }), b.define("select2/i18n/en", [], function () {
            return { errorLoading: function errorLoading() {
                    return "The results could not be loaded.";
                }, inputTooLong: function inputTooLong(a) {
                    var b = a.input.length - a.maximum,
                        c = "Please delete " + b + " character";return 1 != b && (c += "s"), c;
                }, inputTooShort: function inputTooShort(a) {
                    var b = a.minimum - a.input.length,
                        c = "Please enter " + b + " or more characters";return c;
                }, loadingMore: function loadingMore() {
                    return "Loading more results…";
                }, maximumSelected: function maximumSelected(a) {
                    var b = "You can only select " + a.maximum + " item";return 1 != a.maximum && (b += "s"), b;
                }, noResults: function noResults() {
                    return "No results found";
                }, searching: function searching() {
                    return "Searching…";
                } };
        }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
            function D() {
                this.reset();
            }D.prototype.apply = function (l) {
                if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                    if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                        var C = b(l.amdBase + "compat/query");l.dataAdapter = j.Decorate(l.dataAdapter, C);
                    }if (null != l.initSelection) {
                        var D = b(l.amdBase + "compat/initSelection");l.dataAdapter = j.Decorate(l.dataAdapter, D);
                    }
                }if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                    if (l.multiple) l.dropdownAdapter = u;else {
                        var E = j.Decorate(u, v);l.dropdownAdapter = E;
                    }if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                        var F = b(l.amdBase + "compat/dropdownCss");l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
                    }l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
                }if (null == l.selectionAdapter) {
                    if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                        var G = b(l.amdBase + "compat/containerCss");l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
                    }l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
                }if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
                    var H = l.language.split("-"),
                        I = H[0];l.language = [l.language, I];
                } else l.language = [l.language];if (a.isArray(l.language)) {
                    var J = new k();l.language.push("en");for (var K = l.language, L = 0; L < K.length; L++) {
                        var M = K[L],
                            N = {};try {
                            N = k.loadPath(M);
                        } catch (O) {
                            try {
                                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
                            } catch (P) {
                                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');continue;
                            }
                        }J.extend(N);
                    }l.translations = J;
                } else {
                    var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
                        R = new k(l.language);R.extend(Q), l.translations = R;
                }return l;
            }, D.prototype.reset = function () {
                function b(a) {
                    function b(a) {
                        return l[a] || a;
                    }return a.replace(/[^\u0000-\u007E]/g, b);
                }function c(d, e) {
                    if ("" === a.trim(d.term)) return e;if (e.children && e.children.length > 0) {
                        for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                            var h = e.children[g],
                                i = c(d, h);null == i && f.children.splice(g, 1);
                        }return f.children.length > 0 ? f : c(d, f);
                    }var j = b(e.text).toUpperCase(),
                        k = b(d.term).toUpperCase();return j.indexOf(k) > -1 ? e : null;
                }this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function sorter(a) {
                        return a;
                    }, templateResult: function templateResult(a) {
                        return a.text;
                    }, templateSelection: function templateSelection(a) {
                        return a.text;
                    }, theme: "default", width: "resolve" };
            }, D.prototype.set = function (b, c) {
                var d = a.camelCase(b),
                    e = {};e[d] = c;var f = j._convertData(e);a.extend(this.defaults, f);
            };var E = new D();return E;
        }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
            function e(b, e) {
                if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                    var f = a(this.get("amdBase") + "compat/inputData");this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
                }
            }return e.prototype.fromElement = function (a) {
                var c = ["select2"];null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));var e = {};e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();var f = b.extend(!0, {}, e);f = d._convertData(f);for (var g in f) {
                    b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                }return this;
            }, e.prototype.get = function (a) {
                return this.options[a];
            }, e.prototype.set = function (a, b) {
                this.options[a] = b;
            }, e;
        }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
            var e = function e(a, c) {
                null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);var d = a.attr("tabindex") || 0;a.data("old-tabindex", d), a.attr("tabindex", "-1");var f = this.options.get("dataAdapter");this.dataAdapter = new f(a, this.options);var g = this.render();this._placeContainer(g);var h = this.options.get("selectionAdapter");this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);var i = this.options.get("dropdownAdapter");this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);var j = this.options.get("resultsAdapter");this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);var k = this;this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
                    k.trigger("selection:update", { data: a });
                }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this);
            };return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
                var b = "";return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b;
            }, e.prototype._placeContainer = function (a) {
                a.insertAfter(this.$element);var b = this._resolveWidth(this.$element, this.options.get("width"));null != b && a.css("width", b);
            }, e.prototype._resolveWidth = function (a, b) {
                var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if ("resolve" == b) {
                    var d = this._resolveWidth(a, "style");return null != d ? d : this._resolveWidth(a, "element");
                }if ("element" == b) {
                    var e = a.outerWidth(!1);return 0 >= e ? "auto" : e + "px";
                }if ("style" == b) {
                    var f = a.attr("style");if ("string" != typeof f) return null;for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                        var j = g[h].replace(/\s/g, ""),
                            k = j.match(c);if (null !== k && k.length >= 1) return k[1];
                    }return null;
                }return b;
            }, e.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
            }, e.prototype._registerDomEvents = function () {
                var b = this;this.$element.on("change.select2", function () {
                    b.dataAdapter.current(function (a) {
                        b.trigger("selection:update", { data: a });
                    });
                }), this.$element.on("focus.select2", function (a) {
                    b.trigger("focus", a);
                }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;null != d ? (this._observer = new d(function (c) {
                    a.each(c, b._syncA), a.each(c, b._syncS);
                }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1));
            }, e.prototype._registerDataEvents = function () {
                var a = this;this.dataAdapter.on("*", function (b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerSelectionEvents = function () {
                var b = this,
                    c = ["toggle", "focus"];this.selection.on("toggle", function () {
                    b.toggleDropdown();
                }), this.selection.on("focus", function (a) {
                    b.focus(a);
                }), this.selection.on("*", function (d, e) {
                    -1 === a.inArray(d, c) && b.trigger(d, e);
                });
            }, e.prototype._registerDropdownEvents = function () {
                var a = this;this.dropdown.on("*", function (b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerResultsEvents = function () {
                var a = this;this.results.on("*", function (b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerEvents = function () {
                var a = this;this.on("open", function () {
                    a.$container.addClass("select2-container--open");
                }), this.on("close", function () {
                    a.$container.removeClass("select2-container--open");
                }), this.on("enable", function () {
                    a.$container.removeClass("select2-container--disabled");
                }), this.on("disable", function () {
                    a.$container.addClass("select2-container--disabled");
                }), this.on("blur", function () {
                    a.$container.removeClass("select2-container--focus");
                }), this.on("query", function (b) {
                    a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
                        a.trigger("results:all", { data: c, query: b });
                    });
                }), this.on("query:append", function (b) {
                    this.dataAdapter.query(b, function (c) {
                        a.trigger("results:append", { data: c, query: b });
                    });
                }), this.on("keypress", function (b) {
                    var c = b.which;a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault());
                });
            }, e.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
            }, e.prototype._syncSubtree = function (a, b) {
                var c = !1,
                    d = this;if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                    if (b) {
                        if (b.addedNodes && b.addedNodes.length > 0) for (var e = 0; e < b.addedNodes.length; e++) {
                            var f = b.addedNodes[e];f.selected && (c = !0);
                        } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                    } else c = !0;c && this.dataAdapter.current(function (a) {
                        d.trigger("selection:update", { data: a });
                    });
                }
            }, e.prototype.trigger = function (a, b) {
                var c = e.__super__.trigger,
                    d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" };if (void 0 === b && (b = {}), a in d) {
                    var f = d[a],
                        g = { prevented: !1, name: a, args: b };if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
                }c.call(this, a, b);
            }, e.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
            }, e.prototype.open = function () {
                this.isOpen() || this.trigger("query", {});
            }, e.prototype.close = function () {
                this.isOpen() && this.trigger("close", {});
            }, e.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open");
            }, e.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus");
            }, e.prototype.focus = function (a) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
            }, e.prototype.enable = function (a) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);var b = !a[0];this.$element.prop("disabled", b);
            }, e.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a = [];return this.dataAdapter.current(function (b) {
                    a = b;
                }), a;
            }, e.prototype.val = function (b) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();var c = b[0];a.isArray(c) && (c = a.map(c, function (a) {
                    return a.toString();
                })), this.$element.val(c).trigger("change");
            }, e.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
            }, e.prototype.render = function () {
                var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b;
            }, e;
        }), b.define("select2/compat/utils", ["jquery"], function (a) {
            function b(b, c, d) {
                var e,
                    f,
                    g = [];e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
                    0 === this.indexOf("select2-") && g.push(this);
                })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
                    0 !== this.indexOf("select2-") && (f = d(this), null != f && g.push(f));
                })), b.attr("class", g.join(" "));
            }return { syncCssClasses: b };
        }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function (a, b) {
            function c(a) {
                return null;
            }function d() {}return d.prototype.render = function (d) {
                var e = d.call(this),
                    f = this.options.get("containerCssClass") || "";a.isFunction(f) && (f = f(this.$element));var g = this.options.get("adaptContainerCssClass");if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");var h = g;g = function g(a) {
                        var b = h(a);return null != b ? b + " " + a : a;
                    };
                }var i = this.options.get("containerCss") || {};return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
            }, d;
        }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (a, b) {
            function c(a) {
                return null;
            }function d() {}return d.prototype.render = function (d) {
                var e = d.call(this),
                    f = this.options.get("dropdownCssClass") || "";a.isFunction(f) && (f = f(this.$element));var g = this.options.get("adaptDropdownCssClass");if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");var h = g;g = function g(a) {
                        var b = h(a);return null != b ? b + " " + a : a;
                    };
                }var i = this.options.get("dropdownCss") || {};return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
            }, d;
        }), b.define("select2/compat/initSelection", ["jquery"], function (a) {
            function b(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c);
            }return b.prototype.current = function (b, c) {
                var d = this;return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function (b) {
                    d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b);
                });
            }, b;
        }), b.define("select2/compat/inputData", ["jquery"], function (a) {
            function b(a, b, c) {
                this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c);
            }return b.prototype.current = function (b, c) {
                function d(b, c) {
                    var e = [];return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e;
                }for (var e = [], f = 0; f < this._currentData.length; f++) {
                    var g = this._currentData[f];e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)));
                }c(e);
            }, b.prototype.select = function (b, c) {
                if (this.options.get("multiple")) {
                    var d = this.$element.val();d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change");
                } else this.current(function (b) {
                    a.map(b, function (a) {
                        a.selected = !1;
                    });
                }), this.$element.val(c.id), this.$element.trigger("change");
            }, b.prototype.unselect = function (a, b) {
                var c = this;b.selected = !1, this.current(function (a) {
                    for (var d = [], e = 0; e < a.length; e++) {
                        var f = a[e];b.id != f.id && d.push(f.id);
                    }c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change");
                });
            }, b.prototype.query = function (a, b, c) {
                for (var d = [], e = 0; e < this._currentData.length; e++) {
                    var f = this._currentData[e],
                        g = this.matches(b, f);null !== g && d.push(g);
                }c({ results: d });
            }, b.prototype.addOptions = function (b, c) {
                var d = a.map(c, function (b) {
                    return a.data(b[0], "data");
                });this._currentData.push.apply(this._currentData, d);
            }, b;
        }), b.define("select2/compat/matcher", ["jquery"], function (a) {
            function b(b) {
                function c(c, d) {
                    var e = a.extend(!0, {}, d);if (null == c.term || "" === a.trim(c.term)) return e;if (d.children) {
                        for (var f = d.children.length - 1; f >= 0; f--) {
                            var g = d.children[f],
                                h = b(c.term, g.text, g);h || e.children.splice(f, 1);
                        }if (e.children.length > 0) return e;
                    }return b(c.term, d.text, d) ? e : null;
                }return c;
            }return b;
        }), b.define("select2/compat/query", [], function () {
            function a(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c);
            }return a.prototype.query = function (a, b, c) {
                b.callback = c;var d = this.options.get("query");d.call(null, b);
            }, a;
        }), b.define("select2/dropdown/attachContainer", [], function () {
            function a(a, b, c) {
                a.call(this, b, c);
            }return a.prototype.position = function (a, b, c) {
                var d = c.find(".dropdown-wrapper");d.append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below");
            }, a;
        }), b.define("select2/dropdown/stopPropagation", [], function () {
            function a() {}return a.prototype.bind = function (a, b, c) {
                a.call(this, b, c);var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];this.$dropdown.on(d.join(" "), function (a) {
                    a.stopPropagation();
                });
            }, a;
        }), b.define("select2/selection/stopPropagation", [], function () {
            function a() {}return a.prototype.bind = function (a, b, c) {
                a.call(this, b, c);var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];this.$selection.on(d.join(" "), function (a) {
                    a.stopPropagation();
                });
            }, a;
        }), function (c) {
            "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? module.exports = c : c(a);
        }(function (a) {
            function b(b) {
                var g = b || window.event,
                    h = i.call(arguments, 1),
                    j = 0,
                    l = 0,
                    m = 0,
                    n = 0,
                    o = 0,
                    p = 0;if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                    if (1 === g.deltaMode) {
                        var q = a.data(this, "mousewheel-line-height");j *= q, m *= q, l *= q;
                    } else if (2 === g.deltaMode) {
                        var r = a.data(this, "mousewheel-page-height");j *= r, m *= r, l *= r;
                    }if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                        var s = this.getBoundingClientRect();o = b.clientX - s.left, p = b.clientY - s.top;
                    }return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
                }
            }function c() {
                f = null;
            }function d(a, b) {
                return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
            }var e,
                f,
                g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                i = Array.prototype.slice;if (a.event.fixHooks) for (var j = g.length; j;) {
                a.event.fixHooks[g[--j]] = a.event.mouseHooks;
            }var k = a.event.special.mousewheel = { version: "3.1.12", setup: function setup() {
                    if (this.addEventListener) for (var c = h.length; c;) {
                        this.addEventListener(h[--c], b, !1);
                    } else this.onmousewheel = b;a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
                }, teardown: function teardown() {
                    if (this.removeEventListener) for (var c = h.length; c;) {
                        this.removeEventListener(h[--c], b, !1);
                    } else this.onmousewheel = null;a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
                }, getLineHeight: function getLineHeight(b) {
                    var c = a(b),
                        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
                }, getPageHeight: function getPageHeight(b) {
                    return a(b).height();
                }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };a.fn.extend({ mousewheel: function mousewheel(a) {
                    return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
                }, unmousewheel: function unmousewheel(a) {
                    return this.unbind("mousewheel", a);
                } });
        }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
            if (null == a.fn.select2) {
                var e = ["open", "close", "destroy"];a.fn.select2 = function (b) {
                    if (b = b || {}, "object" == (typeof b === "undefined" ? "undefined" : _typeof2(b))) return this.each(function () {
                        var d = a.extend(!0, {}, b);new c(a(this), d);
                    }), this;if ("string" == typeof b) {
                        var d,
                            f = Array.prototype.slice.call(arguments, 1);return this.each(function () {
                            var c = a(this).data("select2");null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f);
                        }), a.inArray(b, e) > -1 ? this : d;
                    }throw new Error("Invalid arguments for Select2: " + b);
                };
            }return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
        }), { define: b.define, require: b.require };
    }(),
        c = b.require("jquery.select2");return a.fn.select2.amd = b, c;
});
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
    var registeredInModuleLoader;
    if (typeof define === 'function' && define.amd) {
        define(factory);
        registeredInModuleLoader = true;
    }
    if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object') {
        module.exports = factory();
        registeredInModuleLoader = true;
    }
    if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function () {
            window.Cookies = OldCookies;
            return api;
        };
    }
})(function () {
    function extend() {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[i];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    }

    function init(converter) {
        function api(key, value, attributes) {
            if (typeof document === 'undefined') {
                return;
            }

            // Write

            if (arguments.length > 1) {
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);

                if (typeof attributes.expires === 'number') {
                    attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
                }

                // We're using "expires" because "max-age" is not supported by IE
                attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

                try {
                    var result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                } catch (e) {}

                value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

                key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);

                var stringifiedAttributes = '';
                for (var attributeName in attributes) {
                    if (!attributes[attributeName]) {
                        continue;
                    }
                    stringifiedAttributes += '; ' + attributeName;
                    if (attributes[attributeName] === true) {
                        continue;
                    }

                    // Considers RFC 6265 section 5.2:
                    // ...
                    // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                    //     character:
                    // Consume the characters of the unparsed-attributes up to,
                    // not including, the first %x3B (";") character.
                    // ...
                    stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
                }

                return document.cookie = key + '=' + value + stringifiedAttributes;
            }

            // Read

            var jar = {};
            var decode = function decode(s) {
                return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
            };
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var i = 0;

            for (; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var cookie = parts.slice(1).join('=');

                if (!this.json && cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }

                try {
                    var name = decode(parts[0]);
                    cookie = (converter.read || converter)(cookie, name) || decode(cookie);

                    if (this.json) {
                        try {
                            cookie = JSON.parse(cookie);
                        } catch (e) {}
                    }

                    jar[name] = cookie;

                    if (key === name) {
                        break;
                    }
                } catch (e) {}
            }

            return key ? jar[key] : jar;
        }

        api.set = api;
        api.get = function (key) {
            return api.call(api, key);
        };
        api.getJSON = function () {
            return api.apply({
                json: true
            }, arguments);
        };
        api.remove = function (key, attributes) {
            api(key, '', extend(attributes, {
                expires: -1
            }));
        };

        api.defaults = {};

        api.withConverter = init;

        return api;
    }

    return init(function () {});
});

var $ = jQuery;
var Global = function () {

    var instance;

    function plugins() {

        $(document).on('click', '.btn-save-to-favorite', function (e) {
            e.preventDefault();
            var thisObj = $(this);
            var url = rootUrl + '/r/g/call/save-to-favorites';
            var type = 'post';
            var agent;
            if (!!$(this).data('agent')) {
                agent = $(this).data('agent');
            } else if ($('#contact-agent-id').data('id')) {
                agent = $('#contact-agent-id').data('id');
            } else {
                agent = null;
            }
            var data = { 'id': $(this).data('id'), 'agent': agent };
            var beforeSend = function beforeSend() {};
            var callback = function callback(response) {
                if (response.status == "success") {
                    if (response.data.user > 0) {
                        thisObj.find('i').removeClass('real-fonts-heart-outline');
                        thisObj.find('i').removeClass('disabled-heart');
                        thisObj.find('i').addClass('real-fonts-heart');
                    } else {
                        thisObj.find('i').removeClass('real-fonts-heart');
                        thisObj.find('i').addClass('disabled-heart');
                        thisObj.find('i').addClass('real-fonts-heart-outline');
                    }
                    $('.counter').text(response.data.favorites);
                } else {
                    console.log("An error has occured");
                }
            };

            factory.methods.ajax(url, type, data, callback, beforeSend, false);
        });

        $(document).on('click', '.btn-save-to-favorite-inside-display', function (e) {
            e.preventDefault();
            var thisObj = $(this);
            var url = rootUrl + '/r/g/call/save-to-favorites';
            var type = 'post';
            var agent;
            if (!!$(this).data('agent')) {
                agent = $(this).data('agent');
            } else if ($('#contact-agent-id').data('id')) {
                agent = $('#contact-agent-id').data('id');
            } else {
                agent = null;
            }
            var data = { 'id': $(this).data('id'), 'agent': agent };
            var beforeSend = function beforeSend() {};
            var callback = function callback(response) {
                if (response.status == "success") {
                    if (response.data.user > 0) {
                        thisObj.find('button').html('Remove from Favorites');
                    } else {
                        thisObj.find('button').html('Save to Favorites');
                    }
                    $('.counter').text(response.data.favorites);
                } else {
                    console.log("An error has occured");
                }
            };

            factory.methods.ajax(url, type, data, callback, beforeSend, false);
        });

        $('#form-saved-search').submit(function () {
            var thisObj = $(this);
            url = rootUrl + '/r/g/call/save-search';
            type = 'post';
            data = thisObj.serialize();
            beforeSend = function beforeSend() {};
            callback = function callback(response) {
                console.log(response);
                if (response.status == "success") {

                    thisObj.replaceWith('<button class="saved-search btn"><i class="real-fonts-heart"></i> Saved</button>');
                } else {
                    alert("An error has occured");
                }
            };

            factory.methods.ajax(url, type, data, callback, beforeSend, false);

            return false;
        });
    }

    function actions() {
        $('.dashboard-search-panel .order-by .dropdown-menu').find('a').click(function (e) {
            e.preventDefault();
            $('.dashboard-search-panel .order-by span#search_concept').text($(this).text());

            $('.dashboard-search-panel #sortby').val($(this).data('value'));
            $('#dashboard-search-form').submit();
        });

        $('.dashboard-search-panel .order-by #sort-select').change(function (e) {
            e.preventDefault();
            $('.dashboard-search-panel #sort').val($(this).val());
            $('#dashboard-search-form').submit();
        });

        $('.dashboard-search-panel #dashboard-qs-btn').click(function () {
            $('#dashboard-search-form').submit();
        });

        $('.dashboard-search-panel #outside-title').keypress(function (e) {
            if (e.which == 13) {
                $('#dashboard-search-form').submit();
            }
        });

        $('.leads-page li').removeClass('active');
        $('.leads-page li a').each(function () {
            if ($(this).attr('href').indexOf(location.pathname) !== -1) {
                $(this).parent().addClass('active');
            }
        });

        $('.sidebar ul.sidebar-menu li').removeClass('active');
        $('.sidebar ul.sidebar-menu li a').each(function () {
            if ($(this).attr('href').indexOf(location.pathname) !== -1) {
                $(this).parent().addClass('active');
            }
        });

        $('.sidebar ul.sidebar-menu li.treeview ul > li a').each(function () {
            if ($(this).attr('href').indexOf(location.pathname) !== -1) {
                $(this).parents('.treeview').addClass('active');
            }
        });
    }

    var formBuilder = {
        generateAjaxData: function generateAjaxData($form) {
            return {
                url: $form.attr("action"),
                method: $form.attr("method"),
                values: new FormData($form[0])
            };
        }
    };

    function init() {
        plugins();
        actions();

        var ajaxData = formBuilder;

        return {
            form: {
                build: function build($form) {
                    return ajaxData.generateAjaxData($form);
                }
            }
        };
    }

    return {
        run: function run() {
            if (!instance) {
                instance = init();
            }

            setTimeout(function () {
                factory.methods.loader(false);
            }, 200);

            return instance;
        }
    };
}();

var dashboardApp = {
    init: function init() {
        this.admin_dashboard_toggle();
        this.process_admin_dashboard_toggle();
    },

    admin_dashboard_toggle: function admin_dashboard_toggle() {

        $sidebar_toggle = $('.sidebar-toggle');

        if ($sidebar_toggle.length) {
            $(document).on('click', '.sidebar-toggle', function () {
                if ($('body').hasClass('sidebar-collapse')) {
                    Cookies.set('real-admin-dashboard-sidebar', 'collapse');
                } else {
                    Cookies.remove('real-admin-dashboard-sidebar');
                }
            });
        }
    },

    process_admin_dashboard_toggle: function process_admin_dashboard_toggle() {
        if (Cookies.get('real-admin-dashboard-sidebar') == 'collapse') {
            $('body').addClass('sidebar-collapse');
        }
    }
};

var formStack = {
    init: function init() {
        this.events();
    },

    events: function events() {
        $('input[type="radio"][name="user_type"]').change(function () {
            var radioButton = $(this).val();
            var submitButton = $('button[type="submit"].submit-user-type');
            submitButton.on('click', function () {
                if (radioButton == 'agent') {
                    var firstname = $('input[type="hidden"][name="first_name"]').val();
                    var lastname = $('input[type="hidden"][name="last_name"]').val();
                    var email = $('input[type="hidden"][name="email"]').val();
                    var sent_from = $('input[type="hidden"][name="sent_from"]').val();
                    $.ajax({
                        method: 'post',
                        url: 'https://www.formstack.com/forms/index.php',
                        data: {
                            form: 3606451,
                            viewkey: 'HtvKwEVSw7',
                            _submit: 1,
                            style_version: 3,
                            viewparam: 841355,
                            field83036350: firstname, //First name formstack
                            field83036351: lastname, //Last name formstack
                            field83036352: email, //Email Formstack
                            field83036353: sent_from
                        }
                    }).done(function () {
                        console.log('Formstack submit');
                    });
                }
            });
        });
    }
};

var homeJs = {
    settings: {
        counter: 0,
        slider: [{
            'name': 'Shangri-La At The Fort Residences',
            'href': '/development/shangrila-at-the-fort-residences-bgc'
        }, {
            'name': 'Ortigas, Pasig',
            'href': '/search/result?search=ortigas&type=&limit=12&offset=0&page=1&sortby=date&sort=desc'
        }, {
            'name': 'Makati City',
            'href': '/search/result?search=makati&type=&limit=12&offset=0&page=1&sortby=date&sort=desc'
        }, {
            'name': 'Bonifacio Global City',
            'href': '/search/result?search=taguig&type=&limit=12&offset=0&page=1&sortby=date&sort=desc'
        }]
    },
    helpers: {
        setAttributes: function setAttributes(el, attrs) {
            for (var key in attrs) {
                el.setAttribute(key, attrs[key]);
            }
        }
    },
    init: function init() {
        var link = $('.hero-slider-content__slider-label-wrapper a');
        var label = $('.hero-slider-content__slider-label-wrapper span');

        if (document.querySelector('.main')) {

            $('.hero-background-wrapper').on('init', function (slick) {
                link.attr('href', homeJs.settings.slider[0].href);
                label.text(homeJs.settings.slider[0].name);
            });

            var heroBanner = $('.hero-background-wrapper').slick({
                autoplay: true,
                arrows: false,
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear'
            });

            heroBanner.on('afterChange', function (slick, currentSlide) {
                link.attr('href', homeJs.settings.slider[currentSlide.currentSlide].href);
                label.text(homeJs.settings.slider[currentSlide.currentSlide].name);
            });
        }
    }
};

var homePage = {
    init: function init(data) {
        this.slider(data);
    },

    slider: function slider(data) {
        var data = JSON.parse(JSON.stringify(data));
        homeJs.settings.slider = data.slider;
        homeJs.init();
        $('.slider-card__slick').slick({
            slidesToShow: 7,
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="material-icons">keyboard_arrow_left</i></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="material-icons">keyboard_arrow_right</i></button>',
            responsive: [{
                breakpoint: 1400,
                settings: {
                    centerMode: true,
                    centerPadding: '45px',
                    slidesToShow: 5
                }
            }, {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '45px',
                    slidesToShow: 3
                }
            }, {
                breakpoint: 576,
                settings: {
                    centerMode: true,
                    centerPadding: '45px',
                    slidesToShow: 1
                }
            }]
        });
        $('.slider-media__slick').slick({
            infinite: true,
            slidesToShow: 4,
            speed: 300,
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="material-icons">keyboard_arrow_left</i></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="material-icons">keyboard_arrow_right</i></button>',
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '30px'
                }
            }]
        });
    }
};

jQuery(document).ready(function () {
    $('button[type="submit"]').attr('disabled', false);
    $('button[typeof="submit"]').attr('disabled', false);
    $('input[type="submit"]').attr('disabled', false);
    $('body').removeClass('initial-loader');
    if ($('.sidebar-toggle').length) {
        dashboardApp.init();
    }
    socialMeadiaSharing.INIT();
    $('#listing-list-container').jscroll({
        loadingHtml: '<div class="text-center"><img width="50" src="' + rootUrl + '/public/front/lib/images/loading-real.gif" alt="Loading..." /></div>',
        nextSelector: 'a.listing-list-pagination:last',
        callback: function callback() {
            window.__sharethis__.initialize();
            socialMeadiaSharing.generateSocialList();
        }
    });
});

var mapInstantiated = 0;

var app = {
    init: function init() {

        this.slideshow();
        this.dropdown_menu();
        this.slideshowContent();
        this.scrolled_header();
        this.mobile_nav();
        // this.form_popups();
        this.back_top();
        this.slide_to_content();
        this.carousel();
        this.quick_search();
        this.property_details();
        this.logged_in();
        //this.property_results();
        this.real_accordion();
        this.sidebar_sponsored_property();
    },

    GOOGLE: {
        map: '',
        lastInfo: ''
    },

    geocode: function geocode(address) {
        var deferred = Q.defer();
        var geocoder = new google.maps.Geocoder();

        var test = geocoder.geocode({ 'address': address }, function (results, status) {
            deferred.resolve(results[0].geometry.location);
        });

        return deferred.promise;
    },

    real_popup: function real_popup() {
        $('.real-content-popup').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            closeOnBgClick: true,
            callbacks: {
                open: function open() {
                    jQuery('.mfp-content').addClass('real-popup-body');
                    jQuery('.request-popup').append('<button title="%title%" type="button" class="mfp-close">&#215;</button>');
                }
            }
        });
    },

    real_accordion: function real_accordion() {
        var plug = false;

        jQuery(".real-accordion").click(function (e) {
            e.preventDefault();
            if (plug != true) {
                jQuery('.request-popup').slideDown();
                plug = true;
            } else {
                jQuery('.request-popup').slideUp();
                plug = false;
            }
        });
    },

    form_popups: function form_popups() {
        // center popup on every screen
        signIn = $(".sign-in .pop-form, .sign-in .popsocial, .sign-in .form-center");
        signUp = $(".sign-up .pop-form, .sign-up .popsocial, .sign-up .form-center");
        //on click display sign in
        $(document).on('click', '.hlogin, .savePopup', function (e) {
            e.preventDefault();
            $('#signup').fadeIn();
            $('.signprop').fadeIn();

            if ($(window).width() > 600) {
                popupheight = $('.signprop').height() / 2;
                $('.signprop').css({ 'marginTop': -popupheight + 'px' });
                signIn.chainHeight({ refreshDelay: 0 });
            }
        });

        // on click display signup
        $('.join-now').click(function () {
            $('.signprop').fadeOut();
            $('.signprop2').fadeIn();

            if ($(window).width() > 600) {
                popupheight = $('.signprop2').height() / 2;
                $('.signprop2').css({ 'marginTop': -popupheight + 'px' });
                signUp.chainHeight({ refreshDelay: 0 });
            }
        });

        // on clikc display sign in
        $('.sign-now').click(function () {
            $('.signprop').fadeIn();
            $('.signprop2').fadeOut();

            if ($(window).width() > 600) {
                popupheight = $('.signprop').height() / 2;
                $('.signprop').css({ 'marginTop': -popupheight + 'px' });
                signIn.chainHeight({ refreshDelay: 0 });
            }
        });

        $('.popclose, .signupoutsiude, .popout').click(function () {
            $('#signup').fadeOut();
            $('.signprop').fadeIn();
            $('.signprop2').fadeOut();
        });
    },

    dropdown_menu: function dropdown_menu() {
        $('#header nav > ul > li').hover(function () {

            $(this).filter(function (i, v) {
                return $(v).find(".mega-menu").length > 0;
            }).addClass("dropdown_menu");

            $('.mega-menu', this).stop(true).fadeIn();
        }, function () {

            $(this).removeClass('dropdown_menu');
            $('.mega-menu', this).stop(true).fadeOut();
        });
    },

    property_results: function property_results() {

        jQuery('.map-viewbttn').click(function () {

            jQuery('.list-view').fadeOut();
            jQuery('.result-map').fadeIn();
        });

        jQuery('.list-viewbttn').click(function () {

            jQuery('.result-map').fadeOut();
            jQuery('.list-view').fadeIn();
        });

        jQuery(".featured-sponsored-property .result-listing-image, .featured-sponsored-property .result-listing-details").chainHeight();
        jQuery(".result-list .result-listing-image, .result-list .result-listing-details").chainHeight();
    },

    logged_in: function logged_in() {
        if ($('#header .header-left .loggedin p').text().length > 13) {
            jQuery('#header .header-left .loggedin p').addClass('small_name');
        }

        var x = false;

        $(".user-logphoto").click(function () {
            if (x != true) {
                $('#header .header-left .loggedin .other-settings').slideDown();
                x = true;
            } else {
                $('#header .header-left .loggedin .other-settings').slideUp();
                x = false;
            }
        });

        $(".user-menu").click(function () {
            if (x != true) {
                $('.dropdown-menu').slideDown();
                x = true;
            } else {
                $('.dropdown-menu').slideUp();
                x = false;
            }
        });
    },

    mobile_nav: function mobile_nav() {
        var plug = false;

        $(".mhr-burger").click(function () {
            if (plug != true) {
                $(this).addClass('mhr-burger-active');
                $('body').addClass('no-scroll');
                $('#header .nav').stop(true).slideDown();
                plug = true;
            } else {
                $(this).removeClass('mhr-burger-active');
                $('body').removeClass('no-scroll');
                $('#header .nav').stop(true).slideUp();
                plug = false;
            }
        });
    },

    scrolled_header: function scrolled_header() {
        var recentScroll = 0;

        $(window).scroll(function () {
            if (recentScroll === 0 && $(this).scrollTop() >= 20 + $('#header').height()) {
                // setTimeout(function() {
                $('#header').addClass('scrolled-nav');
                // }, 200)
                recentScroll = 1;
                // window.setTimeout(function() { 
                // 	recentScroll = false; 
                // }, 2000)
            }
            if (recentScroll === 1 && $(this).scrollTop() <= 19 + $('#header').height()) {
                // setTimeout(function() {
                $('#header').removeClass('scrolled-nav');
                // }, 200)
                recentScroll = 0;
                // window.setTimeout(function() { 
                // 	recentScroll = true; 
                // }, 2000)
            }
        });
    },

    slideshow: function slideshow() {
        if ($('.slideshow').length == 0) return;

        $('.slideshow').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            arrows: false,
            autoplay: true
        });
    },

    slideshowContent: function slideshowContent() {
        headerHeight = $('#header').height() + 10;

        $('.slidecontent').css({
            "top": headerHeight + "px"
        });
    },

    real_description: function real_description() {
        if ($('.description-image').length || $('.description-text').length) {
            $(".description-image, .description-text").chainHeight();
        }
    },

    online_reputation: function online_reputation() {
        if ($(".op-list").length) {
            if ($(window).width() > 768) {
                $(".op-list").chainHeight();
            }
        }
    },

    back_top: function back_top() {
        // scroll to top
        $(".back-top").click(function () {
            $('html, body').animate({
                scrollTop: $("body").offset().top - 90
            }, 1000);
        });

        // display scroll when window reach half of the scroll.
        $(window).on("scroll", function () {
            if ($(window).scrollTop() + $(window).height() / 2 >= $(document).height() / 2) {

                $('.back-top').fadeIn();
            } else {
                $('.back-top').fadeOut();
            }
        });
    },

    slide_to_content: function slide_to_content() {
        // scroll to top
        $(".bannerdd").click(function () {
            $('html, body').animate({
                scrollTop: $("#home-welcome").offset().top - 69
            }, 2000);
        });
    },

    carousel: function carousel() {
        $('.fp-wrap').slick({
            centerMode: true,
            centerPadding: '214px',
            slidesToShow: 3,
            autoplay: true,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '214px',
                    slidesToShow: 2
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '214px',
                    slidesToShow: 1
                }
            }, {
                breakpoint: 680,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1
                }
            }]
        });
    },

    quick_search: function quick_search() {

        headerHeight = $('#header').height() + 10;

        $('.hspace').css({
            "marginTop": headerHeight + "px"
        });
    },

    property_details: function property_details() {
        $('.ppslide').slick().removeClass('hide').slick("refresh");
    },

    sidebar_sponsored_property: function sidebar_sponsored_property() {
        $('.sidebar-sponsored-property-slider').slick({
            autoplay: true
        }).removeClass('hide').slick("refresh");
    }
};

jQuery(window).resize(function () {
    app.slideshowContent();
    app.mobile_nav();

    if (jQuery(window).width() > 992) {
        app.real_description();
    }
});

jQuery(window).on('load', function () {
    app.online_reputation();
    app.property_results();
});

jQuery(document).ready(function () {
    app.init();

    if (jQuery(window).width() > 992) {
        app.real_description();
    }
});
var $ = jQuery;

var agentSlick;
var agentTotalSlide;
var slickDir = 'slickNext';

$(document).ready(function () {
    agentSlick = $('.curved-slide').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                autoplaySpeed: 5000
            }
        }]
    });
});

$(document).ready(function () {
    $('.peopleagent-details').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 5000
    });
});

var searchView = Backbone.View.extend({
    el: '.property-search',

    initialize: function initialize() {
        this.multipleSelect();
        this.multipleSelect2();
    },

    multipleSelect: function multipleSelect() {
        thisObject = this;

        if (this.$el.find('#bb-search-location').length) {
            this.$el.find('#bb-search-location').selectpicker({
                liveSearch: true
            }).ajaxSelectPicker({
                ajax: {
                    url: rootUrl + '/r/g/call/search/get',
                    type: 'GET',
                    dataType: 'json',
                    data: function data() {
                        var params = {
                            q: '{{{q}}}'
                        };

                        if ($('#bb-search-cities').length) {
                            params.selectedCity = $('#bb-search-cities').val();
                        }

                        return params;
                    }
                },
                locale: {
                    emptyTitle: 'Search by Building (e.g. One Serendra)',
                    searchPlaceholder: 'Enter keyword'
                },
                cache: false,
                clearOnEmpty: true,
                preserveSelected: true,
                preprocessData: function preprocessData(data) {
                    var i,
                        l = data.length,
                        array = [];
                    if (l) {
                        for (i = 0; i < l; i++) {
                            array.push($.extend(true, data[i], {
                                text: data[i].name,
                                value: data[i].id,
                                data: {
                                    subtext: data[i].type
                                }
                            }));
                        }
                    }
                    return array;
                }
            }).on('hidden.bs.select', function (e, t) {
                thisObject.$el.find('.status').html('Start typing a search query').show();

                thisObject.$el.find('.dropdown-menu.inner li').not('.selected, .dropdown-header').remove();
            }).trigger('change').data('AjaxBootstrapSelect').list.cache = {};
        }
    },

    multipleSelect2: function multipleSelect2() {
        if ($('#bb-search-location-2').length) {
            $('#bb-search-location-2').selectpicker({
                liveSearch: true
            }).ajaxSelectPicker({
                ajax: {
                    url: rootUrl + '/r/g/call/search/get',
                    type: 'GET',
                    dataType: 'json',
                    data: function data() {
                        var params = {
                            q: '{{{q}}}'
                        };

                        if ($('#bb-search-cities').length) {
                            params.selectedCity = $('#bb-search-cities').val();
                        }

                        return params;
                    }
                },
                locale: {
                    emptyTitle: 'Search by Building (e.g. One Serendra)',
                    searchPlaceholder: 'Enter keyword'
                },
                cache: false,
                clearOnEmpty: true,
                preserveSelected: true,
                preprocessData: function preprocessData(data) {

                    var i,
                        l = data.length,
                        array = [];
                    if (l) {
                        for (i = 0; i < l; i++) {
                            array.push($.extend(true, data[i], {
                                text: data[i].name,
                                value: data[i].id,
                                data: {
                                    subtext: data[i].type
                                }
                            }));
                        }
                    }
                    return array;
                }
            }).trigger('change').data('AjaxBootstrapSelect').list.cache = {};
        }
    }
});
jQuery(document).ready(function ($) {
    var Login = {
        INIT: function INIT() {
            this.loginForm();

            this.loginPrompt();

            this.forgotPasswordForm();

            this.passwordReset();
        },

        submit: function submit(e, loginForm) {
            e.preventDefault();

            var formData = loginForm.serialize();

            $.ajax({
                url: loginForm.attr('action'),
                type: 'POST',
                data: formData,
                beforeSend: function beforeSend() {
                    if (typeof swal !== "undefined") {
                        swal({
                            title: 'Processing...',
                            allowOutsideClick: false
                        });
                        swal.showLoading();
                    }
                },
                success: function success(response) {
                    var data = $.parseJSON(response);

                    if (data.error) {
                        var errorMessage = data.message ? data.message : 'Error occurred, please try again.';
                        Login.swalError(errorMessage);
                    } else {
                        var formMessage = data.message ? data.message : 'Successfully logged in. Please wait, redirecting...';
                        Login.swalSuccess(formMessage);

                        var redirectUrl = data.url ? data.url : '';
                        if (Cookies !== undefined) {
                            if (Cookies.get('redirectUrl')) {
                                redirectUrl = Cookies.get('redirectUrl');
                                Cookies.remove('redirectUrl');
                            }
                        }

                        location.href = redirectUrl;
                    }
                }
            });
        },

        loginForm: function loginForm() {
            var loginForm = $('#login-form');
            var loginInnerForm = $('#inner-login-form');

            loginForm.submit(function (e) {
                Login.submit(e, loginForm);
            });

            loginInnerForm.submit(function (e) {
                Login.submit(e, loginInnerForm);
            });
        },

        loginPrompt: function loginPrompt() {
            $(document).on('click', '.btn--login', function () {
                if (Cookies !== undefined) {
                    var redirectUrl = location.href;

                    if ($(this).data('redirect-url')) {
                        redirectUrl = $(this).data('ref-url');
                    }

                    Cookies.set('redirectUrl', redirectUrl);
                }
            });

            $(document).on('click', '.hlogin', function (e) {
                e.preventDefault();

                if (Cookies !== undefined) {
                    var redirectUrl = location.href;

                    if ($(this).data('redirect-url')) {
                        redirectUrl = $(this).data('ref-url');
                    }

                    Cookies.set('redirectUrl', redirectUrl);
                }

                if (swal !== undefined) {
                    swal({
                        title: 'Login Required',
                        type: 'error',
                        text: 'You need to log in to proceed.',
                        confirmButtonText: '<i class="real-fonts-lock"></i> Log In'
                    }).then(function (result) {
                        if (result.value) {
                            var $login = $('#login');
                            $login.removeClass('d-none');
                            $('body').addClass('no-scroll');
                        }
                    });
                }
            });
        },

        forgotPasswordForm: function forgotPasswordForm() {
            var resetPasswordForm = $('#reset-password-form');
            resetPasswordForm.submit(function (e) {
                e.preventDefault();

                var formData = resetPasswordForm.serialize();

                $.ajax({
                    url: resetPasswordForm.attr('action'),
                    type: 'POST',
                    data: formData,
                    beforeSend: function beforeSend() {
                        if (typeof swal !== "undefined") {
                            swal({
                                title: 'Processing...',
                                allowOutsideClick: false
                            });
                            swal.showLoading();
                        }
                    },
                    success: function success(response) {
                        var data = $.parseJSON(response);
                        if (data.error) {
                            var errorMessage = data.message ? data.message : 'Error occurred, please try again.';
                            Login.swalError(errorMessage);
                        } else {
                            var formMessage = data.message ? data.message : 'Success, user credential has been sent to your email.';
                            Login.swalSuccess(formMessage);
                        }
                    }
                });
            });
        },

        passwordReset: function passwordReset() {
            var loginForm = $('#reset-password');
            loginForm.submit(function (e) {
                e.preventDefault();

                var formData = loginForm.serialize();

                $.ajax({
                    url: loginForm.attr('action'),
                    type: 'POST',
                    data: formData,
                    beforeSend: function beforeSend() {
                        if (typeof swal !== "undefined") {
                            swal({
                                title: 'Processing...',
                                allowOutsideClick: false
                            });
                            swal.showLoading();
                        }
                    },
                    success: function success(response) {
                        var data = $.parseJSON(response);

                        if (data.status == "success") {
                            var formMessage = data.message ? data.message : 'Information has been successfully saved!';

                            Login.swalSuccess(formMessage);

                            /* Redirection */
                            if (data.redirect) {
                                setTimeout(function () {
                                    window.location.href = data.redirect_url;
                                }, 3500);
                            }
                        } else {
                            var errorMessage = '';

                            $.each(data.errors, function (e, v) {
                                errorMessage += '<p>' + v + '</p>';
                            });

                            if (!errorMessage) {
                                errorMessage = 'Please contact the system Administrator.';
                            }

                            Login.swalError(errorMessage);
                        }
                    }
                });
            });
        },

        swalError: function swalError(message) {
            if (typeof swal !== "undefined") {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    html: message,
                    allowOutsideClick: false
                });
            }
        },

        swalSuccess: function swalSuccess(message) {
            if (typeof swal !== "undefined") {
                swal({
                    type: 'success',
                    title: 'Success',
                    html: message,
                    allowOutsideClick: false
                });
            }
        }
    };

    Login.INIT();
});
var socialMeadiaSharing = {
    INIT: function INIT() {
        this.EVENTS();
        this.generateSocialList();
    },

    EVENTS: function EVENTS() {
        $(document).on('click', '.socialmedia__btn', function () {
            var id = $(this).attr('data-id');
            $('.listing-display' + id).removeClass('d-none');
            $('.st-btn').addClass('socialmedia__share-social-color');
            $('.socialmedia__share-social-color').attr("style", "");
            $('.sharethis-inline-share-buttons').removeClass('st-hidden');
        });

        $(document).on('click', '.socialmedia__display-overlay-close', function () {
            var id = $(this).attr('data-listing');
            if (!$('.listing-display' + id).hasClass('d-none')) {
                $('.listing-display' + id).addClass('d-none');
            }
        });

        $(document).on('click', '.go-to-flyer-outside', function () {
            var url = $(this).attr('data-url');
            window.open(url);
        });

        $(document).on('click', '.open-mail-to-outside', function () {
            var email = $(this).attr('data-email');
            var subject = $(this).attr('data-subject');
            var emailBody = $(this).attr('data-body');
            document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody + "?attach= ";
        });

        $(document).on('click', '.copy-link-outside', function () {
            var temp = $('<input>');
            $('body').append(temp);
            temp.val($(this).attr('data-url')).select();
            document.execCommand("copy");
            temp.remove();
            swal({
                title: 'Success',
                type: 'success',
                text: 'Link Copied on to clipboard!'
            });
        });

        $(document).on('click', '.socialmedia__btn-share-btn-pad', function () {
            var id = $(this).attr('data-id');
            $('.socialmedia__container-modal').removeClass('d-none');
            $('body').addClass('socialmedia__container-modal-no-scroll');
            $('.st-btn').addClass('socialmedia__container-modal-social-btn');
            $('.socialmedia__container-modal-social-btn').attr("style", "");
        });

        $(document).on('click', '.socialmedia__modal-outline-modal-head-cancel-btn', function () {
            $('.socialmedia__container-modal').addClass('d-none');
            $('body').removeClass('socialmedia__container-modal-no-scroll');
        });

        $(document).on('click', '.copy-link', function () {
            var url = window.location.href;
            var temp = $('<input>');
            $('body').append(temp);
            temp.val(url).select();
            document.execCommand("copy");
            temp.remove();
            swal({
                title: 'Success',
                type: 'success',
                text: 'Link Copied on to clipboard!'
            });
        });
    },

    generateSocialList: function generateSocialList() {
        var sharethisInline = $('.sharethis-inline-share-buttons');

        if (sharethisInline.length) {
            var url = sharethisInline.attr('data-get-url');
            $.ajax({
                type: 'get',
                url: url
            }).done(function (returnData) {
                returnData.forEach(function (value) {
                    if (value['name'] == 'Facebook' && value['status'] == 'off') {
                        $('[data-network="facebook"]').each(function () {
                            $(this).addClass('d-none');
                        });
                    }
                    if (value['name'] == 'Twitter' && value['status'] == 'off') {
                        $('[data-network="twitter"]').each(function () {
                            $(this).addClass('d-none');
                        });
                    }
                    if (value['name'] == 'Google Plus' && value['status'] == 'off') {
                        $('[data-network="googleplus"]').each(function () {
                            $(this).addClass('d-none');
                        });
                    }
                    if (value['name'] == 'Pinterest' && value['status'] == 'off') {
                        $('[data-network="pinterest"]').each(function () {
                            $(this).addClass('d-none');
                        });
                    }
                    if (value['name'] == 'Email' && value['status'] == 'off') {
                        $('.open-mail-to-outside').each(function () {
                            $(this).addClass('d-none');
                        });
                        $('.open-mail-to').addClass('d-none');
                    }
                });
            });
        }
    }
};
/*!
* sweetalert2 v7.33.1
* Released under the MIT License.
*/
(function (global, factory) {
    (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Sweetalert2 = factory();
})(this, function () {
    'use strict';

    function _typeof(obj) {
        if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };
        } else {
            _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };
        }

        return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _extends() {
        _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

        return _extends.apply(this, arguments);
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

        return _setPrototypeOf(o, p);
    }

    function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
            _construct = Reflect.construct;
        } else {
            _construct = function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
            };
        }

        return _construct.apply(null, arguments);
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }

    function _possibleConstructorReturn(self, call) {
        if (call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function")) {
            return call;
        }

        return _assertThisInitialized(self);
    }

    function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
        }

        return object;
    }

    function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
        } else {
            _get = function _get(target, property, receiver) {
                var base = _superPropBase(target, property);

                if (!base) return;
                var desc = Object.getOwnPropertyDescriptor(base, property);

                if (desc.get) {
                    return desc.get.call(receiver);
                }

                return desc.value;
            };
        }

        return _get(target, property, receiver || target);
    }

    var consolePrefix = 'SweetAlert2:';
    /**
     * Filter the unique values into a new array
     * @param arr
     */

    var uniqueArray = function uniqueArray(arr) {
        var result = [];

        for (var i = 0; i < arr.length; i++) {
            if (result.indexOf(arr[i]) === -1) {
                result.push(arr[i]);
            }
        }

        return result;
    };
    /**
     * Convert NodeList to Array
     * @param nodeList
     */

    var toArray = function toArray(nodeList) {
        return Array.prototype.slice.call(nodeList);
    };
    /**
     * Converts `inputOptions` into an array of `[value, label]`s
     * @param inputOptions
     */

    var formatInputOptions = function formatInputOptions(inputOptions) {
        var result = [];

        if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
            inputOptions.forEach(function (value, key) {
                result.push([key, value]);
            });
        } else {
            Object.keys(inputOptions).forEach(function (key) {
                result.push([key, inputOptions[key]]);
            });
        }

        return result;
    };
    /**
     * Standardise console warnings
     * @param message
     */

    var warn = function warn(message) {
        console.warn("".concat(consolePrefix, " ").concat(message));
    };
    /**
     * Standardise console errors
     * @param message
     */

    var error = function error(message) {
        console.error("".concat(consolePrefix, " ").concat(message));
    };
    /**
     * Private global state for `warnOnce`
     * @type {Array}
     * @private
     */

    var previousWarnOnceMessages = [];
    /**
     * Show a console warning, but only if it hasn't already been shown
     * @param message
     */

    var warnOnce = function warnOnce(message) {
        if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
            previousWarnOnceMessages.push(message);
            warn(message);
        }
    };
    /**
     * If `arg` is a function, call it (with no arguments or context) and return the result.
     * Otherwise, just pass the value through
     * @param arg
     */

    var callIfFunction = function callIfFunction(arg) {
        return typeof arg === 'function' ? arg() : arg;
    };
    var isPromise = function isPromise(arg) {
        return arg && Promise.resolve(arg) === arg;
    };

    var DismissReason = Object.freeze({
        cancel: 'cancel',
        backdrop: 'overlay',
        close: 'close',
        esc: 'esc',
        timer: 'timer'
    });

    var argsToParams = function argsToParams(args) {
        var params = {};

        switch (_typeof(args[0])) {
            case 'object':
                _extends(params, args[0]);

                break;

            default:
                ['title', 'html', 'type'].forEach(function (name, index) {
                    switch (_typeof(args[index])) {
                        case 'string':
                            params[name] = args[index];
                            break;

                        case 'undefined':
                            break;

                        default:
                            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
                    }
                });
        }

        return params;
    };

    /**
     * Adapt a legacy inputValidator for use with expectRejections=false
     */
    var adaptInputValidator = function adaptInputValidator(legacyValidator) {
        return function adaptedInputValidator(inputValue, extraParams) {
            return legacyValidator.call(this, inputValue, extraParams).then(function () {
                return undefined;
            }, function (validationMessage) {
                return validationMessage;
            });
        };
    };

    var swalPrefix = 'swal2-';
    var prefix = function prefix(items) {
        var result = {};

        for (var i in items) {
            result[items[i]] = swalPrefix + items[i];
        }

        return result;
    };
    var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
    var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

    var states = {
        previousBodyPadding: null
    };
    var hasClass = function hasClass(elem, className) {
        return elem.classList.contains(className);
    };
    var focusInput = function focusInput(input) {
        input.focus(); // place cursor at end of text in text input

        if (input.type !== 'file') {
            // http://stackoverflow.com/a/2345915
            var val = input.value;
            input.value = '';
            input.value = val;
        }
    };

    var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
        if (!target || !classList) {
            return;
        }

        if (typeof classList === 'string') {
            classList = classList.split(/\s+/).filter(Boolean);
        }

        classList.forEach(function (className) {
            if (target.forEach) {
                target.forEach(function (elem) {
                    add ? elem.classList.add(className) : elem.classList.remove(className);
                });
            } else {
                add ? target.classList.add(className) : target.classList.remove(className);
            }
        });
    };

    var addClass = function addClass(target, classList) {
        addOrRemoveClass(target, classList, true);
    };
    var removeClass = function removeClass(target, classList) {
        addOrRemoveClass(target, classList, false);
    };
    var getChildByClass = function getChildByClass(elem, className) {
        for (var i = 0; i < elem.childNodes.length; i++) {
            if (hasClass(elem.childNodes[i], className)) {
                return elem.childNodes[i];
            }
        }
    };
    var show = function show(elem) {
        elem.style.opacity = '';
        elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
    };
    var hide = function hide(elem) {
        elem.style.opacity = '';
        elem.style.display = 'none';
    }; // borrowed from jquery $(elem).is(':visible') implementation

    var isVisible = function isVisible(elem) {
        return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    var contains = function contains(haystack, needle) {
        if (typeof haystack.contains === 'function') {
            return haystack.contains(needle);
        }
    };

    var getContainer = function getContainer() {
        return document.body.querySelector('.' + swalClasses.container);
    };

    var elementByClass = function elementByClass(className) {
        var container = getContainer();
        return container ? container.querySelector('.' + className) : null;
    };

    var getPopup = function getPopup() {
        return elementByClass(swalClasses.popup);
    };
    var getIcons = function getIcons() {
        var popup = getPopup();
        return toArray(popup.querySelectorAll('.' + swalClasses.icon));
    };
    var getTitle = function getTitle() {
        return elementByClass(swalClasses.title);
    };
    var getContent = function getContent() {
        return elementByClass(swalClasses.content);
    };
    var getImage = function getImage() {
        return elementByClass(swalClasses.image);
    };
    var getProgressSteps = function getProgressSteps() {
        return elementByClass(swalClasses.progresssteps);
    };
    var getValidationMessage = function getValidationMessage() {
        return elementByClass(swalClasses['validation-message']);
    };
    var getConfirmButton = function getConfirmButton() {
        return elementByClass(swalClasses.confirm);
    };
    var getCancelButton = function getCancelButton() {
        return elementByClass(swalClasses.cancel);
    };
    /* @deprecated */

    /* istanbul ignore next */

    var getButtonsWrapper = function getButtonsWrapper() {
        warnOnce("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead");
        return elementByClass(swalClasses.actions);
    };
    var getActions = function getActions() {
        return elementByClass(swalClasses.actions);
    };
    var getFooter = function getFooter() {
        return elementByClass(swalClasses.footer);
    };
    var getCloseButton = function getCloseButton() {
        return elementByClass(swalClasses.close);
    };
    var getFocusableElements = function getFocusableElements() {
        var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
        .sort(function (a, b) {
            a = parseInt(a.getAttribute('tabindex'));
            b = parseInt(b.getAttribute('tabindex'));

            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            }

            return 0;
        }); // https://github.com/jkup/focusable/blob/master/index.js

        var otherFocusableElements = toArray(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (el) {
            return el.getAttribute('tabindex') !== '-1';
        });
        return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
            return isVisible(el);
        });
    };
    var isModal = function isModal() {
        return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
    };
    var isToast = function isToast() {
        return document.body.classList.contains(swalClasses['toast-shown']);
    };
    var isLoading = function isLoading() {
        return getPopup().hasAttribute('data-loading');
    };

    // Detect Node env
    var isNodeEnv = function isNodeEnv() {
        return typeof window === 'undefined' || typeof document === 'undefined';
    };

    var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses.progresssteps, "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">?</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">!</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\">\n       <span class=\"").concat(swalClasses['icon-text'], "\">i</span>\n      </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\">\xD7</button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
    /*
     * Add modal + backdrop to DOM
     */

    var init = function init(params) {
        // Clean up the old popup if it exists
        var c = getContainer();

        if (c) {
            c.parentNode.removeChild(c);
            removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
        }
        /* istanbul ignore if */

        if (isNodeEnv()) {
            error('SweetAlert2 requires document to initialize');
            return;
        }

        var container = document.createElement('div');
        container.className = swalClasses.container;
        container.innerHTML = sweetHTML;
        var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
        targetElement.appendChild(container);
        var popup = getPopup();
        var content = getContent();
        var input = getChildByClass(content, swalClasses.input);
        var file = getChildByClass(content, swalClasses.file);
        var range = content.querySelector(".".concat(swalClasses.range, " input"));
        var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
        var select = getChildByClass(content, swalClasses.select);
        var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
        var textarea = getChildByClass(content, swalClasses.textarea); // a11y

        popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
        popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

        if (!params.toast) {
            popup.setAttribute('aria-modal', 'true');
        } // RTL


        if (window.getComputedStyle(targetElement).direction === 'rtl') {
            addClass(getContainer(), swalClasses.rtl);
        }

        var oldInputVal; // IE11 workaround, see #1109 for details

        var resetValidationMessage = function resetValidationMessage(e) {
            if (Swal.isVisible() && oldInputVal !== e.target.value) {
                Swal.resetValidationMessage();
            }

            oldInputVal = e.target.value;
        };

        input.oninput = resetValidationMessage;
        file.onchange = resetValidationMessage;
        select.onchange = resetValidationMessage;
        checkbox.onchange = resetValidationMessage;
        textarea.oninput = resetValidationMessage;

        range.oninput = function (e) {
            resetValidationMessage(e);
            rangeOutput.value = range.value;
        };

        range.onchange = function (e) {
            resetValidationMessage(e);
            range.nextSibling.value = range.value;
        };

        return popup;
    };

    var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
        if (!param) {
            return hide(target);
        } // DOM element


        if (param instanceof HTMLElement) {
            target.appendChild(param); // JQuery element(s)
        } else if (_typeof(param) === 'object') {
            target.innerHTML = '';

            if (0 in param) {
                for (var i = 0; i in param; i++) {
                    target.appendChild(param[i].cloneNode(true));
                }
            } else {
                target.appendChild(param.cloneNode(true));
            }
        } else if (param) {
            target.innerHTML = param;
        }

        show(target);
    };

    var animationEndEvent = function () {
        // Prevent run in Node env

        /* istanbul ignore if */
        if (isNodeEnv()) {
            return false;
        }

        var testEl = document.createElement('div');
        var transEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd oanimationend',
            'animation': 'animationend'
        };

        for (var i in transEndEventNames) {
            if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
                return transEndEventNames[i];
            }
        }

        return false;
    }();

    // Measure width of scrollbar
    // https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
    var measureScrollbar = function measureScrollbar() {
        var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

        if (supportsTouch) {
            return 0;
        }

        var scrollDiv = document.createElement('div');
        scrollDiv.style.width = '50px';
        scrollDiv.style.height = '50px';
        scrollDiv.style.overflow = 'scroll';
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };

    var renderActions = function renderActions(params) {
        var actions = getActions();
        var confirmButton = getConfirmButton();
        var cancelButton = getCancelButton(); // Actions (buttons) wrapper

        if (!params.showConfirmButton && !params.showCancelButton) {
            hide(actions);
        } else {
            show(actions);
        } // Cancel button


        if (params.showCancelButton) {
            cancelButton.style.display = 'inline-block';
        } else {
            hide(cancelButton);
        } // Confirm button


        if (params.showConfirmButton) {
            confirmButton.style.removeProperty('display');
        } else {
            hide(confirmButton);
        } // Edit text on confirm and cancel buttons


        confirmButton.innerHTML = params.confirmButtonText;
        cancelButton.innerHTML = params.cancelButtonText; // ARIA labels for confirm and cancel buttons

        confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
        cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel); // Add buttons custom classes

        confirmButton.className = swalClasses.confirm;
        addClass(confirmButton, params.confirmButtonClass);
        cancelButton.className = swalClasses.cancel;
        addClass(cancelButton, params.cancelButtonClass); // Buttons styling

        if (params.buttonsStyling) {
            addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

            if (params.confirmButtonColor) {
                confirmButton.style.backgroundColor = params.confirmButtonColor;
            }

            if (params.cancelButtonColor) {
                cancelButton.style.backgroundColor = params.cancelButtonColor;
            } // Loading state


            var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
            confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
            confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
        } else {
            removeClass([confirmButton, cancelButton], swalClasses.styled);
            confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
            cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
        }
    };

    var renderContent = function renderContent(params) {
        var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

        if (params.html) {
            parseHtmlToContainer(params.html, content); // Content as plain text
        } else if (params.text) {
            content.textContent = params.text;
            show(content);
        } else {
            hide(content);
        }
    };

    var renderIcon = function renderIcon(params) {
        var icons = getIcons();

        for (var i = 0; i < icons.length; i++) {
            hide(icons[i]);
        }

        if (params.type) {
            if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
                var icon = Swal.getPopup().querySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
                show(icon); // Animate icon

                if (params.animation) {
                    addClass(icon, "swal2-animate-".concat(params.type, "-icon"));
                }
            } else {
                error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
            }
        }
    };

    var renderImage = function renderImage(params) {
        var image = getImage();

        if (params.imageUrl) {
            image.setAttribute('src', params.imageUrl);
            image.setAttribute('alt', params.imageAlt);
            show(image);

            if (params.imageWidth) {
                image.setAttribute('width', params.imageWidth);
            } else {
                image.removeAttribute('width');
            }

            if (params.imageHeight) {
                image.setAttribute('height', params.imageHeight);
            } else {
                image.removeAttribute('height');
            }

            image.className = swalClasses.image;

            if (params.imageClass) {
                addClass(image, params.imageClass);
            }
        } else {
            hide(image);
        }
    };

    var renderProgressSteps = function renderProgressSteps(params) {
        var progressStepsContainer = getProgressSteps();
        var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep, 10);

        if (params.progressSteps && params.progressSteps.length) {
            show(progressStepsContainer);
            progressStepsContainer.innerHTML = '';

            if (currentProgressStep >= params.progressSteps.length) {
                warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
            }

            params.progressSteps.forEach(function (step, index) {
                var circle = document.createElement('li');
                addClass(circle, swalClasses.progresscircle);
                circle.innerHTML = step;

                if (index === currentProgressStep) {
                    addClass(circle, swalClasses.activeprogressstep);
                }

                progressStepsContainer.appendChild(circle);

                if (index !== params.progressSteps.length - 1) {
                    var line = document.createElement('li');
                    addClass(line, swalClasses.progressline);

                    if (params.progressStepsDistance) {
                        line.style.width = params.progressStepsDistance;
                    }

                    progressStepsContainer.appendChild(line);
                }
            });
        } else {
            hide(progressStepsContainer);
        }
    };

    var renderTitle = function renderTitle(params) {
        var title = getTitle();

        if (params.titleText) {
            title.innerText = params.titleText;
        } else if (params.title) {
            if (typeof params.title === 'string') {
                params.title = params.title.split('\n').join('<br />');
            }

            parseHtmlToContainer(params.title, title);
        }
    };

    var fixScrollbar = function fixScrollbar() {
        // for queues, do not do this more than once
        if (states.previousBodyPadding !== null) {
            return;
        } // if the body has overflow


        if (document.body.scrollHeight > window.innerHeight) {
            // add padding so the content doesn't shift after removal of scrollbar
            states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
            document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
        }
    };
    var undoScrollbar = function undoScrollbar() {
        if (states.previousBodyPadding !== null) {
            document.body.style.paddingRight = states.previousBodyPadding;
            states.previousBodyPadding = null;
        }
    };

    /* istanbul ignore next */

    var iOSfix = function iOSfix() {
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
            var offset = document.body.scrollTop;
            document.body.style.top = offset * -1 + 'px';
            addClass(document.body, swalClasses.iosfix);
        }
    };
    /* istanbul ignore next */

    var undoIOSfix = function undoIOSfix() {
        if (hasClass(document.body, swalClasses.iosfix)) {
            var offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = '';
            document.body.scrollTop = offset * -1;
        }
    };

    var isIE11 = function isIE11() {
        return !!window.MSInputMethodContext && !!document.documentMode;
    }; // Fix IE11 centering sweetalert2/issues/933

    /* istanbul ignore next */

    var fixVerticalPositionIE = function fixVerticalPositionIE() {
        var container = getContainer();
        var popup = getPopup();
        container.style.removeProperty('align-items');

        if (popup.offsetTop < 0) {
            container.style.alignItems = 'flex-start';
        }
    };
    /* istanbul ignore next */

    var IEfix = function IEfix() {
        if (typeof window !== 'undefined' && isIE11()) {
            fixVerticalPositionIE();
            window.addEventListener('resize', fixVerticalPositionIE);
        }
    };
    /* istanbul ignore next */

    var undoIEfix = function undoIEfix() {
        if (typeof window !== 'undefined' && isIE11()) {
            window.removeEventListener('resize', fixVerticalPositionIE);
        }
    };

    // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
    // elements not within the active modal dialog will not be surfaced if a user opens a screen
    // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

    var setAriaHidden = function setAriaHidden() {
        var bodyChildren = toArray(document.body.children);
        bodyChildren.forEach(function (el) {
            if (el === getContainer() || contains(el, getContainer())) {
                return;
            }

            if (el.hasAttribute('aria-hidden')) {
                el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
            }

            el.setAttribute('aria-hidden', 'true');
        });
    };
    var unsetAriaHidden = function unsetAriaHidden() {
        var bodyChildren = toArray(document.body.children);
        bodyChildren.forEach(function (el) {
            if (el.hasAttribute('data-previous-aria-hidden')) {
                el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
                el.removeAttribute('data-previous-aria-hidden');
            } else {
                el.removeAttribute('aria-hidden');
            }
        });
    };

    var RESTORE_FOCUS_TIMEOUT = 100;

    var globalState = {};
    var restoreActiveElement = function restoreActiveElement() {
        return new Promise(function (resolve) {
            var x = window.scrollX;
            var y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(function () {
                if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
                    globalState.previousActiveElement.focus();
                    globalState.previousActiveElement = null;
                } else if (document.body) {
                    document.body.focus();
                }

                resolve();
            }, RESTORE_FOCUS_TIMEOUT); // issues/900

            if (typeof x !== 'undefined' && typeof y !== 'undefined') {
                // IE doesn't have scrollX/scrollY support
                window.scrollTo(x, y);
            }
        });
    };

    /*
     * Global function to close sweetAlert
     */

    var close = function close(onClose, onAfterClose) {
        var container = getContainer();
        var popup = getPopup();

        if (!popup) {
            return;
        }

        if (onClose !== null && typeof onClose === 'function') {
            onClose(popup);
        }

        removeClass(popup, swalClasses.show);
        addClass(popup, swalClasses.hide);

        var removePopupAndResetState = function removePopupAndResetState() {
            if (!isToast()) {
                restoreActiveElement().then(function () {
                    return triggerOnAfterClose(onAfterClose);
                });
                globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
                    capture: globalState.keydownListenerCapture
                });
                globalState.keydownHandlerAdded = false;
            } else {
                triggerOnAfterClose(onAfterClose);
            }

            if (container.parentNode) {
                container.parentNode.removeChild(container);
            }

            removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);

            if (isModal()) {
                undoScrollbar();
                undoIOSfix();
                undoIEfix();
                unsetAriaHidden();
            }
        }; // If animation is supported, animate


        if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
            popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
                popup.removeEventListener(animationEndEvent, swalCloseEventFinished);

                if (hasClass(popup, swalClasses.hide)) {
                    removePopupAndResetState();
                }
            });
        } else {
            // Otherwise, remove immediately
            removePopupAndResetState();
        }
    };

    var triggerOnAfterClose = function triggerOnAfterClose(onAfterClose) {
        if (onAfterClose !== null && typeof onAfterClose === 'function') {
            setTimeout(function () {
                onAfterClose();
            });
        }
    };

    /*
     * Global function to determine if swal2 popup is shown
     */

    var isVisible$1 = function isVisible() {
        return !!getPopup();
    };
    /*
     * Global function to click 'Confirm' button
     */

    var clickConfirm = function clickConfirm() {
        return getConfirmButton().click();
    };
    /*
     * Global function to click 'Cancel' button
     */

    var clickCancel = function clickCancel() {
        return getCancelButton().click();
    };

    function fire() {
        var Swal = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _construct(Swal, args);
    }

    /**
     * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
     * @param ParentSwal
     * @returns {NoNewKeywordSwal}
     */
    function withNoNewKeyword(ParentSwal) {
        var NoNewKeywordSwal = function NoNewKeywordSwal() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (!(this instanceof NoNewKeywordSwal)) {
                return _construct(NoNewKeywordSwal, args);
            }

            Object.getPrototypeOf(NoNewKeywordSwal).apply(this, args);
        };

        NoNewKeywordSwal.prototype = _extends(Object.create(ParentSwal.prototype), {
            constructor: NoNewKeywordSwal
        });

        if (typeof Object.setPrototypeOf === 'function') {
            Object.setPrototypeOf(NoNewKeywordSwal, ParentSwal);
        } else {
            // Android 4.4

            /* istanbul ignore next */
            // eslint-disable-next-line
            NoNewKeywordSwal.__proto__ = ParentSwal;
        }

        return NoNewKeywordSwal;
    }

    var defaultParams = {
        title: '',
        titleText: '',
        text: '',
        html: '',
        footer: '',
        type: null,
        toast: false,
        customClass: '',
        customContainerClass: '',
        target: 'body',
        backdrop: true,
        animation: true,
        heightAuto: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        keydownListenerCapture: false,
        showConfirmButton: true,
        showCancelButton: false,
        preConfirm: null,
        confirmButtonText: 'OK',
        confirmButtonAriaLabel: '',
        confirmButtonColor: null,
        confirmButtonClass: null,
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: '',
        cancelButtonColor: null,
        cancelButtonClass: null,
        buttonsStyling: true,
        reverseButtons: false,
        focusConfirm: true,
        focusCancel: false,
        showCloseButton: false,
        closeButtonAriaLabel: 'Close this dialog',
        showLoaderOnConfirm: false,
        imageUrl: null,
        imageWidth: null,
        imageHeight: null,
        imageAlt: '',
        imageClass: null,
        timer: null,
        width: null,
        padding: null,
        background: null,
        input: null,
        inputPlaceholder: '',
        inputValue: '',
        inputOptions: {},
        inputAutoTrim: true,
        inputClass: null,
        inputAttributes: {},
        inputValidator: null,
        validationMessage: null,
        grow: false,
        position: 'center',
        progressSteps: [],
        currentProgressStep: null,
        progressStepsDistance: null,
        onBeforeOpen: null,
        onAfterClose: null,
        onOpen: null,
        onClose: null,
        useRejections: false,
        expectRejections: false
    };
    var deprecatedParams = ['useRejections', 'expectRejections', 'extraParams'];
    var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
    /**
     * Is valid parameter
     * @param {String} paramName
     */

    var isValidParameter = function isValidParameter(paramName) {
        return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
    };
    /**
     * Is deprecated parameter
     * @param {String} paramName
     */

    var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
        return deprecatedParams.indexOf(paramName) !== -1;
    };
    /**
     * Show relevant warnings for given params
     *
     * @param params
     */

    var showWarningsForParams = function showWarningsForParams(params) {
        for (var param in params) {
            if (!isValidParameter(param)) {
                warn("Unknown parameter \"".concat(param, "\""));
            }

            if (params.toast && toastIncompatibleParams.indexOf(param) !== -1) {
                warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
            }

            if (isDeprecatedParameter(param)) {
                warnOnce("The parameter \"".concat(param, "\" is deprecated and will be removed in the next major release."));
            }
        }
    };

    var deprecationWarning = "\"setDefaults\" & \"resetDefaults\" methods are deprecated in favor of \"mixin\" method and will be removed in the next major release. For new projects, use \"mixin\". For past projects already using \"setDefaults\", support will be provided through an additional package.";
    var defaults = {};
    function withGlobalDefaults(ParentSwal) {
        var SwalWithGlobalDefaults =
        /*#__PURE__*/
        function (_ParentSwal) {
            _inherits(SwalWithGlobalDefaults, _ParentSwal);

            function SwalWithGlobalDefaults() {
                _classCallCheck(this, SwalWithGlobalDefaults);

                return _possibleConstructorReturn(this, _getPrototypeOf(SwalWithGlobalDefaults).apply(this, arguments));
            }

            _createClass(SwalWithGlobalDefaults, [{
                key: "_main",
                value: function _main(params) {
                    return _get(_getPrototypeOf(SwalWithGlobalDefaults.prototype), "_main", this).call(this, _extends({}, defaults, params));
                }
            }], [{
                key: "setDefaults",
                value: function setDefaults(params) {
                    warnOnce(deprecationWarning);

                    if (!params || _typeof(params) !== 'object') {
                        throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');
                    }

                    showWarningsForParams(params); // assign valid params from `params` to `defaults`

                    Object.keys(params).forEach(function (param) {
                        if (ParentSwal.isValidParameter(param)) {
                            defaults[param] = params[param];
                        }
                    });
                }
            }, {
                key: "resetDefaults",
                value: function resetDefaults() {
                    warnOnce(deprecationWarning);
                    defaults = {};
                }
            }]);

            return SwalWithGlobalDefaults;
        }(ParentSwal); // Set default params if `window._swalDefaults` is an object


        if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
            SwalWithGlobalDefaults.setDefaults(window._swalDefaults);
        }

        return SwalWithGlobalDefaults;
    }

    /**
     * Returns an extended version of `Swal` containing `params` as defaults.
     * Useful for reusing Swal configuration.
     *
     * For example:
     *
     * Before:
     * const textPromptOptions = { input: 'text', showCancelButton: true }
     * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
     * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
     *
     * After:
     * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
     * const {value: firstName} = await TextPrompt('What is your first name?')
     * const {value: lastName} = await TextPrompt('What is your last name?')
     *
     * @param mixinParams
     */

    function mixin(mixinParams) {
        return withNoNewKeyword(
        /*#__PURE__*/
        function (_this) {
            _inherits(MixinSwal, _this);

            function MixinSwal() {
                _classCallCheck(this, MixinSwal);

                return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
            }

            _createClass(MixinSwal, [{
                key: "_main",
                value: function _main(params) {
                    return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
                }
            }]);

            return MixinSwal;
        }(this));
    }

    // private global state for the queue feature
    var currentSteps = [];
    /*
     * Global function for chaining sweetAlert popups
     */

    var queue = function queue(steps) {
        var swal = this;
        currentSteps = steps;

        var resetQueue = function resetQueue() {
            currentSteps = [];
            document.body.removeAttribute('data-swal2-queue-step');
        };

        var queueResult = [];
        return new Promise(function (resolve) {
            (function step(i, callback) {
                if (i < currentSteps.length) {
                    document.body.setAttribute('data-swal2-queue-step', i);
                    swal(currentSteps[i]).then(function (result) {
                        if (typeof result.value !== 'undefined') {
                            queueResult.push(result.value);
                            step(i + 1, callback);
                        } else {
                            resetQueue();
                            resolve({
                                dismiss: result.dismiss
                            });
                        }
                    });
                } else {
                    resetQueue();
                    resolve({
                        value: queueResult
                    });
                }
            })(0);
        });
    };
    /*
     * Global function for getting the index of current popup in queue
     */

    var getQueueStep = function getQueueStep() {
        return document.body.getAttribute('data-swal2-queue-step');
    };
    /*
     * Global function for inserting a popup to the queue
     */

    var insertQueueStep = function insertQueueStep(step, index) {
        if (index && index < currentSteps.length) {
            return currentSteps.splice(index, 0, step);
        }

        return currentSteps.push(step);
    };
    /*
     * Global function for deleting a popup from the queue
     */

    var deleteQueueStep = function deleteQueueStep(index) {
        if (typeof currentSteps[index] !== 'undefined') {
            currentSteps.splice(index, 1);
        }
    };

    /**
     * Show spinner instead of Confirm button and disable Cancel button
     */

    var showLoading = function showLoading() {
        var popup = getPopup();

        if (!popup) {
            Swal('');
        }

        popup = getPopup();
        var actions = getActions();
        var confirmButton = getConfirmButton();
        var cancelButton = getCancelButton();
        show(actions);
        show(confirmButton);
        addClass([popup, actions], swalClasses.loading);
        confirmButton.disabled = true;
        cancelButton.disabled = true;
        popup.setAttribute('data-loading', true);
        popup.setAttribute('aria-busy', true);
        popup.focus();
    };

    /**
     * If `timer` parameter is set, returns number of milliseconds of timer remained.
     * Otherwise, returns undefined.
     */

    var getTimerLeft = function getTimerLeft() {
        return globalState.timeout && globalState.timeout.getTimerLeft();
    };
    /**
     * Stop timer. Returns number of milliseconds of timer remained.
     * If `timer` parameter isn't set, returns undefined.
     */

    var stopTimer = function stopTimer() {
        return globalState.timeout && globalState.timeout.stop();
    };
    /**
     * Resume timer. Returns number of milliseconds of timer remained.
     * If `timer` parameter isn't set, returns undefined.
     */

    var resumeTimer = function resumeTimer() {
        return globalState.timeout && globalState.timeout.start();
    };
    /**
     * Resume timer. Returns number of milliseconds of timer remained.
     * If `timer` parameter isn't set, returns undefined.
     */

    var toggleTimer = function toggleTimer() {
        var timer = globalState.timeout;
        return timer && (timer.running ? timer.stop() : timer.start());
    };
    /**
     * Increase timer. Returns number of milliseconds of an updated timer.
     * If `timer` parameter isn't set, returns undefined.
     */

    var increaseTimer = function increaseTimer(n) {
        return globalState.timeout && globalState.timeout.increase(n);
    };
    /**
     * Check if timer is running. Returns true if timer is running
     * or false if timer is paused or stopped.
     * If `timer` parameter isn't set, returns undefined
     */

    var isTimerRunning = function isTimerRunning() {
        return globalState.timeout && globalState.timeout.isRunning();
    };

    var staticMethods = Object.freeze({
        isValidParameter: isValidParameter,
        isDeprecatedParameter: isDeprecatedParameter,
        argsToParams: argsToParams,
        adaptInputValidator: adaptInputValidator,
        close: close,
        closePopup: close,
        closeModal: close,
        closeToast: close,
        isVisible: isVisible$1,
        clickConfirm: clickConfirm,
        clickCancel: clickCancel,
        getContainer: getContainer,
        getPopup: getPopup,
        getTitle: getTitle,
        getContent: getContent,
        getImage: getImage,
        getIcons: getIcons,
        getCloseButton: getCloseButton,
        getButtonsWrapper: getButtonsWrapper,
        getActions: getActions,
        getConfirmButton: getConfirmButton,
        getCancelButton: getCancelButton,
        getFooter: getFooter,
        getFocusableElements: getFocusableElements,
        getValidationMessage: getValidationMessage,
        isLoading: isLoading,
        fire: fire,
        mixin: mixin,
        queue: queue,
        getQueueStep: getQueueStep,
        insertQueueStep: insertQueueStep,
        deleteQueueStep: deleteQueueStep,
        showLoading: showLoading,
        enableLoading: showLoading,
        getTimerLeft: getTimerLeft,
        stopTimer: stopTimer,
        resumeTimer: resumeTimer,
        toggleTimer: toggleTimer,
        increaseTimer: increaseTimer,
        isTimerRunning: isTimerRunning
    });

    // https://github.com/Riim/symbol-polyfill/blob/master/index.js

    /* istanbul ignore next */
    var _Symbol = typeof Symbol === 'function' ? Symbol : function () {
        var idCounter = 0;

        function _Symbol(key) {
            return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + ++idCounter + '__';
        }

        _Symbol.iterator = _Symbol('Symbol.iterator');
        return _Symbol;
    }();

    // WeakMap polyfill, needed for Android 4.4
    // Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
    // http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html
    /* istanbul ignore next */

    var WeakMap$1 = typeof WeakMap === 'function' ? WeakMap : function (s, dP, hOP) {
        function WeakMap() {
            dP(this, s, {
                value: _Symbol('WeakMap')
            });
        }

        WeakMap.prototype = {
            'delete': function del(o) {
                delete o[this[s]];
            },
            get: function get(o) {
                return o[this[s]];
            },
            has: function has(o) {
                return hOP.call(o, this[s]);
            },
            set: function set(o, v) {
                dP(o, this[s], {
                    configurable: true,
                    value: v
                });
            }
        };
        return WeakMap;
    }(_Symbol('WeakMap'), Object.defineProperty, {}.hasOwnProperty);

    /**
     * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
     * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
     * This is the approach that Babel will probably take to implement private methods/fields
     *   https://github.com/tc39/proposal-private-methods
     *   https://github.com/babel/babel/pull/7555
     * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
     *   then we can use that language feature.
     */
    var privateProps = {
        promise: new WeakMap$1(),
        innerParams: new WeakMap$1(),
        domCache: new WeakMap$1()
    };

    /**
     * Enables buttons and hide loader.
     */

    function hideLoading() {
        var innerParams = privateProps.innerParams.get(this);
        var domCache = privateProps.domCache.get(this);

        if (!innerParams.showConfirmButton) {
            hide(domCache.confirmButton);

            if (!innerParams.showCancelButton) {
                hide(domCache.actions);
            }
        }

        removeClass([domCache.popup, domCache.actions], swalClasses.loading);
        domCache.popup.removeAttribute('aria-busy');
        domCache.popup.removeAttribute('data-loading');
        domCache.confirmButton.disabled = false;
        domCache.cancelButton.disabled = false;
    }

    function getInput(inputType) {
        var innerParams = privateProps.innerParams.get(this);
        var domCache = privateProps.domCache.get(this);
        inputType = inputType || innerParams.input;

        if (!inputType) {
            return null;
        }

        switch (inputType) {
            case 'select':
            case 'textarea':
            case 'file':
                return getChildByClass(domCache.content, swalClasses[inputType]);

            case 'checkbox':
                return domCache.popup.querySelector(".".concat(swalClasses.checkbox, " input"));

            case 'radio':
                return domCache.popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || domCache.popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

            case 'range':
                return domCache.popup.querySelector(".".concat(swalClasses.range, " input"));

            default:
                return getChildByClass(domCache.content, swalClasses.input);
        }
    }

    function enableButtons() {
        var domCache = privateProps.domCache.get(this);
        domCache.confirmButton.disabled = false;
        domCache.cancelButton.disabled = false;
    }
    function disableButtons() {
        var domCache = privateProps.domCache.get(this);
        domCache.confirmButton.disabled = true;
        domCache.cancelButton.disabled = true;
    }
    function enableConfirmButton() {
        var domCache = privateProps.domCache.get(this);
        domCache.confirmButton.disabled = false;
    }
    function disableConfirmButton() {
        var domCache = privateProps.domCache.get(this);
        domCache.confirmButton.disabled = true;
    }
    function enableInput() {
        var input = this.getInput();

        if (!input) {
            return false;
        }

        if (input.type === 'radio') {
            var radiosContainer = input.parentNode.parentNode;
            var radios = radiosContainer.querySelectorAll('input');

            for (var i = 0; i < radios.length; i++) {
                radios[i].disabled = false;
            }
        } else {
            input.disabled = false;
        }
    }
    function disableInput() {
        var input = this.getInput();

        if (!input) {
            return false;
        }

        if (input && input.type === 'radio') {
            var radiosContainer = input.parentNode.parentNode;
            var radios = radiosContainer.querySelectorAll('input');

            for (var i = 0; i < radios.length; i++) {
                radios[i].disabled = true;
            }
        } else {
            input.disabled = true;
        }
    }

    function showValidationMessage(error$$1) {
        var domCache = privateProps.domCache.get(this);
        domCache.validationMessage.innerHTML = error$$1;
        var popupComputedStyle = window.getComputedStyle(domCache.popup);
        domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
        domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
        show(domCache.validationMessage);
        var input = this.getInput();

        if (input) {
            input.setAttribute('aria-invalid', true);
            input.setAttribute('aria-describedBy', swalClasses['validation-message']);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
        }
    } // Hide block with validation message

    function resetValidationMessage() {
        var domCache = privateProps.domCache.get(this);

        if (domCache.validationMessage) {
            hide(domCache.validationMessage);
        }

        var input = this.getInput();

        if (input) {
            input.removeAttribute('aria-invalid');
            input.removeAttribute('aria-describedBy');
            removeClass(input, swalClasses.inputerror);
        }
    } // @deprecated

    /* istanbul ignore next */

    function resetValidationError() {
        warnOnce("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead");
        resetValidationMessage.bind(this)();
    } // @deprecated

    /* istanbul ignore next */

    function showValidationError(error$$1) {
        warnOnce("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead");
        showValidationMessage.bind(this)(error$$1);
    }

    function getProgressSteps$1() {
        var innerParams = privateProps.innerParams.get(this);
        return innerParams.progressSteps;
    }
    function setProgressSteps(progressSteps) {
        var innerParams = privateProps.innerParams.get(this);

        var updatedParams = _extends({}, innerParams, {
            progressSteps: progressSteps
        });

        privateProps.innerParams.set(this, updatedParams);
        renderProgressSteps(updatedParams);
    }
    function showProgressSteps() {
        var domCache = privateProps.domCache.get(this);
        show(domCache.progressSteps);
    }
    function hideProgressSteps() {
        var domCache = privateProps.domCache.get(this);
        hide(domCache.progressSteps);
    }

    var Timer = function Timer(callback, delay) {
        _classCallCheck(this, Timer);

        var id,
            started,
            remaining = delay;
        this.running = false;

        this.start = function () {
            if (!this.running) {
                this.running = true;
                started = new Date();
                id = setTimeout(callback, remaining);
            }

            return remaining;
        };

        this.stop = function () {
            if (this.running) {
                this.running = false;
                clearTimeout(id);
                remaining -= new Date() - started;
            }

            return remaining;
        };

        this.increase = function (n) {
            var running = this.running;

            if (running) {
                this.stop();
            }

            remaining += n;

            if (running) {
                this.start();
            }

            return remaining;
        };

        this.getTimerLeft = function () {
            if (this.running) {
                this.stop();
                this.start();
            }

            return remaining;
        };

        this.isRunning = function () {
            return this.running;
        };

        this.start();
    };

    var defaultInputValidators = {
        email: function email(string, extraParams) {
            return (/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid email address')
            );
        },
        url: function url(string, extraParams) {
            // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
            return (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid URL')
            );
        }
    };

    /**
     * Set type, text and actions on popup
     *
     * @param params
     * @returns {boolean}
     */

    function setParameters(params) {
        // Use default `inputValidator` for supported input types if not provided
        if (!params.inputValidator) {
            Object.keys(defaultInputValidators).forEach(function (key) {
                if (params.input === key) {
                    params.inputValidator = params.expectRejections ? defaultInputValidators[key] : Swal.adaptInputValidator(defaultInputValidators[key]);
                }
            });
        } // params.extraParams is @deprecated


        if (params.validationMessage) {
            if (_typeof(params.extraParams) !== 'object') {
                params.extraParams = {};
            }

            params.extraParams.validationMessage = params.validationMessage;
        } // Determine if the custom target element is valid


        if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = 'body';
        } // Animation


        if (typeof params.animation === 'function') {
            params.animation = params.animation.call();
        }

        var popup;
        var oldPopup = getPopup();
        var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target; // If the model target has changed, refresh the popup

        if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
            popup = init(params);
        } else {
            popup = oldPopup || init(params);
        } // Set popup width


        if (params.width) {
            popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
        } // Set popup padding


        if (params.padding) {
            popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
        } // Set popup background


        if (params.background) {
            popup.style.background = params.background;
        }

        var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
        var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

        for (var i = 0; i < successIconParts.length; i++) {
            successIconParts[i].style.backgroundColor = popupBackgroundColor;
        }

        var container = getContainer();
        var closeButton = getCloseButton();
        var footer = getFooter(); // Title

        renderTitle(params); // Content

        renderContent(params); // Backdrop

        if (typeof params.backdrop === 'string') {
            getContainer().style.background = params.backdrop;
        } else if (!params.backdrop) {
            addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
        }

        if (!params.backdrop && params.allowOutsideClick) {
            warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        } // Position


        if (params.position in swalClasses) {
            addClass(container, swalClasses[params.position]);
        } else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
        } // Grow


        if (params.grow && typeof params.grow === 'string') {
            var growClass = 'grow-' + params.grow;

            if (growClass in swalClasses) {
                addClass(container, swalClasses[growClass]);
            }
        } // Close button


        if (params.showCloseButton) {
            closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
            show(closeButton);
        } else {
            hide(closeButton);
        } // Default Class


        popup.className = swalClasses.popup;

        if (params.toast) {
            addClass([document.documentElement, document.body], swalClasses['toast-shown']);
            addClass(popup, swalClasses.toast);
        } else {
            addClass(popup, swalClasses.modal);
        } // Custom Class


        if (params.customClass) {
            addClass(popup, params.customClass);
        }

        if (params.customContainerClass) {
            addClass(container, params.customContainerClass);
        } // Progress steps


        renderProgressSteps(params); // Icon

        renderIcon(params); // Image

        renderImage(params); // Actions (buttons)

        renderActions(params); // Footer

        parseHtmlToContainer(params.footer, footer); // CSS animation

        if (params.animation === true) {
            removeClass(popup, swalClasses.noanimation);
        } else {
            addClass(popup, swalClasses.noanimation);
        } // showLoaderOnConfirm && preConfirm


        if (params.showLoaderOnConfirm && !params.preConfirm) {
            warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
        }
    }

    /**
     * Open popup, add necessary classes and styles, fix scrollbar
     *
     * @param {Array} params
     */

    var openPopup = function openPopup(params) {
        var container = getContainer();
        var popup = getPopup();

        if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
            params.onBeforeOpen(popup);
        }

        if (params.animation) {
            addClass(popup, swalClasses.show);
            addClass(container, swalClasses.fade);
            removeClass(popup, swalClasses.hide);
        } else {
            removeClass(popup, swalClasses.fade);
        }

        show(popup); // scrolling is 'hidden' until animation is done, after that 'auto'

        container.style.overflowY = 'hidden';

        if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
            popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
                popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
                container.style.overflowY = 'auto';
            });
        } else {
            container.style.overflowY = 'auto';
        }

        addClass([document.documentElement, document.body, container], swalClasses.shown);

        if (params.heightAuto && params.backdrop && !params.toast) {
            addClass([document.documentElement, document.body], swalClasses['height-auto']);
        }

        if (isModal()) {
            fixScrollbar();
            iOSfix();
            IEfix();
            setAriaHidden(); // sweetalert2/issues/1247

            setTimeout(function () {
                container.scrollTop = 0;
            });
        }

        if (!isToast() && !globalState.previousActiveElement) {
            globalState.previousActiveElement = document.activeElement;
        }

        if (params.onOpen !== null && typeof params.onOpen === 'function') {
            setTimeout(function () {
                params.onOpen(popup);
            });
        }
    };

    function _main(userParams) {
        var _this = this;

        showWarningsForParams(userParams);

        var innerParams = _extends({}, defaultParams, userParams);

        setParameters(innerParams);
        Object.freeze(innerParams);
        privateProps.innerParams.set(this, innerParams); // clear the previous timer

        if (globalState.timeout) {
            globalState.timeout.stop();
            delete globalState.timeout;
        } // clear the restore focus timeout


        clearTimeout(globalState.restoreFocusTimeout);
        var domCache = {
            popup: getPopup(),
            container: getContainer(),
            content: getContent(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            cancelButton: getCancelButton(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
        };
        privateProps.domCache.set(this, domCache);
        var constructor = this.constructor;
        return new Promise(function (resolve, reject) {
            // functions to handle all resolving/rejecting/settling
            var succeedWith = function succeedWith(value) {
                constructor.closePopup(innerParams.onClose, innerParams.onAfterClose); // TODO: make closePopup an *instance* method

                if (innerParams.useRejections) {
                    resolve(value);
                } else {
                    resolve({
                        value: value
                    });
                }
            };

            var dismissWith = function dismissWith(dismiss) {
                constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);

                if (innerParams.useRejections) {
                    reject(dismiss);
                } else {
                    resolve({
                        dismiss: dismiss
                    });
                }
            };

            var errorWith = function errorWith(error$$1) {
                constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
                reject(error$$1);
            }; // Close on timer


            if (innerParams.timer) {
                globalState.timeout = new Timer(function () {
                    dismissWith('timer');
                    delete globalState.timeout;
                }, innerParams.timer);
            } // Get the value of the popup input


            var getInputValue = function getInputValue() {
                var input = _this.getInput();

                if (!input) {
                    return null;
                }

                switch (innerParams.input) {
                    case 'checkbox':
                        return input.checked ? 1 : 0;

                    case 'radio':
                        return input.checked ? input.value : null;

                    case 'file':
                        return input.files.length ? input.files[0] : null;

                    default:
                        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
                }
            }; // input autofocus


            if (innerParams.input) {
                setTimeout(function () {
                    var input = _this.getInput();

                    if (input) {
                        focusInput(input);
                    }
                }, 0);
            }

            var confirm = function confirm(value) {
                if (innerParams.showLoaderOnConfirm) {
                    constructor.showLoading(); // TODO: make showLoading an *instance* method
                }

                if (innerParams.preConfirm) {
                    _this.resetValidationMessage();

                    var preConfirmPromise = Promise.resolve().then(function () {
                        return innerParams.preConfirm(value, innerParams.extraParams);
                    });

                    if (innerParams.expectRejections) {
                        preConfirmPromise.then(function (preConfirmValue) {
                            return succeedWith(preConfirmValue || value);
                        }, function (validationMessage) {
                            _this.hideLoading();

                            if (validationMessage) {
                                _this.showValidationMessage(validationMessage);
                            }
                        });
                    } else {
                        preConfirmPromise.then(function (preConfirmValue) {
                            if (isVisible(domCache.validationMessage) || preConfirmValue === false) {
                                _this.hideLoading();
                            } else {
                                succeedWith(preConfirmValue || value);
                            }
                        }, function (error$$1) {
                            return errorWith(error$$1);
                        });
                    }
                } else {
                    succeedWith(value);
                }
            }; // Mouse interactions


            var onButtonEvent = function onButtonEvent(e) {
                var target = e.target;
                var confirmButton = domCache.confirmButton,
                    cancelButton = domCache.cancelButton;
                var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
                var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

                switch (e.type) {
                    case 'click':
                        // Clicked 'confirm'
                        if (targetedConfirm && constructor.isVisible()) {
                            _this.disableButtons();

                            if (innerParams.input) {
                                var inputValue = getInputValue();

                                if (innerParams.inputValidator) {
                                    _this.disableInput();

                                    var validationPromise = Promise.resolve().then(function () {
                                        return innerParams.inputValidator(inputValue, innerParams.extraParams);
                                    });

                                    if (innerParams.expectRejections) {
                                        validationPromise.then(function () {
                                            _this.enableButtons();

                                            _this.enableInput();

                                            confirm(inputValue);
                                        }, function (validationMessage) {
                                            _this.enableButtons();

                                            _this.enableInput();

                                            if (validationMessage) {
                                                _this.showValidationMessage(validationMessage);
                                            }
                                        });
                                    } else {
                                        validationPromise.then(function (validationMessage) {
                                            _this.enableButtons();

                                            _this.enableInput();

                                            if (validationMessage) {
                                                _this.showValidationMessage(validationMessage);
                                            } else {
                                                confirm(inputValue);
                                            }
                                        }, function (error$$1) {
                                            return errorWith(error$$1);
                                        });
                                    }
                                } else if (!_this.getInput().checkValidity()) {
                                    _this.enableButtons();

                                    _this.showValidationMessage(innerParams.validationMessage);
                                } else {
                                    confirm(inputValue);
                                }
                            } else {
                                confirm(true);
                            } // Clicked 'cancel'
                        } else if (targetedCancel && constructor.isVisible()) {
                            _this.disableButtons();

                            dismissWith(constructor.DismissReason.cancel);
                        }

                        break;

                    default:
                }
            };

            var buttons = domCache.popup.querySelectorAll('button');

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = onButtonEvent;
                buttons[i].onmouseover = onButtonEvent;
                buttons[i].onmouseout = onButtonEvent;
                buttons[i].onmousedown = onButtonEvent;
            } // Closing popup by close button


            domCache.closeButton.onclick = function () {
                dismissWith(constructor.DismissReason.close);
            };

            if (innerParams.toast) {
                // Closing popup by internal click
                domCache.popup.onclick = function () {
                    if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
                        return;
                    }

                    dismissWith(constructor.DismissReason.close);
                };
            } else {
                var ignoreOutsideClick = false; // Ignore click events that had mousedown on the popup but mouseup on the container
                // This can happen when the user drags a slider

                domCache.popup.onmousedown = function () {
                    domCache.container.onmouseup = function (e) {
                        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
                        // have any other direct children aside of the popup

                        if (e.target === domCache.container) {
                            ignoreOutsideClick = true;
                        }
                    };
                }; // Ignore click events that had mousedown on the container but mouseup on the popup


                domCache.container.onmousedown = function () {
                    domCache.popup.onmouseup = function (e) {
                        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

                        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
                            ignoreOutsideClick = true;
                        }
                    };
                };

                domCache.container.onclick = function (e) {
                    if (ignoreOutsideClick) {
                        ignoreOutsideClick = false;
                        return;
                    }

                    if (e.target !== domCache.container) {
                        return;
                    }

                    if (callIfFunction(innerParams.allowOutsideClick)) {
                        dismissWith(constructor.DismissReason.backdrop);
                    }
                };
            } // Reverse buttons (Confirm on the right side)


            if (innerParams.reverseButtons) {
                domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
            } else {
                domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
            } // Focus handling


            var setFocus = function setFocus(index, increment) {
                var focusableElements = getFocusableElements(innerParams.focusCancel); // search for visible elements and select the next possible match

                for (var _i = 0; _i < focusableElements.length; _i++) {
                    index = index + increment; // rollover to first item

                    if (index === focusableElements.length) {
                        index = 0; // go to last item
                    } else if (index === -1) {
                        index = focusableElements.length - 1;
                    }

                    return focusableElements[index].focus();
                } // no visible focusable elements, focus the popup


                domCache.popup.focus();
            };

            var keydownHandler = function keydownHandler(e, innerParams) {
                if (innerParams.stopKeydownPropagation) {
                    e.stopPropagation();
                }

                var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
                ];

                if (e.key === 'Enter' && !e.isComposing) {
                    if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
                        if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
                            return; // do not submit
                        }

                        constructor.clickConfirm();
                        e.preventDefault();
                    } // TAB
                } else if (e.key === 'Tab') {
                    var targetElement = e.target;
                    var focusableElements = getFocusableElements(innerParams.focusCancel);
                    var btnIndex = -1;

                    for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
                        if (targetElement === focusableElements[_i2]) {
                            btnIndex = _i2;
                            break;
                        }
                    }

                    if (!e.shiftKey) {
                        // Cycle to the next button
                        setFocus(btnIndex, 1);
                    } else {
                        // Cycle to the prev button
                        setFocus(btnIndex, -1);
                    }

                    e.stopPropagation();
                    e.preventDefault(); // ARROWS - switch focus between buttons
                } else if (arrowKeys.indexOf(e.key) !== -1) {
                    // focus Cancel button if Confirm button is currently focused
                    if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
                        domCache.cancelButton.focus(); // and vice versa
                    } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
                        domCache.confirmButton.focus();
                    } // ESC
                } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
                    e.preventDefault();
                    dismissWith(constructor.DismissReason.esc);
                }
            };

            if (globalState.keydownHandlerAdded) {
                globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
                    capture: globalState.keydownListenerCapture
                });
                globalState.keydownHandlerAdded = false;
            }

            if (!innerParams.toast) {
                globalState.keydownHandler = function (e) {
                    return keydownHandler(e, innerParams);
                };

                globalState.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
                globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
                globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
                    capture: globalState.keydownListenerCapture
                });
                globalState.keydownHandlerAdded = true;
            }

            _this.enableButtons();

            _this.hideLoading();

            _this.resetValidationMessage();

            if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
                addClass(document.body, swalClasses['toast-column']);
            } else {
                removeClass(document.body, swalClasses['toast-column']);
            } // inputs


            var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

            var setInputPlaceholder = function setInputPlaceholder(input) {
                if (!input.placeholder || innerParams.inputPlaceholder) {
                    input.placeholder = innerParams.inputPlaceholder;
                }
            };

            var input;

            for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
                var inputClass = swalClasses[inputTypes[_i3]];
                var inputContainer = getChildByClass(domCache.content, inputClass);
                input = _this.getInput(inputTypes[_i3]); // set attributes

                if (input) {
                    for (var j in input.attributes) {
                        if (input.attributes.hasOwnProperty(j)) {
                            var attrName = input.attributes[j].name;

                            if (attrName !== 'type' && attrName !== 'value') {
                                input.removeAttribute(attrName);
                            }
                        }
                    }

                    for (var attr in innerParams.inputAttributes) {
                        // Do not set a placeholder for <input type="range">
                        // it'll crash Edge, #1298
                        if (inputTypes[_i3] === 'range' && attr === 'placeholder') {
                            continue;
                        }

                        input.setAttribute(attr, innerParams.inputAttributes[attr]);
                    }
                } // set class


                inputContainer.className = inputClass;

                if (innerParams.inputClass) {
                    addClass(inputContainer, innerParams.inputClass);
                }

                hide(inputContainer);
            }

            var populateInputOptions;

            switch (innerParams.input) {
                case 'text':
                case 'email':
                case 'password':
                case 'number':
                case 'tel':
                case 'url':
                    {
                        input = getChildByClass(domCache.content, swalClasses.input);

                        if (typeof innerParams.inputValue === 'string' || typeof innerParams.inputValue === 'number') {
                            input.value = innerParams.inputValue;
                        } else if (!isPromise(innerParams.inputValue)) {
                            warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(innerParams.inputValue), "\""));
                        }

                        setInputPlaceholder(input);
                        input.type = innerParams.input;
                        show(input);
                        break;
                    }

                case 'file':
                    {
                        input = getChildByClass(domCache.content, swalClasses.file);
                        setInputPlaceholder(input);
                        input.type = innerParams.input;
                        show(input);
                        break;
                    }

                case 'range':
                    {
                        var range = getChildByClass(domCache.content, swalClasses.range);
                        var rangeInput = range.querySelector('input');
                        var rangeOutput = range.querySelector('output');
                        rangeInput.value = innerParams.inputValue;
                        rangeInput.type = innerParams.input;
                        rangeOutput.value = innerParams.inputValue;
                        show(range);
                        break;
                    }

                case 'select':
                    {
                        var select = getChildByClass(domCache.content, swalClasses.select);
                        select.innerHTML = '';

                        if (innerParams.inputPlaceholder) {
                            var placeholder = document.createElement('option');
                            placeholder.innerHTML = innerParams.inputPlaceholder;
                            placeholder.value = '';
                            placeholder.disabled = true;
                            placeholder.selected = true;
                            select.appendChild(placeholder);
                        }

                        populateInputOptions = function populateInputOptions(inputOptions) {
                            inputOptions.forEach(function (inputOption) {
                                var optionValue = inputOption[0];
                                var optionLabel = inputOption[1];
                                var option = document.createElement('option');
                                option.value = optionValue;
                                option.innerHTML = optionLabel;

                                if (innerParams.inputValue.toString() === optionValue.toString()) {
                                    option.selected = true;
                                }

                                select.appendChild(option);
                            });
                            show(select);
                            select.focus();
                        };

                        break;
                    }

                case 'radio':
                    {
                        var radio = getChildByClass(domCache.content, swalClasses.radio);
                        radio.innerHTML = '';

                        populateInputOptions = function populateInputOptions(inputOptions) {
                            inputOptions.forEach(function (inputOption) {
                                var radioValue = inputOption[0];
                                var radioLabel = inputOption[1];
                                var radioInput = document.createElement('input');
                                var radioLabelElement = document.createElement('label');
                                radioInput.type = 'radio';
                                radioInput.name = swalClasses.radio;
                                radioInput.value = radioValue;

                                if (innerParams.inputValue.toString() === radioValue.toString()) {
                                    radioInput.checked = true;
                                }

                                var label = document.createElement('span');
                                label.innerHTML = radioLabel;
                                label.className = swalClasses.label;
                                radioLabelElement.appendChild(radioInput);
                                radioLabelElement.appendChild(label);
                                radio.appendChild(radioLabelElement);
                            });
                            show(radio);
                            var radios = radio.querySelectorAll('input');

                            if (radios.length) {
                                radios[0].focus();
                            }
                        };

                        break;
                    }

                case 'checkbox':
                    {
                        var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);

                        var checkboxInput = _this.getInput('checkbox');

                        checkboxInput.type = 'checkbox';
                        checkboxInput.value = 1;
                        checkboxInput.id = swalClasses.checkbox;
                        checkboxInput.checked = Boolean(innerParams.inputValue);
                        var label = checkbox.querySelector('span');
                        label.innerHTML = innerParams.inputPlaceholder;
                        show(checkbox);
                        break;
                    }

                case 'textarea':
                    {
                        var textarea = getChildByClass(domCache.content, swalClasses.textarea);
                        textarea.value = innerParams.inputValue;
                        setInputPlaceholder(textarea);
                        show(textarea);
                        break;
                    }

                case null:
                    {
                        break;
                    }

                default:
                    error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(innerParams.input, "\""));
                    break;
            }

            if (innerParams.input === 'select' || innerParams.input === 'radio') {
                var processInputOptions = function processInputOptions(inputOptions) {
                    return populateInputOptions(formatInputOptions(inputOptions));
                };

                if (isPromise(innerParams.inputOptions)) {
                    constructor.showLoading();
                    innerParams.inputOptions.then(function (inputOptions) {
                        _this.hideLoading();

                        processInputOptions(inputOptions);
                    });
                } else if (_typeof(innerParams.inputOptions) === 'object') {
                    processInputOptions(innerParams.inputOptions);
                } else {
                    error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(innerParams.inputOptions)));
                }
            } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isPromise(innerParams.inputValue)) {
                constructor.showLoading();
                hide(input);
                innerParams.inputValue.then(function (inputValue) {
                    input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
                    show(input);
                    input.focus();

                    _this.hideLoading();
                }).catch(function (err) {
                    error('Error in inputValue promise: ' + err);
                    input.value = '';
                    show(input);
                    input.focus();

                    _this.hideLoading();
                });
            }

            openPopup(innerParams);

            if (!innerParams.toast) {
                if (!callIfFunction(innerParams.allowEnterKey)) {
                    if (document.activeElement && typeof document.activeElement.blur === 'function') {
                        document.activeElement.blur();
                    }
                } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
                    domCache.cancelButton.focus();
                } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
                    domCache.confirmButton.focus();
                } else {
                    setFocus(-1, 1);
                }
            } // fix scroll


            domCache.container.scrollTop = 0;
        });
    }

    var instanceMethods = Object.freeze({
        hideLoading: hideLoading,
        disableLoading: hideLoading,
        getInput: getInput,
        enableButtons: enableButtons,
        disableButtons: disableButtons,
        enableConfirmButton: enableConfirmButton,
        disableConfirmButton: disableConfirmButton,
        enableInput: enableInput,
        disableInput: disableInput,
        showValidationMessage: showValidationMessage,
        resetValidationMessage: resetValidationMessage,
        resetValidationError: resetValidationError,
        showValidationError: showValidationError,
        getProgressSteps: getProgressSteps$1,
        setProgressSteps: setProgressSteps,
        showProgressSteps: showProgressSteps,
        hideProgressSteps: hideProgressSteps,
        _main: _main
    });

    var currentInstance; // SweetAlert constructor

    function SweetAlert() {
        // Prevent run in Node env

        /* istanbul ignore if */
        if (typeof window === 'undefined') {
            return;
        } // Check for the existence of Promise

        /* istanbul ignore if */

        if (typeof Promise === 'undefined') {
            error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
        }

        currentInstance = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var outerParams = Object.freeze(this.constructor.argsToParams(args));
        Object.defineProperties(this, {
            params: {
                value: outerParams,
                writable: false,
                enumerable: true
            }
        });

        var promise = this._main(this.params);

        privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    SweetAlert.prototype.then = function (onFulfilled, onRejected) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled, onRejected);
    };

    SweetAlert.prototype.catch = function (onRejected) {
        var promise = privateProps.promise.get(this);
        return promise.catch(onRejected);
    };

    SweetAlert.prototype.finally = function (onFinally) {
        var promise = privateProps.promise.get(this);
        return promise.finally(onFinally);
    }; // Assign instance methods from src/instanceMethods/*.js to prototype


    _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


    _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


    Object.keys(instanceMethods).forEach(function (key) {
        SweetAlert[key] = function () {
            if (currentInstance) {
                var _currentInstance;

                return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
            }
        };
    });
    SweetAlert.DismissReason = DismissReason;
    /* istanbul ignore next */

    SweetAlert.noop = function () {};

    var Swal = withNoNewKeyword(withGlobalDefaults(SweetAlert));
    Swal.default = Swal;

    return Swal;
});
if (typeof window !== 'undefined' && window.Sweetalert2) {
    window.Sweetalert2.version = '7.33.1';window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2;
}

/*************************
 * Croppie
 * Copyright 2019
 * Foliotek
 * Version: 2.6.4
 *************************/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        root.Croppie = factory();
    }
})(typeof self !== 'undefined' ? self : this, function () {

    /* Polyfills */
    if (typeof Promise !== 'function') {
        /*! promise-polyfill 3.1.0 */
        !function (a) {
            function b(a, b) {
                return function () {
                    a.apply(b, arguments);
                };
            }function c(a) {
                if ("object" !== _typeof2(this)) throw new TypeError("Promises must be constructed via new");if ("function" !== typeof a) throw new TypeError("not a function");this._state = null, this._value = null, this._deferreds = [], i(a, b(e, this), b(f, this));
            }function d(a) {
                var b = this;return null === this._state ? void this._deferreds.push(a) : void k(function () {
                    var c = b._state ? a.onFulfilled : a.onRejected;if (null === c) return void (b._state ? a.resolve : a.reject)(b._value);var d;try {
                        d = c(b._value);
                    } catch (e) {
                        return void a.reject(e);
                    }a.resolve(d);
                });
            }function e(a) {
                try {
                    if (a === this) throw new TypeError("A promise cannot be resolved with itself.");if (a && ("object" === (typeof a === "undefined" ? "undefined" : _typeof2(a)) || "function" === typeof a)) {
                        var c = a.then;if ("function" === typeof c) return void i(b(c, a), b(e, this), b(f, this));
                    }this._state = !0, this._value = a, g.call(this);
                } catch (d) {
                    f.call(this, d);
                }
            }function f(a) {
                this._state = !1, this._value = a, g.call(this);
            }function g() {
                for (var a = 0, b = this._deferreds.length; b > a; a++) {
                    d.call(this, this._deferreds[a]);
                }this._deferreds = null;
            }function h(a, b, c, d) {
                this.onFulfilled = "function" === typeof a ? a : null, this.onRejected = "function" === typeof b ? b : null, this.resolve = c, this.reject = d;
            }function i(a, b, c) {
                var d = !1;try {
                    a(function (a) {
                        d || (d = !0, b(a));
                    }, function (a) {
                        d || (d = !0, c(a));
                    });
                } catch (e) {
                    if (d) return;d = !0, c(e);
                }
            }var j = setTimeout,
                k = "function" === typeof setImmediate && setImmediate || function (a) {
                j(a, 1);
            },
                l = Array.isArray || function (a) {
                return "[object Array]" === Object.prototype.toString.call(a);
            };c.prototype["catch"] = function (a) {
                return this.then(null, a);
            }, c.prototype.then = function (a, b) {
                var e = this;return new c(function (c, f) {
                    d.call(e, new h(a, b, c, f));
                });
            }, c.all = function () {
                var a = Array.prototype.slice.call(1 === arguments.length && l(arguments[0]) ? arguments[0] : arguments);return new c(function (b, c) {
                    function d(f, g) {
                        try {
                            if (g && ("object" === (typeof g === "undefined" ? "undefined" : _typeof2(g)) || "function" === typeof g)) {
                                var h = g.then;if ("function" === typeof h) return void h.call(g, function (a) {
                                    d(f, a);
                                }, c);
                            }a[f] = g, 0 === --e && b(a);
                        } catch (i) {
                            c(i);
                        }
                    }if (0 === a.length) return b([]);for (var e = a.length, f = 0; f < a.length; f++) {
                        d(f, a[f]);
                    }
                });
            }, c.resolve = function (a) {
                return a && "object" === (typeof a === "undefined" ? "undefined" : _typeof2(a)) && a.constructor === c ? a : new c(function (b) {
                    b(a);
                });
            }, c.reject = function (a) {
                return new c(function (b, c) {
                    c(a);
                });
            }, c.race = function (a) {
                return new c(function (b, c) {
                    for (var d = 0, e = a.length; e > d; d++) {
                        a[d].then(b, c);
                    }
                });
            }, c._setImmediateFn = function (a) {
                k = a;
            }, "undefined" !== typeof module && module.exports ? module.exports = c : a.Promise || (a.Promise = c);
        }(this);
    }

    if (typeof window.CustomEvent !== "function") {
        (function () {
            function CustomEvent(event, params) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        })();
    }

    if (!HTMLCanvasElement.prototype.toBlob) {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function value(callback, type, quality) {
                var binStr = atob(this.toDataURL(type, quality).split(',')[1]),
                    len = binStr.length,
                    arr = new Uint8Array(len);

                for (var i = 0; i < len; i++) {
                    arr[i] = binStr.charCodeAt(i);
                }

                callback(new Blob([arr], { type: type || 'image/png' }));
            }
        });
    }
    /* End Polyfills */

    var cssPrefixes = ['Webkit', 'Moz', 'ms'],
        emptyStyles = document.createElement('div').style,
        EXIF_NORM = [1, 8, 3, 6],
        EXIF_FLIP = [2, 7, 4, 5],
        CSS_TRANS_ORG,
        CSS_TRANSFORM,
        CSS_USERSELECT;

    function vendorPrefix(prop) {
        if (prop in emptyStyles) {
            return prop;
        }

        var capProp = prop[0].toUpperCase() + prop.slice(1),
            i = cssPrefixes.length;

        while (i--) {
            prop = cssPrefixes[i] + capProp;
            if (prop in emptyStyles) {
                return prop;
            }
        }
    }

    CSS_TRANSFORM = vendorPrefix('transform');
    CSS_TRANS_ORG = vendorPrefix('transformOrigin');
    CSS_USERSELECT = vendorPrefix('userSelect');

    function getExifOffset(ornt, rotate) {
        var arr = EXIF_NORM.indexOf(ornt) > -1 ? EXIF_NORM : EXIF_FLIP,
            index = arr.indexOf(ornt),
            offset = rotate / 90 % arr.length; // 180 = 2%4 = 2 shift exif by 2 indexes

        return arr[(arr.length + index + offset % arr.length) % arr.length];
    }

    // Credits to : Andrew Dupont - http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    function deepExtend(destination, source) {
        destination = destination || {};
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                deepExtend(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    }

    function clone(object) {
        return deepExtend({}, object);
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function dispatchChange(element) {
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            element.dispatchEvent(evt);
        } else {
            element.fireEvent("onchange");
        }
    }

    //http://jsperf.com/vanilla-css
    function css(el, styles, val) {
        if (typeof styles === 'string') {
            var tmp = styles;
            styles = {};
            styles[tmp] = val;
        }

        for (var prop in styles) {
            el.style[prop] = styles[prop];
        }
    }

    function addClass(el, c) {
        if (el.classList) {
            el.classList.add(c);
        } else {
            el.className += ' ' + c;
        }
    }

    function removeClass(el, c) {
        if (el.classList) {
            el.classList.remove(c);
        } else {
            el.className = el.className.replace(c, '');
        }
    }

    function setAttributes(el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    function num(v) {
        return parseInt(v, 10);
    }

    /* Utilities */
    function loadImage(src, doExif) {
        var img = new Image();
        img.style.opacity = '0';
        return new Promise(function (resolve, reject) {
            function _resolve() {
                img.style.opacity = '1';
                setTimeout(function () {
                    resolve(img);
                }, 1);
            }

            img.removeAttribute('crossOrigin');
            if (src.match(/^https?:\/\/|^\/\//)) {
                img.setAttribute('crossOrigin', 'anonymous');
            }

            img.onload = function () {
                if (doExif) {
                    EXIF.getData(img, function () {
                        _resolve();
                    });
                } else {
                    _resolve();
                }
            };
            img.onerror = function (ev) {
                img.style.opacity = 1;
                setTimeout(function () {
                    reject(ev);
                }, 1);
            };
            img.src = src;
        });
    }

    function naturalImageDimensions(img, ornt) {
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        var orient = ornt || getExifOrientation(img);
        if (orient && orient >= 5) {
            var x = w;
            w = h;
            h = x;
        }
        return { width: w, height: h };
    }

    /* CSS Transform Prototype */
    var TRANSLATE_OPTS = {
        'translate3d': {
            suffix: ', 0px'
        },
        'translate': {
            suffix: ''
        }
    };
    var Transform = function Transform(x, y, scale) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.scale = parseFloat(scale);
    };

    Transform.parse = function (v) {
        if (v.style) {
            return Transform.parse(v.style[CSS_TRANSFORM]);
        } else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
            return Transform.fromMatrix(v);
        } else {
            return Transform.fromString(v);
        }
    };

    Transform.fromMatrix = function (v) {
        var vals = v.substring(7).split(',');
        if (!vals.length || v === 'none') {
            vals = [1, 0, 0, 1, 0, 0];
        }

        return new Transform(num(vals[4]), num(vals[5]), parseFloat(vals[0]));
    };

    Transform.fromString = function (v) {
        var values = v.split(') '),
            translate = values[0].substring(Croppie.globals.translate.length + 1).split(','),
            scale = values.length > 1 ? values[1].substring(6) : 1,
            x = translate.length > 1 ? translate[0] : 0,
            y = translate.length > 1 ? translate[1] : 0;

        return new Transform(x, y, scale);
    };

    Transform.prototype.toString = function () {
        var suffix = TRANSLATE_OPTS[Croppie.globals.translate].suffix || '';
        return Croppie.globals.translate + '(' + this.x + 'px, ' + this.y + 'px' + suffix + ') scale(' + this.scale + ')';
    };

    var TransformOrigin = function TransformOrigin(el) {
        if (!el || !el.style[CSS_TRANS_ORG]) {
            this.x = 0;
            this.y = 0;
            return;
        }
        var css = el.style[CSS_TRANS_ORG].split(' ');
        this.x = parseFloat(css[0]);
        this.y = parseFloat(css[1]);
    };

    TransformOrigin.prototype.toString = function () {
        return this.x + 'px ' + this.y + 'px';
    };

    function getExifOrientation(img) {
        return img.exifdata && img.exifdata.Orientation ? num(img.exifdata.Orientation) : 1;
    }

    function drawCanvas(canvas, img, orientation) {
        var width = img.width,
            height = img.height,
            ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.save();
        switch (orientation) {
            case 2:
                ctx.translate(width, 0);
                ctx.scale(-1, 1);
                break;

            case 3:
                ctx.translate(width, height);
                ctx.rotate(180 * Math.PI / 180);
                break;

            case 4:
                ctx.translate(0, height);
                ctx.scale(1, -1);
                break;

            case 5:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(90 * Math.PI / 180);
                ctx.scale(1, -1);
                break;

            case 6:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(90 * Math.PI / 180);
                ctx.translate(0, -height);
                break;

            case 7:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(-90 * Math.PI / 180);
                ctx.translate(-width, height);
                ctx.scale(1, -1);
                break;

            case 8:
                canvas.width = height;
                canvas.height = width;
                ctx.translate(0, width);
                ctx.rotate(-90 * Math.PI / 180);
                break;
        }
        ctx.drawImage(img, 0, 0, width, height);
        ctx.restore();
    }

    /* Private Methods */
    function _create() {
        var self = this,
            contClass = 'croppie-container',
            customViewportClass = self.options.viewport.type ? 'cr-vp-' + self.options.viewport.type : null,
            boundary,
            img,
            viewport,
            overlay,
            bw,
            bh;

        self.options.useCanvas = self.options.enableOrientation || _hasExif.call(self);
        // Properties on class
        self.data = {};
        self.elements = {};

        boundary = self.elements.boundary = document.createElement('div');
        viewport = self.elements.viewport = document.createElement('div');
        img = self.elements.img = document.createElement('img');
        overlay = self.elements.overlay = document.createElement('div');

        if (self.options.useCanvas) {
            self.elements.canvas = document.createElement('canvas');
            self.elements.preview = self.elements.canvas;
        } else {
            self.elements.preview = img;
        }

        addClass(boundary, 'cr-boundary');
        boundary.setAttribute('aria-dropeffect', 'none');
        bw = self.options.boundary.width;
        bh = self.options.boundary.height;
        css(boundary, {
            width: bw + (isNaN(bw) ? '' : 'px'),
            height: bh + (isNaN(bh) ? '' : 'px')
        });

        addClass(viewport, 'cr-viewport');
        if (customViewportClass) {
            addClass(viewport, customViewportClass);
        }
        css(viewport, {
            width: self.options.viewport.width + 'px',
            height: self.options.viewport.height + 'px'
        });
        viewport.setAttribute('tabindex', 0);

        addClass(self.elements.preview, 'cr-image');
        setAttributes(self.elements.preview, { 'alt': 'preview', 'aria-grabbed': 'false' });
        addClass(overlay, 'cr-overlay');

        self.element.appendChild(boundary);
        boundary.appendChild(self.elements.preview);
        boundary.appendChild(viewport);
        boundary.appendChild(overlay);

        addClass(self.element, contClass);
        if (self.options.customClass) {
            addClass(self.element, self.options.customClass);
        }

        _initDraggable.call(this);

        if (self.options.enableZoom) {
            _initializeZoom.call(self);
        }

        // if (self.options.enableOrientation) {
        //     _initRotationControls.call(self);
        // }

        if (self.options.enableResize) {
            _initializeResize.call(self);
        }
    }

    // function _initRotationControls () {
    //     var self = this,
    //         wrap, btnLeft, btnRight, iLeft, iRight;

    //     wrap = document.createElement('div');
    //     self.elements.orientationBtnLeft = btnLeft = document.createElement('button');
    //     self.elements.orientationBtnRight = btnRight = document.createElement('button');

    //     wrap.appendChild(btnLeft);
    //     wrap.appendChild(btnRight);

    //     iLeft = document.createElement('i');
    //     iRight = document.createElement('i');
    //     btnLeft.appendChild(iLeft);
    //     btnRight.appendChild(iRight);

    //     addClass(wrap, 'cr-rotate-controls');
    //     addClass(btnLeft, 'cr-rotate-l');
    //     addClass(btnRight, 'cr-rotate-r');

    //     self.elements.boundary.appendChild(wrap);

    //     btnLeft.addEventListener('click', function () {
    //         self.rotate(-90);
    //     });
    //     btnRight.addEventListener('click', function () {
    //         self.rotate(90);
    //     });
    // }

    function _hasExif() {
        return this.options.enableExif && window.EXIF;
    }

    function _initializeResize() {
        var self = this;
        var wrap = document.createElement('div');
        var isDragging = false;
        var direction;
        var originalX;
        var originalY;
        var minSize = 50;
        var maxWidth;
        var maxHeight;
        var vr;
        var hr;

        addClass(wrap, 'cr-resizer');
        css(wrap, {
            width: this.options.viewport.width + 'px',
            height: this.options.viewport.height + 'px'
        });

        if (this.options.resizeControls.height) {
            vr = document.createElement('div');
            addClass(vr, 'cr-resizer-vertical');
            wrap.appendChild(vr);
        }

        if (this.options.resizeControls.width) {
            hr = document.createElement('div');
            addClass(hr, 'cr-resizer-horisontal');
            wrap.appendChild(hr);
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) {
                return;
            }

            var overlayRect = self.elements.overlay.getBoundingClientRect();

            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;
            direction = ev.currentTarget.className.indexOf('vertical') !== -1 ? 'v' : 'h';
            maxWidth = overlayRect.width;
            maxHeight = overlayRect.height;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }

            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
        }

        function mouseMove(ev) {
            var pageX = ev.pageX;
            var pageY = ev.pageY;

            ev.preventDefault();

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX;
            var deltaY = pageY - originalY;
            var newHeight = self.options.viewport.height + deltaY;
            var newWidth = self.options.viewport.width + deltaX;

            if (direction === 'v' && newHeight >= minSize && newHeight <= maxHeight) {
                css(wrap, {
                    height: newHeight + 'px'
                });

                self.options.boundary.height += deltaY;
                css(self.elements.boundary, {
                    height: self.options.boundary.height + 'px'
                });

                self.options.viewport.height += deltaY;
                css(self.elements.viewport, {
                    height: self.options.viewport.height + 'px'
                });
            } else if (direction === 'h' && newWidth >= minSize && newWidth <= maxWidth) {
                css(wrap, {
                    width: newWidth + 'px'
                });

                self.options.boundary.width += deltaX;
                css(self.elements.boundary, {
                    width: self.options.boundary.width + 'px'
                });

                self.options.viewport.width += deltaX;
                css(self.elements.viewport, {
                    width: self.options.viewport.width + 'px'
                });
            }

            _updateOverlay.call(self);
            _updateZoomLimits.call(self);
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
        }

        if (vr) {
            vr.addEventListener('mousedown', mouseDown);
            vr.addEventListener('touchstart', mouseDown);
        }

        if (hr) {
            hr.addEventListener('mousedown', mouseDown);
            hr.addEventListener('touchstart', mouseDown);
        }

        this.elements.boundary.appendChild(wrap);
    }

    function _setZoomerVal(v) {
        if (this.options.enableZoom) {
            var z = this.elements.zoomer,
                val = fix(v, 4);

            z.value = Math.max(parseFloat(z.min), Math.min(parseFloat(z.max), val)).toString();
        }
    }

    function _initializeZoom() {
        var self = this,
            wrap = self.elements.zoomerWrap = document.createElement('div'),
            zoomer = self.elements.zoomer = document.createElement('input');

        addClass(wrap, 'cr-slider-wrap');
        addClass(zoomer, 'cr-slider');
        zoomer.type = 'range';
        zoomer.step = '0.0001';
        zoomer.value = '1';
        zoomer.style.display = self.options.showZoomer ? '' : 'none';
        zoomer.setAttribute('aria-label', 'zoom');

        self.element.appendChild(wrap);
        wrap.appendChild(zoomer);

        self._currentZoom = 1;

        function change() {
            _onZoom.call(self, {
                value: parseFloat(zoomer.value),
                origin: new TransformOrigin(self.elements.preview),
                viewportRect: self.elements.viewport.getBoundingClientRect(),
                transform: Transform.parse(self.elements.preview)
            });
        }

        function scroll(ev) {
            var delta, targetZoom;

            if (self.options.mouseWheelZoom === 'ctrl' && ev.ctrlKey !== true) {
                return 0;
            } else if (ev.wheelDelta) {
                delta = ev.wheelDelta / 1200; //wheelDelta min: -120 max: 120 // max x 10 x 2
            } else if (ev.deltaY) {
                delta = ev.deltaY / 1060; //deltaY min: -53 max: 53 // max x 10 x 2
            } else if (ev.detail) {
                delta = ev.detail / -60; //delta min: -3 max: 3 // max x 10 x 2
            } else {
                delta = 0;
            }

            targetZoom = self._currentZoom + delta * self._currentZoom;

            ev.preventDefault();
            _setZoomerVal.call(self, targetZoom);
            change.call(self);
        }

        self.elements.zoomer.addEventListener('input', change); // this is being fired twice on keypress
        self.elements.zoomer.addEventListener('change', change);

        if (self.options.mouseWheelZoom) {
            self.elements.boundary.addEventListener('mousewheel', scroll);
            self.elements.boundary.addEventListener('DOMMouseScroll', scroll);
        }
    }

    function _onZoom(ui) {
        var self = this,
            transform = ui ? ui.transform : Transform.parse(self.elements.preview),
            vpRect = ui ? ui.viewportRect : self.elements.viewport.getBoundingClientRect(),
            origin = ui ? ui.origin : new TransformOrigin(self.elements.preview);

        function applyCss() {
            var transCss = {};
            transCss[CSS_TRANSFORM] = transform.toString();
            transCss[CSS_TRANS_ORG] = origin.toString();
            css(self.elements.preview, transCss);
        }

        self._currentZoom = ui ? ui.value : self._currentZoom;
        transform.scale = self._currentZoom;
        self.elements.zoomer.setAttribute('aria-valuenow', self._currentZoom);
        applyCss();

        if (self.options.enforceBoundary) {
            var boundaries = _getVirtualBoundaries.call(self, vpRect),
                transBoundaries = boundaries.translate,
                oBoundaries = boundaries.origin;

            if (transform.x >= transBoundaries.maxX) {
                origin.x = oBoundaries.minX;
                transform.x = transBoundaries.maxX;
            }

            if (transform.x <= transBoundaries.minX) {
                origin.x = oBoundaries.maxX;
                transform.x = transBoundaries.minX;
            }

            if (transform.y >= transBoundaries.maxY) {
                origin.y = oBoundaries.minY;
                transform.y = transBoundaries.maxY;
            }

            if (transform.y <= transBoundaries.minY) {
                origin.y = oBoundaries.maxY;
                transform.y = transBoundaries.minY;
            }
        }
        applyCss();
        _debouncedOverlay.call(self);
        _triggerUpdate.call(self);
    }

    function _getVirtualBoundaries(viewport) {
        var self = this,
            scale = self._currentZoom,
            vpWidth = viewport.width,
            vpHeight = viewport.height,
            centerFromBoundaryX = self.elements.boundary.clientWidth / 2,
            centerFromBoundaryY = self.elements.boundary.clientHeight / 2,
            imgRect = self.elements.preview.getBoundingClientRect(),
            curImgWidth = imgRect.width,
            curImgHeight = imgRect.height,
            halfWidth = vpWidth / 2,
            halfHeight = vpHeight / 2;

        var maxX = (halfWidth / scale - centerFromBoundaryX) * -1;
        var minX = maxX - (curImgWidth * (1 / scale) - vpWidth * (1 / scale));

        var maxY = (halfHeight / scale - centerFromBoundaryY) * -1;
        var minY = maxY - (curImgHeight * (1 / scale) - vpHeight * (1 / scale));

        var originMinX = 1 / scale * halfWidth;
        var originMaxX = curImgWidth * (1 / scale) - originMinX;

        var originMinY = 1 / scale * halfHeight;
        var originMaxY = curImgHeight * (1 / scale) - originMinY;

        return {
            translate: {
                maxX: maxX,
                minX: minX,
                maxY: maxY,
                minY: minY
            },
            origin: {
                maxX: originMaxX,
                minX: originMinX,
                maxY: originMaxY,
                minY: originMinY
            }
        };
    }

    function _updateCenterPoint(rotate) {
        var self = this,
            scale = self._currentZoom,
            data = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            transform = Transform.parse(self.elements.preview.style[CSS_TRANSFORM]),
            pc = new TransformOrigin(self.elements.preview),
            top = vpData.top - data.top + vpData.height / 2,
            left = vpData.left - data.left + vpData.width / 2,
            center = {},
            adj = {};

        if (rotate) {
            var cx = pc.x;
            var cy = pc.y;
            var tx = transform.x;
            var ty = transform.y;

            center.y = cx;
            center.x = cy;
            transform.y = tx;
            transform.x = ty;
        } else {
            center.y = top / scale;
            center.x = left / scale;

            adj.y = (center.y - pc.y) * (1 - scale);
            adj.x = (center.x - pc.x) * (1 - scale);

            transform.x -= adj.x;
            transform.y -= adj.y;
        }

        var newCss = {};
        newCss[CSS_TRANS_ORG] = center.x + 'px ' + center.y + 'px';
        newCss[CSS_TRANSFORM] = transform.toString();
        css(self.elements.preview, newCss);
    }

    function _initDraggable() {
        var self = this,
            isDragging = false,
            originalX,
            originalY,
            originalDistance,
            vpRect,
            transform;

        function assignTransformCoordinates(deltaX, deltaY) {
            var imgRect = self.elements.preview.getBoundingClientRect(),
                top = transform.y + deltaY,
                left = transform.x + deltaX;

            if (self.options.enforceBoundary) {
                if (vpRect.top > imgRect.top + deltaY && vpRect.bottom < imgRect.bottom + deltaY) {
                    transform.y = top;
                }

                if (vpRect.left > imgRect.left + deltaX && vpRect.right < imgRect.right + deltaX) {
                    transform.x = left;
                }
            } else {
                transform.y = top;
                transform.x = left;
            }
        }

        function toggleGrabState(isDragging) {
            self.elements.preview.setAttribute('aria-grabbed', isDragging);
            self.elements.boundary.setAttribute('aria-dropeffect', isDragging ? 'move' : 'none');
        }

        function keyDown(ev) {
            var LEFT_ARROW = 37,
                UP_ARROW = 38,
                RIGHT_ARROW = 39,
                DOWN_ARROW = 40;

            if (ev.shiftKey && (ev.keyCode === UP_ARROW || ev.keyCode === DOWN_ARROW)) {
                var zoom;
                if (ev.keyCode === UP_ARROW) {
                    zoom = parseFloat(self.elements.zoomer.value) + parseFloat(self.elements.zoomer.step);
                } else {
                    zoom = parseFloat(self.elements.zoomer.value) - parseFloat(self.elements.zoomer.step);
                }
                self.setZoom(zoom);
            } else if (self.options.enableKeyMovement && ev.keyCode >= 37 && ev.keyCode <= 40) {
                ev.preventDefault();
                var movement = parseKeyDown(ev.keyCode);

                transform = Transform.parse(self.elements.preview);
                document.body.style[CSS_USERSELECT] = 'none';
                vpRect = self.elements.viewport.getBoundingClientRect();
                keyMove(movement);
            }

            function parseKeyDown(key) {
                switch (key) {
                    case LEFT_ARROW:
                        return [1, 0];
                    case UP_ARROW:
                        return [0, 1];
                    case RIGHT_ARROW:
                        return [-1, 0];
                    case DOWN_ARROW:
                        return [0, -1];
                }
            }
        }

        function keyMove(movement) {
            var deltaX = movement[0],
                deltaY = movement[1],
                newCss = {};

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) return;
            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }
            toggleGrabState(isDragging);
            transform = Transform.parse(self.elements.preview);
            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
            vpRect = self.elements.viewport.getBoundingClientRect();
        }

        function mouseMove(ev) {
            ev.preventDefault();
            var pageX = ev.pageX,
                pageY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX,
                deltaY = pageY - originalY,
                newCss = {};

            if (ev.type === 'touchmove') {
                if (ev.touches.length > 1) {
                    var touch1 = ev.touches[0];
                    var touch2 = ev.touches[1];
                    var dist = Math.sqrt((touch1.pageX - touch2.pageX) * (touch1.pageX - touch2.pageX) + (touch1.pageY - touch2.pageY) * (touch1.pageY - touch2.pageY));

                    if (!originalDistance) {
                        originalDistance = dist / self._currentZoom;
                    }

                    var scale = dist / originalDistance;

                    _setZoomerVal.call(self, scale);
                    dispatchChange(self.elements.zoomer);
                    return;
                }
            }

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            toggleGrabState(isDragging);
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        self.elements.overlay.addEventListener('mousedown', mouseDown);
        self.elements.viewport.addEventListener('keydown', keyDown);
        self.elements.overlay.addEventListener('touchstart', mouseDown);
    }

    function _updateOverlay() {
        if (!this.elements) return; // since this is debounced, it can be fired after destroy
        var self = this,
            boundRect = self.elements.boundary.getBoundingClientRect(),
            imgData = self.elements.preview.getBoundingClientRect();

        css(self.elements.overlay, {
            width: imgData.width + 'px',
            height: imgData.height + 'px',
            top: imgData.top - boundRect.top + 'px',
            left: imgData.left - boundRect.left + 'px'
        });
    }
    var _debouncedOverlay = debounce(_updateOverlay, 500);

    function _triggerUpdate() {
        var self = this,
            data = self.get();

        if (!_isVisible.call(self)) {
            return;
        }

        self.options.update.call(self, data);
        if (self.$ && typeof Prototype === 'undefined') {
            self.$(self.element).trigger('update.croppie', data);
        } else {
            var ev;
            if (window.CustomEvent) {
                ev = new CustomEvent('update', { detail: data });
            } else {
                ev = document.createEvent('CustomEvent');
                ev.initCustomEvent('update', true, true, data);
            }

            self.element.dispatchEvent(ev);
        }
    }

    function _isVisible() {
        return this.elements.preview.offsetHeight > 0 && this.elements.preview.offsetWidth > 0;
    }

    function _updatePropertiesFromImage() {
        var self = this,
            initialZoom = 1,
            cssReset = {},
            img = self.elements.preview,
            imgData,
            transformReset = new Transform(0, 0, initialZoom),
            originReset = new TransformOrigin(),
            isVisible = _isVisible.call(self);

        if (!isVisible || self.data.bound) {
            // if the croppie isn't visible or it doesn't need binding
            return;
        }

        self.data.bound = true;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        cssReset[CSS_TRANS_ORG] = originReset.toString();
        cssReset['opacity'] = 1;
        css(img, cssReset);

        imgData = self.elements.preview.getBoundingClientRect();

        self._originalImageWidth = imgData.width;
        self._originalImageHeight = imgData.height;
        self.data.orientation = getExifOrientation(self.elements.img);

        if (self.options.enableZoom) {
            _updateZoomLimits.call(self, true);
        } else {
            self._currentZoom = initialZoom;
        }

        transformReset.scale = self._currentZoom;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        css(img, cssReset);

        if (self.data.points.length) {
            _bindPoints.call(self, self.data.points);
        } else {
            _centerImage.call(self);
        }

        _updateCenterPoint.call(self);
        _updateOverlay.call(self);
    }

    function _updateZoomLimits(initial) {
        var self = this,
            minZoom = Math.max(self.options.minZoom, 0) || 0,
            maxZoom = self.options.maxZoom || 1.5,
            initialZoom,
            defaultInitialZoom,
            zoomer = self.elements.zoomer,
            scale = parseFloat(zoomer.value),
            boundaryData = self.elements.boundary.getBoundingClientRect(),
            imgData = naturalImageDimensions(self.elements.img, self.data.orientation),
            vpData = self.elements.viewport.getBoundingClientRect(),
            minW,
            minH;
        if (self.options.enforceBoundary) {
            minW = vpData.width / imgData.width;
            minH = vpData.height / imgData.height;
            minZoom = Math.max(minW, minH);
        }

        if (minZoom >= maxZoom) {
            maxZoom = minZoom + 1;
        }

        zoomer.min = fix(minZoom, 4);
        zoomer.max = fix(maxZoom, 4);

        if (!initial && (scale < zoomer.min || scale > zoomer.max)) {
            _setZoomerVal.call(self, scale < zoomer.min ? zoomer.min : zoomer.max);
        } else if (initial) {
            defaultInitialZoom = Math.max(boundaryData.width / imgData.width, boundaryData.height / imgData.height);
            initialZoom = self.data.boundZoom !== null ? self.data.boundZoom : defaultInitialZoom;
            _setZoomerVal.call(self, initialZoom);
        }

        dispatchChange(zoomer);
    }

    function _bindPoints(points) {
        if (points.length !== 4) {
            throw "Croppie - Invalid number of points supplied: " + points;
        }
        var self = this,
            pointsWidth = points[2] - points[0],

        // pointsHeight = points[3] - points[1],
        vpData = self.elements.viewport.getBoundingClientRect(),
            boundRect = self.elements.boundary.getBoundingClientRect(),
            vpOffset = {
            left: vpData.left - boundRect.left,
            top: vpData.top - boundRect.top
        },
            scale = vpData.width / pointsWidth,
            originTop = points[1],
            originLeft = points[0],
            transformTop = -1 * points[1] + vpOffset.top,
            transformLeft = -1 * points[0] + vpOffset.left,
            newCss = {};

        newCss[CSS_TRANS_ORG] = originLeft + 'px ' + originTop + 'px';
        newCss[CSS_TRANSFORM] = new Transform(transformLeft, transformTop, scale).toString();
        css(self.elements.preview, newCss);

        _setZoomerVal.call(self, scale);
        self._currentZoom = scale;
    }

    function _centerImage() {
        var self = this,
            imgDim = self.elements.preview.getBoundingClientRect(),
            vpDim = self.elements.viewport.getBoundingClientRect(),
            boundDim = self.elements.boundary.getBoundingClientRect(),
            vpLeft = vpDim.left - boundDim.left,
            vpTop = vpDim.top - boundDim.top,
            w = vpLeft - (imgDim.width - vpDim.width) / 2,
            h = vpTop - (imgDim.height - vpDim.height) / 2,
            transform = new Transform(w, h, self._currentZoom);

        css(self.elements.preview, CSS_TRANSFORM, transform.toString());
    }

    function _transferImageToCanvas(customOrientation) {
        var self = this,
            canvas = self.elements.canvas,
            img = self.elements.img,
            ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = img.width;
        canvas.height = img.height;

        var orientation = self.options.enableOrientation && customOrientation || getExifOrientation(img);
        drawCanvas(canvas, img, orientation);
    }

    function _getCanvas(data) {
        var self = this,
            points = data.points,
            left = num(points[0]),
            top = num(points[1]),
            right = num(points[2]),
            bottom = num(points[3]),
            width = right - left,
            height = bottom - top,
            circle = data.circle,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            startX = 0,
            startY = 0,
            canvasWidth = data.outputWidth || width,
            canvasHeight = data.outputHeight || height;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        if (data.backgroundColor) {
            ctx.fillStyle = data.backgroundColor;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        }

        // By default assume we're going to draw the entire
        // source image onto the destination canvas.
        var sx = left,
            sy = top,
            sWidth = width,
            sHeight = height,
            dx = 0,
            dy = 0,
            dWidth = canvasWidth,
            dHeight = canvasHeight;

        //
        // Do not go outside of the original image's bounds along the x-axis.
        // Handle translations when projecting onto the destination canvas.
        //

        // The smallest possible source x-position is 0.
        if (left < 0) {
            sx = 0;
            dx = Math.abs(left) / width * canvasWidth;
        }

        // The largest possible source width is the original image's width.
        if (sWidth + sx > self._originalImageWidth) {
            sWidth = self._originalImageWidth - sx;
            dWidth = sWidth / width * canvasWidth;
        }

        //
        // Do not go outside of the original image's bounds along the y-axis.
        //

        // The smallest possible source y-position is 0.
        if (top < 0) {
            sy = 0;
            dy = Math.abs(top) / height * canvasHeight;
        }

        // The largest possible source height is the original image's height.
        if (sHeight + sy > self._originalImageHeight) {
            sHeight = self._originalImageHeight - sy;
            dHeight = sHeight / height * canvasHeight;
        }

        // console.table({ left, right, top, bottom, canvasWidth, canvasHeight, width, height, startX, startY, circle, sx, sy, dx, dy, sWidth, sHeight, dWidth, dHeight });

        ctx.drawImage(this.elements.preview, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        if (circle) {
            ctx.fillStyle = '#fff';
            ctx.globalCompositeOperation = 'destination-in';
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
        return canvas;
    }

    function _getHtmlResult(data) {
        var points = data.points,
            div = document.createElement('div'),
            img = document.createElement('img'),
            width = points[2] - points[0],
            height = points[3] - points[1];

        addClass(div, 'croppie-result');
        div.appendChild(img);
        css(img, {
            left: -1 * points[0] + 'px',
            top: -1 * points[1] + 'px'
        });
        img.src = data.url;
        css(div, {
            width: width + 'px',
            height: height + 'px'
        });

        return div;
    }

    function _getBase64Result(data) {
        return _getCanvas.call(this, data).toDataURL(data.format, data.quality);
    }

    function _getBlobResult(data) {
        var self = this;
        return new Promise(function (resolve) {
            _getCanvas.call(self, data).toBlob(function (blob) {
                resolve(blob);
            }, data.format, data.quality);
        });
    }

    function _replaceImage(img) {
        if (this.elements.img.parentNode) {
            Array.prototype.forEach.call(this.elements.img.classList, function (c) {
                img.classList.add(c);
            });
            this.elements.img.parentNode.replaceChild(img, this.elements.img);
            this.elements.preview = img; // if the img is attached to the DOM, they're not using the canvas
        }
        this.elements.img = img;
    }

    function _bind(options, cb) {
        var self = this,
            url,
            points = [],
            zoom = null,
            hasExif = _hasExif.call(self);

        if (typeof options === 'string') {
            url = options;
            options = {};
        } else if (Array.isArray(options)) {
            points = options.slice();
        } else if (typeof options === 'undefined' && self.data.url) {
            //refreshing
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            return null;
        } else {
            url = options.url;
            points = options.points || [];
            zoom = typeof options.zoom === 'undefined' ? null : options.zoom;
        }

        self.data.bound = false;
        self.data.url = url || self.data.url;
        self.data.boundZoom = zoom;

        return loadImage(url, hasExif).then(function (img) {
            _replaceImage.call(self, img);
            if (!points.length) {
                var natDim = naturalImageDimensions(img);
                var rect = self.elements.viewport.getBoundingClientRect();
                var aspectRatio = rect.width / rect.height;
                var imgAspectRatio = natDim.width / natDim.height;
                var width, height;

                if (imgAspectRatio > aspectRatio) {
                    height = natDim.height;
                    width = height * aspectRatio;
                } else {
                    width = natDim.width;
                    height = natDim.height / aspectRatio;
                }

                var x0 = (natDim.width - width) / 2;
                var y0 = (natDim.height - height) / 2;
                var x1 = x0 + width;
                var y1 = y0 + height;
                self.data.points = [x0, y0, x1, y1];
            } else if (self.options.relative) {
                points = [points[0] * img.naturalWidth / 100, points[1] * img.naturalHeight / 100, points[2] * img.naturalWidth / 100, points[3] * img.naturalHeight / 100];
            }

            self.data.points = points.map(function (p) {
                return parseFloat(p);
            });
            if (self.options.useCanvas) {
                _transferImageToCanvas.call(self, options.orientation);
            }
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            cb && cb();
        });
    }

    function fix(v, decimalPoints) {
        return parseFloat(v).toFixed(decimalPoints || 0);
    }

    function _get() {
        var self = this,
            imgData = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            x1 = vpData.left - imgData.left,
            y1 = vpData.top - imgData.top,
            widthDiff = (vpData.width - self.elements.viewport.offsetWidth) / 2,
            //border
        heightDiff = (vpData.height - self.elements.viewport.offsetHeight) / 2,
            x2 = x1 + self.elements.viewport.offsetWidth + widthDiff,
            y2 = y1 + self.elements.viewport.offsetHeight + heightDiff,
            scale = self._currentZoom;

        if (scale === Infinity || isNaN(scale)) {
            scale = 1;
        }

        var max = self.options.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
        x1 = Math.max(max, x1 / scale);
        y1 = Math.max(max, y1 / scale);
        x2 = Math.max(max, x2 / scale);
        y2 = Math.max(max, y2 / scale);

        return {
            points: [fix(x1), fix(y1), fix(x2), fix(y2)],
            zoom: scale,
            orientation: self.data.orientation
        };
    }

    var RESULT_DEFAULTS = {
        type: 'canvas',
        format: 'png',
        quality: 1
    },
        RESULT_FORMATS = ['jpeg', 'webp', 'png'];

    function _result(options) {
        var self = this,
            data = _get.call(self),
            opts = deepExtend(clone(RESULT_DEFAULTS), clone(options)),
            resultType = typeof options === 'string' ? options : opts.type || 'base64',
            size = opts.size || 'viewport',
            format = opts.format,
            quality = opts.quality,
            backgroundColor = opts.backgroundColor,
            circle = typeof opts.circle === 'boolean' ? opts.circle : self.options.viewport.type === 'circle',
            vpRect = self.elements.viewport.getBoundingClientRect(),
            ratio = vpRect.width / vpRect.height,
            prom;

        if (size === 'viewport') {
            data.outputWidth = vpRect.width;
            data.outputHeight = vpRect.height;
        } else if ((typeof size === "undefined" ? "undefined" : _typeof2(size)) === 'object') {
            if (size.width && size.height) {
                data.outputWidth = size.width;
                data.outputHeight = size.height;
            } else if (size.width) {
                data.outputWidth = size.width;
                data.outputHeight = size.width / ratio;
            } else if (size.height) {
                data.outputWidth = size.height * ratio;
                data.outputHeight = size.height;
            }
        }

        if (RESULT_FORMATS.indexOf(format) > -1) {
            data.format = 'image/' + format;
            data.quality = quality;
        }

        data.circle = circle;
        data.url = self.data.url;
        data.backgroundColor = backgroundColor;

        prom = new Promise(function (resolve) {
            switch (resultType.toLowerCase()) {
                case 'rawcanvas':
                    resolve(_getCanvas.call(self, data));
                    break;
                case 'canvas':
                case 'base64':
                    resolve(_getBase64Result.call(self, data));
                    break;
                case 'blob':
                    _getBlobResult.call(self, data).then(resolve);
                    break;
                default:
                    resolve(_getHtmlResult.call(self, data));
                    break;
            }
        });
        return prom;
    }

    function _refresh() {
        _updatePropertiesFromImage.call(this);
    }

    function _rotate(deg) {
        if (!this.options.useCanvas || !this.options.enableOrientation) {
            throw 'Croppie: Cannot rotate without enableOrientation && EXIF.js included';
        }

        var self = this,
            canvas = self.elements.canvas;

        self.data.orientation = getExifOffset(self.data.orientation, deg);
        drawCanvas(canvas, self.elements.img, self.data.orientation);
        _updateCenterPoint.call(self, true);
        _updateZoomLimits.call(self);
    }

    function _destroy() {
        var self = this;
        self.element.removeChild(self.elements.boundary);
        removeClass(self.element, 'croppie-container');
        if (self.options.enableZoom) {
            self.element.removeChild(self.elements.zoomerWrap);
        }
        delete self.elements;
    }

    if (window.jQuery) {
        var $ = window.jQuery;
        $.fn.croppie = function (opts) {
            var ot = typeof opts === "undefined" ? "undefined" : _typeof2(opts);

            if (ot === 'string') {
                var args = Array.prototype.slice.call(arguments, 1);
                var singleInst = $(this).data('croppie');

                if (opts === 'get') {
                    return singleInst.get();
                } else if (opts === 'result') {
                    return singleInst.result.apply(singleInst, args);
                } else if (opts === 'bind') {
                    return singleInst.bind.apply(singleInst, args);
                }

                return this.each(function () {
                    var i = $(this).data('croppie');
                    if (!i) return;

                    var method = i[opts];
                    if ($.isFunction(method)) {
                        method.apply(i, args);
                        if (opts === 'destroy') {
                            $(this).removeData('croppie');
                        }
                    } else {
                        throw 'Croppie ' + opts + ' method not found';
                    }
                });
            } else {
                return this.each(function () {
                    var i = new Croppie(this, opts);
                    i.$ = $;
                    $(this).data('croppie', i);
                });
            }
        };
    }

    function Croppie(element, opts) {
        if (element.className.indexOf('croppie-container') > -1) {
            throw new Error("Croppie: Can't initialize croppie more than once");
        }
        this.element = element;
        this.options = deepExtend(clone(Croppie.defaults), opts);

        if (this.element.tagName.toLowerCase() === 'img') {
            var origImage = this.element;
            addClass(origImage, 'cr-original-image');
            setAttributes(origImage, { 'aria-hidden': 'true', 'alt': '' });
            var replacementDiv = document.createElement('div');
            this.element.parentNode.appendChild(replacementDiv);
            replacementDiv.appendChild(origImage);
            this.element = replacementDiv;
            this.options.url = this.options.url || origImage.src;
        }

        _create.call(this);
        if (this.options.url) {
            var bindOpts = {
                url: this.options.url,
                points: this.options.points
            };
            delete this.options['url'];
            delete this.options['points'];
            _bind.call(this, bindOpts);
        }
    }

    Croppie.defaults = {
        viewport: {
            width: 100,
            height: 100,
            type: 'square'
        },
        boundary: {},
        orientationControls: {
            enabled: true,
            leftClass: '',
            rightClass: ''
        },
        resizeControls: {
            width: true,
            height: true
        },
        customClass: '',
        showZoomer: true,
        enableZoom: true,
        enableResize: false,
        mouseWheelZoom: true,
        enableExif: false,
        enforceBoundary: true,
        enableOrientation: false,
        enableKeyMovement: true,
        update: function update() {}
    };

    Croppie.globals = {
        translate: 'translate3d'
    };

    deepExtend(Croppie.prototype, {
        bind: function bind(options, cb) {
            return _bind.call(this, options, cb);
        },
        get: function get() {
            var data = _get.call(this);
            var points = data.points;
            if (this.options.relative) {
                points[0] /= this.elements.img.naturalWidth / 100;
                points[1] /= this.elements.img.naturalHeight / 100;
                points[2] /= this.elements.img.naturalWidth / 100;
                points[3] /= this.elements.img.naturalHeight / 100;
            }
            return data;
        },
        result: function result(type) {
            return _result.call(this, type);
        },
        refresh: function refresh() {
            return _refresh.call(this);
        },
        setZoom: function setZoom(v) {
            _setZoomerVal.call(this, v);
            dispatchChange(this.elements.zoomer);
        },
        rotate: function rotate(deg) {
            _rotate.call(this, deg);
        },
        destroy: function destroy() {
            return _destroy.call(this);
        }
    });
    return Croppie;
});