import React from 'react';
import Header from '../../components/header';
import SubHeader from '../../components/subheader';

import './styles.css';

function Dashboard() {
  return(
    <div className="dashboard">
      <Header />

      <body>
        <SubHeader/>
      </body>
    </div>
  );
}

export default Dashboard;