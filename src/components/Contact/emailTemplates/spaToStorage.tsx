import React from 'react';
import { Html, Text, Heading } from '@react-email/components';

interface EmailProps {
  formData: {
    name: string;
    phone: string;
    email: string;
    message: string;
    currentAddress: string;
    currentCity: string;
    currentState: string;
    currentZip: string;
    brand: string;
    dimensions: string;
    pathClearance: string;
    placementSpot: string;
    steps: string;
    access: string;
    propertySlope: string;
    slope: string;
    obstacles: string;
    destinationAddress: string;
    destinationCity: string;
    destinationState: string;
    destinationZip: string;
    destinationPathClearance: string;
    destinationPlacementSpot: string;
    destinationSteps: string;
    destinationAccess: string;
    destinationPropertySlope: string;
    destinationSlope: string;
    destinationObstacles: string;
  };
}

const SpaToStorageEmail: React.FC<EmailProps> = ({ formData }) => (
    <Html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Resident to Storage Move</title>
    </head>
    <body style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '24px' }}>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <Heading style={{ fontSize: '24px', marginBottom: '16px' }}>Resident to Storage Move Request</Heading>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Name: {formData.name}</Text>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Email: {formData.email}</Text>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Phone: {formData.phone}</Text>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>Message: {formData.message}</Text>

        <Heading style={{ fontSize: '18px', margin: '16px 0' }}>Current Location Information</Heading>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>
          Address: {formData.currentAddress}, {formData.currentCity}, {formData.currentState}, {formData.currentZip}
        </Text>
        {formData.brand && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Brand: {formData.brand}</Text>}
        {formData.dimensions && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Dimensions: {formData.dimensions}</Text>}
        {formData.pathClearance && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Path Clearance: {formData.pathClearance}</Text>}
        {formData.placementSpot && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Placement Spot: {formData.placementSpot}</Text>}
        {formData.steps && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Steps: {formData.steps}</Text>}
        {formData.access && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Access: {formData.access}</Text>}
        {formData.propertySlope && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Property Slope: {formData.propertySlope}</Text>}
        {formData.slope && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Slope: {formData.slope}</Text>}
        {formData.obstacles && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Obstacles: {formData.obstacles}</Text>}

        <Heading style={{ fontSize: '18px', margin: '16px 0' }}>Destination Information</Heading>
        <Text style={{ fontSize: '16px', margin: '8px 0' }}>
          Address: {formData.destinationAddress}, {formData.destinationCity}, {formData.destinationState}, {formData.destinationZip}
        </Text>
        {formData.destinationPathClearance && (
          <Text style={{ fontSize: '16px', margin: '8px 0' }}>Destination Path Clearance: {formData.destinationPathClearance}</Text>
        )}
        {formData.destinationPlacementSpot && (
          <Text style={{ fontSize: '16px', margin: '8px 0' }}>Destination Placement Spot: {formData.destinationPlacementSpot}</Text>
        )}
        {formData.destinationSteps && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Destination Steps: {formData.destinationSteps}</Text>}
        {formData.destinationAccess && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Destination Access: {formData.destinationAccess}</Text>}
        {formData.destinationPropertySlope && (
          <Text style={{ fontSize: '16px', margin: '8px 0' }}>Destination Property Slope: {formData.destinationPropertySlope}</Text>
        )}
        {formData.destinationSlope && <Text style={{ fontSize: '16px', margin: '8px 0' }}>Destination Slope: {formData.destinationSlope}</Text>}
        {formData.destinationObstacles && (
          <Text style={{ fontSize: '16px', margin: '8px 0' }}>Destination Obstacles: {formData.destinationObstacles}</Text>
        )}
      </div>
    </body>
  </Html>
);

export default SpaToStorageEmail;
