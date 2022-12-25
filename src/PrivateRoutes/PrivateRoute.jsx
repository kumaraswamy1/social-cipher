import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


export function PrivateRoute({ children }) {
	const { token} = useSelector((state) => state.auth.login);
	const location = useLocation();

	return token ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
}
