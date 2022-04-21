import React from 'react';
import {Modal, Button } from 'react-bootstrap';

const Confirm = (props) => {
  const confirmAction = () => props.confirmAction();
  const toggleModal = () => props.toggleModal();
  const isOpen = props.isOpen;
  const title = props.title;
  const message = props.message;
  
  return (
    <Modal show={isOpen} onHide={toggleModal} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body> {message} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>Cancel</Button>
        <Button variant="danger" 
          onClick={() => {
            confirmAction();
            toggleModal();
          }}
        > Yes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Confirm;
