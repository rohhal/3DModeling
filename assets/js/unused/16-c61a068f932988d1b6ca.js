webpackJsonp([16], {
  393: function(t, e, n) {
    "use strict";
    var o = n(216),
      i = n(220),
      r = n(235),
      s = n(234),
      a = n(394);
    t.exports = o.extend({}, a, {
      initializeMarkdown: function(t) {
        this.options.markdown = this.options.markdown || {}, t && o.extend(this.options.markdown, t), this._markdownReady = !1, this._markdownLoading = !1, this._promise = null, this.options.markdown.editor && this.initializeEditor(this.options.markdown.editor)
      },
      initializeEditor: function() {
        var t = i(this.options.markdown.input),
          e = o.isObject(this.options.markdown.editor) ? this.options.markdown.editor : {};
        t.addClass("loading-editor"), n.e(4, function() {
          var r = n(395),
            s = new r(o.extend({}, {
              element: t[0],
              forceSync: !0,
              autoDownloadFontAwesome: !1,
              status: !1,
              spellChecker: !1
            }, e));
          e.container && i(e.container).addClass("wysiwyg"), t.removeClass("loading-editor"), s.codemirror.on("beforeChange", function(t, e) {
            var n = i(t.getTextArea()).val().length + e.text[0].length,
              o = parseInt(i(t.getTextArea()).attr("maxlength"), 10);
            n > o && "+delete" !== e.origin && e.cancel()
          }), s.codemirror.on("change", function(t) {
            i(t.getTextArea()).trigger("input")
          })
        }.bind(this))
      },
      setMarkdownReady: function(t) {
        this._markdownReady = !0, this._markdownLoading = !1, this.options.markdown.target.html(i("<div></div>").append(t))
      },
      unsetMarkdownReady: function() {
        this._markdownReady = !1, this.options.markdown.target.html(i("<div>Loading preview...</div>"))
      },
      renderMarkdown: function() {
        return this._markdownReady ? r.resolve(this.options.markdown.target[0].innerHTML) : this._markdownLoading ? this.promise : (this._markdownLoading = !0, this.promise = new r(function(t) {
          var e = this.options.markdown.input.val();
          e ? (this.unsetMarkdownReady(), s.ajax({
            type: "POST",
            url: "/i/markdown/preview",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
              text: e
            })
          }).then(function(e) {
            this.setMarkdownReady(e.result), this.handleLazyLoading(), t(e.result)
          }.bind(this), function() {
            this.setMarkdownReady("Failed to load preview"), t("")
          }.bind(this))) : (this.setMarkdownReady(""), t(""))
        }.bind(this)), this.promise)
      }
    })
  },
  1839: function(t, e, n) {
    "use strict";
    var o = n(220),
      i = n(216),
      r = n(1810),
      s = n(1840),
      a = n(1467),
      h = n(241),
      c = n(255),
      l = n(215),
      d = n(1807),
      p = l.shortcuts,
      u = n(1841);
    n(568), n(433), t.exports = r.extend({
      tplList: h.getFromMacro("skfb_front/macros/viewer", "hotspots_list"),
      _hotspotCycleInterval: null,
      hotspotViews: [],
      events: {
        'mousedown  [data-action="prev-annotation"]': "prevHotspot",
        'mousedown  [data-action="next-annotation"]': "nextHotspot",
        'touchstart [data-action="prev-annotation"]': "prevHotspot",
        'touchstart [data-action="next-annotation"]': "nextHotspot",
        'click      [data-action="next-annotation"]': "noop",
        'click      [data-action="prev-annotation"]': "noop",
        'mousedown  [data-action="toggle-autopilot"]': "toggleAutopilot",
        'touchstart [data-action="toggle-autopilot"]': "toggleAutopilot",
        'mousedown  [data-action="toggle-annotation-list"]': "toggleAnnotationList",
        'touchstart [data-action="toggle-annotation-list"]': "toggleAnnotationList",
        "click      [data-hotspot-target]": "menuTriggerHotspot",
        "mouseover  .control-hotspots .label": "revealHotspots",
        "mouseout   .control-hotspots .label": "unrevealHotspots",
        "click               .more": "showFullscreenTooltip",
        "mousedown .webgl": "trackMousedownTiming"
      },
      initialize: function() {
        r.prototype.initialize.apply(this, arguments), this.initialValue = this.$(".hotspot-name").text(), this.initializeShortcuts(), this.currentHotspot = -1, this._hotspotModel = this.viewer.scene.getFeatures().hotspot.getModel(), this._hotspots = this._hotspotModel.get("hotspots")
      },
      initializeShortcuts: function() {
        this.annotationControlShortcuts = new d(p.annotationControl), this.annotationControlShortcuts.on("prevAnnotation", this.prevHotspot.bind(this)), this.annotationControlShortcuts.on("nextAnnotation", this.nextHotspot.bind(this)), this.annotationControlShortcuts.listen()
      },
      noop: function(t) {
        return t.preventDefault(), t.stopPropagation(), !1
      },
      trackMousedownTiming: function(t) {
        this._mouseDownTime = Date.now(), this._mouseDownPosition = t.pageX
      },
      renderControl: function(t) {
        var e = this.$(".hotspot-name");
        this.$(".hotspot-select li").removeClass("active"), t ? (e.text(t.get("name")), e.removeClass("default")) : (e.text(this.initialValue), e.addClass("default"))
      },
      isVr: function() {
        return this.viewer.isVR()
      },
      toggleAnnotationList: function(t, e) {
        return t && t.preventDefault && (t.preventDefault(), t.stopPropagation()), this.$(".hotspots-list").toggleClass("visible", e), !1
      },
      toggleAutopilot: function(t, e) {
        var n = e ? e : t,
          o = "boolean" == typeof t ? t : void 0;
        n && n.preventDefault && n.preventDefault();
        var i = this.$('[data-action="toggle-autopilot"]'),
          r = void 0 !== o ? o : i.hasClass("stopped");
        this.trackHotspotCycle(r), this.triggerHotspotCycle(r)
      },
      updateHotspotsControls: function() {
        var t = this.tplList([this._hotspots.toJSON()]);
        this.viewer.$(".hotspot-controls .list").html(t), this._hotspots.length > 0 && !this.isVr() ? (this.showAnnotationControls(), this.viewer.proxySettings.get("annotationsVisible") === !0 ? this.showAnnotations() : this.hideAnnotations()) : (this.hideAnnotations(), this.hideAnnotationControls())
      },
      showFullscreenTooltip: function(t) {
        t.preventDefault(), t.stopPropagation();
        var e = this._hotspots,
          n = e.at(this.currentHotspot);
        n && (this.viewer.subviews.hotspotsOverlay.setModel(n), this.viewer.subviews.hotspotsOverlay.show())
      },
      showAnnotations: function() {
        this.viewer.$el.addClass("annotations-enabled"), this._hotspotModel.set("visible", !0)
      },
      hideAnnotations: function() {
        this.viewer.$el.removeClass("annotations-enabled"), this._hotspotModel.set("visible", !1)
      },
      showAnnotationControls: function() {
        this.viewer.$el.addClass("has-hotspots")
      },
      hideAnnotationControls: function() {
        this.viewer.$el.removeClass("has-hotspots")
      },
      hideTooltips: function() {
        this.hotspotViews.forEach(function(t) {
          t.hideTooltip()
        })
      },
      createHotspotView: function(t) {
        var e = this.viewer.scene && this.viewer.scene.getOptions().widgetAPI,
          n = s.extend({
            templateOptions: i.extend({
              editMode: e
            })
          }),
          o = new n({
            viewerModel: this.viewer._currentModel,
            hotspots: this._hotspots,
            hotspotIndex: t,
            viewer: this.viewer
          });
        return o.$el.addClass("visible"), o.$el.appendTo(this.options.container), o
      },
      refreshHotspots: function() {
        var t, e, n = this._hotspots.length;
        for (t = n, e = this.hotspotViews.length; t < e; ++t) this.hotspotViews.pop().remove();
        for (t = this.hotspotViews.length, e = n; t < e; ++t) this.hotspotViews.push(this.createHotspotView(t));
        if (this.updatePositionCurrentHotspot(), !this._initCanvasHotspot && this.isVr()) {
          this._initCanvasHotspot = !0;
          var o = this.hotspotViews.length && this.hotspotViews.length > 1;
          this.hotspotViews.forEach(this.initCanvasHotspot.bind(this, o))
        }
      },
      updatePositionCurrentHotspot: function() {
        if (this.currentHotspot !== -1) {
          var t = this.hotspotViews[this.currentHotspot],
            e = this._hotspots.at(this.currentHotspot),
            n = [0, 0, 0],
            o = this.viewer.scene.getFeaturesManager();
          o.getScreenPositionFromScenePoint(e.get("lastComputedScenePosition"), n), o.glCoordToCanvas(n[0], n[1], n), t.setCoordinates(n[0], n[1]), t.preparePositionFix(), t.useTranslate(), t.setPosition(), t.updateTooltipDirection()
        }
      },
      menuTriggerHotspot: function(t) {
        this.viewer.proxySettings.set("annotationsVisible", !0);
        var e = parseInt(t.currentTarget.getAttribute("data-hotspot-target"), 10);
        this._hotspots.trigger("select", this._hotspots.at(e)), c.modelViewerAnnotationListClicked(this.viewer._currentModel.get("uid"))
      },
      onHotspotSelected: function(t) {
        var e = this._hotspots.indexOf(t);
        this.currentHotspot !== e && (this.currentHotspot = e, this.applyCurrentHotspot(), this.updatePositionCurrentHotspot())
      },
      emitHotspotFocus: function(t) {
        this.viewer.scene.trigger("annotationFocus", t), this.hotspotFocus = t
      },
      emitHotspotBlur: function(t) {
        this.viewer.scene.trigger("annotationBlur", t), this.hotspotFocus = void 0
      },
      applyCurrentHotspot: function() {
        if (this.hotspotViews.forEach(function(t) {
            t.hideTooltip()
          }), void 0 !== this.hotspotFocusTimeoutID && (window.clearTimeout(this.hotspotFocusTimeoutID), window.clearTimeout(this.hotspotFocusTooltipTimeoutID), this.hotspotFocusTimeoutID = void 0, this.hotspotFocusTooltipTimeoutID = void 0), void 0 !== this.hotspotFocus && this.emitHotspotBlur(this.hotspotFocus), this.currentHotspot === -1) return void this.renderControl();
        var t = this._hotspots.at(this.currentHotspot),
          e = this.hotspotViews[this.currentHotspot],
          n = this.currentHotspot,
          o = Math.floor(1500);
        this.hotspotFocusTimeoutID = window.setTimeout(function() {
          this.hotspotFocusTimeoutID = void 0, this.emitHotspotFocus(n)
        }.bind(this), o), e.showTooltip(), this.renderControl(t), this.$(".hotspots-list a").removeClass("active"), this.$('.hotspots-list a[data-hotspot-target="' + this.currentHotspot + '"]').addClass("active")
      },
      paginateHotspot: function(t) {
        var e;
        t = parseInt(t, 10), e = this.currentHotspot === -1 ? 0 : t > 0 ? (this.currentHotspot + t) % this._hotspots.length : this.currentHotspot + t >= 0 ? this.currentHotspot + t : this.currentHotspot + t + this._hotspots.length, this._hotspots.trigger("select", this._hotspots.at(e))
      },
      nextHotspot: function(t) {
        t && t.preventDefault && (t.preventDefault(), t.stopPropagation()), c.modelViewerNextAnnotationClicked(this.viewer._currentModel.get("uid")), null !== this._hotspotCycleInterval && this.triggerHotspotCycle(!1), this.paginateHotspot(1)
      },
      trackHotspotCycle: function(t) {
        c.modelViewerAnnotationsCycleToggled(this.viewer._currentModel.get("uid"), t)
      },
      beginHotspotCycleInterval: function(t) {
        if (null === this._hotspotCycleInterval) {
          this._hotspotCycleIntervalPaused || this.paginateHotspot(1), window.clearTimeout(this._hotspotPausedCycleTimeout);
          var e = function() {
            window.clearInterval(this._hotspotCycleInterval), this._hotspotCycleInterval = window.setInterval(function() {
              this.paginateHotspot(1)
            }.bind(this), a().annotationCycleDuration)
          }.bind(this);
          t ? this._hotspotPausedCycleTimeout = setTimeout(e, t) : e()
        }
      },
      pauseHotspotCycleInterval: function(t) {
        var e = !!this._hotspotCycleInterval || this._hotspotCycleIntervalPaused;
        this.stopHotspotCycleInterval(), e && t && (this._hotspotPausedCycleTimeout = setTimeout(this.beginHotspotCycleInterval.bind(this), t)), this._hotspotCycleIntervalPaused = e
      },
      stopHotspotCycleInterval: function() {
        window.clearInterval(this._hotspotCycleInterval), this._hotspotCycleInterval = null, this._hotspotCyclePaused = !1, this._hotspotPausedCycleTimeout && window.clearTimeout(this._hotspotPausedCycleTimeout)
      },
      triggerHotspotCycle: function(t) {
        var e = this.$('[data-action="toggle-autopilot"]');
        e.toggleClass("stopped", !t), t ? (this.beginHotspotCycleInterval(), this.$(".hotspots-list").removeClass("visible")) : this.stopHotspotCycleInterval()
      },
      prevHotspot: function(t) {
        t && t.preventDefault && (t.preventDefault(), t.stopPropagation()), c.modelViewerPreviousAnnotationClicked(this.viewer._currentModel.get("uid")), null !== this._hotspotCycleInterval && this.triggerHotspotCycle(!1), this.paginateHotspot(-1)
      },
      initCanvasHotspot: function(t, e) {
        var n = e.$el;
        this.replaceImgByUrl(n);
        var i = this.renderHotspotVr(n, t);
        this.$(".hotspots").append(i), o("html, body, .viewer, .tooltip, .content").css({
          overflow: "visible"
        });
        var r = i.find(".tooltip-content"),
          s = this.extractMetaData(i);
        u(r, {
          background: void 0,
          allowTaint: !1,
          letterRendering: !0,
          width: 1024 * this.columnHotspotVR,
          height: 576,
          onrendered: function(t) {
            var n = document.createElement("canvas");
            n.width = t.width, n.height = 1024;
            var i = n.getContext("2d");
            i.drawImage(t, 0, 0, t.width, 1024), e.model.set("cardCanvas", {
              canvas: n,
              metaData: s
            }), o("html, body, .viewer, .tooltip, .content").css({
              overflow: ""
            })
          }
        }), i.hide()
      },
      extractMetaData: function(t) {
        for (var e = t.find(".button"), n = {}, i = 0; i < e.length; i++) {
          var r = e[i].id;
          if (r && !n[r]) {
            var s = o(e[i]),
              a = [],
              h = t.offset().top,
              c = t.outerHeight(),
              l = t.offset().left,
              d = t.outerWidth() / this.columnHotspotVR;
            a[0] = (s.offset().left - l) / d - .5, a[1] = (s.offset().left - l + s.outerWidth()) / d - .5, a[2] = -((s.offset().top - h) / c - .5), a[3] = -((s.offset().top - h + s.outerHeight()) / c - .5), n[r] = a
          }
        }
        return n
      },
      setDescriptionStyle: function(t, e) {
        t.find(".description").css({
          width: null !== e ? e.width : "",
          lineHeight: null !== e ? e.lineHeight : "",
          fontSize: null !== e ? e.fontSize : ""
        })
      },
      renderHotspotVr: function(t, e) {
        this.setDescriptionStyle(t, {
          width: "1024px",
          lineHeight: "1.5",
          fontSize: "36px"
        });
        var n = t.find(".description").outerHeight() + 4 * t.find(".title").outerHeight();
        this.columnHotspotVR = Math.round(n / 576) + (n % 576 > 0 ? 1 : 0), this.setDescriptionStyle(t, null);
        var r = h.getFromMacro("skfb_front/macros/model", "model_hotspot_vr", [i.extend({}, this.templateOptions, {
          hotspotIndex: t.attr("data-hotspot"),
          column: this.columnHotspotVR,
          widthContent: 1024 * this.columnHotspotVR,
          title: t.find(".title").text(),
          description: t.find(".description").html(),
          displayNavigation: e
        })]);
        return o(r)
      },
      replaceImgByUrl: function(t) {
        t.find(".lazyload").each(function() {
          var t = o(this).attr("data-uri") || "";
          t.length > 30 && (t = t.substr(0, 30) + "..."), o(this).after("<span>" + t + "</span>"), o(this).remove()
        })
      },
      revealHotspots: function() {
        this.viewer.$el.addClass("annotations-peak")
      },
      unrevealHotspots: function() {
        this.viewer.$el.removeClass("annotations-peak")
      }
    })
  },
  1840: function(t, e, n) {
    "use strict";
    var o = n(220),
      i = n(276),
      r = n(216),
      s = n(233),
      a = n(258),
      h = n(241),
      c = n(255),
      l = n(394),
      d = n(393);
    n(433), i = i;
    var p = a.extend(r.extend({}, d, {
      macro: ["skfb_front/macros/model", "model_hotspot"],
      urlize: h.getFromString('{{ content | striptags | urlize(target="_blank") | paragraphy }}'),
      events: r.extend({}, a.prototype.events, {
        "click .submit": "inputTitleDescription",
        "change .description": "changeDescription",
        "keydown textarea": "handleTextareaKeys",
        "keydown .title": "handleTitleKeys",
        "click .activate-render": "showRenderedContent",
        "mouseover .activate-render": "renderMarkdown",
        "click .activate-edition": "showEditingContent"
      }),
      el: function() {
        return h.getFromMacro(this.macro, [s.me().toJSON(), r.extend({}, this.templateOptions, {
          hotspotIndex: this.options.hotspotIndex
        })])
      },
      initialize: function() {
        a.prototype.initialize.apply(this, arguments), this.initializeMarkdown({
          input: this.$(".edition textarea"),
          target: this.$(".markdown-rendered-content")
        }), this.useTopLeft(), this.link()
      },
      delegateEvents: function() {
        a.prototype.delegateEvents.apply(this, arguments), this.options.hotspots.on("add remove reset sort", this.link, this)
      },
      undelegateEvents: function() {
        a.prototype.undelegateEvents.apply(this, arguments), this.options.hotspots.off("add remove reset sort", this.link, this)
      },
      link: function() {
        this.model && this.model.off("change", this.render, this), this.model = this.options.model = this.options.hotspots.at(this.options.hotspotIndex), this.model && this.model.on("change", this.render, this), this.render()
      },
      render: function() {
        if (this.model) {
          var t = function(t) {
              return t !== document.activeElement
            },
            e = this.model.get("name");
          this.$(".edition .title").filter(t).text(e).val(e), this.$(".edition .description").filter(t).text(this.model.get("content").raw).val(this.model.get("content").raw), this.$(".title").filter(t).html(this.urlize({
            content: e
          })), this.$(".description").filter(t).html(this.model.get("content").rendered), this.options.viewer.scene.getFeatures().webVR.getModel().get("enable") || this.handleLazyLoading(), this.$(".description")[0] !== document.activeElement && (this.templateOptions.editMode || this.$(".tooltip").toggleClass("no-description", !this.model.get("content").raw))
        }
      },
      showEditingContent: function() {
        this.$(".meta .selected").removeClass("selected"), this.$(".meta .activate-edition").addClass("selected"), this.$(".render").hide(), this.$(".edition").show()
      },
      showRenderedContent: function() {
        this.renderMarkdown();
        var t = this.$(".edition .title").val();
        this.$(".render .title").html(t), this.$(".render").show(), this.$(".edition").hide(), this.$(".meta .selected").removeClass("selected"), this.$(".meta .activate-render").addClass("selected"), this.handleLazyLoading()
      },
      inputTitleDescription: function(t) {
        this.$(".edition .title").val() && (this.renderMarkdown().then(function(t) {
          this.model.set({
            name: this.$(".edition .title").val(),
            content: {
              raw: this.$(".edition .description").val(),
              rendered: t
            }
          })
        }.bind(this)), this.hideTooltip(), this.options.viewer.currentHotspot = -1, t.stopPropagation(), c.annotationEditorTooltipEdited(this.options.viewerModel.get("uid")))
      },
      handleTitleKeys: function(t) {
        t.keyCode === o.ui.keyCode.ENTER && this.$(".submit").click()
      },
      handleTextareaKeys: function(t) {
        this.unsetMarkdownReady(), t.keyCode === o.ui.keyCode.ENTER && (t.metaKey || t.ctrlKey) && this.$(".submit").click()
      },
      changeDescription: function() {
        this.templateOptions.editMode || this.$(".tooltip").toggleClass("no-description", !this.model.get("description"))
      },
      showTooltip: function() {
        this.$el.addClass("selected"), this.$(".tooltip").addClass("visible"), this.updateTooltipDirection(), this.templateOptions.editMode && setTimeout(function() {
          this.x && this.y && this.tooltipInViewport() && this.$(".edition .title").focus()
        }.bind(this), 1200)
      },
      hideTooltip: function() {
        this.$el.removeClass("selected"), this.$(".tooltip").removeClass("visible")
      },
      updateTooltipDirection: function() {
        var t = this.el.parentNode.parentNode,
          e = this.el.querySelector(".tooltip");
        if (t && e && e.classList.contains("visible")) {
          e.classList.remove("reverse-x"), e.classList.remove("reverse-y");
          var n = e.getBoundingClientRect().left,
            o = e.getBoundingClientRect().top,
            i = t.getBoundingClientRect(),
            r = e.getBoundingClientRect();
          e.classList.toggle("reverse-x", n + r.width + 10 >= i.width), e.classList.toggle("reverse-y", o + r.height + 10 >= i.height)
        }
      },
      setCoordinates: function(t, e) {
        this.x = t, this.y = e
      },
      tooltipInViewport: function() {
        var t = this.$el.closest(".webgl")[0].getBoundingClientRect(),
          e = this.$(".tooltip")[0].getBoundingClientRect(),
          n = e.left - t.left > 0 && e.left + e.width < t.left + t.width,
          o = e.top - t.top > 0 && e.top + e.height < t.top + t.height;
        return n && o
      },
      useTranslate: function() {
        if ("translate" !== this.mode && (this.mode = "translate", this.el.parentNode.getBoundingClientRect)) {
          var t = this.el.parentNode.getBoundingClientRect(),
            e = this.el.getBoundingClientRect(),
            n = e.left - t.left + e.width / 2,
            o = e.top - t.top + e.height / 2;
          this.$el.css("transform", "translate3d(" + n + "px," + o + "px, 0)"), this.$el.css("left", "0"), this.$el.css("top", "0")
        }
      },
      useTopLeft: function() {
        if ("topleft" !== this.mode && (this.mode = "topleft", this.el.parentNode.getBoundingClientRect)) {
          var t = this.el.parentNode.getBoundingClientRect(),
            e = this.el.getBoundingClientRect(),
            n = e.left - t.left + e.width / 2,
            o = e.top - t.top + e.height / 2;
          this.$el.css("transform", "none"), this.$el.css("left", n), this.$el.css("top", o)
        }
      },
      setPosition: function() {
        switch (this.mode) {
          case "translate":
            this.$el.css("transform", "translate3d(" + this.x + "px," + this.y + "px, 0)");
            break;
          case "topleft":
            this.el.style.left = this.x + "px", this.el.style.top = this.y + "px"
        }
      },
      preparePositionFix: function() {
        var t = this.transformFixTimer = window.requestAnimationFrame(function() {
          this.transformFixTimer === t && (this.useTopLeft(), this.setPosition(Math.round(this.x), Math.round(this.y)))
        }.bind(this))
      }
    }));
    r.extend(p.prototype, l), t.exports = p
  },
  1841: function(t, e) {
    ! function(n) {
      if ("object" == typeof e && "undefined" != typeof t) t.exports = n();
      else if ("function" == typeof define && define.amd) define([], n);
      else {
        var o;
        o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, o.html2canvas = n()
      }
    }(function() {
      var t;
      return function e(t, n, o) {
        function i(s, a) {
          if (!n[s]) {
            if (!t[s]) {
              var h = "function" == typeof require && require;
              if (!a && h) return h(s, !0);
              if (r) return r(s, !0);
              var c = new Error("Cannot find module '" + s + "'");
              throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = n[s] = {
              exports: {}
            };
            t[s][0].call(l.exports, function(e) {
              var n = t[s][1][e];
              return i(n ? n : e)
            }, l, l.exports, e, t, n, o)
          }
          return n[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < o.length; s++) i(o[s]);
        return i
      }({
        1: [function(e, n, o) {
          (function(e) {
            ! function(i) {
              function r(t) {
                throw new RangeError(D[t])
              }

              function s(t, e) {
                for (var n = t.length, o = []; n--;) o[n] = e(t[n]);
                return o
              }

              function a(t, e) {
                var n = t.split("@"),
                  o = "";
                n.length > 1 && (o = n[0] + "@", t = n[1]), t = t.replace(A, ".");
                var i = t.split("."),
                  r = s(i, e).join(".");
                return o + r
              }

              function h(t) {
                for (var e, n, o = [], i = 0, r = t.length; i < r;) e = t.charCodeAt(i++), e >= 55296 && e <= 56319 && i < r ? (n = t.charCodeAt(i++), 56320 == (64512 & n) ? o.push(((1023 & e) << 10) + (1023 & n) + 65536) : (o.push(e), i--)) : o.push(e);
                return o
              }

              function c(t) {
                return s(t, function(t) {
                  var e = "";
                  return t > 65535 && (t -= 65536, e += B(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += B(t)
                }).join("")
              }

              function l(t) {
                return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : T
              }

              function d(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
              }

              function p(t, e, n) {
                var o = 0;
                for (t = n ? H(t / S) : t >> 1, t += H(t / e); t > L * E >> 1; o += T) t = H(t / L);
                return H(o + (L + 1) * t / (t + I))
              }

              function u(t) {
                var e, n, o, i, s, a, h, d, u, f, g = [],
                  m = t.length,
                  y = 0,
                  v = M,
                  w = R;
                for (n = t.lastIndexOf(O), n < 0 && (n = 0), o = 0; o < n; ++o) t.charCodeAt(o) >= 128 && r("not-basic"), g.push(t.charCodeAt(o));
                for (i = n > 0 ? n + 1 : 0; i < m;) {
                  for (s = y, a = 1, h = T; i >= m && r("invalid-input"), d = l(t.charCodeAt(i++)), (d >= T || d > H((C - y) / a)) && r("overflow"), y += d * a, u = h <= w ? k : h >= w + E ? E : h - w, !(d < u); h += T) f = T - u, a > H(C / f) && r("overflow"), a *= f;
                  e = g.length + 1, w = p(y - s, e, 0 == s), H(y / e) > C - v && r("overflow"), v += H(y / e), y %= e, g.splice(y++, 0, v)
                }
                return c(g)
              }

              function f(t) {
                var e, n, o, i, s, a, c, l, u, f, g, m, y, v, w, b = [];
                for (t = h(t), m = t.length, e = M, n = 0, s = R, a = 0; a < m; ++a) g = t[a], g < 128 && b.push(B(g));
                for (o = i = b.length, i && b.push(O); o < m;) {
                  for (c = C, a = 0; a < m; ++a) g = t[a], g >= e && g < c && (c = g);
                  for (y = o + 1, c - e > H((C - n) / y) && r("overflow"), n += (c - e) * y, e = c, a = 0; a < m; ++a)
                    if (g = t[a], g < e && ++n > C && r("overflow"), g == e) {
                      for (l = n, u = T; f = u <= s ? k : u >= s + E ? E : u - s, !(l < f); u += T) w = l - f, v = T - f, b.push(B(d(f + w % v, 0))), l = H(w / v);
                      b.push(B(d(l, 0))), s = p(n, y, o == i), n = 0, ++o
                    }++n, ++e
                }
                return b.join("")
              }

              function g(t) {
                return a(t, function(t) {
                  return _.test(t) ? u(t.slice(4).toLowerCase()) : t
                })
              }

              function m(t) {
                return a(t, function(t) {
                  return P.test(t) ? "xn--" + f(t) : t
                })
              }
              var y = "object" == typeof o && o && !o.nodeType && o,
                v = "object" == typeof n && n && !n.nodeType && n,
                w = "object" == typeof e && e;
              w.global !== w && w.window !== w && w.self !== w || (i = w);
              var b, x, C = 2147483647,
                T = 36,
                k = 1,
                E = 26,
                I = 38,
                S = 700,
                R = 72,
                M = 128,
                O = "-",
                _ = /^xn--/,
                P = /[^\x20-\x7E]/,
                A = /[\x2E\u3002\uFF0E\uFF61]/g,
                D = {
                  overflow: "Overflow: input needs wider integers to process",
                  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                  "invalid-input": "Invalid input"
                },
                L = T - k,
                H = Math.floor,
                B = String.fromCharCode;
              if (b = {
                  version: "1.3.2",
                  ucs2: {
                    decode: h,
                    encode: c
                  },
                  decode: u,
                  encode: f,
                  toASCII: m,
                  toUnicode: g
                }, "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode", function() {
                return b
              });
              else if (y && v)
                if (n.exports == y) v.exports = b;
                else
                  for (x in b) b.hasOwnProperty(x) && (y[x] = b[x]);
              else i.punycode = b
            }(this)
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        2: [function(t, e, n) {
          function o(t, e, n) {
            !t.defaultView || e === t.defaultView.pageXOffset && n === t.defaultView.pageYOffset || t.defaultView.scrollTo(e, n)
          }

          function i(t, e) {
            try {
              e && (e.width = t.width, e.height = t.height, e.getContext("2d").putImageData(t.getContext("2d").getImageData(0, 0, t.width, t.height), 0, 0))
            } catch (n) {
              a("Unable to copy canvas content from", t, n)
            }
          }

          function r(t, e) {
            for (var n = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), o = t.firstChild; o;) e !== !0 && 1 === o.nodeType && "SCRIPT" === o.nodeName || n.appendChild(r(o, e)), o = o.nextSibling;
            return 1 === t.nodeType && (n._scrollTop = t.scrollTop, n._scrollLeft = t.scrollLeft, "CANVAS" === t.nodeName ? i(t, n) : "TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName || (n.value = t.value)), n
          }

          function s(t) {
            if (1 === t.nodeType) {
              t.scrollTop = t._scrollTop, t.scrollLeft = t._scrollLeft;
              for (var e = t.firstChild; e;) s(e), e = e.nextSibling
            }
          }
          var a = t("./log");
          e.exports = function(t, e, n, i, a, h, c) {
            var l = r(t.documentElement, a.javascriptEnabled),
              d = e.createElement("iframe");
            return d.className = "html2canvas-container", d.style.visibility = "hidden", d.style.position = "fixed", d.style.left = "-10000px", d.style.top = "0px", d.style.border = "0", d.width = n, d.height = i, d.scrolling = "no", e.body.appendChild(d), new Promise(function(e) {
              var n = d.contentWindow.document;
              d.contentWindow.onload = d.onload = function() {
                var t = setInterval(function() {
                  n.body.childNodes.length > 0 && (s(n.documentElement), clearInterval(t), "view" === a.type && (d.contentWindow.scrollTo(h, c), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || d.contentWindow.scrollY === c && d.contentWindow.scrollX === h || (n.documentElement.style.top = -c + "px", n.documentElement.style.left = -h + "px", n.documentElement.style.position = "absolute")), e(d))
                }, 50)
              }, n.open(), n.write("<!DOCTYPE html><html></html>"), o(t, h, c), n.replaceChild(n.adoptNode(l), n.documentElement), n.close()
            })
          }
        }, {
          "./log": 13
        }],
        3: [function(t, e, n) {
          function o(t) {
            this.r = 0, this.g = 0, this.b = 0, this.a = null;
            this.fromArray(t) || this.namedColor(t) || this.rgb(t) || this.rgba(t) || this.hex6(t) || this.hex3(t)
          }
          o.prototype.darken = function(t) {
            var e = 1 - t;
            return new o([Math.round(this.r * e), Math.round(this.g * e), Math.round(this.b * e), this.a])
          }, o.prototype.isTransparent = function() {
            return 0 === this.a
          }, o.prototype.isBlack = function() {
            return 0 === this.r && 0 === this.g && 0 === this.b
          }, o.prototype.fromArray = function(t) {
            return Array.isArray(t) && (this.r = Math.min(t[0], 255), this.g = Math.min(t[1], 255), this.b = Math.min(t[2], 255), t.length > 3 && (this.a = t[3])), Array.isArray(t)
          };
          var i = /^#([a-f0-9]{3})$/i;
          o.prototype.hex3 = function(t) {
            var e = null;
            return null !== (e = t.match(i)) && (this.r = parseInt(e[1][0] + e[1][0], 16), this.g = parseInt(e[1][1] + e[1][1], 16), this.b = parseInt(e[1][2] + e[1][2], 16)), null !== e
          };
          var r = /^#([a-f0-9]{6})$/i;
          o.prototype.hex6 = function(t) {
            var e = null;
            return null !== (e = t.match(r)) && (this.r = parseInt(e[1].substring(0, 2), 16), this.g = parseInt(e[1].substring(2, 4), 16), this.b = parseInt(e[1].substring(4, 6), 16)), null !== e
          };
          var s = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
          o.prototype.rgb = function(t) {
            var e = null;
            return null !== (e = t.match(s)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3])), null !== e
          };
          var a = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
          o.prototype.rgba = function(t) {
            var e = null;
            return null !== (e = t.match(a)) && (this.r = Number(e[1]), this.g = Number(e[2]), this.b = Number(e[3]), this.a = Number(e[4])), null !== e
          }, o.prototype.toString = function() {
            return null !== this.a && 1 !== this.a ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")"
          }, o.prototype.namedColor = function(t) {
            t = t.toLowerCase();
            var e = h[t];
            if (e) this.r = e[0], this.g = e[1], this.b = e[2];
            else if ("transparent" === t) return this.r = this.g = this.b = this.a = 0, !0;
            return !!e
          }, o.prototype.isColor = !0;
          var h = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
          };
          e.exports = o
        }, {}],
        4: [function(e, n, o) {
          function i(t, e) {
            var n = T++;
            if (e = e || {}, e.logging && (y.options.logging = !0, y.options.start = Date.now()), e.async = "undefined" == typeof e.async || e.async, e.allowTaint = "undefined" != typeof e.allowTaint && e.allowTaint, e.removeContainer = "undefined" == typeof e.removeContainer || e.removeContainer, e.javascriptEnabled = "undefined" != typeof e.javascriptEnabled && e.javascriptEnabled, e.imageTimeout = "undefined" == typeof e.imageTimeout ? 1e4 : e.imageTimeout, e.renderer = "function" == typeof e.renderer ? e.renderer : u, e.strict = !!e.strict, "string" == typeof t) {
              if ("string" != typeof e.proxy) return Promise.reject("Proxy must be used when rendering url");
              var o = null != e.width ? e.width : window.innerWidth,
                i = null != e.height ? e.height : window.innerHeight;
              return b(d(t), e.proxy, document, o, i, e).then(function(t) {
                return s(t.contentWindow.document.documentElement, t, e, o, i)
              })
            }
            var a = (void 0 === t ? [document.documentElement] : t.length ? t : [t])[0];
            return a.setAttribute(C + n, n), r(a.ownerDocument, e, a.ownerDocument.defaultView.innerWidth, a.ownerDocument.defaultView.innerHeight, n).then(function(t) {
              return "function" == typeof e.onrendered && (y("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"), e.onrendered(t)), t
            })
          }

          function r(t, e, n, o, i) {
            return w(t, t, n, o, e, t.defaultView.pageXOffset, t.defaultView.pageYOffset).then(function(r) {
              y("Document cloned");
              var a = C + i,
                h = "[" + a + "='" + i + "']";
              t.querySelector(h).removeAttribute(a);
              var c = r.contentWindow,
                l = c.document.querySelector(h),
                d = "function" == typeof e.onclone ? Promise.resolve(e.onclone(c.document)) : Promise.resolve(!0);
              return d.then(function() {
                return s(l, r, e, n, o)
              })
            })
          }

          function s(t, e, n, o, i) {
            var r = e.contentWindow,
              s = new p(r.document),
              d = new f(n, s),
              u = x(t),
              m = "view" === n.type ? o : c(r.document),
              v = "view" === n.type ? i : l(r.document),
              w = new n.renderer(m, v, d, n, document),
              b = new g(t, w, s, d, n);
            return b.ready.then(function() {
              y("Finished rendering");
              var o;
              return o = "view" === n.type ? h(w.canvas, {
                width: w.canvas.width,
                height: w.canvas.height,
                top: 0,
                left: 0,
                x: 0,
                y: 0
              }) : t === r.document.body || t === r.document.documentElement || null != n.canvas ? w.canvas : h(w.canvas, {
                width: null != n.width ? n.width : u.width,
                height: null != n.height ? n.height : u.height,
                top: u.top,
                left: u.left,
                x: 0,
                y: 0
              }), a(e, n), o
            })
          }

          function a(t, e) {
            e.removeContainer && (t.parentNode.removeChild(t), y("Cleaned up container"))
          }

          function h(t, e) {
            var n = document.createElement("canvas"),
              o = Math.min(t.width - 1, Math.max(0, e.left)),
              i = Math.min(t.width, Math.max(1, e.left + e.width)),
              r = Math.min(t.height - 1, Math.max(0, e.top)),
              s = Math.min(t.height, Math.max(1, e.top + e.height));
            n.width = e.width, n.height = e.height;
            var a = i - o,
              h = s - r;
            return y("Cropping canvas at:", "left:", e.left, "top:", e.top, "width:", a, "height:", h), y("Resulting crop with width", e.width, "and height", e.height, "with x", o, "and y", r), n.getContext("2d").drawImage(t, o, r, a, h, e.x, e.y, a, h), n
          }

          function c(t) {
            return Math.max(Math.max(t.body.scrollWidth, t.documentElement.scrollWidth), Math.max(t.body.offsetWidth, t.documentElement.offsetWidth), Math.max(t.body.clientWidth, t.documentElement.clientWidth))
          }

          function l(t) {
            return Math.max(Math.max(t.body.scrollHeight, t.documentElement.scrollHeight), Math.max(t.body.offsetHeight, t.documentElement.offsetHeight), Math.max(t.body.clientHeight, t.documentElement.clientHeight));
          }

          function d(t) {
            var e = document.createElement("a");
            return e.href = t, e.href = e.href, e
          }
          var p = e("./support"),
            u = e("./renderers/canvas"),
            f = e("./imageloader"),
            g = e("./nodeparser"),
            m = e("./nodecontainer"),
            y = e("./log"),
            v = e("./utils"),
            w = e("./clone"),
            b = e("./proxy").loadUrlDocument,
            x = v.getBounds,
            C = "data-html2canvas-node",
            T = 0;
          i.CanvasRenderer = u, i.NodeContainer = m, i.log = y, i.utils = v;
          var k = "undefined" == typeof document || "function" != typeof Object.create || "function" != typeof document.createElement("canvas").getContext ? function() {
            return Promise.reject("No canvas support")
          } : i;
          n.exports = k, "function" == typeof t && t.amd && t("html2canvas", [], function() {
            return k
          })
        }, {
          "./clone": 2,
          "./imageloader": 11,
          "./log": 13,
          "./nodecontainer": 14,
          "./nodeparser": 15,
          "./proxy": 16,
          "./renderers/canvas": 20,
          "./support": 22,
          "./utils": 26
        }],
        5: [function(t, e, n) {
          function o(t) {
            if (this.src = t, i("DummyImageContainer for", t), !this.promise || !this.image) {
              i("Initiating DummyImageContainer"), o.prototype.image = new Image;
              var e = this.image;
              o.prototype.promise = new Promise(function(t, n) {
                e.onload = t, e.onerror = n, e.src = r(), e.complete === !0 && t(e)
              })
            }
          }
          var i = t("./log"),
            r = t("./utils").smallImage;
          e.exports = o
        }, {
          "./log": 13,
          "./utils": 26
        }],
        6: [function(t, e, n) {
          function o(t, e) {
            var n, o, r = document.createElement("div"),
              s = document.createElement("img"),
              a = document.createElement("span"),
              h = "Hidden Text";
            r.style.visibility = "hidden", r.style.fontFamily = t, r.style.fontSize = e, r.style.margin = 0, r.style.padding = 0, document.body.appendChild(r), s.src = i(), s.width = 1, s.height = 1, s.style.margin = 0, s.style.padding = 0, s.style.verticalAlign = "baseline", a.style.fontFamily = t, a.style.fontSize = e, a.style.margin = 0, a.style.padding = 0, a.appendChild(document.createTextNode(h)), r.appendChild(a), r.appendChild(s), n = s.offsetTop - a.offsetTop + 1, r.removeChild(a), r.appendChild(document.createTextNode(h)), r.style.lineHeight = "normal", s.style.verticalAlign = "super", o = s.offsetTop - r.offsetTop + 1, document.body.removeChild(r), this.baseline = n, this.lineWidth = 1, this.middle = o
          }
          var i = t("./utils").smallImage;
          e.exports = o
        }, {
          "./utils": 26
        }],
        7: [function(t, e, n) {
          function o() {
            this.data = {}
          }
          var i = t("./font");
          o.prototype.getMetrics = function(t, e) {
            return void 0 === this.data[t + "-" + e] && (this.data[t + "-" + e] = new i(t, e)), this.data[t + "-" + e]
          }, e.exports = o
        }, {
          "./font": 6
        }],
        8: [function(t, e, n) {
          function o(e, n, o) {
            this.image = null, this.src = e;
            var i = this,
              s = r(e);
            this.promise = (n ? new Promise(function(t) {
              "about:blank" === e.contentWindow.document.URL || null == e.contentWindow.document.documentElement ? e.contentWindow.onload = e.onload = function() {
                t(e)
              } : t(e)
            }) : this.proxyLoad(o.proxy, s, o)).then(function(e) {
              var n = t("./core");
              return n(e.contentWindow.document.documentElement, {
                type: "view",
                width: e.width,
                height: e.height,
                proxy: o.proxy,
                javascriptEnabled: o.javascriptEnabled,
                removeContainer: o.removeContainer,
                allowTaint: o.allowTaint,
                imageTimeout: o.imageTimeout / 2
              })
            }).then(function(t) {
              return i.image = t
            })
          }
          var i = t("./utils"),
            r = i.getBounds,
            s = t("./proxy").loadUrlDocument;
          o.prototype.proxyLoad = function(t, e, n) {
            var o = this.src;
            return s(o.src, t, o.ownerDocument, e.width, e.height, n)
          }, e.exports = o
        }, {
          "./core": 4,
          "./proxy": 16,
          "./utils": 26
        }],
        9: [function(t, e, n) {
          function o(t) {
            this.src = t.value, this.colorStops = [], this.type = null, this.x0 = .5, this.y0 = .5, this.x1 = .5, this.y1 = .5, this.promise = Promise.resolve(!0)
          }
          o.TYPES = {
            LINEAR: 1,
            RADIAL: 2
          }, o.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i, e.exports = o
        }, {}],
        10: [function(t, e, n) {
          function o(t, e) {
            this.src = t, this.image = new Image;
            var n = this;
            this.tainted = null, this.promise = new Promise(function(o, i) {
              n.image.onload = o, n.image.onerror = i, e && (n.image.crossOrigin = "anonymous"), n.image.src = t, n.image.complete === !0 && o(n.image)
            })
          }
          e.exports = o
        }, {}],
        11: [function(t, e, n) {
          function o(t, e) {
            this.link = null, this.options = t, this.support = e, this.origin = this.getOrigin(window.location.href)
          }
          var i = t("./log"),
            r = t("./imagecontainer"),
            s = t("./dummyimagecontainer"),
            a = t("./proxyimagecontainer"),
            h = t("./framecontainer"),
            c = t("./svgcontainer"),
            l = t("./svgnodecontainer"),
            d = t("./lineargradientcontainer"),
            p = t("./webkitgradientcontainer"),
            u = t("./utils").bind;
          o.prototype.findImages = function(t) {
            var e = [];
            return t.reduce(function(t, e) {
              switch (e.node.nodeName) {
                case "IMG":
                  return t.concat([{
                    args: [e.node.src],
                    method: "url"
                  }]);
                case "svg":
                case "IFRAME":
                  return t.concat([{
                    args: [e.node],
                    method: e.node.nodeName
                  }])
              }
              return t
            }, []).forEach(this.addImage(e, this.loadImage), this), e
          }, o.prototype.findBackgroundImage = function(t, e) {
            return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t, this.loadImage), this), t
          }, o.prototype.addImage = function(t, e) {
            return function(n) {
              n.args.forEach(function(o) {
                this.imageExists(t, o) || (t.splice(0, 0, e.call(this, n)), i("Added image #" + t.length, "string" == typeof o ? o.substring(0, 100) : o))
              }, this)
            }
          }, o.prototype.hasImageBackground = function(t) {
            return "none" !== t.method
          }, o.prototype.loadImage = function(t) {
            if ("url" === t.method) {
              var e = t.args[0];
              return !this.isSVG(e) || this.support.svg || this.options.allowTaint ? e.match(/data:image\/.*;base64,/i) ? new r(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), (!1)) : this.isSameOrigin(e) || this.options.allowTaint === !0 || this.isSVG(e) ? new r(e, (!1)) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new r(e, (!0)) : this.options.proxy ? new a(e, this.options.proxy) : new s(e) : new c(e)
            }
            return "linear-gradient" === t.method ? new d(t) : "gradient" === t.method ? new p(t) : "svg" === t.method ? new l(t.args[0], this.support.svg) : "IFRAME" === t.method ? new h(t.args[0], this.isSameOrigin(t.args[0].src), this.options) : new s(t)
          }, o.prototype.isSVG = function(t) {
            return "svg" === t.substring(t.length - 3).toLowerCase() || c.prototype.isInline(t)
          }, o.prototype.imageExists = function(t, e) {
            return t.some(function(t) {
              return t.src === e
            })
          }, o.prototype.isSameOrigin = function(t) {
            return this.getOrigin(t) === this.origin
          }, o.prototype.getOrigin = function(t) {
            var e = this.link || (this.link = document.createElement("a"));
            return e.href = t, e.href = e.href, e.protocol + e.hostname + e.port
          }, o.prototype.getPromise = function(t) {
            return this.timeout(t, this.options.imageTimeout)["catch"](function() {
              var e = new s(t.src);
              return e.promise.then(function(e) {
                t.image = e
              })
            })
          }, o.prototype.get = function(t) {
            var e = null;
            return this.images.some(function(n) {
              return (e = n).src === t
            }) ? e : null
          }, o.prototype.fetch = function(t) {
            return this.images = t.reduce(u(this.findBackgroundImage, this), this.findImages(t)), this.images.forEach(function(t, e) {
              t.promise.then(function() {
                i("Succesfully loaded image #" + (e + 1), t)
              }, function(n) {
                i("Failed loading image #" + (e + 1), t, n)
              })
            }), this.ready = Promise.all(this.images.map(this.getPromise, this)), i("Finished searching images"), this
          }, o.prototype.timeout = function(t, e) {
            var n, o = Promise.race([t.promise, new Promise(function(o, r) {
              n = setTimeout(function() {
                i("Timed out loading image", t), r(t)
              }, e)
            })]).then(function(t) {
              return clearTimeout(n), t
            });
            return o["catch"](function() {
              clearTimeout(n)
            }), o
          }, e.exports = o
        }, {
          "./dummyimagecontainer": 5,
          "./framecontainer": 8,
          "./imagecontainer": 10,
          "./lineargradientcontainer": 12,
          "./log": 13,
          "./proxyimagecontainer": 17,
          "./svgcontainer": 23,
          "./svgnodecontainer": 24,
          "./utils": 26,
          "./webkitgradientcontainer": 27
        }],
        12: [function(t, e, n) {
          function o(t) {
            i.apply(this, arguments), this.type = i.TYPES.LINEAR;
            var e = o.REGEXP_DIRECTION.test(t.args[0]) || !i.REGEXP_COLORSTOP.test(t.args[0]);
            e ? t.args[0].split(/\s+/).reverse().forEach(function(t, e) {
              switch (t) {
                case "left":
                  this.x0 = 0, this.x1 = 1;
                  break;
                case "top":
                  this.y0 = 0, this.y1 = 1;
                  break;
                case "right":
                  this.x0 = 1, this.x1 = 0;
                  break;
                case "bottom":
                  this.y0 = 1, this.y1 = 0;
                  break;
                case "to":
                  var n = this.y0,
                    o = this.x0;
                  this.y0 = this.y1, this.x0 = this.x1, this.x1 = o, this.y1 = n;
                  break;
                case "center":
                  break;
                default:
                  var i = .01 * parseFloat(t, 10);
                  if (isNaN(i)) break;
                  0 === e ? (this.y0 = i, this.y1 = 1 - this.y0) : (this.x0 = i, this.x1 = 1 - this.x0)
              }
            }, this) : (this.y0 = 0, this.y1 = 1), this.colorStops = t.args.slice(e ? 1 : 0).map(function(t) {
              var e = t.match(i.REGEXP_COLORSTOP),
                n = +e[2],
                o = 0 === n ? "%" : e[3];
              return {
                color: new r(e[1]),
                stop: "%" === o ? n / 100 : null
              }
            }), null === this.colorStops[0].stop && (this.colorStops[0].stop = 0), null === this.colorStops[this.colorStops.length - 1].stop && (this.colorStops[this.colorStops.length - 1].stop = 1), this.colorStops.forEach(function(t, e) {
              null === t.stop && this.colorStops.slice(e).some(function(n, o) {
                return null !== n.stop && (t.stop = (n.stop - this.colorStops[e - 1].stop) / (o + 1) + this.colorStops[e - 1].stop, !0)
              }, this)
            }, this)
          }
          var i = t("./gradientcontainer"),
            r = t("./color");
          o.prototype = Object.create(i.prototype), o.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i, e.exports = o
        }, {
          "./color": 3,
          "./gradientcontainer": 9
        }],
        13: [function(t, e, n) {
          var o = function() {
            o.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - o.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
          };
          o.options = {
            logging: !1
          }, e.exports = o
        }, {}],
        14: [function(t, e, n) {
          function o(t, e) {
            this.node = t, this.parent = e, this.stack = null, this.bounds = null, this.borders = null, this.clip = [], this.backgroundClip = [], this.offsetBounds = null, this.visible = null, this.computedStyles = null, this.colors = {}, this.styles = {}, this.backgroundImages = null, this.transformData = null, this.transformMatrix = null, this.isPseudoElement = !1, this.opacity = null
          }

          function i(t) {
            var e = t.options[t.selectedIndex || 0];
            return e ? e.text || "" : ""
          }

          function r(t) {
            if (t && "matrix" === t[1]) return t[2].split(",").map(function(t) {
              return parseFloat(t.trim())
            });
            if (t && "matrix3d" === t[1]) {
              var e = t[2].split(",").map(function(t) {
                return parseFloat(t.trim())
              });
              return [e[0], e[1], e[4], e[5], e[12], e[13]]
            }
          }

          function s(t) {
            return t.toString().indexOf("%") !== -1
          }

          function a(t) {
            return t.replace("px", "")
          }

          function h(t) {
            return parseFloat(t)
          }
          var c = t("./color"),
            l = t("./utils"),
            d = l.getBounds,
            p = l.parseBackgrounds,
            u = l.offsetBounds;
          o.prototype.cloneTo = function(t) {
            t.visible = this.visible, t.borders = this.borders, t.bounds = this.bounds, t.clip = this.clip, t.backgroundClip = this.backgroundClip, t.computedStyles = this.computedStyles, t.styles = this.styles, t.backgroundImages = this.backgroundImages, t.opacity = this.opacity
          }, o.prototype.getOpacity = function() {
            return null === this.opacity ? this.opacity = this.cssFloat("opacity") : this.opacity
          }, o.prototype.assignStack = function(t) {
            this.stack = t, t.children.push(this)
          }, o.prototype.isElementVisible = function() {
            return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : "none" !== this.css("display") && "hidden" !== this.css("visibility") && !this.node.hasAttribute("data-html2canvas-ignore") && ("INPUT" !== this.node.nodeName || "hidden" !== this.node.getAttribute("type"))
          }, o.prototype.css = function(t) {
            return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)), this.styles[t] || (this.styles[t] = this.computedStyles[t])
          }, o.prototype.prefixedCss = function(t) {
            var e = ["webkit", "moz", "ms", "o"],
              n = this.css(t);
            return void 0 === n && e.some(function(e) {
              return n = this.css(e + t.substr(0, 1).toUpperCase() + t.substr(1)), void 0 !== n
            }, this), void 0 === n ? null : n
          }, o.prototype.computedStyle = function(t) {
            return this.node.ownerDocument.defaultView.getComputedStyle(this.node, t)
          }, o.prototype.cssInt = function(t) {
            var e = parseInt(this.css(t), 10);
            return isNaN(e) ? 0 : e
          }, o.prototype.color = function(t) {
            return this.colors[t] || (this.colors[t] = new c(this.css(t)))
          }, o.prototype.cssFloat = function(t) {
            var e = parseFloat(this.css(t));
            return isNaN(e) ? 0 : e
          }, o.prototype.fontWeight = function() {
            var t = this.css("fontWeight");
            switch (parseInt(t, 10)) {
              case 401:
                t = "bold";
                break;
              case 400:
                t = "normal"
            }
            return t
          }, o.prototype.parseClip = function() {
            var t = this.css("clip").match(this.CLIP);
            return t ? {
              top: parseInt(t[1], 10),
              right: parseInt(t[2], 10),
              bottom: parseInt(t[3], 10),
              left: parseInt(t[4], 10)
            } : null
          }, o.prototype.parseBackgroundImages = function() {
            return this.backgroundImages || (this.backgroundImages = p(this.css("backgroundImage")))
          }, o.prototype.cssList = function(t, e) {
            var n = (this.css(t) || "").split(",");
            return n = n[e || 0] || n[0] || "auto", n = n.trim().split(" "), 1 === n.length && (n = [n[0], s(n[0]) ? "auto" : n[0]]), n
          }, o.prototype.parseBackgroundSize = function(t, e, n) {
            var o, i, r = this.cssList("backgroundSize", n);
            if (s(r[0])) o = t.width * parseFloat(r[0]) / 100;
            else {
              if (/contain|cover/.test(r[0])) {
                var a = t.width / t.height,
                  h = e.width / e.height;
                return a < h ^ "contain" === r[0] ? {
                  width: t.height * h,
                  height: t.height
                } : {
                  width: t.width,
                  height: t.width / h
                }
              }
              o = parseInt(r[0], 10)
            }
            return i = "auto" === r[0] && "auto" === r[1] ? e.height : "auto" === r[1] ? o / e.width * e.height : s(r[1]) ? t.height * parseFloat(r[1]) / 100 : parseInt(r[1], 10), "auto" === r[0] && (o = i / e.height * e.width), {
              width: o,
              height: i
            }
          }, o.prototype.parseBackgroundPosition = function(t, e, n, o) {
            var i, r, a = this.cssList("backgroundPosition", n);
            return i = s(a[0]) ? (t.width - (o || e).width) * (parseFloat(a[0]) / 100) : parseInt(a[0], 10), r = "auto" === a[1] ? i / e.width * e.height : s(a[1]) ? (t.height - (o || e).height) * parseFloat(a[1]) / 100 : parseInt(a[1], 10), "auto" === a[0] && (i = r / e.height * e.width), {
              left: i,
              top: r
            }
          }, o.prototype.parseBackgroundRepeat = function(t) {
            return this.cssList("backgroundRepeat", t)[0]
          }, o.prototype.parseTextShadows = function() {
            var t = this.css("textShadow"),
              e = [];
            if (t && "none" !== t)
              for (var n = t.match(this.TEXT_SHADOW_PROPERTY), o = 0; n && o < n.length; o++) {
                var i = n[o].match(this.TEXT_SHADOW_VALUES);
                e.push({
                  color: new c(i[0]),
                  offsetX: i[1] ? parseFloat(i[1].replace("px", "")) : 0,
                  offsetY: i[2] ? parseFloat(i[2].replace("px", "")) : 0,
                  blur: i[3] ? i[3].replace("px", "") : 0
                })
              }
            return e
          }, o.prototype.parseTransform = function() {
            if (!this.transformData)
              if (this.hasTransform()) {
                var t = this.parseBounds(),
                  e = this.prefixedCss("transformOrigin").split(" ").map(a).map(h);
                e[0] += t.left, e[1] += t.top, this.transformData = {
                  origin: e,
                  matrix: this.parseTransformMatrix()
                }
              } else this.transformData = {
                origin: [0, 0],
                matrix: [1, 0, 0, 1, 0, 0]
              };
            return this.transformData
          }, o.prototype.parseTransformMatrix = function() {
            if (!this.transformMatrix) {
              var t = this.prefixedCss("transform"),
                e = t ? r(t.match(this.MATRIX_PROPERTY)) : null;
              this.transformMatrix = e ? e : [1, 0, 0, 1, 0, 0]
            }
            return this.transformMatrix
          }, o.prototype.parseBounds = function() {
            return this.bounds || (this.bounds = this.hasTransform() ? u(this.node) : d(this.node))
          }, o.prototype.hasTransform = function() {
            return "1,0,0,1,0,0" !== this.parseTransformMatrix().join(",") || this.parent && this.parent.hasTransform()
          }, o.prototype.getValue = function() {
            var t = this.node.value || "";
            return "SELECT" === this.node.tagName ? t = i(this.node) : "password" === this.node.type && (t = Array(t.length + 1).join("•")), 0 === t.length ? this.node.placeholder || "" : t
          }, o.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/, o.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g, o.prototype.TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g, o.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/, e.exports = o
        }, {
          "./color": 3,
          "./utils": 26
        }],
        15: [function(t, e, n) {
          function o(t, e, n, o, i) {
            V("Starting NodeParser"), this.renderer = e, this.options = i, this.range = null, this.support = n, this.renderQueue = [], this.stack = new q((!0), 1, t.ownerDocument, null);
            var r = new z(t, null);
            if (i.background && e.rectangle(0, 0, e.width, e.height, new X(i.background)), t === t.ownerDocument.documentElement) {
              var s = new z(r.color("backgroundColor").isTransparent() ? t.ownerDocument.body : t.ownerDocument.documentElement, null);
              e.rectangle(0, 0, e.width, e.height, s.color("backgroundColor"))
            }
            r.visibile = r.isElementVisible(), this.createPseudoHideStyles(t.ownerDocument), this.disableAnimations(t.ownerDocument), this.nodes = L([r].concat(this.getChildren(r)).filter(function(t) {
              return t.visible = t.isElementVisible()
            }).map(this.getPseudoElements, this)), this.fontMetrics = new U, V("Fetched nodes, total:", this.nodes.length), V("Calculate overflow clips"), this.calculateOverflowClips(), V("Start fetching images"), this.images = o.fetch(this.nodes.filter(S)), this.ready = this.images.ready.then(Y(function() {
              return V("Images loaded, starting parsing"), V("Creating stacking contexts"), this.createStackingContexts(), V("Sorting stacking contexts"), this.sortStackingContexts(this.stack), this.parse(this.stack), V("Render queue created with " + this.renderQueue.length + " items"), new Promise(Y(function(t) {
                i.async ? "function" == typeof i.async ? i.async.call(this, this.renderQueue, t) : this.renderQueue.length > 0 ? (this.renderIndex = 0, this.asyncRenderer(this.renderQueue, t)) : t() : (this.renderQueue.forEach(this.paint, this), t())
              }, this))
            }, this))
          }

          function i(t) {
            return t.parent && t.parent.clip.length
          }

          function r(t) {
            return t.replace(/(\-[a-z])/g, function(t) {
              return t.toUpperCase().replace("-", "")
            })
          }

          function s() {}

          function a(t, e, n, o) {
            return t.map(function(i, r) {
              if (i.width > 0) {
                var s = e.left,
                  a = e.top,
                  h = e.width,
                  c = e.height - t[2].width;
                switch (r) {
                  case 0:
                    c = t[0].width, i.args = d({
                      c1: [s, a],
                      c2: [s + h, a],
                      c3: [s + h - t[1].width, a + c],
                      c4: [s + t[3].width, a + c]
                    }, o[0], o[1], n.topLeftOuter, n.topLeftInner, n.topRightOuter, n.topRightInner);
                    break;
                  case 1:
                    s = e.left + e.width - t[1].width, h = t[1].width, i.args = d({
                      c1: [s + h, a],
                      c2: [s + h, a + c + t[2].width],
                      c3: [s, a + c],
                      c4: [s, a + t[0].width]
                    }, o[1], o[2], n.topRightOuter, n.topRightInner, n.bottomRightOuter, n.bottomRightInner);
                    break;
                  case 2:
                    a = a + e.height - t[2].width, c = t[2].width, i.args = d({
                      c1: [s + h, a + c],
                      c2: [s, a + c],
                      c3: [s + t[3].width, a],
                      c4: [s + h - t[3].width, a]
                    }, o[2], o[3], n.bottomRightOuter, n.bottomRightInner, n.bottomLeftOuter, n.bottomLeftInner);
                    break;
                  case 3:
                    h = t[3].width, i.args = d({
                      c1: [s, a + c + t[2].width],
                      c2: [s, a],
                      c3: [s + h, a + t[0].width],
                      c4: [s + h, a + c]
                    }, o[3], o[0], n.bottomLeftOuter, n.bottomLeftInner, n.topLeftOuter, n.topLeftInner)
                }
              }
              return i
            })
          }

          function h(t, e, n, o) {
            var i = 4 * ((Math.sqrt(2) - 1) / 3),
              r = n * i,
              s = o * i,
              a = t + n,
              h = e + o;
            return {
              topLeft: l({
                x: t,
                y: h
              }, {
                x: t,
                y: h - s
              }, {
                x: a - r,
                y: e
              }, {
                x: a,
                y: e
              }),
              topRight: l({
                x: t,
                y: e
              }, {
                x: t + r,
                y: e
              }, {
                x: a,
                y: h - s
              }, {
                x: a,
                y: h
              }),
              bottomRight: l({
                x: a,
                y: e
              }, {
                x: a,
                y: e + s
              }, {
                x: t + r,
                y: h
              }, {
                x: t,
                y: h
              }),
              bottomLeft: l({
                x: a,
                y: h
              }, {
                x: a - r,
                y: h
              }, {
                x: t,
                y: e + s
              }, {
                x: t,
                y: e
              })
            }
          }

          function c(t, e, n) {
            var o = t.left,
              i = t.top,
              r = t.width,
              s = t.height,
              a = e[0][0] < r / 2 ? e[0][0] : r / 2,
              c = e[0][1] < s / 2 ? e[0][1] : s / 2,
              l = e[1][0] < r / 2 ? e[1][0] : r / 2,
              d = e[1][1] < s / 2 ? e[1][1] : s / 2,
              p = e[2][0] < r / 2 ? e[2][0] : r / 2,
              u = e[2][1] < s / 2 ? e[2][1] : s / 2,
              f = e[3][0] < r / 2 ? e[3][0] : r / 2,
              g = e[3][1] < s / 2 ? e[3][1] : s / 2,
              m = r - l,
              y = s - u,
              v = r - p,
              w = s - g;
            return {
              topLeftOuter: h(o, i, a, c).topLeft.subdivide(.5),
              topLeftInner: h(o + n[3].width, i + n[0].width, Math.max(0, a - n[3].width), Math.max(0, c - n[0].width)).topLeft.subdivide(.5),
              topRightOuter: h(o + m, i, l, d).topRight.subdivide(.5),
              topRightInner: h(o + Math.min(m, r + n[3].width), i + n[0].width, m > r + n[3].width ? 0 : l - n[3].width, d - n[0].width).topRight.subdivide(.5),
              bottomRightOuter: h(o + v, i + y, p, u).bottomRight.subdivide(.5),
              bottomRightInner: h(o + Math.min(v, r - n[3].width), i + Math.min(y, s + n[0].width), Math.max(0, p - n[1].width), u - n[2].width).bottomRight.subdivide(.5),
              bottomLeftOuter: h(o, i + w, f, g).bottomLeft.subdivide(.5),
              bottomLeftInner: h(o + n[3].width, i + w, Math.max(0, f - n[3].width), g - n[2].width).bottomLeft.subdivide(.5)
            }
          }

          function l(t, e, n, o) {
            var i = function(t, e, n) {
              return {
                x: t.x + (e.x - t.x) * n,
                y: t.y + (e.y - t.y) * n
              }
            };
            return {
              start: t,
              startControl: e,
              endControl: n,
              end: o,
              subdivide: function(r) {
                var s = i(t, e, r),
                  a = i(e, n, r),
                  h = i(n, o, r),
                  c = i(s, a, r),
                  d = i(a, h, r),
                  p = i(c, d, r);
                return [l(t, s, c, p), l(p, d, h, o)]
              },
              curveTo: function(t) {
                t.push(["bezierCurve", e.x, e.y, n.x, n.y, o.x, o.y])
              },
              curveToReversed: function(o) {
                o.push(["bezierCurve", n.x, n.y, e.x, e.y, t.x, t.y])
              }
            }
          }

          function d(t, e, n, o, i, r, s) {
            var a = [];
            return e[0] > 0 || e[1] > 0 ? (a.push(["line", o[1].start.x, o[1].start.y]), o[1].curveTo(a)) : a.push(["line", t.c1[0], t.c1[1]]), n[0] > 0 || n[1] > 0 ? (a.push(["line", r[0].start.x, r[0].start.y]), r[0].curveTo(a), a.push(["line", s[0].end.x, s[0].end.y]), s[0].curveToReversed(a)) : (a.push(["line", t.c2[0], t.c2[1]]), a.push(["line", t.c3[0], t.c3[1]])), e[0] > 0 || e[1] > 0 ? (a.push(["line", i[1].end.x, i[1].end.y]), i[1].curveToReversed(a)) : a.push(["line", t.c4[0], t.c4[1]]), a
          }

          function p(t, e, n, o, i, r, s) {
            e[0] > 0 || e[1] > 0 ? (t.push(["line", o[0].start.x, o[0].start.y]), o[0].curveTo(t), o[1].curveTo(t)) : t.push(["line", r, s]), (n[0] > 0 || n[1] > 0) && t.push(["line", i[0].start.x, i[0].start.y])
          }

          function u(t) {
            return t.cssInt("zIndex") < 0
          }

          function f(t) {
            return t.cssInt("zIndex") > 0
          }

          function g(t) {
            return 0 === t.cssInt("zIndex")
          }

          function m(t) {
            return ["inline", "inline-block", "inline-table"].indexOf(t.css("display")) !== -1
          }

          function y(t) {
            return t instanceof q
          }

          function v(t) {
            return t.node.data.trim().length > 0
          }

          function w(t) {
            return /^(normal|none|0px)$/.test(t.parent.css("letterSpacing"))
          }

          function b(t) {
            return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(e) {
              var n = t.css("border" + e + "Radius"),
                o = n.split(" ");
              return o.length <= 1 && (o[1] = o[0]), o.map(P)
            })
          }

          function x(t) {
            return t.nodeType === Node.TEXT_NODE || t.nodeType === Node.ELEMENT_NODE
          }

          function C(t) {
            var e = t.css("position"),
              n = ["absolute", "relative", "fixed"].indexOf(e) !== -1 ? t.css("zIndex") : "auto";
            return "auto" !== n
          }

          function T(t) {
            return "static" !== t.css("position")
          }

          function k(t) {
            return "none" !== t.css("float")
          }

          function E(t) {
            return ["inline-block", "inline-table"].indexOf(t.css("display")) !== -1
          }

          function I(t) {
            var e = this;
            return function() {
              return !t.apply(e, arguments)
            }
          }

          function S(t) {
            return t.node.nodeType === Node.ELEMENT_NODE
          }

          function R(t) {
            return t.isPseudoElement === !0
          }

          function M(t) {
            return t.node.nodeType === Node.TEXT_NODE
          }

          function O(t) {
            return function(e, n) {
              return e.cssInt("zIndex") + t.indexOf(e) / t.length - (n.cssInt("zIndex") + t.indexOf(n) / t.length)
            }
          }

          function _(t) {
            return t.getOpacity() < 1
          }

          function P(t) {
            return parseInt(t, 10)
          }

          function A(t) {
            return t.width
          }

          function D(t) {
            return t.node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(t.node.nodeName) === -1
          }

          function L(t) {
            return [].concat.apply([], t)
          }

          function H(t) {
            var e = t.substr(0, 1);
            return e === t.substr(t.length - 1) && e.match(/'|"/) ? t.substr(1, t.length - 2) : t
          }

          function B(t) {
            for (var e, n = [], o = 0, i = !1; t.length;) N(t[o]) === i ? (e = t.splice(0, o), e.length && n.push($.ucs2.encode(e)), i = !i, o = 0) : o++, o >= t.length && (e = t.splice(0, o), e.length && n.push($.ucs2.encode(e)));
            return n
          }

          function N(t) {
            return [32, 13, 10, 9, 45].indexOf(t) !== -1
          }

          function F(t) {
            return /[^\u0000-\u00ff]/.test(t)
          }
          var V = t("./log"),
            $ = t("punycode"),
            z = t("./nodecontainer"),
            W = t("./textcontainer"),
            j = t("./pseudoelementcontainer"),
            U = t("./fontmetrics"),
            X = t("./color"),
            q = t("./stackingcontext"),
            G = t("./utils"),
            Y = G.bind,
            Q = G.getBounds,
            K = G.parseBackgrounds,
            J = G.offsetBounds;
          o.prototype.calculateOverflowClips = function() {
            this.nodes.forEach(function(t) {
              if (S(t)) {
                R(t) && t.appendToDOM(), t.borders = this.parseBorders(t);
                var e = "hidden" === t.css("overflow") ? [t.borders.clip] : [],
                  n = t.parseClip();
                n && ["absolute", "fixed"].indexOf(t.css("position")) !== -1 && e.push([
                  ["rect", t.bounds.left + n.left, t.bounds.top + n.top, n.right - n.left, n.bottom - n.top]
                ]), t.clip = i(t) ? t.parent.clip.concat(e) : e, t.backgroundClip = "hidden" !== t.css("overflow") ? t.clip.concat([t.borders.clip]) : t.clip, R(t) && t.cleanDOM()
              } else M(t) && (t.clip = i(t) ? t.parent.clip : []);
              R(t) || (t.bounds = null)
            }, this)
          }, o.prototype.asyncRenderer = function(t, e, n) {
            n = n || Date.now(), this.paint(t[this.renderIndex++]), t.length === this.renderIndex ? e() : n + 20 > Date.now() ? this.asyncRenderer(t, e, n) : setTimeout(Y(function() {
              this.asyncRenderer(t, e)
            }, this), 0)
          }, o.prototype.createPseudoHideStyles = function(t) {
            this.createStyles(t, "." + j.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + j.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
          }, o.prototype.disableAnimations = function(t) {
            this.createStyles(t, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
          }, o.prototype.createStyles = function(t, e) {
            var n = t.createElement("style");
            n.innerHTML = e, t.body.appendChild(n)
          }, o.prototype.getPseudoElements = function(t) {
            var e = [
              [t]
            ];
            if (t.node.nodeType === Node.ELEMENT_NODE) {
              var n = this.getPseudoElement(t, ":before"),
                o = this.getPseudoElement(t, ":after");
              n && e.push(n), o && e.push(o)
            }
            return L(e)
          }, o.prototype.getPseudoElement = function(t, e) {
            var n = t.computedStyle(e);
            if (!n || !n.content || "none" === n.content || "-moz-alt-content" === n.content || "none" === n.display) return null;
            for (var o = H(n.content), i = "url" === o.substr(0, 3), s = document.createElement(i ? "img" : "html2canvaspseudoelement"), a = new j(s, t, e), h = n.length - 1; h >= 0; h--) {
              var c = r(n.item(h));
              s.style[c] = n[c]
            }
            if (s.className = j.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + j.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER, i) return s.src = K(o)[0].args[0], [a];
            var l = document.createTextNode(o);
            return s.appendChild(l), [a, new W(l, a)]
          }, o.prototype.getChildren = function(t) {
            return L([].filter.call(t.node.childNodes, x).map(function(e) {
              var n = [e.nodeType === Node.TEXT_NODE ? new W(e, t) : new z(e, t)].filter(D);
              return e.nodeType === Node.ELEMENT_NODE && n.length && "TEXTAREA" !== e.tagName ? n[0].isElementVisible() ? n.concat(this.getChildren(n[0])) : [] : n
            }, this))
          }, o.prototype.newStackingContext = function(t, e) {
            var n = new q(e, t.getOpacity(), t.node, t.parent);
            t.cloneTo(n);
            var o = e ? n.getParentStack(this) : n.parent.stack;
            o.contexts.push(n), t.stack = n
          }, o.prototype.createStackingContexts = function() {
            this.nodes.forEach(function(t) {
              S(t) && (this.isRootElement(t) || _(t) || C(t) || this.isBodyWithTransparentRoot(t) || t.hasTransform()) ? this.newStackingContext(t, !0) : S(t) && (T(t) && g(t) || E(t) || k(t)) ? this.newStackingContext(t, !1) : t.assignStack(t.parent.stack)
            }, this)
          }, o.prototype.isBodyWithTransparentRoot = function(t) {
            return "BODY" === t.node.nodeName && t.parent.color("backgroundColor").isTransparent()
          }, o.prototype.isRootElement = function(t) {
            return null === t.parent
          }, o.prototype.sortStackingContexts = function(t) {
            t.contexts.sort(O(t.contexts.slice(0))), t.contexts.forEach(this.sortStackingContexts, this)
          }, o.prototype.parseTextBounds = function(t) {
            return function(e, n, o) {
              if ("none" !== t.parent.css("textDecoration").substr(0, 4) || 0 !== e.trim().length) {
                if (this.support.rangeBounds && !t.parent.hasTransform()) {
                  var i = o.slice(0, n).join("").length;
                  return this.getRangeBounds(t.node, i, e.length)
                }
                if (t.node && "string" == typeof t.node.data) {
                  var r = t.node.splitText(e.length),
                    s = this.getWrapperBounds(t.node, t.parent.hasTransform());
                  return t.node = r, s
                }
              } else this.support.rangeBounds && !t.parent.hasTransform() || (t.node = t.node.splitText(e.length));
              return {}
            }
          }, o.prototype.getWrapperBounds = function(t, e) {
            var n = t.ownerDocument.createElement("html2canvaswrapper"),
              o = t.parentNode,
              i = t.cloneNode(!0);
            n.appendChild(t.cloneNode(!0)), o.replaceChild(n, t);
            var r = e ? J(n) : Q(n);
            return o.replaceChild(i, n), r
          }, o.prototype.getRangeBounds = function(t, e, n) {
            var o = this.range || (this.range = t.ownerDocument.createRange());
            return o.setStart(t, e), o.setEnd(t, e + n), o.getBoundingClientRect()
          }, o.prototype.parse = function(t) {
            var e = t.contexts.filter(u),
              n = t.children.filter(S),
              o = n.filter(I(k)),
              i = o.filter(I(T)).filter(I(m)),
              r = n.filter(I(T)).filter(k),
              a = o.filter(I(T)).filter(m),
              h = t.contexts.concat(o.filter(T)).filter(g),
              c = t.children.filter(M).filter(v),
              l = t.contexts.filter(f);
            e.concat(i).concat(r).concat(a).concat(h).concat(c).concat(l).forEach(function(t) {
              this.renderQueue.push(t), y(t) && (this.parse(t), this.renderQueue.push(new s))
            }, this)
          }, o.prototype.paint = function(t) {
            try {
              t instanceof s ? this.renderer.ctx.restore() : M(t) ? (R(t.parent) && t.parent.appendToDOM(), this.paintText(t), R(t.parent) && t.parent.cleanDOM()) : this.paintNode(t)
            } catch (e) {
              if (V(e), this.options.strict) throw e
            }
          }, o.prototype.paintNode = function(t) {
            y(t) && (this.renderer.setOpacity(t.opacity), this.renderer.ctx.save(), t.hasTransform() && this.renderer.setTransform(t.parseTransform())), "INPUT" === t.node.nodeName && "checkbox" === t.node.type ? this.paintCheckbox(t) : "INPUT" === t.node.nodeName && "radio" === t.node.type ? this.paintRadio(t) : this.paintElement(t)
          }, o.prototype.paintElement = function(t) {
            var e = t.parseBounds();
            this.renderer.clip(t.backgroundClip, function() {
              this.renderer.renderBackground(t, e, t.borders.borders.map(A))
            }, this), this.renderer.clip(t.clip, function() {
              this.renderer.renderBorders(t.borders.borders)
            }, this), this.renderer.clip(t.backgroundClip, function() {
              switch (t.node.nodeName) {
                case "svg":
                case "IFRAME":
                  var n = this.images.get(t.node);
                  n ? this.renderer.renderImage(t, e, t.borders, n) : V("Error loading <" + t.node.nodeName + ">", t.node);
                  break;
                case "IMG":
                  var o = this.images.get(t.node.src);
                  o ? this.renderer.renderImage(t, e, t.borders, o) : V("Error loading <img>", t.node.src);
                  break;
                case "CANVAS":
                  this.renderer.renderImage(t, e, t.borders, {
                    image: t.node
                  });
                  break;
                case "SELECT":
                case "INPUT":
                case "TEXTAREA":
                  this.paintFormValue(t)
              }
            }, this)
          }, o.prototype.paintCheckbox = function(t) {
            var e = t.parseBounds(),
              n = Math.min(e.width, e.height),
              o = {
                width: n - 1,
                height: n - 1,
                top: e.top,
                left: e.left
              },
              i = [3, 3],
              r = [i, i, i, i],
              s = [1, 1, 1, 1].map(function(t) {
                return {
                  color: new X("#A5A5A5"),
                  width: t
                }
              }),
              h = c(o, r, s);
            this.renderer.clip(t.backgroundClip, function() {
              this.renderer.rectangle(o.left + 1, o.top + 1, o.width - 2, o.height - 2, new X("#DEDEDE")), this.renderer.renderBorders(a(s, o, h, r)), t.node.checked && (this.renderer.font(new X("#424242"), "normal", "normal", "bold", n - 3 + "px", "arial"), this.renderer.text("✔", o.left + n / 6, o.top + n - 1))
            }, this)
          }, o.prototype.paintRadio = function(t) {
            var e = t.parseBounds(),
              n = Math.min(e.width, e.height) - 2;
            this.renderer.clip(t.backgroundClip, function() {
              this.renderer.circleStroke(e.left + 1, e.top + 1, n, new X("#DEDEDE"), 1, new X("#A5A5A5")), t.node.checked && this.renderer.circle(Math.ceil(e.left + n / 4) + 1, Math.ceil(e.top + n / 4) + 1, Math.floor(n / 2), new X("#424242"))
            }, this)
          }, o.prototype.paintFormValue = function(t) {
            var e = t.getValue();
            if (e.length > 0) {
              var n = t.node.ownerDocument,
                o = n.createElement("html2canvaswrapper"),
                i = ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"];
              i.forEach(function(e) {
                try {
                  o.style[e] = t.css(e)
                } catch (n) {
                  V("html2canvas: Parse: Exception caught in renderFormValue: " + n.message)
                }
              });
              var r = t.parseBounds();
              o.style.position = "fixed", o.style.left = r.left + "px", o.style.top = r.top + "px", o.textContent = e, n.body.appendChild(o), this.paintText(new W(o.firstChild, t)), n.body.removeChild(o)
            }
          }, o.prototype.paintText = function(t) {
            t.applyTextTransform();
            var e = $.ucs2.decode(t.node.data),
              n = this.options.letterRendering && !w(t) || F(t.node.data) ? e.map(function(t) {
                return $.ucs2.encode([t])
              }) : B(e),
              o = t.parent.fontWeight(),
              i = t.parent.css("fontSize"),
              r = t.parent.css("fontFamily"),
              s = t.parent.parseTextShadows();
            this.renderer.font(t.parent.color("color"), t.parent.css("fontStyle"), t.parent.css("fontVariant"), o, i, r), s.length ? this.renderer.fontShadow(s[0].color, s[0].offsetX, s[0].offsetY, s[0].blur) : this.renderer.clearShadow(), this.renderer.clip(t.parent.clip, function() {
              n.map(this.parseTextBounds(t), this).forEach(function(e, o) {
                e && (this.renderer.text(n[o], e.left, e.bottom), this.renderTextDecoration(t.parent, e, this.fontMetrics.getMetrics(r, i)))
              }, this)
            }, this)
          }, o.prototype.renderTextDecoration = function(t, e, n) {
            switch (t.css("textDecoration").split(" ")[0]) {
              case "underline":
                this.renderer.rectangle(e.left, Math.round(e.top + n.baseline + n.lineWidth), e.width, 1, t.color("color"));
                break;
              case "overline":
                this.renderer.rectangle(e.left, Math.round(e.top), e.width, 1, t.color("color"));
                break;
              case "line-through":
                this.renderer.rectangle(e.left, Math.ceil(e.top + n.middle + n.lineWidth), e.width, 1, t.color("color"))
            }
          };
          var Z = {
            inset: [
              ["darken", .6],
              ["darken", .1],
              ["darken", .1],
              ["darken", .6]
            ]
          };
          o.prototype.parseBorders = function(t) {
            var e = t.parseBounds(),
              n = b(t),
              o = ["Top", "Right", "Bottom", "Left"].map(function(e, n) {
                var o = t.css("border" + e + "Style"),
                  i = t.color("border" + e + "Color");
                "inset" === o && i.isBlack() && (i = new X([255, 255, 255, i.a]));
                var r = Z[o] ? Z[o][n] : null;
                return {
                  width: t.cssInt("border" + e + "Width"),
                  color: r ? i[r[0]](r[1]) : i,
                  args: null
                }
              }),
              i = c(e, n, o);
            return {
              clip: this.parseBackgroundClip(t, i, o, n, e),
              borders: a(o, e, i, n)
            }
          }, o.prototype.parseBackgroundClip = function(t, e, n, o, i) {
            var r = t.css("backgroundClip"),
              s = [];
            switch (r) {
              case "content-box":
              case "padding-box":
                p(s, o[0], o[1], e.topLeftInner, e.topRightInner, i.left + n[3].width, i.top + n[0].width), p(s, o[1], o[2], e.topRightInner, e.bottomRightInner, i.left + i.width - n[1].width, i.top + n[0].width), p(s, o[2], o[3], e.bottomRightInner, e.bottomLeftInner, i.left + i.width - n[1].width, i.top + i.height - n[2].width), p(s, o[3], o[0], e.bottomLeftInner, e.topLeftInner, i.left + n[3].width, i.top + i.height - n[2].width);
                break;
              default:
                p(s, o[0], o[1], e.topLeftOuter, e.topRightOuter, i.left, i.top), p(s, o[1], o[2], e.topRightOuter, e.bottomRightOuter, i.left + i.width, i.top), p(s, o[2], o[3], e.bottomRightOuter, e.bottomLeftOuter, i.left + i.width, i.top + i.height), p(s, o[3], o[0], e.bottomLeftOuter, e.topLeftOuter, i.left, i.top + i.height)
            }
            return s
          }, e.exports = o
        }, {
          "./color": 3,
          "./fontmetrics": 7,
          "./log": 13,
          "./nodecontainer": 14,
          "./pseudoelementcontainer": 18,
          "./stackingcontext": 21,
          "./textcontainer": 25,
          "./utils": 26,
          punycode: 1
        }],
        16: [function(t, e, n) {
          function o(t, e, n) {
            var o = "withCredentials" in new XMLHttpRequest;
            if (!e) return Promise.reject("No proxy configured");
            var i = s(o),
              h = a(e, t, i);
            return o ? l(h) : r(n, h, i).then(function(t) {
              return f(t.content)
            })
          }

          function i(t, e, n) {
            var o = "crossOrigin" in new Image,
              i = s(o),
              h = a(e, t, i);
            return o ? Promise.resolve(h) : r(n, h, i).then(function(t) {
              return "data:" + t.type + ";base64," + t.content
            })
          }

          function r(t, e, n) {
            return new Promise(function(o, i) {
              var r = t.createElement("script"),
                s = function() {
                  delete window.html2canvas.proxy[n], t.body.removeChild(r)
                };
              window.html2canvas.proxy[n] = function(t) {
                s(), o(t)
              }, r.src = e, r.onerror = function(t) {
                s(), i(t)
              }, t.body.appendChild(r)
            })
          }

          function s(t) {
            return t ? "" : "html2canvas_" + Date.now() + "_" + ++g + "_" + Math.round(1e5 * Math.random())
          }

          function a(t, e, n) {
            return t + "?url=" + encodeURIComponent(e) + (n.length ? "&callback=html2canvas.proxy." + n : "")
          }

          function h(t) {
            return function(e) {
              var n, o = new DOMParser;
              try {
                n = o.parseFromString(e, "text/html")
              } catch (i) {
                p("DOMParser not supported, falling back to createHTMLDocument"), n = document.implementation.createHTMLDocument("");
                try {
                  n.open(), n.write(e), n.close()
                } catch (r) {
                  p("createHTMLDocument write not supported, falling back to document.body.innerHTML"), n.body.innerHTML = e
                }
              }
              var s = n.querySelector("base");
              if (!s || !s.href.host) {
                var a = n.createElement("base");
                a.href = t, n.head.insertBefore(a, n.head.firstChild)
              }
              return n
            }
          }

          function c(t, e, n, i, r, s) {
            return new o(t, e, window.document).then(h(t)).then(function(t) {
              return u(t, n, i, r, s, 0, 0)
            })
          }
          var l = t("./xhr"),
            d = t("./utils"),
            p = t("./log"),
            u = t("./clone"),
            f = d.decode64,
            g = 0;
          n.Proxy = o, n.ProxyURL = i, n.loadUrlDocument = c
        }, {
          "./clone": 2,
          "./log": 13,
          "./utils": 26,
          "./xhr": 28
        }],
        17: [function(t, e, n) {
          function o(t, e) {
            var n = document.createElement("a");
            n.href = t, t = n.href, this.src = t, this.image = new Image;
            var o = this;
            this.promise = new Promise(function(n, r) {
              o.image.crossOrigin = "Anonymous", o.image.onload = n, o.image.onerror = r, new i(t, e, document).then(function(t) {
                o.image.src = t
              })["catch"](r)
            })
          }
          var i = t("./proxy").ProxyURL;
          e.exports = o
        }, {
          "./proxy": 16
        }],
        18: [function(t, e, n) {
          function o(t, e, n) {
            i.call(this, t, e), this.isPseudoElement = !0, this.before = ":before" === n
          }
          var i = t("./nodecontainer");
          o.prototype.cloneTo = function(t) {
            o.prototype.cloneTo.call(this, t), t.isPseudoElement = !0, t.before = this.before
          }, o.prototype = Object.create(i.prototype), o.prototype.appendToDOM = function() {
            this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node), this.parent.node.className += " " + this.getHideClass()
          }, o.prototype.cleanDOM = function() {
            this.node.parentNode.removeChild(this.node), this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
          }, o.prototype.getHideClass = function() {
            return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")]
          }, o.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before", o.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after", e.exports = o
        }, {
          "./nodecontainer": 14
        }],
        19: [function(t, e, n) {
          function o(t, e, n, o, i) {
            this.width = t, this.height = e, this.images = n, this.options = o, this.document = i
          }
          var i = t("./log");
          o.prototype.renderImage = function(t, e, n, o) {
            var i = t.cssInt("paddingLeft"),
              r = t.cssInt("paddingTop"),
              s = t.cssInt("paddingRight"),
              a = t.cssInt("paddingBottom"),
              h = n.borders,
              c = e.width - (h[1].width + h[3].width + i + s),
              l = e.height - (h[0].width + h[2].width + r + a);
            this.drawImage(o, 0, 0, o.image.width || c, o.image.height || l, e.left + i + h[3].width, e.top + r + h[0].width, c, l)
          }, o.prototype.renderBackground = function(t, e, n) {
            e.height > 0 && e.width > 0 && (this.renderBackgroundColor(t, e), this.renderBackgroundImage(t, e, n))
          }, o.prototype.renderBackgroundColor = function(t, e) {
            var n = t.color("backgroundColor");
            n.isTransparent() || this.rectangle(e.left, e.top, e.width, e.height, n)
          }, o.prototype.renderBorders = function(t) {
            t.forEach(this.renderBorder, this)
          }, o.prototype.renderBorder = function(t) {
            t.color.isTransparent() || null === t.args || this.drawShape(t.args, t.color)
          }, o.prototype.renderBackgroundImage = function(t, e, n) {
            var o = t.parseBackgroundImages();
            o.reverse().forEach(function(o, r, s) {
              switch (o.method) {
                case "url":
                  var a = this.images.get(o.args[0]);
                  a ? this.renderBackgroundRepeating(t, e, a, s.length - (r + 1), n) : i("Error loading background-image", o.args[0]);
                  break;
                case "linear-gradient":
                case "gradient":
                  var h = this.images.get(o.value);
                  h ? this.renderBackgroundGradient(h, e, n) : i("Error loading background-image", o.args[0]);
                  break;
                case "none":
                  break;
                default:
                  i("Unknown background-image type", o.args[0])
              }
            }, this)
          }, o.prototype.renderBackgroundRepeating = function(t, e, n, o, i) {
            var r = t.parseBackgroundSize(e, n.image, o),
              s = t.parseBackgroundPosition(e, n.image, o, r),
              a = t.parseBackgroundRepeat(o);
            switch (a) {
              case "repeat-x":
              case "repeat no-repeat":
                this.backgroundRepeatShape(n, s, r, e, e.left + i[3], e.top + s.top + i[0], 99999, r.height, i);
                break;
              case "repeat-y":
              case "no-repeat repeat":
                this.backgroundRepeatShape(n, s, r, e, e.left + s.left + i[3], e.top + i[0], r.width, 99999, i);
                break;
              case "no-repeat":
                this.backgroundRepeatShape(n, s, r, e, e.left + s.left + i[3], e.top + s.top + i[0], r.width, r.height, i);
                break;
              default:
                this.renderBackgroundRepeat(n, s, r, {
                  top: e.top,
                  left: e.left
                }, i[3], i[0])
            }
          }, e.exports = o
        }, {
          "./log": 13
        }],
        20: [function(t, e, n) {
          function o(t, e) {
            r.apply(this, arguments), this.canvas = this.options.canvas || this.document.createElement("canvas"), this.options.canvas || (this.canvas.width = t, this.canvas.height = e), this.ctx = this.canvas.getContext("2d"), this.taintCtx = this.document.createElement("canvas").getContext("2d"), this.ctx.textBaseline = "bottom", this.variables = {}, a("Initialized CanvasRenderer with size", t, "x", e)
          }

          function i(t) {
            return t.length > 0
          }
          var r = t("../renderer"),
            s = t("../lineargradientcontainer"),
            a = t("../log");
          o.prototype = Object.create(r.prototype), o.prototype.setFillStyle = function(t) {
            return this.ctx.fillStyle = "object" == typeof t && t.isColor ? t.toString() : t, this.ctx
          }, o.prototype.rectangle = function(t, e, n, o, i) {
            this.setFillStyle(i).fillRect(t, e, n, o)
          }, o.prototype.circle = function(t, e, n, o) {
            this.setFillStyle(o), this.ctx.beginPath(), this.ctx.arc(t + n / 2, e + n / 2, n / 2, 0, 2 * Math.PI, !0), this.ctx.closePath(), this.ctx.fill()
          }, o.prototype.circleStroke = function(t, e, n, o, i, r) {
            this.circle(t, e, n, o), this.ctx.strokeStyle = r.toString(), this.ctx.stroke()
          }, o.prototype.drawShape = function(t, e) {
            this.shape(t), this.setFillStyle(e).fill()
          }, o.prototype.taints = function(t) {
            if (null === t.tainted) {
              this.taintCtx.drawImage(t.image, 0, 0);
              try {
                this.taintCtx.getImageData(0, 0, 1, 1), t.tainted = !1
              } catch (e) {
                this.taintCtx = document.createElement("canvas").getContext("2d"), t.tainted = !0
              }
            }
            return t.tainted
          }, o.prototype.drawImage = function(t, e, n, o, i, r, s, a, h) {
            this.taints(t) && !this.options.allowTaint || this.ctx.drawImage(t.image, e, n, o, i, r, s, a, h)
          }, o.prototype.clip = function(t, e, n) {
            this.ctx.save(), t.filter(i).forEach(function(t) {
              this.shape(t).clip()
            }, this), e.call(n), this.ctx.restore()
          }, o.prototype.shape = function(t) {
            return this.ctx.beginPath(), t.forEach(function(t, e) {
              "rect" === t[0] ? this.ctx.rect.apply(this.ctx, t.slice(1)) : this.ctx[0 === e ? "moveTo" : t[0] + "To"].apply(this.ctx, t.slice(1))
            }, this), this.ctx.closePath(), this.ctx
          }, o.prototype.font = function(t, e, n, o, i, r) {
            this.setFillStyle(t).font = [e, n, o, i, r].join(" ").split(",")[0]
          }, o.prototype.fontShadow = function(t, e, n, o) {
            this.setVariable("shadowColor", t.toString()).setVariable("shadowOffsetY", e).setVariable("shadowOffsetX", n).setVariable("shadowBlur", o)
          }, o.prototype.clearShadow = function() {
            this.setVariable("shadowColor", "rgba(0,0,0,0)")
          }, o.prototype.setOpacity = function(t) {
            this.ctx.globalAlpha = t
          }, o.prototype.setTransform = function(t) {
            this.ctx.translate(t.origin[0], t.origin[1]), this.ctx.transform.apply(this.ctx, t.matrix), this.ctx.translate(-t.origin[0], -t.origin[1])
          }, o.prototype.setVariable = function(t, e) {
            return this.variables[t] !== e && (this.variables[t] = this.ctx[t] = e), this
          }, o.prototype.text = function(t, e, n) {
            this.ctx.fillText(t, e, n)
          }, o.prototype.backgroundRepeatShape = function(t, e, n, o, i, r, s, a, h) {
            var c = [
              ["line", Math.round(i), Math.round(r)],
              ["line", Math.round(i + s), Math.round(r)],
              ["line", Math.round(i + s), Math.round(a + r)],
              ["line", Math.round(i), Math.round(a + r)]
            ];
            this.clip([c], function() {
              this.renderBackgroundRepeat(t, e, n, o, h[3], h[0])
            }, this)
          }, o.prototype.renderBackgroundRepeat = function(t, e, n, o, i, r) {
            var s = Math.round(o.left + e.left + i),
              a = Math.round(o.top + e.top + r);
            this.setFillStyle(this.ctx.createPattern(this.resizeImage(t, n), "repeat")), this.ctx.translate(s, a), this.ctx.fill(), this.ctx.translate(-s, -a)
          }, o.prototype.renderBackgroundGradient = function(t, e) {
            if (t instanceof s) {
              var n = this.ctx.createLinearGradient(e.left + e.width * t.x0, e.top + e.height * t.y0, e.left + e.width * t.x1, e.top + e.height * t.y1);
              t.colorStops.forEach(function(t) {
                n.addColorStop(t.stop, t.color.toString())
              }), this.rectangle(e.left, e.top, e.width, e.height, n)
            }
          }, o.prototype.resizeImage = function(t, e) {
            var n = t.image;
            if (n.width === e.width && n.height === e.height) return n;
            var o, i = document.createElement("canvas");
            return i.width = e.width, i.height = e.height, o = i.getContext("2d"), o.drawImage(n, 0, 0, n.width, n.height, 0, 0, e.width, e.height), i
          }, e.exports = o
        }, {
          "../lineargradientcontainer": 12,
          "../log": 13,
          "../renderer": 19
        }],
        21: [function(t, e, n) {
          function o(t, e, n, o) {
            i.call(this, n, o), this.ownStacking = t, this.contexts = [], this.children = [], this.opacity = (this.parent ? this.parent.stack.opacity : 1) * e
          }
          var i = t("./nodecontainer");
          o.prototype = Object.create(i.prototype), o.prototype.getParentStack = function(t) {
            var e = this.parent ? this.parent.stack : null;
            return e ? e.ownStacking ? e : e.getParentStack(t) : t.stack
          }, e.exports = o
        }, {
          "./nodecontainer": 14
        }],
        22: [function(t, e, n) {
          function o(t) {
            this.rangeBounds = this.testRangeBounds(t), this.cors = this.testCORS(), this.svg = this.testSVG()
          }
          o.prototype.testRangeBounds = function(t) {
            var e, n, o, i, r = !1;
            return t.createRange && (e = t.createRange(), e.getBoundingClientRect && (n = t.createElement("boundtest"), n.style.height = "123px", n.style.display = "block", t.body.appendChild(n), e.selectNode(n), o = e.getBoundingClientRect(), i = o.height, 123 === i && (r = !0), t.body.removeChild(n))), r
          }, o.prototype.testCORS = function() {
            return "undefined" != typeof(new Image).crossOrigin
          }, o.prototype.testSVG = function() {
            var t = new Image,
              e = document.createElement("canvas"),
              n = e.getContext("2d");
            t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
            try {
              n.drawImage(t, 0, 0), e.toDataURL()
            } catch (o) {
              return !1
            }
            return !0
          }, e.exports = o
        }, {}],
        23: [function(t, e, n) {
          function o(t) {
            this.src = t, this.image = null;
            var e = this;
            this.promise = this.hasFabric().then(function() {
              return e.isInline(t) ? Promise.resolve(e.inlineFormatting(t)) : i(t)
            }).then(function(t) {
              return new Promise(function(n) {
                window.html2canvas.svg.fabric.loadSVGFromString(t, e.createCanvas.call(e, n))
              })
            })
          }
          var i = t("./xhr"),
            r = t("./utils").decode64;
          o.prototype.hasFabric = function() {
            return window.html2canvas.svg && window.html2canvas.svg.fabric ? Promise.resolve() : Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))
          }, o.prototype.inlineFormatting = function(t) {
            return /^data:image\/svg\+xml;base64,/.test(t) ? this.decode64(this.removeContentType(t)) : this.removeContentType(t)
          }, o.prototype.removeContentType = function(t) {
            return t.replace(/^data:image\/svg\+xml(;base64)?,/, "")
          }, o.prototype.isInline = function(t) {
            return /^data:image\/svg\+xml/i.test(t)
          }, o.prototype.createCanvas = function(t) {
            var e = this;
            return function(n, o) {
              var i = new window.html2canvas.svg.fabric.StaticCanvas("c");
              e.image = i.lowerCanvasEl, i.setWidth(o.width).setHeight(o.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(n, o)).renderAll(), t(i.lowerCanvasEl)
            }
          }, o.prototype.decode64 = function(t) {
            return "function" == typeof window.atob ? window.atob(t) : r(t)
          }, e.exports = o
        }, {
          "./utils": 26,
          "./xhr": 28
        }],
        24: [function(t, e, n) {
          function o(t, e) {
            this.src = t, this.image = null;
            var n = this;
            this.promise = e ? new Promise(function(e, o) {
              n.image = new Image, n.image.onload = e, n.image.onerror = o, n.image.src = "data:image/svg+xml," + (new XMLSerializer).serializeToString(t), n.image.complete === !0 && e(n.image)
            }) : this.hasFabric().then(function() {
              return new Promise(function(e) {
                window.html2canvas.svg.fabric.parseSVGDocument(t, n.createCanvas.call(n, e))
              })
            })
          }
          var i = t("./svgcontainer");
          o.prototype = Object.create(i.prototype), e.exports = o
        }, {
          "./svgcontainer": 23
        }],
        25: [function(t, e, n) {
          function o(t, e) {
            r.call(this, t, e)
          }

          function i(t, e, n) {
            if (t.length > 0) return e + n.toUpperCase()
          }
          var r = t("./nodecontainer");
          o.prototype = Object.create(r.prototype), o.prototype.applyTextTransform = function() {
            this.node.data = this.transform(this.parent.css("textTransform"))
          }, o.prototype.transform = function(t) {
            var e = this.node.data;
            switch (t) {
              case "lowercase":
                return e.toLowerCase();
              case "capitalize":
                return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, i);
              case "uppercase":
                return e.toUpperCase();
              default:
                return e
            }
          }, e.exports = o
        }, {
          "./nodecontainer": 14
        }],
        26: [function(t, e, n) {
          n.smallImage = function() {
            return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          }, n.bind = function(t, e) {
            return function() {
              return t.apply(e, arguments)
            }
          }, n.decode64 = function(t) {
            var e, n, o, i, r, s, a, h, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              l = t.length,
              d = "";
            for (e = 0; e < l; e += 4) n = c.indexOf(t[e]), o = c.indexOf(t[e + 1]), i = c.indexOf(t[e + 2]), r = c.indexOf(t[e + 3]), s = n << 2 | o >> 4, a = (15 & o) << 4 | i >> 2, h = (3 & i) << 6 | r, d += 64 === i ? String.fromCharCode(s) : 64 === r || r === -1 ? String.fromCharCode(s, a) : String.fromCharCode(s, a, h);
            return d
          }, n.getBounds = function(t) {
            if (t.getBoundingClientRect) {
              var e = t.getBoundingClientRect(),
                n = null == t.offsetWidth ? e.width : t.offsetWidth;
              return {
                top: e.top,
                bottom: e.bottom || e.top + e.height,
                right: e.left + n,
                left: e.left,
                width: n,
                height: null == t.offsetHeight ? e.height : t.offsetHeight
              }
            }
            return {}
          }, n.offsetBounds = function(t) {
            var e = t.offsetParent ? n.offsetBounds(t.offsetParent) : {
              top: 0,
              left: 0
            };
            return {
              top: t.offsetTop + e.top,
              bottom: t.offsetTop + t.offsetHeight + e.top,
              right: t.offsetLeft + e.left + t.offsetWidth,
              left: t.offsetLeft + e.left,
              width: t.offsetWidth,
              height: t.offsetHeight
            }
          }, n.parseBackgrounds = function(t) {
            var e, n, o, i, r, s, a, h = " \r\n\t",
              c = [],
              l = 0,
              d = 0,
              p = function() {
                e && ('"' === n.substr(0, 1) && (n = n.substr(1, n.length - 2)), n && a.push(n), "-" === e.substr(0, 1) && (i = e.indexOf("-", 1) + 1) > 0 && (o = e.substr(0, i), e = e.substr(i)), c.push({
                  prefix: o,
                  method: e.toLowerCase(),
                  value: r,
                  args: a,
                  image: null
                })), a = [], e = o = n = r = ""
              };
            return a = [], e = o = n = r = "", t.split("").forEach(function(t) {
              if (!(0 === l && h.indexOf(t) > -1)) {
                switch (t) {
                  case '"':
                    s ? s === t && (s = null) : s = t;
                    break;
                  case "(":
                    if (s) break;
                    if (0 === l) return l = 1, void(r += t);
                    d++;
                    break;
                  case ")":
                    if (s) break;
                    if (1 === l) {
                      if (0 === d) return l = 0, r += t, void p();
                      d--
                    }
                    break;
                  case ",":
                    if (s) break;
                    if (0 === l) return void p();
                    if (1 === l && 0 === d && !e.match(/^url$/i)) return a.push(n), n = "", void(r += t)
                }
                r += t, 0 === l ? e += t : n += t
              }
            }), p(), c
          }
        }, {}],
        27: [function(t, e, n) {
          function o(t) {
            i.apply(this, arguments), this.type = "linear" === t.args[0] ? i.TYPES.LINEAR : i.TYPES.RADIAL
          }
          var i = t("./gradientcontainer");
          o.prototype = Object.create(i.prototype), e.exports = o
        }, {
          "./gradientcontainer": 9
        }],
        28: [function(t, e, n) {
          function o(t) {
            return new Promise(function(e, n) {
              var o = new XMLHttpRequest;
              o.open("GET", t), o.onload = function() {
                200 === o.status ? e(o.responseText) : n(new Error(o.statusText))
              }, o.onerror = function() {
                n(new Error("Network Error"))
              }, o.send()
            })
          }
          e.exports = o
        }, {}]
      }, {}, [4])(4)
    })
  }
});
//# sourceMappingURL=16-c61a068f932988d1b6ca.js.map