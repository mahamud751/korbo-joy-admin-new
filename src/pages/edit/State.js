import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const StateEdit = ({ data }) => {
  const { state } = data;
  const MySwal = withReactContent(Swal);
  //getData
  const [data2, setData2] = useState([]);
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        "https://hcceco.com/api/get_all_states_list"
      ).then((response) => response.json());

      setData2(actualData.data.slice(0, 10));
    }
    getData();
  }, []);
  //edit
  const initialValues = {
    location_state_id: state.id,
    name: [""],
    country_id: state.country_id,
    slug: "",
    status: state.status,
  };

  const onSubmit = (values) => {
    axios
      .post("https://hcceco.com/api/edit_location_state", values)
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
                      Country Name
                    </label>
                    <Field name="country_id" as="select">
                      {data2.map((data) => (
                        <option value={data.country ? data.country.id : ""}>
                          {data.country ? data.country.name : ""}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label3"
                    >
                      State Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder={state.name}
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
                      Edit State
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

export default StateEdit;
