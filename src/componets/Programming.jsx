import React, { useMemo } from 'react';

export default function Programming() {
  const values = useMemo(
    () => [
      {
        id: Math.random(),
        text: 'HTML5',
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
      },
      {
        id: Math.random(),
        text: 'React Native',
      },
      {
        id: Math.random(),
        text: 'Next.js',
      },
      {
        id: Math.random(),
        text: 'Node.js',
      },
      {
        id: Math.random(),
        text: 'Express.js',
      },
      {
        id: Math.random(),
        text: 'MongoDB',
      },
      {
        id: Math.random(),
        text: 'mongoose',
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
      {
        id: Math.random(),
        text: 'Tailwind CSS',
        percentage: 30,
      },
      {
        id: Math.random(),
        text: 'WordPress',
      },
    ],
    []
  );
  return (
    <div className=''>
      <div className='row'>
        {values.map(value => {
          return (
            <div
              className='col-lg-5 col-mg-6 col-sm-12 box scroll'
              key={value.id}
            >
              <span className='language'>{value.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
