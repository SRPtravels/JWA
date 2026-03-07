import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the path to our local JSON store
const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'videos.json');

// Interface for our data structure
interface VideoData {
    videos: string[];
}

// Utility to read data from the JSON file
function readVideoData(): VideoData {
    try {
        if (!fs.existsSync(DATA_FILE_PATH)) {
            // If the file doesn't exist, ensure the directory exists and return default empty
            const dir = path.dirname(DATA_FILE_PATH);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(DATA_FILE_PATH, JSON.stringify({ videos: [] }, null, 2));
            return { videos: [] };
        }
        const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
        return JSON.parse(fileContent) as VideoData;
    } catch (error) {
        console.error("Error reading video data:", error);
        return { videos: [] };
    }
}

// Utility to write data to the JSON file
function writeVideoData(data: VideoData) {
    try {
        fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error("Error writing video data:", error);
        return false;
    }
}

// GET: Fetch all videos
export async function GET() {
    const data = readVideoData();
    return NextResponse.json({ success: true, videos: data.videos });
}

// POST: Add a new video URL
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { url } = body;

        if (!url || typeof url !== 'string') {
            return NextResponse.json({ success: false, error: 'Invalid URL provided' }, { status: 400 });
        }

        const data = readVideoData();

        // Prevent duplicates
        if (!data.videos.includes(url)) {
            data.videos.unshift(url); // Add to the beginning so newest is first
            writeVideoData(data);
        }

        return NextResponse.json({ success: true, videos: data.videos }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}

// DELETE: Remove a video URL
export async function DELETE(request: Request) {
    try {
        const body = await request.json();
        const { url } = body;

        if (!url || typeof url !== 'string') {
            return NextResponse.json({ success: false, error: 'Invalid URL provided' }, { status: 400 });
        }

        const data = readVideoData();
        data.videos = data.videos.filter(v => v !== url);
        writeVideoData(data);

        return NextResponse.json({ success: true, videos: data.videos });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
