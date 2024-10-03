import { siteInfo } from "@/lib/info";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.siteUrl),
  title: {
    template: `%s | ${siteInfo.title}`,
    default: siteInfo.title,
  },
  description: siteInfo.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteInfo.title,
    images: [siteInfo.socialBanner],
  },
};
