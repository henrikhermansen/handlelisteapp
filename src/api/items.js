import XHR from './xhr';

const uri = '/api/items';

const uriWithId = itemId => `${uri}/${itemId}`;

export const getItems = () => XHR.get(uri);

export const postItem = item => XHR.post(uri, item);

export const putItem = item => XHR.put(uriWithId(item.id), item);
