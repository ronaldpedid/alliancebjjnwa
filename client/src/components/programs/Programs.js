import React, { Component } from 'react';
import style from './programs.scss';

class Programs extends Component {
    selectProgramType(type){
        switch (type){
            case "kids" :
                return <div className={style.panelContainerKids}></div>
            case "adults" :
                return <div className={style.panelContainerAdults}></div>
            case "comps" :
                return <div className={style.panelContainerComps}></div>

        }
    }

    render() {
        return (
            <section className={style.programsWrapper}>
                <h1>OUR PROGRAMS</h1>
                <div className={style.panelContainer}>
                    <div className={style.panel}>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className={style.panel}>
                        <h3>{this.props.panelCopy}</h3>
                    </div>
                    <div className={style.panel}>
                        <button>SIGN UP FOR A FREE LESSON</button>
                    </div>
                </div>
                {this.selectProgramType(this.props.type)}
            </section>
        );
    }
}

export default Programs;