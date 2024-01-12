import React, { createContext, useContext, useState } from "react";

export const dataForword = createContext();

export const DataForwordProvider = ({ children }) => {
  const [Counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const Decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <dataForword.Provider value={{ Counter, Increment, Decrement }}>
      <div>{children}</div>
    </dataForword.Provider>
  );
};

export const useCounter = () => useContext(dataForword);