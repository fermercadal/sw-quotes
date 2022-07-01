import styles from "./Quote.module.css";

type Quote = {
  text: string;
  author: string;
  source: string;
};

const Quote = ({ text, author, source }: Quote) => {
  const tweetLink = `https://twitter.com/intent/tweet?text=${text} by ${author} on ${source}`;

  return (
    <article className={styles.QuoteBox}>
      {text && (
        <p data-testid="quote-text" className={styles.QuoteBox__text}>
          {text}
        </p>
      )}

      {author && <small className={styles.QuoteBox__author}>{author}</small>}

      {source && <small className={styles.QuoteBox__source}>{source}</small>}
    </article>
  );
};

export default Quote;
