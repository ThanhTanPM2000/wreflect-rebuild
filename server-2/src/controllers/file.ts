import config from '../config';
import { RequestWithUserInfo } from '../types';
import { Response } from 'express';
import StatusCodes from 'http-status-codes';
import axios from 'axios';
import { FileUpload } from 'graphql-upload';

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuidv4 } from 'uuid';

const s3Client = new S3Client({
  region: config.AWS_REGION,
  credentials: {
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  },
});

type Auth0Tokens = {
  access_token: string;
  expires_in: number;
  id_token: string;
  token_type: string;
};

export const generatePresignedUrl = async () => {
  const command = new PutObjectCommand({
    Bucket: config.AWS_BUCKET_NAME,
    Key: `teams/${uuidv4()}`,
    ContentType: 'image/*',
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn: 60 * 60 }); // URL expires in 5 minutes
  return url;
};

export const uploadPictureToS3 = async (picture) => {
  const { createReadStream, filename }: FileUpload = await picture;
  try {
    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: config.AWS_BUCKET_NAME,
        Key: `teams/${filename}`,
        Body: createReadStream(),
      },
    });

    const result = await upload.done();
    console.log(result);
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const changeAvatar = async (req: RequestWithUserInfo, res: Response) => {
  try {
    const { sub } = req?.user || {};
    const { picture } = req?.body;

    const bearerToken: { data: Auth0Tokens } = await axios.request({
      method: 'POST',
      url: `${config?.AUTH0_DOMAIN}/oauth/token`,
      headers: { 'content-type': ' application/json' },
      data: {
        grant_type: 'client_credentials',
        client_id: '1yULsU7wV7LYiQHhSJK5xW7vJlvu8tD9',
        client_secret: 'W1OeTNWkuK0esIPkX0H8cUQDmWC_KUIDY_1KL1UXkp_Js-DAGrdv2LHuDnxd9ZQL',
        audience: 'https://dev-m0ubghav.us.auth0.com/api/v2/',
      },
    });

    const data = await axios.request({
      method: 'PATCH',
      url: `${config?.AUTH0_DOMAIN}/api/v2/users/${sub}`,
      headers: { authorization: `Bearer ${bearerToken?.data?.access_token}`, 'content-type': 'application/json' },
      data: {
        user_metadata: {
          picture:
            'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/71272235_2174825436151811_6451460647220674560_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=SPFYg4uoiMgAX8SIrZx&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT9PXDY8sW6yeOKPNrow1Rqs4pkR1VZta4Dk2D-qfTsBKg&oe=62BFBE1B',
        },
      },
    });
    res.send(data?.data);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).send();
  }
};
