import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [randUUIDArr, setRandUUIDArr] = useState([]);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [editable, setEditable] = useState(false);
  const [editedFormData, setEditedFormData] = useState({});

  useEffect(() => {
    const arr = Array(6).fill().map(() => crypto.randomUUID());
    setRandUUIDArr(arr);
  }, [])
  
  const handleChange = (e, item) => {
    if (!submitted && !editable){
      setFormData({
        ...formData, [item]: e.target.value
      })
    }
    else{
      setEditedFormData({
        ...editedFormData, [item]: e.target.value
      })
      // console.log(editedFormData)
    }
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!editable){
      setSubmitted(true);
      setEditedFormData(formData);
    }
    if (editable){
      setFormData(editedFormData);
      setEditable(false);
    }
    console.log(formData);
  }

  return (
    <>
      <h2>Inputs</h2>
      <form onSubmit={handleSubmit} className='form'>
        {
          randUUIDArr.map((item, index) =>
            <div key={item} className='container'>
              <label className='label'>{(index === 2 || index === 5) ? `Password${index+1}` : `Text${index+1}`} </label>
              <input 
                className='input' 
                type={(index === 2 || index === 5) ? 'password' : 'text'} 
                name={(index === 2 || index === 5) ? 'password' : 'name'}  
                value={formData[item] || ""} 
                disabled={submitted}
                onChange={(e) => handleChange(e, item)} />
              <input 
                className='input' 
                type={(index === 2 || index === 5) ? 'password' : 'text'} 
                name={(index === 2 || index === 5) ? 'password' : 'name'}  
                value={editedFormData[item] || formData[item] || ""} 
                hidden={!editable}
                onChange={(e) => handleChange(e, item)} />
            </div>)
        }

        { (submitted && !editable) && <button className='button' type='btton' onClick={() => setEditable(true)}>Edit</button> }
        { (!submitted || editable) && <button className='button'>Submit</button> }
      </form>
    </>
  )
}

export default App
