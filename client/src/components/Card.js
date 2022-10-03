import React, { useState } from 'react'
import '../css/card.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import c04 from '../images/c04.jpg'
import m01 from '../images/m01.jpg'


export default function Card ({ cards }){
    const [flip, setFlip] = useState('false')
    //let state = { flip: false }

    // const handleClick = (e) => {
    //     const { target } = e;
    //     const id = target.id;
    //     console.log(`Card ${id} was clicked`)
    //     if (id){
    //         setFlip(!flip);
    //     }
        
    //     //axios get card = card.img
    //     //axios post card back + info to results  
    // }

    function handleClick () {
        setFlip(!flip)
    }

    // function handleClick(){
    //     this.setSate({ flip: !this.state.flip })
    // }
    // const flip = this.state.flip;
    return (
        <Container>
            <Row >
                {/* <Col md='3'> */}
                    {cards.flatMap((card, index) => (
                        <Col md={2} id={card.number} key={index}>
                            
                            <div className='card'>
                                <div className={flip ? "card__inner" : 'card__inner is-flipped'} >
                                    <div className='card__face card__face--front'>
                                        <img src={m01} alt='card-front' className='card-fit' onClick={handleClick}></img>
                                    </div>
                                    <div className='card__face card__face--back'>
                                        <h6>{card.name}</h6>
                                        <img src={require(`../images/${card.img}`)} alt='card-back' className='card-fit'></img>
                                    </div>

                                </div>
                            </div>
                            
                            
                        </Col>
                    ))}
                {/* </Col> */}
                
                
                

            </Row>
            
            <div>
                Results
            </div>
        </Container>
    
    )
}