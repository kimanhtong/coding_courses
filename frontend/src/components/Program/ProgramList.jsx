import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-modal';
import axios from "axios";
import ProgramsContext from '../../context/ProgramsContext';


Modal.setAppElement("#root");

const ProgramList = () => {
  const { programs, setPrograms } = useContext(ProgramsContext);
  const [ currentProgram, setCurrentProgram ] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const programRoot = "/program";
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const deleteProgram = (p) => {
    const program_delete_url = `http://localhost:3000/api/v1/programs/${p.id}`
    axios.delete(program_delete_url)
    .then (res => {
      console.log(res.data);
      setPrograms(res.data);
      navigate(programRoot);
    })
    .catch(res => {
      console.log(res.message);
    })
  };
  
  useEffect(()=>{
    const fetchPrograms = () => {
      const program_list_url = "http://localhost:3000/api/v1/programs"
      axios.get(program_list_url)
      .then (res => {
        setPrograms(res.data)})
      .catch(res => console.log(res.message));
    };
    fetchPrograms();
  },[]);

  return (
    <div>
      <h1> Here is the list of all current programs </h1>
      <Button onClick={()=>console.log("Add a new program")}>
        Add a new program
      </Button>
      {programs.map(program => {
        return (
          <Card key={program.id} style={{ width: '18rem' }}>
            <Card.Img 
              variant="top" 
              src="https://res.cloudinary.com/de6puygvt/image/upload/v1643845598/samples/food/fish-vegetables.jpg/" 
              className="img-fluid position-absolute"/>

            <Card.Body>
              <Card.Title>Name: {program.name}</Card.Title>
              <Card.Text>
                Description: {program.description}
                Duration: {program.duration_days} days
              </Card.Text>
              <Button variant="primary" 
                onClick={()=>navigate(`/program/edit/${program.id}`)}>
                Edit the program
              </Button>
              <Button onClick={() => {
                setCurrentProgram(program);
                toggleModal();
                }}>
                Delete the program
              </Button>
            </Card.Body>
            </Card>
        )}
      )}
     
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
          console.log('current program id:', currentProgram.id);
          deleteProgram(currentProgram);
          toggleModal();
        }}>Yes</Button>
        <Button onClick={toggleModal}>No</Button>
      </Modal>
    </div>
  )
};
export default ProgramList;