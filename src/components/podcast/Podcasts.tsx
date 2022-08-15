import { podcasts } from "../../data/DataPodcast";
import Podcast from "./Podcast";

export  function Podcasts() {
  const Podcasts = podcasts.map((podcasts) => <Podcast podcast={podcasts} />);
  return (
    <div>
      {Podcasts}
    </div>
  )
}
