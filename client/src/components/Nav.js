import '../css/nav.css'

function Nav (){
    return(
        <div className="container my-3">
            <nav className="navbar navbar-expand-lg navbar-dark  ">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item mx-3">
                            <a className="nav-link mx-3" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link mx-3" href="#">PLAY</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link mx-3" href="#">PORTAL</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link mx-3" href="#">SIGN IN</a>
                        </li>
                    
                    </ul>
                </div>

            </nav>
        </div>
        
    )
}

export default Nav;