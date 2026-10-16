import { apiConnect } from "./client.js"

export const getUsers = () =>
    apiConnect("/")

export const getAuthors = () =>
    apiConnect("/authors")