import React from 'react';
import './App.css';
import axios from "axios";
import ProgramList from "./components/ProgramList";
import {useEffect, useState} from 'react';

const App = () => {
  const [programs, setPrograms] = useState([]);
  const fetchPrograms = () => {
    axios.get("/api/v1/programs")
    .then (res => setPrograms(res.data));
  };
  useEffect(fetchPrograms,[]);
  return (
    <div className="App">
      <ProgramList programs = {programs}/>
    </div>
  );
};
export default App;
