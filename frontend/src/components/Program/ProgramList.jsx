import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import ProgramsContext from '../../context/ProgramsContext';
import Confirm from "../Modal/Confirm";

const ProgramList = () => {
  const { programs, setPrograms } = useContext(ProgramsContext);
  const navigate = useNavigate();
  const fetchPrograms = () => {
    const program_list_url = "http://localhost:3000/api/v1/programs"
    axios.get(program_list_url)
    .then (res => {
      setPrograms(res.data)})
    .catch(res => console.log(res.message));
  };

  const deleteProgram =  (id) => {
    const dataDeleted = (i) => {
      const program_delete_url = `http://localhost:3000/api/v1/programs/${i}`
      axios.delete(program_delete_url)
      .then (res => {
        console.log(res.data);
        setPrograms(res.data);
        navigate("/");
      })
      .catch(res => {
        console.log(res.message);
        navigate("/");
      })
    };
    return (
      <Confirm isOpen={true} message={'Are you sure you want to delete the Program?'} onOK={()=>{dataDeleted(id)}} onCancel={navigate("/")} />
    );
    };
   

  useEffect(fetchPrograms,[]);
  console.log('programs', programs);
  return (
    <div>
      <h1> Here is the list of all current programs </h1>
      <button onClick={()=>console.log("Add a new program")}>
        Add a new program
      </button>
      {programs.map((program) => {
        return (<div key={program.id}>
          <h2> Name: {program.name} </h2>
          <p> Description: {program.description} </p>
          <p> Duration: {program.duration_days} days </p>
          <div>
            <button onClick={()=>console.log("Edit the program")}>
              Edit the program
            </button>
            <button onClick={()=>deleteProgram(program.id)}>
              Delete the program
            </button>
          </div>
        </div>
      )})}

    </div>
  )
};
export default ProgramList;