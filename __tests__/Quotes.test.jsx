import { render, screen, fireEvent } from '@testing-library/react'
import Quotes from '../components/Quotes'
import '@testing-library/jest-dom'
import { quotesData } from "../data/quotesData";

describe('Quotes', () => {

  it('renders a heading', () => {
    render(<Quotes quotesData={quotesData} />)

    const heading = screen.getByRole('heading', {
      name: /Star Wars Quotes/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders New quote and Tweet quote CTAs', () => {
    render(<Quotes quotesData={quotesData} />)

    const newCta = screen.getByRole('button', {
      name: /New quote/i,
    })
    const tweetCta = screen.getByRole('button', {
      name: /New quote/i,
    })

    expect(newCta).toBeInTheDocument()
    expect(tweetCta).toBeInTheDocument()
  })

  // wip
  it('renders a random item from the quotesData prop list on first load', () => {
    render(<Quotes quotesData={quotesData} />)
    
    const quoteText = screen.getByTestId('quote-text').textContent;
    const found = quotesData.find((q) => {
      return q.text === quoteText;
    });

    expect(found).toBeDefined();
  })

  it('renders a new, different quote from the list, when the CTA is clicked', () => {
    render(<Quotes quotesData={quotesData} />)
    
    const initialQuoteText = screen.getByTestId('quote-text').textContent;
    const newCta = screen.getByRole('button', {
      name: /New quote/i,
    })

    fireEvent.click(newCta);
    
    const newQuoteText = screen.getByTestId('quote-text').textContent;
    const found = quotesData.find((q) => {
      return q.text === newQuoteText;
    });
    
    expect(found).toBeDefined();
    expect(initialQuoteText !== newQuoteText).toBe(true)
  })
})