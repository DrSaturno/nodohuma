import React, { useState } from 'react';

const TrajectoryItem = ({ company, period, role, achievements, isOpen, onClick }) => {
  return (
    <div className={`trajectory-item ${isOpen ? 'open' : ''}`}>
      <button 
        className="trajectory-header" 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <div className="trajectory-header-left">
          <span className="company-title">{company}</span>
          <span className="job-title">{role}</span>
        </div>
        <div className="trajectory-header-right">
          <span className="company-period">{period}</span>
          <span className="trajectory-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </div>
      </button>
      <div 
        className="trajectory-body"
        style={{
          maxHeight: isOpen ? '400px' : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
        }}
      >
        <div className="trajectory-content">
          <ul className="trajectory-bullets">
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const QuienesSomos = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open the first item by default

  const bio = "Soy Sofía Ibarborde, profesional de Recursos Humanos y People Operations con más de 8 años de experiencia acompañando organizaciones en crecimiento. A lo largo de mi carrera trabajé construyendo procesos, ordenando estructuras y acompañando líderes en contextos donde el crecimiento exigía mayor organización y previsibilidad.";

  const history = [
    {
      company: "Asociación Cooperadora HNRG",
      role: "Responsable de RRHH y administración",
      period: "2025 - 2026",
      achievements: [
        "Estructuración integral del área de Recursos Humanos de la cooperadora.",
        "Gestión activa de voluntarios y coordinación de equipos interdisciplinarios.",
        "Implementación del sistema Tango para la administración eficiente de recursos.",
        "Aplicación de People Analytics con Inteligencia Artificial para la toma de decisiones basada en datos."
      ]
    },
    {
      company: "Ensemble Business Group",
      role: "Responsable Global de RRHH",
      period: "2024 - 2025",
      achievements: [
        "Implementación integral de sistema HRIS con una mejora documentada del 90% en eficiencia administrativa.",
        "Diseño y lanzamiento de programas de onboarding y capacitación técnica, logrando hasta un 60% de mejora en competencias del equipo.",
        "Logro de crecimiento sostenido de la nómina manteniendo una tasa de rotación de personal del 0%."
      ]
    },
    {
      company: "Ojam Bullrich Flanzbaum",
      role: "Responsable de RRHH y OPS",
      period: "2021 - 2024",
      achievements: [
        "Coordinación de los procesos de certificación internacional para Great Place to Work (2021–2023) y Empresa B (B Corp, 2023).",
        "Mantenimiento de una tasa de rotación anual del 6% durante 3 años de crecimiento sostenido y expansión del equipo.",
        "Liderazgo en el diseño y aplicación de programas de cultura corporativa, diversidad y bienestar."
      ]
    },
    {
      company: "Berton Moreno IP",
      role: "Responsable de RRHH y OPS",
      period: "2018 - 2021",
      achievements: [
        "Logro de la certificación Great Place to Work (2020–2021).",
        "Acompañamiento en la expansión del equipo con un crecimiento del 50% de la nómina y una rotación del 5%.",
        "Reestructuración y creación de procesos formales de RRHH que redujeron los costos operativos del área entre un 20% y 30%.",
        "Implementación de un sistema de gestión interna que operó con un 95% de eficiencia y reducción de la deuda organizacional en un 85% en dos años."
      ]
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="quienes-somos-grid animate-fade-in">
      <div className="quienes-somos-left">
        {/* Large Premium Avatar Container - Styled to frame a photo or initial badge */}
        <div className="avatar-image-container">
          SI
          {/* Note for deployment: To use a real photo, uncomment the img tag below and place the image in assets */}
          {/* <img src="/src/assets/sofia-profile.jpg" alt="Sofía Ibarborde" /> */}
        </div>
      </div>

      <div className="quienes-somos-right">
        <h3 className="profile-name">Sofía Ibarborde</h3>
        <span className="profile-title">People Operations Specialist</span>
        <p className="profile-bio">{bio}</p>

        <div className="trajectory-accordion">
          {history.map((item, index) => (
            <TrajectoryItem
              key={index}
              company={item.company}
              role={item.role}
              period={item.period}
              achievements={item.achievements}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
