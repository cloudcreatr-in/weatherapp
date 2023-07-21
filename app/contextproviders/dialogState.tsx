"use client";

import { createContext, useState, useContext } from "react";

type DialogState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const DiaLogState = createContext<DialogState>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useDialogState = (): DialogState => {
  return useContext(DiaLogState);
};

export default function Pages({ children }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const DialogState: DialogState = {
    isOpen,
    setIsOpen,
  };
  return (
    <DiaLogState.Provider value={DialogState}>{children}</DiaLogState.Provider>
  );
}
