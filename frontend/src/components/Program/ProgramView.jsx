import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgramData } from '../../hooks/useProgramData';
import { FaPlusCircle, FaTrash, FaEdit} from "react-icons/fa";
import { Container, Row, Col, Button, Image, ButtonGroup } from 'react-bootstrap'
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
    <>
      <Container fluid="md">
        <Row>
          <Col>
            <h1> Welcome to {program.name} program! </h1>
            <p> {program.description}</p>
            <p> Languages: HTML, CSS, JavaScript, SQL... </p>
            <p> Duration: {program.duration_days} days.</p>
            <ButtonGroup>
              <Button variant={"primary"} style={{margin: "10px"}}
                onClick={()=>navigate(`/program/edit/${program.id}`)}>
                <FaEdit /> Edit Program
              </Button>
              <Button variant={"danger"} onClick={toggleModal} style={{margin: "10px"}}>
                <FaTrash/> Delete Program
              </Button>
              <Button onClick={()=>navigate("/program/new")} variant={"secondary"} style={{margin: "10px"}}>
                <FaPlusCircle/> Add a New Program
              </Button>
              <Button onClick={()=>navigate(programRoot)} variant={"info"} style={{margin: "10px"}}>
                View All Programs
              </Button>
            </ButtonGroup>
          </Col>
          <Col>
            <Image
              src={program.img_url.url}
              alt={program.name}
              fluid
            />
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
    </>
)};

export default ProgramView;
