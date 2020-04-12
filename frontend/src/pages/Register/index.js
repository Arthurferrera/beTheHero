import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import logoIMG from '../../assets/logo.svg'

export default function Register() {
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

        <form>
          <input type="text" placeholder="Nome da ONG" name="nomeOng" id="nomeOng"/>
          <input type="email" placeholder="E-mail" name="emailOng" id="emailOng"/>
          <input type="tel" placeholder="WhatsApp" name="whatsappOng" id="whatsappOng"/>

          <div className="input-group">
            <input type="text" placeholder="Cidade" name="cidadeOng" id="cidadeOng"/>
            <input style={{width: 80, }} type="text" placeholder="UF" name="ufOng" id="ufOng" />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
