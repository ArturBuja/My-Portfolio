import React from 'react';

export default function Education() {
  return (
    <div className='education--container'>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>Kurs CodersLab</span>
          <span className='education--degree'>Javascript developer</span>
        </div>
        <div className='education--year'>
          <span className='passedout--year'>10/2021 - 01/2022</span>
        </div>
      </div>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>
            Wyższa szkoła zarządzania ochroną pracy
          </span>
          <span className='education--degree'>Bezpieczeństwo wewnętrzne</span>
        </div>
        <div className='education--year'>
          <span className='passedout--year'>10/2015 - 07/2020</span>
        </div>
      </div>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>Technikum</span>
          <span className='education--degree'>Technik informatyk</span>
        </div>
        <div className='education--year'>
          <span className='passedout--year'>09/2010 - 05/2015</span>
        </div>
      </div>
    </div>
  );
}
