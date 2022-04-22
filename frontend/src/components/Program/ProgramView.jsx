import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgramData } from '../../hooks/useProgramData';
import { FaPlusCircle, FaTrash, FaEdit} from "react-icons/fa";
import { Container, Row, Col, Button, Image, ButtonGroup, Stack } from 'react-bootstrap'
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
      <Stack direction="horizontal" gap={3}>
        <div>
          <h3> Welcome to {program.name} program! </h3>
          <p> {program.description}</p>
          <p> Languages: HTML, CSS, JavaScript, SQL... </p>
          <p> Duration: {program.duration_days} days.</p>
        </div>
        <div>
          <img
            src={program.img_url.url}
            alt={program.name}
            max-height={"100%"}
            max-width={"200px"}
            />
        </div>
        <Stack gap={4}>
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
        </Stack>       
      </Stack>

      <Container fluid>
        <Row>
          <Col>
              <h3> Welcome to {program.name} program! </h3>
              <p> {program.description}</p>
              <p> Languages: HTML, CSS, JavaScript, SQL... </p>
              <p> Duration: {program.duration_days} days.</p>
          </Col>
          <Col>
            <Image
              src={program.img_url.url}
              alt={program.name}
              max-height={"100%"}
              max-width={"200px"}
            />
          </Col>
          <Col>
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
      <div>
        <h3> Welcome to {program.name} program! </h3>
        <p> {program.description}</p>
        <p> Languages: HTML, CSS, JavaScript, SQL... </p>
        <p> Duration: {program.duration_days} days.</p>
      </div>
      <div>
        <img
          src={program.img_url.url}
          alt={program.name}
          />
      </div>
      <div>
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
