import React from "react";
import {render, screen, cleanup} from "@testing-library/react";
import ProgramList from "../Program/ProgramList";
import { BrowserRouter} from 'react-router-dom';

afterEach(cleanup);

beforeAll(() => {
  render(
    <BrowserRouter>
      <ProgramList />
    </BrowserRouter>
  )})

describe("Program List - error cases", () => {
  it ("Cannot fetch Program List from DB", () => {
    const welcome_text = screen.queryByText(/Welcome to the Program List page!/i);
    expect(welcome_text).toBeInTheDocument();
    const program_null_text = screen.queryByText(/You can find all the currently available programs here./i);
    expect(program_null_text).not.toBeInTheDocument();
  });

  it ("Cannot delete a Program from DB", () => {

  })

  it ("Cannot upload picture to Cloudinary API", () => {

  })

  it ("Cannot update a Program in DB without accessing Cloudinary API previously", () => {

  })

  it ("Cannot update a Program in DB after a successful access of Cloudinary API", () => {

  })

  it ("Cannot update a Program in DB due to error saving a picture on Cloudinary API", () => {

  })

  it ("Cannot create a Program in DB after a successful access of Cloudinary API", () => {

  })

  it ("Cannot create a Program in DB due to error saving a picture on Cloudinary API", () => {

  })

})