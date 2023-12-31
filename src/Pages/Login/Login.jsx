import { useContext } from "react";
import imgLog from "../../assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const Login = () => {

    const { singIn } = useAuth();
    // const { singIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;



        singIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                
                if(loggedInUser?.email)
                {
                    navigate(location.state ? location?.state : "/");
                }
                // const user = { email };

                // // navigate(location.state?location?.state:"/");
                // // get access token 
                // axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                //     .then(res => {
                //         console.log(res.data);
                //         if (res.data.success) {
                //         }
                //     })

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">
                    <img src={imgLog} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100 ">
                    <h1 className='text-3xl text-center font-bold mt-4'>Log In</h1>
                    <form onSubmit={handleLogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value="log In" className="btn btn-primary" />
                        </div>
                        <div className='my-4 text-center'>
                            <p>New To Car Doctors <Link to="/singUp" className='text-orange-400'>Sing Up</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;