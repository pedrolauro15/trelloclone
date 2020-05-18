import React, { useState, useRef } from 'react';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import FadeIn from 'react-fade-in';

import api from '../../services/api';

import './styles.css';

function AddModal({id, getListsFromUser}) {
  const [first, setFirst] = useState(true);
  const [isOpenned, setIsOppened] = useState(true);
  const inputRef = useRef('');

  const toggle = () => {
    if(first == true){
      setFirst(false);
    }

    setIsOppened(!isOpenned);
  }

  const addLista = async (title) => {
    try {
      const data = {title};
      await api.post('lists', data, {
        headers: {
          authorization: id
        }
      });

      getListsFromUser();
      
    } catch (error) {
      alert(error)
    }
  }

  if(!isOpenned) {
    return(
      <FadeIn>
        <div className="modal">
          <form className="modal-form" onSubmit={(e)=>{e.preventDefault(); addLista(inputRef.current.value)}}>
            <input 
              placeholder="Insira o título da lista..."
              className="modal-input"
              autoFocus
              ref={inputRef}
            />
            <div className="modal-footer">
              <button className="modal-button" type="submit" className="modal-button">Adicionar Lista</button>
              <div className="modal-close" onClick={toggle}>
                <AiOutlineClose />
              </div>
            </div>
          </form>
        </div>
      </FadeIn>
    );
  } else {
    return (
      <FadeIn>
        <div className="list-add" onClick={toggle}>
          <FiPlus
            className="list-add-icon"
          />
          <span className="list-add-text">Adicionar outra lista</span>
        </div>
      </FadeIn>
    );
  }
}

export default AddModal;
