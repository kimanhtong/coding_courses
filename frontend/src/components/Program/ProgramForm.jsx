import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const ProgramForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let programs = JSON.parse(localStorage.getItem('programs'));
  let initProgram = id ? programs.filter(p => p.id === parseInt(id)) : [{}];
  const [program, setProgram] = useState(initProgram ? initProgram[0] : {});
  const [image, setImage] = useState(initProgram[0] ? initProgram[0].img_url : null);
  const createDBLink = `http://localhost:3000/api/v1/programs`;
  const programRoot = '/program';
  let programView = id ? `/program/view/${id}` : '';

  const saveProgram = () => {
    if (id) {
      const editDBLink = `http://localhost:3000/api/v1/programs/${id}`;
      console.log(programs);
      axios
      .put(editDBLink, program)
      .then(res => {
        let index = programs.indexOf(program);
        console.log(index);
        programs.splice(index, 1, res.data);
        console.log(programs);
        localStorage.setItem('programs', JSON.stringify(programs));
        navigate(programView);
      })
      .catch(err => {
        console.log(err.message);
      });
    } else {
      axios
      .post(createDBLink, program)
      .then(res => {
        //program.id = res.data.id;
        programs.push(res.data);
        localStorage.setItem('programs', JSON.stringify(programs));
        programView = `/program/view/${res.data.id}`;
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

  const handleImageUpload = (evt) => {
    evt.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append("file",image);
      formData.append("upload_preset", "anhtest");
      axios.post(
        "https://api.cloudinary.com/v1_1/de6puygvt/image/upload"
        ,formData
      ).then((response)=>{
        setImage(response.data.url);
        setProgram({...program, img_url: response.data.url});
      })
      .catch (err => console.log(err));
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
          {program.img_url && (
            <div>
              <img src={program.img_url} alt="cannot load!" width={"250px"} mode={"fit"}/>
            </div>
          )}
          <br />
          <br />
          <div className="form-control">
            <input
              type="file"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
            />
            <button onClick={handleImageUpload}> Upload </button>
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
