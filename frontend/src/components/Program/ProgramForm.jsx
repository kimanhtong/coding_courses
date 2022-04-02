import React, {useState, useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import Modal from 'react-modal';
import axios from "axios";
import ProgramsContext from '../../context/ProgramsContext';

const ProgramForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { programs, setPrograms } = useContext(ProgramsContext);
  const initProgram = id ? programs ? programs.filter(p => p.id === parseInt(id)) : [{}] : [{}];
  const [program, setProgram] = useState(initProgram[0] || {});
  const createDBLink = `http://localhost:3000/api/v1/programs`;
  const programRoot = '/program';
  let programView = id ? `/program/view/${id}` : '';

  const saveProgram = () => {
    if (id) {
      const editDBLink = `http://localhost:3000/api/v1/programs/${id}`;
      axios
      .put(editDBLink, program)
      .then(res => {
        setProgram(res.data);
        let newPrograms = programs.filter(p => p.id !== parseInt(id));
        newPrograms.push(program);
        setPrograms(newPrograms);
        navigate(programView);
      })
      .catch(err => {
        console.log(err.message);
      });
    } else {
      axios
      .post(createDBLink, program)
      .then(res => {
        program.id = res.data.id;
        programs.push(program);
        programView = `/program/view/${program.id}`;
        navigate(programView);
      })
      .catch(err => {
        console.log(err.message);
        navigate(programRoot);
      });
    }
  };

  const handleChange = (event) => {
    let newProgram = {...program,[event.target.name]:event.target.value};
    setProgram(newProgram);
  }

  return (
    <div> 
      <h1> {id && `Edit the Program ${id}`} </h1>
      <h1> {!id && `Create a new Program`} </h1>
      <form>
        <div className="form-group">
          <label>Program Name:</label>
          <input type="text" className="form-control" value={program.name ? program.name : ''} name="name"
            onChange={handleChange} placeholder='Enter the Name'/>
        </div>
        <div className="form-group">
          <label>Program Description</label>
          <input type="text" className="form-control" value={program.description ? program.description : ''} name="description"
            onChange={handleChange} placeholder='Enter the Description'/>
        </div>
        <div className="form-group">
          <label>Duration in Days</label>
          <input type="text" className="form-control" value={program.duration_days ? program.duration_days : ''} name="duration_days"
            onChange={handleChange} placeholder='Enter the Duration in Days'/>
        </div>
        <button type="button" onClick={saveProgram} className="btn btn-primary">Submit</button>
        <button type="button" onClick={()=>setProgram(initProgram[0]||{})} className="btn btn-secondary">Reset</button>
        <button type="button" onClick={()=>navigate(programRoot)} className="btn btn-secondary">Back to View All</button>
        {id ? <button type="button" onClick={()=>navigate(programView)} className="btn btn-secondary">Back to View Detail</button> : null}
      </form>
    </div>
)};

export default ProgramForm;
