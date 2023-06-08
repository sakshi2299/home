import React, { useState, memo } from "react";
import {  Link, useLocation } from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { getActiveTabIndex } from "../Helpers/utils";


const Header = ({ brandName, tabData }) => {
  const location = useLocation();
  const pathname = location?.pathname;
  let defaultActiveTab = getActiveTabIndex(tabData, pathname);
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <AppBar sx={{ background: "#5F9EA0" }}>
      <Toolbar>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {brandName}
        </Typography>
        <Tabs
          sx={{ marginLeft: "auto" }}
          value={activeTab}
          onChange={(e, tabIndex) => setActiveTab(tabIndex)}
        >
          {tabData &&
            tabData.map((tab) => {
              return (
                <Tab
                  key={`tab_${tab.id}`}
                  label={tab?.label}
                  component={Link}
                  to={tab?.path}
                  sx={tab.isActive ? { color: "#178582" } : { display: "none" }}
                />
              );
            })}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};


export default memo(Header);
