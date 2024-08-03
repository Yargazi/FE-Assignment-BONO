import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sign Up - Bono</title>
        <meta
          name="description"
          content="Sign up for YourAppName to get started."
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Sign Up - YourAppName" />
        <meta
          property="og:description"
          content="Sign up for YourAppName to get started."
        />
        <meta property="og:image" content="URL-to-your-image" />
        <meta property="og:url" content="https://yourapp.com/signup" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sign Up - YourAppName" />
        <meta
          name="twitter:description"
          content="Sign up for YourAppName to get started."
        />
        <meta name="twitter:image" content="URL-to-your-image" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
