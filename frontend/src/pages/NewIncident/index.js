import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoIMG from '../../assets/logo.svg'

export default function NewIncident() {
  const [title, settTtle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = JSON.parse(localStorage.getItem('beTheHero.ong')).id;

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {title, description, value};

    try {
      const response = await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });
      // TODO: MENSAGEM DE SUCESSO, MODAL, SWAL, TOAST
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente mais tarde');
    }
  }
  
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoIMG} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para a home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={e => settTtle(e.target.value)}
            name="tituloCaso"
            id="tituloCaso"
          />
          <textarea
            placeholder="Descrição" 
            value={description}
            onChange={e => setDescription(e.target.value)}
            name="descricaoCaso"
            id="descricaoCaso"
          />
          <input
            placeholder="Valor em reis"
            value={value}
            onChange={e => setValue(e.target.value)}
            name="valorCaso"
            id="valorCaso"
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
