import { NavLink } from "react-router-dom";

import { default as logo } from "../../logo.svg";

import { useDispatch, useSelector } from "react-redux";
import { logoutButtonPressed } from "../../features/Authentication/authenticationSlice";

export const Navbar = () => {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth.login);
	return (
		<div className=" border-b-2  border-yellow-500 flex z-10 sticky top-0 text-white p-3 px-10 align-middle items-center bg-black  flex-row justify-between mx-auto">
			<NavLink to={"/"}>
				<img src={logo} alt=" Logo" />
			</NavLink>
			<NavLink className="flex  " to={token ? "/" : "/login"}>
				{token ? (
					<button
						className="text-lg font-bold"
						onClick={() => {
							dispatch(logoutButtonPressed());
						}}
					>
						logout
					</button>
				) : (
					<button className="text-lg font-bold">Login</button>
				)}
			</NavLink>
		</div>
	);
};
