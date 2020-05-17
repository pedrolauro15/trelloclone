import React from 'react';
import { FiPlus } from 'react-icons/fi';
import FadeIn from 'react-fade-in';

import './styles.css';

function AddModal({isOpenned, first, children, onClick}) {

  if(first){
    return(
      <div className="list-add" onClick={onClick}>
        <FiPlus
          className="list-add-icon"
        />
        <span className="list-add-text">Adicionar outra lista</span>
      </div>
    );
  } else if(isOpenned) {
    return(
      <FadeIn>
        {children}
      </FadeIn>
    );
  } else {
    return (
      <FadeIn>
        <div className="list-add" onClick={onClick}>
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
