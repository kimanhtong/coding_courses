import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useProgramData } from '../../hooks/useProgramData';
import '../styles/list.css';
import { FaPlusCircle, FaTrash, FaSearchPlus, FaEdit} from "react-icons/fa";


Modal.setAppElement("#root");

const ProgramList = () => {
  const [ currentProgram, setCurrentProgram ] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { programs, deleteProgram } = useProgramData();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const allPrograms = programs.map(program => (
    <div key={program.id} className="column">
      <div className='card'>
        <img
          src={program.img_url.url}
          alt={program.name}
        />
        <div className='card-info'>
          <h3> {program.name}</h3>
          <p> {program.description.length > 100 ? program.description.substring(0,100) + "..." : program.description + "\n".repeat(2)}</p>
          <div className="card-actions">
            <button type="button" className="btn btn-primary" 
              onClick={()=>navigate(`/program/view/${program.id}`)}>
              <FaSearchPlus size='sm'/>
            </button>
            <button type="button" className="btn btn-secondary" 
              onClick={()=>navigate(`/program/edit/${program.id}`)}>
              <FaEdit size='sm' />
            </button>
            <button type="button" className="btn btn-danger"
              onClick={() => {
                setCurrentProgram(program);
                toggleModal();
            }}>
              <FaTrash size='sm'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  const noProgram = (
    <div className="empty-list">
      <h4>
        No programs yet. Why not <Link to={"/program/new"}>create one?</Link>
      </h4>
    </div>
  );

  return (
    <div className='page'>
      <h1> Welcome to the Program List page!</h1>
      <h3> You can find all the currently available programs here.</h3>
      <button className="btn btn-add" onClick={()=>navigate("/program/new")}>
        <FaPlusCircle size='lg'/>
      </button>
      <div className='row'>
        {programs.length > 0 ? allPrograms : noProgram}
      </div>
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
          deleteProgram(currentProgram.id);
          toggleModal();
        }}>Yes</button>
        <button onClick={toggleModal}>No</button>
      </Modal>
    </div>
  )
};
export default ProgramList;
