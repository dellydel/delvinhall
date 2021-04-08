import React, { Fragment } from "react";
import HeroBar from './HeroBar';
import Services from './Services';

const Home = () => (
    <Fragment>
      <div className="maxWidth">
        <HeroBar />
        <Services/>
      </div>
    </Fragment>
);

export default Home;