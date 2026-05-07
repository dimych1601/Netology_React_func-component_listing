type ListingItempPriceProps = {
  currencyCode: string | undefined;
  price: string | undefined;
};

const ListingItemPrice = ({ price, currencyCode }: ListingItempPriceProps) => {
  const currencyDictionary: Record<string, string> = {
    USD: '$',
    EUR: '€',
  };

  const currency = currencyCode ? currencyDictionary[currencyCode] : null;

  const priceWithCurrency = currency
    ? `${currency}${price}`
    : `${price} ${currencyCode}`;

  return <div className="product-price">{priceWithCurrency}</div>;
};

export default ListingItemPrice;