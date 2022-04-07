import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useForm } from '../../hooks/useForm'

const isRequired = (value) => {
  return value != null && value.trim().length > 0;
};

const ProgramForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let programs = JSON.parse(localStorage.getItem('programs'));
  let initProgram = id ? programs.filter(p => p.id === parseInt(id)) : [{}];
  let index = id ? programs.indexOf(initProgram[0]) : -1;
  // const [program, setProgram] = useState(initProgram ? initProgram[0] : {name: '', description: '', duration_days: 0});
  const [image, setImage] = useState(initProgram[0] ? initProgram[0].img_url : '');
  const createDBLink = `http://localhost:3000/api/v1/programs`;
  const programRoot = '/program';
  let programView = id ? `/program/view/${id}` : '';

  const initialState = initProgram ? initProgram[0] : {name: '', description: '', duration_days: 0, img_url: ''};
  const validations = [
    ({name}) => isRequired(name) || {name: 'Name is required'},
    ({description}) => isRequired(description) || {description: 'Description is required'},
    // ({duration_days}) => isRequired(duration_days) || {duration_days: 'Duration is required'}
  ];

  const saveProgram = (program) => {
    if (id) {
      const editDBLink = `http://localhost:3000/api/v1/programs/${id}`;
      axios
      .put(editDBLink, program)
      .then(res => {
        programs.splice(index, 1, res.data);
        localStorage.setItem('programs', JSON.stringify(programs));
        navigate(programView);
      })
      .catch(err => {
        console.log(err.message);
      });
    } else {
      axios
      .post(createDBLink, program)
      .then(res => {
        programs.push(res.data);
        localStorage.setItem('programs', JSON.stringify(programs));
        programView = `/program/view/${res.data.id}`;
        navigate(programView);
      })
      .catch(err => {
        console.log(err.message);
        navigate(programRoot);
      });
    }
  };

  const {values, changeHandler, isValid, errors, touched, submitHandler, resetHandler} = useForm(initialState, validations, saveProgram);

  // const handleChange = (event) => {
  //   let newProgram = {...program,[event.target.name]:event.target.value};
  //   setProgram(newProgram);
  // }

  const handleImageUpload = (evt) => {
    evt.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append("file",image);
      formData.append("upload_preset", "anhtest");
      axios.post(
        "https://api.cloudinary.com/v1_1/de6puygvt/image/upload"
        ,formData
      ).then((response)=>{
        setImage(response.data.url);
        values.img_url = response.data.url;
      })
      .catch (err => console.log(err));
    }
  }
  console.log('errors: ', errors);
  console.log('touched: ', touched);
  return (
    <div> 
      <h1> {id && `Edit the Program ${id}`} </h1>
      <h1> {!id && `Create a new Program`} </h1>
      <form>
        <div className="form-group">
          <label>Program Name:</label>
          <input type="text" className="form-control"
            placeholder='Enter the Name'
            name="name"
            value={values.name}
            onChange={changeHandler}
          />
          {touched.name && errors.name && <p className="error">{errors.name}</p>} 
        </div>
        <div className="form-group">
          <label>Program Description</label>
          <input type="text" className="form-control"
            placeholder='Enter the Description'
            name="description"
            required
            value={values.description} 
            onChange={changeHandler} />
            {touched.description && errors.description && <p className="error">{errors.description}</p>} 
        </div>
        <div className="form-group">
          <label>Duration in Days</label>
          <input type="number" className="form-control"
            placeholder='Enter the Duration in Days'
            name="duration_days"
            value={values.duration_days}
            onChange={changeHandler} />
          
        </div>
        <div className="form-control">
          {values.img_url && (
            <div>
              <img src={values.img_url} alt="cannot load!" width={"250px"} mode={"fit"}/>
            </div>
          )}
          <br />
          <br />
          <div className="form-control">
            <input
              type="file"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
            />
            <button onClick={handleImageUpload}> Upload </button>
          </div> 
        </div>
        <button type="button" disabled={isValid} onClick={submitHandler} className="btn btn-primary">Submit</button>
        <button type="button" onClick={()=>resetHandler(initProgram[0]||{})} className="btn btn-secondary">Reset</button>
        <button type="button" onClick={()=>navigate(programRoot)} className="btn btn-secondary">Back to View All</button>
        {id ? <button type="button" onClick={()=>navigate(programView)} className="btn btn-secondary">Back to View Detail</button> : null}
      </form>
    </div>
)};

export default ProgramForm;
