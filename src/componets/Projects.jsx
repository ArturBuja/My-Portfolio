import React, { useContext } from 'react';

import { LangContext } from '../contex/lang-context';

export default function Projects() {
  const langCtx = useContext(LangContext);

  return (
    <div className='education--container'>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>
            {langCtx.isEnglish
              ? 'Personal Blog App From Lines To Life'
              : 'Własny Blog From Lines To Life'}
          </span>
          <span className='education--degree'>
            {langCtx.isEnglish ? ' Technologies used' : 'Użyte technologie'}:
            Next.js v.13, Typescript, moduleCSS, Prisma, MongoDB
          </span>
          <a href='https://fromlinestolife.vercel.app/'>
            <span className='education--degree'>
              {langCtx.isEnglish
                ? "You're on it right now"
                : 'Właśnie na niej jesteś'}
            </span>
            🔥
          </a>
        </div>
        <div>
          <span className='passedout--year'>09/2023 - WIP</span>
        </div>
      </div>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>Threads App </span>
          <span className='education--degree'>
            {langCtx.isEnglish ? ' Technologies used' : 'Użyte technologie'}:
            MongoDB, Monogoose, Typescript, Next.js, Tailwind
          </span>
          <a href='https://threds-app.vercel.app/'>
            <span className='education--degree'>
              {langCtx.isEnglish
                ? 'Check live (click me!)'
                : 'Zobacz na żywo (kliknij mnie)'}
            </span>
          </a>
        </div>
        <div className='work'>
          <span className='passedout--year'>08/2023</span>
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
                : 'Właśnie na niej jesteś'}
            </span>
            🔥
          </a>
        </div>
        <div>
          <span className='passedout--year'>02/2022</span>
        </div>
      </div>
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
          <span className='education--name-school'>Guess My Numer!</span>
          <span className='education--degree'>
            {langCtx.isEnglish ? ' Technologies used' : 'Użyte technologie'}:
            JavaScript, CSS 3
          </span>
          <a href='https://arturbuja.github.io/Guess_my_number/'>
            <span className='education--degree'>
              {langCtx.isEnglish
                ? 'Check live (click me!)'
                : 'Zobacz na żywo (kliknij mnie)'}
            </span>
          </a>
        </div>
        <div>
          <span className='passedout--year'>12/2021</span>
        </div>
      </div>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>Pig Game</span>
          <span className='education--degree'>
            {langCtx.isEnglish ? ' Technologies used' : 'Użyte technologie'}:
            JavaScript, CSS 3
          </span>
          <a href='https://arturbuja.github.io/Pig_game/'>
            <span className='education--degree'>
              {langCtx.isEnglish
                ? 'Check live (click me!)'
                : 'Zobacz na żywo (kliknij mnie)'}
            </span>
          </a>
        </div>
        <div>
          <span className='passedout--year'>12/2021</span>
        </div>
      </div>
    </div>
  );
}
