import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import SubHeader from '../../components/subheader';
import List from '../../components/list';

import api from '../../services/api';

import './styles.css';

const id=6;

function Dashboard() {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await api.get('users', {
        headers: {
          authorization: id,
        },
      });

      setUserData(response.data);

    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {getUserData()}, []);

  return(
    <div className="dashboard">
      <Header />

      <body>
        <SubHeader/>

        <List 
          user={id}
        />
      </body>
    </div>
  );
}

export default Dashboard;