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
        ariaHideApp={false}
        shouldFocusAfterRender={true}
        className={"ReactModal__Content"}
        style={{
          overlay: { position: 'fixed', 
            top: 100,left: 80,right: 0,bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '80px', left: '100px', right: '200px', bottom: '400px',
            border: '2px solid #ccc',
            background: '#fff',
            // overflow: 'auto',
            // WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            // outline: 'none',
            padding: '20px'
          }
        }}
            
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