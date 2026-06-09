import React, { useEffect, useRef, useState } from 'react';

const TimelineItem = ({ step, title, desc, index }) => {
  const [isActive, setIsActive] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        }
      },
      {
        threshold: 0.25, // Triggers when 25% of the item is in view
        rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before center screen
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={itemRef} 
      className={`timeline-item ${isEven ? 'timeline-item-left' : 'timeline-item-right'} ${isActive ? 'active' : ''}`}
    >
      <div className="timeline-dot" />
      <div className="timeline-step">{step}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Metodologia = () => {
  const steps = [
    {
      step: 'Fase 01',
      title: 'Diagnóstico',
      desc: 'Relevamos el estado actual del equipo, identificamos cuellos de botella en la comunicación, valoramos el clima organizativo y definimos los objetivos de negocio clave para alinear la infraestructura humana.'
    },
    {
      step: 'Fase 02',
      title: 'Diseño',
      desc: 'Planificamos la infraestructura a medida. Redactamos las descripciones de puestos por indicadores (JDs), estructuramos canales de comunicación, proyectamos el organigrama y modelamos la inducción (onboarding).'
    },
    {
      step: 'Fase 03',
      title: 'Integración',
      desc: 'Implementamos el ecosistema diseñado. Iniciamos búsquedas críticas de talento, ejecutamos los planes de bienvenida, estructuramos la auditoría de legajos y activamos el canal de soporte directo a los líderes.'
    },
    {
      step: 'Fase 04',
      title: 'Evolución',
      desc: 'Brindamos un acompañamiento estratégico y operativo continuo. Medimos el clima laboral, ajustamos los procesos al ritmo de crecimiento del negocio y optimizamos constantemente la estructura para escalar.'
    }
  ];

  return (
    <div className="timeline">
      {steps.map((stepData, index) => (
        <TimelineItem 
          key={index}
          index={index}
          step={stepData.step}
          title={stepData.title}
          desc={stepData.desc}
        />
      ))}
    </div>
  );
};

export default Metodologia;
