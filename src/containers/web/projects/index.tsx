"use client";

import { useContext, useEffect, useState } from "react";
import { HomeContext } from "@app/src/modules/home/contexts";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";

import ProjectsComponent from "./component";

export const ProjectsContainer = () => {
  const { setDataHome, name } = useContext(HomeContext);

  return (
    <div>
      <ProjectsComponent />
    </div>
  );
};
