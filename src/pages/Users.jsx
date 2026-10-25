import { useEffect, useState } from "react"
import { getAuthors } from "../api/users"
import { Link } from "react-router-dom"
import BecomeAuthorButton from "../components/BecomeAuthorButton"
import "../styles/users.css"

export default function Authors() {
	const [authors, setAuthors] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState("")

	useEffect(() => {
		async function loadAuthors() {
			try {
				const data = await getAuthors()
				setAuthors(data)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		loadAuthors()
	}, [])

	if (loading) return <p>Loading authors…</p>
	if (error) return <p role="alert">{error}</p>

	return (
		<main className="authors-page">
			<BecomeAuthorButton />
			<ul className="authors-grid">
				{authors.map((author) => (
					<li key={author.id} className="author-card">
						<Link className="author-link" to={`/users/${author.id}`}>
							<h2 className="author-name">{author.name}</h2>
							<p className="author-meta">{author.email}</p>
							<div className="author-stats">
								<span className="author-label">Published posts</span>
								<span className="author-count">{author.publishedPostCount}</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</main>
	)
}
