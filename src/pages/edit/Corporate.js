import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Corporate = ({ data }) => {
  const { id, topic, pdf, category, sub_category, sub_topic } = data;
  const MySwal = withReactContent(Swal);
  //edit
  const initialValues = {
    corporate_id: id,
    category: category,
    sub_category: sub_category,
    topic: topic,
    sub_topic: sub_topic,
    file: pdf,
  };

  const onSubmit = (values) => {
    axios
      .post("https://hcceco.com/api/edit_corporate", values)
      .then((res) => {
        MySwal.fire("Good job!", "successfully edit", "success");
      })
      .catch((error) => {
        MySwal.fire("Something Error Found.", "warning");
      });
  };

  return (
    <div>
      <div className="row">
        <div>
          <div className="card-body">
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({ handleChange, handleBlur }) => (
                <Form>
                  <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label2 ms-3"
                    >
                      Select Category
                    </label>
                    <Field
                      type="text"
                      name="category"
                      placeholder={category}
                      className="form_edit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label2 ms-3"
                    >
                      Select Sub Category
                    </label>
                    <Field
                      type="text"
                      name="sub_category"
                      placeholder={sub_category}
                      className="form_edit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label2 ms-3"
                    >
                      Topic
                    </label>
                    <Field
                      type="text"
                      name="topic"
                      placeholder={topic}
                      className="form_edit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label2 ms-3"
                    >
                      Sub Topic
                    </label>
                    <Field
                      type="text"
                      name="sub_topic"
                      placeholder={sub_topic}
                      className="form_edit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="profile_btn"
                      style={{ width: 220 }}
                    >
                      Edit Corporate
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
