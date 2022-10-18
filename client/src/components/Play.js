import CardContainer from "./CardContainer"
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Play (){
    const [cards, setCards] = useState([])
    const shuffleCards = (card) => {
        for (let i = card.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = card[newIndex]
            card[newIndex] = card[i]
            card[i] = oldValue
            
        }
        setCards(card)
    }

    useEffect(() => {
        const getAllCards = async () => {
            const allCard = await axios.get('/api/cards/', {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const card = allCard.data;
            console.log(card)
            shuffleCards(card)


        }
        getAllCards()
    }, [])

    
    return (
        <div>
            <h1 id="PLAY" className="text-center">PLAY</h1>
            <CardContainer cards={cards}/>
        </div>
        
    
    )
}