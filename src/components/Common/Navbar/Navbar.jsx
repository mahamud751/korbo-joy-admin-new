import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../img/home/Group 1332.png";
import img2 from "../../../img/home/Icon awesome-caret-down-1.png";
import img3 from "../../../img/home/Ellipse 116.png";
import img6 from "../../../img/home/noun-stream-4701152.png";
import img7 from "../../../img/home/noun-stream-play-5240252.png";

import img9 from "../../../img/home/Group 1329.png";
import img13 from "../../../img/home/log.png";

import { UilSearch } from "@iconscout/react-unicons";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/signup");
      })
      .catch((err) => console.log(err));
  };

  if (location.pathname === "/signup") {
    return null;
  }
  return (
    <div>
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand">
          {/* Left navbar links */}
          <div className="nav_design ms-3">
            <ul className="navbar-nav" style={{ marginTop: -6 }}>
              <div className="navbar_bar">
                <li className="nav-link">
                  <a
                    className="nav-link"
                    data-widget="pushmenu"
                    href="#"
                    role="button"
                  >
                    <i className="fas fa-bars bars_1" />
                  </a>
                </li>
              </div>
            </ul>
            <ul
              style={{ zIndex: 1 }}
              className="nav navbar-nav navbar-right nav_bar_icons menu_right_li"
            >
              <li className="new_invoice_top_menu_link_li">
                <div className="logoSearch">
                  <div className="search">
                    <input type="text" placeholder="Search here" />
                    <div className="s-icon">
                      <UilSearch />
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="navbar-nav ml-lg-auto">
              {/* Navbar Search */}
              <div className="d-flex mt-lg-3">
                {" "}
                <li className="">
                  <a>
                    <img
                      src={img}
                      className="log_out_sm"
                      alt=""
                      style={{ marginTop: -2 }}
                    />
                  </a>
                </li>
                <li className="ms-2">
                  <a className="log_out_sm">
                    <span
                      className="navbar_span me-2 "
                      style={{ fontWeight: 600 }}
                    >
                      {" "}
                      Admin
                    </span>

                    <img src={img2} alt="" />
                  </a>

                  {/* <button className="password_btn">Change Password</button> */}
                </li>
              </div>

              <div className="mt-lg-3">
                <img src={img3} className="profile_image" alt="" />
              </div>
            </ul>
          </div>
          {/* Right navbar links */}
        </nav>

        <aside
          className="main-sidebar sidebar-dark-primary elevation-4 side_menubar"
          style={{
            position: "fixed",
          }}
        >
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div>
              <h6 className="navbar_logo_text text-center my-4">LOGO</h6>
            </div>

            {/* SidebarSearch Form */}
            {/* <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ background: "white" }}
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div> */}
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column myDIV"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <Link to={"/"}>
                  <li className="main_nav-link">
                    <a href="/" className="nav-link">
                      <i class="fa-sharp fa-solid fa-house span_text2"></i>

                      <div className="menu_flex">
                        <span className="span_text">Home</span>
                      </div>
                    </a>
                  </li>
                </Link>
                <Link to={"/add_category"}>
                  <li className="main_nav-link">
                    <a href="/add_category" className="nav-link">
                      <i class="fa-sharp fa-solid fa-building-columns span_text2"></i>
                      <div className="menu_flex">
                        <span className="span_text">Add Category</span>
                      </div>
                    </a>
                  </li>
                </Link>
                <Link to={"/category_list"}>
                  <li className="main_nav-link">
                    <a href="/category_list" className="nav-link">
                      <img style={{ width: 16 }} src={img6} alt="" />
                      <div className="menu_flex">
                        <span className="span_text">Category List</span>
                      </div>
                    </a>
                  </li>
                </Link>
                <Link to={"/add_product"}>
                  <li className="main_nav-link">
                    <a href="/add_product" className="nav-link">
                      <img style={{ width: 16 }} src={img7} alt="" />
                      <div className="menu_flex">
                        <span className="span_text">Add Product</span>
                      </div>
                    </a>
                  </li>
                </Link>
                <Link to={"/product_list"}>
                  <li className="main_nav-link">
                    <a href="/product_list" className="nav-link">
                      <i class="fa-solid fa-grip-lines span_text2"></i>
                      <div className="menu_flex">
                        <span className="span_text">Product List</span>
                      </div>
                    </a>
                  </li>
                </Link>
                <Link to={"/order"}>
                  <li className="main_nav-link">
                    <a href="/order" className="nav-link">
                      <img style={{ width: 16 }} src={img9} alt="" />
                      <div className="menu_flex">
                        <span className="span_text">Orders</span>
                      </div>
                    </a>
                  </li>
                </Link>

                <li className="main_nav-link password_sm">
                  <a className="nav-link" onClick={handleLogOut}>
                    <img style={{ width: 16 }} src={img13} alt="" />
                    <div className="menu_flex">
                      <span className="span_text">Log Out</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    </div>
  );
};

export default Navbar;
