import React from "react";
import { ReactQueryConfigProvider } from "react-query";

const AppStateContext = React.createContext(null);
const AppStateProvider = ({ children, defaultAuth = false }: any = {}) => {
  // default query configuration
  const queryConfig = {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  };
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      {children}
    </ReactQueryConfigProvider>
  );
};

const useAppState = () => {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }
  return context;
};

export { AppStateProvider, useAppState };
