import React from 'react';
import Header from '../../components/header';
import SubHeader from '../../components/subheader';
import List from '../../components/list';

import './styles.css';

function Dashboard() {
  return(
    <div className="dashboard">
      <Header />

      <body>
        <SubHeader/>

        <List />
      </body>
    </div>
  );
}

export default Dashboard;