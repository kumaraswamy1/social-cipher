import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

import { baseURL } from "../../services/API/api.instance";

export const loginWithCredentials = createAsyncThunk(
	"authentication/loginUser",
	async ({ username, password }) => {
		try {
			const { data } = await axios.post(`${baseURL}/user/login`, {
				username,
				password,
			});
			return data;
		} catch (error) {
			console.error(error);
		}
	}
);

export const registerUser = createAsyncThunk(
	"authentication/registerUser",
	async ({ name, username, email, password }) => {
		try {
			const { data } = axios.post(`${baseURL}/user/signup`, {
				user: {
					name,
					username,
					email,
					password,
				},
			});
			return data;
		} catch (error) {
			console.error({ error });
		}
	}
);

const initialState = {
	error: null,
	loginStatus: "idle",
	signupStatus: "idle",
	login: JSON.parse(localStorage.getItem("login")) || {
		token: "",
		_id: "",
		username: "",
	},
};

export const authenticationSlice = createSlice({
	name: "authentication",
	initialState: initialState,

	extraReducers: (builder) => {
		builder.addCase(loginWithCredentials.pending, (state) => {
			state.loginStatus = "loading";
		});

		builder.addCase(loginWithCredentials.fulfilled, (state, action) => {
			const decodedValue = jwtDecode(action.payload.token);
			const login = {
				token: action.payload.token,
				username: decodedValue.username,
				_id: decodedValue._id,
			};
			localStorage.setItem("login", JSON.stringify(login));
			state.login = login;
			state.status = "fulfilled";
		});

		builder.addCase(loginWithCredentials.rejected, (state) => {
			state.loginStatus = "error";
		});
		builder.addCase(registerUser.pending, (state) => {
			state.signupStatus = "loading";
		});

		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.signupStatus = "fulfilled";
		});
		builder.addCase(registerUser.rejected, (state) => {
			state.signupStatus = "error";
		});
	},
});

export const { logoutButtonPressed, decrement } = authenticationSlice.actions;

export default authenticationSlice.reducer;
