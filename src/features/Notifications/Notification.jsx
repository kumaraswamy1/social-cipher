import { useSelector } from "react-redux";
import { NotificationCard } from "./NotificationCard";

export const Notifications = () => {
	const { status, notifications } = useSelector((state) => state.notification);

	return (
		<div className="flex rounded-md  flex-col mx-auto mt-20 ">
			{status === "loading" ? (
				<h1>loading...</h1>
			) : (
				notifications.map((item) => (
					<NotificationCard notificationInfo={item} />
				))
			)}
		</div>
	);
};
