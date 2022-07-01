import { useEffect, useState } from "react";
import styles from "./Quotes.module.css";
import Quote from "../components/Quote";
import TweetQuote from "./TweetQuote";

const getRandomItem = (arrLength: number) => {
  return Math.floor(Math.random() * arrLength);
};

const Quotes = ({ quotesData }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    setSelectedItem(getRandomItem(quotesData.length));
  }, [quotesData.length]);

  return (
    <div className={styles.SwQuotes__container}>
      <h1 className={styles.SwQuotes__title}>Star Wars Quotes</h1>

      {selectedItem !== null ? (
        <Quote {...quotesData[selectedItem]} />
      ) : (
        "Loading.."
      )}

      <button
        className={styles.SwQuotes__new}
        onClick={() => {
          let randomItem = getRandomItem(quotesData.length);
          setSelectedItem(
            randomItem !== selectedItem ? randomItem : randomItem + 1
          );
        }}
      >
        New quote
      </button>

      <footer className={styles.SwQuotes__footer}>
        {selectedItem && <TweetQuote {...quotesData[selectedItem]} />}
      </footer>
    </div>
  );
};

export default Quotes;
