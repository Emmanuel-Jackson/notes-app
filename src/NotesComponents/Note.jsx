import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import Modal from 'react-modal'

export default function Note({ title, text, setText, date, colors, handleEditNote, handleDeleteNote, id, handleTagsChange, tags }) { //Add edit feature later
  
  Modal.setAppElement('#root')
  const [deletemodalIsOpen, setDeleteModalIsOpen] = useState(false)


  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    console.log(text);
  };
  return (
    <>
    <Modal isOpen={deletemodalIsOpen} style={{overlay: {backgroundColor: 'rgba(0, 0, 0, .7)'}, content: {position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#FFF', padding: '10px', width: '40%', height: '18%', zIndex: 1000, borderRadius: '.3rem' }}}>
      <div className="body">
        <h3 style={{ textAlign: "center", fontWeight: "400" }}>Are you sure you want to delete your note?</h3>
        <div className="close-modal-btn-footer">
        <button className="close-modal-delete" onClick={() => handleDeleteNote(id)}>Delete</button>
        <button className="close-modal-cancel" onClick={() => setDeleteModalIsOpen(false)}>Cancel</button>
        </div>
      </div>
    </Modal>
    <div className="note" style={{ backgroundColor: colors }}>
    <h3>{title}</h3>   
      <p>{text}</p>
      <div className="note-footer">
        <small>{date}</small>
        <div>
        <MdDeleteForever onClick={() => setDeleteModalIsOpen(true)} className="delete-icon" size="1.3em" data-tip data-for="delete-tooltip" style={{ outline: "none", border: "none" }}/>
        </div>
      </div>
    </div>

    </>
  )
}