import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import Jimp from "jimp";

const s3 = new S3Client({
  region: "ap-south-1",
});

const PROCESSED_BUCKET = "jathin-image-processed-bucket";

export const handler = async (event) => {
  try {
    console.log("Lambda triggered");

    const record = event.Records[0];

    const bucketName = record.s3.bucket.name;
    const key = decodeURIComponent(
      record.s3.object.key.replace(/\+/g, " ")
    );

    console.log("Bucket:", bucketName);
    console.log("Key:", key);

    // Download image from S3
    const getCommand = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    const response = await s3.send(getCommand);

    const chunks = [];

    for await (const chunk of response.Body) {
      chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);

    console.log("Image downloaded");

    // Read image with Jimp
    const image = await Jimp.read(buffer);

    // Resize image
    image.resize(300, 300);

    // Convert to JPEG buffer
    const processedBuffer = await image.getBufferAsync(Jimp.MIME_JPEG);

    console.log("Image resized");

    const processedKey = `processed-${key}`;

    // Upload processed image
    const putCommand = new PutObjectCommand({
      Bucket: PROCESSED_BUCKET,
      Key: processedKey,
      Body: processedBuffer,
      ContentType: "image/jpeg",
    });

    await s3.send(putCommand);

    console.log("Processed image uploaded successfully");

    return {
      statusCode: 200,
      body: "Success",
    };

  } catch (error) {
    console.error("ERROR:", error);

    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};