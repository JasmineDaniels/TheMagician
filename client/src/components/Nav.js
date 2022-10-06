import '../css/nav.css'

function Nav ({ currentPage, handlePageChange }){
    return(
        <div className="container my-3">
            <nav className="navbar navbar-expand-lg navbar-dark  ">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item mx-3">
                            <a className={currentPage === 'HOME' ? "nav-link active links" : "nav-link links"} 
                            aria-current="page" 
                            href="#HOME"
                            onClick={() => handlePageChange('HOME')}>HOME</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className={currentPage === 'PLAY' ? "nav-link active links" : "nav-link links"} 
                            href="#PLAY"
                            onClick={() => handlePageChange('PLAY')}>PLAY</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className={currentPage === 'PORTAL' ? "nav-link active links" : "nav-link links"} 
                            href="#PORTAL"
                            onClick={() => handlePageChange('PORTAL')}>PORTAL</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className={currentPage === 'SIGNIN' ? "nav-link active links" : "nav-link links"} 
                            href="#SIGNIN"
                            onClick={() => handlePageChange('SIGNIN')}>SIGN IN</a>
                        </li>
                    
                    </ul>
                </div>

            </nav>
        </div>
        
    )
}

export default Nav;