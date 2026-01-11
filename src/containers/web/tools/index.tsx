"use client";

import { useContext, useEffect } from "react";
import { HomeContext } from "@app/src/modules/home/contexts";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";

import ToolsComponent from "./component";

export const ToolsContainer = () => {
  const { setDataHome, name } = useContext(HomeContext);

  const { t: tHome } = useTranslation("home");

  return (
    <div>
      {/* <p> name Translate {tHome("title")}</p>
      <p>name Context Value: {name}</p> */}
      <ToolsComponent />
    </div>
  );
};
