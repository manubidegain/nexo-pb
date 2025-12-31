import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'newsletter.json');
const PASSWORD = 'ashernexo2026';

interface NewsletterEntry {
  timestamp: string;
  name: string;
  email: string;
  language: string;
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Check password
    if (password !== PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Read data file
    let entries: NewsletterEntry[] = [];
    try {
      const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
      entries = JSON.parse(fileContent);
    } catch {
      // File doesn't exist yet
      entries = [];
    }

    return NextResponse.json({ entries });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
