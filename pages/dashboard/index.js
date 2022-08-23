import React, { useState } from "react";
import SectionFeature from "../../components/Layout/SectionFeature";
import Form from "../../components/modules/Form";
import { fetchData } from "../../helper/fetchData";
import dashboardData from "../../utils/dashboardData.json";
import { apiUrl } from "../../config";

const Admin = () => {
  const [image, setImage] = useState();
  const [data, setData] = useState([]);

  const handleSubmit = (items) => {
    setData((prev) => ({ ...prev, items, image }));
    let id = parseFloat(Math.random(data.length * 100000)).toFixed(2);
    fetchData.postData(`${apiUrl}/products`, {
      id: id,
      title: items.title,
      desc: items.description,
      price: `$ ${items.price}`,
      time: `${new Date().getHours()} hrs ago`,
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
      <div className="container">
        <div className="flex form-container">
          <Form
            onSubmitProps={handleSubmit}
            onImageChange={onImageChange}
            image={image}
            data={data}
          />
        </div>
        <div className="section-admin-products">
          <SectionFeature featureData={dashboardData} />
        </div>
      </div>
    </section>
  );
};

export default Admin;