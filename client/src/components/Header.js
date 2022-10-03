import '../css/header.css'
function Header (){
    return (
        <header className='container-fluid'>
            <div className='row nav-item '>
                <div className='col-md-8 mx-auto header-bg text-center'>
                    <a className='navbar-brand header-title nav-link active' href="/">THE MAGICIAN</a>
                </div>
            </div>
        </header>
    )
}

export default Header