import React, { useState } from "react";
import Form from "../../components/modules/Form";
import { fetchData } from "../../helper/fetchData";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const data = await res.json();

  return { props: { data } };
}
const Admin = ({ data }) => {
  const [image, setImage] = useState(data.image);
  let router = useRouter();
  let id = router.query.id;
  const handleSubmit = (items) => {
    fetchData.putData(`http://localhost:3000/api/products/${id}`, {
      id: id,
      title: items.title,
      desc: items.description,
      price: `$ ${items.price}`,
      time: `${new Date().getHours()} hrs ago`,
      image,
    });
    items && router.push("/dashboard");
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
    console.log(event.target.files[0]);
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
            id={id}
          />
        </div>
      </div>
    </section>
  );
};

export default Admin;
