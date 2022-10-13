import React, { useState } from 'react'
import '../css/card.css'
import { Container, Row, Col, Modal } from 'react-bootstrap';
import m01 from '../images/m01.jpg'
//import axios from 'axios'
import { createResults } from '../utils/API';


export default function Card ({ cards }){
    const [selected, setSelected] = useState([])
    const [showModal, setShowModal] = useState(false);
    //const [submit, setSubmit] = useState(false)
    const [flip, setFlip] = useState({
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
        "10": false,
        "11": false,
        "12": false,
        "13": false,
        "14": false,
        "15": false,
        "16": false,
        "17": false,
        "18": false,
        "19": false,
        "20": false,
        "21": false,
        "22": false,
        "23": false,
        "24": false,
        "25": false,
        "26": false,
        "27": false,
        "28": false,
        "29": false,
        "30": false,
        "31": false,
        "32": false,
        "33": false,
        "34": false,
        "35": false,
        "36": false,
        "37": false,
        "38": false,
        "39": false,
        "40": false,
        "41": false,
        "42": false,
        "43": false,
        "44": false,
        "45": false,
        "46": false,
        "47": false,
        "48": false,
        "49": false,
        "50": false,
        "51": false,
        "52": false,
        "53": false,
        "54": false,
        "55": false,
        "56": false,
        "57": false,
        "58": false,
        "59": false,
        "60": false,
        "61": false,
        "62": false,
        "63": false,
        "64": false,
        "65": false,
        "66": false,
        "67": false,
        "68": false,
        "69": false,
        "70": false,
        "71": false,
        "72": false,
        "73": false,
        "74": false,
        "75": false,
        "76": false,
        "77": false,
        "78": false,
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            
            console.log(`I am submitting...`)
            const token = localStorage.getItem('id_token')
            if (!token){
                alert(`Please sign in to get your results!`)
                return;
            }
            const results = await createResults(token, selected)
            console.log(results)
            if (!results){
                alert(`Results not found`)  
            }

            //SetFlip to false for all 

            window.location.replace('/portal')
        } catch (error) {
            console.log(error)
        }
        
    }

    const handleFlip = async (e) => {
        if (selected.length !== 3){
            console.log(e)
            const { target } = e;
            const id = target.id;
            const name = target.name;
            if (!selected.includes(name)){
                setSelected([...selected, name])
                console.log(`Card ${id} was clicked`)
                console.log(`Card ${name} was clicked`)
                if (id){
                    const newObj = {...flip}
                    newObj[id] = true
                    setFlip(newObj);
                }
            }
            //useEffect
            // const cardOne = await axios.get(`api/cards/${selected[0]}`)
            // console.log(cardOne)
            // const cardTwo = await axios.get(`api/cards/${selected[1]}`)
            // const cardThree = await axios.get(`api/cards/${selected[2]}`)

        } else {
            //setSubmit(true)
            console.log(selected)
            setShowModal(true)
            // const [ cardOne, cardTwo, cardThree ] = selected
            // console.log(cardOne)
            // console.log(cardTwo)
            // console.log(cardThree)
            //handleSubmit(cardOne, cardTwo, cardThree)
            //handleSubmit(selected)
        }
        
    }
    
    return (
        <Container>
            {/* <div>
                <button className={submit ? 'btn btn-success mx-auto' : 'btn btn-success mx-auto disabled'}>
                        Get Reading!
                </button>
            </div> */}

            {/* <div className="d-flex">
                <h2>{cardOne.name}</h2>
                <div className='card__face'>
                    <img src={require(`../images/${cardOne.img}`)} alt='card-front' className='card-fit'></img>
                </div>
            </div> */}
            <Row >
                
                {cards.flatMap((card, index) => (
                    <Col md={2} key={index}>
                        
                        <div className='card'>
                            <div className={flip[`${card.id}`] ? "card__inner is-flipped" : 'card__inner'} >
                                <div className='card__face card__face--front'>
                                    <img id={card.id} name={card.name} src={m01} alt='card-front' className='card-fit' onClick={handleFlip}></img>
                                </div>
                                <div className='card__face card__face--back'>
                                    <h6 className='none'>{card.name}</h6>
                                    <img src={require(`../images/${card.img}`)} alt='card-back' className='card-fit'></img>
                                </div>

                            </div>
                        </div>
                        
                        
                    </Col>
                ))}

            </Row>
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='cards-modal'>
                <Modal.Header closeButton>
                    <Modal.Title id='cards-modal'>
                        <h3>Your Results are In!</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Get Your Full Reading by pressing 'Get Reading' Below</p>
                    <div >
                        {selected[0]}{selected[1]}{selected[2]}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <button className='btn btn-success ' onClick={handleSubmit}>
                            Get Reading!
                        </button>
                        <button className='btn btn-danger ' handleModalClose={() => setShowModal(false)}>
                            No thanks
                        </button>
                    </div>
                    
                </Modal.Footer>
            </Modal>
            
        </Container>
    
    )
}