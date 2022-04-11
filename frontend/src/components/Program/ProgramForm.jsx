import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useForm } from '../../hooks/useForm';
import { useValidations } from '../../hooks/useValidations';
import { useProgramData } from '../../hooks/useProgramData';
import '../styles/program.css';

const ProgramForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { programs, program, editProgram, createProgram } = useProgramData();
  const programRoot = '/program';
  let programView = id ? `/program/view/${id}` : '';
  const [image, setImage] = useState('');

  // Declaration for input validation rules:
  const { isRequired, isNotExisted, isGreaterThan0 } = useValidations();
  const validations = [
    ({name}) => isRequired(name) || {name: 'Name is required'},
    ({name}) => isNotExisted(programs, name) || {name: "Name already exists"},
    ({description}) => isRequired(description) || {description: 'Description is required'},
    ({img_url}) => isRequired(img_url) || {img_url: 'Picture is required'},
    ({duration_days}) => isRequired(duration_days) || {duration_days: 'Duration is required'},
    ({duration_days}) => isGreaterThan0(duration_days) || {duration_days: 'Duration should be greater than 0 days'}
  ];
  const saveProgram = (p) => {
    if (id) {
      editProgram(p, id);
    } else {
      createProgram(p);
  }};

  const {values, setValues, changeHandler, errors, touched, submitHandler, resetHandler, updateImageURL} = useForm(program, validations, saveProgram);

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
        updateImageURL(response.data.url);
      })
      .catch (err => console.log(err));
    }
  }

  console.log(programs);
  console.log('program: ', program);
  console.log('values = ', values);

  useEffect(()=>setValues(program),[program]);

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
          {touched.duration_days && errors.duration_days && <p className="error">{errors.duration_days}</p>} 
        </div>
        <div className="form-control">
          {(values.img_url) && (
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
            {touched.img_url && errors.img_url && <p className="error">{errors.img_url}</p>} 
          </div> 
        </div>
        <button type="button" onClick={submitHandler} className="btn btn-primary">Submit</button>
        <button type="button" onClick={()=>resetHandler(program)} className="btn btn-secondary">Reset</button>
        <button type="button" onClick={()=>navigate(programRoot)} className="btn btn-secondary">Back to View All</button>
        {id ? <button type="button" onClick={()=>navigate(programView)} className="btn btn-secondary">Back to View Detail</button> : null}
      </form>
    </div>
)};

export default ProgramForm;
