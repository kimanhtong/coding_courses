import {useState, useEffect} from "react";
import axios from 'axios';

export default function useProgramData() {
  const [state, setState] = useState({
    programs: {},
    languages: {}
  });
  useEffect(()=>{Promise.all([
    axios.get('/api/v1/programs'),
    axios.get('/api/v1/languages'),
    ]).then(all=>{
      setState(prev =>({...prev, programs:all[0].data, languages:all[1].data}))
    })},[]);

  const editProgram = (id, program) => {
    const saveToServer = axios
      .put(`/api/v1/${id}`, program)
      .then(res => console.log(`Received status code (adding): ${res.status}`))
      .then (() => {
        const days = updateSpots(id, freeSpotChanged);
        setState({
          ...state,
          appointments,
          days
        });
        return Promise.resolve('Saved!');
      })
      .catch(res => {
        console.log(res);
        setState({
          ...state
        });
        return Promise.reject('Error Saving!');
      })
    return saveToServer;
  }

  function cancelInterview(id) {
    const appointments = {...state.appointments};
    const freeSpotChanged = 1;
    appointments[id].program = null;
    const deleteFromServer = axios
      .delete(`/api/appointments/${id}`)
      .then(res => console.log(`Received status code (removing): ${res.status}`))
      .then (() => {
        const days = updateSpots(id, freeSpotChanged);
        setState({
          ...state,
          appointments,
          days
        });
        return Promise.resolve('Deleted!');
      })
      .catch(res => {
        console.log(res);
        return Promise.reject('Error Deleting!');
      })
    return deleteFromServer;
  }



  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
};