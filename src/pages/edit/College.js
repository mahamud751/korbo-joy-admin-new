import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const College = ({ data }) => {
  const { college_details } = data;
  const MySwal = withReactContent(Swal);
  //getData
  const [data2, setData2] = useState([]);
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        "https://hcceco.com/api/get_all_cities"
      ).then((response) => response.json());

      setData2(actualData.data.slice(0, 10));
    }
    getData();
  }, []);
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
    college_id: college_details.id,
    affiliation_id: college_details.affiliation_id,
    name: "",
    address: "college",
    mail_id: "college@gmail.com",
    college_type_id: "1",
    state_id: "1",
    city_id: "1",
    established_date: "10-10-2020",
  };

  const onSubmit = (values) => {
    axios
      .post("https://hcceco.com/api/edit_college", values)
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
                  {/* <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label2 ms-3"
                    >
                      Choose Affiliation
                    </label>
                    <Field
                      type="text"
                      name="affiliation_id"
                      placeholder={
                        college_details.affiliation
                          ? college_details.affiliation.name
                          : ""
                      }
                      className="form_edit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div> */}

                  <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label3"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder={college_details.name}
                      className="form_edit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-md-12 mb-3 form_sub_stream">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label3"
                    >
                      City
                    </label>
                    <Field name="city_id" as="select">
                      {data2.map((data) => (
                        <option value={data.city.id}>{data.city.name}</option>
                      ))}
                    </Field>
                  </div>
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

                  {/* <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label2 ms-3"
                    >
                      College Type
                    </label>
                    <Field
                      type="text"
                      name="college_type_id"
                      placeholder={college_type.name}
                      className="form_edit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div> */}
                  {/* <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label2 ms-3"
                    >
                      College State
                    </label>
                    <Field
                      type="text"
                      name="state_id"
                      placeholder={states.name}
                      className="form_edit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div> */}
                  {/* <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label2 ms-3"
                    >
                      College City
                    </label>
                    <Field
                      type="text"
                      name="city_id"
                      placeholder={cities.name}
                      className="form_edit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div> */}
                  {/* <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label2 ms-3"
                    >
                      College Established Date
                    </label>
                    <Field
                      type="text"
                      name="established_date"
                      placeholder={college_details.established_date}
                      className="form_edit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div> */}
                  {/* <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label2 ms-3"
                    >
                      College Image
                    </label>
                    <Field
                      type="text"
                      name="image"
                      placeholder={college_details.college_image}
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
                      College Logo
                    </label>
                    <Field
                      type="text"
                      name="logo"
                      placeholder={college_details.college_logo}
                      className="form_edit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div> */}

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="profile_btn"
                      style={{ width: 220 }}
                    >
                      Edit College
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

export default College;
