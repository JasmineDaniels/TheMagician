import '../css/header.css'
function Header (){
    return (
        <header className='container-fluid '>
            <div className='row nav-item'>
                
                <div className='col-md-8 mx-auto text-center'>
                    <div className='header-width mx-auto'>
                        <a className='navbar-brand header-bg header-title key nav-link active' href="/"> <span>THE</span> <span>MAGICIAN</span> </a>
                    </div>
                </div>
                
                
            </div>
        </header>
    )
}

export default Header