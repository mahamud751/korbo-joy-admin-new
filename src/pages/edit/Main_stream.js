import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./Main_steam.css";

const Main_stream = ({ data }) => {
  const { id, name } = data;

  const MySwal = withReactContent(Swal);
  //edit
  const initialValues = {
    names: [""],
    main_stream_id: id,
  };

  const onSubmit = (values) => {
    axios
      .post("https://hcceco.com/api/edit_main_stream", values)
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
                      className="form-label profile_label3"
                    >
                      Main Stream Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      className="form_edit"
                      placeholder={name}
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
                      Edit Main Stream
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

export default Main_stream;
