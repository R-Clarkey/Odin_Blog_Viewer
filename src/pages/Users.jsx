import { useEffect, useState } from "react"
import { getUsers } from "../api/users"


export default function Users() {
    const [authors, setAuthors] = useState([])
    const [users, setUsers] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function loadUsers() {
            try {
                console.log("Reached")
                // const authorData = await 
                const usersData = await getUsers()
                console.log("User data", usersData)
                setUsers(usersData)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        loadUsers()
    }, [])
    
	if (loading) return <p>Loading posts…</p>
	if (error) return <p role="alert">{error}</p>
    
    return (
        <></>
    )
}