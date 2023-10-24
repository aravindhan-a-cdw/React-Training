import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Banner from '../layouts/Banner'

test('Banner shows the content and image', async () => {
  // ARRANGE
  render(<Banner image='src.png'><h4>Banner Title</h4></Banner>)

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Banner Title');
  expect(screen.getByRole('img')).toBeInTheDocument();
})