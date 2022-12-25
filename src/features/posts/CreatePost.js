import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import { postButtonPressed } from "./postsSlice";

export function NewPost() {
	const dispatch = useDispatch();
	const [text, setText] = useState("");

	const { token } = useSelector((state) => state.auth.login);

	const postHandler = () => {
		dispatch(postButtonPressed({ token, text }));
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Share your thoughts..."
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
				className="w-10/12 h-20 py-0.5 border-none outline-none bg-slate-700  rounded-md text-sm pl-4 m-4 "
			/>
			<button
				className="text-white relative right-14 text-center"
				onClick={postHandler}
			>
				<AiOutlineSend size={24} />
			</button>
		</div>
	);
}
