import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

type StoreInformation = {
  name: string;
  slug: string;
  isCurrentStorePage: boolean;
};
export type LayoutType = {
  store: StoreInformation;
  setStore: (params: StoreInformation) => void;
};

const initialStoreState = {
  isCurrentStorePage: false,
  name: "",
  slug: "",
};

const LayoutContext = createContext<LayoutType>({
  store: initialStoreState,
  setStore: () => {},
});

const LayoutProvider = ({ children }: { children?: ReactNode }) => {
  const { pathname } = useRouter();
  const [store, setStore] = useState<LayoutType["store"]>(initialStoreState);

  useEffect(() => {
    if (
      !(
        pathname === "/p/[store]" ||
        pathname === "/p/[store]/storefront/[tag_slug]"
      )
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStore(initialStoreState);
    }
  }, [pathname]);

  const providerValue = useMemo(
    () => ({
      store,
      setStore,
    }),
    [store]
  );

  return (
    <LayoutContext.Provider value={providerValue}>
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutProvider };
