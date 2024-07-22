"use client"
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log('Form Data:', formData);
    //     // Add form submission logic here
    // };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target) as any;
        await fetch('/forms/__forms.html', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams(formData).toString()
        });
    }
    // Success & error handling should come here
    return (
        <div className="max-w-lg mx-auto p-4">
            <h2 className="text-4xl text-primary-50 font-bold mb-4">Contact Us</h2>
            <form name="contact" onSubmit={handleSubmit} className="space-y-4" data-netlify>
                <div className='flex-col'>
                    <div className="lg:flex">
                        <div className="lg:pr-1 lg:w-1/2">
                            <label htmlFor="name" className="block text-sm font-medium text-primary-300">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 shadow-sm p-2 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="lg:pl-1 lg:w-1/2">
                            <label htmlFor="phone" className="block text-sm font-medium text-primary-300">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 shadow-sm p-2 sm:text-sm"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-300">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-primary-300 shadow-sm p-2 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-300">
                        How can we help?
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 shadow-sm p-2 sm:text-sm"
                        rows={6} // Add this line to set the number of rows to 4
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full p-2 font-medium shadow-sm text-primary-50 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
