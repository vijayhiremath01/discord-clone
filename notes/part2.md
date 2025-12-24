Clerk is used for authentication and user management. Instead of building auth from scratch, we follow Clerk’s official documentation to ensure correct and secure implementation.

```txt
https://clerk.com/docs
```

Authentication routes are organized using route groups. Inside the `(auth)` group, Clerk requires catch-all routes for sign-in and sign-up so it can internally handle redirects, callbacks, and different auth states.

```txt
app/
  (auth)/
    sign-in/
      [[...sign-in]]/
        page.tsx
    sign-up/
      [[...sign-up]]/
        page.tsx
```

The `[[...sign-in]]` syntax is a catch-all route. It allows Clerk to manage multiple sub-routes under sign-in and sign-up while keeping the URL structure clean.

To protect actual application pages, Clerk middleware is used. Middleware runs before rendering a page or API route and is responsible for checking authentication.

A `proxy.ts` (middleware) file is created to define which routes are public and which are protected.

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
```

The route matcher skips Next.js internal files and static assets while always running middleware for API routes. This ensures authentication checks are applied only where needed.

The middleware file is then referenced in `next.config.js` to ensure proper behavior during development and production.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      secure: false,
    },
  },
};

module.exports = nextConfig;
```

This setup ensures that authentication is enforced globally, public auth pages remain accessible, and protected pages are accessible only to authenticated users.
