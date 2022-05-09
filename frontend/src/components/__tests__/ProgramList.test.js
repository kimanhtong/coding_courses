import React from "react";
import {render, screen, cleanup} from "@testing-library/react";
import ProgramList from "../Program/ProgramList";
import { BrowserRouter, Routes, Route} from 'react-router-dom';


afterEach(cleanup);

beforeEach(() => {
  render(
    <BrowserRouter>
      <ProgramList />
    </BrowserRouter>
  )})

describe("Program List - error cases", () => {
  it ("Cannot fetch Program List from DB", () => {
    const welcome_text = screen.queryByText(/Welcome to the Program List page!/i);
    expect(welcome_text).toBeInTheDocument();
    //const program_null_text = screen.queryByText(/You can find all the currently available programs here./i);
    // await expect(program_null_text).not.toBeInTheDocument();
    // await expect(console.log).toHaveBeenLastCalledWith('Network Error');
    expect(() => {
      screen.queryByText(/You can find all the currently available programs here./i);
    }).toThrow('Network Error');
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