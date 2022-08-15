import { posts } from '../../data/DataPost';
import { Post } from "./post";

export function Posts() {
	const Posts = posts.map((post) => <Post post={post} />);

	return (
		<div className='posts' id=''>
			{Posts}
		</div>
	);
}
