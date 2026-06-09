import React, { useState, useEffect } from 'react';

const Ecosistema = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'talent',
      title: 'Talent Acquisition',
      desc: 'Búsqueda y selección de perfiles administrativos, operativos y mandos medios. Relevamiento, entrevistas, presentación de candidatos y acompañamiento del proceso.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      ),
      deliverables: [
        'Relevamiento profundo del perfil del puesto y del fit cultural.',
        'Publicación multicanal en portales especializados y base de datos propia.',
        'Entrevistas de evaluación por competencias y validación de referencias.',
        'Presentación de shortlist calificada con reportes individuales.',
        'Garantía de reemplazo de 60 días sin costo adicional.'
      ]
    },
    {
      id: 'onboarding',
      title: 'Onboarding & Experience',
      desc: 'Diseño de experiencias de ingreso que aceleran la adaptación, reducen la incertidumbre y mejoran la integración de cada incorporación.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      ),
      deliverables: [
        'Diseño del plan de inducción técnico y operativo (30, 60 y 90 días).',
        'Coordinación de los preparativos de ingreso con el líder.',
        'Gestión documental completa y orden de legajo de ingreso.',
        'Definición de tutores internos (Buddies) y seguimiento inicial.',
        'Aceleración de la curva de aprendizaje y time-to-productivity.'
      ]
    },
    {
      id: 'operations',
      title: 'People Operations',
      desc: 'Acompañamiento continuo para líderes y equipos. Gestión documental, seguimiento de clima, soporte operativo y asesoramiento permanente.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      deliverables: [
        'Soporte diario y centralizado ante novedades operativas de personal.',
        'Monitoreo preventivo del clima laboral del equipo.',
        'Auditoría integral y organización documental de legajos.',
        'Soporte permanente y asesoramiento estratégico a líderes.',
        'Mitigación de riesgos legales y laborales en el día a día.'
      ]
    },
    {
      id: 'organization',
      title: 'Organización y Procesos',
      desc: 'Descripciones de puesto, organigramas, definición de responsabilidades y procesos internos que acompañan el crecimiento de la organización.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      deliverables: [
        'Redacción técnica de Descripciones de Puestos (JDs) por objetivos e indicadores (KPIs).',
        'Diseño y proyección de organigramas corporativos escalables.',
        'Definición de responsabilidades y matrices de toma de decisiones (RACI).',
        'Estandarización y ordenamiento de procesos internos y flujos de trabajo.',
        'Alineamiento estructural adaptado al ritmo de crecimiento de la empresa.'
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
