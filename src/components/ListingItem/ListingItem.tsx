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
    <div className="item">
      <ListingItemImage href={item.url} src={item.MainImage?.url_570xN} alt={item.title} />
      <div className="item-details">
        <ListingItemTitle title={item.title} />
        <ListingItemPrice price={item.price} currencyCode={item.currencyCode} />
        <ListingItemQuantity quantity={item.quantity} />
      </div>
    </div>
  );
};

export default ListingItem;