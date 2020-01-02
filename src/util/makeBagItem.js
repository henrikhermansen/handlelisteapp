const makeBagItem = (itemKey, _comment, quantity, added = new Date().toJSON()) => {
  const comment = _comment.trim();
  return Object.assign(
    {
      added,
      itemKey,
      quantity: isNaN(quantity) || quantity < 1 ? 1 : quantity
    },
    comment ? { comment } : null,
  );
};

export default makeBagItem;
