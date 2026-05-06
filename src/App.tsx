import './App.css';
import './css/main.css';
import type {ItemType} from './types/listing-item-type';
import Listing from './components/Listing';
import data from './data/etsy.json';


const App = () => {
  const items: ItemType[] = data.map(
    (elem): ItemType => ({
      listing_id: elem.listing_id,
      currencyCode: elem.currency_code,
      MainImage: { url_570xN: elem.MainImage?.url_570xN },
      price: elem.price,
      quantity: elem.quantity,
      title: elem.title,
      url: elem.url,
    })
  );

  return <Listing items={items} />;
};

export default App;