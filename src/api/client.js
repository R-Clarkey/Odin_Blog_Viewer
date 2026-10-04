const API_URL = import.meta.env.VITE_API_URL

export async function apiConnect(endpoint, options = {}) {
    const token = localStorage.getItem("token")

    const headers = {
        "Content-Type": "application/json",
        ...options.headers
    }

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(`${API_URL}${endpoint}`, 
    {...options, headers}
    )

    if(!response.ok) {
        throw new Error("Request failed")
    }

    return response.json()
}