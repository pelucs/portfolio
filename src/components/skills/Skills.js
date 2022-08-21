import './Skills.css';

export default () => {
  return(
    <section id="experiencias" className="section section-3">
      <div className="box box-section-3">
        <div className="title skill-title">
          <h1>Veja minhas</h1>
          <h2>Experiências</h2>
        </div>
        <div className="content">
          <div className="card-skill">
            <a target="_blank" href="#">
              HTML
              <box-icon name="html5" type="logo" color="#fff"></box-icon>
            </a>

            <a target="_blank" href="#">
              CSS
              <box-icon name="css3" type="logo" color="#fff"></box-icon>
            </a>

            <a target="_blank" href="#">
              JavaScript
              <box-icon name="javascript" type="logo" color="#fff"></box-icon>
            </a>

            <a target="_blank" href="#">
              React
              <box-icon name='react' type='logo' animation='spin' color="#fff"></box-icon>
            </a>

            <a target="_blank" href="#">
              Bootstrap
              <box-icon name="bootstrap" type="logo" color="#fff"></box-icon>
            </a>

            <a target="_blank" href="#">
              Tailwind CSS
              <box-icon name="tailwind-css" type="logo" color="#fff"></box-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}