type ListingItemImageProps = {
  src: string | undefined;
  alt: string | undefined;
};

const ListingItemImage = ({ src, alt }: ListingItemImageProps) => {
  return (
    <>
      <img className="product-image" src={src} alt={alt}/>
    </>
  );
};

export default ListingItemImage;