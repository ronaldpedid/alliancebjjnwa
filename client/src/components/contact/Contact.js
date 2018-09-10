import React, { Component } from 'react';
import style from './contact.scss';
import { Header } from '../header/Header';
import { Navigation } from '../navigation/Navigation';
import { Footer } from '../footer/Footer';
import axios from 'axios';

export class ContactForm extends Component {
  render() {
    return (
      <div className={style.contentColumn}>
        <div className={style.formContainer}>

          <h2 className={style.smallHeadline}>Questions? Contact Us.</h2>
          <form onSubmit={this.handleSubmit} className={style.contactForm} >
            <div className={style.formColumn}>
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
              <textarea
                type="text"
                name="message"
                className={style.inputMessage}
                onChange={this.handleChange}></textarea>
            </div>
            <button className={style.btn}>Send</button>
          </form>
        </div>
      </div>
    )
  }
}

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
        <ContactForm />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}