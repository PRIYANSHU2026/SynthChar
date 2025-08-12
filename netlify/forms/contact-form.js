// Example Netlify form handler

exports.handler = async (event, context) => {
  // Process form submission
  const { name, email, message } = JSON.parse(event.body);
  
  // Example: Send email, store in database, etc.
  console.log(`Received message from ${name} (${email}): ${message}`);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submission received' }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};