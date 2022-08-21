import './About.css';
import { useContext } from 'react';
import { ScrollContext } from './../../contextAPI/ScrollContext';

import me from '../../images/eu2.jpg';

export default () => {

  const { setActive } = useContext(ScrollContext);

  const handleMenu = () => {
    setActive("250px");
  }
  
  return(
    <section id="sobre" className="section section-2">
      <div className="box box-section-2">
        <div className="title about-title">
          <h1>Conheça</h1>
          <h2>Sobre Mim</h2>
        </div>
        <div className="content about-box">
          <div className="about-flex">
            <div className="about-img">
              <img src={me}/> 
            </div>
          </div>
          <div className="about-flex about-info">
            <div className="cards-box">
              <div className="card">
                <box-icon color="#2196f3" name='user'></box-icon>
                <h1>Área</h1>
                <h2>Front-End</h2>
              </div>
              <div className="card">
                <box-icon color="#2196f3" name='medal'></box-icon>
                <h1>Experiência</h1>
                <h2>2 anos</h2>
              </div>
              <div className="card">
                <box-icon color="#2196f3" name='code-alt'></box-icon>
                <h1>Projetos</h1>
                <h2>+11</h2>
              </div>
            </div>
            <p>Olá, me chamo Pedro Lucas, tenho 20 anos e moro em Campina Grande na Paraíba. Comecei meus estudos em programação no início de 2020 e até os dias de hoje busco sempre melhorar minhas skills na área. Ademais, meu objetivo é compartilhar todo o meu conhecimento para as pessoas, sendo elas da área da programação ou não! Digamos que eu sou um amante da tecnologia(kkk).</p>
            <a onClick={handleMenu} href="#form">Fale comigo</a>
          </div>
        </div>
      </div>
    </section>
  );
}