import React from 'react';
import { RiStarSLine } from 'react-icons/ri';
import { TiLockClosed,TiArchive } from 'react-icons/ti';

import './styles.css';

function subheader() {
  return(
    <div className="sub-header">
      
      <section className="sub-left">
        <div className="sub-trello-box">
          <span>trello</span>
        </div>

        <div className="sub-box">
          <RiStarSLine
            className="sub-icon"
          />
        </div>

        <div className="divider" />

        <div className="sub-box">
          <span className="sub-title">Pessoal</span>
        </div>

        <div className="divider" />

        <div className="sub-box">
          <TiLockClosed
            className="sub-icon"
          />
          <span className="sub-title">Particular</span>
        </div>

        <div className="divider" />

        <div className="div-name">
          <div className="sub-name">
            LS
          </div>
        </div>

        <div className="sub-box">
          <span className="sub-title">Convidar</span>
        </div>

      </section>

      <section className="sub-right">
        <div className="sub-box">
          <TiLockClosed
            className="sub-icon"
          />
          <span className="sub-title">Buffer</span>
        </div>

        <div className="sub-box ml-4">
          <TiArchive
            className="sub-icon"
          />
          <span className="sub-title">Mostrar menu</span>
        </div>
      </section>
    </div>
  );
}

export default subheader;