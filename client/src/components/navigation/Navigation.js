//template don't commit
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './navigation.scss';

export class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    render() {
        const {
            open
        } = this.state;
        return (
            <div>
                <div>
                    {!open ? <div>   {this.renderClosed()}
                    </div> : <div>{this.renderOpen()}</div>}

                </div>


                    {open && (
                        <div className={style.linksInner}>
                              <h1 className={style.navLink}>Home</h1>
                              <h1 className={style.navLink}>About</h1>
                              <h1 className={style.navLink}>Contact</h1>
                              <h1 className={style.navLink}>Free Trial</h1>
                        </div>
                    )}


            </div>)

    }


    toggleOpen() {
        this.setState({
            open: !this.state.open
        })
    }

    renderOpen() {
        return (
            <nav className={style.navigationContainerOpened} onClick={e => this.toggleOpen()}>
                <div onClick={e => this.toggleOpen()}>
                    <i style={{ fontSize: '8rem', color: '#FCB016' }} className="fas fa-times"></i>

                </div>
            </nav>
        )
    }
    renderClosed() {
        return (
            <nav className={style.navigationHam} >
                <div onClick={e => this.toggleOpen()}>
                    <i style={{ fontSize: '7rem', color: '#FCB016' }} className="fas fa-bars"></i>
                </div>

            </nav>
        )
    }
}
