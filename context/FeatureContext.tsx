"use client";
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { PillarDataBase } from '@/comphonents/data/pillars';

interface FeatureContextType {
  selectedPillar: PillarDataBase | null;
  selectedIndex: number;
  openFeature: (pillar: PillarDataBase, index: number) => void;
  closeFeature: () => void;
}

const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

export function FeatureProvider({ children }: { children: ReactNode }) {
  const [selectedPillar, setSelectedPillar] = useState<PillarDataBase | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openFeature = (pillar: PillarDataBase, index: number = 0) => {
    setSelectedPillar(pillar);
    setSelectedIndex(index);
  };

  const closeFeature = () => {
    setSelectedPillar(null);
    setSelectedIndex(0);
  };

  return (
    <FeatureContext.Provider value={{ selectedPillar, selectedIndex, openFeature, closeFeature }}>
      {children}
    </FeatureContext.Provider>
  );
}

export function useFeatureContext() {
  const context = useContext(FeatureContext);
  if (context === undefined) {
    throw new Error('useFeatureContext must be used within a FeatureProvider');
  }
  return context;
}
