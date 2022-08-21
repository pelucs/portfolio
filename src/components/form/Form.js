import './Form.css';
import Api from '../../Firebase';
import { useState } from 'react';

export default () => {

  const [active, setActive] = useState(false);

  const handleForm = e => {
    e.preventDefault();

    let nome = document.querySelector("#name"),
        email = document.querySelector("#email"),
        mensagem = document.querySelector("#message"),
        aviso = document.querySelector(".aviso p");

    if(nome.value.length !== 0 && email.value.length !== 0 && mensagem.value.length !== 0){
      Api.sendMessage(nome, email, mensagem, aviso, setActive);
    } else{
      window.navigator.vibrate(200);
      aviso.textContent = "Preencha todos os campos";

      nome.focus();
      setActive(true);

      setTimeout(() => {
        setActive(false);
      }, 2000)
    }
  }

  return(
    <section id="form" className="section section-5">
      <div style={{ top: active ? "20px" : "-100px" }} className="aviso">
        <p>Mensagem enviada</p>
      </div>
      <div className="box box-section-5">
        <div className="title skill-title">
          <h1>Entre em</h1>
          <h2>Contato</h2>
        </div>
        <div className="content form-box">
          <div className="box-form cards-contato">
            <div className="card-contato">
              <box-icon color="#fff" name='envelope'></box-icon>
              <h1>Email</h1>
              <h2>pedro.lucs0089@gmail.com</h2>
              <a href="mailto:pedro.lucs0089@gmail.com">Enviar email</a>
            </div>
            <div className="card-contato">
              <box-icon color="#fff" name='telegram' type='logo'></box-icon>
              <h1>Telegram</h1>
              <h2>Envie-me uma mensagem pelo Telegram</h2>
              <a target="_blank" href="https://t.me/pelucs">Enviar mensagem</a>
            </div>    
          </div>
          <form className="box-form form">
            <input type="text" autoComplete="off" placeholder="Seu nome" id="name"/>
            <input type="text" autoComplete="off" placeholder="Seu email" id="email"/>
            <textarea placeholder="Sua mensagem" id="message"></textarea>
            <button onClick={handleForm}>Enviar Mensagem</button>
          </form>  
        </div>        
      </div>
    </section>
  );
} 