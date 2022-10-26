import React, { Component } from "react";
import Main from "./Component/ProductsComponent";
import { Jumbotron } from "reactstrap";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron class="row col-12">PE FER</Jumbotron>
        <Main />
      </div>
    );
  }
}

export default App;
