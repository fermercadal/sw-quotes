import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Quote from "../components/Quote";
import { quotesData } from "../data/quotes";

const getRandomQuote = () => {
  return quotesData[Math.floor(Math.random() * quotesData.length)];
};

const Home = () => {
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    setCurrentQuote(getRandomQuote);
  }, []);

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
        <div className={styles.SwQuotes__container}>
          <h1 className={styles.SwQuotes__title}>Star Wars Quotes</h1>

          {currentQuote ? <Quote {...currentQuote} /> : "Loading.."}

          <button
            className={styles.SwQuotes__new}
            onClick={() => setCurrentQuote(getRandomQuote)}
          >
            New quote
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
