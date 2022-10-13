//import Result from "./Result"
//import cards from '../utils/cards.json'
import React, { useState, useEffect } from 'react'
import Auth from '../utils/auth';
import { getMe } from '../utils/API';

export default function Portal (){
    const [userData, setUserData] = useState({});

    // use this to determine if `useEffect()` hook needs to run again
    //const userDataLength = Object.keys(userData).length;

    useEffect(() => {
        const getUserData = async () => {
          try {
                const token = Auth.getToken();
        
                if (!token) {
                return false;
                }
        
                const response = await getMe(token);
                console.log(response, `This is the response`)
                // if (!response.ok) {
                // throw new Error('something went wrong!');
                // }
        
                //const user = await response.json();
                const user = response.data;
                console.log(user, `this is the user`)
                setUserData(user);
            } catch (err) {
                console.error(err);
            }
        };
    
        getUserData();
    }, []); 

    // if (!userDataLength) {
    //     return <h2>LOADING...</h2>;
    // }
    console.log(userData, `this is the user data`)

    return (

        // <div>
        //     <h1 className='text-center my-5'> USER PORTAL</h1>
        //     <Result cards={cards}/>
        // </div>

        <div>
            {userData.username}
            {/* userData.results.map */}
            
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