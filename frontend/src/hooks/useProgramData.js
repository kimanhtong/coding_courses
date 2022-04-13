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

  // const deleteImageOnAPI= (url) => {
  //   const formData = new FormData();

  //   formData.append("file", file);
  //   formData.append("api_key", "413224759358775");
  //   formData.append("public_id",'a2klvmmjwqicr3onepgs');
  //   formData.append("timestamp", "2022-04-12T14:51:19Z");
  //   formData.append("signature","ee5c440fbbec41a313ce3eef0fbaf4250d0407be");

  //   fetch(
  //     "https://api.cloudinary.com/v1_1/de6puygvt/image/destroy", {
  //     method: "POST",
  //     body: formData
  //   })

  //   formData.append("cloud_name",'de6puygvt');
  //   formData.append("api_key", "413224759358775");
  //   formData.append("api_secret", "0pc_QSbLGFujxShENPJ7cRpJ2");
  //   formData.append("asset_id", "a38a177997f534f3f56bd1ffd730b3f3");
  //   formData.append("public_id",'a2klvmmjwqicr3onepgs');
  //   formData.append("signature","ee5c440fbbec41a313ce3eef0fbaf4250d0407be");
  //   axios.post(
  //     "https://api.cloudinary.com/v1_1/de6puygvt/image/destroy"
  //     ,formData
  //   ).then((response)=>{
  //     console.log(response);
  //   })
  //   .catch (err => console.log(err));


  // cloudinary.v2.uploader.destroy(public_id, options, callback);
  // cloudinary.config({
  //   cloud_name: 'cloudname',
  //   api_key: 'apikey',
  //   api_secret: 'secretkey'
  // });
  // cloudinary.v2.uploader.destroy('https://res.cloudinary.com/de6puygvt/image/upload/v1649735333/kh6t45lyosarafb4vkqh.webp', function(error,result) {
  //   console.log(result, error) });

  // };

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