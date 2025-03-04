import { NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';

export async function POST(req: Request) {
  try {
    const { userId, roomName } = await req.json();
    
    const token = new AccessToken(
      process.env.LIVEKIT_API_KEY!,
      process.env.LIVEKIT_API_SECRET!,
      {
        identity: userId,
        name: roomName
      }
    );

    return NextResponse.json({ token: token.toJwt() });
  } catch (error) {
    return NextResponse.json({ error: 'Error generating LiveKit token' }, { status: 500 });
  }
} 