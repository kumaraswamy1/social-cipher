import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { NavbarBottom } from "./components/Navbar/NavbarBottom";
import { Sidebar } from "./components/Navbar/Sidebar";
import { Login } from "./features/Authentication/Login";
import { Signup } from "./features/Authentication/Signup";
import { Notifications } from "./features/Notifications/Notification";
import { fetchNotifications } from "./features/Notifications/notificationSlice";

import { fetchPosts } from "./features/posts/postsSlice";
import { EditProfile } from "./features/users/EditProfile";
import { UserProfile } from "./features/users/userProfile";
import { fetchAllUsers, fetchCurrentUser } from "./features/users/usersSlice";

import { PrivateRoute } from "./PrivateRoutes/PrivateRoute";

function App() {
	const dispatch = useDispatch();

	const { token } = useSelector((state) => state.auth.login);

	useEffect(() => {
		if (token) {
			dispatch(fetchPosts(token));
			dispatch(fetchAllUsers(token));
			dispatch(fetchNotifications(token));
			dispatch(fetchCurrentUser(token));
		}
	}, [dispatch, token]);
	return (
		<div className="bg-slate-900 min-h-screen pb-7">
			<Navbar />
			<div className=" flex flex-row">
				<Sidebar />

				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path={":username"}
						element={<PrivateRoute>{<UserProfile />}</PrivateRoute>}
					/>

					<Route
						path={"/:userName/editProfile"}
						element={<PrivateRoute>{<EditProfile />}</PrivateRoute>}
					/>
					<Route
						path={"/notifications"}
						element={<PrivateRoute>{<Notifications />}</PrivateRoute>}
					/>
					<Route path={"/"} element={<PrivateRoute>{<Home />}</PrivateRoute>} />
					<Route
						path="/user"
						element={<PrivateRoute>{<UserProfile />}</PrivateRoute>}
					/>
				</Routes>
			</div>
			<NavbarBottom />
		</div>
	);
}

export default App;
