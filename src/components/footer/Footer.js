import './Footer.css';

export default () => {
  return(
    <div className="footer">
      <h1>Pedro Lucas</h1>
      <ul className="sociais-footer">
        <li>
          <a target="_blank" href="http://www.instagram.com/pe.lucs">
              <box-icon color="#fff" type='logo' name='instagram'></box-icon>  
          </a>
        </li>
        <li>
          <a target="_blank" href="http://www.github.com/pelucs">
            <box-icon color="#fff" type='logo' name='github'></box-icon>  
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/pedro-lucas-083">
            <box-icon color="#fff" type='logo' name='linkedin'></box-icon>  
          </a>
        </li>
      </ul>
      <p>&copy;Todos os direitos reservados - Campina Grande, Paraíba <br></br>
      Desenvolvido por: Pedro Lucas - Design: EGATOR Tutorials</p>
    </div>
  );
}