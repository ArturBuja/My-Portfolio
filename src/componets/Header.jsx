import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  useCallback,
} from 'react';

//COMPONETS LIB
import { FaReact } from 'react-icons/fa';
import Typed from 'typed.js';
import { Sling as Hamburger } from 'hamburger-react';

import { LangContext } from '../contex/lang-context';

//ASSETS
import logo from '../assets/P1750825-min.JPG';

export function Header() {
  const [openNav, setOpenNav] = useState(false);
  const el = useRef(null);

  const langCtx = useContext(LangContext);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: langCtx.isEnglish
        ? [
            'Enthusiastic developer 😎',
            'Javascript Developer 👨‍💻',
            'Communicative guy 😊',
            'Gaming lover 🎮',
            'Ambitious 💪🏻',
            'React 📖',
          ]
        : [
            'Zapalony programista 😎',
            'Javascript developer 👨‍💻',
            'Komunikatywny 😊',
            'Miłośnik gier 🎮',
            'Ambitny 💪🏻',
            'React developer 📖',
          ],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 500,
      loop: true,
      showCursor: true,
      autoInsertCss: true,
    });
    return () => {
      typed.destroy();
    };
  }, [langCtx.isEnglish]);

  const languageChangeHandler = useCallback(() => {
    langCtx.changeLang();
  }, {});

  return (
    <>
      <div className='shadow-lg navbar--option--mobile'>
        {/*<div className="bars" onClick={ () => setOpenNav(!openNav) }></div>*/}
        <Hamburger color={'#fff'} toggled={openNav} toggle={setOpenNav} />
      </div>

      <nav
        className={
          !openNav
            ? 'nav navbar-new transition-all'
            : 'nav navbar-fixed-new transition-all'
        }
      >
        <span className='brand-name'>
          <FaReact y='10' /> ARTUR BUJA
        </span>
        <div className='nav--section'>
          <a
            href='#home'
            className='nav--items'
            onClick={() => setOpenNav(false)}
          >
            {langCtx.isEnglish ? 'Home' : 'Strona Główna'}
          </a>
          <a
            href='#aboutMe'
            className='nav--items'
            onClick={() => setOpenNav(false)}
          >
            {langCtx.isEnglish ? 'About me' : 'O mnie'}
          </a>
          <a
            href='#resume'
            className='nav--items'
            onClick={() => setOpenNav(false)}
          >
            {langCtx.isEnglish ? 'Resume' : 'Życiorys'}
          </a>
          <a
            href='#testimonials'
            className='nav--items'
            onClick={() => setOpenNav(false)}
          >
            {langCtx.isEnglish ? 'Testimonials' : 'Referencje'}
          </a>
          <a
            href='#contactMe'
            className='nav--items'
            onClick={() => setOpenNav(false)}
          >
            {langCtx.isEnglish ? 'Contact me' : 'Kontakt'}
          </a>
          <a className='nav--items' onClick={languageChangeHandler}>
            {langCtx.isEnglish ? 'PL' : 'EN'}
          </a>
        </div>
        <div
          className='close--navbar-new'
          onClick={() => setOpenNav(!openNav)}
        ></div>
      </nav>

      <div className='herosection px-10' id='home'>
        <div className='herosection--2 row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='outer--img Anim'>
              <img src={logo} alt='image' className='img-fluid custom--img' />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='herosection--2--header'>
              {langCtx.isEnglish ? (
                <span className='header--text'>
                  Hi, I'm <span className='header--text--name'>Artur Buja</span>
                </span>
              ) : (
                <span className='header--text'>
                  Cześć, nazywam się
                  <span className='header--text--name'> Artur Buja</span>
                </span>
              )}
              <span className='header--text--enthusiastic' ref={el}>
                {/*Enthusiastic developer  😎*/}
              </span>
              <span className='header--text--subheading'>
                {langCtx.isEnglish
                  ? 'I try to learn new things and improve the code every day'
                  : 'Każdego dnia staram się uczyć nowych rzeczy i ulepszać kod'}
              </span>
              <div className='header--buttons'>
                <a href='#contactMe' className='btn--hire--me'>
                  {langCtx.isEnglish ? 'Hire me' : 'Zatrudnij mnie'}
                </a>
                <a
                  href='https://drive.google.com/drive/folders/1wgT5mfd5xwZKWNJidOmIuw14FserKUVp?usp=sharing'
                  target='_blank'
                  className='btn--resume--me'
                >
                  {langCtx.isEnglish ? 'Get Resume' : 'Pobierz CV'}
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
