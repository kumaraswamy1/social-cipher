import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { NewPost } from "./CreatePost";
import { PostCard } from "./postsCard";

export function Posts() {
	const navigate = useNavigate();
	const { status, posts, error } = useSelector((state) => state.posts);
	const { token } = useSelector((state) => state.auth.login);

	return (
		<div className="flex-1">
			{status === "loading" ? (
				<h1 className="text-white text-xl">Loading....</h1>
			) : (
				<div className="mx-auto  md:w-[36rem] w-96">
					{token && <NewPost />}
					{posts.map((post) => (
						<PostCard post={post} />
					))}
				</div>
			)}
			{error && navigate("/")}
		</div>
	);
}
