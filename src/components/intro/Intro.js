import './Intro.css';
import { useContext } from 'react';
import { ScrollContext } from './../../contextAPI/ScrollContext';

import me from '../../images/eu.png';
import curriculo from '../../images/pedro-lucas-curriculo.pdf';

export default () => {

  const { setActive } = useContext(ScrollContext);

  const handleMenu = () => {
    setActive("250px");
  }

  return(
    <section id="#" className="section section-1">
      <div className="box box-section-1">
        <ul className="social-intro">
          <li><a target="_blank" href="http://www.instagram.com/pe.lucs">
            <box-icon size="xm" color="var(--primaria)" type='logo' name='instagram-alt'></box-icon>  
          </a></li>
          <li><a target="_blank" href="http://www.github.com/pelucs">
            <box-icon size="xm" color="var(--primaria)" type='logo' name='github'></box-icon>  
          </a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/pedro-lucas-083">
            <box-icon size="xm" color="var(--primaria)" type='logo' name='linkedin'></box-icon>  
          </a></li>
          <li></li>
        </ul>
        <div className="center-info">
          <div className="name-info">
            <h1>Olá! eu sou</h1>
            <h2>Pedro Lucass</h2>
            <h3>Desenvolvedor Web Front-End</h3>
          </div>
          <div className="buttons-intro">
            <a 
              href={curriculo} 
              download="pedro-lucas-curriculo.pdf"
              type="application/pdf"
            >Currículo</a>
            <a onClick={handleMenu} href="#form">Fale comigo</a>
          </div>
          <div className="img-box">
            <img src={me}/>
          </div>
        </div>
        <div className="scroll-message">
          <p>Scroll Down</p>
        </div>
      </div>
    </section>
  );
}
