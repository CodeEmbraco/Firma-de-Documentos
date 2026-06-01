import React, { useState } from 'react';
import './App.css';
import VistaPrincipal from './components/views/VistaPrincipal.jsx';
import VistaGeneralFPU from './components/views/VistaGeneralFPU.jsx';
import VistaDocumentoFPU from './components/views/VistaDocumentoFPU.jsx';
import VistaFirmados from './components/views/VistaFirmados.jsx';

function App() {
  const [view, setView] = useState('Principal');
  const [isCreatingFPU, setIsCreatingFPU] = useState(false);
  const [showFolio, setShowFolio] = useState(false);

  const renderView = () => {
    if (isCreatingFPU) return <VistaDocumentoFPU onCancel={() => setIsCreatingFPU(false)} />;
    
    switch(view) {
      case 'GenerarFPU': return <VistaGeneralFPU onCrear={() => setIsCreatingFPU(true)} onEnviar={() => setShowFolio(true)} />;
      case 'Firmados': return <VistaFirmados />;
      default: return <VistaPrincipal />;
    }
  };

  return (
    <div className="app-container">
      <header className="header"><h1>Nidec</h1></header>
      <nav className="nav-top">
        <span onClick={() => {setView('Principal'); setIsCreatingFPU(false)}}>Firma de documentos</span>
        <span>Tutorial</span>
        <span>Soporte</span>
      </nav>

      <div className="main-layout">
        <aside className="sidebar">
          <button className={`btn-nidec ${view === 'GenerarFPU' ? 'active' : ''}`} onClick={() => setView('GenerarFPU')}>Generar FPU</button>
          <button className={`btn-nidec ${view === 'Firmados' ? 'active' : ''}`} onClick={() => setView('Firmados')}>Documentos Firmados</button>
        </aside>
        <main className="content">{renderView()}</main>
      </div>

      {showFolio && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Folio Generado: FPU0001</h3>
            <button className="btn-accion" onClick={() => setShowFolio(false)}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;