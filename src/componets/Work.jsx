import React, { useContext } from 'react';

import { LangContext } from '../contex/lang-context';

export default function Work() {
  const langCtx = useContext(LangContext);

  return (
    <>
      <div className='work--inside--new'>
        <div className='work--container'>
          <div className='work'>
            <span className='work--name--company'>Polskie Radio S.A</span>
            <span className='passedout--year'>03/2022 - present</span>
          </div>
        </div>
        <div className='work--container'>
          <span className='work--position'>React Native Developer</span>
          <span className='work--description'>
            <ul>
              <li>
                {langCtx.isEnglish
                  ? 'Creating mobile and publish apps for company for Android system'
                  : 'Tworzenie oraz publikowanie aplikacji mobilnych dla systemu Android'}
              </li>
            </ul>
          </span>
        </div>

        <div className='work--container'>
          <div className='work'>
            <span className='work--name--company'>
              Burger King Amrest Sp. z o.o
            </span>
            <span className='passedout--year'>05/2018 - 09/2021</span>
          </div>
        </div>
        <div className='work--container'>
          <span className='work--position'>Facility Shift Manager</span>
          <span className='work--description'>
            {langCtx.isEnglish ? (
              <ul>
                <li>Shift management, assignment of duties</li>
                <li>Taking care of cleanliness and stocking cleaning agents</li>
                <li>Servicing the equipment</li>
                <li>Repairing equipment in restaurant</li>
                <li>Management facility cost</li>
              </ul>
            ) : (
              <ul>
                <li>Zarządzanie zmianą, delegowanie zadań</li>
                <li>Dbanie o czystość oraz uzupełnianie środków czystości</li>
                <li>Serwisowanie urządzeń</li>
                <li>Naprawa uszkodzonego wyposażenia w restauracji</li>
                <li>Zarządzanie kosztami</li>
              </ul>
            )}
          </span>
        </div>
      </div>
    </>
  );
}
