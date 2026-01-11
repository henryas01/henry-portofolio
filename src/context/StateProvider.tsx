"use client";

import GlobalContextProvider from "@app/src/context/GlobalProvider";
import React, { cloneElement, PropsWithChildren, ReactElement } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TranslationContextProvider } from "../lib/dictionaries/contexts";
import { HomeProvider } from "../modules/home/contexts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 mins
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const StateProvider = ({ children }: PropsWithChildren) => {
  // Last In First Out
  const providerList: ReactElement[] = [
    <HomeProvider key="Home" />,
    <QueryClientProvider key="react-query" client={queryClient} />,
    <GlobalContextProvider key="global" />,

    // High Priority, place on the bottom
    <TranslationContextProvider key="translation" />,
  ];

  let content = children || null;
  providerList.forEach((provider) => {
    content = cloneElement(provider, {}, content);
  });

  return content;
};

export default StateProvider;
