import React from "react";
import { useContext } from "react";
import { AppContext } from "../application/provider";
import { VideoItem } from "./VideoItem";

const VideoList = () => {
  const [state] = useContext(AppContext);
  let i=-1; 

  return (
    <div>
      {console.log(state)}
      {state.videos && state.videos.map((e) => {
          { console.log(e.id.videoId);}
          {i=i+1}; /*  EN CADA PASADA DE MAP ASIGNO VARIABLE DE CONTROL E INCREMENTO +1 */
          return (
            <div key={e.id.videoId}>
              <VideoItem thumbs={e.snippet.thumbnails.default.url} title={e.snippet.title} number={i}/>  {/* PASO POR PROPS LA POSICION EN EL ARRAY DE VIDEOS */}
              
            </div>
          );
        })}
    </div>
  );
};
export { VideoList };


