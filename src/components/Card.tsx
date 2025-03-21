'use client';

import React from 'react';
import Link from 'next/link';

interface CardProps {
  vid: string;
  name: string;
  address: string;
  district: string;
  picture: string;
  // เพิ่มฟิลด์อื่นตามต้องการ เช่น province, postalcode
}

export default function Card({
  vid,
  name,
  address,
  district,
  picture,
}: CardProps) {
  return (
    <Link href={`/venue/${vid}`} style={{ textDecoration: 'none' }}>
      <div
        className="rounded-lg shadow-lg bg-white p-4 max-w-sm cursor-pointer"
        style={{ width: '300px' }}
      >
        {/* ใช้ฟิลด์ picture จาก API */}
        <img
          alt={name}
          src={picture}
          className="w-full h-40 object-cover rounded"
        />
        <h2 className="text-xl font-bold mt-2 text-black">{name}</h2>
        <p>{address}, {district}</p>
      </div>
    </Link>
  );
}
