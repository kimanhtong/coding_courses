import React from 'react';

const ProgramList = (props) => {
  const List = props.programs.map(program => {
    return (
      <div>
        <div> Name: {program.name} </div>
        <div> Description: {program.description} </div>
        <div> Duration: {program.duration_days} days </div>
      </div>
    )
  });
  return (
    <div>
      <h1> Here is the list of all current programs </h1>
      <List />
    </div>
  )
};
export default ProgramList;