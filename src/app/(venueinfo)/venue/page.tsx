// src/app/(venueinfo)/venue/page.tsx
'use client';

import React, { Suspense } from 'react';
import { LinearProgress } from '@mui/material';
import getVenues from '@/libs/getVenues'; // default import
import VenueCatalog from '@/components/VenueCatalog';

export default function VenuePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Venue List</h1>
      <Suspense fallback={<LinearProgress />}>
        <VenueCatalog venuesJson={getVenues()} />
      </Suspense>
    </div>
  );
}
