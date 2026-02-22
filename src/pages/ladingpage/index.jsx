import './index.scss';

import { Link } from 'react-router-dom';

export default function Ladingpage() {
  return (
    <div className="Ladingpage">
      <div className='head'>
        <div className='left'>
          <h2 className='caract'>&lt;</h2>
          <h2 className='myname'>Carlos</h2>
          <h2 className='caract'>/&gt;</h2>
        </div>
        <div className='right'>
          <a href="#home">
            <img src="/assets/images/home.png" alt="fail" />
            <h2>Home</h2>
          </a>
          <a href="#sobremim">
            <img src="/assets/images/people.png" alt="fail" />
            <h2>Sobre mim</h2>
          </a>
          <a href="#projetos">
            <img src="/assets/images/windows.png" alt="fail" />
            <h2>Projetos</h2>
          </a>
          <a href="#contatos">
            <img src="/assets/images/email.png" alt="fail" />
            <h2>Contatos</h2>
          </a>
        </div>
      </div>
      <div id='home'>
        <div className='text_button'>
          <h1>Carlos Albuquerque</h1>
          <div className='bio'>
            <h4 className='text1'>Desenvolvedor de software</h4>
            <h4 className='text2'>Front-end</h4>
          </div>
          <div className='buttons'>
            <Link className='button'>
              <img src="/assets/images/LinkedIn.png" alt="" />
              <h4>LinkedIn</h4>
            </Link>
            <Link className='button'>
              <img src="/assets/images/Github.png" alt="" />
              <h4>Github</h4>
            </Link>
          </div>
        </div>
        <img className='perfil' src="/assets/images/Foto_perfil.png  " alt="" />
      </div>
      <div id='sobremim'>
        <div className='image-text'>
          <img className='perfil' src="/assets/images/Foto_perfil.png  " alt="" />
          <div className='text-button'>
            <p>Olá! Sou Carlos Albuquerque, desenvolvedor front-end com experiência em back-end, <br /> atualmente cursando Bacharelado em Engenharia de Software na Instituição Toledo de <br /> Ensino(ITE). <br />
              Concluí o curso técnico em Informática (2024) no Instituto Social Nossa Senhora de Fátima,<br /> em São Paulo – Capital. <br />
              Tenho experiência prática com ReactJS, Node.js, MySQL e SASS, desenvolvendo aplicações <br /> modernas, responsivas e funcionais. Meu foco é criar websites e landing pages personalizadas <br /> para autônomos, pequenos e médios negócios.</p>
            <Link className='button-cv'>
              <h3>Abrir CV</h3>
              <img src="/assets/images/external-link.png" alt="" />
            </Link>
          </div>
        </div>
        <div className='cards'>
          <div className='card-frontend'>
            <img src="/assets/images/icon_html.png" alt="" />
            <h2>Frontend</h2>
            <div className='habilidade'>
              <img src="/assets/images/icon_br_html.png" alt="" />
              <h4>HTML</h4>
            </div>
            <div className='habilidade'>
              <img src="/assets/images/icon_css.png" alt="" />
              <h4>CSS</h4>
            </div>
            <div className='habilidade'>
              <img src="/assets/images/icon_br_js.png" alt="" />
              <h4>Java Script</h4>
            </div>
          </div>
          <div className='card-backend'>
            <img src="/assets/images/icon_JS.png" alt="" />
            <h2>Backend</h2>
            <div className='habilidade'>
              <img src="/assets/images/icon_br_nodejs.png" alt="" />
              <h4>NodeJS</h4>
            </div>
            <div className='habilidade'>
              <img src="/assets/images/icon_mysql.png" alt="" />
              <h4>MySQL</h4>
            </div>
            <div className='habilidade'>
              <img src="/assets/images/icon_json.png" alt="" />
              <h4>Json</h4>
            </div>
          </div>
          <div className='card-framework'>
            <img src="/assets/images/icon_react.png" alt="" />
            <h2>Framework</h2>
            <div className='habilidade'>
              <img src="/assets/images/icon_figma.png" alt="" />
              <h4>Figma</h4>
            </div>
          </div>
        </div>
      </div>
      <div id='projetos'>
        <div className='projeto1'></div>
        <div className='projeto2'></div>
        <div className='projeto3'></div>
      </div>
      <div id='contato'>

      </div>
      <div className='Baseboard'>

      </div>
    </div>
  );
}

