import React, {useState, useContext} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Modal from 'react-modal';
import axios from "axios";
import ProgramsContext from '../../context/ProgramsContext';

const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { programs, setPrograms } = useContext(ProgramsContext);
  const [program, setProgram] = useState(programs[id] || {});
  const createDBLink = `http://localhost:3000/api/v1/programs`;
  const programRoot = '/program'

  const saveProgram = () => {
    if (id) {
      const editDBLink = `http://localhost:3000/api/v1/programs/${id}`;
      const programView = `/program/view/${id}`;
      axios
      .put(editDBLink, program)
      .then(res => {
        console.log(res.data);
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
        const programView = `/program/view/${res.data.id}`;
        navigate(programView);
      })
      .catch(err => {
        console.log(err.message);
        navigate(programRoot);
      });
    }
  }

  return (
    <div> 
      <h1> Edit or Create a new Program </h1>
      <form action="/action_page.php">
        <div className="form-group">
          <label>Program Name:</label>
          <input type="text" className="form-control" placeholder="Enter the program name" name="name"/>
        </div>
        <div className="form-group">
          <label>Program Description</label>
          <input type="text" className="form-control" placeholder="Enter the program description" name="description"/>
        </div>
        <div className="form-group">
          <label>Duration in Days</label>
          <input type="text" className="form-control" placeholder="Enter the program duration in days" name="duration_days"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="submit" className="btn btn-secondary">Cancel</button>
      </form>
     
    </div>
  )
};
export default ProgramDetail;