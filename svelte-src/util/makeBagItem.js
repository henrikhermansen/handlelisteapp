const makeBagItem = (itemKey, comment, quantity) => Object.assign(
  {
    added: new Date().toJSON(),
    itemKey,
    quantity: isNaN(quantity) || quantity < 1 ? 1 : quantity
  },
  comment ? { comment } : null,
);

export default makeBagItem;
