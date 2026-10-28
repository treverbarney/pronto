import { NextRequest, NextResponse } from 'next/server';

// MCP endpoint for AI agents (inspired by Calnode)
// Allows listing available slots and creating bookings.
// Extend with real Supabase queries against Pronto's appointments/availability.

export async function GET() {
  return NextResponse.json({
    name: 'dino-booking-mcp',
    version: '1.0',
    tools: [
      {
        name: 'list_available_slots',
        description: 'List available booking slots for a service/staff/date',
        inputSchema: {
          type: 'object',
          properties: {
            date: { type: 'string' },
            serviceId: { type: 'string' },
            staffId: { type: 'string' }
          }
        }
      },
      {
        name: 'create_booking',
        description: 'Create a new booking',
        inputSchema: {
          type: 'object',
          properties: {
            clientName: { type: 'string' },
            clientPhone: { type: 'string' },
            start: { type: 'string' },
            serviceId: { type: 'string' },
            staffId: { type: 'string' }
          },
          required: ['clientName', 'start']
        }
      }
    ]
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tool, arguments: args = {} } = body;

    if (tool === 'list_available_slots') {
      // TODO: Integrate with Pronto calendar / Supabase free slots
      return NextResponse.json({
        content: [{
          type: 'text',
          text: JSON.stringify({
            slots: [
              { start: '2026-10-29T09:00:00Z', end: '2026-10-29T10:00:00Z', available: true },
              { start: '2026-10-29T10:00:00Z', end: '2026-10-29T11:00:00Z', available: true },
              { start: '2026-10-29T14:00:00Z', end: '2026-10-29T15:30:00Z', available: true }
            ],
            source: 'mock — wire to Pronto availability engine'
          })
        }]
      });
    }

    if (tool === 'create_booking') {
      // TODO: Call existing Pronto booking API or insert into appointments with conflict check
      return NextResponse.json({
        content: [{
          type: 'text',
          text: JSON.stringify({
            success: true,
            bookingId: `dino-${Date.now()}`,
            client: args.clientName || 'Guest',
            start: args.start,
            message: 'Mock booking created. Full Supabase integration pending.'
          })
        }]
      });
    }

    return NextResponse.json({ error: 'Unknown tool' }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
