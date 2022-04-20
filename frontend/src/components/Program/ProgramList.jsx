import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useProgramData } from '../../hooks/useProgramData';
import '../styles/list.css';
import { FaPlusCircle, FaTrash, FaSearchPlus, FaEdit} from "react-icons/fa";
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap'


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
    <Col key={program.id} md={4} >
      <Card style={{height: '400px', marginRight: '20px', marginBottom: '20px'}}>
        <Card.Img
          src={program.img_url.url}
          alt={program.name}
          variant="top"
          height={'200px'}
        />
         <Card.Body>
          <Card.Title> {program.name} </Card.Title>
          <Card.Text> {program.description.length > 100 ? program.description.substring(0,100) + "..." : program.description + "\n".repeat(2)}</Card.Text>
          <ButtonGroup style={{display: "flex", flexDirection: "row"}}>
            <Button type="button" className="btn btn-primary" 
              onClick={()=>navigate(`/program/view/${program.id}`)}>
              <FaSearchPlus/>
            </Button>
            <Button type="button" className="btn btn-secondary" 
              onClick={()=>navigate(`/program/edit/${program.id}`)}>
              <FaEdit />
            </Button>
            <Button type="button" className="btn btn-danger"
              onClick={() => {
                setCurrentProgram(program);
                toggleModal();
            }}>
              <FaTrash/>
            </Button>
          </ButtonGroup>
        </Card.Body>
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
    <Container fluid="md">
      <h1> Welcome to the Program List page!</h1>
      <h3> You can find all the currently available programs here.</h3>
      <Button onClick={()=>navigate("/program/new")}>
        <FaPlusCircle variant="primary"/>
      </Button>
      <Row fluid="md">
        {programs.length > 0 ? allPrograms : noProgram}
      </Row>
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
        <Button onClick={() => {
          deleteProgram(currentProgram.id);
          toggleModal();
        }}>Yes</Button>
        <Button onClick={toggleModal}>No</Button>
      </Modal>
    </Container>
  )
};
export default ProgramList;
