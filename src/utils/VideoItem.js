import React from "react";
import { useContext } from "react";
import { Media } from "react-bootstrap";
import { AppContext } from "../application/provider";

const VideoItem = ({thumbs, title, number}) => {
  const [state, setState] = useContext(AppContext);
  // definir valor de video seleccionado

  const videoSeleccion = () => {
    
    setState({...state, videoSeleccion: number}); /* ASIGNO NUEVA PROPIEDAD AL ESTADO GLOBAL INDICA NUMERO DE VIDEO DE VIDEOLIST ACTIVO  */
/*     alert(number);
 */   }
  
   
  return (
    <div>
      <Media className="m-3">
              {/* <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" /> */} {/*SE REPRODUCE EN LISTADO LATERAL */}
              <img src={thumbs} alt="youtube" onClick={videoSeleccion} ></img>    {/* // MODIFICAR ESTADO GLOBAL DE VIDEO SELECCIONADO AL CLICKAR MINIATURA */}
              <Media.Body className="m-3">
                <h6>{title}</h6>
              </Media.Body>
             
            </Media>
    </div>
  );
};

export { VideoItem };
