import React from 'react';
import sofiaProfileImg from '../assets/sofia-ibarborde.jpeg';

const QuienesSomos = () => {
  const bio = "Soy una profesional de Recursos Humanos y People Operations con más de 8 años de experiencia liderando la gestión de personas en organizaciones y empresas en plena etapa de expansión. Mi enfoque combina la visión de negocio con metodologías ágiles para aportar estructura, claridad y previsibilidad en contextos donde el crecimiento acelerado exige profesionalizar las bases operativas.";

  const strengths = [
    {
      title: "Estructuración & Eficiencia Operativa",
      desc: "Especialista en el diseño e implementación de procesos formales de RRHH que eliminan la deuda organizacional, optimizan los recursos del área y reducen los costos operativos generales."
    },
    {
      title: "Digitalización & People Analytics con IA",
      desc: "Implementación integral de sistemas HRIS que mejoran hasta un 90% la eficiencia administrativa, combinada con la adopción de People Analytics con Inteligencia Artificial para la toma de decisiones basada en datos."
    },
    {
      title: "Onboarding & Capacitación de Alto Impacto",
      desc: "Creación de programas técnicos de inducción y capacitación que aceleran el time-to-productivity, mejoran en un 60% el desarrollo de competencias del equipo y minimizan la rotación temprana."
    },
    {
      title: "Cultura, Clima & Certificaciones",
      desc: "Liderazgo en el diseño de planes de bienestar y programas culturales bajo estándares internacionales, habiendo gestionado con éxito certificaciones de gran prestigio como Great Place to Work (GPTW) y Empresa B (B Corp)."
    },
    {
      title: "Gobernanza & Retención de Talento",
      desc: "Definición de organigramas evolutivos, descripciones de puestos (JDs) por objetivos e indicadores (KPIs), y ordenamiento de canales de comunicación que estabilizan la estructura y garantizan tasas de rotación excepcionalmente bajas (entre 0% y 6%)."
    }
  ];

  return (
    <div className="quienes-somos-grid animate-fade-in">
      <div className="quienes-somos-left">
        {/* Large Premium Avatar Container */}
        <div className="avatar-image-container">
          <img src={sofiaProfileImg} alt="Sofía Ibarborde" />
        </div>
      </div>

      <div className="quienes-somos-right">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '5px' }}>
          <h3 className="profile-name" style={{ marginBottom: 0 }}>Sofía Ibarborde</h3>
          <a
            href="https://www.linkedin.com/in/sofiaibarborde/"
            target="_blank"
            rel="noopener noreferrer"
            className="profile-social-link"
            aria-label="LinkedIn de Sofía Ibarborde"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <span className="profile-title">People Operations Specialist</span>
        <p className="profile-bio">{bio}</p>

        <h4 className="strengths-title">Competencias Clave y Puntos Fuertes</h4>
        <ul className="strengths-list">
          {strengths.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuienesSomos;
