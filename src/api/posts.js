import { apiConnect } from "./client.js"

export const getPosts = () =>
	apiConnect("/posts")