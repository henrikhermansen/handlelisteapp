import XHR from './xhr';
import firebase from './firebase';

let API;
if (process.env.NODE_ENV === 'development') {
  API = XHR;
} else {
  API = firebase;
}

const uri = 'bagItems';

const uriWithId = bagItemId => `${uri}/${bagItemId}`;

export const getBagItems = firebaseCallback => API.get(uri, firebaseCallback);

export const postBagItem = bagItem => API.post(uri, bagItem);

export const putBagItem = bagItem => API.put(uriWithId(bagItem.id), bagItem);
