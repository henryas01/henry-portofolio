"use client";

import { useContext, useEffect } from "react";
import { HomeContext } from "@app/src/modules/home/contexts";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";

import GamesComponent from "./component";

export const GamesContainer = () => {
  const { setDataHome, name } = useContext(HomeContext);

  const { t: tHome } = useTranslation("home");

  return (
    <div>
      {/* <p> name Translate {tHome("title")}</p>
      <p>name Context Value: {name}</p> */}
      <GamesComponent />
    </div>
  );
};
