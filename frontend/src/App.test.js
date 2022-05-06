import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProgramList from "../src/components/Program/ProgramList"

test('renders Program List page', () => {
  render(
    <BrowserRouter>
      <ProgramList />
    </BrowserRouter>
  )
  const linkElement = screen.getByText("Welcome to the Program List page!");
  expect(linkElement).toBeInTheDocument();
});
