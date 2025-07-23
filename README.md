## A tool for downloading videos from the internet.

### Key Features:
- Accepts URLs and returns downloadable media
- Can convert to several formats (including audio only)
- Allows trimming and volume adustment

### Frontend:
- User-friendly UI layer written in TypeScript with Svelte.
- TypeScript: REST API handling and interactivity
- SvelteKit: Metaframework
- Custom CSS: Clean and minimal styling

### Backend: 
- Concurrent media processing pipeline written in Go. ([clip-api](https://github.com/thomascpowell/clip-api))
- Gin: REST API framework with CORS
- Go: Queue-based job processing
- Redis: Job tracking and state storage
- Docker: Containerization
- Nginx: Reverse proxy
