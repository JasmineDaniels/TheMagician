import '../css/nav.css'
import React, { useState } from 'react'
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Nav, Modal, Tab } from 'react-bootstrap';
function Navigation ({ currentPage, handlePageChange }){
    const [showModal, setShowModal] = useState(false);

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
                            <a className="nav-link links"
                            href="#SIGNIN"
                            onClick={() => setShowModal(true)}>SIGN IN</a>
                        </li>
                        <Modal
                            size='lg'
                            show={showModal}
                            onHide={() => setShowModal(false)}
                            aria-labelledby='signup-modal'>
                            {/* tab container to do either signup or login component */}
                            <Tab.Container defaultActiveKey='login'>
                            <Modal.Header closeButton>
                                <Modal.Title id='signup-modal'>
                                <Nav variant='pills'>
                                    <Nav.Item>
                                    <Nav.Link eventKey='login'>Login</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Tab.Content>
                                <Tab.Pane eventKey='login'>
                                    <SignIn handleModalClose={() => setShowModal(false)} />
                                </Tab.Pane>
                                <Tab.Pane eventKey='signup'>
                                    <SignUp handleModalClose={() => setShowModal(false)} />
                                </Tab.Pane>
                                </Tab.Content>
                            </Modal.Body>
                            </Tab.Container>
                    </Modal>
                    
                    </ul>
                </div>

            </nav>
        </div>
        
    )
}

export default Navigation;

// eslint-disable-next-line
{/* <div className='modal' id='signup-modal'>
    <div className='modal-dialog'>
        <nav>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <a href='#sign-in'>Login</a>
                </li>
                <li className='nav-item'>
                    <a href='#sign-up'>Sign Up</a>
                </li>
            </ul>
        </nav>
        <div className='modal-content'>
            <div className='modal-header'>
                <h5></h5>
            </div>

        </div>
    </div>
</div> */}