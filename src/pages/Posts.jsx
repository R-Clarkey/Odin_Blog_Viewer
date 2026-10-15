import { useEffect, useState } from "react"
import { getPosts } from "../api/posts"
import { Link } from "react-router-dom"
import "../styles/posts.css"


export default function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadPosts() {
            try {
                const data = await getPosts()
                console.log(data, "DATA")
                setPosts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        loadPosts()
    }, [])



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
								post.content
							</p>
							<div className="post-meta">
								<span className="post-author">{post.author?.name}</span>
								<span>{new Date(post.createdAt).toLocaleDateString()}</span>
							</div>
						</Link>
							{post.published ? "Published" : "Draft"}
					</li>
				))}
			</ul>
		</main>
	)
}
    
