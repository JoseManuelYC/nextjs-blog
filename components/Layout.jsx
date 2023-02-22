import styles from '../src/styles/Layout.module.css'
import utilStyles from "../src/styles/utils.module.css";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "JoseYanez";
export const siteTitle = "Mi sitio web con next.js";

export default function Layout({ children, home, title, description }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/assets/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            ></Image>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
                <Image
                  priority
                  src="/assets/1.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                ></Image>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" legacyBehavior>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <nav>
          <Link href="/">
           Inicio |
          </Link>
          <Link href="/blog">
          Blog |
          </Link>
          <Link href="/contact">
            Contacto |
           </Link>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}

Layout.defaultProps = {
  title: "Mi sitio web con Next",
  description: "Este es un sitio web para aprender con next.js",
};