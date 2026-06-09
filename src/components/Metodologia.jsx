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
      desc: 'Entendemos la situación actual de la organización y los objetivos del negocio para sentar las bases.'
    },
    {
      step: 'Fase 02',
      title: 'Diseño',
      desc: 'Definimos prioridades, estructura y procesos según las necesidades detectadas de forma personalizada.'
    },
    {
      step: 'Fase 03',
      title: 'Integración',
      desc: 'Ponemos en marcha las acciones acordadas y acompañamos a los equipos durante la adaptación y el despegue.'
    },
    {
      step: 'Fase 04',
      title: 'Evolución',
      desc: 'Realizamos seguimiento, ajustes y mejoras para sostener el crecimiento de la organización en el tiempo.'
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
