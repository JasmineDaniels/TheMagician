import { createUser } from "../utils/API";
import Auth from '../utils/auth';

export default function SignUp(){
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [validated] = useState(false);
    // const [username, setUsername] = useState('');
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    // const [errMessage, setErrMessage] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            const res = await createUser(userFormData)
            if(!res.ok){
                alert(`something went wrong`)
                return;
            }

            const { token, user } = await res.json();
            console.log(user)
            Auth.login(token)
            alert(`Hello ${user.username}`)

            setUserFormData({
                username: '',
                email: '',
                password: '',
            });
            
        } catch (error) {
            console.log(error)
            alert(`Incorrect Email or Password`)
        }
    }


    return (
        <section className="container">
                <div className='row'>
                    
                    <form noValidate validated={validated} onSubmit={handleSubmit} className='col-md-6 mx-auto'>

                        <div className="form-outline mb-4">
                            <input 
                            type="username" 
                            id="form2Example3" 
                            name='username'
                            onChange={handleInputChange}
                            value={userFormData.username}
                            className="form-control" />
                            <label className="form-label" for="form2Example3">Username</label>
                        </div>
                        
                        <div className="form-outline mb-4">
                            <input 
                            type="email" 
                            id="form2Example1" 
                            name='email'
                            onChange={handleInputChange}
                            value={userFormData.email}
                            className="form-control" />
                            <label className="form-label" for="form2Example1">Email address</label>
                        </div>

                        
                        <div className="form-outline mb-4">
                            <input 
                            type="password" 
                            id="form2Example2"
                            name='password'
                            onChange={handleInputChange}
                            value={userFormData.password} 
                            className="form-control" />
                            <label className="form-label" for="form2Example2">Password</label>
                        </div>

                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                            <button 
                            type="submit" 
                            className="btn btn-primary btn-block mb-4"
                            disabled={!(userFormData.username && userFormData.email && userFormData.password)}>Sign in</button>
                        </div>
                    
                    </form>
                
                </div>     
                
            </section>
    )
}