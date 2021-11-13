import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import pro1 from '../../../images/pro1.png'

const AdminDetails = () => {
    const { user } = useAuth();
    // function for user img 
    let loginPhoto = () => {
        if (user.photoURL === null) {
            return pro1;
        } else {
            return user.photoURL;
        }
    }
    return (
        <div>
            <div>
                <h1 className="text-indigo-900 font-semibold text-4xl mb-6 ml-4">Admin Profile</h1>
            </div>
            <hr />
            <div className="md:flex py-8 md:pl-8">
                <div className="mr-3 md:mr-8">
                    <div>
                        <img className="w-36 rounded-full block mx-auto" src={loginPhoto()} alt="" />
                        <button className="py-2 px-6 mt-6 bg-indigo-900 text-white rounded-full block mx-auto my-4 hover:bg-indigo-800" >Edit Profile</button>
                    </div>
                </div>
                <div>
                    <div className="my-6">
                        <p className="text-gray-600 ">Full Name</p>
                        <h1 className="text-indigo-900 font-semibold text-2xl">{user.displayName}</h1>
                    </div>
                    <div>
                        <p className="text-gray-600 ">Email</p>
                        <h1 className="text-indigo-900 font-semibold text-2xl">{user.email}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDetails;