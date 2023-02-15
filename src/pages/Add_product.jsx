import axios from "axios";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Add_product = () => {
  const [files, setFiles] = useState("");
  const MySwal = withReactContent(Swal);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/category`, {
          mode: "cors",
        });
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data2 = {
      name: formData.get("name"),
      realPrice: formData.get("realPrice"),
      buyPrice: formData.get("buyPrice"),
      offerPrice: formData.get("offerPrice"),
      shortDescription: formData.get("shortDescription"),
      fullDescription: formData.get("fullDescription"),
      productType: formData.get("productType"),
      status: formData.get("status"),
      qtn: formData.get("qtn"),
      rating: formData.get("rating"),
      category: {
        id: formData.get("categoryId"),
      },
    };

    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dtpvtjiry/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const product = {
        ...data2,
        img: list,
      };

      await axios.post("http://localhost:5000/api/products", product);
      MySwal.fire("Good job!", "successfully added", "success");
    } catch (err) {
      MySwal.fire("Something Error Found.", "warning");
    }
  };
  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ background: "unset" }}>
        <div className="registration_div card p-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 form_sub_stream ">
                <label htmlFor="inputState" className="profile_label3">
                  Category
                </label>
                <select
                  name="categoryId"
                  id="inputState"
                  className="main_form w-100"
                >
                  <option selected>Select Category</option>
                  {data.map((pd) => (
                    <option key={pd._id} value={pd._id}>
                      {pd.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Name
                </label>
                <input
                  type="text"
                  className="main_form w-100"
                  name="name"
                  placeholder="Product Name"
                />
              </div>
              <div className="col-md-6 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Short Description
                </label>
                <input
                  type="text"
                  className="main_form w-100"
                  name="shortDescription"
                  placeholder="Short Description"
                />
              </div>
              <div className="col-md-6 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  FullDescription
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="fullDescription"
                  placeholder=" Full Description"
                />
              </div>
              <div className="col-md-4 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Price
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="realPrice"
                  placeholder="realPrice"
                />
              </div>
              <div className="col-md-4 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Buy Price
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="buyPrice"
                  placeholder="buyPrice"
                />
              </div>
              <div className="col-md-4 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Offer Price
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="offerPrice"
                  placeholder="offerPrice"
                />
              </div>
              <div className="col-md-6 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Quantity
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="qtn"
                  placeholder="Quantity"
                />
              </div>
              <div className="col-md-6 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Rating
                </label>

                <input
                  type="text"
                  className="main_form w-100"
                  name="rating"
                  placeholder="Rating"
                />
              </div>

              <div className="col-md-6 form_sub_stream">
                <label className="profile_label3">Product Type</label>
                <select
                  id="inputState"
                  name="productType"
                  className="main_form w-100"
                >
                  <option value="regular">Regular</option>
                  <option value="offer">Offer</option>
                  <option value="flashsale">FlashSale</option>
                </select>
              </div>
              <div className="col-md-6 form_sub_stream">
                <label className="profile_label3">Status</label>
                <select
                  id="inputState"
                  name="status"
                  className="main_form w-100"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="col-md-12 form_sub_stream">
                <label
                  htmlFor="inputState"
                  className="form-label profile_label3 "
                >
                  Image
                </label>
                <input
                  type="file"
                  id="file"
                  className="main_form w-100 p-0"
                  name="img"
                  onChange={(e) => setFiles(e.target.files)}
                  multiple
                />
              </div>
            </div>

            <div className="d-flex justify-content-center my-5">
              <button
                type="submit"
                className="profile_btn"
                style={{ width: 175 }}
                onSubmit={handleSubmit}
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_product;
