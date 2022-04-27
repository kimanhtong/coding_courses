import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useValidations } from '../../hooks/useValidations';
import { useProgramData } from '../../hooks/useProgramData';
import '../styles/program.css';
import Confirm from './Confirm';
import isSameObj from '../../helpers/comparison';

const ProgramForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { programs, program, editProgram, createProgram } = useProgramData();
  const programRoot = '/program';
  const programView = id ? `/program/view/${id}` : '';
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [toRoot, setToRoot] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Declaration for input validation rules:
  const { isRequired, isNotExisted, isLimited } = useValidations();
  const validations = [
    ({name}) => isRequired(name) || {name: 'Name is required'},
    ({name}) => isNotExisted(programs, name) || {name: "Name already exists"},
    ({description}) => isRequired(description) || {description: 'Description is required'},
    ({img_url}) => isRequired(img_url) || {img_url: 'Picture is required'},
    ({duration_days}) => isRequired(duration_days) || {duration_days: 'Duration is required'},
    ({duration_days}) => isLimited(duration_days) || {duration_days: 'Duration should be between 1 and 4000 days'}
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

  console.log('initial values: ', values);

  return (
    <div className='programForm'> 
      <h3> {id && `Edit existing program`} </h3>
      <h1> {id && `${values.name}`} </h1>
      <h3> {!id && `Create new program`} </h3>
      <h1> {!id && `${values.name}`} </h1>
      <form>
        <div className="form-group">
          <label>Program Name:</label>
          <div className='form-input'>
            <input type="text" className="form-control"
              placeholder='Enter the Name'
              name="name"
              value={values.name}
              onChange={changeHandler}
            />
            {touched.name && errors.name && <p className="error">{errors.name}</p>} 
          </div>
        </div>
        <div className="form-group">
          <label>Duration in Days</label>
          <div className='form-input'>
            <input type="number" className="form-control"
              placeholder='Enter the Duration in Days'
              name="duration_days"
              value={values.duration_days}
              onChange={changeHandler} />  
            {touched.duration_days && errors.duration_days && <p className="error">{errors.duration_days}</p>}     
          </div>
        </div>
        <div className="form-group">
          <label>Program Description</label>
          <div className='form-input'>
            <textarea type="text" className="form-control"
              placeholder='Enter the Description'
              name="description"
              value={values.description}
              onChange={changeHandler} />
            {touched.description && errors.description && <p className="error">{errors.description}</p>} 
          </div>
        </div>
       
        <div className="form-group">
          <label>Program Logo</label>
          <div className='form-input'>
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
            <input className="form-control"
              type="file"
              onChange={(event)=>{
                setImage(event.target.files[0]);
                updateImage(event.target.files[0]);
              }}
            />
            {touched.img_url && errors.img_url && <p className="error">{errors.img_url}</p>}
          </div>
        </div>
        <div className='form-actions'>
          <button type="button" className="btn btn-primary" onClick={(event) => {
            event.preventDefault();
            submitHandler();
            }}> Submit </button>
          <button type="reset" className="btn btn-secondary"
            onClick={()=>{
              setImage(null);
              resetHandler(program);
            }}> Reset
          </button>
          <button type="button" className="btn btn-secondary" onClick={()=>{
            if (isSameObj(values, program)) {
              navigate(programRoot);
            } else {
              setToRoot(true);
              toggleModal();
            }}}> Back to View All</button>
          {id ? 
            <button type="button" className="btn btn-secondary" onClick={()=>{
              if (isSameObj(values, program)) {
                navigate(programView);
              } else {
                setToRoot(false);
                toggleModal();
            }}}>Back to View Detail
            </button>
          : null}
        </div>
      </form>
      <Confirm 
        isOpen={isOpen}
        toggleModal={toggleModal}
        rejectAction={toRoot ? ()=>navigate(programRoot) : ()=>navigate(programView)}
        confirmAction={submitHandler}
        title={"Changes not saved"}
        message={"You have made some changes. Would you like to save them before leaving?"}
      />
    </div>
)};

export default ProgramForm;
