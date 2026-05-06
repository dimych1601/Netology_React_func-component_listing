type ListingItemImageProps = {
  href: string | undefined;
  src: string | undefined;
  alt: string | undefined;
};

const ListingItemImage = ({ href, src, alt }: ListingItemImageProps) => {
  return (
    <div className="item-image">
      <a href={href}>
        <img src={src} alt={alt}/>
      </a>
    </div>
  );
};

export default ListingItemImage;