import { NavLink } from "react-router-dom";

import { AiOutlineBell, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";


export const NavbarBottom = () => {const {  username } = useSelector((state) => state.auth.login);
	return (
		<>
			<footer className="p-4   fixed bottom-0 items-center w-full mt-14 bg-black lg:hidden ">
				<ul className="flex  justify-evenly items-center mb-2 mt-2 text-sm text-white sm:mb-0 dark:text-gray-400">
					
					
							<li className=" gap-6 relative ">
							
								<NavLink
									to={`/`}
	
						>
									<AiOutlineHome size={28} className="flex  text-center text-xl mb-10" />
						
							
							</NavLink>
							
					
							
						</li>	<li className=" gap-6 relative ">
							<NavLink
									to="/notifications"
						>
						
								<AiOutlineBell size={28} className="flex  text-center text-xl mb-10" />
						
						</NavLink>	</li>	<li className=" gap-6 relative ">
							<NavLink
									to={`/${username}`}
						>
						
								<AiOutlineUser size={28} className="flex  text-center text-xl mb-10" />
						
							</NavLink>
							</li>
						
					
				</ul>
			</footer>
		</>
	);
};
