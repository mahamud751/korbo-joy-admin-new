import React, { useEffect, useState } from "react";
import img from "../../img/college/Icon material-delete.png";
import img3 from "../../img/college/Icon feather-edit.png";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import ToolkitProvider, {
  CSVExport,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from "react-router-dom";
import Exam from "../../pages/edit/Exam";

const MyExportCSV = (props) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <div>
      <button className="college_btn mb-3" onClick={handleClick}>
        Export to CSV
      </button>
    </div>
  );
};
const Exams = () => {
  const MySwal = withReactContent(Swal);

  //sub stream
  const [data, setData] = useState([]);

  const { ExportCSVButton } = CSVExport;

  const columns = [
    {
      dataField: "exam.id",
      text: "No",
    },

    {
      dataField: "main_stream.name",
      text: "Main Stream",
    },
    {
      dataField: "course_type.name",
      text: "Course Type",
    },
    {
      dataField: "exam.full_name",
      text: "Name",
    },
    {
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <>
            <div className="d-flex justify-content-center">
              <img
                src={img3}
                alt=""
                data-toggle="modal"
                data-target={`#loginModal${row.exam.id}`}
              />
              <img
                src={img}
                alt=""
                className="ms-3"
                onClick={() => handleCategory(row.exam.id)}
              />
            </div>

            <div
              className="modal fade"
              id={`loginModal${row.exam.id}`}
              tabIndex="{-1}"
              role="dialog"
              aria-labelledby="loginModal"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <Exam data={row} />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      },
    },
  ];
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: "Last",
    firstPageText: "First",
    nextPageText: "Next",
    prePageText: "Previous",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://hcceco.com/api/get_all_exams`,
          { mode: "cors" }
        );
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  //delete
  const [products, setProducts] = useState(data);
  const handleCategory = async (id) => {
    const formData = { examsbkp_id: id };
    const response = await axios
      .post("https://hcceco.com/api/delete_exam", formData)
      .then((data) => {
        const remainItem = products.filter((item) => item.id !== id);
        setProducts(remainItem);
        MySwal.fire("Good job!", "successfully delete", "success");
      })
      .catch((error) => {
        MySwal.fire("Something Error Found.", "warning");
      });
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper" style={{ background: "unset" }}>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <h6 className="college_h6">exams List</h6>
              </div>
              <div className="col-md-5">
                <div className="corporate_addNew_btn">
                  <Link to={"/exam_add"}>
                    <button className="college_btn2 ms-4">Add New</button>
                  </Link>
                </div>
              </div>
            </div>
            <hr style={{ height: "1px", background: "rgb(191 173 173)" }} />
            <div className="card">
              <div className="card-body card_body_sm">
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="exam.id"
                    columns={columns}
                    data={data}
                    pagination={pagination}
                    exportCSV
                  >
                    {(props) => (
                      <React.Fragment>
                        <MyExportCSV {...props.csvProps} />
                        <BootstrapTable
                          bootstrap4
                          keyField="exam.id"
                          columns={columns}
                          data={data}
                          pagination={pagination}
                          {...props.baseProps}
                        />
                      </React.Fragment>
                    )}
                  </ToolkitProvider>
                </>
              </div>
            </div>
            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}

      {/* Control Sidebar */}
    </div>
  );
};

export default Exams;
