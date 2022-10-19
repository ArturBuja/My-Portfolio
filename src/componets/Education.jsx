import React, { useContext } from 'react';

import { LangContext } from '../contex/lang-context';
export default function Education() {
  const langCtx = useContext(LangContext);
  return (
    <div className='education--container'>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>
            {langCtx.isEnglish ? 'CodersLab Course' : 'Kurs CodersLab'}
          </span>
          <span className='education--degree'>Javascript Developer</span>
        </div>
        <div className='education--year'>
          <span className='passedout--year'>10/2021 - 01/2022</span>
        </div>
      </div>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>
            {langCtx.isEnglish
              ? `The University of Occupational Safety Management in Katowice (WSZOP)`
              : 'Wyższa Szkoła Zarządzania Ochroną Pracy w Katowicach'}
          </span>
          <span className='education--degree'>
            {langCtx.isEnglish
              ? 'Master in Internal Security'
              : 'Magister Bezpieczeństwa wewnętrznego'}
          </span>
        </div>
        <div className='education--year'>
          <span className='passedout--year'>10/2015 - 07/2020</span>
        </div>
      </div>
      <div className='education--one'>
        <div className='education--name'>
          <span className='education--name-school'>
            {langCtx.isEnglish
              ? 'Jadwiga Markowa Technical School No.5'
              : 'Technikum nr.5 im. Jadwigi Markowej'}
          </span>
          <span className='education--degree'>
            {langCtx.isEnglish ? 'IT technician' : 'Technik Informatyk'}
          </span>
        </div>
        <div className='education--year'>
          <span className='passedout--year'>09/2010 - 05/2015</span>
        </div>
      </div>
    </div>
  );
}
