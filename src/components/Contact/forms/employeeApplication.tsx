"use client";
import usePhoneNumberFormatter from '@/hooks/telFormatter';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/Button';

const EmployeeApplicationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        images: [] as { name: string; base64: string}[],
    });
    const [file, setFile] = useState<File | null>(null);
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

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files[0]) {
    //         setFile(e.target.files[0]);
    //     }
    // };
   const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            // Convert new files to base64
            const newFilesArray = Array.from(event.target.files).slice(0, 1); // Limit to 5 new files

            const newBase64Files = await Promise.all(
            newFilesArray.map(async (file) => ({
                name: file.name,
                base64: await convertToBase64(file), // Convert each file to base64
            }))
            );

            // Append new base64 files to existing ones, but still limit to 5
            const updatedFilesArray = [...formData.images, ...newBase64Files].slice(0, 1);

            setFormData((prevData) => ({
            ...prevData,
            images: updatedFilesArray, // Store updated base64 files
            }));
        }
    };

    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        });
    };

    // const convertToBase64 = (file: File): Promise<string> => {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.onload = () => resolve(reader.result as string);
    //         reader.onerror = (error) => reject(error);
    //         reader.readAsDataURL(file);
    //     });
    // };

    const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setError(null);

        const payload: any = {
            formType: 'employeeApplication',
            name: formData.name,
            email: formData.email,
            phone: formattedPhone,
            images: formData.images,
        };

        // If a file is selected, convert it to Base64 and include it in the payload
        if (file) {
            try {
                const base64File = await convertToBase64(file);
                payload.attachment = {
                    name: file.name,
                    base64: base64File,
                };
            } catch (error) {
                console.error("Error converting file to Base64:", error);
                setError("An error occurred while processing the file. Please try again.");
                return;
            }
        }

        try {
            const response = await axios.post('/.netlify/functions/send-email', payload);
            console.log(response);
            toast.success("Thank you for contacting us! We'll get back to you soon.");
        } catch (error) {
            console.error(error);
            setError("An error occurred, please try again later.");
        }
    };

    return (
        <Card className="p-5 my-6 bg-primary-200 shadow-lg shadow-primary-900">
            <div className="max-w-lg mx-auto p-4">
                <h2 className="text-4xl text-primary-900 font-bold mb-4">Application Form</h2>
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

                    {/* Email Input */}
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

                    {/* File Attachment */}
                    <div>
                        <label htmlFor="file" className="block text-sm font-medium text-primary-900">
                            Attach File
                        </label>
                        <input
                            type="file"
                            name="images"
                            id="images"
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-primary-900"
                        />
                    </div>

                    {/* Submit Button */}
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

export default EmployeeApplicationForm;
