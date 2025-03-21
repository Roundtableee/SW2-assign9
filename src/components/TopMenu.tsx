'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';

const TopMenu: React.FC = () => {
  // ดึง session จาก NextAuth
  const { data: session } = useSession();

  // ตรวจสอบว่ามี token อยู่ใน session.user หรือไม่
  const isLoggedIn = !!session?.user?.token;

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#ddd',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '4px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Menu Item</span>
          <Link href="/booking">
            <span style={{ fontWeight: 'bold', cursor: 'pointer' }}>
              Booking
            </span>
          </Link>
          {/* หากยังไม่ล็อกอิน ให้ปุ่ม Sign In นำทางไปที่ URL ที่กำหนด */}
          {!isLoggedIn && (
            <Link href="/api/auth/signin">
              <span style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                Sign In
              </span>
            </Link>
          )}
          {/* หากล็อกอินแล้ว ให้แสดงปุ่ม Sign Out */}
          {isLoggedIn && (
            <button
              onClick={() => signOut()}
              style={{
                fontWeight: 'bold',
                cursor: 'pointer',
                border: 'none',
                backgroundColor: 'transparent',
              }}
            >
              Sign Out
            </button>
          )}
        </div>
        <Image
          src="/img/logo.png" // เปลี่ยนตาม path ของโลโก้จริง
          alt="Logo"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
};

export default TopMenu;
