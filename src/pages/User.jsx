import { useEffect, useState } from "react"
import { getPostsById } from "../api/posts"
import { Link, useParams } from "react-router-dom"
import "../styles/posts.css"

function getPreviewText(html, maxLength = 120) {
	const temp = document.createElement("div")
	temp.innerHTML = html
	const text = temp.textContent || temp.innerText || "No content added"

	return text.length > maxLength
		? text.slice(0, maxLength) + "..."
		: text
}

export default function User() {
    const { id } = useParams()
    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadPosts() {
            try {
                const data = await getPostsById(id)
                console.log(data, "DATA")
                setPosts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        loadPosts()
    }, [id])



	if (loading) return <p>Loading posts…</p>
	if (error) return <p role="alert">{error}</p>

	return (
		<main className="posts-page">
			<ul className="posts-grid">
				{posts.map((post) => (
					<li key={post.id} className="post-card">
						<Link className="post-link" to={`/post/${post.id}`}>
							<h2 className="post-title">{post.title || "Default title"}</h2>
							<p className="post-content">
								{getPreviewText(post.content, 120)}
							</p>
							<div className="post-meta">
								<span className="post-author">{post.author?.name}</span>
								<span>{new Date(post.createdAt).toLocaleDateString()}</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</main>
	)
}
    
