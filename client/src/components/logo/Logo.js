import React, { Component } from 'react';
import style from './logo.scss'



export class LogoRegular extends Component {
  render() {
    return (

      <figure>

        <img className={this.props.className ? this.props.className : style.regular} src="https://res.cloudinary.com/the-sage-mages/image/upload/v1565393139/alliance%20pics/alliance-blkwht.png" />
      </figure>




    )
  }
}

export class LogoLongName extends Component {
  render() {
    return (<figure>
      <img className={window.innerWidth < 1201 ? style.high : style.long} src={window.innerWidth < 1201 ?
          "https://res.cloudinary.com/https-jungapi-herokuapp-com-public/image/upload/v1582486114/Alliance/ANWA-Header-Logo-vert_laxf0y.png" 
          : "https://res.cloudinary.com/https-jungapi-herokuapp-com-public/image/upload/v1582486114/Alliance/ANWA-Header-Logo-horzontal_z3rdnm.png" }/>
    </figure>)
  }
}