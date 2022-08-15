import { IVideos } from "../../data/DataVideo";
interface VideoProps {
    video: IVideos;
}
export  function Video({video}: VideoProps) {
  return (
    
      <div className="video">
        <div className="flex-video">
        <div><img src={video.img} alt="" /></div>
        <div><h3>{video.description}</h3></div>
        <div><span>{video.username}</span></div>
        </div>
        <div className="flex-video">
        <div><img src={video.img} alt="" /></div>
        <div><h3>{video.description}</h3></div>
        <div><span>{video.username}</span></div>
        </div>
        <div className="flex-video">
        <div><img src={video.img} alt="" /></div>
        <div><h3>{video.description}</h3></div>
        <div><span>{video.username}</span></div>
        </div>
      </div>
    
  )
}
