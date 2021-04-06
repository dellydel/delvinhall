import React, { Fragment } from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import dessert from '../assets/dessert.jpg'
import e1 from '../assets/e1.jpg'
import e2 from '../assets/e2.jpg'
import e3 from '../assets/e3.jpg'

const Hero = () => (
    <Fragment>
      <h1>All Out Catering</h1>
      <div className={'container-xs'}>
      <p>a sem ut, fringilla malesuada risus. Sed blandit enim eget nisi fringilla hendrerit. Etiam vitae velit interdum, lobortis est quis, rhoncus libero. Vivamus lobortis ipsum sed ex luctus, sit amet ullamcorper dolor ultrices.</p>
      </div>
      <Carousel arrows
      className={'carousel'} 
      slidesPerPage={3}
      autoPlay={3000}
      stopAutoPlayOnHover
      offset={50}
      clickToChange
      centered
      infinite>
        <img className={'carouselItem'} src={dessert} />
        <img className={'carouselItem'} src={e1} />
        <img className={'carouselItem'} src={e2} />
        <img className={'carouselItem'} src={e3} />
    </Carousel>
    </Fragment>
);

export default Hero;