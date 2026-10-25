import { apiConnect } from "./client.js"

export const getPosts = () =>
	apiConnect("/posts")

export const getPost = (id) =>
	apiConnect(`/posts/${id}`, {
		method: "GET"
	})

export const getPostsById = (id) =>
	apiConnect(`/posts/user/${id}`)