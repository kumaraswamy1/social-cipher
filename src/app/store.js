import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/Authentication/authenticationSlice";
import counterReducer from "../features/posts/postsSlice";
import userReducer from "../features/users/usersSlice";
import notificationReducer from "../features/Notifications/notificationSlice";
export const store = configureStore({
	reducer: {
		posts: counterReducer,
		auth: authenticationReducer,
		user: userReducer,
		notification: notificationReducer,
	},
});
