const experiences = [
  {
    logo: "assets/images/experience/mandiri.png",
    role: "Technical Writer - Mandiri Utama Finance",
    duration: "Feb 2025 - Sekarang",
    desc: "Menyusun TSD, dokumentasi aplikasi, serta pengujian sistem."
  }
];

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

const certificates = [
  {
    image: "assets/images/certificates/cert1.png",
    name: "Be A Great Seller - BINUS"
  }
];

function loadExperiences(){
  const container = document.getElementById("experienceList");
  experiences.forEach(exp=>{
    container.innerHTML += `
      <div class="exp-card">
        <img src="${exp.logo}">
        <div>
          <h4>${exp.role}</h4>
          <small>${exp.duration}</small>
          <p>${exp.desc}</p>
        </div>
      </div>
    `;
  });
}

function loadProjects(filter="all"){
  const container = document.getElementById("projectGrid");
  container.innerHTML = "";
  projects.filter(p => filter==="all" || p.category===filter)
    .forEach(p=>{
      container.innerHTML += `
        <div class="project-card">
          <img src="${p.image}">
          <div class="info">
            <h4>${p.name}</h4>
            <button onclick="openProject('${p.demo}')">Live Demo</button>
          </div>
        </div>
      `;
    });
}

function loadCertificates(){
  const container = document.getElementById("certGrid");
  certificates.forEach(c=>{
    container.innerHTML += `
      <div class="cert-card">
        <img src="${c.image}">
        <p>${c.name}</p>
      </div>
    `;
  });
}

function filterProjects(cat){ loadProjects(cat); }
function openProject(url){ window.open(url,'_blank'); }
function toggleMenu(){ document.getElementById("menu").classList.toggle("show"); }

loadExperiences();
loadProjects();
loadCertificates();
