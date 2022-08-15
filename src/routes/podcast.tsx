import { Layout } from '../components/Layout'
import Nav from '../components/Nav'
import HeadPodcast from '../components/podcast/HeadPodcast'
import { Podcasts } from '../components/podcast/Podcasts'

export default function PodcastPage() {
  return (
        <Layout>
			<>
            <Nav />
            <HeadPodcast />
            <Podcasts />
            </>
		</Layout>
  )
}
