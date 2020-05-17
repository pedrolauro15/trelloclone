import React from 'react';
import { FiFolderPlus, FiPlus } from 'react-icons/fi';

import './styles.css';

export default function CardFooter({isAdding, onClick, children}){
  if(isAdding){
    return(
      <>
        {children}
      </>
    );
  }
  else {
    return (
      <div className="add-card">
        <div className="add-card-button" onClick={onClick}>
          <FiPlus
            className="list-add-icon"
            color="#333"
            size={14}
          />
          <span>Adicionar um cartão</span>
        </div>

        <div className="model">
          <FiFolderPlus
            className="model-icon"
          />
        </div>
    
      </div>
    );
  } 
}