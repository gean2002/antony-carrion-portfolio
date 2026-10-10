const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('PORTFOLIO_DATA') && !content.includes('useLanguage')) {
    content = content.replace(
      /import\s+\{\s*PORTFOLIO_DATA\s*\}\s+from\s+['"]\.\.\/data\/portfolioData['"];/,
      `import { getPortfolioData } from '../data/portfolioData';\nimport { useLanguage } from '../context/LanguageContext';`
    );

    // Adjusted regex to match `React.FC` with or without generics
    const componentRegex = /(export\s+(const|function)\s+\w+(?::\s*React\.FC(?:<[^>]+>)?)?\s*=\s*(?:\([^)]*\)\s*=>\s*\{|\([^)]*\)\s*\{))/;
    
    if (componentRegex.test(content)) {
      content = content.replace(componentRegex, (match) => {
        return `${match}\n  const { language } = useLanguage();\n  const PORTFOLIO_DATA = getPortfolioData(language);\n`;
      });
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`Skipped ${file} - regex mismatch`);
    }
  }
}
