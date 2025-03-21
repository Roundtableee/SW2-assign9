'use client';
import React, { Suspense } from 'react';

import Banner from '../components/Banner';

import VenueCatalog from '@/components/VenueCatalog';
import getVenues from '@/libs/getVenues';
export default function HomePage() {
  return (
    <div>
      <Banner />
      
      <Suspense fallback={<p>Loading...</p>}>
        <VenueCatalog venuesJson={getVenues()} />
      </Suspense>
    </div>
  );
}
