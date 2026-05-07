type ListingItemQuantityProps = {
  quantity: number | undefined;
};

const ListingItemQuantity = ({ quantity }: ListingItemQuantityProps) => {
  const className =
    quantity === undefined || quantity === null
      ? ''
      : quantity <= 10
        ? 'stock-low'
        : quantity <= 20
          ? 'stock-medium'
          : 'stock-high';
  return <span className={`product-quantity ${className}`}>{quantity} left</span>;
};

export default ListingItemQuantity;