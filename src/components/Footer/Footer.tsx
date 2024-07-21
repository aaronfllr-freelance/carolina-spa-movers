import Link from 'next/link';

import { Button } from '../Button';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className='bg-primary-950 text-primary-50'>
            <div className='container mx-auto px-4 py-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div>
                        <h2 className='text-xl font-bold mb-4'>About Us</h2>
                        <p>
                            D rerum-augue, longas-sessione plenus eros te Esse Partem insultus
                            opponere protunc, eodem, eos propinat. Ea sed quis-felicem, innovare,
                            nec tertium nonummy constituere. Quis ex ut minim modeste&quod; methodo
                            hac metus hac formidine, scientiam merito.
                        </p>
                    </div>

                    

                    {/* Links Section */}
                    <div>
                        <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='/one' className='hover:underline'>
                                    Link One
                                </Link>
                            </li>
                            <li>
                                <Link href='/two' className='hover:underline'>
                                    Link two
                                </Link>
                            </li>
                            <li>
                                <Link href='/three' className='hover:underline'>
                                    Link Three
                                </Link>
                            </li>
                            <li>
                                <Link href='/four' className='hover:underline'>
                                    Link Four
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
