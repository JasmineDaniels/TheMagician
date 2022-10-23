import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/card.css'
import m01 from '../images/m01.jpg'
import { Col, Modal } from 'react-bootstrap'
import { createResults } from '../utils/API';

export default function CardTemplate ({card, selected, setSelected}) {
    const [showModal, setShowModal] = useState(false);
    const [flip, setFlip] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            

            console.log(`I am submitting...`)
            const token = localStorage.getItem('id_token')
            if (!token){
                alert(`Please sign in to get your results!`)
                return;
            }

            const data = {
                results: selected.map((result) => {
                    return result._id
                }),
            }
            //const results = await createResults(token, selected)
            const results = await createResults(token, data)
            console.log(results)
            // if (!results){
            //     alert(`Results not found`)  
            // }

            //SetFlip to false for all 
            if(results){
                navigate('/portal', { replace: true })
            }
            //window.location.replace('/portal')
            //window.location.href = `${PUBLIC_URL}/portal`
        } catch (error) {
            console.log(error)
        }
        
    }
    const handleCancel = async (e) => {
        setShowModal(!showModal)
        // navigate('/', { replace: true })
    }
    const handleFlip = async (e) => {
        setFlip(!flip)
        const example = [...selected, card]
        setSelected(example)
        console.log(example)

        if(selected.length === 2){
            setShowModal(true)
        }
    }
    return (
        <>
        <Col >
                        
            <div className='card play-card'>
                <div className={flip ? "card__inner is-flipped" : 'card__inner'} >
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
            <div className='row' >
                
                {selected.map((data, index) => {
                    return(
                        <div key={index} className='col-md-4'>
                            <p className='text-center'>{data.name}</p>
                        <div className='img-adjust'>
                            
                            <img src={require(`../images/${data.img}`)} alt='data-img' className='img-fit'></img>
                        </div>
                        </div>
                    )
                })} 
                

            </div>
        </Modal.Body>
        <Modal.Footer>
            <div>
                <button className='btn btn-success mx-2' onClick={handleSubmit}>
                    Get Reading!
                </button>
                <button className='btn btn-danger ' onClick={handleCancel}>
                    No thanks
                </button>
            </div>
            
        </Modal.Footer>
    </Modal>
    </>
    )
}