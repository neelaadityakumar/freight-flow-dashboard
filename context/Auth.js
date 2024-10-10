"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.setItem("loggedIn", "0");

    router.push("/login");
  };
  useEffect(() => {
    if (sessionStorage.getItem("loggedIn") === "1") {
      login();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
