import React from 'react';

import Hero from '../panels/Hero';
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('../panels/Slider'), {
  ssr: false,
});

const Home = () => (
  <>
    <Hero />
    <Slider />
    <style jsx>{``}</style>
  </>
);

export default Home;
