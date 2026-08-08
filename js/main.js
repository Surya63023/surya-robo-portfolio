/* ============================================================
   Render helpers
   ============================================================ */

function profileButtons(inverted = false) {
  return SOCIAL_LINKS.map(({ name, url }) => {
    const icon = ICONS[name] || ICONS.mail;
    return `<a href="${url}" target="_blank" rel="noreferrer" aria-label="${name}" class="profile-btn${inverted ? " inverted" : ""}">${icon}</a>`;
  }).join("");
}

function renderProfiles() {
  const row = (inverted) => `<div class="profiles-row">${profileButtons(inverted)}</div>`;
  document.getElementById("hero-profiles").innerHTML = row(false);
  document.getElementById("footer-profiles").innerHTML = row(true);
}

function renderAbout() {
  document.getElementById("about-values").innerHTML = ABOUT_VALUES.map(
    (v) => `
    <div class="about-reveal glass-panel glow-hover value-card">
      <h3>${v.title}</h3>
      <p>${v.body}</p>
    </div>`
  ).join("");

  document.getElementById("stats-grid").innerHTML = STATS.map(
    (s) => `
    <div class="about-reveal glass-panel glow-hover stat-card">
      <p class="text-gradient stat-value">${s.value}</p>
      <p class="stat-label">${s.label}</p>
    </div>`
  ).join("");
}

function renderSkills() {
  const groupsHtml = SKILL_GROUPS.map(
    (g) => `
    <div class="skill-group">
      <h3 class="staggered-reveal">${g.title}</h3>
      <div class="staggered-reveal skill-chips">
        ${(SKILLS[g.key] || [])
          .map(
            (s) => `
          <div title="${s.name}" class="glass-panel glow-hover skill-chip">
            <img src="${s.icon}" alt="${s.name}" loading="lazy" width="28" height="28" />
            <span>${s.name}</span>
          </div>`
          )
          .join("")}
      </div>
    </div>`
  ).join("");
  document.getElementById("skills-groups").innerHTML = groupsHtml;

  document.getElementById("skill-tags").innerHTML = Object.entries(SKILL_TAGS)
    .map(
      ([title, tags]) => `
    <div class="glass-panel staggered-reveal tags-card">
      <h3>${title}</h3>
      <div class="tags-list">
        ${tags.map((t) => `<span class="tag-pill">${t}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");
}

function projectCardHtml(p, index) {
  return `
  <article class="project-card" data-category="${p.category}" data-slug="${p.slug}">
    <span class="project-glow-spot" aria-hidden="true"></span>
    <div class="project-media">
      <img src="${p.image}" alt="${p.name} project cover" loading="lazy" width="1280" height="720" draggable="false" />
      <div class="project-media-fade" aria-hidden="true"></div>
      <span class="project-badge left">${String(index + 1).padStart(2, "0")} · ${p.label}</span>
      <span class="project-badge right"><span class="status-dot"></span>${p.status}</span>
    </div>
    <div class="project-body">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="project-tech">
        ${p.techStack.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
      </div>
      <div class="project-links">
        ${
          p.liveUrl
            ? `<a href="${p.liveUrl}" target="_blank" rel="noreferrer" class="link-live">Live Demo ${ICONS.arrowUpRight}</a>`
            : ""
        }
        <a href="${p.githubUrl}" target="_blank" rel="noreferrer" class="link-github">${ICONS.github} GitHub</a>
      </div>
    </div>
  </article>`;
}

function renderProjects() {
  document.getElementById("projects-grid").innerHTML = PROJECTS.map(projectCardHtml).join("");
  initProjectTilt();
  animateProjectCards();
}

function renderEducation() {
  document.getElementById("education-timeline").innerHTML = EDUCATION.map(
    (item) => `
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <p class="timeline-period">${item.period}</p>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-subtitle">${item.subtitle}</p>
      <span class="timeline-highlight">${item.highlight}</span>
      <p class="timeline-desc">${item.description}</p>
    </div>`
  ).join("");

  document.getElementById("certs-grid").innerHTML = CERTIFICATIONS.map(
    (c) => `
    <article class="glass-panel glow-hover cert-card">
      <h3>${c.title}</h3>
      <p>${c.description}</p>
    </article>`
  ).join("");
}

function renderContact() {
  document.getElementById("contact-links").innerHTML = `
    <a href="mailto:${CONTACT_INFO.email}" class="glass-panel glow-hover contact-row">
      ${ICONS.mail}<span>${CONTACT_INFO.email}</span>
    </a>
    <a href="tel:${CONTACT_INFO.phone.replace(/\s/g, "")}" class="glass-panel glow-hover contact-row">
      ${ICONS.phone}<span>${CONTACT_INFO.phone}</span>
    </a>
    <div class="glass-panel contact-row">
      ${ICONS.pin}<span>${CONTACT_INFO.location}</span>
    </div>`;

  document.getElementById("social-profiles").innerHTML = SOCIAL_PROFILES.map(
    (p) => `
    <a href="${p.url}" target="_blank" rel="noreferrer" class="glass-panel glow-hover social-row">
      <span class="social-icon-wrap">${ICONS[p.icon]}</span>
      <span class="social-meta">
        <span class="name">${p.name}</span>
        <span class="handle">${p.handle}</span>
      </span>
      ${ICONS.arrowUpRight}
    </a>`
  ).join("");
}

/* ============================================================
   Header: scroll state + mobile menu
   ============================================================ */
function initHeader() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    menu.classList.toggle("open");
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      menu.classList.remove("open");
    })
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggle.classList.remove("open");
      menu.classList.remove("open");
    }
  });
}

/* ============================================================
   Scroll progress bar
   ============================================================ */
function initProgressBar() {
  const bar = document.getElementById("progress-bar");
  const onScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = pct + "%";
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ============================================================
   Custom cursor (desktop only) — mirrors Cursor.tsx exactly
   ============================================================ */
function initCursor() {
  if (window.matchMedia("(max-width: 767px)").matches) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;

  document.body.classList.add("cursor-enabled");
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  dot.style.opacity = "1";
  ring.style.opacity = "1";

  const move = (e) => {
    gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "none" });
    gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.3, ease: "none" });
  };
  const enter = () => {
    gsap.to(dot, { scale: 0.4, duration: 0.3 });
    gsap.to(ring, { scale: 2, duration: 0.3 });
  };
  const leave = () => {
    gsap.to(dot, { scale: 1, duration: 0.3 });
    gsap.to(ring, { scale: 1, duration: 0.3 });
  };

  document.addEventListener("mousemove", move);

  // Re-bind hover targets whenever the DOM changes (dynamic content).
  const bindTargets = () => {
    document.querySelectorAll("a, button, input, textarea").forEach((el) => {
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = "1";
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
  };
  bindTargets();
  const observer = new MutationObserver(bindTargets);
  observer.observe(document.body, { childList: true, subtree: true });
}

/* ============================================================
   Hero: staggered reveal + typed.js
   ============================================================ */
function initHero() {
  const section = document.getElementById("home");
  const targets = section.querySelectorAll(".staggered-reveal");
  gsap
    .timeline({ defaults: { ease: "none" } })
    .to(section, { opacity: 1, duration: 1.2 })
    .from(targets, { opacity: 0, y: 16, duration: 0.5, stagger: 0.25 }, "<");

  new Typed("#typed", {
    strings: TYPED_STRINGS,
    typeSpeed: 45,
    startDelay: 900,
    backSpeed: 30,
    backDelay: 5000,
    loop: true,
  });
}


/* ============================================================
   About: word-fade quote on scroll + reveal cards
   ============================================================ */
function initAbout() {
  const section = document.getElementById("about");
  const quote = document.getElementById("about-quote");
  const a1 = quote.querySelector(".about-1");
  const a2 = quote.querySelector(".about-2");
  const body = section.querySelector(".about-body");

  const tl = gsap
    .timeline({ defaults: { ease: "none", duration: 0.1 } })
    .fromTo(a1, { opacity: 0.2 }, { opacity: 1 })
    .to(a1, { opacity: 0.25, delay: 0.5 })
    .fromTo(a2, { opacity: 0.2 }, { opacity: 1 }, "<")
    .to(a2, { opacity: 0.25, delay: 1 });

  ScrollTrigger.create({
    trigger: section,
    start: "center 80%",
    end: "center top",
    scrub: 0,
    animation: tl,
  });

  gsap.fromTo(
    section.querySelectorAll(".about-reveal"),
    { opacity: 0, y: 40, rotateX: -10 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: body, start: "top 85%" },
    }
  );
}


/* ============================================================
   Skills: staggered reveal on scroll
   ============================================================ */
function initSkillsAnim() {
  const section = document.getElementById("skills");
  const wrapper = section.querySelector(".skills-wrapper");
  const targets = section.querySelectorAll(".staggered-reveal");

  const tl = gsap
    .timeline({ defaults: { ease: "none" } })
    .from(targets, { opacity: 0, y: 20, duration: 0.5, stagger: 0.3 });

  ScrollTrigger.create({
    trigger: wrapper,
    start: "100px bottom",
    end: "center center",
    scrub: 0,
    animation: tl,
  });
}

/* ============================================================
   Projects: 3D tilt on hover + scroll reveal + filtering
   ============================================================ */
function initProjectTilt() {
  document.querySelectorAll(".project-card").forEach((card) => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = "1";

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      gsap.to(card, {
        rotateY: (px - 0.5) * 14,
        rotateX: (0.5 - py) * 14,
        transformPerspective: 900,
        transformOrigin: "center",
        duration: 0.5,
        ease: "power3.out",
      });
      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.7, ease: "power3.out" });
    });
  });
}

function animateProjectCards() {
  gsap.utils.toArray(".project-card").forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 48, rotateX: -8 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 92%", once: true },
      }
    );
  });
  ScrollTrigger.refresh();
}

function initProjectFilters() {
  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.dataset.filter;
      document.querySelectorAll(".project-card").forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.style.display = show ? "" : "none";
      });
      ScrollTrigger.refresh();
    });
  });
}

/* ============================================================
   Contact form — same mailto behaviour as the original
   ============================================================ */
function showToast(message, type) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show " + type;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function initContactForm() {
  const form = document.getElementById("contact-form");

  if (window.emailjs) {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showToast("Please fill the required fields", "error");
      return;
    }

    const submitBtn = form.querySelector(".form-submit");
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    emailjs
      .sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, form)
      .then(() => {
        showToast("Message sent successfully!", "success");
        form.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        showToast("Something went wrong. Please try again.", "error");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      });
  });
}

/* ============================================================
   Boot
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  renderProfiles();
  renderAbout();
  renderSkills();
  renderProjects();
  renderEducation();
  renderContact();

  initHeader();
  initProgressBar();
  initCursor();
  initHero();
  initAbout();
  initSkillsAnim();
  initProjectFilters();
  initContactForm();
});
