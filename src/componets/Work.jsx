import React, { useContext } from 'react';

import { LangContext } from '../contex/lang-context';

export default function Work() {
  const langCtx = useContext(LangContext);

  return (
    <>
      <div className='work--inside--new'> 
      <div className='work--container'>
          <div className='work'>
            <span className='work--name--company'>Roboticket</span>
            <span className='passedout--year'>
              12/2023 - {langCtx.isEnglish ? 'now' : 'aktualnie'}
            </span>
          </div>
        </div>
        <div className='work--container'>
          <span className='work--position'>React Native Developer</span>
          <span className='work--description'>
            {langCtx.isEnglish ? (
              <ul>
                <li>Publication of applications in App / Google Play Store</li>
                <li>State management using React Redux</li>
                <li>Notification management using Firebase Message</li>
                <li>Troubleshooting</li>
                <li>Translating applications using i18n</li>
              </ul>
            ) : (
              <ul>
                <li>Publikacja aplikacji w App / Google Play Store</li>
                <li>Zarządzanie stanem przy użyciu React Redux</li>
                <li>Zarządzanie powiadomieniami przy użyciu Firebase Message</li>
                <li>Rozwiązywanie problemów</li>
                <li>Tłumaczenie aplikacji przy użyciu i18n</li>
              </ul>
            )}
          </span>
        </div>

        
        <div className='work--container'>
          <div className='work'>
            <span className='work--name--company'>Polskie Radio S.A</span>
            <span className='passedout--year'>
              03/2022 - 11/2023
            </span>
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
            <span className='work--name--company'>Netizens</span>
            <span className='passedout--year'>12/2022 - 06/2023</span>
          </div>
        </div>
        <div className='work--container'>
          <span className='work--position'>Web Developer</span>
          <span className='work--description'>
            {langCtx.isEnglish ? (
              <ul>
                <li>
                  Maintenance and further development of mobile applications
                </li>
                <li>
                  Maintenance and further development of websites based on the
                  React library
                </li>
                <li>Publishing applications in stores</li>
                <li>Troubleshooting</li>
                <li>Updating libraries in applications</li>
                <li>Updating WordPress-based websites</li>
              </ul>
            ) : (
              <ul>
                <li>Utrzymywanie i dalszy rozwój aplilkacji mobinych</li>
                <li>
                  Utrzymywanie i dalszy rozwój stron internetowych opartych na
                  bibliotece React
                </li>
                <li>Publikowanie aplikacji w sklepach</li>
                <li>Rozwiązywanie problemów</li>
                <li>Aktualizacja bibliotek w aplikacjach</li>
                <li>Aktualizacja stron opartych o WordPress</li>
              </ul>
            )}
          </span>
        </div>
      </div>
    </>
  );
}
