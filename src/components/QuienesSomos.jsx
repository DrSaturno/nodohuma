import React from 'react';

const QuienesSomos = () => {
  const bio = "Soy una profesional de Recursos Humanos y People Operations con más de 8 años de experiencia liderando la gestión de personas en organizaciones y empresas en plena etapa de expansión. Mi enfoque combina la visión de negocio con metodologías ágiles para aportar estructura, claridad y previsibilidad en contextos donde el crecimiento acelerado exige profesionalizar las bases operativas.";

  const strengths = [
    {
      title: "Estructuración y Eficiencia Operativa",
      desc: "Especialista en el diseño e implementación de procesos formales de RRHH que eliminan la deuda organizacional, optimizan los recursos del área y reducen los costos operativos generales."
    },
    {
      title: "Digitalización & People Analytics con IA",
      desc: "Implementación integral de sistemas HRIS que mejoran hasta un 90% la eficiencia administrativa, combinada con la adopción de People Analytics con Inteligencia Artificial para la toma de decisiones basada en datos."
    },
    {
      title: "Onboarding y Capacitación de Alto Impacto",
      desc: "Creación de programas técnicos de inducción y capacitación que aceleran el time-to-productivity, mejoran en un 60% el desarrollo de competencias del equipo y minimizan la rotación temprana."
    },
    {
      title: "Cultura, Clima y Certificaciones",
      desc: "Liderazgo en el diseño de planes de bienestar y programas culturales bajo estándares internacionales, habiendo gestionado con éxito certificaciones de gran prestigio como Great Place to Work (GPTW) y Empresa B (B Corp)."
    },
    {
      title: "Gobernanza y Retención de Talento",
      desc: "Definición de organigramas evolutivos, descripciones de puestos (JDs) por objetivos e indicadores (KPIs), y ordenamiento de canales de comunicación que estabilizan la estructura y garantizan tasas de rotación excepcionalmente bajas (entre 0% y 6%)."
    }
  ];

  return (
    <div className="quienes-somos-grid animate-fade-in">
      <div className="quienes-somos-left">
        {/* Large Premium Avatar Container */}
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
