import React, { Component } from 'react';
import style from './promo.scss'


export class Promo extends Component {
  render() {
    return (
      <div className={style.promoContainer}>
        <div className={style.promoCopy}>
          <h2>Come by for a free week trial</h2>
          <h6><button className={style.promoBtn}><a href="/contact">REACH OUT</a></button></h6>
        </div>

      </div>


    )
  }
}