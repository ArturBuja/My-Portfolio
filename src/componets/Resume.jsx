import React, { useState, useContext } from 'react';
import Education from './Education';
import Work from './Work';
import Programming from './Programming';
import Projects from './Projects';

import { LangContext } from '../contex/lang-context';

export function Resume() {
  const [education, setEducation] = useState(true);
  const [workHistory, setWorkHistory] = useState(false);
  const [programmings, setProgrammings] = useState(false);
  const [projects, setProjects] = useState(false);

  const langCtx = useContext(LangContext);

  function setAllFalse() {
    setEducation(false);
    setWorkHistory(false);
    setProgrammings(false);
    setProjects(false);
  }

  function changeState(function1, state1) {
    setAllFalse();
    function1(state1);
  }

  return (
    <div className='resume--outer--section' id='resume'>
      <span className='header--text'>
        {langCtx.isEnglish ? 'Resume' : 'Życiorys'}
      </span>
      {/* <span className='header--subtext'>My formal bio details</span> */}
      <div className='resume--new--section row'>
        <div className='col-lg-4 col-md-4 col-sm-12 shadow-lg resume--left--section'>
          <div className='left--span--resume'>
            <span className='icon-span'>
              <i className='fas fa-user-graduate'>{''}</i>
            </span>
            <span className='icon-span'>
              <i className='fas fa-briefcase'>{''}</i>
            </span>
            <span className='icon-span'>
              <i className='fas fa-code'>{''}</i>
            </span>
            <span className='icon-span'>
              <i className='fas fa-tasks'>{''}</i>
            </span>
          </div>
          <div className='left--inner--resume'>
            <span
              onClick={() => {
                changeState(setEducation, true);
              }}
              className={
                education === false
                  ? 'resume--options--items'
                  : 'resume--options--items active'
              }
            >
              {langCtx.isEnglish ? 'Education' : 'Edukacja'}
            </span>
            <span
              onClick={() => {
                changeState(setWorkHistory, true);
              }}
              className={
                workHistory === false
                  ? 'resume--options--items'
                  : 'resume--options--items active'
              }
            >
              {langCtx.isEnglish ? 'Work' : 'Praca'}
            </span>
            <span
              onClick={() => {
                changeState(setProgrammings, true);
              }}
              className={
                programmings === false
                  ? 'resume--options--items'
                  : 'resume--options--items active'
              }
            >
              {langCtx.isEnglish ? 'Programming' : 'Programowanie'}
            </span>
            <span
              onClick={() => {
                changeState(setProjects, true);
              }}
              className={
                projects === false
                  ? 'resume--options--items'
                  : 'resume--options--items active'
              }
            >
              {langCtx.isEnglish ? 'Projects' : 'Projekty'}
            </span>
          </div>
        </div>
        <div className='col-lg-8 col-md-8 col-sm-12 resume--right--section'>
          {education === true && <Education />}
          {workHistory === true && <Work />}
          {programmings === true && <Programming />}
          {projects === true && <Projects />}
        </div>
      </div>
    </div>
  );
}
