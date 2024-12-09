"use client"
import usePhoneNumberFormatter from '@/hooks/telFormatter';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/Button';

const ResidentToResident: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        phoneSecondary: '',
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
        propertyTilt: '',
        slope: '',
        obstacles: '',
        destinationName:'',
        destinationEmail: '',
        destinationPhone: '',
        destinationPhoneSecondary: '',
        destinationAddress: '',
        destinationCity: '',
        destinationState: '',
        destinationZip: '',
        destinationPathClearance: '',
        destinationPlacementSpot: '',
        destinationSteps: '',
        destinationAccess: '',
        destinationPropertySlope: '',
        destinationPropertyTilt: '',
        destinationSlope: '',
        destinationObstacles: '',
        images: [] as { name: string; base64: string}[], // Add images state to hold the files
    });
    const [error, setError] = useState<string | null>(null);

    const { value: formattedPhone, onChange: handlePhoneChange } = usePhoneNumberFormatter(formData.phone);
    const { value: formattedPhoneSecondary, onChange: handlePhoneSecondaryChange } = usePhoneNumberFormatter(formData.phoneSecondary);
    const { value: formattedDestinationPhone, onChange: handleDestinationPhoneChange } = usePhoneNumberFormatter(formData.phoneSecondary);
    const { value: formattedDestinationPhoneSecondary, onChange: handleDestinationPhoneSecondaryChange } = usePhoneNumberFormatter(formData.phoneSecondary);

    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        });
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            // Convert new files to base64
            const newFilesArray = Array.from(event.target.files).slice(0, 5); // Limit to 5 new files

            const newBase64Files = await Promise.all(
            newFilesArray.map(async (file) => ({
                name: file.name,
                base64: await convertToBase64(file), // Convert each file to base64
            }))
            );

            // Append new base64 files to existing ones, but still limit to 5
            const updatedFilesArray = [...formData.images, ...newBase64Files].slice(0, 5);

            setFormData((prevData) => ({
            ...prevData,
            images: updatedFilesArray, // Store updated base64 files
            }));
        }
    };


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
        } else if (name === 'phoneSecondary') {
            if (e.target instanceof HTMLInputElement) {
                handlePhoneSecondaryChange(e as React.ChangeEvent<HTMLInputElement>)
            }
            setFormData({
                ...formData,
                [name]: value.replace(/[^\d]/g, '')
            })
        } 
        else if (name === 'destinationPhone') {
            if (e.target instanceof HTMLInputElement) {
                handleDestinationPhoneChange(e as React.ChangeEvent<HTMLInputElement>)
            }
            setFormData({
                ...formData,
                [name]: value.replace(/[^\d]/g, '')
            })
        } 
        else if (name === 'destinationPhoneSecondary') {
            if (e.target instanceof HTMLInputElement) {
                handleDestinationPhoneSecondaryChange(e as React.ChangeEvent<HTMLInputElement>)
            }
            setFormData({
                ...formData,
                [name]: value.replace(/[^\d]/g, '')
            })
        } 
        else {
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
            formType: 'residentToResident',
            name: formData.name,
            email: formData.email,
            phone: formattedPhone,
            secondaryPhone: formData.phoneSecondary,
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
            propertyTilt: formData.propertyTilt,
            slope: formData.slope,
            obstacles: formData.obstacles,
            destinationName: formData.destinationName,
            destinationEmail: formData.destinationEmail,
            destinationPhone: formattedDestinationPhone,
            destinationPhoneSecondary: formData.destinationPhoneSecondary,
            distinationAddress: formData.destinationAddress,
            destinationCity: formData.destinationCity,
            destinationState: formData.destinationState,
            destinationZip: formData.destinationZip,
            destinationPathClearance: formData.destinationPathClearance,  
            destinationPlacementSpot: formData.destinationPlacementSpot,
            destinationSteps: formData.destinationSteps,
            destinationAccess: formData.destinationAccess,  
            destinationPropertySlope: formData.destinationPropertySlope,
            destinationPropertyTilt: formData.destinationPropertyTilt,
            destinationSlope: formData.destinationSlope,
            destinationObstacles: formData.destinationObstacles,
            images: formData.images,
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
        
        <form name="contact" onSubmit={notifySentForm} className="space-y-4">
                {/* Name and Phone Number */}
                <div className='flex-col'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="name" className="block text-md font-bold text-primary-900">
                                    Current Owner's Name
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
                                <label htmlFor="email" className="block text-md font-bold text-primary-900">
                                Current Owner's Email
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
                        </div>
                    </div>

                    {/* Email Input (single column) */}
                    <div className='flex-col'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="phone" className="block text-md font-bold text-primary-900">
                                        Current Owner's Phone Number
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
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="phone" className="block text-md font-bold text-primary-900">
                                        Secondary Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+1 (123) 456-7890"
                                    name="phoneSecondary"
                                    id="phoneSecondary"
                                    value={formattedPhoneSecondary}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-primary-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Current Address and City (2 columns) */}
                    <div className='flex-col'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="currentAddress" className="block text-md font-bold text-primary-900">
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
                                <label htmlFor="currentCity" className="block text-md font-bold text-primary-900">
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
                                <label htmlFor="currentState" className="block text-md font-bold text-primary-900">
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
                                <label htmlFor="currentZip" className="block text-md font-bold text-primary-900">
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
                    {/* Current location details */}
              
                    <div className='flex-col text-md font-bold text-primary-900'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label className='lg:pr-1 lg:w-1/2'>Has path been measured for Clearance?</label>
                                <div className='grid font-medium gap-4 mt-2 col-'>
                                <label className=''>
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
                              <div className="lg:pl-1 lg:w-1/2">
                                <label htmlFor="currentZip" className="block text-md font-bold text-primary-900">
                                    Number of Deck Steps
                                </label>
                                <input
                                    type="number"
                                    min={0}
                                    defaultValue={0}
                                    name="steps"
                                    id="steps"
                                    value={formData.steps}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='block text-md font-bold text-primary-900'>
                        <label className='lg:pr-1 lg:w-1/2'>Spa Placement</label>
                            <div className='grid lg:grid-cols-3 font-medium gap-4 mt-2 grid-cols-2'>
                                <label className=''>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="placementSpot"
                                        value="Porch"
                                        checked={formData.placementSpot === 'Porch'}
                                        onChange={handleChange}
                                    />
                                    Porch 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="placementSpot"
                                        value="Deck"
                                        checked={formData.placementSpot === 'Deck'}
                                        onChange={handleChange}
                                    />
                                    Deck
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="placementSpot"
                                        value="Patio"
                                        checked={formData.placementSpot === 'Patio'}
                                        onChange={handleChange}
                                    />
                                   Patio 
                                </label>
                                <label className=''>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="placementSpot"
                                        value="Garage"
                                        checked={formData.placementSpot === 'Garage'}
                                        onChange={handleChange}
                                    />
                                    Garage       
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="placementSpot"
                                        value="EZ Pad"
                                        checked={formData.placementSpot === 'EZ Pad'}
                                        onChange={handleChange}
                                    />
                                    EZ Pad
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="placementSpot"
                                        value="Yard"
                                        checked={formData.placementSpot === 'Yard'}
                                        onChange={handleChange}
                                    />
                                   Yard 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="placementSpot"
                                        value="Driveway"
                                        checked={formData.placementSpot === 'Driveway'}
                                        onChange={handleChange}
                                    />
                                   Driveway 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="placementSpot"
                                        value="Homemade Area"
                                        checked={formData.placementSpot === 'Homemade Area'}
                                        onChange={handleChange}
                                    />
                                   Custom
                                </label>
                        </div>
                    </div>

                    <div className='block text-md font-bold text-primary-900'>
                        <label className='lg:pr-1 lg:w-1/2'>Spa Access</label>
                            <div className='grid lg:grid-cols-2 font-medium gap-4 mt-2 grid-cols-1'>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="access"
                                        value="Gate"
                                        checked={formData.access === 'Gate'}
                                        onChange={handleChange}
                                    />
                                    Gate 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="access"
                                        value="Drive Up"
                                        checked={formData.access === 'Drive Up'}
                                        onChange={handleChange}
                                    />
                                    Drive Up
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="access"
                                        value="Fence Removed"
                                        checked={formData.access === 'Fence Removed'}
                                        onChange={handleChange}
                                    />
                                   Fence Removed 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="access"
                                        value="Through House"
                                        checked={formData.access === 'Through House'}
                                        onChange={handleChange}
                                    />
                                    Through House 
                                </label>
                        </div>
                    </div>

                    <div className='block text-md font-bold text-primary-900'>
                        <label className='lg:pr-1 lg:w-1/2'>Path of Removal</label>
                            <div className='grid lg:grid-cols-2 text-md font-medium gap-4 mt-2 grid-cols-1'>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="propertySlope"
                                        value="Flat"
                                        checked={formData.propertySlope === 'Flat'}
                                        onChange={handleChange}
                                    />
                                    Flat 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="propertySlope"
                                        value="Descending"
                                        checked={formData.propertySlope === 'Descending'}
                                        onChange={handleChange}
                                    />
                                    Descending
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="propertySlope"
                                        value="Ascending"
                                        checked={formData.propertySlope === 'Ascending'}
                                        onChange={handleChange}
                                    />
                                      Ascending
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="propertyTilt"
                                        value="Left Tilt"
                                        checked={formData.propertyTilt === 'Left Tilt'}
                                        onChange={handleChange}
                                    />
                                    Left Tilt 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="propertyTilt"
                                        value="Right Tilt"
                                        checked={formData.propertyTilt === 'Right Tilt'}
                                        onChange={handleChange}
                                    />
                                    Right Tilt
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="propertyTilt"
                                        value="Neutral Tilt"
                                        checked={formData.propertyTilt === 'Neutral Tilt'}
                                        onChange={handleChange}
                                    />
                                      Neutral Tilt
                                </label> 
                        </div>
                    </div>

                {/* Name and Phone Number */}
                <div className='flex-col'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="destinationName" className="block text-md font-bold text-primary-900">
                                    Destination Owner's Name
                                </label>
                                <input
                                    type="text"
                                    name="destinationName"
                                    id="destinationName"
                                    value={formData.destinationName}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="lg:pl-1 lg:w-1/2">
                                <label htmlFor="destinationEmail" className="block text-md font-bold text-primary-900">
                                Destination Owner's Email
                                </label>
                                <input
                                    type="email"
                                    name="destinationEmail"
                                    id="destinationEmail"
                                    value={formData.destinationEmail}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-primary-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email Input (single column) */}
                    <div className='flex-col'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="destinationPhone" className="block text-md font-bold text-primary-900">
                                        Destination Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+1 (123) 456-7890"
                                    name="destinationPhone"
                                    id="destinationPhone"
                                    value={formattedDestinationPhone}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-primary-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="destinationPhone" className="block text-md font-bold text-primary-900">
                                        Secondary Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+1 (123) 456-7890"
                                    name="destinationPhoneSecondary"
                                    id="destinationPhoneSecondary"
                                    value={formattedDestinationPhoneSecondary}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-primary-900 shadow-md p-2 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    {/* Destination Address and City (2 columns) */}
                    <div className='flex-col font-bold text-md'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="destinationAddress" className="block text-primary-900">
                                    Destination Address
                                </label>
                                <input
                                    type="text"
                                    name="destinationAddress"
                                    id="destinationAddress"
                                    value={formData.destinationAddress}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                />
                            </div>
                            <div className="lg:pl-1 lg:w-1/2">
                                <label htmlFor="destinationCity" className="block text-primary-900">
                                    Destination City
                                </label>
                                <input
                                    type="text"
                                    name="destinationCity"
                                    id="destinationCity"
                                    value={formData.destinationCity}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Destination State and Zip (2 columns) */}
                    <div className='flex-col font-bold text-md'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="destinationState" className="block text-primary-900">
                                    Destination State
                                </label>
                                <input
                                    type="text"
                                    name="destinationState"
                                    id="destinationState"
                                    value={formData.destinationState}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                />
                            </div>
                            <div className="lg:pl-1 lg:w-1/2">
                                <label htmlFor="destinationZip" className="block text-primary-900">
                                    Destination Zip
                                </label>
                                <input
                                    type="text"
                                    name="destinationZip"
                                    id="destinationZip"
                                    value={formData.destinationZip}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                         {/* Radio Button */}
              
                    <div className='flex-col text-md font-bold text-primary-900'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label className='lg:pr-1 lg:w-1/2'>Has destination path been measured for Clearance?</label>
                                <div className='grid font-medium gap-4 mt-2 col-'>
                                <label className=''>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPathClearance"
                                        value="Yes"
                                        checked={formData.destinationPathClearance === 'Yes'}
                                        onChange={handleChange}
                                    />
                                    Yes       
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPathClearance"
                                        value="No"
                                        checked={formData.destinationPathClearance === 'No'}
                                        onChange={handleChange}
                                    />
                                    No
                                </label>
                                </div>
                            </div>
                              <div className="lg:pl-1 lg:w-1/2">
                                <label htmlFor="destinationSteps" className="block text-md font-bold text-primary-900">
                                    Number of Steps
                                </label>
                                <input
                                    type="number"
                                    min={0}
                                    defaultValue={0}
                                    name="destinationSteps"
                                    id="destinationSteps"
                                    value={formData.destinationSteps}
                                    onChange={handleChange}
                                    className="mt-1 rounded-md block w-full border border-gray-900 shadow-md p-2 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='block text-md font-bold text-primary-900'>
                        <label className='lg:pr-1 lg:w-1/2'>Spa Placement</label>
                            <div className='grid lg:grid-cols-3 font-medium gap-4 mt-2 grid-cols-2'>
                                <label className=''>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPlacementSpot"
                                        value="Porch"
                                        checked={formData.destinationPlacementSpot === 'Porch'}
                                        onChange={handleChange}
                                    />
                                    Porch 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPlacementSpot"
                                        value="Deck"
                                        checked={formData.destinationPlacementSpot === 'Deck'}
                                        onChange={handleChange}
                                    />
                                    Deck
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPlacementSpot"
                                        value="Patio"
                                        checked={formData.destinationPlacementSpot === 'Patio'}
                                        onChange={handleChange}
                                    />
                                   Patio 
                                </label>
                                <label className=''>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPlacementSpot"
                                        value="Garage"
                                        checked={formData.destinationPlacementSpot === 'Garage'}
                                        onChange={handleChange}
                                    />
                                    Garage       
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPlacementSpot"
                                        value="EZ Pad"
                                        checked={formData.destinationPlacementSpot === 'EZ Pad'}
                                        onChange={handleChange}
                                    />
                                    EZ Pad
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPlacementSpot"
                                        value="Yard"
                                        checked={formData.destinationPlacementSpot === 'Yard'}
                                        onChange={handleChange}
                                    />
                                   Yard 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPlacementSpot"
                                        value="Driveway"
                                        checked={formData.destinationPlacementSpot === 'Driveway'}
                                        onChange={handleChange}
                                    />
                                   Driveway 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPlacementSpot"
                                        value="Homemade Area"
                                        checked={formData.destinationPlacementSpot === 'Homemade Area'}
                                        onChange={handleChange}
                                    />
                                   Custom
                                </label>
                        </div>
                    </div>

                    <div className='block text-md font-bold text-primary-900'>
                        <label className='lg:pr-1 lg:w-1/2'>Spa Access</label>
                            <div className='grid lg:grid-cols-2 font-medium gap-4 mt-2 grid-cols-1'>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationAccess"
                                        value="Gate"
                                        checked={formData.destinationAccess === 'Gate'}
                                        onChange={handleChange}
                                    />
                                    Gate 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationAccess"
                                        value="Drive Up"
                                        checked={formData.destinationAccess === 'Drive Up'}
                                        onChange={handleChange}
                                    />
                                    Drive Up
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationAccess"
                                        value="Fence Removed"
                                        checked={formData.destinationAccess === 'Fence Removed'}
                                        onChange={handleChange}
                                    />
                                   Fence Removed 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationAccess"
                                        value="Through House"
                                        checked={formData.destinationAccess === 'Through House'}
                                        onChange={handleChange}
                                    />
                                    Through House 
                                </label>
                        </div>
                    </div>

                    <div className='block text-md font-bold text-primary-900'>
                        <label className='lg:pr-1 lg:w-1/2'>Path of Placement</label>
                            <div className='grid lg:grid-cols-2 text-md font-medium gap-4 mt-2 grid-cols-1'>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPropertySlope"
                                        value="Flat"
                                        checked={formData.destinationPropertySlope === 'Flat'}
                                        onChange={handleChange}
                                    />
                                    Flat 
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPropertySlope"
                                        value="Descending"
                                        checked={formData.destinationPropertySlope === 'Descending'}
                                        onChange={handleChange}
                                    />
                                    Descending
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPropertySlope"
                                        value="Ascending"
                                        checked={formData.destinationPropertySlope === 'Ascending'}
                                        onChange={handleChange}
                                    />
                                      Ascending
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPropertyTilt"
                                        value="Left Tilt"
                                        checked={formData.destinationPropertyTilt === 'Left Tilt'}
                                        onChange={handleChange}
                                    />
                                    Left Tilt
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPropertyTilt"
                                        value="Right Tilt"
                                        checked={formData.destinationPropertyTilt === 'Right Tilt'}
                                        onChange={handleChange}
                                    />
                                      Right Tilt
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        className='m-2'
                                        name="destinationPropertyTilt"
                                        value="Neutral Tilt"
                                        checked={formData.destinationPropertyTilt === 'Neutral Tilt'}
                                        onChange={handleChange}
                                    />
                                      Neutral Tilt
                                </label> 
                        </div>
                    </div>

                    {/* Spa Details*/}
                    <div className='flex-col'>
                        <div className="lg:flex">
                            <div className="lg:pr-1 lg:w-1/2">
                                <label htmlFor="brand" className="block text-md font-bold text-primary-900">
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
                                <label htmlFor="dimensions" className="block text-md font-bold text-primary-900">
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

                    {/* Obstacles Single Column */}
                    <div>
                        <label htmlFor="obstacles" className="block text-md font-bold text-primary-900">
                            Obstacles on Path
                        </label>
                        <input
                            type="text"
                            name="obstacles"
                            id="obstacles"
                            value={formData.obstacles}
                            onChange={handleChange}
                            className="mt-1 rounded-md block w-full border border-primary-900 shadow-md p-2 sm:text-sm"
                            placeholder='Rocks, Trees, Roots, Ditches, Walls, etc.'
                        />
                    </div>
                    {/* Message Input (single column) */}
                    <div>
                        <label htmlFor="message" className="block text-md font-bold text-primary-900">
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
                    {/* File Upload */}
                    <div>
                        <label htmlFor="images">Upload Images (Max 5):</label>
                        <input type="file" id="images" name="images" multiple accept="image/*" onChange={handleFileChange} />
                        {/* Display attached images */}
                        <div>
                            <h3>Attached Images:</h3>
                            <ul>
                            {formData.images.map((image, index) => (
                                <li key={index}>
                                {image.name}
                                <img src={image.base64} alt={image.name} style={{ maxWidth: '100px', marginLeft: '10px' }} />
                                </li>
                            ))}
                            </ul>
                        </div>
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


            
    );
};

export default ResidentToResident;