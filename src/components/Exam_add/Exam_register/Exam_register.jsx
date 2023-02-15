import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Exam_register.css";
const Exam_register = () => {
  const MySwal = withReactContent(Swal);
  //getData Main Stream
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        `https://hcceco.com/api/get_main_streams`
      ).then((response) => response.json());

      setData(actualData.data);
    }
    getData();
  }, []);

  //get_course_types
  const [data2, setData2] = useState([]);
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        `https://hcceco.com/api/get_course_types`
      ).then((response) => response.json());

      setData2(actualData.data);
    }
    getData();
  }, []);

  //add exam
  const initialValues = {
    main_stream_id: [""],
    course_type_id: "",
    full_name: "",
    exam_type: "",
    exam_mode: "",
    application_mode: "",
    application_date: "",
    exam_date: "",
    result_date: "",
    exam_logo: "",
  };

  const onSubmit = (values) => {
    axios
      .post("https://hcceco.com/api/add_exam", values)
      .then((res) => {
        MySwal.fire("Good job!", "successfully added", "success");
      })
      .catch((error) => {
        MySwal.fire("Something Error Found.", "warning");
      });
  };

  return (
    <div className="registration_div">
      {/* <div className="course_delete_btn">
        <button className="delete_btn">Delete</button>
      </div> */}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <div className="row g-3">
            <div className="col-md-6 form_sub_stream">
              <label htmlFor="inputState" className="form-label profile_label3">
                Main Stream
              </label>
              <Field name="main_stream_id" as="select">
                {data.map((data) => (
                  <option value={data.id}>{data.name}</option>
                ))}
              </Field>
            </div>

            <div className="col-md-6 form_sub_stream">
              <label htmlFor="inputState" className="form-label profile_label3">
                Course Type
              </label>
              <Field name="course_type_id" as="select">
                {data2.map((data) => (
                  <option value={data.id}>{data.name}</option>
                ))}
              </Field>
            </div>
            <div className="col-md-6 form_sub_stream mt-4">
              <label
                htmlFor="inputState"
                className="form-label profile_label3 "
              >
                Exam Name
              </label>

              <Field type="text" name="full_name" className="main_form w-100" />
            </div>
            <div className="col-md-6 form_sub_stream mt-4">
              <label htmlFor="inputState" className="form-label profile_label3">
                Exam Type
              </label>
              <Field name="exam_type" as="select">
                <option value="National">National</option>
                <option value="Public">Public</option>
              </Field>
            </div>

            <div className="col-md-6 form_sub_stream mt-4">
              <label htmlFor="inputState" className="form-label profile_label3">
                Exam Mode
              </label>
              <Field name="exam_mode" as="select">
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Both Offline & Online">
                  Both Offline & Online
                </option>
              </Field>
            </div>
            <div className="col-md-6 form_sub_stream mt-4">
              <label htmlFor="inputState" className="form-label profile_label3">
                Application Mode
              </label>
              <Field name="application_mode" as="select">
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Both Offline & Online">
                  Both Offline & Online
                </option>
              </Field>
            </div>

            <div className="col-md-6 form_sub_stream">
              <label
                htmlFor="inputState"
                className="form-label profile_label3 "
              >
                Exam Application Date
              </label>
              <Field
                type="text"
                name="application_date"
                className="main_form  w-100"
              />
            </div>
            <div className="col-md-6 form_sub_stream">
              <label
                htmlFor="inputState"
                className="form-label profile_label3 "
              >
                Exam Date
              </label>
              <Field
                type="text"
                name="exam_date"
                className="main_form  w-100"
              />
            </div>
            <div className="col-md-6 form_sub_stream">
              <label
                htmlFor="inputState"
                className="form-label profile_label3 "
              >
                Result Announcement Date
              </label>
              <Field
                type="text"
                name="result_date"
                className="main_form  w-100"
              />
            </div>
            <div className="col-md-6 form_sub_stream">
              <label
                htmlFor="inputState"
                className="form-label profile_label3 "
              >
                Exam Logo
              </label>
              <Field
                type="file"
                name="exam_logo"
                className="main_form w-100 p-0"
              />
            </div>

            <div className="d-flex justify-content-center align-items-center mb-5">
              <button
                type="submit"
                className="  profile_btn "
                style={{ width: 175 }}
              >
                Add Exam
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Exam_register;
