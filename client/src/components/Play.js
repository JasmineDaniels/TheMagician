import Card from "./Card"
import cards from '../utils/cards.json'
export default function Play (){
    return (
        <div>
            <h1 id="PLAY" className="text-center">PLAY</h1>
            <Card cards={cards}/>
        </div>
    )
}