

import { Layout } from '../components/Layout';
import Nav from '../components/Nav';
import HeadTags from '../components/tags/HeadTags';
import Tags from '../components/tags/Tags';


export default function TagsPage() {
  return (
    <Layout>
        <>
        <Nav />
        <HeadTags />
        <Tags />
        </>
    </Layout>
  )
}