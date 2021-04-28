import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { MyProvider } from "./application/provider";
import { Searchbar } from "./utils/Searchbar";
import { VideoList } from "./utils/VideoList.js";
import { VideoDetail } from "./utils/VideoDetail";
import { Youtube } from "./youtube";
import { Hello } from "./youtube";

/* const App = (_) => (
  <MyProvider>
    <Youtube />
    <VideoList />
    <VideoDetail /> 
  </MyProvider>
); */

function App() {


/*   const handleSubmit=(txt)=>{ // METODO QUE RECUPERA POR PROPS EL VALOR QUE HA ENTRADO EL USUARIO. HAY QUE LLAMAR A LA BUSQUEDA AQUI
    console.log("Texto a buscar pasado por props a APP es:"+ txt); */
   /*  } */
  

  return (
    <div className="App">
      <MyProvider>
     
        <Youtube /* title='Sting' *//>
        <Container>
          <Row>
            <Col lg={12}>
              <Searchbar /* handleFormSubmit={handleSubmit} *//>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={7}>
             <VideoDetail /> 
            </Col>
            <Col lg={5} className="mt-2">
              < VideoList />
            </Col>
          </Row>
        </Container>
        
      </MyProvider>
    </div>
  );
}

export default App;
