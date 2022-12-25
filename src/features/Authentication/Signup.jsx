import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Username } from "../../components/Authentication/Username";
import { Email } from "../../components/Authentication/Email";
import { Password } from "../../components/Authentication/Password";
import { Name } from "../../components/Authentication/Name";
import { registerUser } from "./authenticationSlice";

import { default as logo } from "../../logo.svg";
import { useNavigate } from "react-router";
import { isPasswordValid } from "../../utils/regex";
export function Signup() {
	const navigate = useNavigate();
	const [{ name, username, email, password }, setUserCredentials] = useState({
		username: "",
		name: "",
		email: "",
		password: "",
	});
	const [passwordError, setPasswordError] = useState(null);
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const signupHandler = async (e) => {
		e.preventDefault();
		if (!isPasswordValid(password)) {
			setPasswordError(
				"Password must contain at least 8 characters, at least 1 number and both lower and uppercase letters."
			);
		} else {
			dispatch(registerUser({ name, username, email, password }));
			navigate("/login");
		}
	};

	return (
		<div className="flex items-center justify-center mx-auto m-10 px-6 py-12  lg:px-8 border w-96 border-gray-800 rounded-t-xl">
			<div className="w-full max-w-md space-y-8">
				<div>
					<img src={logo} alt=" Logo" className="mx-auto" />
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
						Register here !
					</h2>
				</div>
				<form className="mt-8  " onSubmit={signupHandler}>
					<Username
						username={username}
						setUserCredentials={setUserCredentials}
					/>
					<Email email={email} setUserCredentials={setUserCredentials} />
					<Name name={name} setUserCredentials={setUserCredentials} />
					<Password
						password={password}
						setUserCredentials={setUserCredentials}
					/>
					{passwordError && <p className="text-red-400">{passwordError}</p>}
					<div>
						<button className="group relative flex w-full justify-center  mt-4  rounded-md  -transparent  bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
							Sign up!
						</button>
					</div>
					{auth.error && <p>{auth.error}</p>}
				</form>
			</div>
		</div>
	);
}
