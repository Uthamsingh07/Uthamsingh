import React, { useEffect, useState } from "react";


function Effect(){

    let [product,setproduct] = useState([])

    let [count,setcount] = useState(0)

    let CreateFunction = async() =>{

        let res = await fetch("https://fakestoreapi.com/products");

        let seenu = await res.json();

        

        setproduct(seenu)
    };

    useEffect (( ) =>{
        CreateFunction();

        return() =>{
            console.log("clear")
        }
    },[]);

    let ChangeCount = () =>{

        setcount(count+1)
    };

    

    return(
        <>
        <h1 onClick={ChangeCount}>Effect . {count} </h1>

        {/* <button onClick={CreateFunction}>Click</button> */}

        {product.map((item) =>(

        <div className="row">
          <div class="card col-3">
            <div class="card-header">
                <h1>This is FlipKart Offical Product Sales page..</h1>
                </div>
                <div class="card-body">
            <h1>{item.title}</h1>
           
             <img src={item.image} width={200} height={200} alt="products image" />
             <div class="card-footer">
                <button class="bg-info"><h1>{item.price}</h1></button>
             </div>
             </div>
          </div>

          <div class="card col-3">
            <div class="card-header">
                <h1>This is FlipKart Offical Product Sales page..</h1>
                </div>
                <div class="card-body">
            <h1>{item.title}</h1>
            
             <img src={item.image} width={200} height={200} alt="products image" />
             <div class="card-footer">
                <button class="bg-info"><h1>{item.price}</h1></button>
             </div>
             </div>
          </div>
          <div class="card col-3">
            <div class="card-header">
                <h1>This is FlipKart Offical Product Sales page..</h1>
                </div>
                <div class="card-body">
            <h1>{item.title}</h1>
            
             <img src={item.image} width={200} height={200} alt="products image" />
             <div class="card-footer">
                <button class="bg-info"><h1>{item.price}</h1></button>
             </div>
             </div>
          </div>
          <div class="card col-3">
            <div class="card-header">
                <h1>This is FlipKart Offical Product Sales page..</h1>
                </div>
                <div class="card-body">
            <h1>{item.title}</h1>
           
             <img src={item.image} width={200} height={200} alt="products image" />
             <div class="card-footer">
                <button class="bg-info"><h1>{item.price}</h1></button>
             </div>
             </div>
          </div>


          </div>
        ))}
        </>
    )
}

export default Effect