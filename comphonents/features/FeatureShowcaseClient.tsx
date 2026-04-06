"use client";
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import FeatureShowcase from './feature';
import { useFeatureContext } from '@/context/FeatureContext';

export default function FeatureShowcaseClient() {
  const { selectedPillar } = useFeatureContext();

  return (
    <AnimatePresence>
      {selectedPillar && <FeatureShowcase />}
    </AnimatePresence>
  );
}
