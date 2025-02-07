import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { i18n } from "@/root/i18n-config"

// fore more, info check: https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/middleware.ts

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // check if there is any supported locale in the pathname
  const isPathnameIsMissingLocale = i18n.locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)

  // redirect if there is no locale
  if (isPathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/${i18n.defaultLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url))
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico|opengraph-image.jpg|sitemap.xml|robots.txt).*)"]
}
