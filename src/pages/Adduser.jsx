import React, { useState } from 'react'
import { useDispatch } from "react-redux";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Adduser() {
  const [forminput, setFormInput] = useState({
    username: '',
    emailAddress: "",
    id: randomInteger(0,9999)
  })
  const dispatch = useDispatch();

  const handleChange = e => {
    setFormInput({
      ...forminput,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit");
    dispatch({ type: "ADDUSER", payload: forminput })
    setFormInput({
      username: '',
      emailAddress: "",
      id: randomInteger(0,9999)
    })

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder='Enter Username' type="text" value={forminput.username} onChange={handleChange} />
        <input name="emailAddress" placeholder='Enter Email Address' type="email" value={forminput.emailAddress} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Adduser