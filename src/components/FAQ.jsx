import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button 
        className="faq-question" 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {question}
        <span className="faq-icon-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
      </button>
      <div 
        className="faq-answer"
        style={{
          maxHeight: isOpen ? '250px' : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
        }}
      >
        <div className="faq-answer-content">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: '¿Qué diferencia a NODO HUMA de una consultora de RRHH tradicional?',
      answer: 'Aportamos estructura sin burocracia. No nos limitamos a enviar candidatos; diseñamos e integramos la infraestructura humana completa (procesos, definición de puestos, clima) y operamos como un área de personas externa, flexible y alineada con la estrategia de tu negocio.'
    },
    {
      question: '¿Para qué tipo de empresas están pensados sus servicios?',
      answer: 'Nos especializamos en empresas y PyMEs en plena fase de expansión que experimentan dolores de crecimiento: socios absorbidos en tareas operativas de personal, rotación en los primeros 90 días, o falta de definición de responsabilidades en el equipo.'
    },
    {
      question: '¿Cómo funciona la garantía de 60 días en Talent Acquisition?',
      answer: 'Si el colaborador incorporado decide retirarse o no cumple con las expectativas y el fit cultural definido dentro de los primeros 60 días de trabajo, realizamos una nueva búsqueda del perfil de forma completa, sin costo operativo adicional para tu empresa.'
    },
    {
      question: '¿Qué es la modalidad de abono en People Operations?',
      answer: 'Es un servicio continuo donde asumimos la operación diaria de tu área de personas (monitoreo de clima, legajos, licencias, consultas de líderes). Te permite contar con profesionales especializados a una fracción del costo de un departamento interno y bajo un abono mensual fijo previsible.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <FAQItem 
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
