🌍 **English** | [Español](docs/README.es.md) | [Português](docs/README.pt.md)

# Dino Booking Enhanced

**A better, open-source workspace for service businesses — especially tattoo studios, salons, and independent pros.**

Built as an enhanced fork of [Pronto](https://github.com/SGrappelli/pronto) (MIT), combining its full business workspace (booking + CRM + notifications + modular) with AI-native scheduling (inspired by Calnode's MCP) and polished availability patterns (inspired by Cal.diy).

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green)](https://supabase.com)
[![Docker](https://img.shields.io/badge/Docker-ready-blue.svg)](docker-compose.yml)

---

## Why this is better than standard Dino Booking / pure schedulers

- **Full workspace**: Calendar + CRM + multi-channel notifications + documents + payments in one place (Pronto core).
- **AI agents**: Native MCP server endpoint so Grok/Claude/agents can check availability and book on your behalf (Calnode-inspired).
- **Domain-perfect**: Explicit support for tattoo studios, salons, consultants. Add specialized intake, aftercare, project tracking.
- **Your data, your server**: Self-hosted Docker + Supabase. Zero commission.
- **Modern stack**: Next.js 16 + TypeScript + Supabase (matches other Dino projects).
- **Dino branding ready**: Near-black / paper / sage palette, logos, task icons.

### Combination used
1. **Pronto** (MIT) — base workspace: public booking (name+phone), drag-drop staff calendar, CRM, omnichannel notifs (WhatsApp/Telegram/Email), modular, POS/inventory optional.
2. **Calnode** (Apache 2.0) concepts — AI natural language + MCP server for agents.
3. **Cal.diy** (MIT) patterns — advanced availability rules, calendar sync polish.

---

## Features (current + enhanced)

### 📅 Booking & Calendar
- Online booking page — clients book with name + phone only
- Drag-and-drop staff calendar with color coding
- Double-booking prevention (PostgreSQL trigger)
- **Enhanced**: AI-assisted slot finding via MCP, stronger availability rules

### 👥 CRM & Clients
- Client cards with history, notes, tags, birthday
- CSV import

### 🔔 Notifications
- Email, Telegram, WhatsApp, Viber (your credentials)
- Auto confirmations, reminders, thank-you, reactivation

### 🦖 AI Layer (new)
- MCP server for agents: list available slots, create booking, check conflicts
- Natural language booking on public page (optional)

### 📄 Documents (placeholder for expansion)
- Intake forms, waivers, aftercare templates (especially for tattoos)
- Signature tracking

### Modular + Branding
- Enable only needed modules
- Dino color palette and icons ready for customization

---

## Quick Start (same as Pronto)

```bash
git clone https://github.com/treverbarney/pronto.git
cd pronto
git checkout dino-enhanced
cp .env.example .env
# Fill Supabase keys, disable email confirm in dashboard
docker-compose up -d
```

Open http://localhost:3000

Full setup details below (inherited from Pronto).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 + Tailwind CSS + shadcn/ui |
| Backend | Next.js API Routes |
| Database | Supabase (PostgreSQL) with RLS |
| Auth | Supabase Auth |
| Storage | Supabase Storage |
| AI | MCP endpoint + optional LLM |
| Notifications | Resend/SMTP + Telegram + WhatsApp + Viber |
| Deployment | Docker Compose |

---

## Roadmap for this enhanced version

- [x] Fork Pronto as solid base
- [ ] Full Dino rebrand (colors, logos, icons)
- [ ] MCP AI agent endpoint (list_slots, create_booking)
- [ ] Tattoo-specific modules (intake, projects, aftercare)
- [ ] Document center + e-signatures
- [ ] Stronger multi-channel inbox
- [ ] Stripe deposits/payments polish
- [ ] End-to-end tests for booking + AI flows

---

## Original Pronto Documentation (below)

(Inherited features and setup remain fully functional. See original README for detailed notifications, cron, deployment, etc.)

---

**License:** MIT (from Pronto). Free for personal and commercial use.

Built for better service business workspaces. Fork, customize, own it.
