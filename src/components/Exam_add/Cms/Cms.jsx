import React from "react";
import { DefaultEditor } from "react-simple-wysiwyg";
import img from "../../../img/home/Icon ionic-ios-add-circle-outline.png";
import img2 from "../../../img/home/Icon material-photo.png";
import img3 from "../../../img/home/1.png";
import img4 from "../../../img/home/Icon material-edit.png";
import img5 from "../../../img/home/Icon material-delete-1.png";
import "./Cms.css";
const Cms = () => {
  const [html, setHtml] = React.useState("my <b>HTML</b>");

  function onChange(e) {
    setHtml(e.target.value);
  }
  return (
    <div>
      <div>
        <h6 className="cms_6">Exam About</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>
      <div className="mt-5">
        <h6 className="cms_6">Registration</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>
      <div className="mt-5">
        <h6 className="cms_6">Admit Card</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>
      <div className="mt-5">
        <h6 className="cms_6">Important Dates</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>
      <div className="mt-5">
        <h6 className="cms_6">Reservation</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>

      <div className="mt-5">
        <h6 className="cms_6">Exams Centres</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>

      <div className="mt-5">
        <h6 className="cms_6">Eligibility</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>
      <div className="mt-5">
        <h6 className="cms_6">Exam Pattern</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>
      <div className="mt-5">
        <h6 className="cms_6">Syllabus</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>
      <div className="mt-5">
        <h6 className="cms_6">Preparation Tips</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>
      <div className="mt-5">
        <h6 className="cms_6">Counselling</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>
      <div className="my-5">
        <h6 className="cms_6">Participating Colleges</h6>
        <DefaultEditor
          value={html}
          onChange={onChange}
          style={{ width: 600, height: 300 }}
        />
      </div>
      <h6 className="cms_6">FAQs</h6>
      <div className="faq_card ">
        <div className=" p-5">
          <div className="row">
            <div className="col-md-7">
              <DefaultEditor
                value={html}
                onChange={onChange}
                style={{ height: 150 }}
              />
            </div>
            <div className="col-md-5 form">
              <div className="d-flex cms_btn1">
                <select id="inputState" className="form-select">
                  <option selected>Short Answer</option>
                  <option>A</option>
                  <option>B</option>
                </select>
                <div>
                  <img src={img} alt="" className="ms-3" />
                  <img src={img2} alt="" className="ms-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="form" style={{ marginTop: 50 }}>
            <div className="d-flex ">
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Type Answer "
              />
              <div>
                <img src={img3} alt="" className="ms-3" />
                <img src={img2} alt="" className="ms-3" />
              </div>
            </div>
          </div>
          <div className="text-start mt-4">
            <a href="" className="cms_a">
              <img src={img4} alt="" className="ms-3" />
              <span className="ms-2">Edit</span>
            </a>
            <a href="" className="cms_a">
              <img src={img5} alt="" className="ms-3" />
              <span className="ms-2">Delete</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cms;
