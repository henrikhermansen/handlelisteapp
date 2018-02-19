import XHR from './xhr';

export const uri = '/api/items';

export const getItems = () => XHR.get(uri);
