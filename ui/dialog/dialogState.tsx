import { createContext, useState } from "react";

export const diaLogState = createContext(null);
export const diaLogSet = createContext(null);

export default ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <diaLogSet.Provider value={setIsOpen}>
      <diaLogState.Provider value={isOpen}>{children}</diaLogState.Provider>
    </diaLogSet.Provider>
  );
};
