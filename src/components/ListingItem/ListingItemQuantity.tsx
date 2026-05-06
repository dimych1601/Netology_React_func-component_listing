type ListingItemQuantityProps = {
  quantity: number | undefined;
};

const ListingItemQuantity = ({ quantity }: ListingItemQuantityProps) => {
  const className =
    quantity === undefined || quantity === null
      ? ''
      : quantity <= 10
        ? 'level-low'
        : quantity <= 20
          ? 'level-medium'
          : 'level-high';
  return <p className={`item-quantity ${className}`}>{quantity} left</p>;
};

export default ListingItemQuantity;