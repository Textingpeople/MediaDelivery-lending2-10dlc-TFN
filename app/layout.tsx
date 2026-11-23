import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nest Builder Finance — Employee Savings & Emergency Funds",
  description: "Nest Builder Finance helps employees build savings habits and emergency funds through their employer.",
  keywords: "employee savings program, emergency fund, savings goals, payday savings reminders, savings challenges, employee benefits",
  openGraph: {
    title: "Nest Builder Finance — Employee Savings & Emergency Funds",
    description: "Nest Builder Finance helps employees build savings habits and emergency funds through their employer.",
    siteName: "Nest Builder Finance",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [],
    shortcut: [],
    apple: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
