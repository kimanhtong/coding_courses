import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//import Modal from 'react-modal';
import { useProgramData } from '../../hooks/useProgramData';
import { FaPlusCircle, FaTrash, FaSearchPlus, FaEdit} from "react-icons/fa";
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'
import '../styles/program.css';

const ProgramList = () => {
  const [ currentProgram, setCurrentProgram ] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { programs, deleteProgram } = useProgramData();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const allPrograms = programs.map(program => (
    <Col key={program.id} md={3} >
      <Card style={{minWidth: '200px', height: '400px', margin: '10px'}}>
        <Card.Img
          src={program.img_url.url}
          alt={program.name}
          variant="top"
          height={"40%"}
        />
        <Card.Body>
          <Card.Title> {program.name} </Card.Title>
          <Card.Text> {program.description.length > 100 ? program.description.substring(0,100) + "..." : program.description + "\n".repeat(2)}</Card.Text>
        </Card.Body>
        <Card.Footer style={{display: "flex", flexDirection: "row", justifyContent: "right"}}>
          <Button variant="info"
            onClick={()=>navigate(`/program/view/${program.id}`)}>
            <FaSearchPlus/>
          </Button>
          <Button variant="secondary" 
            onClick={()=>navigate(`/program/edit/${program.id}`)}>
            <FaEdit />
          </Button>
          <Button variant="danger"
            onClick={() => {
              setCurrentProgram(program);
              toggleModal();
          }}>
            <FaTrash/>
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  ));

  const noProgram = (
    <div className="empty-list">
      <h4>
        No programs yet. Why not <Link to={"/program/new"}>create one?</Link>
      </h4>
    </div>
  );

  return (
    <Container fluid="md" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1> Welcome to the Program List page!</h1>
      <h4> You can find all the currently available programs here.</h4>
      <Button onClick={()=>navigate("/program/new")} variant={"primary"} style={{margin: "20px"}}>
        <FaPlusCircle/> Add a New Program
      </Button>
      <Row fluid="md">
        {programs.length > 0 ? allPrograms : noProgram}
      </Row>
      <Modal show={isOpen} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>Cancel</Button>
          <Button variant="danger" 
            onClick={() => {
              deleteProgram(currentProgram.id);
              toggleModal();
            }}
          > Delete!</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
};
export default ProgramList;
