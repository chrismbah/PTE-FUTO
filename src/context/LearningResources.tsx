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
  const [studyTip, setStudyTip] = useState<string>("");

  const LearningResourcesContextValue = {
    resourcesType,
    setResourcesType,
    studyTip, setStudyTip
  };
  return (
    <LearningResourcesContext.Provider value={LearningResourcesContextValue}>
      {children}
    </LearningResourcesContext.Provider>
  );
}
