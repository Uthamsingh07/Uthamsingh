import React, { useState } from "react";



function FormOne (){

    let [Firstname,setFirstname] = useState("");
    let [Age,setAge] = useState("");
    let [Email,setEmail] = useState("");
    let [Fathername,setFathername] = useState("");
    let [Mothername,setMothername] = useState("");
    let [District,setDistrict] = useState("");
    let [Pincode,setPincode] = useState("");
    let [State,setState] = useState("");


    let handlename =(e) =>{
        setFirstname(e.target.value)
    }
    let handleage =(e) =>{
        setAge(e.target.value)
    }
    let handleemail =(e) =>{
        setEmail(e.target.value)
    }
    let handlefathername =(e) =>{
        setFathername(e.target.value)
    }
    let handlemothername =(e) =>{
        setMothername(e.target.value)
    }
    let handledistrict =(e) =>{
        setDistrict(e.target.value)
    }

    let handlepincode =(e) =>{
        setPincode(e.target.value)
    }
    let handlestate =(e) =>{
        setState(e.target.value)
    }
   




    return(
        <>
         <div class="container-lg text-dark bg-info mt-5 p-5 text-center ">

            <div class="bg-light ">
       
        <label >Yourname</label>
        <input onChange={handlename} type="text" placeholder="YourName" />

        <br /><br />
        <label >Age</label>
        <input onChange={handleage} type="text" placeholder="Age" />

        <br /><br />
        <label >Email</label>
        <input onChange={handleemail} type="text" placeholder="Email" />

        <br /><br />
        <label >Father name</label>
        <input onChange={handlefathername} type="text" placeholder="Fathername" />

        <br /><br />
        <label >Mother name</label>
        <input onChange={handlemothername} type="text" placeholder="Mothername" />

        <br /><br />
        {/* <label >Sister Name</label>
        <input type="text" placeholder="Brother/Sister" /> */}
{/* 
        <br /><br /> */}
        <label >District</label>
        <input onChange={handledistrict} type="text" placeholder="District" />

        <br /><br />
        <label >Pincode</label>
        <input onChange={handlepincode} type="text" placeholder="Pincode" />

        <br /><br />
        <label >State</label>
        <input onChange={handlestate} type="text" placeholder="State" />

        <br /><br />

        <button>Submit</button>

        </div>
        </div>
        

     

        <br /><br /><br /><br /><br /><br />
         <div class="Container-fluid bg-dark text-info ">
            <div class="bg-light">
        <h1>Name : {Firstname}</h1><br />
        <h1>Age : {Age}</h1><br />
        <h1>Email : {Email}</h1><br />
        <h1>Fathername : {Fathername}</h1><br />
        <h1>Mothername : {Mothername}</h1><br />
        <h1>District : {District}</h1><br />
        <h1>Pincode : {Pincode}</h1><br />
        <h1>State : {State}</h1><br />
        </div>
        </div>
       
        </>
    )
}
export default FormOne