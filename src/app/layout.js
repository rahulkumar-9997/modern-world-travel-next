import "./globals.css";
import { Suspense } from "react";
import { TopToBottomButton } from "@/components/TopToBottomButton/TopToBottomButton";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import Provider from "@/lib/provider";
export const metadata = {
  title: "Modern World Travel Packages for Varanasi, India, International",
  description:
    "Spend your days as close the Ganges & the ghats as you can please, you will not regret it. Take one of our Highlight Varanasi Tour Packages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-x="html" data-x-toggle="html-overflow-hidden">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/assets/modern-img/fav.png"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/vendors.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>

      <body>
        <Provider>
          <Suspense>
            <TopToBottomButton />
          </Suspense>
          <Header />
          <main>
            {children}
            <Footer />
          </main>
        </Provider>
        <script src="/assets/js/vendors.js"></script>
        {/* <script src="/assets/js/main.js"></script> */}
      </body>
    </html>
  );
}
