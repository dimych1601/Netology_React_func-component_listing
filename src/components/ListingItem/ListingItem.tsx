import type { ItemType } from '../../types/listing-item-type';
import ListingItemImage from './ListingItemImage';
import ListingItemPrice from './ListingItemPrice';
import ListingItemQuantity from './ListingItemQuantity';
import ListingItemTitle from './ListingItemTitle';

type ListingItemProps = {
  item: ItemType;
};

const ListingItem = ({ item }: ListingItemProps) => {
  return (
    <div className="product-card">
      <ListingItemImage src={item.MainImage?.url_570xN} alt={item.title} />
      <div className="product-info">
        <ListingItemTitle title={item.title} />
        <div className="price-container">
          <ListingItemPrice price={item.price} currencyCode={item.currencyCode} />
          <ListingItemQuantity quantity={item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default ListingItem;