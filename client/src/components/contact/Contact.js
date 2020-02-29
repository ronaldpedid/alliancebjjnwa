import React, { Component } from 'react';
import style from './contact.scss';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import PropTypes from 'prop-types';
import axios from 'axios';

class ContactForm extends Component {
  render() {
    const {
      name,
      email,
      phone,
      message,
      handleChange,
      nameErr,
      emailErr,
      phoneErr,
      messageErr,
      handleSubmit
    } = this.props;
    return (
      <div className={style.contentColumn}>
        <div className={style.formContainer}>
          <h2 className={style.smallHeadline}>Questions? Information? Contact Us.</h2>
          <h3 id="hiddenRequired" className={style.hide}>Please fill out the required fields.</h3>
          <form onSubmit={handleSubmit} className={style.contactForm} >
            <div className={style.formColumn}>
              <div className={style.contentColumn}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className={nameErr ? style.error : style.input}
                  onChange={handleChange}
                  value={name}
                />
              </div>
              <div id={style.email} className={style.contentColumn}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={emailErr ? style.error : style.input}
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div className={style.contentColumn}>
                <input
                  type="number"
                  name="phone"
                  className={phoneErr ? style.error : style.input}
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={phone}
                />
              </div>
            </div>
            <div className={style.contentColumn}>
              <textarea
                type="text"
                name="message"
                placeholder="Message for us"
                className={messageErr ? style.errorMessage : style.inputMessage}
                onChange={handleChange}
                value={message}></textarea>
            </div>
            <button className={style.btn} type="submit">Send</button>
          </form>
        </div>
      </div>
    )
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  message: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  nameErr: PropTypes.bool,
  emailErr: PropTypes.bool,
  phoneErr: PropTypes.bool,
  messageErr: PropTypes.bool
};

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      nameErr: false,
      emailErr: false,
      phoneErr: false,
      messageErr: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  validateForm() {
    const { name, email, phone, message } = this.state;
    const nameErr = name.length === 0;
    const emailErr = email.length === 0;
    const phoneErr = phone.length === 0 || phone.length < 7;
    const messageErr = message.length === 0;

    this.setState({ nameErr, emailErr, phoneErr, messageErr })
    return !(nameErr || emailErr || phoneErr || messageErr);
  }

  async submitForm() {
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

  showHiddenMessage() {
    const requiredReply = document.querySelector("#hiddenRequired");
    requiredReply.classList.remove(style.hide);
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      await this.submitForm();
      window.location = "/"
    }
    else {
      this.showHiddenMessage();
    }

  }
  render() {
    const {
      name,
      email,
      phone,
      message,
      nameErr,
      emailErr,
      phoneErr,
      messageErr
    } = this.state;
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <ContactForm
          name={name}
          email={email}
          phone={phone}
          message={message}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          nameErr={nameErr}
          emailErr={emailErr}
          phoneErr={phoneErr}
          messageErr={messageErr}
        />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}