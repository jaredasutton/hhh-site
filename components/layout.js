import Head from 'next/head';
import styles from '../styles/layout.module.scss';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Hip Hop Heads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        html {
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
