import http from 'http';

const PORT = 8080;

const server = http.createServer((req, res) => {
  // --- CORS Headers ---
  // This allows the frontend running on a different origin (e.g., localhost:5173)
  // to make requests to this backend. In a real production app, you'd want
  // to restrict this to your actual frontend's domain.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // --- Handle pre-flight requests for CORS ---
  if (req.method === 'OPTIONS') {
    res.writeHead(204); // No Content
    res.end();
    return;
  }

  // --- API Routing ---
  if (req.url === '/api' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Hello from the dependency-free backend!',
      mission: 'To help build a platform that can change the world.'
    }));
  } else {
    // --- Handle 404 Not Found ---
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('This is a basic, dependency-free Node.js server.');
  console.log('It was created this way due to limitations in the execution environment.');
});
