import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';

import Hero from '../panels/Hero';
import Goto from '../panels/Goto';

const Slider = dynamic(() => import('../panels/Slider'), {
  ssr: false,
});

const Home = () => (
  <>
    <Hero />
    <Slider />
    <Goto />
    {/* eslint-disable-line no-alert */}
    <style jsx>{' '}</style>
  </>
);

export default Home;
