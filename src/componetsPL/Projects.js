import React from 'react';

export default function Projects() {
  return (
    <div className='education--container'>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>Scrum Lab Front End</span>
          <span className='education--degree'>
            Użyte technologie: SCSS, HTML5, JavaScript
          </span>
          <a href='https://arturbuja.github.io/Zaplanuj_Jedzonko/'>
            <span className='education--degree'>Zobacz na żywo (Kliknij!)</span>
          </a>
        </div>
        <div>
          <span className='passedout--year'>01/2022</span>
        </div>
      </div>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>
            Własna strona z portfolio
          </span>
          <span className='education--degree'>
            Użyte technologie: JavaScript, React JS , SCSS{' '}
          </span>
          <a href='https://arturbuja.github.io/My-Portfolio/'>
            <span className='education--degree'>Właśnie na niej jesteś!</span>🔥
          </a>
        </div>
        <div>
          <span className='passedout--year'>01/2022</span>
        </div>
      </div>
    </div>
  );
}
