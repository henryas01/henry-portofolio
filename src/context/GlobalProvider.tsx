"use client";

import React, { createContext, PropsWithChildren, useState } from "react";

type GlobalContextProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  globalValue?: {};
  handleChangeValue?: (newValue: string) => void;
};

export const GlobalContext = createContext<GlobalContextProps>({});

const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [globalValue, setValue] = useState({
    overflow: "",
  });

  const handleChangeValue = (newValue: string) => {
    setValue((prev) => {
      const previous = { ...prev };
      return {
        ...previous,
        newValue,
      };
    });
  };

  return (
    <GlobalContext.Provider value={{ globalValue, handleChangeValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
