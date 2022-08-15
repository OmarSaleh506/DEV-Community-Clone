import { videos } from "../../data/DataVideo";
import { Video } from "./Video";




export  function Videos() {
  const Videos = videos.map((videos) => <Video video={videos} />);
  return (
    <div>
      {Videos}
    </div>
  )
}

