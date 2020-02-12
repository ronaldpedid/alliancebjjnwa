import React, { Component } from 'react';
import style from './header.scss'
import { LogoRegular } from '../logo/Logo';

export class Header extends Component {
  render() {
    return (
      <div className={style.headerContainer}>
        <div className={style.logoContainer}>
          <a href="/"><LogoRegular /></a>
          <div className={style.logoCopyContainer}>
            <h1 className={style.logo}>ALLIANCE BJJ OF</h1>
            <h1 className={style.nwaLarge}>N<span className={style.wht}>ORTH</span> W<span className={style.wht}>EST</span> A<span className={style.wht}>RKANSAS</span></h1>
            <h1 className={style.nwa}>NWA</h1>
          </div>
        </div>
        <div className={style.address}>
          <LoginButton />
        </div>
      </div>
    )
  }
}

const TimeStampHeader = () => {
  return (
    <h4></h4>
  )
}


const LoginButton = () => {
  return (
    <a className={style.loginBtn} href="https://l.facebook.com/l.php?u=https%3A%2F%2Falliancebjjofnwa.kicksite.net%2Fcheckin%2Flogin&h=AT2w3OfYJ7dgJeujcL8frkmK5YwDye9npLO1cHiiOpvd7owdZ1KpTX-qC0DVJDPsggYzNoqSSLqWsV7nAxl0ip9F3yDSi5r6yv8_DP9dp2AhgWP3CVN90sqnSAO8yH44eWigeA5BcAh1BkJyn8U" target="_blank">
      <h6 className={style.loginBtn}>
        Member Login
  </h6></a>
  )
}

export const TimeStampMenu = () => {
  return (
    <div className={style.timeStamps}>
      <h4 className={style.timeStampMenu}> MONDAY TO THURSDAY 5PM TO 8PM</h4>
    </div>
  )
}



export const LoginButtonMenu = () => {
  return (
    <a className={style.loginBtnMenu} href="https://l.facebook.com/l.php?u=https%3A%2F%2Falliancebjjofnwa.kicksite.net%2Fcheckin%2Flogin&h=AT2w3OfYJ7dgJeujcL8frkmK5YwDye9npLO1cHiiOpvd7owdZ1KpTX-qC0DVJDPsggYzNoqSSLqWsV7nAxl0ip9F3yDSi5r6yv8_DP9dp2AhgWP3CVN90sqnSAO8yH44eWigeA5BcAh1BkJyn8U" target="_blank"><h6 className={style.loginBtnMenu}>
      Member Login
  </h6></a>
  )
}