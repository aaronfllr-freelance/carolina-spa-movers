import React from "react";
import { Html, Text, Heading } from "@react-email/components";

interface EmailProps {
  formData: {
    formType: string;
    dealer: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    destinationAddress: string;
    destinationCity: string;
    destinationState: string;
    destinationZip: string;
    brand: string;
    dimensions: string;
    pathClearance: string;
    placementSpot: string;
    steps: string;
    access: string;
    propertySlope: string;
    slope: string;
    obstacles: string;
  };
}

const DealerToResidentialEmail: React.FC<EmailProps> = ({ formData }) => (
  <Html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dealer to Residential Move Request</title>
    </head>
    <body style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '24px' }}>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <Heading style={{ fontSize: '24px', marginBottom: '16px' }}>Dealer to Residential Move Request</Heading>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Dealer: {formData.dealer}</Text>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Name: {formData.name}</Text>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Phone: {formData.phone}</Text>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Email: {formData.email}</Text>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Message: {formData.message}</Text>

        <Heading style={{ fontSize: '18px', margin: '16px 0' }}>Destination Information</Heading>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>
          Address: {formData.destinationAddress}, {formData.destinationCity}, {formData.destinationState}, {formData.destinationZip}
        </Text>

        <Heading style={{ fontSize: '18px', margin: '16px 0' }}>Spa Details</Heading>
        {formData.brand && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Brand: {formData.brand}</Text>}
        {formData.dimensions && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Dimensions: {formData.dimensions}</Text>}
        {formData.pathClearance && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Path Clearance: {formData.pathClearance}</Text>}
        {formData.placementSpot && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Placement Spot: {formData.placementSpot}</Text>}
        {formData.steps && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Steps: {formData.steps}</Text>}
        {formData.access && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Access: {formData.access}</Text>}
        {formData.propertySlope && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Property Slope: {formData.propertySlope}</Text>}
        {formData.slope && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Slope: {formData.slope}</Text>}
        {formData.obstacles && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Obstacles: {formData.obstacles}</Text>}

        <Text style={{ fontSize: '16px', marginTop: '24px', textAlign: 'center' }}>
          This is a <strong>{formData.formType === 'dealerToResidential' ? 'Dealer to Residential' : 'Residential to Residential'}</strong> move request.
        </Text>
      </div>
    </body>
  </Html>
);

export default DealerToResidentialEmail;
