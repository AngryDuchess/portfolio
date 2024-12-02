import localFont from "next/font/local";
import "./globals.css";
import NavBar from '../components/NavBar.jsx'
import { CaseStudyProvider } from "@/context/case-study-context";

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
export const metadata = {
  title: "Hamida",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gtwalsheim.variable}`}
      >
        <div className="background-blur blur-3xl opacity-80"></div>
        <NavBar />
        <CaseStudyProvider>{children}</CaseStudyProvider>
      </body>
    </html>
  );
}
