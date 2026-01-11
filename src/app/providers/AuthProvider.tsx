"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "customer";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // load user on mount
  useEffect(() => {
    const stored = localStorage.getItem("user");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === "admin@example.com" && password === "admin") {
      const adminUser: User = {
        id: "1",
        name: "Admin User",
        email,
        role: "admin",
      };
      setUser(adminUser);
      localStorage.setItem("user", JSON.stringify(adminUser));
      router.push("/admin/dashboard");
      return true;
    }

    if (password === "password") {
      const customerUser: User = {
        id: "2",
        name: "Customer User",
        email,
        role: "customer",
      };
      setUser(customerUser);
      localStorage.setItem("user", JSON.stringify(customerUser));
      router.push("/customer/dashboard");
      return true;
    }

    return false;
  };

  const register = (name: string, email: string, password: string): boolean => {
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role: "customer",
    };

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    router.push("/customer/dashboard");
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
