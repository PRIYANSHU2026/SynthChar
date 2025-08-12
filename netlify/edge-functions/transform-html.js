// Example Netlify Edge Function to transform HTML

export default async (request, context) => {
  const response = await context.next();
  const page = await response.text();

  // Example: Add a custom meta tag to the page
  const updatedPage = page.replace(
    '</head>',
    `<meta name="deployed-with" content="netlify" /></head>`
  );

  return new Response(updatedPage, response);
};