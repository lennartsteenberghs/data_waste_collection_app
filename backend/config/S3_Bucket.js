import S3Client from "@aws-sdk/client-s3";
import dotenv from 'dotenv'
dotenv.config()


//create the connection pool to database
const S3_bucket = new S3Client({
  credentials: {
    accesKeyId: process.env.S3_ACCES_KEY,
    secretAccesKey: process.env.S3_SECRET_ACCES_KEY
  },
  region: process.env.S3_REGION,
}).promise();


export default S3_bucket;
