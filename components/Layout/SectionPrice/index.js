import PriceItem from "../../modules/PriceItem";
import { priceData } from "../../../utils/data";

const SectionPrice = () => {
  return (
    <section className="section-price">
      <div className="container">
        <h2 className="title price-title title-center">
          <span className="shape"></span>Post and Promote Your Listings
        </h2>
        <ul className="items-list section-price-list">
          {priceData?.map((price) => (
            <PriceItem key={price.id} {...price} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionPrice;
