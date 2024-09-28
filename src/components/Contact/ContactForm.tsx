"use client"

import { useState } from "react"
import ContactForm from "./forms/formBase"
import RemovalToDisposal from "./forms/removalToDisposal"
import { Card } from "../ui/card"
import DealerToResidence from "./forms/dealerToResidence"
import ResidentToResident from "./forms/residenceToResidence"
import SpaToStorage from "./forms/spaToStorage"

export default function Form() {
    const [formType, setFormType] = useState('')
    
    const renderForm = () => {
        switch (formType) {
            case 'removalToDisposal':
                return <RemovalToDisposal />
            case 'dealerToResidential':
                return <DealerToResidence />
            case 'residentToResident':
                return <ResidentToResident />
            case 'residentToStorage':
                return <SpaToStorage />
            default:
                return ''
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
                        <option value="">What can we help with?</option>
                        <option value="removalToDisposal">Removal to Disposal</option>
                        <option value="dealerToResidential">Dealer to Residential</option>
                        <option value="residentToResident">Residential to Residential</option>
                        <option value="residentToStorage">Residential to Storage</option>
                    </select>
                    {renderForm()}
                </div>
            </Card>
        </>
    )
}