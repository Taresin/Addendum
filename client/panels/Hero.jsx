import React from 'react';

const Hero = () => (
  <>
    <div className="container">
      <div className="wrapper">
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 20px;
      }
      .wrapper {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 4px;
        background-color: aquamarine;
      }
      .description {
        margin: 0;
      }
    `}</style>
  </>
);

export default Hero;
