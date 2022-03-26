import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import ProgramsContext from '../../context/ProgramsContext';

const ProgramList = () => {
  const { programs, setPrograms } = useContext(ProgramsContext);
  const program_list_url = "http://localhost:3000/api/v1/programs";
  const fetchPrograms = () => {
    axios.get(program_list_url)
    .then (res => {
      setPrograms(res.data)})
    .catch(res => console.log(res.message));
  };
  useEffect(fetchPrograms,[]);
  return (
    <div>
      <h1> Here is the list of all current programs </h1>
      <button onClick={()=>console.log("Add a new program")}>
        Add a new program
      </button>
      {programs.map(program => {
      return (
        <div key={program.id}>
          <h2> Name: {program.name} </h2>
          <p> Description: {program.description} </p>
          <p> Duration: {program.duration_days} days </p>
          <div>
            <button onClick={()=>console.log("Edit the program")}>
              Edit the program
            </button>
            <button onClick={()=>console.log("Delete the program")}>
              Delete the program
            </button>
          </div>
        </div>
      )})}

    </div>
  )
};
export default ProgramList;