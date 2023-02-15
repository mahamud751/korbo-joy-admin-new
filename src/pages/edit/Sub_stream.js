import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./Main_steam.css";

const Sub_stream = ({ data }) => {
  const { sub_stream, main_stream } = data;
  const [data2, setData2] = useState([]);
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        `https://hcceco.com/api/get_main_streams`
      ).then((response) => response.json());

      setData2(actualData.data);
    }
    getData();
  }, []);
  const MySwal = withReactContent(Swal);
  //edit
  const initialValues = {
    name: [""],

    main_stream_id: sub_stream.main_stream_id,
    sub_stream_id: sub_stream.id,
  };

  const onSubmit = (values) => {
    axios
      .post("https://hcceco.com/api/edit_sub_stream", values)
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
                  <div className="col-md-12 mb-3 form_sub_stream">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label3"
                    >
                      Main Stream Name
                    </label>
                    <Field name="main_stream_id" as="select">
                      {data2.map((data) => (
                        <option value={data.id}>{data.name}</option>
                      ))}
                    </Field>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label3"
                    >
                      Sub Stream Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder={sub_stream.name}
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
                      Edit Sub Stream
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

export default Sub_stream;
