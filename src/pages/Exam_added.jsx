import React from "react";
import Main_table from "../components/Common/Navbar/Main_table";
import Exam_add from "../components/Exam_add/Exam_add";

const Exam_added = () => {
  Main_table();
  return (
    <div>
      <Exam_add />
    </div>
  );
};

export default Exam_added;
