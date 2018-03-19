import XHR from './xhr';
import firebase from './firebase';

let API;
if (process.env.NODE_ENV === 'development') {
  API = XHR;
} else {
  API = firebase;
}

const uri = 'items';

const uriWithId = itemId => `${uri}/${itemId}`;

export const getItems = () => API.get(uri);

export const postItem = item => API.post(uri, item);

export const putItem = item => API.put(uriWithId(item.id), item);
