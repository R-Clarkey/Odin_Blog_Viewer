import { useState } from "react"
import "./BecomeAuthorButton.css"
import { postBecomeAuthor } from "../api/users"

export default function BecomeAuthorButton() {
	const [open, setOpen] = useState(false)
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const [message, setMessage] = useState("")

	async function handleSubmit(e) {
		e.preventDefault()
		setError("")
		setMessage("")

		try {
            const response = await postBecomeAuthor(password)
            console.log(response)
			setMessage("You are now an author!")
			setPassword("")
		} catch (err) {
			setError(err.message)
		}
	}

	return (
		<div className="author-box">
			<button
				className="author-box-button"
				type="button"
				onClick={() => setOpen(prev => !prev)}
			>
				Become an author
			</button>

			{open && (
				<form className="author-form" onSubmit={handleSubmit}>
					<p className="author-box-text">
						Enter password to become an author.
					</p>

					<label htmlFor="author-password" className="author-label">
						Password
					</label>

					<input
						id="author-password"
						className="author-input"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter password"
					/>

					{error && <p className="author-error">{error}</p>}
					{message && <p className="author-message">{message}</p>}

					<div className="author-actions">
						<button className="author-btn" type="submit">
							Submit
						</button>

						<button
							className="author-cancel"
							type="button"
							onClick={() => setOpen(false)}
						>
							Cancel
						</button>
					</div>
				</form>
			)}
		</div>
	)
}
