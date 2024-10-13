// api/fetchNews.js
const fetch = require('node-fetch');  // Import node-fetch for making API requests

module.exports = async (req, res) => {
  const apiKey = process.env.NEWS_API_KEY;  // Securely access API key from environment variables
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();  // Convert the API response to JSON
    res.status(200).json(data);  // Send the data back to the frontend
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });  // Handle any errors
  }
};
