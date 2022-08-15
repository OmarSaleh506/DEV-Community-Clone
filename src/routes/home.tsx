import Header from '../components/post/Header';
import { Layout } from '../components/Layout';
import Liftbar from '../components/Liftbar';
import Nav from '../components/Nav';
import { Posts } from '../components/post/Posts';

export function HomePage() {
	return (
		<Layout>
			<>
			<Nav />
			<Header />
			<div className='center'>
			<Liftbar />
			<Posts />
			</div>
			
			</>
		</Layout>
	);
}