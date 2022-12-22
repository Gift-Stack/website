import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

const Blog = () => {
  return (
    <section id="blog" className="pt-28">
      <div className="my-4">
        {/* <h1 className="text-center text-4xl mb-4 font-bold">The Web SDK</h1> */}
        <h1 className="text-center text-4xl mb-4 font-bold">
          Projects Highlight
        </h1>
        <h3 className="text-greyish-300 text-base text-center">
          Next.js has all the tools you need to make the Web. Faster.
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <a
          href="https://rocketglobal.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Rocket Global &rarr;</h2>
          <p className="!text-sm">
            Rocket Global Exchange is a next-generation multifunctional hybrid
            Cryptocurrency Exchange, High Yield Protocol and NFT Marketplace.
          </p>
        </a>

        <a
          href="https://cryptopumps.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Cryptopumps &rarr;</h2>
          <p className="!text-sm">
            CryptoPumps (CP) is Lil Pump&apos;s Official Generative NFT Drop
            which gives you also get access to the Lil Pump metaverse portal
          </p>
        </a>

        <a
          href="https://www.socialstack.co/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Socialstack &rarr;</h2>
          <p className="!text-sm">
            Socialstack is the social token platform that enables community
            leaders and members to easily co-create value, while accomplishing
            impact missions
          </p>
        </a>

        <a
          href="https://www.techcoin.info/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Techcoin &rarr;</h2>
          <p className="!text-sm">
            Techcoin&apos;s mission is to provide a revolutionized way of doing
            business. We want to become the fastest, safest and easiest way to
            transact online.
          </p>
        </a>
        <a
          href="https://loozr.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Loozr &rarr;</h2>
          <p className="!text-sm">
            Loozr brings DeFi and trading to the music industry. It enables
            creators to tokenize their name/brand, content, and songs.
          </p>
        </a>
        <a
          href="https://dev.to/iamgifted/how-to-build-a-reusable-component-library-using-svelte-and-storybook-ch1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h2>Storybook article &rarr;</h2>
          <p className="!text-sm">
            This article gives readers an introduction to building reusable
            components using Storybook and Svelte.
          </p>
        </a>
      </div>
      <p className=" my-10 text-sm text-center">
        <strong>And more:</strong> Support for{" "}
        <a
          className="text-blueish-100 hover:underline"
          href="/docs/basic-features/environment-variables"
        >
          environment variables
        </a>
        ,{" "}
        <a
          className="text-blueish-100 hover:underline"
          href="/docs/advanced-features/preview-mode"
        >
          preview mode
        </a>
        ,{" "}
        <a
          className="text-blueish-100 hover:underline"
          href="/docs/api-reference/next/head"
        >
          custom <code className="jsx-2579755413 ">head</code> tags
        </a>
        ,{" "}
        <a
          className="text-blueish-100 hover:underline"
          href="/docs/basic-features/supported-browsers-features#polyfills"
        >
          automatic polyfills
        </a>
        , and more.
      </p>
    </section>
  );
};

export default Blog;
