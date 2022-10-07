import React, { useState } from 'react'
import { validateEmail, checkPassword } from '../utils/helpers.js'
import '../css/signin.css'
import { loginUser } from '../utils/API.js';
export default function SignIn (){
    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errMessage, setErrMessage] = useState('');
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        //switch
        // if (inputType === 'username'){
        //     setUsername(inputValue);
        // }
        if (inputType === 'email') {
            setEmail(inputValue);
        } 
        if (inputType === 'password') {
            setPassword(inputValue);
        }   
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if ( !email || !password){
                alert('Email, & Password are required');
                return;
            }
    
            const checkEmail = validateEmail(email)
            if (!checkEmail ){
                alert('Please enter a valid Email')
                return;
            } 

            const checkPW = checkPassword(password)
            if (!checkPW) {
                alert(
                  `Choose a more secure password for the account: ${email}`
                );
                return;
            }
            

            const res = await loginUser(email, password)
            //await axios post api/users
            alert(`Hello ${email}`)
            setEmail('')
            setPassword('')
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
            <section className="container">
                <div className='row'>
                    
                    <form className='col-md-6 mx-auto'>
                        
                        <div className="form-outline mb-4">
                            <input 
                            type="email" 
                            id="form2Example1"
                            name='email' 
                            defaultValue={email}
                            onChange={handleInputChange}
                            className="form-control" />
                            <label className="form-label" for="form2Example1">Email address</label>
                        </div>

                        
                        <div className="form-outline mb-4">
                            <input 
                            type="password" 
                            id="form2Example2"
                            name='password' 
                            defaultValue={password}
                            onChange={handleInputChange}
                            className="form-control" />
                            <label className="form-label" for="form2Example2">Password</label>
                        </div>

                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                            <button 
                            type="submit" 
                            className="btn btn-primary btn-block mb-4"
                            onClick={handleSubmit}>Sign in</button>
                        </div>
                    
                    </form>
                
                </div>     
                
            </section>
            
    )
}