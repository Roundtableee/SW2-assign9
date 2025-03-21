import React from 'react';
import getVenue from '@/libs/getVenue'; // ฟังก์ชัน fetch ข้อมูล 1 อัน (default export)

// โครงสร้าง props ที่ Next.js ส่งให้ Dynamic Route
interface VenueDetailPageProps {
  params: {
    vid?: string; // id ของสถานที่จัดงาน
  };
}

// หน้าเพจสำหรับ /venue/[vid]
export default async function VenueDetailPage({ params }: VenueDetailPageProps) {
  const { vid } = params;
  if (!vid) {
    return <div style={{ padding: '20px' }}>No venue ID provided.</div>;
  }

  
  const venueJson = await getVenue(vid);

  // สมมติ venueJson มี field data: { name, address, province, postalcode, dailyrate, picture, ... }
  const { data } = venueJson;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{data.name}</h1>
      <img
        src={data.picture}
        alt={data.name}
        style={{ width: '400px', height: 'auto', borderRadius: '8px' }}
      />
      <p>ที่อยู่: {data.address}</p>
      <p>จังหวัด: {data.province}</p>
      <p>รหัสไปรษณีย์: {data.postalcode}</p>
      <p>อัตราค่าเช่า: {data.dailyrate}</p>
      <p>Tel: {data.tel}</p>
    </div>
  );
}
