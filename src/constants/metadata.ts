import { Metadata } from "next";

export const siteMetadata = {
  title: "Hafiz Abdullah | AI/ML Engineer & CS Student",
  description: "BS Computer Science student focused on AI/ML, deep learning, and cybersecurity with hands-on healthcare prediction projects using Python, Scikit-learn, TensorFlow/Keras, Pandas, NumPy, and OpenCV.",
  url: "https://your-domain.com", // To be updated
  ogImage: "/images/profile.png",
  twitterHandle: "@yourhandle", // To be updated
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: "Hafiz Abdullah - Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
    creator: siteMetadata.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
