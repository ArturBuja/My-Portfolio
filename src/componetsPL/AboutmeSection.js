import React from 'react';

export function AboutmeSection() {
  return (
    <div className='about--me--section about--me--inside' id='aboutMe'>
      <div className='about--me--header '>
        <span className='header--text'>O mnie</span>
        <span className='header--subtext'>Dlaczego wybrać mnie?</span>
        <div className='about--me--box row shadow-lg'>
          <div className='col-lg-6 col-md-6 col-sm-12 box--left'>
            <lottie-player
              src='https://assets1.lottiefiles.com/private_files/lf30_Twfrj1.json'
              background='transparent'
              speed='1'
              style={{ width: '500px', height: '500px' }}
              loop
              autoplay
            >
              {}
            </lottie-player>
          </div>
          <div className=' col-lg-6 col-md-6 col-sm-12 box--right'>
            <span className='about--me--text'>
              Cześć, jestem frot-end developerem. Skończyłem studia na kierunku
              bezpieczeństwo wewnętrzne, a następnie kurs Javascript wraz z
              użyciem biblioteki React. Mam doświadczenie w tworzeniu stron
              internetowych, a także aplikacji mobilnych na system Android oraz
              iOS. Kocham programowanie, jest to rzecz w której się spełniam,
              oraz mam chęć każdego dnia poznwać nowe rzeczy.
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
        </div>
      </div>
    </div>
  );
}
