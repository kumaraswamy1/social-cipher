import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { FollowList } from "./FollowList";
import { updateFollowers } from "./usersSlice";

export const UserCard = ({ requiresUserProfile }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { token, _id, username } = useSelector((state) => state.auth.login);
	const viewerId = requiresUserProfile._id;
	const followHandler = () => {
		dispatch(updateFollowers({ token, viewerId }));
	};

	const [followModal, setFollowModal] = useState(false);
	return (
		<div className="overflow-hidden flex flex-col   text-white shadow  justify-center md:m-10 m-2">
			<div className="px-4 py-5 sm:px-6 flex p-4 m-5">
				<img
					className="w-32 h-32 md:w-40  md:h-40 sm rounded-full"
					src={requiresUserProfile.imageUrl}
					alt="Rounded avatar"
				/>
				<div className="p-4 flex flex-col  ">
					<div className="inline-flex">
						<h3 className="md:text-3xl text-lg font-medium leading-6 p-2 ">
							{requiresUserProfile.username}
						</h3>
						{_id === requiresUserProfile._id ? (
							<button
								className=" m-2 appearance-none w-min   rounded-md  px-3 py-2 text-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-lg"
								onClick={() => {
									navigate(`/${username}/editProfile`);
								}}
							>
								<AiFillEdit />
							</button>
						) : null}
					</div>
					<p className="  md:text-lg text-sm p-2">
						{requiresUserProfile.bio ? requiresUserProfile.bio : "Bio is empty"}
					</p>
					<button
						className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						onClick={() => {
							followHandler();
						}}
					>
						{requiresUserProfile.followers.find((item) => item === _id)
							? "following"
							: "follow"}
					</button>

					<div className="inline-flex " onClick={() => setFollowModal(true)}>
						{" "}
						<p className="  md:text-lg text-sm p-2">
							{requiresUserProfile.followers?.length} Followers
						</p>
						<p className="  md:text-lg text-sm p-2 ">
							{requiresUserProfile.following?.length} Following
						</p>
					</div>
					{followModal && (
						<FollowList
							requiresUserProfile={requiresUserProfile}
							setFollowModal={setFollowModal}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
