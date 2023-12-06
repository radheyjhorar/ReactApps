import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

const PageTabs = ({page}) => {

  const [value, setValue] = useState();

  return (
    <>
      <Tabs
        value={value}
        onChange={(value) => setValue(value)}
        // textColor="#fff"
        TabIndicatorProps={{ style: { background: "white" } }}
      >
        {page?.map((e) => (
          <Link to={e.path} style={{color: '#fff'}}>
            <Tab label={e.name} key={e.id}/>
          </Link>
        ))}
      </Tabs>
    </>
  )
}

export default PageTabs;