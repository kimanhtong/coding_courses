import React, {useState} from 'react';

const ProgramDetail = (props) => {
  const [program, setProgram] = useState({});
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