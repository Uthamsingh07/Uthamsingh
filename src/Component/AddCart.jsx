import React, { Component } from "react";


class AddCart extends Component {


    state = {
        Name: "H.Uthamsingh",
        Count: 0
    }
    Countincrease = () => {
        this.setState({ Count: this.state.Count + 1 })
    }
    Countdecrease = () => {
        if (this.state.Count >= 0 && this.state.Count <= 0) {
            this.setState({ Count: 0 })
        } else {
            this.setState({ Count: this.state.Count - 1 })
        }

    }
    Changename = () => {
        this.setState({ Name: "Seenu" })
    }


    render() {
        return (
            <>
                <h1>Motivational Star : {this.state.Name}</h1>
                <h1>Count : {this.state.Count}</h1>
                <button onClick={this.Countincrease}>Count Increase</button>
                <button onClick={this.Countdecrease}>Countdecrease</button>
                <button onClick={this.Changename}>Change Name</button>
            </>
        )
    }
}

export default AddCart