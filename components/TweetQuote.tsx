import styles from "./TweetQuote.module.css";
import type Quote from "./Quote";

const TweetQuote = ({ text, author, source }: Quote) => {
  const tweetLink = `https://twitter.com/intent/tweet?text=${text} by ${author} on ${source}`;

  return (
    <a
      className={styles.SwQuotes__tweet}
      href={tweetLink}
      target="_blank"
      rel="noreferrer"
    >
      Tweet this quote.
    </a>
  );
};

export default TweetQuote;
