import { Resend } from 'resend';
import { Handler } from '@netlify/functions';
import { render } from '@react-email/render';
import DealerToResidentialEmail from '@/components/Contact/emailTemplates/dealerToResidential';
import SpaToStorageEmail from '@/components/Contact/emailTemplates/spaToStorage';
import React from 'react';
import ResidentToResidentEmail from '@/components/Contact/emailTemplates/residenceToResidence';
import RemovalToDisposalEmail from '@/components/Contact/emailTemplates/removalToDisposal';
import EmployeeApplicationEmail from '@/components/Contact/emailTemplates/employeeApplication';

const resend = new Resend(process.env.VITE_RESEND_API_KEY as string);
const fromEmail = process.env.SENDER_EMAIL as string || '';

interface EmailRequest {
    formType: string;
    dealer?: string;
    name: string;
    email: string;
    phone: string;
    phoneSecondary?: string;
    message: string;
    currentAddress: string;
    currentCity: string;
    currentState: string;
    currentZip: string;
    brand?: string;
    dimensions?: string;
    pathClearance?: string;
    placementSpot?: string;
    steps?: string;
    access?: string;
    propertySlope?: string;
    propertyTilt?: string;
    slope?: string;
    obstacles?: string;
    destinationName: string;
    destinationEmail: string;
    destinationPhone: string;
    destinationPhoneSecondary?: string;
    destinationAddress?: string;
    destinationCity?: string;
    destinationState?: string;
    destinationZip?: string;
    destinationPathClearance?: string;
    destinationPlacementSpot?: string;
    destinationSteps?: string;
    destinationAccess?: string;
    destinationPropertySlope?: string;
    destinationPropertyTilt?: string;
    destinationSlope?: string;
    destinationObstacles?: string;
    images?: { name: string; base64: string }[]; // Base64 encoded images
    resume?: { name: string; base64: string }; // Base64 encoded resume
}

export const handler: Handler = async (event) => {
        const {
            formType,
            dealer,
            name, 
            email, 
            phone, 
            phoneSecondary,
            message,
            currentAddress,
            currentCity,
            currentState,
            currentZip,
            destinationAddress,
            destinationCity,
            destinationState,
            destinationZip,
            brand,
            dimensions,
            pathClearance,
            placementSpot,
            steps,
            access,
            propertySlope,
            propertyTilt,
            slope,
            obstacles,
            destinationName,
            destinationEmail,
            destinationPhone,
            destinationPhoneSecondary,
            destinationPathClearance,
            destinationPlacementSpot,
            destinationSteps,
            destinationAccess,
            destinationPropertySlope,
            destinationPropertyTilt,
            destinationSlope,
            destinationObstacles,
            images,
            resume
        }: EmailRequest = JSON.parse(event.body as string);

        const emailData = {
            formType,
            name,
            phone,
            phoneSecondary: phoneSecondary || '',
            email,
            message,
            currentAddress,
            currentCity,
            currentState,
            currentZip,
            // Only include optional fields if they exist
            dealer: dealer || '', 
            destinationAddress: destinationAddress || '',
            destinationCity: destinationCity || '',
            destinationState: destinationState || '',
            destinationZip: destinationZip || '',
            brand: brand || '',  
            dimensions: dimensions || '',
            pathClearance: pathClearance || '',
            placementSpot: placementSpot || '',
            steps: steps || '',
            access: access || '',
            propertySlope: propertySlope || '',
            propertyTilt: propertyTilt || '', 
            slope: slope || '',
            obstacles: obstacles || '',
            destinationName: destinationName || '',
            destinationPhone: destinationPhone || '',
            destinationPhoneSecondary: destinationPhoneSecondary || '',
            destinationEmail: destinationEmail || '', 
            destinationPathClearance: destinationPathClearance || '',
            destinationPlacementSpot: destinationPlacementSpot || '',
            destinationSteps: destinationSteps || '',
            destinationAccess: destinationAccess || '',
            destinationPropertySlope: destinationPropertySlope || '',
            destinationPropertyTilt: destinationPropertyTilt || '',
            destinationSlope: destinationSlope || '',
            destinationObstacles: destinationObstacles || '',
            };

            let htmlEmail;


            // Conditionally select the email template based on formType
            if (formType === 'dealerToResidential') {
            htmlEmail = render(React.createElement(DealerToResidentialEmail, { formData: emailData }));
            } else if (formType === 'spaToStorage') {
            htmlEmail = render(React.createElement(SpaToStorageEmail, { formData: emailData }));
            } else if (formType === 'residentToResident') {
            htmlEmail = render(React.createElement(ResidentToResidentEmail, { formData: emailData }));
            } else if (formType === 'removalToDisposal') {
            htmlEmail = render(React.createElement(RemovalToDisposalEmail, { formData: emailData }));
            } else if (formType === 'employeeApplication') {
            htmlEmail = render(React.createElement(EmployeeApplicationEmail, { formData: emailData }));
            }       
            else {
                return {
                    statusCode: 400,
                    body: 'Invalid form type',
                };
            }
 
        const attachments = images?.map((image) => ({
            filename: image.name,
            content: image.base64.split(',')[1],  // Strip the base64 header (data:image/...)
            encoding: 'base64',
        })) || [];

        const resumeAttachment = resume && {
            filename: resume.name,
            content: resume.base64.split,
            encoding: 'base64',
        }

        // const {data, error} = await resend.emails.send({
        //     from: `Carolina Spa Movers Website <CarolinaSpaMovers@resend.dev>`,
        //     to: "aaronfllr.work@gmail.com",
        //     subject: "",
        //     html: htmlEmail,
        //     attachments,
        // });

        if (formType === 'employeeApplication') {
            var {data, error} = await resend.emails.send({
                from: `Carolina Spa Movers Website <CarolinaSpaMovers@resend.dev>`,
                to: "aaronfllr.work@gmail.com",
                subject: "New Employee Application",
                html: htmlEmail,
                attachments,
            });   
        } else {
            var {data, error} = await resend.emails.send({
                from: `Carolina Spa Movers Website <CarolinaSpaMovers@resend.dev>`,
                to: "aaronfllr.work@gmail.com",
                subject: "Spa Moving Order",
                html: htmlEmail,
                attachments,
            });
        }
        
        if (error) return {
            statusCode: 400,
            body: JSON.stringify(error) + `fromEmail = ${fromEmail}`,
            
        };
        return {
            statusCode: 200,
            body: "Email sent successfully"};
}
