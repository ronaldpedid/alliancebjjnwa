import React, { Component } from 'react';
import style from './instructor.scss';
import { Header } from '../header/Header';
import { Navigation } from '../navigation/Navigation';

import { Footer } from '../footer/Footer';
import { GreenAdultPanel } from '../panel/Adults';
import { GreenKidPanel } from '../panel/Kids';
import { Calendar } from '../calendar/Calendar';

class InstructorLuis extends Component {
  render() {
    return (
      <div className={style.contentRowInstructor}>
        <div className={style.luis}>
        </div>
        <div className={style.info}>
          <h1 className={style.green}>Luis Rubalcava</h1>
          <h2>Head Instructor</h2>

          <p className={style.bio}>
            Professor Luis Rubalcava is a Brazilian Jiu-Jitsu baclk belt instructor. Certified and recognized by the
            International Brazilian Jiu-Jitsu Federation(IBJJF). Luis is a 3x Pan Am gold medalist and also recieved a gold metal
            at the Abu Dhabi invitational. He is an American Cup absolute winner. Luis received his black belt from Alliance's Romero
            "Jacare" Cavalcante. Luis has been training since 1999 and has trained with some of the legends are the sport: Marcelo Garcia,
            Ryron Gracie, Royce Gracie, Fabio Gurgel, Rodrino Pinheiro, Alex Martain, and Braulio Estima just to name a few. Luis continues to
            train and compete along side his students.
          </p>
        </div>
      </div>
    )
  }
}


class InstructorAdam extends Component {
  render() {
    return (
      <div className={style.contentRowInstructor}>
        <div className={style.adam}>
        </div>
        <div className={style.info}>
          <h2 className={style.green}>Adam Osborn</h2>
          <h1>Instructor</h1>

          <p className={style.bio}>
            Started jiu-jitsu in 2008 and currently promoted to brown belt via Luis Rubacalva. Amateur mma record of 4 wins 2 losses and lifetime fan of combat sports. Currently working as a licensed physical therapist assistant and working to his black belt in jujitsu adam enjoys coaching all aspects of martial arts and personal training.
          </p>
        </div>
      </div>
    )
  }
}


class InstructorTim extends Component {
  render() {
    return (
      <div className={style.contentRowInstructor}>
        <div className={style.tim}>
        </div>
        <div className={style.info}>
          <h2>Tim Ikehara</h2>
          <h1>Instructor</h1>
          <p className={style.bio}>
            Bio Coming Soon.
          </p>
        </div>
      </div>
    )
  }
}


class InstructorMike extends Component {
  render() {
    return (
      <div className={style.contentRowInstructor}>
        <div className={style.mike}>
        </div>
        <div className={style.info}>
          <h2>Mike Berrios</h2>
          <h1>Instructor</h1>
          <p className={style.bio}>
            Mike was promoted to purple belt in Brazilian Jiu Jitsu by Luis Rubalcava, and was promoted to black belt under the lineage Toshiro Obata.
            With 18 years of experience and active training he has gained extensive knowledge in formal martial arts which include: Kickboxing, Mauy Thai, Shinkendo, and Aikida. Mike is also well versed in self defense techniques weaponary and knife defenses. He has tested his knowledge in multipul competitions including BJJ tournaments, full contact G.F.T. tournaments, and has an amateur MMA record of 4 wins and 0 losses all wins coming in the first round. Mike is currently a manager at Lazyboy galleries in Springdale, AR.
          </p>
        </div>
      </div>
    )
  }
}


class InstructorSteven extends Component {
  render() {
    return (
      <div className={style.contentRowInstructor}>
        <div className={style.steven}>
        </div>
        <div className={style.info}>
          <h2 className={style.green}>Steven Carlisle</h2>
          <h1>Instructor</h1>
          <p className={style.bio}>
            Bio Coming Soon.
          </p>
        </div>
      </div>
    )
  }
}
export class Instructor extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Navigation />

        <InstructorLuis />
        <InstructorAdam />
        <InstructorTim />
        <InstructorMike />
        <InstructorSteven />

        <div className={style.classRow}>
          <GreenKidPanel />
          <GreenAdultPanel />
        </div>

        <Calendar />

        <Footer />

      </div >
    );
  }
}