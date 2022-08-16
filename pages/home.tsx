import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SimpleReport from "../components/tableau";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gig Work Mini-Game Collection</title>
        <meta name="description" content="Gig Work Mini-Game Collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SimpleReport />
      </main>
      <footer className={styles.footer}>
        UT Austin HAI LAB
      </footer>
    </div>
  );
};
export default Home;
