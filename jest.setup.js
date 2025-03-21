import '@testing-library/jest-dom/extend-expect'
const { TextEncoder, TextDecoder } = require("util");
process.env.NEXTAUTH_URL = 'http://localhost:3000';

Object.assign(global, { TextDecoder, TextEncoder });

