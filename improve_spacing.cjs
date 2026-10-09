const fs = require('fs');
const path = require('path');

function adjustSpacing(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  
  // Sections vertical padding (increase)
  content = content.replace(/py-24/g, 'py-32');
  
  // Section headers bottom margin (increase)
  content = content.replace(/mb-8/g, 'mb-12');
  content = content.replace(/mb-10/g, 'mb-14');
  
  // Hero section spacing
  content = content.replace(/pt-28 pb-16/g, 'pt-40 pb-24');
  
  // Card padding (increase for more breathability)
  content = content.replace(/className="p-5/g, 'className="p-6');
  
  // Decrease some overly large gaps in flex cols if any, but adding space is usually better for modern design
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Adjusted spacing:', filePath);
  }
}

function walk(dir) {
  let files = fs.readdirSync(dir);
  for (let file of files) {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      adjustSpacing(fullPath);
    }
  }
}

walk('src');
