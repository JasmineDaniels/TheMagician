//import Result from "./Result"
//import cards from '../utils/cards.json'
import React, { useState } from 'react'
import Auth from '../utils/auth';
import { createPost, getMe, updatePost, deletePost } from '../utils/API';
import '../css/result.css'
import { Col } from 'react-bootstrap'

export default function Portal() {
    const [message, setMessage] = useState('')
    const [newMessage, setNewMessage] = useState('')
    const [showAddPost, setShowAddPost] = useState(false)
    const [showUpdatePost, setShowUpdatePost] = useState(false)
    const [showPosts, setShowPosts] = useState(false)
    const [userData, setUserData] = useState({});
    const [userResults, setUserResults] = useState('')
    const [userPosts, setUserPosts] = useState([])
    // use this to determine if `useEffect()` hook needs to run again
    //const userDataLength = Object.keys(userData).length;

    const getUserData = async () => {
        try {
            const token = Auth.getToken();
            //const token = Auth.loggedIn() ? Auth.getToken() : null;

            if (!token) {
                return false;
                //alert(`Please sign in`)
            }

            const response = await getMe(token);
            console.log(response, `This is the response`)
            // if (!response.ok) {
            // throw new Error('something went wrong!');
            // }

            
            // const user = response.data;
            // const cards = response.data.results;
            // const posts = response.data.posts;

            const user = response.data;
            const results = response.data.results[0].results;
            const posts = response.data.posts;
            //console.log(user, `this is the user`)
            setUserData(user);
            setUserResults(results)
            setUserPosts([...posts])
        } catch (err) {
            console.error(err);
        }
    };

    function handleShowPostForm() {
        setShowAddPost(showAddPost => !showAddPost)
    }

    function handleShowAllPosts() {
        setShowPosts(showPosts => !showPosts)
    }

    function handleShowUpdateForm() {
        setShowUpdatePost(showUpdatePost => !showUpdatePost)
    }

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'message') {
            setMessage(inputValue);
        }
        if (inputType === 'newMessage') {
            setNewMessage(inputValue);
        }
    }

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!message) {
                alert(`This field is required.`)
                return;
            }
    
            const token = Auth.getToken()
            // const data = {
            //     message: message,
            //     user_id: userData._id,
            //     username: userData.username,
            //     results: userResults.map((user) => {
            //         return user._id
            //     }),
            // }

            const data = {
                message: message,
                user_id: userData._id,
                username: userData.username,
                reading: userData.results[0]._id
            }

            const response = await createPost(token, data)
            if (!response) {
                alert(`please sign in..`)
            }
            setMessage('')
            setShowAddPost(!showAddPost)
            setShowPosts(showPosts)
            getUserData()
        } catch (error) {
            console.log(error)
        }
        
    }

    const handlePostUpdate = async (e, index) => {
        e.preventDefault(); 
        try {

            if (!newMessage) {
                alert(`This field is required.`)
                return;
            }

            const token = Auth.getToken()
            const data = {
                _id: userData.posts[index]._id,
                message: newMessage,
            }

            const response = await updatePost(token, data)
            if (!response) {
                alert(`please sign in..`)
            }
            setMessage('')
            setShowUpdatePost(!showUpdatePost)

            getUserData()
        } catch (error) {
            console.log(error)
            alert(`Opps! Something went wrong`)
        }
    }

    const handleDeletePost = async (e, index) => {
        e.preventDefault();
        try {
            const token = Auth.getToken()
            const data = {
                //_id: userPosts._id,
                _id: userData.posts[index]._id,
                user_id: userData._id,
            }

            const response = await deletePost(token, data)
            if (!response) {
                alert(`Could not delete post at this time..`)
            } 
            alert(`Post was deleted`)
            getUserData()
        } catch (error) {
            console.log(error)
        }
        
    }

    getUserData();
    // useEffect(() => {
    //     // const getUserData = async () => {
    //     //     try {
    //     //         //const token = Auth.getToken();
    //     //         const token = Auth.loggedIn() ? Auth.getToken() : null;

    //     //         if (!token) {
    //     //             return false;
    //     //             //alert(`Please sign in`)
    //     //         }

    //     //         const response = await getMe(token);
    //     //         console.log(response, `This is the response`)
    //     //         // if (!response.ok) {
    //     //         // throw new Error('something went wrong!');
    //     //         // }

    //     //         //const user = await response.json();
    //     //         const user = response.data;
    //     //         const cards = response.data.results;
    //     //         const posts = response.data.posts;
    //     //         //console.log(user, `this is the user`)
    //     //         setUserData(user);
    //     //         setUserResults(cards)
    //     //         setUserPosts([...posts])
    //     //     } catch (err) {
    //     //         console.error(err);
    //     //     }
    //     // };
        
    //     getUserData();
    // }, []);

    if (!userData) {
        return <h2>LOADING...</h2>;
    }
    console.log(userData, `this is the user data`)
    console.log(userResults, `this is the user results`)
    console.log(userPosts, `this is the users posts`)

    return (

        <div className="container">
            <h1 className='text-center result-titles'> {userData.username}</h1>

            <div className='d-flex justify-content-center my-3'>
                <button className='btn btn-info mx-2' onClick={handleShowAllPosts}>
                    View All Posts
                </button>
                <button className='btn btn-success mx-2' onClick={handleShowPostForm}>
                    Create Post
                </button>
            </div>

            {/* Create A Post Form */}
            <div className={showAddPost ? 'my-5' : 'none'}>

                <div className='mx-auto'>
                    <h3 className='text-center'>Share your resulsts with your friends! <br></br>
                        Remember to Decipher your reading for yourself. <br></br> Share what you've learned below. <br></br>
                        Don't forget to write about your reading in your dream journal! </h3>
                </div>

                <div className='d-flex' >
                    <button className='btn btn-success mx-auto' onClick={handlePostSubmit}>
                        Add Post
                    </button>
                </div>

                <div className='row'>
                    <div className='col-md-6 mx-auto my-3'>
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

            </div>

            {/* All Users Posts */}
            <div className={showPosts ? 'card my-3' : 'none'}>
                <h3 className='card-header'>
                    {userData.username}'s Posts
                </h3>
                <div className='card-body'>
                    <Col md={9} className='mx-auto'>
                        {userPosts && userPosts.map((post, index) => (
                            <div className='card post-card' key={index}>
                                <div className='card-header'>
                                    <h5 className='float-start'>{post.username}</h5>

                                    <button className=' btn btn-danger float-end' onClick={(e) => {handleDeletePost(e, index)}}>
                                        Delete Post
                                    </button>
                                    <button className='btn btn-primary float-end mx-2' onClick={handleShowUpdateForm}>
                                        Update Post
                                    </button>

                                </div>
                                <div className='card-body  mx-auto'>
                                    <div>
                                        <p className='text-center'>{post.message}</p>
                                    </div>

                                    <div className={showUpdatePost ? 'row' : 'none'}>
                                        <div className='col-md-6 mx-auto my-2'>
                                            <div className="form-group">
                                                <label for="Textarea1" className="mb-1">Update Post:</label>
                                                <textarea
                                                    className="form-control"
                                                    id="TextArea1"
                                                    name="newMessage"
                                                    value={newMessage}
                                                    onChange={handleInputChange}
                                                    rows="3"
                                                    placeholder="Message"></textarea>
                                            </div>

                                            <div className='d-flex my-2'>
                                                <button className='btn btn-primary mx-auto' onClick={(e) => {handlePostUpdate(e, index)}}>
                                                    Publish Post
                                                </button>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='row'>
                                        {post.reading.results.map((result, index) => {
                                            return (
                                                <div className='col-md-4'>
                                                    <div className=" card result-card my-2" key={index}>
                                                        <div className="card-header text-center">
                                                            <h4>{result.name} </h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className='img-adjust mx-auto'>
                                                                <img id={result._id} src={require(`../images/${result.img}`)} alt='card-back' className='img-fit'></img>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            )

                                        })}

                                    </div>

                                </div>
                            </div>
                        ))}


                    </Col>
                </div>
            </div>

            {/* Results Display */}
            <div className="row">

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