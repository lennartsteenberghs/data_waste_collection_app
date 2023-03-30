import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

import dotenv from 'dotenv'
dotenv.config()

const S3_client = new S3Client({
        credentials: {
          accessKeyId: process.env.S3_ACCES_KEY,
          secretAccessKey: process.env.S3_SECRET_ACCES_KEY
        },
        region: process.env.S3_REGION
      });


// insert photo to S3 bucket
export async function insertPhoto(id, buffer, mimetype){
  const params = {
    Bucket: process.env.S3_NAME,
    Key: id.toString(), 
    Body: buffer, 
    ContentType: mimetype,
  }
  const command = new PutObjectCommand(params)
  await S3_client.send(command)
}

//generate public link to see picture
export async function generateLink(idphoto){
  const getObjectParams = {
    Bucket: process.env.S3_NAME,
    Key: idphoto.toString()
  }
  const command = new GetObjectCommand(getObjectParams)
  const url = await getSignedUrl(S3_client, command, {expiresIn: 3600})
  return url;
}

 