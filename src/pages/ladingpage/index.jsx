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
        <img src="/assets/images/Foto_perfil.png  " alt="" />
      </div>
      <div id='sobremim'>
        <div className='image-text'></div>
        <div className='cards'></div>
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

