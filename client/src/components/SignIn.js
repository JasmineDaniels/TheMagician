import React, { useState } from 'react'
import { validateEmail, checkPassword } from '../utils/helpers.js'
import '../css/signin.css'
export default function SignIn (){
    //Register
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errMessage, setErrMessage] = useState('');
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        //switch
        if (inputType === 'username'){
            setUsername(inputValue);
        }
        if (inputType === 'email') {
            setPassword(inputValue);
        } 
        if (inputType === 'password') {
            setEmail(inputValue);
        }   
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!username || !email || !password){
                alert('Username, Email, & Password are required');
                return;
            }
    
            const checkEmail = validateEmail(email)
            if (!checkEmail ){
                alert('Please enter a valid Email')
                return;
            } 

            if (!checkPassword(password)) {
                alert(
                  `Choose a more secure password for the account: ${username}`
                );
                return;
            }
            
            //await axios post api/users

            alert(`Hello ${username}`)
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
            <section className="container">
                <div className='row'>
                    
                    <form>
                        
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example1" className="form-control" />
                            <label className="form-label" for="form2Example1">Email address</label>
                        </div>

                        
                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" className="form-control" />
                            <label className="form-label" for="form2Example2">Password</label>
                        </div>

                        
                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                            
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example34" checked />
                                <label className="form-check-label" for="form2Example34"> Remember me </label>
                            </div>
                            </div>

                            <div className="col">
                            
                            <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        
                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                        
                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-primary btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-primary btn-floating mx-1">
                            <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-primary btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-primary btn-floating mx-1">
                            <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </form>
                    

                    
                </div>
                    
                
            </section>
            
    )
}