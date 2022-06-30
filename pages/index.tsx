import Head from "next/head";
import styles from "../styles/Home.module.css";
import Quotes from "../components/Quotes";
import { quotesData } from "../data/quotesData";

const Home = () => {
  return (
    <>
      <Head>
        <title>SW Quotes</title>
        <meta
          name="description"
          content="Random Star Wars quotes generator built with Next.js"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.SwQuotes__main}>
        <Quotes quotesData={quotesData} />
      </main>
    </>
  );
};

export default Home;
