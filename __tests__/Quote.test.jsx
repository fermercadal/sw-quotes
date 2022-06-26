import { render, screen } from '@testing-library/react'
import Quote from '../components/Quote'
import '@testing-library/jest-dom'

const text = 'I have a bad feeling about this';
const author = 'Princess Leia';
const source = 'Star Wars Episode V: The Empire Strikes Back';

const QUOTE_PROPS = {
    text: text,
    author: author,
    source: source
}

describe('Quote', () => {
  it('renders the content received via props', () => {
    render(<Quote {...QUOTE_PROPS} />)

    const quoteText = screen.getByText(text)
    const quoteAuthor = screen.getByText(author)
    const quoteSource = screen.getByText(source)

    expect(quoteText).toBeInTheDocument()
    expect(quoteAuthor).toBeInTheDocument()
    expect(quoteSource).toBeInTheDocument()
  })
})