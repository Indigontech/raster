# REST Express Application

## Overview

This is a full-stack web application built with a modern tech stack featuring React on the frontend and Express.js on the backend. The application uses TypeScript throughout, Drizzle ORM for database operations, and shadcn/ui for UI components. It's designed as a monorepo with shared types and schemas between client and server.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-backed sessions via connect-pg-simple
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Neon serverless PostgreSQL
- **Migrations**: Drizzle Kit for schema migrations
- **Schema Location**: `shared/schema.ts` for type sharing

## Key Components

### Shared Schema (`shared/schema.ts`)
- Defines database tables and TypeScript types
- Uses Drizzle ORM with Zod integration for validation
- Currently includes a users table with id, username, and password fields
- Provides shared types between client and server

### Storage Layer (`server/storage.ts`)
- Implements an abstraction layer for data operations
- Uses PostgreSQL database storage (DatabaseStorage class)
- Connects via Drizzle ORM with Neon serverless PostgreSQL
- Provides CRUD operations for users

### API Routes (`server/routes.ts`)
- Placeholder for REST API endpoints
- All routes prefixed with `/api`
- Ready for implementation of authentication and business logic

### Client Structure
- React application with modern hooks and components
- Comprehensive UI component library from shadcn/ui
- TanStack Query for API state management
- Custom hooks for mobile detection and toast notifications

## Data Flow

1. **Client Requests**: React components use TanStack Query to make API calls
2. **API Layer**: Express routes handle HTTP requests at `/api/*` endpoints
3. **Storage Layer**: Routes use the storage interface for data operations
4. **Database**: Drizzle ORM manages PostgreSQL interactions (when connected)
5. **Response**: Data flows back through the same layers to update UI

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router via Wouter)
- UI libraries (Radix UI primitives, shadcn/ui components)
- State management (TanStack Query)
- Form handling (React Hook Form, Hookform Resolvers)
- Styling (Tailwind CSS, class-variance-authority, clsx)
- Date utilities (date-fns)
- Animations (Framer Motion, Embla Carousel)

### Backend Dependencies
- Express.js for HTTP server
- Drizzle ORM for database operations
- Neon serverless PostgreSQL driver
- Session management (express-session, connect-pg-simple)
- Development tools (tsx for TypeScript execution)

### Development Tools
- Vite for frontend development and building
- TypeScript for type safety
- ESBuild for backend bundling
- Drizzle Kit for database migrations

## Deployment Strategy

### Development Environment
- Replit environment with Node.js 20, Web, and PostgreSQL 16 modules
- Hot reload via Vite for frontend changes
- tsx for backend TypeScript execution
- Single command development start: `npm run dev`

### Production Build
- Frontend: Vite builds static assets to `dist/public`
- Backend: ESBuild bundles server code to `dist/index.js`
- Deployment target: Autoscale platform
- Port configuration: Internal 5000, External 80

### Database Configuration
- PostgreSQL 16 via Replit modules
- Connection via DATABASE_URL environment variable
- Drizzle migrations stored in `./migrations` directory
- Schema push command: `npm run db:push`

## Changelog

```
Changelog:
- June 13, 2025. Initial setup
- June 13, 2025. Added PostgreSQL database integration with Drizzle ORM
- June 13, 2025. Completed Projects page with iOS-style glassmorphism cards and App Store feature section
- June 13, 2025. Enhanced portfolio with AI Music project featuring Spotify integration
- June 13, 2025. Created dedicated Portfolio page showcasing professional work
- June 13, 2025. Redesigned footer with Apple-style professional layout and consistent #def8e9 color scheme
- June 13, 2025. Enhanced Portfolio page with comprehensive education section and personal Raster projects showcase
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```