import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Navbar() {
  const [value, setValue] = React.useState();
  return (
    <div>
      <Box sx={{ backgroundColor: "#FFF", color: "#000" }} px={4}>
        <Tabs
          textColor="#fff"
          value={value}
          onChange={(e, value) => setValue(value)}
        >
          <Tab label="Item1" />
          <Tab label="Item2" />
          <Tab label="Item3" />
          <Tab label="Item4" />
          <Tab label="Item5" />
          <Tab label="Item6" />
          <Tab label="Item7" />
          <Tab label="Item8" />
        </Tabs>
      </Box>
    </div>
  );
}

export default Navbar;
