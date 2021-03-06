import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoIMG from '../../assets/logo.svg'
import heroesIMG from '../../assets/heroes.png'

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('beTheHero.ong', JSON.stringify({id: id, name: response.data.name}));

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }
  
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoIMG} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            value={id}
            onChange={e => setId(e.target.value)}
            type="text"
            name="idOng"
            id="idOng"
            placeholder="Sua Id"/>
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesIMG} alt="Heroes"/>
    </div>
  );
}
