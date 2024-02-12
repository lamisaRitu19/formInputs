import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [randUUIDArr, setRandUUIDArr] = useState([]);
  useEffect(() => {
    const arr = Array(6).fill().map(() => crypto.randomUUID());
    setRandUUIDArr(arr);
  }, [])
  
  const [formData, setFormData] = useState({});

  const handleChange = (e, item) => {
    setFormData({
      ...formData, [item]: e.target.value
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <h2>Inputs</h2>
      <form onSubmit={handleSubmit} className='form'>
        {/* <div className='container'>
          <label className='label'>Name</label>
          <input className='input' type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className='container'>
          <label className='label'>Password</label>
          <input className='input' type="password" name="password" value={formData.password} onChange={handleChange}  />
        </div>
        <p>{formData.name}</p> */}

        {
          randUUIDArr.map((item, index) =>
            <div key={item} className='container'>
              <label className='label'>{(index === 2 || index === 5) ? `Password${index+1}` : `Text${index+1}`} </label>
              <input 
                className='input' 
                type={(index === 2 || index === 5) ? 'password' : 'text'} 
                name={(index === 2 || index === 5) ? 'password' : 'name'}  
                value={formData[item] || ""} 
                onChange={(e) => handleChange(e, item)} />
            </div>)
        }

        <button className='button'>Submit</button> 
      </form>
    </>
  )
}

export default App
