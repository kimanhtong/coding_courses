import React, {useState, useContext, useEffect} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Modal from 'react-modal';
import axios from "axios";
import ProgramsContext from '../../context/ProgramsContext';

const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { programs, setPrograms } = useContext(ProgramsContext);
  const [program, setProgram] = useState({});
  const createDBLink = `http://localhost:3000/api/v1/programs`;
  const programRoot = '/program';


  const saveProgram = () => {
    if (id) {
      const editDBLink = `http://localhost:3000/api/v1/programs/${id}`;
      const programView = `/program/view/${id}`;
      console.log(program);
      axios
      .put(editDBLink, program)
      .then(res => {
        console.log(res.data);
        setProgram(res.data);
        console.log(program);
        setPrograms(...programs, program);
        navigate(programView);
      })
      .catch(err => {
        console.log(err.message);
        navigate(programRoot);
      });
    } else {
      axios
      .post(createDBLink, program)
      .then(res => {
        console.log(res.data);
        setProgram(res.data)
        setPrograms(...programs, program);
        const programView = `/program/view/${res.data.id}`;
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
    console.log(program);
  }

  useEffect(() => {
    console.log(`all programs: `, programs);
    const initProgram = id ? programs.filter(program => program.id === id) : {};
    console.log(`init program: `, initProgram);
    setProgram(initProgram);
    console.log(`program: `, program);
  },[]);

  return (
    <div> 
      <h1> {id && `Edit the Program ${id}`} </h1>
      <h1> {!id && `Create a new Program`} </h1>
      <form>
        <div className="form-group">
          <label>Program Name:</label>
          <input type="text" className="form-control" placeholder="Enter the program name" name="name"
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Program Description</label>
          <input type="text" className="form-control" placeholder="Enter the program description" name="description"
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Duration in Days</label>
          <input type="text" className="form-control" placeholder="Enter the program duration in days" name="duration_days"
            onChange={handleChange}/>
        </div>
        <button onClick={saveProgram} className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-secondary">Reset</button>
        <button onClick={()=>navigate(programRoot)} className="btn btn-secondary">Cancel</button>
      </form>
    </div>
  )
};
export default ProgramDetail;