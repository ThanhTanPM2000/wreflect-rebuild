import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const protectedRoutes = [`/en/dashboard`, `/vi/dashboard`];
const publicRoutes = [`/en`, `/vi`, '/'];

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
  const isPublicRoute = publicRoutes.includes(path);

  const tokenJwt = (await cookies()).get('wReflect')?.value || '';

  try {
    const secretKey = new TextEncoder().encode('wReflect');
    await jwtVerify(tokenJwt, secretKey);

    if (isPublicRoute) {
      console.log('redirect');
      const dashboardUrl = new URL('/dashboard', request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  } catch (error) {
    if (isProtectedRoute) {
      const loginUrl = new URL('/', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|__nextjs_original-stack-frame|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
