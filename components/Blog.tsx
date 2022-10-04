import React from "react";
import styles from "../styles/Home.module.css";

const Blog = () => {
  return (
    <section id="blog" className="pt-28">
      <div className="my-4">
        <h1 className="text-center text-4xl mb-4 font-bold">The Web SDK</h1>
        <h3 className="text-greyish-300 text-base text-center">
          Next.js has all the tools you need to make the Web. Faster.
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
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
