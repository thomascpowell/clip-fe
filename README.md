## A tool for downloading videos from the internet.

### Key Features:
- Accepts URLs and returns downloadable media
- Can convert to several formats (including audio only)
- Allows trimming (start/end) and adjusting volume

### Frontend:
User-friendly UI layer written in TypeScript with Svelte.
- TypeScript: REST API handling and interactivity
- SvelteKit: Metaframework
- Custom CSS: Clean and minimal styling
- Radix UI: Colors and icons

### Backend: 
Concurrent media processing pipeline written in Go. ([clip-api](https://github.com/thomascpowell/clip-api))
- Gin: REST API framework with CORS
- Go: Queue-based job processing
- Redis: Job tracking and state storage
- Docker: Deployment
