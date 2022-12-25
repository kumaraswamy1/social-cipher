import { AiFillHeart, AiOutlineClose, AiOutlineHeart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { deletePostPressed, likeButtonPressed } from "./postsSlice";

import { useNavigate } from "react-router";
export const PostCard = ({ post }) => {
	const dispatch = useDispatch();

	const postId = post._id;
	const { token, _id } = useSelector((state) => state.auth.login);

	const updateLikes = () => {
		dispatch(likeButtonPressed({ postId, token }));
	};
	const deletePost = () => {
		if (_id === post.userId._id) {
			dispatch(deletePostPressed({ postId, token }));
		}
	};

	const navigate = useNavigate();

	return (
		<div className="flex w-[44rem] m-2 rounded-md  mx-auto flex-col bg-slate-700 text-white ">
			<div className="py-3 px-6 border-b  border-slate-500 inline-flex justify-between ">
				<div className="inline-flex">
					<img
						onClick={() => navigate(`/${post.userId.username}`)}
						class="w-10 h-10 rounded-full"
						src={post.userId.imageUrl}
						alt="Default avatar"
					/>

					<h3 className="md:text-xl p-2 text-base text-center  font-medium  ">
						{post.userId.username}
					</h3>
				</div>
				<div className="text-center align-middle">
					<button
						disabled={_id !== post.userId._id}
						className="text-red-400 p-1  "
						onClick={deletePost}
					>
						{_id === post.userId._id && <AiOutlineClose size={26} />}
					</button>
				</div>
			</div>
			<div className="p-6">
				<h5 className=" text-xl  mb-2">{post.text}</h5>
			</div>

			<div className="py-2 px-6 border-t border-slate-500  flex flex-center">
				<button
					type="button"
					className=" inline-block px-2  rounded  "
					onClick={updateLikes}
				>
					{post.likes.includes(_id) ? (
						<AiFillHeart size={28} className="text-red-500" />
					) : (
						<AiOutlineHeart size={28} />
					)}
				</button>
				<p className="text-center">{post.likes.length}</p>
			</div>
		</div>
	);
};
