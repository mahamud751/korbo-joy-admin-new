import React from "react";
import Cms from "./Cms/Cms";
import "./Exam_add.css";
import Exam_register from "./Exam_register/Exam_register";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Exam_add = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div>
        <div className="wrapper">
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper" style={{ background: "unset" }}>
            {/* Content Header (Page header) */}
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    TabIndicatorProps={{
                      style: { background: "#463196", height: 4 },
                    }}
                  >
                    <Tab
                      label="Exam Register"
                      {...a11yProps(0)}
                      sx={{ textTransform: "initial", fontWeight: 600 }}
                    />

                    <Tab
                      label="CMS"
                      {...a11yProps(1)}
                      sx={{ textTransform: "initial", fontWeight: 600 }}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Exam_register />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Cms />
                </TabPanel>
              </div>
            </section>
          </div>
          <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Exam_add;
