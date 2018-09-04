import React, { Component } from 'react';
import style from './contact.scss';
import { Header } from '../header/Header';
import { Navigation } from '../navigation/Navigation';
import { ContactHero } from '../hero/Hero';
import { Footer } from '../footer/Footer';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Navigation />
        <ContactHero />
        <div className={style.contentColumn}>
          <div className={style.formContainer}>
            <h1 className={style.largeHeadline}>We ask that anyone looking to sign up for classes comes into the gym and take a free introduction class to see if Brazillian Jiu Jitsu is right for you.</h1>
            <h2 className={style.smallHeadline}>Questions? Contact Us.</h2>
            <form onSubmit={this.handleSubmit} className={style.contactForm} >
              <div className={style.formRow}>
                <div className={style.contentColumn}>
                  <label className={style.label}>Name</label>
                  <input type="text" className={style.input} value={this.value} />
                </div>
                <div id={style.email} className={style.contentColumn}>
                  <label className={style.label}>Email</label>
                  <input type="email" className={style.input} value={this.value} />
                </div>
                <div className={style.contentColumn}>
                  <label className={style.label}>Phone Number</label>
                  <input type="number" className={style.input} placeholder="(555)555-5352" value={this.value} />
                </div>
              </div>
              <div className={style.contentColumn}>
                <label className={style.label}>Message</label>
                <input className={style.inputMessage} value={this.value} />
              </div>

              <button className={style.contactBtn} type="submit" value="submit">Send</button>
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