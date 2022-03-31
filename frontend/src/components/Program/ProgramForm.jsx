import React, {useState} from 'react';

const ProgramDetail = (props) => {
  const [program, setProgram] = useState({});
  return (
    <div> 
      <h1> Edit or Create a new Program </h1>
      <label> Please type in the program name </label>
     
    </div>
  )
};
export default ProgramDetail;