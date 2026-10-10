const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // 1. Ensure useLanguage is imported
  if (content.includes('useLanguage()') && !content.includes('import { useLanguage }')) {
    content = `import { useLanguage } from '../context/LanguageContext';\n` + content;
    changed = true;
  }
  
  // 1.5 Extract t from useLanguage
  if (content.includes('const { language } = useLanguage()')) {
    content = content.replace('const { language } = useLanguage()', 'const { language, t } = useLanguage()');
    changed = true;
  }

  // 2. Ensure getPortfolioData is imported and PORTFOLIO_DATA is not
  // Let's replace import { PORTFOLIO_DATA, ... } with import { getPortfolioData, ... }
  if (content.includes('import { PORTFOLIO_DATA') || content.match(/import\s+\{[^}]*PORTFOLIO_DATA[^}]*\}\s+from\s+['"]\.\.\/data\/portfolioData['"];/)) {
    content = content.replace(/PORTFOLIO_DATA\s*(,\s*)?/, ''); // Removes PORTFOLIO_DATA and potential comma
    // If it became import { } from or import {  } from, remove it or fix it
    content = content.replace(/import\s+\{\s*,?\s*\}\s+from\s+['"]\.\.\/data\/portfolioData['"];/, '');
    
    // Ensure getPortfolioData is imported
    if (!content.includes('import { getPortfolioData')) {
      if (content.match(/import\s+\{[^}]*\}\s+from\s+['"]\.\.\/data\/portfolioData['"]/)) {
        // Add to existing import
        content = content.replace(/(import\s+\{\s*)([^}]*\s*\}\s+from\s+['"]\.\.\/data\/portfolioData['"])/, '$1getPortfolioData, $2');
      } else {
        // Add new import
        content = `import { getPortfolioData } from '../data/portfolioData';\n` + content;
      }
    }
    changed = true;
  }

  // Double check if getPortfolioData is imported but missing
  if (content.includes('getPortfolioData(') && !content.includes('import { getPortfolioData')) {
    if (content.match(/import\s+\{[^}]*\}\s+from\s+['"]\.\.\/data\/portfolioData['"]/)) {
        // Add to existing import
        content = content.replace(/(import\s+\{\s*)([^}]*\s*\}\s+from\s+['"]\.\.\/data\/portfolioData['"])/, '$1getPortfolioData, $2');
    } else {
        // Add new import
        content = `import { getPortfolioData } from '../data/portfolioData';\n` + content;
    }
    changed = true;
  }
  
  // Clean up any double commas if created
  content = content.replace(/,\s*,/g, ',');
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed ${file}`);
  }
}
