import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const randArr = [];
  for (let i=0; i<10; i++){
    randArr.push(crypto.randomUUID())
  }
  // console.log(randArr)

  const inputData =  {
    name: "", password: ""
  }
  const [formData, setFormData] = useState(inputData);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name]:value
    })
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // const form = event.target;
    // const name = form.name.value;
    // const password = form.password.value;
    // const login = form.login;
    // const signin = form.signin;
    // console.log('Name: ', name, ';Password: ', password);
    // login.checked ? console.log("You are logged in") : console.log("You are not logged in")
    // signin.checked ? console.log("You are signed in") : console.log("You are not signed in")
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
          randArr.map(item => <div key={item}>
            <div className='container'>
          <label className='label'>Name</label>
          <input className='input' type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className='container'>
          <label className='label'>Password</label>
          <input className='input' type="password" name="password" value={formData.password} onChange={handleChange}  />
        </div>
          </div>)
        }

        <button className='button'>Submit</button>  
        
      </form>
    </>
  )
}

export default App
