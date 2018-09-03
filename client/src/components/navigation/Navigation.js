//template don't commit
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './navigation.scss';


export class Navigation extends Component {
    render() {
        return (
            <nav className={style.navigationContainer}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="http://www.allianceofficial.com/jiu-jitsu" target="_blank">About Jiu Jitsu</a></li>
                    <li><Link to="/classes">Instructors & Classes</Link></li>
                    <li><Link to="/contact">Reach Out</Link></li>
                    <li><a href="https://stormalliancekimonos.com/" target="_blank">Alliance Wear</a></li>
                </ul>
            </nav>
        )
    }
}
