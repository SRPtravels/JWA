export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = process.env.NODE_ENV === 'production'
    ? '/tmp/password.json'
    : path.join(process.cwd(), 'data', 'password.json');

function generatePassword(length = 10): string {
    const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export async function POST() {
    try {
        const newPassword = generatePassword();

        // Save the new password
        const dir = path.dirname(DATA_FILE);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(DATA_FILE, JSON.stringify({ password: newPassword }, null, 2));

        return NextResponse.json({ success: true, newPassword });
    } catch {
        return NextResponse.json({ success: false, error: 'Could not reset password' }, { status: 500 });
    }
}
