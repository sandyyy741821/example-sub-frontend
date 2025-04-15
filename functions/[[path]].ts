export async function onRequest(context) {
    const url = new URL(context.request.url);
    const targetUrl = `https://example-sub-frontend.pages.dev${url.pathname}${url.search}`;
  
    try {
      const response = await fetch(targetUrl, {
        method: context.request.method,
        headers: {
          ...context.request.headers,
          'X-Requested-With': 'XMLHttpRequest',
        },
      });
  
      // Log the response headers to check for any redirects
      console.log(response.headers);
  
      return new Response(response.body, {
        status: response.status,
        headers: {
          ...response.headers,
          'x-proxied-by': 'Cloudflare Pages Function',
        },
      });
    } catch (error) {
      console.error('Error:', error);
      return new Response('Failed to fetch data', { status: 500 });
    }
  }
  