const fs = require('fs');
const path = require('path');

function upgradeTypography(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  
  // Improve contrast and size
  content = content.replace(/text-zinc-400/g, 'text-zinc-300');
  content = content.replace(/text-zinc-500/g, 'text-zinc-400');
  content = content.replace(/text-\[10px\]/g, 'text-[11px]');
  content = content.replace(/text-\[11px\]/g, 'text-xs');
  content = content.replace(/text-xs sm:text-sm/g, 'text-sm sm:text-base');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Upgraded:', filePath);
  }
}

function walk(dir) {
  let files = fs.readdirSync(dir);
  for (let file of files) {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      upgradeTypography(fullPath);
    }
  }
}

walk('src');
