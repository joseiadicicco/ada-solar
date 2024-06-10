import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('aiken');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nombre: ${name}\nEmail: ${email}\nCurso: ${course}`);
  };

  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Curso:</label>
          <select
            className="form-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="aiken">Curso Aiken</option>
            <option value="blockchain">Curso Blockchain</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
