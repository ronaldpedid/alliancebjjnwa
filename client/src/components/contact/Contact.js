import React, { Component } from 'react';
import style from './contact.scss';
import { Header } from '../header/Header';
import { Navigation } from '../navigation/Navigation';
import { ContactHero } from '../hero/Hero';
import { Footer } from '../footer/Footer';

export class Contact extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Navigation />
        <ContactHero />
        <div className={style.contentColumn}>
          <div className={style.formContainer}>
            <h1>Questions? Contact Us.</h1>
            <form className={style.contactForm} >
              <div className={style.formRow}>
                <div className={style.contentColumn}>
                  <label className={style.label}>Name</label>
                  <input type="text" className={style.input} />
                </div>
                <div id={style.email} className={style.contentColumn}>
                  <label className={style.label}>Email</label>
                  <input type="email" className={style.input} />
                </div>
                <div className={style.contentColumn}>
                  <label className={style.label}>Phone Number</label>
                  <input type="number" className={style.input} placeholder="(555)555-5352" />
                </div>
              </div>
              <div className={style.contentColumn}>
                <label className={style.label}>Message</label>
                <input className={style.inputMessage} />
              </div>

              <button className={style.contactBtn} type="submit">Send</button>
            </form>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}