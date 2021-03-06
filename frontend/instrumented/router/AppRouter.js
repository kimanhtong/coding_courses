import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProgramList from '../components/Program/ProgramList';
import ProgramForm from '../components/Program/ProgramForm';
import ProgramView from '../components/Program/ProgramView';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="main-content">
            <Routes>
              <Route element={<ProgramList/>} path="/program"/>
              <Route element={<ProgramForm/>} path="/program/edit/:id"/>
              <Route element={<ProgramForm/>} path="/program/new"/>
              <Route element={<ProgramView/>} path="/program/view/:id"/>
              <Route element={() => <Link to="/program" />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;