import React,{useState} from "react";

function FunComp (){
  
    var [name,setname] = useState("Mahabharatham.")

    var [world,setworld] = useState("Totally this world is over than 148 Country..")

    var Changename =() =>{
        if(name == "Mahabharatham"){
            setname("krishna")
        }else{
            setname("Mahabharatham")
        }
    }
        var ChangeCountry =() =>{
            if(world == "Totally this world is over than 148 country.."){
               setworld("No one lived this world upcoming years because human are devil in this world")
            }else{
                setworld("Totally this world is over than 148 country..")
            }

        }

   

    return(
        <>
        <h1>Never to trust anyone in the world ..Because this world is Selfish .Never to gives you back... : {name}</h1>
        <h1>Total :{world}</h1>
        <button onClick={Changename}>Change</button>
        <button onClick={ChangeCountry}>Add</button>
        </>
    )
}
export default FunComp