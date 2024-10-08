import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Story } from './types/Story'; 

interface StoriesContextType {
  stories: Story[];
}

const StoriesContext = createContext<StoriesContextType | undefined>(undefined);

interface StoriesProviderProps {
  children: ReactNode;
  stories: Story[];
}

export const StoriesProvider: React.FC<StoriesProviderProps> = ({ children, stories }) => {
  const [savedStories] = useState<Story[]>(stories);

  return (
    <StoriesContext.Provider value={{ 
      stories: savedStories, 
    }}>
      {children}
    </StoriesContext.Provider>
  );
};

export const useStories = () => {
  const context = useContext(StoriesContext);
  if (context === undefined) {
    throw new Error('useStories must be used within a StoriesProvider');
  }
  return context;
};
