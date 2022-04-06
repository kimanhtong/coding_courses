import React, {useState, useEffect} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';


Modal.setAppElement("#root");

const ProgramView = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState({});
  let programs = [];
  const programRoot = '/program';
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  }
  const deleteProgram = (p) => {
    const program_delete_url = `http://localhost:3000/api/v1/programs/${p.id}`
    axios.delete(program_delete_url)
    .then (res => {
      localStorage.setItem('programs', JSON.stringify(res.data));
      navigate(programRoot);
    })
    .catch(res => {
      console.log(res.message);
    })
  };

  useEffect(() => {
    programs = JSON.parse(localStorage.getItem('programs'));
    if (programs) {
      const initProgram = id ? programs.filter(p => p.id === parseInt(id)) : [{}];
      setProgram(initProgram[0]);
    }
  }, []);

  return (
    <div>
      <form>
        <h3> Welcome to the program: {program.name}! </h3>
        <p> Description: {program.description}</p>
        <p> Duration: {program.duration_days} days.</p>
        <img
          src={program.img_url}
          className="card-img"
          alt={program.name}
          // style={{ maxWidth: 350, maxHeight: 350 }}
          width={"250px"}
          mode={"fit"}
        />
        <div>
          <button type="button" onClick={()=>navigate(`/program/edit/${id}`)}> Edit </button>
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
          deleteProgram(program);
        }}>Yes</button>
        <button type="button" onClick={toggleModal}>No</button>
      </Modal>
    </div>
)};

export default ProgramView;


