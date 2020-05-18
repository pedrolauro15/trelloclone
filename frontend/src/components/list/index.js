import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import Modal from 'react-modal';

import api from '../../services/api';

import AddModal from '../add-modal';
import Card from './card';
import CardFooter from '../add-card';

import './styles.css';

function List({user}) {
  const [cardTitle, setCardTitle] = useState('');
  const [resarch, setResarch] = useState(0);

  const [lists, setLists] = useState([]);

  const getListsFromUser = async () => {
    try {
      const response = await api.get('lists', {
        headers: {
          authorization: user
        }
      });

      console.log("HERE");
      console.log(response.data);

      if(response.data.length != undefined){
        setLists(response.data);
      }
  
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {getListsFromUser()}, []);


  const Lista = ({ list }) => {
    return(
      <div key={list.id} className="card">
        <div className="card-head">
          <span>{list.title}</span>
          <FiMoreHorizontal
            className="card-icon"
          />
        </div>

        <Card id={list.id} resarch={resarch}/>

        <CardFooter
          id={list.id}
          resarch={resarch}
        />
          
      </div>
    )
  }

  return(
    <div className="list">
      { 
        lists.map(list => (
          <Lista
            list={list}
            onChange={e => setCardTitle(e.target.value)}
            value={cardTitle}
          />
        ))
      }

     <AddModal
      getListsFromUser={getListsFromUser}
      id={user}
     />
      
    </div>
  );
}

export default List;

//264 * 32 272 * 40