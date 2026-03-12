export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = process.env.NODE_ENV === 'production'
    ? '/tmp/password.json'
    : path.join(process.cwd(), 'data', 'password.json');

function getPassword(): string {
    try {
        if (!fs.existsSync(DATA_FILE)) return '12345678';
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
        return data.password || '12345678';
    } catch {
        return '12345678';
    }
}

export async function POST(request: Request) {
    try {
        const { password } = await request.json();
        const correct = getPassword();
        if (password === correct) {
            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ success: false, error: 'Incorrect password' }, { status: 401 });
    } catch {
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
