import React, { useState } from 'react'
import '../css/card.css'
import { Container, Row, } from 'react-bootstrap';
import Card from './Card'

export default function CardContainer ({ cards }){
    const [selected, setSelected] = useState([])
    
    return (
        <Container className='fluid'>
            
            <Row >
                
                {cards.map((card, index) => (
                    <Card card={card} key={index} selected={selected} setSelected={setSelected}/>
                ))}

            </Row>
            
        </Container>
    
    )
}

//const [showModal, setShowModal] = useState(false);
    //const [cardData, setCardData] = useState([])
    // const [flip, setFlip] = useState({
    //     "1": false,
    //     "2": false,
    //     "3": false,
    //     "4": false,
    //     "5": false,
    //     "6": false,
    //     "7": false,
    //     "8": false,
    //     "9": false,
    //     "10": false,
    //     "11": false,
    //     "12": false,
    //     "13": false,
    //     "14": false,
    //     "15": false,
    //     "16": false,
    //     "17": false,
    //     "18": false,
    //     "19": false,
    //     "20": false,
    //     "21": false,
    //     "22": false,
    //     "23": false,
    //     "24": false,
    //     "25": false,
    //     "26": false,
    //     "27": false,
    //     "28": false,
    //     "29": false,
    //     "30": false,
    //     "31": false,
    //     "32": false,
    //     "33": false,
    //     "34": false,
    //     "35": false,
    //     "36": false,
    //     "37": false,
    //     "38": false,
    //     "39": false,
    //     "40": false,
    //     "41": false,
    //     "42": false,
    //     "43": false,
    //     "44": false,
    //     "45": false,
    //     "46": false,
    //     "47": false,
    //     "48": false,
    //     "49": false,
    //     "50": false,
    //     "51": false,
    //     "52": false,
    //     "53": false,
    //     "54": false,
    //     "55": false,
    //     "56": false,
    //     "57": false,
    //     "58": false,
    //     "59": false,
    //     "60": false,
    //     "61": false,
    //     "62": false,
    //     "63": false,
    //     "64": false,
    //     "65": false,
    //     "66": false,
    //     "67": false,
    //     "68": false,
    //     "69": false,
    //     "70": false,
    //     "71": false,
    //     "72": false,
    //     "73": false,
    //     "74": false,
    //     "75": false,
    //     "76": false,
    //     "77": false,
    //     "78": false,
    // })

    //console.log(selected)

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
            

    //         console.log(`I am submitting...`)
    //         const token = localStorage.getItem('id_token')
    //         if (!token){
    //             alert(`Please sign in to get your results!`)
    //             return;
    //         }
    //         const results = await createResults(token, selected)
    //         console.log(results)
    //         if (!results){
    //             alert(`Results not found`)  
    //         }

    //         //SetFlip to false for all 

    //         window.location.replace('/portal')
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }

    // const handleFlip = async (e) => {
    //     if (selected.length !== 3){
    //         console.log(e)
    //         const { target } = e;
    //         const id = target.id;
    //         const name = target.name;
    //         if (!selected.includes(name)){
    //             setSelected([...selected, name])
    //             console.log(`Card ${id} was clicked`)
    //             console.log(`Card ${name} was clicked`)
    //             if (id){
    //                 const newObj = {...flip}
    //                 newObj[id] = true
    //                 setFlip(newObj);
    //             }
    //         }

    //     } else {
            
    //         console.log(selected, `this is selected`)
    //         setShowModal(true)
    //         // const [ nameOne, nameTwo, nameThree ] = selected
    //         // try {
    //         //     const cardOne = await axios.get(`api/cards/${nameOne}`)
    //         //     const cardTwo = await axios.get(`api/cards/${nameTwo}`)
    //         //     const cardThree = await axios.get(`api/cards/${nameThree}`)
    //         //     console.log(cardOne, `this is card 1`)
    //         //     console.log(cardTwo, `this is card 2`)
    //         //     console.log(cardThree, `this is card 3`)
    //         //     if (!cardOne && !cardTwo && !cardThree){
    //         //         alert(`Opps! something went wrong`)
    //         //     }
    //         //     //setCardData(cardOne, cardTwo, cardThree)
    //         //     const past = cardOne.data;
    //         //     const present = await cardTwo.data;
    //         //     const future = await cardThree.data;
    //         //     console.log(past, `this is past`)
    //         //     console.log(present, `this is present`)
    //         //     console.log(future, `this is future`)
                
    //         //     setCardData(past, present, future)
    //         //     console.log(cardData, `this is cardData`)
    //         //     setShowModal(true)        
                
    //         // } catch (error) {
    //         //     console.log(error)
    //         // }
            
            
    //     }
        
    // }