# Making Dino Booking Enhanced Fully Working

## Current Status (dino-enhanced)

The core Pronto workspace is fully functional once Supabase is configured:
- Public booking page
- Staff calendar (drag-and-drop)
- CRM
- Notifications (configure credentials in Settings)
- Modular system
- Double-booking prevention

AI MCP endpoint at `/api/mcp` is present and responds with mock data. It is ready to be wired to real Supabase queries.

## To Get Everything Running End-to-End

1. Clone and checkout:
   ```bash
   git clone https://github.com/treverbarney/pronto.git
   cd pronto
   git checkout dino-enhanced
   ```

2. Create a free Supabase project at supabase.com

3. Copy `.env.example` to `.env` and fill:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY
   - DATABASE_URL (direct connection string)

4. In Supabase Dashboard:
   - Authentication → Providers → Email → uncheck "Confirm email"
   - Create storage buckets: `inventory` and `logos` (public)

5. Run:
   ```bash
   docker-compose up -d
   ```

6. Open http://localhost:3000 — complete the onboarding.

## Testing the AI Layer

```bash
curl http://localhost:3000/api/mcp
# Then POST to create/list
```

## Next to Make Fully "Everything Working"

- Wire MCP list_available_slots and create_booking to Pronto's appointments table and conflict logic (see existing app/api/book/route.ts for reference).
- Apply Dino colors throughout layout (use dino-* classes from Tailwind if added, or update CSS variables).
- Expand tattoo intake page into a real form that saves to clients.
- Add signature status tracking for documents.

The foundation is solid and runnable today. Full custom modules are the remaining incremental work.
