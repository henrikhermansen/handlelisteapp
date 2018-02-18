import XHR from './xhr';

export const uri = '/api/bagItems';

export const getBagItems = () => XHR.get(uri);
