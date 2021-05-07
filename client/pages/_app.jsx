import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <div className="menuIconContainer">
        <img className="logo" src="addendum_logo.png" alt="addendum logo"/>
      </div>
      <Component />
      <style global jsx>
        {`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
              'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }
        `}
      </style>
      <style jsx>{`
        .menuIconContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          width: 100%;
          padding: 9.7px 0;
          z-index: 2;
        }
        .logo {
          width: 80px;
          margin-right: 10px;
        }
        .title {
          font-size: 24px;
        }
      `}</style>
    </>
  );
};

export default MyApp;
