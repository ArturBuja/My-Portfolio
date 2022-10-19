import React, { useContext } from 'react';

import { LangContext } from '../contex/lang-context';

export default function Projects() {
  const langCtx = useContext(LangContext);

  return (
    <div className='education--container'>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>Scrum Lab Front End</span>
          <span className='education--degree'>
            {langCtx.isEnglish ? ' Technologies used' : 'Użyte technologie'}:
            SCSS, HTML5, JavaScript
          </span>
          <a href='https://arturbuja.github.io/Zaplanuj_Jedzonko/'>
            <span className='education--degree'>
              {langCtx.isEnglish
                ? 'Check live (click me!)'
                : 'Zobacz na żywo (kliknij mnie)'}
            </span>
          </a>
        </div>
        <div>
          <span className='passedout--year'>01/2022</span>
        </div>
      </div>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>
            {langCtx.isEnglish ? 'Own portfolio site' : 'Własne portfolio'}
          </span>
          <span className='education--degree'>
            {langCtx.isEnglish ? ' Technologies used' : 'Użyte technologie'}:
            JavaScript, React JS , SCSS
          </span>
          <a href='https://arturbuja.github.io/My-Portfolio/'>
            <span className='education--degree'>
              {langCtx.isEnglish
                ? "You're on it right now"
                : 'Właśnie na niej jesteś'}{' '}
            </span>
            🔥
          </a>
        </div>
        <div>
          <span className='passedout--year'>01/2022</span>
        </div>
      </div>
    </div>
  );
}
