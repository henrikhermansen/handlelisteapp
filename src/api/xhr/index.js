import xhr from 'xhr';

const xhrPromise = (uri, options = {}) => new Promise((resolve, reject) => xhr(
  uri,
  {
    json: true,
    timeout: 5000,
    ...options,
  },
  (error, response, body) => (error ? reject(error) : resolve(body)),
));

export default {
  get: uri => xhrPromise(uri),
  post: (uri, body) => xhrPromise(uri, { body }),
};
