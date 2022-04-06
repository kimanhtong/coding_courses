import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProgramList from '../components/Program/ProgramList';
// import ProgramsContext from '../context/ProgramsContext';
import ProgramForm from '../components/Program/ProgramForm';
import ProgramView from '../components/Program/ProgramView';


const AppRouter = () => {
  // const [programs, setPrograms] = useState([]);
  return (
    <BrowserRouter>
      <div>
        <div className="main-content">
          {/* <ProgramsContext.Provider value={{ programs, setPrograms }}> */}
            <Routes>
              <Route element={<ProgramList/>} path="/program"/>
              <Route element={<ProgramForm/>} path="/program/edit/:id"/>
              <Route element={<ProgramForm/>} path="/program/new"/>
              <Route element={<ProgramView/>} path="/program/view/:id"/>
              <Route element={() => <Link to="/program" />} />
            </Routes>
          {/* </ProgramsContext.Provider > */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;