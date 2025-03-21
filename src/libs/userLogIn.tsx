// src/libs/userLogIn.tsx
export interface UserLoginResponse {
  success: boolean;
  token?: string;
  msg?: string;
}

export default async function userLogIn(
  userEmail: string,
  userPassword: string
): Promise<UserLoginResponse> {
  const res = await fetch('https://a08-venue-explorer-backend-2.vercel.app/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });

  if (!res.ok) {
    // ตรวจสอบกรณี error เช่น 404, 401, 500
    throw new Error(`Login request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  // json ตัวอย่าง: { "success": true, "token": "..." }
  return json;
}
