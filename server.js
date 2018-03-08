/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .all('/api/*', (req, res) => res.sendStatus(404))
  .get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
