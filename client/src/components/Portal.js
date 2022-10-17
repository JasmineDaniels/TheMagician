//import Result from "./Result"
//import cards from '../utils/cards.json'
import React, { useState, useEffect } from 'react'
import Auth from '../utils/auth';
import { createPost, getMe } from '../utils/API';
import '../css/result.css'

export default function Portal() {
    const [message, setMessage] = useState('')
    const [showAddPost, setShowAddPost] = useState(false)
    const [userData, setUserData] = useState({});
    const [userResults, setUserResults] = useState('')
    // use this to determine if `useEffect()` hook needs to run again
    //const userDataLength = Object.keys(userData).length;

    function handleShowPostForm (){
        setShowAddPost(showAddPost => !showAddPost)
    }

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'message') {
            setMessage(inputValue);
        }
    }

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        if (!message) {
            alert(`This field is required.`)
            return;
        }

        const token = Auth.getToken()


        const data = {
            message: message,
            user_id: userData._id,
            username: userData.username,
            results: userResults.map((user) => {
                return user._id
            }),
        }

        const response = await createPost(token, data)
        if (!response) {
            alert(`please sign in..`)
        }
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

        <div className="container">
            <h1 className='text-center result-titles'> {userData.username}</h1>

            <div className={showAddPost ? 'my-5' : 'none'}>
                
                <div className='mx-auto'>
                <h3 className='text-center'>Share your resulsts with your friends! <br></br> 
                Remember to Decipher your reading for yourself. <br></br> Share what you've learned below. <br></br> 
                Don't forget to write about your reading in your dream journal! </h3>
                </div>
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

                <div className='d-flex my-3'>
                    <button className='btn btn-success mx-auto' onClick={handleShowPostForm}>
                        Create Post
                    </button>
                </div>

                <h1 className='col-md-4 text-center result-titles'>PAST</h1>
                <h1 className='col-md-4 text-center result-titles'>PRESENT</h1>
                <h1 className='col-md-4 text-center result-titles'>FUTURE</h1>

                {userResults && userResults.map((result, index) => (
                    <div className='col-md-4'>
                        <div className=" card result-card my-2" key={index}>
                            <div className="card-header text-center">
                                <h4 className='result-titles'>{result.name}</h4>
                            </div>
                            <div className="card-body">
                                <div className='img-adjust mx-auto'>
                                    <img id={result.id} src={require(`../images/${result.img}`)} alt='card-back' className='img-fit'></img>
                                </div>
                                <div className='my-2 text-center'>
                                
                                    <p className='result-info'>{result.arcana}</p>
                                    <p className='result-info'>Number: {result.number}</p>
                                    <p>{result.Astrology}</p>
                                    <p className='result-info'>Keywords:</p>
                                    <p> {result.keywords[0]}, {result.keywords[1]}, {result.keywords[2]}</p>
                                    <p>{result.Affirmation}</p>
                                    <p className='result-info'>Meaning:</p>
                                    <p>{result.meanings.light[0]}, {result.meanings.light[1]}, {result.meanings.light[2]}, {result.meanings.light[3]}, {result.meanings.light[4]}, {result.meanings.light[5]}, {result.meanings.light[6]}, {result.meanings.light[7]}, {result.meanings.light[8]}</p>
                                    <p className='result-info'>Projected Fortune</p>
                                    <p>{result.fortune_telling[0]}, {result.fortune_telling[1]}, {result.fortune_telling[2]}</p>
                                    <p className='result-info'>Questions to Ask Yourself</p>
                                    <p>{result.Questions[0]}, {result.Questions[1]}, {result.Questions[2]}</p>

                                    
                                </div>

                            </div>
                        </div>
                    </div>

                ))}

                


            </div>

        </div>



    )
}