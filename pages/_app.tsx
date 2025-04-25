import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gift Opia - Web3 Frontend Engineer & Creative Developer</title>
        <meta
          name="description"
          content="Gift Opia (GiFTED!) is a Web3 Frontend Engineer and Creative Developer specializing in React, Next.js, Web3 development, and creative UI development."
        />
        <meta
          name="keywords"
          content="Gift Opia, Opia Gift, GiFTED!, Web3 Developer, Frontend Engineer, React Developer, Next.js Developer, Web3.js, Ethers.js, Three.js, Creative Developer"
        />
        <meta name="author" content="Gift Opia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Gift Opia - Web3 Frontend Engineer & Creative Developer"
        />
        <meta
          property="og:description"
          content="Gift Opia (GiFTED!) is a Web3 Frontend Engineer and Creative Developer specializing in React, Next.js, Web3 development, and creative UI development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iamgifted.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gift Opia - Web3 Frontend Engineer & Creative Developer"
        />
        <meta
          name="twitter:description"
          content="Gift Opia (GiFTED!) is a Web3 Frontend Engineer and Creative Developer specializing in React, Next.js, Web3 development, and creative UI development."
        />
        <link rel="canonical" href="https://iamgifted.dev" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
