import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const useProgramData = () => {
  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState({name: '', description: '', duration_days: 0, img_url: ''});
  const { id } = useParams();
  const programRoot = "/program";
  const programListDB = "http://localhost:3000/api/v1/programs"
  const newProgramDB = `http://localhost:3000/api/v1/programs`;
  const navigate = useNavigate();

  const fetchPrograms = () => {
    axios.get(programListDB)
    .then (res => {
      setPrograms(res.data);
      if (id) {
        let temp_program = res.data.filter(p => p.id === parseInt(id));
        setProgram(temp_program[0]);
    }})
    .catch(res => console.log(res.message));
  };

  const deleteImageOnAPI= (url) => {
    const formData = new FormData();
    formData.append("id",'rgkzh9utqtjs3zs28di');
    formData.append("name",'anhtest');
    formData.append("avatar", "https://res.cloudinary.com/de6puygvt/image/upload/v1649722570/rgkzh9utqtjs3zs28di.webp"); //url
    formData.append("cloudinary_id", "rgkzh9utqtjs3zs28di");
    formData.append("signature","ca27b5117f5d160e94f1f58f4610ad8071e054d1");
    axios.post(
      "https://api.cloudinary.com/v1_1/de6puygvt/image/destroy"
      ,formData
    ).then((response)=>{
      console.log(response);
    })
    .catch (err => console.log(err));
// xcpgjstlsmpku2eemoy8
  };

  const deleteProgram = (id) => {
    const existingProgramDB = `http://localhost:3000/api/v1/programs/${id}`;
    const deleted_program = programs.filter(p => p.id === id)[0]
    let index = programs.indexOf(deleted_program);
    let url = deleted_program.img_url;
    axios
    .delete(existingProgramDB)
    .then (() => {
      let newPrograms = [...programs];
      newPrograms.splice(index, 1);
      setPrograms(newPrograms);
      deleteImageOnAPI(url);
      navigate(programRoot);
    })
    .catch(res => {
      console.log(res.message);
    });
  };
  
  const editProgram = (program, id) => {
    const existingProgramDB = `http://localhost:3000/api/v1/programs/${id}`;
    const programView = `/program/view/${id}`;
    axios
    .put(existingProgramDB, program)
    .then(() => {
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
      const programView = `/program/view/${res.data.id}`;
      navigate(programView);
    })
    .catch(err => {
      console.log(err.message);
      navigate(programRoot);
    });
  };

  useEffect(fetchPrograms,[id]);

  return { programs, program, deleteProgram, createProgram, editProgram };
};

export { useProgramData };