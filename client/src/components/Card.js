import '../css/card.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import c04 from '../images/c04.jpg'
import m01 from '../images/m01.jpg'
export default function Card (){
    return (
        <Container>
            <Row >
                <Col md='4'>
                    <div className='card '>
                        <div className='card__inner'>
                            <div className='card__face card__face--front'>
                                
                                <img src={m01} alt='card-back' className='card-fit'></img>
                            </div>
                            <div className='card__face card__face--back'>
                                
                                <img src={c04} alt='card-back' className='card-fit'></img>
                            </div>

                        </div>
                    </div>
                </Col>
                

            </Row>
            
            <div>
                Results
            </div>
        </Container>
    
    )
}