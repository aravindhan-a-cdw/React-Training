import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Banner from '../layouts/Banner'

test('Banner shows the content and image', async () => {
  // ARRANGE
  render(<Banner image='src.png'><h4>Banner Title</h4></Banner>)

  // ACT
  // await userEvent.click(screen.getByText('Load Greeting'))
  // await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Banner Title');
  expect(screen.getByRole('img')).toBeInTheDocument();
})