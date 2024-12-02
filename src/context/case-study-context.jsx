"use client";
import { createContext, useContext, useState } from "react";

const CaseStudyContext = createContext();

export function CaseStudyProvider({ children }) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <CaseStudyContext.Provider
      value={{ selectedCaseStudy, setSelectedCaseStudy }}
    >
      {children}
    </CaseStudyContext.Provider>
  );
}

export function useCaseStudy() {
  return useContext(CaseStudyContext);
}
