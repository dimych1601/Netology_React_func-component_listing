type ListingItemTitleProps = {
  title: string | undefined;
};

const ListingItemTitle = ({ title }: ListingItemTitleProps) => {
  return (
    <p className="item-title">
      {title && (title.length <= 50 ? title : title?.slice(0, 50) + '...')}
    </p>
  );
};

export default ListingItemTitle;