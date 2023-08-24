import React, { useEffect, useState, useContext } from 'react';
import { LangContext } from '../contex/lang-context';

function Testimonials() {
  const [name, getName] = useState([]);
  const langCtx = useContext(LangContext);

  useEffect(() => {
    getData().catch(() => {}, []);
  }, []);

  const getData = async () => {
    const resume = await fetch(
      `https://api.github.com/users/ArturBuja/repos?type=public&per_page=100&sort=pushed`
    );
    const data = await resume.json();

    getName(data);
  };

  return (
    <div className='about--me--section about--me--inside' id='testimonials'>
      <div className='about--me--header '>
        <span className='header--text'>
          {langCtx.isEnglish ? 'Testimonials' : 'Referencje'}
        </span>
        <span className='header--subtext'>
          {langCtx.isEnglish
            ? 'My github sample projects'
            : 'Moje przykładowe projekty z GitHub'}
        </span>
        <div className='row repo--container'>
          {name.map(value => {
            return (
              <div
                key={value.id}
                className='col-lg-4 col-sm-12 col-md-6  repo--inner--container'
              >
                <div className='card shadow repo--card'>
                  <span className='card--name'>{value.name}</span>
                  <span className='card--description'>{value.description}</span>
                  <a href={value.clone_url} target='_blank'>
                    <span className='card--link'>
                      {langCtx.isEnglish ? 'GET SOURCE' : 'ŹRÓDŁO'}
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
