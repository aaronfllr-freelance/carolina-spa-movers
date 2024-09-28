"use client"

import { useState } from "react"
import ContactForm from "./forms/formBase"
import RemovalToDisposal from "./forms/removalToDisposal"
import { Card } from "../ui/card"
import DealerToResidence from "./forms/dealerToResidence"

export default function Form() {
    const [formType, setFormType] = useState('')
    
    const renderForm = () => {
        switch (formType) {
            case 'removalToDisposal':
                return <RemovalToDisposal />
            case 'dealerToResidential':
                return <DealerToResidence />
            default:
                return <ContactForm />
        }
    }
    return (
        <>
            {/* <ContactForm /> */}
            <Card className="p-5 my-6 bg-primary-200 shadow-lg shadow-primary-900">
                <div className="max-w-lg mx-auto p-4">
                <h2 className="text-4xl text-primary-900 font-bold mb-4">Contact Us</h2>
                    <select
                        value={formType}
                        onChange={(e) => setFormType(e.target.value)}
                        className="mt-1 my-4 rounded-md block w-full border bg-white border-primary-900 shadow-md p-2 text-md"
                    >
                        <option value="">Select a form</option>
                        <option value="removalToDisposal">Removal to Disposal</option>
                        <option value="dealerToResidential">Dealer to Residential</option>
                    </select>
                    {renderForm()}
                </div>
            </Card>
        </>
    )
}