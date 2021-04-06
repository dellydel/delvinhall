import React, { Fragment } from "react";
import HeroBar from './HeroBar';
import Services from './Services';

const Home = () => (
    <Fragment>
      <h1>Home</h1>
      <HeroBar />
      <Services/>
    </Fragment>
);

export default Home;