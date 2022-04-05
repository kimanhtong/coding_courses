import React, {useState, useEffect, useContext} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-modal';
import axios from "axios";
//import ProgramsContext from '../../context/ProgramsContext';

Modal.setAppElement("#root");

const ProgramList = () => {
  // const { programs, setPrograms } = useContext(ProgramsContext);
  const [programs, setPrograms] = useState([]);
  const [ currentProgram, setCurrentProgram ] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const programRoot = "/program";
  const navigate = useNavigate();
  //const [items, setItems] = useState([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const deleteProgram = (p) => {
    const program_delete_url = `http://localhost:3000/api/v1/programs/${p.id}`
    axios.delete(program_delete_url)
    .then (res => {
      setPrograms(res.data);
      localStorage.setItem('programs', JSON.stringify(programs));
      navigate(programRoot);
    })
    .catch(res => {
      console.log(res.message);
    })
  };

  const allPrograms = programs.map(program => (
    <div key={program.id} className="col-sm-4">
      <h5 className="card-header" style={{ marginBottom: 20 }}>Course: {program.name}</h5>
      <img
        src={program.img_url}
        className="card-img"
        alt={program.name}
        style={{ maxWidth: 350, maxHeight: 350 }}
        // width={"250px"}
        // mode={"fit"}
      />
      <div className="card-body">
        <div className="card-actions" style={{ marginBottom: 20 }} >
          <button type="button" className="btn btn-primary" 
            onClick={()=>navigate(`/program/view/${program.id}`)}>
            View
          </button>
          <button type="button" className="btn btn-secondary" 
            onClick={()=>navigate(`/program/edit/${program.id}`)}>
            Edit
          </button>
          <button type="button" className="btn btn-danger"
            onClick={() => {
              setCurrentProgram(program);
              toggleModal();
          }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  ));

  const noProgram = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No programs yet. Why not <Link to={"/program/new"}>create one?</Link>
      </h4>
    </div>
  );
  
  const fetchPrograms = () => {
    const program_list_url = "http://localhost:3000/api/v1/programs"
    axios.get(program_list_url)
    .then (res => {
      setPrograms(res.data)
      localStorage.setItem('programs', JSON.stringify(programs))})
    .catch(res => console.log(res.message));
  };

  useEffect(()=>{
    fetchPrograms();
  },[]);

  return (
    <div>
      <h1> Here is the list of all the current programs </h1>
      <button onClick={()=>navigate("/program/new")}>
        Add a new program
      </button>
      {/* <div className="container"> */}
        {/* <div className="row"> */}
          {programs.length > 0 ? allPrograms : noProgram}
        {/* </div> */}
      {/* </div> */}

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
        <button onClick={() => {
          deleteProgram(currentProgram);
          toggleModal();
        }}>Yes</button>
        <button onClick={toggleModal}>No</button>
      </Modal>
    </div>
  )
};
export default ProgramList;