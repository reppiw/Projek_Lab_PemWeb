const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '..', '..', 'gameyay', 'game');
const dstDir = path.resolve(__dirname, '..', 'public', 'game');

if (!fs.existsSync(srcDir)) {
  console.error('Source assets folder not found:', srcDir);
  process.exit(1);
}

fs.mkdirSync(dstDir, { recursive: true });

const files = ['background.png','bullet.png','cover.jpg','enemy.png','floor.png','player.png'];
files.forEach(f => {
  const s = path.join(srcDir, f);
  const d = path.join(dstDir, f);
  if (fs.existsSync(s)) {
    fs.copyFileSync(s, d);
    console.log('Copied', f);
  } else {
    console.warn('Missing asset, skipping:', s);
  }
});

console.log('Asset copy finished.');
