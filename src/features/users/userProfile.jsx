import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { PostCard } from "../posts/postsCard";

import { UserCard } from "./UserCard";

export const UserProfile = () => {
	const location = useLocation();
	const pathElements = location.pathname.split("/");
	const username = pathElements[1];
	console.log({ username });
	const navigate = useNavigate();
	const { error } = useSelector((state) => state.user);

	const allUsers = useSelector((state) => state.user.users);
	const requiresUserProfile = allUsers.find(
		(item) => item.username === username
	);
	console.log({ requiresUserProfile });
	let userPosts = useSelector((state) => state.posts.posts).filter(
		(post) => post.userId._id === requiresUserProfile._id
	);

	return (
		<>
			{!requiresUserProfile ? (
				<h1 className="text-white text-xl">Loading....</h1>
			) : (
				<div className="flex-1">
					<UserCard requiresUserProfile={requiresUserProfile} />
					{userPosts.map((post) => (
						<PostCard post={post} />
					))}
				</div>
			)}
			{error && navigate("/")}
		</>
	);
};
