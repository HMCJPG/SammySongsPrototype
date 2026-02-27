import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Initialize the S3 Client securely using environment variables
const s3Client = new S3Client({
    region: process.env.AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

/**
 * Basic helper function to generate a temporary, signed URL for a private S3 file.
 * This is useful if you don't want your PDFs or Videos to be completely public on the internet.
 * 
 * @param {string} fileKey - The path/name of your file inside the bucket (e.g., 'videos/hello.mp4')
 * @returns {Promise<string>} - The temporary signed URL you can pass into an <img src>, <video src>, or <a href>
 */
export async function getPrivateFileUrl(fileKey) {
    try {
        const command = new GetObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: fileKey,
        });

        // URL expires in 3600 seconds (1 hour)
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        return signedUrl;
    } catch (error) {
        console.error("Error generating S3 signed URL:", error);
        return null;
    }
}

/**
 * Helper function to generate a presigned URL for uploading files directly to S3 from the browser.
 * Make a PUT request to the returned URL with the file as the body.
 * 
 * @param {string} fileKey - The path/name of your file inside the bucket to save as (e.g., 'videos/new-video.mp4')
 * @param {string} contentType - The MIME type of the file (e.g., 'video/mp4')
 * @returns {Promise<string>} - The temporary signed URL for uploading
 */
export async function getUploadUrl(fileKey, contentType) {
    try {
        const command = new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: fileKey,
            ContentType: contentType,
        });

        // URL expires in 3600 seconds
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        return signedUrl;
    } catch (error) {
        console.error("Error generating S3 upload URL:", error);
        return null;
    }
}

/**
 * If your bucket is configured to be "Public", you don't even need the function above!
 * You can just construct the URL manually like this.
 */
export function getPublicFileUrl(fileKey) {
    return `${process.env.NEXT_PUBLIC_S3_BASE_URL}/${fileKey}`;
}
