# RAFINOLE Production Management System

This repository contains a production management starter for RAFINOLE, built with a modular architecture suited for future industrial expansion.

## Stack

- Frontend: Next.js + React + TypeScript + Tailwind
- Backend: NestJS + TypeScript + Swagger
- Database: PostgreSQL + Prisma ORM
- Auth: JWT + RBAC
- Deployment: Docker + Docker Compose

## Folder structure

- `apps/web`: Next.js dashboard and UX shell
- `apps/api`: NestJS REST API
- `docker`: Docker configuration
- `README.md`: project guide

## Local requirements

- Node.js 22+
- npm 10+
- Docker + Docker Compose

## Install

```bash
export PATH="$HOME/.local/node-v22.13.0-linux-x64/bin:$PATH"
cd /home/mauricio-chilongafeca/Área de trabalho/Project/RafiRela
npm install --prefix apps/web
npm install --prefix apps/api
```

## Environment

Copy the example file and adjust credentials:

```bash
cp .env.example .env
```

## Run locally

```bash
npm --prefix apps/api run start:dev
npm --prefix apps/web run dev
```

Then open:

- Frontend: http://localhost:3000
- API: http://localhost:3001
- Swagger: http://localhost:3001/api/docs

## Docker

```bash
docker compose up --build
```

## Highlights

- Configurable production lines and compatible product/format matrix
- Fixed shifts: A, B, C, D only
- Automatic total units calculation
- Dashboard KPIs and reporting structure
- Prisma schema and audit logging model
- Security-focused REST API patterns

## Notes

This project is intentionally structured for extension toward stock, planning, maintenance, quality, and OEE modules.
