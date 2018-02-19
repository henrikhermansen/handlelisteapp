import XHR from './xhr';

export const uri = '/api/purchasedItems';

export const getPurchasedItems = () => XHR.get(uri);
