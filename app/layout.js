import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import FaviconLoader from "@/components/FaviconLoader";

export const metadata = {
  title: "BONO",
  description:
    "Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more.",
};

export default function RootLayout({ children }) {
  const faviconApiUrl = "https://app.bono.so/images/favicon.svg"; // here link to favicon.
  return (
    <html lang="en">
      <Head>
        <title>Bono - Your Project Title</title>
        <meta property="og:title" content="BONO" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://app.bono.so/" />
        <meta
          property="og:image"
          content="https://app.bono.so/images/main_bono_logo.png"
        />
        <meta
          property="og:description"
          content="Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more."
        />
        <meta property="og:site_name" content="BONO" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="BONO" />
        <meta
          name="twitter:description"
          content="Choose how you want to help, set up a monthly giving plan, and let us handle the rest. Visit to learn more."
        />
        <meta
          name="twitter:image"
          content="https://app.bono.so/images/main_bono_logo.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <FaviconLoader url={faviconApiUrl} />
      </Head>
      <body>
        <Navbar />
        <div className="main"></div>
        <main>{children}</main>
      </body>
    </html>
  );
}
