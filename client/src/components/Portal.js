//import Result from "./Result"
//import cards from '../utils/cards.json'
import React, { useState, useEffect } from 'react'
import Auth from '../utils/auth';
import { getMe } from '../utils/API';
import '../css/result.css'

export default function Portal (){
    const [userData, setUserData] = useState({});
    const [userResults, setUserResults] = useState('')
    // use this to determine if `useEffect()` hook needs to run again
    //const userDataLength = Object.keys(userData).length;

    useEffect(() => {
        const getUserData = async () => {
          try {
                //const token = Auth.getToken();
                const token = Auth.loggedIn() ? Auth.getToken() : null;
        
                if (!token) {
                    return false;
                    //alert(`Please sign in`)
                }
        
                const response = await getMe(token);
                console.log(response, `This is the response`)
                // if (!response.ok) {
                // throw new Error('something went wrong!');
                // }
        
                //const user = await response.json();
                const user = response.data;
                const cards = response.data.results
                console.log(user, `this is the user`)
                setUserData(user);
                setUserResults(cards)
            } catch (err) {
                console.error(err);
            }
        };
    
        getUserData();
    }, []); 

    if (!userData) {
        return <h2>LOADING...</h2>;
    }
    console.log(userData, `this is the user data`)
    console.log(userResults, `this is the user results`)

    return (

        // <div>
        //     <h1 className='text-center my-5'> USER PORTAL</h1>
        //     <Result cards={cards}/>
        // </div>

        <div>
            {/* {cards.map((card, index) => ( */}
            <h1>Portal</h1>
            
                <div className="container">
                    <h1 className='text-center result-titles'> {userData.username}</h1>
                    <div className="row">
                    
                            <h1 className='col-md-4 text-center result-titles'>PAST</h1>
                            <h2 className='col-md-4 text-center result-titles'>PRESENT</h2>
                            <h2 className='col-md-4 text-center result-titles'>FUTURE</h2>
                        
                        {userResults && userResults.map((result, index) => (
                            <div className='col-md-4'>
                                <div className=" card result-card my-2" key={index}>
                                    <div className="card-header text-center">
                                        <h4>{result.name} - {result.number}</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className='img-adjust mx-auto'>
                                            <img id={result.id} src={require(`../images/${result.img}`)} alt='card-back' className='img-fit'></img>
                                        </div>
                                        <div className='my-2'>
                                            <p>{result.arcana}</p>
                                            <p>{result.fortune_telling[0]}, {result.fortune_telling[1]}, {result.fortune_telling[2]}</p>
                                            <p>{result.meanings.light}</p>
                                            
                                            <p>{result.Affirmation}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                        

                    </div>
                    
                </div>
            
            
        </div>

        // <section className="container">
        //     <div className="row">
        //         {cards.map((card, index) => (
        //             <div className='col-md-4'>
        //                 <div className="result-card" key={index}>
        //                     <div className="card-header">
        //                         <h4>{card.name} - {card.number}</h4>
        //                     </div>
        //                     <div className="card-body">
        //                         <div className='img-adjust'>
        //                             <img id={card.id} src={require(`../images/${card.img}`)} alt='card-back' className='card-fit'></img>
        //                         </div>
        //                         <div className='my-2'>
        //                             <p>{card.arcana}</p>
        //                             <p>{card.fortune_telling[0]}, {card.fortune_telling[1]}, {card.fortune_telling[2]}</p>
                                    
        //                             <p>{card.Affirmation}</p>
        //                         </div>
                                
        //                     </div>
        //                 </div>
        //             </div>
                    
                    
        //         ))}
                

        //     </div>
            
        // </section>
    )
}