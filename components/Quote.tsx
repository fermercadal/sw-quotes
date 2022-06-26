import styles from "./Quote.module.css";

type QuoteProps = {
  text: string;
  author: string;
  source: string;
};

const Quote = ({ text, author, source }: QuoteProps) => {
  const tweetLink = `https://twitter.com/intent/tweet?text=${text} by ${author} on ${source}`;

  return (
    <article className={styles.QuoteBox}>
      <p className={styles.QuoteBox__text}>{text}</p>
      <small className={styles.QuoteBox__author}>{author}</small>
      <small className={styles.QuoteBox__source}>{source}</small>

      <a
        className={styles.QuoteBox__tweet}
        href={tweetLink}
        target="_blank"
        rel="noreferrer"
      >
        Tweet this quote.
      </a>
    </article>
  );
};

export default Quote;
