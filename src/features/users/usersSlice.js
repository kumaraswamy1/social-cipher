import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../services/API/api.instance";

export const fetchCurrentUser = createAsyncThunk(
	"user/fetchCurrentUser ",
	async (token) => {
		try {
			const { data } = await axios.get(`${baseURL}/user`, {
				headers: {
					authorization: token,
				},
			});
			console.log(data);
			return data;
		} catch (error) {
			console.error(error);
		}
	}
);

export const fetchAllUsers = createAsyncThunk(
	"user/fetchAllUsers ",
	async (token) => {
		try {
			const { data } = await axios.get(`${baseURL}/user/all`, {
				headers: {
					authorization: token,
				},
			});
			console.log(data);
			return data;
		} catch (error) {
			console.error(error);
		}
	}
);

export const updateUserProfile = createAsyncThunk(
	"user/updateUserProfile ",
	async ({ token, userDetails }) => {
		try {
			const { data } = await axios.put(
				`${baseURL}/user/edit`,
				{
					userDetails,
				},
				{
					headers: {
						authorization: token,
					},
				}
			);
			console.log(data);
			return data;
		} catch (error) {
			console.error(error);
		}
	}
);

export const updateFollowers = createAsyncThunk(
	"user/updateFollowers ",
	async ({ token, viewerId }) => {
		try {
			const { data } = await axios.put(
				`${baseURL}/user/follow`,
				{
					viewerId,
				},
				{
					headers: {
						authorization: token,
					},
				}
			);
			console.log(data);
			return data;
		} catch (error) {
			console.error(error);
		}
	}
);

export const userSlice = createSlice({
	name: "user",
	initialState: {
		status: "",
		error: null,
		users: [],
		userProfile: {},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchCurrentUser.pending, (state) => {
			state.status = "loading";
		});
		builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
			state.userProfile = action.payload.user;
			state.status = "fulfilled";
			console.log(state.userProfile);
		});
		builder.addCase(fetchCurrentUser.rejected, (state) => {
			state.error = "error";
		});

		builder.addCase(updateUserProfile.pending, (state) => {
			state.status = "loading";
		});
		builder.addCase(updateUserProfile.fulfilled, (state, action) => {
			state.userProfile = action.payload.user;
			state.status = "fulfilled";
			console.log(state.userProfile);
		});
		builder.addCase(updateUserProfile.rejected, (state) => {
			state.error = "error";
		});
		builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
			state.users = action.payload.users;
			state.status = "fulfilled";
			console.log(state.userProfile);
		});
		builder.addCase(fetchAllUsers.rejected, (state) => {
			state.status = "error";
		});
		builder.addCase(updateFollowers.fulfilled, (state, action) => {
			state.status = "fulfilled";
		});
		builder.addCase(updateFollowers.rejected, (state) => {
			state.error = "error";
		});
	},
});

export default userSlice.reducer;
