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
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ACRO ZENITH - Training Program</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  'dark': '#000000',
                  'dark-card': '#1a1a1a',
                  'dark-border': '#2a2a2a',
                  'orange': '#ff6b35',
                }
              }
            }
          }
        </script>
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #000000;
            color: #ffffff;
          }
          
          .nav-item {
            transition: all 0.3s ease;
          }
          
          .nav-item:hover {
            color: #ff6b35;
          }
          
          .nav-item.active {
            color: #ff6b35;
            border-bottom: 2px solid #ff6b35;
          }
          
          .card {
            background: #1a1a1a;
            border: 1px solid #2a2a2a;
            transition: all 0.3s ease;
          }
          
          .card:hover {
            border-color: #ff6b35;
            transform: translateY(-2px);
          }
          
          .btn-primary {
            background: #ff6b35;
            color: white;
            transition: all 0.3s ease;
          }
          
          .btn-primary:hover {
            background: #ff8555;
          }
          
          .btn-secondary {
            background: #2a2a2a;
            color: white;
            transition: all 0.3s ease;
          }
          
          .btn-secondary:hover {
            background: #3a3a3a;
          }
          
          .filter-btn {
            background: #1a1a1a;
            border: 1px solid #2a2a2a;
            color: white;
            transition: all 0.3s ease;
          }
          
          .filter-btn:hover {
            border-color: #ff6b35;
          }
          
          .filter-btn.active {
            background: #ff6b35;
            border-color: #ff6b35;
          }
          
          .toast {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #1a1a1a;
            border: 1px solid #ff6b35;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
          }
          
          @keyframes slideIn {
            from {
              transform: translateX(400px);
            }
            to {
              transform: translateX(0);
            }
          }
          
          .video-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.95);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
          }
          
          .badge-new {
            background: #ff6b35;
            color: white;
          }
          
          .badge-difficulty {
            background: #2a2a2a;
            color: white;
          }
          
          .badge-category {
            background: #1a1a1a;
            border: 1px solid #2a2a2a;
            color: #cccccc;
          }
        </style>
    </head>
    <body class="bg-dark text-white min-h-screen">
        <div id="app"></div>
        <div id="toast-container"></div>
        <div id="video-modal"></div>
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
