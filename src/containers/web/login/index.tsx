"use client";

import { useContext, useEffect, useState } from "react";
import { HomeContext } from "@app/src/modules/home/contexts";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";

import LoginComponent from "./component";

export type UserRole = "admin" | "customer" | null;

export interface User {
  email: string;
  name: string;
  role: UserRole;
}

export const LoginContainer = () => {
  const { setDataHome, name } = useContext(HomeContext);

  const { t: tHome } = useTranslation("home");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (
    email: string,
    password: string,
    role: UserRole = "customer"
  ) => {
    // Mock login - in production, this would call an API
    setUser({
      email,
      name: email.split("@")[0],
      role,
    });
  };

  return (
    <div>
      {/* <p> name Translate {tHome("title")}</p>
      <p>name Context Value: {name}</p> */}
      <LoginComponent onLogin={handleLogin} />
    </div>
  );
};
