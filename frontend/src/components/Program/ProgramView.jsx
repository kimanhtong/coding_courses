import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useProgramData } from '../../hooks/useProgramData';
import { FaPlusCircle, FaTrash, FaEdit} from "react-icons/fa";
import { Container, Row, Col, Button } from 'react-bootstrap'
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
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <h3> Welcome to the program: {program.name}! </h3>
            <p> Description: {program.description}</p>
            <p> Languages: HTML, CSS, JavaScript, SQL... </p>
            <p> Duration: {program.duration_days} days.</p>
          </Col>
          <Col>
            <img
              src={program.img_url.url}
              alt={program.name}
              style={{ maxWidth: '650px', maxHeight: '950px' }}
            />
          </Col>
        </Row>
        <Row>
          <Button type="button" onClick={()=>navigate(`/program/edit/${program.id}`)}> Edit </Button>
          <Button type="button" onClick={toggleModal}> Delete </Button>
          <Button variant="secondary" 
            onClick={()=>navigate(`/program/edit/${program.id}`)}>
            <FaEdit />
          </Button>
          <Button variant="danger" onClick={toggleModal}>
            <FaTrash/>
          </Button>
          <Link to={programRoot}> View All Programs </Link>
        </Row>
        <Row>
          <Button onClick={()=>navigate("/program/new")} variant={"primary"} style={{margin: "20px"}}>
            <FaPlusCircle/> Add a New Program
          </Button>
        </Row>
      </Container>
      {/* <form>
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
      <Link to={programRoot}> Back to All Programs </Link> */}
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
