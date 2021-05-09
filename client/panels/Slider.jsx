import React from 'react';

import BeforeAfterSlider from 'react-before-after-slider';

const Slider = () => (
  <>
    <div className="container">
      <div className="wrapper">
        <BeforeAfterSlider
          before={'/eth1.jpg'}
          after={'/eth2.jpg'}
          width={1000}
          height={500}
        />
      </div>
    </div>
    <style jsx>{`
      .container {
      }
      .wrapper {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </>
);

export default Slider;
