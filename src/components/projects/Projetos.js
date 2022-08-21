import './Projetos.css';

import wpp from '../../images/wpp.png';
import netflix from '../../images/netflix.png';
import gamestore from '../../images/games-store.png';
import ignite from '../../images/ignite-lab.png';
import form from '../../images/form.png';
import vsco from '../../images/vsco.png';
import apple from '../../images/apple.png';

export default () => {
  return(
    <section id="projetos" className="section section-4">
      <div className="box box-section-4">
        <div className="title skill-title">
          <h1>Veja meus</h1>
          <h2>Projetos</h2>
        </div>
        <div className="content projetos-list">
          <div className="projeto">
            <img src={gamestore}/>
            <h1>Games Store</h1>
            <div className="buttons-projeto">
              <a target="_blank" href="https://github.com/pelucs/gamestore">Github</a>
              <a target="_blank" href="https://gamesstore.vercel.app">Ver Site</a>
            </div>
          </div>
          <div className="projeto">
            <img src={netflix}/>
            <h1>Clone do Netflix</h1>
            <div className="buttons-projeto">
              <a target="_blank" href="https://github.com/pelucs/netflix-clone">Github</a>
              <a target="_blank" href="https://netflix-clone-b731c.web.app/">Ver Site</a>
            </div>
          </div>
          <div className="projeto">
            <img src={ignite}/>
            <h1>Plataforma de vídeos</h1>
            <div className="buttons-projeto">
              <a target="_blank" href="https://github.com/pelucs/ignite-lab-plataform">Github</a>
              <a target="_blank" href="http://plataformadeeventos.vercel.app">Ver Site</a>
            </div>
          </div>
          <div className="projeto">
            <img src={form}/>
            <h1>Formulário em etapas</h1>
            <div className="buttons-projeto">
              <a target="_blank" href="https://github.com/pelucs/form">Github</a>
              <a target="_blank" href="https://form-cadas.web.app">Ver Site</a>
            </div>
          </div>
          <div className="projeto">
            <img src={vsco}/>
            <h1>Clone do VSCO</h1>
            <div className="buttons-projeto">
              <a target="_blank" href="https://github.com/pelucs/vsco-clone">Github</a>
              <a target="_blank" href="https://vsco-clone-ad6ef.web.app/">Ver Site</a>
            </div>
          </div>
          <div className="projeto">
            <img src={wpp}/>
            <h1>Clone do WhatsApp</h1>
            <div className="buttons-projeto">
              <a target="_blank" href="https://github.com/pelucs/whatsapp-clone">Github</a>
              <a target="_blank" href="https://whatsapp-130.firebaseapp.com//">Ver Site</a>
            </div>
          </div>
          <div className="projeto">
            <img src={apple}/>
            <h1>Apple Page</h1>
            <div className="buttons-projeto">
              <a target="_blank" href="https://github.com/pelucs/apple-page">Github</a>
              <a target="_blank" href="https://pelucs.github.io/apple-page/">Ver Site</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
