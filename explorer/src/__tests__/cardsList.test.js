import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import CardsList from '../layouts/CardsList'
import renderWithRouter from '../utils/renderWithRouter';

test('Card lists are rendered', async () => {
    const cards = [
        {place: "A city surrounded by mountains", city: "Salem", fullDescription: "A lot more about the city", shortDescription: "A short desc"},
        {place: "Vantharai vazha vaikum chennai", city: "Chennai", fullDescription: "A lot more", shortDescription: "A short desc"}
    ];
  // ARRANGE
  renderWithRouter(<CardsList title='Destinations' subtitle='Slogan' cards={cards} />)
  render()

  // ASSERT
  expect(screen.getAllByRole('heading').find(x => x.tagName === "H3")).toHaveTextContent('Destinations');
  expect(screen.getAllByRole('heading').find(x => x.tagName === "H4")).toHaveTextContent('Slogan');
  expect(screen.getAllByRole('img')).toHaveLength(2);
  expect(screen.getAllByRole('button')).toHaveLength(2);
})