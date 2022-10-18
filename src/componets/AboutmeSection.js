import React, { useContext } from 'react';

import { LangContext } from '../contex/lang-context';

export function AboutmeSection() {
  const langCtx = useContext(LangContext);

  return (
    <div className='about--me--section about--me--inside' id='aboutMe'>
      <div className='about--me--header '>
        {langCtx.isEnglish ? (
          <>
            <span className='header--text'>About me</span>
            <span className='header--subtext'>Why choose me? </span>
          </>
        ) : (
          <>
            <span className='header--text'>O mnie</span>
            <span className='header--subtext'>Dlaczego Ja?</span>
          </>
        )}

        <div className='about--me--box row shadow-lg'>
          <div className='col-lg-6 col-md-6 col-sm-12 box--left'>
            <lottie-player
              src='https://assets1.lottiefiles.com/private_files/lf30_Twfrj1.json'
              background='transparent'
              speed='1'
              style={{ width: '500px', height: '500px' }}
              loop
              autoplay
            />
          </div>
          {langCtx.isEnglish ? (
            <div className=' col-lg-6 col-md-6 col-sm-12 box--right'>
              <span className='about--me--text'>
                Hi I'm a junior Front-End developer. I finished internal
                security and completed the JavaScript course on CodersLab. I
                program in javascript, use react library. I have experience in
                creating websites and web applications. I love programming and i
                want to know more interesting things.
              </span>
              <span className='about--me--highlights'>
                <span className='highlights--text'>
                  Here are few highlight:
                </span>
                <span className='highlights--list'>
                  <ul>
                    <li>JavaScript(ES5/ES6+)</li>
                    <li>CSS3/SCSS</li>
                    <li>React</li>
                    <li>Git</li>
                    <li>Trello</li>
                    <li>JIRA</li>
                    <li>Adobe XD/Avocode</li>
                    <li>HTML</li>
                  </ul>
                </span>
              </span>
            </div>
          ) : (
            <div className=' col-lg-6 col-md-6 col-sm-12 box--right'>
              <span className='about--me--text'>
                Cześć, jestem początkującym frot-end developerem. Skończyłem
                studia na kierunku bezpieczeństwo wewnętrzne, a następnie kurs
                Javascript wraz z użyciem biblioteki React. Mam doświadczenie w
                tworzeniu stron internetowych, a także aplikacji mobilnych na
                system android. Kocham programowanie, jest to rzecz w której się
                spełniam, oraz mam chęć każdego dnia poznwać nowe rzeczy.
              </span>
              <span className='about--me--highlights'>
                <span className='highlights--text'>
                  Lista umiętności które posiadam:
                </span>
                <span className='highlights--list'>
                  <ul>
                    <li>JavaScript(ES5/ES6+)</li>
                    <li>CSS3/SCSS</li>
                    <li>React</li>
                    <li>Git</li>
                    <li>Trello</li>
                    <li>JIRA</li>
                    <li>Adobe XD/Avocode</li>
                    <li>HTML</li>
                  </ul>
                </span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
