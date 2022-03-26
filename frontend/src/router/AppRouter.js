import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProgramList from '../components/Program/ProgramList';
import ProgramsContext from '../context/ProgramsContext';


const AppRouter = () => {
  const [programs, setPrograms] = useState([]);
  return (
    <BrowserRouter>
      <div>
        <div className="main-content">
          <ProgramsContext.Provider value={{ programs, setPrograms }}>
            <Routes>
              <Route element={<ProgramList/>} path="/"/>
              {/*<Route element={<AddBook/>} path="/add" />
              <Route element={<EditBook/>} path="/edit/:id"/>
              <Route element={() => <Link to="/" />} /> */}
            </Routes>
          </ProgramsContext.Provider >
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;