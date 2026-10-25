import { apiConnect } from "./client.js"

export const getUsers = () =>
    apiConnect("/")

export const getAuthors = () =>
    apiConnect("/users/authors")

export async function postBecomeAuthor(password) {
    const response = await apiConnect("/users/become-author", {
        method: "POST",
        body: JSON.stringify({ password })
    })

    return response
}