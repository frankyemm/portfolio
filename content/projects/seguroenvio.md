---
title: "SeguroEnvio: Hybrid Logistics & Fintech Platform"
slug: "seguroenvio"
excerpt: "High-performance, secure, and traceable logistics platform with 'Penalty Loop' accountability for franchise management."
techStack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL", "Tailwind CSS", "Zod", "Shadcn/ui"]
confidential: false
category: "Logistics & Fintech"
---

# SeguroEnvio: Hybrid Logistics & Fintech Platform

## Project Overview
**SeguroEnvio** is a high-performance, secure, and traceable logistics platform designed for modern franchise management. It bridges the gap between traditional shipment tracking and financial integrity by implementing a robust "Penalty Loop" system that ensures trust and accountability across all operations.

## Core Value Proposition: Trust & Traceability
The platform's primary goal is to provide a secure environment for logistics operations. Key pillars include:
- **Security First:** Financial transactions and penalties are handled with strict data integrity, preventing race conditions and ensuring atomic operations.
- **The Penalty Loop:** A unique business logic where users are automatically blocked from creating new orders if they have outstanding fines, ensuring financial compliance.
- **Multi-Tenancy:** Strict data isolation between different franchises and branches, allowing for scalable global operations while maintaining local privacy.

## Technical Stack
- **Framework:** Next.js 16 (App Router)
- **Frontend:** React 19 (using `useActionState`, `useOptimistic`, and Server Components)
- **Styling:** Tailwind CSS + Shadcn/ui (Radix Primitives)
- **Backend:** Next.js Server Actions (Screaming Architecture)
- **Database:** PostgreSQL + Prisma ORM
- **Validation:** Zod (Schema-first approach)
- **Icons:** Lucide React

## Architecture: Screaming Architecture
SeguroEnvio follows a **Screaming Architecture** pattern, where the directory structure reflects the business domains rather than the framework.
- `src/modules/auth`: Authentication & Session management.
- `src/modules/logistics`: Shipments, tracking, and QR code integration.
- `src/modules/finances`: Penalties, payments, and wallet management.
- `src/modules/inventory`: Real-time stock management across branches.

## Key Features

### 1. Automated Penalty System
Integrated logic that monitors order deadlines. If a user fails to meet a deadline (e.g., returning a package to a locker), the system automatically:
- Generates a `Fine`.
- Blocks the `User` from further transactions (`is_blocked: true`).
- Unblocks only upon verified payment (`Fine.status === 'PAID'`).

### 2. Multi-Branch Inventory Management
Real-time tracking of products across multiple physical locations.
- **Reserved Quantity:** Prevents over-selling by tracking items in pending orders.
- **Branch Isolation:** Managers only see and manage inventory for their specific branch.

### 3. Legal & Compliance Tracking
A dedicated system for tracking legal consents (`LegalConsent`), recording:
- Document versions.
- IP addresses and device fingerprints.
- Explicit data sharing authorizations.

### 4. Modern UX with React 19
Leveraging the latest React features for a premium feel:
- **Optimistic UI:** Instant feedback on inventory updates and status changes.
- **Server Actions:** Seamless data mutations without the need for complex API routing.
- **Strict Type Safety:** End-to-end TypeScript integration from the database schema to the UI components.

---
*This project demonstrates a commitment to clean code, scalable architecture, and business-driven development.*
