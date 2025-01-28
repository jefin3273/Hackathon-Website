import React from "react"
import "./Modal.css"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-inner">
          {children}
          <button onClick={onClose} className="modal-close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal

