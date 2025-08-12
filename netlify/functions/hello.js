// Example Netlify serverless function

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from SynthChar!' }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};