(function () {
  var S = window.SITE;
  var main = document.getElementById("main");
  var tabsEl = document.getElementById("tabs");

  /* ---------- tiny DOM helper ---------- */
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function has(a) { return a && a.some(function (x) { return String(x).trim() !== ""; }); }

  /* ---------- reusable blocks ---------- */
  function todo(hint) {
    return el("div", { class: "todo" }, [el("strong", { text: "To add" }), el("span", { text: hint })]);
  }
  function paras(list) {
    var w = el("div", { class: "prose" });
    list.forEach(function (p) { if (String(p).trim()) w.appendChild(el("p", { text: p })); });
    return w;
  }
  function photo(p) {
    var f = el("figure", { class: "photo" });
    if (p.src) {
      var im = el("img", { src: p.src, alt: p.caption || "" });
      im.onerror = function () {
        var slot = el("div", { class: "photo-slot", "aria-label": "Photo placeholder" }, [el("span", { text: "Add photo" })]);
        if (im.parentNode) im.parentNode.replaceChild(slot, im);
      };
      f.appendChild(im);
    } else {
      f.appendChild(el("div", { class: "photo-slot", "aria-label": "Photo placeholder" }, [el("span", { text: "Add photo" })]));
    }
    if (p.caption) f.appendChild(el("figcaption", { text: p.caption }));
    return f;
  }
  function table(t) {
    var wrap = el("div", { class: "table-wrap" });
    var tb = el("table", { class: t.head[0] === "#" ? "numcol" : "" });
    var tr = el("tr");
    t.head.forEach(function (h) { tr.appendChild(el("th", { text: h })); });
    tb.appendChild(el("thead", {}, [tr]));
    var body = el("tbody");
    t.rows.forEach(function (r) {
      var row = el("tr");
      r.forEach(function (c, i) {
        var td = el("td", { text: c, "data-label": t.head[i] });
        if (!c) td.className = "blank";
        row.appendChild(td);
      });
      body.appendChild(row);
    });
    tb.appendChild(body);
    wrap.appendChild(tb);
    return wrap;
  }

  function section(s) {
    var card = el("section", { class: "card" });
    card.appendChild(el("h2", { text: s.title }));
    var filled = false;

    if (s.lead2) { card.appendChild(el("p", { class: "muted", text: s.lead2 })); }
    if (s.note) { card.appendChild(el("p", { class: "note", text: s.note })); }

    if (s.facts) {
      var fd = el("dl", { class: "info facts" });
      s.facts.forEach(function (r) { fd.appendChild(el("dt", { text: r[0] })); fd.appendChild(el("dd", { text: r[1] })); });
      card.appendChild(fd); filled = true;
    }

    if (s.stats) {
      var sg = el("div", { class: "stats" });
      s.stats.forEach(function (x) { sg.appendChild(el("div", { class: "stat" }, [el("strong", { text: x.n }), el("span", { text: x.l })])); });
      card.appendChild(sg); filled = true;
    }

    if (s.bullets) {
      var bl = el("ul", { class: "bullets" });
      s.bullets.forEach(function (x) { bl.appendChild(el("li", { text: x })); });
      card.appendChild(bl); filled = true;
    }

    if (s.qa) {
      var qw = el("div", { class: "qa" });
      s.qa.forEach(function (x, i) {
        var b = el("div", { class: "qa-item" }, [el("h3", {}, [el("span", { class: "n", text: String(i + 1) }), x.q])]);
        (x.a || []).forEach(function (t) { b.appendChild(el("p", { text: t })); });
        if (x.b) { var u = el("ul", { class: "bullets" }); x.b.forEach(function (t) { u.appendChild(el("li", { text: t })); }); b.appendChild(u); }
        qw.appendChild(b);
      });
      card.appendChild(qw); filled = true;
    }

    if (s.callout !== undefined) {
      if (String(s.callout).trim()) { card.appendChild(el("blockquote", { class: "callout", text: s.callout })); filled = true; }
      else card.appendChild(el("blockquote", { class: "callout empty", text: "Final Problem Statement goes here" }));
    }

    if (s.body && has(s.body)) { card.appendChild(paras(s.body)); filled = true; }

    if (s.cards) {
      var g = el("div", { class: "mini-grid" });
      s.cards.forEach(function (c) {
        var m = el("div", { class: "mini" }, [el("h3", { text: c.h })]);
        if (c.b) {
          var cu = el("ul", { class: "bullets" }); c.b.forEach(function (t) { cu.appendChild(el("li", { text: t })); });
          m.appendChild(cu); filled = true;
        } else if (String(c.t).trim()) { m.appendChild(el("p", { text: c.t })); filled = true; }
        else m.appendChild(el("p", { class: "blank-line", text: "Write here" }));
        g.appendChild(m);
      });
      card.appendChild(g);
    }

    if (s.list) {
      var ul = el("ol", { class: "list" });
      s.list.forEach(function (x) {
        var li = el("li", { text: x || "Challenge to add" });
        if (!x) li.className = "blank-line"; else filled = true;
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }

    if (s.steps) {
      var st = el("ol", { class: "steps" });
      s.steps.forEach(function (x) {
        var has2 = x.replace(/^[^:]*:\s*/, "").trim() !== "";
        if (has2) filled = true;
        st.appendChild(el("li", { class: has2 ? "done" : "" }, [el("span", { text: x })]));
      });
      card.appendChild(st);
    }

    if (s.table) {
      card.appendChild(table(s.table));
      if (s.table.rows.some(function (r) { return r.some(function (c) { return String(c).trim(); }); })) filled = true;
    }

    if (s.photos) {
      var pg = el("div", { class: "photo-grid" });
      s.photos.forEach(function (p) { pg.appendChild(photo(p)); if (p.src) filled = true; });
      card.appendChild(pg);
    }

    if (s.after && has(s.after)) { var af = paras(s.after); af.className += " after"; card.appendChild(af); }

    if (!filled && s.hint) card.insertBefore(todo(s.hint), card.children[1] || null);
    return card;
  }

  function pageHead(title, lead) {
    var h = el("header", { class: "page-head" }, [el("h1", { text: title })]);
    if (lead) h.appendChild(el("p", { class: "lead", text: lead }));
    return h;
  }

  function pager(i) {
    var nav = el("nav", { class: "pager", "aria-label": "Previous and next tab" });
    if (i > 0) nav.appendChild(el("a", { href: "#/" + S.tabs[i - 1].id, class: "btn ghost" }, [el("small", { text: "Previous" }), el("span", { text: S.tabs[i - 1].label })]));
    else nav.appendChild(el("span"));
    if (i < S.tabs.length - 1) nav.appendChild(el("a", { href: "#/" + S.tabs[i + 1].id, class: "btn ghost next" }, [el("small", { text: "Next" }), el("span", { text: S.tabs[i + 1].label })]));
    return nav;
  }

  /* ---------- pages ---------- */
  var views = {};

  views.home = function () {
    var frag = document.createDocumentFragment();
    var hero = el("section", { class: "hero" }, [
      el("img", { class: "hero-logo", src: "assets/kle-logo.png", alt: "KLE Tech logo", width: "188", height: "188" }),
      el("div", { class: "hero-text" }, [
        el("p", { class: "kicker", text: S.university + ", " + S.campus }),
        el("h1", { text: S.course }),
        el("p", { class: "lead", text: S.tagline }),
        el("div", { class: "actions" }, [
          el("a", { class: "btn primary", href: "#/introduction", text: "Start the journey" }),
          el("a", { class: "btn outline", href: "#/arc", text: "ARC Framework" })
        ])
      ])
    ]);
    frag.appendChild(hero);

    var st = S.student;
    var info = el("dl", { class: "info" });
    [["Name", st.name], ["USN", st.usn], ["Roll No", st.roll], ["Branch", st.branch]].forEach(function (r) {
      info.appendChild(el("dt", { text: r[0] })); info.appendChild(el("dd", { text: r[1] }));
    });
    var stuCard = el("section", { class: "card accent" }, [
      el("h2", { text: "Student" }),
      el("div", { class: "id-row" }, [ el("img", { class: "id-photo", src: st.photo, alt: st.name }), info ])
    ]);

    var fi = el("dl", { class: "info" });
    fi.appendChild(el("dt", { text: "Name" })); fi.appendChild(el("dd", { text: S.faculty.name || "Add faculty name", class: S.faculty.name ? "" : "blank-line" }));
    fi.appendChild(el("dt", { text: "Position" })); fi.appendChild(el("dd", { text: S.faculty.position || "Add position", class: S.faculty.position ? "" : "blank-line" }));
    var facRow = el("div", { class: "id-row" }, [
      S.faculty.photo ? el("img", { class: "id-photo", src: S.faculty.photo, alt: S.faculty.name || "Course faculty" }) : null,
      el("div", {}, [fi])
    ]);
    var facCard = el("section", { class: "card accent" }, [
      el("h2", { text: "Course faculty" }), facRow, el("p", { class: "muted", text: S.faculty.note })
    ]);
    frag.appendChild(el("div", { class: "two-col" }, [stuCard, facCard]));

    /* The five phases are a real sequence, so numbering is meaningful here */
    var phases = [
      ["observation", "Observation", "Watch the community and campus; test our assumptions."],
      ["problem", "Problem Identification", "Narrow many challenges to one validated problem."],
      ["solution", "Solution Discernment", "Decide whether to solve it, and how."],
      ["pilot", "Pilot Testing & Feedback", "Try a small version and learn from the field."],
      ["reflections", "Reflections", "Look back across the whole journey."]
    ];
    var path = el("ol", { class: "path" });
    phases.forEach(function (p, i) {
      path.appendChild(el("li", {}, [el("a", { href: "#/" + p[0] }, [
        el("span", { class: "n", text: String(i + 1) }),
        el("strong", { text: p[1] }),
        el("span", { text: p[2] })
      ])]));
    });
    frag.appendChild(el("section", { class: "card" }, [el("h2", { text: "The five phases" }), path]));
    return frag;
  };

  views.introduction = function () {
    var frag = document.createDocumentFragment();
    frag.appendChild(pageHead("Introduction", "Who we are and how to reach us."));

    var tg = el("div", { class: "team" });
    S.team.forEach(function (m) {
      tg.appendChild(el("div", { class: "member" }, [
        m.photo ? el("img", { src: m.photo, alt: m.name }) : el("div", { class: "photo-slot sm" }, [el("span", { text: "Photo" })]),
        el("strong", { text: m.name }),
        m.srn ? el("span", { class: "muted", text: "USN: " + m.srn }) : null
      ]));
    });
    frag.appendChild(el("section", { class: "card" }, [el("h2", { text: "Team members" }), tg]));

    var bg = el("section", { class: "card" }, [el("h2", { text: "Background" })]);
    if (has(S.intro.background)) bg.appendChild(paras(S.intro.background)); else bg.appendChild(todo("A short background about you and your team members."));
    frag.appendChild(bg);

    var hb = el("section", { class: "card" }, [el("h2", { text: "Interests and hobbies" })]);
    if (has(S.intro.interests)) {
      var tags = el("ul", { class: "tags" });
      S.intro.interests.forEach(function (t) { tags.appendChild(el("li", { text: t })); });
      hb.appendChild(tags);
    } else hb.appendChild(todo("Your personal interests and hobbies."));
    frag.appendChild(hb);

    var ct = el("section", { class: "card" }, [el("h2", { text: "Connect" })]);
    var row = el("div", { class: "actions" });
    if (S.intro.linkedin) row.appendChild(el("a", { class: "btn primary", href: S.intro.linkedin, target: "_blank", rel: "noopener", text: "LinkedIn profile" }));
    if (S.intro.email) row.appendChild(el("a", { class: "btn outline", href: "mailto:" + S.intro.email, text: S.intro.email }));
    if (row.children.length) ct.appendChild(row); else ct.appendChild(todo("Your LinkedIn profile link and a personal or college email ID."));
    frag.appendChild(ct);
    return frag;
  };

  views.innovators = function () {
    var frag = document.createDocumentFragment();
    frag.appendChild(pageHead("Social Innovators", "Indian changemakers we studied outside regular class hours."));
    var g = el("div", { class: "innov-grid" });
    S.innovators.forEach(function (x, i) {
      var c = el("article", { class: "card innov" });
      c.appendChild(el("span", { class: "chip", text: x.origin }));
      var initials = (x.name || "").replace(/^Dr\.\s*/, "").replace(/"[^"]*"/g, "").trim().split(/\s+/).map(function (w) { return w.charAt(0); }).join("").toUpperCase();
      var mono = function () { return el("div", { class: "monogram", role: "img", "aria-label": x.name || "Innovator photo placeholder" }, [el("span", { text: initials || "?" })]); };
      var fig = el("figure", { class: "photo" });
      if (x.photo) {
        var pim = el("img", { src: x.photo, alt: x.name });
        pim.onerror = function () { if (pim.parentNode) pim.parentNode.replaceChild(mono(), pim); };
        fig.appendChild(pim);
      } else fig.appendChild(mono());
      c.appendChild(fig);
      c.appendChild(el("h2", { text: x.name || "Innovator " + (i + 1) + " name", class: x.name ? "" : "blank-line" }));
      [["Background", x.bio, "Biodata and background summary."],
       ["Contribution to society", x.contribution, "What they have specifically done for society."],
       ["Why they inspire me", x.reflection, "Your reflection on why and how they inspire you."]].forEach(function (r) {
        c.appendChild(el("h3", { text: r[0] }));
        if (r[1]) c.appendChild(el("p", { text: r[1] })); else c.appendChild(todo(r[2]));
      });
      g.appendChild(c);
    });
    frag.appendChild(g);
    return frag;
  };

  function phaseView(id) {
    return function () {
      var t = S.tabs.filter(function (x) { return x.id === id; })[0];
      var data = S.pages[id];
      var frag = document.createDocumentFragment();
      frag.appendChild(pageHead(t.label, data.lead));
      data.sections.forEach(function (s) { frag.appendChild(section(s)); });
      return frag;
    };
  }
  ["observation", "problem", "solution", "pilot", "reflections", "arc", "takeaways", "exhibition"].forEach(function (id) { views[id] = phaseView(id); });

  /* ---------- tab bar ---------- */
  S.tabs.forEach(function (t) {
    tabsEl.appendChild(el("a", { href: "#/" + t.id, "data-id": t.id, text: t.label }));
  });

  /* ---------- router ---------- */
  function route() {
    var id = (location.hash.replace(/^#\/?/, "") || "home");
    var i = S.tabs.map(function (t) { return t.id; }).indexOf(id);
    if (i < 0) { i = 0; id = "home"; }
    main.innerHTML = "";
    main.appendChild(views[id]());
    main.appendChild(pager(i));
    Array.prototype.forEach.call(tabsEl.children, function (a) {
      var on = a.getAttribute("data-id") === id;
      a.classList.toggle("active", on);
      if (on) { a.setAttribute("aria-current", "page"); a.scrollIntoView({ block: "nearest", inline: "center" }); }
      else a.removeAttribute("aria-current");
    });
    document.title = S.tabs[i].label + " | " + S.course + " Portfolio, KLE Tech";
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);
  route();
})();
