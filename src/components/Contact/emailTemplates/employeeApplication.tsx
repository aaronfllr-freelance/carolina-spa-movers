import React from "react";
import { Html, Text, Heading } from "@react-email/components";

interface EmailProps {
  formData: {
    name: string;
    phone: string;
    email: string
  };
}

const EmployeeApplicationEmail: React.FC<EmailProps> = ({ formData }) => (
  <Html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Employment Application Recieved</title>
    </head>
    <body style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '24px' }}>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <Heading style={{ fontSize: '24px', marginBottom: '16px' }}>Applicatant</Heading>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Name: {formData.name}</Text>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Phone: {formData.phone}</Text>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Email: {formData.email}</Text>

        
      </div>
    </body>
  </Html>
);

export default EmployeeApplicationEmail;
