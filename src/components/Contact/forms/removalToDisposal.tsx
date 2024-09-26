"use client"
import usePhoneNumberFormatter from '@/hooks/telFormatter';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/Button';

const RemovalToDisposal: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        currentAddress: '',
        currentCity: '',
        currentState: '',
        currentZip: '',
        brand: '',
        dimensions: '',
        pathClearance: '',
        placementSpot: '',
        steps: '',
        access: '',
        propertySlope: '',
        slope: '',
        obstacles: '',
    });
    const [error, setError] = useState<string | null>(null);

    const { value: formattedPhone, onChange: handlePhoneChange } = usePhoneNumberFormatter(formData.phone);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            if (e.target instanceof HTMLInputElement) {
                handlePhoneChange(e as React.ChangeEvent<HTMLInputElement>);
            }
            setFormData({
                ...formData,
                [name]: value.replace(/[^\d]/g, '') // Save unformatted phone number
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
        setError(null);
        console.log(error);
    
        e.preventDefault();
        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formattedPhone,
            message: formData.message,
            currentAddress: formData.currentAddress,
            currentCity: formData.currentCity,
            currentState: formData.currentState,
            currentZip: formData.currentZip,
            brand: formData.brand,
            dimensions: formData.dimensions,
            pathClearance: formData.pathClearance,  
            placementSpot: formData.placementSpot,
            steps: formData.steps,
            access: formData.access,  
            propertySlope: formData.propertySlope,
            slope: formData.slope,
            obstacles: formData.obstacles, 
        };


    
        try {
          const response = await axios.post('/.netlify/functions/send-email', payload);
          console.log(response);
    
          toast.success("Thank you for contacting us! We'll get back to you soon.");
        } catch (error) {
          console.log(error);
          setError("An Error occured, try again later");
        }
      };


    return (
        <Card className="p-5 my-6 bg-primary-200 shadow-lg shadow-primary-900">
            <div className="max-w-lg mx-auto p-4">
                <h2 className="text-4xl text-primary-900 font-bold mb-4">Contact Us</h2>
                    <form name="contact" onSubmit={notifySentForm} className="space-y-4">
                    {/* Name and Phone Number */}
                    <div className='flex-col'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="name" className="block text-sm font-medium text-primary-900">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="lg:pl-1 lg:w-1/2">
                                <label htmlFor="phone" className="block text-sm font-medium text-primary-900">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+1 (123) 456-7890"
                                    name="phone"
                                    id="phone"
                                    value={formattedPhone}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-primary-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email Input (single column) */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-900">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 rounded-md block w-full border border-primary-900 shadow-md p-2 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Current Address and City (2 columns) */}
                    <div className='flex-col'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="currentAddress" className="block text-sm font-medium text-primary-900">
                                    Spa's Current Address
                                </label>
                                <input
                                    type="text"
                                    name="currentAddress"
                                    id="currentAddress"
                                    value={formData.currentAddress}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="lg:pl-1 lg:w-1/2">
                                <label htmlFor="currentCity" className="block text-sm font-medium text-primary-900">
                                    Spa's Current City
                                </label>
                                <input
                                    type="text"
                                    name="currentCity"
                                    id="currentCity"
                                    value={formData.currentCity}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Current State and Zip (2 columns) */}
                    <div className='flex-col'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="currentState" className="block text-sm font-medium text-primary-900">
                                    Spa's Current State
                                </label>
                                <input
                                    type="text"
                                    name="currentState"
                                    id="currentState"
                                    value={formData.currentState}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="lg:pl-1 lg:w-1/2">
                                <label htmlFor="currentZip" className="block text-sm font-medium text-primary-900">
                                    Spa's Current Zip
                                </label>
                                <input
                                    type="text"
                                    name="currentZip"
                                    id="currentZip"
                                    value={formData.currentZip}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    {/* Radio Button */}
              
                    <div className='flex-col text-sm font-medium text-primary-900'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label className='lg:pr-1 lg:w-1/2'>Has path been measured for Clearance?</label>
                                <label className='block'>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="pathClearance"
                                        value="Yes"
                                        checked={formData.pathClearance === 'Yes'}
                                        onChange={handleChange}
                                    />
                                    Yes       
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="pathClearance"
                                        value="No"
                                        checked={formData.pathClearance === 'No'}
                                        onChange={handleChange}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Spa Details*/}
                    <div className='flex-col'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="brand" className="block text-sm font-medium text-primary-900">
                                    Spa Brand
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    id="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="lg:pl-1 lg:w-1/2">
                                <label htmlFor="dimensions" className="block text-sm font-medium text-primary-900">
                                    Spa Dimensions
                                </label>
                                <input
                                    type="text"
                                    name="dimensions"
                                    id="dimensions"
                                    value={formData.dimensions}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-primary-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                    </div> 

                    {/* Message Input (single column) */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-primary-900">
                            How can we help?
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                            rows={6}
                            required
                        ></textarea>
                    </div>

                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <Button className='text-text-light shadow-md dark:text-text-dark' type='submit'>
                            Get started
                        </Button>
                    </div>
                    <ToastContainer 
                        className='max-w-md mx-auto text-text-light shadow-md dark:text-text-dark'
                        position='bottom-center'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover

                    />
                </form>


            </div>
        </Card>
    );
};

export default RemovalToDisposal;