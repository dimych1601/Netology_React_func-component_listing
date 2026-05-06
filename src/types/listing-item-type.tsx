export type ItemType = {
  listing_id: number;
  url: string | undefined;
  MainImage: {
    url_570xN: string | undefined;
  } | null;
  title: string | undefined;
  currencyCode: string | undefined;
  price: string | undefined;
  quantity: number | undefined;
};