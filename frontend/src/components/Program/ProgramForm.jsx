import React, {useState, useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import ProgramsContext from '../../context/ProgramsContext';

const ProgramForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { programs, setPrograms } = useContext(ProgramsContext);
  const initProgram = id ? programs ? programs.filter(p => p.id === parseInt(id)) : [{}] : [{}];
  const [program, setProgram] = useState(initProgram[0] || {});
  const [image, setImage] = useState(program ? program.img_url ? program.img_url : null : null);
  const createDBLink = `http://localhost:3000/api/v1/programs`;
  const programRoot = '/program';
  let programView = id ? `/program/view/${id}` : '';

  const saveProgram = () => {
    if (id) {
      const editDBLink = `http://localhost:3000/api/v1/programs/${id}`;
      axios
      .put(editDBLink, program)
      .then(res => {
        setProgram(res.data);
        let newPrograms = programs.filter(p => p.id !== parseInt(id));
        newPrograms.push(program);
        setPrograms(newPrograms);
        navigate(programView);
      })
      .catch(err => {
        console.log(err.message);
      });
    } else {
      axios
      .post(createDBLink, program)
      .then(res => {
        program.id = res.data.id;
        programs.push(program);
        programView = `/program/view/${program.id}`;
        navigate(programView);
      })
      .catch(err => {
        console.log(err.message);
        navigate(programRoot);
      });
    }
  };

  const handleChange = (event) => {
    let newProgram = {...program,[event.target.name]:event.target.value};
    setProgram(newProgram);
  }

  const handleImageUpload = (pic) => {
    console.log(pic);
    if (pic) {
      const formData = new FormData();
      formData.append("file",pic);
      formData.append("upload_preset", "anhtest");
      console.log(formData);
      axios.post(
        "https://api.cloudinary.com/v1_1/de6puygvt/image/upload"
        ,formData
      ).then((response)=>{
        console.log(response.data.url);
        setImage(response.data.url);
        let newProgram = {...program, img_url: image};
        setProgram(newProgram);
      });
    }
  }

  return (
    <div> 
      <h1> {id && `Edit the Program ${id}`} </h1>
      <h1> {!id && `Create a new Program`} </h1>
      <form>
        <div className="form-group">
          <label>Program Name:</label>
          <input type="text" className="form-control" value={program.name ? program.name : ''} name="name"
            onChange={handleChange} placeholder='Enter the Name'/>
        </div>
        <div className="form-group">
          <label>Program Description</label>
          <input type="text" className="form-control" value={program.description ? program.description : ''} name="description"
            onChange={handleChange} placeholder='Enter the Description'/>
        </div>
        <div className="form-group">
          <label>Duration in Days</label>
          <input type="text" className="form-control" value={program.duration_days ? program.duration_days : ''} name="duration_days"
            onChange={handleChange} placeholder='Enter the Duration in Days'/>
        </div>
        <div className="form-control">
          <h1>Upload and Display Image usign React Hook's</h1>
          {image && (
            <div>
              <img alt="cannot load!" width={"250px"} src={URL.createObjectURL(image)} name="img_url"/>
              <br />
              <button onClick={()=>setImage(null)}>Remove</button>
            </div>
          )}
          <br />
          <br />
          <div className="form-control">
            <input
              type="file"
              name="img_url"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setImage(event.target.files[0]);
              }}
            />
            <button onClick={()=>handleImageUpload(image)}> Upload </button>
          </div> 
        </div>
        <button type="button" onClick={saveProgram} className="btn btn-primary">Submit</button>
        <button type="button" onClick={()=>setProgram(initProgram[0]||{})} className="btn btn-secondary">Reset</button>
        <button type="button" onClick={()=>navigate(programRoot)} className="btn btn-secondary">Back to View All</button>
        {id ? <button type="button" onClick={()=>navigate(programView)} className="btn btn-secondary">Back to View Detail</button> : null}
      </form>
    </div>
)};

export default ProgramForm;
