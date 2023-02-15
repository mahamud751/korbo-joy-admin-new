import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Course = ({ data }) => {
  const { course, course_category } = data;

  //main streams

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

  //get course

  const [data3, setData3] = useState([]);
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        `https://hcceco.com/api/get_course_types`
      ).then((response) => response.json());

      setData3(actualData.data);
    }
    getData();
  }, []);
  //edit
  const initialValues = {
    course_name_id: course.id,
    full_name: "",
    main_stream_id: course.main_stream_id,
    course_type_id: course.course_type_id,
    course_category_id: course_category ? course_category.id : "",
    eligibility: "",
    curse_duration: "",
    duration_period: "",
    duration_type: "",
    average_fees: "",
    average_salary: "",
    program_type_id: "",
    entrance_exam_details: "",
  };

  const onSubmit = (values) => {
    axios
      .post("https://hcceco.com/api/edit_course", values)
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
                  <div className="col-md-12 mb-3 form_sub_stream">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label3"
                    >
                      Course Type
                    </label>
                    <Field name="course_type_id" as="select">
                      {data3.map((data) => (
                        <option value={data.id}>{data.name}</option>
                      ))}
                    </Field>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label
                      htmlFor="inputState"
                      className="form-label profile_label3"
                    >
                      Course Name
                    </label>
                    <Field
                      type="text"
                      name="full_name"
                      placeholder={course.full_name}
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
                      Edit Course
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

export default Course;
