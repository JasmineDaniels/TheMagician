import Result from "./Result"
import cards from '../utils/cards.json'
export default function Portal (){
    return (
        <div>
            <h1 className='text-center my-5'> USER PORTAL</h1>
            <Result cards={cards}/>
        </div>
    )
}