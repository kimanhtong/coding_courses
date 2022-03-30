import React, {useState} from 'react';

const ProgramDetail = (props) => {
  const [program, setProgram] = props;

  return (
    <div> Hello from {program.name} program! </div>
  )
};
export default ProgramDetail;