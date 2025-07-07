import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtected = createRouteMatcher([
  "/", // landing page
  "/upcoming(.*)",
  "/previous(.*)",
  "/recordings(.*)",
  "/personal-room(.*)",
  "/meeting(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtected(req)) {
    await auth.protect(); // <-- await stops the unhandledRejection
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static assets
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
