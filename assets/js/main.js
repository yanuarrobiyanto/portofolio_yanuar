/* =====================================================
   1. DATA SOURCE
===================================================== */

/* Experiences */
const experiences = [
  {
    logo: "assets/images/experience/muf.png",
    role: "Technical Writer - Mandiri Utama Finance",
    duration: "Feb 2025 - Sekarang",
    desc: `
        <strong>System Requirement Analysis</strong><br>
    Analyzed system requirements, modeled business processes using activity diagrams and process flows, and prepared Technical Specification Documents (TSD).<br><br>

    <strong>Business & Technical Documentation</strong><br>
    Documented business and technical requirements based on BRD analysis and application testing.<br><br>

    <strong>System Specification Development</strong><br>
    Translated complex business and technical needs into clear system specifications for development teams.<br><br>

    <strong>Cross-Functional Collaboration</strong><br>
    Collaborated with developers, database engineers, testers, and system analysts during the system development process.<br><br>

    <strong>SDLC Compliance & Maintenance</strong><br>
    Ensured all documentation complied with the company’s SDLC standards and was maintained continuously during system enhancements.<br><br>
    `
  }
  ,
  {
    logo: "assets/images/experience/binus.png",
    role: "Promotions Team - BINUS University",
    duration: "Feb 2024 - Present",
    desc: `
      <strong>Sales Achievement</strong><br>
      Successfully sold 60 registration forms within a four-month period, exceeding the monthly target by 2 forms.<br><br>

      <strong>Registration Information</strong><br>
      Provided clear and detailed information to prospective students about the registration process for both the Master's and Doctoral programs offered at BINUS Graduate Program.<br><br>

      <strong>Additional Responsibilities</strong><br>
      Trusted with additional duties, including interviewing new members to ensure their suitability for strengthening the team.<br><br>

      <strong>Event Management</strong><br>
      Capable of managing and handling various events at BINUS, ensuring that all activities run smoothly and successfully.<br><br>

      <strong>Training and Mentoring</strong><br>
      Leveraged knowledge and experience to train and mentor new interns, helping them adapt and achieve optimal performance.
    `
  }
];


/* Projects */
const projects = [
  {
    image: "assets/images/projects/dashboard.png",
    name: "Sales Dashboard",
    category: "bi",
    demo: "https://yourdemo.com"
  },
  {
    image: "assets/images/projects/oil-drop.png",
    name: "Oil Drop App",
    category: "web",
    demo: "https://yourdemo.com"
  }
];

/* Certificates */
const certificates = [
  {
    image: "assets/images/certificates/morphit.png",
    name: "Finalist of IT Business Competition MORPH.IT 2024",
    desc: "Finalist in a National IT Business Competition Organized by MORPH.IT"
  }
,
  {
    image: "assets/images/certificates/bgp.png",
    name: "Token Of Appreciation - BGP 2025",
    desc: "Renewed Contract as a Team Member, BINUS Graduate Program Promotions Team (2025/26)"
  }
,
  {
    image: "assets/images/certificates/cisco.png",
    name: "Certificate of Course Completion <br> Data Science",
    desc: "Finalist in national IT business competition organized by MORPH.IT."
  }
  ,
  {
    image: "assets/images/certificates/fl.png",
    name: "Freshman Leader Binusian 2027",
    desc: "Recognized as a Freshman Leader at Binusian 2027"
  }
  ,
  {
    image: "assets/images/certificates/bela.png",
    name: "Certificate of Participation <br> Bela Negara",
    desc: "Completed the National Defense Education Program (Bela Negara) organized by Kementrian Pertahanan RI."
  }
  ,
  {
    image: "assets/images/certificates/gui.png",
    name: "Certificate of Participation <br> GUI Design Workshop",
    desc: "Completed GUI Design Workshop organized by BINUS University."
  }
  ,
  {
    image: "assets/images/certificates/beagreat.png",
    name: "Be A Great Seller Training Program",
    desc: "Completed Training Program organized by BINUS University."
  }
  ,
  {
    image: "assets/images/certificates/misa.png",
    name: "Make It Stick: Attractive Presentations for Marketers Training Program",
    desc: "Completed Training Program organized by BINUS University."
  }
  ,
  {
    image: "assets/images/certificates/pc.png",
    name: "Persuasive Communication in Marketing Practice Training Program",
    desc: "Completed Training Program organized by BINUS University."
  }


];



/* =====================================================
   2. DOM SELECTORS
===================================================== */

const experienceList = document.getElementById("experienceList");
const projectGrid    = document.getElementById("projectGrid");
const certGrid       = document.getElementById("certGrid");
const menu           = document.getElementById("menu");


/* =====================================================
   3. RENDER FUNCTIONS
===================================================== */

/* Render Experiences */
function renderExperiences() {
  experienceList.innerHTML = "";

  experiences.forEach(exp => {
    const card = document.createElement("div");
    card.className = "exp-card";

    card.innerHTML = `
      <img src="${exp.logo}" alt="${exp.role}">
      <div>
        <h4>${exp.role}</h4>
        <small>${exp.duration}</small>
        <p>${exp.desc}</p>
      </div>
    `;

    experienceList.appendChild(card);
  });
}


/* Render Projects */
function renderProjects(filter = "all") {
  projectGrid.innerHTML = "";

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(p => p.category === filter);

  filteredProjects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${project.image}" alt="${project.name}">
      <div class="project-content">
        <span class="project-category">${project.category.toUpperCase()}</span>
        <h3>${project.name}</h3>
        <a href="${project.demo}" target="_blank" title="Live Demo">↗</a>
      </div>
    `;

    projectGrid.appendChild(card);
  });
}


/* Render Certificates */
function renderCertificates() {
  certGrid.innerHTML = "";

  certificates.forEach(cert => {
    const card = document.createElement("div");
    card.className = "cert-card";
    card.onclick = () => openCertModal(cert.image);

    card.innerHTML = `
      <img src="${cert.image}" alt="${cert.name}">
      <h4>${cert.name}</h4>
      <p>${cert.desc}</p>
    `;

    certGrid.appendChild(card);
  });
}


function openCertModal(imageSrc) {
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("certModalImage");

  modalImg.src = imageSrc;
  modal.classList.add("show");
}

function closeCertModal() {
  const modal = document.getElementById("certModal");
  modal.classList.remove("show");
}


/* =====================================================
   4. EVENT & HELPER FUNCTIONS
===================================================== */

/* Filter Projects (called from HTML button) */
function filterProjects(category) {
  renderProjects(category);
}

/* Toggle Mobile Menu */
function toggleMenu() {
  menu.classList.toggle("show");
}


/* =====================================================
   5. INITIAL RENDER
===================================================== */

renderExperiences();
renderProjects("all");
renderCertificates();

/* =====================================================
   6. DARK / LIGHT MODE TOGGLE
===================================================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }
  });
}

/* =====================================================
   7. DEVFLASH SMOOTH CURSOR PARTICLES (FIXED VERSION)
===================================================== */

const canvas = document.getElementById("cursorCanvas");
const ctx = canvas.getContext("2d");

// Setup canvas (DPR fix)
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Glow blend mode
ctx.globalCompositeOperation = "lighter";

let particles = [];
let mouse = { x: 0, y: 0 };
let lastMoveTime = Date.now();
let smoothMouse = { x: 0, y: 0 };

// Create particle (DevFlash style)
function createParticle(x, y) {
  const initialSize = Math.random() * 1 + 2; // 1–2

  return {
    x,
    y,
    vx: (Math.random() - 0.5) * 2.5,
    vy: (Math.random() - 0.5) * 2.5,
    size: initialSize,
    initialSize: initialSize,

    hue: 190 + Math.random() * 60,
    saturation: 90,
    lightness: 65,

    glow: true
  };
}

// Track mouse position only
document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  lastMoveTime = Date.now(); // catat waktu terakhir bergerak
});

// Main animation loop (SMOOTH VERSION)
function animate() {
  const width = canvas.getBoundingClientRect().width;
  const height = canvas.getBoundingClientRect().height;

  ctx.clearRect(0, 0, width, height);

  // Smooth follow mouse (LERP)
  smoothMouse.x += (mouse.x - smoothMouse.x) * 0.15;
  smoothMouse.y += (mouse.y - smoothMouse.y) * 0.15;

  // Spawn partikel pelan & stabil
  const now = Date.now();
const isMoving = now - lastMoveTime < 60; // 60 ms terakhir masih dianggap bergerak

if (isMoving) {
  for (let i = 0; i < 4; i++) {
    particles.push(createParticle(smoothMouse.x, smoothMouse.y));
  }
}


  if (particles.length > 600) {
    particles.splice(0, 100);
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];

    // Damping velocity (biar halus)
    p.vx *= 0.96;
    p.vy *= 0.96;

    p.x += p.vx;
    p.y += p.vy;

    // Shrink smooth
    p.size *= 0.965;

    drawParticle(p);

    if (p.size < 0.3) {
      particles.splice(i, 1);
    }
  }

  requestAnimationFrame(animate);
}

// ====== FUNGSI PERSIS DARI GAMBAR KAMU ======
function drawParticle(particle) {
  const alpha = Math.min(1, particle.size / particle.initialSize + 0.1);

  if (particle.glow && particle.size > 0.5) {
    const gradient = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size * 3
    );

    gradient.addColorStop(
      0,
      `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${alpha * 0.8})`
    );

    gradient.addColorStop(
      0.4,
      `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${alpha * 0.3})`
    );

    gradient.addColorStop(
      1,
      `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, 0)`
    );

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
    ctx.fill();
  }
}
// ====== END FUNGSI DEVFLASH ======

animate();

/* =====================================================
   MATIKAN EFEK SAAT HOVER KE FOTO PROFIL (HERO + ABOUT)
===================================================== */

const profileImages = document.querySelectorAll(
  ".hero-image img, #about .about img"
);

profileImages.forEach(img => {
  img.addEventListener("mouseenter", () => {
    canvas.style.opacity = "0";
  });

  img.addEventListener("mouseleave", () => {
    canvas.style.opacity = "1";
  });
});

