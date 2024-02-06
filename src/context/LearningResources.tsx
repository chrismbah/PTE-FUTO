import { createContext, useContext, useState } from "react";
import type { LearningResourcesContextProviderProps } from "../models/academics/learning-resources";

export const LearningResourcesContext = createContext<any | null>(null);

export function useLearningResourcesContext() {
  return useContext(LearningResourcesContext);
}

export default function LearningResourcesContextProvider({
  children,
}: LearningResourcesContextProviderProps) {
  const [resourcesType, setResourcesType] = useState<string>("handouts");

  const LearningResourcesContextValue = {
    resourcesType,
    setResourcesType,
  };
  return (
    <LearningResourcesContext.Provider value={LearningResourcesContextValue}>
      {children}
    </LearningResourcesContext.Provider>
  );
}
