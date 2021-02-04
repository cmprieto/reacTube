import { useState, useEffect } from "react";
import axios from "axios";

const Youtube = (_) => {
  const [videoList, setvideoList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=Miguel+Indurain&type=video&videoCaption=closedCaption&&videoEmbeddable=true&key=AIzaSyDUDW6d33xJP_Kv2yXeqLkVclObqqCPiJs`
  )
  .then((res) => {
        setvideoList(res.data.items);
        console.log(res.data.items);
        console.log(/* videoList */);
      });
  }, []);

  return <div>hola</div>;
};
export { Youtube };
