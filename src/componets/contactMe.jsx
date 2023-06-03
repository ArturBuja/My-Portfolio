import React, { useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { LangContext } from '../contex/lang-context';

function ContactMe() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const langCtx = useContext(LangContext);

  const sendEmail = e => {
    e.preventDefault();
    if (!name) {
      alert('Fill in the name field\n');
    } else if (!email) {
      alert('Fill in the e-mail field\n');
    } else if (!message) {
      alert('Fill in the message field\n');
    } else {
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
              'Mail has been sent. I will contact you as soon as possible. Thanks.\n'
            );
          },
          () => {
            alert(
              'Something went wrong. Mail was not sent, please try again.\n'
            );
          }
        );

      setName('');
      setEmail('');
      setMessage('');
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
                    setName(e.target.value);
                  }}
                  value={name}
                  className='input--groups'
                  type='text'
                  placeholder={
                    langCtx.isEnglish ? 'Enter your name' : 'Wpisz swoje imię'
                  }
                />
              </div>
              <div className='input--group'>
                <label> E-mail </label>
                <input
                  name='email'
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  className='input--groups'
                  type='text'
                  placeholder={
                    langCtx.isEnglish ? 'Enter your email' : 'Wpisz swój email'
                  }
                />
              </div>
              <div className='input--group'>
                <label>{langCtx.isEnglish ? 'Message' : 'Wiadomość'} </label>
                <textarea
                  name='message'
                  onChange={e => {
                    setMessage(e.target.value);
                  }}
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
