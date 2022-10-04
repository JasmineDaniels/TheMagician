import Card from "./Card"
import cards from '../utils/cards.json'
//import axios from 'axios'

export default function Play (){

    //const card = axios.get('http://localhost:3001/api/cards/')
    return (
        <div>
            <h1 id="PLAY" className="text-center">PLAY</h1>
            <Card cards={cards}/>
        </div>
    )
}