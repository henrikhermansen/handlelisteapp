import App from './App.svelte';

console.log(process.env.APP_STORAGE_BUCKET);

const app = new App({
  target: document.body
});

export default app;