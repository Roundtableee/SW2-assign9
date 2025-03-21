import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import userLogIn from '@/libs/userLogIn';
import getUserProfile from '@/libs/getUserProfile';
import type { NextAuthOptions } from 'next-auth';
export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          userEmail: { label: 'Email', type: 'text' },
          userPassword: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          if (!credentials) return null;
  
          // ล็อกอินผ่านฟังก์ชัน custom เช่น userLogIn
          const loginRes = await userLogIn(credentials.userEmail, credentials.userPassword);
          if (!loginRes.success || !loginRes.token) {
            return null;
          }
  
          // ดึงข้อมูลโปรไฟล์
          const profileRes = await getUserProfile(loginRes.token);
          if (!profileRes.success || !profileRes.data) {
            return null;
          }
  
          // return object ที่มี 'id' เสมอ
          return {
            id: profileRes.data._id, // NextAuth ต้องการ "id"
            name: profileRes.data.name,
            email: profileRes.data.email,
            role: profileRes.data.role,
            token: loginRes.token
          };
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.name = user.name;
          token.email = user.email;
          token.role = user.role;
          token.token = user.token;
        }
        return token;
      },
      async session({ session, token }) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
        session.user.token = token.token as string;
        return session;
      },
    },
    session: {
      strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
  };