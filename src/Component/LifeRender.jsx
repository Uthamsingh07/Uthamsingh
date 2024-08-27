import React, { useState } from "react";


function LifeRender() {

    let [todolist, settodolist] = useState([

        { id: 1, name: "VEG" },




        { id: 2, name: "Nonveg" },

        { id: 3, name: "Chinese" },


        { id: 4, name: "Indian" },


        { id: 5, name: "Kfc" }



    ]
    )



    return (
        <>
            <h1>FOOD Festival</h1>
            {todolist.map((item) => (
                <div>
                    <h1>{item.id}.{item.name}</h1>
                    
                </div>
            ))}
        </>
    )
}
export default LifeRender