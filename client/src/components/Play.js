import CardContainer from "./CardContainer"
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/play.css'
//import scroll from '../images/scroll-big.png'

export default function Play() {
    const [cards, setCards] = useState([])
    const [showRules, setShowRuls] = useState(true)
    const [showGame, setShowGame] = useState(false)
    const shuffleCards = (card) => {
        for (let i = card.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = card[newIndex]
            card[newIndex] = card[i]
            card[i] = oldValue

        }
        setCards(card)
    }

    const handlePlay = () => {
        setShowRuls(!showRules)
        setShowGame(!showGame)

    }
    const getAllCards = async () => {
        const allCard = await axios.get('/api/cards/', {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const card = allCard.data;
        console.log(card)
        shuffleCards(card)


    }

    useEffect(() => {
        getAllCards()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //className="overlay mx-auto" style={{background: `url(${scroll})`, backgroundRepeat: 'no-repeat', backgroundPosition: "10px", height: '999px', width: 'fit-content'}}
    //className="d-flex justify-content-center"
    // {/* <div>col mx-auto welcome-card */}
    return (
        <>
            <div className={showRules ? 'row ' : 'none'}>
                <div style={{ height: '1300px' }}>
                    <div className="card col-md-8 mx-auto">
                        <div className="card-header">

                            <h1 className="text-center result-titles">Welcome to The Magician</h1>
                        </div>
                        <div className="card-body col-md-10 text-center mx-auto">
                            <h3 className="text-center result-titles">How to Play:</h3>
                            <div className="mx-auto">
                                <p>
                                    Tarot is a card game with ancient history, it is designed around the journey of the Fool,
                                    which represents us at the beginning of our journey. The symbolism in the cards represent
                                    where we are on that journey energetically. This journey is meant to be tracked with daily, weekly, monthly, or yearly check-ins.

                                </p>
                                <p>
                                    ...But remember it's just a game, you rule the energies, you control your future,
                                    the symbolism is meant to guide you towards the higher energies of life for you to make the best decisions for you at every stage.
                                </p>
                                <strong>
                                    Choose 3 cards at random, the cards are pre-shuffled, and get your Reading! <br></br>Meditate on your reading and see where you can apply it to your own life.
                                </strong>
                            </div>
                            <div className=" d-flex my-3">
                                <button className="btn btn-primary mx-auto" onClick={handlePlay}>
                                    PLAY
                                </button>
                            </div>
                            <hr></hr>
                            <h3 className="text-center result-titles">About Tarot:</h3>
                            <br></br>
                            <h5 className="text-center result-titles">The Arcana</h5>
                            <p>
                                Major Arcana: The major aranca represents you or someone in your current energy,
                                vibrating at the highest level of that energy, the more major arcana the better, represents spiritual alignment.
                            </p>
                            <p>
                                Minor Arcana: The minor arcana represent you on the journey or in transition of the energies.
                            </p>

                            <h5 className="text-center result-titles">The Court</h5>
                            <p>
                                The court cards represent you or someone in your life at different ages and different stages.
                            </p>
                            <p>
                                King/Queen: The Boss. Mastery, prepared for spiritual ascension, you or someone else whose calling the shots in this area of your life.
                            </p>
                            <p>
                                Knight: The Traveler. The knight is headed somewhere.
                            </p>
                            <p>
                                Page: The Messenger.The page brings the news.
                            </p>
                            <h5 className="text-center result-titles">The Suits</h5>
                            <p>
                                Swords: The swords represent the mind, speed, being sharp, witty, and your ability to control your mind.
                            </p>
                            <p>
                                Wands: The wands represent passion, creativity, the metaphysical, and the things you're passionate about in your life.
                            </p>
                            <p>
                                Pentacles: Pentacles represent time, money, long or short term goals, and personal or finacial investment.
                            </p>
                            <p>
                                Cups: Cups represent human emotions, love, self-love, care, and the things we hold dearest in our heart. Is your cup full?
                            </p>
                        </div>
                        <div className=" d-flex card-footer">
                            <button className="btn btn-primary mx-auto" onClick={handlePlay}>
                                PLAY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={showGame ? null : 'none'}>
                <div className="d-flex">
                    <button className="btn btn-danger mx-auto" onClick={() => {getAllCards()}}>
                        Shuffle Cards
                    </button>
                </div>

                <CardContainer cards={cards} />
            </div>
        </>



    )
}