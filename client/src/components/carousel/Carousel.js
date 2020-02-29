import React, { Component } from 'react';
import data from './CarouselData';
import styles from './carousel.scss';

export default class AllianceCarousel extends Component {
  constructor(props) {
    super(props);
    const { showArrows, showDots, autoplay, currentSlide } = this.props;
    this.state = {
      campaigns: data,
      currentSlide: 0,
      showArrows: showArrows || false,
      showDots: showDots || false,
      numOfDots: data.length - 1,
      autoplay: autoplay
    }
    this.ChangeSlidePlus = this.ChangeSlidePlus.bind(this);
    this.ChangeSlideMinus = this.ChangeSlideMinus.bind(this);
    this.createDots = this.createDots.bind(this);
  }
  ChangeSlidePlus() {
    if (this.state.currentSlide >= this.state.campaigns.length - 1) {
      return this.setState({ currentSlide: 0 });
    } else {
      this.setState({ currentSlide: this.state.currentSlide + 1 });
    }
  }
  ChangeSlideMinus() {
    if (this.state.currentSlide <= 0) {
      return this.setState({ currentSlide: this.state.campaigns.length - 1 });
    }
    this.setState({ currentSlide: this.state.currentSlide - 1 });
  }

  createDots() {
    let dots = [];
    for (let i = 0; i <= this.state.campaigns.length - 1; i++) {
      let div = <div key={i} className={this.state.currentSlide === i ? styles.activeDot : styles.sliderDot} onMouseDown={() => { this.setState({ currentSlide: i }) }}></div>;
      dots.push(div);
    }
    return dots;
  }

  render() {
    return (
      <div>
        {this.state.campaigns.map((data, index) => (
          <div key={index + data.img} className={this.state.currentSlide !== index ? styles.hidden : styles.slideContainer}>
            <img className={styles.figure} src={data.img} />
            <h6 className={styles.copy}>{data.altText}</h6>
            {this.state.showArrows ? <div className={styles.arrowBlock}>
              <a className={styles.arrow} onClick={this.ChangeSlideMinus}> {'<'} </a>
              <a className={styles.arrow} onClick={this.ChangeSlidePlus}> {'>'} </a>
            </div> : ""}
            {this.state.showDots ? <div className={styles.dotContainer}>{this.createDots()}</div> : ''}
          </div>
        ))}
      </div>
    )

  }
}
