//import Result from "./Result"
//import cards from '../utils/cards.json'
import React, { useState, useEffect } from 'react'
import Auth from '../utils/auth';
import { createPost, getMe } from '../utils/API';
import '../css/result.css'

export default function Portal (){
    const [message, setMessage] = useState('')
    const [showAddPost, setShowAddPost] = useState(false)
    const [userData, setUserData] = useState({});
    const [userResults, setUserResults] = useState('')
    // use this to determine if `useEffect()` hook needs to run again
    //const userDataLength = Object.keys(userData).length;

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'message'){
            setMessage(inputValue);
        }
    }

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        if (!message){
            alert(`This field is required.`)
            return;
        }

        const token = Auth.getToken()

        const data = {
            message: message,
            userData,
            userData
        }

        const response = await createPost(token, data)
    }

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
            <h1 className='text-center'>Portal</h1>
            
                <div className="container">
                    <h1 className='text-center result-titles'> {userData.username}</h1>

                    <div show={showAddPost} onHide={() => setShowAddPost(false)} className='my-5'>

                        <div className='row'>
                            <div className='col-md-6 mx-auto my-4'>
                                <div className="form-group">
                                    {/* <label for="Textarea1" className="mb-1">Message:</label> */}
                                    <textarea 
                                    className="form-control" 
                                    id="TextArea1" 
                                    name="message"
                                    value={message}
                                    onChange={handleInputChange}
                                    rows="3" 
                                    placeholder="Message"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className='card-body col-md-8 mx-auto'>
                        <div className='row'>
                            {userResults && userResults.map((result, index) => (
                                <div className='col-md-4'>
                                    <div className=" card result-card my-2" key={index}>
                                        <div className="card-header text-center">
                                            <h4>{result.name} </h4>
                                        </div>
                                        <div className="card-body">
                                            <div className='img-adjust mx-auto'>
                                                <img id={result.id} src={require(`../images/${result.img}`)} alt='card-back' className='img-fit'></img>
                                            </div>
    
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            ))}
                        </div>
                        </div>
                        

                        <div className='d-flex my-3' >
                            <button className='btn btn-success mx-auto' onClick={handlePostSubmit}>
                                Add Post
                            </button>
                        </div>
                    </div>
                    
                    


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
                        
                        <div className='d-flex my-3'>
                            <button className='btn btn-success mx-auto' onClick={() => setShowAddPost(true)}>
                                Create Post
                            </button>
                        </div>
                        

                    </div>
                    
                </div>
            
            
        </div>
    )
}