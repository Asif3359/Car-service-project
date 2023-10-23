import imgLog from "../../assets/images/login/login.svg"
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
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