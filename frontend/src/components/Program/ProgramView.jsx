import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgramData } from '../../hooks/useProgramData';
import { FaPlusCircle, FaTrash, FaEdit} from "react-icons/fa";
import { Row, Col, Button, Image, ButtonGroup } from 'react-bootstrap'
import '../styles/program.css';
import Confirm from './Confirm';

const ProgramView = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { program, deleteProgram } = useProgramData();
  const programRoot = '/program';

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='programView'>
      <div>
        <h3> Welcome to {program.name} program! </h3>
        <p> {program.description}</p>
        <p> Languages: HTML, CSS, JavaScript, SQL... </p>
        <p> Duration: {program.duration_days} days.</p>
      </div>
      <div>
        <Image
          src={program.img_url.url}
          alt={program.name}
          height={'100%'}
          />
      </div>
      <div className="buttonGroup">

        <Button variant={"primary"}
          onClick={()=>navigate(`/program/edit/${program.id}`)}>
          <FaEdit /> Edit Program
        </Button>
        <Button variant={"danger"} onClick={toggleModal}>
          <FaTrash/> Delete Program
        </Button>
        <Button onClick={()=>navigate("/program/new")} variant={"secondary"}>
          <FaPlusCircle/> Add a New Program
        </Button>
        <Button onClick={()=>navigate(programRoot)} variant={"info"}>
          View All Programs
        </Button>

      </div>
      <Confirm 
        isOpen={isOpen}
        toggleModal={toggleModal}
        confirmAction={()=>deleteProgram(program.id)}
        title={"Confirm Deletion"}
        message={"Are you sure?"}
      />
    </div>
  )};

export default ProgramView;
