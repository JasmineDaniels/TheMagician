import '../css/result.css'

function Result ({ cards }) {
    return (

        <section className="container">
            <div className="row">
                {cards.map((card, index) => (
                    <div className='col-md-4'>
                        <div className="result-card" key={index}>
                            <div className="card-header">
                                <h4>{card.name} - {card.number}</h4>
                            </div>
                            <div className="card-body">
                                <div className='img-adjust'>
                                    <img id={card.id} src={require(`../images/${card.img}`)} alt='card-back' className='card-fit'></img>
                                </div>
                                <div className='my-2'>
                                    <p>{card.arcana}</p>
                                    <p>{card.fortune_telling[0]}, {card.fortune_telling[1]}, {card.fortune_telling[2]}</p>
                                    
                                    <p>{card.Affirmation}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    
                ))}
                

            </div>
            {/* Card Details */}
            {/* <div className="row">
                <div className="card">
                    <div className="card-header">
                        <h2>{card.name}</h2>
                    </div>
                    <div className="card-body">
                        <p>{card.number}</p>
                        <p>{card.fortune_telling[0]}</p>
                        <p>{card.Affirmation}</p>
                    </div>

                </div>
            </div> */}
            
        </section>
    )
}

export default Result;