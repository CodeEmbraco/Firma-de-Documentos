import React from 'react';

const VistaFirmados = () => {
  return (
    <div>
      <h2>Documentos Firmados</h2>
      <table className="tabla-nidec">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Último Signatario</th>
            <th>Fecha Firma</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FPU019</td>
            <td>Nodos de Redes, Depto IT</td>
            <td>Silvia Zaragoza</td>
            <td>19/04/2026</td>
          </tr>
          {/* Puedes agregar más filas aquí */}
        </tbody>
      </table>
    </div>
  );
};

// ESTA ES LA LÍNEA QUE TE FALTA:
export default VistaFirmados;