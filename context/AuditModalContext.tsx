"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type AuditModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const AuditModalContext = createContext<AuditModalContextType | null>(null);

export function AuditModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AuditModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </AuditModalContext.Provider>
  );
}

export function useAuditModal() {
  const ctx = useContext(AuditModalContext);
  if (!ctx) throw new Error("useAuditModal must be used within AuditModalProvider");
  return ctx;
}
