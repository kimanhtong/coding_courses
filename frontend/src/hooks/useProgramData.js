import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
// var cloudinary = require('cloudinary').v2;

// cloudinary.config({ 
//   cloud_name: 'de6puygvt', 
//   api_key: '413224759358775', 
//   api_secret: '0pc_QSbLGFujxShENPJ7cRpJ2-4' 
// });


const useProgramData = () => {

  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState({name: '', description: '', duration_days: 0, img_url: ''});
  const { id } = useParams();
  const programRoot = "/program";
  const programListDB = "http://localhost:3000/api/v1/programs"
  const newProgramDB = `http://localhost:3000/api/v1/programs`;
  const navigate = useNavigate();
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'de6puygvt', 
      apiKey: '413224759358775', 
      apiSecret: '0pc_QSbLGFujxShENPJ7cRpJ2-4' 
    }
  });

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

  const deleteImageOnAPI= () => {
    cld.uploader.destroy('jps7gbprsgf7va2la33g', function(result) { console.log(result) });
  //   const formData = new FormData();
  //   formData.append("public_id",'a2klvmmjwqicr3onepgs');
  //   axios.post(
  //     "https://api.cloudinary.com/v1_1/de6puygvt/image/destroy"
  //     ,formData
  //   ).then((response)=>{
  //     console.log(response);
  //   })
  //   .catch (err => console.log(err));
  }


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
      deleteImageOnAPI();
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
    const p = {...program, img_url: JSON.stringify(program.img_url)}
    //const stringImageLink =  JSON.stringify(program.img_url);
   // program.img_url = stringImageLink;
    console.log('temp program: ', p);
    axios
    .post(newProgramDB, p)
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