import React, { useState } from 'react';

const AuthSignatureInput = ({ label }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSign = () => {
    if(user && pass) setAuth(true);
    else alert("Ingresa credenciales");
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', fontSize: '12px' }}>
      <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>{label}</p>
      {!auth ? (
        <>
          <input placeholder="Usuario" onChange={e => setUser(e.target.value)} style={{width: '90%'}} />
          <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} style={{width: '90%', marginTop: '5px'}} />
          <button onClick={handleSign} className="btn-accion" style={{marginTop: '5px', fontSize: '10px', width: '100%'}}>Autenticar y Firmar</button>
        </>
      ) : (
        <div style={{ color: 'green', fontWeight: 'bold' }}>✓ {user} - Firmado</div>
      )}
    </div>
  );
};

export default AuthSignatureInput;