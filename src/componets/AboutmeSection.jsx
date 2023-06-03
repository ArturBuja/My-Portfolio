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
            {/* <span className='header--subtext'>Why choose me?</span> */}
          </>
        ) : (
          <>
            <span className='header--text'>O mnie</span>
            {/* <span className='header--subtext'>Dlaczego Ja?</span> */}
          </>
        )}

        <div className='about--me--box row shadow-lg'>
          <div className='col-lg-6 col-md-6 col-sm-12 box--left'>
            <lottie-player
              src='https://assets9.lottiefiles.com/packages/lf20_9o3AQo.json'
              background='transparent'
              speed='1'
              style={{ width: '25rem', height: '25rem' }}
              loop
              autoplay
            />
          </div>
          {langCtx.isEnglish ? (
            <div className=' col-lg-6 col-md-6 col-sm-12 box--right'>
              <span className='about--me--text'>
                Hi, I am a <b>front-end developer</b>. I have experience in
                developing <b>websites</b> , as well as<b> mobile apps</b> for{' '}
                <b>Android and iOS</b>. I love programming, it is the thing in
                which I fulfil myself, and I want to learn new things every day.
                I graduated with a degree in internal security, followed by a
                Javascript course along with the use of the React library.
              </span>
              <span className='about--me--highlights'>
                <span className='highlights--text'>Main interesed:</span>
                <span className='highlights--list'>
                  <ul>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>React Native</li>
                  </ul>
                </span>
              </span>
            </div>
          ) : (
            <div className=' col-lg-6 col-md-6 col-sm-12 box--right'>
              <span className='about--me--text'>
                Cześć, jestem front-end developerem. Mam doświadczenie w
                tworzeniu stron internetowych, a także aplikacji mobilnych na
                system Android oraz iOS. Kocham programowanie, jest to rzecz w
                której się spełniam, oraz mam chęć każdego dnia poznawać nowe
                rzeczy. Skończyłem studia magisterskie na kierunku
                bezpieczeństwo wewnętrzne, a następnie ukończyłem kurs
                Javascript wraz z użyciem biblioteki React.
              </span>
              <span className='about--me--highlights'>
                <span className='highlights--text'>
                  Główne zainteresowania:
                </span>
                <span className='highlights--list'>
                  <ul>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>React Native</li>
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
