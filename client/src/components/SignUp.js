export default function SignUp(){
    return (
        <section className="container">
                <div className='row'>
                    
                    <form className='col-md-6 mx-auto'>

                        <div className="form-outline mb-4">
                            <input type="username" id="form2Example1" className="form-control" />
                            <label className="form-label" for="form2Example1">Username</label>
                        </div>
                        
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example1" className="form-control" />
                            <label className="form-label" for="form2Example1">Email address</label>
                        </div>

                        
                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" className="form-control" />
                            <label className="form-label" for="form2Example2">Password</label>
                        </div>

                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                        </div>
                    
                    </form>
                
                </div>     
                
            </section>
    )
}