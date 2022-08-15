import HeadVideo from '../components/video/HeadVideo';
import { Layout } from '../components/Layout';
import Nav from '../components/Nav';
import { Videos } from '../components/video/Videos';

export default function VideosPage() {
  return (
    <Layout>
        <>
        <Nav />
        <HeadVideo />
        <Videos />
        </>
    </Layout>
  )
}
