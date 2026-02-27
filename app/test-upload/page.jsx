"use client";
import { useState } from 'react';

export default function TestUploadPage() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');
    const [uploadedUrl, setUploadedUrl] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select a file first.');
            return;
        }

        setUploading(true);
        setMessage('Generating upload URL...');

        try {
            // 1. Get the presigned URL from our API
            const response = await fetch('/api/s3-upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    filename: file.name,
                    contentType: file.type,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get upload URL');
            }

            const { url, fileKey } = await response.json();

            // 2. Upload the file directly to S3
            setMessage('Uploading to S3...');

            const uploadResponse = await fetch(url, {
                method: 'PUT',
                body: file,
                headers: {
                    'Content-Type': file.type,
                },
            });

            if (uploadResponse.ok) {
                setMessage('Upload successful!');
                // You can construct the public URL if the bucket is public
                setUploadedUrl(`https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME || 'YOUR_BUCKET_NAME'}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION || 'YOUR_REGION'}.amazonaws.com/${fileKey}`);
            } else {
                setMessage('Upload failed.');
                console.error(await uploadResponse.text());
            }

        } catch (error) {
            console.error('Error in upload process:', error);
            setMessage('An error occurred during upload.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>S3 Upload Test Tool</h1>
            <p>Select a file to upload directly to S3 (e.g., videos, PDFs).</p>

            <input type="file" onChange={handleFileChange} disabled={uploading} style={{ marginBottom: '1rem', display: 'block' }} />

            <button
                onClick={handleUpload}
                disabled={!file || uploading}
                style={{
                    padding: '0.5rem 1rem',
                    background: uploading ? '#ccc' : '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: uploading ? 'not-allowed' : 'pointer'
                }}
            >
                {uploading ? 'Uploading...' : 'Upload to S3'}
            </button>

            {message && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{message}</p>}

            {uploadedUrl && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
                    <p>File uploaded successfully! If your bucket is public, it can be accessed here:</p>
                    <a href={uploadedUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3' }}>
                        {uploadedUrl}
                    </a>
                </div>
            )}
        </div>
    );
}
