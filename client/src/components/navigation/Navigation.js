//template don't commit
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './navigation.scss';
import Media from 'react-media';
import { LoginButtonMenu, TimeStampMenu } from '../header/Header';

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
            <Media query="(max-width: 600px)">
                {matches => {
                    if (matches) {
                        if (open) {
                            return this.renderOpen();
                        } else {
                            return this.renderClosed();
                        }
                    } else {
                        return this.renderDesktop();
                    }
                }}
            </Media>)
    }

    toggleOpen() {
        this.setState({
            open: !this.state.open
        })
    }
    renderDesktop() {
        return (
            <nav className={style.navigationContainer} onClick={e => this.toggleOpen()}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="http://www.allianceofficial.com/jiu-jitsu" target="_blank">About Jiu Jitsu</a></li>
                    <li><Link to="/contact">Reach Out</Link></li>
                    <li><a href="https://stormalliancekimonos.com/" target="_blank">Alliance Wear</a></li>
                </ul>
            </nav>
        )
    }
    renderOpen() {
        return (
            <nav className={style.navigationContainerOpened} onClick={e => this.toggleOpen()}>
                <button className={style.closeMenu}>
                    <h1>X</h1>
                </button>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="http://www.allianceofficial.com/jiu-jitsu" target="_blank">About Jiu Jitsu</a></li>
                    <li><Link to="/classes">Instructors & Classes</Link></li>
                    <li><Link to="/contact">Reach Out</Link></li>
                    <li><a href="https://stormalliancekimonos.com/" target="_blank">Alliance Wear</a></li>
                </ul>
                <TimeStampMenu />
                <LoginButtonMenu />
            </nav>
        )
    }
    renderClosed() {
        return (
            <nav className={style.navigationContainerHamburger} onClick={e => this.toggleOpen()}>
                <button>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </button>
            </nav>
        )
    }
}
