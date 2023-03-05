import { ReactNode } from "react";
import { GlobalProvider } from "@/contexts/Global";
import Head from "next/head";
import Script from "next/script";

import "./globals.css";

export const metadata = {
  title: "Graita Sukma Febriansyah Triwildan Azmi",
  description:
    "Graita Sukma Febriansyah Triwildan Azmi, a full-stack developer from Indonesia",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="bg-main text-snow"
      style={{ scrollBehavior: "smooth" }}
      id="theme"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-D39WFJ8Z2L');
            `,
          }}
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-D39WFJ8Z2L`}
      />
      <GlobalProvider>
        <body>{children}</body>
      </GlobalProvider>
    </html>
  );
}
