import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const useProgramData = () => {
  const [programs, setPrograms] = useState([]);
  const programRoot = "/program";
  const programListDB = "http://localhost:3000/api/v1/programs"
  const newProgramDB = `http://localhost:3000/api/v1/programs`;
  const navigate = useNavigate();

  const fetchPrograms = () => {
    axios.get(programListDB)
    .then (res => {
      setPrograms(res.data);
      // localStorage.setItem('programs', JSON.stringify(res.data));
    })
    .catch(res => console.log(res.message));
  };

  const deleteProgram = (id) => {
    const existingProgramDB = `http://localhost:3000/api/v1/programs/${id}`;
    let deletedProgram = programs.filter(p => p.id === parseInt(id));
    let index = programs.indexOf(deletedProgram[0]);

    axios
    .delete(existingProgramDB)
    .then (() => {
      let newPrograms = [...programs];
      newPrograms.splice(index, 1);
      setPrograms(newPrograms);
      // localStorage.setItem('programs', JSON.stringify(newPrograms));
      navigate(programRoot);
    })
    .catch(res => {
      console.log(res.message);
    });
  };
  
  const editProgram = (id, program) => {
    const existingProgramDB = `http://localhost:3000/api/v1/programs/${id}`;
    const programView = `/program/view/${id}`;
    let editedProgram = programs.filter(p => p.id === parseInt(id));
    let index = programs.indexOf(editedProgram[0]);
    axios
    .put(existingProgramDB, program)
    .then(res => {
      let newPrograms = [...programs];
      newPrograms.splice(index, 1, res.data);
      setPrograms(newPrograms);
      // localStorage.setItem('programs', JSON.stringify(newPrograms));
      navigate(programView);
    })
    .catch(err => {
      console.log(err.message);
    });
  };
  
  const createProgram = (program) => {
    axios
    .post(newProgramDB, program)
    .then(res => {
      let newPrograms = [...programs];
      newPrograms.push(res.data);
      setPrograms(newPrograms);
      // localStorage.setItem('programs', JSON.stringify(newPrograms));
      const programView = `/program/view/${res.data.id}`;
      navigate(programView);
    })
    .catch(err => {
      console.log(err.message);
      navigate(programRoot);
    });
  };
  return { programs, fetchPrograms, deleteProgram, editProgram, createProgram };
};

export { useProgramData };