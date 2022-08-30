import Image from "next/image";

const CategoryItem = (props) => {
  const { image, title, pera } = props;

  return (
    <li className="category-item lazy-scroll">
      <div className="category-item-image position-relative">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
          unoptimized={true}
        />
      </div>
      <div className="category-item-content">
        <h6 className="category-item-name">{title}</h6>
        <p className="category-item-pera">{pera}</p>
      </div>
    </li>
  );
};

export default CategoryItem;
