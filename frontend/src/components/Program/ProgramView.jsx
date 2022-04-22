import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgramData } from '../../hooks/useProgramData';
import { FaPlusCircle, FaTrash, FaEdit} from "react-icons/fa";
import { Container, Row, Col, Button, Image} from 'react-bootstrap'
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
    <div className="programview">
      <Container fluid>
        <Row style={{height: "600px"}}>
          <Col md={6}>
              <h3> Welcome to {program.name} program! </h3>
              <p> {program.description}</p>
              <p> Languages: HTML, CSS, JavaScript, SQL... </p>
              <p> Duration: {program.duration_days} days.</p>
          </Col>
          <Col md={4}>
            <Image
              src={program.img_url.url}
              alt={program.name}
              height={"60%"}
            />
          </Col>
          <Col className='buttonGroup' md={2} style={{minWidth: "200px"}}>
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
          </Col>
        </Row>
      </Container>
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
