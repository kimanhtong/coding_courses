import React, {useState, useContext, useEffect} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import ProgramsContext from '../../context/ProgramsContext';
import Modal from 'react-modal';
import axios from 'axios';


Modal.setAppElement("#root");

const ProgramView = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {programs, setPrograms} = useContext(ProgramsContext);
  const initProgram = id ? programs.filter(p => p.id === parseInt(id)) : [{}];
  const [program, setProgram] = useState(initProgram[0] || {});
  console.log(program);
  const programRoot = '/program';
  const editDBLink = `http://localhost:3000/api/v1/programs/${id}`;
  const toggleModal = () => {
    setIsOpen(!isOpen);
  }
  const [isOpen, setIsOpen] = useState(false);

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
return (
  <div>
    <form>
      <h3> {program.name} </h3>
      <p> {program.description}</p>
      <p> {program.duration_days}</p>
      <button onClick={()=>navigate(editDBLink)}> Edit </button>
      <button onClick={deleteProgram}> Delete </button>
    </form>
    <Link to={programRoot}> Back to All Programs </Link>
    <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Confirm Deletion"
        ariaHideApp={false}
        shouldFocusAfterRender={true}
        className={"ReactModal__Content"}
        style={{
          overlay: { position: 'fixed', 
            top: 0,left: 0,right: 0,bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '180px', left: '180px', right: '200px', bottom: '400px',
            border: '2px solid #ccc',
            background: '#fff',
            borderRadius: '4px',
            padding: '20px'
          }
        }}
            
      >
        <div>Are you sure?</div>
        <button onClick={() => {
          console.log('current program id:', program.id);
          deleteProgram(program);
          toggleModal();
        }}>Yes</button>
        <button onClick={toggleModal}>No</button>
      </Modal>
  </div>
)};

export default ProgramView;


