import { IPodcasts } from '../../data/DataPodcast'
interface PodcastProps {
    podcast: IPodcasts;
}
export default function Podcast({ podcast }: PodcastProps) {
  return (
    <>
    <h2 className='h2'>Latest episodes</h2>
    <div className='podcast'>
        <div className="flex-podcast">
           <div><img src={podcast.img} alt="" /></div>
           <div><h3>{podcast.title}</h3></div>
           <div><span>{podcast.username}</span></div>
        </div>
        <div className="flex-podcast">
           <div><img src={podcast.img} alt="" /></div>
           <div><h3>{podcast.title}</h3></div>
           <div><span>{podcast.username}</span></div>
        </div>
        <div className="flex-podcast">
           <div><img src={podcast.img} alt="" /></div>
           <div><h3>{podcast.title}</h3></div>
           <div><span>{podcast.username}</span></div>
        </div>
        <div className="flex-podcast">
           <div><img src={podcast.img} alt="" /></div>
           <div><h3>{podcast.title}</h3></div>
           <div><span>{podcast.username}</span></div>
        </div>
        <div className="flex-podcast">
           <div><img src={podcast.img} alt="" /></div>
           <div><h3>{podcast.title}</h3></div>
           <div><span>{podcast.username}</span></div>
        </div>
    </div>
    <h2 className='h2'>Featured shows</h2>
    <div className='center-flex'>
            <div className="flex">
                <div><img src={podcast.img} alt="" /></div>
                <div><h3>{podcast.title}</h3></div>
            </div>
            <div className="flex">
                <div><img src={podcast.img} alt="" /></div>
                <div><h3>{podcast.title}</h3></div>
            </div>
                <div className="flex">
                   <div><img src={podcast.img} alt="" /></div>
                   <div><h3>{podcast.title}</h3></div>
            </div>
        </div>
        <h2 className='h2'>Browse</h2>
        <div className='end-flex'>
            <div className="end">
                <div><img src={podcast.img} alt="" /></div>
                <div><h3>{podcast.title}</h3></div>
            </div>
            <div className="end">
                <div><img src={podcast.img} alt="" /></div>
                <div><h3>{podcast.title}</h3></div>
            </div>
            <div className="end">
                <div><img src={podcast.img} alt="" /></div>
                <div><h3>{podcast.title}</h3></div>
            </div>
            <div className="end">
                <div><img src={podcast.img} alt="" /></div>
                <div><h3>{podcast.title}</h3></div>
            </div>
            
        </div>
    </>
  )
}
