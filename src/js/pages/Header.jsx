import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="p-3 bg-dark text-white mb-4">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start">
					<a href="/" className="d-flex align-items-center mb-2 mb-md-0 text-white text-decoration-none">
						<img src={window.base_url + '/img/logo.png'} alt="logo" width={32} height={32} className="me-3" />
					</a>

					<ul className="nav col-12 col-md-auto me-md-auto mb-2 justify-content-center mb-md-0">
						<li>
							<Link className="nav-link px-2 text-white" to="/">Home</Link>
						</li>
						<li>
							<Link className="nav-link px-2 text-white" to="/simpanan">Simpanan</Link>
						</li>
					</ul>

					{/* <form className="col-12 col-md-auto mb-3 mb-md-0 me-md-3" role="search">
						<input type="search" className="form-control form-control-dark text-white bg-dark" placeholder="Search..." aria-label="Search" />
					</form> */}

					{/* <div className="text-end">
						<button type="button" className="btn btn-outline-light me-2">Login</button>
						<button type="button" className="btn btn-warning">Sign-up</button>
					</div> */}
				</div>
			</div>
		</header>
	)
}

export default Header;