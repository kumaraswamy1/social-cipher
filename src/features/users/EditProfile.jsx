import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "./UserCard";
import { updateUserProfile } from "./usersSlice";

export const EditProfile = () => {
	const { status } = useSelector((state) => state.user);
	const { token } = useSelector((state) => state.auth.login);
	const dispatch = useDispatch();
	const profile = useSelector((state) => state.user.userProfile);
	useEffect(() => {
		if (status === "fullfilled") setUserDetails(profile);
	}, [status, profile]);

	const [userDetails, setUserDetails] = useState(profile);

	const CLOUDNARY_API =
		"https://api.cloudinary.com/v1_1/dez3df3f0/image/upload/";

	const updateProfileData = () => {
		dispatch(updateUserProfile({ token, userDetails }));
	};

	const uploadImage = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "profileImages");
		try {
			const response = await axios.post(CLOUDNARY_API, data);

			setUserDetails({
				...userDetails,
				imageUrl: response.data.secure_url,
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="flex flex-col">
			<h1>Edit Profile</h1>
			<UserCard requiresUserProfile={profile} />
			<div className="flex flex-col justify-center lg:mx-auto  mx-6 border rounded-md  border-gray-400  mt-6 lg:mt-28 py-4 lg:w-[40rem]">
				<div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-gray-400">
					<dt className="text-lg text-white font-medium ">Name</dt>

					<dd className="mt-1 text-lg text-white  sm:col-span-2 sm:mt-0">
						<input
							type="file"
							className="mt-1 text-base text-white bg-slate-700 p-3 rounded-md sm:col-span-2 sm:mt-0"
							value={userDetails.imageurl}
							onChange={uploadImage}
						/>
					</dd>
				</div>
				<div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-gray-400">
					<dt className="text-lg text-white font-medium ">Username</dt>
					<dd className="mt-1 text-lg text-white  sm:col-span-2 sm:mt-0">
						<input
							type="text"
							className="mt-1 text-base text-white bg-slate-700 p-3 rounded-md sm:col-span-2 sm:mt-0"
							value={userDetails.name}
							onChange={(e) => {
								setUserDetails({ ...userDetails, name: e.target.value });
							}}
						/>
					</dd>
				</div>
				<div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-gray-400">
					<dt className="text-lg text-white font-medium ">Email address</dt>
					<dd className="mt-1 text-lg text-white  sm:col-span-2 sm:mt-0">
						{" "}
						<input
							type="text"
							className="mt-1 text-base text-white bg-slate-700 p-3 rounded-md sm:col-span-2 sm:mt-0"
							value={userDetails.username}
							onChange={(e) => {
								setUserDetails({ ...userDetails, username: e.target.value });
							}}
						/>
					</dd>
				</div>
				<div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-gray-400">
					<dt className="text-lg text-white font-medium ">Email address</dt>
					<dd className="mt-1 text-lg text-white  sm:col-span-2 sm:mt-0">
						{" "}
						<input
							type="text"
							className="mt-1 text-base text-white bg-slate-700 p-3 rounded-md sm:col-span-2 sm:mt-0"
							value={userDetails.email}
							onChange={(e) => {
								setUserDetails({ ...userDetails, email: e.target.value });
							}}
						/>
					</dd>
				</div>
				<div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-gray-400">
					<dt className="text-lg text-white font-medium ">Email address</dt>
					<dd className="mt-1 text-lg text-white  sm:col-span-2 sm:mt-0">
						{" "}
						<input
							type="text"
							className="mt-1 text-base text-white bg-slate-700 p-3 rounded-md sm:col-span-2 sm:mt-0"
							value={userDetails.link}
							onChange={(e) => {
								setUserDetails({ ...userDetails, link: e.target.value });
							}}
						/>
					</dd>
				</div>

				<div>
					<button
						className="m-1 inline-flex items-center px-3 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						onClick={() => {
							updateProfileData();
						}}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};
