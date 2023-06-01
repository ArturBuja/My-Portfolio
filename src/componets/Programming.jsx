import React from 'react';

export default function Programming() {
  const values = [
    {
      id: Math.random(),
      text: 'HTML5',
      percentage: 35,
    },
    {
      id: Math.random(),
      text: 'Javascript',
      percentage: 30,
    },
    {
      id: Math.random(),
      text: 'TypeScript',
      percentage: 30,
    },
    {
      id: Math.random(),
      text: 'React JS',
      percentage: 20,
    },
    {
      id: Math.random(),
      text: 'React Native',
      percentage: 20,
    },
    {
      id: Math.random(),
      text: 'Next.js',
      percentage: 20,
    },
    {
      id: Math.random(),
      text: 'WordPress',
      percentage: 20,
    },
    {
      id: Math.random(),
      text: 'CSS 3',
      percentage: 30,
    },
    {
      id: Math.random(),
      text: 'SASS',
      percentage: 30,
    },
    {
      id: Math.random(),
      text: 'Bootstrap',
      percentage: 30,
    },
  ];
  return (
    <div className=''>
      <div className='row'>
        {values.map(value => {
          return (
            <div className='col-lg-5 col-mg-6 col-sm-12 box' key={value.id}>
              <span className='language'>{value.text}</span>
              {/*<div className="progress--bar">*/}
              {/*    <div style={ {width: `${ value.percentage }%`} }*/}
              {/*         className="progress--bar--second">{ "" }</div>*/}
              {/*</div>*/}
            </div>
          );
        })}
      </div>
    </div>
  );
}
