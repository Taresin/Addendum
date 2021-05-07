import React from 'react';
import Web3Provider, { Connectors } from 'web3-react';

import Consumer from '../components/Consumer';

const { InjectedConnector } = Connectors;

const MetaMask = new InjectedConnector({ supportedNetworks: [3] });

const connectors = { MetaMask };

const App = () => (
  <Web3Provider
    connectors={connectors}
    libraryName="ethers.js"
  >
    <Consumer />
  </Web3Provider>
);

export default App;
