// src/libs/getVenues.ts

import { VenueJson } from '../../interface';

// แก้ให้เป็น default export
export default async function getVenues(): Promise<VenueJson> {
  // ใส่ delay 300 ms
  await new Promise((resolve) => setTimeout(resolve, 300));

  const res = await fetch('https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues');
  if (!res.ok) {
    throw new Error('Failed to fetch venues');
  }
  return res.json(); // { success, count, data: VenueItem[] }
}
