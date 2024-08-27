import React, { useState } from "react";

function Form1() {
    const [name, setname] = useState("")
    const [age, setage] = useState(0)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handlename = (e) => {
        setname(e.target.value)
    }

    const handleage = (e) => {
        setage(e.target.value)
    }

    const handleemail = (e) => {
        setemail(e.target.value)
    }

    const handlepassword = (e) => {
        setpassword(e.target.value)
    }

    return (
        <>
            <h1>Form</h1>
            <br />
            <label htmlFor="">Name :</label>
            <input type="text" onChange={handlename} placeholder="Naruto" />
            <br />
            <br />
            <label htmlFor="">Age :</label>
            <input type="Number" onChange={handleage} placeholder="21" />
            <br />
            <br />
            <label htmlFor="">Email :</label>
            <input type="text" onChange={handleemail} placeholder="email" />
            <br />
            <br />
            <label htmlFor="">Password :</label>
            <input type="password" onChange={handlepassword} placeholder="password" />
            <br />
            <br />
            <button>Submit</button>
            <br />
            <br />
            <h1>Name : {name}</h1>
            <h1>Age :{age}</h1>
            <h1>Email :{email}</h1>
            <h1>Password :{password}</h1>
        </>
        )
}
export default Form1