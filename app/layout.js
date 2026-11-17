import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ReduxProvider } from "../redux/provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <head>
          {/* Google search Script */}
          <meta
            name="google-site-verification"
            content="ksMg5FxIv7hyMtEzFwvCeUyDdsqnPglDpIrgXbA-dW0"
          />
          <meta
            name="msvalidate.01"
            content="9D75438E2D694B471CF4BF6026E9B6F1"
          />
          {/* Google Analytics Script */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-DEELTW2NLH`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DEELTW2NLH', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </head>

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
