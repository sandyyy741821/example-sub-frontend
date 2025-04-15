export async function onRequest(context) {
    const url = new URL(context.request.url);
    const targetUrl = `https://example-sub-frontend.pages.dev${url.pathname}${url.search}`;
  
    const response = await fetch(targetUrl, {
      headers: context.request.headers,
    });
  
    // Return the fetched HTML/JS/CSS etc.
    return new Response(response.body, {
      status: response.status,
      headers: {
        ...response.headers,
        'x-proxied-by': 'Cloudflare Pages Function',
      },
    });
  }
  