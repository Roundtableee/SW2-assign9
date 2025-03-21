// src/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    token: string;
  }
  interface Session {
    user: User;
  }
  interface User extends DefaultUser {
    // Note: NextAuth กำหนดให้ต้องมี 'id' เสมอ
   

    // ฟิลด์เสริมอื่น ๆ เช่น role, token, etc.
    role?: string;
    token?: string;
    // ถ้าคุณใช้ _id ใน MongoDB ก็อาจใส่ลงไปได้ด้วย
    _id?: string;
  }
}
