import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BootcampOutcomes – Real Job Placement Data",
  description: "Track coding bootcamp graduate employment outcomes. Real placement rates and salary data by program."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="017134b4-4138-4fcb-b7f2-eafb6f81101b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
