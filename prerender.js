
const fs = require('fs');
const path = require('path');
const { renderToString } = require('react-dom/server');

// Routes to prerender
const routes = [
  '/',
  '/presentation-generator',
  '/viral-post-generator',
  '/prompt-genius',
  '/meme-generator',
  '/smart-reply',
  '/lead-genie',
  '/document-genie'
];

console.log('Prerendering routes:', routes);
