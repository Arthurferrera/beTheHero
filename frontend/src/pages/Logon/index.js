import React from 'react';

import './styles.css';

import logoIMG from '../../assets/logo.svg'
import heroesIMG from '../../assets/heroes.png'

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoIMG} alt="Be The Heroe"/>

        <form>
          <h1>Faça seu logon</h1>

          <input type="text" name="" id="" placeholder="Sua Id"/>
          <button type="submit">Entrar</button>
          <a href="/register">
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={heroesIMG} alt="Heroes"/>
    </div>
  );
}
