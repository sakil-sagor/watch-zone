import React from 'react';
import {
    Link,
    Switch,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import pro1 from '../../images/pro1.png';
import AdminRoute from '../PrivateRoute/AdminRoute';
import AddBrands from './AddProduct/AddBrands';
import AddProduct from './AddProduct/AddProduct';
import AdminDetails from './AdminDetails/AdminDetails';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
const Dashboard = () => {
    const { user, logOut } = useAuth();
    let { path, url } = useRouteMatch();
    // function for user img  ok
    let loginPhoto = () => {
        if (user.photoURL === null) {
            return pro1;
        } else {
            return user.photoURL;
        }
    }
    return (
        <div className="py-12 px-2   mx-auto md:min-h-screen">
            <div className="grid grid-cols-1  lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3 xl:col-span-2 shadow-2xl text-center py-8 text-lg  text-indigo-900 font-semibold rounded-xl px-2 border">
                    <div className="mb-6">
                        <img className="w-20 rounded-full block mx-auto" src={loginPhoto()} alt="" />
                        <p className="text-2xl mt-4">{user.displayName}</p>
                    </div>
                    <hr className="mb-6" />
                    <div>
                        <Link className=" block py-2 hover:bg-pink-800 hover:text-white rounded-lg" to={`${url}`}>Admin Details</Link>
                    </div>
                    <div>
                        <Link className=" block py-2 hover:bg-pink-800 hover:text-white rounded-lg" to={`${url}/manageOrders`}>Manage Orders</Link>
                    </div>
                    <div>
                        <Link className=" block py-2 hover:bg-pink-800 hover:text-white rounded-lg" to={`${url}/manageProducts`}>Manage Products</Link>
                    </div>
                    <div>
                        <Link className=" block py-2 hover:bg-pink-800 hover:text-white rounded-lg" to={`${url}/addProducts`}>Add Product</Link>
                    </div>
                    <div>
                        <Link className=" block py-2 hover:bg-pink-800 hover:text-white rounded-lg" to={`${url}/addBrands`}>Add Caetgory</Link>
                    </div>
                    <div>
                        <Link className=" block py-2 hover:bg-pink-800 hover:text-white rounded-lg" to={`${url}/makeAdmin`}>Make Admin </Link>
                    </div>
                    <div>
                        <button className="text-indigo-900 font-semibold hover:text-indigo-700 text-white mt-3" onClick={logOut}>Log Out</button>
                    </div>
                </div>
                <div className="lg:col-span-9 xl:col-span-10 shadow-2xl p-4 rounded-xl border">
                    <Switch>
                        <AdminRoute exact path={path}>
                            <AdminDetails></AdminDetails>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProducts`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addBrands`}>
                            <AddBrands></AddBrands>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                </div>
            </div >
        </div >
    );
};

export default Dashboard;