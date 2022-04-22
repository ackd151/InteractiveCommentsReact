import React from "react";

import "./DeleteModal.css";

const DeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className='center-me'>
      <div className='delete-modal'>
        <h2>Delete comment</h2>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className='modal-btns'>
          <button className='btn-modal btn-cancel' onClick={onCancel}>
            no, cancel
          </button>
          <button className='btn-modal btn-confirm' onClick={onConfirm}>
            yes, delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
