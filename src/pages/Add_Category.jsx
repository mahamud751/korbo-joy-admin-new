import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Add_Category = () => {
  const [user, setUser] = useState([]);
  const [image, setImage] = useState(null);
  const MySwal = withReactContent(Swal);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...user };
    newInfo[field] = value;
    setUser(newInfo);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      ...user,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      data.append("upload_preset", "upload");
      newPost.image = filename;
      console.log(newPost);
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dsj99epbt/image/upload",
          data
        );
        MySwal.fire("Good job!", "successfully added", "success");

        const { url } = uploadRes.data;

        const newUser = {
          ...newPost,
          img: url,
        };
        await axios.post("http://localhost:5000/api/category", newUser);
        MySwal.fire("Good job!", "successfully added", "success");
      } catch (error) {
        MySwal.fire("Something Error Found.", "warning");
      }
    } else {
      await axios.post("http://localhost:5000/api/category", newPost);
    }
  };
  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ background: "unset" }}>
        <div className="registration_div card">
          <div className="row p-3">
            <div className="col-md-12 form_sub_stream">
              <label
                htmlFor="inputState"
                className="form-label profile_label3 "
              >
                Name
              </label>

              <input
                type="text"
                className="main_form  w-100"
                name="name"
                onBlur={handleOnBlur}
                placeholder="Category Name"
              />
            </div>
            <div className="col-md-12 form_sub_stream">
              <label
                htmlFor="inputState"
                className="form-label profile_label3 "
              >
                Image upload
              </label>

              <input
                type="file"
                className="main_form w-100"
                name="img"
                onChange={onImageChange}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center my-5">
            <button
              type="submit"
              className="profile_btn"
              style={{ width: 175 }}
              onClick={handleSubmit}
            >
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Category;
