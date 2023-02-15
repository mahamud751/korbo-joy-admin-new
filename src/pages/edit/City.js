import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CityEdit = ({ data }) => {
  const { city } = data;
  const MySwal = withReactContent(Swal);
  //getData
  const [data3, setData3] = useState([]);
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        "https://hcceco.com/api/get_all_states_list"
      ).then((response) => response.json());

      setData3(actualData.data.slice(0, 10));
    }
    getData();
  }, []);
  //edit
  const initialValues = {
    name: [""],
    location_city_id: city.id,
    state_id: city.state_id,
  };

  const onSubmit = (values) => {
    axios
      .post("https://hcceco.com/api/edit_location_city", values)
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
                      State
                    </label>
                    <Field name="state_id" as="select">
                      {data3.map((data) => (
                        <option value={data.state.id}>{data.state.name}</option>
                      ))}
                    </Field>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label3"
                    >
                      City Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder={city.name}
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
                      Edit City
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

export default CityEdit;
