import "./globals.css";
import type { Metadata } from "next";
import Layout from "@/components/layout";
import Providers from "@/components/helpers/provider";

export const metadata: Metadata = {
  title: "HomePage",
  description: "Generated by create next app",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
