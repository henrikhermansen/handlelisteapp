export default (fbObject) => {
  if (!fbObject) {
    return [];
  }
  const keys = Object.keys(fbObject);
  return keys.map(key => ({
    key,
    ...fbObject[key],
  }));
};