import "../styles/about.css"
const EDITOR_URL = import.meta.env.VITE_EDITOR_URL
const BACKEND_REPO = import.meta.env.VITE_BACKEND_REPO
const VIEWER_REPO = import.meta.env.VITE_VIEWER_REPO
const EDITOR_REPO = import.meta.env.VITE_EDITOR_REPO


export default function About() {
	return (
		<main className="about-page">
			<section className="about-box">
				<h1>About This Project</h1>
				<p>
					This Blog Viewer was part of the task from the 'Project: Blog API' lesson on 'The Odin Project'. Any user is able to upgrade their account
                    from a basic user to an Author by entering the password <strong>'Password'</strong> on the <strong>'Users' </strong> 
                    page in the form. The 
					<a className="text-link" href={EDITOR_URL} target="_blank" rel="noreferrer"> Blog Editor </a> 
					will allow any authors to write and manage their posts.
				</p>
				<p>GitHub Repositories:</p>
				<ul>
					<li>Backend/API (<a className="text-link" href={BACKEND_REPO} target="_blank" rel="noreferrer">View</a>)</li>
					<li>Viewer (<a className="text-link" href={VIEWER_REPO} target="_blank" rel="noreferrer">View</a>)</li>
					<li>Editor (<a className="text-link" href={EDITOR_REPO} target="_blank" rel="noreferrer">View</a>)</li>

				</ul>
			</section>
		</main>
	)
}
