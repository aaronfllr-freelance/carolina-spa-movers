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

const DealerToResidentialEmail: React.FC<EmailProps> = ({ formData }) => {
  return (
    <Html>
      <Heading>Dealer to Residential Move Request</Heading>
      <Text>
        A new dealer to residential move request has been submitted with the
        following details:
      </Text>
      <Text>Dealer: {formData.dealer}</Text>
      <Text>Name: {formData.name}</Text>
      <Text>Phone: {formData.phone}</Text>
      <Text>Email: {formData.email}</Text>
      <Text>Message: {formData.message}</Text>
      <Text>Destination Address: {formData.destinationAddress}</Text>
      <Text>Destination City: {formData.destinationCity}</Text>
      <Text>Destination State: {formData.destinationState}</Text>
      <Text>Destination Zip: {formData.destinationZip}</Text>
      <Text>Brand: {formData.brand}</Text>
      <Text>Dimensions: {formData.dimensions}</Text>
      <Text>Path Clearance: {formData.pathClearance}</Text>
      <Text>Placement Spot: {formData.placementSpot}</Text>
      <Text>Steps: {formData.steps}</Text>
      <Text>Access: {formData.access}</Text>
      <Text>Property Slope: {formData.propertySlope}</Text>
      <Text>Slope: {formData.slope}</Text>
      <Text>Obstacles: {formData.obstacles}</Text>
      <Text>
        This is a {formData.formType === "dealerToResidential"
          ? "Dealer to Residential"
          : "Residential to Residential"}{" "}
        move request.
      </Text>
    </Html>
  );
};

export default DealerToResidentialEmail;
