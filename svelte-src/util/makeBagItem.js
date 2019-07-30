const makeBagItem = (itemKey, _comment, quantity) => {
  const comment = _comment.trim();
  return Object.assign(
    {
      added: new Date().toJSON(),
      itemKey,
      quantity: isNaN(quantity) || quantity < 1 ? 1 : quantity
    },
    comment ? { comment } : null,
  );
};

export default makeBagItem;
