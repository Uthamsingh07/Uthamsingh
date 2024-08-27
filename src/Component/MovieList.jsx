import React, { Component } from "react";


class MovieList extends Component {

    state = {
        MovieList: [
            {
                Moviename: "Leo",
                Actor: "Thalapathy Vijay",
                Image: "https://tse3.mm.bing.net/th?id=OIP.nsaokNVO-JgCi705XZfI1QAAAA&pid=Api&P=0&h=180",
                Ratings: "4.5* Star",
                ReleaseDate: "April 14",
                BoxOffice: "620Cr"

            },
            {
                Moviename : "Master.",
                Actor : "Thalapathy Vijay",
                Image : "https://tse3.mm.bing.net/th?id=OIP.maO0-1V17_z00Owf-GQMHwHaEK&pid=Api&P=0&h=180",
                Ratings :  "4.3 * Star",
                ReleaseDate : "Jun-5",
                BoxOffice : "400Cr"


            },
            {
                Moviename : "Sarkar",
                Actor :"Thalapathy Vijay",
                Image :"https://tse4.mm.bing.net/th?id=OIP.FqV9QV4Zl8RWCRE2uuhDugHaFj&pid=Api&P=0&h=180",
                Ratings :"3.5* Star",
                ReleaseDate : "Oct-19",
                BoxOffice :"3500Cr"

            },
            
        ]

    }

    render() {
        return (

            <>
            {this.state.MovieList.map((item)=>(
               <div>     
                
                
               <h1>{this.state.Moviename}</h1>
  
              </div> 
            ))}

            

            </>
        )
    }
}
export default MovieList