'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import DateReserve from '@/components/DateReserve';
import { SessionProvider, useSession } from 'next-auth/react';
import getUserProfile from '@/libs/getUserProfile';

function BookingPageContent() {
  // ใช้ useSession() เพื่อเช็คว่าล็อกอินหรือยัง
  const { data: session } = useSession();
  // เก็บสถานที่ที่ user เลือก
  const [venue, setVenue] = useState('');
  // เก็บข้อมูลโปรไฟล์ user
  const [profile, setProfile] = useState<any>(null);

  // เรียกใช้ useEffect เพื่อดึง profile หากมี token อยู่ใน session.user
  useEffect(() => {
    if (session?.user?.token) {
      getUserProfile(session.user.token).then((res) => {
        if (res.success) {
          setProfile(res.data);
        }
      });
    }
  }, [session]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Form submitted! Venue = ${venue}`);
  };

  return (
    <div className="bg-white min-h-screen">
      <Box sx={{ p: 4 }}>
        {/* ถ้ายังไม่มี token ใน session.user ให้แสดงข้อความให้ล็อกอินก่อน */}
        {!session?.user?.token ? (
          <p>Please sign in first.</p>
        ) : (
          <>
            {/* แสดงข้อมูลโปรไฟล์ user */}
            {profile ? (
              <div
                style={{
                  marginBottom: '20px',
                  border: '1px solid #ccc',
                  padding: '10px',
                  color: '#000', // ใช้ฟ้อนต์สีดำ
                }}
              >
                <p>Name: {profile.name}</p>
                <p>Email: {profile.email}</p>
                <p>Tel: {profile.tel}</p>
                <p>
                  Member Since:{' '}
                  {new Date(profile.createdAt).toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Loading user profile...</p>
            )}

            {/* ส่วนฟอร์ม Booking */}
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal">
                <TextField
                  variant="standard"
                  name="Name-Lastname"
                  label="Name-Lastname"
                />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <TextField
                  variant="standard"
                  name="Contact-Number"
                  label="Contact-Number"
                />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel id="venue-label">Venue</InputLabel>
                <Select
                  variant="standard"
                  labelId="venue-label"
                  id="venue"
                  value={venue}
                  label="Venue"
                  onChange={(e) => setVenue(e.target.value)}
                >
                  <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                  <MenuItem value="Spark">Spark Space</MenuItem>
                  <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <DateReserve />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  name="Book Venue"
                >
                  Book Venue
                </Button>
              </FormControl>
            </form>
          </>
        )}
      </Box>
    </div>
  );
}

// แก้ไขโดยห่อหุ้ม BookingPageContent ด้วย SessionProvider
export default function BookingPage() {
  return (
    <SessionProvider>
      <BookingPageContent />
    </SessionProvider>
  );
}
