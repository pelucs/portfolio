import './styles/App.css';

import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Skill from './components/skills/Skills';
import Projetos from './components/projects/Projetos';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

export default () => {
  return(
    <div>
      <div className="container">
        <Menu/>
        <Intro/>
        <About/>
        <Skill/>
        <Projetos/>
        <Form/>
      </div>
      <Footer/>
    </div>
  );
}