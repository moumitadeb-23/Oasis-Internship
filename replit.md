# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Slice & Co. — Pizza Delivery App

A full-stack pizza ordering app served from `artifacts/pizza` (web) and `artifacts/api-server` (API).

### Features
- Customer: browse menu, customize pizza (5 bases / 5 sauces / 5 cheeses / 12 toppings), cart, checkout with simulated Razorpay-style payment, live order tracking with polling.
- Auth: JWT (HS256, 7-day expiry, signed with `SESSION_SECRET`). Token stored client-side in `localStorage` (`pizza_token` / `pizza_user`).
- Admin: order list with status workflow (Placed → Preparing → In Kitchen → Out for Delivery → Delivered, plus Cancelled), inventory management with stock + price editing, low-stock badges, KPI dashboard.
- Stock decrement happens atomically on order placement; pre-validation rejects orders that would underflow.

### Demo Accounts (seeded automatically on server start)
- Admin: `admin@sliceandco.test` / `admin1234`
- Demo customer: `demo@sliceandco.test` / `demo1234`

### Key files
- `lib/api-spec/openapi.yaml` — single source of truth for the API.
- `lib/db/src/schema/` — Drizzle tables (`users`, `pizzas`, `inventoryItems`, `orders`, `orderItems`).
- `artifacts/api-server/src/routes/` — Express route handlers.
- `artifacts/api-server/src/lib/auth.ts` — JWT helpers + `requireAuth` / `requireAdmin` middleware.
- `artifacts/api-server/src/seed/index.ts` — idempotent seed of pizzas, inventory, demo users.
- `artifacts/pizza/src/pages/` — React pages (menu, customize, cart, checkout, login, register, orders, order tracking, admin).
- `artifacts/pizza/src/lib/auth.tsx` — auth context.
- `artifacts/pizza/src/lib/cart.tsx` — cart context (persisted in `pizza_cart`).
- `artifacts/pizza/src/lib/api-setup.ts` — wires base URL + bearer-token auth into the generated API client.

### Notes
- The user originally requested MongoDB/Mongoose; we used PostgreSQL + Drizzle (workspace default) with the same feature set.
- Payment is fully simulated. The dummy gateway returns `pay_test_*` ids and accepts a `simulateFailure` flag for testing the failure path.

