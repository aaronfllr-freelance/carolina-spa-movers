import { Resend } from 'resend';
import { Handler } from '@netlify/functions';

const resend = new Resend(process.env.VITE_RESEND_API_KEY as string);

interface EmailRequest {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const handler: Handler = async (event) => {
        const {name, email, subject, message}: EmailRequest = JSON.parse(event.body as string);
 
        const emailBody = `
        You have a new message from your portfolio website:

        Name: ${name}
        Email: ${email}

        Message:
        ${message}
        `
        const {data, error} = await resend.emails.send({
            from: `Portfolio Website <${process.env.SENDER_EMAIL}>`,
            to: "aaronfllr.work@gmail.com",
            subject: subject,
            text: emailBody,
        });
        
        if (error) return {
            statusCode: 400,
            body: JSON.stringify(error),
        }; 
        return {
            statusCode: 200,
            body: "Email sent successfully"};
}
