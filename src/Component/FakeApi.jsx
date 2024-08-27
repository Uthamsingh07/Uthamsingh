import React, { Component } from "react";

class FakeApi extends Component {

  state = {
    productdata: []
  }


  componentDidMount() {



    this.handlefetch()
    
  }

  handlefetch = async () => {
    let res = await fetch("https://fakestoreapi.com/products/1");
    let data = await res.json();
    // console.log(seenu);
    this.setState({ productdata: data })
  }

  render() {
    return (
      <>


        {this.state.productdata.map((item) => (
             <div>
              <h1>{item.title}</h1>
              <h1>{item.price}</h1>
             </div>
        ))}

      </>
    )
  }
}

export default FakeApi