import { Container } from "react-bootstrap"
import React, { useState } from 'react'

export default function Home (){
    const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     const getAllPosts = async () => {
    //         const allCard = await axios.get('/', {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         })
    //         const card = allCard.data;
    //         setCards(card)
    //         console.log(card)
    //     }
    //     getAllCards()
    // }, [])
    return (
        
        <Container>
            <div>
                <h1 id="HOME" >HOME</h1>
            </div>
        </Container>
    )
}