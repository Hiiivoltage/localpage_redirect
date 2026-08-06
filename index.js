import html from '../index.html';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Serve index.html for all paths (SPA routing)
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'max-age=0, no-cache, no-store, must-revalidate',
      },
    });
  },
};
