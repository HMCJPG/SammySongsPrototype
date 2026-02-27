import { NextResponse } from 'next/server';
import { getUploadUrl } from '../../../lib/awsS3';

export async function POST(request) {
    try {
        const { filename, contentType } = await request.json();

        if (!filename || !contentType) {
            return NextResponse.json({ error: 'Filename and contentType are required' }, { status: 400 });
        }

        // Add a timestamp to the filename to ensure it's unique
        const timestamp = new Date().getTime();
        const uniqueFilename = `${timestamp}-${filename}`;

        const uploadUrl = await getUploadUrl(uniqueFilename, contentType);

        if (!uploadUrl) {
            return NextResponse.json({ error: 'Failed to generate upload URL' }, { status: 500 });
        }

        return NextResponse.json({
            url: uploadUrl,
            fileKey: uniqueFilename, // They can use this key to construct the final URL
        });
    } catch (error) {
        console.error('Upload API error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
