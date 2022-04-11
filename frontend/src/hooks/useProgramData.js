import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const useProgramData = () => {
  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState({});
  const { id } = useParams();
  const programRoot = "/program";
  const programListDB = "http://localhost:3000/api/v1/programs"
  const newProgramDB = `http://localhost:3000/api/v1/programs`;
  const navigate = useNavigate();

  const fetchPrograms = () => {
    axios.get(programListDB)
    .then (res => {
      setPrograms(res.data);
      console.log(res.data);
      // localStorage.setItem('programs', JSON.stringify(res.data));
    })
    .catch(res => console.log(res.message));
  };

  const fetchProgram = () => {
    const existingProgramDB = `http://localhost:3000/api/v1/programs/${id}`;
    axios.get(existingProgramDB)
    .then (res => {
      console.log(res.data);
      setProgram(res.data);
    })
    .catch(err => console.log(err));
  }

  const deleteProgram = (id) => {
    const existingProgramDB = `http://localhost:3000/api/v1/programs/${id}`;
    let editedProgram = programs.filter(p => p.id === parseInt(id));
    let index = programs.indexOf(editedProgram[0]);
    axios
    .delete(existingProgramDB)
    .then (() => {
      let newPrograms = [...programs];
      newPrograms.splice(index, 1);
      setPrograms(newPrograms);
      navigate(programRoot);
    })
    .catch(res => {
      console.log(res.message);
    });
  };
  
  const editProgram = (program, id) => {
    const existingProgramDB = `http://localhost:3000/api/v1/programs/${id}`;
    const programView = `/program/view/${id}`;
    // let editedProgram = programs.filter(p => p.id === parseInt(id));
    // let index = programs.indexOf(editedProgram[0]);
    axios
    .put(existingProgramDB, program)
    .then(res => {
      // setProgram(res.data);
      // let newPrograms = [...programs];
      // newPrograms.splice(index, 1, res.data);
      // setPrograms(newPrograms);
      // localStorage.setItem('programs', JSON.stringify(newPrograms));
      navigate(programView);
    })
    .catch(err => {
      console.log(err.message);
      navigate(programRoot);
    });
  };
  
  const createProgram = (program) => {
    axios
    .post(newProgramDB, program)
    .then(res => {
      // let newPrograms = [...programs];
      // newPrograms.push(res.data);
      // setPrograms(newPrograms);
      // localStorage.setItem('programs', JSON.stringify(newPrograms));
      const programView = `/program/view/${res.data.id}`;
      navigate(programView);
    })
    .catch(err => {
      console.log(err.message);
      navigate(programRoot);
    });
  };

  const saveProgram = (program, id) => {
    if (id) {
      editProgram(id, program);
    } else {
      createProgram(program);
  }};

  useEffect(fetchPrograms,[]);
  useEffect(()=>fetchProgram(id),[]);

  return { programs, fetchPrograms, program, fetchProgram, deleteProgram, saveProgram };
};

export { useProgramData };