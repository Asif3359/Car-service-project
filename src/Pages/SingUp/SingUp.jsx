import imgLog from "../../assets/images/login/login.svg"
import { Link } from 'react-router-dom';

const SingUp = () => {
    const handleSingUp = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const ConfirmPassword = from.ConfirmPassword.value;
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className=" w-1/2 mr-12">
                <img src={imgLog} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100 ">
                <h1 className='text-3xl text-center font-bold mt-4'>Sing Up</h1>
                <form onSubmit={handleSingUp} className="card-body ">
                    <div className="form-control">
                        <label htmlFor="name" className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" id="name" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" id="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="ConfirmPassword" className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="ConfirmPassword" id="ConfirmPassword" name='ConfirmPassword' placeholder="Confirm Password" className="input input-bordered" required />
                        <label htmlFor="link" className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type='submit' id="name" value="Sing Up" className="btn btn-primary" />
                    </div>
                    <div className='my-4 text-center'>
                        <p>Already Have an Account  <Link to="/login" className='text-orange-400'>login</Link></p>
                    </div>
                </form>

            </div>
        </div>
    </div>
    );
};

export default SingUp;