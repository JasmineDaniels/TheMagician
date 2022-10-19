import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignIn from './SignIn';
import SignUp from './SignUp';
//import Home from './Home';
import Auth from '../utils/auth';
import '../css/nav.css'
const AppNavbar = () => {
    const [showModal, setShowModal] = useState(false);
    //const [active, setActive] = useState(false);

    //show active page
    // function handleClick (e) {
    //     const { target } = e;
        
    //     if (target) {
    //         setActive(active)
    //     }
    //     setActive(!active)
    //     // {active ? 'clicked mx-4' : 'links mx-4'}
    // }
    //className={active ? 'clicked mx-4' : 'links mx-4'}
    //onClick={handleClick}

    return (
        <>
        <Navbar expand='lg'>
            <Container fluid>
                {/* <Navbar.Brand as={Link} to='/'>
                    Google Books Search
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls='navbar' />
                <Navbar.Collapse id='navbar'>
                    <Nav className='mx-auto'>
                        <Link to='/' className='links mx-4'>
                            HOME
                        </Link>
                        <Link className='links mx-4' to='/play'>
                            PLAY
                        </Link>
                        {/* if user is logged in show saved books and logout */}
                        {Auth.loggedIn() ? (
                            <>
                            <Link className='links mx-4' as={Link} to='/portal'>
                                PORTAL
                            </Link>
                            <Link className='links mx-4' onClick={Auth.logout}>LOGOUT</Link>
                            </>
                        ) : (
                            <Link className='links mx-4' onClick={() => setShowModal(true)}>SIGN IN</Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {/* set modal data up */}
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
        </>
    )
}

export default AppNavbar