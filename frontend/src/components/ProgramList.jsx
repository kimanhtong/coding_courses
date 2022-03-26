import React from 'react';

const ProgramList = (props) => {
  return (
    <div>
      <h1> Here is the list of all current programs </h1>
      {props.programs.map(program => {
      return (
        <div key={program.id}>
          <h2> Name: {program.name} </h2>
          <p> Description: {program.description} </p>
          <p> Duration: {program.duration_days} days </p>
        </div>
      )})}
    </div>
  )
};
export default ProgramList;