import { type ClassValue, clsx } from "clsx"
import type { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = "arbuilder - the new industry standard",
  description = "arbuilder is a new way to build AR experiences.For your large enterprise or small business.Our kiosks will get your business to the next level.",
  image = "/background-preview.jpg",
  icons = "/favicon.ico",
  url = "https://arbuilder.io",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  url?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: "https://arbuilder.io",
      creator: "@arbuilder",
    },
    icons,
    metadataBase: new URL("https://arbuilder.io"),
    themeColor: "#ffffff",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      }
    })
  }
}