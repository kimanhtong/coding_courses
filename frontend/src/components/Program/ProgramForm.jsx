import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  const [image, setImage] = useState(null);

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
    console.log('program to be saved: ', p);
    if (id) {
      editProgram(p, id);
    } else {
      createProgram(p);
  }};

  const {values, setValues, changeHandler, errors, touched, submitHandler, resetHandler, updateImage} = useForm(program, validations, saveProgram);

  useEffect(()=>{
    setValues(program);
  },[program]);

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
        <div className="form-group">
          <label>Program Logo</label>
          <div className="form-control">
            {image && (
              <div className="form-control">
                <img src={URL.createObjectURL(image)} alt="Cannot load!" width={"250px"} mode={"fit"}/>
              </div>
            )}
            {(!image && values.img_url.url) && (
              <div className="form-control">
                <img src={values.img_url.url} alt="Cannot load!" width={"250px"} mode={"fit"}/>
              </div>
            )}
            <br />
            <br />
            <div className="form-control">
              <input
                type="file"
                onChange={(event)=>{
                  setImage(event.target.files[0]);
                  updateImage(event.target.files[0]);
                }}
              />
              {/* <button onClick={handleImageUpload}> Upload </button> */}
              {touched.img_url && errors.img_url && <p className="error">{errors.img_url}</p>} 
            </div> 
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={submitHandler} >Submit</button>
        <button type="reset" className="btn btn-secondary"
          onClick={()=>{
            setImage(null);
            resetHandler(program);
          }}
          >
            Reset
        </button>
        <button type="button" onClick={()=>navigate(programRoot)} className="btn btn-secondary">Back to View All</button>
        {id ? <button type="button" onClick={()=>navigate(programView)} className="btn btn-secondary">Back to View Detail</button> : null}
      </form>
    </div>
)};

export default ProgramForm;
