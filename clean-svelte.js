const fs = require('fs').promises;

const svelteDir = 'node_modules/svelte';

const extname = path => path.split('.').pop();
const filename = path => {
  const arr = path.split('.');
  arr.pop();
  return arr.join('.');
};

const handleFile = async path => {
  if (extname(path) === 'mjs') {
    try {
      const jsPath = `${filename(path)}.js`;
      await fs.unlink(jsPath);
      console.log('Deleted JS-file', jsPath);
    } catch {
      console.warn('No JS counterpart to delete', path);
    }
  }
};

const checkFile = async path => {
  const stat = await fs.lstat(path);

  if (stat.isFile()) {
    handleFile(path);
  }
  if (stat.isDirectory()) {
    traverseDir(path)
  }
};

const traverseDir = async dir => {
  const files = await fs.readdir(dir);

  files.forEach(file => checkFile(`${dir}/${file}`));
};

traverseDir(svelteDir);
