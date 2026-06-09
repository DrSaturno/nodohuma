import React, { useState } from 'react';
import Header from './components/Header';
import HeroCanvas from './components/HeroCanvas';
import PillarsDiagram from './components/PillarsDiagram';
import Ecosistema from './components/Ecosistema';
import Metodologia from './components/Metodologia';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import './App.css';

function App() {
  const [activePillar, setActivePillar] = useState('personas');

  const pillars = {
    personas: {
      title: 'Personas',
      tagline: 'El talento adecuado en el lugar adecuado.',
      desc: 'Profesionalizamos la selección e integración del talento clave. Aseguramos que los líderes cuenten con el respaldo técnico necesario para delegar de forma efectiva y guiar a sus equipos sin consumir su tiempo estratégico en la resolución de dudas operativas.'
    },
    procesos: {
      title: 'Procesos',
      tagline: 'Estructura ágil sin burocracia.',
      desc: 'Diseñamos y alineamos los procesos humanos al ritmo del negocio. Desde flujos de inducción (onboarding) técnicos impecables hasta el monitoreo preventivo de clima, transformando la improvisación operativa en un activo previsible y eficiente.'
    },
    estructura: {
      title: 'Estructura',
      tagline: 'La arquitectura para escalar de forma sostenible.',
      desc: 'Estandarizamos la organización mediante descripciones de puestos (JDs) basadas en indicadores claros, diseño de organigramas evolutivos y estructuración de canales de comunicación fluidos para evitar responsabilidades asumidas sobre bases inestables.'
    },
    cultura: {
      title: 'Cultura',
      tagline: 'El diseño que potencia el ecosistema humano.',
      desc: 'Modelamos la cultura a través del diseño estratégico de rituales y hábitos organizacionales. Sincronizamos los procesos diarios con los valores corporativos para lograr un equipo comprometido y de alta productividad.'
    }
  };

  const handleDiagnosticoClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('contacto');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSaberMasClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('esencia');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header / Navigation */}
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="hero-section section-dark">
        {/* Interactive Canvas Constellation background */}
        <HeroCanvas />

        <div className="container hero-content">
          <div className="hero-left animate-fade-in">
            <span className="section-tag" style={{ color: '#7a8d74', opacity: 0.9 }}>
              People Operations & Experience
            </span>
            <h1 className="title-large">
              Donde el talento y la organización se encuentran.
            </h1>
            <p className="subtitle text-muted">
              Potenciamos la cultura a través del diseño. Profesionalizamos la infraestructura humana de empresas en expansión para transformar la gestión de personas en un activo previsible y eficiente.
            </p>
            <div className="btn-group">
              <a href="#contacto" className="btn btn-primary" onClick={handleDiagnosticoClick}>
                Diagnóstico Gratuito
              </a>
              <a href="#esencia" className="btn btn-secondary" onClick={handleSaberMasClick}>
                Conocer más
              </a>
            </div>
          </div>

          <div className="hero-right">
            {/* Elegant Floating SVG Node Widget */}
            <div className="interactive-logo-widget" style={{
              animation: 'float 6s ease-in-out infinite',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <style>{`
                @keyframes float {
                  0% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(-15px) rotate(3deg); }
                  100% { transform: translateY(0px) rotate(0deg); }
                }
                .hero-node {
                  transition: all 0.3s ease;
                }
                .hero-node:hover {
                  r: 14px;
                  fill: #7a8d74;
                  cursor: pointer;
                }
              `}</style>
              <svg width="280" height="280" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Decorative outer circle */}
                <circle cx="100" cy="100" r="80" stroke="#7a8d74" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 5" />
                <circle cx="100" cy="100" r="50" stroke="#fcfbf9" strokeWidth="1" strokeOpacity="0.1" />
                
                {/* Connecting lines */}
                <line x1="50" y1="130" x2="110" y2="50" stroke="#fcfbf9" strokeWidth="1.5" strokeOpacity="0.7" />
                <line x1="110" y1="50" x2="150" y2="110" stroke="#fcfbf9" strokeWidth="1.5" strokeOpacity="0.7" />
                <line x1="50" y1="130" x2="150" y2="110" stroke="#fcfbf9" strokeWidth="1.5" strokeOpacity="0.7" />
                
                {/* Node 1 */}
                <circle cx="50" cy="130" r="8" fill="#fcfbf9" className="hero-node" />
                <circle cx="50" cy="130" r="15" stroke="#fcfbf9" strokeWidth="1" strokeOpacity="0.2" />
                
                {/* Node 2 */}
                <circle cx="110" cy="50" r="11" fill="#7a8d74" className="hero-node" />
                <circle cx="110" cy="50" r="20" stroke="#7a8d74" strokeWidth="1" strokeOpacity="0.3" />
                
                {/* Node 3 */}
                <circle cx="150" cy="110" r="6" fill="#a3b59d" className="hero-node" />
                <circle cx="150" cy="110" r="11" stroke="#a3b59d" strokeWidth="1" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Esencia Section */}
      <section id="esencia" className="section-light">
        <div className="container">
          <div className="esencia-grid">
            <div className="esencia-intro">
              <span className="section-tag">Nuestra Esencia</span>
              <h2 className="title-medium">
                Potenciamos la cultura a través del diseño.
              </h2>
              <p className="text-muted" style={{ marginBottom: '20px', fontSize: '1.05rem', lineHeight: '1.7' }}>
                NODO HUMA profesionaliza la infraestructura humana de empresas en expansión. Combinamos visión corporativa y metodología ágil para transformar la gestión de personas en un activo previsible y eficiente.
              </p>
              <div style={{ marginTop: '20px', borderLeft: '2px solid #7a8d74', paddingLeft: '20px' }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: '#1b201c', fontWeight: '500' }}>
                  "Aportamos estructura sin burocracia. Operamos como un área de RRHH externa: estratégica, flexible y alineada al ritmo de tu negocio."
                </p>
              </div>
            </div>
            
            <div className="esencia-right">
              {/* Interactive Triangle Pillars Diagram */}
              <PillarsDiagram activePillar={activePillar} setActivePillar={setActivePillar} />
            </div>

            {/* Pillars Details Box (Moved here to allow CSS grid ordering on mobile) */}
            <div className="pillar-detail-box animate-fade-in" key={activePillar}>
              <span className="section-tag" style={{ marginBottom: '5px', fontSize: '0.8rem' }}>Pilar Seleccionado</span>
              <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>{pillars[activePillar].title}</h4>
              <p style={{ fontWeight: '500', color: '#7a8d74', marginBottom: '8px', fontSize: '0.9rem' }}>
                {pillars[activePillar].tagline}
              </p>
              <p>{pillars[activePillar].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* El Problema Section */}
      <section id="problema" className="section-dark">
        <div className="container">
          <span className="section-tag" style={{ color: '#a3b59d' }}>El Problema</span>
          <h2 className="title-medium" style={{ color: '#fcfbf9' }}>
            El costo oculto de crecer sin estructura humana.
          </h2>
          <p className="text-muted" style={{ maxWidth: '700px', marginBottom: '30px' }}>
            Cuando una organización escala rápido sin diseñar su base humana, surgen ineficiencias críticas que frenan el negocio y desgastan a los fundadores.
          </p>

          <div className="problema-cards">
            <div className="problema-card">
              <div className="card-num">01</div>
              <h3>Tiempo directivo perdido</h3>
              <p>Los socios y directores pierden valiosas horas operativas del día resolviendo dudas cotidianas de RRHH o apagando incendios administrativos en lugar de liderar la estrategia y escalar el negocio.</p>
            </div>
            <div className="problema-card">
              <div className="card-num">02</div>
              <h3>Ingresos sin proceso</h3>
              <p>Cada incorporación se convierte en una improvisación por falta de inducción técnica estructurada. El talento tarda meses en alcanzar la productividad o, peor aún, se desvincula antes de los 90 días.</p>
            </div>
            <div className="problema-card">
              <div className="card-num">03</div>
              <h3>Roles sin definición</h3>
              <p>Las responsabilidades se asumen informalmente pero no se definen con indicadores claros. El equipo crece sobre bases inestables, provocando superposiciones, malentendidos y desalineación operativa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosistema Section */}
      <section id="ecosistema" className="section-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Ecosistema de Soluciones</span>
            <h2 className="title-medium">
              Estructura ágil para tu organización.
            </h2>
            <p className="text-muted" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
              Ofrecemos soluciones modulares y de consultoría continua diseñadas para dar estabilidad y dinamismo al crecimiento de tu equipo.
            </p>
          </div>

          <Ecosistema />
        </div>
      </section>

      {/* Metodología Section */}
      <section id="metodologia" className="section-light" style={{ backgroundColor: '#f0ede7', borderTop: '1px solid rgba(27,32,28,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag">Metodología de Trabajo</span>
            <h2 className="title-medium">
              Vector de Evolución
            </h2>
            <p className="text-muted" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
              Nuestro proceso metodológico de cuatro fases asegura una transición suave, ordenada y con mejoras continuas en la gestión humana de tu empresa.
            </p>
          </div>

          <Metodologia />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-light" style={{ borderTop: '1px solid rgba(27,32,28,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span className="section-tag">FAQ</span>
            <h2 className="title-medium">
              Preguntas Frecuentes
            </h2>
            <p className="text-muted" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
              Todo lo que necesitas saber sobre el funcionamiento de NODO HUMA y nuestros abonos.
            </p>
          </div>

          <FAQ />
        </div>
      </section>

      {/* Impacto Organizacional Grid */}
      <section className="section-dark" style={{ borderBottom: '1px solid rgba(247,245,240,0.05)', padding: '80px 8%' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-tag" style={{ color: '#a3b59d' }}>Impacto Organizacional</span>
            <h2 className="title-medium" style={{ color: '#fcfbf9' }}>
              Los resultados de una arquitectura con propósito.
            </h2>
          </div>

          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon" style={{ color: '#7a8d74', marginBottom: '18px', display: 'flex', justifyContent: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Foco</h3>
              <p>Tiempo estratégico devuelto</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon" style={{ color: '#7a8d74', marginBottom: '18px', display: 'flex', justifyContent: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Solidez</h3>
              <p>Estructura lista para escalar</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon" style={{ color: '#7a8d74', marginBottom: '18px', display: 'flex', justifyContent: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
              <h3>Alineación</h3>
              <p>Cultura y procesos en sintonía</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon" style={{ color: '#7a8d74', marginBottom: '18px', display: 'flex', justifyContent: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 6l-9.5 9.5-5-5L1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3>Previsibilidad</h3>
              <p>Gestión humana sin sorpresas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="section-dark" style={{ backgroundColor: '#1b201c' }}>
        <div className="container">
          <span className="section-tag" style={{ color: '#7a8d74' }}>Contacto</span>
          <h2 className="title-medium" style={{ color: '#fcfbf9' }}>
            Potenciamos tu estructura.
          </h2>
          <Contacto />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <h4>NODO HUMA</h4>
          <p>Donde el talento y la organización se encuentran.</p>
        </div>
        <div className="footer-right">
          <span>LinkedIn (Próximamente)</span>
          <span>© {new Date().getFullYear()} NODO HUMA. Todos los derechos reservados.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
