import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useProgramData } from '../../hooks/useProgramData';

Modal.setAppElement("#root");

const ProgramView = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { program, deleteProgram } = useProgramData();
  const programRoot = '/program';

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <form>
        <h3> Welcome to the program: {program.name}! </h3>
        <p> Description: {program.description}</p>
        <p> Languages: HTML, CSS, JavaScript, SQL... </p>
        <p> Duration: {program.duration_days} days.</p>
        <img
          src={program.img_url.url}
          className="card-img"
          alt={program.name}
          style={{ maxWidth: 350, maxHeight: 350 }}
        />
        <div>
          <button type="button" onClick={()=>navigate(`/program/edit/${program.id}`)}> Edit </button>
          <button type="button" onClick={toggleModal}> Delete </button>
        </div>
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
        }}>
        <div>Are you sure?</div>
        <button type="button" onClick={() => {
          toggleModal();
          deleteProgram(program.id);
        }}>Yes</button>
        <button type="button" onClick={toggleModal}>No</button>
      </Modal>
    </div>
)};

export default ProgramView;
