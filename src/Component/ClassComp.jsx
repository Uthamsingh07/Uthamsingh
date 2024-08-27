import React from "react";
import { Component } from "react";


class ClassComp extends Component {


    state = {
        Name: "Indian",
        Continent: "Asian",
        Popularity: 0

    }


    ChangeName = () => {
        if (this.state.Name == "Indian") {
            this.setState({ Name: "Tamil Nadu" })
        } else {
            this.setState({ Name: "Indian" })
        }

    }
    ChangeContinent = () => {
        if (this.state.Name == "Asian") {
            this.setState({ Name: "Europian" })
        } else {
            this.setState({ Name: "Asian" })
        }

    }


    ChangePopularity = () => {

        if (this.state.Popularity == "0") {
            this.setState({ Name: this.state.Popularity + 1 })
        } else {
            this.setState({Name : 0})
        }


    }




    render() {


        return (

            <>





                <h1>Name : {this.state.Name} </h1>
                <button onClick={this.ChangePopularity}>Add</button>


                <h1>Continent : {this.state.Continent} </h1>
                <button onClick={this.ChangeContinent}>Add1</button>


                <h1>Country : {this.state.Country} </h1>
                <button onClick={this.ChangeName}>Add2</button>

            </>
        )
    }
}


export default ClassComp