
const fs = require('fs');
const path = require('path');
const { render } = require('./dist/server/entry-server.js');

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

async function prerender() {
  // Create the dist/client directory if it doesn't exist
  const distDir = path.resolve(__dirname, 'dist/client');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  console.log('Prerendering routes:', routes);

  // Read the template HTML file
  const template = fs.readFileSync(
    path.resolve(__dirname, 'dist/client/index.html'),
    'utf-8'
  );

  // Render each route
  for (const url of routes) {
    const { html } = render(url);

    // Inject the rendered app into the template
    const rendered = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    // Create directory for the route
    const targetDir = url === '/' 
      ? distDir 
      : path.join(distDir, url);

    if (url !== '/' && !fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Write the HTML file
    const filePath = url === '/' 
      ? path.join(distDir, 'index.html') 
      : path.join(targetDir, 'index.html');

    fs.writeFileSync(filePath, rendered);
    console.log(`Prerendered: ${url} -> ${filePath}`);
  }
}

prerender().catch(e => {
  console.error(e);
  process.exit(1);
});
