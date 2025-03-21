'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react'; // <-- import useSession
import styles from './banner.module.css';

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ใช้ useSession() เพื่อดูว่ามี user login ไหม
  const { data: session } = useSession();
  // สมมติว่า user object ใน session มี field "name"
  const userName = session?.user?.name;

  const images = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg',
  ];

  const handleBannerClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={styles.banner} onClick={handleBannerClick}>
      {/* ถ้ามี userName => แสดง Welcome ... ที่มุมขวาบน */}
      {userName && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '20px',
            color: '#fff',
            fontWeight: 'bold',
          }}
        >
          Welcome {userName}
        </div>
      )}

      <img
        src={images[currentIndex]}
        alt="Banner"
        className={styles.bannerImage}
      />

      <div className={styles.overlay}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          where every event finds its venue
        </h1>
        <p style={{ fontSize: '1.1rem', fontWeight: 500, maxWidth: '800px' }}>
          Finding the perfect venue has never been easier. Whether it’s a wedding,
          corporate event, or private party, we connect people to the perfect place.
        </p>
      </div>

      {/* Button at bottom-right, linking to /venue */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
        }}
      >
        <Link href="/venue" style={{ textDecoration: 'none' }}>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Select Venue
          </button>
        </Link>
      </div>
    </div>
  );
}
