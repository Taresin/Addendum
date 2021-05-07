import React from 'react';

const Hero = () => (
  <>
    <div className="container">
      <div className="wrapper">
        <div className="description">
            <p> Decipher your mumbo jumbo cryto transactions! </p>
            <p> Be able to quickly track and review your crypto investments in a language that you actually understand! </p>
            <p> Add addendum mask to your browser. </p>
            <p> Transform to easy to read etherscan transactions </p>
        </div>
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
      }
      .description {
        text-align: center;
      }
      .description > p {
        margin: 0;
      }
    `}</style>
  </>
);

export default Hero;
