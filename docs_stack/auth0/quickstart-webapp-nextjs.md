This guide demonstrates how to integrate Auth0 with any new or existing Next.js application using the Auth0 Next.js v4 SDK.

Copy page

Use AI to integrate Auth0

If you use an AI coding assistant like Claude Code, Cursor, or GitHub Copilot, you can add Auth0 authentication automatically in minutes using agent skills.**Install:**

```
npx skills add auth0/agent-skills --skill auth0-quickstart --skill auth0-nextjs
```

**Then ask your AI assistant:**

```
Add Auth0 authentication to my Next.js app
```

Your AI assistant will automatically create your Auth0 application, fetch credentials, install `@auth0/nextjs-auth0`, create API routes, and set up environment variables. Full agent skills documentation →

**Prerequisites:** Before you begin, ensure you have the following installed:
* **Node.js** 20 LTS or newer
* **npm** 10+ or **yarn** 1.22+ or **pnpm** 8+

Verify installation: `node --version && npm --version`

## ​

Get Started

This quickstart demonstrates how to add Auth0 authentication to a Next.js 16 application. You’ll build a full-stack web application with server-side rendering, secure login functionality, and protected routes using the Auth0 Next.js SDK.

1

Create a new project

Create a new Next.js project for this Quickstart

```
npx create-next-app@latest auth0-nextjs --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --yes
```

Open the project

```
cd auth0-nextjs
```

2

Install the Auth0 Next.js SDK

```
npm install @auth0/nextjs-auth0
```

3

Create project files

Create all necessary directories and files for Auth0 integration:

Mac/Linux

Windows

```
mkdir -p src/lib src/components && touch src/lib/auth0.ts src/proxy.ts src/components/LoginButton.tsx src/components/LogoutButton.tsx src/components/Profile.tsx
```

4

Setup your Auth0 App

Next up, you need to create a new app on your Auth0 tenant and add the environment variables to your project.You have three options to set up your Auth0 app: use the Quick Setup tool (recommended), run a CLI command, or configure manually via the Dashboard:

* Quick Setup (recommended) 
* CLI 
* Dashboard 

Create an Auth0 App and copy the pre-filled `.env` file with the right configuration values.

Run the following command in your project’s root directory to create an Auth0 app and generate a `.env.local` file:

Mac

Windows

```
# Install Auth0 CLI (if not already installed)
brew tap auth0/auth0-cli && brew install auth0

# Set up Auth0 app and generate .env.local file
auth0 qs setup --type nextjs -n "My App" -p 3000
```

This command will:
1. Check if you’re authenticated (and prompt for login if needed)
2. Create an Auth0 Regular Web Application configured for `http://localhost:3000`
3. Generate a `.env.local` file with `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET`, `AUTH0_SECRET`, and `APP_BASE_URL`

Create a `.env.local` file on your project’s root directory:

.env.local

```
AUTH0_DOMAIN=YOUR_AUTH0_APP_DOMAIN
AUTH0_CLIENT_ID=YOUR_AUTH0_APP_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_AUTH0_APP_CLIENT_SECRET
AUTH0_SECRET=YOUR_LONG_RANDOM_SECRET_HERE
APP_BASE_URL=http://localhost:3000
```

**Generate a secure AUTH0_SECRET:**

```
openssl rand -hex 32
```

Copy the output and replace `YOUR_LONG_RANDOM_SECRET_HERE` in `.env.local`. This must be exactly 64 hexadecimal characters.Then configure your Auth0 application:
1. Head to the Auth0 Dashboard
2. Click on **Applications**>**Applications**>**Create Application**
3. In the popup, enter a name for your app, select `Regular Web Application` as the app type and click **Create**
4. Switch to the **Settings** tab on the Application Details page
5. Replace `YOUR_AUTH0_APP_DOMAIN`, `YOUR_AUTH0_APP_CLIENT_ID`, and `YOUR_AUTH0_APP_CLIENT_SECRET` in the `.env.local` file with the **Domain**, **Client ID**, and **Client Secret** values from the dashboard

**Critical:** If you change the `AUTH0_SECRET` after the app has been running, you must clear your browser cookies for localhost. Old session cookies encrypted with the previous secret will cause a `JWEDecryptionFailed` error.

Finally, on the **Settings** tab of your Application Details page, configure the following URLs:**Allowed Callback URLs:**

```
http://localhost:3000/auth/callback
```

**Allowed Logout URLs:**

```
http://localhost:3000
```

**Allowed Web Origins:**

```
http://localhost:3000
```

**Allowed Callback URLs** are a critical security measure to ensure users are safely returned to your application after authentication. Without a matching URL, the login process will fail, and users will be blocked by an Auth0 error page instead of accessing your app.**Allowed Logout URLs** are essential for providing a seamless user experience upon signing out. Without a matching URL, users will not be redirected back to your application after logout and will instead be left on a generic Auth0 page.**Allowed Web Origins** is critical for silent authentication. Without it, users will be logged out when they refresh the page or return to your app later.

5

Create the Auth0 configuration

Add the Auth0 client code to `src/lib/auth0.ts`:

src/lib/auth0.ts

```
import { Auth0Client } from '@auth0/nextjs-auth0/server';

export const auth0 = new Auth0Client();
```

6

Add Proxy

Add the proxy code to `src/proxy.ts`:

src/proxy.ts

```
import { auth0 } from "./lib/auth0";

export async function proxy(request: Request) {
 return await auth0.middleware(request);
}

export const config = {
 matcher: [
 /*
 * Match all request paths except for the ones starting with:
 * - _next/static (static files)
 * - _next/image (image optimization files)
 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
 */
 "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
 ],
};
```

See all 17 lines

Since we’re using a `src/` directory, the `proxy.ts` file is created inside `src/`. If you’re not using a `src/` directory, create it in the project root instead.

This proxy automatically mounts the following authentication routes:
* `/auth/login` - Login route
* `/auth/logout` - Logout route
* `/auth/callback` - Callback route
* `/auth/profile` - User profile route
* `/auth/access-token` - Access token route
* `/auth/backchannel-logout` - Backchannel logout route

7

Create Login, Logout and Profile Components

Add the component code to the files created in Step 3:

8

Update your main page

Replace `src/app/page.tsx` with:

src/app/page.tsx

```
import { auth0 } from "@/lib/auth0";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import Profile from "@/components/Profile";

export default async function Home() {
 const session = await auth0.getSession();
 const user = session?.user;

 return (
 <main className="min-h-screen bg-[#060812] flex items-center justify-center px-6 py-12 relative overflow-hidden">
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[300px] md:h-[450px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[200px] md:h-[300px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

 <div className="relative w-full max-w-sm md:max-w-md">
 <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-3xl shadow-2xl shadow-black/60 overflow-hidden">
 <div className="h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

 <div className="px-8 md:px-10 pt-9 md:pt-10 pb-9 md:pb-10 flex flex-col items-center gap-6 md:gap-7">
 <img
 src="https://cdn.auth0.com/quantum-assets/dist/latest/logos/auth0/auth0-lockup-en-ondark.png"
 alt="Auth0"
 className="h-6 md:h-7"
 />

 <div className="text-center">
 <h1 className="text-xl md:text-2xl font-semibold text-white tracking-[-0.02em]">
 Next.js + Auth0
 </h1>
 <p className="text-slate-500 text-sm md:text-[15px] mt-1.5">
 Secure, simple authentication
 </p>
 </div>

 <div className="w-full h-px bg-white/[0.06]" />

 {user ? (
 <div className="flex flex-col items-center gap-4 w-full">
 <Profile />
 <LogoutButton />
 </div>
 ) : (
 <div className="flex flex-col items-center gap-5 w-full">
 <p className="text-slate-400 text-sm md:text-[15px] text-center leading-relaxed tracking-[-0.01em]">
 Sign in to access your account and protected content.
 </p>
 <LoginButton />
 </div>
 )}
 </div>
 </div>
 </div>
 </main>
 );
}
```

See all 55 lines

9

Update layout with Auth0Provider

Update `src/app/layout.tsx` to load the Inter font and wrap your app with `Auth0Provider`:

src/app/layout.tsx

```
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";
import "./globals.css";

const inter = Inter({
 subsets: ["latin"],
 weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
 title: "Auth0 Next.js App",
 description: "Next.js app with Auth0 authentication",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <html lang="en">
 <body className={inter.className}>
 <Auth0Provider>{children}</Auth0Provider>
 </body>
 </html>
 );
}
```

In v4, the Auth0Provider is optional. You only need it if you want to pass an initial user during server rendering to be available to the useUser() hook.

10

Configure Tailwind CSS

Replace the contents of `src/app/globals.css` with:

src/app/globals.css

```
@import "tailwindcss";
```

11

Run your app

```
npm run dev
```

Your app will be available at http://localhost:3000. The Auth0 SDK v4 automatically mounts authentication routes at `/auth/*` (not `/api/auth/*` like in v3).If port 3000 is in use, run: `npm run dev -- --port 3001` and update your Auth0 app’s callback URLs to `http://localhost:3001`

**Checkpoint**You should now have a fully functional Auth0 login page running on your localhost

* * *

## ​

Troubleshooting

JWEDecryptionFailed Error

If you see a `JWEDecryptionFailed: decryption operation failed` error, this is caused by either an invalid `AUTH0_SECRET` or an old session cookie encrypted with a different secret.**Solution:**
1. Generate a new secret using:

```
openssl rand -hex 32
```

1. Update your `.env.local` file:

```
AUTH0_SECRET=<your-new-64-character-hex-string>
```

1. **Clear your browser cookies** for `localhost:3000`:
 * Chrome/Edge: Press `F12` → Application tab → Cookies → Delete all cookies for localhost
 * Firefox: Press `F12` → Storage tab → Cookies → Delete all cookies for localhost
 * Safari: Develop menu → Show Web Inspector → Storage tab → Cookies → Delete all

2. Restart your dev server:

```
npm run dev
```

The secret must be exactly 32 bytes (64 hexadecimal characters). The error occurs when the app tries to decrypt an existing session cookie that was encrypted with a different secret.

404 Error on /auth/login

If clicking login takes you to a 404 page, check these common issues:
1. **Proxy location:** Ensure `src/proxy.ts` exists in the correct location
2. **Proxy code:** Verify the proxy matches the code in Step 6
3. **Restart server:** After creating the proxy file, restart the dev server
4. **Check imports:** Make sure `import { auth0 } from "./lib/auth0"` path is correct

Module Not Found Errors

If you see “Cannot find module ’@/components/LoginButton’” or similar errors:
1. **Verify files exist:** Check that all files from Step 3 were created
2. **Check paths:** Ensure components are in `src/components/` directory
3. **Restart TypeScript:** Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows) and run “TypeScript: Restart TS Server”
4. **Verify imports:** Make sure you’re using `@/components/*` (not `~/components/*`)

* * *

## ​

Advanced Usage

Important v4 Changes

This quickstart uses **Auth0 Next.js SDK v4**, which has significant changes from v3:
* **No dynamic route handlers needed** - Authentication routes are auto-mounted by the proxy
* **Simplified client setup** - `new Auth0Client()` reads environment variables automatically
* **New route paths** - Routes are at `/auth/*` instead of `/api/auth/*`
* **Required proxy** - All authentication functionality goes through `proxy.ts`
* **Use `<a>` tags** - Navigation must use `<a href="/auth/login">` instead of buttons with onClick

### ​

Authentication Routes

The SDK automatically mounts these routes via the proxy:

| Route | Purpose |
| --- | --- |
| `/auth/login` | Initiate login |
| `/auth/logout` | Logout user |
| `/auth/callback` | Handle Auth0 callback |
| `/auth/profile` | Get user profile |
| `/auth/access-token` | Get access token |
| `/auth/backchannel-logout` | Handle backchannel logout |

If you’re experiencing 404 errors on these routes, ensure that:
1. The `proxy.ts` file is in the correct location (project root, or inside `src/` if using a `src/` directory)
2. The proxy is properly configured with the matcher pattern shown in Step 6
3. The development server was restarted after creating the proxy file

Server-Side Authentication

The Auth0 Next.js SDK v4 supports both App Router and Pages Router patterns. Here are some common server-side patterns:

* App Router - Server Component 
* App Router - API Route 
* Pages Router - Page 

app/protected/page.tsx

```
import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
 const session = await auth0.getSession();

 if (!session) {
 redirect('/auth/login');
 }

 return (
 <div>
 <h1>Protected Content</h1>
 <p>Welcome, {session.user.name}!</p>
 </div>
 );
}
```

app/api/protected/route.ts

```
import { auth0 } from "@/lib/auth0";
import { NextResponse } from "next/server";

export async function GET() {
 const session = await auth0.getSession();

 if (!session) {
 return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
 }

 return NextResponse.json({
 message: "This is a protected API route",
 user: session.user
 });
}
```

pages/protected.tsx

```
import { auth0 } from "@/lib/auth0";
import { GetServerSideProps } from "next";

export default function ProtectedPage({ user }: { user: any }) {
 return (
 <div>
 <h1>Protected Content</h1>
 <p>Welcome, {user.name}!</p>
 </div>
 );
}

export const getServerSideProps: GetServerSideProps = auth0.withPageAuthRequired();
```

Client-Side Authentication

For client-side authentication state, use the `useUser` hook:

components/UserProfile.tsx

```
"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function UserProfile() {
 const { user, error, isLoading } = useUser();

 if (isLoading) return <div>Loading...</div>;
 if (error) return <div>Error: {error.message}</div>;
 if (!user) return <div>Not logged in</div>;

 return (
 <div>
 <h2>{user.name}</h2>
 <p>{user.email}</p>
 <img src={user.picture} alt="Profile" referrerPolicy="no-referrer" />
 </div>
 );
}
```

Protecting API Routes

For API route protection, use the `withApiAuthRequired` method:

app/api/protected/route.ts

```
import { auth0 } from "@/lib/auth0";

export const GET = auth0.withApiAuthRequired(async function handler() {
 const session = await auth0.getSession();

 return Response.json({
 message: "This is a protected API route",
 user: session?.user
 });
});
```

Was this page helpful?

Yes No

Add Login to Your Svelte Application PreviousAdd Login to Your Nuxt.js Application Next

⌘I

Auth0 Docs home page

x-twittergithublinkedin

Developers

Developer HubCode Samples & GuidesZero Index NewsletterBlogChangelog

Docs

DocumentationQuickstartsAPIsSDK LibrariesLearnIntro to IAM (CIAM)ReportsWebinars

Support Center

CommunityHelpFAQsAuth0

Company

Our CustomersCompliancePartnersCareersOkta + Auth0About us

Assistant

Responses are generated using AI and may contain mistakes.