import React from "react";
import Comment_list from "./Comment_list/Comment_list";
import Comment_report_list from "./Comment_report_list/Comment_report_list";
import "./Home.css";
import PostList from "./PostList/PostList";
import Post_report_list from "./Post_report_list/Post_report_list";
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

const Homes = () => {
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
                      label="Post List"
                      {...a11yProps(0)}
                      sx={{ textTransform: "initial", fontWeight: 600 }}
                    />
                    <Tab
                      label="Post Report List"
                      {...a11yProps(1)}
                      sx={{ textTransform: "initial", fontWeight: 600 }}
                    />
                    <Tab
                      label="Comment List"
                      {...a11yProps(2)}
                      sx={{ textTransform: "initial", fontWeight: 600 }}
                    />
                    <Tab
                      label="Comment Report List"
                      {...a11yProps(3)}
                      sx={{ textTransform: "initial", fontWeight: 600 }}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <PostList />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Post_report_list />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Comment_list />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Comment_report_list />
                </TabPanel>
              </div>
              {/* /.container-fluid */}
            </section>
            {/* /.content */}
          </div>
          {/* /.content-wrapper */}

          {/* Control Sidebar */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Homes;
