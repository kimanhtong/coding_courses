import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const useProgramData = () => {

  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState({name: '', description: '', duration_days: 0, img_url: {}});
  const { id } = useParams();
  const programRoot = "/program";
  const programListDB = "http://localhost:3000/api/v1/programs"
  const newProgramDB = `http://localhost:3000/api/v1/programs`;
  const navigate = useNavigate();


  const fetchPrograms = () => {
    axios.get(programListDB)
    .then (res => {
      console.log(res.data);
      let temp_programs = res.data.map(p => {
        if (typeof(p.img_url) === "string") {
          let t = JSON.parse(p.img_url);
          p.img_url = t;
        };
        return p;
      });
      console.log(temp_programs);
      setPrograms(temp_programs);
      if (id) {
        let temp_program = temp_programs.filter(p => p.id === parseInt(id));
        setProgram(temp_program[0]);
    }})
    .catch(res => console.log(res.message));
  };

  const deleteProgram = (id) => {
    const existingProgramDB = `http://localhost:3000/api/v1/programs/${id}`;
    const deleted_program = programs.filter(p => p.id === id)[0]
    let index = programs.indexOf(deleted_program);
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

  const uploadImage = (program, image) => {
    const formData = new FormData();
    formData.append("file",image);
    formData.append("upload_preset", "anhtest");
    const uploadCloud = axios
    .post(
      "https://api.cloudinary.com/v1_1/de6puygvt/image/upload"
      ,formData
    ).then((response)=>{
      console.log(response.data);
      // program.img_url = JSON.stringify({"key": response.data.public_id, "url": response.data.url});
      program.img_url = {"key": response.data.public_id, "url": response.data.url};
      return Promise.resolve('Uploaded!');
    })
    .catch (err => {
      console.log(err);
      return Promise.reject('Error Uploading!');
    });
    return uploadCloud;
  }
  
  const editProgram = (program, id) => {
    const existingProgramDB = `http://localhost:3000/api/v1/programs/${id}`;
    const programView = `/program/view/${id}`;
  
    uploadImage(program, program.img_url)
    .then (() => {
      axios
      .put(existingProgramDB, program)
      .then(() => {
        navigate(programView);
      })
      .catch(err => {
        console.log(err.message);
        navigate(programRoot);
    });})
    .catch (err => console.log(err.message))
  };

  const createProgram = (program) => {
    uploadImage(program, program.img_url)
    .then (() => {
      console.log(program)
      axios
      .post(newProgramDB, program)
      .then(res => {
        const programView = `/program/view/${res.data.id}`;
        navigate(programView);
      })
      .catch(err => {
        console.log(err.message);
        navigate(programRoot);
      });})
    .catch (err => console.log(err.message))
  };

  useEffect(fetchPrograms,[id]);

  return { programs, program, deleteProgram, createProgram, editProgram };
};

export { useProgramData };