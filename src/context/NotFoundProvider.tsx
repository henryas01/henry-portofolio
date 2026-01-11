"use client";

import { createContext, PropsWithChildren } from "react";

export const NotFoundContext = createContext<{
  isError: boolean;
}>({ isError: false });

export const NotFoundProvider = ({
  isError = false,
  children,
}: PropsWithChildren<{
  isError: boolean;
}>) => (
  <NotFoundContext.Provider value={{ isError }}>
    {children}
  </NotFoundContext.Provider>
);
