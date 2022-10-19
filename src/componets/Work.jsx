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
            {langCtx.isEnglish ? (
              <ul>
                <li>Android application development</li>
                <li>Publishing application in stores</li>
                <li>Writing documentation for the application</li>
                <li>Troubleshooting</li>
                <li>Updating existing applications</li>
              </ul>
            ) : (
              <ul>
                <li>Tworzenie aplilkacji dla systemu Android</li>
                <li>Publikowanie aplikacji w sklepach</li>
                <li>Pisanie dokumentacji dla aplikacji</li>
                <li>Rozwiązywanie problemów</li>
                <li>Aktualizacja dotychczasowych aplikacji</li>
              </ul>
            )}
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
                <li>Managing the shifts</li>
                <li>Managing the costs of the semis</li>
                <li>Assigning tasks and assistance.</li>
              </ul>
            ) : (
              <ul>
                <li>Zarządzanie zmianą</li>
                <li>Zarządzanie kosztami Semis</li>
                <li>Przydzielanie zadań i pomoc w ich realizowaniu</li>
              </ul>
            )}
          </span>
        </div>
      </div>
    </>
  );
}
