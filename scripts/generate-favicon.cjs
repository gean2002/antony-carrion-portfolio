const fs = require('fs');
const zlib = require('zlib');

// Read cropped logo
const logoBuf = fs.readFileSync('public/logo-ac.png');
const logoW = logoBuf.readUInt32BE(16);
const logoH = logoBuf.readUInt32BE(20);

// Extract IDAT
let idatBuffers = [];
let offset = 8;
while (offset < logoBuf.length) {
  const len = logoBuf.readUInt32BE(offset);
  const type = logoBuf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IDAT') idatBuffers.push(logoBuf.slice(offset + 8, offset + 8 + len));
  offset += 12 + len;
}
const logoRaw = zlib.inflateSync(Buffer.concat(idatBuffers));

function crc32(b) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    table[n] = c >>> 0;
  }
  let c = 0 ^ (-1);
  for (let i = 0; i < b.length; i++) c = (c >>> 8) ^ table[(c ^ b[i]) & 0xff];
  return (c ^ (-1)) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4); crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function createSquarePng(size, filename) {
  const pad = Math.max(1, Math.round(size * 0.06));
  const maxInner = size - pad * 2;
  const scale = Math.min(maxInner / logoW, maxInner / logoH);
  const targetW = Math.round(logoW * scale);
  const targetH = Math.round(logoH * scale);
  const offsetX = Math.round((size - targetW) / 2);
  const offsetY = Math.round((size - targetH) / 2);

  const canvas = Buffer.alloc(size * (size * 4 + 1));
  
  for (let dy = 0; dy < targetH; dy++) {
    const sy = Math.floor(dy / scale);
    const dstRow = (offsetY + dy) * (size * 4 + 1) + 1;
    const srcRow = sy * (logoW * 4 + 1) + 1;

    for (let dx = 0; dx < targetW; dx++) {
      const sx = Math.floor(dx / scale);
      const srcPixel = srcRow + sx * 4;
      const dstPixel = dstRow + (offsetX + dx) * 4;

      canvas[dstPixel] = logoRaw[srcPixel];
      canvas[dstPixel + 1] = logoRaw[srcPixel + 1];
      canvas[dstPixel + 2] = logoRaw[srcPixel + 2];
      canvas[dstPixel + 3] = logoRaw[srcPixel + 3];
    }
  }

  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(size, 0); ihdrData.writeUInt32BE(size, 4);
  ihdrData[8] = 8; ihdrData[9] = 6;
  const ihdr = makeChunk('IHDR', ihdrData);
  const idat = makeChunk('IDAT', zlib.deflateSync(canvas));
  const iend = makeChunk('IEND', Buffer.alloc(0));

  const png = Buffer.concat([sig, ihdr, idat, iend]);
  fs.writeFileSync(filename, png);
  return png;
}

const png32 = createSquarePng(32, 'public/favicon-32x32.png');
const png64 = createSquarePng(64, 'public/favicon-64x64.png');
const png180 = createSquarePng(180, 'public/apple-touch-icon.png');
fs.copyFileSync('public/favicon-64x64.png', 'public/favicon.png');

// Create ICO
const icoHeader = Buffer.from([0x00, 0x00, 0x01, 0x00, 0x01, 0x00]);
const icoDir = Buffer.alloc(16);
icoDir[0] = 32;
icoDir[1] = 32;
icoDir[2] = 0;
icoDir[3] = 0;
icoDir.writeUInt16LE(1, 4);
icoDir.writeUInt16LE(32, 6);
icoDir.writeUInt32LE(png32.length, 8);
icoDir.writeUInt32LE(22, 12);

const icoFile = Buffer.concat([icoHeader, icoDir, png32]);
fs.writeFileSync('public/favicon.ico', icoFile);

// Create SVG
const base64Png = png180.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <image href="data:image/png;base64,${base64Png}" x="0" y="0" width="100" height="100" />
</svg>`;
fs.writeFileSync('public/favicon.svg', svg);

console.log('Successfully generated all favicons: ico, svg, pngs!');
