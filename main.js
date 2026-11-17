const data = {
  "cv": {
    "metadata": {
      "version": "1.0",
      "language": "pt-BR",
      "lastUpdated": "2026-11-16"
    },
    "personalInformation": {
      "fullName": "Byanka Pereira Cavalcanti",
      "professionalTitle": "Estudante de Análise e Desenvolvimento de Sistemas",
      
      "profilePhoto": "Byanka.jpeg",
      "email": "Bynka013pc@hotmail.com",
      "phone": "(11) 99478-3334",
      "whatsapp": "11994783334",
      "location": {
        "city": "São Paulo",
        "state": "SP",
        "country": "Brasil",
        "address": ""
      },
      "linkedin": "",
      "github": "",
      "portfolio": "",
      "website": ""
    },
    "professionalSummary": {
      "description": "Tenho 25 anos e estou cursando Análise e Desenvolvimento de Sistemas. Estou explorando o mundo da tecnologia e construindo meu futuro, ampliando meus conhecimentos, aprendendo novas ferramentas e desenvolvendo habilidades pessoais e profissionais.",
      "yearsOfExperience": 0,
      "mainSpecialization": "Tecnologia / Desenvolvimento de Sistemas",
      "careerObjective": "Construir uma carreira na área de tecnologia, adquirir experiência e transformar conhecimentos em oportunidades para o futuro."
    },
    "professionalExperience": [
      {
        "company": "",
        "position": "Em busca da primeira oportunidade",
        "employmentType": "Estágio / Júnior",
        "location": "São Paulo - SP",
        "startDate": "",
        "endDate": "",
        "current": true,
        "description": "Em busca da primeira oportunidade profissional na área de tecnologia.",
        "responsibilities": [],
        "achievements": [],
        "technologies": []
      }
    ],
    "education": [
      {
        "institution": "",
        "degree": "Análise e Desenvolvimento de Sistemas",
        "fieldOfStudy": "Tecnologia",
        "level": "Graduação",
        "startDate": "",
        "endDate": "",
        "current": true,
        "description": "Curso superior voltado à tecnologia, desenvolvimento e sistemas. Atualmente cursando."
      }
    ],
    "skills": {
      "technical": [
        { "name": "Tecnologia", "level": "Básico" },
        { "name": "Lógica de programação", "level": "Básico" },
        { "name": "Desenvolvimento de sistemas", "level": "Básico" },
        { "name": "HTML & CSS", "level": "Básico" }
      ],
      "behavioral": ["Aprendizado contínuo", "Dedicação", "Organização", "Trabalho em equipe"],
      "tools": ["VS Code", "GitHub"],
      "methodologies": ["Aprendizado contínuo"]
    },
    "languages": [
      { "name": "Português", "proficiency": "Nativo" }
    ],
    "certifications": [
      {
        "name": "Ainda não possui certificações",
        "issuer": "",
        "issueDate": "",
        "expirationDate": "",
        "credentialUrl": ""
      }
    ],
    "projects": [
      {
        "name": "Meu Portfólio / Currículo Online",
        "description": "Site pessoal feito em HTML, CSS e JavaScript para apresentar minha trajetória.",
        "role": "Desenvolvedora",
        "technologies": ["HTML", "CSS", "JavaScript", "VS Code"],
        "url": "",
        "startDate": "2026-11-05",
        "endDate": ""
      }
    ],
    "courses": [],
    "additionalInformation": {
      "availability": "Aberta a oportunidades",
      "workModel": "Presencial / Híbrido / Remoto",
      "travelAvailability": false,
      "additionalNotes": "Tenho 25 anos e estou em processo de formação."
    },
    "preferences": {
      "targetPositions": ["Estágio em TI", "Desenvolvimento", "Suporte Técnico"],
      "targetIndustries": ["Tecnologia"],
      "preferredLocations": ["São Paulo - SP"],
      "preferredWorkModel": "Híbrido"
    }
  }
};

// ===== AQUI O JAVASCRIPT PUXA E COLOCA NO HTML =====
const cv = data.cv;
const info = cv.personalInformation;
const summary = cv.professionalSummary;

// Metadata + Dados Pessoais
document.getElementById("metadata").textContent = `CURRÍCULO • v${cv.metadata.version} • ${cv.metadata.lastUpdated}`;
document.getElementById("fullName").textContent = info.fullName;
document.getElementById("professionalTitle").textContent = info.professionalTitle;
document.getElementById("age").textContent = "🎂 25 anos";
document.getElementById("location").textContent = `📍 ${info.location.city}, ${info.location.state} - ${info.location.country}`;
document.getElementById("email").textContent = `✉️ ${info.email}`;
document.getElementById("phone").textContent = info.phone ? `📞 ${info.phone}` : "";
document.getElementById("availabilityBadge").textContent = cv.additionalInformation.availability;
document.getElementById("profilePhoto").src = info.profilePhoto;
document.getElementById("profilePhoto").alt = `Foto de ${info.fullName}`;

// Resumo
document.getElementById("summaryDescription").textContent = summary.description;
document.getElementById("summaryExtra").innerHTML = `
  <span><b>Especialização:</b> ${summary.mainSpecialization}</span>
  <span><b>Objetivo:</b> ${summary.careerObjective}</span>
  <span><b>Experiência:</b> ${summary.yearsOfExperience} anos - Em início de carreira</span>
`;

// Experiência
document.getElementById("experienceList").innerHTML = cv.professionalExperience.map(exp => `
  <div class="card cinza">
    <span class="tag tag-roxa">${exp.employmentType}</span>
    <h3>${exp.position}</h3>
    <p>${exp.description}</p>
    <p>${exp.location}</p>
  </div>
`).join("");

// Formação
document.getElementById("educationList").innerHTML = cv.education.map(edu => `
  <div class="card">
    <span class="tag tag-roxa">${edu.level} • ${edu.current ? "Em andamento" : "Concluído"}</span>
    <h3>${edu.degree}</h3>
    <p>${edu.description}</p>
  </div>
`).join("");

// Cursos - se não tiver, esconde a seção
if (cv.courses.length === 0) {
  document.getElementById("coursesSection").style.display = "none";
} else {
  document.getElementById("coursesList").innerHTML = cv.courses.map(curso => `
    <div class="card">
      <span class="tag tag-verde">Curso complementar • Em andamento</span>
      <h3>${curso.name}</h3>
      <p>Desenvolvendo comunicação e ampliando possibilidades profissionais.</p>
    </div>
  `).join("");
}

// Habilidades
document.getElementById("technicalSkills").innerHTML = cv.skills.technical.map(s => `<span>${s.name}</span>`).join("");
document.getElementById("behavioralSkills").innerHTML = cv.skills.behavioral.map(s => `<span>${s}</span>`).join("");
document.getElementById("toolsSkills").innerHTML = cv.skills.tools.map(s => `<span>${s}</span>`).join("");
document.getElementById("methodologiesSkills").innerHTML = cv.skills.methodologies.map(s => `<span>${s}</span>`).join("");

// Idiomas - agora só Português, sem inglês
document.getElementById("languagesList").innerHTML = cv.languages.map(lang => `
  <div class="idioma"><b>${lang.name}</b><span>${lang.proficiency}</span></div>
`).join("");

// Certificações
document.getElementById("certificationsList").innerHTML = cv.certifications.map(cert => `
  <div class="card"><p>${cert.name}</p><p>Em processo de formação.</p></div>
`).join("");

// Projetos
document.getElementById("projectsList").innerHTML = cv.projects.map(proj => `
  <div class="card">
    <span class="tag tag-roxa">Projeto Pessoal</span>
    <h3>${proj.name}</h3>
    <p>${proj.description}</p>
    <p class="tech">Tecnologias: ${proj.technologies.join(" • ")}</p>
  </div>
`).join("");

// Informações Adicionais
document.getElementById("additionalInfo").innerHTML = `
  <span><b>Disponibilidade:</b> ${cv.additionalInformation.availability}</span>
  <span><b>Modelo de trabalho:</b> ${cv.additionalInformation.workModel}</span>
  <span><b>Disponibilidade para viajar:</b> ${cv.additionalInformation.travelAvailability ? "Sim" : "A combinar"}</span>
  <span><b>Nota:</b> ${cv.additionalInformation.additionalNotes}</span>
`;

// Preferências
document.getElementById("preferencesList").innerHTML = [
  ...cv.preferences.targetPositions,
  ...cv.preferences.targetIndustries,
  ...cv.preferences.preferredLocations
].map(p => `<span>${p}</span>`).join("");

// Contato + Rodapé
document.getElementById("contactName").textContent = info.fullName;
document.getElementById("contactEmail").textContent = info.email;
document.getElementById("contactButton").href = `mailto:${info.email}`;
document.getElementById("footerName").textContent = `Desenvolvido por ${info.fullName}`;
document.getElementById("footerPhrase").textContent = "Meu primeiro passo para o futuro na tecnologia 💜";

console.log(cv);