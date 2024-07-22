import { useState } from 'react';

const formatPhoneNumber = (value: string): string => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, '');

  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return `(${phoneNumber}`;
  if (phoneNumberLength < 7) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, phoneNumberLength)}`;
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};
// const formatPhoneNumber = (value: string): string => {
//   if (!value) return value;

//   const phoneNumber = value.replace(/[^\d]/g, '');

//   const phoneNumberLength = phoneNumber.length;
//   if (phoneNumberLength < 4) return `+1 (${phoneNumber}`;
//   if (phoneNumberLength < 7) return `+1 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
//   return `+1 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
// };

const usePhoneNumberFormatter = (initialValue: string = '') => {
  const [value, setValue] = useState(formatPhoneNumber(initialValue));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/[^\d]/g, '');
    const formattedValue = formatPhoneNumber(rawValue);
    setValue(formattedValue);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default usePhoneNumberFormatter;
