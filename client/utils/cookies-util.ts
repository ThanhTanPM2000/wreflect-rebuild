import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

import 'server-only';

export async function decodeCookies() {
  const cookiesValue = (await cookies()).get('wReflect');
  const secretKey = new TextEncoder().encode('wReflect');
  const decodedValue = (await jwtVerify(cookiesValue?.value || '', secretKey)).payload;
  return {
    email: decodedValue.email,
    userId: decodedValue.userId,
  };
}
