import React from 'react';

const VistaGeneralFPU = ({ onCrear, onEnviar }) => {
  return (
    <div>
      <h3>Generar FPU</h3>
      <div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px'}}>
        <label>Nombre del solicitante</label>
        <input style={{padding: '8px'}} />
        <label>Proveedor</label>
        <input style={{padding: '8px'}} />
        <button className="btn-accion" style={{width: 'fit-content'}}>Adjuntar cotización</button>
        <div style={{marginTop: '20px', display: 'flex', gap: '10px'}}>
          <button className="btn-accion" onClick={onCrear}>Crear FPU</button>
          <button className="btn-accion" onClick={onEnviar}>Enviar FPU</button>
        </div>
      </div>
    </div>
  );
};

export default VistaGeneralFPU;