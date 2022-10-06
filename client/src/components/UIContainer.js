import React, { useState } from "react";
import Header from './Header';
import Nav from './Nav';
import Home from "./Home";
import Play from "./Play";
import SignIn from "./SignIn";

export default function UIContainer (){
    const [currentPage, setCurrentPage] = useState('HOME')

    const renderPage = () => {
        if (currentPage === 'HOME'){
            return <Home/>
        }
        if (currentPage === 'PLAY'){
            return <Play/>
        }
        if (currentPage === 'SIGNIN'){
            return <SignIn/>
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Header/>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    )
}