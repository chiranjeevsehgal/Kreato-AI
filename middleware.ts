import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, req) => {
    // if (isProtectedRoute(req)) auth().protect();
    
    if (isProtectedRoute(req)) {
      const { userId } = auth();
      if (!userId) {
          const signInUrl = new URL('/sign-in', req.url);
          signInUrl.searchParams.set('redirect_url', req.url);
          signInUrl.searchParams.set('unauthorized_access', 'true');
          return NextResponse.redirect(signInUrl);
      }
      auth().protect();
  }
  });
  

const isProtectedRoute = createRouteMatcher([
    '/dashboard/(.+)',
    // '',
    // '/'
 
  ]);
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};