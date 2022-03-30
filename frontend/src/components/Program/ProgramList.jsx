import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import ProgramsContext from '../../context/ProgramsContext';
//import DeleteProgram from './Delete';
//import Confirm from "../Modal/Confirm";
import Modal from 'react-modal';

Modal.setAppElement("#root");

const ProgramList = () => {
  const { programs, setPrograms } = useContext(ProgramsContext);
  const [ currentProgram, setCurrentProgram ] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const programRoot = "/";
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const deleteProgram = (p) => {
    const program_delete_url = `http://localhost:3000/api/v1/programs/${p.id}`
    axios.delete(program_delete_url)
    .then (res => {
      console.log(res.data);
      setPrograms(res.data);
      navigate(programRoot);
    })
    .catch(res => {
      console.log(res.message);
    })
  };
  
  useEffect(()=>{
    const fetchPrograms = () => {
      const program_list_url = "http://localhost:3000/api/v1/programs"
      axios.get(program_list_url)
      .then (res => {
        setPrograms(res.data)})
      .catch(res => console.log(res.message));
    };
    fetchPrograms();
  },[]);
  console.log('programs', programs);
  return (
    <div>
      <h1> Here is the list of all current programs </h1>
      <button onClick={()=>console.log("Add a new program")}>
        Add a new program
      </button>
      {programs.map(program => {
        return (
          <div key={program.id}>
            <h2> Name: {program.name} </h2>
            <h3> Program ID: {program.id} </h3>
            <p> Description: {program.description} </p>
            <p> Duration: {program.duration_days} days </p>
            <div>
              <button onClick={()=>setCurrentProgram(program)}>
                Edit the program
              </button>
              <button onClick={() => {
                setCurrentProgram(program);
                toggleModal();
                }}>
                Delete the program
              </button>
            </div>
          </div>
        )}
      )}
     
     <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        overlayClassName={
          "ReactModal__Overlay"
        /* String className to be applied to the overlay.
           See the `Styles` section for more details. */}
           className={
            "ReactModal__Content"
          /* String className to be applied to the modal content.
             See the `Styles` section for more details. */}
             bodyOpenClassName={
              "ReactModal__Body--open"
            /* String className to be applied to the document.body
               (must be a constant string).
               This attribute when set as `null` doesn't add any class
               to document.body.
               See the `Styles` section for more details. */}
          
            htmlOpenClassName={
              "ReactModal__Html--open"
            /* String className to be applied to the document.html
               (must be a constant string).
               This attribute is `null` by default.
               See the `Styles` section for more details. */}
      >
        <div>Are you sure?</div>
        <button onClick={() => {
          console.log('current program id:', currentProgram.id);
          deleteProgram(currentProgram);
          toggleModal();
        }}>Yes</button>
        <button onClick={toggleModal}>No</button>
      </Modal>
    </div>
  )
};
export default ProgramList;