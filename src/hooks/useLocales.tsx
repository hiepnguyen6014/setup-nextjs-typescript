// libs
import React from "react";
// hooks
import useLocalStorage from "./useLocalStorage";
// others
import locales from "../locales";

interface Props {
  children: React.ReactNode;
}

interface Locales {
  local: string;
  setLocal: (local: string) => void;
  locales: any;
}

const LocalesContext = React.createContext<Locales | null>(null);

const LocalesProvider = ({ children }: Props) => {
  const [local, setLocal] = useLocalStorage("lang", "vi");

  const value: Locales = {
    local,
    setLocal,
    locales,
  };

  return (
    <LocalesContext.Provider value={value}>{children}</LocalesContext.Provider>
  );
};

export default {
  LocalesContext,
  LocalesProvider,
};
