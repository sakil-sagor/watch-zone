import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import PageTitle from '../Shared/PageTitle';

// register page 

const Register = () => {
    const { getEmail, setUser, saveUser, disName, getDisName, errorReg, setErrorReg, setIsLoading, getPassword, updateProfileName, googleLogin, ManualRegister } = useAuth();

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
                setErrorReg(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    // manual register 
    const handelRegister = event => {
        event.preventDefault();
        ManualRegister()
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                updateProfileName()
                saveUser(disName, user.email, 'POST')
                history.push(redirect_url);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorReg(errorMessage);
            });
    }

    return (
        <div className="bg-indigo-200">
            <div className="login-page-banner text-white ">
                {/* page title  */}
                <PageTitle title="Your Account"
                    content="Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change."
                ></PageTitle>
            </div>
            {/* register main body  */}

            <div className="container m-auto py-32 grid grid-cols-12 gap-4 items-center	full-width-all px-4">
                <div className="col-span-3"></div>
                <div className="col-span-12 sm:col-span-8 md:col-span-6">
                    <h1 className="mb-8 text-4xl font-bold text-indigo-900">Register Now</h1>
                    {/* error message  */}
                    <div>
                        <p className="text-red-600 font-semibold py-4" >{errorReg}</p>
                    </div>
                    <div className="w-full">
                        {/* input from  */}
                        <form onSubmit={handelRegister} >
                            <div >
                                <input onBlur={getDisName} required className="w-full p-2 text-lg outline-none border-2 border-blue-100" type="text" placeholder="Full Name" />
                            </div>
                            <br />
                            <div >
                                <input required onBlur={getEmail} className="w-full p-2 text-lg outline-none border-2 border-blue-100" type="email" placeholder="Your Email" />
                            </div>
                            <br />
                            <div>
                                <input onBlur={getPassword} required className="w-full  p-2 text-lg outline-none border-2 border-blue-100" type="password" placeholder="Your Password" />
                            </div>
                            <br />
                            <input type="text" type="submit" className="cursor-pointer	 text-base block font-bold text-white px-4 py-2 uppercase bg-indigo-900 hover:bg-indigo-800 radiou rounded-sm " value="Sign Up" />
                        </form>
                    </div>
                    <div className="mt-8">
                        <p>Already have an account?  <NavLink className="text-pink-700 font-bold underline	hover:text-pink-900 hover:no-underline " to="/login"> Sign In</NavLink></p>
                    </div>
                    <div className="flex mt-8">
                        <button onClick={handelGoogleLogin} className="mr-2 text-base block font-bold text-white px-4 py-2  bg-indigo-900 hover:bg-indigo-800 radiou rounded-sm ">Google Login</button>
                    </div>
                </div>

                <div className="col-span-3">
                    <img className="w-full" src="" alt="" />
                </div>
            </div>
        </div >
    );
};

export default Register;