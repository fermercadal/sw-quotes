import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Star Wars Quotes/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders a New quote cta', () => {
    render(<Home />)

    const heading = screen.getByRole('button', {
      name: /New quote/i,
    })

    expect(heading).toBeInTheDocument()
  })

  //TODO: it renders a random quote from the list on page load

  //TODO: it renders a different random quote from the list on CTA click
})