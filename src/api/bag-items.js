import XHR from './xhr';

const uri = '/api/bagItems';

const uriWithId = bagItemId => `${uri}/${bagItemId}`;

export const getBagItems = () => XHR.get(uri);

export const postBagItem = bagItem => XHR.post(uri, bagItem);

export const putBagItem = bagItem => XHR.put(uriWithId(bagItem.id), bagItem);
