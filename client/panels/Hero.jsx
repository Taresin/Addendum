import React from 'react';

const Hero = () => (
  <>
    <div className="container">
      <div className="wrapper">
        <div className="description">
            <p> Decipher your mumbo jumbo cryto transactions! </p>
            <p> Be able to quickly track and review your crypto investments in a language that you actually understand! </p>
            <p> Add addendum mask to your browser. </p>
            <p> Transform to easy to read etherscan transactions. </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 20px;
      }
      .wrapper {
        box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16);
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
