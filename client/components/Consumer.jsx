import { useWeb3Context } from "web3-react";
import React, { useEffect } from "react";

const Consumer = () => {
  const context = useWeb3Context();
  //   const { // object available on context
  //     connector,
  //     library,
  //     chainId,
  //     account,
  //     activate,
  //     deactivate,
  //     active,
  //     error
  //   } = context;

  useEffect(() => {
    context.active || context.setConnector("MetaMask");
  }, [context]);

  if (!context.active && !context.error) {
    return <p> Loading </p>;
  } else if (context.error) {
    return <p> {context.error} </p>;
  } else {
    console.log(context.active);
    return (
      <p>
        {" "}
        State: {context.active ? "Active" : "Inactive"}, Account:{" "}
        {context.account}{" "}
      </p>
    );
  }
};

export default Consumer;
