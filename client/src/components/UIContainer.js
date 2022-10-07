import React, { useState } from "react";
import Header from './Header';
import Navigation from './Nav';
import Home from "./Home";
import Play from "./Play";
import SignIn from "./SignIn";
import Portal from "./Portal";

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
        if (currentPage === 'PORTAL'){
            return <Portal/>
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Header/>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    )
}