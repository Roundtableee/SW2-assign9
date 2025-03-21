// src/libs/getUserProfile.tsx
export interface UserProfileResponse {
    success: boolean;
    data?: {
      _id: string;
      name: string;
      email: string;
      tel: string;
      role: string;
      createdAt: string;
      __v: number;
    };
  }
  
  export default async function getUserProfile(token: string): Promise<UserProfileResponse> {
    const res = await fetch('https://a08-venue-explorer-backend-2.vercel.app/api/v1/auth/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!res.ok) {
      return { success: false };
    }
  
    const json = await res.json();
    return json; // { success: true, data: {...} }
  }
  