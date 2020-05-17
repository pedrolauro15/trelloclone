import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit2, FiMoreHorizontal } from 'react-icons/fi';

import AddModal from '../add-modal';
import CardFooter from '../add-card';

import './styles.css';

function List() {
  const [first, setFirst] = useState(true);
  const [isOppened, setIsOppened] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const toggle = () => {
    if(first){
      setFirst(false);
    }

    setIsOppened(!isOppened);
  }

  const toggleAdd = () => {
    setIsAdding(!isAdding);
  }

  return(
    <div className="list">
      
      <div className="card">
        <div className="card-header">
          <span>Título</span>
          <FiMoreHorizontal
            className="card-icon"
          />
        </div>

        <div className="card-content">
          <span className="content">Conteúdo</span>
          <FiEdit2 
            className="card-icon"
          />
        </div>

        <CardFooter isAdding={isAdding} onClick={toggleAdd}>
          <div className="foot">
            <form className="foot-form" onSubmit={(e) => {e.preventDefault()}}>
              <input placeholder="Insira um título para este cartão..." className="foot-input"/>

              <div className="foot-footer">
              <div className="left">
              <button className="foot-button" type="submit" className="foot-button">Adicionar Cartão</button>
                <div className="foot-close" onClick={toggleAdd}>
                  <AiOutlineClose />
                </div>
              </div>

              <div className="right">
                <FiMoreHorizontal />
              </div>
            </div>
            </form>
          </div>
        </CardFooter>
      </div>

     <AddModal first={first} isOpenned={isOppened} onClick={toggle}>
      <div className="modal">
        <form className="modal-form" onSubmit={(e) => {e.preventDefault()}}>
          <input 
            placeholder="Insira o título da lista..."
            className="modal-input"
          />
          <div className="modal-footer">
            <button className="modal-button" type="submit" className="modal-button">Adicionar Lista</button>
            <div className="modal-close" onClick={toggle}>
              <AiOutlineClose />
            </div>
          </div>
        </form>
      </div>
     </AddModal>
    </div>
  );
}

export default List;

//264 * 32 272 * 40