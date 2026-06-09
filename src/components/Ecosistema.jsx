import React, { useState, useEffect } from 'react';

const Ecosistema = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'talent',
      title: 'Talent Acquisition',
      desc: 'Búsqueda especializada de perfiles administrativos y mandos medios. Identificamos el talento clave para la excelencia operativa de tu empresa.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      ),
      deliverables: [
        'Relevamiento profundo del perfil del puesto y del fit cultural de la organización.',
        'Publicación multicanal en portales especializados y base de datos propia.',
        'Entrevistas de evaluación por competencias y validación de referencias profesionales.',
        'Presentación de shortlist calificada con reportes individuales detallados.',
        'Garantía de satisfacción y reemplazo de 60 días sin costo adicional.'
      ]
    },
    {
      id: 'onboarding',
      title: 'Onboarding & Experience',
      desc: 'Inserción técnica y experiencia de bienvenida de alto impacto para maximizar el potencial del nuevo colaborador desde el primer día.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      ),
      deliverables: [
        'Diseño conceptual de la bienvenida del talento (Welcome Kit y agenda del día uno).',
        'Diseño del plan de inducción técnico y operativo para los periodos claves (30, 60 y 90 días).',
        'Definición e inducción a la figura del tutor interno ("Buddy Program").',
        'Establecimiento de hitos tempranos de evaluación y feedback formal a los 30 días.',
        'Optimización del time-to-productivity reduciendo la curva de aprendizaje del puesto.'
      ]
    },
    {
      id: 'operations',
      title: 'People Operations',
      desc: 'Consultoría continua bajo modalidad de abono mensual. Asumimos la gestión operativa diaria de personas y el respaldo continuo a líderes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      deliverables: [
        'Consultoría continua y asesoramiento estratégico directo a los socios fundadores y directivos.',
        'Auditoría completa y estandarización del control de legajos físicos/digitales.',
        'Mitigación y prevención de riesgos legales y laborales en la gestión de personas.',
        'Monitoreo preventivo del clima laboral a través de encuestas rápidas de satisfacción (pulse surveys).',
        'Resolución diaria y centralizada de novedades operativas (incidencias, licencias, vacaciones).'
      ]
    },
    {
      id: 'organization',
      title: 'Organización y Procesos',
      desc: 'Estandarización estructural: JDs por indicadores, diseño de organigramas y canales de comunicación institucionales fluidos.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      deliverables: [
        'Redacción técnica de Descripciones de Puestos (JDs) estructuradas en objetivos e indicadores (KPIs).',
        'Diseño y proyección de organigramas corporativos escalables y funcionales.',
        'Definición de matrices de responsabilidades y toma de decisiones (RACI).',
        'Implementación y ordenamiento normativo de canales de comunicación institucionales internos.',
        'Estandarización y redacción de políticas clave del personal y manual de convivencia operativa.'
      ]
    }
  ];

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeService]);

  const openDrawer = (service) => {
    setActiveService(service);
  };

  const closeDrawer = () => {
    setActiveService(null);
  };

  return (
    <>
      <div className="ecosistema-grid">
        {services.map((service) => (
          <div key={service.id} className="ecosistema-card">
            <div className="ecosistema-card-header">
              <div className="ecosistema-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
            <button 
              className="btn-learn-more" 
              onClick={() => openDrawer(service)}
              aria-label={`Ver más detalles sobre ${service.title}`}
            >
              Saber más
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Slide-out Drawer Overlay */}
      <div 
        className={`drawer-overlay ${activeService ? 'open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Slide-out Drawer Panel */}
      <div 
        className={`drawer ${activeService ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <button 
          className="drawer-close" 
          onClick={closeDrawer}
          aria-label="Cerrar detalles del servicio"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {activeService && (
          <>
            <div className="drawer-header">
              <div className="ecosistema-icon">
                {activeService.icon}
              </div>
              <h3 id="drawer-title">{activeService.title}</h3>
              <p className="text-muted">{activeService.desc}</p>
            </div>

            <div className="drawer-body">
              <h4>¿Qué Incluye el Servicio?</h4>
              <ul className="drawer-deliverables">
                {activeService.deliverables.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '40px' }}>
              <a 
                href="#contacto" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={(e) => {
                  closeDrawer();
                  // Let scroll complete
                  setTimeout(() => {
                    const contactSection = document.getElementById('contacto');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 300);
                }}
              >
                Consultar por este servicio
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Ecosistema;
