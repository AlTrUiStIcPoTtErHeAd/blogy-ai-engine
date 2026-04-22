# Blogy AI Blog Engine & Growth Audit Platform

## Overview
Blogy is a high-performance, production-ready React/Next.js application designed to solve all three parts of the Hackathon challenge:
1. AI Blog Engine Architecture
2. Dashboard & Product Analysis
3. Blog Creation & SEO Validation

## Tech Stack
- **Framework**: Next.js 14 App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS V3, shadcn/ui components
- **Icons**: Lucide React
- **Analytics**: Recharts
- **State**: React Hooks (Mocked Context Layer for zero-cost demonstrations)

## Running the Demo
1. Ensure Node.js 18+ is installed.
2. Run \`npm install\` to install dependencies.
3. Run \`npm run dev\` to launch the application.
4. Navigate to \`http://localhost:3000\`.
5. Click **"Get Started"** or **"Enter Demo Workspace"** on the landing page to access the hackathon dashboard.

## Feature Walkthrough
- **Landing Page (/)**: Stunning introduction to the SaaS product.
- **AI Blog Engine (/engine)**: A 5-step interactive workflow.
- **Generated Blogs (/blogs)**: The validated, SEO-ready output (including the two requested seed blogs).
- **Product Audit (/audit)**: An interactive analysis tab evaluating UX, Growth, and SEO.
- **Publishing (/publish)**: Instantly adapts content for LinkedIn, Medium, and more.

## Hackathon Robustness
To ensure 100% uptime during live pitches and judging, the application utilizes a `demo-data.ts` deterministic abstraction layer. Every API failure is caught and graceful fallbacks are served instantly. All scores, SEO validations, and structural recommendations are fully viewable and explainable without entering a credit card for external providers.
