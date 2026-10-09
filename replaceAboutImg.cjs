const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/AboutAndServices.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const svgStart = content.indexOf('<svg viewBox="0 0 300 400"');
const svgEnd = content.indexOf('</svg>', svgStart) + 6;

if (svgStart !== -1 && svgEnd !== -1) {
  const newImg = `<img src="/about-portrait.jpg" alt="Antony Carrion Portrait" className="w-full h-full object-cover grayscale-[20%] contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-500" />`;
  content = content.slice(0, svgStart) + newImg + content.slice(svgEnd);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('AboutAndServices SVG replaced with img tag.');
}
