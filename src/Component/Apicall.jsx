import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";


function Apicall (){



    let [productdetails,setproductdetails] = useState([])

    let [count,setcount] = useState(0)

    let handlefetch = async () =>{
        

        let res = await fetch('https://fakestoreapi.com/products');

        let data = await res.json();
        
        setproductdetails(data);
    }

    useEffect(()=>{
        handlefetch()
    })
    
    let handleclick = (() =>{
        setcount(count+1)
    })

    return(

        <>
        
        <h1 onClick={handleclick}>John Cena - {count}</h1>
          
       
       <br />
       

       {productdetails.map((datas) =>(
          <div>
            <h1>{datas.title}</h1>
            <img src={datas.image} height={400} width={300} />
            <h4>{datas.price}</h4>
          </div>
       ))}
        
        </>

    )
}

export default Apicall