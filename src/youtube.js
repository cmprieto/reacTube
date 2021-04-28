import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "./application/provider";


/* const Hello = ({title})=><h2>{title}</h2>; */

const Youtube = () => {
  const [state, setState] = useContext(AppContext);
   
  useEffect(() => {
    /* alert('2111'); */
     axios.get('https://www.googleapis.com/youtube/v3/search?', {
                        params: {
                          part: 'snippet',
                          q: state.q,
                          type: 'video',
                          videoCaption: 'closedCaption',
                          key: 'AIzaSyDMOjvlGL4hzC4lA9unPuvPJcMz-k7KOFs'
                        }
                      }
/*         `https://www.googleapis.com/youtube/v3/search?part=snippet&q=Alex+Webb&type=video&videoCaption=closedCaption&key=AIzaSyDMOjvlGL4hzC4lA9unPuvPJcMz-k7KOFs`
 */    
      ) 
      .then((res) => {
        
        setState({...state,videos: res.data.items});
        /* console.log(res.data.items); */
      });
  }, [state.q]);


  return (
    <div>
      {console.log(state.q)}
    
     {/*  <VideoList videos={videoList} /> */}
      {/*   <VideoDetail videos={videoList}/>  */}

      {/* {videoList.map(e=><p>{e.etag}</p>)} */}
      {/* <VideoList videos={videoList.map(e=>{
                console.log(e.snippet.title)
                return <p>{e.id.videoId}</p>})}></VideoList>*/}
    </div>
  );
};
/* export {Hello}; */
export { Youtube };
