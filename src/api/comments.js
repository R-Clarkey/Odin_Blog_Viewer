import { apiConnect } from "./client.js"

export async function createComment(postId, comment) {
	const response = await apiConnect(`/posts/${postId}/comments`, {
		method: "POST",
		body: JSON.stringify({ comment })
	})

	return response
}
