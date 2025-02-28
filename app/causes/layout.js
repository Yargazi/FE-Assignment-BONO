import Head from "next/head";

const CausesLayout = ({ children }) => {
  return (
    <>
      <title>Causes | Bono</title>
      <Head>
        <meta
          name="description"
          content="Explore various causes to support on Bono."
        />
        <meta property="og:title" content="Causes - Bono" />
        <meta
          property="og:description"
          content="Explore various causes to support on Bono. Make a difference by picking the causes that matter to you."
        />
        <meta property="og:url" content="https://app.bono.so/causes" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bono" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <div className="hide-scrollbar-vertical hide-scrollbar">{children}</div>
    </>
  );
};

export default CausesLayout;
