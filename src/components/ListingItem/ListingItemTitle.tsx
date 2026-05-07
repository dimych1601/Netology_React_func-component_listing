type ListingItemTitleProps = {
  title: string | undefined;
};

const ListingItemTitle = ({ title }: ListingItemTitleProps) => {
  return (
    <h3 className="product-title">
      {title && (title.length <= 50 ? title : title?.slice(0, 50) + '...')}
    </h3>
  );
};

export default ListingItemTitle;