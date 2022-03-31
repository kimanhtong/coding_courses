import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProgramList from '../components/Program/ProgramList';
import ProgramsContext from '../context/ProgramsContext';
import ProgramForm from '../components/Program/ProgramForm';


const AppRouter = () => {
  const [programs, setPrograms] = useState([]);
  return (
    <BrowserRouter>
      <div>
        <div className="main-content">
          <ProgramsContext.Provider value={{ programs, setPrograms }}>
            <Routes>
              <Route element={<ProgramList/>} path="/program"/>
              <Route element={<ProgramForm/>} path="/program/edit/:id"/>
              {/*<Route element={<AddBook/>} path="/add" />
              <Route element={() => <Link to="/" />} /> */}
            </Routes>
          </ProgramsContext.Provider >
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;