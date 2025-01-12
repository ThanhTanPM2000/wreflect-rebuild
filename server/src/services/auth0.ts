import axios from 'axios';
import jwt from 'jsonwebtoken';
import config from '../config';
import logger from '../logger';
import { DecodedJwt } from '../types';

type Auth0Tokens = {
  access_token: string;
  expires_in: number;
  id_token: string;
  token_type: string;
};

export const exchangeCodeForToken = async (code: string): Promise<DecodedJwt> => {
  try {
    const res: { data: Auth0Tokens } = await axios.post(`${config.AUTH0_DOMAIN}/oauth/token`, {
      grant_type: 'authorization_code',
      client_id: config.AUTH0_CLIENT_ID,
      client_secret: config.AUTH0_CLIENT_SECRET,
      code,
      redirect_uri: config.AUTH0_CALLBACK_URL,
    });
    const decodedJwt = <DecodedJwt>jwt.decode(res.data.id_token);
    logger.info(`User logged in: ${decodedJwt.email} `);
    return decodedJwt;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
    throw error;
  }
};

export const verificationEmails = async (sub: string) => {
  try {
    const res = await axios.post(
      `${config.AUTH0_DOMAIN}/api/v2/jobs/verification-email`,
      {
        user_id: sub,
        client_id: config.AUTH0_CLIENT_ID,
      },
      {
        headers: {
          'content-type': 'application/json',
          authorization: config.AUTH0_API_V2_MANAGEMENT,
        },
      },
    );
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
    throw error;
  }
};

export const getUserMetadata = async (userId: string, accessToken: string) => {
  try {
    const res = await axios.get(`${config.AUTH0_DOMAIN}/api/v2/users/${userId}`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`, // Your Management API token
      },
    });

    return res.data.user_metadata || {}; // Return user_metadata or an empty object if none exists
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`Failed to fetch user metadata: ${error.message}`);
    }
    throw error;
  }
};
