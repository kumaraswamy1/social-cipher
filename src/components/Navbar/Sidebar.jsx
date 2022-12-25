import { NavLink } from "react-router-dom";
import { AiOutlineBell, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";

export const Sidebar = () => {
	const { username } = useSelector((state) => state.auth.login);
	return (
		<div
			className=" z-10
  lg:flex
 lativere w-56 hidden "
		>
			<div className="lg:flex flex-col  min-h-screen fixed  items-center mx-auto p-6 bg-gray-700  border-r-2 border-gray-800 ">
				<ul className=" mt-8 flex flex-col p-2  text-white ">
					<li className="mt-10  gap-8 relative pb-4 mb-2">
						<NavLink to={`/`}>
							<h1 className="flex  text-center text-xl mb-10">
								<span>
									<AiOutlineHome size={28} className=" pr-2" />
								</span>
								Feed
							</h1>
						</NavLink>
						<NavLink to="/notifications">
							<h1 className="flex  text-center text-xl mb-10">
								<span>
									<AiOutlineBell size={28} className=" pr-2" />
								</span>
								Notifications
							</h1>
						</NavLink>

						<NavLink to={`/${username}`}>
							<h1 className="flex  text-center text-xl mb-10">
								<span>
									<AiOutlineUser size={28} className=" pr-2" />
								</span>
								Profile
							</h1>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};
