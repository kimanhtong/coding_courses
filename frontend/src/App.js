import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import ProgramList from "./components/ProgramList";

const program_list_url = "http://localhost:3000/api/v1/programs";


const App = () => {
  const [programs, setPrograms] = useState([{id:0,name:"",description:"",duration_days:0}]);
  const fetchPrograms = () => {
    axios.get(program_list_url)
    .then (res => {
      setPrograms(res.data)})
    .catch(res => console.log(res.message));
  };
  useEffect(fetchPrograms,[]);

  return (
    <div className="App">
      <ProgramList programs={programs}/>
    </div>
  );
};
export default App;
