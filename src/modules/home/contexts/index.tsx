import { createContext, JSX, useMemo, useState } from "react";

import { ContextType, ContextTypeData } from "./ContextTypeData";

type Props = { children?: JSX.Element };

const defaultValue: ContextTypeData = {
  name: "Henry Albiri S",
};

const HomeContext = createContext<ContextType>({
  ...defaultValue,
  setDataHome: () => {},
});

function HomeProvider({ children }: Props) {
  const [HomeData, setHome] = useState<ContextTypeData>(defaultValue);

  function setDataHome(data: ContextTypeData, resetAll?: boolean) {
    if (resetAll) {
      setHome(() => ({
        ...defaultValue,
        ...data,
      }));
    } else {
      setHome((prev) => ({
        ...prev,
        ...data,
      }));
    }
  }

  const providerValue = useMemo(
    () => ({
      setDataHome,
      ...HomeData,
    }),
    [HomeData]
  );

  return (
    <HomeContext.Provider value={providerValue}>
      {children}
    </HomeContext.Provider>
  );
}

export { HomeContext, HomeProvider };
