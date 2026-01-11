"use client";

import { useContext, useEffect, useState } from "react";
import { HomeContext } from "@app/src/modules/home/contexts";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";

import LoginComponent from "./component";
import RegisterComponent from "./component";

export type UserRole = "admin" | "customer" | null;

export interface User {
  email: string;
  name: string;
  role: UserRole;
}

export const RegisterContainer = () => {
  const { setDataHome, name } = useContext(HomeContext);

  const { t: tHome } = useTranslation("home");
  const [user, setUser] = useState<User | null>(null);

  const handleRegister = (name: string, email: string, password: string) => {
    // Mock registration
    setUser({
      email,
      name,
      role: "customer",
    });
  };

  return (
    <div>
      {/* <p> name Translate {tHome("title")}</p>
      <p>name Context Value: {name}</p> */}
      <RegisterComponent onRegister={handleRegister} />
    </div>
  );
};
