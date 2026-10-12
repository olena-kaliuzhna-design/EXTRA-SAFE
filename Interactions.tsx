'use client';
import { useEffect } from 'react';
import { initInteractions } from '@/lib/interactions';

export function Interactions() {
  useEffect(() => initInteractions(), []);
  return null;
}
