import { useEffect, useState } from "react"
import { getPost } from "../api/posts"
import { createComment } from "../api/comments"
import { useParams, useNavigate } from "react-router-dom"
import "../styles/post.css"

export default function Post() {
	const { id } = useParams()
	const [post, setPost] = useState(null)
	const [comments, setComments] = useState([])
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(true)
	const [commentForm, setCommentForm] = useState({
		comment: "",
	})
	const [formDisplay, setFormDisplay] = useState(false)

	const navigate = useNavigate()

	function toggleFormDisplay() {
		setFormDisplay((prev) => !prev)
	}

	function handleChange(e) {
		setCommentForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const newComment = await createComment(post.id, commentForm.comment)

			setComments((prev) => [...prev, newComment])
			setCommentForm({ comment: "" })
			setFormDisplay(false)
		} catch (error) {
			setError(error.message)
		}
	}

	useEffect(() => {
		async function loadPost() {
			try {
				setLoading(true)
				const data = await getPost(id)
				setPost(data)
				setComments(data.comments || [])
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		loadPost()
	}, [id])

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>
	if (!post) return <p>Post not found.</p>

	return (
		<main className="post-page">
			<button className="back-btn" onClick={() => navigate("/posts")}>
				← Back to Posts
			</button>

			<article className="post-detail">
				<header className="post-detail-header">
					<h1 className="post-detail-title">{post.title}</h1>

					<div className="post-meta">
						<span>{post.author?.name ?? "Unknown author"}</span>
						<time dateTime={new Date(post.createdAt).toISOString()}>
							{new Date(post.createdAt).toLocaleDateString()}
						</time>
					</div>
				</header>

				<div
					className="post-detail-content"
					dangerouslySetInnerHTML={{ __html: post.content || "No content added" }}
				/>

				<section className="post-comments">
					<header className="post-comments-header">
						<h2>Comments</h2>
						<button type="button" onClick={toggleFormDisplay}>
							{!formDisplay ? "Add a comment +" : "Close"}
						</button>
					</header>

					<form
						className={`post-comments-form ${formDisplay ? "is-shown" : ""}`}
						onSubmit={handleSubmit}
					>
						<textarea
							name="comment"
							id="comment"
							value={commentForm.comment}
							onChange={handleChange}
							placeholder="Write your comment here..."
							required
						/>
						<button type="submit">Post</button>
					</form>

					<div className="comments-list">
						{comments.length ? (
							comments.map((comment) => (
								<div key={comment.id} className="comment">
									<p>{comment.content}</p>
									<small>{comment.author?.name ?? "Unknown author"}</small>
								</div>
							))
						) : (
							<p className="no-comments">No comments yet.</p>
						)}
					</div>
				</section>
			</article>
		</main>
	)
}
