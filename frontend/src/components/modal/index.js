import React from 'react';
import { Modal } from 'reactstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';

function MyModal({children, isOppened, toggle}) {
  return(
    <Modal isOpen={isOppened} toggle={toggle}>
      {children}
    </Modal>
  );
}

export default MyModal;