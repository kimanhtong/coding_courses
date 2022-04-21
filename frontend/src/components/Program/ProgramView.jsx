import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useProgramData } from '../../hooks/useProgramData';
import '../styles/program.css';
import Confirm from './Confirm';

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
      <Confirm 
        isOpen={isOpen}
        toggleModal={toggleModal}
        deleteProgram={()=>deleteProgram(program.id)}
        title={"Confirm Deletion"}
        message={"Are you sure?"}
      />
    </div>
)};

export default ProgramView;
