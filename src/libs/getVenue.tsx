import { VenueItem, VenueJson } from '../../interface';

// Mock: ถ้าไม่มี API แยกสำหรับ 1 อัน
// เราจะเรียก GET /api/v1/venues ทั้งหมด แล้วหา item ตรงกับ vid
export default async function getVenue(vid: string) {
  

  const res = await fetch(`https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues/${vid}`)
  if(!res.ok){
  throw new Error('Failed to fetch venue list');
  }
  
  

  
  return await res.json();
    
  
}
