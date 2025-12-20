import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'newsletter.json');

interface NewsletterEntry {
  timestamp: string;
  email: string;
  language: string;
}

export async function POST(request: Request) {
  try {
    const { email, language } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    // Read existing data
    let entries: NewsletterEntry[] = [];
    try {
      const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
      entries = JSON.parse(fileContent);
    } catch {
      // File doesn't exist yet, start with empty array
      entries = [];
    }

    // Check if email already exists
    if (entries.some(entry => entry.email === email)) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Add new entry
    const newEntry: NewsletterEntry = {
      timestamp: new Date().toISOString(),
      email,
      language: language || 'en',
    };
    entries.push(newEntry);

    // Save to file
    await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
