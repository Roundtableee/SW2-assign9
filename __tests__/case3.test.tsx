import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react'
import { Session } from 'next-auth'            // <-- import type
import Page from '@/app/booking/page'

jest.mock("next-auth", () => {
  const originalModule = jest.requireActual('next-auth');
  
  return {
    __esModule: true,
    ...originalModule,
    // Mock getServerSession ให้คืนค่าเป็น Session
    getServerSession: jest.fn(() => {
      const resultSession: Session = {
        expires: new Date(Date.now() + 2 * 86400).toISOString(),
        user: { name: "Alice", token: "xxxxxxxxxxxxxxxxx" } as any
      };
      return resultSession;
    }),
  };
});

// mock getUserProfile อีกส่วน
jest.mock('../src/libs/getUserProfile', () => (token: string) => {
  return Promise.resolve({
    success: true,
    data: {
      _id: "67d2b3071e59d13be2c033a6",
      name: "Alice",
      email: "alice@eventplanner.com",
      tel: "0854439954",
      role: "user",
      createdAt: "2025-03-13T10:27:19.226+00:00",
      __v: 0
    },
  });
});

describe('Banner', () => {
  it('Banner display correct session data', async () => {
    const page = await Page();
    render(page);
    await waitFor(() => {
      const usernames = screen.getAllByText(/Alice/i);
      expect(usernames.length).toBeGreaterThan(0);
    });
  });
});
