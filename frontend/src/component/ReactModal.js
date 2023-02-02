import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormMoal from './FormMoal';

function ReactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
<div >
  

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body  className="border border-primary">
            <Modal.Header closeButton>
          <Modal.Title>heading</Modal.Title>
        </Modal.Header>
            <FormMoal></FormMoal>
            
            
            </Modal.Body>
        
      </Modal></div>
    </>
  );
}

 export default ReactModal;