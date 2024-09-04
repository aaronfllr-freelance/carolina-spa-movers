"use client"
import usePhoneNumberFormatter from '@/hooks/telFormatter';
import React, { useState, useEffect } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

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

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        // const submissionData = { ...formData, phone: formattedPhone };
        await fetch('/__forms.html', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams(formData as any).toString()
        });
    }

    return (
        <div className="max-w-lg mx-auto p-4">
            <h2 className="text-4xl text-primary-50 font-bold mb-4">Contact Us</h2>
            <form name="contact" onSubmit={handleSubmit} className="space-y-4" data-netlify>
                <div className='flex-col'>
                    <div className="lg:flex">
                        <div className="lg:pr-1 lg:w-1/2">
                            <label htmlFor="name" className="block text-sm font-medium text-primary-50">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-50 shadow-sm p-2 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="lg:pl-1 lg:w-1/2">
                            <label htmlFor="phone" className="block text-sm font-medium text-primary-50">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="+1 (123) 456-7890"
                                name="phone"
                                id="phone"
                                value={formattedPhone}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-primary-50 shadow-sm p-2 sm:text-sm"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-50">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-primary-50 shadow-sm p-2 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-50">
                        How can we help?
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-50 shadow-sm p-2 sm:text-sm"
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
