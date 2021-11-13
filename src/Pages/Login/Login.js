import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import PageTitle from '../Shared/PageTitle';
import './Login.css'

// login page 

const Login = () => {
    const { errorLogin, saveUser, getEmail, setUser, setErrorLogin, setIsLoading, getPassword, googleLogin, manualLogin } = useAuth();
    // redirect location after login 
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    // google login 
    const handelGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user)
                saveUser(user.displayName, user.email, 'PUT')
                history.push(redirect_url);
            }).catch((error) => {
                const errorMessage = error.message;
                setErrorLogin(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    // manual login 
    const handelLogin = (event) => {
        event.preventDefault();
        manualLogin()
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);

                history.push(redirect_url);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorLogin(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="login-page bg-indigo-200">
            {/* page title  */}
            <div className="login-page-banner text-white">
                <PageTitle title="Your Account"
                    content="Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change."
                ></PageTitle>
            </div>
            {/* login main body  */}
            <div className="container m-auto py-32 px-4 grid grid-cols-12 gap-4 items-center full-width-all  py-24">
                <div className="col-span-3"></div>
                <div className="col-span-12 sm:col-span-8 md:col-span-6 ">
                    <h1 className="mb-8 text-5xl font-bold text-indigo-900">Log In</h1>
                    <div>
                        <p className="text-red-600 font-semibold py-4" >{errorLogin === "Firebase: Error (auth/user-not-found)." ? "Invalid Emial or Password" : ''}</p>
                    </div>
                    <div className="w-full">
                        <form onSubmit={handelLogin}>
                            <div >
                                <input onBlur={getEmail} required className="w-full p-2 text-lg outline-none border-2 border-blue-100" type="email" placeholder="Your Email" />
                            </div>
                            <br />
                            <div>
                                <input onBlur={getPassword} required className="w-full  p-2 text-lg outline-none border-2 border-blue-100" type="password" placeholder="Your Password" />
                            </div>
                            <br />
                            <input type="text" type="submit" className="cursor-pointer text-base block font-bold text-white px-4 py-2 uppercase bg-indigo-900 hover:bg-indigo-800
radiou rounded-sm " value="login" />
                        </form>
                        <NavLink className="text-pink-700 font-bold underline text-right block forget-link hover:text-pink-900 hover:no-underline" to='/forgatePass'> Forget password?</NavLink>
                    </div>
                    <div className="mt-8">
                        <p>Don't have a account?  <NavLink className="text-pink-700 font-bold underline	hover:text-pink-900 hover:no-underline " to="/register"> Create now</NavLink></p>
                    </div>
                    <div className="flex mt-8 login-btn">
                        <button onClick={handelGoogleLogin} className="mr-2 text-base block font-bold text-white px-4 py-2 bg-indigo-900 hover:bg-indigo-800
radiou rounded-sm ">Google Login</button>
                    </div>
                </div>

                <div className="col-span-3">
                    <img className="w-full" src="" alt="" />
                </div>
            </div>
        </div >
    );
};

export default Login;