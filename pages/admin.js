import React, { useState } from "react";
import FeatureItem from "../components/modules/FeatureItem";
import Form from "../components/modules/Form";
import { fetchData } from "../helper/fetchData";

const Admin = () => {
  const [image, setImage] = useState();
  const [data, setData] = useState([]);
  const handleSubmit = async (items) => {
    setData((prev) => ({ ...prev, items, image }));
    let id = parseFloat(Math.random(data.length * 100)).toFixed(2);
    await fetchData.postData("http://localhost:3000/api/products", {
      id: id,
      title: items.title,
      desc: items.description,
      price: items.price,
      time: `${new Date().getHours()}hrs ago`,
      image,
    });
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  return (
    <section className="page-admin">
      <div className="container flex">
        <Form
          onSubmitProps={handleSubmit}
          onImageChange={onImageChange}
          image={image}
          data={data}
        />
      </div>
    </section>
  );
};

export default Admin;
