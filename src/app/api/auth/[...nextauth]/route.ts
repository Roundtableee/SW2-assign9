// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import userLogIn from '@/libs/userLogIn';
import getUserProfile from '@/libs/getUserProfile';
import type { NextAuthOptions } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'

  
  const handler = NextAuth(authOptions);
  export { handler as GET, handler as POST };
