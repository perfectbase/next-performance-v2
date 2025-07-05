import { Session } from "next-auth";
import { createContext, useContext } from "react";

interface AppContextType {
  session: Session;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  session: Session;
  children: React.ReactNode;
}

export function AppContextProvider({
  session,
  children,
}: AppContextProviderProps) {
  return (
    <AppContext.Provider value={{ session }}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}
