import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Default route with embedded frontend
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Acro Zenith - Training App</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
          body { 
            font-family: 'Inter', system-ui, -apple-system, sans-serif; 
            background: #000000;
            color: #ffffff;
          }
          .card-hover {
            transition: all 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255,107,0,0.3);
          }
          /* YouTube Shorts aspect ratio (vertical) */
          .youtube-shorts {
            aspect-ratio: 9/16;
          }
          /* YouTube Horizontal aspect ratio */
          .youtube-horizontal {
            aspect-ratio: 16/9;
          }
          /* Video thumbnail overlay */
          .video-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s;
          }
          .video-card:hover .video-overlay {
            opacity: 1;
          }
          .bg-dark {
            background: #0a0a0a;
          }
          .bg-dark-card {
            background: #111111;
          }
          .border-dark {
            border-color: #1a1a1a;
          }
          .text-muted {
            color: #888888;
          }
          .orange-accent {
            color: #ff6b00;
          }
          .bg-orange {
            background: #ff6b00;
          }
          .border-orange {
            border-color: #ff6b00;
          }
          .hover-orange:hover {
            color: #ff6b00;
          }
        </style>
    </head>
    <body class="min-h-screen bg-dark">
        <div id="app"></div>
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
