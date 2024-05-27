import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Navbar } from "react-bootstrap";

import { AppContext } from "../application/provider";

const Searchbar = () => {
  const [state, setState] = useContext(AppContext);
  const [txtBuscar, seTxtBuscar] = useState("");
  
  const handleChange = (txt) => {
    seTxtBuscar(txt.target.value);
    console.log(txtBuscar);
  };

  const handleSubmit = (txt) => {
   /*  alert("A name was submitted: " + txtBuscar); */
    console.log(txtBuscar);
    setState({...state,q: txtBuscar});
    txt.preventDefault();
  };
   
  //SINO ACTUALIZA CADA VEZ LA APP Y RESETEA
  /*   const handleSubmit = (txtBuscar) => {
    //se puede borrar al pasar a funcional
    console.log("el estado a buscar es este:" + txtBuscar);
    this.props.handleFormSubmit(txtBuscar);
    /* txt.preventDefault(); */ /*   }; */

  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#">ReacTube</Navbar.Brand>

        <Form inline onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            placeholder=" "
            className="mr-sm-2"
          />

          <Button variant="btn btn-outline-light" type="submit">
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export { Searchbar };


















/* 
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { txtBuscar: "" };
  }
 
  handleChange = (txt) => {
    this.setState({ txtBuscar: txt.target.value });
    console.log(this.state.txtBuscar);
  };

   handleSubmit = (txt) => {  //se puede borrar al pasar a funcional
    console.log("el estado a buscar es este:" + this.state.txtBuscar);
    this.props.handleFormSubmit(this.state.txtBuscar);
    txt.preventDefault(); //SINO ACTUALIZA CADA VEZ LA APP Y RESETEA
  };


  render() {
    return (
      <div>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#">ReacTube</Navbar.Brand>

          <Form inline onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder=" "
              className="mr-sm-2"/>
            
            <Button variant="btn btn-outline-light"  type="submit">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export { Searchbar };
 */
