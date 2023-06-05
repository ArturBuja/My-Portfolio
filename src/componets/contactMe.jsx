import React, { useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { LangContext } from '../contex/lang-context';
import useInput from '../hooks/useInput';

const isNotEmptyMessage = value => value.trim().length >= 10;
const isNotEmptyNane = value => value.trim().length >= 2;
const isEmailOrEmpty = value =>
  /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(value);

function ContactMe() {
  const form = useRef();

  const langCtx = useContext(LangContext);

  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
    setIsTouched: messageIsSubmitted,
  } = useInput(isNotEmptyMessage);
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
    setIsTouched: emailIsSubmitted,
  } = useInput(isEmailOrEmpty);
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
    setIsTouched: nameIsSubmitted,
  } = useInput(isNotEmptyNane);

  let formIsValid = false;

  if (messageIsValid && emailIsValid && nameIsValid) {
    formIsValid = true;
  }
  const resetForm = () => {
    resetMessage();
    resetEmail();
    resetName();
  };

  const sendEmail = e => {
    e.preventDefault();
    if (formIsValid) {
      emailjs
        .sendForm(
          'service_uwh1rwk',
          'template_wsm7ggl',
          form.current,
          'user_27h1MqqBApNu181G79mlX'
        )
        .then(
          () => {
            alert(
              langCtx.isEnglish
                ? 'Mail has been sent. I will contact you as soon as possible. Thanks.\n'
                : 'Poczta została wysłana. Skontaktuję się z Tobą tak szybko, jak to możliwe. Dziękuję.\n'
            );
          },
          () => {
            alert(
              langCtx.isEnglish
                ? 'Something went wrong. Mail was not sent, please try again.\n'
                : 'Coś poszło nie tak. Spróbuj ponownie później\n'
            );
          }
        );
      resetForm();
    } else {
      if (!messageIsValid) messageIsSubmitted(true);
      if (!emailIsValid) emailIsSubmitted(true);
      if (!nameIsValid) nameIsSubmitted(true);
      alert(
        langCtx.isEnglish
          ? 'Something went wrong. Mail was not sent, please try again.\n'
          : 'Popraw błednie wypełnione pola\n'
      );
    }
  };
  return (
    <div className='contact--me'>
      <div className='contact--me-bg'></div>
      <div className='contact--me--inner'>
        <span className='header--text'>
          {langCtx.isEnglish ? 'Contact me' : 'Kontakt'}
        </span>
        <span className='header--subtext'>
          {langCtx.isEnglish ? "Let's keep in touch" : 'Zostańmy w kontakcie'}
        </span>
        <div className='contact--me--card row'>
          <div className='col-lg-6 col-md-5 col-sm-12 left--contact'>
            <span className='get--in--touch'>
              {langCtx.isEnglish ? 'Get in touch' : 'Skontaktuj się'}
            </span>
            <div className='anim--container'>
              <lottie-player
                src='https://assets9.lottiefiles.com/packages/lf20_uwos7l6e.json'
                background='transparent'
                speed='1'
                style={{ width: '300px' }}
                loop
                autoplay
              >
                {}
              </lottie-player>
            </div>
          </div>
          <div
            className='col-lg-6 col-md-5 col-sm-12 my-auto right--contact'
            id='contactMe'
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className='card--contact--right'
            >
              <div className='input--group'>
                <label>{langCtx.isEnglish ? 'Name' : 'Imię'} </label>
                <input
                  name='name'
                  onChange={e => {
                    nameChangeHandler(e.target.value);
                  }}
                  onBlur={nameBlurHandler}
                  value={name}
                  className='input--groups'
                  type='text'
                  placeholder={
                    langCtx.isEnglish ? 'Enter your name' : 'Wpisz swoje imię'
                  }
                />
              </div>
              {nameHasError && (
                <span className='input--error'>
                  {langCtx.isEnglish
                    ? 'The name must contain at least two characters'
                    : 'Imie musi zawierać minimum dwa znaki'}
                </span>
              )}
              <div className='input--group'>
                <label> E-mail </label>
                <input
                  name='email'
                  onChange={e => {
                    emailChangeHandler(e.target.value);
                  }}
                  onBlur={emailBlurHandler}
                  value={email}
                  className='input--groups'
                  type='text'
                  placeholder={
                    langCtx.isEnglish ? 'Enter your email' : 'Wpisz swój email'
                  }
                />
              </div>
              {emailHasError && (
                <span className='input--error'>
                  {langCtx.isEnglish
                    ? 'Please enter a valid email address'
                    : 'Wpisz poprawny adres e-mail'}
                </span>
              )}
              <div className='input--group'>
                <label>{langCtx.isEnglish ? 'Message' : 'Wiadomość'} </label>
                <textarea
                  name='message'
                  onChange={e => {
                    messageChangeHandler(e.target.value);
                  }}
                  onBlur={messageBlurHandler}
                  value={message}
                  className='input--groups'
                  type='text'
                  placeholder={
                    langCtx.isEnglish
                      ? 'Enter your message'
                      : 'Wpisz swoją wiadomość'
                  }
                />
              </div>
              {messageHasError && (
                <span className='input--error'>
                  {langCtx.isEnglish
                    ? 'The message must contain at least ten characters'
                    : 'Wiadomość musi zawierać minimum dziesieć znaków'}
                </span>
              )}
              <div className='input--group'>
                <input
                  className='btn'
                  value={
                    langCtx.isEnglish ? 'Send message' : 'Wyślij wiadomość'
                  }
                  type='submit'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
