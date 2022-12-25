import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../services/API/api.instance";

export const fetchPosts = createAsyncThunk(
	"posts/fetchPosts ",
	async (token) => {
		try {
			const { data } = await axios.get(`${baseURL}/post`, {
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

export const postButtonPressed = createAsyncThunk(
	"posts/postButtonPressed ",

	async ({ token, text }) => {
		try {
			const { data } = await axios.post(
				`${baseURL}/post/add`,
				{ text },
				{
					headers: {
						authorization: token,
					},
				}
			);
			return data;
		} catch (error) {
			console.error(error);
		}
	}
);

export const deletePostPressed = createAsyncThunk(
	"posts/deletePostPressed ",
	async ({ postId, token }) => {
		try {
			const { data } = await axios.delete(
				`${baseURL}/post/${postId}`,

				{
					headers: {
						authorization: token,
					},
				}
			);
			return data;
		} catch (error) {
			console.error(error);
		}
	}
);

export const likeButtonPressed = createAsyncThunk(
	"posts/likeButtonPressed  ",
	async ({ postId, token }) => {
		try {
			const { data } = await axios.put(
				`${baseURL}/post/${postId}`,

				{},
				{
					headers: {
						authorization: token,
					},
				}
			);
			return data;
		} catch (error) {
			console.error(error);
		}
	}
);

export const postsSlice = createSlice({
	name: "posts",
	initialState: {
		status: "idle",
		error: null,
		posts: [],
	},

	reducers: {
		increment: (state, action) => {
			console.log(state);
			state.posts.find((item) =>
				item.postID === action.payload ? (item.likes += 1) : item.likes
			);
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state) => {
			state.status = "loading";
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.posts = action.payload.posts;
			state.status = "fulfilled";
		});
		builder.addCase(fetchPosts.rejected, (state) => {
			state.status = "error";
		});
		builder.addCase(postButtonPressed.fulfilled, (state, action) => {
			state.posts = state.posts.concat(action.payload.post);
			state.status = "fulfilled";
		});
		builder.addCase(postButtonPressed.rejected, (state) => {
			state.status = "error";
		});
		builder.addCase(likeButtonPressed.fulfilled, (state, action) => {
			state.status = "fulfilled";
		});

		builder.addCase(deletePostPressed.fulfilled, (state, action) => {
			state.status = "fulfilled";
		});
		builder.addCase(deletePostPressed.rejected, (state) => {
			state.status = "error";
		});
	},
});

export default postsSlice.reducer;
