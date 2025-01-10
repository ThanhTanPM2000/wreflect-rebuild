const parseString = (key: string): string => {
  const value = process.env?.[key];
  if (!value) {
    throw new Error(`${key} is not present`);
  }
  return value;
};

// const parseNumber = (key: string): number => {
//   const value = process.env[key];
//   if (!value) {
//     throw new Error(`${key} is not present`);
//   }
//   const parsed = parseInt(value);
//   if (isNaN(parsed)) {
//     throw new Error(`${key} should be a number`);
//   }
//   return parsed;
// };

// const parseBoolean = (key: string): boolean => {
//   const value = process.env[key];
//   if (!value) {
//     throw new Error(`${key} is not present`);
//   }
//   if (value === 'TRUE' || value === 'true') {
//     return true;
//   } else if (value === 'FALSE' || value === 'false') {
//     return false;
//   }
//   throw new Error(`${key} should be TRUE or true or FALSE or false`);
// };

export default {
  AUTH0_WEBAUTH_CONFIG: {
    domain: parseString('NEXT_PUBLIC_AUTH0_DOMAIN'),
    clientID: parseString('NEXT_PUBLIC_AUTH0_CLIENT_ID'),
    responseType: parseString('NEXT_PUBLIC_AUTH0_RESPONSE_TYPE'),
    redirectUri: parseString('NEXT_PUBLIC_REDIRECT_URI'),
  },
  SERVER_BASE_URL: parseString('NEXT_PUBLIC_SERVER_BASE_URL'),
  GIPHY_API: parseString('NEXT_PUBLIC_GIPHY_API'),
};
