// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from "./Card"
import cards from '../utils/cards.json'
//import Result from "./Result"
//import Card from "./Card"
//import axios from 'axios'

export default function Play (){

    // const shuffleCards = () => {
    //     for (let i = cards.length - 1; i > 0; i--) {
    //         const newIndex = Math.floor(Math.random() * (i + 1));
    //         const oldValue = cards[newIndex]
    //         cards[newIndex] = cards[i]
    //         cards[i] = oldValue
            
    //     }
    // }

    // shuffleCards()
    

    //const card = axios.get('http://localhost:3001/api/cards/')
    return (
        <div>
            <h1 id="PLAY" className="text-center">PLAY</h1>
            <Card cards={cards}/>
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