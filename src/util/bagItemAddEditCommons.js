export const findItemKey = (items, varenavn) => Object.entries(items).reduce((item, [key, { name }]) => {
  return item || (name.toLowerCase() === varenavn.toLowerCase() ? key : undefined);
}, undefined);

export const sortItems = (items, varenavn) => Object.entries(items).sort((a, b) => {
  const aNavn = a[1].name.toLowerCase();
  const bNavn = b[1].name.toLowerCase();
  const vNavn = varenavn.toLowerCase();
  if (aNavn.startsWith(vNavn) && !bNavn.startsWith(vNavn)) return -1;
  if (bNavn.startsWith(vNavn) && !aNavn.startsWith(vNavn)) return 1;
  return aNavn.localeCompare(bNavn);
});
