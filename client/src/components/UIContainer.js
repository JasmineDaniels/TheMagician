import React, { useState } from "react";
import Header from './Header';
import Nav from './Nav';
import Home from "./Home";
import Play from "./Play";

export default function UIContainer (){
    const [currentPage, setCurrentPage] = useState('HOME')

    const renderPage = () => {
        if (currentPage === 'HOME'){
            return <Home/>
        }
        if (currentPage === 'PLAY'){
            return <Play/>
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