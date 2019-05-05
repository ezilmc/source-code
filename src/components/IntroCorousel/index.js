import React, { Component, Fragment } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';
import './IntroCorousel.scss';
import bannerBg from '../../assets/img/bannerBg.png';
import bannerimg1 from '../../assets/img/banner-img1.png';
import bannerimg2 from '../../assets/img/banner-img2.png';

const items = [
  {
    src: bannerimg1,
    title: 'Islamic Studies',
    content: 'Math is more than just numbers. With unlimited questions, engaging item types, and real-world scenarios, IXL helps learners experience math at its most mesmerizing!'
  },
  {
    src: bannerimg2,
    title: 'Islamic Studies2',
    content: 'Math is more than just numbers. With unlimited questions, engaging item types, and real-world scenarios, IXL helps learners experience math at its most mesmerizing!'
  }
];

class IntroCorousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className="row flex-container">
            <div className="col-md-7">
              <h2>{item.title}</h2>
              <p>
                {item.content}
              </p>
              
                <p>  
                  <a className="btn join-btn">join</a>
                  <a className="btn try-btn">try</a>
                  <a className="btn about-btn">about</a>
                </p>
            </div>



            <div className="col-md-5 d-none d-sm-block text-center">
              <img className="img-fluid" src={item.src} alt={item.altText} />
            </div>
          </div>

        </CarouselItem>
      );
    });

    return (
      <React.Fragment>
        <section id="intro">
          <div className="intro-container">
            <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>


            </div>
          </div>
        </section>

      </React.Fragment>
    );
  }
}


export default IntroCorousel;