import React, { Component } from 'react';
import style from './contact.scss';
import { Header } from '../header/Header';
import { Navigation } from '../navigation/Navigation';
import { ContactHero } from '../hero/Hero';
import { Footer } from '../footer/Footer';
import axios from 'axios';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, phone, message } = this.state;
    console.log('clicked');
    const form = await axios.post('/api/form', {
      name,
      email,
      phone,
      message
    }).catch((error) => {
      const response = error.response
      console.log(response.data.errors)
    })
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
                  <input
                    type="text"
                    name="name"
                    className={style.input}
                    onChange={this.handleChange} />
                </div>
                <div id={style.email} className={style.contentColumn}>
                  <label className={style.label}>Email</label>
                  <input
                    type="email"
                    name="email"
                    className={style.input}
                    onChange={this.handleChange} />
                </div>
                <div className={style.contentColumn}>
                  <label className={style.label}>Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    className={style.input}
                    placeholder="(555)555-5352"
                    onChange={this.handleChange} />
                </div>
              </div>
              <div className={style.contentColumn}>
                <label className={style.label}>Message</label>
                <input
                  type="text"
                  name="message"
                  className={style.inputMessage}
                  onChange={this.handleChange} />
              </div>

              <button className={style.contactBtn}>Send</button>
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