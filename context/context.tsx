import React, { createContext, useState, useEffect } from "react";

interface AuthContextInterface {
  initialLoad: boolean;
  toggleInitialLoad: () => void;
}

interface Props {
  children: JSX.Element;
}

const Context = createContext({} as AuthContextInterface);

export const ContextProvider = ({ children }: Props) => {
  const [initialLoad, setInitialLoad] = useState(true);

  const toggleInitialLoad = () => {
    setInitialLoad(false);
  };

  const authContextValue: AuthContextInterface = {
    initialLoad,
    toggleInitialLoad,
  };

  return (
    <Context.Provider value={authContextValue}>{children}</Context.Provider>
  );
};

export const useAuth = () => React.useContext(Context);

export default Context;
