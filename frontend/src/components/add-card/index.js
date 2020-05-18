import React, { useState, useRef } from 'react';
import { FiFolderPlus, FiPlus, FiMoreHorizontal } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import api from '../../services/api';

import './styles.css';

export default function CardFooter({id}){
  const [oppened, setOppened] = useState(false);
  const inputRef = useRef('');
  const toggle = () => {
    setOppened(!oppened);
  }

  const addCard = async (content, id) => {
    const data = { content };

    try {
      const create = await api.post('cards', data, {
        headers: {
          authorization: id
        }
      });

      window.location.reload()
      
    } catch (error) {
      alert(error);
    }
  }

  if(oppened){
    return(
      <div className="foot">
        <form className="foot-form" onSubmit={(e)=>{e.preventDefault();addCard(inputRef.current.value, id)}}>
          <input 
            placeholder="Insira um título para este cartão..." 
            className="foot-input"
            autoFocus={true}
            ref={inputRef}
          />

          <div className="foot-footer">
            <div className="left">
            <button className="foot-button" type="submit" className="foot-button">Adicionar Cartão</button>
              <div className="foot-close" onClick={toggle}>
                <AiOutlineClose />
              </div>
            </div>

            <div className="right">
              <FiMoreHorizontal />
            </div>
          </div>
        </form>
      </div>
    );
  }
  else {
    return (
      <div className="add-card">
        <div className="add-card-button" onClick={toggle}>
          <FiPlus
            className="list-add-icon"
            color="#333"
            size={14}
          />
          <span>Adicionar um cartão</span>
        </div>

        <div className="model" onClick={toggle}>
          <FiFolderPlus
            className="model-icon"
          />
        </div>
    
      </div>
    );
  } 
}