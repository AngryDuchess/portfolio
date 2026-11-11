import localFont from "next/font/local";
import "./globals.css";
import Navbar from '../components/navbar.jsx'

const gtwalsheim = localFont({
  src: [
    {
      path: "./fonts/GTWalsheimPro-Regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/GTWalsheimPro-Bold.woff",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/GTWalsheimPro-Medium.woff",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/GTWalsheimPro-UltraBold.woff",
      weight: "800",
      style: "normal"
    },
  ],
  variable: "--font-gtwalsheim"
})
const siteUrl = "https://www.meedah.me";
const siteName = "Hamida Mahama";
const siteDescription =
  "Hamida Mahama is a design engineer and software developer creating polished, functional products through design and code. Product design, frontend development, and case studies.";

const sameAs = [
  "https://www.linkedin.com/in/hamidamahama/",
  "https://github.com/AngryDuchess",
  "https://x.com/hamida_mahama",
  "https://hamidas-portfolio.webflow.io",
];

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hamida Mahama | Design Engineer & Software Developer",
    template: "%s | Hamida Mahama",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Hamida Mahama", url: siteUrl }],
  creator: "Hamida Mahama",
  keywords: [
    "Hamida Mahama",
    "Mahama Hamida",
    "Hamida",
    "meedah",
    "design engineer",
    "product designer",
    "frontend developer",
    "software developer",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Hamida Mahama | Design Engineer & Software Developer",
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamida Mahama | Design Engineer & Software Developer",
    description: siteDescription,
    creator: "@hamida_mahama",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Hamida Mahama",
      alternateName: ["Mahama Hamida", "Meedah"],
      url: siteUrl,
      jobTitle: "Design Engineer & Software Developer",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Chungbuk National University",
      },
      sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gtwalsheim.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="background-blur blur-3xl opacity-80"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
