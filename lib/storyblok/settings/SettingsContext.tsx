import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { GlobalSettings } from './types/GlobalSettings'; 

interface SettingsContextType {
  globalSettings: GlobalSettings; 
  setGlobalSettings: Dispatch<SetStateAction<GlobalSettings>>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
  initialSettings: GlobalSettings; 
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children, initialSettings }) => {
  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>(initialSettings);

  return (
    <SettingsContext.Provider value={{ globalSettings, setGlobalSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
