import React, { useState } from 'react'
import '../css/card.css'
import m01 from '../images/m01.jpg'

export default function Card ({cards}) {
    
    // const { cards } = props;
    console.log(cards)
    // const [ card ] = cards;
    
    const [flip, setFlip] = useState(false)
    function handleFlip () {
        setFlip(!flip)
    }
    return (
        // {cards.map((card, index) => (
            <div className='card'>
                <div className={flip ? "card__inner " : 'card__inner is-flipped'} >
                    <div className='card__face card__face--front'>
                        <img id={cards.id} src={m01} alt='card-front' className='card-fit' onClick={handleFlip}></img>
                    </div>
                    <div className='card__face card__face--back'>
                        <h6>{cards.name}</h6>
                        <img src={require(`../images/${cards.img}`)} alt='card-back' className='card-fit'></img>
                    </div>
                </div>
            </div>
        // ))}
    )
}