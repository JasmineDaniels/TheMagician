// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
//import CardEx1 from "./CardEx1"
import cards from '../utils/cards.json'
import Result from "./Result"
//import Card from "./Card"
//import axios from 'axios'

export default function Play (){

    //const card = axios.get('http://localhost:3001/api/cards/')
    return (
        // <div>
        //     <h1 id="PLAY" className="text-center">PLAY</h1>
        //     <CardEx1 cards={cards}/>
        // </div>

        <div>
            <h1 id="PLAY" className="text-center">PLAY</h1>
            <Result cards={cards}/>
        </div>

        // <Container>
        //     <Row >
        //         <Col md={2}>
        //             <Card cards={cards}/>
        //         </Col>
        //     </Row>
            
        //     <div>
        //         Results
        //     </div>
        // </Container>
    
    )
}