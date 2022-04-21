import React from 'react';
import {Modal, Button } from 'react-bootstrap';

const Confirm = (props) => {
  const deleteProgram = () => props.deleteProgram();
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
            deleteProgram();
            toggleModal();
          }}
        > Delete!</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Confirm;
