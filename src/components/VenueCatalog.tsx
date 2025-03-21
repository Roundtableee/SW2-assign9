import React from 'react';
import { VenueJson } from '../../interface';
import Card from './Card';

// รับ prop เป็น Promise<VenueJson>
export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>;
}) {
  // รอให้ Promise resolve
  const data = await venuesJson; // data: VenueJson

  // data.data => VenueItem[]
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-start' }}>
      {data.data.map((venue) => (
        <Card
          key={venue.id}
          vid={venue.id} // หรือ venue.vid ก็ได้ ถ้า API มี
          name={venue.name}
          address={venue.address}
          district={venue.district}
          picture={venue.picture}
        />
      ))}
    </div>
  );
}
