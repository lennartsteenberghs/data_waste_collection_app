import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Configure the S3 client with environment variables
const S3_client = new S3Client({
  region: process.env.S3_REGION, // AWS region of the S3 bucket
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY, // AWS Access Key ID
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY, // AWS Secret Access Key
  },
});

/**
 * Uploads a photo to an S3 bucket.
 * The photo content is provided as a buffer and stored under the specified key in the bucket.
 */
export async function insertPhoto(id, buffer, mimetype) {
  const params = {
    Bucket: process.env.S3_NAME,
    Key: id.toString(),
    Body: buffer,
    ContentType: mimetype,
  };

  const command = new PutObjectCommand(params);
  await S3_client.send(command);
}

/**
 * Generates a temporary public URL for accessing a photo in the S3 bucket.
 * The URL is valid for a limited time period.
 */
export async function generateLink(idphoto) {
  const getObjectParams = {
    Bucket: process.env.S3_NAME,
    Key: idphoto.toString(),
  };

  const command = new GetObjectCommand(getObjectParams);
  const url = await getSignedUrl(S3_client, command, { expiresIn: 3600 });
  return url;
}