import XHR from './xhr';

export const uri = '/api/purchasedItems';

export const getPurchasedItems = () => XHR.get(uri);

export const postPurchasedItem = bagItemId =>
  XHR.post(uri, { bagItemId, purchased: new Date().toJSON() });
