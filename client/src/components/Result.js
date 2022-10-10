import '../css/result.css'
// import React, { useState, useEffect } from 'react'
// import Auth from '../utils/auth';
// import { getMe } from '../utils/API';

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

// function Result () {
//     const [userData, setUserData] = useState({});

//     // use this to determine if `useEffect()` hook needs to run again
//     const userDataLength = Object.keys(userData).length;

//     useEffect(() => {
//         const getUserData = async () => {
//           try {
//                 const token = Auth.loggedIn() ? Auth.getToken() : null;
        
//                 if (!token) {
//                 return false;
//                 }
        
//                 const response = await getMe(token);
        
//                 if (!response.ok) {
//                 throw new Error('something went wrong!');
//                 }
        
//                 const user = await response.json();
//                 setUserData(user);
//             } catch (err) {
//                 console.error(err);
//             }
//         };
    
//         getUserData();
//     }, [userDataLength]);

//     return (

//         <section className="container">
//             <div className="row">
//                 {cards.map((card, index) => (
//                     <div className='col-md-4'>
//                         <div className="result-card" key={index}>
//                             <div className="card-header">
//                                 <h4>{card.name} - {card.number}</h4>
//                             </div>
//                             <div className="card-body">
//                                 <div className='img-adjust'>
//                                     <img id={card.id} src={require(`../images/${card.img}`)} alt='card-back' className='card-fit'></img>
//                                 </div>
//                                 <div className='my-2'>
//                                     <p>{card.arcana}</p>
//                                     <p>{card.fortune_telling[0]}, {card.fortune_telling[1]}, {card.fortune_telling[2]}</p>
                                    
//                                     <p>{card.Affirmation}</p>
//                                 </div>
                                
//                             </div>
//                         </div>
//                     </div>
                    
                    
//                 ))}
                

//             </div>
            
            
//         </section>
//     )
// }

export default Result;