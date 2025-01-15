import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

// import { auth0 } from '@/lib/auth0';

const intlMiddleware = createMiddleware(routing);

const protectedRoutes: string[] = [`/en/dashboard`, `/vi/dashboard`];
const publicRoutes = [`/en`, `/vi`, '/'];

export default async function middleware(request: NextRequest) {
  const path: string = request.nextUrl.pathname;

  // const authResponse = await auth0.middleware(request);
  //
  // // if path starts with /auth, let the auth middleware handle it
  // if (request.nextUrl.pathname.startsWith('/auth')) {
  //   return authResponse;
  // }
  // const session = await auth0.getSession(request as any);
  // console.log({ session });

  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
  const isPublicRoute = publicRoutes.includes(path);

  const tokenJwt = (await cookies()).get('wReflect')?.value || '';

  try {
    const secretKey = new TextEncoder().encode('wReflect');
    await jwtVerify(tokenJwt, secretKey);

    if (isPublicRoute) {
      const dashboardUrl = new URL('/dashboard/teams', request.url);
      return NextResponse.redirect(dashboardUrl);
    } else {
      // await = getClient().query()
      console.log('');
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
