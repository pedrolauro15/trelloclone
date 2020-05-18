import React, { useState, useEffect, useRef } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import api from '../../../services/api';

import './styles.css';

function Card({id, resarch}) {
  const [cards, setCards] = useState([]);
  const [isEdditing, setIsEddting] = useState(true);
  const inputRef = useRef('');

  const getCardsFromList = async () => {
    try {
      const response = await api.get('cards', {
        headers: {
          authorization: id
        }
      });

      //setCards(response.data);

      var i = 0;
      var tamanho = response.data.length;
      var vector = [];

      while(i < tamanho) {
        let newItem = {
          id: response.data[i].id,
          content: response.data[i].content,
          index: i,
          isEdditing: true
        };
        vector.push(newItem);
        i++;
      }

      setCards(vector);

      console.log(response.data);
      return(response.data);

    } catch (error) {
      alert(error);
    }
  }

  const handleDeleteCard = async (id) => {
    try {
      const del = await api.delete(`cards?id=${id}`);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }
  
  const handleEditCard = async (id, content) => {
    try {
      const data = {content};
      const edit = await api.put(`cards?id=${id}`, data);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }

  const handleEdit = (index) => {
    var newVector = cards;
    
    newVector[index].isEdditing = !newVector[index].isEdditing;
    setCards(newVector);
    setIsEddting(!isEdditing);

  }

  useEffect(()=>{getCardsFromList()}, []);
  useEffect(() => {getCardsFromList()}, [resarch]);

  return(
    <>
      {
        cards.map(card => (
          card.isEdditing ?
          <div key={card.id} className="card-content" onClick={()=>{handleEdit(card.index)}}>
            <span className="content">
              {card.content}
            </span>
            <FiEdit2 
              className="card-icon"
            />
          </div> : (
            <div key={card.id} className="edd">
              <input
                autoFocus
                className="edd-input"
                defaultValue={card.content}
                ref={inputRef}
              />
              <div>
                <button className="edit-button" onClick={()=>{handleEditCard(card.id, inputRef.current.value)}}>Confirmar</button>
                <button className="delete-button" onClick={()=>{handleDeleteCard(card.id)}}>Excluir</button>
              </div>
            </div>
          )
        ))
      }
    </>
  );
}

export default Card;
