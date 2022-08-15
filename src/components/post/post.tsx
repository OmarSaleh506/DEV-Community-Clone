import { IPost } from '../../data/DataPost';
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { useState } from 'react';

interface PostProps {
	post: IPost;
}
export  function Post({ post }: PostProps) {
	const [reaction , setReaction] = useState(0)
	return (
		
		<div className='post'>
			<img className='post-img' src={post.imageUrl} alt="" />
			<div className='post-content'>
				<div className='user-avatar'>
				<img className='git' src={post.userAvatarUrl} alt="" />
					<p>{post.username}</p>
				</div>
				<div className='title'>
					<h1>{post.title}</h1>
				<a href="#">{post.tags}</a>
				</div>
				
				<div className='comment-reaction'>
					<div className='reaction'>
						<AiOutlineHeart />
						<span onClick={() => setReaction(reaction+1)}>0</span>
						<span>Reaction</span>
					</div>
					<div className='comment'>
						<FaRegComment />
						<span>1</span>
						<span>Comment</span>
					</div>
				</div>
			</div>
		</div>
	
		
	);
}
