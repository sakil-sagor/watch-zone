import { AiFillPhone, AiTwotoneMail, } from "react-icons/ai";
import { FaLocationPin } from "react-icons/fa6";

const LocationFind = () => {

    return (
        <div className="container mx-auto px-2">

            <div className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                    <div className="px-8">
                        <div>
                            <p className="text-4xl font-semibold text-green-700">"Find us on here...</p>
                        </div>
                        <hr className="" />
                        <div className="flex items-center my-4">
                            <FaLocationPin className="text-pink-600 text-3xl mr-2"></FaLocationPin>
                            <div>
                                <p className="font-semibold text-green-800 text-lg">  Location: </p>
                                <p className="text-pink-600">Mouchak Market, 1st floor, I-104,
                                    <br />

                                    Ramna, Dhaka-1217</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center my-4">
                            <AiFillPhone className="text-pink-600 text-3xl mr-2"></AiFillPhone>
                            <div>
                                <p className="font-semibold text-green-800 text-lg">  Call Us: </p>
                                <p className="text-pink-600">+8801911 507160</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center my-4">
                            <AiTwotoneMail className="text-pink-600 text-3xl mr-2"></AiTwotoneMail>
                            <div>
                                <p className="font-semibold text-green-800 text-lg">  Mail Us: </p>
                                <p className="text-pink-600">info@newcollectionbd.com</p>
                                <p className="text-pink-600">newcollection7160@gmail.com</p>
                            </div>
                        </div>
                        <hr />

                    </div>
                    <div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.9950500131504!2d90.40979980466145!3d23.745626170091082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84ef87544ed%3A0xa27543f7e867146d!2sMouchak%20Market!5e0!3m2!1sen!2sbd!4v1699975340040!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                            </iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LocationFind;