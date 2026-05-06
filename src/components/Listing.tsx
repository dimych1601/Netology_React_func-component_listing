import type { ItemType } from '../types/listing-item-type';
import ListingItem from './ListingItem/ListingItem';

type ListingProps = {
  items: ItemType[];
};

const Listing = ({ items }: ListingProps) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <ListingItem item={item} key={item.listing_id} />
      ))}
    </div>
  );
};

export default Listing;