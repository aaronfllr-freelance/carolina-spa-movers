import Link from 'next/link';

import { Button } from '../Button';
import Carousel from '../Carousel/Carousel';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className='bg-primary-700 text-primary-50'>
            <Carousel />
            <div className='container mx-auto px-4 py-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div>
                        <h2 className='text-xl font-bold mb-4'>About Us</h2>
                        <p>
                            We are Hot Tub and Spa Movers of the Carolinas. We know moving, and have the tools, equipment, and the vehicles to do the job right and on time. High decks, recessed tubs, patios, enclosed rooms, disposals, all in a day’s work.
                            From any size, shape, make or model we have the tools to do the job. These products are virtually impossible for your average moving company to transport. We take great care to ensure your cargo arrives safely at its destination.
                            We now offer long distance transportation, whether the product needs to go 2 miles or 200 make life easy with us, handling your move.
                        </p>
                    </div>

                    

                    {/* Links Section */}
                    <div>
                        <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='/' className='hover:underline'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href='/about' className='hover:underline'>
                                   About Us 
                                </Link>
                            </li>
                            <li>
                                <Link href='/services' className='hover:underline'>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href='/gallery' className='hover:underline'>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact' className='hover:underline'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links Section */}
                    <div>
                        <h2 className='text-xl font-bold mb-4'>Follow Us</h2>
                        <div className='flex space-x-4'>
                            <Link
                                href='https://facebook.com'
                                className='text-gray-400 hover:text-white transition-colors'
                            >
                                {/* <FaFacebook size={24} /> */}
                            </Link>
                            <Link
                                href='https://twitter.com'
                                className='text-gray-400 hover:text-white transition-colors'
                            >
                                {/* <FaTwitter size={24} /> */}
                            </Link>
                            <Link
                                href='https://instagram.com'
                                className='text-gray-400 hover:text-white transition-colors'
                            >
                                {/* <FaInstagram size={24} /> */}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Legal Section */}
                <div className='border-t border-primary-900 mt-8 pt-4'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <p>
                            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                        </p>
                        <div className='flex space-x-4'>
                            <Link href='/privacy' className='hover:underline'>
                                Privacy Policy
                            </Link>
                            <Link href='/terms' className='hover:underline'>
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
