import React from 'react';
import AuthSignatureInput from '../AuthSignatureInput.jsx';

const VistaDocumentoFPU = ({ onCancel }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '30px', background: 'white' }}>
      <h2 style={{color: '#008f39'}}>Formato de proveedor único</h2>
      <div style={{height: '8px', background: 'linear-gradient(to right, #008f39, white)', marginBottom: '20px'}}></div>
      
      <table className="tabla-nidec" style={{border: '1px solid black'}}>
        <tbody>
          {['ACTIVIDAD', 'NÚMERO DE PROVEEDOR', 'NOMBRE DE PROVEEDOR', 'MONTO'].map(row => (
            <tr key={row}>
              <th style={{background: '#008f39', color: 'white', border: '1px solid black'}}>{row}</th>
              <td style={{border: '1px solid black'}}><input style={{width: '100%', border: 'none'}} /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '30px'}}>
        <AuthSignatureInput label="USUARIO SOLICITANTE" />
        <AuthSignatureInput label="GERENTE DE ÁREA" />
        <AuthSignatureInput label="GERENTE DE COMPRAS" />
      </div>

      <div style={{marginTop: '20px', display: 'flex', gap: '10px'}}>
        <button className="btn-accion" onClick={() => alert("Cambios Guardados")}>Aceptar Cambios</button>
        <button className="btn-accion" style={{background: '#666'}} onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default VistaDocumentoFPU;