export const INITIALIZE_REQUEST = 'INITIALIZE_REQUEST';
export const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';
export const INITIALIZE_ERROR = 'INITIALIZE_ERROR';

export const initializeRequest = () => ({ type: INITIALIZE_REQUEST });

export const initializeSuccess = () => ({ type: INITIALIZE_SUCCESS });

export const initializeError = error => ({ type: INITIALIZE_ERROR, error });
