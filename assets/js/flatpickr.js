function FlatpickrInstance(e, t) {
  function n(e) {
    return e.bind(de);
  }
  function a(e) {
    de.config.noCalendar &&
      !de.selectedDates.length &&
      (de.selectedDates = [de.now]),
      se(e),
      de.selectedDates.length &&
        (!de.minDateHasTime || "input" !== e.type || e.target.value.length >= 2
          ? (i(), ee())
          : setTimeout(function() {
              i(), ee();
            }, 1e3));
  }
  function i() {
    if (de.config.enableTime) {
      var e = (parseInt(de.hourElement.value, 10) || 0) % (de.amPM ? 12 : 24),
        t = (parseInt(de.minuteElement.value, 10) || 0) % 60,
        n = de.config.enableSeconds
          ? (parseInt(de.secondElement.value, 10) || 0) % 60
          : 0;
      void 0 !== de.amPM && (e = e % 12 + 12 * ("PM" === de.amPM.textContent)),
        de.minDateHasTime &&
          0 === ce(de.latestSelectedDateObj, de.config.minDate) &&
          (e = Math.max(e, de.config.minDate.getHours())) ===
            de.config.minDate.getHours() &&
          (t = Math.max(t, de.config.minDate.getMinutes())),
        de.maxDateHasTime &&
          0 === ce(de.latestSelectedDateObj, de.config.maxDate) &&
          (e = Math.min(e, de.config.maxDate.getHours())) ===
            de.config.maxDate.getHours() &&
          (t = Math.min(t, de.config.maxDate.getMinutes())),
        o(e, t, n);
    }
  }
  function r(e) {
    var t = e || de.latestSelectedDateObj;
    t && o(t.getHours(), t.getMinutes(), t.getSeconds());
  }
  function o(e, t, n) {
    de.selectedDates.length &&
      de.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0),
      de.config.enableTime &&
        !de.isMobile &&
        ((de.hourElement.value = de.pad(
          de.config.time_24hr ? e : (12 + e) % 12 + 12 * (e % 12 == 0)
        )),
        (de.minuteElement.value = de.pad(t)),
        de.config.time_24hr || (de.amPM.textContent = e >= 12 ? "PM" : "AM"),
        !0 === de.config.enableSeconds && (de.secondElement.value = de.pad(n)));
  }
  function l(e) {
    var t = e.target.value;
    e.delta && (t = (parseInt(t) + e.delta).toString()),
      (4 !== t.length && "Enter" !== e.key) ||
        (de.currentYearElement.blur(), /[^\d]/.test(t) || S(t));
  }
  function c(e, t, n) {
    return t instanceof Array
      ? t.forEach(function(t) {
          return c(e, t, n);
        })
      : e instanceof Array
        ? e.forEach(function(e) {
            return c(e, t, n);
          })
        : (e.addEventListener(t, n),
          void de._handlers.push({ element: e, event: t, handler: n }));
  }
  function s(e) {
    return function(t) {
      return 1 === t.which && e(t);
    };
  }
  function d() {
    if (
      ((de._handlers = []),
      (de._animationLoop = []),
      de.config.wrap &&
        ["open", "close", "toggle", "clear"].forEach(function(e) {
          Array.prototype.forEach.call(
            de.element.querySelectorAll("[data-" + e + "]"),
            function(t) {
              return c(t, "mousedown", s(de[e]));
            }
          );
        }),
      de.isMobile)
    )
      return q();
    if (
      ((de.debouncedResize = le(A, 50)),
      (de.triggerChange = function() {
        G("Change");
      }),
      (de.debouncedChange = le(de.triggerChange, 300)),
      "range" === de.config.mode &&
        de.daysContainer &&
        c(de.daysContainer, "mouseover", function(e) {
          return O(e.target);
        }),
      c(window.document.body, "keydown", Y),
      de.config.static || c(de._input, "keydown", Y),
      de.config.inline ||
        de.config.static ||
        c(window, "resize", de.debouncedResize),
      void 0 !== window.ontouchstart && c(window.document, "touchstart", I),
      c(window.document, "mousedown", s(I)),
      c(de._input, "blur", I),
      !0 === de.config.clickOpens &&
        (c(de._input, "focus", de.open), c(de._input, "mousedown", s(de.open))),
      de.config.noCalendar ||
        (de.monthNav.addEventListener("wheel", function(e) {
          return e.preventDefault();
        }),
        c(de.monthNav, "wheel", le(ne, 10)),
        c(de.monthNav, "mousedown", s(ae)),
        c(de.monthNav, ["keyup", "increment"], l),
        c(de.daysContainer, "mousedown", s(W)),
        de.config.animate &&
          (c(de.daysContainer, ["webkitAnimationEnd", "animationend"], f),
          c(de.monthNav, ["webkitAnimationEnd", "animationend"], m))),
      de.config.enableTime)
    ) {
      c(de.timeContainer, ["wheel", "input", "increment"], a),
        c(de.timeContainer, "mousedown", s(p)),
        c(de.timeContainer, ["wheel", "increment"], de.debouncedChange),
        c(de.timeContainer, "input", de.triggerChange),
        c([de.hourElement, de.minuteElement], "focus", function(e) {
          return e.target.select();
        }),
        void 0 !== de.secondElement &&
          c(de.secondElement, "focus", function() {
            return de.secondElement.select();
          }),
        void 0 !== de.amPM &&
          c(
            de.amPM,
            "mousedown",
            s(function(e) {
              a(e), de.triggerChange(e);
            })
          );
    }
  }
  function u() {
    for (var e = de._animationLoop.length; e--; )
      de._animationLoop[e](), de._animationLoop.splice(e, 1);
  }
  function f(e) {
    if (de.daysContainer.childNodes.length > 1)
      switch (e.animationName) {
        case "fpSlideLeft":
          de.daysContainer.lastChild.classList.remove("slideLeftNew"),
            de.daysContainer.removeChild(de.daysContainer.firstChild),
            (de.days = de.daysContainer.firstChild),
            u();
          break;
        case "fpSlideRight":
          de.daysContainer.firstChild.classList.remove("slideRightNew"),
            de.daysContainer.removeChild(de.daysContainer.lastChild),
            (de.days = de.daysContainer.firstChild),
            u();
      }
  }
  function m(e) {
    switch (e.animationName) {
      case "fpSlideLeftNew":
      case "fpSlideRightNew":
        de.navigationCurrentMonth.classList.remove("slideLeftNew"),
          de.navigationCurrentMonth.classList.remove("slideRightNew");
        for (
          var t = de.navigationCurrentMonth;
          t.nextSibling && /curr/.test(t.nextSibling.className);

        )
          de.monthNav.removeChild(t.nextSibling);
        for (; t.previousSibling && /curr/.test(t.previousSibling.className); )
          de.monthNav.removeChild(t.previousSibling);
        de.oldCurMonth = null;
    }
  }
  function g(e) {
    e = e
      ? de.parseDate(e)
      : de.latestSelectedDateObj ||
        (de.config.minDate > de.now
          ? de.config.minDate
          : de.config.maxDate && de.config.maxDate < de.now
            ? de.config.maxDate
            : de.now);
    try {
      (de.currentYear = e.getFullYear()), (de.currentMonth = e.getMonth());
    } catch (t) {
      console.error(t.stack), console.warn("Invalid date supplied: " + e);
    }
    de.redraw();
  }
  function p(e) {
    ~e.target.className.indexOf("arrow") &&
      h(e, e.target.classList.contains("arrowUp") ? 1 : -1);
  }
  function h(e, t, n) {
    var a = n || e.target.parentNode.childNodes[0],
      i = V("increment");
    (i.delta = t), a.dispatchEvent(i);
  }
  function D(e) {
    var t = ie("div", "numInputWrapper"),
      n = ie("input", "numInput " + e),
      a = ie("span", "arrowUp"),
      i = ie("span", "arrowDown");
    return (
      (n.type = "text"),
      (n.pattern = "\\d*"),
      t.appendChild(n),
      t.appendChild(a),
      t.appendChild(i),
      t
    );
  }
  function v() {
    var e = window.document.createDocumentFragment();
    (de.calendarContainer = ie("div", "flatpickr-calendar")),
      (de.calendarContainer.tabIndex = -1),
      de.config.noCalendar ||
        (e.appendChild(k()),
        (de.innerContainer = ie("div", "flatpickr-innerContainer")),
        de.config.weekNumbers && de.innerContainer.appendChild(_()),
        (de.rContainer = ie("div", "flatpickr-rContainer")),
        de.rContainer.appendChild(E()),
        de.daysContainer ||
          ((de.daysContainer = ie("div", "flatpickr-days")),
          (de.daysContainer.tabIndex = -1)),
        M(),
        de.rContainer.appendChild(de.daysContainer),
        de.innerContainer.appendChild(de.rContainer),
        e.appendChild(de.innerContainer)),
      de.config.enableTime && e.appendChild(x()),
      oe(de.calendarContainer, "rangeMode", "range" === de.config.mode),
      oe(de.calendarContainer, "animate", de.config.animate),
      de.calendarContainer.appendChild(e);
    var t = de.config.appendTo && de.config.appendTo.nodeType;
    if (de.config.inline || de.config.static) {
      if (
        (de.calendarContainer.classList.add(
          de.config.inline ? "inline" : "static"
        ),
        de.config.inline && !t)
      )
        return de.element.parentNode.insertBefore(
          de.calendarContainer,
          de._input.nextSibling
        );
      if (de.config.static) {
        var n = ie("div", "flatpickr-wrapper");
        return (
          de.element.parentNode.insertBefore(n, de.element),
          n.appendChild(de.element),
          de.altInput && n.appendChild(de.altInput),
          void n.appendChild(de.calendarContainer)
        );
      }
    }
    (t ? de.config.appendTo : window.document.body).appendChild(
      de.calendarContainer
    );
  }
  function C(e, t, n, a) {
    var i = F(t, !0),
      r = ie("span", "flatpickr-day " + e, t.getDate());
    return (
      (r.dateObj = t),
      (r.$i = a),
      r.setAttribute("aria-label", de.formatDate(t, de.config.ariaDateFormat)),
      0 === ce(t, de.now) && ((de.todayDateElem = r), r.classList.add("today")),
      i
        ? ((r.tabIndex = -1),
          Z(t) &&
            (r.classList.add("selected"),
            (de.selectedDateElem = r),
            "range" === de.config.mode &&
              (oe(r, "startRange", 0 === ce(t, de.selectedDates[0])),
              oe(r, "endRange", 0 === ce(t, de.selectedDates[1])))))
        : (r.classList.add("disabled"),
          de.selectedDates[0] && t > de.minRangeDate && t < de.selectedDates[0]
            ? (de.minRangeDate = t)
            : de.selectedDates[0] &&
              t < de.maxRangeDate &&
              t > de.selectedDates[0] &&
              (de.maxRangeDate = t)),
      "range" === de.config.mode &&
        (Q(t) && !Z(t) && r.classList.add("inRange"),
        1 === de.selectedDates.length &&
          (t < de.minRangeDate || t > de.maxRangeDate) &&
          r.classList.add("notAllowed")),
      de.config.weekNumbers &&
        "prevMonthDay" !== e &&
        n % 7 == 1 &&
        de.weekNumbers.insertAdjacentHTML(
          "beforeend",
          "<span class='disabled flatpickr-day'>" +
            de.config.getWeek(t) +
            "</span>"
        ),
      G("DayCreate", r),
      r
    );
  }
  function w(e, t) {
    var n = e + t || 0,
      a =
        void 0 !== e
          ? de.days.childNodes[n]
          : de.selectedDateElem || de.todayDateElem || de.days.childNodes[0],
      i = function() {
        (a = a || de.days.childNodes[n]).focus(),
          "range" === de.config.mode && O(a);
      };
    if (void 0 === a && 0 !== t)
      return (
        t > 0
          ? (de.changeMonth(1), (n %= 42))
          : t < 0 && (de.changeMonth(-1), (n += 42)),
        b(i)
      );
    i();
  }
  function b(e) {
    if (!0 === de.config.animate) return de._animationLoop.push(e);
    e();
  }
  function M(e) {
    var t =
        (new Date(de.currentYear, de.currentMonth, 1).getDay() -
          de.l10n.firstDayOfWeek +
          7) %
        7,
      n = "range" === de.config.mode;
    (de.prevMonthDays = de.utils.getDaysinMonth(
      (de.currentMonth - 1 + 12) % 12
    )),
      (de.selectedDateElem = void 0),
      (de.todayDateElem = void 0);
    var a = de.utils.getDaysinMonth(),
      i = window.document.createDocumentFragment(),
      r = de.prevMonthDays + 1 - t,
      o = 0;
    for (
      de.config.weekNumbers &&
        de.weekNumbers.firstChild &&
        (de.weekNumbers.textContent = ""),
        n &&
          ((de.minRangeDate = new Date(de.currentYear, de.currentMonth - 1, r)),
          (de.maxRangeDate = new Date(
            de.currentYear,
            de.currentMonth + 1,
            (42 - t) % a
          )));
      r <= de.prevMonthDays;
      r++, o++
    )
      i.appendChild(
        C(
          "prevMonthDay",
          new Date(de.currentYear, de.currentMonth - 1, r),
          r,
          o
        )
      );
    for (r = 1; r <= a; r++, o++)
      i.appendChild(C("", new Date(de.currentYear, de.currentMonth, r), r, o));
    for (var l = a + 1; l <= 42 - t; l++, o++)
      i.appendChild(
        C(
          "nextMonthDay",
          new Date(de.currentYear, de.currentMonth + 1, l % a),
          l,
          o
        )
      );
    n && 1 === de.selectedDates.length && i.childNodes[0]
      ? ((de._hidePrevMonthArrow =
          de._hidePrevMonthArrow || de.minRangeDate > i.childNodes[0].dateObj),
        (de._hideNextMonthArrow =
          de._hideNextMonthArrow ||
          de.maxRangeDate < new Date(de.currentYear, de.currentMonth + 1, 1)))
      : X();
    var c = ie("div", "dayContainer");
    if ((c.appendChild(i), de.config.animate && void 0 !== e))
      for (; de.daysContainer.childNodes.length > 1; )
        de.daysContainer.removeChild(de.daysContainer.firstChild);
    else y(de.daysContainer);
    return (
      e >= 0
        ? de.daysContainer.appendChild(c)
        : de.daysContainer.insertBefore(c, de.daysContainer.firstChild),
      (de.days = de.daysContainer.firstChild),
      de.daysContainer
    );
  }
  function y(e) {
    for (; e.firstChild; ) e.removeChild(e.firstChild);
  }
  function k() {
    var e = window.document.createDocumentFragment();
    (de.monthNav = ie("div", "flatpickr-month")),
      (de.prevMonthNav = ie("span", "flatpickr-prev-month")),
      (de.prevMonthNav.innerHTML = de.config.prevArrow),
      (de.currentMonthElement = ie("span", "cur-month")),
      (de.currentMonthElement.title = de.l10n.scrollTitle);
    var t = D("cur-year");
    return (
      (de.currentYearElement = t.childNodes[0]),
      (de.currentYearElement.title = de.l10n.scrollTitle),
      de.config.minDate &&
        (de.currentYearElement.min = de.config.minDate.getFullYear()),
      de.config.maxDate &&
        ((de.currentYearElement.max = de.config.maxDate.getFullYear()),
        (de.currentYearElement.disabled =
          de.config.minDate &&
          de.config.minDate.getFullYear() === de.config.maxDate.getFullYear())),
      (de.nextMonthNav = ie("span", "flatpickr-next-month")),
      (de.nextMonthNav.innerHTML = de.config.nextArrow),
      (de.navigationCurrentMonth = ie("span", "flatpickr-current-month")),
      de.navigationCurrentMonth.appendChild(de.currentMonthElement),
      de.navigationCurrentMonth.appendChild(t),
      e.appendChild(de.prevMonthNav),
      e.appendChild(de.navigationCurrentMonth),
      e.appendChild(de.nextMonthNav),
      de.monthNav.appendChild(e),
      Object.defineProperty(de, "_hidePrevMonthArrow", {
        get: function() {
          return this.__hidePrevMonthArrow;
        },
        set: function(e) {
          this.__hidePrevMonthArrow !== e &&
            (de.prevMonthNav.style.display = e ? "none" : "block"),
            (this.__hidePrevMonthArrow = e);
        }
      }),
      Object.defineProperty(de, "_hideNextMonthArrow", {
        get: function() {
          return this.__hideNextMonthArrow;
        },
        set: function(e) {
          this.__hideNextMonthArrow !== e &&
            (de.nextMonthNav.style.display = e ? "none" : "block"),
            (this.__hideNextMonthArrow = e);
        }
      }),
      X(),
      de.monthNav
    );
  }
  function x() {
    de.calendarContainer.classList.add("hasTime"),
      de.config.noCalendar && de.calendarContainer.classList.add("noCalendar"),
      (de.timeContainer = ie("div", "flatpickr-time")),
      (de.timeContainer.tabIndex = -1);
    var e = ie("span", "flatpickr-time-separator", ":"),
      t = D("flatpickr-hour");
    de.hourElement = t.childNodes[0];
    var n = D("flatpickr-minute");
    if (
      ((de.minuteElement = n.childNodes[0]),
      (de.hourElement.tabIndex = de.minuteElement.tabIndex = -1),
      (de.hourElement.value = de.pad(
        de.latestSelectedDateObj
          ? de.latestSelectedDateObj.getHours()
          : de.config.defaultHour % (de.time_24hr ? 24 : 12)
      )),
      (de.minuteElement.value = de.pad(
        de.latestSelectedDateObj
          ? de.latestSelectedDateObj.getMinutes()
          : de.config.defaultMinute
      )),
      (de.hourElement.step = de.config.hourIncrement),
      (de.minuteElement.step = de.config.minuteIncrement),
      (de.hourElement.min = de.config.time_24hr ? 0 : 1),
      (de.hourElement.max = de.config.time_24hr ? 23 : 12),
      (de.minuteElement.min = 0),
      (de.minuteElement.max = 59),
      (de.hourElement.title = de.minuteElement.title = de.l10n.scrollTitle),
      de.timeContainer.appendChild(t),
      de.timeContainer.appendChild(e),
      de.timeContainer.appendChild(n),
      de.config.time_24hr && de.timeContainer.classList.add("time24hr"),
      de.config.enableSeconds)
    ) {
      de.timeContainer.classList.add("hasSeconds");
      var a = D("flatpickr-second");
      (de.secondElement = a.childNodes[0]),
        (de.secondElement.value = de.pad(
          de.latestSelectedDateObj
            ? de.latestSelectedDateObj.getSeconds()
            : de.config.defaultSeconds
        )),
        (de.secondElement.step = de.minuteElement.step),
        (de.secondElement.min = de.minuteElement.min),
        (de.secondElement.max = de.minuteElement.max),
        de.timeContainer.appendChild(
          ie("span", "flatpickr-time-separator", ":")
        ),
        de.timeContainer.appendChild(a);
    }
    return (
      de.config.time_24hr ||
        ((de.amPM = ie(
          "span",
          "flatpickr-am-pm",
          ["AM", "PM"][
            ((de.latestSelectedDateObj
              ? de.hourElement.value
              : de.config.defaultHour) >
              11) |
              0
          ]
        )),
        (de.amPM.title = de.l10n.toggleTitle),
        (de.amPM.tabIndex = -1),
        de.timeContainer.appendChild(de.amPM)),
      de.timeContainer
    );
  }
  function E() {
    de.weekdayContainer ||
      (de.weekdayContainer = ie("div", "flatpickr-weekdays"));
    var e = de.l10n.firstDayOfWeek,
      t = de.l10n.weekdays.shorthand.slice();
    return (
      e > 0 &&
        e < t.length &&
        (t = [].concat(t.splice(e, t.length), t.splice(0, e))),
      (de.weekdayContainer.innerHTML =
        "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" +
        t.join("</span><span class=flatpickr-weekday>") +
        "\n\t\t</span>\n\t\t"),
      de.weekdayContainer
    );
  }
  function _() {
    return (
      de.calendarContainer.classList.add("hasWeeks"),
      (de.weekWrapper = ie("div", "flatpickr-weekwrapper")),
      de.weekWrapper.appendChild(
        ie("span", "flatpickr-weekday", de.l10n.weekAbbreviation)
      ),
      (de.weekNumbers = ie("div", "flatpickr-weeks")),
      de.weekWrapper.appendChild(de.weekNumbers),
      de.weekWrapper
    );
  }
  function N(e, t, n) {
    var a = (t = void 0 === t || t) ? e : e - de.currentMonth,
      i = !de.config.animate || !1 === n;
    if (
      !((a < 0 && de._hidePrevMonthArrow) || (a > 0 && de._hideNextMonthArrow))
    ) {
      if (
        ((de.currentMonth += a),
        (de.currentMonth < 0 || de.currentMonth > 11) &&
          ((de.currentYear += de.currentMonth > 11 ? 1 : -1),
          (de.currentMonth = (de.currentMonth + 12) % 12),
          G("YearChange")),
        M(i ? void 0 : a),
        i)
      )
        return G("MonthChange"), X();
      var r = de.navigationCurrentMonth;
      if (a < 0)
        for (; r.nextSibling && /curr/.test(r.nextSibling.className); )
          de.monthNav.removeChild(r.nextSibling);
      else if (a > 0)
        for (; r.previousSibling && /curr/.test(r.previousSibling.className); )
          de.monthNav.removeChild(r.previousSibling);
      if (
        ((de.oldCurMonth = de.navigationCurrentMonth),
        (de.navigationCurrentMonth = de.monthNav.insertBefore(
          de.oldCurMonth.cloneNode(!0),
          a > 0 ? de.oldCurMonth.nextSibling : de.oldCurMonth
        )),
        a > 0
          ? (de.daysContainer.firstChild.classList.add("slideLeft"),
            de.daysContainer.lastChild.classList.add("slideLeftNew"),
            de.oldCurMonth.classList.add("slideLeft"),
            de.navigationCurrentMonth.classList.add("slideLeftNew"))
          : a < 0 &&
            (de.daysContainer.firstChild.classList.add("slideRightNew"),
            de.daysContainer.lastChild.classList.add("slideRight"),
            de.oldCurMonth.classList.add("slideRight"),
            de.navigationCurrentMonth.classList.add("slideRightNew")),
        (de.currentMonthElement = de.navigationCurrentMonth.firstChild),
        (de.currentYearElement =
          de.navigationCurrentMonth.lastChild.childNodes[0]),
        X(),
        (de.oldCurMonth.firstChild.textContent = de.utils.monthToStr(
          de.currentMonth - a
        )),
        G("MonthChange"),
        document.activeElement && document.activeElement.$i)
      ) {
        var o = document.activeElement.$i;
        b(function() {
          w(o, 0);
        });
      }
    }
  }
  function T(e) {
    return (
      !(!de.config.appendTo || !de.config.appendTo.contains(e)) ||
      de.calendarContainer.contains(e)
    );
  }
  function I(e) {
    if (de.isOpen && !de.config.inline) {
      var t = T(e.target),
        n =
          e.target === de.input ||
          e.target === de.altInput ||
          de.element.contains(e.target) ||
          (e.path &&
            e.path.indexOf &&
            (~e.path.indexOf(de.input) || ~e.path.indexOf(de.altInput)));
      ("blur" === e.type
        ? n && e.relatedTarget && !T(e.relatedTarget)
        : !n && !t) &&
        -1 === de.config.ignoredFocusElements.indexOf(e.target) &&
        (de.close(),
        "range" === de.config.mode &&
          1 === de.selectedDates.length &&
          (de.clear(!1), de.redraw()));
    }
  }
  function S(e) {
    if (
      !(
        !e ||
        (de.currentYearElement.min && e < de.currentYearElement.min) ||
        (de.currentYearElement.max && e > de.currentYearElement.max)
      )
    ) {
      var t = parseInt(e, 10),
        n = de.currentYear !== t;
      (de.currentYear = t || de.currentYear),
        de.config.maxDate && de.currentYear === de.config.maxDate.getFullYear()
          ? (de.currentMonth = Math.min(
              de.config.maxDate.getMonth(),
              de.currentMonth
            ))
          : de.config.minDate &&
            de.currentYear === de.config.minDate.getFullYear() &&
            (de.currentMonth = Math.max(
              de.config.minDate.getMonth(),
              de.currentMonth
            )),
        n && (de.redraw(), G("YearChange"));
    }
  }
  function F(e, t) {
    if (
      (de.config.minDate &&
        ce(e, de.config.minDate, void 0 !== t ? t : !de.minDateHasTime) < 0) ||
      (de.config.maxDate &&
        ce(e, de.config.maxDate, void 0 !== t ? t : !de.maxDateHasTime) > 0)
    )
      return !1;
    if (!de.config.enable.length && !de.config.disable.length) return !0;
    for (
      var n,
        a = de.parseDate(e, null, !0),
        i = de.config.enable.length > 0,
        r = i ? de.config.enable : de.config.disable,
        o = 0;
      o < r.length;
      o++
    ) {
      if ((n = r[o]) instanceof Function && n(a)) return i;
      if (n instanceof Date && n.getTime() === a.getTime()) return i;
      if (
        "string" == typeof n &&
        de.parseDate(n, null, !0).getTime() === a.getTime()
      )
        return i;
      if (
        "object" === (void 0 === n ? "undefined" : _typeof(n)) &&
        n.from &&
        n.to &&
        a >= n.from &&
        a <= n.to
      )
        return i;
    }
    return !i;
  }
  function Y(e) {
    var t = e.target === de._input,
      n = T(e.target),
      r = de.config.allowInput,
      o = de.isOpen && (!r || !t),
      l = de.config.inline && t && !r;
    if ("Enter" === e.key && r && t)
      return (
        de.setDate(
          de._input.value,
          !0,
          e.target === de.altInput ? de.config.altFormat : de.config.dateFormat
        ),
        e.target.blur()
      );
    if (n || o || l) {
      var c = de.timeContainer && de.timeContainer.contains(e.target);
      switch (e.key) {
        case "Enter":
          c ? ee() : W(e);
          break;
        case "Escape":
          e.preventDefault(), de.close();
          break;
        case "Backspace":
        case "Delete":
          de.config.allowInput || de.clear();
          break;
        case "ArrowLeft":
        case "ArrowRight":
          if (!c)
            if ((e.preventDefault(), de.daysContainer)) {
              var s = "ArrowRight" === e.key ? 1 : -1;
              e.ctrlKey ? N(s, !0) : w(e.target.$i, s);
            } else de.config.enableTime && !c && de.hourElement.focus();
          break;
        case "ArrowUp":
        case "ArrowDown":
          e.preventDefault();
          var d = "ArrowDown" === e.key ? 1 : -1;
          de.daysContainer
            ? e.ctrlKey
              ? (S(de.currentYear - d), w(e.target.$i, 0))
              : c || w(e.target.$i, 7 * d)
            : de.config.enableTime &&
              (c || de.hourElement.focus(), a(e), de.debouncedChange());
          break;
        case "Tab":
          e.target === de.hourElement
            ? (e.preventDefault(), de.minuteElement.select())
            : e.target === de.minuteElement && (de.secondElement || de.amPM)
              ? (e.preventDefault(), (de.secondElement || de.amPM).focus())
              : e.target === de.secondElement &&
                (e.preventDefault(), de.amPM.focus());
          break;
        case "a":
          e.target === de.amPM && ((de.amPM.textContent = "AM"), i(), ee());
          break;
        case "p":
          e.target === de.amPM && ((de.amPM.textContent = "PM"), i(), ee());
      }
      G("KeyDown", e);
    }
  }
  function O(e) {
    if (
      1 === de.selectedDates.length &&
      e.classList.contains("flatpickr-day")
    ) {
      for (
        var t = e.dateObj,
          n = de.parseDate(de.selectedDates[0], null, !0),
          a = Math.min(t.getTime(), de.selectedDates[0].getTime()),
          i = Math.max(t.getTime(), de.selectedDates[0].getTime()),
          r = !1,
          o = a;
        o < i;
        o += de.utils.duration.DAY
      )
        if (!F(new Date(o))) {
          r = !0;
          break;
        }
      for (
        var l = de.days.childNodes[0].dateObj.getTime(), c = 0;
        c < 42;
        c++, l += de.utils.duration.DAY
      ) {
        (function(o, l) {
          var c =
              o < de.minRangeDate.getTime() || o > de.maxRangeDate.getTime(),
            s = de.days.childNodes[l];
          if (c)
            return (
              de.days.childNodes[l].classList.add("notAllowed"),
              ["inRange", "startRange", "endRange"].forEach(function(e) {
                s.classList.remove(e);
              }),
              "continue"
            );
          if (r && !c) return "continue";
          ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(
            e
          ) {
            s.classList.remove(e);
          });
          var d = Math.max(de.minRangeDate.getTime(), a),
            u = Math.min(de.maxRangeDate.getTime(), i);
          e.classList.add(t < de.selectedDates[0] ? "startRange" : "endRange"),
            n < t && o === n.getTime()
              ? s.classList.add("startRange")
              : n > t && o === n.getTime() && s.classList.add("endRange"),
            o >= d && o <= u && s.classList.add("inRange");
        })(l, c);
      }
    }
  }
  function A() {
    !de.isOpen || de.config.static || de.config.inline || H();
  }
  function L(e) {
    return function(t) {
      var n = (de.config["_" + e + "Date"] = de.parseDate(t)),
        a = de.config["_" + ("min" === e ? "max" : "min") + "Date"],
        i = t && n instanceof Date;
      i &&
        (de[e + "DateHasTime"] =
          n.getHours() || n.getMinutes() || n.getSeconds()),
        de.selectedDates &&
          ((de.selectedDates = de.selectedDates.filter(function(e) {
            return F(e);
          })),
          de.selectedDates.length || "min" !== e || r(n),
          ee()),
        de.daysContainer &&
          (R(),
          i
            ? (de.currentYearElement[e] = n.getFullYear())
            : de.currentYearElement.removeAttribute(e),
          (de.currentYearElement.disabled =
            a && n && a.getFullYear() === n.getFullYear()));
    };
  }
  function P() {
    var e = [
        "wrap",
        "weekNumbers",
        "allowInput",
        "clickOpens",
        "time_24hr",
        "enableTime",
        "noCalendar",
        "altInput",
        "shorthandCurrentMonth",
        "inline",
        "static",
        "enableSeconds",
        "disableMobile"
      ],
      t = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange"
      ];
    de.config = Object.create(flatpickr.defaultConfig);
    var a = _extends(
      {},
      de.instanceConfig,
      JSON.parse(JSON.stringify(de.element.dataset || {}))
    );
    (de.config.parseDate = a.parseDate),
      (de.config.formatDate = a.formatDate),
      Object.defineProperty(de.config, "enable", {
        get: function() {
          return de.config._enable || [];
        },
        set: function(e) {
          return (de.config._enable = J(e));
        }
      }),
      Object.defineProperty(de.config, "disable", {
        get: function() {
          return de.config._disable || [];
        },
        set: function(e) {
          return (de.config._disable = J(e));
        }
      }),
      _extends(de.config, a),
      !a.dateFormat &&
        a.enableTime &&
        (de.config.dateFormat = de.config.noCalendar
          ? "H:i" + (de.config.enableSeconds ? ":S" : "")
          : flatpickr.defaultConfig.dateFormat +
            " H:i" +
            (de.config.enableSeconds ? ":S" : "")),
      a.altInput &&
        a.enableTime &&
        !a.altFormat &&
        (de.config.altFormat = de.config.noCalendar
          ? "h:i" + (de.config.enableSeconds ? ":S K" : " K")
          : flatpickr.defaultConfig.altFormat +
            " h:i" +
            (de.config.enableSeconds ? ":S" : "") +
            " K"),
      Object.defineProperty(de.config, "minDate", {
        get: function() {
          return this._minDate;
        },
        set: L("min")
      }),
      Object.defineProperty(de.config, "maxDate", {
        get: function() {
          return this._maxDate;
        },
        set: L("max")
      }),
      (de.config.minDate = a.minDate),
      (de.config.maxDate = a.maxDate);
    for (var i = 0; i < e.length; i++)
      de.config[e[i]] = !0 === de.config[e[i]] || "true" === de.config[e[i]];
    for (var r = t.length; r--; )
      void 0 !== de.config[t[r]] &&
        (de.config[t[r]] = re(de.config[t[r]] || []).map(n));
    for (var o = 0; o < de.config.plugins.length; o++) {
      var l = de.config.plugins[o](de) || {};
      for (var c in l)
        de.config[c] instanceof Array || ~t.indexOf(c)
          ? (de.config[c] = re(l[c])
              .map(n)
              .concat(de.config[c]))
          : void 0 === a[c] && (de.config[c] = l[c]);
    }
    G("ParseConfig");
  }
  function j() {
    "object" !== _typeof(de.config.locale) &&
      void 0 === flatpickr.l10ns[de.config.locale] &&
      console.warn("flatpickr: invalid locale " + de.config.locale),
      (de.l10n = _extends(
        Object.create(flatpickr.l10ns.default),
        "object" === _typeof(de.config.locale)
          ? de.config.locale
          : "default" !== de.config.locale
            ? flatpickr.l10ns[de.config.locale] || {}
            : {}
      ));
  }
  function H() {
    var e =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : de._positionElement;
    if (void 0 !== de.calendarContainer) {
      var t = de.calendarContainer.offsetHeight,
        n = de.calendarContainer.offsetWidth,
        a = de.config.position,
        i = e.getBoundingClientRect(),
        r = window.innerHeight - i.bottom,
        o = "above" === a || ("below" !== a && r < t && i.top > t),
        l = window.pageYOffset + i.top + (o ? -t - 2 : e.offsetHeight + 2);
      if (
        (oe(de.calendarContainer, "arrowTop", !o),
        oe(de.calendarContainer, "arrowBottom", o),
        !de.config.inline)
      ) {
        var c = window.pageXOffset + i.left,
          s = window.document.body.offsetWidth - i.right,
          d = c + n > window.document.body.offsetWidth;
        oe(de.calendarContainer, "rightMost", d),
          de.config.static ||
            ((de.calendarContainer.style.top = l + "px"),
            d
              ? ((de.calendarContainer.style.left = "auto"),
                (de.calendarContainer.style.right = s + "px"))
              : ((de.calendarContainer.style.left = c + "px"),
                (de.calendarContainer.style.right = "auto")));
      }
    }
  }
  function R() {
    de.config.noCalendar || de.isMobile || (E(), X(), M());
  }
  function W(e) {
    if (
      (e.preventDefault(),
      e.stopPropagation(),
      e.target.classList.contains("flatpickr-day") &&
        !e.target.classList.contains("disabled") &&
        !e.target.classList.contains("notAllowed"))
    ) {
      var t = (de.latestSelectedDateObj = new Date(e.target.dateObj.getTime())),
        n = t.getMonth() !== de.currentMonth && "range" !== de.config.mode;
      if (((de.selectedDateElem = e.target), "single" === de.config.mode))
        de.selectedDates = [t];
      else if ("multiple" === de.config.mode) {
        var a = Z(t);
        a ? de.selectedDates.splice(a, 1) : de.selectedDates.push(t);
      } else
        "range" === de.config.mode &&
          (2 === de.selectedDates.length && de.clear(),
          de.selectedDates.push(t),
          0 !== ce(t, de.selectedDates[0], !0) &&
            de.selectedDates.sort(function(e, t) {
              return e.getTime() - t.getTime();
            }));
      if ((i(), n)) {
        var o = de.currentYear !== t.getFullYear();
        (de.currentYear = t.getFullYear()),
          (de.currentMonth = t.getMonth()),
          o && G("YearChange"),
          G("MonthChange");
      }
      if (
        (M(),
        de.minDateHasTime &&
          de.config.enableTime &&
          0 === ce(t, de.config.minDate) &&
          r(de.config.minDate),
        ee(),
        de.config.enableTime &&
          setTimeout(function() {
            return (de.showTimeInput = !0);
          }, 50),
        "range" === de.config.mode &&
          (1 === de.selectedDates.length
            ? (O(e.target),
              (de._hidePrevMonthArrow =
                de._hidePrevMonthArrow ||
                de.minRangeDate > de.days.childNodes[0].dateObj),
              (de._hideNextMonthArrow =
                de._hideNextMonthArrow ||
                de.maxRangeDate <
                  new Date(de.currentYear, de.currentMonth + 1, 1)))
            : X()),
        G("Change"),
        n
          ? b(function() {
              return de.selectedDateElem && de.selectedDateElem.focus();
            })
          : w(e.target.$i, 0),
        de.config.enableTime &&
          setTimeout(function() {
            return de.hourElement.select();
          }, 451),
        de.config.closeOnSelect)
      ) {
        var l = "single" === de.config.mode && !de.config.enableTime,
          c =
            "range" === de.config.mode &&
            2 === de.selectedDates.length &&
            !de.config.enableTime;
        (l || c) && de.close();
      }
    }
  }
  function B(e, t) {
    if (e instanceof Array)
      de.selectedDates = e.map(function(e) {
        return de.parseDate(e, t);
      });
    else if (e instanceof Date || !isNaN(e))
      de.selectedDates = [de.parseDate(e, t)];
    else if (e && e.substring)
      switch (de.config.mode) {
        case "single":
          de.selectedDates = [de.parseDate(e, t)];
          break;
        case "multiple":
          de.selectedDates = e.split("; ").map(function(e) {
            return de.parseDate(e, t);
          });
          break;
        case "range":
          de.selectedDates = e.split(de.l10n.rangeSeparator).map(function(e) {
            return de.parseDate(e, t);
          });
      }
    (de.selectedDates = de.selectedDates.filter(function(e) {
      return e instanceof Date && F(e, !1);
    })),
      de.selectedDates.sort(function(e, t) {
        return e.getTime() - t.getTime();
      });
  }
  function J(e) {
    for (var t = e.length; t--; )
      "string" == typeof e[t] || +e[t]
        ? (e[t] = de.parseDate(e[t], null, !0))
        : e[t] &&
          e[t].from &&
          e[t].to &&
          ((e[t].from = de.parseDate(e[t].from)),
          (e[t].to = de.parseDate(e[t].to)));
    return e.filter(function(e) {
      return e;
    });
  }
  function K() {
    (de.selectedDates = []), (de.now = new Date());
    var e = de.config.defaultDate || de.input.value;
    e && B(e, de.config.dateFormat);
    var t = de.selectedDates.length
      ? de.selectedDates[0]
      : de.config.minDate && de.config.minDate.getTime() > de.now
        ? de.config.minDate
        : de.config.maxDate && de.config.maxDate.getTime() < de.now
          ? de.config.maxDate
          : de.now;
    (de.currentYear = t.getFullYear()),
      (de.currentMonth = t.getMonth()),
      de.selectedDates.length &&
        (de.latestSelectedDateObj = de.selectedDates[0]),
      (de.minDateHasTime =
        de.config.minDate &&
        (de.config.minDate.getHours() ||
          de.config.minDate.getMinutes() ||
          de.config.minDate.getSeconds())),
      (de.maxDateHasTime =
        de.config.maxDate &&
        (de.config.maxDate.getHours() ||
          de.config.maxDate.getMinutes() ||
          de.config.maxDate.getSeconds())),
      Object.defineProperty(de, "latestSelectedDateObj", {
        get: function() {
          return (
            de._selectedDateObj || de.selectedDates[de.selectedDates.length - 1]
          );
        },
        set: function(e) {
          de._selectedDateObj = e;
        }
      }),
      de.isMobile ||
        Object.defineProperty(de, "showTimeInput", {
          get: function() {
            return de._showTimeInput;
          },
          set: function(e) {
            (de._showTimeInput = e),
              de.calendarContainer &&
                oe(de.calendarContainer, "showTimeInput", e),
              H();
          }
        });
  }
  function U() {
    de.utils = {
      duration: { DAY: 864e5 },
      getDaysinMonth: function(e, t) {
        return (
          (e = void 0 === e ? de.currentMonth : e),
          (t = void 0 === t ? de.currentYear : t),
          1 === e && ((t % 4 == 0 && t % 100 != 0) || t % 400 == 0)
            ? 29
            : de.l10n.daysInMonth[e]
        );
      },
      monthToStr: function(e, t) {
        return (
          (t = void 0 === t ? de.config.shorthandCurrentMonth : t),
          de.l10n.months[(t ? "short" : "long") + "hand"][e]
        );
      }
    };
  }
  function $() {
    (de.formats = Object.create(FlatpickrInstance.prototype.formats)),
      ["D", "F", "J", "M", "W", "l"].forEach(function(e) {
        de.formats[e] = FlatpickrInstance.prototype.formats[e].bind(de);
      }),
      (de.revFormat.F = FlatpickrInstance.prototype.revFormat.F.bind(de)),
      (de.revFormat.M = FlatpickrInstance.prototype.revFormat.M.bind(de));
  }
  function z() {
    if (
      ((de.input = de.config.wrap
        ? de.element.querySelector("[data-input]")
        : de.element),
      !de.input)
    )
      return console.warn("Error: invalid input element specified", de.input);
    (de.input._type = de.input.type),
      (de.input.type = "text"),
      de.input.classList.add("flatpickr-input"),
      (de._input = de.input),
      de.config.altInput &&
        ((de.altInput = ie(
          de.input.nodeName,
          de.input.className + " " + de.config.altInputClass
        )),
        (de._input = de.altInput),
        (de.altInput.placeholder = de.input.placeholder),
        (de.altInput.disabled = de.input.disabled),
        (de.altInput.required = de.input.required),
        (de.altInput.type = "text"),
        (de.input.type = "hidden"),
        !de.config.static &&
          de.input.parentNode &&
          de.input.parentNode.insertBefore(de.altInput, de.input.nextSibling)),
      de.config.allowInput || de._input.setAttribute("readonly", "readonly"),
      (de._positionElement = de.config.positionElement || de._input);
  }
  function q() {
    var e = de.config.enableTime
      ? de.config.noCalendar ? "time" : "datetime-local"
      : "date";
    (de.mobileInput = ie("input", de.input.className + " flatpickr-mobile")),
      (de.mobileInput.step = de.input.getAttribute("step") || "any"),
      (de.mobileInput.tabIndex = 1),
      (de.mobileInput.type = e),
      (de.mobileInput.disabled = de.input.disabled),
      (de.mobileInput.placeholder = de.input.placeholder),
      (de.mobileFormatStr =
        "datetime-local" === e
          ? "Y-m-d\\TH:i:S"
          : "date" === e ? "Y-m-d" : "H:i:S"),
      de.selectedDates.length &&
        (de.mobileInput.defaultValue = de.mobileInput.value = de.formatDate(
          de.selectedDates[0],
          de.mobileFormatStr
        )),
      de.config.minDate &&
        (de.mobileInput.min = de.formatDate(de.config.minDate, "Y-m-d")),
      de.config.maxDate &&
        (de.mobileInput.max = de.formatDate(de.config.maxDate, "Y-m-d")),
      (de.input.type = "hidden"),
      de.config.altInput && (de.altInput.type = "hidden");
    try {
      de.input.parentNode.insertBefore(de.mobileInput, de.input.nextSibling);
    } catch (e) {}
    de.mobileInput.addEventListener("change", function(e) {
      de.setDate(e.target.value, !1, de.mobileFormatStr),
        G("Change"),
        G("Close");
    });
  }
  function G(e, t) {
    var n = de.config["on" + e];
    if (void 0 !== n && n.length > 0)
      for (var a = 0; n[a] && a < n.length; a++)
        n[a](de.selectedDates, de.input.value, de, t);
    "Change" === e &&
      (de.input.dispatchEvent(V("change")), de.input.dispatchEvent(V("input")));
  }
  function V(e) {
    return de._supportsEvents
      ? new Event(e, { bubbles: !0 })
      : ((de._[e + "Event"] = document.createEvent("Event")),
        de._[e + "Event"].initEvent(e, !0, !0),
        de._[e + "Event"]);
  }
  function Z(e) {
    for (var t = 0; t < de.selectedDates.length; t++)
      if (0 === ce(de.selectedDates[t], e)) return "" + t;
    return !1;
  }
  function Q(e) {
    return (
      !("range" !== de.config.mode || de.selectedDates.length < 2) &&
      (ce(e, de.selectedDates[0]) >= 0 && ce(e, de.selectedDates[1]) <= 0)
    );
  }
  function X() {
    de.config.noCalendar ||
      de.isMobile ||
      !de.monthNav ||
      ((de.currentMonthElement.textContent =
        de.utils.monthToStr(de.currentMonth) + " "),
      (de.currentYearElement.value = de.currentYear),
      (de._hidePrevMonthArrow =
        de.config.minDate &&
        (de.currentYear === de.config.minDate.getFullYear()
          ? de.currentMonth <= de.config.minDate.getMonth()
          : de.currentYear < de.config.minDate.getFullYear())),
      (de._hideNextMonthArrow =
        de.config.maxDate &&
        (de.currentYear === de.config.maxDate.getFullYear()
          ? de.currentMonth + 1 > de.config.maxDate.getMonth()
          : de.currentYear > de.config.maxDate.getFullYear())));
  }
  function ee(e) {
    if (!de.selectedDates.length) return de.clear(e);
    de.isMobile &&
      (de.mobileInput.value = de.selectedDates.length
        ? de.formatDate(de.latestSelectedDateObj, de.mobileFormatStr)
        : "");
    var t = "range" !== de.config.mode ? "; " : de.l10n.rangeSeparator;
    (de.input.value = de.selectedDates
      .map(function(e) {
        return de.formatDate(e, de.config.dateFormat);
      })
      .join(t)),
      de.config.altInput &&
        (de.altInput.value = de.selectedDates
          .map(function(e) {
            return de.formatDate(e, de.config.altFormat);
          })
          .join(t)),
      !1 !== e && G("ValueUpdate");
  }
  function te(e) {
    return Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
  }
  function ne(e) {
    e.preventDefault();
    var t = de.currentYearElement.parentNode.contains(e.target);
    if (e.target === de.currentMonthElement || t) {
      var n = te(e);
      t
        ? (S(de.currentYear + n), (e.target.value = de.currentYear))
        : de.changeMonth(n, !0, !1);
    }
  }
  function ae(e) {
    var t = de.prevMonthNav.contains(e.target),
      n = de.nextMonthNav.contains(e.target);
    t || n
      ? N(t ? -1 : 1)
      : e.target === de.currentYearElement
        ? (e.preventDefault(), de.currentYearElement.select())
        : "arrowUp" === e.target.className
          ? de.changeYear(de.currentYear + 1)
          : "arrowDown" === e.target.className &&
            de.changeYear(de.currentYear - 1);
  }
  function ie(e, t, n) {
    var a = window.document.createElement(e);
    return (
      (t = t || ""),
      (n = n || ""),
      (a.className = t),
      void 0 !== n && (a.textContent = n),
      a
    );
  }
  function re(e) {
    return e instanceof Array ? e : [e];
  }
  function oe(e, t, n) {
    if (n) return e.classList.add(t);
    e.classList.remove(t);
  }
  function le(e, t, n) {
    var a = void 0;
    return function() {
      var i = this,
        r = arguments;
      clearTimeout(a),
        (a = setTimeout(function() {
          (a = null), n || e.apply(i, r);
        }, t)),
        n && !a && e.apply(i, r);
    };
  }
  function ce(e, t, n) {
    return (
      e instanceof Date &&
      t instanceof Date &&
      (!1 !== n
        ? new Date(e.getTime()).setHours(0, 0, 0, 0) -
          new Date(t.getTime()).setHours(0, 0, 0, 0)
        : e.getTime() - t.getTime())
    );
  }
  function se(e) {
    e.preventDefault();
    var t = "keydown" === e.type,
      n = (e.type, e.type, e.target);
    if (de.amPM && e.target === de.amPM)
      return (e.target.textContent = ["AM", "PM"][
        ("AM" === e.target.textContent) | 0
      ]);
    var a = Number(n.min),
      i = Number(n.max),
      r = Number(n.step),
      o = parseInt(n.value, 10),
      l =
        o +
        r *
          (e.delta ||
            (t
              ? 38 === e.which ? 1 : -1
              : Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0));
    if (void 0 !== n.value && 2 === n.value.length) {
      var c = n === de.hourElement,
        s = n === de.minuteElement;
      l < a
        ? ((l = i + l + !c + (c && !de.amPM)), s && h(null, -1, de.hourElement))
        : l > i &&
          ((l = n === de.hourElement ? l - i - !de.amPM : a),
          s && h(null, 1, de.hourElement)),
        de.amPM &&
          c &&
          (1 === r ? l + o === 23 : Math.abs(l - o) > r) &&
          (de.amPM.textContent = "PM" === de.amPM.textContent ? "AM" : "PM"),
        (n.value = de.pad(l));
    }
  }
  var de = this;
  return (
    (de._ = {}),
    (de._.afterDayAnim = b),
    (de._bind = c),
    (de._compareDates = ce),
    (de._setHoursFromDate = r),
    (de.changeMonth = N),
    (de.changeYear = S),
    (de.clear = function(e) {
      (de.input.value = ""),
        de.altInput && (de.altInput.value = ""),
        de.mobileInput && (de.mobileInput.value = ""),
        (de.selectedDates = []),
        (de.latestSelectedDateObj = void 0),
        (de.showTimeInput = !1),
        de.redraw(),
        !1 !== e && G("Change");
    }),
    (de.close = function() {
      (de.isOpen = !1),
        de.isMobile ||
          (de.calendarContainer.classList.remove("open"),
          de._input.classList.remove("active")),
        G("Close");
    }),
    (de._createElement = ie),
    (de.destroy = function() {
      void 0 !== de.config && G("Destroy");
      for (var e = de._handlers.length; e--; ) {
        var t = de._handlers[e];
        t.element.removeEventListener(t.event, t.handler);
      }
      (de._handlers = []),
        de.mobileInput
          ? (de.mobileInput.parentNode &&
              de.mobileInput.parentNode.removeChild(de.mobileInput),
            (de.mobileInput = null))
          : de.calendarContainer &&
            de.calendarContainer.parentNode &&
            de.calendarContainer.parentNode.removeChild(de.calendarContainer),
        de.altInput &&
          ((de.input.type = "text"),
          de.altInput.parentNode &&
            de.altInput.parentNode.removeChild(de.altInput),
          delete de.altInput),
        de.input &&
          ((de.input.type = de.input._type),
          de.input.classList.remove("flatpickr-input"),
          de.input.removeAttribute("readonly"),
          (de.input.value = "")),
        [
          "_showTimeInput",
          "latestSelectedDateObj",
          "_hideNextMonthArrow",
          "_hidePrevMonthArrow",
          "__hideNextMonthArrow",
          "__hidePrevMonthArrow",
          "isMobile",
          "isOpen",
          "selectedDateElem",
          "minDateHasTime",
          "maxDateHasTime",
          "days",
          "daysContainer",
          "_input",
          "_positionElement",
          "innerContainer",
          "rContainer",
          "monthNav",
          "todayDateElem",
          "calendarContainer",
          "weekdayContainer",
          "prevMonthNav",
          "nextMonthNav",
          "currentMonthElement",
          "currentYearElement",
          "navigationCurrentMonth",
          "selectedDateElem",
          "config"
        ].forEach(function(e) {
          try {
            delete de[e];
          } catch (e) {}
        });
    }),
    (de.isEnabled = F),
    (de.jumpToDate = g),
    (de.open = function(e, t) {
      if (de.isMobile)
        return (
          e && (e.preventDefault(), e.target.blur()),
          setTimeout(function() {
            de.mobileInput.click();
          }, 0),
          void G("Open")
        );
      de.isOpen ||
        de._input.disabled ||
        de.config.inline ||
        ((de.isOpen = !0),
        de.calendarContainer.classList.add("open"),
        H(t),
        de._input.classList.add("active"),
        G("Open"));
    }),
    (de.redraw = R),
    (de.set = function(e, t) {
      null !== e && "object" === (void 0 === e ? "undefined" : _typeof(e))
        ? _extends(de.config, e)
        : (de.config[e] = t),
        de.redraw(),
        g();
    }),
    (de.setDate = function(e, t, n) {
      if (0 !== e && !e) return de.clear(t);
      B(e, n),
        (de.showTimeInput = de.selectedDates.length > 0),
        (de.latestSelectedDateObj = de.selectedDates[0]),
        de.redraw(),
        g(),
        r(),
        ee(t),
        t && G("Change");
    }),
    (de.toggle = function() {
      if (de.isOpen) return de.close();
      de.open();
    }),
    (de.element = de.input = e),
    (de.instanceConfig = t || {}),
    (de.parseDate = FlatpickrInstance.prototype.parseDate.bind(de)),
    (de.formatDate = FlatpickrInstance.prototype.formatDate.bind(de)),
    $(),
    P(),
    j(),
    z(),
    K(),
    U(),
    (de.isOpen = !1),
    (de.isMobile =
      !de.config.disableMobile &&
      !de.config.inline &&
      "single" === de.config.mode &&
      !de.config.disable.length &&
      !de.config.enable.length &&
      !de.config.weekNumbers &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )),
    de.isMobile || v(),
    d(),
    (de.selectedDates.length || de.config.noCalendar) &&
      (de.config.enableTime &&
        r(
          de.config.noCalendar
            ? de.latestSelectedDateObj || de.config.minDate
            : null
        ),
      ee(!1)),
    (de.showTimeInput = de.selectedDates.length > 0 || de.config.noCalendar),
    de.config.weekNumbers &&
      (de.calendarContainer.style.width =
        de.daysContainer.offsetWidth + de.weekWrapper.offsetWidth + "px"),
    de.isMobile || H(),
    G("Ready"),
    de
  );
}
function _flatpickr(e, t) {
  for (var n = Array.prototype.slice.call(e), a = [], i = 0; i < n.length; i++)
    try {
      if (null !== n[i].getAttribute("data-fp-omit")) continue;
      n[i]._flatpickr && (n[i]._flatpickr.destroy(), (n[i]._flatpickr = null)),
        (n[i]._flatpickr = new FlatpickrInstance(n[i], t || {})),
        a.push(n[i]._flatpickr);
    } catch (e) {
      console.warn(e, e.stack);
    }
  return 1 === a.length ? a[0] : a;
}
function flatpickr(e, t) {
  return e instanceof NodeList
    ? _flatpickr(e, t)
    : e instanceof HTMLElement
      ? _flatpickr([e], t)
      : _flatpickr(window.document.querySelectorAll(e), t);
}
var _extends =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n)
          Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
      }
      return e;
    },
  _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        };
(FlatpickrInstance.prototype = {
  formats: {
    Z: function(e) {
      return e.toISOString();
    },
    D: function(e) {
      return this.l10n.weekdays.shorthand[this.formats.w(e)];
    },
    F: function(e) {
      return this.utils.monthToStr(this.formats.n(e) - 1, !1);
    },
    G: function(e) {
      return FlatpickrInstance.prototype.pad(
        FlatpickrInstance.prototype.formats.h(e)
      );
    },
    H: function(e) {
      return FlatpickrInstance.prototype.pad(e.getHours());
    },
    J: function(e) {
      return e.getDate() + this.l10n.ordinal(e.getDate());
    },
    K: function(e) {
      return e.getHours() > 11 ? "PM" : "AM";
    },
    M: function(e) {
      return this.utils.monthToStr(e.getMonth(), !0);
    },
    S: function(e) {
      return FlatpickrInstance.prototype.pad(e.getSeconds());
    },
    U: function(e) {
      return e.getTime() / 1e3;
    },
    W: function(e) {
      return this.config.getWeek(e);
    },
    Y: function(e) {
      return e.getFullYear();
    },
    d: function(e) {
      return FlatpickrInstance.prototype.pad(e.getDate());
    },
    h: function(e) {
      return e.getHours() % 12 ? e.getHours() % 12 : 12;
    },
    i: function(e) {
      return FlatpickrInstance.prototype.pad(e.getMinutes());
    },
    j: function(e) {
      return e.getDate();
    },
    l: function(e) {
      return this.l10n.weekdays.longhand[e.getDay()];
    },
    m: function(e) {
      return FlatpickrInstance.prototype.pad(e.getMonth() + 1);
    },
    n: function(e) {
      return e.getMonth() + 1;
    },
    s: function(e) {
      return e.getSeconds();
    },
    w: function(e) {
      return e.getDay();
    },
    y: function(e) {
      return String(e.getFullYear()).substring(2);
    }
  },
  formatDate: function(e, t) {
    var n = this;
    return void 0 !== this.config && void 0 !== this.config.formatDate
      ? this.config.formatDate(e, t)
      : t
          .split("")
          .map(function(t, a, i) {
            return n.formats[t] && "\\" !== i[a - 1]
              ? n.formats[t](e)
              : "\\" !== t ? t : "";
          })
          .join("");
  },
  revFormat: {
    D: function() {},
    F: function(e, t) {
      e.setMonth(this.l10n.months.longhand.indexOf(t));
    },
    G: function(e, t) {
      e.setHours(parseFloat(t));
    },
    H: function(e, t) {
      e.setHours(parseFloat(t));
    },
    J: function(e, t) {
      e.setDate(parseFloat(t));
    },
    K: function(e, t) {
      var n = e.getHours();
      12 !== n && e.setHours(n % 12 + 12 * /pm/i.test(t));
    },
    M: function(e, t) {
      e.setMonth(this.l10n.months.shorthand.indexOf(t));
    },
    S: function(e, t) {
      e.setSeconds(t);
    },
    U: function(e, t) {
      return new Date(1e3 * parseFloat(t));
    },
    W: function(e, t) {
      return (
        (t = parseInt(t)),
        new Date(e.getFullYear(), 0, 2 + 7 * (t - 1), 0, 0, 0, 0, 0)
      );
    },
    Y: function(e, t) {
      e.setFullYear(t);
    },
    Z: function(e, t) {
      return new Date(t);
    },
    d: function(e, t) {
      e.setDate(parseFloat(t));
    },
    h: function(e, t) {
      e.setHours(parseFloat(t));
    },
    i: function(e, t) {
      e.setMinutes(parseFloat(t));
    },
    j: function(e, t) {
      e.setDate(parseFloat(t));
    },
    l: function() {},
    m: function(e, t) {
      e.setMonth(parseFloat(t) - 1);
    },
    n: function(e, t) {
      e.setMonth(parseFloat(t) - 1);
    },
    s: function(e, t) {
      e.setSeconds(parseFloat(t));
    },
    w: function() {},
    y: function(e, t) {
      e.setFullYear(2e3 + parseFloat(t));
    }
  },
  tokenRegex: {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "(am|AM|Am|aM|pm|PM|Pm|pM)",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
  },
  pad: function(e) {
    return ("0" + e).slice(-2);
  },
  parseDate: function(e, t, n) {
    var a = this;
    if (0 !== e && !e) return null;
    var i = e;
    if (e instanceof Date) e = new Date(e.getTime());
    else if (void 0 !== e.toFixed) e = new Date(e);
    else {
      var r = t || (this.config || flatpickr.defaultConfig).dateFormat;
      "today" === (e = String(e).trim())
        ? ((e = new Date()), (n = !0))
        : /Z$/.test(e) || /GMT$/.test(e)
          ? (e = new Date(e))
          : this.config && this.config.parseDate
            ? (e = this.config.parseDate(e, r))
            : (function() {
                for (
                  var t =
                      a.config && a.config.noCalendar
                        ? new Date(new Date().setHours(0, 0, 0, 0))
                        : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0),
                    n = void 0,
                    i = [],
                    o = 0,
                    l = 0,
                    c = "";
                  o < r.length;
                  o++
                ) {
                  var s = r[o],
                    d = "\\" === s,
                    u = "\\" === r[o - 1] || d;
                  if (a.tokenRegex[s] && !u) {
                    c += a.tokenRegex[s];
                    var f = new RegExp(c).exec(e);
                    f &&
                      (n = !0) &&
                      i["Y" !== s ? "push" : "unshift"]({
                        fn: a.revFormat[s],
                        val: f[++l]
                      });
                  } else d || (c += ".");
                  i.forEach(function(e) {
                    var n = e.fn,
                      a = e.val;
                    return (t = n(t, a) || t);
                  });
                }
                e = n ? t : null;
              })();
    }
    return e instanceof Date
      ? (!0 === n && e.setHours(0, 0, 0, 0), e)
      : (console.warn("flatpickr: invalid date " + i),
        console.info(this.element),
        null);
  }
}),
  "undefined" != typeof HTMLElement &&
    ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(
      e
    ) {
      return _flatpickr(this, e);
    }),
    (HTMLElement.prototype.flatpickr = function(e) {
      return _flatpickr([this], e);
    })),
  (flatpickr.defaultConfig = FlatpickrInstance.defaultConfig = {
    mode: "single",
    position: "auto",
    animate:
      "undefined" != typeof window &&
      -1 === window.navigator.userAgent.indexOf("MSIE"),
    wrap: !1,
    weekNumbers: !1,
    allowInput: !1,
    clickOpens: !0,
    closeOnSelect: !0,
    time_24hr: !1,
    enableTime: !1,
    noCalendar: !1,
    dateFormat: "Y-m-d",
    ariaDateFormat: "F j, Y",
    altInput: !1,
    altInputClass: "form-control input",
    altFormat: "F j, Y",
    defaultDate: null,
    minDate: null,
    maxDate: null,
    parseDate: null,
    formatDate: null,
    getWeek: function(e) {
      var t = new Date(e.getTime()),
        n = new Date(t.getFullYear(), 0, 1);
      return Math.ceil(((t - n) / 864e5 + n.getDay() + 1) / 7);
    },
    enable: [],
    disable: [],
    shorthandCurrentMonth: !1,
    inline: !1,
    static: !1,
    appendTo: null,
    prevArrow:
      "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    nextArrow:
      "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    enableSeconds: !1,
    hourIncrement: 1,
    minuteIncrement: 5,
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disableMobile: !1,
    locale: "default",
    plugins: [],
    ignoredFocusElements: [],
    onClose: void 0,
    onChange: void 0,
    onDayCreate: void 0,
    onMonthChange: void 0,
    onOpen: void 0,
    onParseConfig: void 0,
    onReady: void 0,
    onValueUpdate: void 0,
    onYearChange: void 0,
    onKeyDown: void 0,
    onDestroy: void 0
  }),
  (flatpickr.l10ns = {
    en: {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ]
      },
      months: {
        shorthand: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        longhand: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function(e) {
        var t = e % 100;
        if (t > 3 && t < 21) return "th";
        switch (t % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle"
    }
  }),
  (flatpickr.l10ns.default = Object.create(flatpickr.l10ns.en)),
  (flatpickr.localize = function(e) {
    return _extends(flatpickr.l10ns.default, e || {});
  }),
  (flatpickr.setDefaults = function(e) {
    return _extends(flatpickr.defaultConfig, e || {});
  }),
  "undefined" != typeof jQuery &&
    (jQuery.fn.flatpickr = function(e) {
      return _flatpickr(this, e);
    }),
  (Date.prototype.fp_incr = function(e) {
    return new Date(
      this.getFullYear(),
      this.getMonth(),
      this.getDate() + parseInt(e, 10)
    );
  }),
  "undefined" != typeof module && (module.exports = flatpickr);
