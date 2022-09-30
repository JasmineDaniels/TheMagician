import '../css/card.css'
export default function Card (){
    return (
        <div className='container'>
            <div className='card mx-auto'>
                <div className='card__inner'>
                    <div className='card__face card__face--front'></div>
                    <div className='card__face card__face--back'></div>

                </div>
            </div>
        </div>
        
    )
}