import { Resend } from 'resend';
import { Handler } from '@netlify/functions';

const resend = new Resend(process.env.VITE_RESEND_API_KEY as string);
const fromEmail = process.env.SENDER_EMAIL as string || '';

interface EmailRequest {
    dealer: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    currentAddress: string;
    currentCity: string;
    currentState: string;
    currentZip: string;
    destinationAddress?: string;
    destinationCity?: string;
    destinationState?: string;
    destinationZip?: string;
    brand?: string;
    dimensions?: string;
    pathClearance?: string;
    placementSpot?: string;
    steps?: string;
    access?: string;
    propertySlope?: string;
    slope?: string;
    obstacles?: string;
}

export const handler: Handler = async (event) => {
        const {
            dealer,
            name, 
            email, 
            phone, 
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
            slope,
            obstacles
        }: EmailRequest = JSON.parse(event.body as string);
 
        const emailBody = `
        You have a new message from Carolina Spa website:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}

        Brand: ${brand}
        Dimensions: ${dimensions}
        Path Clearance: ${pathClearance}
        Current Address of Hot Tub: ${currentAddress}, ${currentCity}, ${currentState}, ${currentZip}
        
        Where the Hot Tub is Going: ${destinationAddress}, ${destinationCity}, ${destinationState}, ${destinationZip}
        Placement Spot: ${placementSpot}

        Steps: ${steps}
        Access: ${access}
        Property Slope: ${propertySlope}
        Slope: ${slope}
        Obstacles: ${obstacles}

        dealer: ${dealer}
        
        Message:
        ${message}
        `
        const {data, error} = await resend.emails.send({
            from: `Carolina Spa Movers Website <CarolinaSpaMovers@resend.dev>`,
            to: "aaronfllr.work@gmail.com",
            subject: "Spa Needs Moving",
            text: emailBody,
        });
        
        if (error) return {
            statusCode: 400,
            body: JSON.stringify(error) + `fromEmail = ${fromEmail}`,
            
        };
        return {
            statusCode: 200,
            body: "Email sent successfully"};
}
