import React from 'react';
// import ReactModal from 'react-modal';

// const Confirm = (props) => {
// return (
//   <ReactModal
//     isOpen={props.isOpen || false}
//   >
//     <p>{props.message}</p>
//     <button onClick={()=>{
//       props.onOK();
      
//     }}> OK </button>
//     <button onClick={()=>{
//       props.onCancel();
//       // isOpen = false;
//     }}> Cancel </button>
//   </ReactModal>
// )};
// export default Confirm;

const Confirm = (props) => {
  return (
    <div>
      <p>{props.message}</p>
      <button onClick={()=>{
        props.onOK();
        
      }}> OK </button>
      <button onClick={()=>{
        props.onCancel();
        // isOpen = false;
      }}> Cancel </button>

    </div>
  )};
  export default Confirm;