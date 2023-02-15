import React, { useState } from "react";
import img from "../../img/college/Group 1560.png";
import img2 from "../../img/college/Group 1559.png";
import axios from "axios";
import { Formik, Form, Field, FieldArray } from "formik";
import "./Main_streams_add.css";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Main_stream_add = () => {
  const MySwal = withReactContent(Swal);

  //add
  const initialValues = {
    names: [""],
  };

  const onSubmit = (values) => {
    axios
      .post("https://hcceco.com/api/add_main_streams", values)
      .then((res) => {
        MySwal.fire("Good job!", "successfully added", "success");
      })
      .catch((error) => {
        MySwal.fire("Something Error Found.", "warning");
      });
  };
  return (
    <div className="wrapper">
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper" style={{ background: "unset" }}>
        <div className="registration_div">
          <h6 className="college_h6">Main Stream Name</h6>
          <hr style={{ height: "1px", background: "rgb(191 173 173)" }} />

          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div>
                <FieldArray name="names" className="">
                  {(fieldArrayProps) => {
                    console.log("fieldArrayProps", fieldArrayProps);
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { names } = values;
                    return (
                      <>
                        {names.map((pNname, index) => (
                          <div key={index} className="row g-3 p-3">
                            <Field
                              name={`names[${index}]`}
                              className="col-md-10 main_form"
                            />
                            <div className="col-md-1 mt-4">
                              {index > 0 && (
                                <>
                                  <img
                                    src={img2}
                                    alt=""
                                    onClick={() => remove(index)}
                                  />
                                </>
                              )}

                              <img
                                src={img}
                                alt=""
                                onClick={() => push("")}
                                className="mx-2 mt-1"
                              />
                            </div>
                          </div>
                        ))}
                      </>
                    );
                  }}
                </FieldArray>
              </div>

              <div className="my-5 profile_bt_sm">
                <button
                  type="submit"
                  className="profile_btn "
                  style={{ width: 175 }}
                >
                  Add Main Stream
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Main_stream_add;
