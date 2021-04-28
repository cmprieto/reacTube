import React from "react";
import { useContext } from "react";
import { AppContext } from "../application/provider";

const VideoDetail = () => {
  const [state] = useContext(AppContext);
  const videoId= state.videos && state.videos[state.videoSeleccion].id.videoId;  /* RECUPERO VALOR ID DE VIDEO DE YOUTUBE PARA EMBEDERLO EN IFRAME */
  /* alert("El estado es:"+ state.videoSeleccion); */
 
  const url='https://youtube.com/embed/'+ videoId;
  console.log(url);

  return (
    <div>
      {/*  <img src={state.videos && state.videos[3].snippet.thumbnails.high.url} alt="test"></img>  */}
       <iframe id="player" type="text/html" width="640" height="360" src= {url} frameborder="0" allowFullScreen/>
      <h5>{state.videos && state.videos[state.videoSeleccion].snippet.title}</h5> 
    </div>
  );
}

export { VideoDetail };
