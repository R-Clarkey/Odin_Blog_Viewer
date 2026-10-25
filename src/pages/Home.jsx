import { Link } from "react-router-dom"
import "../styles/home.css"

export default function Home() {
	return (
		<main className="home">
			<section className="hero">
				<div className="hero-content">
					<h1>Welcome to Your Journey</h1>
					<p>
						Discover fresh posts, explore author posts, and share your own stories with the community.
					</p>

					<div className="hero-actions">
						<Link to="/posts" className="primary-link">
							Browse the latest posts
						</Link>
						<Link to="/users" className="secondary-link">
							Meet the authors
						</Link>
					</div>
				</div>
			</section>

			<section className="home-grid">
				<div className="info-card">
					<h2>Explore Posts</h2>
					<p>
						Browse stories, tutorials, opinions, and updates.
					</p>
					<Link to="/posts" className="text-link">
						Go to posts →
					</Link>
				</div>

				<div className="info-card">
					<h2>View Users</h2>
					<p>
						Browse by author to follow a certain journey.
					</p>
					<Link to="/users" className="text-link">
						Go to users →
					</Link>
				</div>
			</section>
		</main>
	)
}
