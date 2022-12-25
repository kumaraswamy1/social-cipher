import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { baseURL } from "../../services/API/api.instance";

export const fetchNotifications = createAsyncThunk(
	"notifications/fetchNotifications ",
	async (token) => {
		try {
			const { data } = await axios.get(`${baseURL}/notification`, {
				headers: {
					authorization: token,
				},
			});
			return data;
		} catch (error) {
			console.error(error);
		}
	}
);

export const notificationSlice = createSlice({
	name: "notification",
	initialState: {
		notifications: [],
		status: "idle",
	},

	extraReducers: (builder) => {
		builder.addCase(fetchNotifications.pending, (state) => {
			state.loginStatus = "loading";
		});

		builder.addCase(fetchNotifications.fulfilled, (state, action) => {
			state.notifications = action.payload.notification;
			state.status = "fulfilled";
		});
	},
});

export default notificationSlice.reducer;
