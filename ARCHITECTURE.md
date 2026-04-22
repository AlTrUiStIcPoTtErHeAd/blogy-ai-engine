# Architecture Overview

## Modular Frontend Structure
Blogy is built on a highly modular App Router architecture utilizing the `(dashboard)` routing group to maintain persistent lateral layouts across all specialized tools.

## Component Strategy
We use \`shadcn/ui\` for accessible, customizable, and reliable components. 
Rather than a complex monolithic state machine, we decouple state locally within specific modules (e.g., \`engine/page.tsx\`, \`audit/page.tsx\`) to prevent widespread re-renders.

## Integration Layer
The system is built to plug into OpenAI/Anthropic APIs out-of-the-box. The frontend connects to the backend API routes (currently bypassed using mock simulated delays `setTimeout` and `demo-data.ts()`) which theoretically invoke LLM processing. 
The deterministic mock layer guarantees that the specific requirements of the Hackathon (like the exact seed blogs and UX issues) are always visible and consistently parsed to judges.

## Performance
- **Server Side Rendering**: Next.js App Router for optimal indexability of public pages.
- **Client Components ('use client')**: Specifically scoped down the tree to handle the massive interactive forms and state flows of the AI Workspace.
- **Dynamic Imports**: Recharts and heavy components are dynamically loaded.
