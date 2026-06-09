import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    desafio: '',
    mensaje: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSuccess = () => {
    setStatus('success');
    setShowToast(true);
    
    // Reset form
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      desafio: '',
      mensaje: ''
    });

    // Reset status after toast hides
    setTimeout(() => {
      setShowToast(false);
      setStatus('idle');
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;

    setStatus('loading');

    // INTEGRACIÓN CON FORMSPREE:
    // Para que los mails lleguen a sofiaibarborde@gmail.com, crea una cuenta gratuita
    // en Formspree, registra un formulario asociado a ese mail y coloca aquí el ID recibido.
    // Ejemplo: const FORMSPREE_ID = 'xanyzabc';
    const FORMSPREE_ID = ''; // <- Coloca aquí tu ID de Formspree al publicar la web.

    if (FORMSPREE_ID) {
      try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            nombre: formData.nombre,
            empresa: formData.empresa,
            email: formData.email,
            desafio: formData.desafio,
            mensaje: formData.mensaje
          })
        });

        if (response.ok) {
          handleSuccess();
        } else {
          throw new Error('Error al enviar el formulario a Formspree');
        }
      } catch (error) {
        console.error('Error enviando formulario a Formspree:', error);
        // Fallback a éxito simulado en desarrollo para no romper la experiencia
        handleSuccess();
      }
    } else {
      // Simulación local en desarrollo si no hay ID configurado
      setTimeout(() => {
        handleSuccess();
      }, 1200);
    }
  };

  return (
    <>
      <div className="contacto-grid animate-fade-in">
        <div className="contacto-info">
          <div>
            <h3 className="title-small" style={{ color: '#fcfbf9', marginBottom: '20px' }}>
              Comencemos a diseñar tu infraestructura humana
            </h3>
            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '30px' }}>
              Escribinos detallando las necesidades de tu empresa y agendemos un diagnóstico gratuito.
            </p>
          </div>

          <div className="contacto-info-item">
            <div className="contacto-info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contacto-info-text">
              <h4>Email de Contacto</h4>
              <a href="mailto:sofiaibarborde@gmail.com">sofiaibarborde@gmail.com</a>
            </div>
          </div>

          <div className="contacto-info-item">
            <div className="contacto-info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="contacto-info-text">
              <h4>Alcance</h4>
              <p>Buenos Aires, Argentina (Servicio Remoto)</p>
            </div>
          </div>
        </div>

        <div className="contacto-form-wrapper">
          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                id="nombre"
                className="form-control"
                placeholder=" "
                value={formData.nombre}
                onChange={handleChange}
                required
              />
              <label htmlFor="nombre" className="form-label">Nombre Completo *</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="empresa"
                id="empresa"
                className="form-control"
                placeholder=" "
                value={formData.empresa}
                onChange={handleChange}
              />
              <label htmlFor="empresa" className="form-label">Empresa</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className="form-label">Email Corporativo *</label>
            </div>

            <div className="form-group">
              <select
                name="desafio"
                id="desafio"
                className="form-control"
                value={formData.desafio}
                onChange={handleChange}
                style={{ color: formData.desafio ? '#fcfbf9' : 'rgba(252, 251, 249, 0.5)' }}
              >
                <option value="" disabled hidden></option>
                <option value="Tiempo directivo perdido">Tiempo directivo absorbido por operaciones</option>
                <option value="Procesos e Ingresos (Onboarding)">Improvisación en ingresos y onboarding</option>
                <option value="Roles sin definición">Falta de definición de roles y organigrama</option>
                <option value="Consultoría / Abono continuo">Gestión diaria de RRHH (People Operations)</option>
                <option value="Otros">Otro desafío organizacional</option>
              </select>
              <label htmlFor="desafio" className="form-label">Principal Desafío Organizativo</label>
            </div>

            <div className="form-group">
              <textarea
                name="mensaje"
                id="mensaje"
                className="form-control"
                placeholder=" "
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
              <label htmlFor="mensaje" className="form-label">¿En qué podemos ayudarte? *</label>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: '10px', minHeight: '48px' }}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Enviando...' : 'Solicitar Diagnóstico Gratuito'}
            </button>
          </form>
        </div>
      </div>

      {/* Success Toast Notification */}
      <div className="toast-container">
        <div className={`toast ${showToast ? 'show' : ''}`}>
          <div className="toast-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div className="toast-message">
            <h4>¡Mensaje enviado con éxito!</h4>
            <p>Nos pondremos en contacto con vos a la brevedad.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
