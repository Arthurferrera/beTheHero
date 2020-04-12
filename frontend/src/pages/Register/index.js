import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoIMG from '../../assets/logo.svg'

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  
  const history = useHistory();
  
  async function handleRegister(e) {
    e.preventDefault();
    
    const data = {name, email, whatsapp, city, uf};

    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso ${response.data.id}`);
      history.push('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente mais tarde');
    }

  }
  
  
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoIMG} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para a página de logon
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            value={name}
            onChange={e => setName(e.target.value)}
            type="text" 
            placeholder="Nome da ONG" 
            name="nomeOng" 
            id="nomeOng"/>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            name="emailOng"
            id="emailOng"/>
          <input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            type="tel"
            placeholder="WhatsApp"
            maxLength="15"
            name="whatsappOng"
            id="whatsappOng"/>

          <div className="input-group">
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              type="text"
              placeholder="Cidade"
              name="cidadeOng"
              id="cidadeOng"/>
            <input
              value={uf}
              onChange={e => setUf(e.target.value)}
              style={{width: 80}}
              maxLength="2"
              type="text"
              placeholder="UF"
              name="ufOng"
              id="ufOng" />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
